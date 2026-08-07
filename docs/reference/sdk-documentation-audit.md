---
title: SDK Documentation Audit — Dev Team Review
sidebar_position: 99
description: Findings from cross-SDK documentation audit. Source-verified errors, platform behaviour questions, and documentation gaps requiring dev team input.
---

# SDK Documentation Audit — Dev Team Review

**Prepared:** 2026-08-06  
**Last updated:** 2026-08-07 — additional Android SDK source verification complete.  
**Scope:** docs-v2 vs. legacy docs, verified against SDK source code (iOS, Android, Cordova).  
**Status:** Internal reference — not published to end users.

This document collects:
1. **Errors found in legacy documentation** — verified against SDK source code (where the legacy was wrong)
2. **Errors found in new docs** — corrected during audit
3. **Platform behaviour questions** — discrepancies between implementation and documentation that require dev team confirmation
4. **Significant documentation gaps** — missing content that integrators will need

---

## 1. Legacy Documentation Errors — Confirmed by Source Code

These items were documented incorrectly in the legacy docs. The new docs-v2 has already been corrected where possible.

### 1.1 iOS — Phantom constant `EFT_PROTOCOL_RESULT_SUCCESS`

**File:** All 9 legacy acquirer pages + multiple iOS code examples  
**Claim:** `if (info.statusCode == EFT_PROTOCOL_RESULT_SUCCESS)`  
**Reality:** This constant is **not defined anywhere in the iOS SDK.** Every header file in `HandpointSDK-iOS-master` was searched — zero matches.  
**Correct constant:** `EFT_PP_STATUS_SUCCESS = 0x0001` (defined in `CmdIds.h`)  
**Risk:** Any integrator who copied this code verbatim would get a compile error.  
**Action needed:** Confirm `EFT_PP_STATUS_SUCCESS` is the intended constant and that `0x0001` (value 1) is the success state.

### 1.2 iOS — Phantom delegate callback `heftClient:didGetTransactionResponse:`

**File:** Legacy iOS docs, all acquirer pages with iOS examples  
**Claim:** `func heftClient(_ client: HeftClient!, didGetTransactionResponse info: ResponseInfo!)`  
**Reality:** This method signature **does not exist** in `HeftStatusReportDelegate.h`. Zero matches across all iOS SDK header files.  
**Correct callback:** `func responseFinanceStatus(_ info: (any FinanceResponseInfo)!)` — this is a `@required` method in `HeftStatusReportDelegate`.  
**Risk:** An integrator implementing this delegate would never receive transaction results.  
**Action needed:** Confirm `responseFinanceStatus` is the current (and only) transaction result callback.

### 1.3 iOS — `userInfo` property never existed

**File:** Legacy iOS docs, `transaction-result-object.md` (now corrected)  
**Claim:** `info.userInfo` dictionary containing transaction fields  
**Reality:** `userInfo` does not exist anywhere in `FinanceResponseInfo.h`, `ResponseInfo.h`, or any other iOS SDK header.  
**Action needed:** Confirm that the correct way to access transaction data is through the named computed properties on `FinanceResponseInfo` (e.g. `info.finStatus`, `info.eFTTransactionID`, `info.merchantReceipt`).

### 1.4 iOS — Wrong field names in `FinanceResponseInfo`

**File:** Legacy iOS docs, `transaction-result-object.md` (now corrected)

| Legacy name | Actual property name | Source |
|---|---|---|
| `maskedPan` | `maskedCardNumber` | `FinanceResponseInfo.h` |
| `tipAmount` | `gratuityAmount` | `FinanceResponseInfo.h` |
| `tipPercentage` | `gratuityPercentage` | `FinanceResponseInfo.h` |
| `transactionReference` | Not in iOS SDK | Not found in `toDictionary` or `XMLTags` |
| `rrn` | Not in iOS SDK | Not found in `toDictionary` or `XMLTags` |

**Action needed:** Confirm the field names listed in the new `transaction-result-object.md` iOS tab are correct, particularly that `transactionReference` and `rrn` are truly absent from the iOS SDK result.

