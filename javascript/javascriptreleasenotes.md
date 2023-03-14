---
sidebar_position: 2
id: javascriptreleasenotes
---

# Release Notes

:::tip
Do not miss any news from Handpoint releases. [Subscribe](https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e) to our Handpoint Newsletter!
:::
## 6.3.0

**Features**:
- Metadata

## 6.3.0

**Features**:

We are introducing a new feature called [**Transaction Metadata**](javascriptobjects.md#metadata). This new feature helps the customer to persist and echo back some data that belongs to the customer business domain at transaction time. The Transaction Metadata is sent in the request and echoed back in the response from the gateway. In addition, customers will be able to use the Transaction Metadata to search matching transactions from our Transaction Feed API.*****

The Transaction Metadata feature will be available when the Handpoint Payments app **v4.1.0** or higher is used.

***Please note**: Transactions will be available in TXN Feed API only if the request has reached the gateway.

## 6.2.1

**Fixes**:
- Reconnection management.

## 6.2.0

**Features**:

We are introducing a new feature called duplicate payment check. Looking back at our data we have seen that when a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are now flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the 2nd charge. This menu will automatically be prompted on the payment terminal if a suspicious charge is detected. We are only prompting the duplicate menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe. 

The duplicate payment check feature will be **enabled by default** when the Handpoint Payments app **v4.0.0.** or higher is used. You do not need to update to v6.2.0 to benefit from this new feature. v6.2.0 will only allow you to disable the duplicate payment check feature if you wish to not support it. 

The new `duplicate_check` parameter is available under the [SaleOptions](javascriptobjects.md#23) and [RefundOptions](javascriptobjects.md#24).

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
