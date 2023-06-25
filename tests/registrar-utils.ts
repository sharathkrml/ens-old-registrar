import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AuctionStarted,
  NewBid,
  BidRevealed,
  HashRegistered,
  HashReleased,
  HashInvalidated
} from "../generated/Registrar/Registrar"

export function createAuctionStartedEvent(
  hash: Bytes,
  registrationDate: BigInt
): AuctionStarted {
  let auctionStartedEvent = changetype<AuctionStarted>(newMockEvent())

  auctionStartedEvent.parameters = new Array()

  auctionStartedEvent.parameters.push(
    new ethereum.EventParam("hash", ethereum.Value.fromFixedBytes(hash))
  )
  auctionStartedEvent.parameters.push(
    new ethereum.EventParam(
      "registrationDate",
      ethereum.Value.fromUnsignedBigInt(registrationDate)
    )
  )

  return auctionStartedEvent
}

export function createNewBidEvent(
  hash: Bytes,
  bidder: Address,
  deposit: BigInt
): NewBid {
  let newBidEvent = changetype<NewBid>(newMockEvent())

  newBidEvent.parameters = new Array()

  newBidEvent.parameters.push(
    new ethereum.EventParam("hash", ethereum.Value.fromFixedBytes(hash))
  )
  newBidEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  newBidEvent.parameters.push(
    new ethereum.EventParam(
      "deposit",
      ethereum.Value.fromUnsignedBigInt(deposit)
    )
  )

  return newBidEvent
}

export function createBidRevealedEvent(
  hash: Bytes,
  owner: Address,
  value: BigInt,
  status: i32
): BidRevealed {
  let bidRevealedEvent = changetype<BidRevealed>(newMockEvent())

  bidRevealedEvent.parameters = new Array()

  bidRevealedEvent.parameters.push(
    new ethereum.EventParam("hash", ethereum.Value.fromFixedBytes(hash))
  )
  bidRevealedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  bidRevealedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  bidRevealedEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return bidRevealedEvent
}

export function createHashRegisteredEvent(
  hash: Bytes,
  owner: Address,
  value: BigInt,
  registrationDate: BigInt
): HashRegistered {
  let hashRegisteredEvent = changetype<HashRegistered>(newMockEvent())

  hashRegisteredEvent.parameters = new Array()

  hashRegisteredEvent.parameters.push(
    new ethereum.EventParam("hash", ethereum.Value.fromFixedBytes(hash))
  )
  hashRegisteredEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  hashRegisteredEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  hashRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "registrationDate",
      ethereum.Value.fromUnsignedBigInt(registrationDate)
    )
  )

  return hashRegisteredEvent
}

export function createHashReleasedEvent(
  hash: Bytes,
  value: BigInt
): HashReleased {
  let hashReleasedEvent = changetype<HashReleased>(newMockEvent())

  hashReleasedEvent.parameters = new Array()

  hashReleasedEvent.parameters.push(
    new ethereum.EventParam("hash", ethereum.Value.fromFixedBytes(hash))
  )
  hashReleasedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return hashReleasedEvent
}

export function createHashInvalidatedEvent(
  hash: Bytes,
  name: string,
  value: BigInt,
  registrationDate: BigInt
): HashInvalidated {
  let hashInvalidatedEvent = changetype<HashInvalidated>(newMockEvent())

  hashInvalidatedEvent.parameters = new Array()

  hashInvalidatedEvent.parameters.push(
    new ethereum.EventParam("hash", ethereum.Value.fromFixedBytes(hash))
  )
  hashInvalidatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  hashInvalidatedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  hashInvalidatedEvent.parameters.push(
    new ethereum.EventParam(
      "registrationDate",
      ethereum.Value.fromUnsignedBigInt(registrationDate)
    )
  )

  return hashInvalidatedEvent
}
