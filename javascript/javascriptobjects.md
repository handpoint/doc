---
sidebar_position: 8
id: javascriptobjects
---


# Objects

## Transaction Result Object{#18}

`TransactionResult` <span class="badge badge--info">Object</span>

An object holding information about the result of a transaction.

:::tip
`signatureUrl`: In case the signature can not be updated to the Handpoint servers and an URL is not generated, the terminal will send back the image binary in base64 format to your software. It is important to be able to support both the URL and the image binary format.

`customerReceipt` and `merchantReceipt`: The receipts are usually received as URLs in the transaction result from the terminal. Please note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and an URL is not generated then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats.
:::

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `aid`  <br />*String	*   | EMV Application Identifier of the card (EMV tag 9F06)|
| `arc`  <br />*String	*   | EMV Authorisation Response Code (EMV tag 8A)|
| `authorisationCode`  <br />*String	*   | Acquirer response code|
| `balance`  <br />[*Balance*](#balance)    | Balance available on the card|
| `budgetNumber`  <br />*String	*   | Used to split payments over a period of months|
| `cardEntryType`  <br />[*CardEntryType*](#29)   | Method used by the terminal to read the card|
| `cardLanguagePreference`  <br />*String	*   | Preferred language of the card (EMV tag 5F2D)|
| `cardSchemeName`  <br />[*CardSchemeName*](#30)   | The brand of the card|
| `cardToken`  <br />*String	*   | Token representing the PAN of the card|
| `chipTransactionReport`  <br />*String	*   | 	Full report of the card EMV parameters|
| `currency`  <br />[*Currency*](#31)   | The currency used for the transaction|
| `customerReceipt`  <br />*String	*   | The receipts are usually received as URLs in the transaction result from the terminal but note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats |
| `customerReference`  <br />*String	*   | If a customerReference was provided as an optional parameter in the transaction request it is echoed unaltered in this field|
| `deviceStatus`  <br />[*DeviceStatus*](#27)  | Status of the payment terminal|
| `dueAmount`  <br />*Number*   | In case of a partial approval for the transaction, this field contains the amount which remains to be paid. Partial approval support is only required by the card brands in the United States|
| `efttimestamp`  <br />*Date (Unix epoch)*   | Time of the transaction (based on the date and time of the payment terminal) |
| `efttransactionID`  <br />*String	*   | Handpoint unique identifier for a transaction, this id is the one to be used for a transaction to be reversed.|
| `errorMessage`  <br />*String	*   | Detailed reason for the transaction error|
| `expiryDateMMYY`  <br />*String	*   | Expiry date of the card used for the operation|
| `finStatus`  <br />[*FinancialStatus*](#33)   | The financial status contains the outcome of the transaction. For example "AUTHORISED" or "DECLINED"|
| `iad`  <br />*String	*   |EMV Issuer Application Data (EMV tag 9F10)|
| `issuerResponseCode`  <br />*String	*   | Response code from the card issuer|
| `maskedCardNumber`  <br />*String	*   | Masked card number of the card used for the operation|
| `merchantAddress`  <br />*String	*   | Merchant Address|
| `merchantName`  <br />*String	*   | Merchant Name|
| `merchantReceipt`  <br />*String	*   | The receipts are usually received as URLs in the transaction result from the terminal but note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats |
| `metadata`  <br />[*Metadata*](#metadata)   | If metadata was provided as an optional parameter in the transaction request it is echoed unaltered in this field|
| `mid`  <br />*String	*   | Merchant Identifier|
| `originalEFTTransactionID`  <br />*String	*   | In case the transaction type is a reversal, this field will contain the identifier of the original transaction being reversed|
| `paymentScenario`  <br />[*PaymentScenario*](#34)   | Indicates the card entry mode|
| `recoveredTransaction`  <br />*Boolean	*   | This flag is set to true if the transaction result is sent through the transaction recovery logic explained in the Recovey Section, false otherwise|
| `requestedAmount`  <br />*BigInteger	*   | The requested amount is the transaction amount sent to the terminal|
| `rrn`  <br />*String	*   | Retrieval Reference Number, unique number assigned by the acquirer|
| `signatureUrl`  <br />*String	*   | If a digital signature is required, this is the URL containing the image of the captured signature. In case the signature can not be updated to the Handpoint servers and an URL is not generated, the terminal will send back the image binary in base64 format to your software. It is important to be able to support both the URL and the image binary format.|
| `statusMessage`  <br />*String	*   | The status of the transaction, for example "Waiting for pin"|
| `tenderType`  <br />[*TenderType*](#35)   | Transaction tender type (credit / debit)|
| `tid`  <br />*String	*   | Terminal Identifier|
| `tipAmount`  <br />*BigInteger	*   | Tip amount, if any, in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `tipPercentage`  <br />*Double	*   | If tipping is enabled, this field will return the tip percentage added on top of the base amount|
| `totalAmount`  <br />*BigInteger	*   | The total amount is the amount the card was charged for. It is possible that the total amount is not the same as the requested amount since an additional fee can be added, with the customer's approval, via the tipping functionality|
| `transactionID`  <br />*String	*   | The transaction id is a terminal internal counter incremented for each transaction|
| `tsi`  <br />*String	*   | EMV Transaction Status Information (EMV tag 9B)|
| `tvr`  <br />*String	*   | EMV Transaction Verification Results (EMV tag 95)|
| `type`  <br />[*TransactionType*](#36)   | 	The type of transaction initiated, for example "SALE"|
| `unMaskedPan`  <br />*String	*   | Unmasked PAN, only received if the card is a non-payment card (loyalty)|
| `verificationMethod`  <br />[*VerificationMethod*](#37)   | cardholder verification method, for example "PIN"|
| `multiLanguageStatusMessages`  <br />*Map	*   | `map` containing the status message in a human readable format for all the supported locales.|
| `multiLanguageErrorMessages`  <br />*Map	*   | `map` containing the error message in a human readable format for all the supported locales.|
| `cardHolderName`  <br />*String	*   | Name of the cardholder|

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
    "metadata1":"data 1",
    "metadata2":"data 2",
    "metadata3":"data 3",
    "metadata4":"data 4",
    "metadata5":"data 5",
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
  "recoveredTransaction": false,
  "cardHolderName": "cardholder name"
}
```
## Balance

`Balance` <span class="badge badge--info">Object</span>

Balance available on the card.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `amount`  <br />*Integer*   | The balance amount.|
| `currency`  <br />*Currency*   | The balance currency.|
| `positive`  <br />*Boolean*   | Marks if the balance is positive.|
| `negative`  <br />*Boolean*   | Marks if the balance is negative.|

**Code example**

```json
"balance": {
    "amount": 1000,
    "currency": "EUR",
    "negative": false,
    "positive": true
  }
```	

## Bypass Options{#19}

`BypassOptions` <span class="badge badge--info">Object</span>

Configuration to enable/disable signature or pin bypass.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `pinBypass`  <br />*Boolean*   | Bypasses PIN entry when the cardholder does not know the PIN of the card and the merchant either knows they are the legitimate cardholder or want to give them the benefit of the doubt. PIN bypass should be set to true in order for the cardholder to be able to bypass the PIN by clicking once on the "validate(green)" button of the PIN screen on the payment terminal.|
| `signatureBypass`  <br />*Boolean*   | Whether the terminal prompts for a signature, depends on how you configure this parameter. The major card schemes (American Express, Diners, Discover, JCB, Mastercard, Visa, UnionPay) no longer require a signature for US merchants, they regard it as optional for card-present transactions. This means you can speed up your checkout by skipping the signature prompt. But if your business requires it, you can still let the terminal prompt for a signature.|

**Code example**

```json
{
   "bypassOptions": {
       "signatureBypass": true,
       "pinBypass": true
       }
}
```

## Device{#20}

`Device` <span class="badge badge--info">Object</span>

An object to store information about the payment terminal in use. ALL values are **REQUIRED**.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `merchant_id_alpha`  <span class="badge badge--primary">Required</span>  <br />*String*   | Merchant unique identifier associated with the payment terminal.|
| `serial_number` <span class="badge badge--primary">Required</span> <br />*String*   | Payment terminal serial number.|
| `ssk` <span class="badge badge--primary">Required</span> <br />*String*   | Device shared secret key to authenticate financial operations.|
| `terminal_type` <span class="badge badge--primary">Required</span> <br />*String*   | Payment terminal type.|
| `device_name` <span class="badge badge--primary">Required</span> <br />*String*   | Payment terminal name composed of two parts "serial_number - terminal_type"|

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

## Acquirer{#21}

`Acquirer` <span class="badge badge--info">Enum</span>

An enum representing the supported acquirers for merchant authentication

`AMEX` `BORGUN` `EVO` `OMNIPAY` `POSTBRIDGE` `INTERAC` `TSYS` `VANTIV` `SANDBOX`

## Transaction Status{#22}

`TransactionStatus` <span class="badge badge--info">Object</span>

A class which holds the payment terminal status. This object is received in the financial operation callback.


**Properties**

| Property      | Description |
| ----------- | ----------- |
| `deviceStatus`  <br />[*Device Status*](#27)   | OPTIONAL - The status of the payment terminal.|
| `isCancelAllowed`  <br />*boolean*   | Defines if the transaction can be cancelled or not.|
| `message`  <br />*String*   | Human readable status message.|
| `status`  <br />[*status*](#38)  | An enum containing information about the status of the transaction.|

## Options{#26}

`Options` <span class="badge badge--info">Object</span>

An object to store all the customisation options for an operation. This object can be empty if no options are required.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `customerReference`  <br />*String*   | An arbitrary string to use as your own identifier for a transaction|
| `metadata`  <br />[*Metadata*](#metadata)   | Object used to store metadata, this data will be echoed in the transaction result. <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|

**Code example**

```json
{
    "customerReference": "MyCustomReference",
    "metadata": {
        "metadata1": "data1",
        "metadata2": "data2",
        "metadata3": "data3",
        "metadata4": "data4",
        "metadata5": "data5"
    }    
}
```	


## Sale Options{#23}

`SaleOptions` <span class="badge badge--info">Object</span>

An object to store the customization options for a sale operation. This object can be empty if no options are required.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `customerReference`  <br />*String*   | An arbitrary string to use as your own identifier for a transaction.|
| `duplicate_check`  <br />*Boolean*   | Used to disable the duplicate payment check functionality. When a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the second charge. This menu will automatically be prompted on the payment terminal if a suspicious charge is detected. We are only prompting the duplicate check menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe.<br></br><br></br>  ** The duplicate_check functionality is available for the following transaction types:** Sale, Sale and Tokenize, Sale Reversal, Refund, Refund Reversal, MoTo Sale, MoTo Refund and MoTo Reversal.<br /> <br></br>The `duplicate_check` service is **enabled to "true" by default**, if you want to disable it, you must explicitly pass the `duplicate_check` flag as part of the transaction request with the value "false".|
| `TipConfiguration`  <br />[*TipConfiguration*](#39) | Configuration for the tipping menu of the payment terminal.|
| `bypassOptions`  <br />[*BypassOptions*](#19) |  Configuration required to bypass the pin or signature verification methods.|
| `merchantAuth`  <br />[*MerchantAuth*](#17)   | Configuration required to fund a specific merchant account in a multi-mid scenario (one payment terminal funding multiple merchants).|
| `metadata`  <br />[*Metadata*](#metadata)   | Object used to store metadata, this data will be echoed in the transaction result. <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|

**Code example**

```json
{
    "customerReference": "MyCustomReference",
    "duplicate_check": false,
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
    "metadata": {
        "metadata1": "data1",
        "metadata2": "data2",
        "metadata3": "data3",
        "metadata4": "data4",
        "metadata5": "data5"
    }
}
```	

## Refund Options{#24}

`RefundOptions` <span class="badge badge--info">Object</span>

An object to store the customization options for a refund. This object can be empty if no options are required.

**Code example**

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `customerReference`  <br />*String*   | An arbitrary string to use as your own identifier for a transaction.|
| `duplicate_check`  <br />*Boolean*   | Used to disable the duplicate payment check functionality. When a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the second charge. This menu will automatically be prompted on the payment terminal if a suspicious charge is detected. We are only prompting the duplicate check menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe.<br></br><br></br>  ** The duplicate_check functionality is available for the following transaction types:** Sale, Sale and Tokenize, Sale Reversal, Refund, Refund Reversal, MoTo Sale, MoTo Refund and MoTo Reversal.<br /> <br></br>The `duplicate_check` service is **enabled to "true" by default**, if you want to disable it, you must explicitly pass the `duplicate_check` flag as part of the transaction request with the value "false".|
| `bypassOptions`  <br />[*BypassOptions*](#19) | Configuration required to bypass the pin or signature verification methods.|
| `merchantAuth`  <br />[*MerchantAuth*](#17) | Configuration required to fund a specific merchant account in a multi-mid scenario (one payment terminal funding multiple merchants).|
| `metadata`  <br />[*Metadata*](#metadata)   | Object used to store metadata, this data will be echoed in the transaction result. <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|

**Code example**

```json
{
    "customerReference": "MyCustomReference",
    "duplicate_check": false,
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
    "metadata": {
        "metadata1": "data1",
        "metadata2": "data2",
        "metadata3": "data3",
        "metadata4": "data4",
        "metadata5": "data5"
    }
}
```	

## Merchant Auth Options{#25}

`MerchantAuthOptions` <span class="badge badge--info">Object</span>

An object to store merchant authentication options for regular operations.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `customerReference`  <br />*String* | An arbitrary string to use as your own identifier for a transaction.|
| `merchantAuth`  <br />[*MerchantAuth*](#17) | Configuration required to fund a specific merchant account in a multi-mid scenario (one payment terminal funding multiple merchants).|

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
## Merchant Auth{#17}

`MerchantAuth` <span class="badge badge--info">Object</span>

An object used to store merchant authentication. This object can be empty, it allows a transaction to be funded to a specific merchant account other than the default one (linked to the API key). It is useful if a terminal is shared between multiple merchants, for example at an Hair Salon or a Doctor's office.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `Credential`  <br />[*Credential[]*](#28)   | Array of credentials.|

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

## Merchant Auth Credential{#28}

`Credential` <span class="badge badge--info">Object</span>

An object to store credentials (Acquirer, Mid, Tid, MCC and ExternalId) for merchant authentication.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `acquirer`  <br />[*Acquirer*](#21)   | If present, it links the credential to a specific acquirer. Only required if more than one credential is provided.|
| `mid`  <br />*String*   | For this transaction, overrides the default MID (merchant ID) saved in the terminal configuration.|
| `tid`  <br />*String*   | For this transaction, overrides the default TID (terminal ID) saved in the terminal configuration.|
| `mcc`  <br />*String*   | Merchant Category Code, overrides the default MCC saved in the terminal configuration.|
| `ExternalId`  <br />*String*   | For this transaction, the External Id will be used to lookup the credential of the merchant in the Handpoint backend and process the transaction accordingly. The External id replaces the need to pass MID/TID/MCC as credentials.|


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

`FinancialStatus` <span class="badge badge--info">Enum</span>

An enum representing different statuses for a completed transaction.

**Possible values**

`UNDEFINED` `AUTHORISED` `DECLINED` `PROCESSED` `FAILED` `CANCELLED` `PARTIAL_APPROVAL` `UNKNOWN` `IN_PROGRESS`

Description of the different financial statuses:

| Parameter      | Notes |
| ----------- | ----------- |
| `UNDEFINED`   <br/>  | Any financial status other than the below mentioned financial statuses will be `UNDEFINED`. It means that the terminal couldn't get a response from the Handpoint gateway and therefore does not know the outcome of the transaction. This status is **VERY RARE** because the terminal has a retry mechanism that will attempt to get the transaction status several times from the gateway (up to 90s) before returning `UNDEFINED`. When you receive this status, you can use the [get transaction status](javascriptterminalmanagement.md#17) method to directly query the Handpoint gateway and know if the transaction was approved or declined.|
| `AUTHORISED` <br/>    | The transaction (Sale, Refund etc.) has been authorised. Consider this value as "successful". |
| `DECLINED` <br/>   | The transaction has been declined by the acquirer or issuer. |
| `PROCESSED`  <br/>   | The `printReceipt` operation was successful.|
| `FAILED`  <br/>   | Status generated due to a network error, a card which can not be read etc. As a general rule, errors are mapped to `FAILED`. This means the operation was unsuccessful and the transaction has not been charged.   |
| `CANCELLED`  <br/>   | The transaction has been cancelled. For example if the `stopCurrentTransaction` operation has been used or the cancel button on the terminal has been pressed.   |
| `PARTIAL_APPROVAL`  <br/>   | A partial approval is returned by the acquirer when funds have been partially authorized, for example if the cardholder does not have all the funds to cover the entire cost of the goods or services they are buying. The merchant can obtain the remainder of the purchase amount in another form of payment (cash, check or another card transaction for the remaining). `PARTIAL_APPROVAL` is **only** applicable to the United States market. |
| `UNKNOWN` (NOT FOUND) <br/>   | The `UNKNOWN` (NOT FOUND) status can be returned as a response to the  [get transaction status](javascriptterminalmanagement.md#17) method. This status means that the transaction does not exist in the Handpoint gateway. If this status is returned within 90s of the start of a transaction, there could be a chance that the cardholder has not inserted, swiped or tapped his card yet on the terminal and the Handpoint gateway might soon receive the transaction. If the `UNKNOWN` status is returned after 90s, it means that the transaction processed has not reached the Handpoint gateway and it will NOT be charged.|
| `IN_PROGRESS`  <br/>   |  The `IN_PROGRESS` status can be returned as a response to the  [get transaction status](javascriptterminalmanagement.md#17) method. The transaction is known by the gateway but the result is not available yet. Please check the status again after a few seconds. |




## Device Status{#27}

`DeviceStatus` <span class="badge badge--info">Object</span>

A class which holds the payment terminal status.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `SerialNumber`  <br />*String	*   | The serial number of the payment terminal.|
| `BatteryStatus`  <br />*String	*   | The battery status in percentages of the payment terminal.|
| `BatterymV`  <br />*String	*   | The battery millivolts of the payment terminal.|
| `BatteryCharging`  <br />*String	*   | 	The battery charging status of the payment terminal.|
| `ExternalPower`  <br />*String	*   | The external power status of the payment terminal.|
| `ApplicationName`  <br />*String	*   | The application name used by the payment terminal.|
| `ApplicationVersion`  <br />*String	*   | The application version number used by the payment terminal.|
| `bluetoothName`  <br />*String	*   | The bluetooth interface name used by the payment terminal.|
| `statusMessage`  <br />*String	*   |  Status message of the payment terminal.|

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

`Currency` <span class="badge badge--info">Enum</span>

An enum of currencies.

**Possible values**

`AED` `AFN` `ALL` `AMD` `ANG` `AOA` `ARS` `AUD` `AWG` `AZN` `BAM` `BBD` `BDT` `BGN` `BHD` `BIF` `BMD` `BND` `BOB` `BOV` `BRL` `BSD` `BTN` `BWP` `BYR` `BZD` `CAD` `CDF` `CHF` `CLP` `CNY` `COP` `COU` `CRC` `CUC` `CUP` `CVE` `CZK` `DJF` `DKK` `DOP` `DZD` `EEK` `EGP` `ERN` `ETB` `EUR` `FJD` `FKP` `GBP` `GEL` `GHS` `GIP` `GMD` `GNF` `GTQ` `GYD` `HKD` `HNL` `HRK` `HTG` `HUF` `IDR` `ILS` `INR` `IQD` `IRR` `ISK` `JMD` `JOD` `JPY` `KES` `KGS` `KHR` `KMF` `KPW` `KRW` `KWD` `KYD` `KZT` `LAK` `LBP` `LKR` `LRD` `LSL` `LTL` `LVL` `LYD` `MAD` `MDL` `MKD` `MMK` `MNT` `MOP` `MUR` `MVR` `MWK` `MXN` `MXV` `MYR` `MZN` `NAD` `NGN` `NIO` `NOK` `NPR` `NZD` `OMR` `PAB` `PEN` `PGK` `PHP` `PKR` `PLN` `PYG` `QAR` `RON` `RSD` `RUB` `RWF` `SAR` `SBD` `SCR` `SDG` `SEK` `SGD` `SHP` `SLL` `SOS` `SRD` `STD` `SYP` `SZL` `THB` `TJS` `TMT` `TND` `TOP` `TRY` `TTD` `TWD` `TZS` `UAH` `UGX` `USD` `UZS` `VEF` `VND` `VUV` `WST` `XAF` `XCD` `XOF` `XPF` `YER` `ZAR` `ZMK` `ZWL`

## Card Entry Type{#29}

`CardEntryType` <span class="badge badge--info">Enum</span>

An enum representing different card entry types.

**Possible values**

`UNDEFINED` `MSR` `ICC` `CNP`

## Card Scheme Name{#30}

`CardSchemeName` <span class="badge badge--info">Enum</span>

An enum representing different card brands.

**Possible values**

`MasterCard` `Visa` `Maestro` `American Express` `Discover` `JCB` `Diners` `UnionPay` `Interac`

## Verification Method{#37}

`VerificationMethod` <span class="badge badge--info">Enum</span>

An enum representing different cardholder verification methods.

**Possible values**

`UNDEFINED` `SIGNATURE` `PIN` `PIN_SIGNATURE` `FAILED` `NOT_REQUIRED` `MOBILE_PASS_CODE`

## Payment Scenario{#34}

`PaymentScenario` <span class="badge badge--info">Enum</span>

An enum representing different types of payment scenario.

**Possible values**

`UNKNOWN` `MAGSTRIPE` `MAGSTRIPECONTACTLESS` `CHIP` `CHIPCONTACTLESS` `CHIPFAILMAGSTRIPE` `MOTO`

## Status Info

`statusInfo` <span class="badge badge--info">Object</span>

A class containing information about the status of the transaction.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `cancelAllowed`  <br />*bool*   | A `boolean` allowing the user to know if the payment terminal will accept a cancel request.|
| `status`  <br />[*status*](#38)  | A `status` enum representing the status of the transaction.|
| `message`  <br />*String*   | A `string` containing the status message of the transaction.|
| `deviceStatus`  <br />[*Device Status*](#27)   | A `DeviceStatus` object containing information about the payment terminal.|


## Status{#38}

`status` <span class="badge badge--info">Enum</span>

An enum containing information about the status of a transaction.

**Possible values**

`Undefined` `Success` `InvalidData` `ProcessingError` `CommandNotAllowed` `NotInitialised` `ConnectTimeout` `ConnectError` `SendingError` `ReceivingError` `NoDataAvailable` `TransactionNotAllowed` `UnsupportedCurrency` `NoHostAvailable` `CardReaderError` `CardReadingFailed` `InvalidCard` `InputTimeout` `UserCancelled` `InvalidSignature` `WaitingForCard` `CardInserted` `ApplicationSelection` `ApplicationConfirmation` `AmountValidation` `PinInput` `ManualCardInput` `WaitingForCardRemoval` `TipInput` `SharedSecretInvalid` `SharedSecretAuth` `WaitingSignature` `WaitingHostConnect` `WaitingHostSend` `WaitingHostReceive` `WaitingHostDisconnect` `PinInputCompleted` `PosCancelled` `RequestInvalid` `CardCancelled` `CardBlocked` `RequestAuthTimeout` `RequestPaymentTimeout` `ResponseAuthTimeout` `ResponsePaymentTimeout` `IccCardSwiped` `RemoveCard` `ScannerIsNotSupported` `ScannerEvent` `BatteryTooLow` `AccountTypeSelection` `BtIsNotSupported` `PaymentCodeSelection` `PartialApproval` `AmountDueValidation` `InvalidUrl` `WaitingCustomerReceipt` `PrintingMerchantReceipt` `PrintingCustomerReceipt` `UpdateStarted` `UpdateFinished` `UpdateFailed` `UpdateProgress` `WaitingHostPostSend` `WaitingHostPostReceive` `Rebooting` `PrinterOutOfPaper` `ErrorConnectingToPrinter` `CardTapped` `ReceiptPrintSuccess` `InvalidPinLength` `OfflinePinAttempt` `OfflinePinLastAttempt` `ProcessingSignature` `CardRemoved` `TipEntered` `CardLanguagePreference` `AutomaticPrintingStarted` `CancelOperationNotAllowed` `UpdateSoftwareStarted` `UpdateSoftwareFinished` `UpdateSoftwareFailed` `UpdateSoftwareProgress` `InstallSoftwareStarted` `InstallSoftwareFinished` `InstallSoftwareFailed` `InstallSoftwareProgress` `UpdateConfigStarted` `UpdateConfigFinished` `UpdateConfigFailed` `UpdateConfigProgress` `InitialisationComplete`

## Tender Type{#35}

`TenderType` <span class="badge badge--info">Enum</span>

An enum representing different tender types.

**Possible values**

`NOT_SET` `CREDIT` `DEBIT`

## Tip Configuration{#39}

`TipConfiguration` <span class="badge badge--info">Object</span>

An object holding information about the configuration of the tipping menu for the payment terminal. When a tipping configuration is sent to the payment terminal, the card reader will prompt the cardholder with a tipping menu at the time of the transaction with the parameters that have been sent. 

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

`TransactionType` <span class="badge badge--info">Enum</span>

An enum representing different types of transactions.

**Possible values**

`UNDEFINED` `SALE` `VOID_SALE` `REFUND` `VOID_REFUND` `CANCEL_SALE` `CANCEL_REFUND` `TOKENIZE_CARD` `CARD_PAN` `CANCEL_TRX` `MOTO_SALE` `MOTO_REFUND` `MOTO_REVERSAL` `SALE_AND_TOKENIZE_CARD` `UPDATE` `PRINT_RECEIPT` 

## Metadata{#metadata}

`Metadata` <span class="badge badge--info">Object</span>

An object to store metadata.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `metadata1`  <br />*String* | An arbitrary string containing any information/data. Max length 250 characters <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|
| `metadata2`  <br />*String* | An arbitrary string containing any information/data. Max length 250 characters <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|
| `metadata3`  <br />*String* | An arbitrary string containing any information/data. Max length 250 characters <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|
| `metadata4`  <br />*String* | An arbitrary string containing any information/data. Max length 250 characters <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|
| `metadata5`  <br />*String* | An arbitrary string containing any information/data. Max length 250 characters <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|

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



## Operation Start Result

`OperationStartResult` <span class="badge badge--info">Object</span>

Object containing information about the financial operation being performed.

**Properties**

| Parameter      | Description |
| ----------- | ----------- |
| `transactionReference` <br />*String*    |  The `transactionReference` **must** be saved on your end in case you do not get back the transaction result object at the end of the transaction. The `transactionReference` will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction. A linked refund or a reversal will **not** return a `transactionReference` because the transaction reference for those types of transactions is the same as the one received for the original financial operation.|
| `transactionResult` <br />*String*    | 	Promise that will resolve/reject with [Transaction Result](javascriptobjects.md#18) object.	|
