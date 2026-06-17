---
title: Acquirer capabilities matrix
sidebar_position: 1
description: Full matrix of payment capabilities per acquirer. Verified against viscus gateway SDK source.
---

> Verified against `viscus-dev` gateway source — capabilities reflect what is actually implemented per acquirer protocol adapter. Run `node scripts/generate-acquirer-pages.js` to regenerate from `data/acquirers.yaml`.

# Acquirer capabilities matrix

| Acquirer | Geography | Sale | Refund | Reversal | Partial Rev. | Tip Adj. | Pre-Auth | MOTO | Batch Ops | Money Rem. | Void |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TSYS | US, Canada | ✅ | ✅ | ✅ | ✅ US | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| PAYSAFE + Interac | Canada | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| TNS (Interac) | Canada | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| PAYSAFE | US | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| EmerchantPay | EU | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ |
| Lloyds | EU | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Paystrax | EU | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| TEYA (Borgun) | EU | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| VANTIV (Worldpay) | US | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |

¹ PAYSAFE + Interac: Batch Ops only applies to TSYS (non-Interac) transactions. Interac (TNS) transactions settle independently.

