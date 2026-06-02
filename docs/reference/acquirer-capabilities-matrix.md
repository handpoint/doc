---
title: Acquirer capabilities matrix
sidebar_position: 1
description: Full matrix of payment capabilities per acquirer. Auto-generated from acquirers.yaml.
---

> Auto-generated from `data/acquirers.yaml` — do not edit directly. Run `node scripts/generate-acquirer-pages.js` to regenerate.

# Acquirer capabilities matrix

| Acquirer | Geography | Sale | Refund | Reversal | Partial Rev. | Tip Adj. | Pre-Auth | MOTO | Batching | Money Rem. | Void |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TSYS | US, Canada | ✅ | ✅ | ✅ | ✅ US | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| PAYSAFE TSYS + TNS | Canada | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ TSYS only¹ | ❌ | ✅ |
| TNS | Canada | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| PAYSAFE TSYS | US | ✅ | ✅ | ✅ | ❌ | 🔜 | ❌ | ❌ | ❌ | ✅ | ❌ |
| OMNIPAY EmerchantPay | EU | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ |
| OMNIPAY Lloyds | EU | ✅ | ✅ | ✅ | ❌ | 🔜 | ✅ | ✅ | ❌ | ❌ | ❌ |
| OMNIPAY Paystrax | EU | ✅ | ✅ | ✅ | ❌ | 🔜 | ✅ | ✅ | ❌ | ❌ | ❌ |
| TEYA (Borgun) | EU | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| VANTIV (Worldpay) | US | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |

¹ PAYSAFE TSYS + TNS: Batching only applies to TSYS (non-Interac) transactions. Interac (TNS) transactions settle independently.

🔜 = Coming soon
