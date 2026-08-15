---
id: transaction-recovery
title: Transaction Recovery & Status
description: How to recover transaction results after network failures and query transaction status using transactionReference.
---

# Transaction Recovery & Status

This guide covers how to handle the case where your POS application misses a transaction result — either because the network was unavailable, the callback URL was unreachable, or the application restarted — and how to use the `transactionReference` to query the current status of any transaction and its full operation chain.

---

## Why recovery matters

When you send a transaction to `POST /transactions`, the terminal processes the payment autonomously. If your server is unreachable at the moment the result is delivered, you need a reliable way to retrieve the outcome later. Handpoint provides two complementary mechanisms:

1. **Terminal auto-recovery loop** — the terminal automatically retries delivery to your `callbackUrl`
2. **Server-side polling** — you poll `GET /transaction-result/{transactionResultId}` until the result arrives
3. **Status query by transactionReference** — you query `GET /transactions/{transactionReference}/status` at any time to retrieve the current outcome

---

## How `transactionReference` works

`transactionReference` is a UUID v4 that **you generate and include in original transaction requests** (Sale, Remote Sale, Pre-Authorization, unlinked Refund). It acts as a stable key that:

- Links all subsequent operations (Reversal, Capture, Refund) to the original transaction
- Enables status queries at any time via the `transactions.handpoint.com` API
- Returns all operations in the chain with `status/all`, so you can sum amounts to determine the net amount charged

:::warning Only on original transactions
Include `transactionReference` **only** on original operations. Do not send it on subsequent operations (Reversal, linked Refund, Pre-Auth Capture, Pre-Auth Void, Tip Adjustment). The gateway reads it from the original transaction and uses it to group subsequent operations automatically.

HiLite integration paths (Android HiLite, iOS HiLite) do not support `transactionReference`.
:::

```
Original sale        → you set transactionReference = "2bfde1fc-..."
  └── Linked refund  → no transactionReference (gateway links via originalTransactionId)
  └── Tip adjustment → no transactionReference (gateway links via transactionID in URL)
```

---

## 1 — Terminal auto-recovery loop

When you include a `callbackUrl` and `token` in your transaction request, the terminal posts the result to that URL on completion. If delivery fails, the terminal retries automatically:

| Window | Retry interval |
|---|---|
| First 100 seconds | Every 5 seconds |
| After 100 seconds | Exponential backoff (8s → 16s → 32s → …) |

The recovery loop restarts whenever the Handpoint application is restarted or `startRecovery()` is called (Android SDK). Results delivered via the recovery loop have `"recoveredTransaction": true` in the result body.

**All 2xx HTTP response codes** from your `callbackUrl` are valid acknowledgements. Respond with any 2xx status to stop retries.

### Push-notification payload schema

The terminal POSTs the full **Transaction Result** object as JSON to your `callbackUrl`. The body is identical to the `200 OK` body from `GET /transaction-result/{transactionResultId}` — no fields are added or removed.

```http
POST https://your-server.example.com/handpoint/callback
Content-Type: application/json
AUTH-TOKEN: <your-token-value>
AUTH_TOKEN: <your-token-value>

{
  "finStatus": "AUTHORISED",
  "type": "SALE",
  "totalAmount": 1000,
  "currency": "USD",
  "transactionID": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
  "transactionReference": "2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f",
  "authorisationCode": "155884",
  "cardSchemeName": "Visa",
  "maskedCardNumber": "************1456",
  "recoveredTransaction": false,
  ...
}
```

Two points specific to the push delivery:

- **`token` is in headers, not in the body.** The `token` value from your original transaction request is echoed back in two HTTP request headers: `AUTH-TOKEN` and `AUTH_TOKEN` (both carry the same value). Use either header to authenticate the incoming request on your server — verify it matches the token you sent.
- **`recoveredTransaction`** is `true` when the result was delivered via the auto-recovery loop (the terminal could not reach your server on the first attempt). On first-attempt delivery it is `false`.

For the full list of fields in the Transaction Result object, see [Transaction Result Object](/reference/transaction-result-object).

---

## 2 — Poll for result: `GET /transaction-result/{transactionResultId}`

If you omit `callbackUrl`, the `POST /transactions` response includes a `transactionResultId`:

```json
{
  "transactionResultId": "0821032398-1628774190395",
  "statusMessage": "Operation Accepted",
  "transactionReference": "2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f"
}
```

Poll `GET /transaction-result/{transactionResultId}` until you receive a non-204 response:

```http
GET https://cloud.handpoint.com/transaction-result/0821032398-1628774190395
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

| Response | Meaning |
|---|---|
| `204 No Content` | Transaction still in progress — retry |
| `200 OK` | Transaction complete — body contains the full [Transaction Result](/reference/transaction-result-object) |
| `404 Not Found` | Unknown ID |

**Recommended polling interval:** 3–5 seconds. The typical card-present transaction completes in 10–30 seconds.

---

## 3 — Query by transactionReference

Use the `transactions.handpoint.com` API (note: different base domain from `cloud.handpoint.com`) to query the status of any transaction at any time using its `transactionReference`.

:::warning Different base URL
The status endpoint uses `https://transactions.handpoint.com` (production) or `https://transactions.handpoint.io` (staging) — not `cloud.handpoint.com`.
:::

### `GET /transactions/{transactionReference}/status` — first transaction

Returns the current status of the **first** (original) transaction associated with the given `transactionReference`.

```http
GET https://transactions.handpoint.com/transactions/2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f/status
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

**Possible `finStatus` values:**

| Status | Meaning |
|---|---|
| `AUTHORISED` | Transaction approved |
| `DECLINED` | Transaction declined |
| `REFUNDED` | Transaction was refunded |
| `IN_PROGRESS` | Gateway received the transaction but outcome not yet known — retry in a few seconds |
| `UNDEFINED` | Not found in the gateway. The cardholder may still be interacting with the terminal (card presentation, PIN entry, mobile wallet CVM). A single transaction can take several minutes in worst-case fallback paths — see the [worst-case timeline](#worst-case-terminal-processing-timeline) below. Continue polling until your active-recovery timeout expires before treating as a non-charge. |

**Example 200 response (abbreviated):**

```json
{
  "type": "SALE",
  "finStatus": "AUTHORISED",
  "totalAmount": 1000,
  "currency": "USD",
  "transactionID": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
  "transactionReference": "2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f",
  "authorisationCode": "155884",
  "cardSchemeName": "Visa",
  "maskedCardNumber": "************1456"
}
```

---

### `GET /transactions/{transactionReference}/status/{selector}` — full chain

Returns one or all operations linked to a `transactionReference`. Use this to see the complete lifecycle of a transaction and calculate the net amount.

```http
GET https://transactions.handpoint.com/transactions/2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f/status/all
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

**Selector values:**

| Selector | Returns |
|---|---|
| `all` | All operations linked to this `transactionReference` |
| `first` | The original transaction |
| `last` | The most recent operation |
| `{n}` | The nth operation (1-based index) |

**Example — retrieving the full chain:**

