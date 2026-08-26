---
id: pre-authorization-guide
title: Pre-Authorization Guide
description: Complete guide to the pre-authorization lifecycle — create, increase, capture, void, and capture reversal — with code examples for every supported integration path.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pre-Authorization Guide

Pre-authorization places a temporary hold on a cardholder's funds without capturing them. The final amount is confirmed later — when the actual charge is known — through a Capture operation.

## When to use pre-authorization

| Use case | Example |
|---|---|
| Hotel check-in | Hold an estimated amount at check-in; capture the actual stay cost at check-out |
| Car rental | Hold a deposit at pickup; capture fuel + days at return |
| Restaurants (tab) | Hold on card open; capture the final bill including tip |
| Fuel pump (pay-at-pump) | Hold a fixed amount; capture actual fuel dispensed |

Do **not** use pre-auth for standard retail where the amount is known at the time of card interaction — use Sale instead.

---

## Supported integration paths

| Operation | Cloud API | Android (PAX) | Android (HiLite) | iOS (HiLite) | Cordova |
|---|---|---|---|---|---|
| Create | ✅ | ✅ | ❌ | ❌ | ✅ |
| Increase / Decrease | ✅ | ✅ | ❌ | ❌ | ✅ |
| Capture | ✅ | ✅ | ❌ | ❌ | ✅ |
| Pre-Auth Reversal | ✅ | ✅ | ❌ | ❌ | ✅ |
| Capture Reversal | ✅ | ✅ | ❌ | ❌ | ❌ |

HiLite paths (Android BT, iOS) do not support pre-authorization. Use the Cloud API from your server instead.

---

## The pre-authorization lifecycle

```
Create (AUTHORISED — hold placed)
  │
  ├── Increase / Decrease  ──────────────────┐
  │   (adjust hold amount)                   │
  │   └── repeat as needed ─────────────────►│
  │                                          │
  ├── Capture ◄──────────────────────────────┘
  │   (charge the cardholder)
  │   │
  │   ├── Capture Reversal (pre-settlement only)
  │   │   (cancel the capture — same day, before batch close)
  │   │
  │   └── Refund (post-settlement)
  │       (standard refund after settlement)
  │
  └── Pre-Auth Reversal
      (release without charging)
```

**Important constraints:**
- The hold expires in **7–30 days** depending on the card network and issuer. Always capture or reverse before expiry.
- Always reverse unused holds — unreleased pre-auths count against the cardholder's available credit.
- The `transactionReference` you send on the Create links all subsequent operations and enables reconciliation via the `/status/all` endpoint.

---

## Step 1 — Create a Pre-Authorization

The cardholder presents their card. A hold is placed for the estimated amount.

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "preAuthorization",
  "amount": "10000",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "transactionReference": "2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f"
}
```

**Store from the result:**
- `transactionID` — required for Capture, Void, and Increase
- `transactionReference` — use to query the full operation chain via `/status/all`

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

```kotlin
hapi.preAuthorization(BigInteger("10000"), Currency.USD)

// Result arrives in endOfTransaction:
override fun endOfTransaction(result: TransactionResult, ref: TransactionReference) {
    if (result.finStatus == FinancialStatus.AUTHORISED) {
        val preAuthId = result.transactionID  // store — required for capture/void
    }
}
```

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

Pre-authorization is not supported on the HiLite Bluetooth path. Use the Cloud API from your server.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

Pre-authorization is not supported on the iOS HiLite path. Use the Cloud API from your server.

</TabItem>
<TabItem value="cordova" label="Cordova">

```javascript
handpoint.preAuthorization(
  { amount: 10000, currency: "USD" },
  function(result) {
    if (result.finStatus === "AUTHORISED") {
      const preAuthId = result.transactionID;  // store — required for capture/void
    }
  },
  function(error) { console.error(error); }
);
```

</TabItem>
</Tabs>

---

## Step 2 — Increase or Decrease the hold (optional)

Adjusts the held amount before capture. Useful when the final amount changes — for example, room service added during a hotel stay.

**There are two different endpoints for this operation — choose based on whether the card needs to be re-presented:**

| Scenario | Endpoint | Card required? | Acquirer support |
|---|---|---|---|
| Cardholder is present to tap/insert again | `POST /transactions` with `"operation": "preAuthorizationIncrease"` | Yes | All |
| Back-office adjustment — no card re-tap | `POST /preauthorization/increase` | No | EPI only |

Rules that apply to both:
- Do **not** include a `transactionReference` — this is a subsequent operation, not an originating one.
- The `originalTransactionId` / `originalGuid` must be the `transactionID` from the preceding step.

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

**Option A — Terminal-based (card present):**

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "preAuthorizationIncrease",
  "amount": "15000",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "originalTransactionId": "01236fc0-8192-11eb-9aca-ad4b0e95f241"
}
```

