---
# Cloud API (REST) — path skill

Use this path when your server commands a PAX terminal via HTTP. Any language or platform. The terminal must be connected to Wi-Fi and running the Handpoint Payments App.

Also load your acquirer skill: `acquirers/{acquirer}.md`

## Authentication

```http
ApiKeyCLoud: YOUR_MERCHANT_API_KEY
Content-Type: application/json
```

Base URL: `https://cloud.handpoint.com`  
Header name: `ApiKeyCLoud` — capital L in Cloud. Not `Authorization`. Not `Api-Key`.  
One API key per merchant account — scoped to the merchant's acquirer.

## Sale

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCLoud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "action": "SALE",
  "amount": 1000,
  "currency": "USD",
  "transactionReference": "550e8400-e29b-41d4-a716-446655440000"
}
```

| Field | Type | Required | Notes |
|---|---|---|---|
| `action` | string | Yes | `"SALE"` |
| `amount` | integer | Yes | Minor currency units — `1000` = $10.00 |
| `currency` | string | Yes | ISO 4217: `"USD"`, `"EUR"`, `"GBP"`, `"CAD"`, `"ISK"` |
| `transactionReference` | string | Recommended | UUID v4 you generate. Persist before sending. Required for recovery. |
| `customerReference` | string | No | Free-text order reference stored with the result |
| `tipAmount` | integer | EmerchantPay / Paystrax only | Tip in minor units at sale time |

**202 response (accepted):**
```json
{ "statusMessage": "Operation Accepted", "transactionResultId": "abc-123" }
```

**Immediate error responses:**

| HTTP | Body | Fix |
|---|---|---|
| 400 | `{"error":1001,"message":"Device is busy"}` | Wait 2–5s, retry |
| 400 | `{"error":1002,"message":"Device not responding"}` | Check terminal power and network |
| 400 | `TransactionReference with wrong uuidv4 format` | Use a valid UUID v4 |
| 403 | `No valid key found in header` | Check `ApiKeyCLoud` value |

## Polling for result

```http
GET https://cloud.handpoint.com/transaction-result/{transactionResultId}
ApiKeyCLoud: YOUR_MERCHANT_API_KEY
```

Always returns HTTP 200. Check `finStatus`:

| `finStatus` | Meaning | Action |
|---|---|---|
| `AUTHORISED` | Approved | Store result, fulfil order |
| `DECLINED` | Issuer declined | Do not retry same card |
| `CANCELLED` | Cardholder cancelled | Allow retry |
| `FAILED` | Terminal/network error | Log `statusMessage` |
| `UNDEFINED` | No result received | See UNDEFINED handling — do not retry |
| absent / `null` | Still processing | Keep polling |

Polling cadence: wait 3s after 202, poll every 3s. Timeout after 90s → treat as UNDEFINED.

## Transaction result — key fields

```json
{
  "finStatus": "AUTHORISED",
  "transactionID": "guid-for-reversal-and-refund",
  "amount": 1000,
  "currency": "USD",
  "cardSchemeName": "VISA",
  "maskedCardNumber": "************1234",
  "transactionReference": "your-uuid",
  "cardToken": "token-if-tokenization-enabled",
  "merchantReceipt": "...",
  "customerReceipt": "..."
}
```

**Always store `transactionID`** — required for reversals and refunds.

## Refund

```json
POST /transactions
{
  "action": "REFUND",
  "amount": 1000,
  "currency": "USD",
  "originalTransactionId": "transactionID-from-sale-result"
}
```

Linked refund: `originalTransactionId` required — no `transactionReference` needed.

Unlinked refund (requires acquirer enablement) — include `transactionReference` for recovery:
```json
{
  "action": "REFUND",
  "amount": 1000,
  "currency": "USD",
  "transactionReference": "550e8400-e29b-41d4-a716-446655440000"
}
```

Same 202 → polling flow as sale. Terminal prompts cardholder to present card.

## Reversal (void)

Synchronous — no polling. Returns immediately.

```json
POST /reversal
{ "originalGuid": "transactionID-from-sale-result" }
```

Partial reversal (EPI only): add `"amount": 500` to the body.

| HTTP | Code | Meaning |
|---|---|---|
| 200 | — | Reversed |
| 400 | `3051` | Already reversed |
| 400 | `3153` | Not in open batch — fall back to refund |
| 400 | `4066` | Partial amount exceeds original |

## Pre-authorization (EPI, EmerchantPay, Paystrax)

```json
// Create — include transactionReference for recovery
POST /transactions
{
  "action": "PREAUTH",
  "amount": 1000,
  "currency": "USD",
  "transactionReference": "550e8400-e29b-41d4-a716-446655440000"
}
// → 202, poll as normal

