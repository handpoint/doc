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


**Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| Devices | List of [Device](restobjects.md#device) objects        |


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







## Transaction Result Recovery


`TransactionResultRecovery`

 The terminal has a transaction recovery loop to automatically send back the pending TransactionResult to the callback URL in case it becomes unreachable (network issue or server down).

 For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the server is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc…).
 The recovery loop is reinitialized every time the Handpoint application is restarted or the startRecovery method is triggered. The Transaction Result received through the transaction recovery loop will have the **recoveredTransaction** field set to **true**.

 All 2XXs http response codes from the callbackUrl are valid to notify the device of a successful delivery of the result.

 **Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| Transaction Result    | The [Transaction Result](restobjects.md#transaction-result-object) is delivered to the callback Url from the [Transaction Request](restobjects.md#transaction-request-object).    |

