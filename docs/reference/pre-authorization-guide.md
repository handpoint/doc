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
| Void hold | ✅ | ✅ | ❌ | ❌ | ✅ |
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
  └── Void hold
      (release without charging)
```

**Important constraints:**
- The hold expires in **7–30 days** depending on the card network and issuer. Always capture or void before expiry.
- Always void unused holds — unreleased pre-auths count against the cardholder's available credit.
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

- Send the **new total hold amount**, not a delta.
- The operation links to the original pre-auth via `originalTransactionId`.
- Do **not** include a `transactionReference` — this is a subsequent operation.

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

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

For a decrease, use the same operation with a lower `amount` value.

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

## Step 3b — Void hold (release without capturing)

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

**Partial capture reversal (TSYS only):** TSYS supports reversing part of a capture — for example, if you captured $95 but only $70 should have been charged, you can reverse $25 rather than the full capture amount. On all other acquirers, capture reversal is full-amount only.

:::warning Acquirer support
Not all acquirers support Capture Reversal. Supported on TSYS and OMNIPAY (EmerchantPay, Lloyds, Paystrax). Check the [acquirer capabilities matrix](/reference/acquirer-capabilities-matrix) before implementing.
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
| Always void unused pre-auths | Unreleased holds reduce the cardholder's available credit and may generate disputes |
| Capture before hold expiry (7–30 days) | Expired holds cannot be captured — you would need to re-initiate a new card interaction |
| Store `transactionID` at every step | Capture and Void both require the `transactionID` from the most recent operation in the chain |
| Store `transactionReference` from Create | Enables `/status/all` queries for the full chain at any time |
| Do not send `transactionReference` on Capture, Increase, or Void | Only on the original Create. Subsequent operations are linked via `originalTransactionId` |
| Partial capture is usually allowed | Capture less than the hold amount when the final charge is lower — no need to void and re-charge |
| After settlement, use Refund — not Capture Reversal | Capture Reversal only works before the batch closes |

---

## Quick reference — `transactionID` chain

Each subsequent operation must reference the **most recent preceding operation** — not the original pre-auth:

```
Create         → transactionID = "A"
Increase       → originalTransactionId = "A",  transactionID = "B"
Second Increase → originalTransactionId = "B", transactionID = "C"
Capture        → originalTransactionId = "C" (or "A" if no increases)
```

For the Cloud API Capture specifically, `originalGuid` always references the original pre-auth `transactionID`, not intermediate increases — confirm with your acquirer integration if in doubt.
