---
title: TMS APIs
sidebar_position: 3
description: Terminal Management System APIs for merchant and terminal configuration.
---

# TMS APIs

:::info Available with any integration path
TMS APIs are available regardless of which card-present integration path you chose. Merchant configuration, terminal management, and feature flags are managed server-side and apply to all integration paths. A partner-level API key (distinct from the merchant transaction key) is required.
:::

The Terminal Management System (TMS) APIs allow you to manage merchants, terminals, and feature configuration programmatically.

## Base URL

```
https://tms.handpoint.com
```

## Authentication

```http
Authorization: YOUR_PARTNER_API_KEY
```

TMS APIs require a partner-level API key, distinct from the merchant transaction API key.

## Key operations

### List terminals

```http
GET /terminals
Authorization: YOUR_PARTNER_API_KEY
```

### Get terminal status

```http
GET /terminals/{serial_number}
```

Terminal status values: `U` (unactivated) → `I` (initialized) → `A` (active) → `C` (closed) → `X` (disabled)

### Onboard a merchant

```http
POST /merchants
Content-Type: application/json

{
  "name": "Merchant Name",
  "acquirer": "tsys-us",
  "mcc": "5812",
  "address": {
    "country": "US",
    "zip": "10001"
  }
}
```

#### Zip / postal code validation

When a `zip` (postal code) is provided, it is validated against the expected format for the merchant's `country` code using [Google libaddressinput](https://github.com/googlei18n/libaddressinput) patterns (178 countries covered). Validation applies to both creation and edit — if only one of `zip` or `country` is changed in an edit request, validation runs against the resulting combination.

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

### Assign terminal to merchant

```http
POST /merchants/{merchant_id}/terminals
Content-Type: application/json

{ "serial_number": "123456789" }
```

:::info
TMS APIs are available to ISV partners. Contact your Handpoint business development contact to enable partner API access.
:::
