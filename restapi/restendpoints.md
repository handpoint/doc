---
sidebar_position: 6
id: restendpoints
---



# REST API Endpoints


## /initialize



`Initialize`

Initializes the REST API client and returns the list of payment terminals associated with the merchant account. We recommend that you display the list of available payment terminals to the merchant in your software. Each API key is unique per merchant and needs to be configurable in your backend. 


**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>    <br />*String*  | Api key used to authenticate the merchant.     |


Returns


| Devices      |
| ----------- |
| List of [Device](restobjects.md#deviceObject) object.     |


**Code Example**


```shell
Operation executed using CLI tool CURL:

REQUEST:
  curl -X GET \
   -H "ApiKeyCLoud: MeRcHaNt-ApIkEy" \
   "https://cloud.handpoint.com/initialize" (production)
   "https://cloud.handpoint.io/initialize" (development)

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

POST endpoint used to send a financial operation to the payment terminal. The transaction type to be executed (sale, refund etc.) is defined in the `operation` field of the request body. 


**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>   <br />*String*    | Api key used to authenticate the merchant.      |
| `Request Body: Transaction Request` <span class="badge badge--primary">Required</span>  <br />[TransactionRequest](restobjects.md#transactionRequest)    | Object containing the transaction request information.  |


**Returns**


| Response      | Response Code |
| ----------- | ----------- |
| **Transaction Accepted** | The response code 202 is received from the API if the transaction was successfully sent to the payment terminal.       |
| **BadRequest DeviceIsBusy Error** | The response code 400 with error 1001 is received from the API if the payment terminal is already processing a transaction.  |
| **BadRequest DeviceNotResponding Error** | The response code 400 with error 1002 is received from the API if the payment terminal is offline.     |
| **BadRequest CancelOperationNotAllowed Error** | The response code 400 with error 1003 is received from the API if the stopCurrentTransaction operation cannot be executed. A transaction can only be cancelled at specific steps of the transaction, while waiting for the card to be inserted or on PIN screen. |

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
         "customerReference":"op15248",
         "transactionReference": "2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f"
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
         "token":"123456789",
         "transactionReference": "2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f"
          }' \\  
   "https://cloud.handpoint.com/transactions" (production)
   "https://cloud.handpoint.io/transactions" (development)

RESPONSES:
  Code 202
Transaction Request without callbackUrl
    {
      "transactionResultId": "0821032398-1628774190395",
      "statusMessage": "Operation Accepted",
      "transactionReference":"00000000-0000-0000-0000-000000000000"
    }
 
Transaction Request with callbackUrl and token
    {
      "statusMessage": "Operation Accepted",
      "transactionReference":"00000000-0000-0000-0000-000000000000"
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

GET endpoint used to retrieve transaction results from the payment terminal. In case you do not provide a callbackURL and token in the transaction request, the terminal will post the transaction result to an Handpoint internal API which can be queried in order for your software to fetch the transaction result. If you are running a server to receive results and pass a callback URL and token as part of the transaction request you do not need to query this endpoint.  

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>   <br />*String*     | Api key used to authenticate the merchant.       |
| `Path parameter: transactionResultId` <span class="badge badge--primary">Required</span>   <br />*String*    | The transactionResultId is a unique transaction id delivered immediately as a response to your transaction request. It can be used to query for a transaction result. |


**Returns**


| Response      | Response Code |
| ----------- | ----------- |
| **No Content** | Response code 204. The transactionResultId was found in the database but there is no transaction result associated yet. This status will be retrieved while the transaction is ongoing and the transaction result has not been delivered yet.     |
| **OK** | Response code 200 + Transaction Result. The transactionResultId was found in the database and the associated Transaction Result object is delivered.      |
| **Not Found** | Response code 404. The transactionResultId was not found in the database.      |


**Code Example**

```shell
Operation executed using CLI tool CURL:
REQUEST:
    curl -X GET \\
      -H"ApiKeyCLoud: MeRcHaNt-ApIkEy" \\
      "https://cloud.handpoint.com/transaction-result/0821032398-1628774190395" (production)
      "https://cloud.handpoint.io/transaction-result/0821032398-1628774190395" (development)

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

:::tip
`signatureUrl`: In case the signature can not be updated to the Handpoint servers and an URL is not generated, the terminal will send back the image binary in base64 format to your software. It is important to be able to support both the URL and the image binary format.

`customerReceipt` and `merchantReceipt`: The receipts are usually received as URLs in the transaction result from the terminal. Please note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and an URL is not generated then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats.
:::

## /transactions/{guid}/tip-adjustment


`TipAdjustment`

POST endpoint used to execute a tip adjustment operation. 

A tip adjustment operation allows merchants to adjust the tip amount of a sale transaction before the batch of transactions is settled by the processor at the end of the day. Note: This functionality is only available for the restaurant industry in the United States and the processors currently supporting this functionality are TSYS and VANTIV. 

Note: If two tip adjustments are sent for the same original transaction, only the second one will be taken into account. Each new tip adjustment will override the previous one. A tip adjustment will be rejected if the original transaction has already been batched out by the acquirer.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>   <br />*String*     | Api key used to authenticate the merchant.|
| `Path parameter: guid` <span class="badge badge--primary">Required</span>   <br />*String*    | The guid of the transaction to be adjusted. |
| `Request Body: Tip Adjustment` <span class="badge badge--primary">Required</span>  <br />[TipAdjustment](restobjects.md#tip-adjustment)    | Object containing the amount and currency of the tip adjustment.  |

**Returns**


| Response      | Response Code |
| ----------- | ----------- |
| **OK** | Response code 200.      |
| **BadRequest** | Response code 400.      |


**Code Example**

```shell
Operation executed using CLI tool CURL:
REQUEST:
    curl --location --request POST 'https://cloud.handpoint.com/transactions/ff6da784-8b57-11ed-9891-ebe2a88ff071/tip-adjustment' (production)\
    curl --location --request POST 'https://cloud.handpoint.io/transactions/ff6da784-8b57-11ed-9891-ebe2a88ff071/tip-adjustment' (development)\
          --header 'ApiKeyCloud: MeRcHaNt-ApI-KeY' \
          --header 'Content-Type: application/json' \
          --data-raw '{
              "amount": 5.25
          }'

RESPONSE code 200:
{
    "statusMessage": "tip adjusted"
}

Error example response (using invalid guid):
{
    "error": {
        "statusCode": 400,
        "name": "BadRequestError",
        "message": "Invalid guid [fake-guid]"
    }
}
```

## Transaction Result Recovery


`TransactionResultRecovery`

 The terminal has a transaction recovery loop to automatically send back the pending TransactionResult to the callback URL in case it becomes unreachable (network issue or server down).

 For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the server is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc…).
 The recovery loop is reinitialized every time the Handpoint application is restarted or the startRecovery method is triggered. The Transaction Result received through the transaction recovery loop will have the **recoveredTransaction** field set to **true**.

 All 2XXs http response codes from the callbackUrl are valid to notify the payment terminal of a successful delivery of the result.

 **Returns**

| Parameter      | Notes |
| ----------- | ----------- |
| [Transaction Result](restobjects.md#transaction-result-object)    | The [Transaction Result](restobjects.md#transaction-result-object) is delivered to the callback URL from the [Transaction Request](restobjects.md#transaction-request-object).    |



## /transactions/{transactionReference}/status

The /transactions/{transactionReference}/status endpoint is a RESTful API endpoint designed to retrieve the current status of a transaction based on its unique reference. It accepts the transaction reference as a path parameter and returns the current status of the transaction in the response. The `transactionReference` is a unique value that you need to generate and pass in the original [ transaction request](restobjects.md#transactionRequest).

The main transaction result [*FinancialStatus*](restobjects.md#financialStatus) that can be returned as a response to this method are the following ones: 
- AUTHORISED - Transaction was successful 
- DECLINED - Transaction was declined 
- UNKNOWN (NOT FOUND) -  The transaction does not exist in the Handpoint gateway. If this status is returned within 90s of the start of a transaction, there could be a chance that the cardholder has not inserted, swiped or tapped his card yet on the terminal and the Handpoint gateway might soon receive the transaction. If the `UNKNOWN` status is returned after 90s, it means that the transaction processed has not reached the Handpoint gateway and it will NOT be charged.
- IN_PROGRESS - The transaction has been received by the gateway but the outcome is not known yet, try again after a few seconds. 

![getTrxStatusEndpoint](/img/getTransactionStatusEndpoint.drawio.png) 

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>   *String*     | Api key used to authenticate the merchant.       |
| `Path parameter: transactionReference` <span class="badge badge--primary">Required</span>   <br />*String*    | The `transactionReference` is a unique [UUID v4](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)) generated by you and added as a parameter to the initial financial request. It can then be used to query the transaction status endpoint. |

**Returns**

| Response      | Response Code |
| ----------- | ----------- |
| **OK** | Response code **200** + [Transaction Result](restobjects.md#transaction-result-object). <br /><br /> There are two possible outcomes:<br /> - The `transactionReference` was found in the database and the associated [Transaction Result](restobjects.md#transaction-result-object) object is delivered. By checking the [financial status](restobjects.md#financialStatus) field you will be able to know the status of the transaction at the time of the query. <br /> - The `transactionReference` was not found in the Handpoint gateway. The [financial status](restobjects.md#financialStatus) received in this case will be `UNKNOWN` (NOT FOUND)|
| **Forbidden** | Response code **403**. Authentication was unsuccessful. Please check your API Key is valid.      |

**Code Example**

```shell
Operation executed using CLI tool CURL:
REQUEST:
    curl -X GET \\
      -H"ApiKeyCLoud: MeRcHaNt-ApIkEy" \\
      "https://cloud.handpoint.com/transactions/3e665342-a95b-49c1-b6fe-b3f102305a76/status" (production)
      "https://cloud.handpoint.io/transactions/3e665342-a95b-49c1-b6fe-b3f102305a76/status" (development)

RESPONSE:
{
    "aid": "A0000000031010",
    "arc": "00",
    "iad": "06011103A00000",
    "tsi": "0000",
    "tvr": "0000000000",
    "cardEntryType": "ICC",
    "cardLanguagePreference": "",
    "currency": "USD",
    "type": "SALE",
    "tipAmount": 0,
    "totalAmount": 100,
    "requestedAmount": 100,
    "dueAmount": 0,
    "tipPercentage": 0,
    "efttimestamp": "20230511110113006",
    "originalEFTTransactionID": "",
    "paymentScenario": "CHIPCONTACTLESS",
    "verificationMethod": "UNDEFINED",
    "authorisationCode": "123456",
    "cardSchemeName": "Visa",
    "cardToken": "",
    "maskedCardNumber": "************5733",
    "cardTypeId": "",
    "customerReference": "",
    "efttransactionID": "66d94f20-efda-11ed-929c-47fffda5f9b5",
    "transactionID": "66d94f20-efda-11ed-929c-47fffda5f9b5",
    "errorMessage": "",
    "expiryDateMMYY": "0924",
    "issuerResponseCode": "00",
    "rrn": "0000511573740",
    "tenderType": "CREDIT",
    "unMaskedPan": "",
    "merchantAddress": "Navalaosa 48770 Madrid",
    "merchantName": "Hago la cama 2",
    "mid": "",
    "cardHolderName": "",
    "chipTransactionReport": "",
    "customerReceipt": "",
    "merchantReceipt": "",
    "signatureUrl": "",
    "statusMessage": "",
    "tid": "",
    "transactionReference": "3e665342-a95b-49c1-b6fe-b3f102305a76",
    "transactionOrigin": "",
    "finStatus": "AUTHORISED"
}
```

