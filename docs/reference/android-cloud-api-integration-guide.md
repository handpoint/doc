---
title: Android SDK (PAX) — Cloud API Integrated Mode
sidebar_position: 3
description: How to enable Cloud API (integrated mode) on a PAX SmartPOS terminal — wiring the SDK so your terminal accepts both card-present and Cloud API–initiated transactions at the same time.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Android SDK (PAX) — Cloud API Integrated Mode

:::info Related
[Android SDK (PAX) — Integration Guide](/reference/android-pax-integration-guide) — card-present baseline.  
[Cloud REST API — Integration Guide](/reference/cloud-api-integration-guide) — server-side initiated transactions (no SDK required).
:::

## What is integrated mode?

In **integrated mode**, a PAX SmartPOS terminal accepts transactions from two sources at the same time:

- **Card-present** — your on-terminal POS app calls `hapi.sale()` / `hapi.refund()` / … as usual
- **Cloud API** — your back-office server (or a separate POS system) sends a transaction request via the [Handpoint Cloud REST API](/reference/cloud-api-integration-guide) and the terminal prompts the cardholder

Both flows deliver their result through the same `endOfTransaction` callback. From the SDK's perspective, they are identical once the transaction starts. You do not need separate code paths for each.

## When to use it

| ✅ Good fit | ❌ Not a good fit |
|---|---|
| Your POS runs on the same PAX device **and** a back-office server also needs to trigger transactions | Your POS only ever initiates from the terminal — use the [standalone PAX path](/reference/android-pax-integration-guide) |
| You want a server to trigger a tip amount or card capture from a restaurant bill / appointment system | The server is the only payment initiator — use the [Cloud REST API path](/reference/cloud-api-integration-guide) alone (no SDK required) |
| You need the terminal to remain available for card-present walk-ins while also listening for server-driven charges | |

## Architecture

```
On-terminal app                Back-office server / POS system
┌────────────────────┐         ┌─────────────────────────────┐
│ Your Android app   │         │ Your server                 │
│   hapi.sale() …    │         │   POST /transactions        │
└────────┬───────────┘         └────────────┬────────────────┘
         │ IPC (on-device)                  │ HTTPS
         ▼                                  ▼
┌─────────────────────────────────────────────────────────────┐
│ Handpoint Payments App (PAX)                                │
│   ┌────────────────┐   ┌─────────────────────────────────┐ │
│   │ Standalone     │   │ Cloud channel (Pusher)          │ │
│   │ card-present   │   │ receives server transactions    │ │
│   └────────┬───────┘   └────────────────┬────────────────┘ │
└────────────┼────────────────────────────┼────────────────────┘
             │                            │
             └──────────┬─────────────────┘
                        ▼
               endOfTransaction(result)
```

There is one SDK session. The cloud channel (Pusher) is established automatically once the SDK is initialized with a valid `cloudApiKey`. Transactions from either path converge at `endOfTransaction`.

## Additional credentials required

| Credential | Standalone-only | Integrated mode |
|---|---|---|
| `sharedSecret` | Required | Required |
| `cloudApiKey` | Optional | **Required** |

The `cloudApiKey` is what opens the cloud channel. Without it, the terminal will reach `InitialisationComplete` (card-present is ready) but will never receive `CloudConnected` — Cloud API transactions cannot reach it.

Obtain your `cloudApiKey` from Handpoint Integration Support or, if you manage your own TMS enrollment, via `GET /devices` on the Cloud API after device enrollment.

## SDK wiring — what changes vs standalone

### 1. Pass `cloudApiKey` to `HandpointCredentials`

```kotlin
val credentials = HandpointCredentials(
    sharedSecret = "YOUR_SHARED_SECRET",  // 64-char hex
    cloudApiKey  = "YOUR_CLOUD_API_KEY"   // required for cloud channel
)
```

### 2. Use an empty string for the device address

For `ConnectionMethod.ANDROID_PAYMENT`, the SDK connects to the Handpoint Payments App on the **same physical device** via IPC — there is no remote address. Pass `""` (empty string) as the address:

```kotlin
val device = Device(
    name             = "My POS Terminal",
    address          = "",    // must be empty — SDK uses IPC, not TCP/BT
    port             = "",
    connectionMethod = ConnectionMethod.ANDROID_PAYMENT
)
hapi.connect(device)
```

:::danger Common mistake
Passing the device's serial number as the address does not work for `ANDROID_PAYMENT`. The SDK ignores this field for IPC connections, but some SDK versions may fail to route correctly if it is non-empty. Always use `""`.
:::

