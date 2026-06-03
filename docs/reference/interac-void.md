---
title: Interac VOID — implementation guide
sidebar_position: 5
description: How to implement Void for Interac card transactions via the TNS protocol. The Android SDK refund() method is mapped by the gateway to a TNS VOID.
---

# Interac VOID — implementation guide

Interac card transactions processed via the TNS protocol have a unique void behaviour that differs from standard reversals. This guide explains the correct implementation.

---

## Why Interac needs a different flow

The Interac network does **not support standard refunds or reversals** post-sale. The only post-sale operation before settlement is a **VOID** — a full cancellation requiring the card to be physically present.

The Handpoint gateway handles the protocol mapping automatically, but integrators need to be aware of:
1. Which SDK method to call
2. What label to show in the ISV UI
3. The constraint that the card must be present

---

## SDK behaviour

When you call the **`refund()` method** on the Android SDK (or equivalent on iOS/Cordova) for a transaction that was originally processed via TNS (Interac):

1. The Handpoint SDK sends a refund request to the Handpoint gateway.
2. The gateway detects that the original sale was routed through TNS (Interac).
3. The gateway **automatically maps** the refund request to a **TNS VOID** (`TnsVoidRefundRequestAdapter` internally).
4. The terminal prompts for the Interac card to be inserted or tapped.
5. The VOID is processed and the hold is released.

You do **not** call a separate void function — the mapping is transparent to the integrator.

---

## ISV UI requirement

:::danger Show "VOID" — not "Refund"
When presenting the cancellation option to the merchant for an Interac card transaction, the button must be labelled **VOID** — never "Refund" or "Reverse".

This is an **Interac network requirement**. Showing "Refund" is incorrect and misleading since credit refunds are not available for Interac.
:::

**Implementation pattern:**
1. Detect whether the original transaction was processed via Interac (check `cardBrand == Interac` in the transaction result).
2. If Interac: show **VOID** button only.
3. If non-Interac (VISA, MC, Discover, AMEX): show **Refund** and/or **Reversal** buttons as appropriate.

---

## Code

### Android SDK (PAX + HiLite)

```kotlin
// For Interac transactions: call refund() — gateway maps to TNS VOID
// The card must be physically present at the terminal
hapi.refund(
    BigInteger("originalAmount"),   // must match the original sale amount exactly
    Currency.CAD,                   // Interac is CAD only
    "original-transaction-id"       // from the original sale result
)
```

### iOS SDK (HiLite)

```swift
// For Interac transactions: call refund — gateway maps to TNS VOID
heftClient.refundWithAmount(originalAmount, currency: "CAD", cardholder: true)
```

### REST API

```http
POST https://cloud.handpoint.com/transaction
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "action": "VOID",
  "original_transaction_reference": "original-transaction-id"
}
```

---

## Constraints

| Constraint | Detail |
|---|---|
| Card must be present | The Interac card must be inserted or tapped at the terminal. Contactless or chip both accepted. |
| Full amount only | Partial voids are not supported by the Interac network. |
| Before settlement | Must occur before the TNS settlement window closes. |
| CAD only | Interac is a Canadian debit network — transactions are always in CAD. |
| No post-settlement recovery | Once settled, Interac transactions cannot be reversed. There is no credit refund option. |

---

## Applies to

This behaviour applies to any Handpoint integration where the merchant's acquirer configuration includes TNS routing for Interac:

- [TNS (Interac)](/acquirers/tns) — Interac-only merchants
- [PAYSAFE + Interac](/acquirers/tsys-tns) — Merchants with TSYS + TNS combo routing
