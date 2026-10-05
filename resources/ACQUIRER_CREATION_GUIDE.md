# Acquirer Creation Guide

Step-by-step reference for creating and configuring acquirers in the Handpoint TMS. Covers what each protocol needs, which fields are editable vs auto-set, and the acquirer-level capability flags to enable after creation.

---

## Overview

An **acquirer** in the Handpoint TMS is a named entity linking a protocol (e.g. OMNIPAY, TSYS) to a set of configuration fields and capability flags. Terminals are assigned to acquirers; the acquirer record controls what the terminal can do and how it communicates with the processor.

Creating an acquirer involves:
1. Choosing the **protocol**
2. Setting the **custom fields** (MID, TID, and protocol-specific identifiers)
3. Enabling the appropriate **capability flags**
4. Assigning the acquirer to a **merchant agreement**

---

## Common Fields Across All Protocols

These fields are on every acquirer record regardless of protocol:

| Field | Description | Notes |
|-------|-------------|-------|
| `acquirer_id_alpha` | Unique Handpoint acquirer ID | Auto-generated or set by Handpoint ops |
| `name` | Display name for the acquirer | e.g. `"Lloyds Bank Cardnet"` |
| `protocol_id_alpha` | Which protocol this acquirer uses | e.g. `"OMNIPAY"`, `"TSYS"` |
| `currencies` | List of supported currencies | ISO 4217 codes |
| `bin_list_id_alpha` | BIN list for card brand routing | Assigned by Handpoint |
| `receipt_template` | Custom receipt HTML template | Optional |
| `server_address_block` | Network routing config | Set by Handpoint infrastructure team |

---

## Protocol-Specific Field Reference

### OMNIPAY

**Common use:** UK — Lloyds Bank Cardnet, eMerchant Pay, Paystra

| Field key | Label | Required | Editable | Max length | Default | Notes |
|-----------|-------|:--------:|:--------:|:----------:|---------|-------|
| `merchantid` | Merchant ID | **Yes** | Yes | 23 | — | Agreement MID from acquirer |
| `terminalid` | Terminal ID | No | Yes | 23 | Last 8 of serial | TID assigned by acquirer |
| `acquirerid` | Acquirer ID | **Yes** | No (select) | 23 | `000001` | **Dropdown** — determines sub-acquirer routing |

**Acquirer ID options:**

| Value | Sub-acquirer | Settlement route |
|-------|-------------|-----------------|
| `000001` | Generic | — |
| `000008` | Lloyds Bank Cardnet | SQS batch settlement |
| `000050` | eMerchant Pay (EMP) | SQS batch settlement |
| `000069` | Paystra | SQS batch settlement (separate PPK key) |

**Capabilities to enable:** MOTO (`supports_moto`), Pre-auth (`supports_preauth`), Batching (`supports_batching`)

---

### TSYS

**Common use:** US — TSYS host-capture

| Field key | Label | Required | Editable | Max length | Default | Notes |
|-----------|-------|:--------:|:--------:|:----------:|---------|-------|
| `hostCapturePosId` | Host Capture POS ID | **Yes** | Yes | 23 | — | **Primary agreement identifier** (not merchantid) |
| `authenticationCode` | Authentication Code | **Yes** | Yes | 23 | `123456789A` | **Change for production** |
| `tsysAcquirerSolutionDeveloperId` | Developer ID | Yes | **No** | 23 | — | Set by Handpoint; do not modify |
| `tsysAcquirerSolutionVersionId` | Version ID | Yes | **No** | 23 | — | Set by Handpoint; do not modify |
| `tsysMid` | TSYS MID | No | No | 23 | — | Optional; returned from TSYS |

**Capabilities to enable:** MOTO (`supports_moto`), Pre-auth (`supports_preauth`), Partial Reversal (`supports_partial_reversal`) if needed by the merchant.

---

### TNS (Paysafe)

**Common use:** US/UK — Paysafe (formerly TNS) ISO 8583

| Field key | Label | Required | Editable | Max length | Default | Notes |
|-----------|-------|:--------:|:--------:|:----------:|---------|-------|
| `merchantid` | Merchant ID | **Yes** | Yes | 23 | — | MID provided by Paysafe |
| `terminalid` | Terminal ID | No | Yes | 23 | `12S` + last 5 SN | TID; auto-formatted from serial if blank |
| `acquirerid` | Acquirer ID | Yes | **No** | 23 | `112701` | Auto-set from server config; do not change |

> **Important:** On TNS, refunds are sent as reversals on the wire. In the TXN Feed API, TNS refunds appear as `"Sale Reversal"` not `"EMV Refund"`. Inform merchants of this behaviour.

