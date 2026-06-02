---
title: Acquirer capabilities matrix
sidebar_position: 1
description: Full matrix of payment capabilities per acquirer. Auto-generated from acquirers.yaml.
---

> Auto-generated from `data/acquirers.yaml` — do not edit directly. Run `node scripts/generate-acquirer-pages.js` to regenerate.

# Acquirer capabilities matrix

| Acquirer | Geography | Sale | Refund | Reversal | Partial Rev. | Tip Adj. | Pre-Auth | MOTO | Tokenize | Batching | Money Rem. | Void |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| TSYS | US, Canada | ✅ | ✅ | ✅ | ✅ US | ✅ | ✅ | ✅ | ✅ | ✅ US | ✅ | ❌ |
| TSYS + TNS | Canada | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ |
| TNS | Canada | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| PAYSAFE TSYS | US | ✅ | ✅ | ✅ | ❌ | 🔜 | ❌ | ❌ | 🔜 | ❌ | ✅ | ❌ |
| OMNIPAY EMP | EU | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| OMNIPAY Lloyds | EU | ✅ | ✅ | ✅ | ❌ | 🔜 | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| OMNIPAY Paystrax | EU | ✅ | ✅ | ✅ | ❌ | 🔜 | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| OMNIPAY + AMEX | EU | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| TEYA (Borgun) | EU | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Elavon Canada | Canada | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| AMEX (direct) | US | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| VANTIV | US | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |

🔜 = Coming soon
