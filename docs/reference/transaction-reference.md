---
title: transactionReference — when and how to use it
sidebar_label: transactionReference
description: Definitive rule table for when to include transactionReference in a request — originating operations only. UUID v4 format, persistence requirements, and recovery usage.
---

# `transactionReference` — when and how to use it

`transactionReference` is a **UUID v4 you generate** before calling any API or SDK method. It is not the Handpoint-assigned `transactionID` (GUID) that comes back in the result. The two fields are different and serve different purposes.

| Field | Who creates it | When it exists | Purpose |
|---|---|---|---|
| `transactionReference` | **Your code** — before the call | Always, if you set it | Recovery, status queries, operation chaining |
| `transactionID` | **Handpoint** — in the result | After the operation completes | Subsequent operations (reversal, capture, refund) |

---

## The rule: originating operations only

Include `transactionReference` on every **originating** operation. Never include it on subsequent operations — they are linked to the chain via `originalGuid` / `originalTransactionId` in the request body, not by repeating the `transactionReference`.

| Operation | Include `transactionReference`? | Link field instead |
|---|---|---|
| Sale (card-present) | ✅ **Yes** | — |
| Pre-authorization create | ✅ **Yes** | — |
| Remote / MOTO sale (`POST /moto/sale`) | ✅ **Yes** | — |
| Unlinked refund (no `originalGuid`) | ✅ **Yes** | — |
| Pre-authorization increase | ❌ No | `originalTransactionId` (terminal) or `originalGuid` (back-office) |
| Pre-authorization reversal / void | ❌ No | `originalTransactionId` |
| Pre-authorization capture | ❌ No | `originalGuid` |
| Reversal / void | ❌ No | `originalGuid` |
| Linked refund (has `originalGuid`) | ❌ No | `originalGuid` |
| Tip adjustment | ❌ No | `transactionID` in the URL path |
| Batch close | ❌ No | Not applicable |
| Get Card Token | ❌ No | `transactionID` in the URL path |

---

## Format requirements

`transactionReference` must be a **UUID v4**:

```
xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
```

- Position 13 (the version digit after the third `-`) must be `4`
- Position 17 (the variant digit after the fourth `-`) must be `8`, `9`, `a`, or `b`

**Valid:** `2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f`
**Invalid:** `2bfde1fc-23b1-3c67-93d9-1d4a557f4d4f` (version digit is `3`, not `4`)

The API returns HTTP `400` with message `TransactionReference with wrong uuidv4 format ...` if the format is wrong.

Generate it with the platform's built-in UUID library — do not construct manually:

```python
import uuid
ref = str(uuid.uuid4())
```
```kotlin
import java.util.UUID
val ref = UUID.randomUUID().toString()
```
```javascript
const ref = crypto.randomUUID()              // Node 19+ / browser
// or: import { v4 as uuidv4 } from 'uuid'
const ref = uuidv4()
```
```csharp
var ref = Guid.NewGuid().ToString();
```

---

## Persist before the call — always

```
1. Generate UUID v4
2. Write to your database / local storage  ← BEFORE calling the API
3. Call hapi.sale() / POST /transactions
4. On result: mark the reference as settled or failed
5. On timeout / UNDEFINED: use the saved reference to recover
```

If the app crashes, the connection drops, or the result never arrives, the saved `transactionReference` is the only way to recover without double-charging the customer.

---

## How it links an operation chain

Every operation in a pre-authorization chain shares the same `transactionReference` from the Create:

```
POST /transactions  { "operation": "preAuthorization", "transactionReference": "AAA" }
→ transactionID: "111"

POST /transactions  { "operation": "preAuthorizationIncrease", "originalTransactionId": "111" }
→ transactionID: "222"   (no transactionReference in this request)

POST /preauthorization/capture  { "originalGuid": "111" }
→ transactionID: "333"   (no transactionReference in this request)
```

All three operations appear when you query:

```http
GET https://transactions.handpoint.com/transactions/AAA/status/all
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

The `/status/all` endpoint is keyed by the `transactionReference` from the **originating** operation. Subsequent operations do not need their own reference — they inherit the chain automatically.

---

## Recovery usage

### Cloud API

```http
GET https://cloud.handpoint.com/transactions/{transactionReference}
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

Returns the transaction result by `transactionReference`. Use this on `UNDEFINED` or after a timeout.

### Android SDK (PAX)

```kotlin
hapi.getTransactionStatus(transactionReference)
// result arrives in transactionResultReady callback
```

### iOS HiLite

`getTransactionStatus` is not available on the iOS SDK. Poll the Cloud API from your server instead, or query `GET /transactions/{transactionReference}` using your backend.

### HiLite (Android)

`getTransactionStatus` is not available on Android HiLite. Use the Cloud API recovery endpoint from your server.

