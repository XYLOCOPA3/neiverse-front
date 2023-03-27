import { NOT_FOUND_CONNECTED_ADDRESS } from "@/src/const/errormessage";
import { BaseQuestBoardContract } from "@/src/features/quest/api/contracts/BaseQuestBoardContract";
import { ClientWallet } from "@/src/lib/wallet";
import { QuestBoard, QuestBoard__factory } from "@/types/ethers-contracts";
import { ethers } from "ethers";

export class ClientQuestBoardContract extends BaseQuestBoardContract {
  private static _instance: ClientQuestBoardContract;
  private _writer?: QuestBoard;

  private constructor(
    private readonly _wallet: ClientWallet,
    private readonly _reader: QuestBoard,
  ) {
    super();
  }

  /**
   * インスタンスの取得
   * @return {Promise<ClientQuestBoardContract>} インスタンス
   */
  public static async instance(): Promise<ClientQuestBoardContract> {
    if (!this._instance) {
      const wallet = await ClientWallet.instance();
      const reader = QuestBoard__factory.connect(
        this.contractAddress,
        wallet.provider,
      );
      this._instance = new ClientQuestBoardContract(wallet, reader);
    }
    return this._instance;
  }

  /**
   * クエストクリアを申請
   * @param questId クエストID
   * @return {Promise<ethers.ContractTransactionReceipt | null>} レシート
   */
  claim = async (
    questId: number,
  ): Promise<ethers.ContractTransactionReceipt | null> => {
    await this._beforeWrite();
    return await (await this._writer!.claim(questId)).wait();
  };

  /**
   * クエストクリアで取得したERC1155をburn
   * @param questId クエストID
   * @return {Promise<ethers.ContractTransactionReceipt | null>} レシート
   */
  burn = async (
    questId: number,
  ): Promise<ethers.ContractTransactionReceipt | null> => {
    await this._beforeWrite();
    return await (await this._writer!.burn(questId)).wait();
  };

  /**
   * 書き込み前処理
   */
  private _beforeWrite = async (): Promise<void> => {
    const connectedAddressList = await this._wallet.getConnectedAddresses();
    if (connectedAddressList.length === 0)
      throw Error(NOT_FOUND_CONNECTED_ADDRESS);
    if (this._writer !== undefined) return;
    const results = await Promise.all([
      this._reader.getAddress(),
      this._wallet.getSigner(),
    ]);
    this._writer = QuestBoard__factory.connect(results[0], results[1]);
  };
}
