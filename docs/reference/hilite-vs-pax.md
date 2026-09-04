---
title: HiLite vs PAX — Capability Comparison
sidebar_position: 5
description: What the HiLite Bluetooth reader supports vs PAX SmartPOS terminals, across all integration paths and acquirers.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# HiLite vs PAX — Capability Comparison

Handpoint integrations run on two hardware families:

| Hardware | Connection | Form factor | Integration paths |
|---|---|---|---|
| **PAX SmartPOS** (A920, A77, etc.) | Network / Cloud | All-in-one Android terminal | Cloud REST API, Android PAX SDK, JavaScript SDK, Windows SDK, Cordova (PAX mode) |
| **HiLite** (DATECS Bluetooth reader) | Bluetooth / Lightning | Compact Bluetooth/dock reader paired to a phone or tablet | Android HiLite SDK, iOS HiLite SDK, Cordova (HiLite mode), Windows SDK (BT mode) |

HiLite is a **subset** of PAX capabilities. Every operation available on HiLite is also available on PAX, but not the reverse.

---

## Capability matrix

Legend: ✅ Supported &nbsp;·&nbsp; ❌ Not supported &nbsp;·&nbsp; ✅\* See note

| Operation | PAX (all paths) | Android HiLite | iOS HiLite | Cordova (HiLite mode) | Notes |
|---|---|---|---|---|---|
| Sale | ✅ | ✅ | ✅ | ✅ | |
| Refund | ✅ | ✅ | ✅ | ✅ | |
| Reversal | ✅ | ✅ | ✅ | ✅ | Prefer `POST /reversal` (Back Office, no reader) for all reversals |
| Tokenization | ✅ | ✅ | ✅ | ✅ | |
| Sale and Tokenize | ✅ | ✅ | ✅ | ✅ | |
| Tip Adjustment | ✅ | ✅ | ✅\* | ❌ | \*iOS: via `HapiRemoteService.tipAdjustment()` with `sharedSecret`. Cordova: unimplemented stub — use Back Office REST API. Remote HTTPS call, not a device command |
| Multi-MID (MerchantAuth) | ✅ | ❌ | ✅ | ❌ | Android HiLite: silently ignored (MerchantAuth never serialized to EFT frames). iOS HiLite: supported. Windows SDK: not implemented (null hardcoded). Cordova: not implemented |
| Partial Reversal | ✅\* | ❌ | ❌ | ❌ | \*EPI only. Available via Back Office REST API regardless of integration path |
| Pre-Authorization | ✅ | ❌ | ❌ | ❌ | Initial pre-auth requires PAX terminal. Capture/increase/reversal available via Back Office |
| MOTO on-terminal (keyed entry) | ✅ | ❌ | ❌ | ❌ | HiLite has no keypad. Remote card-token MOTO available via Back Office (EPI/EMP) |
| stopCurrentTransaction | ✅ | ❌ | ❌ | ❌ | Android HiLite: returns `false` (BluetoothConnection is not AndroidPaymentConnection). iOS: no public cancel method. Cordova HiLite (iOS bridge): empty stub |
| getTransactionStatus | ✅ | ❌ | ❌ | ✅\* | Android HiLite: not in EFT frame protocol. iOS: not in public API. \*Cordova PAX mode only |
| Batch Close | ✅\* | ❌ | ❌ | ❌ | \*Cloud API / Back Office only (EPI). Not available in any SDK |
| Money Remittance | ✅ | ✅ | ✅ | ✅ | EmerchantPay only |
| Void (Interac) | ✅ | ✅ | ✅ | ✅ | PAYSAFE+Interac only |

---

## What Back Office operations can fill the HiLite gaps

Operations missing from HiLite SDKs can often be performed server-side via the [Back Office REST API](/back-office/rest-api-no-reader) with no terminal required:

