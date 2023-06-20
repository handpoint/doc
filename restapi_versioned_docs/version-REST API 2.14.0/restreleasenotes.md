---
sidebar_position: 2
id: restreleasenotes
---

# Release Notes

:::tip
Do not miss any news from Handpoint releases. [Subscribe](https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e) to our Handpoint Newsletter!
:::

## 2.14.0
**Features:**

We are introducing a new feature called [Get Transaction Status](restendpoints.md#transactionstransactionreferencestatus). This new [endpoint](restendpoints.md#transactionstransactionreferencestatus) allows you to query the Handpoint Gateway for the status of a transaction at any given time. You can use this feature to track the progress of your payments and troubleshoot any issues that may arise. This feature is available for all payment methods and currencies. 

When a financial operation is started from the REST API, you need to provide a `transactionReference` in the body of the transaction [request](restobjects.md#transactionRequest). This `transactionReference` can then be used to query the status of a transaction (using the [transaction status](restendpoints.md#transactionstransactionreferencestatus) endpoint) if you are not receiving the result from the terminal in a timely fashion. The `transactionReference` must be a unique identifier ([UUID v4](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random))).

Example request/response to the transaction status endpoint:

![SaleWithGetTrxStatusExample](/img/RestAPIexample.png) 

## 2.13.0

**Features:**

We are introducing a new feature called [**Transaction Metadata**](restobjects.md#metadata). This new feature helps the customer to persist and echo back some data that belongs to the customer business domain at transaction time. The Transaction Metadata is sent in the request and echoed back in the response from the gateway. In addition, customers will be able to use the Transaction Metadata to search matching transactions from our Transaction Feed API.*****

The Transaction Metadata feature will be available when the Handpoint Payments app **v4.1.0** or higher is used.

***Please note**: Transactions will be available in TXN Feed API only if the request has reached the gateway.

**Fixes:**

- Parsing errors from the gateway (Tip Adjustment).

## 2.12.0
**Features:**
- New endpoint [Tip-Adjustment](restendpoints.md#transactionsguidtip-adjustment). 

A tip adjustment operation allows merchants to adjust the tip amount of a sale transaction before the batch of transactions is settled by the processor at the end of the day.


## 2.10.0
**Features:**

We are introducing a new feature called duplicate payment check. Looking back at our data we have seen that when a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are now flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the 2nd charge. This menu will automatically be prompted on the payment terminal if a suspicious charge is detected. We are only prompting the duplicate menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe.

The duplicate payment check feature will be **enabled by default** when the Handpoint Payments app **v4.0.0.** or higher is used. V2.10.0 of the REST API only allows you to disable the duplicate payment check feature if you wish to not support it.

The new `duplicate_check` parameter is available under the [Transaction Request Object](restobjects.md#transactionRequest). 

## 2.7.1
**Features:**
- New endpoint to create, get and delete API keys for Merchants

## 2.7.0
**Features:**

- Mail/Telephone Order functionality
- Retry logic for transaction triggering

## 2.6.0
**Features:**
- Endpoints for virtual terminals

## 2.4.0
**Features:**

- Transaction result retrieval through API endpoint GET .../transaction-result/{transactionResultId}
