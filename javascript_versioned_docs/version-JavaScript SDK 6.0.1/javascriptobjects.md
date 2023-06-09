---
sidebar_position: 10
id: javascriptobjects
---


# Objects

## Merchant Auth{#17}

`MerchantAuth`

Object used to store merchant authentication. This object can be empty, it allows a transaction to be funded to a specific merchant account other than the default one. It is useful if a terminal is shared between multiple merchants, for example at an Hair Salon or a Doctor's office.

**Code example**

```json
{
   "merchantAuth": [{
       "acquirer": "ACQ_DUMMY",
       "mid": "1111",
       "tid": "2222",
       "mcc": "3333",
       "externalId": "4444"
       }]
}
```

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `Credential`  <br />[*Credential[]*](#28)   | Array of credentials|

## Transaction Result Object{#18}

`TransactionResult`

An object holding information about the result of a transaction.

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
  "cardHolderName": "cardholder name"
}
```

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `aid`  <br />*String	*   | Application Identifier of the card (EMV tag 9F06)|
| `arc`  <br />*String	*   | EMV Authorisation Response Code (EMV tag 8A)|
| `authorisationCode`  <br />*String	*   | Application Identifier of the card (EMV tag 9F06)|
| `balance`  <br />[*Balance*](#balance)    | Balance available on the card|
| `budgetNumber`  <br />*String	*   | Used to split payments over a period of months|
| `cardEntryType`  <br />[*CardEntryType*](#29)   | Method used by the terminal to read the card|
| `cardLanguagePreference`  <br />*String	*   | Preferred language of the card (EMV tag 5F2D)|
| `cardSchemeName`  <br />[*CardSchemeName*](#30)   | The brand of the card|
| `cardToken`  <br />*String	*   | Token representing the PAN of the card|
| `chipTransactionReport`  <br />*String	*   | 	Full report of the card EMV parameters|
| `currency`  <br />[*Currency*](#31)   | The currency used for the transaction|
| `customerReceipt`  <br />*String	*   | 	A URL containing the customer receipt in HTML format|
| `customerReference`  <br />*String	*   | If a customerReference was provided as an optional parameter in the transaction request it is echoed unaltered in this field|
| `deviceStatus`  <br />[*DeviceStatus*](#27)  | Status of the device|
| `dueAmount`  <br />*BigString*   | In case of a partial approval for the transaction, this field contains the amount which remains to be paid|
| `efttimestamp`  <br />*BigString*   | Time of the transaction|
| `efttransactionID`  <br />*String	*   | Handpoint unique identifier for a transaction, this id is the one to be used for a transaction to be reversed.|
| `errorMessage`  <br />*String	*   | Detailed reason for the transaction error|
| `expiryDateMMYY`  <br />*String	*   | Expiry date of the card used for the operation|
| `finStatus`  <br />[*FinancialStatus*](#33)   | The financial status contains the outcome of the transaction. For example "AUTHORISED" or "DECLINED"|
| `iad`  <br />*String	*   | Issuer Application Data (EMV tag 9F10)|
| `issuerResponseCode`  <br />*String	*   | Response code from the card issuer|
| `maskedCardNumber`  <br />*String	*   | Masked card number of the card used for the operation|
| `merchantAddress`  <br />*String	*   | Merchant Address|
| `merchantName`  <br />*String	*   | Merchant Name|
| `merchantReceipt`  <br />*String	*   | A URL containing the customer receipt in HTML format|
| `mid`  <br />*String	*   | Merchant Identifier|
| `originalEFTTransactionID`  <br />*String	*   | In case the transaction type is a reversal, this field will contain the identifier of the original transaction being reversed|
| `paymentScenario`  <br />[*PaymentScenario*](#34)   | Indicates the card entry mode|
| `recoveredTransaction`  <br />*String	*   | This flag is set to true if the transaction result is sent through the transaction recovery logic explained in the Recovey Section, false otherwise|
| `requestedAmount`  <br />*String	*   | The requested amount is the transaction amount sent to the terminal|
| `rrn`  <br />*String	*   | Retrieval Reference Number, unique number assigned by the acquirer|
| `signatureUrl`  <br />*String	*   | If a digital signature is required, this is the URL containing the image of the captured signature|
| `statusMessage`  <br />*String	*   | The status of the transaction, for example "Waiting for pin"|
| `tenderType`  <br />[*TenderType*](#35)   | Transaction tender type (credit / debit)|
| `tid`  <br />*String	*   | Terminal Identifier|
| `tipAmount`  <br />*String	*   | Tip amount, if any, in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `tipPercentage`  <br />*String	*   | If tipping is enabled, this field will return the tip percentage added on top of the base amount|
| `totalAmount`  <br />*String	*   | The total amount is the amount the card was charged for. It is possible that the total amount is not the same as the requested amount since an additional fee can be added, with the customer's approval, via the tipping functionality|
| `transactionID`  <br />*String	*   | The transaction id is a terminal internal counter incremented for each transaction|
| `tsi`  <br />*String	*   | Transaction Status Information (EMV tag 9B)|
| `tvr`  <br />*String	*   | Transaction Verification Results (EMV tag 95)|
| `type`  <br />[*TransactionType*](#36)   | 	The type of transaction initiated, for example "SALE"|
| `unMaskedPan`  <br />*String	*   | Unmasked PAN, only received if the card is a non-payment card (loyalty)|
| `verificationMethod`  <br />[*VerificationMethod*](#37)   | cardholder verification method, for example "PIN"|
| `multiLanguageStatusMessages`  <br />*Map	*   | `map` containing the status message in a human readable format for all the supported locales.|
| `multiLanguageErrorMessages`  <br />*Map	*   | `map` containing the error message in a human readable format for all the supported locales.|
| `cardHolderName`  <br />*String	*   | Name of the cardholder|

## Bypass Options{#19}

`BypassOptions`

Configuration to enable/disable signature or pin bypass.

**Code example**

```
{
   "bypassOptions": {
       "signatureBypass": true,
       "pinBypass": true
       }
}
```

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `pinBypass`  <br />*Boolean*   | Bypasses PIN entry when the shopper says they don't know the PIN for the card and the merchant either knows they are the legitimate cardholder or want to give them the benefit of the doubt. PIN Bypass should be set to True if you want to enable pin bypass for a transaction|
| `signatureBypass`  <br />*Boolean*   | Whether the terminal prompts for a signature, depends on how you configure this. The major card schemes (American Express, Diners, Discover, JCB, Mastercard, Visa, UnionPay) no longer require a signature; they regard it as optional for card-present transactions. This means you can speed up your checkout by skipping the signature prompt. But if your business requires it, you can still let the terminal prompt for a signature. The shopper then provides their signature on the touch screen of the terminal or on the printed transaction receipt. This depends on how you configure this setting. It is your responsibility to verify the signature of the shopper with the signature on the card or another form of identification. Signature Bypass should be set to True if you want to enable signature for this transaction|



## Device{#20}

`Device`

An object to store the information about the payment terminal you are working with. ALL values are **REQUIRED**


**Code example**

```json
{
       "merchant_id_alpha": "Test_Merchant",
       "serial_number": "614004878",
       "ssk": "74817EA5C63437ADE7AA3A5401",
       "terminal_type": "PAXA920",
       "device_name": "0821032395-PAXA920"
}
```

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `merchant_id_alpha`  <span class="badge badge--primary">Required</span>  <br />*String*   | Merchant unique identifier to which the device is associated|
| `serial_number` <span class="badge badge--primary">Required</span> <br />*String*   | Device serial number|
| `ssk` <span class="badge badge--primary">Required</span> <br />*String*   | Device shared secret key to authorize the operations.|
| `terminal_type` <span class="badge badge--primary">Required</span> <br />*String*   | Device type|
| `device_name` <span class="badge badge--primary">Required</span> <br />*String*   | Device name composed with serial_number - terminal_type|

## Acquirer{#21}

`Acquirer`

An enum representingbthe supported acquirers for merchant authentication

`AMEX` `BORGUN` `EVO` `OMNIPAY` `POSTBRIDGE` `INTERAC` `TSYS` `VANTIV` `SANDBOX`

## Transaction Status{#22}

`TransactionStatus`

A class that holds the device status. This is the object that will be recieved in the financial operation callback functions


**Properties**

| Property      | Description |
| ----------- | ----------- |
| `deviceStatus`  <br />[*Device Status*](#27)   | OPTIONAL - The status of the payment terminal.|
| `isCancelAllowed`  <br />*boolean*   | Defines is a transaction can be cancelled or not.|
| `message`  <br />*String*   | Human readable status message.|
| `status`  <br />[*status*](#38)  | An enum containing information about the status of the transaction.|

## Sale Options{#23}

`SaleOptions`

An object to store all the customisation options for an operation. This object can be empty if no options are required.

**Code example**

```json
{
    "customerReference": "MyCustomReference",
    "tipConfiguration": {
        "baseAmount": "100",
        "skipEnabled": true,
        "enterAmountEnabled": true,
        "tipPercentages": [
            1,
            2,
            3,
            5
        ]
    },
    "bypassOptions": {
        "signatureBypass": true,
        "pinBypass": true
    },
    "merchantAuth": [
        {
            "acquirer": "ACQUIRER",
            "mid": "11111",
            "tid": "22222",
            "mcc": "33333"
        }
    ],
}
```	

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `customerReference`  <br />*String*   | An arbitrary string to use as your own identifier for a transaction|
| `TipConfiguration`  <br />[*TipConfiguration*](#39) |
| `bypassOptions`  <br />[*BypassOptions*](#19) |  
| `merchantAuth`  <br />[*MerchantAuth*](#17)   |

## Refund Options{#24}

`RefundOptions`

An object to store all the customisation options for a refund. This object can be empty if no options are required.

**Code example**

```json
{
    "customerReference": "MyCustomReference",
    "tipConfiguration": {
        "baseAmount": "100",
        "skipEnabled": true,
        "enterAmountEnabled": true,
        "tipPercentages": [
            1,
            2,
            3,
            5
        ]
    },
    "bypassOptions": {
        "signatureBypass": true,
        "pinBypass": true
    },
    "merchantAuth": [
        {
            "acquirer": "ACQUIRER",
            "mid": "11111",
            "tid": "22222",
            "mcc": "33333"
        }
    ],
}
```	

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `customerReference`  <br />*String*   | An arbitrary string to use as your own identifier for a transaction|
| `bypassOptions`  <br />[*BypassOptions*](#19) |
| `merchantAuth`  <br />[*MerchantAuth*](#17) |

## Merchant Auth Options{#25}

`MerchantAuthOptions`

An object to store merchant authentication options for regular operations.

**Code example**

```json
{
    "customerReference": "MyCustomReference",
    "merchantAuth": [
        {
            "acquirer": "ACQUIRER",
            "mid": "11111",
            "tid": "22222",
            "mcc": "33333"
        }
    ],
}
```	

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `customerReference`  <br />*String* |
| `merchantAuth`  <br />[*MerchantAuth*](#17) |


## Balance

`Balance`

Balance available on the card

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `amount`  <br />*Integer*   | The amount balance|
| `currency`  <br />*Currency*   | The balance currency|
| `positive`  <br />*Boolean*   | Marks if the balance is positive|
| `negative`  <br />*Boolean*   | Marks if the balance is negative|

**Code example**

```json
"balance": {
    "amount": 1000,
    "currency": "EUR",
    "negative": false,
    "positive": true
  }
