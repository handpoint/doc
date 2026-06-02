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

| Operation | R | P | H | i | C | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ✅ | ❌ | ❌ | ❌ | ❌ | US only. REST API server-side. |
| Tip Adjustment | ✅ | ✅ | ✅ | ❌ | ✅ | HiLite BT devices: use REST API. |
| Pre-Authorization | ✅ | ✅ | 🔜 | 🔜 | ✅ | |
| MOTO | ✅ | ❌ | ❌ | ❌ | ❌ | No terminal required. REST API only. |
| Tokenization | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Batch Close | ✅ | ❌ | ❌ | ❌ | ❌ | US + Canada. REST API server-side. |
| Money Remittance | ❌ | ❌ | ❌ | ❌ | ❌ | Not supported on TSYS. |
| Void | ❌ | ❌ | ❌ | ❌ | ❌ | Not applicable (use Reversal). |

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

| Operation | R | P | H | i | C | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tip Adjustment | 🔜 | 🔜 | 🔜 | 🔜 | 🔜 | |
| Pre-Authorization | ❌ | ❌ | ❌ | ❌ | ❌ | |
| MOTO | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tokenization | 🔜 | 🔜 | 🔜 | 🔜 | 🔜 | |
| Batch Close | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Money Remittance | ❌ | ❌ | ❌ | ❌ | ❌ | |

---

## EmerchantPay — EU · VISA MC AMEX

| Operation | R | P | H | i | C | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tip Adjustment | ❌ | ❌ | ❌ | ❌ | ❌ | Not implemented in viscus-omnipay (returns null). |
| Pre-Authorization | ✅ | ✅ | 🔜 | 🔜 | ✅ | |
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
| Pre-Authorization | ✅ | ✅ | 🔜 | 🔜 | ✅ | |
| MOTO | ✅ | ❌ | ❌ | ❌ | ❌ | REST API only. |
| Tokenization | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Batch Close | ❌ | ❌ | ❌ | ❌ | ❌ | Settlement is automatic. |
| Money Remittance | ❌ | ❌ | ❌ | ❌ | ❌ | |

---

## Paystrax — EU · VISA MC AMEX

| Operation | R | P | H | i | C | Notes |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Partial Reversal | ❌ | ❌ | ❌ | ❌ | ❌ | |
| Tip Adjustment | 🔜 | 🔜 | 🔜 | 🔜 | 🔜 | Implemented in code, not officially released. |
| Pre-Authorization | ✅ | ✅ | 🔜 | 🔜 | ✅ | |
| MOTO | ✅ | ❌ | ❌ | ❌ | ❌ | REST API only. |
| Tokenization | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Batch Close | ❌ | ❌ | ❌ | ❌ | ❌ | Settlement is automatic. |
| Money Remittance | ❌ | ❌ | ❌ | ❌ | ❌ | |

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

| Operation | TSYS | PAYSAFE+Interac | TNS | PAYSAFE | EMP | Lloyds | Paystrax | TEYA | VANTIV |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Sale | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Refund | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Reversal | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Partial Rev | ✅¹ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Tip Adj | ✅ | ✅ | ❌ | 🔜 | ❌ | 🔜 | 🔜 | ❌ | ✅ |
| Pre-Auth | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ |
| MOTO | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Tokenization | ✅ | ✅ | ❌ | 🔜 | ✅ | ✅ | ✅ | ✅ | ❌ |
| Batch Close | ✅ | ✅² | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Money Rem | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Void | ❌ | ✅³ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

¹ TSYS partial reversal: US only, REST API only.  
² PAYSAFE + Interac batch close: TSYS (non-Interac) transactions only, REST API only.  
³ PAYSAFE + Interac / TNS void: Interac cards only, card must be physically present.

---

## Integration path capabilities

What each integration path can do across ALL acquirers:

| Integration path | Card-present ops | MOTO | Batch Close | Partial Rev | Notes |
|---|---|---|---|---|---|
| **REST API** | ✅ All (PAX terminal required) | ✅ Where acquirer supports | ✅ Where acquirer supports | ✅ TSYS only | PAX debug → `.io`; PAX prod → `.com` |
| **Android (PAX)** | ✅ All except partial rev, MOTO, batch | ❌ | ❌ | ❌ | Runs natively on PAX terminal |
| **Android (HiLite)** | ✅ Sale, refund, reversal, tokenize. Tip adj ✅. Pre-auth 🔜 | ❌ | ❌ | ❌ | BT connection; no MOTO/batch/partial rev |
| **iOS (HiLite)** | ✅ Sale, refund, reversal, tokenize. No tip adj | ❌ | ❌ | ❌ | BT connection; tip adj not supported |
| **Cordova** | ✅ Same as Android (PAX) for PAX devices; same as Android (HiLite) for HiLite | ❌ | ❌ | ❌ | Same API surface for both device types |

---

## Possible gaps to confirm

The following items were in earlier capability lists but are not currently documented — confirm if they apply:

| Item | Status | Action needed |
|---|---|---|
| **CNP via CardStream** | Seen in original matrix but not in current docs | Confirm if relevant and which acquirers |
| **JCB card brand** | Some acquirers may support JCB | Verify per acquirer |
| **CUP (China UnionPay)** | In original matrix | Verify if supported by any active acquirer |
| **TSYS + TNS batching** | Added, but note says "TSYS txns only" | Confirm mechanism with integration team |
| **PAYSAFE MOTO** | Not in YAML — unclear if Paysafe/TSYS backend supports it | Verify with integration team |
| **Recurring / scheduled payments** | Not documented as a distinct operation | Covered by tokenization + REST API |
| **Incremental pre-auth** (pre-auth increase) | Not documented separately | viscus-tsys implements it; add if needed |
