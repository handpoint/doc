---
title: Transaction Feed API
sidebar_position: 2
description: Query processed card-present transactions for a merchant — search by date, terminal and field filters, look up by ID or reference.
---

# Transaction Feed API

:::info Available with any integration path
The Transaction Feed API works alongside **any** card-present integration: Cloud API, Android SDK, iOS SDK, Windows
SDK or Cordova. It is a server-side API. No terminal or SDK is needed at query time.
:::

The Transaction Feed API returns every transaction the Handpoint gateway processed for a merchant: sales, refunds and
reversals, approved and declined, whichever way they were started. It is **read-only reporting**. It can't start,
reverse or change a transaction.

## Base URL

| Environment | Base URL |
|---|---|
| Production | `https://txnfeed.handpoint.com` |
| Staging | `https://txnfeed.handpoint.io` |

## Authentication

Send the merchant's API key in the `AnalyticsApiKey` header:

```http
AnalyticsApiKey: MERCHANT_API_KEY
```

- **One key per merchant.** The key covers that merchant and every terminal assigned to it.
- **It is the same value as the merchant's Cloud API key** (`ApiKeyCloud`). Only the header name and the host differ.
- Keys are issued by Handpoint or your partner onboarding team.
- **If you serve several merchants, keep your own `merchant → API key` mapping** and query each merchant with its own
  key.

To list the terminals a key covers, use the Cloud API:

```bash
curl 'https://cloud.handpoint.com/devices' \
  --header 'ApiKeyCloud: MERCHANT_API_KEY'
```

```json
[
  { "merchant_id_alpha": "dem20261006202338650", "serial_number": "1240913735", "terminal_type": "PAXA80" },
  { "merchant_id_alpha": "dem20261006202338650", "serial_number": "VT000000041593", "terminal_type": "VT" }
]
```

## Search transactions

`POST /transactions` with a JSON body. It returns all operation types. Two narrower endpoints take the same body:
`POST /transactions/payouts` (sales only) and `POST /transactions/refundsandreversals`.

```bash
curl 'https://txnfeed.handpoint.com/transactions' \
  --header 'AnalyticsApiKey: MERCHANT_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "startDate": "20261029080000",
    "endDate": "20261029120000",
    "terminalSerialNumbers": ["1240913735"],
    "onlySuccessful": true,
    "orderBy": [{ "value": "serverDateTime", "order": "asc" }],
    "limit": 1000
  }'
```

### Request body

