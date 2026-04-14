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
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>    <br />*String*  | Api key used to authenticate the merchant. (UNIQUE per Merchant)     |


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
      "ssk": "A1B2C3D4E5F60718293A4B5C6D7E8F901A2B3C4D5E6F7890ABCDEF0123456789",
      "terminal_type": "PAXA920"
    }
  ]
```

:::tip
Reminder that SSK (Shared Secret Key) is a value unique to a Merchant, and the same Merchant (SSK) can have assigned multiple devices from different manufacturers. This includes PAX and Datecs (eg. HiLite)
:::

## /transactions

`Transactions`

POST endpoint used to send a financial operation to the payment terminal. The transaction type to be executed (sale, refund etc.) is defined in the `operation` field of the request body. 


**Parameters**


| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>   <br />*String*    | Api key used to authenticate the merchant. (UNIQUE per Merchant)       |
| `Request Body: Transaction Request` <span class="badge badge--primary">Required</span>  <br />[TransactionRequest](restobjects.md#transactionRequest)    | Object containing the transaction request information.  |


**Returns**


| Response      | Response Code |
| ----------- | ----------- |
| **Transaction Accepted** | The response code 202 is received from the API if the transaction was successfully sent to the payment terminal.       |
| **BadRequest DeviceIsBusy Error** | The response code 400 with error 1001 is received from the API if the payment terminal is already processing a transaction.  |
| **BadRequest DeviceNotResponding Error** | The response code 400 with error 1002 is received from the API if the payment terminal is offline.     |
| **BadRequest CancelOperationNotAllowed Error** | The response code 400 with error 1003 is received from the API if the stopCurrentTransaction operation cannot be executed. A transaction can only be cancelled at specific steps of the transaction, while waiting for the card to be inserted or on PIN screen. |

**Code Example**

:::tip
Make sure that your transactionReference is unique per request, and change it for every new request attempt (even if the request contains the same values re-attempt). This will improve logs and could help troubleshooting.
:::

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


## /transaction-result/\{transactionResultId\}


`TransactionResultRetrieval`

GET endpoint used to retrieve transaction results from the payment terminal. In case you do not provide a callbackURL and token in the transaction request, the terminal will post the transaction result to an Handpoint internal API which can be queried in order for your software to fetch the transaction result. If you are running a server to receive results and pass a callback URL and token as part of the transaction request you do not need to query this endpoint.  

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>   <br />*String*     | Api key used to authenticate the merchant. (UNIQUE per Merchant)        |
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

## /transactions/\{guid\}/tip-adjustment


`TipAdjustment`

POST endpoint used to execute a tip adjustment operation. 

A tip adjustment operation allows merchants to adjust the tip amount of a sale transaction before the batch of transactions is settled by the processor at the end of the day. Note: This functionality is only available for the restaurant industry in the United States and the processors currently supporting this functionality are TSYS and VANTIV. 

Note: If two tip adjustments are sent for the same original transaction, only the second one will be taken into account. Each new tip adjustment will override the previous one. A tip adjustment will be rejected if the original transaction has already been batched out by the acquirer.

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>   <br />*String*     | Api key used to authenticate the merchant. (UNIQUE per Merchant) |
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

## /transactions/\{guid\}/token \{#transactionsguidtoken\}

`DeferredTokenization`

GET endpoint used to retrieve a card token from a previously completed transaction. This operation, known as **deferred tokenization**, allows merchants to obtain a card token without requiring tokenization to be enabled at the time of the original transaction. The returned `cardToken` can be used for subsequent operations such as cardholder identification or MOTO payments. See the supported transaction types below.

:::note
Deferred tokenization is supported for the following transaction types: `sale`, `refund`, `preAuthorizationCapture`, `moToSale` and `moToRefund`. Other transaction types will return a `400` error.
:::

:::warning
Tokenization requests must be made within **12 months** of the original transaction. Requests for transactions older than 12 months will not be processed.
:::

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>   <br />*String*     | Api key used to authenticate the merchant. (UNIQUE per Merchant) |
| `Path parameter: guid` <span class="badge badge--primary">Required</span>   <br />*String*    | The GUID of the completed card-present transaction from which to retrieve the token. |

**Returns**

| Response      | Response Code |
| ----------- | ----------- |
| [DeferredTokenizationResponse](restobjects.md#deferredTokenizationResponse) | Response code 200. |
| **BadRequest** | Response code 400. Returned when the transaction type is not eligible for deferred tokenization. |

**Code Example**

```shell
Operation executed using CLI tool CURL:

REQUEST (sale tokenization):
  curl -X GET \
   -H "ApiKeyCloud: MeRcHaNt-ApIkEy" \
   -H "Content-Type: application/json" \
   "https://cloud.handpoint.com/transactions/75413c40-21db-11f1-991b-6f80eaf25911/token" (production)
   "https://cloud.handpoint.io/transactions/75413c40-21db-11f1-991b-6f80eaf25911/token" (development)

RESPONSE code 200:
{
    "agreementNumber": "123456789010102",
    "cardToken": "665630867",
    "cardTokenizationGuid": "7df78050-21dc-11f1-991b-6f80eaf25911",
    "expiryDateMMYY": "0927",
    "httpStatus": "200",
    "maskedCardNumber": "************3555",
    "serverDateTime": "20260317083711509",
    "transactionReference": "75413c40-21db-11f1-991b-6f80eaf25911"
}

