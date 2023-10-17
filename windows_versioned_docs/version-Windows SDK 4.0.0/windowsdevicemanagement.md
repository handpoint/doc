---
sidebar_position: 6
id: windowsdevicemanagement
---

# Terminal Management

## Connect

`Connect` <span class="badge badge--info">Method</span>

Configures the device as the preferred device and tries to connect to it. Everytime a new connection is started the SDK will make 3 attempts to re-establish the connection. If those attempts fail, the connection is considered dead.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the sdk which payment terminal should be used.|


**Code example**

```csharp
//Connect to a CLOUD device (PAX/Telpo)
Device device = new Device("CloudDevice", "9822032398-PAXA920", "", ConnectionMethod.Cloud);
// The address is the composition of the serial number and model ot the target device.
//Example for a PAX A920 device: serial_number - model  -> 9822032398-PAXA920
api.Connect(device);

//Connect to a BLUETOOTH device (HiLite)
Device device = new Device("CardReader7", "08:00:69:02:01:FC", "1", ConnectionMethod.BLUETOOTH);
api.Connect(device);
```

#### Events invoked

**[*ConnectionStatusChanged*](windowsevents.md#7)** 

Each time the card reader state changes (ex : going from Connected to Disconnected) the **[*ConnectionStatusChanged*](windowsevents.md#7)** event is called. It causes the connection manager to invoke this event with the appropriate information.

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `True` if the operation was successful.|


## Disconnect

`Disconnect` <span class="badge badge--info">Method</span>

Disconnect will stop the active connection (and reconnection process). Please note that the method does NOT ignore the current state of the payment terminal. This means that if a disconnect is attempted during a transaction it will not be successful and the method will return `false`. If a transaction is not in progress, the disconnect will take 1-3 seconds to successfully finish and will then return `true`.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any.|

**Code example**

```csharp
//Disconnect from current device
api.Disconnect();
```

#### Events invoked

**[*ConnectionStatusChanged*](windowsevents.md#7)** 

Each time the card reader state changes (ex : going from Connected to Disconnected) the **[*ConnectionStatusChanged*](windowsevents.md#7)** event is called. It causes the connection manager to invoke this event with the appropriate information.

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `True` if the operation was succesful|

## Set shared secret

`SetSharedSecret` <span class="badge badge--info">Method</span>

Validates your application for this session, thus enabling financial transactions.

#### Parameters
| Parameter      | Notes |
| ----------- | ----------- |
| `sharedSecret` <span class="badge badge--primary">Required</span><br />*String*     | 		The shared secret is a an authentication key provided by Handpoint, it is unique per merchant (not per terminal).|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any.|

**Code example**

```csharp
//Sets the shared secret
api.SetSharedSecret("0102030405060708091011121314151617181920212223242526272829303132");
```

#### Events invoked

**None**

No events invoked.

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `True` if the operation was successfully sent to the payment terminal.|


## Set parameter

`SetParameter` <span class="badge badge--info">Method</span>

Allows developers to optionally change several internal parameters of the payment terminal. 

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `param` <span class="badge badge--primary">Required</span><br />[*DeviceParameter*](windowsobjects.md#8)     | 		The name of the parameter to change.|
| `value` <span class="badge badge--primary">Required</span><br />*String*     | 		New value of the parameter.|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any.|

**Code example**

```csharp
//Changes the bluetooth name of card reader
api.SetParameter(DeviceParameter.BluetoothName, "OrangeCardReader");
```

#### Events invoked

**None**

No events are invoked.

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `True` if the operation was successfully sent to the payment terminal.|


## Set logging level

`SetLogLevel` <span class="badge badge--info">Method</span>

Sets the log level (info, debug etc.) for both the payment terminal and the API.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `level` <span class="badge badge--primary">Required</span><br />[*LogLevel*](windowsobjects.md#9)     | 		The desired log level. Possible values are `LogLevel.None`, `LogLevel.Info`, `LogLevel.Full`, `LogLevel.Debug`.|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any.|

**Code example**

```csharp
//Sets the log level to info
api.SetLogLevel(LogLevel.info);
```

#### Events invoked

**None**

No events are invoked.

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `True` if the operation was successfully sent to the payment terminal.|


## Request device logs

`GetDeviceLogs` <span class="badge badge--info">Method</span>

Fetches the logs from the payment terminal and reports them to the [DeviceLogsReady](windowsevents.md#WinDeviceLogsReady) event.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any.|

**Code example**

```csharp
//Downloads logs from device
api.GetDeviceLogs();
```

#### Events invoked

**[*DeviceLogsReady*](windowsevents.md#WinDeviceLogsReady)**

Invoked when the SDK has finished downloading logs from the payment terminal.

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `True` if the operation was successfully sent to the payment terminal.|


## Request pending transaction results

`GetPendingTransaction` <span class="badge badge--info">Method</span>

In the case of a communication failure between the device and the SDK a TransactionResult might have not been delivered to the API. This function fetches a pending TransactionResult (which contains receipts) from the payment terminal, if any. If no TransactionResult was pending a result will be delivered containing default fields. In order to receive only valid TransactionResults this function should only be called when PendingTransactionResult event is invoked or when HapiManager.IsTransactionResultPending() is true. To receive events when a TransactionResult is pending on the device please add the Events.PendingResults listener.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any.|

**Code example**

```csharp
//Fetches a pending TransactionResult from a device
api.GetPendingTransaction();
```

#### Events invoked

**[*TransactionResultReady*](windowsevents.md#11)**

Invoked when the SDK has finished fetching a TransactionResult from the payment terminal.

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `True` if the operation was successfully sent to the payment terminal.|


## Update device

`Update` <span class="badge badge--info">Method</span>

The update operation checks for available software or configuration update. If an update is pending it will be downloaded and installed by the payment terminal. 

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any.|

**Code example**

```csharp
//Check for card reader update
api.Update();
```

#### Events invoked

**None**

Information about this process should be available at the device's screen.

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| `Boolean`| `True` if the operation was successfully sent to the payment terminal.|


## List Devices (search)

`ListDevices` <span class="badge badge--info">Method</span>

Starts the search for payment terminals to connect to. 

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `method` <span class="badge badge--primary">Required</span><br />[*ConnectionMethod*](windowsobjects.md#12)     | 		The connection type to the payment terminal (Bluetooth or Cloud)|

**Code example**

```csharp
//Search for Bluetooth devices
api.ListDevices(ConnectionMethod.BLUETOOTH);

//Search for Cloud devices
api.ListDevices(ConnectionMethod.CLOUD);
```

#### Events invoked

**[*deviceDiscoveryFinished*](windowsevents.md#13)**

Returns a list of available payment terminals.

## Start monitoring connections

`StartMonitoringConnections` <span class="badge badge--info">Method</span>

Starts a connection monitoring service. The service listens to events sent by the operating system about the connected hardware. If the service notices that a previously connected device suddenly disconnects on the hardware layer it attempts to reconnect to that particular device. Since this is a service it is necessary that the service is turned off before the application ends its life-time. This means that, if the service was running, stopMonitoringConnections() has to be called before the application is exited completely. Note that the service currently only works with USB. In the case of USB the service will only disconnect from the device and when it notices that it has been plugged in again it will connect to it.

**Code example**

```csharp
//Starts the connection monitoring service
//app starts it's life-time
api.StartMonitoringConnections();
...
//app ends its life-time
api.StopMonitoringConnections();
```

#### Events invoked

**[*ConnectionStatusChanged*](windowsevents.md#7)**

Invoked when the status of the connection with the payment terminal changes. 

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **None**| No information is returned.|



## Stop monitoring connections

`StopMonitoringConnections` <span class="badge badge--info">Method</span>

Stops a connection monitoring service. The service listens to events sent by the operating system about the connected hardware. If the service notices that a previously connected device suddenly disconnects on the hardware layer it attempts to reconnect to that particular device. Since this is a service it is necessary that the service is turned off before the application ends its life-time. This means that, if the service was running, stopMonitoringConnections() has to be called before the application is exited completely. Note that the service currently only works with USB. In the case of USB the service will only disconnect from the device and when it notices that it has been plugged in again it will connect to it.

**Code example**

```csharp
//Starts the connection monitoring service
//app starts it's life-time
api.StartMonitoringConnections();
...
//app ends its life-time
api.StopMonitoringConnections();
```

#### Events invoked

**[*ConnectionStatusChanged*](windowsevents.md#7)**

Invoked when the status of the connection with the payment terminal changes.

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| **None**| No information is returned.|

## Get Transaction Status

`getTransactionStatus` <span class="badge badge--info">Method</span>

If for any reasons you do not know if a transaction was approved or declined then this method will allow you to retrieve the status of the transaction from the Handpoint gateway. The `getTransactionStatus` method is a convenient way to retrieve the current status of a transaction based on its unique reference. This method accepts a `transactionReference` as a parameter and returns the current status of the transaction. The `transactionReference` is returned at the start of a transaction, as part of the [Operation Start Result](windowsobjects.md#OperationStartResult) object.

The main [*FinancialStatus*](windowsobjects.md#25) that can be returned as a response to this method are the following ones: 
- AUTHORISED - Transaction was successful. 
- DECLINED - Transaction was declined.
- UNDEFINED (NOT FOUND) -  The transaction does not exist in the Handpoint gateway. If this status is returned within 90s of the start of a transaction, there could be a chance that the cardholder has not inserted, swiped or tapped his card yet on the terminal and the Handpoint gateway might soon receive the transaction. If the `UNDEFINED` status is returned after 90s, it means that the transaction processed has not reached the Handpoint gateway and it will NOT be charged.
- IN_PROGRESS - The transaction has been received by the gateway but the outcome is not known yet, try again after a few seconds. 
- REFUNDED - Transaction was refunded. 
- FAILED - Status generated due to a network error, a card which can not be read etc. As a general rule, errors are mapped to FAILED. This means the operation was unsuccessful and the transaction has not been charged.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `transactionReference` <span class="badge badge--primary">Required</span>  <br />*String*   | The `transactionReference` ([UUID v4](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random))) is returned at the start of a transaction, as part of the [OperationStartResult](windowsobjects.md#OperationStartResult) object.|

**Code example**

```csharp
//Gets the current status of a transaction 
this.Hapi.GetTransactionStatus("00000000-0000-0000-0000-000000000000");
```

**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| [TransactionResult](windowsobjects.md#14)| An object holding information about the result of a transaction.|