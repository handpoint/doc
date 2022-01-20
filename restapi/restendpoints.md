---
sidebar_position: 8
id: restendpoints
---



# Endpoints


## /initialize



`Initialize`

Initializes the REST API client and returns the list of payment terminals associated with the merchant account


**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>    <br />*String*  | Request Header used to identify the merchant       |


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






## /transactions



`Transactions`

POST endpoint used to execute a financial operation


**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>   <br />*String*    | Request Header used to identify the merchant       |
| `Request Body: Transaction Request` <span class="badge badge--primary">Required</span>  <br />*TransactionRequest*    | Object containing the transaction information  |


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
    curl -X POST \\
     -H"ApiKeyCLoud: MeRcHaNt-ApIkEy" \\
     -H"Content-Type: application/json" \\
Transaction Request without callbackUrl and token
     -d '{
         "operation":"sale",
         "amount":"10000",
         "currency":"EUR",
         "terminal_type":"PAXA920",
         "serial_number":"1547854757",
         "customerReference":"op15248"
          }' \\
Transaction Request with callbackUrl and token
     -d '{
         "operation":"sale",
         "amount":"10000",
         "currency":"EUR",
         "terminal_type":"PAXA920",
         "serial_number":"1547854757",
         "customerReference":"op15248",
         "callbackUrl":"https://url.where.the.result.is.served.com",
         "token":"123456789"
          }' \\  
   "https://cloud.handpoint.com/transactions"

RESPONSES:
  Code 202
Transaction Request without callbackUrl
    {
      "transactionResultId": "0821032398-1628774190395",
      "statusMessage": "Operation Accepted"
    }
 
Transaction Request with callbackUrl and token
    {
      "statusMessage": "Operation Accepted"
    }

  Code 400 Ex:DeviceIsBusy
    {
    "error": {
      "statusCode": 400,
      "name":"BadRequestError",
      "message": {
          "error": 1001,
          "message":"The device is busy"
        }
      }
    }
```


## /transaction-result/{transactionResultId}


`TransactionResultRetrieval`

GET endpoint used to retrieve transaction results. **IMPORTANT** Feature only compatible with Handpoint App v3.3.0 and above.

**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>   <br />*String*     | Request Header used to identify the merchant       |
| `Path parameter: transactionResultId` <span class="badge badge--primary">Required</span>   <br />*String*    | Custom transaction result Id provided in the response when a Transaction was triggered without callbackUrl.  |


**Returns**


| Response      | Response Code |
| ----------- | ----------- |
| **No Content** | Response code 204. transactionResultId found in the database but there is no transaction result associated yet. This status will be retrieved while the transaction is ongoing and the transaction result has not been delivered yet.     |
| **OK** | Response code 200 + Transaction Result. transactionResultId found in the database and the associated Transaction Result object      |
| **Not Found** | Response code 404. transactionResultId NOT found in the database      |


**Code Example**

```shell
Operation executed using CLI tool CURL:
REQUEST:
    curl -X GET \\
      -H"ApiKeyCLoud: MeRcHaNt-ApIkEy" \\
      "https://cloud.handpoint.com/transaction-result/0821032398-1628774190395"

RESPONSE:
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



## Transaction Result Recovery


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



