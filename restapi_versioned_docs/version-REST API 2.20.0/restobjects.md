---
sidebar_position: 7
id: restobjects
---

# Objects


## Acquirer

`Acquirer` <span class="badge badge--info">Enum</span>


An enum representing the supported acquirers for merchant authentication.

**Possible values**

`AMEX` `BORGUN` `OMNIPAY` `POSTBRIDGE` `TSYS` `VANTIV` `SANDBOX`


## Balance

`Balance` <span class="badge badge--info">Object</span>


Balance available on the card.


**Properties**

| Property      | Description |
| ----------- | ----------- |
| `amount`   <br />*Integer*  | The balance|
| `currency`  <br />*Currency*   | The balance currency|
| `positive`  <br />*Boolean*   | Defines if the balance is positive|
| `negative`  <br />*Boolean*   | Defines if the balance is negative|

**Code example**

````json
"balance": {
    "amount": 1000,
    "currency": "EUR",
    "negative": false,
    "positive": true
  }
````

## Bypass Options


`BypassOptions` <span class="badge badge--info">Object</span>


Configuration to enable/disable signature or pin bypass.

| Property      | Description |
| ----------- | ----------- |
| `pinBypass`  <br />*Boolean*   | Enables/disables pin bypass. Bypasses PIN entry when the shopper says they don't know the PIN for the card and the merchant either knows they are the legitimate cardholder or want to give them the benefit of the doubt.       |
| `signatureBypass`  <br />*Boolean* | Enables/disables signature bypass. Whether the terminal prompts for a signature, depends on how you configure this parameter. The major card schemes (American Express, Diners, Discover, JCB, Mastercard, Visa, UnionPay) no longer require a signature; they regard it as optional for card-present transactions. This means you can speed up your checkout by skipping the signature prompt. But if your business requires it, you can still let the terminal prompt for a signature. The shopper then provides their signature on the touch screen of the terminal or on the printed transaction receipt. This depends on how you configure this setting. It is your responsibility to verify the signature of the shopper with the signature on the card or another form of identification.     |

**Code example**

````json
{
   "bypassOptions": {
       "signatureBypass": true,
       "pinBypass": true
       }
}
````

## Card Entry Type{#cardEntryType}

`CardEntryType` <span class="badge badge--info">Enum</span>
 
An enum representing different card entry types.

**Possible values**

`UNDEFINED` `MSR` `ICC` `CNP` 


## Card Scheme Name {#cardSchemeName}

`CardSchemeName` <span class="badge badge--info">Enum</span>

An enum representing different card brands.

**Possible values**

`MasterCard` `Visa` `Maestro` `American Express` `Discover` `JCB` `Diners` `UnionPay` `Interac`


## Currency

`Currency` <span class="badge badge--info">Enum</span>

An enum of currencies. 

**Possible values**

`AED` `AFN` `ALL` `AMD` `ANG` `AOA` `ARS` `AUD` `AWG` `AZN` `BAM` `BBD` `BDT` `BGN` `BHD` `BIF` `BMD` `BND` `BOB` `BOV` `BRL` `BSD` `BTN` `BWP` `BYR` `BZD` `CAD` `CDF` `CHF` `CLP` `CNY` `COP` `COU` `CRC` `CUC` `CUP` `CVE` `CZK` `DJF` `DKK` `DOP` `DZD` `EEK` `EGP` `ERN` `ETB` `EUR` `FJD` `FKP` `GBP` `GEL` `GHS` `GIP` `GMD` `GNF` `GTQ` `GYD` `HKD` `HNL` `HRK` `HTG` `HUF` `IDR` `ILS` `INR` `IQD` `IRR` `ISK` `JMD` `JOD` `JPY` `KES` `KGS` `KHR` `KMF` `KPW` `KRW` `KWD` `KYD` `KZT` `LAK` `LBP` `LKR` `LRD` `LSL` `LTL` `LVL` `LYD` `MAD` `MDL` `MKD` `MMK` `MNT` `MOP` `MUR` `MVR` `MWK` `MXN` `MXV` `MYR` `MZN` `NAD` `NGN` `NIO` `NOK` `NPR` `NZD` `OMR` `PAB` `PEN` `PGK` `PHP` `PKR` `PLN` `PYG` `QAR` `RON` `RSD` `RUB` `RWF` `SAR` `SBD` `SCR` `SDG` `SEK` `SGD` `SHP` `SLL` `SOS` `SRD` `STD` `SYP` `SZL` `THB` `TJS` `TMT` `TND` `TOP` `TRY` `TTD` `TWD` `TZS` `UAH` `UGX`      `VND` `VUV` `WST` `XAF` `XCD` `XOF` `XPF` `YER` `ZAR` `ZMK` `ZWL` `USD` `UZS` `VEF`


## Device {#deviceObject}

`Device` <span class="badge badge--info">Object</span>


An object to store information about the payment terminal in use. ALL values are **REQUIRED**.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `merchant_id_alpha` <span class="badge badge--primary">Required</span> <br />*String*    | Merchant unique identifier associated with the payment terminal.|
| `serial_number` <span class="badge badge--primary">Required</span> <br />*String*   | Payment terminal serial number.|
| `ssk` <span class="badge badge--primary">Required</span> <br />*String*   | Payment terminal shared secret key to authenticate financial operations.|
| `terminal_type` <span class="badge badge--primary">Required</span> <br />*String*   | Payment terminal name composed of two parts "serial_number - terminal_type".|

**Code example**

