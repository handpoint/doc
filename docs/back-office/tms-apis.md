---
title: TMS APIs
sidebar_position: 3
description: Terminal Management System APIs for merchant and terminal configuration — authentication, merchant onboarding, terminal assignment and status.
---

# TMS APIs

:::info Available with any integration path
TMS APIs are available regardless of which card-present integration path you chose. Merchant configuration, terminal management, and feature flags are managed server-side and apply to all integration paths. A partner-level API key (distinct from the merchant transaction key) is required.
:::

The Terminal Management System (TMS) APIs let you manage merchants, terminals, and feature configuration programmatically. Access is gated — contact your Handpoint integration engineer to enable partner API access and to get the correct acquirer IDs and acquirer-specific payload fields for your environment.

## Base URL

```
https://tms.handpoint.com
```

## Authentication

All requests require the partner API key in the `Authorization` header:

```http
Authorization: YOUR_PARTNER_API_KEY
```

The partner key is different from the merchant transaction key used for `POST /transactions` calls.

---

## Merchant management

### Create a merchant

The required fields depend on your acquirer — the example below shows the minimum. Your Handpoint integration engineer will provide the acquirer ID (`"epi"`, `"paysafe"`, `"emerchantpay"`, `"paystrax"`, or similar) and any acquirer-specific credential fields.

```http
POST /merchants
Authorization: YOUR_PARTNER_API_KEY
Content-Type: application/json

{
  "name": "Example Merchant",
  "acquirer": "epi",
  "mcc": "5812",
  "address": {
    "country": "US",
    "zip": "10001"
  }
}
```

#### Zip / postal code validation

When `zip` is provided, it is validated against the expected format for the merchant's `country` code using [Google libaddressinput](https://github.com/googlei18n/libaddressinput) patterns (178 countries covered). Validation applies to both creation and edit.

An invalid zip returns `400 Bad Request`:

```json
{
  "statusCode": 400,
  "message": "Invalid zip code '9999' for country 'US'. Expected format: #####  or #####-####",
  "field": "zip",
  "country": "US"
}
```

Countries without a defined format rule are not validated. A missing or null `zip` is accepted.

### List merchants

```http
GET /merchants
Authorization: YOUR_PARTNER_API_KEY
```

### Get a merchant

```http
GET /merchants/{merchant_id}
Authorization: YOUR_PARTNER_API_KEY
```

---

## Terminal management

### List terminals

```http
GET /terminals
Authorization: YOUR_PARTNER_API_KEY
```

### Get terminal status

```http
GET /terminals/{serial_number}
Authorization: YOUR_PARTNER_API_KEY
```

### Assign terminal to merchant

:::warning `customFieldsByProtocol` is required
Omitting `customFieldsByProtocol` returns a `500` error. The fields inside it are protocol-specific — your Handpoint integration engineer will supply the correct values for your acquirer and terminal model.
:::

```http
POST /merchants/{merchant_id}/terminals
Authorization: YOUR_PARTNER_API_KEY
Content-Type: application/json

{
  "serial_number": "082104578",
  "customFieldsByProtocol": {
    "PAX": {
      "acquirer": "epi"
    }
  }
}
```

Returns `201 Created` on success.

### Unassign terminal from merchant

```http
DELETE /merchants/{merchant_id}/terminals/{serial_number}
Authorization: YOUR_PARTNER_API_KEY
```

:::caution Unassign removes the terminal record
Removing a terminal from a merchant deletes its TMS record. The terminal must be re-enrolled and re-keyed before it can process transactions under a different merchant.
:::
