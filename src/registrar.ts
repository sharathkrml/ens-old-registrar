import { BigInt } from "@graphprotocol/graph-ts"
import {
    Registrar,
    AuctionStarted as AuctionStartedEvent,
    NewBid as NewBidEvent,
    BidRevealed as BidRevealedEvent,
    HashRegistered as HashRegisteredEvent,
    HashReleased as HashReleasedEvent,
    HashInvalidated as HashInvalidatedEvent,
} from "../generated/Registrar/Registrar"
import {
    AuctionStarted,
    BidRevealed,
    Counter,
    HashInvalidated,
    HashRegistered,
    HashReleased,
    NewBid,
} from "../generated/schema"

export function handleAuctionStarted(event: AuctionStartedEvent): void {
    let counter = getCounter("AuctionStarted")

    let auctionStarted = new AuctionStarted(counter.count.toString())
    auctionStarted.index = counter.count
    auctionStarted.hash = event.transaction.hash
    auctionStarted.ensHash = event.params.hash
    auctionStarted.registrationDate = event.params.registrationDate
    auctionStarted.save()

    counter.save()
}

export function handleNewBid(event: NewBidEvent): void {
    let counter = getCounter("NewBid")

    let newBid = new NewBid(counter.count.toString())
    newBid.index = counter.count
    newBid.hash = event.transaction.hash

    newBid.ensHash = event.params.hash
    newBid.bidder = event.params.bidder
    newBid.deposit = event.params.deposit
    newBid.save()

    counter.save()
}

export function handleBidRevealed(event: BidRevealedEvent): void {
    let counter = getCounter("BidRevealed")

    let bidRevealed = new BidRevealed(counter.count.toString())
    bidRevealed.index = counter.count
    bidRevealed.hash = event.transaction.hash

    bidRevealed.ensHash = event.params.hash
    bidRevealed.owner = event.params.owner
    bidRevealed.value = event.params.value
    bidRevealed.status = event.params.status.toString()
    bidRevealed.save()

    counter.save()
}

export function handleHashRegistered(event: HashRegisteredEvent): void {
    let counter = getCounter("HashRegistered")

    let hashRegistered = new HashRegistered(counter.count.toString())
    hashRegistered.index = counter.count
    hashRegistered.hash = event.transaction.hash

    hashRegistered.ensHash = event.params.hash
    hashRegistered.owner = event.params.owner
    hashRegistered.value = event.params.value
    hashRegistered.registrationDate = event.params.registrationDate
    hashRegistered.save()

    counter.save()
}

export function handleHashReleased(event: HashReleasedEvent): void {
    let counter = getCounter("HashReleased")

    let hashReleased = new HashReleased(counter.count.toString())
    hashReleased.index = counter.count
    hashReleased.hash = event.transaction.hash

    hashReleased.ensHash = event.params.hash
    hashReleased.value = event.params.value
    hashReleased.save()

    counter.save()
}

export function handleHashInvalidated(event: HashInvalidatedEvent): void {
    let counter = getCounter("HashInvalidated")

    let hashInvalidated = new HashInvalidated(counter.count.toString())
    hashInvalidated.index = counter.count
    hashInvalidated.hash = event.transaction.hash

    hashInvalidated.ensHash = event.params.hash
    hashInvalidated.name = event.params.name
    hashInvalidated.value = event.params.value
    hashInvalidated.registrationDate = event.params.registrationDate
    hashInvalidated.save()

    counter.save()
}

function getCounter(key: string): Counter {
    let counter = Counter.load(key)
    if (!counter) {
        counter = new Counter(key)
        counter.count = BigInt.fromI32(0)
    }
    counter.count = counter.count.plus(BigInt.fromI32(1))
    return counter
}
