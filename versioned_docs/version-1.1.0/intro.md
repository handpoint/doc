---
sidebar_position: 1
---

# REST API

## Introduction
Introducing the Revolutionary Handpoint REST API: Seamlessly integrate card present payments into any software

Use the Handpoint REST API to integrate leading smartpos terminals with your software. The Handpoint REST API is a simple REST interface that acts as a bridge between your software and the payment terminal , while shielding your software from card data. It is seamless to integrate, keeps all card data out of your system, works with every platform, and lets you use the best Android terminals on the market.

Complete your integration in just three steps: Initiate the interface, choose the terminal, and start the sale. It is as simple as it sounds. The only thing you need is a valid API key to authenticate against the API. You even get a list of terminals to which you can connect. Simply execute the financial operation, and within seconds you’ll get back the transaction result and receipts in your software. The Handpoint REST API seamlessly starts and manages the entire P2PE transaction with the payment terminal, minimizing hassle for you and maximizing reliability, security, and control.

## API Overview

First of all, ensure you are using the correct environment by reviewing the type of card reader you have. To check if you should be using a production or development environment, see "How do I know what type of card reader do I have?" and select the corresponding URL, as you see below:

   Production: https://cloud.handpoint.com/...

   Development: https://cloud.handpoint.io/...

The following flow shows the interactions between your application and the Handpoint REST API :
1) Send a POST Transaction Request to the REST API.
2) The API will validate the Request Body (containing the Transaction Request) and, if it is correct, it will respond back to your software with the response code 202 ("Accepted”) to confirm that the data has been correctly forwarded to the card reader.
3) The validated Transaction Request object is forwarded to the terminal and the transaction starts.
4) The Transaction Result is sent back from the terminal to your software by using the callbackUrl from the Transaction Request. The terminal will be authenticated against your endpoint by setting the authentication token of the Transaction Request in custom header ( "AUTH-TOKEN"). All 2XXs http response codes from the callbackUrl are valid to notify the device of a successful delivery of the result.


## Configuration

Just request a valid API key from Handpoint to start using API. Initialize your interface with the API key and receive the list of devices available to perform a financial operation. Fast and easy.

## Sandbox

Get started today with our sandbox. You can generate sample transactions and test the experience right in your browser. Check it at: http://www.handpoint.com/lab/cloudpos. A payment terminal is required to start testing.

This is the initial setup screen:

![Sandbox logo](/img/Sandbox1.png)


To get started, select the target environment where you are going to operate (Sandbox/Production). If the user has any doubts selecting the correct environment, click on "*How do I know what type of card reader do I have?" and you will be redirected to an explanation page.

Next, enter your Handpoint API key in the box labeled "INSERT API KEY” and click the check button. This will automatically populate the “SELECT A DEVICE” drop down with the list of devices that are assigned to you. If the API key is not valid, an error message will appear in the “RESPONSES” section of the sandbox.

Before you can begin any further testing, you first must select the device that you will be using. In the “SELECT A DEVICE” list, you will see both the real terminals assigned to you, as well as simulated devices (listed by serial number). You can choose any device to test with. Serial numbers for the simulated devices always have this format: XXXX | 999999xxxxx. Choose a simulated terminal if you do not have access to a real device or if you just want to see simulated behavior. You can refresh the “SELECT A DEVICE” list by clicking the refresh button on the right side of the “SELECT A DEVICE” box. If you are already connected to a device, you can disconnect from it using the “Disconnect” button or trigger a software and configuration update operation by using the "Update" button.


Once you have selected a device, the “SELECT A DEVICE” box will be disabled, and the rest of the sandbox will be enabled. With your selected device, you can simulate a number of operations, including:

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




## Endpoints


### Initialize



```shell
Code Example

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

`Initialize`

Initializes the REST API client and returns the list of payment terminals associated with the merchant account


Parameters


| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud  *`     | Request Header used to identify the merchant       |


Returns


| Devices      |
| ----------- | ----------- |
| List of Device objects     |








### Transactions

```shell
Code Example

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

`Transactions`

POST endpoint used to execute a financial operation


Parameters


| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud * `     | Request Header used to identify the merchant       |
| `Request Body: Transaction Request *`     | Object containing the transaction information  |





###Transaction Result Recovery


`TransactionResultRecovery`

 The terminal has a transaction recovery loop to automatically send back the pending TransactionResult to the callback URL in case it becomes unreachable (network issue or server down).
 For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the server is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc…).
 The recovery loop is reinitialized every time the Handpoint application is restarted or the startRecovery method is triggered. The Transaction Result received through the transaction recovery loop will have the recoveredTransaction field set to true.
 All 2XXs http response codes from the callbackUrl are valid to notify the device of a successful delivery of the result.

 Returns

 Transaction Result

 The Transaction Result is delivered to the callback Url from the Transaction Request.



## Objects

### Verification Method



`VerificationMethod`

An enum representing the possible verification methods used during the transaction.

Possible values:

`UNDEFINED`
`SIGNATURE` `PIN` `PIN_SIGNATURE` `FAILED` `NOT_REQUIRED` `MOBILE_PASS_CODE`



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


### Status Info

`StatusInfo`

| Property      | Description |
| ----------- | ----------- |
| `cancelAllowed`     | A `boolean` letting the integrator know if the terminal will accept a stop transaction request.)       |
| `status`   | A `Status` enum representing the status of the transaction.       |
| `message`      | A `String` containing the status message of the transaction.       |
| `deviceStatus`  | A `DeviceStatus` object containing information about the payment terminal.        |


### Status

`status`

An enum containing information about the status of a transaction.
Possible values

`Undefined Success` `InvalidData` `ProcessingError` `CommandNotAllowed` `NotInitialised` `ConnectTimeout` `ConnectError` `SendingError` `ReceivingError` `NoDataAvailable` `TransactionNotAllowed` `UnsupportedCurrency` `NoHostAvailable`

### Transaction Result Object

````
Code example

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

`TransactionResult`

An object holding information about the result of a transaction.

| Syntax      | Description |
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

### Tip Configuration

````
Code example

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
