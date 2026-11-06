---
title: "Not your keys, not your crypto"
excerpt: "Signing authority and risk. This is not proof that everybody should hide a seed phrase under the mattress."
date: "2021-12-10"
tags: "Custody, Wallets, Security"
featured: false
draft: false
---


“Not your keys, not your crypto” means this:

> If another party controls the keys required to move onchain assets, your access depends on that party honouring its obligation to you.

That is a useful warning. It reminds us that an exchange balance and direct onchain control are not the same thing.

Custody is a risk decision. Self-custody is also a risk decision. The adult version of the conversation compares what can fail, who can recover, and what happens next.

Custodians can fail and self-custodial users can be phished, drained, or permanently locked out.

# What do you actually own?

Crypto assets exist as entries and rules in a blockchain’s shared state. Control normally means having the signing authority that satisfies those rules.

With a traditional private-key account, whoever can produce a valid signature can authorize a transaction. The network does not inspect a passport or remember who bought the coins. It checks the cryptographic authorization.

With a smart account or multisig, the rule may be more complex: two of three signatures, a passkey plus a recovery guardian, spending limits, a delay, or another programmable policy.

The slogan says “keys” because that is compact. The deeper idea is **control of the authorization path**.

# When the exchange holds the keys

Deposit bitcoin into a centralized exchange and it may move into wallets controlled by the exchange. Your app displays an internal balance in the company’s database.

When you trade, the exchange can update that database without recording every trade on the network. When you withdraw, the exchange signs an onchain transaction from one of its wallets.

Your balance is therefore a claim against the exchange. You need it to be trustable, legally able to serve you, honest about its records and reservers and allow you to process withdraws.

This is **counterparty risk**. You have delegated key management and accepted dependence on the custodian.

That dependence may buy useful things: account recovery, fraud monitoring, compliance controls, customer support, familiar login flows, fiat payments, and institutional security practices.

Or it may buy a frozen withdrawal screen and one carefully worded status update. Both are possible.

# When you hold the keys

In self-custody, **YOU** can authorize transactions without asking a custodian to release an internal balance.

You remove several failure modes:

- The exchange cannot lend away your specific wallet balance behind the scenes
- An account freeze cannot block your direct network access
- The custodian’s database cannot decide you own zero
- A company shutdown does not erase your authorization

You also acquire several new ones:

- Lose every recovery method and access may be gone forever
- Expose the key or recovery phrase and an attacker can sign
- Approve a malicious transaction and the blockchain may execute it perfectly
- Die without a recovery plan and leave your family an impossible puzzle

![Custodial and self-custodial paths, each with a different set of failure modes](/images/blog/not-your-keys-not-your-crypto/custody-failure-modes.jpg "Custody can fail through the provider. Self-custody can fail through key loss, theft, or malicious authorization.")

Self-custody removes the custodian. It does not remove operational security. It moves the responsibility into your house and politely leaves.

# Your recovery phrase is not “just a backup”

A recovery phrase can recreate the private keys for many wallet accounts. Anybody who obtains it can often restore the wallet elsewhere without your password, device, face, or permission.

![A recovery phrase deriving many keys and wallets, with no cloud service or support agent able to reverse theft](/images/blog/not-your-keys-not-your-crypto/recovery-phrase.jpg "One recovery phrase can control an entire tree of accounts. Whoever gets it may become you to the blockchain.")

The password on a wallet app usually protects that local installation. It is not a replacement for the recovery phrase and it does not stop somebody who already has the phrase from importing it into another wallet.

This leads to four boring rules worth repeating until everybody is annoyed:

- Never share the phrase
- Never enter it into a website
- Keep backups offline and protected from theft, fire, water
- Test the recovery process with small value before trusting your entire $100 fortune

# Self-custody is not one product

You still need to pick how and where you: store it and interect with apps.

### Browser or mobile wallet

Convenient and useful for regular activity. Because it is hot and frequently interacts with websites, it has more exposure to malware, phishing, and rushed approvals.

### Hardware wallet

Designed to keep private keys isolated and show transaction details on a separate device. It improves key protection; it cannot make a malicious transaction wholesome after you approve it.

### Multisig

Requires several keys to authorize an action. Keys can be stored on different devices or held by different people. This reduces single-key failure but adds coordination, backup, and configuration risk.

### Smart account

Can support passkeys, guardians, spending policies, session keys, batched actions, and recovery rules. This can make self-custody safer and less medieval. It also introduces contract code, upgrade paths, service dependencies, and configuration choices.

### Assisted custody

Some systems split control or recovery between the user and a provider. They sit between “company controls everything” and “one seed phrase controls everything.”. Just be awware and read the actual authorization and recovery model provided by the company.

# Hot versus cold is a separate question

Custody asks **who controls authorization**.

Hot versus cold asks **how exposed the signing material is to connected systems**.

An exchange can use cold wallets and still be custodial to you. A browser wallet can be self-custodial and hot. A hardware wallet can protect keys offline while signing transactions prepared by an online computer.

“Cold” does not mean “cannot be stolen.” “Self-custodial” does not mean “correctly backed up.” We have several axes because one buzzword was not enough to describe security.

# Match the setup to the job

You do not keep grocery cash, retirement savings, and a company treasury in the same pocket. Do not force every crypto use into one wallet either.

### Small spending amount

A reputable mobile or browser wallet may be reasonable. Limit the amount exposed and treat it as an active wallet.

### Long-term meaningful value

Consider hardware signing, offline backups, separation from daily browsing, and a tested recovery plan.

### Team or company funds

Use multisig or policy-based authorization, clear signer roles, transaction review, key rotation, and documented recovery. One founder’s laptop is not a treasury policy.

### Frequent trading or fiat access

A custodian may be practical. Keep only what the workflow needs, understand withdrawal controls, use strong account security, and do not confuse convenience with deposit insurance or guaranteed solvency.

### Amount you cannot personally secure

Professional or assisted custody may be safer than an improvised self-custody ritual. Evaluate the provider, legal arrangement, insurance claims, segregation of assets, recovery process, and exactly who can sign.

# Use your brain cells

Ask:

- Who can authorize a transfer?
- Can one person or device do it alone?
- What happens if a signer disappears?
- What happens if a provider fails?
- Can the account be frozen or recovered?
- Is there a delay for large transactions?
- Where are backups, and has recovery been tested?
- Can software or administrators change the authorization rules?
- What amount is exposed to one failure?

Those questions work for a seed phrase, hardware wallet, exchange, multisig, smart account, or institutional custodian. Security becomes much clearer once we stop asking which product looks most decentralized.
