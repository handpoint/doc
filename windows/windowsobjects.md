---
sidebar_position: 9
id: windowobjects
---


# Objects

## Transaction Result Object{#14}

`TransactionResult` <span class="badge badge--info">Object</span>

An object holding information about the result of a transaction.

:::tip
`signatureUrl`: In case the signature can not be updated to the Handpoint servers and an URL is not generated, the terminal will send back the image binary in base64 format to your software. It is important to be able to support both the URL and the image binary format.

`customerReceipt` and `merchantReceipt`: The receipts are usually received as URLs in the transaction result from the terminal. Please note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and an URL is not generated then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats.
:::

**Properties**

| Parameter      | Notes |
| ----------- | ----------- |
| `aid`<br />*String*    | 		EMV Application Identifier of the card (EMV tag 9F06)|
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
| `customerReceipt`<br />*String*    | The receipts are usually received as URLs in the transaction result from the terminal but note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats |
| `customerReference`<br />*String*    | 		If a customerReference was provided as an optional parameter in the transaction request it is echoed unaltered in this field|
| `deviceStatus`<br />[*DeviceStatus*](#24)     | 		Status of the payment terminal|
| `dueAmount`<br />*BigString*    | 		In case of a partial approval for the transaction, this field contains the amount which remains to be paid. Partial approval support is only required by the card brands in the United States|
| `efttimestamp`<br />*BigString*     | 			Time of the transaction (based on the date and time of the payment terminal)|
| `efttransactionID`<br />*String*    | 		Handpoint unique identifier for a transaction, this id is the one to be used for a transaction to be reversed.|
| `errorMessage`<br />*String*    | 		Detailed reason for the transaction error|
| `expiryDateMMYY`<br />*String*    | 		Expiry date of the card used for the operation|
| `finStatus`<br />[*FinancialStatus*](#25)     | 		The financial status contains the outcome of the transaction. For example "AUTHORISED" or "DECLINED"|
| `iad`<br />*String*    | 		EMV Issuer Application Data (EMV tag 9F10)|
| `issuerResponseCode`<br />*String*    | 		Response code from the card issuer|
| `maskedCardNumber`<br />*String*    | 		Masked card number of the card used for the operation|
| `merchantAddress`<br />*String*    | 		Merchant Address|
| `merchantName`<br />*String*    | 		Merchant Name|
| `merchantReceipt`<br />*String*    | The receipts are usually received as URLs in the transaction result from the terminal but note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats |
| `metadata`  <br />[*Metadata*](#metadata)   | If metadata[1-5] was provided as an optional parameter in the transaction request it is echoed unaltered in this object|
| `mid`<br />*String*    | 		Merchant Identifier|
| `originalEFTTransactionID`<br />*String*    | 		In case the transaction type is a reversal, this field will contain the identifier of the original transaction being reversed|
| `paymentScenario`<br />[*PaymentScenario*](#26)     | 		Indicates the card entry mode|
| `recoveredTransaction`<br />*boolean*     | 		This flag is set to true if the transaction result is sent through the transaction recovery logic explained in the Recovey Section, false otherwise|
| `requestedAmount`<br />*BigInteger*     | 		The requested amount is the transaction amount sent to the terminal|
| `rrn`<br />*String*    | 		Retrieval Reference Number, unique number assigned by the acquirer|
| `signatureUrl`<br />*String*    | 		If a digital signature is required, this is the URL containing the image of the captured signature. In case the signature can not be updated to the Handpoint servers and an URL is not generated, the terminal will send back the image binary in base64 format to your software. It is important to be able to support both the URL and the image binary format.|
| `statusMessage`<br />*String*    | 		The status of the transaction, for example "Waiting for pin"|
| `tenderType`<br />[*TenderType*](#27)     | 		Transaction tender type (credit / debit)|
| `tid`<br />*String*    | 		Terminal Identifier|
| `tipAmount`<br />*BigInteger*     | 		Tip amount, if any, in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `tipPercentage`<br />*double*     | 		If tipping is enabled, this field will return the tip percentage added on top of the base amount|
| `totalAmount`<br />*BigInteger*     | 		The total amount is the amount the card was charged for. It is possible that the total amount is not the same as the requested amount since an additional fee can be added, with the customer's approval, via the tipping functionality|
| `transactionID`<br />*String*    | 		The transaction id is a terminal internal counter incremented for each transaction|
| `tsi`<br />*String*    | 		EMV Transaction Status Information (EMV tag 9B)|
| `tvr`<br />*String*    | 		EMV Transaction Verification Results (EMV tag 95)|
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
  "metadata": {
      "metadata1": "Data 1",
      "metadata2": "",
      "metadata3": "",
      "metadata4": "",
      "metadata5": ""
  },
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

`HandpointCredentials` <span class="badge badge--info">Object</span>

A class containing information related to the user credentials.

**Properties**

| Parameter      | Notes |
| ----------- | ----------- |
| `SharedSecret`<br />*String*    | 		`String` the value of the shared secret (provided by Handpoint), only required when using BLUETOOTH as connection method. If using CLOUD this value can be any non-null string.|
| `CloudApiKey`<br />*String*    | 		`String` the value of the merchant Cloud Api Key (provided by Handpoint), only required when using CLOUD as connection method.|

**Code example**

```csharp
{
	string sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";
	new HandpointCredentials(sharedSecret);
	//We've set a default shared secret!
}
	
{
	string sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";
	string apikey = "This-Is-The-Merchant-Api-Key";
	new HandpointCredentials(sharedSecret, apikey);
	//We've set a default shared secret and the merchant Api Key!
}
```

## Handpoint API (Hapi) factory

`HapiFactory` <span class="badge badge--info">Object</span>

A factory to provide a unified entrypoint and to simplify the way to instantiate the Hapi (SDK) object.

**Methods**

**Static factory**
getAsyncInterface( Events.Required requiredListener , HandpointCredentials handpointCredentials );

| Parameter      | Notes |
| ----------- | ----------- |
| `requiredListener` <span class="badge badge--primary">Required</span><br />*Events.Required*     | 		A listener object to report the required events.|
| `handpointCredentials` <span class="badge badge--primary">Required</span><br />[*HandpointCredentials*](#30)     | 		Object containing the user's shared secret and/or Cloud Api Key.|

**Code example**

```csharp
//InitApi for HiLite payment terminals
public void InitApi()
{
	string sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";
	api = HapiFactory.GetAsyncInterface(this, new HandpointCredentials(sharedSecret));
	//The api is now initialized. Yay! we've even set a default shared secret
}

//InitApi for Cloud payment terminals (PAX/Telpo)
public void InitApi()
{
	string sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";
	string apikey = "This-Is-The-Merchant-Api-Key";
	api = HapiFactory.GetAsyncInterface(this, new HandpointCredentials(sharedSecret, apikey));
	//The api is now initialized. Yay! we've even set a default shared secret and the merchant Api Key!
}
```

## Transaction Type{#28}

`TransactionType` <span class="badge badge--info">Enum</span>

An enum representing different types of transactions.

**Possible values**

`UNDEFINED` `SALE` `VOID_SALE` `REFUND` `VOID_REFUND` `CANCEL_SALE` `CANCEL_REFUND` `TOKENIZE_CARD` `SALE_AND_TOKENIZE_CARD` `REVERSAL` `UPDATE` `HOST_INIT` `PRINT_RECEIPT` `CARD_PAN` `CANCEL_TRX` `MOTO_SALE` `MOTO_REFUND` `MOTO_REVERSAL`

## Connection Method{#12}

`ConnectionMethod` <span class="badge badge--info">Enum</span>

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

`Device` <span class="badge badge--info">Object</span>

An object to store the information about the payment terminal in use.

**Methods**

**Constructor**

Device( String name , String address , String port , ConnectionMethod [*connectionMethod*](#12) , String sharedSecret , int timeout );

| Parameter      | Notes |
| ----------- | ----------- |
| `name` <span class="badge badge--primary">Required</span><br />*String*    |A name to identify the payment terminal|
| `address` <span class="badge badge--primary">Required</span><br />*String*    | 		The address of the device you wish to connect to. E.g.: "08:00:69:02:01:FC" for bluetooth or "9822032398-PAXA920" for CLOUD (composition of serial number and model of the target device) .|
| `port` <span class="badge badge--primary">Required</span><br />*String*    | 		The port to connect to.|
| `connectionMethod` <span class="badge badge--primary">Required</span><br />[*ConnectionMethod*](#12)     | 		The type of connection with the device. E.g: Bluetooth, Cloud, Serial, etc.|
| `sharedSecret`<br />*String*    | 		This parameter can be used to change the default shared secret for the payment terminal|
| `timeout`<br />*int*     | 		The number of miliseconds after which the connection is considered timed out|

**Code example**

```csharp
//Create and init a new HiLite payment terminal
Device dev = new Device("CardReader7", "08:00:69:02:01:FC", "1", ConnectionMethod.BLUETOOTH);

//Create and init a new PAX/Telpo payment terminal
Device dev = new Device("CloudDevice", "9822032398-PAXA920", "", ConnectionMethod.CLOUD);
// The address is the composition of the serial number and model ot the target device.
//Example for a PAX A920 device: serial_number - model  -> 9822032398-PAXA920
```
**Properties**

| Property      | Description |
| ----------- | ----------- |
| `Id`<br />*String*    |	A unique identifier for the device.|


## Connection Status{#18}

`ConnectionStatus` <span class="badge badge--info">Enum</span>

A list of statuses given to a connection.

**Possible values**

`Connected` `Connecting` `Disconnected` `Disconnecting` `Initializing` `NotConfigured`

## Currency{#1}

`Currency` <span class="badge badge--info">Enum</span>

An enum of currencies.

**Possible values**

`AED` `AFN` `ALL` `AMD` `ANG` `AOA` `ARS` `AUD` `AWG` `AZN` `BAM` `BBD` `BDT` `BGN` `BHD` `BIF` `BMD` `BND` `BOB` `BOV` `BRL` `BSD` `BTN` `BWP` `BYR` `BZD` `CAD` `CDF` `CHF` `CLP` `CNY` `COP` `COU` `CRC` `CUC` `CUP` `CVE` `CZK` `DJF` `DKK` `DOP` `DZD` `EEK` `EGP` `ERN` `ETB` `EUR` `FJD` `FKP` `GBP` `GEL` `GHS` `GIP` `GMD` `GNF` `GTQ` `GYD` `HKD` `HNL` `HRK` `HTG` `HUF` `IDR` `ILS` `INR` `IQD` `IRR` `ISK` `JMD` `JOD` `JPY` `KES` `KGS` `KHR` `KMF` `KPW` `KRW` `KWD` `KYD` `KZT` `LAK` `LBP` `LKR` `LRD` `LSL` `LTL` `LVL` `LYD` `MAD` `MDL` `MKD` `MMK` `MNT` `MOP` `MUR` `MVR` `MWK` `MXN` `MXV` `MYR` `MZN` `NAD` `NGN` `NIO` `NOK` `NPR` `NZD` `OMR` `PAB` `PEN` `PGK` `PHP` `PKR` `PLN` `PYG` `QAR` `RON` `RSD` `RUB` `RWF` `SAR` `SBD` `SCR` `SDG` `SEK` `SGD` `SHP` `SLL` `SOS` `SRD` `STD` `SYP` `SZL` `THB` `TJS` `TMT` `TND` `TOP` `TRY` `TTD` `TWD` `TZS` `UAH` `UGX` `USD` `UZS` `VEF` `VND` `VUV` `WST` `XAF` `XCD` `XOF` `XPF` `YER` `ZAR` `ZMK` `ZWL`

## Signature Request{#17}

`SignatureRequest` <span class="badge badge--info">Object</span>

A class containing information about a signature request or verification.

**Properties**

|Property|	Description|
| ----------- | ----------- |
|Timeout<br />*Int*	|The value of the timeout in seconds.|
|MerchantReceipt<br />*Html*| The receipts are usually received as URLs in the transaction result from the terminal but note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats. |

## Card Scheme Name{#23}

`CardSchemeName` <span class="badge badge--info">Enum</span>

An enum representing different card brands.

**Possible values**

`MasterCard` `Visa` `Maestro` `American Express` `Discover` `JCB` `Diners` `UnionPay` `Interac`

## Device Parameter{#8}


`DeviceParameter` <span class="badge badge--info">Enum</span>

An enum describing all the available commands to send to a device.

**Possible values**

`BluetoothName` `BluetoothPass` `SystemTimeout` `ScreenTimeout` `SignatureTimeout` 
`Language`

## Device Status{#24}


`DeviceStatus` <span class="badge badge--info">Enum</span>

A class that holds the device status.

**Properties**

|Property	|Description|
| ----------- | ----------- |
|`SerialNumber`<br />*String*	|Gets the serial number of the device|
|`BatteryStatus`<br />*String*|	Gets the battery status in percentages of the device.|
|`BatterymV`<br />*String*	|	Gets the battery milli volts of the device.|
|`BatteryChargingt`<br />*String*| Gets the battery charging status of the device.|
|`ExternalPower`<br />*String*	|	Gets the status of an external power source for the device.|
|`ApplicationName`<br />*String*|	Gets the application name used by the device.|
|`ApplicationVersion`<br />*String*| Gets the application version number used by the device.|

## Terminal Parameters


`TerminalType` <span class="badge badge--info">Enum</span>

An enum describing parameters supported by the payment terminal.

**Possible values**

`BluetoothName` `BluetoothPass` `SystemTimeout` `ScreenTimeout` `SignatureTimeout` 
`Language`


## Financial Status{#25}


`FinancialStatus` <span class="badge badge--info">Enum</span>

An enum representing different final statuses of a transaction.

**Possible values**

`UNDEFINED` `AUTHORISED` `DECLINED` `PROCESSED` `FAILED` `CANCELLED` `PARTIAL_APPROVAL` `UNKNOWN` `IN_PROGRESS` `UNKNOWN` `IN_PROGRESS`

 Description of the different financial statuses:

| Parameter      | Notes |
| ----------- | ----------- |
| `UNDEFINED`   <br/>  | Any Financial Status other than the below mentioned financial statuses will be `UNDEFINED`.  UNDEFINED means that the SDK couldn't get a response from the Gateway. An automatic cancellation service will try to cancel the transaction in case it was approved. |
| `AUTHORISED` <br/>    | The transaction (Sale, Refund,...) has been authorised. Consider this value as "successful". |
| `DECLINED` <br/>   | The transaction has been declined by the acquirer or issuer. |
| `PROCESSED`  <br/>   | The `printReceipt` operation was successful.|
| `FAILED`  <br/>   | Status generated due to a network error, a card which can not be read etc. As a general rule, errors are mapped to `FAILED`.  |
| `CANCELLED`  <br/>   | The transaction has been cancelled. For example if the `stopCurrentTransaction` operation has been used or the cancel button on the terminal has been pressed.   |
| `PARTIAL_APPROVAL`  <br/>   | A partial approval is the ability to partially authorize a transaction if the cardholder does not have the funds to cover the entire cost on their card. The merchant can obtain the remainder of the purchase amount in another form of payment. `PARTIAL_APPROVAL` is **only**  applicable to the United States market. |
| `UNKNOWN`  <br/>   | The `transactionReference` of this transaction is NOT registered in the gateway. The status of the transaction could change in the near future. |
| `IN_PROGRESS`  <br/>   | The `transactionReference` of this transaction is known by the gateway. Please check the status of the transaction again as it is in the process of status change. |



## Optional Transaction Parameters{#3}


`OptionalParameters` <span class="badge badge--info">Object</span>

A class containing optional transaction parameters now supported by the device.

**Properties**


|Property|	Description|
| ----------- | ----------- |
|`Budget`<br />*String*	|	**Budget is only available for sale transactions**.<br /> A` String` representing the key for a budget number.A budget number can be used to split up an amount over a period of months. The value has to be a `String` of 2 digits representing the number of months to split the transaction to. Example: "03" or "24".|
|`CustomerReference`<br />*String*|**String	CustomerReference is available for all transactions.**<br />A ` String` representing the key for a customer reference.A customer reference can be used for an internal marking system. The value is sent as a `String` of a maximum 36 characters and received back when the transaction has been processed. Example: "C.nr. 212311".|
|`DuplicateCheck`<br />*String*| Used to disable the duplicate payment check functionality. When a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the second charge. This menu will automatically be prompted on the payment terminal if a suspicious charge is detected. We are only prompting the duplicate check menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe.<br></br><br></br>  ** The	DuplicateCheck functionality is available for the following transactions:** Sale, Sale and Tokenize, Sale Reversal, Refund, Refund Reversal, MoTo Sale, MoTo Refund and MoTo Reversal.<br /> <br></br>The Duplicate Check service is **enabled by default**, if you want to disable it, you must use the `String` "0", for example: ```options.Add(XmlTag.DuplicateCheck.Tag(), "0");```|
| `Metadata1`  <br />*String*|**String	Metadata1 is available for all transactions.**<br />A ` String` used to store any required data (max length 250 characters). This information will be echoed inside the Metadata object in the transaction result. Example: ```options.Add(XmlTag.Metadata1.Tag(), "Data 1");```. <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|
| `Metadata2`  <br />*String*|**String	Metadata2 is available for all transactions.**<br />A ` String` used to store any required data (max length 250 characters). This information will be echoed inside the Metadata object in the transaction result. Example: ```options.Add(XmlTag.Metadata2.Tag(), "Data 2");```. <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|
| `Metadata3`  <br />*String*|**String	Metadata3 is available for all transactions.**<br />A ` String` used to store any required data (max length 250 characters). This information will be echoed inside the Metadata object in the transaction result. Example: ```options.Add(XmlTag.Metadata3.Tag(), "Data 3");```. <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|
| `Metadata4`  <br />*String*|**String	Metadata4 is available for all transactions.**<br />A ` String` used to store any required data (max length 250 characters). This information will be echoed inside the Metadata object in the transaction result. Example: ```options.Add(XmlTag.Metadata4.Tag(), "Data 4");```. <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|
| `Metadata5`  <br />*String*|**String	Metadata5 is available for all transactions.**<br />A ` String` used to store any required data (max length 250 characters). This information will be echoed inside the Metadata object in the transaction result. Example: ```options.Add(XmlTag.Metadata5.Tag(), "Data 5");```. <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|


## Log Level{#9}


`LogLevel` <span class="badge badge--info">Enum</span>

An enum describing the different levels of logging used in the SDK and the payment terminal.

**Possible values**

`None` `Info` `Full` `Debug`


## Status Info {#statusInfo}

`statusInfo` <span class="badge badge--info">Object</span>

A class containing information about the status of the transaction.

**Properties**


|Property	|Description|
| ----------- | ----------- |
|`CancelAllowed`<br />*bool*	|A `bool` allowing the user to know if the payment terminal will accept a cancel request.|
|`status`<br />[*Status*](#status) |A `Status` enum representing the status of the transaction.|
|`message`<br />*String* |A `String` containing the status message of the transaction.|
|`DeviceStatus`<br />[*DeviceStatus*](#24)	|A `DeviceStatus` object containing information about the payment terminal.|

## Verification Method{#29}


`VerificationMethod` <span class="badge badge--info">Enum</span>

An enum representing different cardholder verification methods.

** Possible values **

`UNDEFINED` `SIGNATURE` `PIN` `PIN_SIGNATURE` `FAILED` `NOT_REQUIRED`
 `MOBILE_PASS_CODE`


## Payment Scenario{#26}

`PaymentScenario` <span class="badge badge--info">Enum</span>

An enum representing different types of payment scenarios.

** Possible values **

`UNKNOWN` `MAGSTRIPE` `MAGSTRIPECONTACTLESS` `CHIP` `CHIPCONTACTLESS` `CHIPFAILMAGSTRIPE`

## Status

`status` <span class="badge badge--info">Enum</span>

An enum containing information about the status of the transaction.

** Possible values **

`Undefined` `Success` `InvalidData` `ProcessingError` `CommandNotAllowed` `NotInitialised` `ConnectTimeout` `ConnectError` 	`SendingError` `ReceivingError` `NoDataAvailable` `TransactionNotAllowed` `UnsupportedCurrency` `NoHostAvailable` `CardReaderError` `CardReadingFailed` `InvalidCard` `InputTimeout` `UserCancelled` `InvalidSignature` `WaitingForCard` `CardInserted` `ApplicationSelection` `ApplicationConfirmation` `AmountValidation` `PinInput` `ManualCardInput` `WaitingForCardRemoval` `TipInput` `SharedSecretInvalid` `SharedSecretAuth` `WaitingSignature` `WaitingHostConnect` `WaitingHostSend` `WaitingHostReceive` `WaitingHostDisconnect` `PinInputCompleted` `PosCancelled` `RequestInvalid` `CardCancelled` `CardBlocked` `RequestAuthTimeout` `RequestPaymentTimeout` `ResponseAuthTimeout` `ResponsePaymentTimeout` `IccCardSwiped` `RemoveCard`  `ScannerIsNotSupported` `ScannerEvent` `BatteryTooLow` `AccountTypeSelection` `BtIsNotSupported` `PaymentCodeSelection` `PartialApproval` `AmountDueValidation` `InvalidUrl` `WaitingCustomerReceipt` `PrintingMerchantReceipt` `PrintingCustomerReceipt` `UpdateStarted` `UpdateFinished` `UpdateFailed` `UpdateProgress` `WaitingHostPostSend` `WaitingHostPostReceive` `Rebooting` `PrinterOutOfPaper` `ErrorConnectingToPrinter` `CardTapped` `ReceiptPrintSuccess` `InvalidPinLength` `OfflinePinAttempt` `OfflinePinLastAttempt` `ProcessingSignature` `CardRemoved` `TipEntered` `CardLanguagePreference` `AutomaticPrintingStarted` `CancelOperationNotAllowed` `UpdateSoftwareStarted` `UpdateSoftwareFinished` `UpdateSoftwareFailed` `UpdateSoftwareProgress` `InstallSoftwareStarted` `InstallSoftwareFinished` `InstallSoftwareFailed` `InstallSoftwareProgress` `UpdateConfigStarted` `UpdateConfigFinished` `UpdateConfigFailed` `UpdateConfigProgress` `InitialisationComplete` 

## Tender Type{#27}

`TenderType` <span class="badge badge--info">Enum</span>

An enum representing different tender types.

** Possible values**

`NOT_SET` `CREDIT` `DEBIT`

## Card Entry Type{#22}

`CardEntryType` <span class="badge badge--info">Enum</span>

An enum representing different card entry types.

** Possible values **

`UNDEFINED` `MSR` `ICC` `CNP`


## Hapi Manager


`HapiManager` <span class="badge badge--info">Object</span>

A static class containing information about the current status of the SDK

** Properties **


|Property	|Description|
| ----------- | ----------- |
|`DefaultSharedSecret`<br />*String*	|Gets the default shared secret used in the SDK.|
|`LogLevel`<br />[*LogLevel*](#9) |Gets the current log level of the SDK and payment terminal.|
|`inTransaction`<br />*bool* |Checks whether the SDK is in transaction or not. True if the SDK is in transaction, false otherwise. This might return a true if there is a communication error between the SDK and payment terminal but the transaction has been completed on the card reader.|
|`SdkVersion`<br />*String*	|Gets the current Sdk version.|
|`IsTransactionResultPending`<br />*boolean*	|In case of a communication failure between the device and the API a [*Transaction Result*](#14) might not be delivered to the API. This function checks if there is a pending [*Transaction Result*](#14). This field is only updated when connecting to a device. If this function returns true the [*Transaction Result*](#14) (which includes the receipt) can be fetched with hapi.GetPendingTransactionResult();. This function serves the same functionality as the event PendingTransactionResult(Device device), so every time that event is invoked, HapiManager.IsTransactionResultPending() is true until the result is fetched.|
|`Settings.AutoRecoverTransactionResult`<br />*boolean*	|In case of a communication failure between the device and the API a [*Transaction Result*](#14) might not be delivered to the API. This property can be set to true or false. If set to true, the SDK will automatically fetch the pending [*Transaction Result*](#14) when detected and return it via [*TransactionResultReady*](#11). The function PendingTransactionResult is never invoked if this property is set to true. If set to false PendingTransactionResult will be called when a TransactionResult is pending.|

**Code example**

```csharp
//Check if the SDK is in transaction
bool inTransaction = HapiManager.InTransaction(SomeConnectedDevice);
//Check the current logLevel
LogLevel level = HapiManager.GetLogLevel();
```

## Metadata{#metadata}

`Metadata` <span class="badge badge--info">Object</span>

Object used to echo metadata1-5, in the transaction result, if it was set as an optional parameter in the transaction request .

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `Metadata1`  <br />*String* | An arbitrary string containing any information/data. Max length 250 characters <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|
| `Metadata2`  <br />*String* | An arbitrary string containing any information/data. Max length 250 characters <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|
| `Metadata3`  <br />*String* | An arbitrary string containing any information/data. Max length 250 characters <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|
| `Metadata4`  <br />*String* | An arbitrary string containing any information/data. Max length 250 characters <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|
| `Metadata5`  <br />*String* | An arbitrary string containing any information/data. Max length 250 characters <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|

**Code example**

```json
{
    "metadata": {
        "metadata1": "data1",
        "metadata2": "data2",
        "metadata3": "data3",
        "metadata4": "data4",
        "metadata5": "data5"
    }
}
```	

## Operation Start Result{#OperationStartResult}

`OperationStartResult` <span class="badge badge--info">Object</span>

Object containing information about the financial operation being performed.

|Property	|Description|
| ----------- | ----------- |
|`OperationStarted`<br />*Boolean*	| `true` if the operation has started. `false` otherwise.|
|`TransactionReference`<br />*String*|The `transactionReference` must be saved on your end in case you do not get back the transaction result object at the end of the transaction. The `transactionReference` will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction. A linked refund or a reversal will not return a `transactionReference` because the transaction reference for those types of transactions is the same as the one received for the original financial operation.|
|`ErrorMessage`<br />*String* |Detailed reason for the transaction error.|