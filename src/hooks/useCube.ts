import { ClientCubeContract } from "@/src/features/cube";
import { CubeObjStruct } from "@/src/features/cube";
import { CubeModel } from "@/src/models/CubeModel";
import {
  CubeState,
  cubeSelectorUserId,
  cubeState,
} from "@/src/stores/cubeState";
import { UserId } from "@/src/types/UserId";
import { deepCpyMap } from "@/src/util/deepCpy";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";

export interface CubeController {
  init: (userId: UserId) => Promise<void>;
  updateIfChanged: (
    userId: UserId,
    cubeTmp: CubeModel[],
    cube: CubeModel[],
  ) => Promise<void>;
}

export const useCubeStateValue = (): CubeState => useRecoilValue(cubeState);

export const useCubeController = (): CubeController => {
  const setCubeState = useSetRecoilState(cubeState);

  /**
   * 初期化
   * @param userId ユーザーID
   */
  const init = async (userId: UserId): Promise<void> => {
    const res = await axios.post("/api/fetch/cube", {
      userId,
    });
    if (res.status !== 200) throw new Error(res.data.message);
    const cubeXZ = res.data.cubeXZ as CubeObjStruct[][];
    let index = 0;
    const cubeModelXZ: CubeModel[] = [];
    for (let z = 0; z < cubeXZ.length; z++) {
      const cubeModelX: CubeModel[] = [];
      for (let x = 0; x < cubeXZ[z].length; x++) {
        cubeModelXZ.push(CubeModel.fromData(userId, cubeXZ[z][x], index));
        index++;
      }
    }
    const newState: CubeState = new Map();
    newState.set(userId, cubeModelXZ);
    setCubeState(newState);
  };

  /**
   * 変更あれば更新
   * @param userId ユーザーID
   * @param cubeTmp 変更後箱庭
   * @param cube 変更前箱庭
   */
  const updateIfChanged = async (
    userId: UserId,
    cubeTmp: CubeModel[],
    cube: CubeModel[],
  ): Promise<void> => {
    const changedCubeObjStructs: CubeObjStruct[] = [];
    const cubeIndexs: number[] = [];
    for (let i = 0; i < cube.length; i++) {
      if (CubeModel.isEqualCube(cubeTmp[i], cube[i])) continue;
      changedCubeObjStructs.push(ClientCubeContract.fromCubeModel(cubeTmp[i]));
      cubeIndexs.push(i);
    }
    if (changedCubeObjStructs.length === 0) return;
    // setされていないものを先に処理しないと "lack of prizeNum" エラーが発生するためソート
    changedCubeObjStructs.sort((a, b) => Number(a.set) - Number(b.set));
    const cubeContract = await ClientCubeContract.instance();
    await cubeContract.setBatchCubeObj(changedCubeObjStructs);
    setCubeState((prevState) => {
      const prevCube = prevState.get(userId)!;
      const newCube = prevCube.map((cubeObj, index) => {
        if (cubeIndexs.includes(index)) return cubeObj.copyWith(cubeTmp[index]);
        return cubeObj;
      });
      const newState = deepCpyMap(prevState);
      newState.set(userId, newCube);
      return newState;
    });
  };

  const controller: CubeController = {
    init,
    updateIfChanged,
  };
  return controller;
};

export const useCubeState = (): [CubeState, CubeController] => [
  useCubeStateValue(),
  useCubeController(),
];

export const useCubeValue = (userId: UserId): CubeModel[] | undefined =>
  useRecoilValue(cubeSelectorUserId(userId));
