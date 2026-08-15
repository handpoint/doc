---
id: testing-edge-cases
title: Testing Edge Cases
description: Step-by-step scenarios for verifying your integration handles every edge case correctly, per integration path.
---

# Testing Edge Cases

Step-by-step scenarios for verifying that your integration handles the full range of real-world edge cases.

## Prerequisites

| Requirement | Notes |
|---|---|
| Simulator merchant | The merchant must be configured against the **Simulator (ViscusDummy) acquirer** in Handpoint TMS — this is what enables trigger amounts, prevents real settlement, and allows expired cards. The device itself (production or debug hardware) does not determine this — only the merchant's acquirer configuration does. Contact your Handpoint integration engineer to have a test merchant provisioned. |
| Trigger amounts | Specific amounts that force a particular gateway response. Only work when the merchant is on the Simulator acquirer — see [Development hardware](/reference/development-hardware#trigger-amounts). |
| Expired cards | Accepted on the Simulator acquirer — test cards can be past their expiry date. |
| `transactionReference` log | A store (DB, log) where you record every UUID v4 you send before sending it. |

---

## Sale

### Declined transaction

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

1. Send `POST /transactions` with a trigger amount for `DECLINED`.
2. Verify the response body contains `"finStatus": "DECLINED"`.
3. Confirm your POS surfaces the decline message to the operator.
4. Verify no charge appears in your test merchant portal.

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

1. Call `hapi.sale()` with a trigger amount for `DECLINED`.
2. Verify `finStatus == FinancialStatus.DECLINED` in your `endOfTransaction` callback.
3. Confirm the terminal displays "Declined".
4. Verify no charge in your test merchant portal.

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

Same steps as Android (PAX) — trigger amounts work identically over the HiLite Bluetooth path.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

1. Call `heftClient.saleWithAmount()` with a trigger amount for `DECLINED`.
2. Verify `statusCode != EFT_PP_STATUS_SUCCESS` in your delegate.
3. Confirm terminal shows "Declined".

</TabItem>
<TabItem value="cordova" label="Cordova">

1. Call `handpoint.sale()` with a trigger amount for `DECLINED`.
2. Verify `result.finStatus === "DECLINED"` in your success callback.

</TabItem>
</Tabs>

---

### Network drop — recover via `/status`

Tests your ability to recover a transaction result when your server missed the callback.

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

1. Generate a UUID v4 `transactionReference` and **write it to your database before sending the request**.
2. Send `POST /transactions` with that `transactionReference`.
3. Immediately after sending — before the result arrives — disconnect your server from the network or stop your callback listener.
4. Wait 15 seconds, then reconnect.
5. Query `GET https://transactions.handpoint.com/transactions/{transactionReference}/status`.
6. Expect `IN_PROGRESS` while the terminal processes, then `AUTHORISED` or `DECLINED` once complete.
7. Verify your reconciliation flow correctly records the result from the status endpoint.
8. Verify you do **not** send a second transaction with the same `transactionReference` during the wait.

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

1. Start a sale on the PAX terminal.
2. While the terminal is at the card-reading screen, force-close the POS application.
3. Restart the POS application and reconnect to the terminal.
4. Verify the SDK calls `startRecovery()` (or call it explicitly in your `onCreate`/reconnect handler).
5. Verify `endOfTransaction` fires with `recoveredTransaction == true` and the correct `finStatus`.

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

1. Start a sale via HiLite.
2. While the terminal is processing, disable Bluetooth on the Android device.
3. Re-enable Bluetooth and reconnect.
4. Verify the SDK recovers and delivers the result via `endOfTransaction`.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

1. Start a sale via HiLite.
2. While processing, disable Bluetooth on the iOS device.
3. Re-enable Bluetooth and reconnect to the HiLite reader.
4. Verify the result is delivered via the delegate callback.

</TabItem>
<TabItem value="cordova" label="Cordova">

Same as the underlying native platform (Android HiLite or iOS HiLite depending on device). Follow the Bluetooth drop steps above.

</TabItem>
</Tabs>

---

### Duplicate `transactionReference` (idempotency)

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

1. Send `POST /transactions` with `transactionReference = "your-test-uuid"`. Note the result.
2. Send the **exact same request** again with the same `transactionReference`.
3. Verify the gateway returns the original result — not a second charge.
4. Verify only one charge appears in your test merchant portal.

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

Idempotency via `transactionReference` is a gateway-level feature. Test via Cloud API. Android SDK does not expose `transactionReference` as a call parameter directly — the SDK assigns one internally.

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

Same note as Android PAX — test idempotency via Cloud API.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

Same note — test idempotency via Cloud API.

</TabItem>
<TabItem value="cordova" label="Cordova">

Same note — test idempotency via Cloud API.

</TabItem>
</Tabs>

---

### Card fallback path — contactless → chip → swipe

Tests that the full fallback chain works end-to-end and that your app handles the extended time (~2–5 min) without timing out or sending a duplicate request.

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

Card fallback is handled entirely by the terminal. From the Cloud API side:

1. Send `POST /transactions` with `transactionReference`.
2. Do not poll or retry — wait for the result via `callbackUrl` or `GET /transaction-result/{id}`.
3. Verify your polling loop stays active for at least 6 minutes without sending a second request.
4. On the terminal, allow the fallback chain to complete (tap fail × 3 → chip fail × 3 → swipe success).
5. Verify the result arrives and is accepted by your callback handler.

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

Requires a physical PAX device. This test may take up to 5 minutes.

1. Start a sale (`hapi.sale()`).
2. **Contactless fails:** tap a card that triggers a contactless retry (e.g. tap at wrong angle or use an unsupported card). Repeat until the terminal exhausts retries (3 attempts × 30s = up to 90s).
3. **Chip fails:** when prompted to insert, remove the card immediately after partial insertion to trigger `ICC_RESET_ERR`. Repeat for up to 3 attempts (up to 90s).
4. **Swipe:** when prompted, swipe successfully.
5. **PIN:** enter wrong PIN twice, then correct PIN on the third attempt (up to 90s).
6. Verify `endOfTransaction` fires with `finStatus == AUTHORISED`.
7. Verify your app did not time out or send a duplicate request during the wait.

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

HiLite does not support chip fallback. Test contactless-only edge cases:
1. Start a sale and tap a card that produces a read error.
2. Verify the terminal retries and eventually succeeds or returns `DECLINED`.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

Same as Android HiLite — contactless only, no chip fallback on HiLite.

</TabItem>
<TabItem value="cordova" label="Cordova">

Same as Android (PAX) if running on PAX hardware. Same as HiLite paths if running on a Bluetooth reader.

</TabItem>
</Tabs>

---

### Worst-case timeout — 6-minute integration test

Verifies your POS does not give up before the terminal has finished.

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

1. Send `POST /transactions` with `transactionReference`. Start a stopwatch.
2. On the terminal, deliberately take the longest path (3 contactless fail → 3 chip fail → swipe → 3 wrong PINs → correct PIN).
3. Verify your polling/callback listener is still active at 5 minutes.
4. Verify the result is accepted when it arrives (anywhere up to ~6 minutes after send time).
5. Verify `GET /status` returns `IN_PROGRESS` throughout and `AUTHORISED` after completion.

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

Same scenario as "Card fallback path" above, but explicitly measure the elapsed time. Verify `endOfTransaction` fires within 6 minutes and your app's timeout does not fire before the result arrives.

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

Run the maximum contactless retry sequence. Verify no app-level timeout fires before the SDK delivers the result.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

Same as Android HiLite.

</TabItem>
<TabItem value="cordova" label="Cordova">

Same as the underlying native platform.

</TabItem>
</Tabs>

---

## Refund

### Linked refund — same card (card-present paths)

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

1. Complete a sale — note the `transactionID` from the result.
2. Send `POST /transactions` with `"operation": "refund"` and `"originalTransactionId": "{transactionID}"`.
3. On the terminal, present the **same card** used for the original sale.
4. Verify `finStatus: AUTHORISED`.

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

1. Complete a sale — note the `transactionID`.
2. Call `hapi.refund(amount, currency, originalTransactionID)`.
3. Present the same card.
4. Verify `finStatus == AUTHORISED` in `endOfTransaction`.

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

Same as Android PAX.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

1. Complete a sale — note the `transactionID` from the XML response.
2. Call `heftClient.refundWithAmount:currency:transaction:`.
3. Present the same card.
4. Verify success in your delegate.

</TabItem>
<TabItem value="cordova" label="Cordova">

1. Complete a sale — note `result.transactionID`.
2. Call `handpoint.refund()` with `originalTransactionID`.
3. Present the same card.
4. Verify `result.finStatus === "AUTHORISED"`.

</TabItem>
</Tabs>

---

### Linked refund — mismatched payment method

Tests the physical-card vs mobile-wallet PAN token mismatch. Requires a merchant configured for same-card verification.

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

1. Complete a sale using a **physical card** (chip insert) — note `transactionID`.
2. Initiate a linked refund with `originalTransactionId`.
3. On the terminal, present the **same account via Apple Pay or Google Pay** (wallet tap).
4. Verify the refund is **declined** — wallet generates a different PAN token than the physical card.
5. Repeat in reverse: original sale via wallet, refund via physical insert — same decline expected.
6. Verify your UI instructs the cardholder to use the same payment method as the original purchase.

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

Same scenario as Cloud API — the mismatch check happens at the gateway. Follow the same steps using the Android SDK for the sale and refund calls.

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

Same as Android PAX.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

Same scenario — test via HiLite. Physical card PAN ≠ wallet token.

</TabItem>
<TabItem value="cordova" label="Cordova">

Same scenario as Cloud API — mismatch check is gateway-level.

</TabItem>
</Tabs>

---

### Refund amount exceeds original

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

1. Complete a sale for `1000` (minor units).
2. Send a linked refund with `amount: "1500"` and `originalTransactionId`.
3. Verify the gateway declines with `AMOUNT_EXCEEDS_ORIGINAL`.

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

1. Complete a sale for `BigInteger("1000")`.
2. Call `hapi.refund(BigInteger("1500"), currency, originalTransactionID)`.
3. Verify `finStatus == DECLINED` and the error code in the result.

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

Same as Android PAX.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

Call `heftClient.refundWithAmount:currency:transaction:` with an amount exceeding the original. Verify declined response.

</TabItem>
<TabItem value="cordova" label="Cordova">

Call `handpoint.refund()` with an amount exceeding the original. Verify `result.finStatus === "DECLINED"`.

</TabItem>
</Tabs>

---

## Reversal

### Before cut-off — no card required

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

1. Complete a sale — note `transactionID`.
2. Within the same business day (before batch cut-off), send `POST /transactions` with `"operation": "saleReversal"` and `"originalTransactionId"`.
3. Verify no card interaction is required on the terminal.
4. Verify `finStatus: AUTHORISED` (reversal approved, hold released).
5. Verify no charge appears in your test merchant portal.

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

1. Complete a sale — note `transactionID`.
2. Call `hapi.saleReversal(amount, currency, originalTransactionID)` same day.
3. Verify no card prompt appears on the terminal.
4. Verify `finStatus == AUTHORISED` in `endOfTransaction`.

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

Same as Android PAX.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

1. Call `heftClient.saleVoidWithAmount:currency:transaction:` same day.
2. Verify no card prompt and `EFT_PP_STATUS_SUCCESS` in delegate.

</TabItem>
<TabItem value="cordova" label="Cordova">

1. Call `handpoint.saleReversal()` same day.
2. Verify `result.finStatus === "AUTHORISED"` and no card prompt.

</TabItem>
</Tabs>

---

### After cut-off — should fail

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

1. Complete a sale — note `transactionID`.
2. Manually close the batch (or wait until after the scheduled cut-off time).
3. Attempt a reversal with the same `originalTransactionId`.
4. Verify the error `ORIGINAL_NOT_FOUND` or equivalent batch-closed error.
5. Verify your POS routes the operator to a post-settlement Refund flow instead.

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

Same scenario using `hapi.saleReversal()` after batch close. Verify `finStatus == DECLINED` or equivalent error in `endOfTransaction`.

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

Same as Android PAX.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

Same scenario via `saleVoidWithAmount` after batch close. Verify failure in delegate.

</TabItem>
<TabItem value="cordova" label="Cordova">

Same via `handpoint.saleReversal()` after batch close.

</TabItem>
</Tabs>

---

## Pre-Authorization lifecycle

### Full lifecycle: create → capture

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

1. Send `POST /transactions` with `"operation": "preAuthorization"` and a `transactionReference`. Note the `transactionID` from the result.
2. Verify `finStatus: AUTHORISED` (hold placed — no funds captured).
3. Send `POST /preauthorization/capture` with `{ "originalGuid": "{transactionID}", "capturedAmount": "{amount}" }`.
4. Verify capture result `finStatus: AUTHORISED`.
5. Query `GET /transactions/{transactionReference}/status/all` — verify **two** operations appear (Pre-Auth + Capture).

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

1. Call `hapi.preAuthorization(amount, currency)` — note `transactionID` from result.
2. Call `hapi.preAuthorizationCapture(captureAmount, currency, originalTransactionID)`.
3. Verify both results come through `endOfTransaction` as `AUTHORISED`.

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

Pre-auth is not available on HiLite — use Cloud API.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

Pre-auth is not available on iOS HiLite — use Cloud API.

</TabItem>
<TabItem value="cordova" label="Cordova">

1. Call `handpoint.preAuthorization()` — note `result.transactionID`.
2. Call `handpoint.preAuthorizationCapture()` with `originalTransactionID`.
3. Verify both `finStatus === "AUTHORISED"`.

</TabItem>
</Tabs>

---

### Create → void (release hold without capturing)

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

1. Send a Pre-Auth create — note `transactionID`.
2. Send `POST /transactions` with `"operation": "preAuthorizationReversal"` and `"originalTransactionId"`.
3. Verify `finStatus: AUTHORISED` (hold released).
4. Verify no amount was captured in your test merchant portal.

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

1. Call `hapi.preAuthorization()` — note `transactionID`.
2. Call `hapi.preAuthorizationVoid(amount, currency, originalTransactionID)`.
3. Verify `finStatus == AUTHORISED` and no capture in your portal.

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

Not available on HiLite.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

Not available on iOS HiLite.

</TabItem>
<TabItem value="cordova" label="Cordova">

1. Call `handpoint.preAuthorizationVoid()` with `originalTransactionID`.
2. Verify `finStatus === "AUTHORISED"` and no capture.

</TabItem>
</Tabs>

---

## Signature (Android PAX only)

### Single 30-second window — clearing does not reset the timer

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

Signature is a terminal-side CVM — not applicable for Cloud API testing directly. Test via Android PAX.

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

1. Configure a test card profile that uses Signature as the CVM (requires a test card that triggers signature rather than PIN).
2. Complete a sale — when the signature screen appears, **do not draw** and wait.
3. Verify the screen closes automatically after **30 seconds** and the transaction completes (or is declined, depending on SDK configuration).
4. Repeat: draw a signature, press Clear, draw again, press Clear — verify the screen still closes at the 30-second mark from when it first appeared. **The Clear button does not reset the timer.**

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

Not applicable — HiLite does not render a signature screen.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

Not applicable on iOS HiLite.

</TabItem>
<TabItem value="cordova" label="Cordova">

Same as Android PAX if running on PAX hardware.

</TabItem>
</Tabs>

---

## Mobile wallet — "See Phone" (120-second window)

Triggered when Apple Pay / Google Pay / Samsung Pay requires on-device biometric verification (Face ID, Touch ID, fingerprint) before the tap is finalised. The terminal shows *"Verification Required – Please check your mobile device"* and waits up to **120 seconds**.

<Tabs groupId="integration-path">
<TabItem value="cloud-api" label="Cloud API">

1. Send `POST /transactions` with `transactionReference`.
2. On the terminal, tap with a mobile wallet card that triggers on-device CVM.
3. When the "See Phone" screen appears, **do not complete biometric auth** — wait and observe.
4. Verify the screen times out after 120 seconds and the transaction is declined/cancelled.
5. Verify your `callbackUrl` receives the result within your 6-minute recovery window.

</TabItem>
<TabItem value="android-pax" label="Android (PAX)">

1. Start a sale.
2. Tap with an Apple Pay / Google Pay card that requires biometric CVM.
3. When the terminal shows "See Phone", do not complete authentication on the phone — observe the 120s timeout.
4. Verify `endOfTransaction` fires with `finStatus == DECLINED` after timeout.
5. Verify the terminal accepts the transaction when biometric auth IS completed on the phone within 120s.

</TabItem>
<TabItem value="android-hilite" label="Android (HiLite)">

Same as Android PAX for mobile wallet CVM.

</TabItem>
<TabItem value="ios-hilite" label="iOS (HiLite)">

Same test via iOS HiLite.

</TabItem>
<TabItem value="cordova" label="Cordova">

Same as the underlying native platform.

</TabItem>
</Tabs>

---

## `transactionReference` rules — validation checklist

Run these on any integration path that supports `transactionReference` (Cloud API only; not applicable on HiLite paths).

| Check | Expected result |
|---|---|
| Send `transactionReference` on a Sale | Accepted; queryable via `/status` |
| Send `transactionReference` on a Remote Sale | Accepted; queryable via `/status` |
| Send `transactionReference` on a Pre-Auth create | Accepted; links all lifecycle operations |
| Send `transactionReference` on an unlinked Refund | Accepted; queryable via `/status` |
| Send `transactionReference` on a Reversal | Should be ignored or rejected — do not send |
| Send `transactionReference` on a linked Refund | Should be ignored or rejected — do not send |
| Send `transactionReference` on a Pre-Auth Capture | Should be ignored or rejected — do not send |
| Send `transactionReference` on a Pre-Auth Void | Should be ignored or rejected — do not send |
| Query `/status/all` after a Sale + Refund | Both operations appear in the array |
| Query `/status/all` after a Sale + Reversal | Both operations appear in the array |
| Query `/status` immediately after sending (terminal still processing) | `IN_PROGRESS` |
| Query `/status` after result delivered | `AUTHORISED` or `DECLINED` |
| Query `/status` with a random UUID that was never sent | `UNDEFINED` |
