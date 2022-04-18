---
sidebar_position: 7
id: javascriptterminalmanagement
---


# Terminal Management

## Initialize{#1}

`Initialize` <span class="badge badge--info">Method</span>

Initializes the JavaScript SDK and returns the list of payment terminals associated with the account.
	
**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `API_key` <span class="badge badge--primary">Required</span>   <br />*string*   | The API key provided by Handpoint for the merchant.|
| `dev_or_prod_environment` <span class="badge badge--primary">Required</span>  <br />*boolean*  | Value which defines if the JS SDK is targeting the development environment (true -> cloud.handpoint.io) or the production environment (false -> cloud.handpoint.com).|
| `recovery_EoT_callback` <span class="badge badge--primary">Required</span>  <br />*promise*   |Promise collecting the pending transaction results which couldn't be delivered to the web application during the execution of the transaction, for example if the network connection became unstable. The callback input parameter is a TransactionResult object. When the promise is resolved the JS SDK will send the ACK to the payment terminal to mark the result as recovered and the device will delete it from its storage. If the promise is rejected, the device will resend the TransactionResult until the promise is correctly resolved and the ACK sent to the payment terminal. The sdk has a 5 second window for the promise to be resolved |

**Code example**

```javascript
Handpoint.init('API KEY', true, (pendingEoT) => {
 console.log('Recovered Transaction -> ' + JSON.stringify(pendingEoT);
 return handleTransactionResultPromise(pendingEoT);
})
 
// For simple or sync operations you may return a resolved Promise. 
Handpoint.init('API KEY', true, (pendingEoT) => {
 console.log('Recovered Transaction -> ' + JSON.stringify(pendingEoT);
 return Promise.resolve();
})
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Devices**| List of device objects.|


## Connect{#2}

`Connect` <span class="badge badge--info">Method</span>

Connects the Javascript SDK to a payment terminal.
	
**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `device_name` <span class="badge badge--primary">Required</span>   <br />*string*   | The target payment terminal to connect to. The device_name is returned in the Device object of the initialize call.|

**Code example**

```javascript
Handpoint.connect('0821330373-PAXA920');
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Connection Result**|**200** code for OK <br/> **403** code for NOK|


## Disconnect{#3}

`Disconnect` <span class="badge badge--info">Method</span>

Disconnects the Javascript SDK from a payment terminal.
	
**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `device_name` <span class="badge badge--primary">Required</span>   <br />*string*   | The target payment terminal to disconnect from. The device_name is returned in the Device object of the initialize call.|

**Code example**

```javascript
Handpoint.connect('1850345672-PAXA920PRO');
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Connection Result**|`Disconnected` message for OK <br/> `ERROR disconnecting` message for NOK|


## Stop Listening Device{#7}

`StopListeningDevice` <span class="badge badge--info">Method</span>

This operation stops the connection between your application and the payment terminal. It stops listening to transaction events and resets the connection with the card reader.

	
**Code example**

```javascript
//Stop Listening to Events 
Handpoint.stopListeningDevice();
```
## Stop Current Transaction{#13}

`StopCurrentTransaction` <span class="badge badge--info">Method</span>

Operation used to stop the current transaction. The transaction can only be stopped at specific stages of payment processing, for example a transaction can not be stopped when the card is being read but can be stopped when waiting for the cardholder to initially insert a card.


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

`PrintReceipt` <span class="badge badge--info">Method</span>

Print on demand functionality allowing the merchant to print any HTML formatted receipt. It is possible to print images or barcodes. A bitmap can also be printed, in order to do so it needs to be rendered as an image and inserted into the html.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `receipt` <span class="badge badge--primary">Required</span>   <br />*string*   | HTML receipt or url to locate the receipt, it can be found in the response of a financial operation, in the fields merchantReceipt or customerReceipt. The receipt must match the following [HTML Print Format](https://handpoint.atlassian.net/wiki/spaces/PD/pages/1409875969/Html+Print+Format).|
| `callback_function` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|


**Code example**

```javascript
Handpoint.printReceipt('https://location_of_receipt_container.com/receipt_location', CallbackFunction(stat){...});

var htmlReceipt = '[...] HTML receipt [...]'

Handpoint.printReceipt(htmlReceipt, CallbackFunction(stat){...});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Print Receipt Response**|A specific status object which describes the printing action (PrinterOutOfPaper, ErrorConnectingToPrinter or ReceiptPrintSuccess)|


## Ping Device{#15}

`PingDevice` <span class="badge badge--info">Method</span>

This operation will ping the terminal to confirm if it is online. The promise is correctly resolved if the device is online and successfully answers to the ping

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `callback_function` <span class="badge badge--primary">Required</span>   <br />*string*   | Callback function to subscribe to the transaction status updates.|


**Code example**

```javascript
Handpoint.pingDevice(CallbackFunction(stat){...});
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **Device Status**|A [*Device Status*](javascriptobjects.md#27) object.|

## Update{#16}

`Update` <span class="badge badge--info">Method</span>

Triggers a terminal software and config update.


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
| **Update Response**|A financial response object.|

