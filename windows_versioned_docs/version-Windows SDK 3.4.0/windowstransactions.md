---
sidebar_position: 5
id: windowstransactions
---


# Transaction Types

:::caution
Since [**Windows SDK 3.3.0**](windowsreleasenotes#330) the Duplicate Check service it will be **enabled by default** when Handpoint Payments app **v4.0.0.** or higher is used. (Handpoint **Android SDK 7.0.0** or higher).
:::

## Sale

`Sale` <span class="badge badge--info">Method</span>

A sale initiates a transaction with the payment terminal. In it's simplest form you only have to pass the **amount** and **currency** but it also accepts a map with optional parameters.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span><br />*BigInteger*    | 		Transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span><br />[*Currency*](windowsobjects.md#1)     | 		Currency of the transaction.|
| `map` <br />*Map*     | 		A map including [*optional transaction parameters.*](windowsobjects.md#3)|


**Code example**

```csharp
// Basic
this.Hapi.Sale(new BigInteger("1000"), Currency.EUR);

// With options
Dictionary map = new Dictionary();
map.Add(XmlTag.CustomerReference.Tag(), "YourCustomerReference");
map.Add(XmlTag.Metadata1.Tag(), "Data 1");

this.Hapi.Sale(new BigInteger("1000"), Currency.EUR, map);
```

#### Events invoked

**[*currentTransactionStatus*](windowsevents.md#4)** 

This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'
***

**[*signatureRequired*](windowsevents.md#5)**

This event is invoked if the card issuer requires the cardholder to sign the transaction receipt.
****

**[*endOfTransaction*](windowsevents.md#6)**

This event is invoked when the transaction is completed, it contains the transaction result and receipts. 
****

 **Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the operation was successfully sent to the payment terminal|



## Sale And Tokenize Card

`SaleAndTokenizeCard` <span class="badge badge--info">Method</span>

A sale operation which also returns a card token. This functionality is not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span><br />*BigInteger*     | 		Transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span><br />[*Currency*](windowsobjects.md#1)      | 		Currency of the transaction.|
| `map` <br />*Map*     | 		A map including [*optional transaction parameters.*](windowobjects#3)|

**Code example**

```csharp
//Initiate a sale for 10.00 in Great British Pounds
api.SaleAndTokenizeCard(new BigInteger("1000"),Currency.GBP);
```

#### Events invoked

**[*currentTransactionStatus*](windowsevents.md#4)**

This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'
****

**[*signatureRequired*](windowsevents.md#5)**

This event is invoked if the card issuer requires the cardholder to sign the transaction receipt.
****

**[*endOfTransaction*](windowsevents.md#6)**

This event is invoked when the transaction is completed, it contains the transaction result and receipts. 
****

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the operation was successfully sent to the payment terminal|


## Sale Reversal

`SaleReversal` <span class="badge badge--info">Method</span>

A sale reversal, also called sale VOID allows the user to reverse a previous sale operation. This operation reverts (if possible) a specific sale identified with a transaction id. In its simplest form you only have to pass the amount, currency and originalTransactionID but it also accepts a map with optional parameters. Note that transactions can only be reversed within a 24 hours timeframe or until the daily batch of transactions has been sent for submission.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span><br />*BigInteger*     | 		Transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span><br />[*Currency*](windowsobjects.md#1)      | 		Currency of the transaction.|
| `originalTransactionID` <span class="badge badge--primary">Required</span><br />*String*     | 		Id of the original sale transaction (EFTTransactionID)|
| `map` <br />*Map*     | 		A map including [*optional transaction parameters.*](windowobjects#3)|

**Code example**

```csharp
//Initiate a reversal for 10.00 Pounds
api.SaleReversal(new BigInteger(1000),Currency.GBP,"00000000-0000-0000-0000-000000000000");
```

#### Events invoked

**[*currentTransactionStatus*](windowsevents.md#4)**

Invoked during a transaction, it fetches statuses coming from the card reader (ex : 'waiting for card' or 'waiting for PIN entry')
****

**[*signatureRequired*](windowsevents.md#5)**

This event is invoked if the card issuer requires the cardholder to sign the transaction receipt.
****

**[*endOfTransaction*](windowsevents.md#6)**

This event is invoked when the transaction is completed, it contains the transaction result and receipts. 
****

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the operation was successfully sent to the payment terminal|


## Refund

`Refund` <span class="badge badge--info">Method</span>

A refund operation moves funds from the merchant account to the cardholder´s credit card. In it's simplest form you only have to pass the amount and currency but it also accepts a map with optional parameters. Note that a card is required to be swiped, dipped or tapped for this operation. For Interac (Canadian Debit Network), refunds can only be processed until Interac closes the batch of transactions at night.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span><br />*BigInteger*     | 		Transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span><br />[*Currency*](windowsobjects.md#1)      | 		Currency of the transaction.|
| `originalTransactionID`<br />*String*     | 		Id of the original sale transaction (EFTTransactionID)|
| `map` <br />*Map*  | A map including [*optional transaction parameters.*](windowobjects#3)|

**Code example**

```csharp
//Initiate a refund for 10.00 in Great British Pounds
api.Refund(new BigInteger(1000),Currency.GBP,"00000000-0000-0000-0000-000000000000");
```

#### Events invoked
**[*currentTransactionStatus*](windowsevents.md#4)** 

This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'
****

**[*signatureRequired*](windowsevents.md#5)** 

This event is invoked if the card issuer requires the cardholder to sign the transaction receipt.
****

**[*endOfTransaction*](windowsevents.md#6)**

This event is invoked when the transaction is completed, it contains the transaction result and receipts. 
****

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the operation was successfully sent to the payment terminal|



## Refund Reversal

`RefundReversal` <span class="badge badge--info">Method</span>

A Refund Reversal, also called Refund VOID allows the merchant to reverse a previous refund operation. This operation reverts (if possible) a specific refund identified with a transaction id. In its simplest form you only have to pass the amount, currency and originalTransactionID but it also accepts a map with optional parameters. Note that transactions can only be reversed within the same day as the transaction was made.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span><br />*BigInteger*     | 		Transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span><br />[*Currency*](windowsobjects.md#1)      | 		Currency of the transaction.|
| `originalTransactionID` <span class="badge badge--primary">Required</span><br />*String*     | Id of the original refund transaction (EFTTransactionID)|
| `map` <br />*Map*     | 		A map including [*optional transaction parameters.*](windowobjects#3)|


**Code example**

```csharp
//Initiate a refund reversal for 10.00 in Great British Pounds
api.RefundReversal(new BigInteger(1000),Currency.GBP,"00000000-0000-0000-0000-000000000000");
```

#### Events invoked

**[*currentTransactionStatus*](windowsevents.md#4)**

This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'
****

**[*signatureRequired*](windowsevents.md#5)**

This event is invoked if the card issuer requires the cardholder to sign the transaction receipt.
****

**[*endOfTransaction*](windowsevents.md#6)**

This event is invoked when the transaction is completed, it contains the transaction result and receipts. 
****

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the operation was successfully sent to the payment terminal|

## MoTo Sale

`moToSale` <span class="badge badge--info">Method</span>

Mail Order /Telephone Order (MOTO) sale. MOTO is a type of card-not-present (CNP) transaction in which services are paid and delivered via telephone, mail, fax, or internet communication. MOTO has become synonymous with any financial transaction where the entity taking payment does not physically see the card used to make the purchase.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span><br />*BigInteger*     | Transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span><br />*Currency*     | Currency of the transaction.|
| `map` <br />*Map*     | A map including [*optional transaction parameters.*](windowobjects#3)|

**Code example**

```csharp
// Basic
this.Hapi.MotoSale(new BigInteger("1000"), Currency.EUR);

// With options
Dictionary dic = new Dictionary();
dic.Add(XmlTag.CustomerReference.Tag(), "YourCustomerReference");

this.Hapi.MotoSale(new BigInteger("1000"), Currency.EUR, dic);
```
#### Events invoked

**[*currentTransactionStatus*](windowsevents.md#4)**

This event gets statuses from the payment SDK during the transaction, for example 'processing'.
****

**[*endOfTransaction*](windowsevents.md#6)**

This event is invoked when the transaction is completed, it contains the transaction result and receipts. 
****

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the operation was successfully sent to the gateway|


## MoTo Refund 

`moToRefund` <span class="badge badge--info">Method</span>

A MOTO refund operation moves funds from the merchant account to the cardholder´s credit card. In it's simplest form you only have to pass the amount and currency but it also accepts the original transaction id. MOTO Refund is a type of card-not-present (CNP) transaction in which services are refunded via telephone, mail, fax, or internet communication. MOTO has become synonymous with any financial transaction where the entity taking payment does not physically see the card used to make the purchase or refund.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span><br />*BigInteger*     | Transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span>v*Currency*     | Currency of the transaction.|
| `originalTransactionId`<br /> *String*     | If present it links the refund with a previous sale. It effectively limits the maximum amount refunded to that of the original transaction.|
| `map` <br />*Map*     | A map including [*optional transaction parameters.*](windowobjects#3)|

**Code example**

```csharp
this.Hapi.MotoRefund(new BigInteger(1000), Currency.EUR);

this.Hapi.MotoRefund(new BigInteger(1000), Currency.EUR, "00000000-0000-0000-0000-000000000000");
```
#### Events invoked

**[*currentTransactionStatus*](windowsevents.md#4)**

This event gets statuses from the payment SDK during the transaction, for example 'processing'.
****

**[*endOfTransaction*](windowsevents.md#6)**

This event is invoked when the transaction is completed, it contains the transaction result and receipts. 
****

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the operation was successfully sent to the gateway|


## MoTo Reversal

`moToReversal` <span class="badge badge--info">Method</span>

A MOTO reversal, also called VOID allows the user to reverse a previous sale/refund operation. This operation reverts (if possible) a specific operation identified with a transaction id. Note that transactions can only be reversed within a 24 hours timeframe or until the daily batch of transactions has been sent for submission. MOTO Reversal is a type of card-not-present (CNP) transaction used to reverse a previous MOTO Sale or MOTO Refund.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `originalTransactionId` <span class="badge badge--primary">Required</span><br /> *String*     | Id of the original sale transaction.|
| `map` *Map*     | A map including optional transaction parameters|

**Code example**

```csharp
this.Hapi.MotoReversal("00000000-0000-0000-0000-000000000000");
```
#### Events invoked

**[*currentTransactionStatus*](windowsevents.md#4)**

This event gets statuses from the payment SDK during the transaction, for example 'processing'.
****

**[*endOfTransaction*](windowsevents.md#6)**

This event is invoked when the transaction is completed, it contains the transaction result and receipts. 
****

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the operation was successfully sent to the gateway|

## Print Receipt

`PrintReceipt` <span class="badge badge--info">Method</span>

Print on demand functionality allowing the merchant to print any HTML formatted receipt. It is possible to print images or barcodes as well as passing directly a URL to the printReceipt function. A bitmap can also be printed, in order to do so it needs to be rendered as an image and inserted into the html.

:::tip
The receipts are usually received as URLs in the transaction result from the terminal but note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats. 
:::

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `receipt` <span class="badge badge--primary">Required</span><br />*String*     | 		HTML receipt or url to locate the receipt, it can be found in the response of a financial operation, in the fields merchantReceipt or customerReceipt. The receipt must match the following [HTML Print Format](https://handpoint.atlassian.net/wiki/spaces/PD/pages/1409875969/Html+Print+Format)|

**Code example**

```csharp
// string validReceipt = '...';
bool success = api.PrintReceipt(validReceipt);
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the receipt was sent to the printer, false otherwise|


## Signature Result

`SignatureResult` <span class="badge badge--info">Method</span>

A signatureRequired event is invoked during a transaction when a signature verification is required, for example when a payment is done with a swiped or chip and signature card. The merchant is required to ask the cardholder for signature and approve (or decline) the transaction. signatureResult tells the payment terminal if the signature was approved by passing the value true in the method. To decline a signature event then false should be passed to the payment terminal. Note that this event is only required for an HiLite integration and can be safely ignored for a PAX or Telpo integration.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `accepted` <span class="badge badge--primary">Required</span><br />*Boolean*     | 		pass true if merchant accepts customer signature|

**Code example**

```csharp
//Receiving a SignatureRequest from the SDK.
public void SignatureRequired(SignatureRequest signatureRequest, Device device)
{
    //If you accept the signature
    api.SignatureResult(true);
}
```

#### Events invoked

**[*currentTransactionStatus*](windowsevents.md#4)**

This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'
****

**[*endOfTransaction*](windowsevents.md#6)**

This event is invoked when the transaction is completed, it contains the transaction result and receipts. 
****

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the operation was successfully sent to the payment terminal|



## Tip Adjustment

`TipAdjustment` <span class="badge badge--info">Method</span>

A tip adjustment operation allows merchants to adjust the tip amount of a sale transaction before the batch of transactions is settled by the processor at the end of the day.
Note: This functionality is only available for the restaurant industry in the United States and the processors currently supporting this functionality are TSYS and VANTIV. This functionality is limited to HiLite terminals.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `tipAmount` <span class="badge badge--primary">Required</span> <br/>*BigInteger* | Tip amount added to the original (base) transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP). |
| `originalTransactionID` <span class="badge badge--primary">Required</span> <br/>*String*     | Id of the original sale transaction (EFTTransactionID) |


**Code example**

```csharp
//Initiate a tip adjustment for $10.00
Task<FinancialStatus> result = hapi.TipAdjustment(BigInteger.Parse("1000"), "2bc23910-c3b3-11e6-9e62-07b2a5f091ec");
FinancialStatus status = result.Result;
if (status != FinancialStatus.FAILED)
{
	if (status == FinancialStatus.AUTHORISED)
	{
		//Success!
	}
	else
	{
		//Declined
	}
}
```

**Returns**

Result of the tip adjustment transaction, this is an asynchronous method that returns a task called `<FinancialStatus>`, the possible values are :

| Parameter      | Notes |
| ----------- | ----------- |
| **FinancialStatus**| - **FinancialStatus.AUTHORISED** (tip adjustment approved by the processor) <br />- **FinancialStatus.FAILED** (system error or timeout) <br />- **FinancialStatus.DECLINED** (tip adjustment declined by the processor)|


If two tip adjustments are sent for the same sale transaction, the second tip adjustment will override the first one. In case the transaction fails (not declined) we recommend that you prompt the user of the POS to retry the adjustment.

## Tokenize Card

`TokenizeCard` <span class="badge badge--info">Method</span>

Returns a card token (representing the card number). This functionality is not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice. 

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `map` <br />*Map*     | A map including [*optional transaction parameters.*](windowsobjects.md#3)|

**Code example**

```csharp
//Initiates a card tokenization operation.
api.TokenizeCard();
```

#### Events invoked

**[*currentTransactionStatus*](windowsevents.md#4)**

This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'
****

**[*signatureRequired*](windowsevents.md#5)**

This event is invoked if the card issuer requires the cardholder to sign the transaction receipt.
****

**[*endOfTransaction*](windowsevents.md#6)** 

This event is invoked when the transaction is completed, it contains the transaction result and receipts. 
****

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the operation was successfully sent to the payment terminal|



## Stop Current Transaction

`StopCurrentTransaction` <span class="badge badge--info">Method</span>

This method attempts to cancel the current transaction on the payment terminal. Note that operations can only be cancelled before requests are sent to the gateway. There is a flag called [cancelAllowed](windowobjects#status-info) in the currentTransactionStatus event that can be used to check if the transaction is in a state allowing the transaction to be cancelled.


**Code example**

```csharp
this.Hapi.StopCurrentTransaction();
```

#### Events invoked

**[*currentTransactionStatus*](windowsevents.md#4)**

This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'
****

**[*endOfTransaction*](windowsevents.md#6)** 

This event is invoked when the transaction is completed, it contains the transaction result and receipts. 
****

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the operation was successfully sent to the payment terminal|
