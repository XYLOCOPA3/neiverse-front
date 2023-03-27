import { CUBE_ADDRESS } from "@/src/const/contract";
import { CubeObjStruct } from "@/src/features/cube";
import { CubeModel } from "@/src/models/CubeModel";
import { ICube } from "@/types/ethers-contracts/Cube";

export class BaseCubeContract {
  public static readonly contractAddress = CUBE_ADDRESS;

  constructor() {}

  /**
   * fromCubeObjStructOutput
   * @return {CubeObjStruct} CubeObjStruct
   */
  public static fromCubeObjStructOutput = (
    data: ICube.CubeObjStructOutput,
  ): CubeObjStruct => {
    return {
      prizeId: Number(data.prizeId),
      positionX: Number(data.positionX),
      positionY: Number(data.positionY),
      positionZ: Number(data.positionZ),
      rotationX: Number(data.rotationX),
      rotationY: Number(data.rotationY),
      rotationZ: Number(data.rotationZ),
      set: data.set,
    };
  };

  /**
   * fromCubeModel
   * @param cubeModel CubeModel
   * @return {CubeObjStruct} CubeObjStruct
   */
  public static fromCubeModel = (cubeModel: CubeModel): CubeObjStruct => {
    return {
      prizeId: Number(cubeModel.prizeId),
      positionX: cubeModel.position.x,
      positionY: cubeModel.position.y,
      positionZ: cubeModel.position.z,
      rotationX: cubeModel.rotation.x,
      rotationY: cubeModel.rotation.y,
      rotationZ: cubeModel.rotation.z,
      set: cubeModel.set,
    };
  };
}