```	


## Options{#26}

`Options`

An object to store all the customisation options for an operation. This object can be empty if no options are required.



**Properties**

| Property      | Description |
| ----------- | ----------- |
| `customerReference`  <br />*String*   | An arbitrary string to use as your own identifier for a transaction|

**Code example**

```json
{
    "customerReference": "MyCustomReference"    
}
```	

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `amount`  <br />*Integer*   | The amount balance|
| `currency`  <br />*Currency*   | The balance currency|
| `positive`  <br />*Boolean*   | Marks if the balance is positive|
| `negative`  <br />*Boolean*   | Marks if the balance is negative|

## Merchant Auth Credential{#28}

`Credential`

An object to store credentials (Acquirer, Mid, Tid, MCC and ExternalId) for merchant authentication.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `acquirer`  <br />[*Acquirer*](#21)   | If present, it links this credential to the specified acquirer. Required if more than one credential is provided.|
| `mid`  <br />*String*   | For this transaction, overrides the default MID (merchant ID) saved in the terminal configuration.|
| `tid`  <br />*String*   | 	For this transaction, overrides the default TID (terminal ID) saved in the terminal configuration.|
| `mcc`  <br />*String*   | Merchant Category Code, overrides the default MCC saved in the terminal configuration.|
| `ExternalId`  <br />*String*   | For this transaction, the External Id will be used to lookup the credential of the merchant in the Handpoint backend and process the transaction accordingly. The External id replaces the need to pass MID/TID/MCC as credentials|


**Code example**

```json
{
    "acquirer": "ACQ_DUMMY",
    "mid": "1111",
    "tid": "2222",
    "mcc": "3333"
}

