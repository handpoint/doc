# PAYSAFE / TSYS — Internal Reference

> **INTERNAL ONLY — never merge to dev/main**

---

## Overview

- **Acquirer:** PAYSAFE
- **Processor/host:** TSYS
- **Interac routing:** TNS (The Nuvei Switch) — separate processor, activated per-merchant
- **Markets:** US and Canada (single acquirer, same codebase, same integration)
- **Card brands:** Visa, Mastercard, Amex, Discover, Interac (when TNS enabled)

## Merchant Boarding

PAYSAFE is a single acquirer covering both US and Canadian merchants. There is **no geographic flag** in the Handpoint system — capabilities are configured per merchant account at onboarding:

| Configuration | Enables |
|---|---|
| Base PAYSAFE boarding | Sale, refund, reversal, tokenization, tip adjustment |
| Interac boarding (TNS) | Interac card sale and Void (replaces reversal for Interac) |

**Interac is a separate TNS boarding.** A merchant may have PAYSAFE credit card processing only, TNS Interac only, or both. The Handpoint gateway detects TNS transactions automatically and routes Void accordingly — no ISV configuration required.

## Known Restrictions (Paysafe acquirer-side, not TSYS or Handpoint)

| Feature | Status | Notes |
|---|---|---|
| Pre-authorization | ❌ Not supported | Paysafe acquirer restriction |
| Remote Sale (card token, no terminal) | ❌ Not supported | Paysafe acquirer restriction |
| Partial reversal | ❌ Not supported | Any card brand |
| Batch operations (manual close) | ❌ Not supported | Use EPI for batch needs; Paysafe uses automatic settlement |
| Interac refund (Handpoint path) | ❌ Not supported | Interac network restriction — card must be voided before settlement |
| Tip adjustment on Interac cards | ❌ Not applicable | Interac only supports Sale and Void |

## Paysafe Portal (CNP Refund Path)

For card-not-present refunds after settlement (not via Handpoint):

1. Use `eftTransactionID` from `TransactionResult` as the `MerchantRefNum` in Paysafe's system.
2. Wait 24h for settlement.
3. Retrieve the auth by `MerchantRefNum` in the Paysafe Portal.
4. Submit refund using Paysafe's internal TXN ID.

**Handpoint has no record of transactions processed through the Paysafe Portal directly.**

## Tokenization

- Supported across US and Canada on all card-present paths.
- Interac tokenization: assumed supported — verify per merchant if a specific merchant reports issues.
- Token type: PAYSAFE/TSYS token format (different from EPI ProCharge tokens).

## Interac / TNS Implementation Notes

- Interac cards are automatically routed to TNS when the merchant has Interac boarding.
- ISVs call `refund()` for Void (gateway maps to TNS VOID internally).
- **Remote reversal (`POST /reversal`) is NOT available for Interac** — card must be physically present for any post-sale correction.
- ISV UI must label post-sale correction as **VOID**, not Refund or Reverse.
- Interac Void must occur before settlement.

## Tip Adjustment Behaviour

- Works on TSYS-routed (credit/debit) cards only.
- **Not applicable for Interac/TNS transactions.**
- Not available in the Cordova plugin (unimplemented stub — use Back Office REST API instead).
- iOS SDK: use `HapiRemoteService.tipAdjustment()` with `sharedSecret`, or Back Office.

## Open Items / Known Issues

| Issue | Status |
|---|---|
| Interac tokenization — confirmed or not? | Assumed yes — needs merchant-level verification |
| PAYSAFE Amex acceptance per merchant | Depends on Paysafe merchant agreement — verify per onboarding |
