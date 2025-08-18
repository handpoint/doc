---
sidebar_position: 2
id: javascriptreleasenotes
---

# Release Notes

:::tip
Don’t miss any updates on our latest releases. Contact your Handpoint relationship manager to subscribe to the Handpoint Newsletter!
:::


## 6.1.0

**Features**:
- Mail order/Telephone order (MoTo)

**Fixes**:
- Duplications on recovered transactions

## 6.0.1

**Features**:
- Internal variable handling

## 6.0.0

**BREAKING CHANGE:**
- The recovery function in the init method was added to make sure that ALL transaction results are received by the POS, even in case of an unstable network connection. The recovery function passed as third parameter in the init method MUST return a promise. The resolution of the promise will send a message to the payment terminal acknowledging the reception of the transaction result.
