---
sidebar_position: 9
id: windowobjects
---


# Objects

## Transaction Result Object{#14}

`TransactionResult`

An object holding information about the result of a transaction.

**Properties**

| Parameter      | Notes |
| ----------- | ----------- |
| `aid`<br />*String*    | 		Application Identifier of the card (EMV tag 9F06)|
| `arc`<br />*String*    | 		EMV Authorisation Response Code (EMV tag 8A)|
| `authorisationCode`<br />*String*    | 		Acquirer response code|
| `balance`<br />*BigInteger*     | 		Balance available on the card|
| `budgetNumber`<br />*String*    | 		Used to split payments over a period of months|
| `cardEntryType`<br />[*CardEntryType*](#22)     | 		Method used by the terminal to read the card|
| `cardLanguagePreference`<br />*String*    | 		Preferred language of the card (EMV tag 5F2D)|
| `cardSchemeName`<br />[*CardSchemeName*](#23)     | 		The brand of the card|
| `cardToken`<br />*String*    | 		Token representing the PAN of the card|
| `chipTransactionReport`<br />*String*    | 		Full report of the card EMV parameters|
| `currency`<br />[*Currency*](#1)      | 		The currency used for the transaction|
| `customerReceipt`<br />*String*    | 		A URL containing the customer receipt in HTML format|
| `customerReference`<br />*String*    | 		If a customerReference was provided as an optional parameter in the transaction request it is echoed unaltered in this field|
| `deviceStatus`<br />[*DeviceStatus*](#24)     | 		Status of the device|
| `dueAmount`<br />*String*    | 		In case of a partial approval for the transaction, this field contains the amount which remains to be paid|
| `efttimestamp`<br />*Date*     | 			Time of the transaction|
| `efttransactionID`<br />*String*    | 		Handpoint unique identifier for a transaction, this id is the one to be used for a transaction to be reversed.|
| `errorMessage`<br />*String*    | 		Detailed reason for the transaction error|
| `expiryDateMMYY`<br />*String*    | 		Expiry date of the card used for the operation|
| `finStatus`<br />[*FinancialStatus*](#25)     | 		The financial status contains the outcome of the transaction. For example "AUTHORISED" or "DECLINED"|
| `iad`<br />*String*    | 		Issuer Application Data (EMV tag 9F10)|
| `issuerResponseCode`<br />*String*    | 		Response code from the card issuer|
| `maskedCardNumber`<br />*String*    | 		Masked card number of the card used for the operation|
| `merchantAddress`<br />*String*    | 		Merchant Address|
| `merchantName`<br />*String*    | 		Merchant Name|
| `merchantName`<br />*String*    | 		A URL containing the customer receipt in HTML format|
| `mid`<br />*String*    | 		Merchant Identifier|
| `originalEFTTransactionID`<br />*String*    | 		In case the transaction type is a reversal, this field will contain the identifier of the original transaction being reversed|
| `paymentScenario`<br />[*PaymentScenario*](#26)     | 		Indicates the card entry mode|
| `recoveredTransaction`<br />*boolean*     | 		This flag is set to true if the transaction result is sent through the transaction recovery logic explained in the Recovey Section, false otherwise|
| `requestedAmount`<br />*BigInteger*     | 		The requested amount is the transaction amount sent to the terminal|
| `rrn`<br />*String*    | 		Retrieval Reference Number, unique number assigned by the acquirer|
| `signatureUrl`<br />*String*    | 		If a digital signature is required, this is the URL containing the image of the captured signature|
| `statusMessage`<br />*String*    | 		The status of the transaction, for example "Waiting for pin"|
| `tenderType`<br />[*TenderType*](#27)     | 		Transaction tender type (credit / debit)|
| `tid`<br />*String*    | 		Terminal Identifier|
| `tipAmount`<br />*BigInteger*     | 		Tip amount, if any, in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `tipPercentage`<br />*double*     | 		If tipping is enabled, this field will return the tip percentage added on top of the base amount|
| `totalAmount`<br />*BigInteger*     | 		The total amount is the amount the card was charged for. It is possible that the total amount is not the same as the requested amount since an additional fee can be added, with the customer's approval, via the tipping functionality|
| `transactionID`<br />*String*    | 		The transaction id is a terminal internal counter incremented for each transaction|
| `tsi`<br />*String*    | 		Transaction Status Information (EMV tag 9B)|
| `tvr`<br />*String*    | 		Transaction Verification Results (EMV tag 95)|
| `type`<br />[*TransactionType*](#28)     | 		The type of transaction initiated, for example "SALE"|
| `unMaskedPan`<br />*String*    | 		Unmasked PAN, only received if the card is a non-payment card (loyalty)|
| `verificationMethod`<br />[*VerificationMethod*](#29)     | 		cardholder verification method, for example "PIN"|

**Code example**

```json
{
  "aid": "A0000000041010",
  "arc": "0000",
  "authorisationCode": "123456",
  "balance": null,
  "budgetNumber": "",
  "cardEntryType": "UNDEFINED",
  "cardLanguagePreference": "",
  "cardSchemeName": "MasterCard",
  "cardToken": "",
  "chipTransactionReport": "",
  "currency": "USD",
  "customerReceipt": "https://s3.[...]/customerReceipt.html",
  "customerReference": "",
  "deviceStatus": {
      "applicationName": "ClientApp",
      "applicationVersion": "20.1.0",
      "batteryCharging": "Not Charging",
      "batteryStatus": "100",
      "batterymV": "4126",
      "bluetoothName": "PAXA920",
      "externalPower": "USB",
      "serialNumber": "0821032398",
      "statusMessage": "Approved or completed successfully"
  },
  "dueAmount": 0,
  "errorMessage": "",
  "expiryDateMMYY": "0422",
  "finStatus": "AUTHORISED",
  "iad": "0210A000002A0000000000000000000000FF",
  "issuerResponseCode": "00",
  "maskedCardNumber": "************1456",
  "merchantAddress": "Plaza Soledad Torres Acosta 1 28013 Madrid",
  "merchantName": "Hago la cama",
  "merchantReceipt": "https://s3.[...]/merchantReceipt.html",
  "mid": "",
  "originalEFTTransactionID": "",
  "paymentScenario": "CHIPCONTACTLESS",
  "rrn": "",
  "signatureUrl": "",
  "statusMessage": "Approved or completed successfully",
  "tenderType": "CREDIT",
  "tid": "ACQUIRER_TID",
  "tipAmount": 0,
  "totalAmount": 100,
  "transactionID": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
  "tsi": "0000",
  "tvr": "0400008001",
  "type": "SALE",
  "unMaskedPan": "",
  "verificationMethod": "UNDEFINED",
  "efttimestamp": 1615374961000,
  "efttransactionID": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
  "requestedAmount": 100,
  "tipPercentage": 0,
  "recoveredTransaction": false
}
```

## Handpoint Credentials{#30}

`HandpointCredentials`

A class containing information related to the Actor credentials: Shared secret (always required) and Cloud API Key (ony required when using CLOUD connection method).

**Properties**

| Parameter      | Notes |
| ----------- | ----------- |
| `SharedSecret`<br />*String*    | 		`String` the value of the Shared secret|
| `CloudApiKey`<br />*String*    | 		`String` the value of the merchant Cloud Api Key, just required when using CLOUD connection method|

**Code example**

```csharp
{
	string sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";
	new HandpointCredentials(sharedSecret);
	//We've even set a default shared secret!
}
	
{
	string sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";
	string apikey = "This-Is-The-Merchant-Api-Key";
	new HandpointCredentials(sharedSecret, apikey);
	//We've even set a default shared secret and the merchant Api Key!
}
```

## Handpoint API (Hapi) factory

`HapiFactory`

A factory to provide a unified entrypoint and to simplify the way to instantiate the Hapi object.

**Methods**

**Static factory**
getAsyncInterface( Events.Required requiredListener , HandpointCredentials handpointCredentials );

| Parameter      | Notes |
| ----------- | ----------- |
| `requiredListener` <span class="badge badge--primary">Required</span><br />*Events.Required*     | 		A listener object to report the required events.|
| `handpointCredentials` <span class="badge badge--primary">Required</span><br />[*HandpointCredentials*](#30)     | 		Object containing the actor's Ssk or Ssk and Api Key for CLOUD connections.|

**Code example**

```csharp
//InitApi for Datecs devices
public void InitApi()
{
	string sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";
	api = HapiFactory.GetAsyncInterface(this, new HandpointCredentials(sharedSecret));
	//The api is now initialized. Yay! we've even set a default shared secret
}

//InitApi for Cloud devices
public void InitApi()
{
	string sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";
	string apikey = "This-Is-The-Merchant-Api-Key";
	api = HapiFactory.GetAsyncInterface(this, new HandpointCredentials(sharedSecret, apikey));
	//The api is now initialized. Yay! we've even set a default shared secret and the merchant Api Key!
}
```

## Transaction Type{#28}

`TransactionType`

An enum representing different types of transactions.

**Possible values**
`UNDEFINED` `SALE` `VOID_SALE` `REFUND` `VOID_REFUND` `CANCEL_SALE` `CANCEL_REFUND` `TOKENIZE_CARD` `SALE_AND_TOKENIZE_CARD` `REVERSAL` `UPDATE` `HOST_INIT` `PRINT_RECEIPT` `CARD_PAN`

## Connection Method{#12}

`ConnectionMethod`

An enum representing different types of connection methods.

`BLUETOOTH`, `CLOUD` and `SIMULATOR` are supported for Windows.

Possible values
`USB` `SERIAL` `BLUETOOTH` `CLOUD` `HTTPS` `WIFI` `ETHERNET` `SIMULATOR`

**Code example**

```csharp
//Currently CLOUD, BLUETOOTH, and SIMULATOR are the only ConnectionMethod available.
public enum ConnectionMethod 
{
	USB,
	SERIAL,
	HTTPS,
	WIFI,
	ETHERNET,
	BLUETOOTH,
	CLOUD,
	SIMULATOR
}
```

## Device{#2}

`Device`

An object to store the information about the device we're working with.

**Methods**

**Constructor**
Device( String name , String address , String port , ConnectionMethod [*connectionMethod*](#12) , String sharedSecret , int timeout );

| Parameter      | Notes |
| ----------- | ----------- |
| `name` <span class="badge badge--primary">Required</span><br />*String*    |A name to identify the device|
| `address` <span class="badge badge--primary">Required</span><br />*String*    | 		The address of the device you wish to connect to. E.g.: "08:00:69:02:01:FC" for bluetooth or "9822032398-PAXA920" for CLOUD (composition of serial number and model of the target device) .|
| `port` <span class="badge badge--primary">Required</span><br />*String*    | 		The port to connect to.|
| `connectionMethod` <span class="badge badge--primary">Required</span><br />[*ConnectionMethod*](#12)     | 		Enumerated type to specify the type of connection with the device. E.g: Bluetooth, Cloud, Serial, etc...|
| `sharedSecret`<br />*String*    | 		This is used if you want this specific device to use the specified sharedSecret instead of the default one proviced in the initialization.|
| `timeout`<br />*int*     | 		The amount of miliseconds to consider the connection has timed out. If not set, the default timeout is 15 seconds.|

**Code example**

```csharp
//Create and init a new Datecs Device
Device dev = new Device("CardReader7", "08:00:69:02:01:FC", "1", ConnectionMethod.BLUETOOTH);

//Create and init a new PAX/Telpo Device
Device dev = new Device("CloudDevice", "9822032398-PAXA920", "", ConnectionMethod.CLOUD);
// The address is the composition of the serial number and model ot the target device.
//Example for a PAX A920 device: serial_number - model  -> 9822032398-PAXA920
```
**Properties**

| Property      | Description |
| ----------- | ----------- |
| `Id`<br />*String*    |	An unique identifier of the device.|


## Connection Status{#18}

`ConnectionStatus`

A list of statuses given to a connection

**Possible values**

`Connected` `Connecting` `Disconnected` `Disconnecting` `Initializing` `NotConfigured`

## Currency{#1}

`Currency`

An enum of most currencies in the world.

Contains the ISO name, ISO number and the name of the currency. Additionally contains information about how many decimals the currency uses.

**Possible values**

`AED` `AFN` `ALL` `AMD` `ANG` `AOA` `ARS` `AUD` `AWG` `AZN` `BAM` `BBD` `BDT` `BGN` `BHD` `BIF` `BMD` `BND` `BOB` `BOV` `BRL` `BSD` `BTN` `BWP` `BYR` `BZD` `CAD` `CDF` `CHF` `CLP` `CNY` `COP` `COU` `CRC` `CUC` `CUP` `CVE` `CZK` `DJF` `DKK` `DOP` `DZD` `EEK` `EGP` `ERN` `ETB` `EUR` `FJD` `FKP` `GBP` `GEL` `GHS` `GIP` `GMD` `GNF` `GTQ` `GYD` `HKD` `HNL` `HRK` `HTG` `HUF` `IDR` `ILS` `INR` `IQD` `IRR` `ISK` `JMD` `JOD` `JPY` `KES` `KGS` `KHR` `KMF` `KPW` `KRW` `KWD` `KYD` `KZT` `LAK` `LBP` `LKR` `LRD` `LSL` `LTL` `LVL` `LYD` `MAD` `MDL` `MKD` `MMK` `MNT` `MOP` `MUR` `MVR` `MWK` `MXN` `MXV` `MYR` `MZN` `NAD` `NGN` `NIO` `NOK` `NPR` `NZD` `OMR` `PAB` `PEN` `PGK` `PHP` `PKR` `PLN` `PYG` `QAR` `RON` `RSD` `RUB` `RWF` `SAR` `SBD` `SCR` `SDG` `SEK` `SGD` `SHP` `SLL` `SOS` `SRD` `STD` `SYP` `SZL` `THB` `TJS` `TMT` `TND` `TOP` `TRY` `TTD` `TWD` `TZS` `UAH` `UGX` `USD` `UZS` `VEF` `VND` `VUV` `WST` `XAF` `XCD` `XOF` `XPF` `YER` `ZAR` `ZMK` `ZWL`

## Signature Request{#17}

`SignatureRequest`

A class containing information about a signature request/signature verification.

**Properties**

|Property|	Description|
| ----------- | ----------- |
|Timeout<br />*String*	|`int` the value of the timeout in seconds.|
|MerchantReceipt<br />*String*|`String` the merchant receipt as html.|

## Card Scheme Name{#23}

`CardSchemeName`

A string representing different card brands.

**Possible values**

`MasterCard` `Visa` `Maestro` `American Express` `Discover` `JCB` `Diners` `UnionPay`

## Device Parameter{#8}


`DeviceParameter`

An enum describing all the available commands to send to a device.

When used a legal value is expected with the command

*Possible values*

`BluetoothName` `BluetoothPass` `SystemTimeout` `ScreenTimeout` `SignatureTimeout` 
`Language`

## Device Status{#24}


`DeviceStatus`

A class that holds the device status.

**Properties**

|Property	|Description|
| ----------- | ----------- |
|`SerialNumber`<br />*String*	|Gets the serial number of the device|
|`BatteryStatus`<br />*String*|String	Gets the battery status in percentages of a device.|
|`BatterymV`<br />*String*	|String	Gets the battery milli volts of a device.|
|`BatteryChargingt`<br />*String*|String	Gets the battery charging status of a device.|
|`ExternalPower`<br />*String*	|String	Gets the status of an external power of a device.|
|`ApplicationName`<br />*String*|String	Gets the application name used on a device.|
|`ApplicationVersion`<br />*String*|String	Gets the applicadevicetion version number used on a device.|

## Terminal Type


`TerminalType`

An enum describing all the supported terminal types.

**Possible values**

`BluetoothName` `BluetoothPass` `SystemTimeout` `ScreenTimeout` `SignatureTimeout` 
`Language`


## Financial Status{#25}


`FinancialStatus`

An enum representing different statuses of a finalized transaction

**Possible values**

`UNDEFINED` `AUTHORISED` `DECLINED` `PROCESSED` `FAILED` `CANCELLED`

## Optional Transaction Parameters{#3}


`OptionalParameters`

A class containing optional transaction parameters now supported by the device.

**Properties**


|Property|	Description|
| ----------- | ----------- |
|`Budget`<br />*String*	|	**Budget is only available for sale transactions**.<br /> A` String` representing the key for a budget number.A budget number can be used to split up an amout over a period of months. The value has to be a `String` of 2 digits representing the number of months to split the transaction to. Example: "03" or "24".|
|`CustomerReference`<br />*String*|**String	CustomerReference is available for all transactions.**<br />A ` String` representing the key for a customer reference.A customer reference can be used for an internal marking system. The value is sent as a `String` of a maximum 25 characters and received back when the transaction has been processed. Example: "C.nr. 212311".|


## Log Level{#9}


`LogLevel`

An enum describing the different levels of logging used in the hapi and used in the device.

**Possible values**

`None` `Info` `Full` `Debug`


## Status Info {#statusInfo}

`statusInfo`

A class containing information about the status of the transaction.

**Properties**


|Property	|Description|
| ----------- | ----------- |
|`CancelAllowed`<br />*bool*	|A `bool` representing if the card reader will accept a cancel request|
|`status`<br />[*Status*](#status) |A `Status` enum representing the status of the transaction.|
|`message`<br />*String* |A `String` containing the status message of the transaction.|
|`DeviceStatus`<br />[*DeviceStatus*](#24)	|A `DeviceStatus` object containing information about the device.|

## Verification Method{#29}


`VerificationMethod`

An enum representing different verification methods used in the transaction.

** Possible values **

`UNDEFINED` `SIGNATURE` `PIN` `PIN_SIGNATURE` `FAILED` `NOT_REQUIRED`
 `MOBILE_PASS_CODE`


## Payment Scenario{#26}

`PaymentScenario`

An enum representing different types of scenario.

** Possible values **

`UNKNOWN` `MAGSTRIPE` `MAGSTRIPECONTACTLESS` `CHIP` `CHIPCONTACTLESS` `CHIPFAILMAGSTRIPE`

## Status

`status`

An enum containing information about the status of the transaction.

** Possible values **

`Undefined` `Success` `InvalidData` `ProcessingError` `CommandNotAllowed` `NotInitialised` `ConnectTimeout` `ConnectError` 	`SendingError` `ReceivingError` `NoDataAvailable` `TransactionNotAllowed` `UnsupportedCurrency` `NoHostAvailable` `CardReaderError` `CardReadingFailed` `InvalidCard` `InputTimeout` `UserCancelled` `InvalidSignature` `WaitingForCard` `CardInserted` `ApplicationSelection` `ApplicationConfirmation` `AmountValidation` `PinInput` `ManualCardInput` `WaitingForCardRemoval` `TipInput` `SharedSecretInvalid` `SharedSecretAuth` `WaitingSignature` `WaitingHostConnect` `WaitingHostSend` `WaitingHostReceive` `WaitingHostDisconnect` `PinInputCompleted` `PosCancelled` `RequestInvalid` `CardCancelled` `CardBlocked` `RequestAuthTimeout` `RequestPaymentTimeout` `ResponseAuthTimeout` `ResponsePaymentTimeout` `IccCardSwiped` `RemoveCard`  `ScannerIsNotSupported` `ScannerEvent` `BatteryTooLow` `AccountTypeSelection` `BtIsNotSupported` `PaymentCodeSelection` `PartialApproval` `AmountDueValidation` `InvalidUrl` `WaitingCustomerReceipt` `PrintingMerchantReceipt` `PrintingCustomerReceipt` `UpdateStarted` `UpdateFinished` `UpdateFailed` `UpdateProgress` `WaitingHostPostSend` `WaitingHostPostReceive` `Rebooting` `PrinterOutOfPaper` `ErrorConnectingToPrinter` `CardTapped` `ReceiptPrintSuccess` `InvalidPinLength` `OfflinePinAttempt` `OfflinePinLastAttempt` `ProcessingSignature` `CardRemoved` `TipEntered` `CardLanguagePreference` `AutomaticPrintingStarted` `CancelOperationNotAllowed` `UpdateSoftwareStarted` `UpdateSoftwareFinished` `UpdateSoftwareFailed` `UpdateSoftwareProgress` `InstallSoftwareStarted` `InstallSoftwareFinished` `InstallSoftwareFailed` `InstallSoftwareProgress` `UpdateConfigStarted` `UpdateConfigFinished` `UpdateConfigFailed` `UpdateConfigProgress` `InitialisationComplete

## Tender Type{#27}

`TenderType`

An enum representing different tender types.

** Possible values**

`NOT_SET` `CREDIT` `DEBIT`


## Card Entry Type

`CardEntryType`

An enum representing different card entry types.

** Possible values **

`UNDEFINED` `MSR` `ICC` `CNP`

## Card Entry Type{#22}

`CardEntryType`

An enum representing different card entry types.

** Possible values **

`UNDEFINED` `MSR` `ICC` `CNP`


## Hapi Manager


`HapiManager`

A static class containing information about the current status of the SDK

** Properties **


|Property	|Description|
| ----------- | ----------- |
|`DefaultSharedSecret`<br />*String*	|Gets the default shared secret is use in the SDK.|
|`LogLevel`<br />[*LogLevel*](#9) |Gets the current log level of the SDK and card reader.|
|`inTransaction`<br />*bool* |Checks whether the SDK is in transaction or not. True if the SDK is in transaction, false otherwise. This might return a true if there is a communication error between the SDK and card reader but the transaction has been completed on the card reader.|
|`SdkVersion`<br />*String*	|Gets the current Sdk version.|
|`IsTransactionResultPending`<br />*boolean*	|In the case of a communication failure between the device and the API a [*Transaction Result*](#14) might have not been delivered to the API. This function checks if there is a pending [*Transaction Result*](#14). This field is only updated when connecting to a device. If this function returns true the [*Transaction Result*](#14) (which includes the receipt) can be fetched with hapi.GetPendingTransactionResult();. This function serves the same functionality as the event PendingTransactionResult(Device device), so every time that event is invoked, HapiManager.IsTransactionResultPending() is true until the result is fetched.|
|`Settings.AutoRecoverTransactionResult`<br />*boolean*	|In the case of a communication failure between the device and the API a [*Transaction Result*](#14) might have not been delivered to the API. This property can be set to true or false. If set to true, the SDK will automatically fetch the pending [*Transaction Result*](#14) when detected and return it via **[*TransactionResultReady*](#11)**. The function PendingTransactionResult is never invoked if this property is set to true. If set to false PendingTransactionResult will be called when a TransactionResult is pending.|

**Code example**

```csharp
//Check if the SDK is in transaction
bool inTransaction = HapiManager.InTransaction(SomeConnectedDevice);
//Check the current logLevel
LogLevel level = HapiManager.GetLogLevel();
```