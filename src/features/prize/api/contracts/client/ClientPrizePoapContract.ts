import { NOT_FOUND_CONNECTED_ADDRESS } from "@/src/const/errormessage";
import { BasePrizePoapContract } from "@/src/features/prize/api/contracts/BasePrizePoapContract";
import { ClientWallet } from "@/src/lib/wallet";
import { PrizePoap, PrizePoap__factory } from "@/types/ethers-contracts";
import { ethers } from "ethers";

export class ClientPrizePoapContract extends BasePrizePoapContract {
  private static _instance: ClientPrizePoapContract;
  private _writer?: PrizePoap;

  private constructor(
    private readonly _wallet: ClientWallet,
    private readonly _reader: PrizePoap,
  ) {
    super();
  }

  /**
   * インスタンスの取得
   * @return {Promise<ClientPrizePoapContract>} インスタンス
   */
  public static async instance(): Promise<ClientPrizePoapContract> {
    if (!this._instance) {
      const wallet = await ClientWallet.instance();
      const reader = PrizePoap__factory.connect(
        this.contractAddress,
        wallet.provider,
      );
      this._instance = new ClientPrizePoapContract(wallet, reader);
    }
    return this._instance;
  }

  /**
   * mint
   * @param prizeId 報酬ID
   * @return {Promise<ethers.ContractTransactionReceipt | null>} レシート
   */
  mint = async (
    prizeId: number,
  ): Promise<ethers.ContractTransactionReceipt | null> => {
    await this._beforeWrite();
    return await (await this._writer!.mint(prizeId)).wait();
  };

  /**
   * burn
   * @param prizeId 報酬ID
   * @return {Promise<ethers.ContractTransactionReceipt | null>} レシート
   */
  burn = async (
    prizeId: number,
  ): Promise<ethers.ContractTransactionReceipt | null> => {
    await this._beforeWrite();
    return await (await this._writer!.burn(prizeId)).wait();
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
    this._writer = PrizePoap__factory.connect(results[0], results[1]);
  };
}
