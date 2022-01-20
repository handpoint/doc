---
sidebar_position: 8
id: androideventlisteners
---




# Events listeners

## All

`Events.All`

An interface which needs to be implemented and added as a listener to receive all available events.

**Extends**

`Required` `Log` `Status` `PendingResults` `ReportResult` `PrinterEvents` `TransactionStarted` `MessageHandling` `PhysicalKeyboardEvent`


## Basic

`Events.Basic`

An interface which needs to be implemented and added as a listener to receive basic events.

**Extends**

`Required` `Log` `Status` `PendingResults` `ReportResult`


## Card Brand Display

`Events.CardBrandDisplay`

An interface which needs to be implemented and added as a listener to get events providing information on the supported card brands and/or the card brand used during the transaction.

**Methods**

`deviceCapabilities( List supportedCardBrands );`

| Parameter      | Notes |
| ----------- | ----------- |
| `supportedCardBrands` <span class="badge badge--primary">Required</span> <br />*List*  | A list containing the supported card brands|

<br></br>

`readCard( CardBrands usedCard );`

| Parameter      | Notes |
| ----------- | ----------- |
| `usedCard` <span class="badge badge--primary">Required</span> <br />*CardBrands*  | Name of the card brand|

**Code example**

```java
public final class EventHandler implements Events.CardBrandDisplay {

	@Override
	public void deviceCapabilities(List supportedCardBrands) {
		// Get supported card brands 
	}

	@Override
	public void readCard(CardBrands usedCard) {
		// Get the used card brand 
	}

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```

## Connection status changed

`Events.ConnectionStatusChanged`

Implement this interface in order to receive connection status changes.

**Methods**

`connectionStatusChanged( ConnectionStatus status , Device device );`

