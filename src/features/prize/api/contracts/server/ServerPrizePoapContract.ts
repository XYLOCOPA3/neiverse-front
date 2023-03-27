import { BasePrizePoapContract } from "@/src/features/prize/api/contracts/BasePrizePoapContract";
import { PrizeStruct } from "@/src/features/prize/types/PrizeStruct";
import { ServerWallet } from "@/src/lib/wallet";
import { PrizePoap, PrizePoap__factory } from "@/types/ethers-contracts";

export class ServerPrizePoapContract extends BasePrizePoapContract {
  private static _instance: ServerPrizePoapContract;

  private constructor(private readonly _prizePoap: PrizePoap) {
    super();
  }

  /**
   * インスタンスの取得
   * @param rpcURL RPC URL
   * @return {Promise<ServerPrizePoapContract>} インスタンス
   */
  public static instance(rpcURL: string): ServerPrizePoapContract {
    if (!this._instance) {
      const wallet = ServerWallet.instance(rpcURL);
      const prizePoap = PrizePoap__factory.connect(
        this.contractAddress,
        wallet.signer,
      );
      this._instance = new ServerPrizePoapContract(prizePoap);
    }
    return this._instance;
  }

  /**
   * baseURLを取得
   * @return {Promise<string>} baseURL
   */
  getBaseURL = async (): Promise<string> => {
    return await this._prizePoap.baseURI();
  };

  /**
   * 総プライズ数を取得
   * @return {Promise<number>} 総プライズ数
   */
  getPrizeListLength = async (): Promise<number> => {
    return Number(await this._prizePoap.getPrizeListLength());
  };

  /**
   * 総プライズ数からプライズID配列へ変換
   * @param prizeListLength 総プライズ数
   * @return {string[]} プライズID配列
   */
  toPrizeIds = (prizeListLength: number): string[] => {
    const prizeIds: string[] = [];
    for (let i = 0; i < prizeListLength; i++) {
      prizeIds.push(i.toString());
    }
    return prizeIds;
  };

  /**
   * 任意の数だけプライズリストを取得
   * @param page ページ
   * @param pageSize ページサイズ
   * @return {Promise<PrizeStruct[]>} プライズリスト
   */
  getPrizeList = async (
    page: number,
    pageSize: number,
  ): Promise<PrizeStruct[]> => {
    const data = await this._prizePoap.getPrizeList(page, pageSize);
    const prizeList: PrizeStruct[] = [];
    for (let i = 0; i < data.length; i++) {
      prizeList.push(this.toPrizeStruct(data[i]));
    }
    return prizeList;
  };

  /**
   * 全プライズリストを取得
   * @return {Promise<PrizeStruct[]>} 全プライズリスト
   */
  getAllPrizeList = async (): Promise<PrizeStruct[]> => {
    const [prizeLength, baseURL] = await Promise.all([
      this.getPrizeListLength(),
      this.getBaseURL(),
    ]);
    const promiseList = [];
    let page = 0;
    const pageSize = 1000;
    while (true) {
      promiseList.push(this.getPrizeList(page, pageSize));
      page++;
      if (page * pageSize >= prizeLength) break;
    }
    const results = await Promise.all(promiseList);
    const prizeList: PrizeStruct[] = [];
    for (let i = 0; i < results.length; i++) {
      for (let j = 0; j < results[i].length; j++) {
        const prize = results[i][j];
        prize.tokenURI = baseURL + prize.tokenURI;
        prizeList.push(prize);
      }
    }
    return prizeList;
  };

  /**
   * プライズがclaim可能か一括チェック
   * @param userId ユーザーID
   * @param prizeIds プライズID配列
   * @return {Promise<boolean[]>} プライズclaim可否リスト
   */
  checkBatchObtainable = async (
    userId: string,
    prizeIds: string[],
  ): Promise<boolean[]> => {
    if (userId === "") {
      const prizeObtainable: boolean[] = [];
      for (let i = 0; i < prizeIds.length; i++) {
        prizeObtainable.push(false);
      }
      return prizeObtainable;
    }
    const prizeIdsNumber: number[] = [];
    const userList: string[] = [];
    for (let i = 0; i < prizeIds.length; i++) {
      userList.push(userId);
      prizeIdsNumber.push(Number(prizeIds[i]));
    }
    return await this._prizePoap.checkBatchObtainable(userList, prizeIds);
  };

  /**
   * プライズが既にclaimされているか一括チェック
   * @param userId ユーザーID
   * @param prizeIds プライズID配列
   * @return {Promise<boolean[]>} プライズclaim済みかリスト
   */
  checkBatchObtained = async (
    userId: string,
    prizeIds: string[],
  ): Promise<boolean[]> => {
    let prizeObtained: boolean[] = [];
    if (userId === "") {
      for (let i = 0; i < prizeIds.length; i++) {
        prizeObtained.push(false);
      }
      return prizeObtained;
    }
    const prizeIdsNumber: number[] = [];
    const userList: string[] = [];
    for (let i = 0; i < prizeIds.length; i++) {
      userList.push(userId);
      prizeIdsNumber.push(Number(prizeIds[i]));
    }
    const data = await this._prizePoap.balanceOfBatch(userList, prizeIds);
    for (let i = 0; i < data.length; i++) {
      prizeObtained.push(data[i] > 0);
    }
    return prizeObtained;
  };
}
