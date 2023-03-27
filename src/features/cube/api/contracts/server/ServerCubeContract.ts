import { CubeObjStruct } from "@/src/features/cube";
import { BaseCubeContract } from "@/src/features/cube/api/contracts/BaseCubeContract";
import { ServerWallet } from "@/src/lib/wallet";
import { UserId } from "@/src/types/UserId";
import { Cube, Cube__factory } from "@/types/ethers-contracts";

export class ServerCubeContract extends BaseCubeContract {
  private static _instance: ServerCubeContract;

  private constructor(private readonly _cube: Cube) {
    super();
  }

  /**
   * インスタンスの取得
   * @param rpcURL RPC URL
   * @return {Promise<ServerCubeContract>} インスタンス
   */
  public static instance(rpcURL: string): ServerCubeContract {
    if (!this._instance) {
      const wallet = ServerWallet.instance(rpcURL);
      const cube = Cube__factory.connect(this.contractAddress, wallet.signer);
      this._instance = new ServerCubeContract(cube);
    }
    return this._instance;
  }

  /**
   * cube情報を取得
   * @param userId ユーザーID
   * @return {Promise<CubeObjStruct[][]>} CubeObjStruct[][]
   */
  getCube = async (userId: UserId): Promise<CubeObjStruct[][]> => {
    const dataXZ = await this._cube.getCube(userId);
    const cubeXZ: CubeObjStruct[][] = [];
    for (let z = 0; z < dataXZ.length; z++) {
      const cubeX: CubeObjStruct[] = [];
      for (let x = 0; x < dataXZ[z].length; x++) {
        cubeX.push(ServerCubeContract.fromCubeObjStructOutput(dataXZ[z][x]));
      }
      cubeXZ.push(cubeX);
    }
    return cubeXZ;
  };
}
