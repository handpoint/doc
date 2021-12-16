---
sidebar_position: 9
id: expressjsonresponse
---


# Json Response

The response object is sent to the callback url and contains data relevant to the financial operation. It contains relevant information, extra parameters, a representation of the TransactionResult object returned from our native libraries and any error that occurred.

It is formatted in JSON and structured as a collection of "name":"value" pairs. Values are always a string except in the cases where the value is a boolean or another collection of "name":"value" pairs.

The response will be packed and added to your callbackUrl in the following format `https://your_callback_url?data=<packed_response_data>` in a GET request.

`<packed_response_data>` is a JSON string that has been URL encoded to make it safe to use as a GET parameter.

**Response sample**

```json
{ "metadata": {
            "appVersion": "1.0.0",
            "systemInfo": {
                "osName": "Windows 7 Home edition",
                "deviceName": "PP917838383832",
                "internetConnectionType": [
                    "WiFi",
                    "Ethernet"
                ]
            },
            "protocolVersion": "v1"
        },
        "transactionResult": {
            "statusMessage": "AUTH CODE 12345",
            "type": "SALE",
            "finStatus": "AUTHORISED",
            "requestedAmount": "1000",
            "gratuityAmount": "000",
            "gratuityPercentage": "0",
            "totalAmount": "1000",
            "currency": "USD",
            "transactionID": "00021010001-10033331231",
            "eftTransactionID": "778799887-77798987-798798878887888",
            "originalEftTransactionID": "778799887-77798987-798798878887888",
            "eftTimestamp": "1476113261",
            "authorisationCode": "155884656588899",
            "verificationMethod": "PIN",
            "cardEntryType": "ICC",
            "cardSchemeName": "VISA",
            "errorMessage": "No error",
            "customerReference": "0000000",
            "budgetNumber": "0",
            "recoveredTransaction": false,
            "cardTypeId": "U015",
            "merchantReceipt": "https://url_to_merchant_receipt",
            "customerReceipt": "https://url_to_customer_receipt"
        },
        "deviceStatus": {
            "serialNumber": "615856933558",
            "batteryStatus": "100%",
            "batterymV": "234",
            "batteryCharging": "Charging",
            "externalPower": "Connected",
            "applicationName": "EFTClient",
            "applicationVersion": "2.15.789"
        },
        "extraParameters" : {}
    }
        
```      

**Metadata fields**

| Name      | Type | Description |
| ----------- | ----------- | ----------- |
| appVersion      | string       | A string representation of the client version.|
| systemInfo     | object        | An object containing info about the Express client |
| protocolVersion     | string        | A string representation of the Express protocol version used in this request. |

**SystemInfo fields**

| Name      | Type | Description |
| ----------- | ----------- | ----------- |
| osName      | string       | A string containing the name and version of the OS the client is running in.|
| deviceName     | string        | A string containing the Bluetooth name of the card reader. |
| internetConnectionType     | array        | A list of the available internet connection methods. |