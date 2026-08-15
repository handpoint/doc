---
title: Validation — Android SDK (PAX)
sidebar_position: 11
description: Full certification checklist for Android SDK integrations on PAX SmartPOS. Covers build requirements, mandatory behaviours, UI screens, per-operation scenarios, and the PAX Store submission process.
---

# Validation — Android SDK (PAX)

This page covers every requirement your integration must satisfy before Handpoint issues production credentials for a PAX SmartPOS integration using the Android SDK. The Android SDK path is more extensive than REST API integrations because the ISV owns the full UI lifecycle — connection management, in-progress screens, receipt display, and recovery flows are all your responsibility.

:::info General scenarios
Tests that apply to every integration path (partial approvals, per-operation scenarios, error codes) are documented in [Validate your integration](validate-integration.mdx). Complete those requirements alongside the Android-specific ones below.
:::

:::tip Certification process
Submit a debug APK built with the RC SDK to your Handpoint integration engineer. Handpoint will test on a staging DEMO merchant using the trigger amounts. Schedule a certification call once you believe all scenarios pass.
:::

---

## 1. Build requirements

### Phase 1 — Certification build

Use the RC/SNAPSHOT SDK for the APK you submit to Handpoint:

```kotlin title="app/build.gradle"
// Certification build — RC/SNAPSHOT
implementation 'com.handpoint.api:sdk:7.x.x-RC.x-SNAPSHOT'
```

The Nexus repository must be added to `settings.gradle`:

```kotlin title="settings.gradle (KTS)"
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.PREFER_SETTINGS)
    repositories {
        google()
        mavenCentral()
        maven {
            name = "Handpoint Nexus"
            url = uri("http://nexus.handpoint.ninja:8081/repository/public/")
            isAllowInsecureProtocol = true
            credentials {
                username = "YOUR_USERNAME"
                password = "YOUR_PASSWORD"
            }
        }
    }
}
```

### Phase 2 — Production build

After Handpoint certifies the application, switch to the non-RC production SDK before releasing to merchants:

```kotlin
// Production release — non-RC
implementation 'com.handpoint.api:sdk:7.x.x'
```

:::warning
Do not ship the RC/SNAPSHOT SDK to production. RC builds may contain unreleased changes that are not validated for production traffic.
:::

### Phase 3 — PAX Store submission

After Handpoint certification is confirmed:

