---
sidebar_position: 1
---

# REST API


## Introduction
Introducing the Revolutionary Handpoint REST API: Seamlessly integrate card present payments into any software

Use the Handpoint REST API to integrate leading smartpos terminals with your software. The Handpoint REST API is a simple REST interface that acts as a bridge between **your software and the payment terminal** , while shielding your software from card data. It is seamless to integrate, keeps all card data out of your system, works with every platform, and lets you use the best Android terminals on the market.

Complete your integration in just three steps: Initiate the interface, choose the terminal, and start the sale. It is as simple as it sounds. The only thing you need is a valid API key to authenticate against the API. You even get a list of terminals to which you can connect. Simply execute the financial operation, and within seconds you’ll get back the transaction result and receipts in your software. The Handpoint REST API seamlessly starts and manages the entire P2PE transaction with the payment terminal, minimizing hassle for you and maximizing reliability, security, and control.


## Release Notes

### 2.4.0

**Features:**

- Transaction result retrieval through API endpoint GET .../transaction-result/{transactionResultId}


## API Overview


:::tip

First of all, ensure you are using the correct environment by reviewing the type of card reader you have. To check if you should be using a production or development environment, see ["How do I know what type of card reader do I have?"](https://hndpt.co/39utmzi) and select the corresponding URL, as you see below:

  **For production terminals the endpoint to target is:** https://cloud.handpoint.com/

  **For debug terminals the endpoint to target is:** https://cloud.handpoint.io/

:::


The following flow shows the interactions between your application and the Handpoint REST API:

**1)** Send a POST transaction request to the REST API.

**2)** The API will validate the request body and, if it is correct, will respond back to your software with the response code 202 ("Accepted”) to confirm that the data has been correctly forwarded to the payment terminal.

**3)** The validated transaction request object is forwarded to the terminal and the transaction starts.

**4.1)** In case the original transaction request contains a callbackUrl and token, the transaction result will be sent back from the terminal to your software by using the callbackUrl. The terminal will be authenticated against your endpoint by setting the authentication token of the transaction request in the custom header ( "AUTH-TOKEN"). All 2XXs http response codes from the callbackUrl are considered as valid by the terminal to acknowledge of a successful delivery of the transaction result.

:::caution

**4.2)** **IMPORTANT** Feature only compatible with Handpoint App v3.3.0 and above. In case the original transaction request does not ontain a callbackUrl and token, the transaction result is sent back from the terminal to Handpoint's REST-API. The result can then be retrieved from the endpoint GET https://cloud.handpoint.[com//io]/transaction-result/{transactionResultId} where the transactionResultId (also called cloud transaction identifier) is found in the answer from the initial POST[1] to the REST-API (see step **2**)).

:::




![Sandbox logo](/img/RestApiDiagram)

## Configuration

Just request a valid API key from Handpoint to start using API. Initialize your interface with the API key and receive the list of devices available to perform a financial operation. **Fast and easy**.

## Sandbox

Get started today with our sandbox. You can generate sample transactions and test the experience right in your browser. Check it at: http://www.handpoint.com/lab/cloudpos. A payment terminal is required to start testing.

This is the initial setup screen:

![Sandbox logo](/img/Sandbox1.png)


To get started, select the target environment where you are going to operate (Sandbox/Production). If the user has any doubts selecting the correct environment, click on "*How do I know what type of card reader do I have?" and you will be redirected to an explanation page.

![Sandbox logo](/img/Sandbox2.png)

Next, enter your Handpoint API key in the box labeled "INSERT API KEY” and click the check button. This will automatically populate the “SELECT A DEVICE” drop down with the list of devices that are assigned to you. If the API key is not valid, an error message will appear in the “RESPONSES” section of the sandbox.

![Sandbox logo](/img/Sandbox3.png)

