---
sidebar_position: 3
id: windowsapioverview
---

# API overview

### How to implement a Sale Transaction

The below flow chart shows the interaction between the SDK, the payment terminal and your application. The orange arrows represent methods (requests) that need to be invoked to communicate with the Handpoint SDK's. The dark arrows represent events that need to be integrated in your code in order to retrieve information from the SDK´s and the card reader.

![Sandbox logo](/img/SaleTransaction.png)

### How to implement a Sale Transaction with Recovery feature

At some point, the connection between the SDK and the card reader can become unstable. For example, the Bluetooth connection can be cut in the middle of a sale transaction if the smartphone runs out of battery. If this happens, you need to have implemented the “transaction recovery feature” in order to get the receipts from the previous transaction and knowing if it was successful despite the connection problem.

![Sandbox logo](/img/SaleTransactionRecovery.png)

**Supported functionality**
- Discovery of remote BT and CLOUD devices.
- Connect to remote BT and CLOUD device.
- Physical connection to HiPro external accessory.
- Automatic or manual reconnection to the card reader.
- Executing financial transaction.
- Reporting status of transactions.
- Control and access to device logs.
- Barcode scanner with HiPro card readers.
- Limited card reader simulation.

**Processing Payments Simulation**

Your test payments are sent against a test server on the Handpoint side which simulates the behavior of an acquiring bank. Funds are not moved and sensitive data from the card is fully encrypted. You can use trigger amounts to generate some specific responses from our server:

**Sale amounts**

| Amount      | Behaviour |
| ----------- | ----------- |
| 37.79      | Issuer response code = 01 (Refer to issuer)       |
| 37.84      | Issuer response code = 05 (Not authorized)        |
| 37.93      | Issuer response code = 04 (Pick up card)       |
| 37.57      | Request is partially approved        |
| 37.68      | Request timeout       |
