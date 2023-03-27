import { PRIZE_POAP_ADDRESS } from "@/src/const/contract";
import { PrizeStruct } from "@/src/features/prize/types/PrizeStruct";
import { IPrizePoap } from "@/types/ethers-contracts/PrizePoap";

export class BasePrizePoapContract {
  public static readonly contractAddress = PRIZE_POAP_ADDRESS;

  constructor() {}

  /**
   * toPrizeStruct
   * @param data コントラクトから受け取ったプライズ情報
   * @return {PrizeStruct} PrizeStruct
   */
  toPrizeStruct = (data: IPrizePoap.PrizeStructOutput): PrizeStruct => {
    const prize: PrizeStruct = {
      tokenURI: data.tokenURI,
      communityId: Number(data.communityId),
      requiredExp: Number(data.requiredExp),
      requiredQuestId: Number(data.requiredQuestId),
      questRequired: data.questRequired,
      closed: data.closed,
    };
    return prize;
  };
}