1. Create a developer account on the [PAX developer portal](https://developer.pax.us).
2. Publish the production-signed APK.
3. Provide your Handpoint contact with the **app package name** (e.g. `com.company.posapp`).
4. Handpoint coordinates with the PAX reseller account to make the app available to merchants on their specific device fleet.

---

## 2. Merchant credential mapping

Each merchant has a **unique SSK (Shared Secret Key)**. The Android SDK must be initialised with the credentials of the active merchant — never hardcoded with a single SSK for all merchants.

**Required implementation:**

- The app must include a merchant login or selection screen.
- The selected merchant's SSK must be loaded from secure local storage (Keystore, EncryptedSharedPreferences) — never from plain SharedPreferences or a hardcoded string.
- `HapiFactory.getAsyncInterface()` must be called with the active merchant's credentials each time a merchant session starts.

```kotlin
// Initialise with the active merchant's SSK — not a shared/hardcoded value
val credentials = HandpointCredentials(currentMerchant.ssk)
val api = HapiFactory.getAsyncInterface(this, applicationContext, credentials)
```

Certification verifies that switching merchants re-initialises the SDK with the correct credentials.

---

## 3. Mandatory behaviours

These are requirements independent of the specific payment operation. Every one must be implemented before certification.

### 3.1 InitialisationComplete guard

All payment controls must be disabled until `InitialisationComplete` is received in `currentTransactionStatus()`. Calling any operation before this signal results in `operationStarted = false`.

```kotlin
override fun currentTransactionStatus(info: StatusInfo, device: Device) {
    if (info.status == StatusInfo.Status.InitialisationComplete) {
        runOnUiThread { enablePaymentUI() }
    }
}
```

**Test:** Launch the app, attempt a sale immediately. The SDK must reject it and the UI must not allow it.

---

### 3.2 Transaction recovery and timeout

The SDK delivers the final result in `endOfTransaction()`. If this callback never fires — because of a network interruption, app kill, or device crash — the transaction may still have been authorised at the acquirer.

**Required implementation:**

1. Store `operationStartResult.transactionReference` to durable storage **before the card is presented** (before awaiting any result).
2. On reconnect, the SDK calls `transactionResultReady()` with any missed result — reconcile it immediately.
3. For manual recovery: poll `api.getTransactionStatus(transactionReference)`. `UNDEFINED` means still in progress — keep polling. Any other status is final.
4. Apply a **7-minute timeout**: after 7 minutes with no definitive result from either path, mark the transaction as failed in your UI.
5. If an `AUTHORISED` result arrives after you have already reported it as failed, attempt a reversal immediately to avoid a double-charge.

```kotlin
// Step 1 — persist the reference before the card is read
val op = api.sale(BigInteger("1000"), Currency.USD)
if (!op.operationStarted) { showError(); return }
db.savePendingTransaction(op.transactionReference)

// Step 2 — receive missed results after reconnect
override fun transactionResultReady(result: TransactionResult, device: Device) {
    db.reconcile(result.originalTransactionID, result)
    generateReceiptIfMissing(result)
}

// Step 3 — poll manually if needed
val status = api.getTransactionStatus(pendingRef)
// UNDEFINED = still in progress; AUTHORISED/DECLINED/etc. = final

// Step 5 — reversal if late AUTHORISED arrives after you reported failed
if (status.finStatus == FinancialStatus.AUTHORISED && alreadyReportedFailed) {
    api.saleReversal(status.authorisedAmount, currency, status.EFTTransactionID)
}
```

**Test:** Use trigger amount `37.68` (timeout). Verify the app detects no result, recovers correctly, and does not double-charge.

---

### 3.3 Crash and navigation recovery

**Required implementation:**

- On app startup, check durable storage for any transaction references that were saved but never resolved.
- For each pending reference, call `getTransactionStatus()` before allowing new transactions.
- The app must never leave a pending transaction unresolved across restarts.

**Test:** Start a sale, kill the app process during the terminal interaction, relaunch. The app must detect the pending transaction and resolve it.

---

### 3.4 Receipt for every card read

A receipt must be available to the cardholder every time a card is read, **regardless of outcome** — approved, declined, cancelled, or failed.

**Required receipt fields:**

| Field | Source | Notes |
|---|---|---|
| Merchant name &amp; address | TMS merchant profile | Must appear on every receipt |
| Date &amp; time | Transaction timestamp | At point of authorisation |
| Outcome | `result.finStatus` | e.g. AUTHORISED, DECLINED |
| Response text | `result.responseText` | Issuer message — required alongside finStatus |
| Transaction type | `result.type` | SALE, REFUND, REVERSAL, etc. |
| Amount &amp; currency | `result.requestedAmount` / `result.currency` | In display format (not minor units) |
| MID | `result.merchantIdentifier` | Partially masked |
| TID | `result.terminalIdentifier` | Partially masked |
| Card network &amp; masked PAN | `result.cardSchemeName` + `result.maskedPan` | Last 4 digits only |
| Entry mode | `result.entryMode` | Contactless, Chip, Swipe |
| CVM | `result.signatureRequired` / `result.cvm` | CVM method applied |
| GUID | `result.originalTransactionID` | Links receipt to SDK + your database |
| RRN | `result.rrn` | Retrieval reference for chargebacks |
| EMV details | `result.aid`, `result.tvr`, `result.iad`, `result.tsi`, `result.arc` | Required for chip/contactless |

**Transaction history:** The app must maintain a searchable transaction history where any receipt can be reprinted on demand or sent via email.

**Synthetic receipts for recovered transactions:** When a transaction is recovered via `getTransactionStatus()` and the result was `UNDEFINED` at recovery time, the SDK does not provide a receipt. Generate one synthetically from your stored transaction record following the same format and field set as regular receipts. Mark it clearly as "Recovered — no terminal receipt available".

---

### 3.5 Display responseText, not only finStatus

`result.responseText` contains the issuer's human-readable reason for the outcome (e.g. "Insufficient funds", "Refer to issuer", "Pick up card"). On declines and failures, displaying only `DECLINED` leaves the merchant without actionable context.

**Required:** Display both `finStatus` and `responseText` in the transaction result screen, the receipt, and the transaction history.

```kotlin
// Show both — finStatus for machine processing, responseText for the operator
ui.showResult(
    title  = result.finStatus.toString(),   // DECLINED
    detail = result.responseText            // "Insufficient funds"
)
```

---

### 3.6 Partial approval handling

`PARTIALLY_APPROVED` means the issuer authorised only part of the requested amount (common with prepaid cards).

**Required:**
- Detect `FinancialStatus.PARTIALLY_APPROVED`.
- Display the approved amount to the operator.
- Prompt for split tender (second payment for the remainder), or reverse the partial approval.
- Never treat `PARTIALLY_APPROVED` as a full approval.

```kotlin
FinancialStatus.PARTIALLY_APPROVED -> {
    val balance = requestedAmount - result.authorisedAmount
    // Prompt for split tender, or:
    api.saleReversal(result.authorisedAmount, currency, result.EFTTransactionID)
}
```

**Test:** Use trigger amount `37.57`.

---

### 3.7 Signature handling

When `signatureRequired()` fires, display `request.merchantReceipt` to the operator for signature comparison, then confirm:

```kotlin
override fun signatureRequired(request: SignatureRequest, device: Device) {
    runOnUiThread {
        showSignatureScreen(request.merchantReceipt) { accepted ->
            api.signatureResult(accepted)
        }
    }
}
```

Failing to call `signatureResult()` blocks the transaction indefinitely. Certification tests this path.

---

### 3.8 Logging — 2-week minimum retention

Log all SDK callbacks and payment lifecycle events with timestamps. Retain for at least 2 weeks.

**Minimum log events:**

| Event | What to log |
|---|---|
| Operation initiated | Method name, amount, currency, `transactionReference` |
| `currentTransactionStatus` | `info.status`, device name |
| `connectionStatusChanged` | `status`, device name |
| `endOfTransaction` | `originalTransactionID`, `finStatus`, `responseText`, `authorisedAmount` |
| `transactionResultReady` | Same as `endOfTransaction` — flag as recovered result |
| Recovery poll | `transactionReference`, poll attempt number, `finStatus` returned |

```kotlin
Log.d("HP_SDK", "[SALE] ref=${op.transactionReference} amount=$amount")
Log.d("HP_SDK", "[EOT] ref=${result.originalTransactionID} status=${result.finStatus} text=${result.responseText}")
Log.d("HP_SDK", "[STATUS] ${info.status} device=${device.name}")
```

---

## 4. Required screens

The Android SDK path requires the ISV to build and own the full UI. The following screens must exist and must be shown to the operator during the certification review.

| Screen | Required content |
|---|---|
| **Merchant login / selection** | Secure credential entry or merchant selection; maps the active merchant to their SSK |
| **Terminal connection status** | Visual indicator of SDK connection state; reflects `connectionStatusChanged()` callbacks |
| **Transaction in progress** | Blocking UI with current `StatusInfo.Status` (e.g. "Waiting for card", "Processing"); operator cancel button |
| **Result screen** | `finStatus`, `responseText`, authorised amount; distinct visual for approved / declined / partial |
| **Receipt** | All required fields listed in §3.4; print and email options |
| **Transaction history** | Searchable list; tap to view full receipt; reprint / email from history |
| **Recovery state** | Clear UI for "recovering previous transaction — please wait"; shown when pending references are found on startup |
| **Error / disconnected state** | Shown when `connectionStatusChanged` fires with a disconnected status; prevents new transactions |

Certification includes a UI walkthrough — have screenshots or a short screen recording ready.

---

## 5. Per-operation test scenarios

Run the scenarios below for each operation your integration supports. For the shared scenarios (Sale, Refund, Reversal, Tip Adjustment, Pre-Auth, Tokenization), see [Validate your integration — Per-operation scenarios](validate-integration.mdx#per-operation-validation-scenarios).

### Android SDK — method reference per operation

| Operation | Method | Notes |
|---|---|---|
| Sale | `api.sale(amount, currency)` | |
| Refund (unlinked) | `api.refund(amount, currency)` | |
| Refund (linked) | `api.refund(amount, currency, originalTransactionID)` | Same card enforcement depends on acquirer |
| Sale reversal | `api.saleReversal(amount, currency, originalTransactionID)` | Same batch only |
| Refund reversal | `api.refundReversal(amount, currency, originalTransactionID)` | |
| Tip adjustment | `api.tipAdjustment(tipAmount, originalTransactionID)` | Returns `Task<FinancialStatus>` — not an `OperationStartResult` |
| Pre-auth | `api.preAuthorization(amount, currency)` | |
| Pre-auth increase | `api.preAuthorizationIncrease(amount, currency, originalTransactionID)` | |
| Pre-auth capture | `api.preAuthorizationCapture(amount, currency, originalTransactionID)` | |
| Pre-auth reversal | `api.preAuthorizationReversal(originalTransactionID)` | Void before or after capture |
| MoTo sale | `api.moToSale(amount, currency)` | Card data entered on terminal screen |
| Tokenize card | `api.tokenizeCard()` | No charge |
| Sale + tokenize | `api.saleAndTokenizeCard(amount, currency)` | |

### Additional Android-specific scenarios

| Scenario | Expected behaviour |
|---|---|
| Sale before `InitialisationComplete` | `operationStarted = false`; UI must block the attempt |
| Second sale before `endOfTransaction` fires | `operationStarted = false` (`1001 Device is busy`); queue the next operation |
| App killed mid-transaction; relaunch | Pending reference detected on startup; resolved via `getTransactionStatus()` |
| Connection lost; reconnect | `transactionResultReady()` delivers the missed result |
| Trigger `37.68` (timeout) | App detects no result within 7 min; reports failed; reversal attempted if late AUTHORISED arrives |
| Switch merchant mid-session | `HapiFactory` re-initialised with new SSK; old session disconnected cleanly |

---

## 6. Staging trigger amounts

| Amount | Behaviour | Tests |
|---|---|---|
| `37.79` | Refer to issuer (01) | `responseText` displayed to operator |
| `37.84` | Not authorised (05) | Decline flow; receipt issued |
| `37.93` | Pick up card (04) | Hard decline; receipt issued |
| `37.57` | Partially approved | Balance collection or reversal |
| `37.68` | Request timeout — result never delivered | Recovery + 7-minute timeout |
| Any other | Authorised (00) | Happy path; receipt; transaction history |

---

## 7. Pre-production checklist

Complete all items before requesting production credentials.

**Build and submission:**
- [ ] Debug APK built with RC SDK submitted to Handpoint
- [ ] All mandatory behaviour scenarios pass (§3)
- [ ] All required UI screens present and functional (§4)
- [ ] Per-operation scenarios pass for all operations in scope (§5)
- [ ] PAX Store developer account created; app published
- [ ] Package name shared with Handpoint contact

**Credential and security:**
- [ ] SSK stored in Android Keystore or EncryptedSharedPreferences — not in plain SharedPreferences or source code
- [ ] Merchant login maps each merchant to their own SSK
- [ ] Staging DEMO merchant SSK removed or feature-flagged out of production builds
- [ ] Production SDK (non-RC) in use for the release build

**Reliability:**
- [ ] Transaction recovery tested end-to-end (kill app mid-transaction, relaunch)
- [ ] 7-minute timeout implemented; silent abandonment never happens
- [ ] Startup pending-transaction check implemented and tested
- [ ] `InitialisationComplete` guard tested — no operation starts before it fires

**Receipts and UX:**
- [ ] Receipt issued for every card read regardless of outcome
- [ ] Transaction history supports on-demand reprint and email
- [ ] Synthetic receipt generated for UNDEFINED recovered transactions
- [ ] Both `finStatus` and `responseText` shown to operator on all outcomes
- [ ] Signature screen implemented and tested

**Logging:**
- [ ] All SDK events logged with timestamp
- [ ] Log retention covers at least 2 weeks
- [ ] `transactionReference` logged at operation start, before card is presented
