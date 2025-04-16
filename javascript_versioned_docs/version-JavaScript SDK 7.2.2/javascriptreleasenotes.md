---
sidebar_position: 2
id: javascriptreleasenotes
---

# Release Notes

:::tip
Do not miss any news from Handpoint releases. [Subscribe](https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e) to our Handpoint Newsletter!
:::

## 7.2.2
**Features:**

A new `tokenize` parameter is available under [SaleOptions](javascriptobjects.md#23) and [RefundOptions](javascriptobjects.md#24). See [Android SDK 7.1009.5](/android/androidreleasenotes#7.1009.5) and [Tokenized Payments Operations](/android/androidtransactions#cloudTokenizedPaymentsOperations) for detailed information on how to use this feature.

## 7.2.0
**Features:**

We're excited to announce the latest update to our JavaScript SDK, featuring support of Mastercard MoneySend fields for money remittance merchants. In order to use this functionality, we provide you with an object called  [Money Remittance Options](javascriptobjects.md#money-remittance-options)), which must be used in the operation.

The supported operations are Sale, Sale & Tokenize, Refund, Linked Refunds, Reversals, MoTo Sale, MoTo Refund. For Linked Refunds and Reversals, Money Remittance fields should be taken from the original Sale/MoTo/Refund when using the field `originalTransactionID`.

***Please note**: Money Remittance is available only for some acquirers and geographies. Please check with your Handpoint relationship manager about the availability of this functionality for your merchants.


## 7.1.0
**Features**:

We are introducing a new transaction type called [Pre-Authorization](javascripttransactiontypes#pre-auth). A pre-authorization charge, also known as a pre-auth or authorization hold, is a temporary hold placed on a customer's payment card. It's used to verify that the account is valid and has sufficient funds to cover a pending transaction, without actually debiting the cardholder's account upfront. 

A pre-authorized transaction can be increased or decreased ([Pre-Auth Increase](javascripttransactiontypes#pre-auth-increasedecrease)), for example if a tab was opened and the consumer is adding new orders going above the initial pre-authorized amount.  

A pre-authorized transaction can be captured ([Pre-Auth Capture](javascripttransactiontypes#pre-auth-capture)) to actually debit the cardholder's account. Depending on the merchant category code, the capture needs to happen between 7 and 31 days after the original pre-authorization. If not captured the funds will be automatically released by the issuing bank. 

A pre-authorized transaction can be fully released ([Pre-Auth Reversal](javascripttransactiontypes#pre-authcapture-reversal)), for example when renting a car, the pre-auth reversal allows the merchant to release the funds if the car was not damaged. 

## 7.0.0
**BREAKING CHANGE:**

We are introducing a new feature called [Get Transaction Status](javascriptterminalmanagement.md#17). This new feature allows you to query the Handpoint Gateway for the status of a transaction at any given time. For example, in case of an app crash, timeout, or connection problem, you are now able to use the [transaction reference](javascriptobjects.md#operation-start-result) returned at the start of a financial operation to get the status of a transaction in real time. You can use this feature to track the progress of your payments and troubleshoot any issues that may arise. This feature is available for all payment methods and currencies. 


When starting a new financial operation (sale, refund etc.) the `OperationStartResult` object will contain two new attributes:
- `transactionReference`: This universally unique identifier (UUID v4) will allow you to query the Handpoint gateway directly to know the outcome of the transaction. This feature is to be used in case there is a connection issue or any other problem preventing the terminal from delivering the end of transaction to your software.
- `transactionResult`: Promise that will resolve/reject with the [Transaction Result](javascriptobjects.md#18) object.

## 6.3.0

**Features**:

We are introducing a new feature called [Transaction Metadata](javascriptobjects.md#metadata). This new feature helps the customer to persist and echo back some data that belongs to the customer business domain at transaction time. The Transaction Metadata is sent in the request and echoed back in the response from the gateway. In addition, customers will be able to use the Transaction Metadata to search matching transactions from our Transaction Feed API.*****

The Transaction Metadata feature will be available when the Handpoint Payments app **v4.1.0** or higher is used.

***Please note**: Transactions will be available in TXN Feed API only if the request has reached the gateway.

## 6.2.1

**Fixes**:
- Reconnection management.

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
