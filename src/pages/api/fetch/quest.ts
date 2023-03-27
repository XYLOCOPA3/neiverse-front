import { NextApiRequest, NextApiResponse } from "next";
import { ServerQuestBoardContract } from "@/src/features/quest/api/contracts/server";
import { RPC_URL } from "@/src/lib/wallet";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST")
    return res.status(400).json({ message: "POSTのみ受付" });
  try {
    const questBoard = ServerQuestBoardContract.instance(RPC_URL.mumbai);
    const questList = await questBoard.getAllQuestList();
    return res.status(200).json({ questList });
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
      return res.status(400).json({ message: e.message });
    }
    console.error(e);
    return res.status(400).json({ message: e });
  }
}
