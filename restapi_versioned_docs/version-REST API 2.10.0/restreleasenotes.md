---
sidebar_position: 2
id: restreleasenotes
---

# Release Notes

:::tip
Do not miss any news from Handpoint releases. [Subscribe](https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e) to our Handpoint Newsletter!
:::

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