---

### VANTIV (Worldpay US)

**Common use:** US — Vantiv/Worldpay

| Field key | Label | Required | Editable | Max length | Default | Notes |
|-----------|-------|:--------:|:--------:|:----------:|---------|-------|
| `merchantid` | Merchant ID | **Yes** | Yes | 23 | — | MID from Vantiv |
| `terminalid` | Terminal ID | No | Yes | 23 | Last 8 of serial | TID from Vantiv |
| `acquirerid` | Acquirer ID | No | Yes | 23 | — | Optional Vantiv acquirer ID |

**Capabilities to enable:** Tokenization (`supports_card_token`), MOTO (`supports_moto`) if applicable.

---

### ELAVON

**Common use:** EU/US — Elavon

| Field key | Label | Required | Editable | Format | Length | Default | Notes |
|-----------|-------|:--------:|:--------:|:------:|:------:|---------|-------|
| `merchantid` | Merchant ID | **Yes** | Yes | **Numeric only** | **6 digits exactly** | — | Strict numeric, fixed length |
| `terminalid` | Terminal ID | No | Yes | **Numeric only** | **16 digits exactly** | — | Strict numeric, fixed length |
| `acquirerid` | Acquirer ID | No | Yes | Alphanumeric | 6 | `000000` | Optional sub-acquirer routing |

> **Validation note:** Both MID and TID are validated as numeric only. Providing letters will fail validation. These are fixed-length (not max-length) — entering fewer digits will also fail.

**Capabilities to enable:** Tip Adjustment (`supports_tip_adj` if available), Partial Approval if merchant needs it.

---

### BORGUN

**Common use:** Iceland market

| Field key | Label | Required | Editable | Max length | Default | Notes |
|-----------|-------|:--------:|:--------:|:----------:|---------|-------|
| `merchantid` | Merchant ID | **Yes** | Yes | 23 | — | MID from Borgun |
| `terminalid` | Terminal ID | No | Yes | **8** | Last 8 of serial | **Max 8 chars** (shorter than default) |
| `acquirerid` | Acquirer ID | No | **No** | 23 | `001483` | Auto-set; do not change |
| `forwarderid` | Forwarder ID | No | Yes | 23 | `352010` | Borgun forwarder; change only if instructed |

**Capabilities to enable:** Pre-auth (`supports_preauth`), Batching (`supports_batching`), Tokenization (`supports_card_token`) if contracted.

---

### FISERV

**Common use:** US — Fiserv (First Data)

| Field key | Label | Required | Editable | Max length | Default | Notes |
|-----------|-------|:--------:|:--------:|:----------:|---------|-------|
| `merchantid` | Merchant ID | **Yes** | Yes | **16** | — | Alphanumeric; validated against Fiserv on save |
| `terminalid` | Terminal ID | **Yes** | Yes | **8** | — | Alphanumeric; validated against Fiserv on save |
| `did` | Datawire ID (DID) | Auto | **No** | 21 | — | **Auto-populated** via activation service — leave blank |

> **Activation required:** When the acquirer is saved, the TMS calls the Fiserv activation (SRS) service to validate MID and TID and obtain the DID. If activation fails, the acquirer cannot be saved. Ensure the merchant has been set up with Fiserv first.

---

### EVO (EVO Snap)

**Common use:** EU/US — EVO Payments

| Field key | Label | Required | Editable | Max length | Default | Notes |
|-----------|-------|:--------:|:--------:|:----------:|---------|-------|
| `merchantProfileId` | Merchant Profile ID | **Yes** | Yes | 23 | — | **Only field to enter**; provided by EVO |
| `acquirerTerminalId` | Acquirer Terminal ID | Auto | **No** | 23 | — | Auto-set from EVO response |
| `applicationProfileId` | Application Profile ID | Auto | **No** | 23 | — | Auto-set from server config |
| `serviceId` | Service ID | Auto | **No** | 23 | — | Auto-set (US or EU service) |

> **Remote validation:** TMS connects to the EVO API on save to validate the merchant profile. Requires connectivity to EVO at provisioning time. If `shouldConnectToEVO` is false in the server config, remote validation is skipped.

---

### AMEX

**Common use:** Standalone American Express direct acquiring

| Field key | Label | Required | Editable | Max length | Default | Notes |
|-----------|-------|:--------:|:--------:|:----------:|---------|-------|
| `merchantid` | Merchant ID | **Yes** | Yes | **15** | — | Amex-issued MID (SE number) |
| `terminalid` | Terminal ID | No | Yes | **15** | Last 8 of serial | Amex TID |

