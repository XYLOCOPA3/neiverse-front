import { NOT_FOUND_CONNECTED_ADDRESS } from "@/src/const/errormessage";
import { BaseCommunityPortalContract } from "@/src/features/community/api/contracts/BaseCommunityPortalContract";
import { ClientWallet } from "@/src/lib/wallet";
import {
  CommunityPortal,
  CommunityPortal__factory,
} from "@/types/ethers-contracts";

export class ClientCommunityPortalContract extends BaseCommunityPortalContract {
  private static _instance: ClientCommunityPortalContract;
  private _writer?: CommunityPortal;

  private constructor(
    private readonly _wallet: ClientWallet,
    private readonly _reader: CommunityPortal,
  ) {
    super();
  }

  /**
   * インスタンスの取得
   * @return {Promise<ClientCommunityPortalContract>} インスタンス
   */
  public static async instance(): Promise<ClientCommunityPortalContract> {
    if (!this._instance) {
      const wallet = await ClientWallet.instance();
      const reader = CommunityPortal__factory.connect(
        this.contractAddress,
        wallet.provider,
      );
      this._instance = new ClientCommunityPortalContract(wallet, reader);
    }
    return this._instance;
  }

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
    this._writer = CommunityPortal__factory.connect(results[0], results[1]);
  };
}
