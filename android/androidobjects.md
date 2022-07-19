---
sidebar_position: 9
id: androidobjects
---





# Objects

## Transaction Result{#25} 

`TransactionResult` <span class="badge badge--info">Object</span>

An object holding information about the result of a transaction.

:::tip
`signatureUrl`: In case the signature can not be updated to the Handpoint servers and an URL is not generated, the terminal will send back the image binary in base64 format to your software. It is important to be able to support both the URL and the image binary format.

`customerReceipt` and `merchantReceipt`: The receipts are usually received as URLs in the transaction result from the terminal. Please note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and an URL is not generated then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats.
:::

 **Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `aid`   <br />*String*  | 		Application Identifier of the card (EMV tag 9F06).|
| `arc`  <br />*String*   | 		EMV Authorisation Response Code (EMV tag 8A).|
| `authorisationCode`   <br />*String*  | 		Acquirer response code.|
| `balance` <br />[*Balance*](#balance)   | 		Balance available on the card.|
| `budgetNumber` <br />*String*    | 		Used to split payments over a period of months.|
| `cardEntryType`  <br />[*CardEntryType *](#22)  | 		Method used by the terminal to read the card.|
| `cardLanguagePreference`   <br />*String*  | 		Preferred language of the card (EMV tag 5F2D).|
| `cardSchemeName`  <br />[*CardSchemeName*](#32)   | 		The brand of the card.|
| `cardToken`   <br />*String*  | 		Token representing the PAN of the card.|
| `chipTransactionReport` <br />*String*    | 		Full report of the card EMV parameters.|
| `currency`   <br />[*Currency*](#13)  | 		The currency used for the transaction.|
| `customerReceipt` <br />*String*    | 		A URL containing the customer receipt in HTML format. Note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats. |
| `customerReference`  <br />*String*   | 		If a customerReference was provided as an optional parameter in the transaction request it is echoed unaltered in this field.|
| `deviceStatus`  <br />[*DeviceStatus*](#33)   | 		Status of the device.|
| `dueAmount`    <br />*String* | 		In case of a partial approval for the transaction, this field contains the amount which remains to be paid.|
| `efttimestamp`   <br />*Date*  | 		Time of the transaction.|
| `efttransactionID`  <br />*String*   | 		Handpoint unique identifier for a transaction, this id is the one to be used for a transaction to be reversed.|
| `errorMessage`  <br />*String*   | 		Detailed reason for the transaction error.|
| `expiryDateMMYY` <br />*String*    | 		Expiry date of the card used for the operation.|
| `finStatus`  <br />[*FinancialStatus*](#34)   | 		The financial status contains the outcome of the transaction. For example "AUTHORISED" or "DECLINED".|
| `iad`  <br />*String*   | 		Issuer Application Data (EMV tag 9F10).|
| `issuerResponseCode` <br />*String*    | 		Response code from the card issuer.|
| `maskedCardNumber`  <br />*String*   | 		Masked card number of the card used for the operation.|
| `merchantAddress`  <br />*String*   | 		Merchant Address.|
| `merchantName`  <br />*String*   | 		Merchant Name.|
| `merchantReceipt` <br />*String*    | 		A URL containing the customer receipt in HTML format. Note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats. |
| `mid`  <br />*String*   | 		Merchant Identifier.|
| `originalEFTTransactionID` <br />*String*    | 		In case the transaction type is a reversal, this field will contain the identifier of the original transaction being reversed.|
| `paymentScenario`   <br />[*PaymentScenario*](#35)  | 		Indicates the card entry mode.|
| `recoveredTransaction` <br />*Boolean*    | 		This flag is set to true if the transaction result is sent through the transaction recovery logic (network or communication failure), false otherwise.|
| `requestedAmount` <br />*BigInteger*    | 		The requested amount is the transaction amount sent to the terminal.|
| `rrn`  <br />*String*   | 		Retrieval Reference Number, unique number assigned by the acquirer.|
| `signatureUrl` <br />*String*    | 		If a digital signature is required, this is the URL containing the image of the captured signature. In case the signature can not be updated to the Handpoint servers and an URL is not generated, the terminal will send back the image binary in base64 format to your software. It is important to be able to support both the URL and the image binary format.|
| `statusMessage` <br />*String*    | 		The status of the transaction, for example "Waiting for pin".|
| `tenderType`   <br />[*TenderType*](#36)  | 		Transaction tender type (credit / debit).|
| `tid`  <br />*String*   | 		Terminal Identifier.|
| `tipAmount` <br />*BigInteger*    | 		Tip amount, if any, in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `tipPercentage` <br />*Double*    | 		If tipping is enabled, this field will return the tip percentage added on top of the base amount.|
| `totalAmount` <br />*BigInteger*    | 		The total amount is the amount the card was charged for. It is possible that the total amount is not the same as the requested amount since an additional fee can be added, with the customer's approval, via the tipping functionality.|
| `transactionID` <br />*String*    | 		The transaction id is a terminal internal counter incremented for each transaction.|
| `tsi` <br />*String*    | 		Transaction Status Information (EMV tag 9B).|
| `tvr` <br />*String*    | 		Transaction Verification Results (EMV tag 95).|
| `type`  <br />[*TransactionType*](#31)   | 		The type of transaction initiated, for example "SALE".|
| `unMaskedPan`  <br />*String*   | 		Unmasked PAN, only received if the card is a non-payment card (loyalty).|
| `verificationMethod`   <br />[*VerificationMethod*](#38)  | 		cardholder verification method, for example "PIN".|
| `multiLanguageStatusMessages` <br />*Map*     | 		`Map` containing the status message in a human readable format for all the supported locales.|
| `multiLanguageErrorMessages`  <br />*Map*   | 		`Map` containing the error message in a human readable format for all the supported locales.|
| `cardHolderName`  <br />*String*   | 		Name of the cardholder.|


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
  "recoveredTransaction": false,
  "multiLanguageStatusMessages": [
        { "en_US" : "Approved or completed successfully" },
        { "fr_FR" : "Transaction approuvée" }
  ],
  "multiLanguageErrorMessages": [],
  "cardHolderName": "cardholder name"
}
```

## Acquirer{#21}

`Acquirer` <span class="badge badge--info">Enum</span>

An enum representing all the supported acquirers for merchant authentication.

**Possible values**

`AMEX` `BORGUN` `EVO` `OMNIPAY` `POSTBRIDGE` `INTERAC` `TSYS` `VANTIV` `SANDBOX`

**Code example**

```java
public enum Acquirer {	AMEX,
	BORGUN,
	EVO,
	OMNIPAY,
	POSTBRIDGE,
	INTERAC,
	TSYS,
	VANTIV,
	SANDBOX
}
```

## Balance

`Balance` <span class="badge badge--info">Object</span>

Balance available on the card

**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `amount`   <br />*Integer* | The amount balance |
| `currency`<br />*Currency*| The balance currency |
| `sign`<br />[*BalanceSign*](#balance-sign) | Positive (C) or negative (D) balance. You can retrieve the balance sign using the methods isPositive() or isNegative() |

**Code example**

```java
Balance balance = Balance.Companion.factory(
    "1000", 
    Currency.EUR.getAlpha(), 
    BalanceSign.POSITIVE_SIGN.name()
  )
```

## Balance Sign

`BalanceSign` <span class="badge badge--info">Enum</span>

An enum representing the balance sign.


**Possible values**

`POSITIVE_SIGN('C')` `NEGATIVE_SIGN('D')`

## Card Brands{#cardBrands}

`CardBrands` <span class="badge badge--info">Enum</span>

A string representing the supported card brands.

**Possible values**

`VISA` `MASTERCARD` `MAESTRO` `AMEX` `DISCOVER` `DINERS` `JCB` `INTERAC` `OTHER`


## Card Entry Type{#22}

`CardEntryType` <span class="badge badge--info">Enum</span>

An enum representing different card entry types.

**Possible values**

`UNDEFINED` `MSR` `ICC` `CNP`

## Card Scheme Name{#32}

`CardSchemeName` <span class="badge badge--info">Enum</span>

A string representing different card brands.

**Possible values**

`MasterCard` `Visa` `Maestro` `American Express` `Discover` `JCB` `Diners` `UnionPay` `Interac`

## Connection Method{#20}

`ConnectionMethod` <span class="badge badge--info">Enum</span>

An enum representing different connection methods with the payment terminal.

Currently `BLUETOOTH`, `SIMULATOR`, `CLOUD` and `ANDROID_PAYMENT` are supported types.

**Possible values**

`USB` `SERIAL` `BLUETOOTH` `CLOUD` `ANDROID_PAYMENT` `HTTPS` `WIFI` `ETHERNET` `SIMULATOR`

**Code example**

```java
//Currently BLUETOOTH, SIMULATOR, CLOUD and ANDROID_PAYMENT are the only ConnectionMethod available.
public enum ConnectionMethod {
	USB,
	SERIAL,
	BLUETOOTH,
	HTTPS,
	WIFI,
	ETHERNET,
	SIMULATOR,
	CLOUD,
	ANDROID_PAYMENT
}
```

## Connection Status

`ConnectionStatus` <span class="badge badge--info">Enum</span>

A list of connection statuses. Note: the events starting with Cloud[...] are exclusively for devices linked to merchants with CLOUD Api key (CLOUD mode enabled).


**Possible values**

`Connected` `Connecting` `Disconnected` `Disconnecting` `NotConfigured` `Initializing` `CloudConnected` `CloudInitialized` `CloudAvailable` `CloudDisconnected` `CloudUnavailable`

## Currency{#13}

`Currency` <span class="badge badge--info">Enum</span>

An enum of currencies.

It contains the name of the currency, its ISO code, as well as information about how many decimals the currency uses.

**Possible values**

`AED` `AFN` `ALL` `AMD` `ANG` `AOA` `ARS` `AUD` `AWG` `AZN` `BAM` `BBD` `BDT` `BGN` `BHD` `BIF` `BMD` `BND` `BOB` `BOV` `BRL` `BSD` `BTN` `BWP` `BYR` `BZD` `CAD` `CDF` `CHF` `CLP` `CNY` `COP` `COU` `CRC` `CUC` `CUP` `CVE` `CZK` `DJF` `DKK` `DOP` `DZD` `EEK` `EGP` `ERN` `ETB` `EUR` `FJD` `FKP` `GBP` `GEL` `GHS` `GIP` `GMD` `GNF` `GTQ` `GYD` `HKD` `HNL` `HRK` `HTG` `HUF` `IDR` `ILS` `INR` `IQD` `IRR` `ISK` `JMD` `JOD` `JPY` `KES` `KGS` `KHR` `KMF` `KPW` `KRW` `KWD` `KYD` `KZT` `LAK` `LBP` `LKR` `LRD` `LSL` `LTL` `LVL` `LYD` `MAD` `MDL` `MKD` `MMK` `MNT` `MOP` `MUR` `MVR` `MWK` `MXN` `MXV` `MYR` `MZN` `NAD` `NGN` `NIO` `NOK` `NPR` `NZD` `OMR` `PAB` `PEN` `PGK` `PHP` `PKR` `PLN` `PYG` `QAR` `RON` `RSD` `RUB` `RWF` `SAR` `SBD` `SCR` `SDG` `SEK` `SGD` `SHP` `SLL` `SOS` `SRD` `STD` `SYP` `SZL` `THB` `TJS` `TMT` `TND` `TOP` `TRY` `TTD` `TWD` `TZS` `UAH` `UGX` `USD` `UZS` `VEF` `VND` `VUV` `WST` `XAF` `XCD` `XOF` `XPF` `YER` `ZAR` `ZMK` `ZWL`

## Device{#17}

`Device` <span class="badge badge--info">Object</span>

An object to store the information about the payment terminal in use.

**Methods**

**Constructor**

```java
Device( String name , String address , String port , ConnectionMethod connectionMethod , String sharedSecret , int timeout );
```

| Parameter      | Notes |
| ----------- | ----------- |
| `name` <span class="badge badge--primary">Required</span> <br />*String*     | 		A name to identify the device|
| `address` <span class="badge badge--primary">Required</span> <br />*String*    | 		The address of the device you wish to connect to. E.g.: "08:00:69:02:01:FC" for bluetooth, "9822032398-PAXA920" for CLOUD (composition of serial number and model of the target device) or just an identifier if your application is running directly on a PAX or Telpo device (ConnectionMethod.ANDROID_PAYMENT).|
| `port` <span class="badge badge--primary">Required</span> <br />*String*     | 		The port to connect to (optional).|
| `connectionMethod` <span class="badge badge--primary">Required</span> <br />[*ConnectionMethod *](#20)     | 		Type of connection with the payment terminal. E.g: Bluetooth, Cloud, Serial, etc...|
| `sharedSecret`  <br />*String*  | 		Replaces the default shared secret proviced in the initialization step.|
| `timeout`  <br />*int*  | 		The number of miliseconds until a connection is considered timed out. If not set, the default timeout is 15 seconds.|

**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `Id *` <br />*String*     | 		A unique identifier for the payment terminal.|



**Code example**

```java
//Create and init a new Datecs Device
Device dev = new Device("CardReader7", "08:00:69:02:01:FC", "1", ConnectionMethod.BLUETOOTH);

//Create and init a new PAX/Telpo Device for a CLOUD connection
Device dev = new Device("CloudDevice", "9822032398-PAXA920", "", ConnectionMethod.CLOUD);
// The address is the composition of the serial number and model ot the target device.
//Example for a PAX A920 device: serial_number - model  -> 9822032398-PAXA920

//Create and init a new PAX/Telpo Device for a ANDROID_PAYMENT connection
Device dev = new Device("LocalPaxOrTelpo", "LocalHost", "", ConnectionMethod.ANDROID_PAYMENT);
```

## Device Capabilities{#24}

`DeviceCapabilities` <span class="badge badge--info">Object</span>

An object holding the capabilities of the payment terminal.

**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `printer`   <br />*Boolean* | 		True if the terminal has printer, false otherwise|
| `cloudApi`<br />*Boolean*| 		True if the terminal is cloud-enabled, false otherwise|

## Device Parameter

`DeviceParameter` <span class="badge badge--info">Enum</span>

An enum describing all the admin commands to send to a payment terminal.

**Possible values**

`BluetoothName` `BluetoothPass` `SystemTimeout` `ScreenTimeout` `SignatureTimeout`

## Device Status{#33}

`DeviceStatus` <span class="badge badge--info">Object</span>

A class which holds the status of the payment terminal.

**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `SerialNumber`   <br />*String*   | 		Gets the serial number of the payment terminal|
| `BatteryStatus` <br />*String*     | 		Gets the battery status of the payment terminal (in percentages)|
| `BatterymV`   <br />*String*   | 		Gets the battery voltage of the payment terminal|
| `BatteryCharging`  <br />*String*    | 		Gets the battery charging status of the payment terminal|
| `ExternalPower`  <br />*String*    | 		Gets the status of the payment terminal external power|
| `ApplicationName`  <br />*String*    | 		Gets the application name of the payment terminal|
| `ApplicationVersion` <br />*String*     | 		Gets the application version of the payment terminal|

## Financial Status{#34}

`FinancialStatus` <span class="badge badge--info">Enum</span>

An enum representing different statuses of a finalized transaction

**Possible values**

`UNDEFINED` `AUTHORISED` `DECLINED` `PROCESSED` `FAILED` `CANCELLED` `PARTIAL_APPROVAL`

Description of the different financial statuses:

| Parameter      | Notes |
| ----------- | ----------- |
| `UNDEFINED`   <br/>  | Any Financial Status other than the below mentioned financial statuses will be `UNDEFINED`. |
| `AUTHORISED` <br/>    | The transaction (Sale, Refund,...) has been authorised. Consider this value as "successful". |
| `DECLINED` <br/>   | The transaction has been declined by the acquirer or issuer. |
| `PROCESSED`  <br/>   | The `printReceipt` operation was successful.|
| `FAILED`  <br/>   | Status generated due to a network error, a card which can not be read etc. As a general rule, errors are mapped to `FAILED`.  |
| `CANCELLED`  <br/>   | The transaction has been cancelled. For example if the `stopCurrentTransaction` operation has been used or the cancel button on the terminal has been pressed.   |
| `PARTIAL_APPROVAL`  <br/>   | A partial approval is the ability to partially authorize a transaction if the cardholder does not have the funds to cover the entire cost on their card. The merchant can obtain the remainder of the purchase amount in another form of payment. `PARTIAL_APPROVAL` is applicable **only** to the United States market. |

## Handpoint Credentials{#43}

`HandpointCredentials` <span class="badge badge--info">Object</span>

A class containing the credentials used to communicate with the payment terminal, the shared secret (always required) and Cloud API Key (ony required when using CLOUD connection method).

**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `sharedSecret`  <br />*String*     | 			`String` the value of the Shared secret.|
| `CloudApiKey`   <br />*String*   | 		`String` the value of the merchant Cloud API Key, only required when using CLOUD connection method|


**Code example**

```java
{
	String sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";
	HandpointCredentials handpointCredentials = new HandpointCredentials(sharedSecret);
	//We've even set a default shared secret!
}

{
	String sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";
	string apikey = "This-Is-The-Merchant-Api-Key";
	HandpointCredentials handpointCredentials = new HandpointCredentials(sharedSecret, apikey);
	//We've even set a default shared secret and the merchant Api Key!
}
```

## Handpoint API (Hapi) Factory

`HapiFactory` <span class="badge badge--info">Object</span>

A factory to provide a unified entrypoint and simplify the instantiation of the Hapi object.

**Methods**

**Static factory**
getAsyncInterface( Events.Required requiredListener , Context context , HandpointCredentials handpointCredentials );

| Parameter      | Notes |
| ----------- | ----------- |
| `requiredListener` <span class="badge badge--primary">Required</span> <br />[*Events.Required*](androideventlisteners.md#42)     | 			A listener object to report the required events.|
| `context` <span class="badge badge--primary">Required</span>   <br />*Context*   | 		The Android context.|
| `handpointCredentials` <span class="badge badge--primary">Required</span> <br />[*HandpointCredentials*](#43)    | 		An object containing the actor's shared secret key or shared secret key AND Api Key for CLOUD connections.|


**Code example**

```java
//InitApi for Datecs devices or PAX/Telpo ConnectionMethod.ANDROID_PAYMENT
public void InitApi()
{
	String sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";
	api = HapiFactory.getAsyncInterface(this, new HandpointCredentials(sharedSecret));
	//The api is now initialized. Yay! we've even set a default shared secret
}

//InitApi for Cloud devices
public void InitApi()
{
	String sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";
	String apikey = "This-Is-The-Merchant-Api-Key";
	api = HapiFactory.getAsyncInterface(this, new HandpointCredentials(sharedSecret, apikey));
	//The api is now initialized. Yay! we've even set a default shared secret and the merchant Api Key!
}
```

## Hapi Manager

`HapiManager` <span class="badge badge--info">Object</span>

A static class containing information about the current status of the SDK

**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `DefaultSharedSecret` <br />*String*    | 			Gets the default shared secret in use.|
| `LogLevel`  <br />[*LogLevel*](#18)   | 		Gets the current log level of the SDK and payment terminal.|
| `inTransaction`  <br />*boolean*   | 		Checks whether the SDK is in the middle of a transaction. True if the SDK is in a transaction, false otherwise.|
| `SdkVersion`   <br />*String*  | 		Gets the current SDK version.|
| `isTransactionResultPending`   <br />*boolean*  | 		In the case of a communication failure between the payment terminal and the SDK a TransactionResult might have not been delivered. This function checks if there is a pending TransactionResult. This field is only updated when connecting to a payment terminal. If this function returns true the TransactionResult (which includes the receipt) can be fetched.getPendingTransactionResult();. This function serves the same functionality as the event pendingTransactionResult(Device device), so every time this event is invoked, HapiManager.IsTransactionResultPending() is true until the result is fetched.|
| `Settings.AutomaticReconnection`   <br />*boolean*  | 		When this property is set to true, the SDK will automatically try to reconnect to the payment terminal after a disconnection. The SDK internally maintains a reconnection thread which keeps on trying to connect until it succeeds. The delay between reconnections is exponentially increased on every new attempt. The default value for this property is true|

**Code example**

```java
//Check if the SDK is in transaction
boolean inTransaction = HapiManager.inTransaction(someConnectedDevice);
//Check the current logLevel
LogLevel level = HapiManager.getLogLevel();

//Disable automatic reconnection feature
HapiManager.Settings.AutomaticReconnection = false;
```

## Log Level{#18}

`LogLevel` <span class="badge badge--info">Enum</span>

An enum describing the different levels of logging available.

**Possible values**

`None` `Info` `Full` `Debug`

## Manufacturer{#manufacturer}

`Manufacturer` <span class="badge badge--info">Enum</span>

A string representing different payment terminal supported manufacturers.

**Possible values**

`INVALID` `DATECS` `PAX` `TELPO`

## MerchantAuth{#37}

`MerchantAuth` <span class="badge badge--info">Object</span>

An object to store merchant authentication.

**Methods**

```java
Constructor
MerchantAuth( );
```

```java
Constructor
MerchantAuth( Credential credential );
```
| Parameter      | Description |
| ----------- | ----------- |
| `credential` <br />[*Credential*](#40)     | 		If present, adds the given credential to the list.|

```java
Constructor
MerchantAuth( List<Credential> credentials );
```
| Parameter      | Description |
| ----------- | ----------- |
| `credential`  <br/>*List<Credential\>*   | 		If present, the list of credentials.|

```java
Add Credential
add( Credential credential );
```

| Parameter      | Description |
| ----------- | ----------- |
| `credential` <span class="badge badge--primary">Required</span>  <br />[*Credential*](#40)   | 		The credential to be added.|

**Code example**

```java
MerchantAuth auth = new MerchantAuth();
Credential credential = new Credential();
//Optionally
credential.setAcquirer(YOUR_ACQUIRER);
//Optionally
credential.setMerchantId(mid);
//Optionally
credential.setTerminalId(tid);
//Add as many credentials as acquirers your merchant supports (for example OMNIPAY/AMEX). 
auth.add(credential);
```

## Merchant Auth Credential{#40}

`Credential` <span class="badge badge--info">Object</span>

An object to store credentials (Acquirer, Mid, Tid, MCC and ExternalId) for merchant authentication.

**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `acquirer`  <br />[*Acquirer *](#21)   | 		If present, it links this credential to the specified acquirer. Required if more than one credential is provided.|
| `mid`  <br />*String*    | 		For this transaction, overrides the default MID (merchant ID) saved in the terminal configuration.|
| `tid`  <br />*String*    | 		For this transaction, overrides the default TID (terminal ID) saved in the terminal configuration.|
| `mcc`  <br />*String*    | 		Merchant Category Code, overrides the default MCC saved in the terminal configuration.|
| `ExternalId`   <br />*String*   | 		For this transaction, the External Id will be used to lookup the credential of the merchant in the Handpoint backend and process the transaction accordingly. The External id replaces the need to pass MID/TID/MCC as credentials|

**Code example**

```java
// Credential using Acquirer, MID, TID and  MCC
Credential credential1 = new Credential();
//Optionally
credential1.setAcquirer(YOUR_ACQUIRER);
//Optionally
credential1.setMerchantId(mid);
//Optionally
credential1.setTerminalId(tid);
//Optionally
credential1.setMcc(mcc);

// Credential using ExternalId
Credential credential2 = new Credential();
credential2.setExternalId(externalId);
```

## Merchant Auth Options{#MerchantAuthOptions}

`MerchantAuthOptions` <span class="badge badge--info">Object</span>

An object to store merchant authentication options for regular operations.

**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `CustomerReference` <br />*String*    | 		An arbitrary string to use as your own identifier for a transaction|
| `MerchantAuth`  <br />[*MerchantAuth*](#37)  | 		An object containing all the credentials used to optionally authenticate a merchant|

**Code example**

```java
MerchantAuthOptions options = new MerchantAuthOptions();

//If you use a customer reference
options.setCustomerReference("Your customer reference");

//If you need Multi MID / Custom merchant Authentication
MerchantAuth auth = new MerchantAuth();
Credential credential = new Credential();
//Optionally
credential.setAcquirer(YOUR_ACQUIRER);
//Optionally
credential.setMerchantId(mid);
//Optionally
credential.setTerminalId(tid);
//Add as many credentials as acquirers your merchant supports (for example OMNIPAY/AMEX). 
auth.add(credential);
options.setMerchantAuth(auth);
```

## MoTo Channel

`MoToChannel` <span class="badge badge--info">Enum</span>

A enum representing the channel used for the card not present transaction (MO = Mail Order / TO = Telephone Order) .

**Possible values**

`MO` `TO`

## MoTo Options

`MoToOptions` <span class="badge badge--info">Object</span>

An object to store optional parameters for card not present (MoTo) transactions.

**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `CustomerReference` <br />*String*    | An arbitrary string to use as your own identifier for a transaction|
| `Channel`  <br />[*MoToChannel*](#moto-channel)  | MO for Mail order - TO for Telephone order|
| `Tokenize`  <br />*Boolean*  | Flag to activate tokenization of the operation, if this flag is set, a token representing the PAN of the card will be sent back by the Handpoint sytems|



**Code example**

```java
MoToOptions options = new MoToOptions();
options.setCustomerReference("Trx3245");
options.setTokenize(true);
options.setTokenize(false);
options.setChannel(MoToChannel.MO);
options.setChannel(MoToChannel.TO);
```

## Optional Transaction Parameters

`OptionalParameters` <span class="badge badge--info">Object</span>

A class containing optional transaction parameters supported by the payment terminal.

**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `Budget` <br />*String*     | 			**Budget is only available for sale transactions.**  A `String` representing the key for a budget number.A budget number can be used to split up an amout over a period of months. The value has to be a `String` of 2 digits representing the number of months to split the transaction to.|
| `CustomerReference` <br />*String*    | 		**CustomerReference is available for all transactions.** A `String` representing the key for a customer reference.A customer reference can be used for an internal marking system. The value is sent as a `String` of a maximum 25 characters and received back when the transaction has been processed.|

## Options{#7}

`options` <span class="badge badge--info">Object</span>

An object to store customer reference options for regular operations.

**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `CustomerReference`  <br />*String*   | 		An arbitrary string to use as your own identifier for a transaction|

**Code example**

```java
Options options = new Options();

//If you use a customer reference
options.setCustomerReference("Your customer reference");
```

## Payment Scenario{#35}

`PaymentScenario` <span class="badge badge--info">Enum</span>

An enum representing different types of scenario.

**Possible values**

`UNKNOWN` `MAGSTRIPE` `MAGSTRIPECONTACTLESS` `CHIP` `CHIPCONTACTLESS` `CHIPFAILMAGSTRIPE`

## PAX A80 Keys{#28}

`PaxA80Keys` <span class="badge badge--info">String</span>

A string representing the PAX A80 physical keyboard keys.

**Possible values**

`0` `1` `2` `3` `4` `5` `6` `7` `8` `9` `GREEN` `ORANGE` `RED` `FUNC` `options` <br />[*SaleOptions*](#4)

## Print Error{#29}

`PrintError` <span class="badge badge--info">Enum</span>

An enum representing different errors that can come from print action.

**Possible values**

`Unexpected` `InvalidArgument` `CantConnectToPrinter` `NotSupported` `NoPermission` `PrinterDisabled` `NotWhitelisted` `Busy` `OutOfPaper` `DataPacketInvalid` `PrinterHasProblems` `PrinterOverheating` `PrintingUnfinished` `FontNotPresent` `FontFormatError` `TooLong` `BatteryTooLow` `PaperCutterError` `PaperCutterJam` `CoverOpen` `UnsupportedEncoding`

## Refund Options{#6}

`RefundOptions` <span class="badge badge--info">Object</span>

An object to store all the customization options for a refund.

**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `CustomerReference`  <br />*String*    | 		An arbitrary string to use as your own identifier for a transaction|
| `MerchantAuth` <br />[*MerchantAuth*](#37)    | 		An object containing all the credentials used to optionally authenticate a merchant|
| `PinBypass`   <br />*Boolean*    | 		Bypasses PIN entry when the shopper says they don't know the PIN for the card and the merchant either knows they are the legitimate cardholder or want to give them the benefit of the doubt. PIN Bypass should be set to True if you want to enable pin bypass for a transaction|
| `SignatureBypass`  <br />*Boolean*   | 		Whether the terminal prompts for a signature, depends on how you configure this. The major card schemes (American Express, Diners, Discover, JCB, Mastercard, Visa, UnionPay) no longer require a signature; they regard it as optional for card-present transactions. This means you can speed up your checkout by skipping the signature prompt. But if your business requires it, you can still let the terminal prompt for a signature. The shopper then provides their signature on the touch screen of the terminal or on the printed transaction receipt. This depends on how you configure this setting. It is your responsibility to verify the signature of the shopper with the signature on the card or another form of identification. Signature Bypass should be set to True if you want to enable signature for this transaction|

**Code example**

```java
RefundOptions options = new RefundOptions();

//If you use a customer reference
options.setCustomerReference("Your customer reference");

//If you need Multi MID / Custom merchant Authentication
MerchantAuth auth = new MerchantAuth();
Credential credential = new Credential();
//Optionally
credential.setAcquirer(YOUR_ACQUIRER);
//Optionally
credential.setMerchantId(mid);
//Optionally
credential.setTerminalId(tid);
//Add as many credentials as acquirers your merchant supports (for example OMNIPAY/AMEX). 
auth.add(credential);
options.setMerchantAuth(auth);

//If you need to enable pin bypass
options.setPinBypass(true);
```

## Report Configuration{#19}

`ReportConfiguration` <span class="badge badge--info">Object</span>

An object to store all the configuration for a transactions report.

**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `currency`  <br />[*Currency*](#13)   | 		The currency to filter the transactions|
| `startDate` <br />*String*    | 		The start date in format 'YYYYMMDDHHmmss.|
| `endDate`   <br />*String*  | 		The end date in format 'YYYYMMDDHHmmss.|
| `terminalSerialNumber`<br />*List*     | 		The serial number of the terminal to fetch the transactions from (if terminalSerialNumber is empty or null, the report will show all the transactions for this merchant).|

**Code example**

```java
ReportConfiguration configuration = new ReportConfiguration("'USD'", "'20210430000000'", "'20210430235959'", "null");

If you want to add terminal serial numbers: List terminalSerialNumber = new ArrayList<>();
terminalSerialNumber.add("0123456789");
terminalSerialNumber.add("9876543210");
 ... ;
```

## Sale Options{#4}

`SaleOptions` <span class="badge badge--info">Object</span>

An object to store all the customization options for a sale.

**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `BudgetNumber`   <br />*String*  | 		The budget number can be used to split payments over a period of months.|
| `CustomerReference`  <br />*String*   | 		An arbitrary string to use as your own identifier for a transaction|
| `MerchantAuth` <br />[*MerchantAuth*](#37)    | 		An object containing all the credentials used to optionally authenticate a merchant|
| `PinBypass`   <br />*Boolean* | 		Bypasses PIN entry when the shopper says they don't know the PIN for the card and the merchant either knows they are the legitimate cardholder or want to give them the benefit of the doubt. PIN Bypass should be set to True if you want to enable pin bypass for a transaction|
| `SignatureBypass`  <br />*Boolean*  | 		Whether the terminal prompts for a signature, depends on how you configure this. The major card schemes (American Express, Diners, Discover, JCB, Mastercard, Visa, UnionPay) no longer require a signature; they regard it as optional for card-present transactions. This means you can speed up your checkout by skipping the signature prompt. But if your business requires it, you can still let the terminal prompt for a signature. The shopper then provides their signature on the touch screen of the terminal or on the printed transaction receipt. This depends on how you configure this setting. It is your responsibility to verify the signature of the shopper with the signature on the card or another form of identification. Signature Bypass should be set to True if you want to enable signature for this transaction|
| `TipConfiguration` <br />[*TipConfiguration*](#39)    | 		An object containing the tip configuration for this transaction|

**Code example**

```java
SaleOptions options = new SaleOptions();

//If you use a customer reference
options.setCustomerReference("Your customer reference");

//If you need Multi MID / Custom merchant Authentication
MerchantAuth auth = new MerchantAuth();
Credential credential = new Credential();
//Optionally
credential.setAcquirer(YOUR_ACQUIRER);
//Optionally
credential.setMerchantId(mid);
//Optionally
credential.setTerminalId(tid);
//Add as many credentials as acquirers your merchant supports (for example OMNIPAY/AMEX). 
auth.add(credential);
options.setMerchantAuth(auth);

//If you need to enable pin bypass
options.setPinBypass(true);

//If you want to specify the budget period
//Only available for SureSwipe
options.setBudgetNumber(YOUR_BUDGET_NUMBER);

//If you want to specify tip options
//Only available for PAX and Telpo terminals.
TipConfiguration config = new TipConfiguration();
//Optionally
config.setHeaderName(HEADER);
//Optionally
config.setFooter(FOOTER);
//Optionally
config.setEnterAmountEnabled(true);
//Optionally
config.setSkipEnabled(true);
config.setTipPercentages(percentages);
options.setTipConfiguration(config);

//Alternatively, you can set the tip amount directly
options.setTipConfiguration(new TipConfiguration(AMOUNT));
```

## Settings {#settings}

`Settings` <span class="badge badge--info">Object</span>

An Object holding the SDK initialization settings

**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `automaticReconnection`<br />*boolean* | 			When this property is set to true, the SDK will automatically try to reconnect to the terminal after disconnection. The SDK maintains internally a reconnection thread which keeps on trying to connect until it succeeds. The delay between reconnections is exponentially increased on every new attempt. The default value for this property is **false**|
| `autoRecoverTransactionResult` <br />*boolean*    | 		The default value for this property is **false**|
| `sendToDeviceMaxAttempts`  <br />*Integer*   | 		Number of retry attemps when there is an error communicating with the card reader. The default value for this property is **3**|
| `timeBetweenAttempts`  <br />*Integer*   | 		Time in milliseconds between attempts. The default value for this property is **5000**|
| `showSDKUIComponents` <br />*boolean*    | 		The default value for this property is **false**|
| `getReceiptsAsURLs`   <br />*boolean*  | 		The default value for this property is **false**|


## Signature Request

`SignatureRequest` <span class="badge badge--info">Object</span>

A class containing information about a signature verification.

**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `timeout`  <br />*int*      | 			`int` the value of the timeout in seconds.|
| `MerchantReceipt` <br/> *String*    | 		`String` the merchant receipt as html. Note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats. |

## Status {#45}

`status` <span class="badge badge--info">Enum</span>

An enum containing information about the status of a transaction.

**Possible values**

`Undefined` `Success` `InvalidData` `ProcessingError` `CommandNotAllowed` `NotInitialised` `ConnectTimeout` `ConnectError` `SendingError` `ReceivingError` `NoDataAvailable` `TransactionNotAllowed` `UnsupportedCurrency` `NoHostAvailable` `CardReaderError` `CardReadingFailed` `InvalidCard` `InputTimeout` `UserCancelled` `InvalidSignature` `WaitingForCard` `CardInserted` `ApplicationSelection` `ApplicationConfirmation` `AmountValidation` `PinInput` `ManualCardInput` `WaitingForCardRemoval` `TipInput` `SharedSecretInvalid` `SharedSecretAuth` `WaitingSignature` `WaitingHostConnect` `WaitingHostSend` `WaitingHostReceive` `WaitingHostDisconnect` `PinInputCompleted` `PosCancelled` `RequestInvalid` `CardCancelled` `CardBlocked` `RequestAuthTimeout` `RequestPaymentTimeout` `ResponseAuthTimeout` `ResponsePaymentTimeout` `IccCardSwiped` `RemoveCard` `ScannerIsNotSupported` `ScannerEvent` `BatteryTooLow` `AccountTypeSelection` `BtIsNotSupported` `PaymentCodeSelection` `PartialApproval` `AmountDueValidation` `InvalidUrl` `WaitingCustomerReceipt` `PrintingMerchantReceipt` `PrintingCustomerReceipt` `UpdateStarted` `UpdateFinished` `UpdateFailed` `UpdateProgress` `WaitingHostPostSend` `WaitingHostPostReceive` `Rebooting` `PrinterOutOfPaper` `ErrorConnectingToPrinter` `CardTapped` `ReceiptPrintSuccess` `InvalidPinLength` `OfflinePinAttempt` `OfflinePinLastAttempt` `ProcessingSignature` `CardRemoved` `TipEntered` `CardLanguagePreference` `AutomaticPrintingStarted` `CancelOperationNotAllowed` `UpdateSoftwareStarted` `UpdateSoftwareFinished` `UpdateSoftwareFailed` `UpdateSoftwareProgress` `InstallSoftwareStarted` `InstallSoftwareFinished` `InstallSoftwareFailed` `InstallSoftwareProgress` `UpdateConfigStarted` `UpdateConfigFinished` `UpdateConfigFailed` `UpdateConfigProgress` `InitialisationComplete`

## Status Info

`statusInfo` <span class="badge badge--info">Object</span>

A class containing information about the status of the transaction.

**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `isCancelAllowed` <br />*Boolean*    | 			A `boolean` letting the integrator know if the terminal will accept a stop transaction request.|
| `status`  <br />[*Status*](#45)  | 		A `Status` enum representing the status of the transaction.|
| `cardLanguage`  <br />[*SupportedLocales*](#23)   | 		The card language preference in all supported locales.|
| `multiLanguageMessages`  <br />*Map*   | 		`map` containing the status message in a human readable format in all the supported locales.|
| `message`  <br />*String*  | 		A `String` containing the status message of the transaction.|
| `deviceStatus`  <br />[*DeviceStatus*](#33)   | 		A `DeviceStatus` object containing information about the payment terminal.|

## Supported Locales{#23}

`SupportedLocales` <span class="badge badge--info">Enum</span>

An enum of the SDK supported languages.

**Possible values**

`en_CA` `en_UK` `en_US` `es_ES` `hr_HR` `is_IS` `fr_FR` `pt_PT`

## Tender Type{#36}

`TenderType` <span class="badge badge--info">Enum</span>

An enum representing different tender types.

**Possible values**

`NOT_SET` `CREDIT` `DEBIT`


## Tip Configuration{#39}

`TipConfiguration` <span class="badge badge--info">Object</span>
 
**Constructor**

TipConfiguration( String tipAmount );

| Parameter      | Notes |
| ----------- | ----------- |
| `tipAmount` <br />*String*    | 			If present, the amount of the tip to be used for the transaction.|


**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `amount`  <br />*BigInteger*   | 			Transaction amount in the minor unit of currency (f.ex. 1000 is 10.00 GBP).|
| `baseAmount` <br />*BigInteger*   | 			Base amount used to calculate the tip - in the minor unit of currency (f.ex. 1000 is 10.00 GBP). If no base amount is defined, the transaction amount is used as base amount.|
| `headerName`   <br />*String*  | 			Name of the tipping menu appearing on the terminal. Default: Tip|
| `tipPercentages` <br />*List<Integer\>*    | 			List of percentages used to calculate the tip amount. **REQUIRED**|
| `enterAmountEnabled`  <br/> *Boolean*   | 			Flag used to enable the cardholder to manually enter the tip amount. Default: true|
| `skipEnabled` <br />*Boolean*    | 			Flag used to enable the cardholder to skip the tipping step. Default: true|
| `footer`   <br />*String*  | 			Footer note which will appear on the tipping menu. Default: Empty string|

**Code example**

```json
{
    "amount": "2000",
    "baseAmount": "2000",
    "headerName": "",
    "tipPercentages": [5,10,15,20,25],
    "enterAmountEnabled": true,
    "skipEnabled": false,
    "footer": "Thank you!!! ;)"
}
```


## Transaction Type{#31}

`TransactionType` <span class="badge badge--info">Enum</span>
 
An enum representing different types of transactions.

**Possible values**

`UNDEFINED` `SALE` `VOID_SALE` `REFUND` `VOID_REFUND` `REVERSAL` `CANCEL_SALE` `CANCEL_REFUND` `TOKENIZE_CARD` `SALE_AND_TOKENIZE_CARD` `CARD_PAN`

## Type of Result{#30}

`TypeOfResult` <span class="badge badge--info">Enum</span>

An enum representing different types of device reports.

**Possible values**

`STATUS` `REPORT` `BLUETOOTHNAME` `EMVCONFIGURATION`

## Verification Method{#38}

`VerificationMethod` <span class="badge badge--info">Enum</span>

An enum representing different verification methods used in the transaction.

**Possible values**

`UNDEFINED` `SIGNATURE` `PIN` `PIN_SIGNATURE` `FAILED` `NOT_REQUIRED` `MOBILE_PASS_CODE`