> **Important:** Amex acquirers only process Amex-branded cards. Often configured alongside another protocol (e.g. OMNIPAY for Visa/MC). Terminals with dual-protocol setups route Amex cards to this acquirer automatically.

---

### POSTBRIDGE

**Common use:** PostBridge gateway

| Field key | Label | Required | Editable | Max length | Default | Notes |
|-----------|-------|:--------:|:--------:|:----------:|---------|-------|
| `acquirerTerminalId` | Acquirer Terminal ID | **Yes** | Yes | 23 | — | TID assigned by PostBridge |

> Minimal configuration. DUKPT PIN encryption is handled at the protocol level, not a field to configure here.

---

### VISCUS_DUMMY

**Use:** Testing and development only. Never use in production.

| Field key | Label | Required | Editable | Max length | Default |
|-----------|-------|:--------:|:--------:|:----------:|---------|
| `acquirerTerminalId` | Acquirer Terminal ID | **Yes** | Yes | 23 | — |

---

## Capability Flags Reference

After creating the acquirer with its custom fields, enable these flags as appropriate for the merchant's contract.

| Flag | DB column | Description | Which protocols support it |
|------|-----------|-------------|---------------------------|
| **Card Tokenization** | `supports_card_token` | Allow the terminal to store a card token for repeat billing | Vantiv, Borgun (select envs) |
| **MOTO** | `supports_moto` | Enable Mail Order / Telephone Order (CNP) transactions | TSYS, OMNIPAY, Vantiv, Fiserv, Amex |
| **Pre-Authorization** | `supports_preauth` | Enable pre-auth hold without immediate capture | TSYS, OMNIPAY, Borgun |
| **Forced Linked Refunds** | `forced_linked_refunds` | Refunds require the original transaction GUID | All protocols |
| **Store & Forward** | `supports_store_and_forward` | Queue offline transactions and send when reconnected | All protocols (with config JSON) |
| **Partial Reversal** | `supports_partial_reversal` | Allow partial void of authorized amount | TSYS |
| **Batching** | `supports_batching` | Enable settlement batch operations | OMNIPAY, Borgun |
| **PayFac** | `supports_payfac` | Enable Payment Facilitator sub-merchant flows | Select protocols |

---

## Quick-Reference: What to Ask the Acquirer / Partner

When onboarding a new merchant, collect the following depending on protocol:

| Protocol | Minimum info needed from acquirer |
|----------|----------------------------------|
| OMNIPAY | MID + Acquirer ID (sub-acquirer selection) |
| TSYS | Host Capture POS ID + Authentication Code |
| TNS | MID (TID can be auto-formatted) |
| VANTIV | MID |
| ELAVON | MID (6 digits, numeric) |
| BORGUN | MID |
| FISERV | MID + TID (activation handled automatically) |
| EVO | Merchant Profile ID |
| AMEX | SE Number (Merchant ID) |
| POSTBRIDGE | Acquirer Terminal ID |

---

## Default TID Patterns

Several protocols auto-generate the Terminal ID from the device serial number if left blank:

| Pattern | Example (SN = `ABC123456`) | Used by |
|---------|--------------------------|---------|
| `LAST_8_SN` | `BC123456` | OMNIPAY, VANTIV, TNS (partial), AMEX |
| `12S + LAST_5_SN` | `12S23456` | TNS |
| `LAST_8_SN` (max 8) | `BC123456` | BORGUN |

When a terminal is provisioned and no TID is set, viscus-tms aligns the TID field from the agreement's default TID. If the agreement also has no default TID, the serial-based pattern is applied.

---

## Validation Errors Reference

| Error | Cause | Fix |
|-------|-------|-----|
| `CustomFieldNotSetException` | A required field is missing | Supply the missing field value |
| `CustomFieldInvalidLengthException` | Field is too short or too long | Check min/max for that protocol's field |
| `CustomFieldInvalidFormatException` | Numeric-only field contains letters (Elavon) | Correct the MID/TID format |
| `ActivationProtocolException` (Fiserv) | MID/TID rejected by Fiserv activation service | Verify credentials with Fiserv support |
| `MerchantNotInitializedException` (EVO) | Merchant Profile ID not found in EVO | Confirm EVO has fully provisioned the merchant |

---

## Card Reader Config Template

After creating the acquirer, a **card reader config template** must be stored in the TMS. This XML blob is pushed to terminals at provisioning time and controls EMV parameters, contactless limits, receipt layout, and host connectivity.

Templates are stored **per acquirer, per manufacturer brand** in the `acquirer_config` table. A separate template exists for each brand that the acquirer supports.