```http
GET https://transactions.handpoint.com/transactions/2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f/status/all
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

```json
[
  {
    "type": "SALE",
    "finStatus": "AUTHORISED",
    "totalAmount": 1000,
    "transactionID": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
    "transactionReference": "2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f"
  },
  {
    "type": "REFUND",
    "finStatus": "AUTHORISED",
    "totalAmount": 500,
    "transactionID": "9a8b7c6d-1234-5678-9abc-def012345678",
    "originalEFTTransactionID": "01236fc0-8192-11eb-9aca-ad4b0e95f241"
  }
]
```

To determine the **net amount on the merchant side**, sum all `AUTHORISED` operations, subtracting `REFUND` and `REVERSAL` amounts:

```
Net = SALE(1000) - REFUND(500) = 500
```

:::caution finStatus interpretation
`finStatus` on the **first transaction** reflects its current state. On **subsequent transactions** it reflects the state at the time of processing. For example: a refund that was later reversed still shows `AUTHORISED` — it does not update to reflect the reversal.
:::

---

## 4 — Worst-case terminal processing timeline

Understanding how long the terminal can legitimately be processing helps you set an appropriate active-recovery timeout for your POS. All timeouts below are sourced from the Android SDK source (`Constants.java`, `PendingMessageCommon.kt`).

### Android SDK cardholder screen timeouts

| Screen / Phase | Default timeout | Source |
|---|---|---|
| "Tap, Insert or Swipe" (each attempt) | **30s** | `GENERAL_CONFIG_CARD_READING_TIMEOUT` |
| PIN entry (each attempt, PAX firmware) | **30s** | `GENERAL_CONFIG_USER_INPUT_TIMEOUT` → PAX library |
| Signature screen | **30s** | `GENERAL_CONFIG_USER_INPUT_TIMEOUT` |
| Application selection (multi-AID card) | **30s** | `GENERAL_CONFIG_USER_INPUT_TIMEOUT` |
| Partial approval confirmation | **30s** | `GENERAL_CONFIG_USER_INPUT_TIMEOUT` |
| Duplicate transaction confirmation | **30s** | hardcoded `DupeCheckMessageDialog` |
| "See Phone" (mobile wallet on-device CVM) | **120s** | `SEE_PHONE_TIMEOUT = 120 * 1000 ms` |

**"See Phone"** is triggered when a cardholder taps Apple Pay / Google Pay / Samsung Pay and the terminal requires the phone to complete biometric verification (Face ID, Touch ID, fingerprint) before the tap finalises. The terminal shows *"Verification Required – Please check your mobile device"* and waits up to 120s.

### Retry counts (sourced from SDK)

| Method | Attempts | Total card-read time |
|---|---|---|
| Contactless / NFC | 1 initial + 2 retries = **3 total** (configurable) | 3 × 30s = **90s** |
| Chip / EMV | 1 initial + 2 retries = **3 total** (`MAX_LIMIT_REACHED = 2`) | up to 3 × 30s = **90s** |
| Magnetic stripe (swipe) | **1 attempt** — no SDK retry loop | 30s window |
| PIN entry | **3 attempts** (PAX firmware) | up to 3 × 30s = **90s** |

### Absolute worst-case chain (all fallbacks, all retries)

```
Phase                              Time
─────────────────────────────────────────────────
Contactless: 3 attempts × 30s      90s
Chip fallback: 3 attempts × 30s    90s
Swipe fallback: 1 × 30s window     30s
PIN entry: 3 wrong attempts × 30s  90s
─────────────────────────────────────────────────
Terminal processing subtotal:      300s  (5 min)

SDK GTS recovery (no-network):    ~20s  (exponential poll: 2s + 4s + 8s...)
Online authorisation (gateway):   ~20s
─────────────────────────────────────────────────
Absolute worst case:              ~340s (~5 min 40s)
```

This scenario (3 failed contactless + 3 failed chip + swipe + 3 wrong PINs) is extremely rare in practice. The typical worst case is **chip + PIN**: 3 × 30s + 3 × 30s + ~40s = ~220s (~3 min 40s).

**Recommended active-recovery timeout: 6 minutes (360s)** from request send time. After that, query `/status` once more — if still `IN_PROGRESS` or `UNDEFINED`, flag for manual reconciliation. Do not auto-retry with the same `transactionReference`.

:::note See Phone path
Mobile wallet "See Phone" (120s) replaces part of the contactless phase and is a distinct path. If triggered, worst case becomes ~240s terminal processing + ~40s network = ~280s total — still within the 6-minute threshold.
:::

---

## 5 — Android SDK: `getTransactionStatus`

On Android PAX, use `getTransactionStatus()` to query the status from the SDK:

```kotlin
// Fetches current transaction status from the gateway using the transactionReference
// Result is delivered via your events listener
val success = hapi.getTransactionStatus("2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f")
```

The result is delivered asynchronously to your registered events listener. This is a PAX-only feature — **not available on HiLite**.

---

## Best practices

| Practice | Why |
|---|---|
| Generate a new UUID v4 `transactionReference` for every original transaction | Avoids accidental deduplication; enables reliable status queries |
| Change `transactionReference` on every **retry** of the same transaction | Prevents the gateway from treating a retry as the same operation |
| Store `transactionReference` in your database before sending the request | If your app crashes mid-request, you can still query the outcome |
| Use `/status/all` for reconciliation, not individual `/status` calls | Individual calls only reflect the first transaction's current state |
| Stop active polling after 6 minutes (360s); query `/status` once more before flagging for manual reconciliation | Worst-case terminal processing (all fallbacks + PIN retries) is ~340s — 360s gives a safe margin |
| On `UNDEFINED` after active-recovery timeout, treat as a non-charge | If the terminal never reached the gateway within the timeout window, no charge was applied |
