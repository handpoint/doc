---
title: Transaction Feed API
sidebar_position: 2
description: Query and stream transaction data from the Handpoint analytics feed.
---

# Transaction Feed API

:::info Available with any integration path
The Transaction Feed API works alongside **any** card-present integration — Cloud API, Android SDK, iOS SDK, Windows SDK, or Cordova. It is a server-side API that talks directly to Handpoint's analytics backend; no terminal or SDK is required at query time.
:::

The Transaction Feed API provides access to processed transaction data via an Elasticsearch-backed query API.

## Base URL

```
https://txnfeed.handpoint.com
```

## Authentication

```http
Authorization: YOUR_API_KEY
```

## Query transactions

```http
GET /transactions?terminal_serial_number=123456789&from=2026-01-01&to=2026-01-31
Authorization: YOUR_API_KEY
```

## Key fields

| Field | Description |
|---|---|
| `transactionId` | Unique transaction identifier |
| `terminalSerialNumber` | Terminal that processed the transaction |
| `amount` | Transaction amount in smallest currency unit |
| `currency` | ISO 4217 currency code |
| `type` | Transaction type: `SALE`, `REFUND`, `REVERSAL`, etc. |
| `status` | `APPROVED`, `DECLINED`, `REVERSED` |
| `cardTokenProvider` | Token provider if tokenization was used |
| `timestamp` | ISO 8601 timestamp |

:::note Fee mitigation is not in the feed yet
The feed carries no fee amount, no program, and no applied flag. Persist the `fee` object from the
transaction result in your own records. See [Fee Mitigation](/reference/fee-mitigation).
:::

## Elasticsearch index

For direct Elasticsearch access, the index is `txn_feed`. Contact your Handpoint integration engineer for credentials and index schema.

:::note
The Transaction Feed API is for reporting only. It cannot be used to initiate transactions.
:::
