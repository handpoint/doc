---
title: Full capabilities matrix
sidebar_position: 0
description: Complete matrix of all payment operations per acquirer and per integration path. Verified against viscus gateway SDK source.
hide_table_of_contents: true
---

# Full capabilities matrix

**Legend:** ✅ = Supported &nbsp;|&nbsp; 🔜 = Coming soon &nbsp;|&nbsp; ❌ = Not supported &nbsp;|&nbsp; — = N/A

Verified against viscus gateway SDK source code. Integration path abbreviations: **R** = REST API · **P** = Android (PAX) · **H** = Android (HiLite) · **i** = iOS (HiLite) · **C** = Cordova

---

## TSYS — US, Canada · VISA MC Discover

Pre-auth includes the full lifecycle: create, increase/decrease, capture, void hold. See Pre-Auth Capture Reversal row for the one exception.

| Operation | R | P | H | i | C | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ✅ | ❌ | ❌ | ❌ | ❌ | US only. REST API server-side. |
| Tip Adjustment | ✅ | ✅ | ✅ | ❌ | ✅ | iOS HiLite: use REST API instead. |
| Pre-Authorization | ✅ | ✅ | 🔜 | 🔜 | ✅ | Includes increase/decrease, capture, void hold. |
| Pre-Auth Capture Reversal | 🔜 | ❌ | ❌ | ❌ | ❌ | In development. REST API only. |
| MOTO | ✅ | ❌ | ❌ | ❌ | ❌ | No terminal required. REST API only. |
| Tokenization | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Batch Close | ✅ | ❌ | ❌ | ❌ | ❌ | US + Canada. REST API server-side. |
| Void | ❌ | ❌ | ❌ | ❌ | ❌ | Use Reversal for card-present. |

---

## PAYSAFE + Interac — Canada · VISA MC Discover Interac

| Operation | R | P | H | i | C | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | Interac cards: not available. |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | Interac cards: not available. |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tip Adjustment | ✅ | ✅ | ✅ | ❌ | ✅ | TSYS-routed cards only. |
| Pre-Authorization | ✅ | ✅ | 🔜 | 🔜 | ✅ | TSYS-routed cards only. |
| MOTO | ✅ | ❌ | ❌ | ❌ | ❌ | REST API only. |
| Tokenization | ✅ | ✅ | ✅ | ✅ | ✅ | TSYS-routed cards only. |
| Batch Close | ✅ | ❌ | ❌ | ❌ | ❌ | TSYS (non-Interac) transactions only. |
| Void | ✅ | ✅ | ✅ | ✅ | ✅ | **Interac cards only.** Card must be present. Show VOID in ISV UI, not Refund. |

---

## TNS (Interac) — Canada · Interac only

| Operation | R | P | H | i | C | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ❌ | ❌ | ❌ | ❌ | ❌ | Not supported by Interac network. Use Void pre-settlement. |
| Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | Not supported. Use Void. |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tip Adjustment | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Pre-Authorization | ❌ | ❌ | ❌ | ❌ | ❌ | Returns BAD_REQUEST. |
| MOTO | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tokenization | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Batch Close | ❌ | ❌ | ❌ | ❌ | ❌ | Interac settles independently. |
| Void | ✅ | ✅ | ✅ | ✅ | ✅ | **Full amount only. Card must be present. Before settlement.** |

---

## PAYSAFE — US · VISA MC AMEX Discover Interac

Paysafe uses TSYS + TNS routing under the hood but restricts MOTO, partial reversal, and pre-auth — even though the underlying TSYS protocol supports them.

| Operation | R | P | H | i | C | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | Not exposed by Paysafe. |
| Tip Adjustment | 🔜 | 🔜 | 🔜 | 🔜 | 🔜 | |
| Pre-Authorization | ❌ | ❌ | ❌ | ❌ | ❌ | Not exposed by Paysafe. |
| MOTO | ❌ | ❌ | ❌ | ❌ | ❌ | Not exposed by Paysafe. |
| Tokenization | 🔜 | 🔜 | 🔜 | 🔜 | 🔜 | |
| Batch Close | ❌ | ❌ | ❌ | ❌ | ❌ | |

---

## EmerchantPay — EU · VISA MC AMEX

| Operation | R | P | H | i | C | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tip Adjustment | ❌ | ❌ | ❌ | ❌ | ❌ | Not implemented in viscus-omnipay (returns null). |
| Pre-Authorization | ✅ | ✅ | 🔜 | 🔜 | ✅ | Includes increase/decrease, capture, void hold. |
| Pre-Auth Capture Reversal | ✅ | ❌ | ❌ | ❌ | ❌ | REST API only. |
| MOTO | ✅ | ❌ | ❌ | ❌ | ❌ | REST API only. |
| Tokenization | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Batch Close | ❌ | ❌ | ❌ | ❌ | ❌ | Settlement is automatic. |
| Money Remittance | ✅ | ✅ | ✅ | ✅ | ✅ | AMEX routing: separate MID required. |

---

## Lloyds — EU · VISA MC AMEX

