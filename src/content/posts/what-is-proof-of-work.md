---
title: "proof of whaaaaat?"
excerpt: "What the hell is proof of work? Bitcoin does not trust the fastest computer or the loudest miner. It makes everybody pay for the right to suggest the next page."
date: "2021-11-12"
tags: "Bitcoin, Proof of Work, Fundamentals"
featured: false
draft: false
---

Proof of work is usually explained as “computers solving difficult mathematical problems.” whatever that sentence might mean.

The computers are not curing diseases or calculating tomorrow’s weather. They are repeatedly changing a number and hashing a block until one result lands below a target.

That is basically a gigantic lottery powered by electricity.

The useful result is not the winning hash itself. The useful result is that producing it cost real resources, while checking it is extremely cheap. That difference gives a network full of strangers a way to choose one history without asking a boss for permission.

> "Proof of work makes proposing history expensive and verifying history cheap."

# problem: one internet

Imagine a room deciding which page should be added to a shared notebook.

The obvious solution is one person, one vote. On the internet, unfortunately, one person can create ten thousand identities. This is called a **Sybil attack**: pretend to be a crowd, then vote like one.

So counting computers, accounts, email addresses, or enthusiastic profile pictures does not work. They are too cheap to manufacture.

Several people may suggest a valid next page at almost the same time. The network needs to decide which one becomes the shared page.

Nobody knows who the participants are, and identities are free. A rule such as “the majority wins” is meaningless if I can become the majority by opening more tabs.

## What it actually needs

Voting power must be tied to something that cannot be copied for free.

Proof of work ties it to computation and energy. You can create a million mining identities if that makes you happy. They still have only the computing power you actually **paid for**.

## the world’s least glamorous lottery

A miner builds a candidate block containing valid transactions. The block also has a small header: a summary containing, among other things, the previous block’s hash and a fingerprint of the candidate transactions.

The miner hashes that header. The result looks random.

If the number is below the network’s current target, congratulations: valid proof of work.

If not, the miner changes a value—often starting with the `nonce`—and tries again. And again. And again. Modern mining machines perform an absurd number of these guesses every second.

There is no clever shortcut. A bigger miner does not know the answer; it simply buys more lottery attempts.

![Many miners repeatedly trying hashes while nodes cheaply verify the one winning result](/images/blog/what-is-proof-of-work/proof-of-work-lottery.jpg "Miners pay for millions of attempts. Nodes only need to check the winner once.")

Think of rolling a 100-sided die and needing a result below 5. Every roll is easy. You might win immediately or spend the afternoon questioning your life choices. If the target changes from 5 to 2, winning becomes harder.

Hashes are better than dice because the exact candidate block determines the result. Change one transaction and the hash changes, so the work cannot quietly be pasted onto a different block.

# Hard to make, easy to check

This asymmetry is the whole trick.

A miner may burn enormous computing effort finding one acceptable hash. When it broadcasts the candidate block, every full node can hash its header once and check the result.

Then each node checks everything else too:

- Are all transactions correctly signed?
- Are the inputs spendable?
- Does the block create only the allowed reward?
- Does it point to a valid previous block?
- Does its proof meet the target?

A valid proof of work does **not** turn an invalid block into a valid one. A miner cannot spend your bitcoin, mint itself a cheeky extra million coins, or ignore the protocol rules just because it owns expensive machines.

It can propose. Nodes still verify.

# How work protects old history

Every block points to the block before it. To edit an old transaction, an attacker would need to rebuild that block’s proof of work and then catch up with all the honest work added after it.

Meanwhile, honest miners are not politely waiting. They keep extending the valid chain.

![An attacker falling behind while the honest chain keeps accumulating proof of work](/images/blog/what-is-proof-of-work/accumulated-work.jpg "Rewriting one old block means redoing its work and catching every block added after it.")

Bitcoin nodes compare valid competing histories by accumulated proof of work, not simply by counting blocks.

This is why people wait for confirmations (literally wait, slow as f***). One block on top of your transaction means one more layer of work an attacker would need to replace. Six confirmations are not a magic force field, but each additional block makes a rewrite less likely. Confidence grows as more work accumulates.

## What does a 51% attack actually buy?

If one actor controls most of the network’s mining power for long enough, it may be able to build an alternative valid history faster than the rest of the miners. That can enable transaction censorship or double-spending the attacker’s own recent payments.

It still does not reveal private keys. It does not allow the attacker to create invalid transactions. It does not let them steal arbitrary coins from every address.

“Controls the chain” sounds apocalyptic. But the real power land by what full nodes will accept as valid.

## Who decides how difficult the lottery is?

If more machines join, blocks would arrive faster. If machines leave, blocks would slow down. Bitcoin adjusts the target every 2,016 blocks so that blocks continue to average roughly ten minutes over time.

Notice the word **average**. A block can arrive ten seconds after the last one or take an hour.

More total hash power makes the target harder. Less hash power eventually makes it easier. The protocol is trying to control the pace, not reward miners for owning a gigantic mining farm.

## Yes, the energy use is intentional

Proof of work consumes energy because the cost is the defence. If producing an alternative history were free, attacking it would also be free.

That does not make every amount or source of energy automatically good. It means “make mining use no work” is not an efficiency patch; it removes the thing the mechanism uses to price attacks.

Energy estimates are also estimates, not a power meter plugged into every miner on Earth.

# Proof of work is not mining

They are related, not identical.

**Proof of work** is the consensus mechanism: the rule that connects block production to costly computation and helps the network choose between valid histories.

**Mining** is the operation around that mechanism: collecting transactions, building candidate blocks, running ASIC hardware, joining pools, paying electricity bills, and hoping revenue exceeds the cost of turning a warehouse into a hair dryer.
