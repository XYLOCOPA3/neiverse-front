import communityPassportAbi from "@/artifacts/CommunityPassport.json";
import communityPortalAbi from "@/artifacts/CommunityPortal.json";
import cubeAbi from "@/artifacts/Cube.json";
import prizePoapAbi from "@/artifacts/PrizePoap.json";
import questBoardAbi from "@/artifacts/QuestBoard.json";

export const COMMUNITY_PORTAL_ADDRESS = process.env
  .NEXT_PUBLIC_FANBASE_COMUNITY_PORTAL_CONTRACT as string;
export const QUEST_BOARD_ADDRESS = process.env
  .NEXT_PUBLIC_FANBASE_QUEST_BOARD_CONTRACT as string;
export const PRIZE_POAP_ADDRESS = process.env
  .NEXT_PUBLIC_FANBASE_PRIZE_POAP_CONTRACT as string;
export const CUBE_ADDRESS = process.env
  .NEXT_PUBLIC_FANBASE_CUBE_CONTRACT as string;

export const COMMUNITY_PASSPORT_ABI = communityPassportAbi.abi;
export const COMMUNITY_PORTAL_ABI = communityPortalAbi.abi;
export const QUEST_BOARD_ABI = questBoardAbi.abi;
export const PRIZE_POAP_ABI = prizePoapAbi.abi;
export const CUBE_ABI = cubeAbi.abi;
