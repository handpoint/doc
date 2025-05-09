---
sidebar_position: 8
id: windowsevents
---

# Events Listeners

## Transaction Result Recovery over CLOUD connection

`CloudTransactionResultRecovery` <span class="badge badge--info">Method</span>

The terminal has a transaction recovery loop to automatically send back the pending [Transaction Result](windowsobjects.md#14) to the point of sale in case it becomes unreachable (network issue or other).
For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the point of sale is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc…).
The recovery loop is reinitialized every time the Handpoint application is restarted.The [Transaction Result](windowsobjects.md#14) received through the transaction recovery loop will have the recoveredTransaction field set to true.

**Important information: The point of sale must be successfully connected to a terminal in order to receive the pending transactions.**

**Returns:**

**[*Transaction Result Ready Event*](windowsevents.md#11)**

Event containing the pending [Transaction Result](windowsobjects.md#14).

## Device discovery finished{#13}

`deviceDiscoveryFinished`

The deviceDiscoveryFinished event gets called when the payment terminal search has finished, it returns a list of devices.

##### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		The payment terminal invoking the event.|

**Code example**

```csharp
//Receiving a list of connectable devices
List<Device> myListOfDevices = new List<Device>();
public void deviceDiscoveryFinished(List<Device> devices)
{
    foreach(Device device in devices)
    {
        myListOfDevices.Add(device);
    }
}
```


## Signature required{#5}

`SignatureRequired` <span class="badge badge--info">Method</span>

The SignatureRequired event gets called when the card issuer requires a signature. This event is only required for an Hilite integration, PAX and Telpo terminals automatically prompt for signature capture on the payment terminal.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `request` <span class="badge badge--primary">Required</span><br />[*SignatureRequest*](windowsobjects.md#17)     | 		Holds the signature request object.|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		The payment terminal invoking the event.|

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

## End of transaction{#6}

`EndOfTransaction` <span class="badge badge--info">Method</span>

The EndOfTransaction event gets called at the end of each transaction and has two parameters, result and device.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `result` <span class="badge badge--primary">Required</span><br />[*TransactionResult*](windowsobjects.md#14)     | 		Holds the result and receipts for the transaction.|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		The payment terminal invoking the event.|

**Code example**

```csharp
//Receiving a TransactionResult from the SDK.
public void EndOfTransaction(TransactionResult transactionResult, Device device)
{
    //You might want to display this information in the UI
    postTransactionResultToUI(transactionResult);
}
```

## Connection status changed{#7}

`ConnectionStatusChanged`

The ConnectionStatusChanged event gets called when the state of a payment terminal connection changes.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `status` <span class="badge badge--primary">Required</span><br />[*ConnectionStatus*](windowsobjects.md#18)     | 		An enum containing the status code for the connection.|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		The payment terminal invoking the event.|

**Code example**

```csharp
//Receiving a new ConnectionStatus from the SDK
public void ConnectionStatusChanged(ConnectionStatus connectionStatus, Device device)
{
    //You might want to display this information in the UI
    postNewStatusToUI(connectionStatus);
}
```

## Current transaction status{#4}

`CurrentTransactionStatus` <span class="badge badge--info">Method</span>

The currentTransactionStatus event gets called when the state of an ongoing transaction changes.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `statusInfo` <span class="badge badge--primary">Required</span><br />[*StatusInfo*](windowsobjects.md#statusInfo)     | 		An object containing information about the current transaction.|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		The payment terminal invoking the event.|

**Code example**

```csharp
//Receiving a transaction status from the SDK.
public void currentTransactionStatus(StatusInfo statusInfo, Device device)
{
    //You might want to display some of this information in the UI
    DisplayTransactionStatusInUI(statusInfo)
}
```

## Message logged

`OnMessageLogged` <span class="badge badge--info">Method</span>

The OnMessageLogged event gets called for each and every message logged by the SDK. This function is only intended for debugging.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `logLevel` <span class="badge badge--primary">Required</span><br />[*LogLevel*](windowsobjects.md#9)     | 		An enum containing the log level.|
| `message` <span class="badge badge--primary">Required</span><br />*String*     | 		A String containing the current log message.|

**Code example**

```csharp
//Receiving a log from the SDK
public void OnMessageLogged(LogLevel logLevel, String message)
{
    //You do not want to display this information in the UI
    Debug.WriteLine(message);
}
```

## Device Logs ready{#WinDeviceLogsReady}

`DeviceLogsReady` <span class="badge badge--info">Method</span>

The DeviceLogsReady event gets called when the payment terminal logs are ready to be delivered (in response to a request to getDeviceLogs()). This Event is useful if case of a communication error between the payment terminal and the API (e.g : Bluetooth communication lost). After reconnecting, you can then fetch the card reader logs to the API.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `logs` <span class="badge badge--primary">Required</span><br />*String*     | 		String containing the current log.|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		The payment terminal invoking the event.|

**Code example**

```csharp
//Receiving a log from the device
public void DeviceLogsReady(string logs, Device device)
{
    //You might want to save this information
    WriteLogsToDisk(logs);
}
```

## Pending transaction result

`PendingTransactionResult` <span class="badge badge--info">Method</span>

In case of a communication failure between the payment terminal and your application a TransactionResult might have not been delivered to the SDK. This event is invoked when the device has a pending TransactionResult. This event might be invoked when reconnecting to a device after a communication failure during a transaction. This event will not be called if HapiManager.Settings.AutoRecoverTransactionResult is set to true.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		The payment terminal invoking the event.|

**Code example**

```csharp
@Override
public void PendingTransactionResult(Device device){
	//Here you might want to call api.GetPendingTransaction(); to receive the TransactionResult
}
```

## Transaction result ready{#11}

`TransactionResultReady` <span class="badge badge--info">Method</span>

In case of a communication failure between the device and your application a TransactionResult might have not been delivered to the SDK. This event will be invoked after using hapi.GetPendingTransaction();. When there is no pending transaction the TransactionResult will contain default/error fields and no receipts. This event is called if HapiManager.Settings.AutoRecoverTransactionResult is set to true.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `result` <span class="badge badge--primary">Required</span><br />[*TransactionResult*](windowsobjects.md#14)     | 		Holds the results for the transaction.|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		The payment terminal invoking the event.|

**Code example**

```csharp
@Override
public void TransactionResultReady(TransactionResult transactionResult, Device device){
	//Here you might want to do stuff to the transactionResult
}
```
