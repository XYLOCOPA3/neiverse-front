import { NOT_FOUND_CONNECTED_ADDRESS } from "@/src/const/errormessage";
import { BaseCommunityPassportContract } from "@/src/features/passport/api/contracts/BaseCommunityPassportContract";
import { PassportStruct } from "@/src/features/passport/types/PassportStruct";
import { ClientWallet } from "@/src/lib/wallet";
import {
  CommunityPassport,
  CommunityPassport__factory,
} from "@/types/ethers-contracts";
import { ethers } from "ethers";

export class ClientCommunityPassportContract extends BaseCommunityPassportContract {
  private _writer?: CommunityPassport;

  private constructor(
    private readonly _wallet: ClientWallet,
    private readonly _reader: CommunityPassport,
    public readonly contractAddress: string,
  ) {
    super();
  }

  /**
   * インスタンスの取得
   * @param contractAddress コントラクトアドレス
   * @return {Promise<ClientCommunityPassportContract>} インスタンス
   */
  public static async instance(
    contractAddress: string,
  ): Promise<ClientCommunityPassportContract> {
    const wallet = await ClientWallet.instance();
    const reader = CommunityPassport__factory.connect(
      contractAddress,
      wallet.provider,
    );
    return new ClientCommunityPassportContract(wallet, reader, contractAddress);
  }

  /**
   * CommunityPassportをmint
   * @return {Promise<ethers.ContractTransactionReceipt | null>} 書き込み結果
   */
  mint = async (): Promise<ethers.ContractTransactionReceipt | null> => {
    await this._beforeWrite();
    return await (await this._writer!.mint()).wait();
  };

  /**
   * CommunityPassportをburn
   * @return {Promise<ethers.ContractTransactionReceipt | null>} 書き込み結果
   */
  burn = async (): Promise<ethers.ContractTransactionReceipt | null> => {
    await this._beforeWrite();
    return await (await this._writer!.burn()).wait();
  };

  /**
   * パスポートを取得
   * @param userId ユーザーID
   * @return {Promise<PassportStruct>} パスポート
   */
  getPassport = async (userId: string): Promise<PassportStruct> => {
    return this.toPassportStruct(await this._reader.getPassport(userId));
  };

  /**
   * 書き込み前処理
   */
  private _beforeWrite = async (): Promise<void> => {
    const connectedAddressList = await this._wallet.getConnectedAddresses();
    if (connectedAddressList.length === 0)
      throw Error(NOT_FOUND_CONNECTED_ADDRESS);
    if (this._writer !== undefined) return;
    const results = await Promise.all([
      this._reader.getAddress(),
      this._wallet.getSigner(),
    ]);
    this._writer = CommunityPassport__factory.connect(results[0], results[1]);
  };
}
