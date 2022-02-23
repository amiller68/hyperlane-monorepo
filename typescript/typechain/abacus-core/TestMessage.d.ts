/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TestMessageInterface extends ethers.utils.Interface {
  functions: {
    "body(bytes)": FunctionFragment;
    "destination(bytes)": FunctionFragment;
    "leaf(bytes)": FunctionFragment;
    "nonce(bytes)": FunctionFragment;
    "origin(bytes)": FunctionFragment;
    "recipient(bytes)": FunctionFragment;
    "recipientAddress(bytes)": FunctionFragment;
    "sender(bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "body", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "destination",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "leaf", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "nonce", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "origin", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "recipient",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "recipientAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "sender", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "body", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "destination",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "leaf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "origin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recipient", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recipientAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sender", data: BytesLike): Result;

  events: {};
}

export class TestMessage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TestMessageInterface;

  functions: {
    body(_message: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    destination(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number]>;

    leaf(_message: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    nonce(_message: BytesLike, overrides?: CallOverrides): Promise<[number]>;

    origin(_message: BytesLike, overrides?: CallOverrides): Promise<[number]>;

    recipient(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    recipientAddress(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    sender(_message: BytesLike, overrides?: CallOverrides): Promise<[string]>;
  };

  body(_message: BytesLike, overrides?: CallOverrides): Promise<string>;

  destination(_message: BytesLike, overrides?: CallOverrides): Promise<number>;

  leaf(_message: BytesLike, overrides?: CallOverrides): Promise<string>;

  nonce(_message: BytesLike, overrides?: CallOverrides): Promise<number>;

  origin(_message: BytesLike, overrides?: CallOverrides): Promise<number>;

  recipient(_message: BytesLike, overrides?: CallOverrides): Promise<string>;

  recipientAddress(
    _message: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  sender(_message: BytesLike, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    body(_message: BytesLike, overrides?: CallOverrides): Promise<string>;

    destination(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<number>;

    leaf(_message: BytesLike, overrides?: CallOverrides): Promise<string>;

    nonce(_message: BytesLike, overrides?: CallOverrides): Promise<number>;

    origin(_message: BytesLike, overrides?: CallOverrides): Promise<number>;

    recipient(_message: BytesLike, overrides?: CallOverrides): Promise<string>;

    recipientAddress(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    sender(_message: BytesLike, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    body(_message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    destination(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    leaf(_message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    nonce(_message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    origin(_message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    recipient(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    recipientAddress(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sender(_message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    body(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    destination(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    leaf(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nonce(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    origin(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recipient(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recipientAddress(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sender(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}