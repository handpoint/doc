---
sidebar_position: 9
id: javascriptmethods
---

# Methods

## Initialize{#1}

`Initialize`

Initializes the JavaScript SDK and returns the list of payment terminals associated with the account.
	
**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `API_key` <span class="badge badge--primary">Required</span>   <br />*string*   | The Actor API key.|
| `dev_or_prod_environment` <span class="badge badge--primary">Required</span>  <br />*boolean*  | Value that defines if the actor is targeting a development (true -> cloud.handpoint.io) or production (false -> cloud.handpoint.com) environment.|
| `recovery_EoT_callback` <span class="badge badge--primary">Required</span>  <br />*promise*   |Promise that collects the pending transaction results that couldn't be delivered to the POS during the execution of the transaction, for example if the network connection became unstable. The callback input parameter is a TransactionResult object. When the promise is resolved the JS SDK will send the ACK to the payment terminal to mark the result as recovered and the device will delete it from its storage. If the promise is rejected, the device will resend the TransactionResult until the promise is correctly resolved and the ACK sent to the reader. The sdk has a 5 second window for the promise to be resolved |

**Code example**

```javascript
Handpoint.init('API KEY', true, (pendingEoT) => {
 console.log('Recovered Transaction -> ' + JSON.stringify(pendingEoT);
 return handleTransactionResultPromise(pendingEoT);
})
 
// For simple or sync operations you may just return a resolved Promise. 
Handpoint.init('API KEY', true, (pendingEoT) => {
 console.log('Recovered Transaction -> ' + JSON.stringify(pendingEoT);
 return Promise.resolve();
})
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Devices**| List of Device objects|


## Connect{#2}

`Connect`

Connect the JavaScript SDK to a payment terminal.
	
**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `device_name` <span class="badge badge--primary">Required</span>   <br />*string*   | The target payment terminal to connect to. The device_name is returned in the Device object of the init call.|

**Code example**

```javascript
Handpoint.connect('1234263-TYPE1');
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Connection Result**|- **200** code for OK <br/> - **403** code for NOK|


## Disconnect{#3}

`Disconnect`

Connect the JavaScript SDK to a payment terminal.
	
**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `device_name` <span class="badge badge--primary">Required</span>   <br />*string*   | The target payment terminal to disconnect from. The device_name is returned in the Device object of the init call.|

**Code example**

