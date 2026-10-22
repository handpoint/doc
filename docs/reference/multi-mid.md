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
Multi-MID is available via the **Cloud API**, **Android SDK (PAX)**, and **iOS SDK (HiLite)**. Contact your Handpoint Integration Engineer to enable sub-MIDs for a merchant.

**Not supported:** Android HiLite (MerchantAuth is silently ignored — never serialized to EFT frames), Windows SDK (null hardcoded — not implemented), Cordova plugin (no implementation for either PAX or HiLite).
:::

## When to use it

| Scenario | How it works |
|---|---|
| Clinic with multiple doctors | One main MID for the clinic; a sub-MID per doctor. The ISV maps each doctor to an `externalId` and includes it in every transaction. |
| Hair salon with independent stylists | Each stylist settles to their own account; the front-desk POS routes by chair or stylist selection. |
| Event with multiple vendors | A single handheld device routes payments to individual vendor accounts based on the item being sold. |
| ISV managing a portfolio of merchants | One integration, one API key per merchant, `externalId` used to tag transactions to the correct account within a multi-location group. |

## How it works

The main merchant account is configured in the TMS with an `externalId` (e.g. `"clinic"`). Sub-MIDs are configured as child accounts beneath it, each with their own `externalId` (e.g. `"dr-smith"`, `"dr-jones"`). At transaction time your software passes the `externalId` that maps to the correct account — Handpoint handles the routing.

**The ISV only deals with `externalId` strings.** Acquirer-level parameters (MID, TID, hostCapturePOSID, gateway config) are all opaque backend configuration managed by the Handpoint onboarding team. The onboarding team provisions the sub-MIDs and provides only the `externalId` values to the ISV.

**No separate API key per sub-MID.** The same API key (or SSK on Android) is used for all sub-accounts. The `externalId` is the only per-transaction input required from your software.

## Clinic example

A clinic has:
- **Main MID** — the clinic entity (used for any unassigned transactions)
- **Sub-MID per doctor** — each doctor processes against their own merchant account; funds settle separately

The ISV maintains a mapping in their system: `{ "doctor_id": 42 } → externalId: "dr-smith"`. When a patient checks out, the POS selects the attending doctor and includes `"merchantAuth": [{ "externalId": "dr-smith" }]` in the transaction request. Handpoint routes the charge to Dr. Smith's sub-MID.

Reconciliation is done via the [Transaction Feed API](/back-office/transaction-feed-api) — filter by `externalId` to produce per-doctor settlement reports.

---

## `merchantAuth` and the Credential object {#schema}

`merchantAuth` is an array of **Credential** objects. Each Credential targets one acquirer. At most one Credential per acquirer is allowed in the array.

### Credential fields (Cloud API and Android SDK)

| Field | Type | Required | Constraints | Description |
|---|---|---|---|---|
| `externalId` | string | Yes | Max 23 chars | Handpoint-assigned sub-merchant ID. Must exactly match a `subMerchantExternalId` configured by the Handpoint onboarding team. No other field may be present in the same object. |

### Usage rules

- **One `externalId` per Credential object.** No other fields allowed alongside it.
- **One Credential per acquirer.** If the array has multiple entries (e.g., EPI and Interac/TNS), each must target a different acquirer.
- **iOS SDK:** The iOS HiLite SDK does not support `externalId` — see the iOS tab below for its separate pattern.

---

## Code

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

Pass `merchantAuth` with the `externalId` that maps to the sub-MID configured for the merchant in TMS. The value must exactly match a `subMerchantExternalId` configured by the onboarding team — there is no fallback to the primary MID if it does not match.

```bash
curl -X POST https://cloud.handpoint.com/transactions \
  -H "ApiKeyCloud: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "operation": "sale",
    "amount": "5000",
    "currency": "USD",
    "terminal_type": "PAXA920",
    "serial_number": "082104578",
    "transactionReference": "2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f",
    "merchantAuth": [
      { "externalId": "dr-smith" }
    ]
  }'
```

`merchantAuth` is optional — omit it to process against the primary MID. When included, the `externalId` must be an exact match to a configured sub-MID.

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

Pass a `MerchantAuth` containing a `Credential` in the options. The recommended approach for Handpoint-managed sub-MIDs is `externalId` — the Handpoint backend resolves it to the correct acquirer credentials, so the app never stores raw MID/TID values.

