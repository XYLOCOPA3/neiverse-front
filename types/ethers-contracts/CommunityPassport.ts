/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedContractEvent,
  TypedContractMethod,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedLogDescription,
} from "./common";
import type {
  AddressLike,
  BaseContract,
  BigNumberish,
  BytesLike,
  ContractMethod,
  ContractRunner,
  EventFragment,
  FunctionFragment,
  Interface,
  Listener,
  Result,
} from "ethers";

export declare namespace ICommunityPassport {
  export type PassportStruct = {
    passportURI: string;
    user: AddressLike;
    exp: BigNumberish;
  };

  export type PassportStructOutput = [
    passportURI: string,
    user: string,
    exp: bigint,
  ] & { passportURI: string; user: string; exp: bigint };
}

export interface CommunityPassportInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addExp"
      | "approve"
      | "balanceOf"
      | "baseURI"
      | "burn"
      | "communityId"
      | "contractURI"
      | "firstURI"
      | "getApproved"
      | "getPassport"
      | "getPassportList"
      | "getPassportURIFromAddress"
      | "getUserList"
      | "hashAddress"
      | "initialize"
      | "isAdmin"
      | "isApprovedForAll"
      | "mint"
      | "name"
      | "owner"
      | "ownerOf"
      | "proxiableUUID"
      | "renounceOwnership"
      | "safeTransferFrom(address,address,uint256)"
      | "safeTransferFrom(address,address,uint256,bytes)"
      | "setApprovalForAll"
      | "setBaseURI"
      | "setBatchAdmin"
      | "setBatchPassportURI"
      | "setContractURI"
      | "setExp"
      | "setPassportURI"
      | "supportsInterface"
      | "symbol"
      | "tokenURI"
      | "totalSupply"
      | "transferFrom"
      | "transferOwner"
      | "transferOwnership"
      | "upgradeTo"
      | "upgradeToAndCall",
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddExp"
      | "AdminChanged"
      | "Approval"
      | "ApprovalForAll"
      | "BeaconUpgraded"
      | "Initialized"
      | "OwnershipTransferred"
      | "SetBaseURI"
      | "SetContractURI"
      | "SetExp"
      | "SetFirstURI"
      | "Transfer"
      | "Upgraded",
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addExp",
    values: [AddressLike, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike],
  ): string;
  encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
  encodeFunctionData(functionFragment: "burn", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "communityId",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "contractURI",
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: "firstURI", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "getPassport",
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: "getPassportList",
    values: [BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "getPassportURIFromAddress",
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: "getUserList",
    values: [BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "hashAddress",
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      string,
      string,
      string,
      string,
      string,
      BigNumberish,
      AddressLike[],
    ],
  ): string;
  encodeFunctionData(
    functionFragment: "isAdmin",
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [AddressLike, AddressLike],
  ): string;
  encodeFunctionData(functionFragment: "mint", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    values: [AddressLike, AddressLike, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [AddressLike, boolean],
  ): string;
  encodeFunctionData(functionFragment: "setBaseURI", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setBatchAdmin",
    values: [AddressLike[], boolean[]],
  ): string;
  encodeFunctionData(
    functionFragment: "setBatchPassportURI",
    values: [AddressLike[], string[]],
  ): string;
  encodeFunctionData(
    functionFragment: "setContractURI",
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: "setExp",
    values: [AddressLike, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "setPassportURI",
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike],
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwner",
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike],
  ): string;

  decodeFunctionResult(functionFragment: "addExp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "communityId",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractURI",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "firstURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPassport",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPassportList",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPassportURIFromAddress",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserList",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashAddress",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBatchAdmin",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBatchPassportURI",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "setContractURI",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "setExp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPassportURI",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwner",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike,
  ): Result;
}

