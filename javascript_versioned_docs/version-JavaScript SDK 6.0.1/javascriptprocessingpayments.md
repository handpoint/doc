---
sidebar_position: 6
id: javascriptprocessingpayments
---


# Processing Payments Simulation

Test transactions are conducted against a test server which is designed to simulate the behavior of an acquiring bank without moving any funds. As with every Handpoint terminal, sensitive card data is fully encrypted.

Use trigger amounts to generate some specific responses from our server:

**Sale amounts**

| Amount      | Behaviour |
| ----------- | ----------- |
| 37.79      | Issuer response code = 01 (Refer to issuer)       |
| 37.84      | Issuer response code = 05 (Not authorized)        |
| 37.93      | Issuer response code = 04 (Pick up card)       |
| 37.57      | Request is partially approved        |
| 37.68      | Request timeout       |