Before you can begin any further testing, you first must select the device that you will be using. In the “SELECT A DEVICE” list, you will see both the real terminals assigned to you, as well as simulated devices (listed by serial number). You can choose any device to test with. Serial numbers for the simulated devices always have this format: XXXX | 999999xxxxx. Choose a simulated terminal if you do not have access to a real device or if you just want to see simulated behavior. You can refresh the “SELECT A DEVICE” list by clicking the refresh button on the right side of the “SELECT A DEVICE” box. If you are already connected to a device, you can disconnect from it using the “Disconnect” button or trigger a software and configuration update operation by using the "Update" button.

![Sandbox logo](/img/Sandbox3.png)

Once you have selected a device, the “*SELECT A DEVICE*” box will be disabled, and the rest of the sandbox will be enabled. With your selected device, you can simulate a number of operations, including:

* sale
*  sale and tokenize
*  refund
*  tokenize card
*  reverse sale transactions
*  reverse refund transactions

In order to reverse a transaction, a transaction id is needed, this id is available in the transaction result data coming from a previous sale or refund operation. Each transaction result will appear in the RESPONSES panel, on the right side of the screen.

With each transaction result you will be able to perform several operations:

* View and print the merchant receipt
* View and print the customer receipt
* Reverse the transaction
* Copy the transaction result data; it is the raw transaction result, as received by the application from the device

![Sandbox logo](/img/Sandbox5.png)


## Processing Payments Simulation

Test transactions are conducted against a test server which is designed to simulate the behavior of an acquiring bank without moving any funds. As with every Handpoint terminal, sensitive card data is fully encrypted.

Use trigger amounts to generate some specific responses from our server:

**Sale amounts**

| Amount      | Behaviour |
| ----------- | ----------- |
| 37.79      | Issuer response code = 01 (Refer to issuer)       |
| 37.84      | Issuer response code = 05 (Not authorized)        |
| 37.93      | Issuer response code = 04 (Pick up card)       |
| 37.57      | Request is partially approved        |
| 37.68      | Request timeout       |


Any other values will behave as normal authorized operations.



## Endpoints


### /initialize



`Initialize`

Initializes the REST API client and returns the list of payment terminals associated with the merchant account


**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud  *`   <br />*string*  | Request Header used to identify the merchant       |


Returns


| Devices      |
| ----------- |
| List of Device objects     |


**Code Example**


```shell
Operation executed using CLI tool CURL:
REQUEST:
  curl -X GET \
   -H "ApiKeyCLoud: MeRcHaNt-ApIkEy" \
   "https://cloud.handpoint.com/initialize"

RESPONSE:
 Code 200 -> Body:
  [
    {
      "merchant_id_alpha": "merchantID",
      "serial_number": "082104578",
      "customerReference": "op15248",
      "terminal_type": "PAXA920"
    }
  ]
```






### /transactions



`Transactions`

POST endpoint used to execute a financial operation


**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud * `  <br />*string*    | Request Header used to identify the merchant       |
| `Request Body: Transaction Request *`  <br />*TransactionRequest*    | Object containing the transaction information  |


**Returns**


| Response      | Response Code |
| ----------- | ----------- |
| **Transaction Accepted** | Response code 202 is received if the transaction has been successfully sent to the terminal.       |
| **BadRequest DeviceIsBusy Error** | Response code 400 with error 1001. Wait until the end of the current transaction to be able to execute the next operation      |
| **BadRequest DeviceNotResponding Error** | Response code 400 with error 1002. The device is not responding, verify the device is online and retry in a few seconds.      |
| **BadRequest CancelOperationNotAllowed Error** | Response code 400 with error 1003. Operation type stopCurrentTransaction cannot be executed because the terminal is processing the transaction and it can not be stopped.  |

**Code Example**


```shell
Operation executed using CLI tool CURL:
REQUEST:
  curl -X GET \
   -H "ApiKeyCLoud: MeRcHaNt-ApIkEy" \
   "https://cloud.handpoint.com/initialize"

RESPONSE:
 Code 200 -> Body:
  [
    {
      "merchant_id_alpha": "merchantID",
      "serial_number": "082104578",
      "customerReference": "op15248",
      "terminal_type": "PAXA920"
    }
  ]
```


