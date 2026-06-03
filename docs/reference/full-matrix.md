---
title: Full capabilities matrix
sidebar_position: 0
description: Complete matrix of all payment operations per acquirer and per integration path. Verified against viscus gateway SDK source.
hide_table_of_contents: true
---

# Full capabilities matrix

**Legend:** ✅ = Supported &nbsp;|&nbsp; ❌ = Coming soon &nbsp;|&nbsp; ❌ = Not supported &nbsp;|&nbsp; — = N/A

Verified against viscus gateway SDK source code and Android SDK documentation.

---

## TSYS — US, Canada · VISA MC Discover

Pre-auth includes the full lifecycle: create, increase/decrease, capture, void hold. See Pre-Auth Capture Reversal row for the one exception.

| Operation | REST API | Android (PAX) | Android (HiLite) | iOS (HiLite) | Cordova | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ✅ | ✅ | ❌ | ❌ | ❌ | TSYS US and Canada. REST API + Android (PAX). |
| Tip Adjustment | ✅ | ✅ | ✅ | ❌ | ✅ | iOS HiLite: use REST API instead. |
| Pre-Authorization | ✅ | ✅ | ❌ | ❌ | ✅ | Includes increase/decrease, capture, void hold. |
| MOTO | ✅ | ✅ | ❌ | ❌ | ❌ | On-terminal (PAX shows card entry screen) or back-office (REST API, no reader). PAX only for on-terminal. |
| Tokenization | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Batch Operations | ✅ | ❌ | ❌ | ❌ | ❌ | US + Canada. REST API server-side. |

---

## PAYSAFE + Interac — Canada · VISA MC Discover Interac

| Operation | REST API | Android (PAX) | Android (HiLite) | iOS (HiLite) | Cordova | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | Interac cards: not available. |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | Interac cards: not available. |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tip Adjustment | ✅ | ✅ | ✅ | ❌ | ✅ | TSYS-routed cards only. |
| Pre-Authorization | ✅ | ✅ | ❌ | ❌ | ✅ | TSYS-routed cards only. |
| MOTO | ✅ | ✅ | ❌ | ❌ | ❌ | On-terminal (PAX) or back-office (REST API). |
| Tokenization | ✅ | ✅ | ✅ | ✅ | ✅ | TSYS-routed cards only. |
| Batch Operations | ✅ | ❌ | ❌ | ❌ | ❌ | TSYS (non-Interac) transactions only. |
| Void | ✅ | ✅ | ✅ | ✅ | ✅ | **Interac cards only.** Card must be present. Show VOID in ISV UI, not Refund. |

---

## TNS (Interac) — Canada · Interac only

| Operation | REST API | Android (PAX) | Android (HiLite) | iOS (HiLite) | Cordova | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tip Adjustment | ❌ | ❌ | ❌ | ❌ | ❌ | |
| MOTO | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tokenization | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Void | ✅ | ✅ | ✅ | ✅ | ✅ | **Full amount only. Card must be present. Before settlement.** |

---

## PAYSAFE — US · VISA MC AMEX Discover Interac

| Operation | REST API | Android (PAX) | Android (HiLite) | iOS (HiLite) | Cordova | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tip Adjustment | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Pre-Authorization | ❌ | ❌ | ❌ | ❌ | ❌ | |
| MOTO | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tokenization | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Batch Operations | ❌ | ❌ | ❌ | ❌ | ❌ | |

---

## EmerchantPay — EU · VISA MC AMEX

| Operation | REST API | Android (PAX) | Android (HiLite) | iOS (HiLite) | Cordova | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Pre-Authorization | ✅ | ✅ | ❌ | ❌ | ✅ | Includes increase/decrease, capture, void hold. |
| Pre-Auth Capture Reversal | ✅ | ❌ | ❌ | ❌ | ❌ | REST API only. |
| MOTO | ✅ | ✅ | ❌ | ❌ | ❌ | On-terminal (PAX) or back-office (REST API). |
| Tokenization | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Money Remittance | ✅ | ✅ | ✅ | ✅ | ✅ | AMEX routing: separate MID required. |

---

## Lloyds — EU · VISA MC AMEX

| Operation | REST API | Android (PAX) | Android (HiLite) | iOS (HiLite) | Cordova | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Pre-Authorization | ✅ | ✅ | ❌ | ❌ | ✅ | Includes increase/decrease, capture, void hold. |
| Pre-Auth Capture Reversal | ✅ | ❌ | ❌ | ❌ | ❌ | REST API only. |
| MOTO | ✅ | ✅ | ❌ | ❌ | ❌ | On-terminal (PAX) or back-office (REST API). |
| Tokenization | ✅ | ✅ | ✅ | ✅ | ✅ | |

---

## Paystrax — EU · VISA MC AMEX