### 1.5 iOS — `xml` field type documented as `String`

**File:** Legacy iOS docs  
**Claim:** `xml` is a `String` containing raw XML  
**Reality:** `xml` is `NSDictionary *` (declared in `ResponseInfo.h`). The iOS SDK parses the XML response into a dictionary internally.  
**Note for integrators:** The `xml` field is an internal implementation detail. Developers should use the named computed properties on `FinanceResponseInfo` rather than parsing `xml` directly.

### 1.6 Android — `tipAdjustment` wrong parameter and return types in legacy "Next" docs

**File:** Legacy Android "Next" docs  
**Legacy claims:**
- Tip amount parameter: `BigDecimal`
- Return type: `FinancialStatus` (three states: AUTHORISED, DECLINED, FAILED)

**SDK source reality** (verified across `hapi-android-7.1004.3`, `7.1009.5`, `7.1012.1`, and current `Android SDK\sdk\`):
```kotlin
fun tipAdjustment(
    tipAmount: BigInteger,   // NOT BigDecimal
    currency: Currency,
    originalTransactionID: String
): Boolean   // NOT FinancialStatus
```

**The new docs-v2 had the correct types; the legacy was wrong.**  
**Action needed:** Confirm whether this was ever `BigDecimal`/`FinancialStatus` in an older SDK version, or if the legacy docs simply contained an error from the start.

---

## 2. Errors Found and Corrected in New Docs-v2

These were errors in docs-v2 that have been corrected during this audit.

### 2.1 Cordova — All currency parameters as string `"USD"` (would crash at runtime)

**Problem:** Every Cordova code example used `currency: "USD"` (a string).  
**Reality:** Android handler calls `Currency.parse(params.getInt("currency"))` — `getInt()` on a string throws `JSONException`. iOS `currencyFromCode:` expects `NSNumber`. Passing `"USD"` crashes or fails silently on both platforms.  
**Fix:** Changed to `currency: handpoint.Currency.USD` (numeric enum from `www/handpoint.js`).  
**Files fixed:** `sale.mdx`, `refund.mdx`, `reversal.mdx`, `pre-auth-create.mdx`, `pre-auth-capture.mdx`, `money-remittance.mdx`

### 2.2 Cloud API — `refundReversal` incorrectly marked "not available via Cloud API"

**Problem:** `refund-reversal.mdx` Cloud API tab showed `<NotSupported>` claiming the operation doesn't exist.  
**Reality:** The legacy `OperationType` enum and curl examples explicitly show `"operation": "refundReversal"` via `POST /transactions`.  
**Fix:** Replaced with working Cloud API code example.

### 2.3 MOTO back-office refund — wrong field name and invalid field

**Problem:** `/moto/refund` example included `originalTransactionId` and `cardToken`.  
**Reality:** The legacy `MotoRefundRequest` schema specifies `originalGuid` (not `originalTransactionId`). The `cardToken` field does not exist on `/moto/refund` — the refund reuses the card via `originalGuid`.  
**Fix:** Corrected to `originalGuid` only; removed `cardToken`.

### 2.4 Pre-auth capture — `capturedAmount` documented as minor units

**Problem:** `pre-auth-capture.mdx` showed `"capturedAmount": "9500"` and described it as "smallest currency unit."  
**Reality:** All no-reader endpoints use major units (decimal strings). The legacy `PreauthCaptureRequest` example shows `"120.00"`.  
**Fix:** Changed example to `"capturedAmount": "95.00"` with description "major currency units."  
**⚠️ Action needed:** Please confirm whether `/preauthorization/capture` uses major or minor units. If it actually uses minor units, this should be reverted.

### 2.5 iOS — Wrong supported status for `refundReversal` and `tipAdjustment`

**Problem:** Both operations were marked `<NotSupported>` on iOS HiLite.  
**Reality:**
- `refundVoidWithAmount:currency:transaction:` exists in `HeftClient.h`
- `tipAdjustment(transaction:tipAmount:handler:)` exists in `HapiRemoteService.h`  
**Fix:** Added working iOS code examples to both pages.

### 2.6 `EFT_PROTOCOL_RESULT_SUCCESS` used in 11 doc files

Already corrected to `EFT_PP_STATUS_SUCCESS` throughout docs-v2.

### 2.7 Cordova operations incorrectly marked not supported

The following operations were marked `<NotSupported>` or `<ComingSoon>` in Cordova tabs but are fully implemented in `www/handpoint.js` and `HandpointHelper.java`:
- `refundReversal` (Android-only)
- `automaticRefund` (Android-only)
- `motoSale`, `motoRefund`, `motoReversal` (Android-only)
- `motoPreauthorization` (Android-only)
- `preAuthorizationIncrease` (Android-only)

All corrected with working code examples noting Android-only availability.

### 2.8 Cordova `tipAdjustment` — working code for a no-op

**Problem:** Cordova tab showed working `handpoint.tipAdjustment()` code.  
**Reality (from source):**
- Android `HandpointHelper.java` line 586: `public void tipAdjustment(...) { // TODO }` — completely unimplemented
- iOS `HandpointApiCordova.m` line 215: `NSLog(@"\n\ttipAdjustment: %@", command.params)` — logs only, no SDK call, no callback ever fires  
**Fix:** Changed to `<NotSupported>`.

---

## 3. Platform Behaviour Questions for Dev Team

These require dev team confirmation before the documentation can be considered final.

### 3.1 Cordova `tipAdjustment` — intentionally unimplemented?

**Files:** `cordova-plugin-handpoint-main/src/android/com/handpoint/cordova/HandpointHelper.java` (line 586) and `HandpointApiCordova.m` (line 215)  
**Question:** Is `tipAdjustment` intentionally not implemented in the Cordova plugin? If so, is there a workaround (e.g. call Cloud API directly from Cordova)?  
**Current doc state:** Marked `<NotSupported>` in Cordova tab.

### 3.2 Cordova `cancelRequest` — deprecated on both platforms?

**Android:** `HandpointHelper.java` always returns error `"Can't send cancelRequest operation to device"` and is marked `@Deprecated`  
**iOS:** `HandpointApiCordova.m` has an empty method body — no SDK call, no callback  
**Question:** Has `cancelRequest` been removed? Should it be removed from `www/handpoint.js` to avoid confusion? Should the docs explicitly note it as deprecated/non-functional?

### 3.3 Cordova `getPendingTransaction` — iOS-only?

**Android:** `HandpointHelper.java` always returns error `"Can't send getPendingTransaction operation to device"`  
**iOS:** Calls `[self.api getPendingTransaction]` → `isTransactionResultPending` / `retrievePendingTransaction` — appears to work  
**Question:** Is `getPendingTransaction` intentionally Android-unsupported? Should the docs note it is iOS-only?

### 3.4 `deferredTokenization` — Android SDK and Cloud API *(RESOLVED)*

**Both exist.** The earlier source search found zero matches because the local Android SDK clone is at 7.1013.0; `deferredTokenization` shipped in **7.1013.1** (SDKS-86, PR #2971, build date 2026-07-20).

**Android SDK 7.1013.1** — `Hapi.kt`:
```kotlin
fun deferredTokenization(originalTransactionID: String): Boolean
fun deferredTokenization(originalTransactionID: String, options: Options): Boolean
```
- `originalTransactionID` = `EFTTransactionID` (UUID) from the original transaction — NOT the internal device `transactionID`
- Returns `Boolean` (command sent to device successfully)
- Result arrives via `endOfTransaction`
- Requires a connected PAX device

**Cloud REST API** — `GET /transactions/{guid}/token`: server-side, no terminal required. Eligible types: `sale`, `refund`, `preAuthorizationCapture`, `moToSale`, `moToRefund`.

**Docs corrected:**
- Release notes: moved `deferredTokenization` from 7.1013.0 to 7.1013.1 with accurate description
- `tokenization.mdx`: added `deferredTokenization()` Android SDK code + Cloud API `GET` endpoint with parameters
- `tokenized-operation.mdx`: Cloud API tab uses documented `POST /moto/sale` (not the undocumented `POST /transaction` singular endpoint)

### 3.5 `motoReversal` with string amount/currency — units confirmed from source *(partially resolved)*

SDK 7.1012.1 adds two new overloads:
```kotlin
fun motoReversal(amount: String?, currency: String?, originalTransactionID: String?): OperationStartResult
fun motoReversal(amount: String?, currency: String?, originalTransactionID: String?, options: MoToOptions): OperationStartResult
```
**Source-confirmed format** (`MotoReversalTransaction.kt`):
- `amount: String?` — a **minor-unit integer string** (e.g. `"500"` = 500 cents = $5.00). The SDK calls `.toBigInteger()` on this value, then applies `gatewayFormat()` to convert to the major-unit decimal string sent to the gateway.
- `currency: String?` — an **ISO 4217 currency code string** (e.g. `"USD"`, `"EUR"`). Passed to `Currency.parse()` internally.
- Both are nullable — when `null` or blank, no amount/currency is included in the reversal request (full reversal).

**Remaining question:** Is this intentional design (String? instead of BigInteger/Currency as used everywhere else)? No KDoc comments exist on these overloads. This behaviour was discovered from source only — there is no developer-facing explanation in the SDK.

**Docs updated:** `moto.mdx` now includes a comment clarifying `"500"` = 500 cents.

### 3.6 iOS `tipAdjustment` via `HapiRemoteService` — which `transactionId`?

**Source:** `HapiRemoteService.h` declares `tipAdjustment(transaction:tipAmount:handler:)`.  
The `transaction` parameter corresponds to `info.transactionId` (the internal card-reader transaction number) — NOT `info.eFTTransactionID` (the UUID).  
**Question:** Please confirm the correct `transactionId` to pass to `HapiRemoteService.tipAdjustment`. The internal `transactionId` is an `NSString *` property in `FinanceResponseInfo.h`, distinct from `eFTTransactionID`. Can you confirm this is correct and provide an example of its format?

### 3.7 Pre-auth capture `capturedAmount` units *(CONFIRMED — no action needed)*

**Established pattern:**
- Android SDK always takes minor units (`BigInteger`) and converts internally to major-unit decimal string for any no-reader gateway call
- `POST /transactions` (plural, with-reader): minor units as string (routes through terminal)
- All no-reader gateway endpoints (`/preauthorization/capture`, `/moto/sale`, `/reversal`, etc.): major units as decimal string

This pattern is consistent across the codebase. `POST /preauthorization/capture` body uses major-unit decimal string `"95.00"` — confirmed. No further action needed.

---

## 4. Significant Documentation Gaps

These topics exist in the SDK/API but have no coverage in docs-v2 (or were only in the legacy).

### 4.1 Cloud API — Push notification delivery (`callbackUrl` + `token`) *(partially resolved)*

**Source confirmed (`CloudFinancialRequest.kt`):** `callbackUrl: String?` is a field the Android SDK reads from incoming cloud gateway commands. When set, `isRestApiRequest()` returns `true` and the SDK POSTs the transaction result to that URL.

**Docs updated:** `callbackUrl` and `token` have been added as optional parameters to the Cloud API parameter tables in `sale.mdx`, `refund.mdx`, and `reversal.mdx`.

**Remaining gap:** The full push-notification delivery flow (retry timing, payload schema) is still undocumented. What's needed:
- Retry schedule (currently described in legacy as "5s for 100s then exponential backoff" — confirm this is still accurate)
- Exact payload schema sent to `callbackUrl`
- Does `token` appear at the top level of the payload, or nested?

### 4.2 Cloud API — Missing operations

No function pages exist for these operations documented in the legacy:
- `printReceipt` — print HTML receipt/barcode to PAX terminal on demand
- `pingDevice` — confirm terminal readiness before sending a transaction
- `stopCurrentTransaction` — cancel in-progress operation (with error codes 1003/1005)
- `moToReversal` via `POST /transactions` — terminal-based MOTO reversal (not the back-office endpoint)

### 4.3 Cloud API — Transaction status endpoint (`transactions.handpoint.com`)

**Key fact not documented:** The status endpoint uses `transactions.handpoint.com` as base URL, not `cloud.handpoint.com`. This is explicitly called out in the legacy.  
The selector path parameters (`/status/all`, `/status/first`, `/status/last`, `/status/{index}`) are not documented.

### 4.4 Cloud API — Device control commands

Six `POST /devices/{deviceType}/{serialNumber}/...` endpoints in the legacy are entirely absent:
- `set-unattended-mode`
- `set-locale`
- `set-password-protected`
- `reboot`
- `set-screen-brightness`
- `set-reboot-time`

### 4.5 Android — `tokenizedOperation` documented incorrectly *(RESOLVED)*

**Was:** Android tab showed a back-office token charge using `MoToOptions.cardToken` via `hapi.motoSale()` — completely wrong flow.

**Source confirmed (`Events.kt`, `CardTokenizationData.kt`, `ResumeCallback.kt`, `Hapi.kt`):**

Two variants:
1. `tokenizedOperation(amount, currency)` — two-phase: terminal tokenizes card → SDK fires `Events.CardTokenization.cardTokenized(callback, CardTokenizationData)` → integrator calls `callback.resume(OperationDto)` to proceed with Sale, or `callback.finishWithoutCardOperation()` / `callback.cancel()`.
2. `tokenizedOperation(currency, operation)` — seamless back-to-back: tokenize + execute (SaleReversal, Refund, or RefundReversal) with no CardTokenized event.

**Cloud API endpoint also confirmed:** `POST /transaction` (singular) with `"action": "SALE"` + `cardToken` is a real, documented no-reader endpoint (in `docs/back-office/rest-api-no-reader.md`). Amount is a number in minor units. Adding `"motoChannel": true` classifies it as MOTO. The deferred tokenization `GET /transactions/{guid}/token` endpoint can supply the `cardToken`.

**Docs fixed:** `tokenized-operation.mdx` rewritten with correct flows for both Android SDK and Cloud API.

### 4.6 Android — `deferredTokenization` release notes entry is misleading

Release notes (SDK 7.1013.0) describe `deferredTokenization` as an Android SDK method, but it doesn't exist in the Android SDK. Needs correction. See §3.4.

### 4.7 Cordova — Events system entirely undocumented

The primary async result model for Cordova is the `eventHandler` callback (not the per-operation success callback). Events are emitted for all SDK state changes. Neither the new docs nor the legacy fully document this.

**Android events** (from `HandpointHelper.java`): `endOfTransaction`, `connectionStatusChanged`, `currentTransactionStatus`, `deviceDiscoveryFinished`, `signatureRequired`, `cardTokenized`, `networkStatusChanged`, `receiptsReady`, `transactionResultReady`, `authStatus`, `showMessage`, `hideMessage`, `hardwareStatusChanged`  
**iOS events** (from `HandpointApiCordova.m`): `endOfTransaction`, `connectionStatusChanged`, `currentTransactionStatus`, `exception`, `signatureRequired`, `scannerResults`, `deviceDiscoveryFinished`

**Dev team action:** Provide the event payload schemas for `endOfTransaction` and `currentTransactionStatus` — these are the two most critical events. Confirm which events are cross-platform vs platform-specific.

### 4.8 Cordova — ~30 JS API methods undocumented

`www/handpoint.js` exposes many methods not covered in docs-v2 or the legacy: `connect`, `disconnect`, `setSharedSecret`, `listDevices`, `signatureResult`, `enableScanner`, device management (`setBrightness`, `reboot`, `turnOffScreen`, etc.), and the full dependent/tokenized payment lifecycle (`resumeTokenizedOperation`, `executeDependantOperation`, etc.).

**Dev team action:** Which of these should be documented in the public-facing developer portal? Some may be internal or platform-specific.

### 4.9 Error codes missing from `error-codes.md` *(partially resolved)*

| Code | Name | Status |
|---|---|---|
| 1002 | DeviceNotResponding | ✅ Added |
| 1003 | CancelOperationNotAllowed | ✅ Added |
| 1005 | NoTransactionToCancel | ✅ Added |
| 3107 | CVV required | ⚠️ Still missing — needs MOTO error section |
| 5252 | Card token failure | ⚠️ Still missing — needs MOTO error section |
| 3210 | Currency mismatch on MOTO refund | ⚠️ Still missing — needs MOTO error section |
| 3209 | Refund amount exceeds original | ⚠️ Still missing — needs MOTO error section |

**Action needed:** Add a MOTO-specific error table to `error-codes.md` (or `moto.mdx`) for codes 3107, 5252, 3210, 3209.

### 4.10 Android — SDK initialization guide absent

No page documents how to initialise the Android SDK in a new integration:
- `AndroidManifest.xml` requirements (`extractNativeLibs`, `launchMode="singleTask"`, `multiDexEnabled`)
- Gradle dependency and `packagingOptions`
- Event interfaces to implement (`Events.SmartposRequired`, `Events.CurrentTransactionStatus`, etc.)
- `HapiFactory.getAsyncInterface()` call pattern
- Device object and `api.connect(device)` call
- The `InitialisationComplete` message from `currentTransactionStatus` that must arrive before sending operations

---

## 5. Items That Are Correct in Both Legacy and New Docs

Confirmed consistent and correct across all versions:

- `FinancialStatus` enum: `AUTHORISED(1)`, `DECLINED(2)`, `PROCESSED(3)`, `FAILED(4)`, `CANCELLED(5)`, `PARTIALLY_APPROVED(6)` / `PARTIAL_APPROVAL(6)` (both names are valid aliases for the same value), `REFUNDED(8)`, `CAPTURED(9)`, `IN_PROGRESS(10)`, `AUTHORISED_DEFERRED(11)` — note: value 7 is skipped.
- `TransactionType` enum uses string tags (not integers). Complete list confirmed from source: `UNDEFINED`, `SALE`, `VOID_SALE` ("SALE VOID"), `REFUND`, `VOID_REFUND` ("REFUND VOID"), `CANCEL_SALE`, `CANCEL_REFUND`, `TOKENIZE_CARD`, `TOKENIZED_OPERATION`, `CARD_PAN`, `SALE_AND_TOKENIZE_CARD`, `REVERSAL`, `UPDATE`, `PRINT_RECEIPT`, `TIP_ADJUSTMENT`, `PRE_AUTHORIZATION`, `PRE_AUTHORIZATION_INCREASE` ("PRE AUTHORIZATION INCREMENT"), `PRE_AUTHORIZATION_CAPTURE`, `MOTO_SALE`, `MOTO_CANCEL`, `MOTO_REFUND`, `MOTO_REVERSAL`, `MOTO_PREAUTHORIZATION`, `TRANSACTION_STATUS`.
- `saleReversal`, `refundReversal` (Android) method signatures
- `preAuthorizationReversal` with optional `Options`
- `preAuthorization` taking `MerchantAuthOptions` (not plain `Options`)
- `cardPan()` PAX-only flag
- `automaticRefund` both overloads (full and partial)
- Cordova `refundReversal` works on Android (confirmed in `HandpointHelper.java`)
- iOS `responseFinanceStatus` is the correct transaction result delegate method
- `EFT_PP_STATUS_SUCCESS = 0x0001` is the correct iOS success constant
- Android `tipAdjustment(tipAmount: BigInteger, currency: Currency, originalTransactionID: String): Boolean` — confirmed correct (legacy docs were wrong on both parameter and return types)
- `capturedAmount` in Android SDK: caller passes minor units (`BigInteger`); SDK converts internally to major-unit decimal string for the gateway. Cloud API REST body field is a major-unit decimal string (e.g. `"95.00"`).

---

*Generated from automated source-code audit of iOS SDK, Android SDK 7.1004.3 / 7.1009.5 / 7.1012.1, and Cordova plugin source. Additional Android SDK source verification completed 2026-08-07.*
