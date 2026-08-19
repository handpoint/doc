---
id: multi-mid
title: Multi-MID
sidebar_label: Multi-MID
description: Route transactions to different merchant accounts (MIDs) using a single API key and a single terminal, by supplying an externalId per operation.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Multi-MID

Multi-MID lets a single Handpoint integration support multiple merchant accounts (MIDs) from one credential. Any terminal assigned to the merchant can process against any of the configured sub-MIDs — the ISV selects which account to route to by including an `externalId` on each transaction request.

:::info Availability
Multi-MID is available via the **Cloud API** and **Android SDK (PAX)**. Contact your Handpoint Integration Engineer to enable sub-MIDs for a merchant.
:::

## When to use it

| Scenario | How it works |
|---|---|
| Clinic with multiple doctors | One main MID for the clinic; a sub-MID per doctor. The ISV maps each doctor to an `externalId` and includes it in every transaction. |
| Hair salon with independent stylists | Each stylist settles to their own account; the front-desk POS routes by chair or stylist selection. |
| Event with multiple vendors | A single handheld device routes payments to individual vendor accounts based on the item being sold. |
| ISV managing a portfolio of merchants | One integration, one API key per merchant, `externalId` used to tag transactions to the correct account within a multi-location group. |

## How it works

The main merchant account is configured in the TMS. Sub-MIDs are set up by Handpoint as child accounts beneath it. At transaction time your software passes the `externalId` that maps to the correct sub-MID — Handpoint handles the routing.

**No separate API key per sub-MID.** The same API key (or SSK on Android) is used for all sub-accounts. The `externalId` is the only per-transaction input required from your software.

## Clinic example

A clinic has:
- **Main MID** — the clinic entity (used for any unassigned transactions)
- **Sub-MID per doctor** — each doctor processes against their own merchant account; funds settle separately

The ISV maintains a mapping in their system: `{ "doctor_id": 42 } → externalId: "dr-smith"`. When a patient checks out, the POS selects the attending doctor and includes `externalId: "dr-smith"` in the transaction request. Handpoint routes the charge to Dr. Smith's sub-MID.

Reconciliation is done via the [Transaction Feed API](/back-office/transaction-feed-api) — filter by `externalId` to produce per-doctor settlement reports.

---

## Code

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

Include `externalId` in any transaction request. The value must match a sub-MID configured for the merchant in the TMS.

```http
POST https://cloud.handpoint.com/transactions
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "operation": "sale",
  "amount": "5000",
  "currency": "USD",
  "terminal_type": "PAXA920",
  "serial_number": "082104578",
  "transactionReference": "2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f",
  "externalId": "dr-smith"
}
```

`externalId` is optional on every operation — omit it to process against the main MID.

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

Pass a `MerchantAuth` object in the options to override the MID and terminal ID for a specific acquirer.

```kotlin
val merchantAuth = MerchantAuth(
    acquirer = Acquirer.TSYS,
    mid      = "SUB_MERCHANT_ID",
    tid      = "SUB_TERMINAL_ID"
)

val options = SaleOptions()
options.merchantAuth = listOf(merchantAuth)

hapi.sale(BigInteger("5000"), Currency.USD, options)

override fun endOfTransaction(result: TransactionResult, device: Device) {
    if (result.finStatus == FinancialStatus.AUTHORISED) {
        // transaction settled against SUB_MERCHANT_ID
    }
}
```

The `MerchantAuth` overrides the terminal's default routing for this transaction only. All subsequent transactions revert to the default MID unless you supply another override.

:::note Selecting merchant at the app level
For clinic-style flows on Android PAX, the typical pattern is:
1. The ISV app presents a doctor-selection screen before checkout
2. On selection, the app loads the doctor's `mid`/`tid` from a local mapping
3. These are passed as `MerchantAuth` on every transaction for that session or checkout
:::

</TabItem>
</Tabs>

---

## Combining Cloud API and Android SDK

An ISV can use both integration paths within the same merchant operation:

- **Android PAX app** (card-present) — the on-device app handles walk-in patients, passing `MerchantAuth` per doctor selection
- **Cloud API** (MOTO / back-office) — the clinic's back-office system submits phone payments using `externalId` to route to the same sub-MIDs

Both paths settle to the same sub-MID, and both appear in the transaction feed under the same `externalId` / sub-merchant — giving the clinic a unified view regardless of how the payment was taken.

---

## Reconciliation

Use the [Transaction Feed API](/back-office/transaction-feed-api) to filter transactions per sub-MID:

- **Cloud API transactions** — filter by `externalId`
- **Android SDK transactions** — filter by `merchantId` (the sub-MID value from `MerchantAuth`)

This lets you generate per-doctor (or per-sub-merchant) settlement reports entirely from the feed, without building a separate ledger.

---

## Setup checklist

| Step | Who does it |
|---|---|
| Enable Multi-MID for the merchant | Handpoint Integration Support |
| Configure sub-MIDs in the TMS | Handpoint Integration Support |
| Build the `externalId` → sub-MID mapping | ISV |
| Pass `externalId` / `MerchantAuth` per transaction | ISV |
| Test each sub-MID with a DEMO transaction | ISV + Handpoint |

Contact your Handpoint Integration Engineer to get sub-MIDs provisioned before going live.