> **OPS Tool:** Use the **Card Reader Config Builder** at `/cr-config-builder` in the OPS runner to generate correct limit values and XML snippets.

### Template scope

| Level | How it works |
|-------|-------------|
| Per acquirer + per brand | `acquirer_config(acquirer_id_alpha, brand, card_reader_config_template)` |
| Falls back to acquirer root | `acquirer.card_reader_config_template` (used for DATECS if no brand-specific entry) |
| NOT per terminal | All terminals under an acquirer share the same template |
| NOT per agreement | Agreements inherit from the acquirer |

### Supported brands

| Brand value | Terminals | Template provider |
|-------------|-----------|-------------------|
| `PAX` | PAX A920, A920PRO, A35, A77, etc. | `AndroidDefaultTemplatesProvider` |
| `TELPO` | Telpo TPS900, etc. | `AndroidDefaultTemplatesProvider` (same as PAX) |
| `DATECS` | HiLites (BBPOS/Datecs) — all serial ranges | `DatecsDefaultTemplatesProvider` |
| `VIRTUAL` | Virtual/software terminals | `VirtualDeviceDefaultTemplatesProvider` |

> **HiLites = DATECS in code.** The `ManufacturerEnum.DATECS` covers all HiLite hardware generations (MIPS and ARM ranges identified by serial number via `HiLiteArchitectureCalculator`).

### TMS API endpoints

```
# Get current template
GET /internal/v1/acquirer/{acquirerId}/cardreaderconfigtemplate?brand=PAX
GET /internal/v1/acquirer/{acquirerId}/cardreaderconfigtemplate          # DATECS default

# Update template
PUT /internal/v1/acquirer/{acquirerId}/cardreaderconfigtemplate?brand=PAX
Content-Type: application/json
Body: { "brand": "PAX", "template": "<?xml ...?><config>...</config>" }
```

---

### Template structure (XML)

The template is an XML string with placeholder variables substituted at provisioning time. Key top-level sections:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<config>
  <sharedsecret>
    <ss>${sharedSecret}</ss>           <!-- injected at provisioning -->
  </sharedsecret>

  ${currencyList}                       <!-- generated from acquirer currencies -->

  <GeneralConfig>
    <merchantName>${merchantName}</merchantName>
    <merchantAddress>${merchantStreet} ${merchantZip} ${merchantCity}</merchantAddress>
    <tipFlag>0</tipFlag>               <!-- 1 = tip prompt enabled -->
    <userInputTimeout>30</userInputTimeout>
    <cardReadingTimeout>30</cardReadingTimeout>
  </GeneralConfig>

  <HostList>
    <hostBlock>
      <finMainAddr>gw-no-dukpt.handpoint.io</finMainAddr>
      <finMainPort>443</finMainPort>
      <defaultPosDataCode>810101xxx34C</defaultPosDataCode>
      <singleMessageForEMV>1</singleMessageForEMV>   <!-- 0 = dual-message EMV -->
      ...
    </hostBlock>
  </HostList>

  ${receiptTemplate}                    <!-- XML receipt layout -->
  ${storeAndForward}                    <!-- SAF config block if enabled -->

  <configVersion>${configVersion}</configVersion>

  <EmvPackage>
    <!-- One <template> block per AID per kernel type -->
    ...
  </EmvPackage>