````json
{
       "merchant_id_alpha": "Test_Merchant",
       "serial_number": "614004878",
       "ssk": "74817EA5C63437ADE7AA3A5401",
       "terminal_type": "PAXA920"
}
````

## Device Status{#deviceStatus}

`DeviceStatus` <span class="badge badge--info">Object</span>


A class which holds the payment terminal status.


**Properties**

| Property      | Description |
| ----------- | ----------- |
| `SerialNumber`  <br />*String*   | The serial number of the payment terminal.|
| `BatteryStatus`  <br />*String*   | The battery status in percentages of the payment terminal.|
| `BatterymV`  <br />*String*   | The battery milli volts of the payment terminal.|
| `BatteryCharging`  <br />*String*   | The battery charging status of the payment terminal.|
| `ExternalPower` <br />*String*    | The status of the external power of the payment terminal.|
| `ApplicationName`   <br />*String*  | The application name used on the payment terminal.|
| `ApplicationVersion` <br />*String*    | The application version number used on the payment terminal.|
| `bluetoothName`  <br />*String*   | The bluetooth interface name used on the payment terminal.|
| `statusMessage`  <br />*String*   | Device human readable status message.|


**Code example**

````json
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
````

## Financial Status{#financialStatus}

`Financial Status` <span class="badge badge--info">Enum</span>

An enum representing different statuses of a completed transaction.

`UNDEFINED` `AUTHORISED` `DECLINED` `REFUNDED` `PROCESSED` `FAILED` `CANCELLED` `PARTIAL_APPROVAL` `IN_PROGRESS` `REFUNDED` `CAPTURED`

Description of the different financial statuses:

