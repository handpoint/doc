---
sidebar_position: 2
id: windowsreleasenotes
---

# Release Notes

:::tip
Do not miss any news from Handpoint releases. [Subscribe](https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e) to our Handpoint Newsletter!
:::

## 4.3.1
**Features:**
A new `tokenize` parameter is available under [Optional Transaction Parameters](windowsobjects.md#3). See [Android SDK 7.1009.5](/android/androidreleasenotes#7.1009.5) and [Tokenized Payments Operations](/android/androidtransactions#cloudTokenizedPaymentsOperations) for detailed information on how to use this feature.

## 4.2.0
**Features:**

We're excited to announce the latest update to our Windows SDK, featuring support of Mastercard MoneySend fields for money remittance merchants. In order to use this functionality, we provide you with an object called [Money Remittance Options](windowsobjects.md#money-remittance-options), which must be used in the operation.

The supported operations are Sale, Sale & Tokenize, Refund, Linked Refunds, Reversals, MoTo Sale, MoTo Refund. For Linked Refunds and Reversals, Money Remittance fields should be taken from the original Sale/MoTo/Refund when using the field `originalTransactionID`.

***Please note**: Money Remittance is only available for some acquirers and geographies. Please check with your Handpoint relationship manager about the availability of this functionality for your merchants.


## 4.1.0
**Features**:

We are introducing a new transaction type called [Pre-Authorization](windowstransactions.md#pre-auth). A pre-authorization charge, also known as a pre-auth or authorization hold, is a temporary hold placed on a customer's payment card. It's used to verify that the account is valid and has sufficient funds to cover a pending transaction, without actually debiting the cardholder's account upfront. 

A pre-authorized transaction can be increased or decreased ([Pre-Auth Increase](windowstransactions.md#pre-auth-increasedecrease)), for example if a tab was opened and the consumer is adding new orders going above the initial pre-authorized amount.  

A pre-authorized transaction can be captured ([Pre-Auth Capture](windowstransactions.md#pre-auth-capture)) to actually debit the cardholder's account. Depending on the merchant category code, the capture needs to happen between 7 and 31 days after the original pre-authorization. If not captured the funds will be automatically released by the issuing bank. 

A pre-authorized transaction can be fully released ([Pre-Auth Reversal](windowstransactions.md#pre-authcapture-reversal)), for example when renting a car, the pre-auth reversal allows the merchant to release the funds if the car was not damaged. 

## 4.0.0

**BREAKING CHANGE:**

We are introducing a new feature called [Get Transaction Status](windowsdevicemanagement.md#get-transaction-status). This new feature allows you to query the Handpoint Gateway for the status of a transaction at any given time. For example, in case of an app crash, timeout, or connection problem, you are now able to use the [transaction reference](windowsobjects.md#OperationStartResult) returned at the start of a financial operation to get the status of a transaction in real time. You can use this feature to track the progress of your payments and troubleshoot any issues that may arise. This feature is available for all payment methods and currencies. 

All financial operations will now be returning an [OperationStartResult](windowsobjects.md#OperationStartResult) object instead of a boolean to indicate that the operation was successfully sent to the payment terminal:
The `transactionReference` field is a unique identifier for the transaction that you will receive immediately after sending the transaction request to the terminal. If for any reason you do not receive the [TransactionResult](windowsobjects.md#14) object at the end of the transaction you will now be able to use the `transactionReference` to directly query our Gateway and know instantly if the transaction for which you do not know the outcome was approved or declined.

## 3.4.0
**Features**

We are introducing a new feature called [Transaction Metadata](windowsobjects.md#metadata). This new feature helps the customer to persist and echo back some data that belongs to the customer business domain at transaction time. The Transaction Metadata is sent in the request and echoed back in the response from the gateway. In addition, customers will be able to use the Transaction Metadata to search matching transactions from our Transaction Feed API.*****

The Transaction Metadata feature will be available when the Handpoint Payments app **v4.1.0** or higher is used. 

***Please note**: Transactions will be available in TXN Feed API only if the request has reached the gateway.

## 3.3.0
**Features:**

We are introducing a new feature called duplicate payment check. Looking back at our data we have seen that when a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are now flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the 2nd charge. This menu will automatically be prompted on the payment terminal if a suspicious charge is detected. We are only prompting the duplicate menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe. 

The duplicate payment check feature will be **enabled by default** when the Handpoint Payments app **v4.0.0.** or higher is used. You do not need to update to v3.3.0 to benefit from this new feature. v3.3.0 will only allow you to disable the duplicate payment check feature if you wish to not support it. 

Here is an example showing how to disable the duplicate payment check functionality:
```csharp
Dictionary <string, string> options = new Dictionary<string, string>();
options.Add(XmlTag.DuplicateCheck.Tag(), "0");
hapi.Sale(amount, currency, options);
```

## 3.2.6 
- Cloud dependencies update (NewtonSoft Lib)

## 3.2.5

**Fixes:**
- Nullpointer Exception on Cloud connect without network connection.
- Cloud dependencies update.
- Connection handling on transitions states: Connecting and Disconnecting.
- Automatic Cloud reconnection handling.
- Unable to manually disconnect during a transaction.


## 3.2.4
**Fixes:**
- `SignatureResult` method. Signature result is always true no matter what is passed to the method.

## 3.2.3
**Fixes:**
- Crash on signature result (DATECS)

## 3.2.1
- Improved SDK reconnection logic in case of network unstability. 

## 3.2.0

**CLOUD Features:**

- Mail Order/Telephone Order (MoTo).
- StopCurrentTransaction operation.

## 3.1.7

**Fixes:**

- CLOUD: Improved initial retry mechanism for triggering transactions.
- CLOUD: Increased initial timeout for triggering transactions.



