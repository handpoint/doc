---
# Transaction Feed API — optional skill

Load this skill when the user's task involves UNDEFINED transaction recovery, reconciliation, reporting, transaction history queries, or reading raw transaction data.

## When to use

| Situation | Use |
|---|---|
| `finStatus: UNDEFINED` received — did the transaction process? | Query feed by terminal + timestamp |
| Build a reconciliation or reporting feature | Query feed for the day/period |
| Lost `transactionResultId` before polling | Query feed by `transactionReference` |
| Verify batch settlement | Query feed for settled transactions |

## UNDEFINED recovery — step by step

`UNDEFINED` means the terminal communicated with the gateway but no result was received. **Do not retry the transaction — you may double-charge.**

**Cloud API, Android PAX, Cordova** (support `transactionReference`):
1. Mark the transaction as "pending recovery" in your system
2. Use the `transactionReference` you persisted before sending to identify the transaction
3. Query the feed for the terminal serial number and the time window around the original request
4. Match by `transactionReference` in the feed response:
   - Found with `finStatus: AUTHORISED` → transaction processed; do not retry; update your records
   - Not found → transaction did not process; safe to retry

**Android HiLite, iOS HiLite** (no `transactionReference` support):
1. Mark the transaction as "pending recovery"
2. Query the feed for the terminal serial number and the time window around the original request
3. Match by amount, currency, and masked card number — there is no reference field to match on
4. Found with `finStatus: AUTHORISED` → transaction processed; do not retry; store the `transactionID`
5. Not found → safe to retry

## Transaction Feed API — query

```http
GET https://txnfeed.handpoint.com/transactions
Authorization: Bearer YOUR_TXNFEED_API_KEY
```

Key query parameters:

| Parameter | Description |
|---|---|
| `tid` | Terminal serial number |
| `from` | ISO 8601 timestamp — start of window |
| `to` | ISO 8601 timestamp — end of window |
| `transactionReference` | Filter by your UUID |
| `finStatus` | Filter by status (e.g. `AUTHORISED`) |

Example:
```http
GET https://txnfeed.handpoint.com/transactions?tid=123456789&from=2026-08-01T00:00:00Z&to=2026-08-01T23:59:59Z
Authorization: Bearer YOUR_TXNFEED_API_KEY
```

## Key response fields

| Field | Description |
|---|---|
| `transactionID` | The GUID — use for reversals and refunds |
| `transactionReference` | The UUID you sent — use to match your records |
| `finStatus` | `AUTHORISED`, `DECLINED`, `CANCELLED`, `FAILED`, `UNDEFINED` |
| `amount` | Amount in minor units |
| `currency` | ISO 4217 |
| `cardSchemeName` | `VISA`, `MC`, `AMEX`, etc. |
| `maskedCardNumber` | e.g. `************1234` |
| `name` | Transaction type: `SALE`, `REFUND`, `REVERSAL`, `MOTO_SALE`, `TIP_ADJUSTMENT`, etc. |
| `statusMessage` | Human-readable result or decline reason |
| `merchantReceipt` | Formatted receipt text |
| `customerReceipt` | Formatted receipt text |
| `cardToken` | Present if tokenization enabled |

## Recovery via Android SDK

On Android PAX or HiLite paths, use the SDK status method before querying the feed:

```kotlin
hapi.getTransactionStatus(transactionReference)
// Result arrives in transactionResultReady callback
```

## Recovery via Cloud API status endpoint

```http
GET https://transactions.handpoint.com/transactions/{transactionReference}/status
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

## transactionReference — the idempotency key

Always generate a UUID v4 `transactionReference` and persist it to your database **before** sending the transaction request. This is your only reliable recovery key if the network drops mid-poll.

UUID v4 format: `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` where y ∈ `{8,9,a,b}`.  
Invalid format → HTTP 400 from the Cloud API.

`transactionReference` is accepted on: Sale, MOTO Sale, Pre-Authorization, unlinked Refund.  
It is ignored on: Reversal, linked Refund.

## See also

- Transaction Feed API full reference: https://txnfeedapi.handpoint.io
- Transaction recovery guide: https://developer.handpoint.com/reference/transaction-recovery
- UNDEFINED status: https://developer.handpoint.com/reference/error-codes#undefined-status