### /transaction-result/{transactionResultId}


`TransactionResultRetrieval`

GET endpoint used to retrieve transaction results. **IMPORTANT** Feature only compatible with Handpoint App v3.3.0 and above.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud * ` <br />*string*     | Request Header used to identify the merchant       |
| `Path parameter: transactionResultId *`  <br />*string*    | Custom transaction result Id provided in the response when a Transaction was triggered without callbackUrl.  |


**Returns**


| Response      | Response Code |
| ----------- | ----------- |
| **No Content** | Response code 204. transactionResultId found in the database but there is no transaction result associated yet. This status will be retrieved while the transaction is ongoing and the transaction result has not been delivered yet.     |
| **OK** | Response code 200 + Transaction Result. transactionResultId found in the database and the associated Transaction Result object      |
| **Not Found** | Response code 404. transactionResultId NOT found in the database      |






### Transaction Result Recovery


`TransactionResultRecovery`

 The terminal has a transaction recovery loop to automatically send back the pending TransactionResult to the callback URL in case it becomes unreachable (network issue or server down).

 For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the server is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc…).
 The recovery loop is reinitialized every time the Handpoint application is restarted or the startRecovery method is triggered. The Transaction Result received through the transaction recovery loop will have the **recoveredTransaction** field set to **true**.

 All 2XXs http response codes from the callbackUrl are valid to notify the device of a successful delivery of the result.

 **Returns**

 Transaction Result

| Transaction Result      | 
| ----------- |
| The Transaction Result is delivered to the callback Url from the Transaction Request.   |




## Objects



### Operation Type

`OperationType`

An enum representing different types of transactions.


Possible Values:

`sale` `refund` `refundReversal` `saleReversal` `saleAndTokenizeCard` `tokenizeCard` `printReceipt` `update` `cardPan` `pingDevice` `stopCurrentTransaction`



### Operation Types Description

`OperationTypesDescription`


| Parameter      | Notes |
| ----------- | ----------- |
| `sale`     | A sale initiates a payment operation to the card reader     |
| `refund`     | A refund operation moves funds from the merchant account to the cardholder´s credit card. For Interac (Canadian Debit Network), refunds can only be processed until Interac closes the batch of transactions at night  |
| `refundReversal`     | A refund reversal, also called refund VOID allows the merchant to reverse a previous refund operation. This operation reverts (if possible) a specific refund identified with a transaction id    |
| `saleReversal`     | A sale reversal, also called sale VOID allows the user to reverse a previous sale operation. This operation reverts (if possible) a specific sale identified with a transaction id     |
| `saleAndTokenizeCard`     | A sale operation which also returns a card token (not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice)     |
| `tokenizeCard`     | Returns a card token (not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice)     |
| `printReceipt`     | This method sends the merchant or customer receipt to the terminal for printing. The format of the HTML data, passed to the method or stored in the url, must follow this format: [Html Print Format](https://handpoint.atlassian.net/wiki/spaces/PD/pages/1409875969/Html+Print+Format)     |
| `update`     | The update operation checks for new software or configuration updates and initiates a download if required.    |
| `cardPan`     | A cardPan request will return the full PAN of the card being swiped, dipped or tapped. Only the PANs of whitelisted card ranges will be returned by the Handpoint systems. This operation is mostly used to be able to process funds or points from loyalty cards.     |
| `pingDevice`     | This operation will ping the terminal to confirm if it is online.     |
| `stopCurrentTransaction`     | Operation used to stop the current transaction. The transaction can only be stopped at specific stages of a payment processing, for example a transaction can not be stopped when the card is being read but can be stopped when waiting for the cardholder to initially insert a card.     |


### Financial Status

`Financial Status`:

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



### Transaction Result Object

`TransactionResult`

An object holding information about the result of a transaction.

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
  "cardHolderName": "Mr/Mrs card holder full name"
}

````



An object holding information about the result of a transaction.

| Property      | Description |
| ----------- | ----------- |
| `aid`     | Application Identifier of the card (EMV tag 9F06)       |
| `arc`   | EMV Authorisation Response Code (EMV tag 8A)        |
| `authorisationCode`      | Acquirer response code       |
| `balance`  | Balance available on the card        |
| `budgetNumber`      | Used to split payments over a period of months       |
| `cardEntryType`   | Method used by the terminal to read the card        |
| `cardLanguagePreference`| Preferred language of the card (EMV tag 5F2D)       |
| `cardSchemeName`   | The brand of the card        |
| `cardToken`      | Token representing the PAN of the card       |
| `chipTransactionReport`   | Full report of the card EMV parameters        |
| `currency`      | The currency used for the transaction       |
| `customerReceipt`   | A URL containing the customer receipt in HTML format        |
| `customerReference`      | If a customerReference was provided as an optional parameter in the transaction request it is echoed unaltered in this field       |
| `deviceStatus`   | Status of the device        |
| `dueAmount`      | In case of a partial approval for the transaction, this field contains the amount which remains to be paid       |
| `efttimestamp`   | Time of the transaction        |
| `efttransactionID`      | Handpoint unique identifier for a transaction, this id is the one to be used for a transaction to be reversed.       |
| `errorMessage`   | Detailed reason for the transaction error        |
| `expiryDateMMYY`  | Expiry date of the card used for the operation        |
| `finStatus`   | The financial status contains the outcome of the transaction. For example "AUTHORISED" or "DECLINED"        |
| `iad`   | Issuer Application Data (EMV tag 9F10)        |
| `issuerResponseCode`   | Response code from the card issuer        |



### Transaction Request Object

`TransactionRequest`

An object to store the information about the payment terminal in use

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
           }]
}

// Result will be served back to Handpoint's REST-API
{
       "operation": "sale",
       "amount": "10000",
       "currency": "EUR",
       "terminal_type": "PAXA920",
       "serial_number": "1547854757",
       "customerReference": "storeSale12548",
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
           }]
}
````



An object to store the information about the payment terminal in use.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `operation`     | The type of transaction to be performed. **REQUIRED**       |
| `serial_number`   | Device serial number. **REQUIRED**     |
| `terminal_type`      | Device type. **REQUIRED**     |
| `callbackUrl`  | if used, url the terminal will use to send the Transaction Result. All 2XXs http response codes from the callbackUrl are valid to notify the terminal of a successful delivery of the result. If the callbackUrl is not present, the device will send back the transaction result to Handpoint's REST-API and results can be retrieved using the Transaction Result Retrieval endpoint       |
| `token`      | Token used to authenticate the terminal and transaction when serving the Transaction Result through the callbackUrl . The token will be injected in the Request Header with key value 'AUTH-TOKEN'. **REQUIRED** when the callbackUrl is present.       |
| `customerReference`   | Transaction identifier provided by the integrator. The customerReference sent in TransactionRequests objects is echoed in the TransactionResults        |
| `amount`| Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 EUR). **REQUIRED** for operations: sale, refund, refundReversal, saleReversal and saleAndTokenizeCard.    |
| `currency`   | The currency of the transaction. **REQUIRED** for operations: sale, refund, refundReversal, saleReversal and saleAndTokenizeCard.        |
| `originalTransactionId`      | The transaction id of the original transaction to reverse. **REQUIRED** for operations: refundReversal, saleReversal and LINKED refunds.       |
| `receipt`   | HTML receipt, following the format defined in Html Print Format, or url to locate the receipt, it can be found in the response of a Transaction Request, in the fields merchantReceipt or customerReceipt. **REQUIRED** for operations: printReceipt.        |
| `tipConfiguration`      | Configuration to enable tipping. At the time of sale, a tip menu will be shown to the cardholder with the predefined configuration. The tip configuration is optional and can only be used with the sale and saleAndTokenize operations.       |
| `bypassOptions`   | Configuration to enable the possibility of bypassing signature or pin. The bypass configuration is optional and can only be used with the sale, saleAndTokenize and refund operations        |
| `merchantAuth`      |Object used to store merchant authentication. The merchantAuth is optional and can only be used with the sale, saleAndTokenize and refund operations. For reversals, the credentials passed for the original sale will be automatically looked up by Handpoint and used to process the reversal. This object allows a transaction to be funded to a specific merchant account other than the default one. It is useful if a terminal is shared between multiple merchants, for example at an Hair Salon or a Doctor's office.      |


### Bypass Options


`BypassOptions`

Configuration to enable/disable signature or pin bypass.

````json
{
   "bypassOptions": {
       "signatureBypass": true,
       "pinBypass": true
       }
}
````

| Property      | Description |
| ----------- | ----------- |
| `pinBypass`     | Enables/disables pin bypass. Bypasses PIN entry when the shopper says they don't know the PIN for the card and the merchant either knows they are the legitimate cardholder or want to give them the benefit of the doubt.       |
| `signatureBypass`   | Enables/disables signature bypass. Whether the terminal prompts for a signature, depends on how you configure this parameter. The major card schemes (American Express, Diners, Discover, JCB, Mastercard, Visa, UnionPay) no longer require a signature; they regard it as optional for card-present transactions. This means you can speed up your checkout by skipping the signature prompt. But if your business requires it, you can still let the terminal prompt for a signature. The shopper then provides their signature on the touch screen of the terminal or on the printed transaction receipt. This depends on how you configure this setting. It is your responsibility to verify the signature of the shopper with the signature on the card or another form of identification.     |



### Merchant Auth

`MerchantAuth`

Object used to store merchant authentication. This object is optional, it allows a transaction to be funded to a specific merchant account other than the default one. It is useful if a terminal is shared between multiple merchants, for example at an Hair Salon or a Doctor's office.

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

| Property      | Description |
| ----------- | ----------- |
| `Credential`     | Array of credentials|



### Acquirer

`Acquirer`

An enum representing the supported acquirers for merchant authentication.

**Possible values**

`AMEX` `BORGUN` `EVO` `OMNIPAY` `POSTBRIDGE` `INTERAC` `TSYS` `VANTIV` `SANDBOX`


### Device

`Device`

An object to store the information about the payment terminal you are working with. ALL values are **REQUIRED**






````json
{
       "merchant_id_alpha": "Test_Merchant",
       "serial_number": "614004878",
       "ssk": "74817EA5C63437ADE7AA3A5401",
       "terminal_type": "PAXA920"
}
````

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `merchant_id_alpha`     | Merchant unique identifier to which the device is associated|
| `serial_number`     | Device serial number|
| `ssk`     | Merchant shared secret key, unique id for the merchant|
| `terminal_type`     | Device type|


### Currency

`Currency`

An enum of most currencies in the world.

Contains the ISO name, ISO number and the name of the currency. Additionally contains information about how many decimals the currency uses.

**Possible values**

`AED` `AFN` `ALL` `AMD` `ANG` `AOA` `ARS` `AUD` `AWG` `AZN` `BAM` `BBD` `BDT` `BGN` `BHD` `BIF` `BMD` `BND` `BOB` `BOV` `BRL` `BSD` `BTN` `BWP` `BYR` `BZD` `CAD` `CDF` `CHF` `CLP` `CNY` `COP` `COU` `CRC` `CUC` `CUP` `CVE` `CZK` `DJF` `DKK` `DOP` `DZD` `EEK` `EGP` `ERN` `ETB` `EUR` `FJD` `FKP` `GBP` `GEL` `GHS` `GIP` `GMD` `GNF` `GTQ` `GYD` `HKD` `HNL` `HRK` `HTG` `HUF` `IDR` `ILS` `INR` `IQD` `IRR` `ISK` `JMD` `JOD` `JPY` `KES` `KGS` `KHR` `KMF` `KPW` `KRW` `KWD` `KYD` `KZT` `LAK` `LBP` `LKR` `LRD` `LSL` `LTL` `LVL` `LYD` `MAD` `MDL` `MKD` `MMK` `MNT` `MOP` `MUR` `MVR` `MWK` `MXN` `MXV` `MYR` `MZN` `NAD` `NGN` `NIO` `NOK` `NPR` `NZD` `OMR` `PAB` `PEN` `PGK` `PHP` `PKR` `PLN` `PYG` `QAR` `RON` `RSD` `RUB` `RWF` `SAR` `SBD` `SCR` `SDG` `SEK` `SGD` `SHP` `SLL` `SOS` `SRD` `STD` `SYP` `SZL` `THB` `TJS` `TMT` `TND` `TOP` `TRY` `TTD` `TWD` `TZS` `UAH` `UGX`      `VND` `VUV` `WST` `XAF` `XCD` `XOF` `XPF` `YER` `ZAR` `ZMK` `ZWL` `USD` `UZS` `VEF`



### Card Entry Type

`CardEntryType`

An enum representing different card entry types.

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

**Possible values**

`UNDEFINED` `MSR` `ICC` `CNP` 




### Verification Method


`VerificationMethod`

An enum representing the possible verification methods used during the transaction.

Possible values:

`UNDEFINED`
`SIGNATURE` `PIN` `PIN_SIGNATURE` `FAILED` `NOT_REQUIRED` `MOBILE_PASS_CODE`


### Merchant Auth Credential

`Credential`
An object to store credentials (Acquirer, Mid, Tid, MCC and ExternalId) for merchant authentication.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `acquirer`     | If present, it links this credential to the specified acquirer. Required if more than one credential is provided.|
| `mid`     | For this transaction, overrides the default MID (merchant ID) saved in the terminal configuration.|
| `tid`     | For this transaction, overrides the default TID (terminal ID) saved in the terminal configuration.|
| `mcc`     | Merchant Category Code, overrides the default MCC saved in the terminal configuration.|
| `ExternalId`     | For this transaction, the External Id will be used to lookup the credential of the merchant in the Handpoint backend and process the transaction accordingly. The External id replaces the need to pass MID/TID/MCC as credentials|



### Device Status

`DeviceStatus`

A class that holds the device status.

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


**Properties**

| Property      | Description |
| ----------- | ----------- |
| `SerialNumber`     | The serial number of the device.|
| `BatteryStatus`     | The battery status in percentages of a device.|
| `BatterymV`     | The battery milli volts of a device.|
| `BatteryCharging`     | The battery charging status of a device.|
| `ExternalPower`     | The status of an external power of a device|
| `ApplicationName`     | The application name used on a device|
| `ApplicationVersion`     | The application version number used on a device|
| `bluetoothName`     | The bluetooth interface name used on a device|
| `statusMessage`     | Device human readable status message|


### Card Scheme Name

`CardSchemeName`

A string representing different card brands.

**Possible values**

`MasterCard` `Visa` `Maestro` `American Express` `Discover` `JCB` `Diners` `UnionPay`



### Transaction Type

`TransactionType`

An enum representing different types of transactions.

**Possible values**

`UNDEFINED` `SALE` `VOID_SALE` `REFUND` `VOID_REFUND` `CANCEL_SALE` `CANCEL_REFUND` `TOKENIZE_CARD` `CARD_PAN`


### Payment Scenario


`PaymentScenario`

An enum representing different types of scenario.

**Possible values**

`UNKNOWN` `MAGSTRIPE` `MAGSTRIPECONTACTLESS` `CHIP` `CHIPCONTACTLESS` `CHIPFAILMAGSTRIPE`

### Status Info

`StatusInfo`

A class containing information about the status of the transaction.

**Properties**

| Property      | Description |
| ----------- | ----------- |
| `cancelAllowed`     | A `boolean` letting the integrator know if the terminal will accept a stop transaction request.)       |
| `status`   | A `Status` enum representing the status of the transaction.       |
| `message`      | A `String` containing the status message of the transaction.       |
| `deviceStatus`  | A `DeviceStatus` object containing information about the payment terminal.        |


### Status

`status`

An enum containing information about the status of a transaction.

**Possible values**

`Undefined` `Success` `InvalidData` `ProcessingError` `CommandNotAllowed` `NotInitialised` `ConnectTimeout` `ConnectError` `SendingError` `ReceivingError` `NoDataAvailable` `TransactionNotAllowed` `UnsupportedCurrency` `NoHostAvailable` `CardReaderError` `CardReadingFailed` `InvalidCard` `InputTimeout` `UserCancelled` `InvalidSignature` `WaitingForCard` `CardInserted` `ApplicationSelection` `ApplicationConfirmation` `AmountValidation` `PinInput` `ManualCardInput` `WaitingForCardRemoval` `TipInput` `SharedSecretInvalid` `SharedSecretAuth` `WaitingSignature` `WaitingHostConnect` `WaitingHostSend` `WaitingHostReceive` `WaitingHostDisconnect` `PinInputCompleted` `PosCancelled` `RequestInvalid` `CardCancelled` `CardBlocked` `RequestAuthTimeout` `RequestPaymentTimeout` ´ResponseAuthTimeout´ ´ResponsePaymentTimeout´ IccCardSwiped RemoveCard ScannerIsNotSupported ScannerEvent BatteryTooLow AccountTypeSelection BtIsNotSupported PaymentCodeSelection PartialApproval AmountDueValidation InvalidUrl WaitingCustomerReceipt PrintingMerchantReceipt PrintingCustomerReceipt UpdateStarted UpdateFinished UpdateFailed UpdateProgress WaitingHostPostSend WaitingHostPostReceive Rebooting PrinterOutOfPaper ErrorConnectingToPrinter CardTapped ReceiptPrintSuccess InvalidPinLength OfflinePinAttempt OfflinePinLastAttempt ProcessingSignature CardRemoved TipEntered CardLanguagePreference AutomaticPrintingStarted CancelOperationNotAllowed UpdateSoftwareStarted UpdateSoftwareFinished UpdateSoftwareFailed UpdateSoftwareProgress InstallSoftwareStarted InstallSoftwareFinished InstallSoftwareFailed InstallSoftwareProgress UpdateConfigStarted UpdateConfigFinished UpdateConfigFailed UpdateConfigProgress InitialisationComplete



### Tip Configuration

`TipConfiguration`

**Code example**

````json
{
    "baseAmount": "2000",
    "headerName": "",
    "tipPercentages": [5,10,15,20,25],
    "enterAmountEnabled": true,
    "skipEnabled": false,
    "footer": "Thank you!!! ;)"
}

````

`TipConfiguration`

Properties

| Property      | Description |
| ----------- | ----------- |
| `baseAmount`     | Base amount used to calculate the tip - in the minor unit of currency (f.ex. 1000 is 10.00 GBP). If no base amount is defined, the transaction amount is used as base amount.       |
| `headerName`   | Name of the tipping menu appearing on the terminal. Default: Tip      |
| `tipPercentages`      | List of percentages used to calculate the tip amount. **REQUIRED**      |
| `enterAmountEnabled`  |Flag used to enable the cardholder to manually enter the tip amount. Default: true       |
| `skipEnabled`      | Flag used to enable the cardholder to skip the tipping step. Default: true       |
| `footer`      | Footer note which will appear on the tipping menu. Default: Empty string       |



### Tender Type

`TenderType`

An enum representing different tender types.

Possible values

`NOT_SET` `CREDIT` `DEBIT`