### 3. Implement `Events.TransactionStarted`

Cloud API–initiated transactions fire `transactionStarted()` before the first `currentTransactionStatus`. Implement this interface to know the moment a server-triggered transaction arrives:

```kotlin
class MyHapiDelegate : Events.SmartposRequired, Events.TransactionStarted {

    // Fires for Cloud API–initiated transactions when they arrive on the terminal.
    // Card-present transactions do NOT fire this — watch currentTransactionStatus for those.
    override fun transactionStarted(
        type: TransactionType,
        amount: BigInteger,
        currency: Currency,
        transactionReference: String
    ) {
        // Update UI: "Transaction incoming from POS…"
    }

    override fun endOfTransaction(result: TransactionResult, device: Device) {
        // Same as standalone — handles both card-present and cloud-initiated results
    }

    override fun currentTransactionStatus(info: StatusInfo, device: Device) { }
    override fun connectionStatusChanged(status: ConnectionStatus, device: Device) { }
    override fun transactionResultReady(result: TransactionResult, device: Device) { }
}
```

Then register the delegate with the SDK:

```kotlin
hapi = HapiFactory.getAsyncInterface(
    delegate    = myDelegate,
    context     = applicationContext,
    credentials = credentials,
    settings    = Settings()
)
hapi.registerEventsDelegate(myDelegate)  // required from SDK 7.1010.x onward
```

### 4. Handle two separate readiness events

Standalone and cloud initialization complete at different times and fire through different callbacks:

| Event | Callback | Timing |
|---|---|---|
| `InitialisationComplete` | `currentTransactionStatus` | Within ~1 s of `hapi.connect()` — card-present ready |
| `CloudConnected` | `connectionStatusChanged` | ~3 s later — REST `/init` + Pusher connect + channel subscribe |

Both must fire before the terminal is fully operational in integrated mode.

:::info How to tell them apart in `connectionStatusChanged`
`Connected` (standalone IPC established) arrives with `device.address == "PAXA920"`.  
`CloudConnected` arrives with `device.address == ""` (empty string).  
Filter on `status == ConnectionStatus.CloudConnected` — do not rely on the address alone.
:::

```kotlin
override fun connectionStatusChanged(status: ConnectionStatus, device: Device) {
    when (status) {
        ConnectionStatus.Connected -> {
            // IPC session established — initializing…
        }
        ConnectionStatus.CloudConnected -> {
            // Cloud channel open — terminal is now reachable via Cloud REST API
            markCloudReady()
        }
        ConnectionStatus.Disconnected -> {
            // Both channels down — reconnect
        }
        else -> {}
    }
}

override fun currentTransactionStatus(info: StatusInfo, device: Device) {
    if (info.status == StatusInfo.Status.InitialisationComplete) {
        // Card-present is ready. Cloud may still be negotiating.
        markStandaloneReady()
    }
}
```

:::tip Timeout pattern
If `CloudConnected` does not fire within ~15 seconds of `InitialisationComplete`, the cloud channel has likely failed (credential mismatch, connectivity issue, or enrollment problem). Surface an error to the operator rather than waiting indefinitely.
:::

## Full initialization sequence

```kotlin
class MyHapiManager : Events.SmartposRequired, Events.TransactionStarted {

    private var standaloneReady = false
    private var cloudReady = false

    fun initialize(context: Context, ssk: String, apiKey: String) {
        val credentials = HandpointCredentials(
            sharedSecret = ssk,
            cloudApiKey  = apiKey
        )
        val hapi = HapiFactory.getAsyncInterface(
            delegate    = this,
            context     = context.applicationContext,
            credentials = credentials,
            settings    = Settings()   // no extra flags needed
        )
        hapi.registerEventsDelegate(this)

        val device = Device("My Terminal", "", "", ConnectionMethod.ANDROID_PAYMENT)
        hapi.connect(device)

        // Start a 15 s timeout for cloud channel
        Handler(Looper.getMainLooper()).postDelayed({
            if (!cloudReady) showError("Cloud channel not established — Cloud API transactions unavailable")
        }, 15_000)
    }

    override fun currentTransactionStatus(info: StatusInfo, device: Device) {
        if (info.status == StatusInfo.Status.InitialisationComplete) {
            standaloneReady = true
            updateStatus("Card-present ready — Cloud connecting…")
        }
    }

    override fun connectionStatusChanged(status: ConnectionStatus, device: Device) {
        when (status) {
            ConnectionStatus.CloudConnected -> {
                cloudReady = true
                updateStatus("Ready — card-present and Cloud API")
            }
            ConnectionStatus.Disconnected -> {
                standaloneReady = false
                cloudReady = false
            }
            else -> {}
        }
    }

    // Cloud API transaction arriving — fires before currentTransactionStatus
    override fun transactionStarted(
        type: TransactionType,
        amount: BigInteger,
        currency: Currency,
        transactionReference: String
    ) {
        updateUI("Incoming $type for ${amount}…")
    }

    override fun endOfTransaction(result: TransactionResult, device: Device) {
        when (result.finStatus) {
            FinancialStatus.AUTHORISED       -> chargeCard(result)
            FinancialStatus.DECLINED         -> showDeclined()
            FinancialStatus.CANCELLED        -> showCancelled()
            FinancialStatus.PARTIAL_APPROVAL -> handlePartialApproval(result)
            else                             -> {}
        }
    }

    override fun transactionResultReady(result: TransactionResult, device: Device) { }
}
```

