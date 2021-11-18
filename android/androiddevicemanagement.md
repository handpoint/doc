---
sidebar_position: 6
id: androiddevicemanagement
---

# Device management

## Connect

`connect`

Connects to a device. Whenever the connection to the device is lost, the SDK will keep on trying to establish a connection until it’s re-established. No special actions are needed.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `device` <span class="badge badge--primary">Required</span> <br />[*Device*](androidobjects.md#17)    | This parameter specifies which device type you want to connect to.|

**Code example**

```java
//Connect to a device
Device device = new Device("CardReader7", "08:00:69:02:01:FC", "1", ConnectionMethod.BLUETOOTH);
Device device = new Device("LocalDevice", "0821032398-PAXA920", "", ConnectionMethod.ANDROID_PAYMENT);
Device device = new Device("CloudDevice", "0821032398-PAXA920", "", ConnectionMethod.CLOUD);
api.connect(device);
```

**Events invoked**

**connectionStatusChanged **

Each time the card reader state changes (ex : going from Connected to Disconnected) the ConnectionStatusChanged event is called. It causes the connection manager to invoke this event with the appropriate information.

**Returns**

**Boolean**

true if the operation was successfully.

## Get Transactions Report

`getTransactionsReport`

Fetches your transactions report from a device/devices. If you want to print the report, you can call printReceipt with the string returned in ReportResult event as parameter.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `reportConfiguration` <span class="badge badge--primary">Required</span>  <br />[*ReportConfiguration*](androidobjects.md#19)    | This parameter specifies the filter to get transactions report.|

**Code example**

```java
//Get the transactions report for device "12345", from 30th April 2021 at 00:00:00, to 30th April 2021 at 23:59:59, in eurs:
List terminalSerialNumber = new ArrayList<>();
terminalSerialNumber.add("12345");
ReportConfiguration configuration = new ReportConfiguration("EUR", "20210430000000", "20210430235959", terminalSerialNumber);
api.getTransactionsReport(configuration);
```

**Events invoked**

**reportResult**

The report will be returned to the ReportResult interface which has been registered

**Returns**

**Boolean**

True if the command was processed successfully. False if the sending was not successful

## Disconnect

`disconnect`

Disconnect will stop the active connection (or reconnection process). Please note that the method ignores the current state of the terminal and just stops the connection. Calling disconnect might result in a commmunication error if triggered during a transaction.

**Code example**

```java
//Disconnect from current device
api.Disconnect();
```

**Events invoked**

**connectionStatusChanged**

Causes the connection manager to invoke this event with the appropriate information.

**Returns**

**Boolean**

true if the operation was successful.

## Get EMV Report

`getEMVConfiguration`

Fetches the logs from the device and reports them to the deviceLogsReady event.

**Code example**

```java
//Downloads logs from device
api.getDeviceLogs();
```

**Events invoked**

**reportResult**

Invoked when hapi has finished downloading the EMV report from the card reader.

** Returns**

**Boolean**

true if the operation was successfully sent to device

## Get Paired Devices

`getPairedDevices`

Returns the payment terminals associated with the specified ConnectionMethod

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `method` <span class="badge badge--primary">Required</span> <br />[*ConnectionMethod *](androidobjects.md#20)     | The type of connection with the payment terminal (Bluetooth, Cloud, etc.).|

**Code example**

```java
// Get paired terminals
List<Device> devices = api.getPairedDevices(ConnectionMethod.XXX);
```

**Returns**

**`List<Device>`**

The list of payment terminals.

## Get device logs

`getDeviceLogs`

Fetches the logs from the device and reports them to the deviceLogsReady event.

**Code example**

```java
//Downloads logs from device
api.getDeviceLogs();
```

**Events invoked**

**deviceLogsReady**

Invoked when hapi has finished downloading logs from the card reader.

** Returns**

**Boolean**

true if the operation was successfully sent to device

## Get Device Manufacturer

`getDeviceManufacturer`

Returns the manufacturer of the payment terminal

**Code example**

```java
Manufacturer manufacturer = api.getDeviceManufacturer();
```

**Returns**

**Manufacture **

The payment terminal manufacturer

## Flash Reset

`deleteDeviceConfig`

Sends a command to the terminal to delete its configuration

**Code example**

```java
api.deleteDeviceConfig();
```

## Print Receipt

`printReceipt`

Print on demand functionality allowing the merchant to print any HTML formatted receipt. It is possible to print images or barcodes. A bitmap can also be printed, in order to do so it needs to be rendered as an image and inserted into the html.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `receipt` <span class="badge badge--primary">Required</span> <br />*String*    | The receipt must match the following [HTML Print Format](https://handpoint.atlassian.net/wiki/spaces/PD/pages/1409875969/Html+Print+Format). The Transaction Report (also called End of Day Report) can be printed from the string returned in the [ReportResult](androideventlisteners.md#report-result) event.|

**Code example (Prints a receipt with Handpoint logo)**

```java
//Print a receipt with Handpoint logo (bitmap format)
String validReceipt = "<html><body><img src='data:image/bmp;base64,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'></body></html>";
boolean success = api.printReceipt(validReceipt);
```

 **Returns**

**Boolean**

true if the receipt was sent to the printer, false otherwise

## Search Devices

`searchDevices`

Starts the search of payment terminals associated with the specified ConnectionMethod

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `method` <span class="badge badge--primary">Required</span>   <br />[*ConnectionMethod*](androidobjects.md#20)    | The type of connection with the payment terminal (Bluetooth, Cloud, etc.).|

**Code example**

```java
// Starts the search for payment terminals.
// You must implement Events.DeviceDiscoveryFinished and subscribe
// to the event delegate in order to receive the result
api.searchDevices(ConnectionMethod.XXX);
```

**Events invoked**

**deviceDiscoveryFinished**

Returns a list of payment terminals.

## Set Locale

`setLocale`

Sets the SDK Locale (language). It is used to set the SDK language as well as the associated date and number formatting.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `locale` <span class="badge badge--primary">Required</span>  <br />[*SupportedLocales*](androidobjects.md#23)    | The locale to be set. Supported locales are: SupportedLocales.en_CA, SupportedLocales.en_UK, SupportedLocales.en_US, SupportedLocales.hr_HR, SupportedLocales.is_IS, SupportedLocales.fr_FR, SupportedLocales.pt_PT.|


 **Code example**

```java
// Set canadian english
api.setLocale(SupportedLocales.en_CA);
```

## Set log level

`setLogLevel`

Sets the log level (info, debug...) for both the payment terminal and the SDK.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `level *`  <br />[*LogLevel*](androidobjects.md#18)   | The desired log level. Can be LogLevel.None, LogLevel.Info, LogLevel.Full, LogLevel.Debug|
| `device` <br />[*Device*](androidobjects.md#17)    | This parameter specifies to the system which device should be used for the operations. If no device is supplied, the system will attempt to use a default one.|

**Code example**

```java
//Sets the log level to info
api.setLogLevel(LogLevel.info);
```

**Events invoked**

**None**

No events are invoked.

**Returns**

**Boolean**

true if the operation was successfully sent to device


## Stop current transaction

`stopCurrentTransaction`

Stops the current transaction. A transaction can be stopped only if the last [**currentTransactionStatus**](androideventlisteners.md#14) event reported has the property **isCancelAllowed** set to **true**.
**NOTE**: this operation is **Not supported** on ***Datecs*** devices.

**Code example**

```java
// Stops current transaction
if (api.stopCurrentTransaction()) {
	...
} else {
	...
}
```

**Events invoked**

[**currentTransactionStatus**](androideventlisteners.md#14)

Invoked after stop transaction. Status **UserCancelled** will be reported

[**endOfTransaction**](androideventlisteners.md#16)

Transaction will fail with status **CANCELLED**

**Returns**

**Boolean**

true if the transaction was successfully stopped, false otherwise


## Update device

`update`

The update operation checks for new software or configuration updates and initiates a download if required.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `device`  <br />[*Device*](androidobjects.md#17)   | This parameter specifies to the system which device should be used for the operations. If no device is supplied, the system will attempt to use a default one.|

**Code example**

```java
//Check for card reader update
api.update();
```

**Events invoked**

**None**

The merchant should be notified about the update process.

**Returns**

**Boolean**

true if the operation was successfully sent to device