import { CUBE_POSITION_MAP, ERROR, FLOOR_SIZE } from "@/src/const/cube";
import { CubeModel } from "@/src/models/CubeModel";
import { Position } from "@/src/types/Position";
import { ICube } from "@/types/ethers-contracts/Cube";

export const toCubeIndex = (position: Position): number => {
  let cnt = 0;
  for (let z = 0; z < FLOOR_SIZE; z++) {
    for (let x = 0; x < FLOOR_SIZE; x++) {
      if (isEqualPosition(position, { x, y: 0, z })) return cnt;
      cnt++;
    }
  }
  return ERROR;
};

export const toCubePosition = (index: number): Position =>
  CUBE_POSITION_MAP[index];

export const isEqualPosition = (a: Position, b: Position) =>
  a.x == b.x && a.y == b.y && a.z == b.z;

/**
 * toCubeObjStruct
 * @param cubeModel CubeModel
 * @return {ICube.CubeObjStruct} CubeObjStruct
 */
export const toCubeObjStruct = (cubeModel: CubeModel): ICube.CubeObjStruct => {
  return {
    prizeId: cubeModel.prizeId,
    positionX: cubeModel.position.x,
    positionY: cubeModel.position.y,
    positionZ: cubeModel.position.z,
    rotationX: cubeModel.rotation.x,
    rotationY: cubeModel.rotation.y,
    rotationZ: cubeModel.rotation.z,
    set: cubeModel.set,
  };
};

// /**
//  * toCubeModel
//  * @param cubeModel CubeModel
//  * @return {ICube.CubeObjStruct} CubeObjStruct
//  */
// export const toCubeModel = (userId: UserId, cubeObjStruct: ICube.CubeObjStruct): CubeModel => {
//   return {
//     userId:
//   };
// };