| Field | Type | Description |
|---|---|---|
| `startDate`, `endDate` | string | **Required.** Exactly 14 characters, `yyyyMMddHHmmss`, in **UTC**. Both ends are inclusive |
| `terminalSerialNumbers` | string[] | Only these terminals. Omit to get all of the merchant's terminals |
| `onlySuccessful` | boolean | `true` returns approved transactions only |
| `filters` | object[] | Field filters (see [Filters](#filters)) |
| `currencyOpts` | object | `{ "currency": "EUR", "nullCurrency": false }`. An object, not an array |
| `limit` | number | Rows per request, 1–10,000. Default 10,000 |
| `initPosition` | number | Offset for paging. Offset + `limit` can't go past 10,000. For more rows, use a smaller date window |
| `orderBy` | object[] | `[{ "value": "serverDateTime", "order": "asc" }]`. `order` is `asc` or `desc`. Default `serverDateTime desc` |

### Response

```json
{
  "totalAmount": 1532,
  "batchSize": 1000,
  "results": [ { "guid": "…", "amount": "3.50000", "…": "…" } ],
  "ecommerceResults": []
}
```

| Field | Description |
|---|---|
| `totalAmount` | **Number of matching transactions**, not a sum of money |
| `batchSize` | Number of rows in this response |
| `results` | The card-present transactions |

### Filters

`filters` is a list of `{ "field", "value" }` objects. **`value` is always a string.** Filters are combined with
**AND**.

```json
"filters": [
  { "field": "currCode", "value": "EUR" },
  { "field": "status",   "value": "200" }
]
```

How a value is matched depends on the field:

| Field type | Fields | How it matches | Example value |
|---|---|---|---|
| Text | Everything not listed below | **Exact and case-sensitive.** The whole value must match. No substring, prefix or wildcard (`*` is a literal character) | `"Sale"` matches, `"sale"` matches nothing |
| Number | `amount`, `tipAmount`, `status` | Numeric equality | `amount`: `"3.5"` and `"3.50000"` both match €3.50. **Major units**, so `"350"` means €350.00. `status`: `"200"` |
| Boolean | `isSingleEmvMessage`, `storeAndForward` | `"true"` or `"false"` | `"false"` |

- A field repeated in `filters` is an AND, so two values for one field can never both match. To get several values,
  run several queries.
- `currency` is ignored as a filter. Filter on `currCode`, or use `currencyOpts`.

### Filterable fields

| Field | Type | Example value |
|---|---|---|
| `guid` | text | `ee881d90-5911-11f1-a9af-ffa530c6e21f` |
| `transactionReference` | text | `c9a53b70-1efd-44f3-b3c0-07d9657539d9` |
| `customerReference` | text | `ORDER-1042` |
| `terminalSerialNumber` | text | `1240913735` |
| `type` | text | `Sale`, `Refund`, `Reversal`, `Card Not Present Sale`, `Card Not Present Refund` |
| `name` | text | `EMV Sale`, `Declined EMV Sale` |
| `action` | text | `AUTHORIZATION_REQUEST`, `REFUND_REQUEST`, `REVERSAL_REQUEST`, `MOTO_SALE_REQUEST`, `MOTO_REFUND_REQUEST` |
| `status` | number | `200` approved, `403` declined |
| `amount`, `tipAmount` | number | `3.5` |
| `currCode` | text | `EUR`, `USD`, `GBP` |
| `cardTypeId` | text | `MasterCard` |
| `maskedCardNumber` | text | `535419******4149` |
| `approvalCode` | text | as printed on the receipt |
| `issuerRetrievalReferenceNumber` | text | RRN |
| `batchNum` | text | batch number |
| `acquirerMid`, `acquirerTid` | text | acquirer merchant / terminal IDs |
| `storeAndForward` | boolean | `true` |

## Look up specific transactions

| Request | Returns |
|---|---|
| `GET /transactions/{guid}` | One transaction by Handpoint transaction ID |
| `GET /transactions/guids?listOfGuids=a,b` | Several transactions by ID |
| `GET /transactions/customer-reference/{customerReference}` | Transactions carrying that `customerReference` |
| `GET /transactions/customer-references?listOfCustomerReferences=a,b` | Several, by `customerReference` |

All of these use the `AnalyticsApiKey` header too.

## Key fields in a transaction

| Field | Description |
|---|---|
| `guid` | Handpoint transaction ID. Unique |
| `transactionReference` | Reference of the operation. On sales your POS started, it is the UUID your POS sent. Otherwise it is generated by the terminal or SDK |
| `referenceObject.guid` | On refunds and reversals: the `guid` of the original transaction |
| `customerReference` | Free-text reference from the request, if one was sent |
| `terminalSerialNumber` | Terminal that processed the transaction |
| `type`, `action` | Operation type, e.g. `Sale` / `AUTHORIZATION_REQUEST` |
| `status` | `200` approved, `403` declined |
| `amount`, `tipAmount` | **Major units** as decimal strings, e.g. `"3.50000"` |
| `currCode` | ISO 4217 alphabetic currency code, e.g. `EUR` |
| `cardTypeId`, `maskedCardNumber` | Card scheme and masked PAN |
| `cardTokenProvider` | Wallet or token provider, if any |
| `serverDateTime` | Gateway processing time, `yyyyMMddHHmmss` in UTC |

To reconcile payments taken in Standalone mode with your POS, see
[Standalone Fallback & Reconciliation](/reference/standalone-fallback-reconciliation).
