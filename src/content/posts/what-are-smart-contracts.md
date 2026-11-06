---
title: "What are smart contracts, and why are they not that smart?"
excerpt: "A smart contract is code on a blockchain: deterministic, inspectable, expensive to run, and perfectly capable of executing a terrible idea."
date: "2021-11-26"
tags: "Smart Contracts, Ethereum, Fundamentals"
featured: false
draft: false
---

**This name has been overselling the product for years**

A smart contract is usually neither smart nor a legal contract.

It is a program stored and executed in a blockchain environment. It has an address, code, and often its own persistent data. People and other contracts send it transactions or calls. Every node executing the same valid transaction reaches the same result.

> "A smart contract is shared code that applies predefined rules to shared blockchain state."

It cannot think. It does not understand your intention. It does not know that you clicked the wrong button or that the person selling you a token used somebody else’s profile picture. It receives input, runs code, and changes state if the rules allow it (Code does exactly what was deployed, including the bugs).

# Like a vending machine?

A vending machine holds products and follows a small set of rules:

- Accept money
- Check whether enough arrived
- Check whether the selected item exists
- Release the item
- Return change if needed

It doesn't decide if you look trustworthy. The machine applies the same rules to everybody.

![A vending-machine analogy: provide the required input and the contract applies fixed rules to produce an output](/images/blog/what-are-smart-contracts/vending-machine.jpg "Smart contracts automate rules like a vending machine—but the machine can only use information available to it.")

A smart contract can do the same kind of conditional execution with digital assets and data:

- If the buyer sends the required amount, transfer the token
- If a borrower’s collateral falls below a threshold, allow liquidation
- If two of three owners approve, release funds from a multisig
- If voting closes with enough support, execute a governance action

The contract does not need a company server to wake up and honour the instruction or a human being check. The blockchain’s nodes execute and verify it as part of the network’s state transition.

## Follow one contract call

Suppose you swap token A for token B on a decentralized exchange.

### 1. The interface prepares a transaction

The website is just the front door. It encodes which contract function to call, which tokens are involved, the amount, and protections such as the minimum output you will accept.

### 2. Your wallet shows a request

You review and sign. The signature authorizes the exact transaction. “Connected” is not the same as “Approved”; the signature is the important part.

### 3. A node receives it

The transaction enters the network, waits for inclusion, and eventually lands in a block.

### 4. Nodes execute the same code

Each verifying node starts from the same previous state and runs the contract with the same input under the same virtual-machine rules.

![Several independent nodes receiving the same contract input and calculating the same state change](/images/blog/what-are-smart-contracts/deterministic-execution.jpg "Same prior state, same transaction, same contract code, same result—or consensus falls apart.")

If your swap succeeds, balances and pool reserves update. If a condition fails—perhaps the price moved beyond your limit—the transaction reverts. The requested state changes do not persist, although you may still pay for the computation already performed (gas fee).

## Deterministic or disaster

Nodes cannot casually produce different answers. If one computer says the contract paid Alice and another says it paid Bob, they no longer share one blockchain state.

Smart-contract execution must therefore be **deterministic**: given the same prior state and input, honest nodes calculate the same output.

This restriction explains some things that initially look absurd. A contract cannot simply call a random weather website, use one node’s local clock, or ask Google for today’s exchange rate. Different nodes might receive different answers.

It can only use information available through the chain’s agreed execution environment: transaction data, blockchain state, block context permitted by the protocol, or data deliberately delivered onchain.

## Gas: an infinite loop should hurt the author

Computation and storage consume network resources. **Gas** measures that work.

Each operation has a gas cost. When you send a transaction, you set limits and pay a network fee based on the gas consumed and the network’s fee rules.

Gas does three jobs:

- Prices scarce computation and storage
- Compensates the network participants processing transactions
- Stops a program from running forever and freezing every node

If execution runs out of gas, it halts and reverts its state changes. The fee is still spent because the network really did perform the work before discovering your transaction had ambitious plans and insufficient funding.

Gas is not a tip to the contract developer. It is the metering system for shared execution.

## Where does real world information come from?

Suppose a contract pays farmers if rainfall drops below a threshold. The blockchain can verify signatures and balances. It cannot look out the window.

An **oracle** delivers external information to the blockchain: prices, weather, sports results, shipment status, and so on.

Now the contract may be decentralized while its answer depends on one data provider. Congratulations, we removed the middleman and then invited one back wearing an oracle badge.

This is the oracle problem. The chain can prove that the contract used the supplied data correctly. It cannot magically prove that the supplied data described reality correctly.

Good oracle designs use multiple sources, economic incentives, signed reports, delays, bounds, and fallback rules (while reducing trust).

## Are smart contracts immutable?

Sometimes. The better answer is: inspect the architecture.

Contract code deployed at one address is normally difficult or impossible to change directly. But developers can design systems with:

- Proxy contracts that point to upgradeable implementations
- Admin keys that change parameters or pause functions
- Governance votes that approve upgrades
- Timelocks that delay sensitive actions
- Emergency controls for known failure modes

Upgradeability can fix bugs and adapt a product. It can also let whoever controls the upgrade path replace the rules after users deposit assets.

“The contract is onchain” tells you where code runs. It does not tell you who controls upgrades, which frontend you are using, whether the oracle is honest, or whether an admin can press a very large red button.

## Composability: software Lego with money inside

One contract can call another. A lending protocol can use a token contract, a decentralized exchange, an oracle, and a governance system without negotiating a business partnership with each one.

This is **composability**. Public interfaces become building blocks. Developers can assemble new products from existing protocols, and users can move assets between them.

It is powerful because innovation compounds.

It is dangerous for exactly the same reason.

If protocol A depends on B, B uses oracle C, and C fails during a market crash, A may discover the dependency graph in the traditional manner: while losing money.

Composability turns integrations into leverage. It also turns failures into group projects.

## “Trustless” needs a footnote the size of the page

Smart contracts can reduce the need to trust one operator to execute rules consistently. That is not the same as needing no trust.

You may still depend on:

- The contract having no exploitable bug
- The compiler and deployment matching the reviewed source
- Oracles reporting useful data
- Admin and governance keys behaving properly
- The underlying blockchain remaining secure
- The frontend giving you the transaction it claims to give you
- Tokens behaving according to expected standards

The good part is: execution can be independently verified and custody or settlement can happen through open data instead of one private database.

# Real things smart contracts do

- **Tokens:** track balances and transfers under a shared standard
- **Escrow:** hold assets until defined conditions are met
- **Exchanges:** swap assets using order books or liquidity pools
- **Lending:** manage deposits, collateral, debt, interest, and liquidation
- **Multisig wallets:** require several approvals before executing
- **DAOs:** coordinate proposals, voting, and treasury actions
- **Games and collectibles:** track onchain ownership and rules

The contract is not the whole product. Interfaces, indexers, APIs, storage systems, governance, legal entities, and very human developers normally surround it.

A smart contract will follow the rules. Your job is checking who wrote the rules, who can change them, and whether they were good rules in the first place.
