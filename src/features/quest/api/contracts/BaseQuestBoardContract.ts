import { QUEST_BOARD_ADDRESS } from "@/src/const/contract";
import { QuestStruct } from "@/src/features/quest/types/QuestContract";
import { IQuestBoard } from "@/types/ethers-contracts/QuestBoard";

export class BaseQuestBoardContract {
  public static readonly contractAddress = QUEST_BOARD_ADDRESS;

  constructor() {}

  /**
   * type Quest へ変換
   * @param data コントラクトから受け取ったクエスト情報
   * @return {QuestStruct} Quest
   */
  toQuestStruct = (data: IQuestBoard.QuestStructOutput): QuestStruct => {
    const quest: QuestStruct = {
      title: data.title,
      questURI: data.questURI,
      questCheckerAddress: data.questCheckerAddress,
      communityId: Number(data.communityId),
      obtainableExp: Number(data.obtainableExp),
      obtainablePrizeId: Number(data.obtainablePrizeId),
      prizeObtainable: data.prizeObtainable,
      closed: data.closed,
    };
    return quest;
  };
}