```javascript
Handpoint.connect('1234263-TYPE1');
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Connection Result**|- `Disconnected` message for OK <br/> - `ERROR disconnecting` message for NOK|


## Sale{#4}

`Sale`

A sale initiates a payment operation to the card reader. In its simplest form, you only have to pass the amount and currency as parameters.
	
**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>   <br />*integer*   | Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span>   <br />*string*   | Currency of the charge|
| `saleOptions` <span class="badge badge--primary">Required</span>   <br />[*SaleOptions*](javascriptobjects.md#23)   | An object to store all the customisation options for a sale. This object can be empty if no options are required.|
| `callback_function ` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Code example**

```javascript
var [*SaleOptions*](#23)  = {
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

Handpoint.sale('1000', 'USD', [*SaleOptions*](#23) , function (stat) {
  console.log('Transaction Status received -> '+ stat.message) 
});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Sale Response**|A Financial Response object|



## Sale And Tokenization{#5}

`SaleAndTokenization`

A sale which both authorizes the transaction and returns a token representing the card. This feature is not available for all acquirers. Please check with Handpoint to know if tokenization is supported for your acquirer of choice.
	
**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>   <br />*integer*   | Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span>   <br />*string*   | Currency of the charge|
| `saleOptions` <span class="badge badge--primary">Required</span>   <br /> [*SaleOptions*](javascriptobjects.md#23)   | An object to store all the customisation options for a sale. This object can be empty if no options are required.|
| `callback_function` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Code example**

```javascript
var [*SaleOptions*](#23)  = {
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

Handpoint.saleAndTokenization('1000', 'USD', [*SaleOptions*](#23) , CallbackFunction(stat){...});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Sale and Tokenization Response**|A Financial Response object|


## Transaction Recovery{#6}

`StartRecovery`

The terminal has a transaction recovery loop to automatically send back the pending [*Transaction Result*](javascriptobjects.md#18) to the Point of sale in case it becomes unreachable (network issue or other).

For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the point of sale is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc…).

The recovery loop is reinitialized every time the Handpoint application is restarted or the startRecovery method is triggered.The [*Transaction Result*](javascriptobjects.md#18) received through the transaction recovery loop will have the recoveredTransaction field set to true

**Important information: The point of sale must be successfully connected to a terminal in order to receive the pending transactions.**
	
**Code example**

```javascript
//Start recovery of pending transactions 
Handpoint.startRecovery();
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Promise Successful Response**|The event has been sent to the device|
| **Promise Error Response**|The event was not sent to the terminal because it is unreachable|

## Stop Listening Device{#7}

`StopListeningDevice`

This operation interrupts the connection, stops listening to transaction events and resets the connection with the device

	
**Code example**

```javascript
//Stop Listening to Events 
Handpoint.stopListeningDevice();
```

## Sale Reversal{#8}

`SaleReversal`

A sale Reversal, also called sale VOID allows the user to reverse a previous sale operation. This operation reverts (if possible) a specific sale identified with a transaction id. In its simplest form, you only have to pass the amount, currency and originalTransactionID as parameters	

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>   <br />*integer*   | Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span>   <br />*string*   | Currency of the charge|
| `originalTransactionID` <span class="badge badge--primary">Required</span>   <br />*string*   | The transaction id of the original sale authorization|
| `merchantAuthOptions` <span class="badge badge--primary">Required</span>   <br />[*MerchantAuthOptions*](javascriptobjects.md#25)   | An object to store all the customisation options for a saleReversal. This object can be empty if no options are required.|
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
| **Sale Reversal Response**|A Financial Response object|


## Refund{#9}

`Refund`

A refund initiates a refund operation to the payment terminal. This operation moves funds from the merchant account to the cardholder´s credit card. In its simplest form, you only have to pass the amount and currency as parameters. For Interac (Canadian Debit Network), refunds can only be processed until Interac closes the batch of transactions at night.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>   <br />*integer*   | Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span>   <br />*string*   | Currency of the charge|
| `originalTransactionID` <span class="badge badge--primary">Required</span>   <br />*string*   | The transaction id of the original sale authorization|
| `refundOptions` <span class="badge badge--primary">Required</span>   <br />[*RefundOptions*](javascriptobjects.md#24)   | An object to store all the customisation options for a saleReversal. This object can be empty if no options are required.|
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
| **Refund Response**|A Financial Response object|


## Refund Reversal{#10}

`RefundReversal`

A Refund Reversal, also called Refund VOID, allows the merchant to reverse a previous refund operation. This operation reverts (if possible) a specific refund identified with a transaction id. In its simplest form, you only have to pass the amount, currency and originalTransactionID as parameters.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `amount` <span class="badge badge--primary">Required</span>   <br />*integer*   | Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `currency` <span class="badge badge--primary">Required</span>   <br />*string*   | Currency of the charge|
| `originalTransactionID` <span class="badge badge--primary">Required</span>   <br />*string*   | The transaction id of the original sale authorization|
| `merchantAuthOptions` <span class="badge badge--primary">Required</span>   <br />[*MerchantAuthOptions*](javascriptobjects.md#25)   | An object to store all the customisation options for a refundReversal. This object can be empty if no options are required.|
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
| **Refund Reversal Response**|A Financial Response object|



## Tokenize Card{#11}

`TokenizeCard`

Returns a token for the card. This feature is not available for all acquirers. Please check with Handpoint to know if tokenization is supported for your acquirer of choice

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `options` <span class="badge badge--primary">Required</span>   <br />[*Options*](javascriptobjects.md#26)   | An object to store all the customisation options for a tokenizeCard. This object can be empty if no options are required.|
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
| **Tokenize Card Response**|A Financial Response object|


## Card Pan{#12}

`CardPan`

A cardPan request will return the full PAN of the card being swiped, dipped or tapped. Only the PANs of whitelisted card ranges will be returned by the Handpoint systems. This operation is mostly used to be able to process funds or points from loyalty cards.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `options` <span class="badge badge--primary">Required</span>   <br />[*Options*](javascriptobjects.md#26)   | An object to store all the customisation options for a tokenizeCard. This object can be empty if no options are required.|
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
| **Card Pan Response**|A Financial Response object|


## Stop Current Transaction{#13}

`StopCurrentTransaction`

Operation used to stop the current transaction. The transaction can only be stopped at specific stages of a payment processing, for example a transaction can not be stopped when the card is being read but can be stopped when waiting for the cardholder to initially insert a card.


**Code example**

```javascript
Handpoint.stopCurrentTransaction();

```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Promise Successful Response**|`{finStatus: CANCELLED, statusMessage: 'Operation stopped'}`|
| **Promise Error Response**|`{finStatus: FAILED, errorMessage: 'Unable to stop current transaction'}`|
| **Promise Error Response**|`{ finStatus: FAILED, errorMessage: 'No response received from the card reader' }`|


## Print Receipt{#14}

`PrintReceipt`

This method sends the merchant or customer receipt to the terminal for printing. The format of the HTML data, passed to the method or stored in the url, must follow this format: Html Print Format.


**Code example**

```javascript
Handpoint.printReceipt('https://location_of_receipt_container.com/receipt_location', CallbackFunction(stat){...});

var htmlReceipt = '[...] HTML receipt [...]'

Handpoint.printReceipt(htmlReceipt, CallbackFunction(stat){...});
```
**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `receipt` <span class="badge badge--primary">Required</span>   <br />*string*   | HTML receipt or url to locate the receipt, it can be found in the response of a financial operation, in the fields merchantReceipt or customerReceipt|
| `callback_function` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Print Receipt Response**|A specific Status object that describes the printing action (PrinterOutOfPaper, ErrorConnectingToPrinter or ReceiptPrintSuccess)|


## Ping Device{#15}

`PingDevice`

This operation will ping the terminal to confirm if it is online. The promise is correctly resolved if the device is online and successfully answers to the ping

**Code example**

```javascript
Handpoint.pingDevice(CallbackFunction(stat){...});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Device Status**|A [*Device Status*](javascriptobjects.md#27) object|

## Update{#16}

`Update`

Triggers a terminal software and config update

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `callback_function` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|

**Code example**

```javascript
Handpoint.update(CallbackFunction(stat){...});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Update Response**|A Financial Response object|

