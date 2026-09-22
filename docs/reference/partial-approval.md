---
id: partial-approval
title: Partial Approvals
description: How to handle partial approvals in the US — the /status timing trap, accept and decline flows, correct reversal amount (totalAmount not requestedAmount), and /status/all chain fetching.
---

# Partial Approvals

## Overview

A **partial approval** occurs when an issuer authorizes less than the requested sale amount — for example, a $37.57 sale approved for $11.00 because the card's available balance is insufficient. This is most common on prepaid and debit cards with a fixed remaining balance.

The cardholder is prompted on-terminal to accept or decline the partial amount. Both outcomes require specific handling by the integration.

## Geographic availability and MCC requirements

Partial approvals are a **US-only** feature. They are mandatory for merchants in specific merchant category codes (MCCs) — primarily fuel, grocery, and general merchandise — and optional for others. **Consult your acquirer** when onboarding a merchant to confirm which MCCs require partial approval acceptance.

When disabled or unsupported by the acquirer, the issuer returns a standard decline (`finStatus: DECLINED`) instead of a partial approval.

## ISV responsibilities — supported or not, you must handle it

Partial approval is **enabled by default** in Handpoint. Every US integration will receive `PARTIAL_APPROVAL` in production. Silently ignoring it is not an option.

There are two paths:

### Path 1 — ISV supports partial approvals (MCC-required or by choice)

Fulfil the order at `totalAmount`. Display `totalAmount` on the receipt. Prompt the cardholder for the remaining balance (`dueAmount`) via a second tender (cash, another card). Both the partial approval and any second-tender transaction are logged separately.

### Path 2 — ISV does not support partial approvals

Even when your solution does not accept partial amounts, you must handle the `PARTIAL_APPROVAL` result gracefully:

1. **Immediately reverse** the partially approved amount — `POST /reversal` (Cloud API) or `hapi.saleReversal(totalAmount, …)` (Android/Windows/Cordova) using **`totalAmount`** (the authorized amount), not `requestedAmount`.
2. **Display** a message such as *"Insufficient funds on this card — transaction cancelled"* or similar.
3. **Log both transactions** in your history: the original partial approval sale and the reversal. Both receipts must be available (one for each transaction), as required by card network rules.

:::danger Never use `requestedAmount` for the reversal
The issuer only authorized `totalAmount`. Reversing `requestedAmount` (the original, larger amount) will fail or cause a settlement mismatch. Always reverse exactly what was authorized.
:::

## Certification and self-validation

Partial approval handling is **required for Handpoint integration certification**:

- **Self-validation test:** use trigger amount `3757` (minor units, e.g. `BigInteger("3757")` or `"3757"` in the Cloud API). Test all three scenarios: cardholder accepts, cardholder declines, and ISV-initiated reversal.
- **Handpoint certification:** after submitting your application to Handpoint for certification review, partial approval flows will be validated by the Handpoint integration team as part of the standard test script.

Even if your merchants are not in an MCC that requires partial approval today, you must still demonstrate that your integration handles `PARTIAL_APPROVAL` correctly — the feature is enabled by default and must be handled to pass certification.

## The `/status` timing trap

:::warning
`GET https://transactions.handpoint.io/transactions/{transactionReference}/status` returns `finStatus: AUTHORISED` as soon as the issuer responds — **before** the cardholder has accepted or declined the partial at the terminal. The cardholder has up to approximately 60 seconds to decide on the terminal (plus additional time if connectivity drops).

An integration that reads `AUTHORISED` from `/status` at this point and marks the transaction as settled may later find the cardholder cancelled, triggering an SDK-initiated auto-reversal that contradicts the saved record.
:::

**Secondary signal from `/status`:** Even though `finStatus` is `AUTHORISED`, the amount fields reveal that a partial approval is in progress:

```json
{
  "finStatus": "AUTHORISED",
  "totalAmount": 1100,
  "requestedAmount": 3757,
  "dueAmount": 2657
}
```

`dueAmount > 0` (or equivalently `totalAmount < requestedAmount`) means the cardholder has not yet responded to the terminal prompt and the result is not final. Do not save the transaction until `dueAmount` is `0` in a final `transaction-result` delivery.

**Correct polling strategy:**

1. Poll `GET https://cloud.handpoint.com/transaction-result/{transactionResultId}` until it resolves with `finStatus: PARTIAL_APPROVAL` (accepted) or `finStatus: CANCELLED` (declined).
2. Escalate to `GET https://transactions.handpoint.io/transactions/{transactionReference}/status` only if:
   - No result arrives within 2–3 minutes, **or**
   - `finStatus` from the result is `UNDEFINED`.
3. If `/status` shows `AUTHORISED` with `dueAmount > 0`: the prompt is still active — keep waiting. Do not save as a completed sale.

