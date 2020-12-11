// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ExecutorAuthorized extends ethereum.Event {
  get params(): ExecutorAuthorized__Params {
    return new ExecutorAuthorized__Params(this);
  }
}

export class ExecutorAuthorized__Params {
  _event: ExecutorAuthorized;

  constructor(event: ExecutorAuthorized) {
    this._event = event;
  }

  get executor(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ExecutorUnauthorized extends ethereum.Event {
  get params(): ExecutorUnauthorized__Params {
    return new ExecutorUnauthorized__Params(this);
  }
}

export class ExecutorUnauthorized__Params {
  _event: ExecutorUnauthorized;

  constructor(event: ExecutorUnauthorized) {
    this._event = event;
  }

  get executor(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class GovernanceStrategyChanged extends ethereum.Event {
  get params(): GovernanceStrategyChanged__Params {
    return new GovernanceStrategyChanged__Params(this);
  }
}

export class GovernanceStrategyChanged__Params {
  _event: GovernanceStrategyChanged;

  constructor(event: GovernanceStrategyChanged) {
    this._event = event;
  }

  get newStrategy(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get initiatorChange(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProposalCanceled extends ethereum.Event {
  get params(): ProposalCanceled__Params {
    return new ProposalCanceled__Params(this);
  }
}

export class ProposalCanceled__Params {
  _event: ProposalCanceled;

  constructor(event: ProposalCanceled) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ProposalCreated extends ethereum.Event {
  get params(): ProposalCreated__Params {
    return new ProposalCreated__Params(this);
  }
}

export class ProposalCreated__Params {
  _event: ProposalCreated;

  constructor(event: ProposalCreated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get executor(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get targets(): Array<Address> {
    return this._event.parameters[3].value.toAddressArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }

  get signatures(): Array<string> {
    return this._event.parameters[5].value.toStringArray();
  }

  get calldatas(): Array<Bytes> {
    return this._event.parameters[6].value.toBytesArray();
  }

  get withDelegatecalls(): Array<boolean> {
    return this._event.parameters[7].value.toBooleanArray();
  }

  get startBlock(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get endBlock(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }

  get strategy(): Address {
    return this._event.parameters[10].value.toAddress();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[11].value.toBytes();
  }
}

export class ProposalExecuted extends ethereum.Event {
  get params(): ProposalExecuted__Params {
    return new ProposalExecuted__Params(this);
  }
}

export class ProposalExecuted__Params {
  _event: ProposalExecuted;

  constructor(event: ProposalExecuted) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get initiatorExecution(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProposalQueued extends ethereum.Event {
  get params(): ProposalQueued__Params {
    return new ProposalQueued__Params(this);
  }
}

export class ProposalQueued__Params {
  _event: ProposalQueued;

  constructor(event: ProposalQueued) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get executionTime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get initiatorQueueing(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class VoteEmitted extends ethereum.Event {
  get params(): VoteEmitted__Params {
    return new VoteEmitted__Params(this);
  }
}

export class VoteEmitted__Params {
  _event: VoteEmitted;

  constructor(event: VoteEmitted) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get voter(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get support(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }

  get votingPower(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class VotingDelayChanged extends ethereum.Event {
  get params(): VotingDelayChanged__Params {
    return new VotingDelayChanged__Params(this);
  }
}

export class VotingDelayChanged__Params {
  _event: VotingDelayChanged;

  constructor(event: VotingDelayChanged) {
    this._event = event;
  }

  get newVotingDelay(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get initiatorChange(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AaveGovernanceV2__getProposalByIdResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get creator(): Address {
    return this[1].toAddress();
  }

  get executor(): Address {
    return this[2].toAddress();
  }

  get targets(): Array<Address> {
    return this[3].toAddressArray();
  }

  get values(): Array<BigInt> {
    return this[4].toBigIntArray();
  }

  get signatures(): Array<string> {
    return this[5].toStringArray();
  }

  get calldatas(): Array<Bytes> {
    return this[6].toBytesArray();
  }

  get withDelegatecalls(): Array<boolean> {
    return this[7].toBooleanArray();
  }

  get startBlock(): BigInt {
    return this[8].toBigInt();
  }

  get endBlock(): BigInt {
    return this[9].toBigInt();
  }

  get executionTime(): BigInt {
    return this[10].toBigInt();
  }

  get forVotes(): BigInt {
    return this[11].toBigInt();
  }

  get againstVotes(): BigInt {
    return this[12].toBigInt();
  }

  get executed(): boolean {
    return this[13].toBoolean();
  }

  get canceled(): boolean {
    return this[14].toBoolean();
  }

  get strategy(): Address {
    return this[15].toAddress();
  }

  get ipfsHash(): Bytes {
    return this[16].toBytes();
  }
}

export class AaveGovernanceV2__getVoteOnProposalResultValue0Struct extends ethereum.Tuple {
  get support(): boolean {
    return this[0].toBoolean();
  }

  get votingPower(): BigInt {
    return this[1].toBigInt();
  }
}

export class AaveGovernanceV2 extends ethereum.SmartContract {
  static bind(address: Address): AaveGovernanceV2 {
    return new AaveGovernanceV2("AaveGovernanceV2", address);
  }

  DOMAIN_TYPEHASH(): Bytes {
    let result = super.call(
      "DOMAIN_TYPEHASH",
      "DOMAIN_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DOMAIN_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DOMAIN_TYPEHASH",
      "DOMAIN_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  NAME(): string {
    let result = super.call("NAME", "NAME():(string)", []);

    return result[0].toString();
  }

  try_NAME(): ethereum.CallResult<string> {
    let result = super.tryCall("NAME", "NAME():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  VOTE_EMITTED_TYPEHASH(): Bytes {
    let result = super.call(
      "VOTE_EMITTED_TYPEHASH",
      "VOTE_EMITTED_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_VOTE_EMITTED_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "VOTE_EMITTED_TYPEHASH",
      "VOTE_EMITTED_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  create(
    executor: Address,
    targets: Array<Address>,
    values: Array<BigInt>,
    signatures: Array<string>,
    calldatas: Array<Bytes>,
    withDelegatecalls: Array<boolean>,
    ipfsHash: Bytes
  ): BigInt {
    let result = super.call(
      "create",
      "create(address,address[],uint256[],string[],bytes[],bool[],bytes32):(uint256)",
      [
        ethereum.Value.fromAddress(executor),
        ethereum.Value.fromAddressArray(targets),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromStringArray(signatures),
        ethereum.Value.fromBytesArray(calldatas),
        ethereum.Value.fromBooleanArray(withDelegatecalls),
        ethereum.Value.fromFixedBytes(ipfsHash)
      ]
    );

    return result[0].toBigInt();
  }

  try_create(
    executor: Address,
    targets: Array<Address>,
    values: Array<BigInt>,
    signatures: Array<string>,
    calldatas: Array<Bytes>,
    withDelegatecalls: Array<boolean>,
    ipfsHash: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "create",
      "create(address,address[],uint256[],string[],bytes[],bool[],bytes32):(uint256)",
      [
        ethereum.Value.fromAddress(executor),
        ethereum.Value.fromAddressArray(targets),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromStringArray(signatures),
        ethereum.Value.fromBytesArray(calldatas),
        ethereum.Value.fromBooleanArray(withDelegatecalls),
        ethereum.Value.fromFixedBytes(ipfsHash)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getGovernanceStrategy(): Address {
    let result = super.call(
      "getGovernanceStrategy",
      "getGovernanceStrategy():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getGovernanceStrategy(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getGovernanceStrategy",
      "getGovernanceStrategy():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getGuardian(): Address {
    let result = super.call("getGuardian", "getGuardian():(address)", []);

    return result[0].toAddress();
  }

  try_getGuardian(): ethereum.CallResult<Address> {
    let result = super.tryCall("getGuardian", "getGuardian():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getProposalById(
    proposalId: BigInt
  ): AaveGovernanceV2__getProposalByIdResultValue0Struct {
    let result = super.call(
      "getProposalById",
      "getProposalById(uint256):((uint256,address,address,address[],uint256[],string[],bytes[],bool[],uint256,uint256,uint256,uint256,uint256,bool,bool,address,bytes32))",
      [ethereum.Value.fromUnsignedBigInt(proposalId)]
    );

    return result[0].toTuple() as AaveGovernanceV2__getProposalByIdResultValue0Struct;
  }

  try_getProposalById(
    proposalId: BigInt
  ): ethereum.CallResult<AaveGovernanceV2__getProposalByIdResultValue0Struct> {
    let result = super.tryCall(
      "getProposalById",
      "getProposalById(uint256):((uint256,address,address,address[],uint256[],string[],bytes[],bool[],uint256,uint256,uint256,uint256,uint256,bool,bool,address,bytes32))",
      [ethereum.Value.fromUnsignedBigInt(proposalId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as AaveGovernanceV2__getProposalByIdResultValue0Struct
    );
  }

  getProposalState(proposalId: BigInt): i32 {
    let result = super.call(
      "getProposalState",
      "getProposalState(uint256):(uint8)",
      [ethereum.Value.fromUnsignedBigInt(proposalId)]
    );

    return result[0].toI32();
  }

  try_getProposalState(proposalId: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getProposalState",
      "getProposalState(uint256):(uint8)",
      [ethereum.Value.fromUnsignedBigInt(proposalId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getProposalsCount(): BigInt {
    let result = super.call(
      "getProposalsCount",
      "getProposalsCount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getProposalsCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getProposalsCount",
      "getProposalsCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getVoteOnProposal(
    proposalId: BigInt,
    voter: Address
  ): AaveGovernanceV2__getVoteOnProposalResultValue0Struct {
    let result = super.call(
      "getVoteOnProposal",
      "getVoteOnProposal(uint256,address):((bool,uint248))",
      [
        ethereum.Value.fromUnsignedBigInt(proposalId),
        ethereum.Value.fromAddress(voter)
      ]
    );

    return result[0].toTuple() as AaveGovernanceV2__getVoteOnProposalResultValue0Struct;
  }

  try_getVoteOnProposal(
    proposalId: BigInt,
    voter: Address
  ): ethereum.CallResult<
    AaveGovernanceV2__getVoteOnProposalResultValue0Struct
  > {
    let result = super.tryCall(
      "getVoteOnProposal",
      "getVoteOnProposal(uint256,address):((bool,uint248))",
      [
        ethereum.Value.fromUnsignedBigInt(proposalId),
        ethereum.Value.fromAddress(voter)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as AaveGovernanceV2__getVoteOnProposalResultValue0Struct
    );
  }

  getVotingDelay(): BigInt {
    let result = super.call("getVotingDelay", "getVotingDelay():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getVotingDelay(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getVotingDelay",
      "getVotingDelay():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isExecutorAuthorized(executor: Address): boolean {
    let result = super.call(
      "isExecutorAuthorized",
      "isExecutorAuthorized(address):(bool)",
      [ethereum.Value.fromAddress(executor)]
    );

    return result[0].toBoolean();
  }

  try_isExecutorAuthorized(executor: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isExecutorAuthorized",
      "isExecutorAuthorized(address):(bool)",
      [ethereum.Value.fromAddress(executor)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get governanceStrategy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get votingDelay(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get guardian(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get executors(): Array<Address> {
    return this._call.inputValues[3].value.toAddressArray();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class __abdicateCall extends ethereum.Call {
  get inputs(): __abdicateCall__Inputs {
    return new __abdicateCall__Inputs(this);
  }

  get outputs(): __abdicateCall__Outputs {
    return new __abdicateCall__Outputs(this);
  }
}

export class __abdicateCall__Inputs {
  _call: __abdicateCall;

  constructor(call: __abdicateCall) {
    this._call = call;
  }
}

export class __abdicateCall__Outputs {
  _call: __abdicateCall;

  constructor(call: __abdicateCall) {
    this._call = call;
  }
}

export class AuthorizeExecutorsCall extends ethereum.Call {
  get inputs(): AuthorizeExecutorsCall__Inputs {
    return new AuthorizeExecutorsCall__Inputs(this);
  }

  get outputs(): AuthorizeExecutorsCall__Outputs {
    return new AuthorizeExecutorsCall__Outputs(this);
  }
}

export class AuthorizeExecutorsCall__Inputs {
  _call: AuthorizeExecutorsCall;

  constructor(call: AuthorizeExecutorsCall) {
    this._call = call;
  }

  get executors(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class AuthorizeExecutorsCall__Outputs {
  _call: AuthorizeExecutorsCall;

  constructor(call: AuthorizeExecutorsCall) {
    this._call = call;
  }
}

export class CancelCall extends ethereum.Call {
  get inputs(): CancelCall__Inputs {
    return new CancelCall__Inputs(this);
  }

  get outputs(): CancelCall__Outputs {
    return new CancelCall__Outputs(this);
  }
}

export class CancelCall__Inputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelCall__Outputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }
}

export class CreateCall extends ethereum.Call {
  get inputs(): CreateCall__Inputs {
    return new CreateCall__Inputs(this);
  }

  get outputs(): CreateCall__Outputs {
    return new CreateCall__Outputs(this);
  }
}

export class CreateCall__Inputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get executor(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get targets(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get values(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get signatures(): Array<string> {
    return this._call.inputValues[3].value.toStringArray();
  }

  get calldatas(): Array<Bytes> {
    return this._call.inputValues[4].value.toBytesArray();
  }

  get withDelegatecalls(): Array<boolean> {
    return this._call.inputValues[5].value.toBooleanArray();
  }

  get ipfsHash(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }
}

export class CreateCall__Outputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ExecuteCall extends ethereum.Call {
  get inputs(): ExecuteCall__Inputs {
    return new ExecuteCall__Inputs(this);
  }

  get outputs(): ExecuteCall__Outputs {
    return new ExecuteCall__Outputs(this);
  }
}

export class ExecuteCall__Inputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ExecuteCall__Outputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }
}

export class QueueCall extends ethereum.Call {
  get inputs(): QueueCall__Inputs {
    return new QueueCall__Inputs(this);
  }

  get outputs(): QueueCall__Outputs {
    return new QueueCall__Outputs(this);
  }
}

export class QueueCall__Inputs {
  _call: QueueCall;

  constructor(call: QueueCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class QueueCall__Outputs {
  _call: QueueCall;

  constructor(call: QueueCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetGovernanceStrategyCall extends ethereum.Call {
  get inputs(): SetGovernanceStrategyCall__Inputs {
    return new SetGovernanceStrategyCall__Inputs(this);
  }

  get outputs(): SetGovernanceStrategyCall__Outputs {
    return new SetGovernanceStrategyCall__Outputs(this);
  }
}

export class SetGovernanceStrategyCall__Inputs {
  _call: SetGovernanceStrategyCall;

  constructor(call: SetGovernanceStrategyCall) {
    this._call = call;
  }

  get governanceStrategy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetGovernanceStrategyCall__Outputs {
  _call: SetGovernanceStrategyCall;

  constructor(call: SetGovernanceStrategyCall) {
    this._call = call;
  }
}

export class SetVotingDelayCall extends ethereum.Call {
  get inputs(): SetVotingDelayCall__Inputs {
    return new SetVotingDelayCall__Inputs(this);
  }

  get outputs(): SetVotingDelayCall__Outputs {
    return new SetVotingDelayCall__Outputs(this);
  }
}

export class SetVotingDelayCall__Inputs {
  _call: SetVotingDelayCall;

  constructor(call: SetVotingDelayCall) {
    this._call = call;
  }

  get votingDelay(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetVotingDelayCall__Outputs {
  _call: SetVotingDelayCall;

  constructor(call: SetVotingDelayCall) {
    this._call = call;
  }
}

export class SubmitVoteCall extends ethereum.Call {
  get inputs(): SubmitVoteCall__Inputs {
    return new SubmitVoteCall__Inputs(this);
  }

  get outputs(): SubmitVoteCall__Outputs {
    return new SubmitVoteCall__Outputs(this);
  }
}

export class SubmitVoteCall__Inputs {
  _call: SubmitVoteCall;

  constructor(call: SubmitVoteCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get support(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SubmitVoteCall__Outputs {
  _call: SubmitVoteCall;

  constructor(call: SubmitVoteCall) {
    this._call = call;
  }
}

export class SubmitVoteBySignatureCall extends ethereum.Call {
  get inputs(): SubmitVoteBySignatureCall__Inputs {
    return new SubmitVoteBySignatureCall__Inputs(this);
  }

  get outputs(): SubmitVoteBySignatureCall__Outputs {
    return new SubmitVoteBySignatureCall__Outputs(this);
  }
}

export class SubmitVoteBySignatureCall__Inputs {
  _call: SubmitVoteBySignatureCall;

  constructor(call: SubmitVoteBySignatureCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get support(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get v(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SubmitVoteBySignatureCall__Outputs {
  _call: SubmitVoteBySignatureCall;

  constructor(call: SubmitVoteBySignatureCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnauthorizeExecutorsCall extends ethereum.Call {
  get inputs(): UnauthorizeExecutorsCall__Inputs {
    return new UnauthorizeExecutorsCall__Inputs(this);
  }

  get outputs(): UnauthorizeExecutorsCall__Outputs {
    return new UnauthorizeExecutorsCall__Outputs(this);
  }
}

export class UnauthorizeExecutorsCall__Inputs {
  _call: UnauthorizeExecutorsCall;

  constructor(call: UnauthorizeExecutorsCall) {
    this._call = call;
  }

  get executors(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class UnauthorizeExecutorsCall__Outputs {
  _call: UnauthorizeExecutorsCall;

  constructor(call: UnauthorizeExecutorsCall) {
    this._call = call;
  }
}
