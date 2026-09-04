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
| Deferred tokenization | ❌ No | `transactionID` in the URL path |

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

## Common mistakes

| Mistake | Effect | Fix |
|---|---|---|
| Including `transactionReference` on a reversal or capture | The field is silently ignored on some acquirers, or causes a validation error on others | Remove it — link via `originalGuid` instead |
| Reusing the same UUID for two different transactions | Recovery queries return the wrong result; double-charge risk | Always generate a fresh UUID per originating operation |
| Generating the UUID after the call | On crash/timeout, the reference is lost and recovery is impossible | Generate and persist **before** the call |
| Using a non-UUID-v4 string | HTTP 400 with `TransactionReference with wrong uuidv4 format` | Use the platform UUID library — don't construct manually |
| Omitting it on a MOTO sale | No recovery path if the call fails | Always include it on MOTO sales |