`amount` is in **minor units** (cents). For a decrease, use the same endpoint with a lower `amount`.

**Option B — Back-office (no card, EPI only):**

```http
POST https://cloud.handpoint.com/preauthorization/increase
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "originalGuid": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
  "increaseAmount": "150.00"
}
```

`increaseAmount` is in **major units** (dollars, string format) — not `amount`. To decrease instead, add `"subtract": "1"` to the body. There is no separate `/preauthorization/decrease` endpoint — the same endpoint handles both.

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

```kotlin
// Increase or decrease — pass the new total hold amount
hapi.preAuthorizationIncrease(
    BigInteger("15000"),                            // new total hold amount
    Currency.USD,
    "01236fc0-8192-11eb-9aca-ad4b0e95f241"         // transactionID from original pre-auth
)
```

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

Not supported on HiLite.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

Not supported on iOS HiLite.

</TabItem>
<TabItem value="cordova" label="Cordova">

```javascript
handpoint.preAuthorizationIncrease(
  {
    amount: 15000,
    currency: "USD",
    originalTransactionID: "01236fc0-8192-11eb-9aca-ad4b0e95f241"
  },
  function(result) { /* handle */ },
  function(error) { console.error(error); }
);
```

</TabItem>
</Tabs>

---

## Step 3a — Capture

Finalizes the hold and charges the cardholder. Use the actual amount — it can be less than (or on some acquirers, slightly more than) the original hold.

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

```http
POST https://cloud.handpoint.com/preauthorization/capture
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "originalGuid": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
  "capturedAmount": "9500"
}
```

`originalGuid` is the `transactionID` from the pre-authorization result.

To include a tip:

```http
{
  "originalGuid": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
  "capturedAmount": "9500",
  "tipAmount": "500"
}
```

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

```kotlin
hapi.preAuthorizationCapture(
    BigInteger("9500"),                             // actual capture amount
    Currency.USD,
    "01236fc0-8192-11eb-9aca-ad4b0e95f241"         // transactionID from pre-auth result
)

override fun endOfTransaction(result: TransactionResult, ref: TransactionReference) {
    if (result.finStatus == FinancialStatus.AUTHORISED) {
        // capture successful — funds will settle at batch close
    }
}
```

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

Not supported on HiLite.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

Not supported on iOS HiLite.

</TabItem>
<TabItem value="cordova" label="Cordova">

```javascript
handpoint.preAuthorizationCapture(
  {
    amount: 9500,
    currency: "USD",
    originalTransactionID: "01236fc0-8192-11eb-9aca-ad4b0e95f241"
  },
  function(result) { /* handle */ },
  function(error) { console.error(error); }
);
```

</TabItem>
</Tabs>

---

## Step 3b — Pre-Auth Reversal (release without capturing)