## Outcome A — Cardholder accepts

`transaction-result` resolves with `finStatus: PARTIAL_APPROVAL`.

```json
{
  "finStatus": "PARTIAL_APPROVAL",
  "requestedAmount": 3757,
  "totalAmount": 1100,
  "currency": "USD",
  "transactionID": "a4c21bd0-65ab-11f1-b4d2-aab210c7e31c",
  "transactionReference": "your-uuid-here",
  "authorisationCode": "654321",
  "type": "SALE"
}
```

**Save the transaction using `totalAmount` as the settled amount.** Display `totalAmount` on the receipt. The remaining `requestedAmount − totalAmount` is uncollected.

**Option 1 — Split tender:** Collect the remaining amount via a second payment method. Your POS flow should prompt for the outstanding balance.

**Option 2 — Decline the partial (if your integration does not support partial approvals):** Reverse the authorization immediately. See [Reversing a partial approval](#reversing-a-partial-approval) below.

## Outcome B — Cardholder declines

`transaction-result` resolves with `finStatus: CANCELLED`. The SDK automatically sends a reversal for `totalAmount` — no action is required from your integration.

Do not save the transaction as a sale. Prompt the cardholder to use a different payment method.

To log the full chain (the CANCELLED partial + the SDK-generated reversal), fetch `/status/all`:

```http
GET https://transactions.handpoint.io/transactions/{transactionReference}/status/all
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

Response is an array of all transactions linked to this reference:

```json
[
  {
    "finStatus": "CANCELLED",
    "type": "SALE",
    "totalAmount": 1100,
    "requestedAmount": 3757
  },
  {
    "finStatus": "AUTHORISED",
    "type": "REVERSAL",
    "totalAmount": 1100
  }
]
```

## Reversing a partial approval (ISV does not support partial approvals) {#reversing-a-partial-approval}

If your integration does not accept partial approvals, reverse the transaction immediately after receiving `PARTIAL_APPROVAL`:

```http
POST https://cloud.handpoint.com/reversal
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "originalGuid": "a4c21bd0-65ab-11f1-b4d2-aab210c7e31c"
}
```

`originalGuid` is the `transactionID` from the partial approval result. The endpoint is **synchronous** — no polling required. HTTP 200 means the reversal was accepted; HTTP 400 with `code: 3051` means already reversed.

:::danger Use `totalAmount` as the reversal amount — not `requestedAmount`
The issuer only authorized `totalAmount`. Reversing `requestedAmount` (the original, larger amount) will fail or cause a settlement mismatch. Always reverse exactly what was authorized.
:::

For acquirers that require an explicit `amount` on the reversal (e.g. EPI), include it in cents:

```json
{
  "originalGuid": "a4c21bd0-65ab-11f1-b4d2-aab210c7e31c",
  "amount": "1100"
}
```

Check with your acquirer during onboarding whether `amount` is required.

After a successful reversal (`finStatus: AUTHORISED`):
- Display "Insufficient funds on this card — transaction cancelled" or equivalent.
- Prompt the cardholder to use a different payment method.
- **Log both transactions** in your history: the original `PARTIAL_APPROVAL` sale and the reversal. Card network rules require both receipts to be available.

Both the partial sale receipt and the reversal receipt should be accessible in your transaction log.

## Amount fields reference

| Field | What it represents | Use for |
|---|---|---|
| `totalAmount` | The amount the issuer actually authorized (the partial) | Receipt display, reversal amount, settlement reconciliation |
| `requestedAmount` | The original amount sent in the sale request | Display only ("requested $37.57, approved $11.00") — **never** use for reversals |
| `dueAmount` | Remaining balance the cardholder still owes (`requestedAmount − totalAmount`) | Split tender — prompting a second payment for the outstanding balance |

## Decision tree

```
transaction-result finStatus = PARTIAL_APPROVAL
│
├── ISV accepts partial approvals?
│   ├── Yes → Save at totalAmount. Show receipt. Done.
│   └── No  → POST saleReversal with amount = totalAmount.
│             Show "Insufficient funds."
│             → Reversal finStatus = AUTHORISED?
│               ├── Yes → Hold released. Prompt for another card.
│               └── No  → Log failure. Escalate — hold may be outstanding.
│
└── Cardholder declines (finStatus = CANCELLED)
    → SDK auto-reversed totalAmount. Do not save as a sale.
       Prompt for another card.
```

## Related pages

- [Transaction Recovery](/reference/transaction-recovery-cloud-api) — handling connectivity loss mid-transaction
- [Terminal Reversals](/reference/terminal-reversals) — when the terminal reverses automatically
- [Transaction Result Object](/reference/transaction-result-object) — full schema for all result fields
