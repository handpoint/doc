---
sidebar_position: 8
id: expressjsonrequest
---

# Json Request

**Request fields**

| Name      | Type | Description |
| ----------- | ----------- | ----------- |
| action      | object       | Required. Contains the transaction type and relevant parameters|
| client     | object        | Required. Contains information specific to the client setup |

**Action fields**

| Name      | Type | Description |
| ----------- | ----------- | ----------- |
| type      | string       | Required. The type of transaction you intend to perform, currently supported types are "sale", "refund", "saleReversal", "refundReversal", "saleAndTokenizeCard", "enableScanner"|
| parameters     | object        | Required. An object containing the keys an values with the parameters required for this transaction. |
| extraParameters     | object        | Required. Contains a custom set of keys and values passed that will go to the gateway and will be delivered back in the response. Useful for tracking the transactions, merchants, etc... |


**Transaction Parameters fields**

| Name      | Type | Description |
| ----------- | ----------- | ----------- |
| amount      | string       | Required. The amount of money, in the smallest unit of the applicable currency. For US dollars, this value is in cents. (So, $12 would result in 1200. $0.01 would result in 1) This value is always an integer.|
| currency     | string        | Required. The type of currency involved in the current payment, in ISO 4217 format. For example, the currency code for US dollars is USD. |
| originalTransactionID     | string        | Required. (Required for reversals.) The original transaction Id required to reverse/cancel a transaction.|


**Barcode / QR Scanner Parameters fields**

| Name      | Type | Description |
| ----------- | ----------- | ----------- |
| multiScan      | boolean       | Optional. True if you want the scanner to stay on to capture multiple codes. False to shut off after the first succesful scan, timeout or cancel. Default is False.|
| autoScan     | boolean        | Optional. True if you want the scanner to function automatically without the press of a button. Default is False. |
| resultsGrouped     | boolean        | Optional. True if you want the results of the scan to come all grouped when the scanner is turned off. Otherwise the device will send an event per each code scanned. Default is True.|
| timeout     | integer        | Optional. The amount of seconds after which the scanner, if left idle, turns itself off. Default is 0.|


**Client fields**

| Name      | Type | Description |
| ----------- | ----------- | ----------- |
| clientId      | string       | Arbitrary identification of the client. Your APP_ID or just an unique identifier of your web client.|
| ssk     | string        | Shared Secret Key to activate the card reader. |
| autoReturn     | boolean        | Required. If true, Express client automatically gets hidden/switches back to your app following a short timeout after the transaction completes. Otherwise, the merchant must tap the Back button to return to your app.|
| autoReturnTimeout     | integer        | Number of seconds to wait before switching back to your app if autoReturn is true. The default value is 10|