| HiLite gap | Back Office solution |
|---|---|
| No partial reversal on HiLite | `POST /reversal` with `amount` + `currency` (EPI only) |
| No pre-auth capture on HiLite | `POST /preauthorization/capture` |
| No pre-auth increase on HiLite | `POST /preauthorization/increase` |
| No MOTO remote sale on HiLite | `POST /moto/sale` with card token (EPI, EmerchantPay) |
| No batch close on HiLite | `POST /batch/close` |
| Tip adjustment on iOS (SDK method requires sharedSecret) | `POST /transactions/{id}/tip-adjustment` with `ApiKeyCloud` |

**Handpoint recommends using Back Office operations whenever possible** — they reduce terminal dependency, eliminate reader failure as a point of failure, and work regardless of which SDK path you are on.

---

## HiLite-specific notes

### Android HiLite

- **Connection**: Bluetooth (auto-reconnect) or direct USB
- **Partial reversal**: Not available in SDK — use `POST /reversal` (Back Office)
- **Pre-auth**: Not available at all on HiLite
- **Multi-MID**: Supported via `MerchantAuth` + `SaleOptions`
- **Tip adjustment**: Supported (EPI, PAYSAFE+Interac TSYS-routed)
- **stopCurrentTransaction**: **Not supported** — `ConnectionManager.stopCurrentTransaction()` returns `false` immediately for Bluetooth connections (source-verified in Android SDK `ConnectionManager.kt`). Do not call it on Android HiLite

### iOS HiLite

- **Connection**: Bluetooth or Lightning dock
- **Tip adjustment**: Available via `HapiRemoteService.tipAdjustment()` — calls Handpoint cloud API, not the device. Requires `setupHandpointApiConnection(sharedSecret:)`. Alternatively use Back Office REST API with `ApiKeyCloud`.
- **Pre-auth**: Not in SDK at all — not a stub, not a no-op, simply absent
- **stopCurrentTransaction**: Not in the public `HeftClient` protocol. Use `financeStartOfDay` to recover a stuck terminal if needed
- **Multi-MID**: Fully supported via `MerchantAuth` with `Credential(acquirer:mid:tid:)`
- **`Acquirer` enum values**: `UNDEFINED`, `AMEX`, `BORGUN`, `EVO`, `OMNIPAY`, `POSTBRIDGE`, `INTERAC`, `TSYS`, `VANTIV`, `SANDBOX`

### Cordova HiLite mode

- **Connection**: Bluetooth (same as Android HiLite under the hood)
- **Tip adjustment**: Supported (EPI, PAYSAFE+Interac)
- **Pre-auth**: Not supported in HiLite mode — Cordova pre-auth requires PAX mode
- **Multi-MID**: Not documented / not confirmed for Cordova HiLite mode

---

## Acquirer-specific HiLite support

| Acquirer | Sale/Refund/Reversal | Tip Adj | Pre-Auth | Partial Rev | MOTO (card token) |
|---|---|---|---|---|---|
| EPI | ✅ | ✅ | ❌ | ❌ (Back Office ✅) | ❌ (Back Office ✅) |
| PAYSAFE + Interac | ✅ | ✅ TSYS cards only | ❌ | ❌ | ❌ |
| PAYSAFE (US) | ✅ | ❌ | ❌ | ❌ | ❌ |
| EmerchantPay | ✅ | ❌ | ❌ | ❌ | ❌ (Back Office ✅) |
| Paystrax | ✅ | ❌ | ❌ | ❌ | ❌ |

For the full multi-path, multi-acquirer matrix see the [Acquirer capabilities matrix](/reference/acquirer-capabilities-matrix).

---

## Related pages

- [Acquirer capabilities matrix](/reference/acquirer-capabilities-matrix) — full per-acquirer, per-path support table
- [Back Office REST API](/back-office/rest-api-no-reader) — server-side operations that complement HiLite gaps
- [Android HiLite integration guide](/reference/android-hilite-integration-guide)
- [iOS HiLite integration guide](/reference/ios-hilite-integration-guide)
- [Multi-MID](/reference/multi-mid) — `MerchantAuth` on Android and iOS
