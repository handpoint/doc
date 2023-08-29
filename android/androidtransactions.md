---
sidebar_position: 5
id: androidtransactions
---

# Transaction Types



## Sale{#2}

`Sale`

A sale initiates a payment operation to the card reader. In it's simplest form you only have to pass the amount and currency but it also accepts tip configuration and a map with extra parameters.


**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>  <br />*BigInteger*    | Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span> <br />[*Currency*](androidobjects.md#13)     | Currency of the charge|
| `options` <br />[*SaleOptions*](androidobjects.md#4)      | An object to store all the customization options for a sale.|

**Code example**

```java
//Initiate a sale for 10.00 in Great British Pounds
api.sale(new BigInteger("1000"),Currency.GBP);

//Initiate a sale for 10.00 in Great British Pounds with a tipping configuration
//This feature is only available for PAX and Telpo devices
TipConfiguration tipConfiguration = new TipConfiguration();
tipConfiguration.setTipPercentages(Arrays.asList(5, 10, 15, 20));
tipConfiguration.setTipAmount(new BigInteger("1000"));
tipConfiguration.setBaseAmount(new BigInteger("1000"));
tipConfiguration.setEnterAmountEnabled(true);
tipConfiguration.setFooter("Thank you");
tipConfiguration.setSkipEnabled(true);
// Metadata
Metadata metadata = new Metadata("Data 1", "Data 2", "Data 3", "Data 4", "Data 5");

SaleOptions options = new SaleOptions();
options.setTipConfiguration(tipConfiguration);
options.setMetadata(metadata);

api.sale(new BigInteger("1000"),Currency.GBP, options);
```

**Events invoked**

[**currentTransactionStatus**](androideventlisteners.md#14)

Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry').
***

[**signatureRequired**](androideventlisteners.md#15)

Invoked if card verification requires signature.
***

[**endOfTransaction**](androideventlisteners.md#16)

Invoked when the terminal finishes processing the transaction.
***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartResult](androidobjects.md#OperationStartResult)*| Object containing information about the financial operation started. Most specifically the `transactionReference` which **must** be saved on your end in case you do not get back the transaction result object at the end of the transaction. The `transactionReference` will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction.|


## Sale And Tokenize Card{#3}

A [sale](#2) operation which also returns a card token. (not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice)

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>  <br />*BigInteger*     | Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span> <br />[*Currency*](androidobjects.md#13)     | Currency of the charge|
| `options` <br />[*SaleAndTokenizeOptions*](androidobjects.md#sale-and-tokenize-options)     | An object to store all the customization options for a sale.|

**Code example**

```java
//Initiate a sale for 10.00 in Great British Pounds
SaleOptions options = new SaleAndTokenizeOptions();
api.sale(new BigInteger("1000"),Currency.GBP, options);


//Initiate a sale for 10.00 in Great British Pounds with a tipping configuration
//This feature is only available for PAX and Telpo devices

TipConfiguration tipConfiguration = new TipConfiguration();
tipConfiguration.setTipPercentages(Arrays.asList(5, 10, 15, 20));
tipConfiguration.setTipAmount(new BigInteger("1000"));
tipConfiguration.setBaseAmount(new BigInteger("1000"));
tipConfiguration.setEnterAmountEnabled(true);
tipConfiguration.setFooter("Thank you");
tipConfiguration.setSkipEnabled(true);
SaleOptions options = new SaleOptions();
options.setTipConfiguration(tipConfiguration);
options.toSaleAndTokenizeOptions();

api.sale(new BigInteger("1000"),Currency.GBP,options);
```

**Events invoked**

[**currentTransactionStatus**](androideventlisteners.md#14)

Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry').
***

[**signatureRequired**](androideventlisteners.md#15)

Invoked if card verification requires signature.
***

[**endOfTransaction**](androideventlisteners.md#16)

Invoked when the terminal finishes processing the transaction.
***

 **Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartResult](androidobjects.md#OperationStartResult)*| Object containing information about the financial operation started. Most specifically the `transactionReference` which **must** be saved on your end in case you do not get back the transaction result object at the end of the transaction. The `transactionReference` will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction.|



## Sale Reversal{#4}

`saleReversal`

A sale reversal, also called sale VOID allows the user to reverse a previous sale operation. This operation reverts (if possible) a specific sale identified with a transaction id. In its simplest form you only have to pass the amount, currency and originalTransactionID but it also accepts a map with extra parameters. Note that transactions can only be reversed within a 24 hours timeframe or until the daily batch of transactions has been sent for submission.

**Parameters**


| Parameter        | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>  <br />*BigInteger*     | Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span> <br />[*Currency*](androidobjects.md#13)     | Currency of the charge|
| `originalTransactionID` <span class="badge badge--primary">Required</span> <br />*String*     | Id of the original sale transaction|
| `options` <br />[*SaleOptions*](androidobjects.md#4)     | An object to store all the customization options for a sale.|

**Code example**

```java
//Initiate a reversal for 10.00 in Great British Pounds
api.saleReversal(new BigInteger("1000"),Currency.GBP,"00000000-0000-0000-0000-000000000000");
```

**Events invoked**

[**currentTransactionStatus**](androideventlisteners.md#14)

Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry').
***

[**signatureRequired**](androideventlisteners.md#15)

Invoked if card verification requires signature.
***

[**endOfTransaction**](androideventlisteners.md#16)

Invoked when the terminal finishes processing the transaction.
***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartResult](androidobjects.md#OperationStartResult)*| Object containing information about the financial operation started. Most specifically the `transactionReference` which **must** be saved on your end in case you do not get back the transaction result object at the end of the transaction. The `transactionReference` will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction.|


## Refund{#5}

`refund`

A refund operation moves funds from the merchant account to the cardholder´s credit card. In it's simplest form you only have to pass the amount and currency but it also accepts a map with extra parameters. Note that a card is required to be swiped, dipped or tapped for this operation. For Interac (Canadian Debit Network), refunds can only be processed until Interac closes the batch of transactions at night.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>  <br />*BigInteger*     | Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span> <br />[*Currency*](androidobjects.md#13)     | Currency of the charge|
| `originalTransactionID` <br />*String*     | If present it links the refund with a previous sale. It effectively limits the maximum amount refunded to that of the original transaction.|
| `options` <br />[*SaleOptions*](androidobjects.md#4)     | An object to store all the customization options for a refund.|

**Code example**

```java
//Initiate a refund for 10.00 in Great British Pounds
api.refund(new BigInteger("1000"),Currency.GBP,"00000000-0000-0000-0000-000000000000");
```

** Events invoked**

[**currentTransactionStatus**](androideventlisteners.md#14)

Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')
***

[**signatureRequired**](androideventlisteners.md#15)

Invoked if card verification requires signature.
***

[**endOfTransaction**](androideventlisteners.md#16)

Invoked when the terminal finishes processing the transaction
***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartResult](androidobjects.md#OperationStartResult)*| Object containing information about the financial operation started. Most specifically the `transactionReference` which **must** be saved on your end in case you do not get back the transaction result object at the end of the transaction. The `transactionReference` will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction.|


## Refund reversal{#6}

`refundReversal`

A refund reversal, also called refund VOID allows the merchant to reverse a previous refund operation. This operation reverts (if possible) a specific refund identified with a transaction id. In it's simplest form you only have to pass the amount, currency and originalTransactionID but it also accepts a map with extra parameters. Note that transactions can only be reversed within a 24 hours timeframe or until the daily batch of transactions has been sent for submission.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>  <br />*BigInteger*     | Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span> <br />[*Currency*](androidobjects.md#13)     | Currency of the charge|
| `originalTransactionID` <span class="badge badge--primary">Required</span> <br />*String*     | transaction id of the original refund|
| `options` <br />[*SaleOptions*](androidobjects.md#4)     | An object to store all the customization options for the transaction.|

**Code example**

```java
//Initiate a refund reversal for 10.00 in Great British Pounds
api.refundReversal(new BigInteger("1000"),Currency.GBP,"00000000-0000-0000-0000-000000000000");
```

**Events invoked**

[**currentTransactionStatus**](androideventlisteners.md#14)

Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry').
***

[**signatureRequired**](androideventlisteners.md#15)

Invoked if card verification requires signature.
***

[**endOfTransaction**](androideventlisteners.md#16)

Invoked when the terminal finishes processing the transaction.
***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartResult](androidobjects.md#OperationStartResult)*| Object containing information about the financial operation started. Most specifically the `transactionReference` which **must** be saved on your end in case you do not get back the transaction result object at the end of the transaction. The `transactionReference` will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction.|


## MoTo Sale{#7}

`MoToSale`

Mail Order /Telephone Order (MOTO) sale. MOTO is a type of card-not-present (CNP) transaction in which services are paid and delivered via telephone, mail, fax, or internet communication. MOTO has become synonymous with any financial transaction where the entity taking payment does not physically see the card used to make the purchase.


**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>  <br />*BigInteger*    | Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span> <br />[*Currency*](androidobjects.md#13)     | Currency of the charge|
| `options` <br />[*MoToOptions*](androidobjects.md#moto-options)      | An object to store optional parameters for a MoTo sale.|

**Code example**

```java
MoToOptions options = new MoToOptions();
options.setCustomerReference("MoTo Sale Example");

api.motoSale(new BigInteger("1000"), Currency.EUR, options);
```

**Events invoked**

[**currentTransactionStatus**](androideventlisteners.md#14)

Invoked during a transaction,  it fetches statuses coming from the sdk (ex : 'processing').

***

[**endOfTransaction**](androideventlisteners.md#16)

Invoked when the terminal finishes processing the transaction.
***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartResult](androidobjects.md#OperationStartResult)*| Object containing information about the financial operation started.|




## MoTo Refund{#8}

`moToRefund`

A MOTO refund operation moves funds from the merchant account to the cardholder´s credit card. In it's simplest form you only have to pass the amount and currency but it also accepts the original transaction id. MOTO Refund is a type of card-not-present (CNP) transaction in which services are refunded via telephone, mail, fax, or internet communication. MOTO has become synonymous with any financial transaction where the entity taking payment does not physically see the card used to make the purchase or refund.


**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>  <br />*BigInteger*    | Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span> <br />[*Currency*](androidobjects.md#13)     | Currency of the charge|
| `originalTransactionId` <br />*String*    | If present it links the refund with a previous sale. It effectively limits the maximum amount refunded to that of the original transaction.|
| `options` <br />[*MoToOptions*](androidobjects.md#moto-options)     | An object to store optional parameters for a MoTo refund.|

**Code example**

```java
MoToOptions options = new MoToOptions();
options.setCustomerReference("MoTo Refund Example");

api.motoRefund(new BigInteger("1000"), Currency.EUR, "00000000-0000-0000-0000-000000000000",options);
```
**Events invoked**

[**currentTransactionStatus**](androideventlisteners.md#14)

Invoked during a transaction,  it fetches statuses coming from the sdk (ex : 'processing').

***

[**endOfTransaction**](androideventlisteners.md#16)

Invoked when the terminal finishes processing the transaction.
***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartResult](androidobjects.md#OperationStartResult)*| Object containing information about the financial operation started.|


## MoTo Reversal{#9}

`moToReversal`

A MOTO reversal, also called VOID allows the user to reverse a previous sale/refund operation. This operation reverts (if possible) a specific operation identified with a transaction id. Note that transactions can only be reversed within a 24 hours timeframe or until the daily batch of transactions has been sent for submission. MOTO Reversal is a type of card-not-present (CNP) transaction used to reverse a previous MOTO Sale or MOTO Refund.


**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `originalTransactionId` <span class="badge badge--primary">Required</span>  <br />*String*    | Id of the original sale transaction.|
| `options` <br />[*MoToOptions*](androidobjects.md#moto-options)       | An object to store optional parameters for a MoTo reversal.|

**Code example**

```java
MoToOptions options = new MoToOptions();
options.setCustomerReference("MoTo Reversal Example");

api.motoReversal("00000000-0000-0000-0000-000000000000",options);
```
**Events invoked**

[**currentTransactionStatus**](androideventlisteners.md#14)

Invoked during a transaction,  it fetches statuses coming from the sdk (ex : 'processing').

***

[**endOfTransaction**](androideventlisteners.md#16)

Invoked when the terminal finishes processing the transaction.
***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartResult](androidobjects.md#OperationStartResult)*| Object containing information about the financial operation started.|


## Signature result

`signatureResult`

A signatureRequired event is invoked during a transaction when a signature verification is required (f.ex when a payment is done with a swiped or chip and sign card). The merchant is required to ask the cardholder for signature and approve (or decline) the signature. signatureResult tells the card reader if the signature was approved by passing the value true in the method. To decline a signature event then false should be passed to the card reader. Note that this event is only required for an HiLite or Hi5 integration and can be safely ignored for a PAX or Telpo integration.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `accepted` <span class="badge badge--primary">Required</span> <br />*Boolean*    | pass true if merchant accepts cardholder signature|

**Code example**

```java
//Approves signature automatically in signatureRequired event
@Override
public void signatureRequired(SignatureRequest signatureRequest, Device device){
	api.signatureResult(true);
}
```

**Events invoked**

[**currentTransactionStatus**](androideventlisteners.md#14)

Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry').
***

[**endOfTransaction**](androideventlisteners.md#16)

Invoked when the terminal finishes processing the transaction.
***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
|*[OperationStartResult](androidobjects.md#operation-start-result)*| Object containing information about the financial operation started. Most specifically the `transactionReference` which **must** be saved on your end in case you do not get back the transaction result object at the end of the transaction. The `transactionReference` will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction.|



## Tip Adjustment

`TipAdjustment`

A tip adjustment operation allows merchants to adjust the tip amount of a sale transaction before the batch of transactions is settled by the processor at the end of the day.
Note: This functionality is only available for the restaurant industry in the United States and the processors currently supporting this functionality are TSYS and VANTIV.

Dependencies:
The code example provided depends on RxJava, take a look a their documentation to see how to easily include this dependency in your android project. If you do not want to use RxJava or any additional dependencies then AsyncTask, provided by android, can be used instead for this asynchronous processing. Still we recommend using RxJava as it improves readability and maintainability.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `tipAmount` <span class="badge badge--primary">Required</span> <br />*BigDecimal*     | Tip amount added to the original (base) transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `originalTransactionID` <span class="badge badge--primary">Required</span> <br />*String*     | Unique id of the original sale transaction as received from the card reader (EFTTransactionID)|

**Code example**

```java
Observable.fromCallable(new Callable() {
	@Override
	public FinancialStatus call() throws Exception {
		return api.tipAdjustment(new BigDecimal(1000), "2bc23910-c3b3-11e6-9e62-07b2a5f091ec");
	}
})
.subscribeOn(Schedulers.io())
.observeOn(AndroidSchedulers.mainThread())
.subscribe(new Consumer() {
	@Override
	public void accept(@NonNull FinancialStatus status) throws Exception {
		if (status == FinancialStatus.AUTHORISED) {
			//SUCCESS
		} else if (status == FinancialStatus.DECLINED) {
			//DECLINED
		} else {
			//FAILED
	}
});
```

**Returns**


Result of the tip adjustment transaction, it returns a FinancialStatus, the possible values are :

| Parameter      | Notes |
| ----------- | ----------- |
| **FinancialStatus**| - **FinancialStatus.AUTHORISED** (tip adjustment approved by the processor) <br />  - **FinancialStatus.FAILED** (system error or timeout)<br /> - **FinancialStatus.DECLINED** (tip adjustment declined by the processor).|

If two tip adjustments are sent for the same sale transaction, the second tip adjustment will override the first one. In case the transaction fails (not declined) we recommend that you prompt the user of the POS to retry the adjustment.

## Tokenize Card{#12}

`tokenizeCard`

Returns a card token (not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice)

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `options` <br />[*SaleOptions*](androidobjects.md#4)     | An object to store all the customization options for the transaction.|

**Code example**

```java
//Tokenize a card
api.tokenizeCard();
```

**Events invoked**

[**currentTransactionStatus**](androideventlisteners.md#14)

Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry').
***

[**endOfTransaction**](androideventlisteners.md#16)

Invoked when the terminal finishes processing the transaction.
***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartResult](androidobjects.md#operation-start-result)*| Object containing information about the financial operation started. Most specifically the `transactionReference` which **must** be saved on your end in case you do not get back the transaction result object at the end of the transaction. The `transactionReference` will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction.|


## Tokenize And Modify

`tokenizedOperation`

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `currency` <span class="badge badge--primary">Required</span> <br />[*Currency*](androidobjects.md#13)     | Currency of the charge|
| `operationDto`  <br />[*OperationDto*](androidobjects.md#operation-dto)     | An object containing information about the financial operation being performed|
| `options` <span class="badge badge--primary">Required</span><br />[*SaleOptions*](androidobjects.md#4) / [*RefundOptions*](androidobjects.md#6)       | An object to store all the customization options for a sale.|

```java
//Tokenize a card and Sale operation. 
//Performs a tokenization of the card, whose token is sent to the integrator 
//through the Events.CardTokenized event. Once the integrator wishes to continue the operation,it must execute
//the resume method of the object sent through the event, with the data of the operation it wishes to perform.
//This operation will be executed andthe result will be received through the Events.Required EndOfTransaction event. 
//The operation supported is Sale.
Metadata metadata = new Metadata("Data 1", "Data 2", "Data 3", "Data 4", "Data 5");

SaleOptions options = new SaleOptions();
options.setMetadata(metadata);

api.tokenizedOperation(Currency.GBP,options);


//Tokenize a card and execute another operation.
//This operation executes the indicated operation, and at the the result of both operations will be 
//received through the Events.EndOfTransaction event.
//Operations supported are Refund, Sale Reversal and Refund Reversal.
Metadata metadataRefund = new Metadata("This", "is", "a", "Refund", ":D");

RefundOptions refundOptions = new RefundOptions();
refundOptions.setMetadata(metadataRefund);
OperationDto.Refund operation = new OperationDto.Refund(amount, currency, null, refundOptions);

api.tokenizedOperation(Currency.GBP,operation,options);

```


**Events invoked**

[**currentTransactionStatus**](androideventlisteners.md#14)

Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry').
***

[**cardTokenization**](androideventlisteners.md#card-tokenization)

Invoked when the terminal finishes processing the transaction. 

*Note*: It will only be invoked in the case of a Sale oepration.
***

[**endOfTransaction**](androideventlisteners.md#16)

Invoked when the terminal finishes processing the transaction.
***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartResult](androidobjects.md#operation-start-result)*| Object containing information about the financial operation started. Most specifically the `transactionReference` which **must** be saved on your end in case you do not get back the transaction result object at the end of the transaction. The `transactionReference` will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction.|

## Card PAN{#13}

`cardPan`

A cardPan request will return the full PAN of the card being swiped, dipped or tapped. Only the PANs of whitelisted card ranges will be returned by the Handpoint systems. This operation is mostly used to be able to process funds or points from loyalty cards.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `options` <br />[*SaleOptions*](androidobjects.md#4)     | An object to store all the customization options for the transaction.|

**Code example**

```java
//Gets the PAN of a card
api.cardPan();
```

**Events invoked**

[**currentTransactionStatus**](androideventlisteners.md#14)

Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry').
***

[**endOfTransaction**](androideventlisteners.md#16)

Invoked when the terminal finishes processing the transaction.
***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartResult](androidobjects.md#operation-start-result)*| Object containing information about the financial operation started. Most specifically the `transactionReference` which **must** be saved on your end in case you do not get back the transaction result object at the end of the transaction. The `transactionReference` will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction.|




## Pre-Auth

`preAuthorization`

A pre-auth initiates a pre-authorization operation to the card reader. In it's simplest form you only have to pass the amount and currency but it also accepts tip configuration and a map with extra parameters.
A pre-authorization charge, also known as a pre-auth or authorization hold, is a temporary hold placed on a customer's payment card. It's used to verify that the account is valid and has sufficient funds to cover a pending transaction, without actually debiting the cardholder's account upfront.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>  <br />*BigInteger*    | Amount of funds to pre-auth - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span> <br />[*Currency*](androidobjects.md#13)     | Currency of the charge|
| `preauthOptions` <br />[*MerchantAuthOptions*](androidobjects.md#MerchantAuthOptions)      | An object to store merchant authentication options for pre-auth operations.|

**Code example**

```java
//Initiate a pre-auth for 1.00 in Great British Pounds
api.preAuthorization(new BigInteger("100"),Currency.GBP);

//With Options
MerchantAuthOptions preauthOptions = new MerchantAuthOptions();
preauthOptions.setCustomerReference("CustomerReference");

api.preAuthorization(new BigInteger("100"),Currency.GBP, preauthOptions);
```

**Events invoked**

[**currentTransactionStatus**](androideventlisteners.md#14)

Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry').
***


[**endOfTransaction**](androideventlisteners.md#16)

Invoked when the terminal finishes processing the transaction.
***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartResult](androidobjects.md#operation-start-result)*| Object containing information about the financial operation performed. Most specifically the `transactionReference` which **must** be saved on your end in case you do not get back the transaction result object at the end of the transaction. The `transactionReference` will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction.|


## Pre-Auth Increase

`preAuthorizationIncrease`

This operation allows the merchant to increase the amount of a previously performed pre-auth operation. For example, if a tab was opened at a restaurant and the consumer is adding new orders going above the initial pre-authorized amount, it is required to increase the amount of the initial pre-authorization before capturing it.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>  <br />*BigInteger*    | Amount of the pre-auth increase, in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span> <br />[*Currency*](androidobjects.md#13)     | Currency of the charge|
| `tipAmount`  <br />*BigInteger*     | Tip amount added to the original (base) transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `originalTransactionID` <span class="badge badge--primary">Required</span> <br />*String*  | Transaction ID of the original pre-auth operation|
| `preauthOptions` <br />[*Options*](androidobjects.md#7)      | An object to store merchant authentication options for pre-auth operations.|

**Code example**

```java
//Initiate a pre-auth increase for 1.00 in Great British Pounds
Options preauthOptions = new Options();
preauthOptions.setCustomerReference("CustomerReference");

api.preAuthorizationIncrease(new BigInteger("1000"),Currency.GBP,new BigInteger("100"),"00000000-0000-0000-0000-000000000000", preauthOptions);
```

**Events invoked**

[**currentTransactionStatus**](androideventlisteners.md#14)

Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry').
***


[**endOfTransaction**](androideventlisteners.md#16)

Invoked when the terminal finishes processing the transaction.
***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartResult](androidobjects.md#operation-start-result)*| Object containing information about the financial operation performed. Most specifically the `transactionReference` which **must** be saved on your end in case you do not get back the transaction result object at the end of the transaction. The `transactionReference` will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction.|


## Pre-Auth Capture

`preAuthorizationCapture`

A pre-authorized transaction can be captured to actually debit the cardholder's account. Depending on the merchant category code, the capture needs to happen between 7 and 31 days after the original pre-authorization. If not captured the funds will be automatically released by the issuing bank.

**VISA rules**

| MCC | Segment | Authorization timeframe | Amount tolerance (captured amount above pre-authorized amount) |  
| ----------- | ----------- | ----------- |----------- |
| 3501-3999, 7011 | Lodging | 31 days | 15% |
| 3351-3500, 7512 | Car Rental | 31 days | 15% |
| 4411 | Steamship and Cruise Lines | 31 days | 15% |
| 7513 | Truck Rentals | 7 days | 15% |
| 7033 | Trailer Parks and Campgrounds | 7 days | 15% |
| 7519 | Motor Home and Recreational Vehicle Rentals | 7 days | 15% |
| 5552 | Electric Vehicle Charging | 7 days | 15% |
| 7523 | Parking and Garages | 7 days | 15% |
| 7394 | Equipment, Tool, Furniture and Appliance Rental | 7 days | none |
| 7999 | Recreation Services | 7 days | none |
| 7996 | Amusement Parks, Carnivals, Circuses, Fortune Tellers | 7 days | none |
| 5599 | Miscellaneous Automotive, Aircraft, and Farm Equipment Dealers | 7 days | none |
| 4457 | Boat Rentals and Leasing | 7 days | none  |
| 5571 | Motorcycle Shops and Dealers | 7 days  | none |
| 4111 | Local and Suburban Commuter, Passenger Transportation, including Ferries | 7 days | 25 USD (or equivalent amount in local currency)  |
| 4112 | Passenger Railways | 7 days | 25 USD (or equivalent amount in local currency) |
| 4131 | Bus Lines | 7 days | 25 USD (or equivalent amount in local currency) |
| 5812 | Eating Places and Restaurants | Same day | 20% |
| 5813 | Drinking Places, Bars, Taverns, Cocktail Lounges, Nightclubs, Discotheques | Same day | 20% |
| 4121 | Taxicabs and Limousines (Card-Absent Environment only) | Same day | 20% |

**MASTERCARD rules**

| MCC | Segment | Authorization timeframe | Amount tolerance (captured amount above pre-authorized amount) |  
| ----------- | ----------- | ----------- |----------- |
| 5812 | Eating Places and Restaurants | 30 days | 20% |
| 5814 | Fast Food Restaurants | 30 days | 20% |

**Maestro rules**

| MCC | Segment | Authorization timeframe | Amount tolerance (captured amount above pre-authorized amount) |  
| ----------- | ----------- | ----------- |----------- |
| 5812 | Eating Places and Restaurants | 7 days | 20% |
| 5814 | Fast Food Restaurants | 7 days | 20% |


**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>  <br />*BigInteger*    | Amount of funds to pre-auth - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span> <br />[*Currency*](androidobjects.md#13)     | Currency of the charge|
| `tipAmount`  <br />*BigInteger*    | Tip amount added to the original (base) transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `originalTransactionID` <span class="badge badge--primary">Required</span> <br />*String* | Transaction id of the original pre-auth transaction|
| `preauthOptions` <br />[*Options*](androidobjects.md#7)      | An object to store merchant authentication options for pre-auth operations.|

**Code example**

```java
//Initiate a pre-auth capture for 1.00 in Great British Pounds
Options preauthOptions = new Options();
preauthOptions.setCustomerReference("CustomerReference");

api.preAuthorizationCapture(new BigInteger("1000"),Currency.GBP,new BigInteger("100"),"00000000-0000-0000-0000-000000000000", preauthOptions);
```

**Events invoked**

[**currentTransactionStatus**](androideventlisteners.md#14)

Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry').
***

[**endOfTransaction**](androideventlisteners.md#16)

Invoked when the terminal finishes processing the transaction.
***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartResult](androidobjects.md#operation-start-result)*| Object containing information about the financial operation performed. Most specifically the `transactionReference` which **must** be saved on your end in case you do not get back the transaction result object at the end of the transaction. The `transactionReference` will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction.|

## Pre-Auth Reversal

`preAuthorizationReversal`

A Pre-Auth reversal allows the user to reverse a previous pre-auth operation. This operation reverts (if possible) a specific pre-auth identified with a transaction id.
A pre-authorized transaction can be partially or fully released, for example when renting a car, the pre-auth reversal allows the merchant to release the funds if the car was not damaged.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `originalTransactionID` <span class="badge badge--primary">Required</span>  <br />*String*    |Transaction id of the original pre-auth transaction|
| `preauthOptions` <br />[*Options*](androidobjects.md#7)     | An object to store merchant authentication options for pre-auth operations.|

**Code example**

```java
//Initiate a pre-auth reversal
api.preAuthorizationReversal("00000000-0000-0000-0000-000000000000");

Options preauthOptions = new Options();
preauthOptions.setCustomerReference("CustomerReference");

//Initiate a pre-auth reversal with options
api.preAuthorizationReversal("00000000-0000-0000-0000-000000000000", preauthOptions);
```

**Events invoked**

[**currentTransactionStatus**](androideventlisteners.md#14)

Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry').
***

[**endOfTransaction**](androideventlisteners.md#16)

Invoked when the terminal finishes processing the transaction.
***

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartResult](androidobjects.md#operation-start-result)*| Object containing information about the financial operation performed. Most specifically the `transactionReference` which **must** be saved on your end in case you do not get back the transaction result object at the end of the transaction. The `transactionReference` will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction.|
