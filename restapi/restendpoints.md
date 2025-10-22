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


## /transaction-result/{transactionResultId}


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

## /transactions/{guid}/tip-adjustment


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

:::warning
This endpoint does **not** use **https://cloud.handpoint.(io/com)/** as a base URL, it uses **https://transactions.handpoint.(io/com)/**
:::


The `https://transactions.handpoint.com/transactions/{transactionReference}/status` endpoint is a RESTful API endpoint designed to retrieve the status of the first transaction associated with a given `transactionReference`. This endpoint returns the status of the initial transaction linked to the reference, reflecting the current state of that transaction.The `transactionReference` is a unique value that you need to generate and pass in the original [ transaction request](restobjects.md#transactionRequest).

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
      "https://transactions.handpoint.com/transactions/3e665342-a95b-49c1-b6fe-b3f102305a76/status" (production)
      "https://transactions.handpoint.io/transactions/3e665342-a95b-49c1-b6fe-b3f102305a76/status" (development)

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

## /transactions/{transactionReference}/status/{selector}

:::warning
This endpoint does **not** use **https://cloud.handpoint.(io/com)/** as a base URL, it uses **https://transactions.handpoint.(io/com)/**
:::

The `https://transactions.handpoint.io/transactions/{transactionReference}/status/{selector}` endpoint is a RESTful API that retrieves the status of transactions associated with a given `transactionReference`. The `{selector}` path parameter allows you to specify whether you want to retrieve the status of a specific transaction by its index or retrieve all transactions associated with the `transactionReference`.

**Selector Values**

| Selector      | Description |
| ------------- | ----------- |
| all           | Returns the status of all transactions associated with the given `transactionReference`. |
| first         | Returns the status of the first transaction associated with the `transactionReference`. |
| last          | Returns the status of the last transaction associated with the `transactionReference`. |
| {index}       | Returns the status of a specific transaction identified by its 1-based index in the sequence of transactions associated with the `transactionReference`. For example, `1` for the first transaction, `2` for the second, and so on. |


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
```https://cloud.handpoint.io/devices/{deviceType}/{serialNumber}/{command}```

Where:
- `{deviceType}` is the type of the device (e.g., PAXIM30)
- `{serialNumber}` is the serial number of the device (e.g., 1640013848)
- `{command}` is the specific command to execute

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

`POST /devices/{deviceType}/{serialNumber}/set-unattended-mode`

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

`POST /devices/{deviceType}/{serialNumber}/set-locale`

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

`POST /devices/{deviceType}/{serialNumber}/set-password-protected`

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

`POST /devices/{deviceType}/{serialNumber}/reboot`

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

`POST /devices/{deviceType}/{serialNumber}/set-screen-brightness`

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

`POST /devices/{deviceType}/{serialNumber}/set-reboot-time`

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