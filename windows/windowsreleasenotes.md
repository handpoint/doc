---
sidebar_position: 2
id: windowsreleasenotes
---

# Release Notes

:::tip
Do not miss any news from Handpoint releases. [Subscribe](https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e) to our Handpoint Newsletter!
:::

## 4.0.0
**Features**

We are introducing a new feature called [Get Transaction Status](windowsdevicemanagement.md#get-transaction-status). This new feature allows you to query the Handpoint Gateway for the status of a transaction at any given time. For example, in case of an app crash, timeout, or connection problem, you are now able to use the [transaction reference](windowsobjects.md#OperationStartResult) returned at the start of a financial operation to get the status of a transaction in real time. You can use this feature to track the progress of your payments and troubleshoot any issues that may arise. This feature is available for all payment methods and currencies. 

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



