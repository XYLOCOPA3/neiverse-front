import { NOT_FOUND_CONNECTED_ADDRESS } from "@/src/const/errormessage";
import { CubeObjStruct } from "@/src/features/cube";
import { BaseCubeContract } from "@/src/features/cube/api/contracts/BaseCubeContract";
import { ClientWallet } from "@/src/lib/wallet";
import { Cube, Cube__factory } from "@/types/ethers-contracts";
import { ethers } from "ethers";

export class ClientCubeContract extends BaseCubeContract {
  private static _instance: ClientCubeContract;
  private _writer?: Cube;

  private constructor(
    private readonly _wallet: ClientWallet,
    private readonly _reader: Cube,
  ) {
    super();
  }

  /**
   * インスタンスの取得
   * @return {Promise<ClientCubeContract>} インスタンス
   */
  public static async instance(): Promise<ClientCubeContract> {
    if (!this._instance) {
      const wallet = await ClientWallet.instance();
      const reader = Cube__factory.connect(
        this.contractAddress,
        wallet.provider,
      );
      this._instance = new ClientCubeContract(wallet, reader);
    }
    return this._instance;
  }

  /**
   * setBatchCubeObj
   * @param CubeObjStructs CubeObjStruct[]
   * @return {Promise<ethers.ContractTransactionReceipt | null>} 書き込み結果
   */
  setBatchCubeObj = async (
    CubeObjStructs: CubeObjStruct[],
  ): Promise<ethers.ContractTransactionReceipt | null> => {
    await this._beforeWrite();
    return await (await this._writer!.setBatchCubeObj(CubeObjStructs)).wait();
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
    this._writer = Cube__factory.connect(results[0], results[1]);
  };
}
