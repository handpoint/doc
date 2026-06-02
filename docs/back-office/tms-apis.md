---
title: TMS APIs
sidebar_position: 3
description: Terminal Management System APIs for merchant and terminal configuration.
---

# TMS APIs

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
  "mcc": "5812"
}
```

### Assign terminal to merchant

```http
POST /merchants/{merchant_id}/terminals
Content-Type: application/json

{ "serial_number": "123456789" }
```

:::info
TMS APIs are available to ISV partners. Contact your Handpoint business development contact to enable partner API access.
:::