Releases the hold without charging the cardholder. Use when a booking is cancelled or the pre-auth is no longer needed.

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "preAuthorizationReversal",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "originalTransactionId": "01236fc0-8192-11eb-9aca-ad4b0e95f241"
}
```

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

```kotlin
hapi.preAuthorizationReversal("01236fc0-8192-11eb-9aca-ad4b0e95f241")
```

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

Not supported on HiLite.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

Not supported on iOS HiLite.

</TabItem>
<TabItem value="cordova" label="Cordova">

```javascript
handpoint.preAuthorizationReversal(
  { originalTransactionID: "01236fc0-8192-11eb-9aca-ad4b0e95f241" },
  function(result) { /* handle */ },
  function(error) { console.error(error); }
);
```

</TabItem>
</Tabs>

---

## Step 4 — Capture Reversal (cancel a capture, pre-settlement)

Cancels a capture that was sent in error — **before the batch closes and funds settle**. After settlement, only a Refund is possible.

The same `preAuthorizationReversal` operation is used for both Void hold (Step 3b) and Capture Reversal. The gateway determines the correct action based on the current state of the original transaction.

**Partial capture reversal (EPI only):** EPI supports reversing part of a capture — for example, if you captured $95 but only $70 should have been charged, you can reverse $25 rather than the full capture amount. On other acquirers, capture reversal is full-amount only.

:::info Acquirer support
Not all acquirers support Capture Reversal. Check the [acquirer capabilities matrix](/reference/acquirer-capabilities-matrix) for current support per acquirer and integration path.
:::

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "preAuthorizationReversal",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "originalTransactionId": "01236fc0-8192-11eb-9aca-ad4b0e95f241"
}
```

The `originalTransactionId` here is the `transactionID` from the **Capture** result, not the original pre-auth.

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

```kotlin
// Same method as Void hold — gateway determines action based on transaction state
hapi.preAuthorizationReversal("01236fc0-8192-11eb-9aca-ad4b0e95f241")
```

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

Not supported on HiLite.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

Not supported on iOS HiLite.

</TabItem>
<TabItem value="cordova" label="Cordova">

Not confirmed on Cordova. Use Cloud API or Android SDK (PAX) directly.

</TabItem>
</Tabs>

---

## Reconciliation via `transactionReference`

Query the full pre-auth operation chain at any time using the `transactionReference` you sent on the Create:

