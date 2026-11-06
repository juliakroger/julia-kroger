---
title: "What the hell is a blockchain — and how do nodes actually work?"
excerpt: "No magic and no crypto-bro shady secret, just a lot of computers, and the rules that keep them in sync."
date: "2021-11-05"
tags: "Blockchain, Web3, Fundamentals"
featured: true
draft: false
---

# First: blockchain is not Bitcoin

Bitcoin uses a blockchain. Ethereum uses a blockchain. Saying blockchain is Bitcoin is like saying the internet is Google (close enough but not true).

A blockchain is also not a currency, a programming language, or a magical database that turns whatever you put inside into truth. And no, adding one to a product does not automatically make the product decentralized. Nice try, though.

The short version is this:
> "A blockchain is a shared history that many computers keep, check, and update by following the same rules."

That is the whole thing. Blocks, hashes, nodes, validators, and consensus are the pieces that make it work without one computer being in charge.

Easier to be understand with a real world example.

# A shared notebook

Imagine five friends travelling together. One pays for the hotel, another pays for dinner, and somebody buys suspiciously expensive airport coffee. They need a notebook to track who paid what and who owes whom.

This is a normal database.

One person owns the notebook. When someone pays $100 for dinner, that person writes it down. Everybody accepts the balance because they trust the person holding the notebook.

## The problem is simple: one notebook

What if the notebook disappears? What if its owner changes $100 to $10? What if they go offline exactly when everybody is trying to settle the bill?

We could give all five friends a copy. Great. We removed the single notebook and created another problem: which copy is the real one?

Two people may write different expenses at the same time. Somebody may try to spend money they do not have. One friend may come back online with an old copy. Another may simply lie.

Five copies are useless if they become different.


The group needs rules for:

- Proving who approved each expense
- Checking if an expense is valid
- Deciding which expense happened first
- Sharing new updates with everybody
- Rejecting a expense that breaks the rules

That system is the useful part of a blockchain.

![A shared blockchain copied across five connected computer nodes](/images/blog/what-is-a-blockchain/shared-ledger.jpg "One history, copied and independently checked by several machines.")

# So where do the blocks come from?

Writing one transaction at a time would be messy, so blockchains group transactions into batches.

Think of each block as one page in the shared notebook. The page contains a list of approved updates. Depending on the blockchain, those updates may transfer money, call a smart contract, register ownership, or change some other piece of state.

Once a page is ready, the network closes it and starts the next one.

A block normally contains:

- **Transactions:** the updates people asked the network to make
- **Metadata:** information such as the block number, time, or producer
- **Cryptographic fingerprints:** hashes that summarize the block’s contents
- **The previous block’s hash:** the link back to the page before it

Block plus block plus block. There is the literal name.

# Hashes: the king seal

A hash is a digital fingerprint made from data.

Imagine a receipt machine that reads every character on a receipt and produces one short code. Print the exact same receipt and you get the exact same code. Change dinner from $100 to $900 and the code becomes completely different.

You can easily create the code from the receipt. You cannot realistically take the code and reconstruct the original receipt from it.

Now block 102 stores the fingerprint of block 101. Block 103 stores the fingerprint of block 102. If somebody edits a transaction inside block 101, its fingerprint changes. Block 102 is still pointing at the old fingerprint, so the link no longer matches. Everything after it starts falling apart.

![An altered block breaking later links while independent nodes reject it](/images/blog/what-is-a-blockchain/tamper-detected.jpg "Change old data and its fingerprint changes; other nodes can detect and reject the broken history.")

This is why people say blockchain data is immutable.

The data is not protected by a magical `readonly` flag. Changing old data is detectable, and convincing the network to accept the rewritten history becomes increasingly difficult. The exact protection depends on that blockchain’s consensus and security model.

Hashes expose the change and then the network refuses to play along.

# So, what the hell is a node?

A node is simple a computer running the blockchain’s software and connected to other computers running compatible software.

That software is called a client. It contains the rulebook, the networking logic, and the code needed to understand the blockchain’s data.

A node has three basic jobs:

- **Listen and share:** receive transactions and blocks, then pass valid information to peers
- **Check:** verify signatures, balances, block structure, and the other protocol rules
- **Keep up:** store enough data to understand the current state and validate what happens next

Think of a node as part accountant, part bouncer, and part friend who forwards every piece of gossip to the group chat.

The important bit: a node does not have to trust the node that sent it a block. It checks the block itself.

> Nodes do not ask, “Who sent this?” They ask, “Does this follow the rules?”

## Do all nodes store everything?

No. “Every node stores the entire blockchain forever” is one of those explanations that sounds helpful until it starts creating new confusion.

The names vary between networks, but these are the common roles:

- **Full node:** independently checks blocks and keeps enough current data to continue checking new ones
- **Archive node:** keeps the full history, including old states that a normal full node may discard
- **Light node:** keeps much less data and asks full nodes for details, while verifying smaller proofs or summaries
- **Validator:** participates in proof-of-stake consensus and may propose or attest to blocks
- **Miner:** competes to produce blocks in a proof-of-work network

Storage, verification, and block production are different jobs. A machine may do more than one, but the words are not interchangeable.

# Node vs validator

This is where many explanations become blurry.

A **node** checks and shares blockchain data.

A **validator** is a participant in a proof-of-stake consensus system. It may be selected to propose the next block, and it can attest that blocks follow the consensus rules. In a proof-of-work system, miners handle block production instead.

