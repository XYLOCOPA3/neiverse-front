import { BaseCommunityPortalContract } from "@/src/features/community/api/contracts/BaseCommunityPortalContract";
import { CommunityStruct } from "@/src/features/community/types/CommunityStruct";
import { ServerWallet } from "@/src/lib/wallet";
import {
  CommunityPortal,
  CommunityPortal__factory,
} from "@/types/ethers-contracts";

export class ServerCommunityPortalContract extends BaseCommunityPortalContract {
  private static _instance: ServerCommunityPortalContract;

  private constructor(private readonly _communityPortal: CommunityPortal) {
    super();
  }

  /**
   * インスタンスの取得
   * @param rpcURL RPC URL
   * @return {ServerCommunityPortalContract} インスタンス
   */
  public static instance(rpcURL: string): ServerCommunityPortalContract {
    if (!this._instance) {
      const wallet = ServerWallet.instance(rpcURL);
      const communityPortal = CommunityPortal__factory.connect(
        this.contractAddress,
        wallet.signer,
      );
      this._instance = new ServerCommunityPortalContract(communityPortal);
    }
    return this._instance;
  }

  /**
   * 総コミュニティ数を取得
   * @return {Promise<number>} 総コミュニティ数
   */
  getCommunityListLength = async (): Promise<number> => {
    return Number(await this._communityPortal.communitySupply());
  };

  /**
   * 任意の数だけコミュニティリストを取得
   * @param page ページ
   * @param pageSize ページサイズ
   * @return {Promise<CommunityStruct[]>} コミュニティリスト
   */
  getCommunityList = async (
    page: number = 0,
    pageSize: number = 100,
  ): Promise<CommunityStruct[]> => {
    const data = await this._communityPortal.getCommunityList(page, pageSize);
    const communityList: CommunityStruct[] = [];
    for (let i = 0; i < data.length; i++) {
      communityList.push(this.toCommunityStruct(data[i]));
    }
    return communityList;
  };

  /**
   * 全コミュニティリストを取得
   * @return {Promise<CommunityStruct[]>} 全コミュニティリスト
   */
  getAllCommunityList = async (): Promise<CommunityStruct[]> => {
    const communityLength = await this.getCommunityListLength();
    const promiseList = [];
    let page = 0;
    const pageSize = 1000;
    while (true) {
      promiseList.push(this.getCommunityList(page, pageSize));
      page++;
      if (page * pageSize >= communityLength) break;
    }
    const results = await Promise.all(promiseList);
    let communityList: CommunityStruct[] = [];
    for (let i = 0; i < results.length; i++) {
      communityList = communityList.concat(results[i]);
    }
    return communityList;
  };
}
