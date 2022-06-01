---
sidebar_position: 5
id: expressjsonrequest
---

# Json Request

**Request fields**

| Name      | Type | Description |
| ----------- | ----------- | ----------- |
| action      | object       | <span class="badge badge--primary">Required</span> Contains the transaction type and relevant parameters.|
| client     | object        | <span class="badge badge--primary">Required</span> Contains information specific to the client setup. |

<br></br>

**Action fields**

| Name      | Type | Description |
| ----------- | ----------- | ----------- |
| type      | string       | <span class="badge badge--primary">Required</span> The type of transaction you intend to perform, currently supported types are "sale", "refund", "saleReversal", "refundReversal", "saleAndTokenizeCard" and "enableScanner".|
| parameters     | object        | <span class="badge badge--primary">Required</span> An object containing the keys an values with the parameters required for this transaction. |
| extraParameters     | object        | <span class="badge badge--primary">Required</span> Contains a custom set of keys and values that are sent to the Handpoint gateway and will be delivered back in the response. Useful for tracking the transactions, merchants, etc.|

<br></br>

**Transaction Parameters fields**

| Name      | Type | Description |
| ----------- | ----------- | ----------- |
| amount      | string       | <span class="badge badge--primary">Required</span> The amount of money, in the smallest unit of the applicable currency. For US dollars, this value is in cents. (So, $12 would result in 1200. $0.01 would result in 1) This value is always an integer.|
| currency     | string        | <span class="badge badge--primary">Required</span> The type of currency involved in the current payment, in ISO 4217 format. For example, the currency code for US dollars is USD. |
| originalTransactionID     | string        | <span class="badge badge--primary">Required</span> (Required for reversals.) The original transaction Id required to reverse/cancel a transaction.|

<br></br>

**Barcode / QR Scanner Parameters fields**

| Name      | Type | Description |
| ----------- | ----------- | ----------- |
| multiScan      | boolean       | <span class="badge badge--secondary">Optional</span> True if you want the scanner to stay on to capture multiple codes. False to turn off the scanner after the first succesful scan, timeout or cancel. Default is False.|
| autoScan     | boolean        | <span class="badge badge--secondary">Optional</span> True if you want the scanner to function automatically without the press of a button. Default is False. |
| resultsGrouped     | boolean        | <span class="badge badge--secondary">Optional</span> True if you want the results of the scan to come all grouped when the scanner is turned off. Otherwise the device will send an event per each code scanned. Default is True.|
| timeout     | integer        | <span class="badge badge--secondary">Optional</span> The amount of seconds after which the scanner, if left idle, turns itself off. Default is 0.|

<br></br>

**Client fields**

| Name      | Type | Description |
| ----------- | ----------- | ----------- |
| clientId      | string       | Arbitrary identification of the client. Your APP_ID or just an unique identifier of your web client.|
| ssk     | string        | Shared Secret Key to activate the payment terminal. |
| autoReturn     | boolean        | <span class="badge badge--primary">Required</span> If true, the Express client automatically gets hidden/switches back to your app following a short timeout after the transaction completes. Otherwise, the merchant must tap the back button to return to your app.|
| autoReturnTimeout     | integer        | Number of seconds to wait before switching back to your app if autoReturn is true. The default value is 10.|