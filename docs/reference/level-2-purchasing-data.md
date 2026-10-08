---
title: "Level 2 Purchasing Data"
sidebar_label: "Level 2 Purchasing Data"
description: "Send a tax amount, tax-exempt flag and purchase order number with Cloud API transactions to qualify commercial and corporate cards for a lower interchange rate."
---

# Level 2 Purchasing Data

Level 2 (Level II) purchasing data adds a tax amount, a tax-exempt flag and a purchase order number to a card transaction. On commercial and corporate cards this data can qualify the transaction for a lower interchange rate.

:::info Availability
Available via the **Cloud API**. Level 2 data must be enabled on the merchant's agreement with the acquirer — contact your Handpoint relationship manager to confirm it is enabled.
:::

## Supported endpoints

| Endpoint | Where | Amount format |
|---|---|---|
| [`POST /transactions`](/reference/cloud-api-operations#sale) | `operation` = `sale`, `moToSale`, `saleAndTokenizeCard`, `preAuthorizationCapture` or `tipAdjustment` | String, minor units (`"100"` is 1.00) |
| [`POST /moto/sale`](/reference/cloud-api-operations#moto-remote-sale--back-office-no-terminal) | Always | String, decimal major units (`"1.00"`) |
| [`POST /preauthorization/capture`](/reference/pre-authorization-guide) | Always | String, decimal major units (`"1.00"`) |
| [`POST /transactions/{guid}/tip-adjustment`](/reference/tipping-guide) | Always | Number, major units (`1.00`) |

`taxAmount` always uses the same format as the amount of the request it belongs to.

## Request fields

```json
{
  "taxInformation": {
    "taxAmount": "100",
    "taxExempt": false
  },
  "purchaseOrderNumber": "PO4711"
}
```

| Field | Rules |
|---|---|
| `taxInformation.taxAmount` | Portion of the amount that is tax. Required unless `taxExempt` is `true`. Must not exceed the operation amount. Must be `0` when `taxExempt` is `true`, and greater than `0` otherwise. |
| `taxInformation.taxExempt` | Boolean, default `false`. `true` means the transaction is tax exempt, and requires `taxAmount` to be `0`. |
| `purchaseOrderNumber` | Must be sent together with `taxInformation`: one without the other is rejected. Alphanumeric only (`A-Z a-z 0-9`), 25 characters or fewer. `null` is treated as not sent. |

:::note
The top-level `taxAmount` of `POST /transactions` is deprecated: use `taxInformation.taxAmount` instead. It is kept for compatibility and will be removed in a future release.
:::

### Tip adjustment

Tip adjustments accept `taxInformation` with relaxed rules, both on `POST /transactions/{guid}/tip-adjustment` and on `operation: "tipAdjustment"` of `POST /transactions`:

- `taxAmount` is optional, so `{ "taxExempt": true }` on its own is valid. When sent with `taxExempt: true`, it must be `0`.
- `taxAmount` can be `0` when not exempt: that is how the tax of a tip adjustment is corrected to zero.
- `taxAmount` is not compared with the tip amount.
- `purchaseOrderNumber` is not supported.

## Response fields

Level 2 data comes back in one of two shapes, depending on where the response comes from.

**Transaction result** ([callback or `GET /transaction-result`](/reference/transaction-result-object)): the payment terminal echoes `taxInformation` and `purchaseOrderNumber` as they were sent, with `taxExempt`:

```json
{
  "taxInformation": {
    "taxAmount": "100",
    "taxExempt": false
  },
  "purchaseOrderNumber": "PO4711"
}
```

**Gateway responses**, with amounts in decimal major units ([`GET /transactions/{transactionReference}/status`](/reference/cloud-api-operations#recovery--check-transaction-status), `POST /moto/sale`, `POST /preauthorization/capture` and the tip adjustment response): the tax as the gateway recorded it, with `taxAmountIdentifier` instead of `taxExempt`:

```json
{
  "taxInformation": {
    "taxAmount": "1.00",
    "taxAmountIdentifier": "1"
  },
  "purchaseOrderNumber": "PO4711"
}
```

| `taxAmountIdentifier` | Meaning |
|---|---|
| `"1"` | Local sales tax applies (`taxExempt: false`) |
| `"2"` | Tax exempt (`taxExempt: true`) |

On the tip adjustment response, `taxAmount` is a Number in major units. In every case, the fields are left out when they are not available.

## Validation errors

Every rule below returns `400 Bad Request`. A field with the wrong type, for example a non-boolean `taxExempt`, is rejected earlier with `422 Unprocessable Entity` by schema validation.

```json
{
  "error": {
    "statusCode": 400,
    "name": "BadRequestError",
    "message": "Missing or empty purchaseOrderNumber, mandatory when taxInformation is present"
  }
}
```

| Message | Cause |
|---|---|
| `taxInformation is not supported for operation [<operation>]` | `taxInformation` sent on a `POST /transactions` operation that does not support it, for example `refund` |
| `purchaseOrderNumber is not supported for operation [<operation>]` | `purchaseOrderNumber` sent on a `POST /transactions` operation that does not support it, including `tipAdjustment` |
| `Invalid purchaseOrderNumber, must be 25 characters or fewer` | `purchaseOrderNumber` longer than 25 characters |
| `Invalid purchaseOrderNumber, must contain only alphanumeric characters` | `purchaseOrderNumber` empty or with characters other than `A-Z a-z 0-9` |
| `Missing or empty purchaseOrderNumber, mandatory when taxInformation is present` | `taxInformation` sent without `purchaseOrderNumber` (not on tip adjustments) |
| `Missing taxInformation, mandatory when purchaseOrderNumber is present` | `purchaseOrderNumber` sent without `taxInformation` |
| `Missing taxInformation.taxAmount, mandatory when taxInformation.taxExempt is false` | `taxInformation` sent without `taxAmount` and `taxExempt` not `true` (not on tip adjustments) |
| `Invalid taxInformation.taxAmount, must be in the minor unit of currency (1000 is 10.00 EUR)` | `POST /transactions`: `taxAmount` is not 1 to 12 digits |
| `Invalid taxInformation.taxAmount, must be in the major unit of currency (20.50 is 20.50 EUR)` | `POST /moto/sale`, `POST /preauthorization/capture`: `taxAmount` is not a decimal number such as `"20.50"` |
| `Invalid taxInformation.taxAmount, must be "0" when taxInformation.taxExempt is true` | `taxExempt` is `true` and `taxAmount` is not `0` or is missing (on tip adjustments, only when `taxAmount` is sent) |
| `Invalid taxInformation.taxAmount, must be greater than "0" when taxInformation.taxExempt is false` | `taxAmount` is `0` and `taxExempt` is `false` or missing (not on tip adjustments) |
| `Invalid taxInformation.taxAmount, must not exceed amount` | `taxAmount` is greater than the operation amount (`amount`, or `capturedAmount` on a capture) |

`POST /transactions/{guid}/tip-adjustment` has two more messages of its own:

| Message | Cause |
|---|---|
| `taxInformation.<field> is not supported on tip adjustment` | Any `taxInformation` field other than `taxAmount` and `taxExempt` |
| `Invalid taxInformation.taxAmount [<value>], must be 0 or more, with a maximum of 12 digits (not counting the decimal point) and no exponent` | Negative, too long or exponent `taxAmount` |

## Examples

**Sale (`POST /transactions`)**

```json
{
  "operation": "sale",
  "amount": "10000",
  "currency": "EUR",
  "terminal_type": "PAXA920",
  "serial_number": "1547854757",
  "taxInformation": { "taxAmount": "500", "taxExempt": false },
  "purchaseOrderNumber": "PO4711"
}
```

**Tax-exempt MOTO sale (`POST /moto/sale`)**

```json
{
  "amount": "20.00",
  "currency": "EUR",
  "cardToken": "665630867",
  "taxInformation": { "taxAmount": "0", "taxExempt": true },
  "purchaseOrderNumber": "PO12345"
}
```

**Pre-authorization capture (`POST /preauthorization/capture`)**

```json
{
  "originalGuid": "0c9d9df0-48ec-11eb-81a1-470a19c80d3a",
  "capturedAmount": "120.00",
  "taxInformation": { "taxAmount": "10.00", "taxExempt": false },
  "purchaseOrderNumber": "PO4711"
}
```

**Tip adjustment (`POST /transactions/{guid}/tip-adjustment`)**

```json
{
  "amount": 5.25,
  "taxInformation": { "taxAmount": 0.50 }
}
```