| Parameter      | Notes |
| ----------- | ----------- |
| `status` <span class="badge badge--primary">Required</span> <br />[*ConnectionStatus*](androidobjects.md#connection-status)  | New status of the connection|
| `device` <span class="badge badge--primary">Required</span> <br />[*Device*](androidobjects.md#17)          | The terminal which sent this information.|


**Code example**

```java
public final class EventHandler implements Events.ConnectionStatusChanged {

	@Override
	public void connectionStatusChanged(ConnectionStatus status, Device device) { ... }

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```

## Current transaction status{#14}

`Events.CurrentTransactionStatus`

Implement this interface in order to receive events about the current transaction.

**Methods**

`currentTransactionStatus( StatusInfo status , Device device );`

| Parameter      | Notes |
| ----------- | ----------- |
| `status` <span class="badge badge--primary">Required</span> <br />[*StatusInfo*](androidobjects.md#status-info)    | The **StatusInfo** of the current transaction|
| `device` <span class="badge badge--primary">Required</span> <br />[*Device*](androidobjects.md#17)     | The terminal the request is sent from.|


**Code example**

```java
public final class EventHandler implements Events.CurrentTransactionStatus {

	@Override
	public void currentTransactionStatus(StatusInfo info, Device device) { ... }

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```

## Device capabilities ready

`Events.DeviceCapabilitiesReady`

Implement this interface in case the terminal needs to notify the SDK of its capabilities

**Methods**

`deviceCapabilities( DeviceCapabilities capabilities , Device device );`

| Parameter      | Notes |
| ----------- | ----------- |
| `capabilities` <span class="badge badge--primary">Required</span> <br />[*DeviceCapabilities*](androidobjects.md#24)    | The capabilities of the terminal|
| `device` <span class="badge badge--primary">Required</span> <br />[*Device*](androidobjects.md#17)     | The terminal sending its capabilities|


**Code example**

```java
public final class EventHandler implements Events.DeviceCapabilitiesReady {

	@Override
	public void deviceCapabilities(DeviceCapabilities capabilities, Device device) { ... }

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```


## Device discovery finished

`Events.DeviceDiscoveryFinished`

Implement this interface in order to receive a list of available terminals. The event handler defined in this interface is invoked after calling the method searchDevices

**Methods**

`deviceDiscoveryFinished( List<Device> devices );`

| Parameter      | Notes |
| ----------- | ----------- |
| `device` <span class="badge badge--primary">Required</span> <br />[*Device*](androidobjects.md#17)     | 	A list of available devices.|


**Code example**

```java
public final class EventHandler implements Events.DeviceDiscoveryFinished {

	@Override
	public void deviceDiscoveryFinished(List<Device> devices) {
		// Receiving a list of connectable devices
		foreach(Device device in devices) { ... }

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```

## End of transaction{#16}

`Events.EndOfTransaction`

Implement this interface to receive an event when a transaction is complete.

**Methods**

`dendOfTransaction( TransactionResult result , Device device );`

| Parameter      | Notes |
| ----------- | ----------- |
| `result` <span class="badge badge--primary">Required</span> <br />[*TransactionResult*](androidobjects.md#25)     | 		Holds all the information about the transaction.|
| `device` <span class="badge badge--primary">Required</span> <br />[*Device*](androidobjects.md#17)     | 	The payment terminal.|


**Code example**

```java
public final class EventHandler implements Events.EndOfTransaction {

	@Override
	public void endOfTransaction(TransactionResult result, Device device) {
		// Check the status of the transaction, save it, ...
	}

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```

## Hardware status changed

`Events.HardwareStatusChanged`

Implement this interface in order to receive events when the hardware status changes.

**Methods**

`hardwareStatusChanged( HardwareStatus status , Device device );`

| Parameter      | Notes |
| ----------- | ----------- |
| `status` <span class="badge badge--primary">Required</span>  <br/> *HardwareStatus*    | 		New status of the hardware.|
| `device` <span class="badge badge--primary">Required</span>  <br/>[*Device*](androidobjects.md#17)     | 	The payment terminal.|


**Code example**

```java
public final class EventHandler implements Events.HardwareStatusChanged {

	@Override
	public void hardwareStatusChanged(HardwareStatus status, Device device) { ... }

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```

## Log

`Events.Log`

An interface which needs to be implemented and added as a listener to receive logging information.

**Extends**

`OnMessageLogged`

**Code example**

```java
public final class EventHandler implements Events.Log {

	@Override
	public void deviceLogsReady(String logs, Device device) { ... }
	@Override
	public void onMessageLogged(LogLevel level , String message) { ... }

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```

## MessageHandling

`Events.MessageHandling`

An interface which needs to be implemented and added as a listener to get events which are called when the sdk asks the application to display or hide a message.

**Methods**

`showMessage( String message , Boolean dismissible , int duration );`

| Parameter      | Notes |
| ----------- | ----------- |
| `message` <span class="badge badge--primary">Required</span> <br/> *String*     | 		Message to display|
| `dismissible` <span class="badge badge--primary">Required</span> <br/> *Boolean*    | 	A flag that indicates whether the message can be dismissed|
| `duration` <span class="badge badge--primary">Required</span> <br/> *int*    | 		The timeout to hide the message. In milliseconds, if 0 is sent, the message should not auto dismiss.|


`hideMessage( String message );`

| Parameter      | Notes |
| ----------- | ----------- |
| `message` <span class="badge badge--primary">Required</span> <br />*String*     | 		Message to hide|

**Code example**

```java
public final class EventHandler implements Events.MessageHandling {

	@Override
	public void showMessage(String message, Boolean dismissible, int duration) {
		// Show message for a 'duration' period (if duration = 0 DO NOT dismiss until hideMessage(String message) event is received) and make it dismissible if the input marks it as possible
	}

	@Override
	public void hideMessage(String message) {
		// Hide the message
	}

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```

## PhysicalKeyboardEvent

`Events.PhysicalKeyboardEvent`

An interface which needs to be implemented and added as a listener to get events coming from the PAX A80 physical keyboard.

** Methods**

`onKeyPressed( PaxA80Keys key );`

| Parameter      | Notes |
| ----------- | ----------- |
| `key` <span class="badge badge--primary">Required</span>  <br />[*PaxA80Keys*](androidobjects.md#28)     | 		The name of the key that has been pressed|


**Code example**

```java
public final class EventHandler implements Events.PhysicalKeyboardEvent {

	@Override
	public void onKeyPressed(String key) { ... }

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```

## On message logged

`Events.OnMessageLogged`

Implement this interface to receive logs from the payment terminal. You must call `getDeviceLogs` to request the logs.

**Methods**

`onMessageLogged( LogLevel level , String message );`

| Parameter      | Notes |
| ----------- | ----------- |
| `level` <span class="badge badge--primary">Required</span>  <br />[*LogLevel*](androidobjects.md#18)   | 		The LogLevel of the logging|
| `message` <span class="badge badge--primary">Required</span><br />*String*     | 		The log trace which was logged by the SDK.|


**Code example**

```java
public final class EventHandler implements Events.OnMessageLogged {

	@Override
	public void onMessageLogged(LogLevel level, String message) {
		// Process log trace
	}

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```

## PendingResults

`Events.PendingResults`

An interface which needs to be implemented and added as a listener to receive information about pending TransactionResults. In case of a communication failure between the SDK and the payment terminal there might be a result pending from the transaction which did not get sent to the SDK.

**Code example**

```java
public final class EventHandler implements Events.PendingResults {

	@Override
	public void transactionResultReady(TransactionResult transactionResult, Device device) { ... }

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```

**Extends**

`TransactionResultReady`

## PaymentProvider

`Events.PaymentProvider`

An interface which needs to be implemented and added as a listener to receive all available events related to financial operations.

**Code example**

```java
public final class EventHandler implements Events.PendingResults {

	@Override
	public void transactionResultReady(TransactionResult transactionResult, Device device) { ... }

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```

**Extends**

`SignatureRequired` `EndOfTransaction` `OnMessageLogged` `CurrentTransactionStatus`


## PrinterEvents

`Events.PrinterEvents`

An interface which needs to be implemented and added as a listener to get events coming from the printer.

**Methods**

`printSuccess( );`



`printError(PrintError error);`

| Parameter      | Notes |
| ----------- | ----------- |
| `error` <span class="badge badge--primary">Required</span> <br />[*PrintError*](androidobjects.md#29)     | 		Enum detailing the reason of the error|

**Code example**

```java
public final class EventHandler implements Events.PrinterEvents {

	@Override
	public void printSuccess() {
		// Successful print action
	}

	@Override
	public void printError(PrintError error) {
		// Unable to perform print action due to error
	}

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```

## Report result

`Events.ReportResult`

Implement this interface to receive an event when a report result from a getTransactionsReport is returned

**Methods**

`reportResult( TypeOfResult type , String report , DeviceStatus status , Device device );`

| Parameter      | Notes |
| ----------- | ----------- |
| `type` <span class="badge badge--primary">Required</span>  <br />[*TypeOfResult*](androidobjects.md#30)   | 		The type of the report|
| `report` <span class="badge badge--primary">Required</span> <br />*String*  | 		The text of the report|
| `status` <span class="badge badge--primary">Required</span>  <br />[*DeviceStatus*](androidobjects.md#33)   | 		The status of the device|
| `device` <span class="badge badge--primary">Required</span> <br />[*Device*](androidobjects.md#17)     | 		The terminal sending the report|


**Code example**

```java
public final class EventHandler implements Events.ReportResult {

	@Override
	public void reportResult(TypeOfResult type, String report, DeviceStatus status, Device device) { ... }

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```

## Required{#42}

`Events.Required`

You must provide a class implementing this interface when initializing the SDK.

**Code example**

```java
public final class EventHandler implements Events.Required {

	@Override
	public void signatureRequired(SignatureRequest signatureRequest, Device device) { ... }
	@Override
	public void endOfTransaction(TransactionResult transactionResult, Device device) { ... }
	@Override
	public void deviceDiscoveryFinished(List devices) { ... }
	@Override
	public void transactionResultReady(TransactionResult transactionResult, Device device) { ... }

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```

**Events**

`SignatureRequired` `EndOfTransaction` `DeviceDiscoveryFinished` `PendingResults`


## Signature required{#15}

`Events.SignatureRequired`

The SignatureRequired interface must be implemented in order to receive an event when a card requires a signature as a verification method. This interface is only required for an Hi5 or Hilite integration, PAX and Telpo terminals automatically prompt for signature capture on the terminal.

**Methods**

`signatureRequired( SignatureRequest request , Device device );`

| Parameter      | Notes |
| ----------- | ----------- |
| `request` <span class="badge badge--primary">Required</span> <br /> [*SignatureRequest*](androidobjects.md#signature-request)   | 		Holds the signature request.|
| `device` <span class="badge badge--primary">Required</span><br />[*Device*](androidobjects.md#17)     | 		The payment terminal.|


**Code example**

```java
public final class EventHandler implements Events.SignatureRequired {

	@Override
public void signatureRequired(SignatureRequest signatureRequest, Device device) {
		// Save merchant receipt
		String merchantReceipt = signatureRequest.getMerchantReceipt();
		api.signatureResult(true);
	}

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```

## Status

`Events.Status`

An interface which needs to be implemented and added as a listener to receive connection and transaction statuses.

**Code example**

```java
public final class EventHandler implements Events.Status {

	@Override
	public void connectionStatusChanged(ConnectionStatus status, Device device) { ... }
	@Override
	public void hardwareStatusChanged(HardwareStatus status, Device device) { ... }
	@Override
	public void currentTransactionStatus(StatusInfo info, Device device) { ... }

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```

**Extends**

`ConnectionStatusChanged` `HardwareStatusChanged` `CurrentTransactionStatus`

## Transaction result ready

`Events.TransactionResultReady`

Implement this interface in order to receive an event after a pending TransactionResult has been recovered from the payment terminal.

**Methods**

`transactionResultReady( TransactionResult transactionResult , Device device );`

| Parameter      | Notes |
| ----------- | ----------- |
| `transactionResult` <span class="badge badge--primary">Required</span>  <br />[*TransactionResult*](androidobjects.md#25)    | 		A ***TransactionResult*** is containing all information about the recovered transaction.|
| `device` <span class="badge badge--primary">Required</span> <br />[*Device*](androidobjects.md#17)     | 		The payment terminal.|


**Code example**

```java
public final class EventHandler implements Events.TransactionResultReady {

	@Override
	public void transactionResultReady(TransactionResult transactionResult, Device device) { ... }

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```

## Transaction started

`Events.TransactionStarted`

Implement this interface in order to receive an event when a transaction is started through the Cloud API channel.

**IMPORTANT NOTE**: This interface is only available for cloud-enabled devices. See DeviceCapabilitiesReady interface.

**Methods**

`transactionStarted( TransactionType transactionType , BigInteger amount , Currency currency );`

| Parameter      | Notes |
| ----------- | ----------- |
| `transactionType` <span class="badge badge--primary">Required</span> <br />[*TransactionType*](androidobjects.md#31)    | 		Type of transaction started|
| `amount` <span class="badge badge--primary">Required</span>  <br />*BigInteger*     | 		Amount in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `currency` <span class="badge badge--primary">Required</span> <br />[*Currency*](androidobjects.md#13)     | 		Currency of the transaction started|

**Code example**

```java
public final class EventHandler implements Events.TransactionStarted {

	@Override
public void transactionStarted(TransactionType type, BigInteger amount, Currency currency) {
		// Notify the app user transaction has been started ...
	}

}

// Remember to register the instance of this EventHandler:
this.api.registerEventsDelegate(eventHandlerInstance);
```