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

| Integration path | Card-present ops | MOTO | Batch Close | Partial Rev | Notes |
|---|---|---|---|---|---|
| **REST API** | ✅ All (PAX terminal required) | ✅ Where acquirer supports | ✅ Where acquirer supports | ✅ TSYS only | PAX debug → `.io`; PAX prod → `.com` |
| **Android (PAX)** | ✅ All except partial rev, MOTO, batch | ❌ | ❌ | ❌ | Runs natively on PAX terminal |
| **Android (HiLite)** | ✅ Sale, refund, reversal, tokenize. Tip adj ✅. Pre-auth 🔜 | ❌ | ❌ | ❌ | BT connection; no MOTO/batch/partial rev |
| **iOS (HiLite)** | ✅ Sale, refund, reversal, tokenize. No tip adj | ❌ | ❌ | ❌ | BT connection; tip adj not supported |
| **Cordova** | ✅ Same as Android (PAX) for PAX devices; same as Android (HiLite) for HiLite | ❌ | ❌ | ❌ | Same API surface for both device types |

---

## Open items to confirm

| Item | Status |
|---|---|
| **Pre-Auth Capture Reversal on OMNIPAY** | In development for TSYS. Will it be supported for EmerchantPay, Lloyds, Paystrax? TBD. |
| **CNP via CardStream** | Seen in original capability matrix — confirm if relevant and for which acquirers |
| **JCB card brand** | Some acquirers may support JCB — verify per acquirer |
| **CUP (China UnionPay)** | Was in original matrix — verify if any active acquirer supports it |
| **PAYSAFE pre-auth / MOTO** | Confirmed NOT supported by Paysafe (restriction, not a TSYS limitation) |