export namespace AddExpEvent {
  export type InputTuple = [
    publisher: AddressLike,
    user: AddressLike,
    passportId: BigNumberish,
    oldExp: BigNumberish,
    newExp: BigNumberish,
  ];
  export type OutputTuple = [
    publisher: string,
    user: string,
    passportId: bigint,
    oldExp: bigint,
    newExp: bigint,
  ];
  export interface OutputObject {
    publisher: string;
    user: string;
    passportId: bigint;
    oldExp: bigint;
    newExp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AdminChangedEvent {
  export type InputTuple = [previousAdmin: AddressLike, newAdmin: AddressLike];
  export type OutputTuple = [previousAdmin: string, newAdmin: string];
  export interface OutputObject {
    previousAdmin: string;
    newAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    approved: AddressLike,
    tokenId: BigNumberish,
  ];
  export type OutputTuple = [owner: string, approved: string, tokenId: bigint];
  export interface OutputObject {
    owner: string;
    approved: string;
    tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ApprovalForAllEvent {
  export type InputTuple = [
    owner: AddressLike,
    operator: AddressLike,
    approved: boolean,
  ];
  export type OutputTuple = [
    owner: string,
    operator: string,
    approved: boolean,
  ];
  export interface OutputObject {
    owner: string;
    operator: string;
    approved: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BeaconUpgradedEvent {
  export type InputTuple = [beacon: AddressLike];
  export type OutputTuple = [beacon: string];
  export interface OutputObject {
    beacon: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetBaseURIEvent {
  export type InputTuple = [
    publisher: AddressLike,
    oldValue: string,
    newValue: string,
  ];
  export type OutputTuple = [
    publisher: string,
    oldValue: string,
    newValue: string,
  ];
  export interface OutputObject {
    publisher: string;
    oldValue: string;
    newValue: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetContractURIEvent {
  export type InputTuple = [
    publisher: AddressLike,
    oldValue: string,
    newValue: string,
  ];
  export type OutputTuple = [
    publisher: string,
    oldValue: string,
    newValue: string,
  ];
  export interface OutputObject {
    publisher: string;
    oldValue: string;
    newValue: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetExpEvent {
  export type InputTuple = [
    publisher: AddressLike,
    user: AddressLike,
    passportId: BigNumberish,
    oldExp: BigNumberish,
    newExp: BigNumberish,
  ];
  export type OutputTuple = [
    publisher: string,
    user: string,
    passportId: bigint,
    oldExp: bigint,
    newExp: bigint,
  ];
  export interface OutputObject {
    publisher: string;
    user: string;
    passportId: bigint;
    oldExp: bigint;
    newExp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetFirstURIEvent {
  export type InputTuple = [
    publisher: AddressLike,
    oldValue: string,
    newValue: string,
  ];
  export type OutputTuple = [
    publisher: string,
    oldValue: string,
    newValue: string,
  ];
  export interface OutputObject {
    publisher: string;
    oldValue: string;
    newValue: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    tokenId: BigNumberish,
  ];
  export type OutputTuple = [from: string, to: string, tokenId: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface CommunityPassport extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: CommunityPassportInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent,
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent,
  ): Promise<this>;

  addExp: TypedContractMethod<
    [user_: AddressLike, exp_: BigNumberish],
    [void],
    "nonpayable"
  >;

  approve: TypedContractMethod<
    [to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[owner: AddressLike], [bigint], "view">;

  baseURI: TypedContractMethod<[], [string], "view">;

  burn: TypedContractMethod<[], [void], "nonpayable">;

  communityId: TypedContractMethod<[], [bigint], "view">;

  contractURI: TypedContractMethod<[], [string], "view">;

  firstURI: TypedContractMethod<[], [string], "view">;

  getApproved: TypedContractMethod<[tokenId: BigNumberish], [string], "view">;

  getPassport: TypedContractMethod<
    [user_: AddressLike],
    [ICommunityPassport.PassportStructOutput],
    "view"
  >;

  getPassportList: TypedContractMethod<
    [page_: BigNumberish, pageSize_: BigNumberish],
    [ICommunityPassport.PassportStructOutput[]],
    "view"
  >;

  getPassportURIFromAddress: TypedContractMethod<
    [user_: AddressLike],
    [string],
    "view"
  >;

  getUserList: TypedContractMethod<
    [page_: BigNumberish, pageSize_: BigNumberish],
    [string[]],
    "view"
  >;

  hashAddress: TypedContractMethod<[addr_: AddressLike], [bigint], "view">;

  initialize: TypedContractMethod<
    [
      name_: string,
      symbol_: string,
      baseURI_: string,
      firstURI_: string,
      contractURI_: string,
      communityId_: BigNumberish,
      adminList_: AddressLike[],
    ],
    [void],
    "nonpayable"
  >;

  isAdmin: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  isApprovedForAll: TypedContractMethod<
    [owner: AddressLike, operator: AddressLike],
    [boolean],
    "view"
  >;

  mint: TypedContractMethod<[], [void], "nonpayable">;

  name: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  ownerOf: TypedContractMethod<[tokenId: BigNumberish], [string], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  "safeTransferFrom(address,address,uint256)": TypedContractMethod<
    [from: AddressLike, to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  "safeTransferFrom(address,address,uint256,bytes)": TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      tokenId: BigNumberish,
      data: BytesLike,
    ],
    [void],
    "nonpayable"
  >;

  setApprovalForAll: TypedContractMethod<
    [operator: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;

  setBaseURI: TypedContractMethod<[newState_: string], [void], "nonpayable">;

  setBatchAdmin: TypedContractMethod<
    [userList_: AddressLike[], newStateList_: boolean[]],
    [void],
    "nonpayable"
  >;

  setBatchPassportURI: TypedContractMethod<
    [userList_: AddressLike[], newStateList_: string[]],
    [void],
    "nonpayable"
  >;

  setContractURI: TypedContractMethod<
    [newState_: string],
    [void],
    "nonpayable"
  >;

  setExp: TypedContractMethod<
    [user_: AddressLike, newState_: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPassportURI: TypedContractMethod<
    [newState_: string],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  symbol: TypedContractMethod<[], [string], "view">;

  tokenURI: TypedContractMethod<[passportId_: BigNumberish], [string], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transferFrom: TypedContractMethod<
    [from: AddressLike, to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferOwner: TypedContractMethod<
    [newOwner_: AddressLike],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeTo: TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment,
  ): T;

  getFunction(
    nameOrSignature: "addExp",
  ): TypedContractMethod<
    [user_: AddressLike, exp_: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "approve",
  ): TypedContractMethod<
    [to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf",
  ): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "baseURI",
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "burn",
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "communityId",
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "contractURI",
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "firstURI",
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getApproved",
  ): TypedContractMethod<[tokenId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getPassport",
  ): TypedContractMethod<
    [user_: AddressLike],
    [ICommunityPassport.PassportStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPassportList",
  ): TypedContractMethod<
    [page_: BigNumberish, pageSize_: BigNumberish],
    [ICommunityPassport.PassportStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPassportURIFromAddress",
  ): TypedContractMethod<[user_: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getUserList",
  ): TypedContractMethod<
    [page_: BigNumberish, pageSize_: BigNumberish],
    [string[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "hashAddress",
  ): TypedContractMethod<[addr_: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize",
  ): TypedContractMethod<
    [
      name_: string,
      symbol_: string,
      baseURI_: string,
      firstURI_: string,
      contractURI_: string,
      communityId_: BigNumberish,
      adminList_: AddressLike[],
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isAdmin",
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isApprovedForAll",
  ): TypedContractMethod<
    [owner: AddressLike, operator: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "mint",
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "name",
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner",
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ownerOf",
  ): TypedContractMethod<[tokenId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "proxiableUUID",
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership",
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "safeTransferFrom(address,address,uint256)",
  ): TypedContractMethod<
    [from: AddressLike, to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "safeTransferFrom(address,address,uint256,bytes)",
  ): TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      tokenId: BigNumberish,
      data: BytesLike,
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setApprovalForAll",
  ): TypedContractMethod<
    [operator: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setBaseURI",
  ): TypedContractMethod<[newState_: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setBatchAdmin",
  ): TypedContractMethod<
    [userList_: AddressLike[], newStateList_: boolean[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setBatchPassportURI",
  ): TypedContractMethod<
    [userList_: AddressLike[], newStateList_: string[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setContractURI",
  ): TypedContractMethod<[newState_: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setExp",
  ): TypedContractMethod<
    [user_: AddressLike, newState_: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPassportURI",
  ): TypedContractMethod<[newState_: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface",
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "symbol",
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tokenURI",
  ): TypedContractMethod<[passportId_: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "totalSupply",
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferFrom",
  ): TypedContractMethod<
    [from: AddressLike, to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwner",
  ): TypedContractMethod<[newOwner_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership",
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeTo",
  ): TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "upgradeToAndCall",
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  getEvent(
    key: "AddExp",
  ): TypedContractEvent<
    AddExpEvent.InputTuple,
    AddExpEvent.OutputTuple,
    AddExpEvent.OutputObject
  >;
  getEvent(
    key: "AdminChanged",
  ): TypedContractEvent<
    AdminChangedEvent.InputTuple,
    AdminChangedEvent.OutputTuple,
    AdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "Approval",
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "ApprovalForAll",
  ): TypedContractEvent<
    ApprovalForAllEvent.InputTuple,
    ApprovalForAllEvent.OutputTuple,
    ApprovalForAllEvent.OutputObject
  >;
  getEvent(
    key: "BeaconUpgraded",
  ): TypedContractEvent<
    BeaconUpgradedEvent.InputTuple,
    BeaconUpgradedEvent.OutputTuple,
    BeaconUpgradedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized",
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred",
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "SetBaseURI",
  ): TypedContractEvent<
    SetBaseURIEvent.InputTuple,
    SetBaseURIEvent.OutputTuple,
    SetBaseURIEvent.OutputObject
  >;
  getEvent(
    key: "SetContractURI",
  ): TypedContractEvent<
    SetContractURIEvent.InputTuple,
    SetContractURIEvent.OutputTuple,
    SetContractURIEvent.OutputObject
  >;
  getEvent(
    key: "SetExp",
  ): TypedContractEvent<
    SetExpEvent.InputTuple,
    SetExpEvent.OutputTuple,
    SetExpEvent.OutputObject
  >;
  getEvent(
    key: "SetFirstURI",
  ): TypedContractEvent<
    SetFirstURIEvent.InputTuple,
    SetFirstURIEvent.OutputTuple,
    SetFirstURIEvent.OutputObject
  >;
  getEvent(
    key: "Transfer",
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded",
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "AddExp(address,address,uint256,uint32,uint32)": TypedContractEvent<
      AddExpEvent.InputTuple,
      AddExpEvent.OutputTuple,
      AddExpEvent.OutputObject
    >;
    AddExp: TypedContractEvent<
      AddExpEvent.InputTuple,
      AddExpEvent.OutputTuple,
      AddExpEvent.OutputObject
    >;

    "AdminChanged(address,address)": TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;
    AdminChanged: TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;

    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "ApprovalForAll(address,address,bool)": TypedContractEvent<
      ApprovalForAllEvent.InputTuple,
      ApprovalForAllEvent.OutputTuple,
      ApprovalForAllEvent.OutputObject
    >;
    ApprovalForAll: TypedContractEvent<
      ApprovalForAllEvent.InputTuple,
      ApprovalForAllEvent.OutputTuple,
      ApprovalForAllEvent.OutputObject
    >;

    "BeaconUpgraded(address)": TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;
    BeaconUpgraded: TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "SetBaseURI(address,string,string)": TypedContractEvent<
      SetBaseURIEvent.InputTuple,
      SetBaseURIEvent.OutputTuple,
      SetBaseURIEvent.OutputObject
    >;
    SetBaseURI: TypedContractEvent<
      SetBaseURIEvent.InputTuple,
      SetBaseURIEvent.OutputTuple,
      SetBaseURIEvent.OutputObject
    >;

    "SetContractURI(address,string,string)": TypedContractEvent<
      SetContractURIEvent.InputTuple,
      SetContractURIEvent.OutputTuple,
      SetContractURIEvent.OutputObject
    >;
    SetContractURI: TypedContractEvent<
      SetContractURIEvent.InputTuple,
      SetContractURIEvent.OutputTuple,
      SetContractURIEvent.OutputObject
    >;

    "SetExp(address,address,uint256,uint32,uint32)": TypedContractEvent<
      SetExpEvent.InputTuple,
      SetExpEvent.OutputTuple,
      SetExpEvent.OutputObject
    >;
    SetExp: TypedContractEvent<
      SetExpEvent.InputTuple,
      SetExpEvent.OutputTuple,
      SetExpEvent.OutputObject
    >;

    "SetFirstURI(address,string,string)": TypedContractEvent<
      SetFirstURIEvent.InputTuple,
      SetFirstURIEvent.OutputTuple,
      SetFirstURIEvent.OutputObject
    >;
    SetFirstURI: TypedContractEvent<
      SetFirstURIEvent.InputTuple,
      SetFirstURIEvent.OutputTuple,
      SetFirstURIEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}
