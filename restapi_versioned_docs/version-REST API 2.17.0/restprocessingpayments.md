---
sidebar_position: 3
id: restprocessingpayments
---

# Trigger Amounts 

Your test payments are sent against a test server on the Handpoint side which simulates the behavior of an acquiring bank. Funds are not moved and sensitive data from the card is fully encrypted. You can use trigger amounts to generate some specific responses from our servers:

**Sale amounts**

| Amount      | Behaviour |
| ----------- | ----------- |
| 37.79      | Issuer response code = 01 (Refer to issuer)       |
| 37.84      | Issuer response code = 05 (Not authorized)        |
| 37.93      | Issuer response code = 04 (Pick up card)       |
| 37.57      | Request is partially approved        |
| 37.68      | Request timeout       |

:::tip
Supporting partial approval is **mandatory** for the US market. Partial authorization occurs when a payment card authorization is attempted for a transaction and there are not enough funds available in the account to cover the full amount. The issuer returns an authorization for the amount available in the account, leaving you to obtain an additional form of payment from the customer for the balance.
:::