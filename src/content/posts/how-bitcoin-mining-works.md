---
title: "Bitcoin mining: tiny people digging coins out of the internet?"
excerpt: "Transactions go in, ASICs make absurd numbers of guesses, one block comes out, and thousands of nodes check the winner’s homework."
date: "2021-12-17"
updated: "2026-11-05"
readTime: "11 min read"
tags: "Bitcoin, Mining, Proof of Work"
featured: false
draft: false
---

First of all, there are no tiny people digging coins out of the internet (I promise). Bitcoin mining actually does two connected jobs:

- It provides the proof of work used to order and secure Bitcoin’s transaction history
- It gives participants a way to compete for the right to add the next valid block

The winning miner can claim newly issued bitcoin and the fees from transactions in that block. That reward pays miners to spend hardware, energy, facilities, and time protecting the network.

The machines are not searching for hidden bitcoin. They are hashing candidate block headers as fast as physics, manufacturing, and an electricity contract will allow.

> Mining is a competition to build a valid block and find a proof-of-work hash before somebody else does.

## Mining starts before the mining machine

A Bitcoin transaction is signed and broadcast to the peer-to-peer network. Nodes verify it and may keep it in their local mempools (the waiting areas for valid, unconfirmed transactions).

There is no one official mempool in the sky. Nodes can receive transactions in different orders, reject different low-fee transactions under local policies, or temporarily have different views.

A miner, known as a mining pool, runs node and mining software. It selects transactions and assembles a candidate block.

Usually, higher-fee transactions are attractive because block space is limited. But a miner can choose a different set, leave space empty, or exclude a transaction. It cannot make an invalid transaction acceptable to everybody else.

# Step 1: build a candidate block

The candidate contains:

- A list of transactions
- A special first transaction called the **coinbase transaction**
- A block header summarizing the candidate

Despite the name, the coinbase transaction is not related to the company Coinbase. Bitcoin had the term first and apparently did not reserve the trademark.

The coinbase transaction creates the permitted block subsidy and collects the included transaction fees. It pays an address chosen by the miner or pool.

The miner hashes the candidate transactions into a Merkle tree. Its top hash—the **Merkle root**—goes into the block header. Change the transaction list and the root changes, which changes the header and every proof-of-work attempt based on it.

The 80-byte header also includes the previous block hash, time, difficulty target information, version, and a nonce.

# Step 2: give the header to an ASIC

An **ASIC** is an application-specific integrated circuit: hardware built to do one narrow job extremely well. Bitcoin mining ASICs repeatedly calculate Bitcoin’s proof-of-work hash function.

The machine changes the nonce and hashes the header.

Result above the target? Lose.

Change the nonce. Hash again.

Still above? Lose with impressive efficiency.

If the ASIC exhausts the nonce space, mining software changes other candidate data—often extra nonce data inside the coinbase transaction—which produces a new Merkle root and therefore a fresh header with another enormous set of possible hashes.

No miner is “closer” to an answer. Each hash is another independent attempt. A machine performing twice as many hashes has roughly twice the chance of finding a valid result over time, not twice the intelligence.

![Transactions becoming a candidate block, ASICs trying hashes, and nodes verifying the winning block](/images/blog/how-bitcoin-mining-works/mining-process.jpg "Mining software builds the candidate. ASICs search for proof of work. Full nodes decide whether the result follows Bitcoin’s rules.")

# Step 3: broadcast the winner

When a miner finds a hash below the network target, it returns the winning header to the mining software. The complete block is broadcast through the Bitcoin network.

Other nodes do not applaud and trust it. They verify it.

Each full node checks things such as:

- The header’s proof of work meets the current target
- The block correctly links to the previous block
- The block size and structure follow consensus rules
- Every transaction is valid and correctly authorized
- No input is spent twice
- The coinbase reward does not exceed the allowed subsidy plus fees
- All resulting amounts and scripts follow Bitcoin’s rules

If the block is invalid, nodes reject it. The miner keeps the electricity bill and receives no valid reward.

Mining proposes blocks. Full nodes enforce what Bitcoin considers a valid block.

# What if two miners win almost together?

Some nodes may hear about block A first while others hear about block B. Both can be individually valid and point to the same parent.

Miners begin working on whichever valid tip they accepted first. Eventually another block extends one branch. Nodes follow the valid chain with the most accumulated proof of work, and the other valid block becomes stale.

Transactions from the stale block are not necessarily lost. They may already exist in the winning branch or return to mempools for later inclusion.

This temporary competition is why one confirmation is not absolute finality. Each block added afterward makes replacing your transaction’s history more difficult.

# Who creates new bitcoin?

The protocol’s issuance schedule allows a winning miner to include a block subsidy in the coinbase transaction.

The subsidy began at 50 BTC per block and halves every 210,000 blocks, roughly every four years:

- 2009: 50 BTC
- 2012: 25 BTC
- 2016: 12.5 BTC
- 2020: 6.25 BTC
- 2024: 3.125 BTC
- Around 2028: expected to become 1.5625 BTC

Miners do not vote on how many new coins they feel they deserve that morning. If a miner creates more than the consensus rules permit, full nodes reject the block.

In addition to the subsidy, the miner collects fees from included transactions. As the subsidy declines, fees are expected to become a larger part of miner revenue.

“Block reward” is often used for subsidy plus fees, although people also casually use it when they mean only the subsidy. Crypto terminology enjoys making one phrase do two jobs.

# Why does difficulty change?

More mining hardware means more guesses per second, which would make blocks arrive faster. Less hardware would make them slower.

Bitcoin recalculates its proof-of-work target every 2,016 blocks based on how long the previous period took. The goal is an average interval of about ten minutes.