:::info externalId must be provisioned by Handpoint
The `externalId` strings are configured in the Handpoint Portal / TMS by the **Handpoint onboarding team** when provisioning your sub-MIDs. Contact Handpoint Integration Support to get the `externalId` values for your merchant accounts before going live. An `externalId` that does not exactly match a provisioned sub-MID will result in a declined transaction (`"Invalid Merchant"`).
:::

```kotlin
val credential = Credential(externalId = "dr-smith")  // must match a sub-MID configured in Handpoint TMS
val merchantAuth = MerchantAuth().apply { add(credential) }

val options = SaleOptions()
options.merchantAuth = merchantAuth

hapi.sale(BigInteger("5000"), Currency.USD, options)

override fun endOfTransaction(result: TransactionResult, device: Device) {
    if (result.finStatus == FinancialStatus.AUTHORISED) {
        // transaction settled against the sub-MID mapped to "dr-smith"
    }
}
```

`externalId` is mutually exclusive with `acquirer`, `mid`, `tid`, and `mcc` — do not combine them on the same `Credential`.

The `MerchantAuth` overrides the terminal's default routing for this transaction only. All subsequent transactions revert to the default MID unless you supply another override.

:::note Clinic-style flow on Android PAX
1. The ISV app presents a doctor-selection screen before checkout
2. On selection, load the doctor's `externalId` from a local mapping (e.g. `{ doctorId: 42 } → "dr-smith"`)
3. Pass it as `Credential(externalId = "dr-smith")` in `MerchantAuth` on every transaction for that checkout
:::

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

`MerchantAuth` is supported in the iOS SDK via `HapiRemoteService`.

:::caution externalId not available on iOS
The iOS HiLite SDK `Credential` class does not have an `externalId` field. You must supply raw acquirer credentials (`acquirer`, `mid`, `tid`) directly. Get these values from your Handpoint Integration Engineer during onboarding.
:::

```swift
// iOS SDK requires acquirer + mid + tid — no externalId support
let credential = Credential()
credential.acquirer = TSYS  // For EPI-processed merchants
credential.mid = "SUB_MERCHANT_ID"
credential.tid = "SUB_TERMINAL_ID"
let merchantAuth = MerchantAuth(credential: credential)

let options = SaleOptions()
options.merchantAuth = merchantAuth

heftClient.sale(withAmount: 5000, currency: "USD", cardholder: .present, options: options)
```

The `Acquirer` enum values in the iOS SDK: `UNDEFINED`, `AMEX`, `BORGUN`, `EVO`, `OMNIPAY`, `POSTBRIDGE`, `INTERAC`, `TSYS`, `VANTIV`, `SANDBOX`.

</TabItem>
</Tabs>

---

## Combining Cloud API and Android SDK

An ISV can use both integration paths within the same merchant operation:

- **Android PAX app** (card-present) — the on-device app handles walk-in patients, passing `Credential(externalId = "dr-smith")` in `MerchantAuth` per doctor selection
- **Cloud API** (MOTO / back-office) — the clinic's back-office system submits phone payments using `"externalId": "dr-smith"` in `merchantAuth` to route to the same sub-MID

Both paths use the same `externalId` string, settle to the same sub-MID, and appear in the transaction feed under the same sub-merchant — giving the clinic a unified view regardless of how the payment was taken.

---

## Reconciliation

Because `externalId` is not returned in the transaction result, the ISV system must record which `externalId` was sent at the time of each transaction (alongside the `transactionID` and `transactionReference`).

Use the [Transaction Feed API](/back-office/transaction-feed-api) to filter and report per sub-MID:

- **Cloud API transactions** — filter by `externalId` (the value you sent in `merchantAuth`)
- **Android SDK transactions** — filter by `merchantId` (the acquirer MID value from `MerchantAuth`)

This lets you generate per-doctor (or per-sub-merchant) settlement reports entirely from the feed, without building a separate ledger.

---

## Which operations support `merchantAuth` {#scope}

The table below covers the Cloud API. For Android PAX and iOS HiLite, `MerchantAuth` is passed as an SDK options object — the routing logic is the same.