{
    "externalId": "4444"
}
```

## Financial Status{#33}

`FinancialStatus`

An enum representing different statuses of a finalized transaction

**Possible values**

`UNDEFINED` `AUTHORISED` `DECLINED` `PROCESSED` `FAILED` `CANCELLED` `PARTIAL_APPROVAL`

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



## Device Status{#27}

`DeviceStatus`

A class that holds the device status.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `SerialNumber`  <br />*String	*   | The serial number of the device|
| `BatteryStatus`  <br />*String	*   | The battery status in percentages of a device|
| `BatterymV`  <br />*String	*   | The battery milli volts of a device|
| `BatteryCharging`  <br />*String	*   | 	The battery charging status of a device|
| `ExternalPower`  <br />*String	*   | The status of an external power of a device|
| `ApplicationName`  <br />*String	*   | The application name used on a device|
| `ApplicationVersion`  <br />*String	*   | The application version number used on a device|
| `bluetoothName`  <br />*String	*   | The bluetooth interface name used on a device|
| `statusMessage`  <br />*String	*   | Device human readable status message|

**Code example**

```json
{
    "applicationName": "TestApp",
    "applicationVersion": "20.1.0.1",
    "batteryCharging": "Charging",
    "batteryStatus": "100",
    "batterymV": "4134",
    "bluetoothName": "A920",
    "externalPower": "USB",
    "serialNumber": "0821032397",
    "statusMessage": "Card reader time out"
}
```

## Currency{#31}

`Currency`

An enum of most currencies in the world.

Contains the ISO name, ISO number and the name of the currency. Additionally contains information about how many decimals the currency uses.

**Possible values**

`AED` `AFN` `ALL` `AMD` `ANG` `AOA` `ARS` `AUD` `AWG` `AZN` `BAM` `BBD` `BDT` `BGN` `BHD` `BIF` `BMD` `BND` `BOB` `BOV` `BRL` `BSD` `BTN` `BWP` `BYR` `BZD` `CAD` `CDF` `CHF` `CLP` `CNY` `COP` `COU` `CRC` `CUC` `CUP` `CVE` `CZK` `DJF` `DKK` `DOP` `DZD` `EEK` `EGP` `ERN` `ETB` `EUR` `FJD` `FKP` `GBP` `GEL` `GHS` `GIP` `GMD` `GNF` `GTQ` `GYD` `HKD` `HNL` `HRK` `HTG` `HUF` `IDR` `ILS` `INR` `IQD` `IRR` `ISK` `JMD` `JOD` `JPY` `KES` `KGS` `KHR` `KMF` `KPW` `KRW` `KWD` `KYD` `KZT` `LAK` `LBP` `LKR` `LRD` `LSL` `LTL` `LVL` `LYD` `MAD` `MDL` `MKD` `MMK` `MNT` `MOP` `MUR` `MVR` `MWK` `MXN` `MXV` `MYR` `MZN` `NAD` `NGN` `NIO` `NOK` `NPR` `NZD` `OMR` `PAB` `PEN` `PGK` `PHP` `PKR` `PLN` `PYG` `QAR` `RON` `RSD` `RUB` `RWF` `SAR` `SBD` `SCR` `SDG` `SEK` `SGD` `SHP` `SLL` `SOS` `SRD` `STD` `SYP` `SZL` `THB` `TJS` `TMT` `TND` `TOP` `TRY` `TTD` `TWD` `TZS` `UAH` `UGX` `USD` `UZS` `VEF` `VND` `VUV` `WST` `XAF` `XCD` `XOF` `XPF` `YER` `ZAR` `ZMK` `ZWL`

## Card Entry Type{#29}

`CardEntryType`

An enum representing different card entry types.

**Possible values**

`UNDEFINED` `MSR` `ICC` `CNP`

## Card Scheme Name{#30}

`CardSchemeName`

A string representing different card brands.

**Possible values**

`MasterCard` `Visa` `Maestro` `American Express` `Discover` `JCB` `Diners` `UnionPay`

## Verification Method{#37}

`VerificationMethod`

An enum representing different verification methods used in the transaction.

**Possible values**

`UNDEFINED` `SIGNATURE` `PIN` `PIN_SIGNATURE` `FAILED` `NOT_REQUIRED` `MOBILE_PASS_CODE`

## Payment Scenario{#34}

`PaymentScenario`

An enum representing different types of scenario.

**Possible values**

`UNKNOWN` `MAGSTRIPE` `MAGSTRIPECONTACTLESS` `CHIP` `CHIPCONTACTLESS` `CHIPFAILMAGSTRIPE`

## Status Info

`statusInfo`

A class containing information about the status of the transaction.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `cancelAllowed`  <br />*bool*   | A `boolean` letting the integrator know if the terminal will accept a stop transaction request.|
| `status`  <br />[*status*](#38)  | A Status enum representing the status of the transaction.|
| `message`  <br />*String*   | A String containing the status message of the transaction.|
| `deviceStatus`  <br />[*Device Status*](#27)   | A `DeviceStatus` object containing information about the payment terminal.|


## Status{#38}

`status`

An enum containing information about the status of a transaction.

**Possible values**

`Undefined` `Success` `InvalidData` `ProcessingError` `CommandNotAllowed` `NotInitialised` `ConnectTimeout` `ConnectError` `SendingError` `ReceivingError` `NoDataAvailable` `TransactionNotAllowed` `UnsupportedCurrency` `NoHostAvailable` `CardReaderError` `CardReadingFailed` `InvalidCard` `InputTimeout` `UserCancelled` `InvalidSignature` `WaitingForCard` `CardInserted` `ApplicationSelection` `ApplicationConfirmation` `AmountValidation` `PinInput` `ManualCardInput` `WaitingForCardRemoval` `TipInput` `SharedSecretInvalid` `SharedSecretAuth` `WaitingSignature` `WaitingHostConnect` `WaitingHostSend` `WaitingHostReceive` `WaitingHostDisconnect` `PinInputCompleted` `PosCancelled` `RequestInvalid` `CardCancelled` `CardBlocked` `RequestAuthTimeout` `RequestPaymentTimeout` `ResponseAuthTimeout` `ResponsePaymentTimeout` `IccCardSwiped` `RemoveCard` `ScannerIsNotSupported` `ScannerEvent` `BatteryTooLow` `AccountTypeSelection` `BtIsNotSupported` `PaymentCodeSelection` `PartialApproval` `AmountDueValidation` `InvalidUrl` `WaitingCustomerReceipt` `PrintingMerchantReceipt` `PrintingCustomerReceipt` `UpdateStarted` `UpdateFinished` `UpdateFailed` `UpdateProgress` `WaitingHostPostSend` `WaitingHostPostReceive` `Rebooting` `PrinterOutOfPaper` `ErrorConnectingToPrinter` `CardTapped` `ReceiptPrintSuccess` `InvalidPinLength` `OfflinePinAttempt` `OfflinePinLastAttempt` `ProcessingSignature` `CardRemoved` `TipEntered` `CardLanguagePreference` `AutomaticPrintingStarted` `CancelOperationNotAllowed` `UpdateSoftwareStarted` `UpdateSoftwareFinished` `UpdateSoftwareFailed` `UpdateSoftwareProgress` `InstallSoftwareStarted` `InstallSoftwareFinished` `InstallSoftwareFailed` `InstallSoftwareProgress` `UpdateConfigStarted` `UpdateConfigFinished` `UpdateConfigFailed` `UpdateConfigProgress` `InitialisationComplete`

## Tender Type{#35}

`TenderType`

An enum representing different tender types.

**Possible values**

`NOT_SET` `CREDIT` `DEBIT`

## Tip Configuration{#39}

`TipConfiguration`

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `baseAmount`  <br />*BigInteger*   | Base amount used to calculate the tip - in the minor unit of currency (f.ex. 1000 is 10.00 GBP). If no base amount is defined, the transaction amount is used as base amount.|
| `headerName`  <br />*String*   | Name of the tipping menu appearing on the terminal. Default: Tip|
| `tipPercentages`  <span class="badge badge--primary">Required</span>    <br /> *List<Integer\>*   | List of percentages used to calculate the tip amount. **REQUIRED**|
| `enterAmountEnabled`  <br />*Boolean*   | Flag used to enable the cardholder to manually enter the tip amount. Default: true|
| `skipEnabled`  <br />*Boolean*   | Flag used to enable the cardholder to skip the tipping step. Default: true|
| `footer`  <br />*String*   | Footer note which will appear on the tipping menu. Default: Empty string|

**Code example**

```json
{
    baseAmount: '2000',
    tipPercentages: [5,10,15,20,25],
    enterAmountEnabled: true,
    skipEnabled: false,
    footer: 'Thank you!!! ;)'
}
```

## Transaction Type{#36}

`TransactionType`

An enum representing different types of transactions.

**Possible values**

`UNDEFINED` `SALE` `VOID_SALE` `REFUND` `VOID_REFUND` `CANCEL_SALE` `CANCEL_REFUND` `TOKENIZE_CARD` `CARD_PAN`