// Capture (synchronous)
POST /preauthorization/capture  { "originalGuid": "...", "amount": 1000 }

// Increase or decrease (synchronous)
POST /preauthorization/increase  { "originalGuid": "...", "increaseAmount": "20.00", "subtract": "0" }
// To decrease: "subtract": "1"

// Reverse
POST /reversal  { "originalGuid": "..." }
```

Capture error `5001`: GUID not found. Capture error `3211`: already captured or voided.  
Note: `increaseAmount` uses decimal major-unit string (`"20.00"`), not integer minor units.

## Tip adjustment — Cloud API (EPI only)

```json
POST https://cloud.handpoint.com/tipAdjustment
{ "originalTransactionId": "transactionID", "tipAmount": 200 }
```

Do not call for EmerchantPay or Paystrax — include `tipAmount` in the sale body instead.

## Batch close — Cloud API (EPI only)

```json
POST https://cloud.handpoint.com/close
{ "terminal_serial_number": "123456789" }
```

Call once per business day. Do not call for EmerchantPay or Paystrax.

## Cancel an in-progress operation

```json
POST https://cloud.handpoint.com/cancelRequest
{ "terminal_serial_number": "123456789" }
```

Only valid while an operation is actively running. Error `1003` or `1005` if nothing is in progress.

## Transaction status by reference

```http
GET https://cloud.handpoint.com/status/{transactionReference}
ApiKeyCLoud: YOUR_MERCHANT_API_KEY
```

Use when you have a `transactionReference` but lost the `transactionResultId`.

## UNDEFINED handling

`finStatus: "UNDEFINED"` — the transaction may or may not have processed. **Do not retry.**

Recovery: query the Transaction Feed API by terminal serial number + timestamp and match by `transactionReference`. Load optional skill `optional/transaction-feed.md` for full recovery steps.

## Remote sale — on-terminal (EPI, EmerchantPay, Paystrax)

```json
POST /transactions
{ "action": "SALE", "amount": 1000, "currency": "USD", "motoChannel": true }
```

Same 202 → polling flow. Requires remote sale enablement. Load `optional/back-office.md` for back-office (card token) remote sale.

## Logging

Logging is required for integration validation. Capture every request you send, every intermediate poll, and the full final result.

### What to log on each request

```
→ POST /transactions
  body: { "action":"SALE", "amount":1000, "currency":"USD",
          "terminal_type":"PAXA920", "serial_number":"082104578",
          "transactionReference":"550e8400-e29b-41d4-a716-446655440000" }

← 202 { "statusMessage":"Operation Accepted",
        "transactionResultId":"082104578-1786020446467" }

→ GET /transaction-result/082104578-1786020446467  [poll attempt 1, t+3s]
← 200 { "finStatus": null }   [still processing]

→ GET /transaction-result/082104578-1786020446467  [poll attempt 2, t+6s]
← 200 {
    "finStatus": "AUTHORISED",
    "transactionID": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
    "amount": 1000,
    "currency": "USD",
    "cardSchemeName": "VISA",
    "maskedCardNumber": "************1234",
    "transactionReference": "550e8400-e29b-41d4-a716-446655440000",
    "statusMessage": "AUTH CODE 123456"
  }
```

### Minimum fields to capture per result

| Field | Why |
|---|---|
| `finStatus` | Outcome — required for order fulfilment logic |
| `transactionID` | Required for reversal and refund |
| `amount` | Verify matches what was requested |
| `currency` | Currency |
| `cardSchemeName` | Card brand (Visa / Mastercard / Amex / etc.) |
| `maskedCardNumber` | Cardholder match for recovery |
| `transactionReference` | Your idempotency key — links request to result |
| `statusMessage` | Human-readable detail; non-empty on DECLINED or FAILED |

### Backoffice (no-reader) endpoints

Synchronous — log the full request body and the complete response body immediately:

```
→ POST /moto/sale   body: { "amount":"10.00", "currency":"USD", "cardToken":"...", "transactionReference":"<uuid>" }
← 200 { "finStatus":"AUTHORISED", "efttransactionID":"...", ... }
```

## See also

- Acquirer constraints: load `acquirers/{acquirer}.md`
- Remote sale / back-office: `optional/back-office.md`
- Transaction recovery / UNDEFINED: `optional/transaction-feed.md`
- Error codes: https://developer.handpoint.com/reference/error-codes
- Back Office REST reference: https://developer.handpoint.com/back-office/rest-api-no-reader