| Operation | Endpoint | `merchantAuth` supported | Notes |
|---|---|---|---|
| Card-present sale | `POST /transactions` `"operation": "sale"` | ✅ | Include `merchantAuth` on every card-present originating request |
| Pre-authorization create | `POST /transactions` `"operation": "preAuthorization"` | ✅ | Routes the hold to the sub-MID |
| Pre-auth increase/decrease (terminal) | `POST /transactions` `"operation": "preAuthorizationIncrease"` | ✅ | |
| Pre-auth reversal (terminal) | `POST /transactions` `"operation": "preAuthorizationReversal"` | ✅ | |
| Back-office capture | `POST /preauthorization/capture` | ✅ | Sub-MID routing preserved from original pre-auth — `merchantAuth` not required but allowed |
| Back-office increase | `POST /preauthorization/increase` | ✅ | |
| Back-office MOTO sale | `POST /moto/sale` | ✅ | Pass `merchantAuth` to route the MOTO charge to the correct sub-MID |
| Back-office MOTO refund | `POST /moto/refund` | ✅ (linked: optional) | Linked refunds inherit the MID from the original sale; include `merchantAuth` on unlinked refunds |
| Reversal | `POST /reversal` | ❌ | Reversal is linked to the original transaction's MID via `originalGuid` — no routing override needed |
| Tip adjustment | `POST /transactions/{id}/tip-adjustment` | ❌ | Inherits MID from the original sale `transactionID` |
| Get Card Token | `GET /transactions/{id}/token` | ❌ | Token retrieval is by transaction ID, not by MID |
| Batch close | `POST /batch/close` | ❌ | Batch operations are per-terminal, not per sub-MID |

**Key rule:** Include `merchantAuth` on every **originating** operation (sale, MOTO sale, pre-auth create, unlinked refund) for a given sub-MID. Subsequent operations (reversal, capture, linked refund) inherit the MID automatically from the original transaction.

---

## Testing

Test each sub-MID independently before going live:

1. Provision at least two sub-MIDs on a DEMO merchant (contact Handpoint Integration Support). Get the `externalId` values for each from the onboarding team.
2. Send a sale with `merchantAuth: [{ "externalId": "subA" }]` — verify the transaction is `AUTHORISED`. The `externalId` is not echoed in the result; confirm routing via the [Transaction Feed API](/back-office/transaction-feed-api) filtering by `externalId`.
3. Send a second sale with `merchantAuth: [{ "externalId": "subB" }]` — verify routing to sub-MID B.
4. Send a sale **without** `merchantAuth` — verify it routes to the primary merchant account.
5. Test an invalid `externalId` — present a card on the terminal and confirm you receive `finStatus: "DECLINED"` with `statusMessage: "Invalid Merchant"` (`arc: "1000"`). The card must be fully read before the decline is returned; this is a poll result, not a 4xx error.
6. Test a reversal on a sub-MID sale by passing the sub-MID sale's `transactionID` as `originalGuid` — no `merchantAuth` needed on the reversal.

Use the [trigger amounts](/reference/development-hardware#trigger-amounts) to simulate declines and partial approvals for each sub-MID.

## Error handling

**Unknown or unconfigured `externalId`:** If the `externalId` in `merchantAuth` does not exactly match a sub-MID configured for the merchant, the transaction returns:

```json
{
  "finStatus": "DECLINED",
  "statusMessage": "Invalid Merchant",
  "arc": "1000"
}
```

There is **no fallback to the primary MID** — the decline is final. Note that the terminal goes through the full EMV card read before the decline is returned: the cardholder presents their card, the terminal processes it, and then the decline is shown. This is a standard 202 + polling flow, not a 4xx HTTP error.

Always pre-validate that each `externalId` you send is provisioned in TMS before going live.

**`externalId` is not in the transaction result:** The `externalId` you send in `merchantAuth` is not echoed back in the transaction result. Store it alongside the `transactionID` in your own system at the time of the request — do not rely on reading it back from the result later.

**`mid` in the result is the terminal TID, not the sub-MID:** The `mid` field in the transaction result reflects the terminal's default TID (configured in TMS as `defaultAcquirerTid`). The sub-MID's acquirer MID is used for settlement at the acquirer level and does not appear in the Handpoint transaction result.

**Missing `merchantAuth` on linked operations:** Reversal, tip adjustment, refund, and token operations inherit the MID from the original transaction — you do not re-send `merchantAuth` on those calls. The link is by `transactionID` / `originalGuid`, not by sub-MID.

## Setup checklist

| Step | Who does it |
|---|---|
| Enable Multi-MID for the merchant | Handpoint Integration Support |
| Configure sub-MIDs in the TMS | Handpoint Integration Support |
| Build the `externalId` → sub-MID mapping | ISV |
| Pass `externalId` / `MerchantAuth` per transaction | ISV |
| Test each sub-MID with a DEMO transaction | ISV + Handpoint |

Contact your Handpoint Integration Engineer to get sub-MIDs provisioned before going live.