If miners found the last 2,016 blocks too quickly, the target becomes harder. If they took too long, it becomes easier.

Difficulty does not guarantee a block every ten minutes. It tunes the probability so the long-term average moves toward that pace.

# Solo mining: one very dramatic lottery ticket

A solo miner builds its own candidates and searches for a network-valid hash. If it wins, it receives the entire subsidy and fees. If it does not win, it receives nothing.

For a small miner competing with the global network, the expected wait can be extremely long. Expected value and grocery money have an awkward relationship when payouts arrive once every several lifetimes.

# Pool mining: turn one giant lottery into wages with mood swings

Mining pools coordinate the work of many miners and distribute rewards when the pool finds blocks.

The pool gives miners easier targets than Bitcoin’s real network target. A result meeting the easier pool target is called a **share**. It is not a Bitcoin block and has no onchain reward. It proves that a miner performed a measurable portion of the guessing work.

Occasionally, one submitted share also meets Bitcoin’s much harder network target. The pool broadcasts that block, receives the reward, and pays participants according to its payout system and their contributed shares.

![Many miners submitting shares to a pool, which finds occasional network-valid blocks and distributes the payout](/images/blog/how-bitcoin-mining-works/mining-pool.jpg "Pool shares measure contributed work. Only the rare result meeting Bitcoin’s target becomes an onchain block.")

Pooling does not increase the total expected reward for a given amount of hash power before fees. It reduces variance: smaller, more frequent payouts instead of one enormous and perhaps never-arriving win.

Pools also introduce concentration and operational trade-offs. The operator may choose block templates, manage payouts, and become a visible coordination point. Individual miners can leave for another pool, but a network dominated by a few template-producing pools deserves attention.

# The mining business is brutally simple

Revenue depends on:

- Your share of total network hash power
- Block subsidy and transaction fees
- Bitcoin’s market price
- Pool fees and payout rules
- Uptime and machine efficiency

Costs depend on:

- Electricity price
- ASIC purchase and depreciation
- Cooling and ventilation
- Facilities, networking, repairs, and staff
- Financing and regulation

An ASIC can be profitable in one location and an expensive heater in another. Newer, more efficient hardware raises the competitive bar. When price, fees, or hash share fall, inefficient miners switch off first.

This is why “I have a gaming PC, can I mine Bitcoin?” has the technically correct answer “yes” and the financially useful answer “please enjoy your new space heater.” Specialized ASICs outcompeted general-purpose hardware long ago.

# What about the energy?

Mining converts electricity and hardware expenditure into costly proof of work. The expense is what makes rewriting history costly too.

The environmental impact depends on total consumption, energy sources, grid conditions, hardware lifecycle, location, and what alternative use that energy could have had. Those are empirical questions, not team slogans.

Global estimates use models because no researcher has a live meter attached to every private mining machine. Cambridge’s methodology, for example, estimates consumption using network hashrate, hardware assumptions, and profitability bounds.

Reasonable people can agree on how mining works and still disagree on whether the security it provides justifies the resources it consumes. That conversation improves when everybody brings assumptions instead of a screenshot.

# Miner versus node: one last time

A miner searches for proof of work and proposes blocks.

A full node verifies transactions and blocks against the consensus rules.

You can run a full node without mining. You can also own mining hardware while relying on somebody else’s pool and node infrastructure.

Hash power influences which valid branch grows fastest. It does not let miners rewrite the validity rules accepted by independently operated nodes.

# Things people get confidently wrong

## “Miners solve transactions”

Transactions are signed instructions. Miners select them for candidate blocks and search for proof of work on the block header.

## “The winner gets paid for every hash”

Bitcoin only rewards a valid block. A pool may pay miners for shares under its own accounting, funded by pool rewards.

## “A miner can print unlimited bitcoin”

It can put any number into its candidate coinbase transaction. Nodes can then reject the invalid block for free. Excellent business plan.

## “Mining pools combine all machines into one supercomputer solving one puzzle”

They coordinate distinct ranges of work and aggregate payouts. Each ASIC still makes independent hash attempts.

## “Ten-minute blocks means my payment confirms in ten minutes”

Ten minutes is a target average for blocks, not a reservation. Your fee, mempool competition, block timing, and required confirmations all matter.

# The part to remember

- Nodes receive transactions; miners select some into candidate blocks
- The coinbase transaction claims the allowed subsidy and transaction fees
- ASICs repeatedly hash an 80-byte block header against a target
- The winning miner broadcasts the complete candidate block
- Full nodes independently verify the proof, transactions, and reward
- Difficulty adjusts every 2,016 blocks toward a ten-minute average
- Pools use easier shares to measure work and smooth payouts
- Mining revenue competes against hardware, energy, and operational costs

Bitcoin mining is not digging and it is not useful puzzle-solving. It is an industrial lottery whose tickets secure an ordered transaction history.

# Keep learning

The official Bitcoin developer guide documents the complete [mining workflow](https://developer.bitcoin.org/devguide/mining.html), including 80-byte headers, ASICs, extra nonces, pool shares, and block templates. Its [blockchain guide](https://developer.bitcoin.org/devguide/block_chain.html) explains how full nodes independently validate the history.

Bitcoin.org tracks the [halving schedule](https://bitcoin.org/en/halving): 6.25 BTC when this article first appeared in 2021, 3.125 BTC after the April 20, 2024 halving, and 1.5625 BTC expected at block 1,050,000 around 2028. For energy estimates, use the assumptions and ranges in the [Cambridge Bitcoin Electricity Consumption Index methodology](https://ccaf.io/cbnsi/cbeci/methodology), not a mysteriously precise number wandering around social media without its model.

You now know what the warehouse is doing. Mostly hashing, cooling, and hoping.
