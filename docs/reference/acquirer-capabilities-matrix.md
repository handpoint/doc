---
title: Acquirer capabilities matrix
sidebar_position: 1
description: Full matrix of payment capabilities per acquirer. Verified against viscus gateway SDK source.
---

> Verified against `viscus-dev` gateway source — capabilities reflect what is actually implemented per acquirer protocol adapter. Run `node scripts/generate-acquirer-pages.js` to regenerate from `data/acquirers.yaml`.

# Acquirer capabilities matrix

| Acquirer | Geography | Sale | Refund | Reversal | Partial Rev. | Tip Adj. | Pre-Auth | Remote Sale | Batch Ops | Money Rem. | Void |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TSYS | US, Canada | ✅ | ✅ | ✅ | ✅ US | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| PAYSAFE + Interac | Canada | ✅ | ✅¹ | ✅¹ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| TNS (Interac) | Canada | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| PAYSAFE | US | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| EmerchantPay | EU | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ |
| Paystrax | EU | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |

¹ PAYSAFE + Interac: Refund and Reversal apply to non-Interac (TSYS-routed) transactions only. For Interac card transactions use Void instead — card must be present.