| Parameter      | Notes |
| ----------- | ----------- |
| `UNDEFINED` (NOT FOUND) *  <br/>  |The `UNDEFINED` (NOT FOUND) status can be returned as a response to the  [get transaction status](restendpoints.md#transactionstransactionreferencestatus) request. This status means that the transaction does not exist in the Handpoint gateway. If this status is returned within 90s of the start of a transaction, there could be a chance that the cardholder has not inserted, swiped or tapped his card yet on the terminal and the Handpoint gateway might soon receive the transaction. If the `UNDEFINED` status is returned after 90s, it means that the transaction processed has not reached the Handpoint gateway and it will NOT be charged..|
| `AUTHORISED` <br/>    | The transaction (Sale, Refund etc.) has been authorised. Consider this value as "successful". |
| `DECLINED` <br/>   | The transaction has been declined by the acquirer or issuer. |
| `PROCESSED`  <br/>   | The `printReceipt` operation was successful.|
| `FAILED`  <br/>   | Status generated due to a network error, a card which can not be read etc. As a general rule, errors are mapped to `FAILED`. This means the operation was unsuccessful and the transaction has not been charged.   |
| `CANCELLED`  <br/>   | The transaction has been cancelled. For example if the `stopCurrentTransaction` operation has been used or the cancel button on the terminal has been pressed.   |
| `PARTIAL_APPROVAL`  <br/>   | A partial approval is returned by the acquirer when funds have been partially authorized, for example if the cardholder does not have all the funds to cover the entire cost of the goods or services they are buying. The merchant can obtain the remainder of the purchase amount in another form of payment (cash, check or another card transaction for the remaining). `PARTIAL_APPROVAL` is **only** applicable to the United States market. |
| `IN_PROGRESS` *  <br/>   |  The `IN_PROGRESS` status can be returned as a response to the  [get transaction status](restendpoints.md#transactionstransactionreferencestatus) request. The transaction is known by the gateway but the result is not available yet. Please check the status again after a few seconds. |
| `REFUNDED` * <br/>   |  The `REFUNDED` status can be returned as a response to the [get transaction status](restendpoints.md#transactionstransactionreferencestatus) method. The original transaction (sale) has been refunded. |
| `CAPTURED` <br/>   | The pre-authorization has been captured and funds are being moved to the merchant account. The `CAPTURED` financial status will only be returned in case a `preAuthorizationCapture` message was used to complete a pre-authorization. Regular Sales do NOT need to be captured and will not return a `CAPTURED` financial status |

\* Financial statuses marked with an asterisk (*) can only be returned as a response to the [get transaction status](restendpoints.md#transactionstransactionreferencestatus) method.


## Merchant Auth

`MerchantAuth` <span class="badge badge--info">Object</span>

An object used to store merchant authentication parameters. This object is optional, it allows a transaction to be funded to a specific merchant account other than the default one. It is useful if a terminal is shared between multiple merchants, for example at an Hair Salon or a Doctor's office.



| Property      | Description |
| ----------- | ----------- |
| `Credential`  <br />[*Credential[]*](#merchant-auth-credential)  | Array of credentials|

**Code example**

````json
{
   "merchantAuth": [{
       "acquirer": "ACQ_DUMMY",
       "mid": "1111",
       "tid": "2222",
       "mcc": "3333",
       "externalId": "4444"
       }]
}
````

## Merchant Auth Credential

`Credential` <span class="badge badge--info">Object</span>

An object to store credentials (Acquirer, Mid, Tid, MCC and ExternalId) for merchant authentication.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `acquirer`  <br />[*Acquirer*](#acquirer)   | If present, it links this credential to the specified acquirer. Only required if more than one credential is provided.|
| `mid`  <br />*String*   | For this transaction, overrides the default MID (merchant ID) saved in the terminal configuration.|
| `tid`    <br />*String* | For this transaction, overrides the default TID (terminal ID) saved in the terminal configuration.|
| `mcc`   <br />*String*  | Merchant Category Code, overrides the default MCC saved in the terminal configuration.|
| `ExternalId`   <br />*String*  | For this transaction, the External Id will be used to lookup the credential of the merchant in the Handpoint backend and process the transaction accordingly. The External id replaces the need to pass MID/TID/MCC as credentials|

**Code example**

````json
{
    "acquirer": "ACQ_DUMMY",
    "mid": "1111",
    "tid": "2222",
    "mcc": "3333"
}

{
    "externalId": "4444"
}
````

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


## Money Remittance Options

`MoneyRemittanceOptions` <span class="badge badge--info">Object</span>

An object representing options for Mastercard money remittance transactions. The recipient's first and last name and the recipient's country code are mandatory for Mastercard transactions processed by merchants with category codes 4829 and 6540. VISA transactions do not require money remittance options to be sent.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `fullName` <span class="badge badge--primary">Required</span>  <br />*String* | First and last name of the money transfer recipient. (**a-Z, A-Z** only)|
| `countryCode` <span class="badge badge--primary">Required</span> <br />*CountryCode* | Country code of the recipient ([ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3))|

**Code example**

```json
{
    "moneyRemittanceOptions":{
            "fullName":"John Doe",
            "countryCode":"USA"
    }
}
```	

## Operation Type

`OperationType` <span class="badge badge--info">Enum</span>


An enum representing different types of operations.


Possible Values:

`sale` `refund` `refundReversal` `saleReversal` `saleAndTokenizeCard` `tokenizeCard` `printReceipt` `cardPan` `pingDevice` `stopCurrentTransaction` `moToSale` `moToRefund` `moToReversal` `moToPreAuthorization` `preAuthorization` `preAuthorizationIncrease` `preAuthorizationCapture` `preAuthorizationReversal`



## Operation Types Description

`OperationTypesDescription`


| Parameter      | Notes |
| ----------- | ----------- |
| `sale`   <br />*String*  | Sends a sale transaction to the payment terminal. This is the most basic operation used to withdraw funds from the cardholder's bank account. |
| `refund` <br />*String*    | Sends a refund transaction to the payment terminal. This operation moves funds from the merchant account to the cardholder´s credit card. For Interac (Canadian Debit Network), refunds can only be processed until Interac closes the batch of transactions at night. |
| `refundReversal` <br />*String*    | A refund reversal, also called refund VOID, allows the merchant to reverse a previous refund operation. This operation reverts (if possible) a specific refund identified with a transaction id. |
| `saleReversal`  <br />*String*   | A sale reversal, also called sale VOID allows the merchant to reverse a previous sale operation. This operation reverts (if possible) a specific sale identified with a transaction id. |
| `saleAndTokenizeCard`  <br />*String*   | A sale operation which also returns a card token. This functionality is not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice.  |
| `tokenizeCard`  <br />*String*   | Returns a card token (representing the card number). This functionality is not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice.   |
| `printReceipt`  <br />*String*   | Print on demand functionality allowing the merchant to print any HTML formatted receipt. It is possible to print images or barcodes as well as passing directly a URL to the printReceipt function. A bitmap can also be printed, in order to do so it needs to be rendered as an image and inserted into the html. The receipts are usually received as URLs in the transaction result from the terminal but note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats. **The format of the HTML data, stored in the URL or passed in the value of the `receipt` key, must follow this format: [HTML Print Format](https://handpoint.atlassian.net/wiki/spaces/PD/pages/1409875969/Html+Print+Format)** |
| `cardPan` <br />*String*    | A cardPan request will return the full PAN of the card being swiped, dipped or tapped. Only the PANs of whitelisted card ranges will be returned by the Handpoint systems. This operation is mostly used to be able to process funds or points from loyalty cards.    |
| `pingDevice` <br />*String*    | This operation will ping the terminal to confirm if it is ready to process transactions. `returnDeviceInfo` can be se to `true` in the body parameters to return device information like App Version, Sdk Version, Firmware Version and Battery information |
| `stopCurrentTransaction` <br />*String*    | Operation used to stop the current transaction. The transaction can only be stopped at specific stages of payment processing, for example a transaction can not be stopped when the card is being read but can be stopped when waiting for the cardholder to initially insert a card.   |
| `moToSale` <br />*String*    | Mail Order /Telephone Order (MOTO) sale. MOTO is a type of card-not-present (CNP) transaction in which services are paid and delivered via telephone, mail, fax, or internet communication. Triggering this function will prompt a card input form on the terminal for the merchant to enter the card number, expiry date and CVV of the card to be charged. MOTO has become synonymous with any financial transaction where the entity taking payment does not physically see the card used to make the purchase.  |
| `moToRefund` <br />*String*    | A MOTO refund operation moves funds from the merchant account to the cardholder´s credit card. In it's simplest form you only have to pass the amount and currency but it also accepts the original transaction id. Triggering this function will prompt a card input form on the terminal for the merchant to enter the card number, expiry date and CVV of the card to be charged. MOTO Refund is a type of card-not-present (CNP) transaction in which services are refunded via telephone, mail, fax, or internet communication. MOTO has become synonymous with any financial transaction where the entity taking payment does not physically see the card used to make the purchase or refund.  |
| `moToReversal` <br />*String*    | A MOTO reversal, also called VOID allows the user to reverse a previous MOTO sale/refund operation. This operation reverts (if possible) a specific operation identified with a transaction id. Note that transactions can only be reversed within a 24 hours timeframe or until the daily batch of transactions has been sent for submission. MOTO Reversal is a type of card-not-present (CNP) transaction used to reverse a previous MOTO Sale or MOTO Refund. |
| `moToPreAuthorization` <br />*String*    | A MOTO pre-authorization, sends a pre-authorization transaction to the payment terminal. A pre-authorization charge is a temporary hold placed on a customer’s payment card. It’s used to verify that the account is valid and has sufficient funds to cover a pending transaction. | 
| `preAuthorization` <br />*String*    | A pre-auth initiates a pre-authorization operation to the card reader. In it's simplest form you only have to pass the amount and currency but it also accepts tip configuration and a map with extra parameters. A pre-authorization charge, also known as a pre-auth or authorization hold, is a temporary hold placed on a customer's payment card. It's used to verify that the account is valid and has sufficient funds to cover a pending transaction, without actually debiting the cardholder's account upfront. |
| `preAuthorizationIncrease` <br />*String*    | This operation allows the merchant to **increase/decrease** the amount of a previously performed pre-auth operation. For example, if a tab was opened at a restaurant and the consumer is adding new orders going above the initial pre-authorized amount, it is required to increase the amount of the initial pre-authorization before capturing it. If the merchant wants to release part of a pre-auth, an increase with **negative** amount should be passed to the function.|
| `preAuthorizationCapture` <br />*String*    | A pre-authorized transaction can be captured to actually debit the cardholder's account. Depending on the merchant category code, the capture needs to happen between 7 and 31 days after the original pre-authorization. If not captured the funds will be automatically released by the issuing bank.<br/> **Please note that a pre-authorization can only be captured ONCE, multiple partial captures are not allowed**. If for some reason, the pre-authorization was captured for an incorrect amount, you can attempt to reverse the capture (does not work with all acquirers). If the capture reversal was declined, the cardholder needs to come back into the store with his card to get refunded or re-authorize the transaction. Alternatively, the cardholder can give his card details over the phone to the merchant and a MOTO pre-auth or MOTO refund can be issued. <br/>Check out the [card brand rules](restobjects.md#pre-auth-capture-card-brand-rules). |
| `preAuthorizationReversal` <br />*String*    | A **Pre-Auth/Capture Reversal** allows the user to reverse a previous pre-auth operation. This operation reverts (if possible) a specific pre-auth identified with a transaction id. A pre-authorized reversal transaction **will release the whole pre-authorized amount**, for example when renting a car, the pre-auth reversal allows the merchant to release the funds if the car was not damaged. For partial releases, please check the Pre-Auth Increase/Decrease operation. <br/> <br /> A Pre-Auth/Capture reversal can be used to reverse a capture operation as well. A capture reversal transaction **will release all the funds withheld**. Reversing a capture operation can only be done before the funds are automatically settled at night, please note that not all acquirers support reversal of captured transactions. If a capture reversal is attempted after the funds have been moved, the operation will receive a decline.<br /><br />When the capture is reverted it returns to the previous state ([CAPTURED](restobjects.md#financialStatus)  -> [AUTHORISED](restobjects.md#financialStatus)).  |


### Pre-Auth Capture Card Brand Rules

Card schemes set specific rules around which businesses are able to use pre-auth transactions. Eligibility is determined based on the Merchant Category Code (MCC), together with the card scheme.

Card schemes have their own set of rules on authorisation expiry. Capturing a transaction after the scheme expiry time increases the risk of a failed capture, and may also increase the interchange and/or scheme fees charged for the transaction. Card schemes can also expire an authorisation before or after the official scheme expiry period has been reached. You can often capture a payment successfully after an authorisation has expired. Depending on the card scheme, there can be a fee for late capture, and an increase in interchange fee. The risk of cardholder chargebacks increase as well.


| Scheme | MCC |   
| ----------- | ----------- | 
| Mastercard | All MCCs except 5542 |
| Visa | All MCCs except 5542 |
| Discover | 3351-3441, 3501-3999, 4111, 4112, 4121, 4131, 4411, 4457, 5499, 5812, 5813, 7011, 7033, 7996, 7394, 7512, 7513, 7519, 7999 |
| American Express | All MCCs except 5542 |

**VISA rules**

| MCC | Segment | Authorization timeframe | Amount tolerance (captured amount above pre-authorized amount) |  
| ----------- | ----------- | ----------- |----------- |
| 3501-3999, 7011 | Lodging | 31 days | 15% |
| 3351-3500, 7512 | Car Rental | 31 days | 15% |
| 4411 | Steamship and Cruise Lines | 31 days | 15% |
| 7513 | Truck Rentals | 7 days | 15% |
| 7033 | Trailer Parks and Campgrounds | 7 days | 15% |
| 7519 | Motor Home and Recreational Vehicle Rentals | 7 days | 15% |
| 5552 | Electric Vehicle Charging | 7 days | 15% |
| 7523 | Parking and Garages | 7 days | 15% |
| 7394 | Equipment, Tool, Furniture and Appliance Rental | 7 days | none |
| 7999 | Recreation Services | 7 days | none |
| 7996 | Amusement Parks, Carnivals, Circuses, Fortune Tellers | 7 days | none |
| 5599 | Miscellaneous Automotive, Aircraft, and Farm Equipment Dealers | 7 days | none |
| 4457 | Boat Rentals and Leasing | 7 days | none  |
| 5571 | Motorcycle Shops and Dealers | 7 days  | none |
| 4111 | Local and Suburban Commuter, Passenger Transportation, including Ferries | 7 days | 25 USD (or equivalent amount in local currency)  |
| 4112 | Passenger Railways | 7 days | 25 USD (or equivalent amount in local currency) |
| 4131 | Bus Lines | 7 days | 25 USD (or equivalent amount in local currency) |
| 5812 | Eating Places and Restaurants | Same day | 20% |
| 5813 | Drinking Places, Bars, Taverns, Cocktail Lounges, Nightclubs, Discotheques | Same day | 20% |
| 4121 | Taxicabs and Limousines (Card-Absent Environment only) | Same day | 20% |

**MASTERCARD rules**

| MCC | Authorization timeframe | Amount tolerance (captured amount above pre-authorized amount) |  
| ----------- | ----------- | ----------- |
| All MCCs | 30 days | 20% |

**Maestro rules**

| MCC | Segment | Authorization timeframe | Amount tolerance (captured amount above pre-authorized amount) |  
| ----------- | ----------- | ----------- |----------- |
| 5812 | Eating Places and Restaurants | 7 days | 20% |
| 5814 | Fast Food Restaurants | 7 days | 20% |

**AMEX rules** 

| MCC | Authorization timeframe |
| ----------- | ----------- | 
| All MCCs | 7 days |
Note: Pre-Auth with AMEX is only available in the United States/Canada with the processor TSYS.

**Discover rules**  

| MCC | Authorization timeframe |
| ----------- | ----------- | 
| Car Rental, Hotel/Lodging MCCs | 30 days |
| All MCCs except Car Rental and Hotel/Lodging  | 10 days |

**Diners rules**  

| MCC | Debit/credit | Authorization timeframe |
| ----------- | ----------- | ----------- | 
| Car Rental, Hotel/Lodging MCCs | All | 30 days |
| All MCCs except Car Rental and Hotel/Lodging  | Credit | 30 days |
| All MCCs except Car Rental and Hotel/Lodging  | Debit | 7 days |


**JCB rules**

| MCC | Authorization timeframe |
| ----------- | ----------- | 
| Hotel and Car rental | Time of stay/rental |
| All MCCs except Hotel and Car rental | 1 year |


## Payment Scenario{#paymentScenario}


`PaymentScenario` <span class="badge badge--info">Enum</span>


An enum representing different types of payment scenario.

**Possible values**

`UNKNOWN` `MAGSTRIPE` `MAGSTRIPECONTACTLESS` `CHIP` `CHIPCONTACTLESS` `CHIPFAILMAGSTRIPE` `MOTO`


## Status

`status` <span class="badge badge--info">Enum</span>


An enum containing information about the status of a transaction.

**Possible values**

`Undefined` `Success` `InvalidData` `ProcessingError` `CommandNotAllowed` `NotInitialised` `ConnectTimeout` `ConnectError` `SendingError` `ReceivingError` `NoDataAvailable` `TransactionNotAllowed` `UnsupportedCurrency` `NoHostAvailable` `CardReaderError` `CardReadingFailed` `InvalidCard` `InputTimeout` `UserCancelled` `InvalidSignature` `WaitingForCard` `CardInserted` `ApplicationSelection` `ApplicationConfirmation` `AmountValidation` `PinInput` `ManualCardInput` `WaitingForCardRemoval` `TipInput` `SharedSecretInvalid` `SharedSecretAuth` `WaitingSignature` `WaitingHostConnect` `WaitingHostSend` `WaitingHostReceive` `WaitingHostDisconnect` `PinInputCompleted` `PosCancelled` `RequestInvalid` `CardCancelled` `CardBlocked` `RequestAuthTimeout` `RequestPaymentTimeout` `ResponseAuthTimeout` `ResponsePaymentTimeout` `IccCardSwiped` `RemoveCard` `ScannerIsNotSupported` `ScannerEvent` `BatteryTooLow` `AccountTypeSelection` `BtIsNotSupported` `PaymentCodeSelection` `PartialApproval` `AmountDueValidation` `InvalidUrl` `WaitingCustomerReceipt` `PrintingMerchantReceipt` `PrintingCustomerReceipt` `UpdateStarted` `UpdateFinished` `UpdateFailed` `UpdateProgress` `WaitingHostPostSend` `WaitingHostPostReceive` `Rebooting` `PrinterOutOfPaper` `ErrorConnectingToPrinter` `CardTapped` `ReceiptPrintSuccess` `InvalidPinLength` `OfflinePinAttempt` `OfflinePinLastAttempt` `ProcessingSignature` `CardRemoved` `TipEntered` `CardLanguagePreference` `AutomaticPrintingStarted` `CancelOperationNotAllowed` `UpdateSoftwareStarted` `UpdateSoftwareFinished` `UpdateSoftwareFailed` `UpdateSoftwareProgress` `InstallSoftwareStarted` `InstallSoftwareFinished` `InstallSoftwareFailed` `InstallSoftwareProgress` `UpdateConfigStarted` `UpdateConfigFinished` `UpdateConfigFailed` `UpdateConfigProgress` `InitialisationComplete`


## Status Info

`StatusInfo` <span class="badge badge--info">Object</span>


A class containing information about the status of the transaction.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `cancelAllowed`  <br />*boolean*   | A `boolean` Letting the integrator know if the terminal will accept a stop transaction request.)       |
| `status` <br />[*Status*](#status)  | A `Status` enum representing the status of the transaction.       |
| `message`  <br />*String*    | A `String` containing the status message of the transaction.       |
| `deviceStatus` <br />[*DeviceStatus*](#device-status) | A `DeviceStatus` object containing information about the payment terminal.        |


## Tender Type{#tenderType}

`TenderType` <span class="badge badge--info">Enum</span>


An enum representing different tender types.

Possible values

`NOT_SET` `CREDIT` `DEBIT`


## Tip Adjustment

`TipAdjustment` <span class="badge badge--info">Object</span>


| Property      | Description |
| ----------- | ----------- |
| `amount`  <br />*Biginteger*   | Exact amount of the tip, including decimal digits. Currency will be extracted from the original transaction.      |

**Code example**

````json
{
    "amount": 10.25
}

{
    "amount": 20
}
````

## Tip Configuration

`TipConfiguration` <span class="badge badge--info">Object</span>


| Property      | Description |
| ----------- | ----------- |
| `baseAmount`  <br />*String*   | Base amount used to calculate the tip - in the minor unit of currency (f.ex. 1000 is 10.00 GBP). If no base amount is defined, the transaction amount is used as base amount.       |
| `headerName` <br />*String*  | Name of the tipping menu appearing on the terminal. Default: Tip      |
| `tipPercentages` <span class="badge badge--primary">Required</span> <br />*List*    | List of percentages used to calculate the tip amount.    |
| `enterAmountEnabled` <br />*boolean* |Flag used to enable the cardholder to manually enter the tip amount. Default: true       |
| `skipEnabled`   <br />*Boolean*   | Flag used to enable the cardholder to skip the tipping step. Default: true       |
| `footer`  <br />*String*    | Footer note which will appear on the tipping menu. Default: Empty string       |

**Code example**

````json
{
    "tipConfiguration":{
       "baseAmount":"2000",
       "headerName":"",
       "tipPercentages":[
          5,
          10,
          15,
          20,
          25
       ],
       "enterAmountEnabled":true,
       "skipEnabled":false,
       "footer":"Thank you!!! ;)"
    }
 }
````

## Transaction Request Object {#transactionRequest}

`TransactionRequest` <span class="badge badge--info">Object</span>


An object to store information about the request sent to the payment terminal.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `operation` <span class="badge badge--primary">Required</span>  <br />[*OperationTypesDescription*](#operation-types-description)   | The type of operation to be performed.   |
| `serial_number` <span class="badge badge--primary">Required</span> <br />*String*   | Payment terminal serial number.     |
| `terminal_type` <span class="badge badge--primary">Required</span>  <br />*String*    | Type of terminal.  |
| `callbackUrl`<br />*String*   | If used,this is the url the payment terminal will use to send the Transaction Result once the operation is complete. All 2XXs http response codes from the callbackUrl (your server) are valid to notify the terminal of a successful delivery of the result. If the callbackUrl is not present, the device will send back the transaction result to Handpoint's REST-API and results can be retrieved using the Transaction Result Retrieval endpoint.     |
| `token`  <br />*String*    | If used, the token is a unique value per operation generated by your software and used to authenticate the transaction result sent through the callbackUrl against your server. The token will be injected in the request header with key value 'AUTH-TOKEN'. **REQUIRED** when the callbackUrl is present.       |
| `customerReference` <br />*String*   | Transaction identifier provided by your software. The customerReference sent in the TransactionRequest object is echoed in the TransactionResult. In case the transaction outcome is unknown (network issue or other) and for some unknown reason your software did not receive any result. The customerReference can be used to query the Handpoint Transaction API and check if a specific transaction was approved or not: https://txnfeedapi.handpoint.com/#api-Transactions-getTxnByCustomerReference. |
| `amount` <br />*String* | Amount of the transaction - in the minor unit of currency (f.ex. 1000 is 10.00 GBP). **REQUIRED** for operations: sale, refund, refundReversal, saleReversal and saleAndTokenizeCard.    |
| `currency`  <br />[*Currency*](#currency)   | The currency of the transaction. **REQUIRED** for operations: sale, refund, refundReversal, saleReversal and saleAndTokenizeCard.        |
| `originalTransactionId`  <br />*String*   | The transaction id of the original operation to be reversed. Only required to reverse or refund a transaction and for operations linked to a pre-authorisation. **REQUIRED** for operations: refundReversal, saleReversal, LINKED refunds, preAuthorizationIncrease, preAuthorizationCapture and preAuthorizationReversal.       |
| `receipt` <br />*String*  | HTML receipt, following the format defined in Html Print Format, or url to locate the receipt, it can be found in the response of a Transaction Request, in the fields merchantReceipt or customerReceipt. **REQUIRED** for operations: printReceipt. The receipts are usually received as URLs in the transaction result from the terminal but note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats. |
| `tipConfiguration`  <br />[*TipConfiguration*](#tip-configuration)     | Configuration to enable tipping. At the time of sale, a tip menu will be shown to the cardholder with the predefined configuration. The tip configuration is optional and can only be used with the sale and saleAndTokenize operations.       |
| `bypassOptions` <br />[*ByPassOptions*](#bypass-options)   | Configuration to enable the possibility of bypassing signature or pin. The bypass configuration is optional and can only be used with the sale, saleAndTokenize and refund operations.        |
| `merchantAuth`   <br />[*MerchantAuth*](#merchant-auth)   |Object used to store merchant authentication. it allows a transaction to be funded to a specific merchant account other than the default one. It is useful if a terminal is shared between multiple merchants, for example at an Hair Salon or a Doctor's office. The merchantAuth is optional and can only be used with the sale, saleAndTokenize and refund operations. For reversals, the credentials passed for the original sale will be automatically looked up by Handpoint and used to process the reversal.       |
| `duplicate_check`   <br />*Boolean*   |Used to disable the duplicate payment check functionality. When a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the second charge. This menu will automatically be prompted on the payment terminal if a suspicious charge is detected. We are only prompting the duplicate check menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe.<br></br><br></br>  ** The duplicate_check functionality is available for the following transaction types:** Sale, Sale and Tokenize, Sale Reversal, Refund, Refund Reversal, MoTo Sale, MoTo Refund and MoTo Reversal.<br /> <br></br>The `duplicate_check` service is **enabled to "true" by default**, if you want to disable it, you must explicitly pass the `duplicate_check` flag as part of the transaction request with the value "false".|
| `metadata`  <br />[*Metadata*](#metadata)   | Object used to store metadata, this data will be echoed in the transaction result. <br /> Valid characters: `a-z A-Z 0-9 - ( ) @ : % _ \ + . ~ # ? & / = { } " ' ,`|
| `transactionReference`  <br />*String*   | The `transactionReference` is a unique ([UUID v4](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random))) that you need to generate and add to every transaction request. In case something goes wrong and you do not receive a transaction result from the terminal, you will be able to query the Handpoint gateway directly with this id by using the [get transaction status](restendpoints.md#transactionstransactionreferencestatus) endpoint.|
| `MoneyRemittanceOptions`  <br />[*MoneyRemittanceOptions*](restobjects.md#money-remittance-options)   | An object representing options for Mastercard money remittance transactions. The supported operations are Sale, Sale & Tokenize, Refund, Linked Refunds, Reversals, MoTo Sale, MoTo Refund |
| `tokenize`  <br />*Boolean*   | Used to enable the tokenization flow in Tokenized Payments Operationss. See [Android SDK 7.1009.5](/android/androidreleasenotes#7.1009.5) and [Tokenized Payments Operations](/android/androidtransactions#cloudTokenizedPaymentsOperations) for detailed information.|

**Code example**

````json
// Result will be served to result.com
{
       "operation": "sale",
       "amount": "10000",
       "currency": "EUR",
       "terminal_type": "PAXA920",
       "serial_number": "1547854757",
       "customerReference": "storeSale12548",
       "callbackUrl": "https://result.com",
       "token": "123456789",
       "transactionReference": "2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f",
       "tipConfiguration": {
              "baseAmount": "2000",
              "tipPercentages": [5,10,15,20,25],
              "enterAmountEnabled": true,
              "skipEnabled": false,
              "footer": "Thank you!!! ;)"
           },
       "bypassOptions": {
              "signatureBypass": true,
              "pinBypass": true
           },
       "merchantAuth": [{
              "acquirer": "ACQ_DUMMY",
              "mid": "1111",
              "tid": "2222",
              "mcc": "3333",
              "externalId": "4444"
           }],
        "duplicate_check": true,
        "metadata": {
            "metadata1": "data1",
            "metadata2": "data2",
            "metadata3": "data3",
            "metadata4": "data4",
            "metadata5": "data5"
            },
        "moneyRemittanceOptions":{
            "fullName":"John Doe",
            "countryCode":"USA"
            }  
}

// Result will be served back to Handpoint's REST-API
{
       "operation": "sale",
       "amount": "10000",
       "currency": "EUR",
       "terminal_type": "PAXA920",
       "serial_number": "1547854757",
       "customerReference": "storeSale12548",
       "transactionReference": "2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f",
       "tipConfiguration": {
              "baseAmount": "2000",
              "tipPercentages": [5,10,15,20,25],
              "enterAmountEnabled": true,
              "skipEnabled": false,
              "footer": "Thank you!!! ;)"
           },
       "bypassOptions": {
              "signatureBypass": true,
              "pinBypass": true
           },
       "merchantAuth": [{
              "acquirer": "ACQ_DUMMY",
              "mid": "1111",
              "tid": "2222",
              "mcc": "3333",
              "externalId": "4444"
           }],
        "duplicate_check": true,
        "metadata": {
            "metadata1": "data1",
            "metadata2": "data2",
            "metadata3": "data3",
            "metadata4": "data4",
            "metadata5": "data5"
        },
        "moneyRemittanceOptions":{
            "fullName":"John Doe",
            "countryCode":"USA"
    }   
}
````


## Transaction Result Object

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
| `cardEntryType`  <br />[*CardEntryType*](#cardEntryType)   | Method used by the terminal to read the card|
| `cardLanguagePreference`  <br />*String	*   | Preferred language of the card (EMV tag 5F2D)|
| `cardSchemeName`  <br />[*CardSchemeName*](#cardSchemeName)   | The brand of the card|
| `cardToken`  <br />*String	*   | Token representing the PAN of the card|
| `chipTransactionReport`  <br />*String	*   | 	Full report of the card EMV parameters|
| `currency`  <br />[*Currency*](#currency)   | The currency used for the transaction|
| `customerReceipt`  <br />*String	*   | 	The receipts are usually received as URLs in the transaction result from the terminal but note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats.|
| `customerReference`  <br />*String	*   | If a customerReference was provided as an optional parameter in the transaction request it is echoed unaltered in this field|
| `deviceStatus`  <br />[*DeviceStatus*](#deviceStatus)  | Status of the payment terminal|
| `dueAmount`  <br />*BigInteger	*   | In case of a partial approval for the transaction, this field contains the amount which remains to be paid. Partial approval support is only required by the card brands in the United States|
| `efttimestamp`  <br />*BigInteger	*   | Time of the transaction (based on the date and time of the payment terminal)|
| `efttransactionID`  <br />*String	*   | Handpoint unique identifier for a transaction, this id is the one to be used for a transaction to be reversed.|
| `errorMessage`  <br />*String	*   | Detailed reason for the transaction error|
| `expiryDateMMYY`  <br />*String	*   | Expiry date of the card used for the operation|
| `finStatus`  <br />[*FinancialStatus*](#financialStatus)   | The financial status contains the outcome of the transaction. For example "AUTHORISED" or "DECLINED"|
| `iad`  <br />*String	*   |EMV Issuer Application Data (EMV tag 9F10)|
| `issuerResponseCode`  <br />*String	*   | Response code from the card issuer|
| `maskedCardNumber`  <br />*String	*   | Masked card number of the card used for the operation|
| `merchantAddress`  <br />*String	*   | Merchant Address|
| `merchantName`  <br />*String	*   | Merchant Name|
| `merchantReceipt`  <br />*String	*   | The receipts are usually received as URLs in the transaction result from the terminal but note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats.|
| `metadata`  <br />[*Metadata*](#metadata)   | If metadata was provided as an optional parameter in the transaction request it is echoed unaltered in this field|
| `mid`  <br />*String	*   | Merchant Identifier|
| `originalEFTTransactionID`  <br />*String	*   | In case the transaction type is a reversal, this field will contain the identifier of the original transaction being reversed|
| `paymentScenario`  <br />[*PaymentScenario*](#paymentScenario)   | Indicates the card entry mode|
| `recoveredTransaction`  <br />*Boolean	*   | This flag is set to true if the transaction result is sent through the transaction recovery logic explained in the Recovey Section, false otherwise|
| `requestedAmount`  <br />*BigInteger	*   | The requested amount is the transaction amount sent to the terminal|
| `rrn`  <br />*String	*   | Retrieval Reference Number, unique number assigned by the acquirer|
| `signatureUrl`  <br />*String	*   | If a digital signature is required, this is the URL containing the image of the captured signature. In case the signature can not be updated to the Handpoint servers and an URL is not generated, the terminal will send back the image binary in base64 format to your software. It is important to be able to support both the URL and the image binary format.|
| `statusMessage`  <br />*String	*   | The status of the transaction, for example "Waiting for pin"|
| `tenderType`  <br />[*TenderType*](#tenderType)   | Transaction tender type (credit / debit)|
| `tid`  <br />*String	*   | Terminal Identifier|
| `tipAmount`  <br />*BigInteger	*   | Tip amount, if any, in the minor unit of currency (f.ex. 1000 is 10.00 GBP)|
| `tipPercentage`  <br />*Double	*   | If tipping is enabled, this field will return the tip percentage added on top of the base amount|
| `totalAmount`  <br />*BigInteger	*   | The total amount is the amount the card was charged for. It is possible that the total amount is not the same as the requested amount since an additional fee can be added, with the customer's approval, via the tipping functionality|
| `transactionID`  <br />*String	*   | The transaction id is a terminal internal counter incremented for each transaction|
| `tsi`  <br />*String	*   | EMV Transaction Status Information (EMV tag 9B)|
| `tvr`  <br />*String	*   | EMV Transaction Verification Results (EMV tag 95)|
| `type`  <br />[*TransactionType*](#transactionType)   | 	The type of transaction initiated, for example "SALE"|
| `unMaskedPan`  <br />*String	*   | Unmasked PAN, only received if the card is a non-payment card (loyalty)|
| `verificationMethod`  <br />[*VerificationMethod*](#verificationMethod)   | cardholder verification method, for example "PIN"|
| `multiLanguageStatusMessages`  <br />*Map	*   | `map` containing the status message in a human readable format for all the supported locales.|
| `multiLanguageErrorMessages`  <br />*Map	*   | `map` containing the error message in a human readable format for all the supported locales.|
| `cardHolderName`  <br />*String	*   | Name of the cardholder|
| `transactionReference`  <br />*String*   | The unique UUID associated with the transaction, it can be used to query the [get transaction status](restendpoints.md#transactionstransactionreferencestatus)  endpoint.|

**Code example**

````json
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
      "metadata1": "data1",
      "metadata2": "data2",
      "metadata3": "data3",
      "metadata4": "data4",
      "metadata5": "data5"
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
  "cardHolderName": "Mr/Mrs card holder full name",
  "transactionReference": "3e665342-a95b-49c1-b6fe-b3f102305a76"
}

````


## Transaction Type{#transactionType}

`TransactionType` <span class="badge badge--info">Enum</span>

An enum representing different types of transactions.

**Possible values**

`UNDEFINED` `SALE` `VOID_SALE` `REFUND` `VOID_REFUND` `CANCEL_SALE` `CANCEL_REFUND` `TOKENIZE_CARD` `CARD_PAN` `CANCEL_TRX` `MOTO_SALE` `MOTO_REFUND` `MOTO_REVERSAL`



## Verification Method{#verificationMethod}

`VerificationMethod` <span class="badge badge--info">Enum</span>

An enum representing the possible verification methods used during the transaction.

Possible values:

`UNDEFINED` `SIGNATURE` `PIN` `PIN_SIGNATURE` `FAILED` `NOT_REQUIRED` `MOBILE_PASS_CODE`
