import { BaseQuestBoardContract } from "@/src/features/quest/api/contracts/BaseQuestBoardContract";
import { QuestStruct } from "@/src/features/quest/types/QuestContract";
import { ServerWallet } from "@/src/lib/wallet";
import { QuestBoard, QuestBoard__factory } from "@/types/ethers-contracts";

export class ServerQuestBoardContract extends BaseQuestBoardContract {
  private static _instance: ServerQuestBoardContract;

  private constructor(private readonly _questBoard: QuestBoard) {
    super();
  }

  /**
   * インスタンスの取得
   * @param rpcURL RPC URL
   * @return {Promise<ServerQuestBoardContract>} インスタンス
   */
  public static instance(rpcURL: string): ServerQuestBoardContract {
    if (!this._instance) {
      const wallet = ServerWallet.instance(rpcURL);
      const questBoard = QuestBoard__factory.connect(
        this.contractAddress,
        wallet.signer,
      );
      this._instance = new ServerQuestBoardContract(questBoard);
    }
    return this._instance;
  }

  /**
   * 総クエスト数を取得
   * @return {Promise<number>} 総クエスト数
   */
  getQuestListLength = async (): Promise<number> => {
    return Number(await this._questBoard.questSupply());
  };

  /**
   * 総クエスト数からクエストID配列へ変換
   * @param questListLength 総クエスト数
   * @return {string[]} クエストID配列
   */
  toQuestIds = (questListLength: number): string[] => {
    const questIds: string[] = [];
    for (let i = 0; i < questListLength; i++) {
      questIds.push(i.toString());
    }
    return questIds;
  };

  /**
   * 任意の数だけクエストリストを取得
   * @param page ページ
   * @param pageSize ページサイズ
   * @return {Promise<QuestStruct[]>} クエストリスト
   */
  getQuestList = async (
    page: number,
    pageSize: number,
  ): Promise<QuestStruct[]> => {
    const data = await this._questBoard.getQuestList(page, pageSize);
    const questList: QuestStruct[] = [];
    for (let i = 0; i < data.length; i++) {
      questList.push(this.toQuestStruct(data[i]));
    }
    return questList;
  };

  /**
   * 全クエストリストを取得
   * @return {Promise<QuestStruct[]>} 全クエストリスト
   */
  getAllQuestList = async (): Promise<QuestStruct[]> => {
    const questLength = await this.getQuestListLength();
    const promiseList = [];
    let page = 0;
    const pageSize = 1000;
    while (true) {
      promiseList.push(this.getQuestList(page, pageSize));
      page++;
      if (page * pageSize >= questLength) break;
    }
    const results = await Promise.all(promiseList);
    let questList: QuestStruct[] = [];
    for (let i = 0; i < results.length; i++) {
      questList = questList.concat(results[i]);
    }
    return questList;
  };

  /**
   * クエストがclaim可能か一括チェック
   * @param userId ユーザーアドレス
   * @param questIds クエストID配列
   * @return {Promise<boolean[]>} クエストclaim可否リスト
   */
  checkBatchClaimable = async (
    userId: string,
    questIds: string[],
  ): Promise<boolean[]> => {
    if (userId === "") {
      const questClaimable: boolean[] = [];
      for (let i = 0; i < questIds.length; i++) {
        questClaimable.push(false);
      }
      return questClaimable;
    }
    const questIdsNumber: number[] = [];
    const userList: string[] = [];
    for (let i = 0; i < questIds.length; i++) {
      userList.push(userId);
      questIdsNumber.push(Number(questIds[i]));
    }
    return await this._questBoard.checkBatchCompleted(questIdsNumber, userList);
  };

  /**
   * クエストが既にclaimされているか一括チェック
   * @param userId ユーザーアドレス
   * @param questIds クエストID配列
   * @return {Promise<boolean[]>} クエストclaim済みかリスト
   */
  checkBatchClaimed = async (
    userId: string,
    questIds: string[],
  ): Promise<boolean[]> => {
    let questClaimed: boolean[] = [];
    if (userId === "") {
      for (let i = 0; i < questIds.length; i++) {
        questClaimed.push(false);
      }
      return questClaimed;
    }
    const questIdsNumber: number[] = [];
    const userList: string[] = [];
    for (let i = 0; i < questIds.length; i++) {
      userList.push(userId);
      questIdsNumber.push(Number(questIds[i]));
    }
    const data = await this._questBoard.balanceOfBatch(
      userList,
      questIdsNumber,
    );
    for (let i = 0; i < data.length; i++) {
      questClaimed.push(data[i] > 0);
    }
    return questClaimed;
  };
}
