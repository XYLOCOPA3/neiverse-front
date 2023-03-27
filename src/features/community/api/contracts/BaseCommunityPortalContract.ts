import { COMMUNITY_PORTAL_ADDRESS } from "@/src/const/contract";
import { CommunityStruct } from "@/src/features/community/types";
import { ICommunityPortal } from "@/types/ethers-contracts/CommunityPortal";

export class BaseCommunityPortalContract {
  public static readonly contractAddress = COMMUNITY_PORTAL_ADDRESS;

  constructor() {}

  /**
   * toCommunityStruct
   * @param data ICommunityPortal.CommunityStructOutput
   * @return {CommunityStruct} Community
   */
  toCommunityStruct = (
    data: ICommunityPortal.CommunityStructOutput,
  ): CommunityStruct => {
    return {
      communityURI: data.communityURI,
      passport: data.passport,
      closed: data.closed,
    };
  };
}