Error example response (transaction type not eligible for deferred tokenization):
{
    "error": {
        "details": {
            "body": {
                "error": {
                    "errorCode": "3112",
                    "errorGuid": "624d05e0-21dd-11f1-991b-6f80eaf25911",
                    "httpStatus": "403",
                    "reason": "Transaction type is not eligible for deferred tokenization"
                }
            },
            "status": 403
        },
        "message": "Viscus operation failed",
        "name": "BadRequestError",
        "statusCode": 400
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



### /transactions/\{transactionReference\}/status

:::warning
This endpoint does **not** use **https://cloud.handpoint.(io/com)/** as a base URL, it uses **https://transactions.handpoint.(io/com)/**
:::


The `https://transactions.handpoint.com/transactions/\{transactionReference\}/status` endpoint is a RESTful API endpoint designed to retrieve the status of the first transaction associated with a given `transactionReference`. This endpoint returns the status of the initial transaction linked to the reference, reflecting the current state of that transaction.The `transactionReference` is a unique value that you need to generate and pass in the original [ transaction request](restobjects.md#transactionRequest).

The main transaction result [*FinancialStatus*](restobjects.md#financialStatus) that can be returned as a response to this method are the following ones: 

- AUTHORISED - Transaction was successful.
- DECLINED - Transaction was declined.
- UNDEFINED (NOT FOUND) -  The transaction does not exist in the Handpoint gateway. If this status is returned within 90s of the start of a transaction, there could be a chance that the cardholder has not inserted, swiped or tapped his card yet on the terminal and the Handpoint gateway might soon receive the transaction. If the `UNDEFINED` status is returned after 90s, it means that the transaction processed has not reached the Handpoint gateway and it will NOT be charged.
- IN_PROGRESS - The transaction has been received by the gateway but the outcome is not known yet, try again after a few seconds.
- REFUNDED - Transaction was refunded.

![getTrxStatusEndpoint](/img/getTransactionStatusEndpoint.drawio.png) 

**Parameters**

| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>   *String*     | Api key used to authenticate the merchant. (UNIQUE per Merchant)        |
| `Path parameter: transactionReference` <span class="badge badge--primary">Required</span>   <br />*String*    | The `transactionReference` is a **UNIQUE** [UUID v4](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)) generated by you and added as a parameter to the initial financial request. It can then be used to query the transaction status endpoint. |

:::caution
Handpoint does not verify that the `transactionReference` values sent on every request are **UNIQUE**.
It's our recommendation that a new value is created and sent for every request attempt.
:::

**Responses**

| Response      | Response Code |
| ----------- | ----------- |
| **OK** | Response code **200** + [Transaction Result](restobjects.md#transaction-result-object). <br /><br /> There are two possible outcomes:<br /> - The `transactionReference` was found in the database and the associated [Transaction Result](restobjects.md#transaction-result-object) object is delivered. By checking the [financial status](restobjects.md#financialStatus) field you will be able to know the status of the transaction at the time of the query. <br /> - The `transactionReference` was not found in the Handpoint gateway. The [financial status](restobjects.md#financialStatus) received in this case will be `UNDEFINED` (NOT FOUND)|
| **Unauthorized** | Response code **401**. The client request has not been completed because it lacks valid authentication credentials for the requested resource. Please check your API Key is correct for this `transactionReference`.     |
| **Forbidden** | Response code **403**. Authentication was unsuccessful. Please check your API Key is valid.      |

**Code Example**

```shell
Operation executed using CLI tool CURL:
REQUEST:
    curl -X GET \\
      -H"ApiKeyCLoud: MeRcHaNt-ApIkEy" \\
      "https://transactions.handpoint.com/transactions/b25381cc-2396-42b5-94cd-8f8b3112de0e/status" (production)
      "https://transactions.handpoint.io/transactions/b25381cc-2396-42b5-94cd-8f8b3112de0e/status" (development)

RESPONSE:
{
    "aid": "A0000000031010",
    "arc": "00",
    "iad": "06011203A00000",
    "tsi": "",
    "tvr": "0000000000",
    "cardEntryType": "ICC",
    "cardLanguagePreference": "6573",
    "currency": "USD",
    "type": "SALE",
    "tipAmount": 0,
    "totalAmount": 3000,
    "requestedAmount": 3000,
    "dueAmount": 0,
    "tipPercentage": 0,
    "efttimestamp": 1775047061554,
    "originalEFTTransactionID": "",
    "paymentScenario": "CHIPCONTACTLESS",
    "verificationMethod": "UNDEFINED",
    "authorisationCode": "010119",
    "cardSchemeName": "VISA",
    "cardToken": "",
    "maskedCardNumber": "************0936",
    "cardTypeId": "",
    "customerReference": "",
    "efttransactionID": "605597c0-2dc7-11f1-af50-e16c4b0ae383",
    "transactionID": "605597c0-2dc7-11f1-af50-e16c4b0ae383",
    "errorMessage": "",
    "expiryDateMMYY": "1027",
    "issuerResponseCode": "00",
    "batchNumber": "",
    "rrn": "513815902180",
    "tenderType": "CREDIT",
    "unMaskedPan": "",
    "holdAmount": 0,
    "increaseAmount": 0,
    "capturedAmount": 0,
    "merchantAddress": "",
    "merchantName": "",
    "mid": "",
    "cardHolderName": "",
    "chipTransactionReport": "",
    "customerReceipt": "",
    "merchantReceipt": "",
    "signatureUrl": "",
    "statusMessage": "",
    "tid": "",
    "transactionReference": "b25381cc-2396-42b5-94cd-8f8b3112de0e",
    "transactionOrigin": "",
    "finStatus": "AUTHORISED"
}
```

### /transactions/\{transactionReference\}/status/\{selector\}

:::warning
This endpoint does **not** use **https://cloud.handpoint.(io/com)/** as a base URL, it uses **https://transactions.handpoint.(io/com)/**
:::

The `https://transactions.handpoint.io/transactions/\{transactionReference\}/status/\{selector\}` endpoint is a RESTful API that retrieves the status of transactions associated with a given `transactionReference`. The `\{selector\}` path parameter allows you to specify whether you want to retrieve the status of a specific transaction by its index or retrieve all transactions associated with the `transactionReference`.

**Selector Values**

| Selector      | Description |
| ------------- | ----------- |
| all           | Returns the status of all transactions associated with the given `transactionReference`. |
| first         | Returns the status of the first transaction associated with the `transactionReference`. |
| last          | Returns the status of the last transaction associated with the `transactionReference`. |
| \{index\}       | Returns the status of a specific transaction identified by its 1-based index in the sequence of transactions associated with the `transactionReference`. For example, `1` for the first transaction, `2` for the second, and so on. |


:::caution
**Important Note:** The `finStatus` field for the first transaction reflects its current status. In contrast, for subsequent transactions, the finStatus reflects the original status at the time of processing. For example, if a refund is later reversed, the refund transaction will still show as AUTHORISED.
:::


**Parameters**

| Parameter      | Description |
| ----------- | ----------- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>   *String*     | Api key used to authenticate the merchant. (UNIQUE per Merchant)        |
| `Path: transactionReference` <span class="badge badge--primary">Required</span>   <br />*String*    | The `transactionReference` is a **UNIQUE** [UUID v4](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)) generated by you and added as a parameter to the initial financial request. It is used to query the transaction status.|
| `Path: selector` <span class="badge badge--primary">Required</span>   *String*     | Specifies whether to return all transactions or a specific transaction by index.       |

:::caution
Handpoint does not verify that the `transactionReference` values sent on every request are **UNIQUE**.
It's our recommendation that a new value is created and sent for every request attempt.
:::

**Responses**

| Response      | Response Code |
| ----------- | ----------- |
| **200 OK** | The request was successful, and the transaction status(es) are returned in the response.|
| **404 Not Found** |The specified `transactionReference` or `selector` does not exist.|
| **403 Forbidden** | Authentication failed. Please check that your API Key is valid.|


**Example Request**

  - Retrieve All Transactions:

  ```shell
  curl -X GET \
  -H "ApiKeyCloud: your-api-key" \
  "https://transactions.handpoint.io/transactions/123e4567-e89b-12d3-a456-426614174000/status/all"
  ```


  - Retrieve third transaction

  ```shell
  curl -X GET \
  -H "ApiKeyCloud: your-api-key" \
  "https://transactions.handpoint.io/transactions/123e4567-e89b-12d3-a456-426614174000/status/3"
  ``` 

## Device Control Commands

> **Note:**  
> The following commands are available for all devices running Android SDK version 7.1006.0 or later.

Command Endpoint Format

All device control commands follow this endpoint structure:
```https://cloud.handpoint.io/devices/\{deviceType\}/\{serialNumber\}/\{command\}```

Where:
- `\{deviceType\}` is the type of the device (e.g., PAXIM30)
- `\{serialNumber\}` is the serial number of the device (e.g., 1640013848)
- `\{command\}` is the specific command to execute

Common Parameters

All commands share these common parameters:

| Parameter      | Notes |
| ----------- | ----------- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>   <br />*String*    | Api key used to authenticate the merchant. (UNIQUE per Merchant)       |
| `Header: Content-Type` <span class="badge badge--primary">Required</span>   <br />*String*    | Must be set to `application/json`       |

Common Response Codes

| Response Code | Description |
|--------------|-------------|
| 202 | Request accepted, command will be executed |
| 403 | Authentication failed |
| 422 | Invalid request |
| 400 | Invalid parameter value (when applicable) |

---

:::caution
For the Commands to work properly, the Handpoint Payments App **MUST** be in **Integrated Mode** (enabled via **Handpoint TMS** and controlled by the merchant in the **Handpoint Payments App** Settings).  Use the [`pingDevice` operation](restobjects#operation-types-description) to confirm the device is in Integrated Mode before you send these commands.<br />
If you attempt to send one of these commands and the device is not yet in Integrated Mode, you may receive a **202 Accepted** response but the command will not have been executed by the terminal.
:::

### Set Unattended Mode

`POST /devices/\{deviceType\}/\{serialNumber\}/set-unattended-mode`

Enables or disables unattended mode on the device.
Unattended mode will disable the Bottom navigation bar containing the Home, back, recent buttons.
The Payment screen will be the only visible screen in the Handpoint Payments App. (Settings, Hisotry and Analytic tabs will not be accessible)


**Request Body Parameters**

| Parameter | Type | Description |
|-----------|------|-------------|
| `status` | boolean | `true` to enable unattended mode, `false` to disable |

**Example Request**

```shell
curl -X POST \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -H "Content-Type: application/json" \
  -d '{
    "status": false
  }' \
  "https://cloud.handpoint.io/devices/PAXIM30/0000000000/set-unattended-mode"
```

### Set Locale

`POST /devices/\{deviceType\}/\{serialNumber\}/set-locale`

Sets the locale of the target device.

**Request Body Parameters**

| Parameter | Type   | Description                                                                 |
|-----------|--------|-----------------------------------------------------------------------------|
| `locale`  | string | IETF BCP 47 language tag (e.g., `en_US`). Two-letter language and country code.|

**Response Codes**

| Code | Description                                 |
|------|---------------------------------------------|
| 202  | The request is accepted and will be executed|
| 403  | Authentication failed                       |
| 422  | Invalid request                             |

**Example Request**

```shell
curl -X POST \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -H "Content-Type: application/json" \
  -d '{
    "locale": "en_CA"
  }' \
  "https://cloud.handpoint.io/devices/PAXIM30/0000000000/set-locale"
```

---

### Set Password Protection

`POST /devices/\{deviceType\}/\{serialNumber\}/set-password-protected`

Enables or disables password protection on the device.

**Request Body Parameters**

| Parameter | Type    | Description                                         |
|-----------|---------|-----------------------------------------------------|
| `status`  | boolean | `true` to enable password protection, `false` to disable |

**Response Codes**

| Code | Description                                 |
|------|---------------------------------------------|
| 202  | The request is accepted and will be executed|
| 403  | Authentication failed                       |
| 422  | Invalid request                             |

**Example Request**

```shell
curl -X POST \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -H "Content-Type: application/json" \
  -d '{
    "status": true
  }' \
  "https://cloud.handpoint.io/devices/PAXIM30/0000000000/set-password-protected"
```

---

### Reboot Device

`POST /devices/\{deviceType\}/\{serialNumber\}/reboot`

Reboots the device with an optional force parameter.

**Request Body Parameters**

| Parameter | Type    | Description                                                                 |
|-----------|---------|-----------------------------------------------------------------------------|
| `force`   | boolean | `true` to force reboot even during transaction, `false` to check status first|

**Response Codes**

| Code | Description                                 |
|------|---------------------------------------------|
| 202  | The request is accepted and will be executed|
| 403  | Authentication failed                       |
| 422  | Invalid request                             |

**Example Request**

```shell
curl -X POST \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -H "Content-Type: application/json" \
  -d '{
    "force": false
  }' \
  "https://cloud.handpoint.io/devices/PAXIM30/0000000000/reboot"
```

---

### Set Screen Brightness

`POST /devices/\{deviceType\}/\{serialNumber\}/set-screen-brightness`

Sets the screen brightness levels.

**Request Body Parameters**

| Parameter                | Type    | Description                        |
|--------------------------|---------|------------------------------------|
| `minimumBrightnessLevel` | integer | Value between 0 and 100            |
| `maximumBrightnessLevel` | integer | Value between 0 and 100            |

**Response Codes**

| Code | Description                                 |
|------|---------------------------------------------|
| 202  | The request is accepted and will be executed|
| 403  | Authentication failed                       |
| 422  | Invalid request                             |
| 400  | Value is outside the valid range            |

**Example Request**

```shell
curl -X POST \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -H "Content-Type: application/json" \
  -d '{
    "minimumBrightnessLevel": 20,
    "maximumBrightnessLevel": 100
  }' \
  "https://cloud.handpoint.io/devices/PAXIM30/0000000000/set-screen-brightness"
```

---

### Set Reboot Time

:::note
This feature is only enabled for production devices.
:::

`POST /devices/\{deviceType\}/\{serialNumber\}/set-reboot-time`

Sets the daily reboot time for the device. The actual reboot will occur at a random minute within the specified hour.

**Request Body Parameters**

| Parameter | Type    | Description                                         |
|-----------|---------|-----------------------------------------------------|
| `hour`    | integer | Hour of the day (0-23) when device should reboot    |

:::tip
If hour is set to 22, the device will reboot at a random time between 22:01 and 22:59.
:::

**Response Codes**

| Code | Description                                 |
|------|---------------------------------------------|
| 202  | The request is accepted and will be executed|
| 403  | Authentication failed                       |
| 422  | Invalid request                             |
| 400  | Value is outside the valid range            |

**Example Request**

```shell
curl -X POST \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -H "Content-Type: application/json" \
  -d '{
    "hour": 22
  }' \
  "https://cloud.handpoint.io/devices/PAXIM30/0000000000/set-reboot-time"
```

## MOTO Operations (no reader)

MOTO (Mail Order / Telephone Order) operations can also be processed **without a payment reader**, using information
that is already stored in the gateway (tokens and references to previous transactions).

These endpoints are intended for MOTO scenarios where the merchant does **not** need to collect or handle sensitive
card data (PAN, expiry date, CVV) in their own systems:

- `/moto/sale` performs a sale using a **previously generated card token** (`cardToken`) that represents card details stored in the gateway.
- `/moto/refund` performs a refund of a **previous operation**, using the card associated with that original operation (`originalGuid`).
- `/moto/reversal` performs a reversal (void) of a **previous operation**, passing only its identifier (`originalGuid`).

:::tip
Unlike the standard MOTO operations that use `/transactions` and a physical terminal, these endpoints:

- Do **not** require `serial_number` or `terminal_type`.
- Do **not** receive raw card data in the request.
- Rely on `cardToken` and `originalGuid` to reference card information already stored in the gateway.
:::

All request and response payloads are defined in the corresponding [Moto objects](restobjects#moto).

---

### /moto/sale

`MotoSale`

`POST /moto/sale` is used to perform a **MOTO sale without a payment reader**, using a **card token** (`cardToken`)
that was generated previously (for example, by a `saleAndTokenizeCard` operation).

The card details are *not* sent in the request; they are resolved by the gateway using the `cardToken`.

Typical flow:

1. A card is captured securely in a previous flow, for example through the [`/transactions`](restendpoints#transactions) endpoint using a
   `saleAndTokenizeCard` operation.
2. The gateway returns a `cardToken` (e.g. `665630867`).
3. The integrator can later perform one or more MOTO sales using that `cardToken`, without handling PAN/CVV again.

#### Parameters

| Parameter | Notes |
| --------- | ----- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>  | Cloud API key used to authenticate the merchant. |
| `Request Body: MotoSaleRequest` <span class="badge badge--primary">Required</span>  | [MotoSaleRequest](restobjects#motoSaleRequest) object containing `cardToken`, `amount`, `currency` and optional merchant references. |

Typical fields in the request body (see [MotoSaleRequest](restobjects#motoSaleRequest) for full details):

- `cardToken` <span class="badge badge--primary">Required</span> – Token representing the card stored in the gateway (e.g. `"665630867"`).
- `amount` <span class="badge badge--primary">Required</span> – String amount with dot as decimal separator (e.g. `"20.00"`), matching `^\d+(\.\d+)?$`.
- `currency` <span class="badge badge--primary">Required</span> – 3-character ISO 4217 currency code (e.g. `"EUR"`).
- Optional references for reconciliation: `customerReference`, `transactionReference`, etc.

#### Returns

| Result | Notes |
| ------ | ----- |
| `200` | Sale successfully processed. The response body is a `motoSaleResponse` [Moto Transaction Response](restobjects#motoTransactionResponse) with the authorization result (approved/declined), authorization code, masked card details, acquirer TID, timestamps, etc. |
| `400` | Business rule error from the payment gateway (for example, CVV required, card token failure). Returned as `BadRequestError`, with `error.code` and `error.details` containing the gateway error code and description. |
| `422` | Payload validation error (`VALIDATION_FAILED`) when required fields are missing or do not match the schema (invalid amount pattern, currency length, etc.). |
| `5xx` | Internal error or gateway unavailability. The final outcome may be unknown and may require reconciliation. |

#### Behaviour examples

- **CVV required (3107)** — merchant configured with “CVV/CV2 input mandatory” for Card Not Present:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "amount": "20.00",
    "currency": "EUR",
    "cardToken": "665630867"
  }' \
  "https://cloud.handpoint.io/moto/sale"
```

Example response:

```json
{
  "error": {
    "statusCode": 400,
    "name": "BadRequestError",
    "message": "CVV required",
    "code": "3107",
    "details": {
      "errorGuid": "dae59b20-cf71-11f0-b588-a122fae316de",
      "errorCode": "3107",
      "description": "CVV required",
      "httpStatus": 400
    }
  }
}
```

A very common cause of **3107** is having “CVV/CV2 input mandatory” enabled for Card Not Present.

* **Invalid / unknown card token (5252)**:

  ```json
  {
    "error": {
      "code": "5252",
      "details": {
        "description": "Card token failure",
        "errorCode": "5252",
        "errorGuid": "10a3d120-cf75-11f0-95b2-770b7d1d8e67",
        "httpStatus": 404
      },
      "message": "Card token failure",
      "name": "BadRequestError",
      "statusCode": 400
    }
  }
  ```

* **Validation errors (422 `VALIDATION_FAILED`)** – for example, missing `amount`:

  ```json
  {
    "error": {
      "code": "VALIDATION_FAILED",
      "details": [
        {
          "code": "required",
          "info": {
            "missingProperty": "amount"
          },
          "message": "must have required property 'amount'",
          "path": ""
        }
      ],
      "message": "The request body is invalid. See error object `details` property for more info.",
      "name": "UnprocessableEntityError",
      "statusCode": 422
    }
  }
  ```

#### Code example – MOTO sale with `cardToken`

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "amount": "20.00",
    "currency": "EUR",
    "cardToken": "665630867",
    "customerReference": "order-12345",
    "transactionReference": "b7b2360d-3e9e-4b62-9a3a-2e6ef6c5cd01"
  }' \
  "https://cloud.handpoint.io/moto/sale"
```

---

### /moto/refund

`MotoRefund`

`POST /moto/refund` is used to perform a **MOTO refund without a payment reader**.

The refund is **linked** to a previous MOTO sale via `originalGuid`, and the gateway reuses the card associated with that
original transaction. No card data is passed in the refund request.

#### Parameters

| Parameter                                                                            | Notes                                                                                                   |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>             | Cloud API key used to authenticate the merchant.                                                        |
| `Request Body: MotoRefundRequest` <span class="badge badge--primary">Required</span> | [MotoRefundRequest](restobjects#motoRefundRequest) object containing `originalGuid`, `amount`, `currency` and optional merchant references. |

Typical fields (see [MotoRefundRequest](restobjects#motoRefundRequest) for full details):

* `originalGuid` <span class="badge badge--primary">Required</span> – GUID of the original sale to be refunded (e.g. `"1a41d9f0-cf72-11f0-95b2-770b7d1d8e67"`).
* `amount` <span class="badge badge--primary">Required</span> – String amount to be refunded (e.g. `"5.00"`), matching `^\d+(\.\d+)?$`.
* `currency` <span class="badge badge--primary">Required</span> – 3-character ISO 4217 code (e.g. `"EUR"`, `"USD"`).
* Optional: `customerReference`, `transactionReference`.

Supports full and partial refunds, depending on acquirer configuration.

#### Returns

| Result | Notes                                                                                                                                                                                                                   |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `200`  | Refund successfully processed. The response body is a `motoRefundResponse` [Moto Transaction Response](restobjects#motoTransactionResponse) including `guid`, `originalGuid`, `amount`, `currency`, `maskedCardNumber`, `approvalCode`, `issuerResponseText`, etc. |
| `400`  | Business rule error from the payment gateway (for example, currency mismatch, refund amount greater than the original sale). Returned as `BadRequestError`, with `error.code` and `error.details` describing the gateway error. |
| `422`  | Payload validation error (`VALIDATION_FAILED`) when required fields are missing or invalid (missing `originalGuid`, invalid amount, invalid currency format, etc.).                                                     |

#### Behaviour examples

* **Partial refund – happy path** (EUR 5.00 of a 20.00 EUR sale):

  ```shell
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
    -d '{
      "originalGuid": "1a41d9f0-cf72-11f0-95b2-770b7d1d8e67",
      "amount": "5.00",
      "currency": "EUR"
    }' \
    "https://cloud.handpoint.io/moto/refund"
  ```

* **Currency mismatch (3210)**

  ```json
  {
    "error": {
      "code": "3210",
      "details": {
        "description": "Original and linked currency do not match",
        "errorCode": "3210",
        "errorGuid": "35a2b220-cf7a-11f0-b588-a122fae316de",
        "httpStatus": 400
      },
      "message": "Original and linked currency do not match",
      "name": "BadRequestError",
      "statusCode": 400
    }
  }
  ```

* **Refund amount greater than original (3209)**

  ```json
  {
    "error": {
      "code": "3209",
      "details": {
        "description": "The requested refund amount is greater than the initial sale amount",
        "errorCode": "3209",
        "errorGuid": "e72ea940-cf7a-11f0-b588-a122fae316de",
        "httpStatus": 400
      },
      "message": "The requested refund amount is greater than the initial sale amount",
      "name": "BadRequestError",
      "statusCode": 400
    }
  }
  ```

* **Validation errors** – missing `originalGuid`, missing `amount`, invalid `currency` length, invalid `amount` pattern — are returned as `422 VALIDATION_FAILED` with one or more entries in `error.details`.

#### Code example – partial MOTO refund by `originalGuid`

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "originalGuid": "1a41d9f0-cf72-11f0-95b2-770b7d1d8e67",
    "amount": "5.00",
    "currency": "EUR",
    "customerReference": "refund-98765",
    "transactionReference": "a1fe8db5-69a4-4b4d-a704-94ac2570f9b0"
  }' \
  "https://cloud.handpoint.io/moto/refund"
```

---

### /moto/reversal

`MotoReversal`

`POST /moto/reversal` is used to **reverse (void)** a previous MOTO operation processed via the no-reader MOTO endpoints.

The request is linked to the original sale via `originalGuid`. No card data is sent; the gateway uses the original
transaction information.

Reversals are typically used to cancel a MOTO sale shortly after authorization, subject to acquirer rules.

#### Parameters

| Parameter                                                                              | Notes                                                                                                                                |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span>               | Cloud API key used to authenticate the merchant.                                                                                     |
| `Request Body: MotoReversalRequest` <span class="badge badge--primary">Required</span> | [MotoReversalRequest](restobjects#motoReversalRequest) object referencing the original MOTO transaction (`originalGuid`) and including the reversal `amount` and `currency`. |

Typical fields (see [MotoReversalRequest](restobjects#motoReversalRequest) for full details):

* `originalGuid` <span class="badge badge--primary">Required</span> – GUID of the original sale to be reversed.
* `amount` <span class="badge badge--primary">Required</span> – String amount to reverse (e.g. `"20.00"`), `^\d+(\.\d+)?$`.
* `currency` <span class="badge badge--secondary">Optional</span> – 3-character ISO 4217 code; if provided, must respect `minLength = 3`, `maxLength = 3` and may need to match the original transaction’s currency.
* Optional merchant references: `customerReference`, `transactionReference`.

#### Returns

| Result | Notes                                                                                                                                                                                                                                                                             |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `200`  | Reversal accepted and processed. Response body is a `motoReversalResponse` [Moto Transaction Response](restobjects#motoTransactionResponse) indicating whether the reversal was approved, with fields such as `guid`, `originalGuid`, `issuerResponseCode`, `issuerResponseText`, `f25`, etc. |
| `400`  | Business rule error from the payment gateway (for example, unknown `originalGuid`, reversal not allowed). Returned as `BadRequestError`, with `error.code` and `error.details` describing the gateway error (for example, code `3153`). |
| `422`  | Payload validation error (`VALIDATION_FAILED`) when required fields are missing or invalid (missing `originalGuid`, missing `amount`, invalid `currency`, invalid `amount` pattern).                                                                                              |

#### Behaviour examples

* **Happy path – full MOTO reversal**

  ```shell
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
    -d '{
      "originalGuid": "b28bdb10-cf87-11f0-b588-a122fae316de",
      "amount": "20.00",
      "currency": "EUR"
    }' \
    "https://cloud.handpoint.io/moto/reversal"
  ```

  Typical success response (simplified):

  ```json
  {
    "type": "motoReversalResponse",
    "httpStatus": 200,
    "amount": "20.00",
    "currency": "EUR",
    "guid": "3f7772a0-cf88-11f0-b588-a122fae316de",
    "originalGuid": "b28bdb10-cf87-11f0-b588-a122fae316de",
    "issuerResponseCode": "00",
    "issuerResponseText": "Successful",
    "maskedCardNumber": "************3555",
    "f25": "4000"
  }
  ```

* **Unknown / invalid `originalGuid` (3153)**

  ```json
  {
    "error": {
      "code": "3153",
      "details": {
        "description": "Unable to find message to reverse.",
        "errorCode": "3153",
        "errorGuid": "633a4370-cf88-11f0-b588-a122fae316de",
        "httpStatus": 404
      },
      "message": "Unable to find message to reverse.",
      "name": "BadRequestError",
      "statusCode": 400
    }
  }
  ```

* **Validation errors** – missing `originalGuid`, missing `amount`, invalid `currency` length, invalid `amount` pattern — result in `422 VALIDATION_FAILED` with one or more entries in `error.details`.

#### Code example – MOTO reversal by `originalGuid`

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "originalGuid": "b28bdb10-cf87-11f0-b588-a122fae316de",
    "amount": "20.00",
    "currency": "EUR",
    "customerReference": "void-001",
    "transactionReference": "4d7b1a2c-5bfd-4a30-9b6f-123456789abc"
  }' \
  "https://cloud.handpoint.io/moto/reversal"
```

## Reversal Operations <span class="badge badge--warning">Beta</span>

The Reversal endpoint allows you to **reverse any reversible transaction** (authorization, payment or refund) using only its identifier. The reversal is processed against the Handpoint gateway via Cloud API without requiring a physical payment terminal.

Cloud API currently supports:

- `POST /v1/reversal` — reverses a transaction identified by `originalGuid`.

All request and response payloads are defined in [Reversal objects](restobjects#reversal).

---

### /v1/reversal

`Reversal`

`POST /v1/reversal` is used to **reverse (void)** a previously completed transaction. The operation is linked to the original transaction via `originalGuid`. No card data is sent; the gateway resolves the original transaction internally.

Reversals are typically used to cancel an authorization or payment shortly after it was processed, subject to acquirer rules. For partial reversals, provide `amount` and `currency` to release only part of the held funds.

#### Parameters

| Parameter | Notes |
| --------- | ----- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span> | Cloud API key used to authenticate the merchant. |
| `Request Body: ViscusReversalRequest` <span class="badge badge--primary">Required</span> | [ViscusReversalRequest](restobjects#viscusReversalRequest) object identifying the transaction to reverse. |

Typical fields (see [ViscusReversalRequest](restobjects#viscusReversalRequest) for full details):

* `originalGuid` <span class="badge badge--primary">Required</span> – GUID of the transaction to reverse.
* `messageReasonCode` <span class="badge badge--secondary">Optional</span> – ISO 8583 reason code. Defaults to `CUSTOMER_CANCELLATION` when not provided.
* `timestamp` <span class="badge badge--secondary">Optional</span> – Terminal timestamp in `YYYYMMDDHHmmssSSS` format. Defaults to the current server time when not provided.
* `amount` <span class="badge badge--secondary">Optional</span> – Amount to reverse, for partial reversals only (e.g. `"15.00"`).
* `currency` <span class="badge badge--secondary">Optional</span> – ISO 4217 3-character code, for partial reversals only (e.g. `"EUR"`).

#### Returns

| Result | Notes |
| ------ | ----- |
| `200` | Reversal accepted and processed. Response body is a parsed gateway object. |
| `400` | Business rule error from the gateway (for example, unknown `originalGuid` or reversal not allowed). Returned as `BadRequestError` with `error.code` and `error.details`. |
| `403` | Forbidden — the API key does not belong to a merchant, or the merchant is not configured. |
| `422` | Payload validation error (`VALIDATION_FAILED`) — `originalGuid` is missing, `messageReasonCode` is not one of the allowed values, or `currency` is not exactly 3 characters. |

#### Behaviour examples

* **Happy path – full reversal**

  ```shell
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
    -d '{
      "originalGuid": "0c9d9df0-48ec-11eb-81a1-470a19c80d3a"
    }' \
    "https://cloud.handpoint.io/v1/reversal"
  ```

* **Partial reversal**

  ```shell
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
    -d '{
      "originalGuid": "0c9d9df0-48ec-11eb-81a1-470a19c80d3a",
      "amount": "15.00",
      "currency": "EUR"
    }' \
    "https://cloud.handpoint.io/v1/reversal"
  ```

* **With explicit reason code**

  ```shell
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
    -d '{
      "originalGuid": "0c9d9df0-48ec-11eb-81a1-470a19c80d3a",
      "messageReasonCode": "TIMEOUT_WAITING_FOR_RESPONSE"
    }' \
    "https://cloud.handpoint.io/v1/reversal"
  ```

* **Validation error – missing `originalGuid`**

  ```json
  {
    "error": {
      "statusCode": 422,
      "name": "UnprocessableEntityError",
      "message": "The request body is invalid.",
      "code": "VALIDATION_FAILED",
      "details": [
        {
          "path": "",
          "code": "required",
          "message": "must have required property 'originalGuid'",
          "info": { "missingProperty": "originalGuid" }
        }
      ]
    }
  }
  ```

#### Code example – full reversal

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "originalGuid": "0c9d9df0-48ec-11eb-81a1-470a19c80d3a"
  }' \
  "https://cloud.handpoint.io/v1/reversal"
```

---

## Batch Operations <span class="badge badge--warning">Beta</span>

:::info
Batch Operations are not available for all acquirers. Contact your Handpoint relationship manager to find out if this feature is supported for your acquirer.
:::

Batch operations allow you to remotely **manage batches on a specific payment terminal** using Cloud API.

These endpoints are typically used in scenarios where the acquirer or merchant workflow is batch-based (for example,
daily settlement batches per terminal).

Cloud API currently supports the following batch operations:

- `POST /batch/close` — requests the **closure of a batch** for a given terminal (`deviceType`, `serialNumber`) and `batchNumber`.
- `POST /batch/summary` — retrieves a **summary of a batch** for a given terminal (`deviceType`, `serialNumber`) and `batchNumber`.
- `POST /batch/detail` — retrieves **batch detail** (including a list of transactions) for a given terminal (`deviceType`, `serialNumber`) and `batchNumber` (and optional `rrn`).


All request and response payloads are defined in the corresponding [Batch objects](restobjects#batch).

:::info
In MOTO scenarios, the `deviceType` and `serialNumber` fields can refer to a **virtual terminal** (`VT`) instead of a physical device. Use `VT` as the `deviceType` and the serial number of the virtual terminal assigned to the merchant. The serial number of the virtual terminal can be retrieved from the response of the [/initialize](restendpoints#initialize) endpoint.
:::

---

### /batch/close

`BatchClose`

`POST /batch/close` is used to request **closure of a batch** for a specific payment terminal, identified by its
`deviceType` and `serialNumber`, and a `batchNumber`.

Typical use cases:

- End-of-day batch closure triggered from a back-office or back-office job.
- Manual batch close as part of a support or reconciliation process.

#### Parameters

| Parameter | Notes |
| --------- | ----- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span> | Cloud API key used to authenticate the merchant. |
| `Request Body: BatchCloseRequest` <span class="badge badge--primary">Required</span> | [BatchCloseRequest](restobjects#batchCloseRequest) object containing `deviceType`, `serialNumber` and `batchNumber`. |

Typical fields in the request body (see [BatchCloseRequest](restobjects#batchCloseRequest) for full details):

- `deviceType` <span class="badge badge--primary">Required</span> – Terminal model identifier (for example, `"PAXA920MAX"`).
- `serialNumber` <span class="badge badge--primary">Required</span> – Serial number of the payment terminal (for example, `"2740013262"`).
- `batchNumber` <span class="badge badge--primary">Required</span> – Identifier of the batch to close (for example, `"1"`).

#### Returns

| Result | Notes |
| ------ | ----- |
| `200` | Batch close request accepted. The response body is a [BatchCloseResponse](restobjects#batchCloseResponse) with the batch number, a unique `closeBatchGuid`, timestamps and an issuer-style response code/text. |
| `400` | Business rule error or generic gateway error. Returned as `BadRequestError`, with `error.code`, `error.message` and `error.details` describing the problem. |
| `422` | Payload validation error (`VALIDATION_FAILED`) when required fields are missing or do not match the schema (for example, missing `batchNumber`). |
| `5xx` | Internal error or service unavailability. The final outcome of the batch close may be unknown and may require reconciliation or a retry at a later time. |

#### Behaviour examples

**Happy path – close batch 1 for a terminal**

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "deviceType": "PAXA920MAX",
    "serialNumber": "2740013262",
    "batchNumber": "1"
  }' \
  "https://cloud.handpoint.io/batch/close"
```

Example response:

```json
{
  "batchNumber": "1",
  "closeBatchGuid": "14431ad0-d0dc-11f0-9ed0-695d1a368668",
  "closedAt": "20251204064010281",
  "customerReference": {},
  "httpStatus": "200",
  "issuerResponseCode": "00",
  "issuerResponseText": "ACCEPTED"
}
```

**Validation error – missing `batchNumber`**

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "deviceType": "PAXA920MAX",
    "serialNumber": "2740013262"
  }' \
  "https://cloud.handpoint.io/batch/close"
```

Response:

```json
{
  "error": {
    "code": "VALIDATION_FAILED",
    "details": [
      {
        "code": "required",
        "info": {
          "missingProperty": "batchNumber"
        },
        "message": "must have required property 'batchNumber'",
        "path": ""
      }
    ],
    "message": "The request body is invalid. See error object `details` property for more info.",
    "name": "UnprocessableEntityError",
    "statusCode": 422
  }
}
```

#### Code example – Close batch via `curl`

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "deviceType": "PAXA920MAX",
    "serialNumber": "2740013262",
    "batchNumber": "1"
  }' \
  "https://cloud.handpoint.io/batch/close"
```

### /batch/summary

`BatchSummary`

`POST /batch/summary` is used to retrieve a **summary of a batch** for a specific payment terminal, identified by its
`deviceType`, `serialNumber`, and `batchNumber`.

Typical use cases:

- Back-office reconciliation after a batch close.
- Reporting and dashboards that need batch-level totals (number of transactions, net amount, status).
- Support tools that need to check the status of a batch on a given terminal.

#### Parameters

| Parameter | Notes |
| --------- | ----- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span> | Cloud API key used to authenticate the merchant. |
| `Request Body: BatchSummaryRequest` <span class="badge badge--primary">Required</span> | [BatchSummaryRequest](restobjects#batchSummaryRequest) object containing `deviceType`, `serialNumber` and `batchNumber`. |

Typical fields in the request body (see [BatchSummaryRequest](restobjects#batchSummaryRequest) for full details):

- `deviceType` <span class="badge badge--primary">Required</span> – Terminal model identifier (for example, `"PAXA920MAX"`).
- `serialNumber` <span class="badge badge--primary">Required</span> – Serial number of the payment terminal (for example, `"2740013262"`).
- `batchNumber` <span class="badge badge--primary">Required</span> – Identifier of the batch whose summary is being requested (for example, `"1"`).

#### Returns

| Result | Notes |
| ------ | ----- |
| `200` | Batch summary successfully retrieved. The response body is a [BatchSummaryResponse](restobjects#batchSummaryResponse) with batch status, transaction counts, net amount and optional custom fields. |
| `400` | Business / lookup error (for example, the batch cannot be summarised for the given terminal). Returned as `BadRequestError`, with `error.code`, `error.message` and optional `error.details`. |
| `422` | Payload validation error (`VALIDATION_FAILED`) when required fields are missing or do not match the schema (for example, missing `batchNumber`). |
| `5xx` | Internal error or service unavailability. The batch itself is not modified; the integrator may retry later or reconcile through other means. |

#### Behaviour examples

**Happy path – summary for batch `1`**

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "deviceType": "PAXA920MAX",
    "serialNumber": "2740013262",
    "batchNumber": "1"
  }' \
  "https://cloud.handpoint.io/batch/summary"
```

Example response:

```json
{
  "batchNumber": "1",
  "batchStatus": "CLOSED",
  "batchSummaryGuid": "61573ba0-08ac-11f1-b002-eb225f134f40",
  "customFields": {
    "entry": [
      {
        "key": "salesCount",
        "value": "155"
      },
      {
        "key": "refundsCount",
        "value": "3"
      },
      {
        "key": "issuerBatchCloseLocalTimestamp",
        "value": "2025-12-05T11:00:00"
      }
    ]
  },
  "httpStatus": "200",
  "issuerResponseCode": "00",
  "issuerResponseText": "DATA RETRIEVED",
  "netAmount": "245.00",
  "transactionCount": "158"
}
```

Key fields:

* `batchStatus` – Current status of the batch (for example, `"CLOSED"`).
* `transactionCount` – Total number of transactions in the batch.
* `netAmount` – Net amount for the batch in major units as a string (for example, `"245.00"`).
* `customFields.entry` – Optional list of key/value pairs with acquirer-specific metrics (for example, `salesCount`, `refundsCount`, `issuerBatchCloseLocalTimestamp`).

**Validation error – missing `batchNumber`**

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "deviceType": "PAXA920MAX",
    "serialNumber": "2740013262"
  }' \
  "https://cloud.handpoint.io/batch/summary"
```

Response:

```json
{
  "error": {
    "code": "VALIDATION_FAILED",
    "details": [
      {
        "code": "required",
        "info": {
          "missingProperty": "batchNumber"
        },
        "message": "must have required property 'batchNumber'",
        "path": ""
      }
    ],
    "message": "The request body is invalid. See error object `details` property for more info.",
    "name": "UnprocessableEntityError",
    "statusCode": 422
  }
}
```

#### Code example – Batch summary

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "deviceType": "PAXA920MAX",
    "serialNumber": "2740013262",
    "batchNumber": "1"
  }' \
  "https://cloud.handpoint.io/batch/summary"
```

### /batch/detail

`BatchDetail`
A Batch Detail allows the user to retrieve information about a specific batch (including a list of transacctions) included in the batch for a specific payment terminal.

`POST /batch/detail` is used to retrieve information about a specific batch (including a list of transacctions) included in the batch for a specific payment terminal, identified by its
`deviceType`, `serialNumber`, `batchNumber` and `RRN`.

#### Parameters

| Parameter | Notes |
| --------- | ----- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span> | Cloud API key used to authenticate the merchant. |
| `Request Body: BatchDetailRequest` <span class="badge badge--primary">Required</span> | [BatchDetailRequest](restobjects#batchDetailRequest) object containing `deviceType`, `serialNumber`, `batchNumber` and `rrn`. |

Typical fields in the request body (see [BatchDetailRequest](restobjects#batchDetailRequest) for full details):

- `deviceType` <span class="badge badge--primary">Required</span> – Terminal model identifier (for example, `"PAXA920MAX"`).
- `serialNumber` <span class="badge badge--primary">Required</span> – Serial number of the payment terminal (for example, `"2740013262"`).
- `batchNumber` <span class="badge badge--primary">Required</span> – Identifier of the batch whose summary is being requested (for example, `"1"`).
- `rrn` <span class="badge badge--primary">Optional</span> – Retrieval Reference Number, unique number assigned by the acquirer (for example, `"123"`).

#### Returns

| Result | Notes |
| ------ | ----- |
| `200` | Batch detail successfully retrieved. The response body is a [BatchDetailResponse](restobjects#batchDetailResponse) with batch status and optional details fields. |
| `400` | Business / lookup error (for example, the batch cannot be summarised for the given terminal). Returned as `BadRequestError`, with `error.code`, `error.message` and optional `error.details`. |
| `422` | Payload validation error (`VALIDATION_FAILED`) when required fields are missing or do not match the schema (for example, missing `batchNumber`). |
| `5xx` | Internal error or service unavailability. The batch itself is not modified; the integrator may retry later or reconcile through other means. |

#### Behaviour examples

**Happy path – detail for batch `1`**

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "deviceType": "PAXA920MAX",
    "serialNumber": "2740013262",
    "batchNumber": "1"
  }' \
  "https://cloud.handpoint.io/batch/detail"
```

Example response:

```json
{
  "httpStatus": "200",
  "batchNumber": "1",
  "closedAt": "20260213135114884",
  "issuerResponseCode": "00",
  "issuerResponseText": "Batch detail retrieved",
  "details": [
    {
      "transactionType": "SALE",
      "amount": "100.00",
      "batchDetailElementGuid": "2fac8676-396a-4cf1-a5ab-650f3f79e923"
    },
    {
      "transactionType": "SALE",
      "retrievalReferenceNumber": "RRN08236",
      "amount": "50.00",
      "batchDetailElementGuid": "dcb718ef-59f0-4de8-b414-41048782aff9"
    },
    {
      "transactionType": "REFUND",
      "retrievalReferenceNumber": "RRN08237",
      "amount": "25.00",
      "batchDetailElementGuid": "d1a7ef06-c429-4a57-a07b-b461482bcafa"
    }
  ],
  "batchDetailGuid": "10360390-08e4-11f1-8bbe-a982e87fcbf2",
  "batchStatus": "CLOSED"
}
```

Key fields:

* `batchStatus` – Current status of the batch (for example, `"CLOSED"`).
* `details.entry` – Optional list with transaction info (for example, `transactionType`, `amount`, `retrievalReferenceNumber`, `batchDetailElementGuid`).

**Validation error – missing `batchNumber`**

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "deviceType": "PAXA920MAX",
    "serialNumber": "2740013262"
  }' \
  "https://cloud.handpoint.io/batch/detail"
```

Response:

```json
{
  "error": {
    "code": "VALIDATION_FAILED",
    "details": [
      {
        "code": "required",
        "info": {
          "missingProperty": "batchNumber"
        },
        "message": "must have required property 'batchNumber'",
        "path": ""
      }
    ],
    "message": "The request body is invalid. See error object `details` property for more info.",
    "name": "UnprocessableEntityError",
    "statusCode": 422
  }
}
```

#### Code example – Batch detail

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "deviceType": "PAXA920MAX",
    "serialNumber": "2740013262",
    "batchNumber": "1"
  }' \
  "https://cloud.handpoint.io/batch/detail"
```

---

## Pre-authorization Operations <span class="badge badge--warning">Beta</span>

:::info
Pre-authorization operations are only available for acquirers that support pre-authorization flows. Contact your Handpoint relationship manager to confirm support for your acquirer.
:::

Pre-authorization operations allow you to **manage open pre-authorizations** remotely via Cloud API. A pre-authorization reserves funds on a card without charging them; the increase and capture endpoints let you adjust or finalize that reservation without requiring a physical payment terminal.

Cloud API currently supports the following pre-authorization operations:

- `POST /preauthorization/increase` — increases (or decreases, with `subtract: "1"`) the authorized amount of an open pre-authorization.
- `POST /preauthorization/capture` — finalizes (captures) an open pre-authorization, charging the captured amount.

All request and response payloads are defined in the corresponding [Pre-authorization objects](restobjects#preauthorization).

---

### /preauthorization/increase

`PreauthIncrease`

`POST /preauthorization/increase` is used to **modify the authorized amount** of an existing open pre-authorization. The operation is linked to the original pre-authorization via `originalGuid`.

Pass `subtract: "1"` to decrease the authorized amount instead of increasing it.

#### Parameters

| Parameter | Notes |
| --------- | ----- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span> | Cloud API key used to authenticate the merchant. |
| `Request Body: PreauthIncreaseRequest` <span class="badge badge--primary">Required</span> | [PreauthIncreaseRequest](restobjects#preauthIncreaseRequest) object containing the original pre-authorization GUID and the amount delta. |

Typical fields in the request body (see [PreauthIncreaseRequest](restobjects#preauthIncreaseRequest) for full details):

- `originalGuid` <span class="badge badge--primary">Required</span> – GUID of the original pre-authorization transaction.
- `increaseAmount` <span class="badge badge--primary">Required</span> – Amount delta to apply (for example, `"10.00"`).
- `tipAmount` <span class="badge badge--secondary">Optional</span> – Tip amount to add (for example, `"2.00"`).
- `subtract` <span class="badge badge--secondary">Optional</span> – Pass `"1"` to decrease the authorized amount instead of increasing it.
- `customerReference` <span class="badge badge--secondary">Optional</span> – Integrator-defined reference, forwarded as-is to the gateway.

#### Returns

| Result | Notes |
| ------ | ----- |
| `200` | Pre-authorization increase accepted. Response body is a parsed gateway object. |
| `400` | Business rule error from the gateway (for example, unknown `originalGuid` or pre-authorization no longer open). Returned as `BadRequestError` with `error.code` and `error.details`. |
| `403` | Forbidden — the API key does not belong to a merchant. Partner keys are not accepted by this endpoint. |
| `422` | Payload validation error (`VALIDATION_FAILED`) — `originalGuid` or `increaseAmount` is missing. |

#### Behaviour examples

**Happy path – increase the authorized amount**

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "originalGuid": "0c9d9df0-48ec-11eb-81a1-470a19c80d3a",
    "increaseAmount": "10.00"
  }' \
  "https://cloud.handpoint.io/preauthorization/increase"
```

**Decrease the authorized amount**

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "originalGuid": "0c9d9df0-48ec-11eb-81a1-470a19c80d3a",
    "increaseAmount": "5.00",
    "subtract": "1"
  }' \
  "https://cloud.handpoint.io/preauthorization/increase"
```

**With tip and customer reference**

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "originalGuid": "0c9d9df0-48ec-11eb-81a1-470a19c80d3a",
    "increaseAmount": "10.00",
    "tipAmount": "2.00",
    "customerReference": "table-12-increase"
  }' \
  "https://cloud.handpoint.io/preauthorization/increase"
```

**Validation error – missing `increaseAmount`**

```json
{
  "error": {
    "statusCode": 422,
    "name": "UnprocessableEntityError",
    "message": "The request body is invalid.",
    "code": "VALIDATION_FAILED",
    "details": [
      {
        "path": "",
        "code": "required",
        "message": "must have required property 'increaseAmount'",
        "info": { "missingProperty": "increaseAmount" }
      }
    ]
  }
}
```

#### Code example – Increase pre-authorization

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "originalGuid": "0c9d9df0-48ec-11eb-81a1-470a19c80d3a",
    "increaseAmount": "10.00"
  }' \
  "https://cloud.handpoint.io/preauthorization/increase"
```

---

### /preauthorization/capture

`PreauthCapture`

`POST /preauthorization/capture` is used to **finalize (capture) an open pre-authorization**, charging the `capturedAmount` to the cardholder. Once captured, the pre-authorization is settled and the held funds are transferred.

#### Parameters

| Parameter | Notes |
| --------- | ----- |
| `Header: ApiKeyCloud` <span class="badge badge--primary">Required</span> | Cloud API key used to authenticate the merchant. |
| `Request Body: PreauthCaptureRequest` <span class="badge badge--primary">Required</span> | [PreauthCaptureRequest](restobjects#preauthCaptureRequest) object containing the original pre-authorization GUID and the amount to capture. |

Typical fields in the request body (see [PreauthCaptureRequest](restobjects#preauthCaptureRequest) for full details):

- `originalGuid` <span class="badge badge--primary">Required</span> – GUID of the original pre-authorization transaction.
- `capturedAmount` <span class="badge badge--primary">Required</span> – Amount to capture and charge (for example, `"120.00"`).
- `tipAmount` <span class="badge badge--secondary">Optional</span> – Tip amount to include in the captured total (for example, `"5.00"`).
- `customerReference` <span class="badge badge--secondary">Optional</span> – Integrator-defined reference, forwarded as-is to the gateway.

#### Returns

| Result | Notes |
| ------ | ----- |
| `200` | Pre-authorization capture accepted. Response body is a parsed gateway object. |
| `400` | Business rule error from the gateway (for example, unknown `originalGuid`, pre-authorization already captured, or captured amount exceeds authorized amount). Returned as `BadRequestError` with `error.code` and `error.details`. |
| `403` | Forbidden — the API key does not belong to a merchant. Partner keys are not accepted by this endpoint. |
| `422` | Payload validation error (`VALIDATION_FAILED`) — `originalGuid` or `capturedAmount` is missing. |

#### Behaviour examples

**Happy path – capture a pre-authorization**

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "originalGuid": "0c9d9df0-48ec-11eb-81a1-470a19c80d3a",
    "capturedAmount": "120.00"
  }' \
  "https://cloud.handpoint.io/preauthorization/capture"
```

**With tip and customer reference**

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "originalGuid": "0c9d9df0-48ec-11eb-81a1-470a19c80d3a",
    "capturedAmount": "120.00",
    "tipAmount": "5.00",
    "customerReference": "hotel-folio-4422"
  }' \
  "https://cloud.handpoint.io/preauthorization/capture"
```

**Validation error – missing `capturedAmount`**

```json
{
  "error": {
    "statusCode": 422,
    "name": "UnprocessableEntityError",
    "message": "The request body is invalid.",
    "code": "VALIDATION_FAILED",
    "details": [
      {
        "path": "",
        "code": "required",
        "message": "must have required property 'capturedAmount'",
        "info": { "missingProperty": "capturedAmount" }
      }
    ]
  }
}
```

#### Code example – Capture pre-authorization

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX" \
  -d '{
    "originalGuid": "0c9d9df0-48ec-11eb-81a1-470a19c80d3a",
    "capturedAmount": "120.00"
  }' \
  "https://cloud.handpoint.io/preauthorization/capture"
```