## Diagnosing cloud channel failures

| Symptom | Likely cause | Fix |
|---|---|---|
| `InitialisationComplete` fires, `CloudConnected` never fires | `cloudApiKey` missing or invalid | Confirm the key is correct; call `GET /devices` and verify your device serial appears in the response |
| Logcat: `GET /init` returns 400 → `CloudConnected` never fires | SSK mismatch — the `sharedSecret` passed to `HandpointCredentials` doesn't match the SSK enrolled on the device | Re-fetch the SSK from `GET /devices` using a valid `ApiKeyCloud`; confirm you're using staging (`.handpoint.io`) SSK for staging and production (`.handpoint.com`) SSK for production — the two are not interchangeable |
| Cloud REST API returns `400 No device listening` | Terminal is not on the Pusher channel yet | Ensure app waits for `CloudConnected` before signalling readiness; do not send Cloud API transactions before `CloudConnected` has fired |
| `NotConfigured` fires | `sharedSecret` or `cloudApiKey` rejected by the on-device Payments App | Verify both credentials; staging and production values are different even for the same physical device |
| `CloudConnected` fires then `Disconnected` immediately | Network drop or Pusher authentication failure | Check internet connectivity; confirm `cloudApiKey` has not been revoked |

### The SSK is the linking credential

The `sharedSecret` you pass to `HandpointCredentials` is used in two ways:

1. Authenticates the IPC session with the on-device Payments App (standalone path)
2. Derives the `CrKeyCloud` header sent to `GET /init` — a server-side HMAC that the cloud validates

Both use the exact same SSK value. If the SSK is even one character different from what was loaded on the device during enrollment, `/init` returns 400 and `CloudConnected` never fires. **The canonical source of truth is `GET /devices`** — the SSK in the response is what the cloud expects.

### Verifying terminal enrollment

Check whether the terminal's serial is enrolled and the `cloudApiKey` is valid for it:

```bash
curl -H "ApiKeyCloud: YOUR_CLOUD_API_KEY" https://cloud.handpoint.io/devices
```

If the response lists your terminal's serial number, the key is valid and the terminal is enrolled. If the terminal is absent, contact Integration Support — the device may not be enrolled or the key may belong to a different merchant.

## Transaction recovery in integrated mode

Transaction recovery works identically to standalone. Persist the `transactionReference` before calling any operation; if `endOfTransaction` does not arrive within your timeout, call `getTransactionStatus()`:

```kotlin
hapi.getTransactionStatus(transactionReference)
// Result arrives in transactionResultReady()
```

For Cloud API–initiated transactions, the `transactionReference` is assigned by the server and included in the `transactionStarted` callback — save it there.

→ Full recovery guide: [Transaction Recovery — Android SDK](/reference/transaction-recovery-android-sdk)

## Certification checklist

**In addition to the standard [PAX validation checklist](/reference/validate-integration-android-sdk):**

- [ ] `cloudApiKey` provided in `HandpointCredentials`
- [ ] Device address is `""` (empty string) for `ConnectionMethod.ANDROID_PAYMENT`
- [ ] `Events.TransactionStarted` implemented — `transactionStarted()` fires for Cloud API–initiated transactions
- [ ] `CloudConnected` tracked separately from `InitialisationComplete` — app does not signal "fully ready" until both fire
- [ ] 15 s timeout implemented after `InitialisationComplete` — surface an error if `CloudConnected` does not arrive
- [ ] Both card-present and Cloud API–initiated transactions tested end-to-end
- [ ] `transactionReference` from `transactionStarted()` persisted for recovery