</config>
```

---

### EMV limit fields (per AID)

Each `<template>` block in `<EmvPackage>` targets one card application (AID). Template types:
- **`E1`** — Contactless kernel configuration (has `cvmLimit`, `txnLimit`, `floorLimit`)
- **`E2`** — Contact / MSR configuration (has `termFloorLimit` only)
- **`E3`** — DRL (Dynamic Rate Limiting) sub-configuration, nested inside `E1` for Visa

#### Limit field reference

| Field | Template | Description | Format |
|-------|----------|-------------|--------|
| `cvmLimit` | E1, E3 | CVM limit — transactions below this amount do **not** require PIN or signature | 8-digit decimal, minor units |
| `cvmLimitFlag` | E1, E3 | `1` = enforce CVM limit; `0` = ignore | `0` or `1` |
| `txnLimit` | E1, E3 | Maximum contactless transaction amount | 8-digit decimal, minor units |
| `txnLimitFlag` | E1, E3 | `1` = enforce txn limit | `0` or `1` |
| `floorLimit` | E1, E3 | Contactless floor limit — below this, transaction can go offline approved | 8-digit decimal, minor units |
| `floorLimitFlag` / `clessFloorLimitFlag` | E1, E3 | `1` = enforce floor limit | `0` or `1` |
| `termFloorLimit` | E1, E2 | Terminal floor limit for contact/MSR — below this, offline approve | 8-digit decimal, minor units |
| `termFloorLimitFlag` | E1, E2 | `1` = enforce terminal floor limit | `0` or `1` |
| `consumerDeviceClessTxnLimit` | E1 (MC/Maestro only) | Limit for consumer device (mobile wallet) contactless | 8-digit decimal, minor units |
| `noConsumerDeviceClessTxnLimit` | E1 (MC/Maestro only) | Limit for card contactless | 8-digit decimal, minor units |

#### Amount encoding

All limit amounts are stored as **8-digit zero-padded decimal strings in minor units** (smallest currency unit):

```
€50.00  →  5000 minor units  →  "00005000"
€15.00  →  1500 minor units  →  "00001500"
€0.00   →  0 minor units     →  "00000000"
no limit →                      "99999999"
```

> For currencies with 0 decimal places (ISK): `1000 ISK → "00001000"` (no conversion needed).

#### Country and currency codes in the template

| Template field | Value format | Example (Spain / EUR) |
|----------------|-------------|----------------------|
| `transCurrCode` / `referCurrCode` | ISO 4217 numeric, 4-digit | `0978` |
| `transCurrExp` / `referCurrExp` | Number of decimal digits | `2` |
| `countryCode` | ISO 3166-1 numeric, 4-digit | `0724` |

Common country + currency codes:

| Country | ISO 3166-1 | Currency | ISO 4217 |
|---------|-----------|----------|---------|
| Spain | `0724` | EUR | `0978` |
| United Kingdom | `0826` | GBP | `0826` |
| United States | `0840` | USD | `0840` |
| Iceland | `0352` | ISK | `0352` |
| Sweden | `0752` | SEK | `0752` |
| Norway | `0578` | NOK | `0578` |
| Denmark | `0208` | DKK | `0208` |

---

### PAX vs HiLites (Datecs) — key differences

| Aspect | PAX | HiLites (Datecs) |
|--------|-----|-----------------|
| `ManufacturerEnum` | `PAX` | `DATECS` |
| TMS template brand | `brand=PAX` | `brand=DATECS` (default when omitted) |
| Template provider | `AndroidDefaultTemplatesProvider` | `DatecsDefaultTemplatesProvider` |
| Limit field names | `cvmLimit`, `txnLimit`, etc. | **Same** |
| Limit value encoding | 8-digit decimal, minor units | **Same** |
| Template XML structure | Full EMV Package with DRL sections | Separate XML blob; DRL program IDs differ |
| Receipt template format | XML `<ReceiptTemplates>` block | Different format; validation is skipped |
| Template validation | Enforced by `AndroidConfigValidator` | **Not validated** — `DatecsConfigValidator` always returns `true` |

**Bottom line:** The numeric value you write for `cvmLimit` is identical for both (e.g. `00005000` for €50.00). What differs is the surrounding XML structure and which DRL program IDs are present. Always fetch the existing template from the TMS before editing, and apply the same value changes to both the PAX and DATECS template blobs.

---

### Example: Setting CVM limit to €50 for Spain (PAX)

1. **Fetch current template:**
   ```
   GET /internal/v1/acquirer/my-acquirer-id/cardreaderconfigtemplate?brand=PAX
   ```

2. **Calculate encoded value:** €50.00 = 5000 minor units = `00005000`

3. **Find and replace in the XML** for every AID E1 template:
   ```xml
   <!-- Before -->
   <tag id="cvmLimit" format='n'>00001500</tag>

   <!-- After -->
   <tag id="cvmLimit" format='n'>00005000</tag>
   ```
   Update every occurrence — one per AID (`cvmLimit` appears in Visa, Mastercard, Maestro, Amex, etc.)
   Also update nested `<templateDrl>` blocks.

4. **Update currency/country codes** if the market changed:
   ```xml
   <tag id="transCurrCode" len='2' format='n'>0978</tag>   <!-- EUR -->
   <tag id="countryCode" len='2' format='n'>0724</tag>      <!-- Spain -->
   ```

5. **Push back to TMS:**
   ```
   PUT /internal/v1/acquirer/my-acquirer-id/cardreaderconfigtemplate?brand=PAX
   Body: { "brand": "PAX", "template": "<updated XML>" }
   ```

6. **Repeat steps 1–5 for the DATECS template** (omit `?brand=PAX`).

> Use the **Card Reader Config Builder** at `/cr-config-builder` to calculate encoded values and generate the XML snippets automatically.