```http
GET https://transactions.handpoint.com/transactions/2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f/status/all
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

**Example response — Create → Increase → Capture chain:**

```json
[
  {
    "type": "PRE_AUTHORIZATION",
    "finStatus": "AUTHORISED",
    "totalAmount": 10000,
    "transactionID": "01236fc0-8192-11eb-9aca-ad4b0e95f241",
    "transactionReference": "2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f"
  },
  {
    "type": "PRE_AUTHORIZATION_INCREASE",
    "finStatus": "AUTHORISED",
    "totalAmount": 15000,
    "transactionID": "a2b3c4d5-8192-11eb-9aca-ad4b0e95f241",
    "originalEFTTransactionID": "01236fc0-8192-11eb-9aca-ad4b0e95f241"
  },
  {
    "type": "PRE_AUTHORIZATION_CAPTURE",
    "finStatus": "AUTHORISED",
    "totalAmount": 9500,
    "transactionID": "e5f6a7b8-8192-11eb-9aca-ad4b0e95f241",
    "originalEFTTransactionID": "a2b3c4d5-8192-11eb-9aca-ad4b0e95f241"
  }
]
```

The **last operation** in the chain reflects the current state. Use the `totalAmount` of the most recent `AUTHORISED` operation to determine the net amount charged.

See [Transaction Recovery & Status](/reference/transaction-recovery) for full documentation on selectors (`all`, `first`, `last`, `{n}`).

---

## Best practices

| Practice | Why |
|---|---|
| Always reverse unused pre-auths | Unreleased holds reduce the cardholder's available credit and may generate disputes |
| Capture before hold expiry (7–30 days) | Expired holds cannot be captured — you would need to re-initiate a new card interaction |
| Store `transactionID` at every step | Capture and Void both require the `transactionID` from the most recent operation in the chain |
| Store `transactionReference` from Create | Enables `/status/all` queries for the full chain at any time |
| Do not send `transactionReference` on Capture, Increase, or Void | Only on the original Create. Subsequent operations are linked via `originalTransactionId` |
| Partial capture is usually allowed | Capture less than the hold amount when the final charge is lower — no need to void and re-charge |
| After settlement, use Refund — not Capture Reversal | Capture Reversal only works before the batch closes |

---

## Quick reference — `transactionID` chain

The field that links operations differs by integration path:

### Terminal-based (Android PAX SDK, Cordova, Cloud API `POST /transactions`)

Each operation references the **most recent preceding transactionID** — not the original pre-auth:

```
Create          → transactionID = "A"
Increase        → originalTransactionId = "A"   → transactionID = "B"
Second Increase → originalTransactionId = "B"   → transactionID = "C"
Capture         → originalTransactionId = "C"   (most recent, not "A")
Void            → originalTransactionId = "A"   (original pre-auth, or most recent step — confirm per acquirer)
```

### Back-office Capture (`POST /preauthorization/capture`)

`originalGuid` always references the **original pre-auth `transactionID`** ("A"), regardless of how many increases occurred:

```
Create          → transactionID = "A"
Increase        → transactionID = "B"
Back-office Capture → originalGuid = "A"   ← always the original pre-auth
```

:::caution Mixing paths
If you started the pre-auth with a terminal operation but want to capture via the back-office endpoint (or vice versa), always use the `transactionID` from the Create result as `originalGuid` for the back-office capture. Do not chain through intermediate increase IDs when using `POST /preauthorization/capture`.
:::

---

## Hold durations by card network {#hold-durations}

A pre-authorization hold expires automatically if not captured or voided within the card network's maximum timeframe. After expiry, the issuer releases the hold — but the authorization record remains, which can cause disputes if a capture is attempted late. **Always capture or void before expiry.**

:::note Void hold timing
Voiding a pre-auth hold is **not** subject to the same-day cut-off that applies to sale reversals or capture reversals. You can void the hold at any point before it expires. After expiry, the network releases it automatically — no void is needed (or possible).
:::

### Visa

| Transaction type | Max processing timeframe | Amount tolerance |
|---|---|---|
| Card-absent with Extended Authorization indicator | 30 calendar days | Up to 15% |
| Card-absent (standard) | 10 calendar days | Up to 15% |
| Estimated auth — taxicabs (MCC 4121) | 5 calendar days | — |
| Estimated auth — eating places (MCC 5812) | 5 calendar days | Up to 30% (CP and CNP) |
| Estimated auth — fast food (MCC 5814) | 5 calendar days | Up to 30% (CP and CNP) |
| Estimated auth — drinking places (MCC 5813) | 5 calendar days | — |
| Estimated auth — beauty shops (MCC 7230) | 5 calendar days | — |
| Estimated auth — spas / health clubs (MCC 7298) | 5 calendar days | — |
| Estimated auth — caterers (MCC 5811) | 5 calendar days | — |
| Grocery / superstore card-not-present (MCC 5411) | 7 calendar days | — |
| Lodging | Duration of stay | — |
| Vehicle rental | Duration of rental | — |
| Truck rental | Duration of rental | — |
| Cruise line | Duration of cruise | — |

### Mastercard

| Transaction type | Max processing timeframe | Amount tolerance |
|---|---|---|
| Card-absent with Extended Authorization indicator | 30 calendar days | None specified |
| Card-absent (standard) | 10 calendar days | None specified |
| Estimated auth — eating places (MCC 5812) | 5 calendar days | Up to 30% (CP and CNP) |
| Estimated auth — fast food (MCC 5814) | 5 calendar days | Up to 30% (CP and CNP) |
| Estimated auth — drinking places (MCC 5813) | 5 calendar days | — |
| Estimated auth — beauty shops (MCC 7230) | 5 calendar days | — |
| Estimated auth — spas (MCC 7298) | 5 calendar days | — |
| Estimated auth — caterers (MCC 5811) | 5 calendar days | — |
| Grocery card-not-present (MCC 5411) | 7 calendar days | — |
| Lodging | Duration of stay | — |
| Vehicle rental | Duration of rental | — |
| Truck rental | Duration of rental | — |
| Cruise line | Duration of cruise | — |
| All other (general pre-auth) | 30 calendar days | Up to 15% (or USD 75, whichever greater, for some MCCs) |

### Amex

Amex authorizations generally follow issuer-specific rules. The default hold period is **7 calendar days** for most transaction types. Extended holds for lodging, car rental, and cruise lines follow the duration of the service.

### Discover

Discover follows card-not-present authorization hold rules similar to Visa. Standard CNP holds: **10 calendar days**. Extended authorization: up to **30 calendar days** with the appropriate indicator.

---

> **Source:** Visa Core Rules and Visa Product and Service Rules; Mastercard Transaction Processing Rules. Rules are subject to change — always verify with the current card network rulebooks for your region.
