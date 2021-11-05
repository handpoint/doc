---
sidebar_position: 5
id: windowsdevicemanagement
---

# Device management

## Connect

`Connect`

Configures the device as the preferred device and tries to connect to it. Everytime a new connection is started the SDK will make 3 attempts to reestablish the connection. If those attempts fail, the connection is considered dead.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the system which device you want to use for the operations.|


**Code example**

```csharp
//Connect to a CLOUD device
Device device = new Device("CloudDevice", "9822032398-PAXA920", "", ConnectionMethod.Cloud);
// The address is the composition of the serial number and model ot the target device.
//Example for a PAX A920 device: serial_number - model  -> 9822032398-PAXA920
api.UseDevice(device);

//Connect to a device
Device device = new Device("CardReader7", "08:00:69:02:01:FC", "1", ConnectionMethod.BLUETOOTH);
api.UseDevice(device);
```

#### Events invoked

**[*ConnectionStatusChanged*](windowsevents.md#7)** 
****
Each time the card reader state changes (ex : going from Connected to Disconnected) the **[*ConnectionStatusChanged*](windowsevents.md#7)** event is called. It causes the connection manager to invoke this event with the appropriate information.

#### Returns

**Boolean**
****
true if the operation was successful.

## Disconnect

`Disconnect`

Disconnect will stop the active connection (and reconnection process). Please note that the method does NOT ignore the current state of the card reader. This means that if a disconnect is attempted during a transaction it will not be successful and the method will return `false`. If a transaction is not in progress the disconnect will take 1-3 seconds to successfully finish and will then return `true`.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the system which device you want to use for the operations. If none is supplied the system will attempt to use a default device, if any.|

**Code example**

```csharp
//Disconnect from current device
api.Disconnect();
```

#### Events invoked

**[*ConnectionStatusChanged*](windowsevents.md#7)** 
****
Each time the card reader state changes (ex : going from Connected to Disconnected) the **[*ConnectionStatusChanged*](windowsevents.md#7)** event is called. It causes the connection manager to invoke this event with the appropriate information.

#### Returns

**Boolean**
****
true if the operation was successful.

## Set shared secret

`SetSharedSecret`

Validates the app for this session, thus enabling financial transactions

#### Parameters
| Parameter      | Notes |
| ----------- | ----------- |
| `sharedSecret` <span class="badge badge--primary">Required</span><br />*String*     | 		The shared secret is a key provided by Handpoint when you get your account that enables you to perform live operations with the card reader. However, if you're developing with a starter kit, the test shared secret is specified in the example|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the system which device you want to use for the operations. If none is supplied the system will attempt to use a default device, if any.|

**Code example**

```csharp
//Sets the shared secret using the test key
api.SetSharedSecret("0102030405060708091011121314151617181920212223242526272829303132");
```

#### Events invoked

**None**
****
No events invoked.

#### Returns

**Boolean**
****
true if the operation was successfully sent to device


## Set parameter

`SetParameter`

Changes values of certain parameters on the card reader.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `param` <span class="badge badge--primary">Required</span><br />[*DeviceParameter*](windowsobjects.md#8)     | 		The name of the parameter to change|
| `value` <span class="badge badge--primary">Required</span><br />*String*     | 		New value of the parameter|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the system which device you want to use for the operations. If none is supplied the system will attempt to use a default device, if any.|

**Code example**

```csharp
//Changes the bluetooth name of card reader
api.SetParameter(DeviceParameter.BluetoothName, "OrangeCardReader");
```

#### Events invoked

**None**
****
No events are invoked.

#### Returns

**Boolean**
****
true if the operation was successfully sent to device

## Set logging level

`SetLogLevel`

Sets the log level (info, debug...) for both the card reader and the API. Note : At the end of a transaction, the card reader logs are always automatically fetched to the API.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `level` <span class="badge badge--primary">Required</span><br />[*LogLevel*](windowsobjects.md#9)     | 		The desired log level. Can be LogLevel.None, LogLevel.Info, LogLevel.Full, LogLevel.Debug|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the system which device you want to use for the operations. If none is supplied the system will attempt to use a default device, if any.|

**Code example**

```csharp
//Sets the log level to info
api.SetLogLevel(LogLevel.info);
```

#### Events invoked

**None**
****
No events are invoked.

#### Returns

**Boolean**
****
true if the operation was successfully sent to device


## Request device logs

`GetDeviceLogs`

Fetches the logs from the device and reports them to the **[*DeviceLogsReady*](#10)** event.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the system which device you want to use for the operations. If none is supplied the system will attempt to use a default device, if any.|

**Code example**

```csharp
//Downloads logs from device
api.GetDeviceLogs();
```

#### Events invoked

**[*DeviceLogsReady*](windowsevents.md#10)**
****
Invoked when hapi has finished downloading logs from the card reader.

#### Returns

**Boolean**
****
true if the operation was successfully sent to device

## Request pending transaction results

`GetPendingTransaction`

**Please note this method is only supported on Card Readers with EFT Software versions 1.7.x and 2.2.x and up**<br />
In the case of a communication failure between the device and the API a TransactionResult might have not been delivered to the API. This function fetches a pending TransactionResult (which contains receipts) from the device, if any. If no TransactionResult was pending a result will be delivered containing default fields. In order to receive only valid TransactionResults this function should only be called when PendingTransactionResult event is invoked or when HapiManager.IsTransactionResultPending() is true. To receive events when a TransactionResult is pending on the device please add a Events.PendingResults listener.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the system which device you want to use for the operations. If none is supplied the system will attempt to use a default device, if any.|

**Code example**

```csharp
//Fetches a pending TransactionResult from a device
api.GetPendingTransaction();
```

#### Events invoked

**[*TransactionResultReady*](windowsevents.md#11)**
****

Invoked when hapi has finished fetching a TransactionResult from the device.

#### Returns

**Boolean**
****
true if the operation was successfully sent to the device

## Update device

`Update`

The update operation checks for update to the card reader and initiates an update if needed. The update can either be a software update or a configuration update.

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](windowsobjects.md#2)     | 		This parameter specifies to the system which device you want to use for the operations. If none is supplied the system will attempt to use a default device, if any.|

**Code example**

```csharp
//Check for card reader update
api.Update();
List Devices (search)
```

#### Events invoked

**None**
****
Information about this process should be available at the device's screen.

#### Returns

**Boolean**
****
true if the operation was successfully sent to device

## List Devices (search)

`ListDevices`

Starts the search for devices to connect with the specified ConnectionMethod

#### Parameters

| Parameter      | Notes |
| ----------- | ----------- |
| `method` <span class="badge badge--primary">Required</span><br />[*ConnectionMethod*](windowsobjects.md#12)     | 		The means of connection you intend to use to talk to the device. (Bluetooth, Cloud, Serial, USB, etc...)|

**Code example**

```csharp
//Search for Bluetooth devices
api.ListDevices(ConnectionMethod.BLUETOOTH);

//Search for Cloud devices
api.ListDevices(ConnectionMethod.CLOUD);
```

#### Events invoked

**[*deviceDiscoveryFinished*](windowsevents.md#13)**
****
Invoked after the search is finished returning a list of the devices finished.

## Start monitoring connections

`StartMonitoringConnections`

Starts a connection monitoring service. The service listens to events sent by the operating system about the connected hardware. If the service notices that a previously connected device suddenly disconnects on the hardware layer it attempts to reconnect to that particular device. Since this is a service it is necessary that the service is turned off before the application ends its life-time. This means that, if the service was running, stopMonitoringConnections() has to be called before the application is exited completely. Note that the service currently only works with USB. In the case of USB the service will only disconnect from the device and when it notices that it has been plugged in again it will connect to it.

**Code example**

```csharp
//Starts the connection monitoring service
//app starts it's life-time
api.StartMonitoringConnections();
...
//app ends its life-time
api.StopMonitoringConnections
```

#### Events invoked

**[*ConnectionStatusChanged*](windowsevents.md#7)**
****

Causes the connection manager to invoke this event with the appropriate information.

#### Returns

**None**
****
No information is returned.


## Stop monitoring connections

`StopMonitoringConnections`

Stops a connection monitoring service. The service listens to events sent by the operating system about the connected hardware. If the service notices that a previously connected device suddenly disconnects on the hardware layer it attempts to reconnect to that particular device. Since this is a service it is necessary that the service is turned off before the application ends its life-time. This means that, if the service was running, stopMonitoringConnections() has to be called before the application is exited completely. Note that the service currently only works with USB. In the case of USB the service will only disconnect from the device and when it notices that it has been plugged in again it will connect to it.

**Code example**

```csharp
//Starts the connection monitoring service
//app starts it's life-time
api.StartMonitoringConnections();
...
//app ends its life-time
api.StopMonitoringConnections
```

#### Events invoked

**[*ConnectionStatusChanged*](windowsevents.md#7)**

****
Causes the connection manager to invoke this event with the appropriate information.

#### Returns
**None**

No information is returned.