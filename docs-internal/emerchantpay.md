# EmerchantPay — Internal Reference

> **INTERNAL ONLY — never merge to dev/main**

---

## Overview

- **Acquirer:** EmerchantPay
- **Gateway:** OMNIPAY (Handpoint's EU payment gateway layer)
- **Markets:** Europe
- **Card brands:** Visa, Mastercard, Amex, UnionPay
- **Integration ID used in code/data:** `emerchantpay` (previously `omnipay-emp`)

## Boarding Notes

- EmerchantPay is the primary EU acquirer. Most EU merchants are boarded here.
- Amex may require a separate MID — verify per merchant at onboarding.
- UnionPay: handled via `CardBrandValidator` and `PayFacIdValidator` in viscus-lib-core (separate path from Visa/MC/Amex).
- Money remittance (Mastercard MoneySend): requires specific merchant enablement. Amex money remittance requires a separate Amex MID.

## Capabilities vs. EPI

| Feature | EmerchantPay | EPI |
|---|---|---|
| Partial reversal | ❌ | ✅ (not Amex) |
| Pre-authorization | ✅ (PAX only for create) | ✅ |
| Remote Sale (Back Office card token) | ❌ | ✅ |
| Remote Sale (on-terminal PAX screen) | ✅ | ✅ |
| Batch operations | ❌ | ✅ |
| Money remittance | ✅ | ❌ |
| Tip adjustment | ❌ | ✅ |

## Remote Sale Notes

- **On-terminal (PAX screen keyed entry):** Supported. Must be enabled by Handpoint.
- **Back Office (card token, no reader):** NOT supported for EmerchantPay — this is EPI-only.
- Reversal for remote sales: use `POST /reversal` (standard reversal endpoint), not the MOTO-specific reversal endpoint.

## Pre-Authorization

- Initial pre-auth requires card-present PAX terminal.
- Increase, decrease, capture, void hold: Back Office (no terminal).
- Pre-Auth Capture Reversal: supported via Cloud API, Android (PAX), Back Office.

## UnionPay

- Supported on OMNIPAY (EmerchantPay and Paystrax).
- Separate routing path in viscus-lib-core via `CardBrandValidator`/`PayFacIdValidator`.
- Verify UnionPay MID per merchant at onboarding.

## Open Items

| Issue | Status |
|---|---|
| JCB acceptance | Platform supports; depends on acquirer agreement per merchant |
| UnionPay MID requirement | Verify per merchant — separate MID may be required |
