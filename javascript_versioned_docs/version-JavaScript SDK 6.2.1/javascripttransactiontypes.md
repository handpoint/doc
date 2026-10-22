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
}

Handpoint.sale('1000', 'USD', saleOptions, function (stat) {
  console.log('Transaction status received -> '+ stat.message) 
});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Sale Response**|[*Transaction Result Object*](javascriptobjects.md#18)|



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

Handpoint.saleAndTokenization('1000', 'USD', saleOptions, CallbackFunction(stat){...});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Sale and Tokenization Response**|[*Transaction Result Object*](javascriptobjects.md#18)|


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

Handpoint.saleReversal('1000', 'USD', 'OriginalSaleGUID', saleReversalOptions, CallbackFunction(stat){...});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Sale Reversal Response**|A[*Transaction Result Object*](javascriptobjects.md#18)|


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

Handpoint.refund('1000', 'USD', undefined ,refundOptions, CallbackFunction(stat){...});

// Linked Refund
Handpoint.refund('1000', 'USD', 'OriginalSaleGUID' ,refundOptions, CallbackFunction(stat){...});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Refund Response**|A[*Transaction Result Object*](javascriptobjects.md#18)|


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

Handpoint.refundReversal('1000', 'USD', 'OriginalRefundGUID', refundReversalOptions, CallbackFunction(stat){...});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Refund Reversal Response**|[*Transaction Result Object*](javascriptobjects.md#18)|


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

Handpoint.moToSale('1000', 'USD', saleOptions, function (stat) {
  console.log('Transaction Status received -> '+ stat.message) 
});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Sale Response**|[*Transaction Result Object*](javascriptobjects.md#18)|



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

Handpoint.moToRefund('1000', 'USD', undefined ,refundOptions, CallbackFunction(stat){...});

// Linked Refund
Handpoint.moToRefund('1000', 'USD', '00000000-0000-0000-0000-000000000000' ,refundOptions, CallbackFunction(stat){...});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Refund Response**|[*Transaction Result Object*](javascriptobjects.md#18)|


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

Handpoint.moToReversal('00000000-0000-0000-0000-000000000000', moToReversalOptions, CallbackFunction(stat){...});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Sale Reversal Response**|[*Transaction Result Object*](javascriptobjects.md#18)|



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