| Operation | REST API | Android (PAX) | Android (HiLite) | iOS (HiLite) | Cordova | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Pre-Authorization | ✅ | ✅ | ❌ | ❌ | ✅ | Includes increase/decrease, capture, void hold. |
| Pre-Auth Capture Reversal | ✅ | ❌ | ❌ | ❌ | ❌ | REST API only. |
| MOTO | ✅ | ✅ | ❌ | ❌ | ❌ | On-terminal (PAX) or back-office (REST API). |
| Tokenization | ✅ | ✅ | ✅ | ✅ | ✅ | |

---

## TEYA (Borgun) — EU · VISA MC

| Operation | REST API | Android (PAX) | Android (HiLite) | iOS (HiLite) | Cordova | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tokenization | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Batch Operations | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Money Remittance | ❌ | ❌ | ❌ | ❌ | ❌ | |

---

## VANTIV (Worldpay) — US · VISA MC Discover

| Operation | REST API | Android (PAX) | Android (HiLite) | iOS (HiLite) | Cordova | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tip Adjustment | ✅ | ✅ | ✅ | ❌ | ✅ | |
| Pre-Authorization | ✅ | ✅ | ❌ | ❌ | ✅ | |
| Batch Operations | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Money Remittance | ❌ | ❌ | ❌ | ❌ | ❌ | |

---

## Cross-acquirer summary

EMP = EmerchantPay

| Operation | TSYS | PAYSAFE+Interac | TNS | PAYSAFE | EMP | Lloyds | Paystrax | TEYA | VANTIV |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Refund | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Reversal | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Partial Rev | Tip Adj | ✅ | Pre-Auth | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Pre-Auth Capture Rev | ❌² | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ |
| MOTO | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Tokenization | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Batch Operations | ✅ | Money Rem | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Void | ❌ | ✅⁴ 
¹ TSYS partial reversal: TSYS US and Canada. Available via REST API and Android SDK (PAX).  
² Pre-Auth Capture Reversal: in development for TSYS (❌ REST API only); confirmed supported for EmerchantPay, Lloyds, Paystrax (✅ REST API only).  
³ PAYSAFE + Interac Batch Operations: TSYS (non-Interac) transactions only, REST API only.  
⁴ PAYSAFE + Interac / TNS void: Interac cards only, card must be physically present.  
❓ = Status unknown — to be confirmed with integration team.

---

## Integration path capabilities

What each integration path can do across ALL acquirers:

:::info REST API — integrated mode
REST API card-present operations require a PAX terminal running the Handpoint Android SDK initialised in **cloud/integrated mode**. The REST API sends commands to the Handpoint Cloud, which forwards them to the terminal. MOTO (no-terminal) operations are a separate back-office capability — see [Back Office](/back-office/rest-api-no-reader).
:::

| Integration path | Card-present ops | MOTO | Batch Operations | Partial Rev | Notes |
|---|---|---|---|---|---|
| **REST API** | ✅ All (PAX in integrated mode required) | ✅ Back-office (REST API, no reader, acquirer-dependent) | ✅ Where acquirer supports | ✅ TSYS only | PAX debug → `.io`; PAX prod → `.com` |
| **Android (PAX)** | ✅ All except batch | ✅ On-terminal (PAX shows card entry screen) — PAX only | ❌ | ✅ TSYS only | Runs natively on PAX terminal |
| **Android (HiLite)** | ✅ Sale, refund, reversal, tokenize. Tip adj ✅. Pre-auth ❌ | ❌ | ❌ | ❌ | BT to HiLite (DATECS); no MOTO/batch/partial rev |
| **iOS (HiLite)** | ✅ Sale, refund, reversal, tokenize. No tip adj | ❌ | ❌ | ❌ | BT to HiLite; tip adj not supported on iOS |
| **Cordova** | ✅ Same as Android (PAX) for PAX; same as Android (HiLite) for HiLite | ❌ | ❌ | ❌ | Single JS API for both device types |

---

## Card brand support

The Handpoint platform CardBrand enum (viscus-lib-core) defines these brands: **VISA, Mastercard, Maestro, AMEX, Discover, JCB, Diners, UnionPay, Interac.**

Acquirer-level acceptance depends on the individual acquirer agreement. Confirmed from viscus source:

| Card brand | Where confirmed |
|---|---|
| JCB | VANTIV (Worldpay) — `VantivFieldFormatter` maps `"JC"` → `"JCB"` |
| UnionPay | OMNIPAY (EmerchantPay, Lloyds, Paystrax) — `CardBrandValidator` and `PayFacIdValidator` handle UnionPay separately |
| Interac | TSYS Canada, PAYSAFE + Interac, TNS (Interac) |

Other acquirers (TSYS, PAYSAFE, TEYA): JCB and UnionPay acceptance depends on acquirer agreement — verify with integration team per merchant.

---

## Open items

| Item | Status |
|---|---|
| **JCB on TSYS / PAYSAFE / TEYA** | Platform supports it; verify acquirer agreement enables it per merchant |
| **UnionPay on TSYS / VANTIV / TEYA** | Platform supports it; verify acquirer agreement |
| **PAYSAFE pre-auth / MOTO** | Confirmed NOT supported — Paysafe restriction, not a TSYS limitation |









