# EPI / TSYS — Internal Reference

> **INTERNAL ONLY — never merge to dev/main**

---

## Overview

- **Acquirer:** EPI (Electronic Payments Inc.) — formerly marketed as "TSYS" in Handpoint docs
- **Processor/host:** TSYS
- **Token management:** ProCharge (EPI's card vault)
- **Markets:** US and Canada
- **Card brands:** Visa, Mastercard, Amex, Discover
- **No Interac support**

## Merchant Boarding

Standard EPI boarding gives access to the full feature set. Features requiring TMS enablement:

| Feature | TMS flag required |
|---|---|
| Remote Sale (card token / MOTO) | Yes — must be enabled in Handpoint Portal (TMS) |
| Batch operations | Yes — must be enabled in Handpoint Portal (TMS) |
| Tip adjustment | No — works out of the box (HTTPS call, not a device command) |
| Pre-authorization | No — works out of the box on PAX paths |

## Partial Reversal

- **Supported** on EPI (TSYS rails support partial reversal).
- Available on: Cloud API, Android (PAX), Back Office (REST API).
- **NOT supported on Amex transactions** — Amex network restriction, applies globally.
- Not available on HiLite paths (Android HiLite, iOS HiLite, Cordova HiLite, Windows BT).

## Remote Sale (Card Token)

Two paths:
1. **On-terminal (PAX screen entry):** Cardholder keys in card number on PAX terminal screen. Goes through EPI/TSYS. No ProCharge token needed.
2. **Back Office (no reader):** Uses a ProCharge/EPI card token. `POST /moto/sale` or Back Office REST API. Amount in **major units** (decimal string, e.g. `"10.00"`).

Remote Sale must be enabled in the Handpoint Portal (TMS) per merchant.

## Batch Operations

- TSYS only — not available on PAYSAFE or OMNIPAY.
- Automatic batch close: ~11pm EST daily (default).
- Manual close via Back Office REST API: `POST /batch/close` (or equivalent endpoint).
- Must be TMS-enabled per merchant.
- Available: US and Canada.

## ProCharge (EPI Card Vault)

- EPI's card tokenization system.
- Token retrieved via `POST /transactions` with `tokenize: true` or deferred token endpoint.
- Token format differs from PAYSAFE tokens — not interchangeable.

## Pre-Authorization

- Requires card-present terminal (PAX) for initial create.
- Capture, increase, decrease, pre-auth void: Back Office only (no terminal interaction after initial create).
- Pre-Auth Capture Reversal (partial): supported — EPI/TSYS only.

## Tip Adjustment

- Remote HTTPS call — not a device command.
- Works on all paths except Cordova plugin (unimplemented stub — use Back Office instead).
- Windows SDK: direct HTTPS, works on both PAX and HiLite connections.
- iOS SDK: `HapiRemoteService.tipAdjustment()` with `sharedSecret`, or Back Office REST API.

## Known Issues / Open Items

| Issue | Status |
|---|---|
| CUS-837 — `transactionReference` not echoed for on-terminal MOTO operations | Open — Waiting QA (as of 2026-09-05) |
| CUS-839 — Decline from MOTO wrapped as 400 BadRequestError instead of passing decline response | Open — Waiting QA (as of 2026-09-05) |
| Amex partial reversal — applies globally across all TSYS-based operations | Confirmed restriction |
