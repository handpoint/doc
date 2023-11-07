---
sidebar_position: 6
id: javascripttransactiontypes
---

# Transaction Types

## Sale{#4}

`Sale` <span class="badge badge--info">Method</span>

A sale initiates a transaction with the payment terminal. In its simplest form, you only have to pass the amount and currency as parameters.
	
**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>   <br />*integer*   | Amount of the transaction - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span>   <br />*string*   | Currency of the transaction.|
| `saleOptions` <br />[*SaleOptions*](javascriptobjects.md#23)   | An object to store the customization options for a sale. This object can be empty if no options are required.|
| `callback_function ` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Code example**

```javascript
var saleOptions = {
    customerReference: "MyCustomReference",
    tipConfiguration: {
        baseAmount: "100",
        skipEnabled: true,
        enterAmountEnabled: true,
        tipPercentages: [
            1,
            2,
            3,
            5
        ]
    },
    bypassOptions: {
        signatureBypass: true,
        pinBypass: true
    },
    merchantAuth: [
        {
            acquirer: "ACQUIRER",
            mid: "11111",
            tid: "22222",
            mcc: "33333"
        }
    ],
    metadata: {
        metadata1: "data1",
        metadata2: "data2",
        metadata3: "data3",
        metadata4: "data4",
        metadata5: "data5"
    }  
}

let operationStartedResult = handpoint.sale('1000', 'USD', saleOptions, function (stat) {
  console.log('Transaction status received -> '+ stat.message) 
});

let transactionReference = operationStartedResult.transactionReference
let result = await operationStartedResult.transactionResult
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartedResult](javascriptobjects.md#operation-started-result)*| Object containing information about the financial operation performed. Specifically the `transactionReference` and the `transactionResult` (promise).|



## Sale And Tokenization{#5}

`SaleAndTokenization` <span class="badge badge--info">Method</span>

A sale operation which also returns a card token. This functionality is not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice.
	
**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>   <br />*integer*   | Amount of the transaction - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span>   <br />*string*   | Currency of the transaction.|
| `saleOptions` <span class="badge badge--primary">Required</span>   <br /> [*SaleOptions*](javascriptobjects.md#23)   | An object to store the customization options for a sale. This object can be empty if no options are required.|
| `callback_function` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Code example**

```javascript
var saleOptions = {
    customerReference: "MyCustomReference",
    tipConfiguration: {
        baseAmount: "100",
        skipEnabled: true,
        enterAmountEnabled: true,
        tipPercentages: [
            1,
            2,
            3,
            5
        ]
    },
    bypassOptions: {
        signatureBypass: true,
        pinBypass: true
    },
    merchantAuth: [
        {
            acquirer: "ACQUIRER",
            mid: "11111",
            tid: "22222",
            mcc: "33333"
        }
    ],
}

let operationStartedResult = handpoint.saleAndTokenization('1000', 'USD', saleOptions, function (stat) {
  console.log('Transaction status received -> '+ stat.message) 
});

let transactionReference = operationStartedResult.transactionReference
let result = await operationStartedResult.transactionResult
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
|  *[OperationStartedResult](javascriptobjects.md#operation-started-result)*| Object containing information about the financial operation performed. Specifically the `transactionReference` and the `transactionResult` (promise).|


## Transaction Recovery{#6}

`StartRecovery` <span class="badge badge--info">Method</span>

The terminal has a transaction recovery loop to automatically send back the pending [*Transaction Result*](javascriptobjects.md#18) to the web application in case it becomes unreachable (network issue or other).

For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the web application is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc…).

The recovery loop is reinitialized every time the Handpoint application is restarted on the payment terminal or the startRecovery method is triggered.The [*Transaction Result*](javascriptobjects.md#18) received through the transaction recovery loop will have the recoveredTransaction field set to true.

**Important information: The web application must be successfully connected to a terminal in order to receive the pending transactions.**
	
**Code example**

```javascript
//Start recovery of pending transactions 
Handpoint.startRecovery();
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Promise Successful Response**|The event has been sent to the payment terminal.|
| **Promise Error Response**|The event was not sent to the payment terminal because it is unreachable.|


## Sale Reversal{#8}

`SaleReversal` <span class="badge badge--info">Method</span>

A sale Reversal, also called sale VOID allows the merchant to reverse a previous sale operation. This operation reverts (if possible) a specific sale identified with a transaction id. In its simplest form, you only have to pass the amount, currency and originalTransactionID as parameters	

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>   <br />*integer*   | Amount of the transaction - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span>   <br />*string*   | Currency of the transaction.|
| `originalTransactionID` <span class="badge badge--primary">Required</span>   <br />*string*   | The transaction id of the original sale authorization.|
| `merchantAuthOptions`  <br />[*MerchantAuthOptions*](javascriptobjects.md#25)   | An object to store the customization options for a saleReversal operation. This object can be empty if no options are required.|
| `callback_function` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Code example**

```javascript
var saleReversalOptions = {
    customerReference: "MyCustomReference",
    merchantAuth: [
        {
            acquirer: "ACQUIRER",
            mid: "11111",
            tid: "22222",
            mcc: "33333"
        }
    ],
}

let operationStartedResult = handpoint.saleReversal('1000', 'USD', 'OriginalSaleGUID', saleReversalOptions, CallbackFunction(stat){...});

let transactionReference = operationStartedResult.transactionReference
let result = await operationStartedResult.transactionResult
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
|  *[OperationStartedResult](javascriptobjects.md#operation-started-result)*| Object containing information about the financial operation performed. Specifically the `transactionReference` and the `transactionResult` (promise).|


## Refund{#9}

`Refund` <span class="badge badge--info">Method</span>

A refund initiates a transaction with the payment terminal. This operation moves funds from the merchant account to the cardholder´s credit card. In its simplest form, you only have to pass the amount and currency as parameters. For Interac (Canadian Debit Network), refunds can only be processed until Interac closes the batch of transactions at night.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>   <br />*integer*   | Amount of the transaction - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span>   <br />*string*   | Currency of the transaction.|
| `originalTransactionID` <br />*string*   | The transaction id of the original sale authorization.|
| `refundOptions` <br />[*RefundOptions*](javascriptobjects.md#24)   | An object to store the customization options for a refund. This object can be empty if no options are required.|
| `callback_function` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Code example**

```javascript
var refundOptions = {
    customerReference: "MyCustomReference",
    bypassOptions: {
        signatureBypass: true,
        pinBypass: true
    },
    merchantAuth: [
        {
            acquirer: "ACQUIRER",
            mid: "11111",
            tid: "22222",
            mcc: "33333"
        }
    ],
}

let operationStartedResult = handpoint.refund('1000', 'USD', undefined ,refundOptions, CallbackFunction(stat){...});

let transactionReference = operationStartedResult.transactionReference
let result = await operationStartedResult.transactionResult

// Linked Refund
handpoint.refund('1000', 'USD', 'OriginalSaleGUID' ,refundOptions, CallbackFunction(stat){...});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
|  *[OperationStartedResult](javascriptobjects.md#operation-started-result)*| Object containing information about the financial operation performed. Specifically the `transactionReference` and the `transactionResult` (promise).|


## Refund Reversal{#10}

`RefundReversal` <span class="badge badge--info">Method</span>

A Refund Reversal, also called Refund VOID, allows the merchant to reverse a previous refund operation. This operation reverts (if possible) a specific refund identified with a transaction id. In its simplest form, you only have to pass the amount, currency and originalTransactionID as parameters.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>   <br />*integer*   | Amount of the transaction - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span>   <br />*string*   | Currency of the transaction.|
| `originalTransactionID` <span class="badge badge--primary">Required</span>   <br />*string*   | The transaction id of the original refund authorization.|
| `merchantAuthOptions` <br />[*MerchantAuthOptions*](javascriptobjects.md#25)   | An object to store the customization options for a refundReversal operation. This object can be empty if no options are required.|
| `callback_function` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Code example**

```javascript
var refundReversalOptions = {
    customerReference: "MyCustomReference",
    merchantAuth: [
        {
            acquirer: "ACQUIRER",
            mid: "11111",
            tid: "22222",
            mcc: "33333"
        }
    ],
}

let operationStartedResult = handpoint.refundReversal('1000', 'USD', 'OriginalRefundGUID', refundReversalOptions, CallbackFunction(stat){...});

let transactionReference = operationStartedResult.transactionReference
let result = await operationStartedResult.transactionResult
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartedResult](javascriptobjects.md#operation-started-result)*| Object containing information about the financial operation performed. Specifically the `transactionReference` and the `transactionResult` (promise).|


## MoTo Sale

`moToSale` <span class="badge badge--info">Method</span>

Mail Order /Telephone Order (MOTO) sale. MOTO is a type of card-not-present (CNP) transaction in which services are paid and delivered via telephone, mail, fax, or internet communication. Triggering this function will prompt a card input form on the terminal for the merchant to enter the card number, expiry date and CVV of the card to be charged. MOTO has become synonymous with any financial transaction where the entity taking payment does not physically see the card used to make the purchase.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>   <br />*integer*   | Amount of the transaction - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span>   <br />*string*   | Currency of the transaction.|
| `options`  <br />[*Options*](javascriptobjects.md#26)   | An object to store the customization options for a MOTO sale. This object can be empty if no options are required.|
| `callback_function` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Code example**

```javascript
var saleOptions = { 
        customerReference: "MyCustomReference",
    }

let operationStartedResult = handpoint.moToSale('1000', 'USD', saleOptions, function (stat) {
  console.log('Transaction status received -> '+ stat.message) 
});

let transactionReference = operationStartedResult.transactionReference
let result = await operationStartedResult.transactionResult
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
|  *[OperationStartedResult](javascriptobjects.md#operation-started-result)*| Object containing information about the financial operation performed. Specifically the `transactionReference` and the `transactionResult` (promise).|



## MoTo Refund

`moToRefund` <span class="badge badge--info">Method</span>

A MOTO refund operation moves funds from the merchant account to the cardholder´s credit card. In it's simplest form you only have to pass the amount and currency but it also accepts the original transaction id. Triggering this function will prompt a card input form on the terminal for the merchant to enter the card number, expiry date and CVV of the card to be charged. MOTO Refund is a type of card-not-present (CNP) transaction in which services are refunded via telephone, mail, fax, or internet communication. MOTO has become synonymous with any financial transaction where the entity taking payment does not physically see the card used to make the purchase or refund.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>   <br />*integer*   | Amount of the transaction - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span>   <br />*string*   | Currency of the transaction.|
| `originalTransactionID` <br />*string*   | If this field is populated, it links the refund with a previous sale and effectively limits the maximum amount refunded to that of the original transaction.|
| `options`  <br />[*Options*](javascriptobjects.md#26)  | An object to store the customization options for a MOTO refund. This object can be empty if no options are required.|
| `callback_function` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Code example**

```javascript
var refundOptions = {
    customerReference: "MyCustomReference"
}

let operationStartedResult = handpoint.moToRefund('1000', 'USD', undefined ,refundOptions, CallbackFunction(stat){...});

// Linked Refund
Handpoint.moToRefund('1000', 'USD', '00000000-0000-0000-0000-000000000000' ,refundOptions, CallbackFunction(stat){...});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartedResult](javascriptobjects.md#operation-started-result)*| Object containing information about the financial operation performed. Specifically the `transactionReference` and the `transactionResult` (promise).|


## MoTo Reversal

`moToReversal` <span class="badge badge--info">Method</span>

A MOTO reversal, also called VOID allows the user to reverse a previous MOTO sale/refund operation. This operation reverts (if possible) a specific operation identified with a transaction id. Note that transactions can only be reversed within a 24 hours timeframe or until the daily batch of transactions has been sent for submission. MOTO Reversal is a type of card-not-present (CNP) transaction used to reverse a previous MOTO Sale or MOTO Refund.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `originalTransactionID` <span class="badge badge--primary">Required</span>   <br />*string*   |The transaction id of the original sale or refund authorization.|
| `options`  <br />[*Options*](javascriptobjects.md#26)   | An object to store the customization options for a MOTO reversal operation. This object can be empty if no options are required.|
| `callback_function` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Code example**

```javascript
var moToReversalOptions = {
    customerReference: "MyCustomReference"
}

let operationStartedResult = handpoint.moToReversal('00000000-0000-0000-0000-000000000000', moToReversalOptions, CallbackFunction(stat){...});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
|  *[OperationStartedResult](javascriptobjects.md#operation-started-result)*| Object containing information about the financial operation performed. Specifically the `transactionReference` and the `transactionResult` (promise).|



## MoTo Pre-Auth

`moToPreAuthorization` <span class="badge badge--info">Method</span>

A MOTO pre-auth initiates a pre-authorization operation to the card reader. It's used to verify that the account is valid and has sufficient funds to cover a pending transaction, without actually debiting the cardholder's account upfront.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>   <br />*integer*   | Amount of the transaction - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span>   <br />*string*   | Currency of the transaction.|
| `options`  <br />[*Options*](javascriptobjects.md#26)   | An object to store the customization options for a MOTO sale. This object can be empty if no options are required.|
| `callback_function` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Code example**

```javascript
var saleOptions = { 
        customerReference: "MyCustomReference",
    }

let operationStartedResult = handpoint.moToPreAuthorization('1000', 'USD', saleOptions, function (stat) {
  console.log('Transaction status received -> '+ stat.message) 
});

let transactionReference = operationStartedResult.transactionReference
let result = await operationStartedResult.transactionResult
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
|  *[OperationStartedResult](javascriptobjects.md#operation-started-result)*| Object containing information about the financial operation performed. Specifically the `transactionReference` and the `transactionResult` (promise).|


## Tip Adjustment 

`TipAdjustment`

A tip adjustment operation allows merchants to adjust the tip amount of a sale or a pre-auth capture transaction before the batch of transactions is settled by the processor at the end of the day. Note: This functionality is only available for the restaurant industry in the United States and the processors currently supporting this functionality are TSYS and WORLDPAY/VANTIV.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `tipAmount` <span class="badge badge--primary">Required</span> <br />*BigInteger*   |Tip amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `originalTransactionID` <span class="badge badge--primary">Required</span>  <br />*String*    |Transaction id of the original transaction|

**Code example**

```javascript
handpoint.tipAdjustment('100', '00000000-0000-0000-0000-000000000000') {
});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Status Message**| `Tip adjusted` message for OK <br/> `ERROR`  message for NOK|



## Tokenize Card{#11}

`TokenizeCard` <span class="badge badge--info">Method</span>

Returns a card token (representing the card number). This functionality is not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `options` <br />[*Options*](javascriptobjects.md#26)   | An object to store the customization options for a tokenizeCard operation. This object can be empty if no options are required.|
| `callback_function` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Code example**

```javascript
var options = {
    customerReference: "MyCustomReference",
}

Handpoint.tokenizeCard(options, CallbackFunction(stat){...});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Tokenize Card Response**|[*Transaction Result Object*](javascriptobjects.md#18)|


## Card Pan{#12}

`CardPan` <span class="badge badge--info">Method</span>

A cardPan request will return the full PAN of the card being swiped, dipped or tapped. Only the PANs of whitelisted card ranges will be returned by the Handpoint systems. This operation is mostly used to be able to process funds or points from loyalty cards.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `options` <br />[*Options*](javascriptobjects.md#26)   | An object to store the customization options for a cardPan operation. This object can be empty if no options are required.|
| `callback_function` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Code example**

```javascript
var options = {
    customerReference: "MyCustomReference",
}

Handpoint.tokenizeCard(options, CallbackFunction(stat){...});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Card Pan Response**|[*Transaction Result Object*](javascriptobjects.md#18)|


## Pre-Auth


`preAuthorization`

A pre-auth initiates a pre-authorization operation to the card reader. In it's simplest form you only have to pass the amount and currency but it also accepts tip configuration and a map with extra parameters.

A pre-authorization charge, also known as a pre-auth or authorization hold, is a temporary hold placed on a customer's payment card. It's used to verify that the account is valid and has sufficient funds to cover a pending transaction, without actually debiting the cardholder's account upfront.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>  <br />*BigInteger*    | Amount of funds to be pre-authorized - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span> <br />*Currency*     | Currency of the pre-auth|
| `preauthOptions` <br />[*SaleOptions*](javascriptobjects.md#23)   | An object to store the customization options for a pre-auth. This object can be empty if no options are required.|
| `callback_function ` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Code example**

```javascript
// Perform the PreAuth operation
let operationStartedResult = handpoint.preAuthorization('1234', 'EUR', preauthOptions, function (stat) {
  console.log('Transaction status received -> '+ stat.message) 
});

```

## Pre-Auth Increase/Decrease

`preAuthorizationIncrease`

This operation allows the merchant to increase/decrease the amount of a previously performed pre-auth operation. For example, if a tab was opened at a restaurant and the consumer is adding new orders going above the initial pre-authorized amount, it is required to increase the amount of the initial pre-authorization before capturing it. If the merchant wants to release part of a pre-auth, an increase with **negative** amount should be passed to the function.


**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>  <br />*BigInteger*    | Amount of funds to be pre-authorized - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span> <br />*Currency*     | Currency of the charge|
| `originalTransactionID` <span class="badge badge--primary">Required</span> <br />*String*  | Transaction ID of the original pre-auth operation|
| `preauthOptions` <br />*Options*     | An object to store merchant authentication options for pre-auth operations.|
| `callback_function ` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Code example**

```javascript
// Perform the PreAuth Increase operation
let operationStartedResult = handpoint.preAuthorizationIncrease('1234', 'EUR','00000000-0000-0000-0000-000000000000', preauthOptions, function (stat) {
  console.log('Transaction status received -> '+ stat.message) 
});

// Perform the PreAuth Decrease operation
let operationStartedResult = handpoint.preAuthorizationIncrease('-1234', 'EUR','00000000-0000-0000-0000-000000000000', preauthOptions, function (stat) {
  console.log('Transaction status received -> '+ stat.message) 
});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartResult](javascriptobjects.md#operation-started-result)*| Object containing information about the financial operation performed. Most specifically the `transactionReference` which **must** be saved on your end in case you do not get back the transaction result object at the end of the transaction. The `transactionReference` will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction.|


## Pre-Auth Capture

`preAuthorizationCapture`

A pre-authorized transaction can be captured to actually debit the cardholder's account. Depending on the merchant category code, the capture needs to happen between 7 and 31 days after the original pre-authorization. If not captured the funds will be automatically released by the issuing bank.

**Please note that a pre-authorization can only be captured ONCE, multiple partial captures are not allowed**. If for some reason, the pre-authorization was captured for an incorrect amount, you can attempt to reverse the capture (does not work with all acquirers). If the capture reversal was declined, the cardholder needs to come back into the store with his card to get refunded or re-authorize the transaction. Alternatively, the cardholder can give his card details over the phone to the merchant and a MOTO pre-auth or MOTO refund can be issued.

Card schemes set specific rules around which businesses are able to use pre-auth transactions. Eligibility is determined based on the Merchant Category Code (MCC), together with the card scheme.

Card schemes have their own set of rules on authorisation expiry. Capturing a transaction after the scheme expiry time increases the risk of a failed capture, and may also increase the interchange and/or scheme fees charged for the transaction. Card schemes can also expire an authorisation before or after the official scheme expiry period has been reached. You can often capture a payment successfully after an authorisation has expired. Depending on the card scheme, there can be a fee for late capture, and an increase in interchange fee. The risk of cardholder chargebacks increase as well.


| Scheme | MCC |   
| ----------- | ----------- | 
| Mastercard | All MCCs except 5542 |
| Visa | All MCCs except 5542 |
| Discover | 3351-3441, 3501-3999, 4111, 4112, 4121, 4131, 4411, 4457, 5499, 5812, 5813, 7011, 7033, 7996, 7394, 7512, 7513, 7519, 7999 |
| American Express | All MCCs except 5542 |

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

| MCC | Authorization timeframe | Amount tolerance (captured amount above pre-authorized amount) |  
| ----------- | ----------- | ----------- |
| All MCCs | 30 days | 20% |

**Maestro rules**

| MCC | Segment | Authorization timeframe | Amount tolerance (captured amount above pre-authorized amount) |  
| ----------- | ----------- | ----------- |----------- |
| 5812 | Eating Places and Restaurants | 7 days | 20% |
| 5814 | Fast Food Restaurants | 7 days | 20% |


**AMEX rules** 

| MCC | Authorization timeframe |
| ----------- | ----------- | 
| All MCCs | 7 days |
Note: Pre-Auth with AMEX is only available in the United States/Canada with the processor TSYS.


**Discover rules**  

| MCC | Authorization timeframe |
| ----------- | ----------- | 
| Car Rental, Hotel/Lodging MCCs | 30 days |
| All MCCs except Car Rental and Hotel/Lodging  | 10 days |

**Diners rules**  

| MCC | Debit/credit | Authorization timeframe |
| ----------- | ----------- | ----------- | 
| Car Rental, Hotel/Lodging MCCs | All | 30 days |
| All MCCs except Car Rental and Hotel/Lodging  | Credit | 30 days |
| All MCCs except Car Rental and Hotel/Lodging  | Debit | 7 days |


**JCB rules**

| MCC | Authorization timeframe |
| ----------- | ----------- | 
| Hotel and Car rental | Time of stay/rental |
| All MCCs except Hotel and Car rental | 1 year |




**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>  <br />*BigInteger*    | Amount of funds to be pre-authorized - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span> <br />*Currency*     | Currency of the pre-auth|
| `originalTransactionID` <span class="badge badge--primary">Required</span> <br />*String* | Transaction ID of the original pre-auth operation|
| `preauthOptions` <br />*Options*     | An object to store merchant authentication options for pre-auth operations.|
| `callback_function ` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Code example**

```javascript
// Perform the PreAuth Capture operation
let operationStartedResult = handpoint.preAuthorizationCapture('1234', 'EUR','00000000-0000-0000-0000-000000000000', preauthOptions, function (stat) {
  console.log('Transaction status received -> '+ stat.message) 
});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartResult](javascriptobjects.md#operation-started-result)*| Object containing information about the financial operation performed. Most specifically the `transactionReference` which **must** be saved on your end in case you do not get back the transaction result object at the end of the transaction. The `transactionReference` will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction.|

## Pre-Auth/Capture Reversal

`preAuthorizationReversal`

A Pre-Auth reversal allows the user to reverse a previous pre-auth operation. This operation reverts (if possible) a specific pre-auth identified with a transaction id.
A pre-authorized reversal transaction **will release the whole pre-authorized amount**, for example when renting a car, the pre-auth reversal allows the merchant to release the funds if the car was not damaged. For partial releases, please check the [Pre-Auth Increase/Decrease](androidtransactions.md#pre-auth-increasedecrease) operation.

A Pre-Auth reversal can be used to reverse a capture operation as well. A capture reversal transaction **will release all the funds withheld**. Reversing a capture operation can only be done before the funds are automatically settled at night, please note that not all acquirers support reversal of captured transactions. If a capture reversal is attempted after the funds have been moved, the operation will receive a decline.<br /><br />When the capture is reverted it returns to the previous state ([CAPTURED](javascriptobjects.md#33) -> [AUTHORISED](javascriptobjects.md#33)).

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `originalTransactionID` <span class="badge badge--primary">Required</span>  <br />*String*    |Transaction id of the original pre-auth transaction|
| `preauthOptions` <br />*Options*     | An object to store merchant authentication options for pre-auth operations.|
| `callback_function ` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Code example**

```javascript
// Perform the PreAuth Reversal operation
let operationStartedResult = handpoint.preAuthorizationReversal('00000000-0000-0000-0000-000000000000', preauthOptions, function (stat) {
  console.log('Transaction status received -> '+ stat.message) 
});
```


**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| *[OperationStartResult](javascriptobjects.md#operation-started-result)*| Object containing information about the financial operation performed. Most specifically the `transactionReference` which **must** be saved on your end in case you do not get back the transaction result object at the end of the transaction. The `transactionReference` will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction.|
