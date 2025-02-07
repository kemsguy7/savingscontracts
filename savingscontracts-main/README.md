# Ethereum Savings Smart Contracts

This repository contains two smart contracts implemented in Solidity for managing savings on the Ethereum blockchain: a simple personal savings contract and a crowdfunding-style group savings contract.

## Contracts Overview

### 1. SimpleSavings Contract
A personal savings smart contract that allows a single user to deposit and withdraw funds with a time-lock mechanism.

**Key Features:**
* Single owner control
* Time-locked withdrawals (set to February 14th, 2025)
* Deposit tracking through events
* Simple deposit and withdrawal mechanisms

**Functions:**
* `deposit()`: Allows the owner to deposit ETH
* `withdraw()`: Allows the owner to withdraw all funds after the target date
* Owner-only access control

### 2. PiggyBank Contract
A multi-user savings contract that enables group saving towards a specific target amount with a predetermined withdrawal date.

**Key Features:**
* Multiple contributor support
* Target amount tracking
* Individual contribution tracking
* Timed withdrawal mechanism
* Managed withdrawal system

**Functions:**
* `save()`: Allows users to contribute ETH
* `withdrawal()`: Enables the manager to withdraw funds when conditions are met
* Contribution tracking per address
* Unique contributor counting



### Solidity Version
```solidity
 0.8.28;

