---
title: Tipping Guide
sidebar_position: 9
description: Choose between Sale with Tip (cardholder selects at terminal) and Tip Adjustment (post-sale, staff enters from receipt). The two approaches are mutually exclusive on the same transaction.
---

# Tipping Guide

Handpoint supports two tip collection strategies. Choose one per transaction — they are **not compatible with each other on the same transaction**.

## Comparison

| | Sale with Tip | Tip Adjustment |
|---|---|---|
| **When tip is collected** | At checkout — cardholder selects before card is processed | After sale — staff enters from signed receipt before batch close |
| **How it works** | `tipConfiguration` in the sale request; tip is part of the authorized amount | Separate back-office call to `/transactions/{id}/tip-adjustment` after the sale |
| **Acquirer support** | All acquirers | **EPI and PAYSAFE only** (credit/debit; not Interac) |
| **Batch close dependency** | None — tip is captured in the original sale | Must be submitted **before batch close** — late adjustments are silently dropped |
| **Best fit** | Counter or handheld where cardholder interacts with the terminal | Table-service where staff collects a paper receipt and enters the tip later |

## Sale with Tip — `tipConfiguration`

Include a `tipConfiguration` object in the sale request. The terminal presents percentage and custom tip options; the total (base + tip) is authorized in a single transaction.

```json
{
  "operation": "sale",
  "amount": "3800",
  "currency": "USD",
  "tipConfiguration": {
    "baseAmount": "3800",
    "tipPercentages": [15, 18, 20],
    "enterAmountEnabled": true,
    "skipEnabled": true,
    "footer": "Thank you!"
  }
}
```

| Field | Type | Description |
|---|---|---|
| `baseAmount` | string | Amount used to calculate the percentage options. Usually the same as `amount`. Minor units |
| `headerName` | string | Header text shown on the tip screen. Defaults to `"Tip"` |
| `tipPercentages` | array | Percentage buttons to display (e.g. `[15, 18, 20]`) — required |
| `enterAmountEnabled` | boolean | `true` to allow the cardholder to type a custom amount |
| `skipEnabled` | boolean | `true` to show a "SKIP" option |
| `footer` | string | Optional message shown on the tip screen |

The result includes `tipAmount` (in minor units) and `totalAmount` (base + tip). See the acquirer page for full examples: [EPI](/acquirers/epi#sale-and-tip) · [PAYSAFE](/acquirers/paysafe#sale-and-tip) · [EmerchantPay](/acquirers/emerchantpay#sale-and-tip) · [Paystrax](/acquirers/paystrax#sale-and-tip).

:::note iOS HiLite — tipping configured in Handpoint Portal (TMS)
The iOS HiLite SDK's `SaleOptions` has no `tipConfiguration` parameter — all tipping is configured at the terminal level in the [Handpoint Portal](https://portal.handpoint.com):

- **Sale with Tip**: Enable **"Tip at the table supported"** on the terminal's profile. The cardholder selects a tip on the reader; the result is returned in `FinanceResponseInfo.gratuityAmount` / `gratuityPercentage`.
- **Tip Adjustment**: Enable **"Tip adjustment supported"** on the terminal's profile. Without this toggle, tip adjustment calls are rejected.

Contact your Handpoint account team to enable either feature.
:::

## Tip Adjustment — post-sale, before settlement

The sale closes at the base amount. After the guest leaves, staff enters the tip from the signed receipt. Your system posts a back-office call before the batch closes and settles.

**Supported acquirers: EPI and PAYSAFE only.** EmerchantPay and Paystrax settle automatically and do not support post-sale tip adjustment — use Sale with Tip or pre-authorization capture with `tipAmount` for those acquirers.

```bash
curl -X POST "https://cloud.handpoint.com/transactions/{transactionID}/tip-adjustment" \
  -H "ApiKeyCloud: YOUR_MERCHANT_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "amount": 8 }'
```

`transactionID` is from the original AUTHORISED sale result. `amount` is in **major currency units** — `8` = $8.00.

**Response — HTTP 200:**
```json
{
  "statusMessage": "tip adjusted"
}
```

:::caution Before batch close only
Tip adjustments submitted after batch close are **silently dropped** — no error is returned. Enforce a cut-off window for tip entry and schedule your batch close after that window. For EPI, this is typically before 11 PM EST.
:::

:::caution Not compatible with Sale with Tip
If `tipConfiguration` was used in the original sale request (the cardholder already selected a tip on the terminal), do **not** also post a tip adjustment on the same transaction. The adjustment will overwrite the cardholder-selected tip.
:::

### To undo a tip adjustment

Send `amount: 0` — do **not** use `/reversal`. A reversal cancels the entire transaction, not just the tip.

```bash
curl -X POST "https://cloud.handpoint.com/transactions/{transactionID}/tip-adjustment" \
  -H "ApiKeyCloud: YOUR_MERCHANT_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "amount": 0 }'
```

### Last-write-wins

Multiple adjustments on the same transaction are accepted. The last one before batch close is the value that settles.

See the acquirer page for full SDK examples: [EPI](/acquirers/epi#tip-adjustment) · [PAYSAFE](/acquirers/paysafe#tip-adjustment).

## Which approach to use

```
Does the cardholder interact with the terminal at checkout?
  Yes → Sale with Tip (tipConfiguration)
  No  → Tip Adjustment after the fact
           (EPI/PAYSAFE only — use Sale with Tip for EU acquirers)
```

For pre-authorization flows (hotel, restaurant tab), use `tipAmount` in the **Capture** body instead of either method above. See [Pre-Authorization Guide](/reference/pre-authorization-guide#capture).
