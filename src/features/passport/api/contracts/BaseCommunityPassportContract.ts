import { PassportStruct } from "@/src/features/passport/types/PassportStruct";
import { ICommunityPassport } from "@/types/ethers-contracts/CommunityPassport";

export class BaseCommunityPassportContract {
  constructor() {}

  /**
   * type Passport へ変換
   * @param data コントラクトからのパスポート情報
   * @return {PassportStruct} PassportStruct
   */
  toPassportStruct = (
    data: ICommunityPassport.PassportStructOutput,
  ): PassportStruct => {
    const passport: PassportStruct = {
      uri: data.passportURI,
      userId: data.user.toLowerCase(),
      exp: Number(data.exp),
    };
    return passport;
  };
}