Back to the notebook: every friend can check the next page, but one person is selected to suggest what goes on that page. Suggesting the page does not make it correct. Everybody else still checks it.

The shortcut:

- **Nodes ask:** is this valid?
- **Block producers ask:** what valid transactions should go into the next block?
- **Consensus asks:** which valid block becomes the shared next chapter?

A validator needs node software to participate. A node does not need to be a validator. It can verify everything and never produce a block.

# Follow one payment through the network

Let’s use something real: you owe a friend 10 tokens for pizza.

You open a wallet, enter the amount, and press send. The interface now says “pending,” which is a lovely way of hiding everything happening underneath.

Here is what is actually happening:

![Six-step lifecycle from a signed wallet transaction to verified node copies](/images/blog/what-is-a-blockchain/transaction-lifecycle.jpg "A transaction is signed, received, relayed, queued, included in a block, and independently verified.")

### 1. Your wallet signs the instruction

The wallet creates a message saying what you want to do: send 10 tokens from your account to your friend’s account. The signature proves that your account approved the payment without showing the private key to anybody.

Your private key stays with you. If a website asks you to paste it into a form, close the tab. Maybe close the laptop too, just for dramatic effect.

### 2. One node receives it

Your wallet does not personally call every computer in the network. It sends the signed transaction to one node (usually through an RPC endpoint - like a door apps use to talk to a node).

That node checks the basics: is the signature correct? Is the format valid? Does the account have enough balance? Is the fee acceptable? The exact checks depend on the chain. If the transaction is obviously invalid, it dies here. No committee meeting required.

### 3. Nodes gossip it to peers

If the transaction passes the first checks, the node shares it with connected peers. Those peers check it and share it again.

The transaction spreads like gossip through a group chat, except everybody checks the signature before forwarding the screenshot.

One node does not need a direct connection to every other node. Each node talks to a smaller group of peers, and the message travels hop by hop.

### 4. It waits in a transaction pool

Valid does not mean confirmed.

The transaction normally waits in a node’s pool of pending transactions (Like a waiting area before the flight, you have a valid ticket but you're not on the plane yet), commonly called a mempool.


### 5. A block producer includes it

A validator, miner, or other block producer selects pending transactions and builds a candidate block.

The producer may choose transactions based on fees, ordering rules, available space, and the chain’s design. But being selected to build the block does not give it permission to invent money or ignore signatures. The candidate still has to pass the rules.

### 6. Other nodes check the block

The candidate block travels through the network. Other nodes independently check its transactions, hashes, resulting balances, and connection to the previous block.

Valid block? Add it to the local view and share it.

Invalid block? Reject it.

Consensus helps the network settle on the canonical block, and later the block may reach finality. Your wallet can finally stop saying “pending” and pretend this was all very simple.

# How do separate computers agree?

They do not agree because they trust one another. They agree because they apply deterministic rules to a history selected by a consensus protocol.

There are three separate questions here:

- **Validity:** does this transaction or block follow the rules?
- **Ordering:** which valid update happened first?
- **Finality:** when can everyone treat that order as settled?

Every verifying node can answer the validity question locally. A bad signature is bad everywhere. Consensus is not a democratic vote on whether the maths feels right today.

Consensus matters when the network has more than one valid option. Maybe two valid blocks appear almost together. Some nodes see block A first; others see block B. The protocol’s fork-choice rules give them a way to converge on one history.

Proof of work normally favors the valid history with the most accumulated work. Proof of stake uses validators, stake-weighted attestations, fork-choice rules, and penalties. Different mechanism, same problem: choose one shared order without appointing one permanent boss.

# What if a node lies or goes offline?

### One node changes its copy

It has created a private fantasy. Other nodes calculate the hashes, run the rules, and reject the mismatch.

Editing your local copy does not edit everybody else’s copy, in the same way that changing a bank statement PDF does not change your bank balance (creative, but ineffective).

### One node goes offline

The network continues without it. When the node returns, it asks peers for the missing blocks and verifies them before catching up.

### Several participants misbehave

Now we are in the actual security model. Each blockchain makes assumptions about how much malicious mining power, stake, or network influence it can tolerate. Attacks are not impossible because somebody wrote “decentralized” on the homepage. They are made detectable, expensive, punishable, or some combination of the three.

Decentralized does not mean indestructible. It means control and failure are spread across participants.

# When does a blockchain make sense?

A blockchain can be useful when multiple parties need one shared record, no single party should own the truth, and participants need to verify updates independently.

Examples include transferring digital assets, coordinating financial settlement, proving ownership, or running agreements that should not depend on one company’s server staying alive and well-behaved.

It is usually a bad fit when:

- One trusted company already owns the process
- The data must remain private
- Records need to be easily deleted or corrected
- Speed and low cost matter more than independent verification
- A normal database solves the problem without creating five new ones

A blockchain is a terrible Dropbox and an extremely expensive database, The tool should be used for the problem it was designed to solve.

No wizard. No mysterious machine in the sky. Just many computers doing the same boring checks and refusing data that breaks the rules.

The boring checks are the feature.

### Extras

For the less cute and more exact version, read the documentation:
- [Ethereum nodes and clients](https://ethereum.org/developers/docs/nodes-and-clients/)
- [Ethereum’s networking layer](https://ethereum.org/developers/docs/networking-layer/)
- [Bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf).
