---
sidebar_position: 5
id: windowstransactions
---


# Transactions

## Sale

`Sale`

A sale initiates a payment operation to the card reader. In it's simplest form you only have to pass the amount and currency but it also accepts a map with extra parameters.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span><br />*BigInteger*    | 		Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span><br />[*Currency*](windowsobjects.md#1)     | 		Currency of the charge|
| `map` <span class="badge badge--primary">Required</span><br />*Map*     | 		A map including extra [*optional transaction parameters.*](windowsobjects.md#3)|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the system which device you want to use for the operations. If none is supplied the system will attempt to use a default device, if any.|

**Code example**

```csharp
//Initiate a sale for 10.00 Pounds
api.Sale(new BigInteger(1000),Currency.GBP);
```

#### Events invoked

**[*currentTransactionStatus*](windowsevents.md#4)** 

Invoked during a transaction, it fetches statuses coming from the card reader (ex : 'waiting for card' or 'waiting for PIN entry')
***

**[*signatureRequired*](windowsevents.md#5)**

Invoked if card verification requires signature.
****

**[*endOfTransaction*](windowsevents.md#6)**

Invoked when the card reader finishes processing the transaction
****

 **Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the operation was successfully sent to device|



## Sale And Tokenize Card

`SaleAndTokenizeCard`

A sale that returns the tokenized version of the card used if successful. (not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice)

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span><br />*BigInteger*     | 		Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span><br />[*Currency*](windowsobjects.md#1)      | 		Currency of the charge|
| `map` <span class="badge badge--primary">Required</span><br />*Map*     | 		A map including extra [*optional transaction parameters.*](#3)|

**Code example**

```csharp
//Initiate a sale for 10.00 in Great British Pounds
api.SaleAndTokenizeCard(new BigInteger("1000"),Currency.GBP);
```

#### Events invoked

**[*currentTransactionStatus*](windowsevents.md#4)**

Invoked during a transaction, it fetches statuses coming from the card reader (ex : 'waiting for card' or 'waiting for PIN entry').
****

**[*signatureRequired*](windowsevents.md#5)**

Invoked if card verification requires signature.
****

**[*endOfTransaction*](windowsevents.md#6)**

Invoked when the card reader finishes processing the transaction.

****

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the operation was successfully sent to device|


## Sale Reversal

`SaleReversal`

A sale Reversal, also called sale VOID allows the user to reverse a previous sale operation. This operation reverts (if possible) a specific sale identified with a transaction id. In it's simplest form you only have to pass the amount, currency and originalTransactionID but it also accepts a map with extra parameters. Note that transactions can only be reversed within the same day as the transaction was made.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span><br />*BigInteger*     | 		Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span><br />[*Currency*](windowsobjects.md#1)      | 		Currency of the charge|
| `originalTransactionID` <span class="badge badge--primary">Required</span><br />*String*     | 		As received from the card reader (EFTTransactionID)|
| `map` <span class="badge badge--primary">Required</span><br />*Map*     | 		A map including extra [*optional transaction parameters.*](#3)|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the system which device you want to use for the operations. If none is supplied the system will attempt to use a default device, if any.|

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

Invoked if card verification requires signature.
****

**[*endOfTransaction*](windowsevents.md#6)**

Invoked when the card reader finishes processing the transaction
****

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the operation was successfully sent to device|


## Refund

`Refund`

A refund initiates a refund operation to the card reader. This operation moves funds from the merchant account to the cardholder´s credit card. In it's simplest form you only have to pass the amount and currency but it also accepts a map with extra parameters.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span><br />*BigInteger*     | 		Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span><br />[*Currency*](windowsobjects.md#1)      | 		Currency of the charge|
| `originalTransactionID` <span class="badge badge--primary">Required</span><br />*String*     | 		As received from the card reader (EFTTransactionID)|
| `map` <span class="badge badge--primary">Required</span><br />*Map*     | 		A map including extra [*optional transaction parameters.*](#3)|

**Code example**

```csharp
//Initiate a refund for 10.00 in Great British Pounds
api.Refund(new BigInteger(1000),Currency.GBP,"00000000-0000-0000-0000-000000000000");
```

#### Events invoked
**[*currentTransactionStatus*](windowsevents.md#4)** 

Invoked during a transaction, it fetches statuses coming from the card reader (ex : 'waiting for card' or 'waiting for PIN entry')
****

**[*signatureRequired*](windowsevents.md#5)** 

Invoked if card verification requires signature.
****

**[*endOfTransaction*](windowsevents.md#6)**

Invoked when the card reader finishes processing the transaction
****

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the operation was successfully sent to device|



## Refund reversal

`RefundReversal`

A Refund Reversal, also called Refund VOID allows the merchant to reverse a previous refund operation. This operation reverts (if possible) a specific refund identified with a transaction id. In it's simplest form you only have to pass the amount, currency and originalTransactionID but it also accepts a map with extra parameters. Note that transactions can only be reversed within the same day as the transaction was made.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span><br />*BigInteger*     | 		Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span><br />[*Currency*](windowsobjects.md#1)      | 		Currency of the charge|
| `originalTransactionID` <span class="badge badge--primary">Required</span><br />*String*     | 		As received from the card reader (EFTTransactionID)|
| `map` <span class="badge badge--primary">Required</span><br />*Map*     | 		A map including extra [*optional transaction parameters.*](#3)|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the system which device you want to use for the operations. If none is supplied the system will attempt to use a default device, if any.|

**Code example**

```csharp
//Initiate a refund reversal for 10.00 in Great British Pounds
api.RefundReversal(new BigInteger(1000),Currency.GBP,"00000000-0000-0000-0000-000000000000");
```

#### Events invoked

**[*currentTransactionStatus*](windowsevents.md#4)**

Invoked during a transaction, it fetches statuses coming from the card reader (ex : 'waiting for card' or 'waiting for PIN entry')
****

**[*signatureRequired*](windowsevents.md#5)**

Invoked if card verification requires signature.
****

**[*endOfTransaction*](windowsevents.md#6)**

Invoked when the card reader finishes processing the transaction
***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the operation was successfully sent to device|


## Print Receipt

`PrintReceipt`

Print on demand functionality allowing the merchant to print any HTML formatted receipt. Available for CLOUD connections

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `receipt` <span class="badge badge--primary">Required</span><br />*String*     | 		HTML receipt or url to locate the receipt, it can be found in the response of a financial operation, in the fields merchantReceipt or customerReceipt. The receipt must match the following HTML Print Format|

**Code example**

```csharp
// string validReceipt = '...';
bool success = api.PrintReceipt(validReceipt);
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the receipt was sent to the printer, false otherwise|


## Signature result

`SignatureResult`

A signatureRequired event is invoked during transaction when signature verification is needed (f.ex when payment is done with a magstripe card). The merchant is required to ask the cardholder for signature and approve (or disapprove) the signature. signatureResult tells the card reader if the signature was approved by passing true in the method. To disapprove then false is passed. Integrations with PAX or Telpo devices DO NOT need the implementation of this event.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `accepted` <span class="badge badge--primary">Required</span><br />*Boolean*     | 		pass true if merchant accepts customer signature|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the system which device you want to use for the operations. If none is supplied the system will attempt to use a default device, if any.|

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

Invoked during a transaction, it fetches statuses coming from the card reader (ex : 'waiting for card' or 'waiting for PIN entry')
****

**[*endOfTransaction*](windowsevents.md#6)**

Invoked when the card reader finishes processing the transaction
****

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the operation was successfully sent to device|



## Tip Adjustment

`TipAdjustment`

A tip adjustment operation allows merchants to adjust the tip amount of a sale transaction before the batch of transactions is settled by the processor at the end of the day.
Note: This functionality is only available for the restaurant industry in the United States and the processors currently supporting this functionality are TSYS and VANTIV.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `tipAmount` <span class="badge badge--primary">Required</span> <br/>*BigInteger* | Tip amount added to the original (base) transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP) |
| `originalTransactionID` <span class="badge badge--primary">Required</span> <br/>*String*     | Unique id of the original sale transaction as received from the card reader (EFTTransactionID) |


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

`TokenizeCard`

Returns the tokenized version of the card used if successful (not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice).

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `map` <span class="badge badge--primary">Required</span><br />*Map*     | 		A map including extra optional transaction parameters|

**Code example**

```csharp
//Initiates a card tokenization operation.
api.TokenizeCard();
```

#### Events invoked

**[*currentTransactionStatus*](windowsevents.md#4)**

Invoked during a transaction, it fetches statuses coming from the card reader (ex : 'waiting for card' or 'waiting for PIN entry').
****

**[*signatureRequired*](windowsevents.md#5)**

Invoked if card verification requires signature.
****

**[*endOfTransaction*](windowsevents.md#6)** 

Invoked when the card reader finishes processing the transaction.
****

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `true` if the operation was successfully sent to device|

