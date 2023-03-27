import { BaseCommunityPassportContract } from "@/src/features/passport/api/contracts/BaseCommunityPassportContract";
import { PassportStruct } from "@/src/features/passport/types/PassportStruct";
import { ServerWallet } from "@/src/lib/wallet";
import {
  CommunityPassport,
  CommunityPassport__factory,
} from "@/types/ethers-contracts";

export class ServerCommunityPassportContract extends BaseCommunityPassportContract {
  constructor(private readonly _communityPassport: CommunityPassport) {
    super();
  }

  /**
   * インスタンスの取得
   * @return {ServerCommunityPassportContract} インスタンス
   */
  public static instance(
    rpcURL: string,
    contractAddress: string,
  ): ServerCommunityPassportContract {
    const wallet = ServerWallet.instance(rpcURL);
    const communityPassport = CommunityPassport__factory.connect(
      contractAddress,
      wallet.signer,
    );
    return new ServerCommunityPassportContract(communityPassport);
  }

  /**
   * ユーザーの総数を取得
   * @return {Promise<number>} ユーザーの総数
   */
  getAllUserListLength = async (): Promise<number> => {
    return Number(await this._communityPassport.totalSupply());
  };

  /**
   * 任意の数だけユーザーを取得
   * @return {Promise<string[]>} ユーザーリスト
   */
  getUserList = async (page: number, pageSize: number): Promise<string[]> => {
    return await this._communityPassport.getUserList(page, pageSize);
  };

  /**
   * 全ユーザーリストを取得
   * @return {Promise<string[]>} 全ユーザーリスト
   */
  getAllUserList = async (): Promise<string[]> => {
    const userLength = await this.getAllUserListLength();
    const promiseList = [];
    let page = 0;
    const pageSize = 1000;
    while (true) {
      promiseList.push(this.getUserList(page, pageSize));
      page++;
      if (page * pageSize >= userLength) break;
    }
    const results = await Promise.all(promiseList);
    const userList: string[] = [];
    for (let i = 0; i < results.length; i++) {
      userList.concat(results[i]);
    }
    return userList;
  };

  /**
   * 任意の数だけパスポートを取得
   * @return {Promise<PassportStruct[]>} パスポートリスト
   */
  getPassportList = async (
    page: number,
    pageSize: number,
  ): Promise<PassportStruct[]> => {
    const data = await this._communityPassport.getPassportList(page, pageSize);
    const passportList: PassportStruct[] = [];
    for (let i = 0; i < data.length; i++) {
      const passport = this.toPassportStruct(data[i]);
      passportList.push(passport);
    }
    return passportList;
  };

  /**
   * 全パスポートリストを取得
   * @return {Promise<PassportStruct[]>} 全パスポートリスト
   */
  getAllPassportList = async (): Promise<PassportStruct[]> => {
    const userLength = await this.getAllUserListLength();
    const promiseList = [];
    let page = 0;
    const pageSize = 1000;
    while (true) {
      promiseList.push(this.getPassportList(page, pageSize));
      page++;
      if (page * pageSize >= userLength) break;
    }
    const results = await Promise.all(promiseList);
    let passportList: PassportStruct[] = [];
    for (let i = 0; i < results.length; i++) {
      passportList = passportList.concat(results[i]);
    }
    return passportList;
  };
}
