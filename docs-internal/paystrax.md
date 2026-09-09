# Paystrax — Internal Reference

> **INTERNAL ONLY — never merge to dev/main**

---

## Overview

- **Acquirer:** Paystrax
- **Gateway:** OMNIPAY (same gateway layer as EmerchantPay)
- **Markets:** Europe
- **Card brands:** Visa, Mastercard, Amex, UnionPay
- **Integration ID used in code/data:** `paystrax` (previously `omnipay-paystrax`)

## Differences from EmerchantPay

Paystrax runs on the same OMNIPAY gateway as EmerchantPay. The ISV integration is identical — merchants are just boarded under a different acquirer. Key differences:

| Feature | Paystrax | EmerchantPay |
|---|---|---|
| Money remittance | ❌ Not supported | ✅ |
| Remote Sale — Back Office card token | ❌ Not supported | ❌ Not supported |
| Remote Sale — on-terminal PAX entry | ✅ | ✅ |
| Pre-authorization | ✅ (PAX only for create) | ✅ |
| Everything else | Same | Same |

## Remote Sale Notes

- On-terminal PAX keyed entry is supported (must be enabled by Handpoint).
- **Back Office card-token remote sale is NOT supported** for Paystrax.
- For post-sale corrections on MOTO transactions: use `POST /reversal` — **not** the `moto/reversal` endpoint. This is a known Paystrax-specific routing requirement.
- Linked MOTO refund (via Back Office) is supported.

## UnionPay

- Supported via OMNIPAY (same as EmerchantPay).
- Verify UnionPay MID per merchant.

## Pre-Authorization

- Same as EmerchantPay: initial create requires PAX card-present; subsequent ops via Back Office.

## Open Items

| Issue | Status |
|---|---|
| JCB acceptance | Platform supports; depends on acquirer agreement per merchant |
| UnionPay MID requirement | Verify per merchant |
