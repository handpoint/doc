---
sidebar_position: 4
id: androidapioverview
---





# API overview

 **Supported functionality**

- List the available payment terminals
- Connect/disconnect to and from a payment terminal.
- Automatically or manually reconnect to a payment terminal.
- Execute financial transactions.
- Get the status of transactions.
- Control and access the device logs.

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