---

## Per-integration-path field placement

| Integration path | Where to set `transactionReference` |
|---|---|
| Cloud API | Top-level field in the JSON request body |
| Android SDK (PAX) | `SaleOptions().apply { transactionReference = ref }` passed as the options argument |
| Android SDK (HiLite) | `SaleOptions().apply { transactionReference = ref }` — same as PAX |
| iOS SDK (HiLite) | Not supported as a request field on iOS SDK |
| Cordova | Top-level field in the options object passed to `HAPI.sale({ ..., transactionReference: ref })` |
| Windows SDK | `SaleOptions` property |

---

## Concurrent transactions

When multiple transactions are in flight simultaneously, use `transactionReference` to match each 202 response to its poll result. The `transactionResultId` returned in the 202 body is what you pass to `GET /transaction-result/{transactionResultId}`, but `transactionReference` lets you look up the correct `transactionResultId` from your own state.

```
POST /transactions { transactionReference: "ref-A" } → 202 { transactionResultId: "sn-001" }
POST /transactions { transactionReference: "ref-B" } → 202 { transactionResultId: "sn-002" }

GET /transaction-result/sn-001 → { transactionReference: "ref-A", finStatus: "AUTHORISED" }
GET /transaction-result/sn-002 → { transactionReference: "ref-B", finStatus: "DECLINED" }
```

Always store the `transactionReference → transactionResultId` mapping immediately after receiving the 202.

---

## Retry-safe pattern

To safely retry a timed-out POST without risk of double-charging:

1. Generate and **persist** the UUID before calling the API (as always).
2. On timeout or `UNDEFINED` result, call `GET /transactions/{transactionReference}/status` before retrying.
3. If it resolves → the original transaction completed; **do not re-send**.
4. If it returns 404 → the original did not reach the gateway; re-send with the **same** `transactionReference`.

Sending the same `transactionReference` on a genuine retry is safe — the `duplicate_check` flag (see below) only rejects duplicates of completed transactions, not attempts that never completed.

---

## `duplicate_check`

The `duplicate_check` request field controls whether the gateway rejects a transaction whose `transactionReference` matches a recent **completed** transaction.

| Value | Behaviour |
|---|---|
| `true` (default) | Gateway rejects a new transaction if `transactionReference` matches a recent completed transaction |
| `false` | Bypass the check — the new transaction proceeds regardless |

Set `duplicate_check: false` only when you have already confirmed (via `GET /transactions/{ref}/status`) that the original did not complete and you are intentionally reusing the reference.

```json
{
  "operation": "sale",
  "amount": "15012",
  "currency": "USD",
  "terminal_type": "PAXA920PRO",
  "serial_number": "1850025030",
  "transactionReference": "5c7056aa-b0a6-4ee9-891e-aae6ce7ea725",
  "duplicate_check": false
}
```

The retry-safe pattern above is the safer alternative — check status first; only disable `duplicate_check` when you are certain the original did not complete.

---

## `bypassOptions`

Optional. Controls whether the cardholder can skip PIN entry or the signature step on the terminal.

```json
{
  "operation": "sale",
  "amount": "15012",
  "currency": "USD",
  "terminal_type": "PAXA920PRO",
  "serial_number": "1850025030",
  "transactionReference": "<uuid>",
  "bypassOptions": {
    "signatureBypass": true,
    "pinBypass": true
  }
}
```

| Option | Effect |
|---|---|
| `signatureBypass: true` | Skips the signature capture step. Used in unattended or self-service environments. |
| `pinBypass: true` | Shows the PIN entry screen but the cardholder can skip by pressing the green confirmation key without entering a PIN. The terminal records `verificationMethod: PIN_BYPASS`. |

:::warning Chip-enforced PIN cards ignore `pinBypass`
When a card's EMV configuration requires PIN verification, the terminal enforces it regardless of `pinBypass: true`. Acquirer configurations may also restrict bypass options — confirm with your acquirer before deploying in production.
:::

---

## Common mistakes

| Mistake | Effect | Fix |
|---|---|---|
| Including `transactionReference` on a reversal or capture | The field is silently ignored on some acquirers, or causes a validation error on others | Remove it — link via `originalGuid` instead |
| Reusing the same UUID for two different transactions | Recovery queries return the wrong result; double-charge risk | Always generate a fresh UUID per originating operation |
| Generating the UUID after the call | On crash/timeout, the reference is lost and recovery is impossible | Generate and persist **before** the call |
| Using a non-UUID-v4 string | HTTP 400 with `TransactionReference with wrong uuidv4 format` | Use the platform UUID library — don't construct manually |
| Omitting it on a MOTO sale | No recovery path if the call fails | Always include it on MOTO sales |