| Operation | R | P | H | i | C | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tip Adjustment | 🔜 | 🔜 | 🔜 | 🔜 | 🔜 | Implemented in code, not officially released. |
| Pre-Authorization | ✅ | ✅ | 🔜 | 🔜 | ✅ | Includes increase/decrease, capture, void hold. |
| Pre-Auth Capture Reversal | ✅ | ❌ | ❌ | ❌ | ❌ | REST API only. |
| MOTO | ✅ | ❌ | ❌ | ❌ | ❌ | REST API only. |
| Tokenization | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Batch Close | ❌ | ❌ | ❌ | ❌ | ❌ | Settlement is automatic. |

---

## Paystrax — EU · VISA MC AMEX

| Operation | R | P | H | i | C | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tip Adjustment | 🔜 | 🔜 | 🔜 | 🔜 | 🔜 | Implemented in code, not officially released. |
| Pre-Authorization | ✅ | ✅ | 🔜 | 🔜 | ✅ | Includes increase/decrease, capture, void hold. |
| Pre-Auth Capture Reversal | ✅ | ❌ | ❌ | ❌ | ❌ | REST API only. |
| MOTO | ✅ | ❌ | ❌ | ❌ | ❌ | REST API only. |
| Tokenization | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Batch Close | ❌ | ❌ | ❌ | ❌ | ❌ | Settlement is automatic. |

---

## TEYA (Borgun) — EU · VISA MC

| Operation | R | P | H | i | C | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tip Adjustment | ❌ | ❌ | ❌ | ❌ | ❌ | Returns OPERATION_NOT_SUPPORTED in viscus-borgun. |
| Pre-Authorization | ❌ | ❌ | ❌ | ❌ | ❌ | Returns BAD_REQUEST in viscus-borgun. |
| MOTO | ❌ | ❌ | ❌ | ❌ | ❌ | No IMotoProtocol in viscus-borgun. |
| Tokenization | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Batch Close | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Money Remittance | ❌ | ❌ | ❌ | ❌ | ❌ | |

---

## VANTIV (Worldpay) — US · VISA MC Discover

| Operation | R | P | H | i | C | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tip Adjustment | ✅ | ✅ | ✅ | ❌ | ✅ | |
| Pre-Authorization | ✅ | ✅ | 🔜 | 🔜 | ✅ | |
| MOTO | ❌ | ❌ | ❌ | ❌ | ❌ | Returns BAD_REQUEST in viscus-vantiv. |
| Tokenization | ❌ | ❌ | ❌ | ❌ | ❌ | Not implemented. |
| Batch Close | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Money Remittance | ❌ | ❌ | ❌ | ❌ | ❌ | |

---

## Cross-acquirer summary

EMP = EmerchantPay

| Operation | TSYS | PAYSAFE+Interac | TNS | PAYSAFE | EMP | Lloyds | Paystrax | TEYA | VANTIV |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Refund | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Reversal | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Partial Rev | ✅¹ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Tip Adj | ✅ | ✅ | ❌ | 🔜 | ❌ | 🔜 | 🔜 | ❌ | ✅ |
| Pre-Auth | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Pre-Auth Capture Rev | 🔜² | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ |
| MOTO | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Tokenization | ✅ | ✅ | ❌ | 🔜 | ✅ | ✅ | ✅ | ✅ | ❌ |
| Batch Close | ✅ | ✅³ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Money Rem | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Void | ❌ | ✅⁴ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

¹ TSYS partial reversal: US only, REST API only.  
² Pre-Auth Capture Reversal: in development for TSYS (🔜 REST API only); confirmed supported for EmerchantPay, Lloyds, Paystrax (✅ REST API only).  
³ PAYSAFE + Interac batch close: TSYS (non-Interac) transactions only, REST API only.  
⁴ PAYSAFE + Interac / TNS void: Interac cards only, card must be physically present.  
❓ = Status unknown — to be confirmed with integration team.

---

## Integration path capabilities

What each integration path can do across ALL acquirers:

:::info REST API — integrated mode
REST API card-present operations require a PAX terminal running the Handpoint Android SDK initialised in **cloud/integrated mode**. The REST API sends commands to the Handpoint Cloud, which forwards them to the terminal. MOTO (no-terminal) operations are a separate back-office capability — see [Back Office](/back-office/rest-api-no-reader).
:::

| Integration path | Card-present ops | MOTO | Batch Close | Partial Rev | Notes |
|---|---|---|---|---|---|
| **REST API** | ✅ All (PAX in integrated mode required) | ✅ Two modes: on-terminal (PAX shows entry screen) or back-office (card data in request body) | ✅ Where acquirer supports | ✅ TSYS only | PAX debug → `.io`; PAX prod → `.com` |
| **Android (PAX)** | ✅ All except partial rev, MOTO, batch | ❌ | ❌ | ❌ | Runs natively on PAX terminal |
| **Android (HiLite)** | ✅ Sale, refund, reversal, tokenize. Tip adj ✅. Pre-auth 🔜 | ❌ | ❌ | ❌ | BT to HiLite (DATECS); no MOTO/batch/partial rev |
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
