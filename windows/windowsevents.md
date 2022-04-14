---
sidebar_position: 8
id: windowsevents
---

# Events Listeners

## Transaction Result Recovery over CLOUD connection

`CloudTransactionResultRecovery`

The terminal has a transaction recovery loop to automatically send back the pending [*Transaction Result*](windowsobjects.md#14) to the Point of sale in case it becomes unreachable (network issue or other).
For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the point of sale is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc…).
The recovery loop is reinitialized every time the Handpoint application is restarted.The [*Transaction Result*](windowsobjects.md#14) received through the transaction recovery loop will have the recoveredTransaction field set to true.

**Important information: The point of sale must be successfully connected to a terminal in order to receive the pending transactions.**

**[*Transaction Result Ready Event*](windowsevents.md#11)**

Event containing the pending [*Transaction Result*](windowsobjects.md#14)

## Device discovery finished{#13}

`deviceDiscoveryFinished`

deviceDiscoveryFinished event gets called when a device discovery has finished and returns a list of devices.

##### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		The device that is invoking the event|

**Code example**

```csharp
//Receiving a list of connectable devices
List<Device> myListOfDevices = new List<Device>();
public void **[*deviceDiscoveryFinished*](#13)**(List<Device> devices)
{
    foreach(Device device in devices)
    {
        myListOfDevices.Add(device);
    }
}
```

**Subscribers Needed**

**[*AddRequiredEventHandler*](#16)** 

This listener has to be implemented (preferably during initialisation) in order to retrieve the devices information.


## Signature required{#5}

`SignatureRequired`

SignatureRequired event gets called when a card requires a signature instead of PIN entry and has two parameters, request and device. Integrations with PAX or Telpo devices DO NOT need the implementation of this event.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `request` <span class="badge badge--primary">Required</span><br />[*SignatureRequest*](windowsobjects.md#17)     | 		Holds the signature request|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		The device that is invoking the event|

**Code example**

```csharp
//Receiving a SignatureRequest from the SDK.
public void SignatureRequired(SignatureRequest signatureRequest, Device device)
{
    //You might want to print out the receipt or ask the customer to sign the receipt on your device
    DisplayReceiptInUI(signatureRequest.MerchantReceipt)
    //If you accept the signature
    api.SignatureResult(true);
}
```

**Subscribers Needed**

**[*AddRequiredEventHandler*](#16)** 

This listener has to be implemented (preferably during initialisation) in order to retrieve signature information.

## End of transaction{#6}

`EndOfTransaction`

EndOfTransaction event gets called at the end of each transaction and has two parameters, result and device.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `result` <span class="badge badge--primary">Required</span><br />[*TransactionResult*](windowsobjects.md#14)     | 		Holds the results for the transaction|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		The device that is invoking the event|

**Code example**

```csharp
//Receiving a TransactionResult from the SDK.
public void EndOfTransaction(TransactionResult transactionResult, Device device)
{
    //You might want to display this information in the UI
    postTransactionResultToUI(transactionResult);
}
```

**Subscribers Needed**

**[*AddRequiredEventHandler*](#16)** 

This listener has to be implemented (preferably during initialisation) in order to retrieve signature information.

## Connection status changed{#7}

`ConnectionStatusChanged`

**[*ConnectionStatusChanged*](#7)** event gets called when the state of a card reader connection changes.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `status` <span class="badge badge--primary">Required</span><br />[*ConnectionStatus*](windowsobjects.md#18)     | 		An enum containing the status code for the connection|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		The device that is invoking the event|

**Code example**

```csharp
//Receiving a new ConnectionStatus from the SDK
public void **[*ConnectionStatusChanged*](#7)**(ConnectionStatus connectionStatus, Device device)
{
    //You might want to display this information in the UI
    postNewStatusToUI(connectionStatus);
}
```

**Subscribers Needed**

**[*AddStatusNotificationEventHandler*](#19)** 

This listener has to be implemented (preferably during initialisation) in order to retrieve the different connection statuses (e.g : CONNECTED, DISCONNECTED...).

## Current transaction status{#4}

`CurrentTransactionStatus`

currentTransactionStatus event gets called when the state of an ongoing transaction changes.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `statusInfo` <span class="badge badge--primary">Required</span><br />[*ConnectionStatus*](windowsobjects.md#18)     | 		An object containing information about the current transaction|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		The device that is invoking the event|

**Code example**

```csharp
//Receiving a transaction status from the SDK.
public void currentTransactionStatus(StatusInfo statusInfo, Device device)
{
    //You might want to display some of this information in the UI
    DisplayTransactionStatusInUI(statusInfo)
}
```

**Subscribers Needed**

**[*AddStatusNotificationEventHandler*](#19)**

This listener has to be implemented (preferably during initialisation) in order to retrieve the different states from the card reader (e.g : Waiting for card, Waiting for PIN entry...).

## Message logged

`OnMessageLogged`

OnMessageLogged event gets called for all log messages that are being logged. This is only intended for debugging.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `logLevel` <span class="badge badge--primary">Required</span><br />[*LogLevel*](windowsobjects.md#9)     | 		An enum containing the log level|
| `message` <span class="badge badge--primary">Required</span><br />*String*     | 		A String containing the current log message|

**Code example**

```csharp
//Receiving a log from the SDK
public void OnMessageLogged(LogLevel logLevel, String message)
{
    //You do not want to display this information in the UI
    Debug.WriteLine(message);
}
```

**Subscribers Needed**

**[*AddLogEventHandler*](#20)** 

This listener has to be implemented (preferably during initialisation) in order to retrieve the different log messages.

## Logs ready{#10}

`DeviceLogsReady`

DeviceLogsReady event gets called when the card reader logs requested by a call to getDeviceLogs() are ready. This Event is really useful if there has been a communication error between the card reader and the API (e.g : Bluetooth communication lost). After reconnecting, you can then fetch the card reader logs to the API.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `logs` <span class="badge badge--primary">Required</span><br />*String*     | 		String containing the current log|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		The device that is invoking the event|

**Code example**

```csharp
//Receiving a log from the device
public void **[*DeviceLogsReady*](#10)**(string logs, Device device)
{
    //You might want to save this information
    WriteLogsToDisk(logs);
}
```

**Subscribers Needed**

**[*AddLogEventHandler*](#20)** 

This listener has to be implemented (preferably during initialisation) in order to retrieve the card reader logs.

## Pending transaction result

`PendingTransactionResult`

In the case of a communication failure between the device and the API a TransactionResult might have not been delivered to the API. This event is invoked when the device has a pending TransactionResult. This event might be invoked when reconnecting to a device after a communication failure during a transaction. This event will not be called if HapiManager.Settings.AutoRecoverTransactionResult is set to true.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		The device that is invoking the event|

**Code example**

```csharp
@Override
public void PendingTransactionResult(Device device){
	//Here you might want to call api.GetPendingTransaction(); to receive the TransactionResult
}
```

**Subscribers Needed**

**[*AddPendingResultsEventHandler*](#21)** 

This listener has to be implemented (preferably during initialisation) in order to retrieve information about pending results.

## Transaction result ready{#11}

`TransactionResultReady`

In the case of a communication failure between the device and the API a TransactionResult might have not been delivered to the API. This event will be invoked after using hapi.GetPendingTransaction();. When there is no pending transaction the TransactionResult will contain default/error fields and no receipts. This event is called if HapiManager.Settings.AutoRecoverTransactionResult is set to true.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `result` <span class="badge badge--primary">Required</span><br />[*TransactionResult*](windowsobjects.md#14)     | 		Holds the results for the transaction|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		The device that is invoking the event|

**Code example**

```csharp
@Override
public void TransactionResultReady(TransactionResult transactionResult, Device device){
	//Here you might want to do stuff to the transactionResult
}
```

**Subscribers Needed**

**AddPendingResultsEventHandler** 

This listener has to be implemented (preferably during initialisation) in order to retrieve information about pending results.
