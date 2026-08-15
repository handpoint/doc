---
# Cordova / Ionic plugin — path skill

Use this path for cross-platform Cordova or Ionic apps targeting PAX terminals or HiLite Bluetooth readers.

Also load your acquirer skill: `acquirers/{acquirer}.md`

## Capabilities not available on HiLite via Cordova

- Pre-authorization
- Remote sale on-terminal

## Installation

```bash
cordova plugin add cordova-plugin-handpoint
```

For Ionic:
```bash
npm install cordova-plugin-handpoint
ionic cap sync
```

## Initialization

```javascript
// Initialize with API key — call once on app start
HAPI.init({
  apiKey: 'YOUR_MERCHANT_API_KEY',
  connectionMethod: 'BLUETOOTH'  // or 'CLOUD' for PAX via Cloud API
}, successCallback, errorCallback)

// Start device discovery (HiLite BT path)
HAPI.startMonitoring(successCallback, errorCallback)

// Connect to a discovered device
HAPI.connect({ deviceName: 'HiLite-XXXX' }, successCallback, errorCallback)
```

## Listening for transaction results

```javascript
document.addEventListener('handpoint.transactionResultReady', function(event) {
  const result = event.detail
  const status = result.finStatus      // 'AUTHORISED', 'DECLINED', etc.
  const txId   = result.transactionID  // store for reversal/refund
})

document.addEventListener('handpoint.deviceDiscoveryFinished', function(event) {
  const devices = event.detail.devices
  if (devices.length > 0) {
    HAPI.connect({ deviceName: devices[0].name }, success, error)
  }
})
```

## Sale

```javascript
HAPI.sale({
  amount: 1000,
  currency: 'USD',
  customerReference: 'ORDER-123'
  // EmerchantPay / Paystrax only: tipAmount: 150
}, successCallback, errorCallback)
```

## Refund

```javascript
// Linked
HAPI.refund({
  amount: 1000,
  currency: 'USD',
  originalTransactionId: 'transactionID-from-sale'
}, successCallback, errorCallback)

// Unlinked
HAPI.refund({ amount: 1000, currency: 'USD' }, successCallback, errorCallback)
```

## Reversal

```javascript
HAPI.reversal({
  originalTransactionId: 'transactionID-from-sale'
}, successCallback, errorCallback)

// Partial reversal (EPI only)
HAPI.reversal({
  originalTransactionId: 'transactionID',
  amount: 500
}, successCallback, errorCallback)
```

## Pre-authorization (EPI, EmerchantPay, Paystrax — PAX only)

```javascript
HAPI.preAuthorization({ amount: 1000, currency: 'USD' }, success, error)
HAPI.preAuthorizationCapture({ amount: 1000, originalTransactionId: 'id' }, success, error)
HAPI.preAuthorizationReversal({ originalTransactionId: 'id' }, success, error)
```

## Tip adjustment (EPI only)

```javascript
HAPI.tipAdjustment({
  tipAmount: 200,
  originalTransactionId: 'transactionID'
}, successCallback, errorCallback)
```

## Batch close (EPI only)

```javascript
HAPI.endOfDay(successCallback, errorCallback)
// Result via handpoint.endOfDayResult event
```

## finStatus values

| Value | Meaning | Action |
|---|---|---|
| `'AUTHORISED'` | Approved | Store `transactionID`, fulfil order |
| `'DECLINED'` | Declined | Do not retry same card |
| `'CANCELLED'` | Cardholder cancelled | Allow retry |
| `'FAILED'` | Terminal error | Check `statusMessage` |
| `'UNDEFINED'` | No result received | Do not retry — recover via status call |

## UNDEFINED recovery

`UNDEFINED` means no result was received. **Do not retry** — the transaction may have processed.

```javascript
// Query by transactionReference you generated and persisted before the call
HAPI.getTransactionStatus(
  { transactionReference: 'your-uuid-v4' },
  function(result) {
    // result.finStatus === 'AUTHORISED' → processed; store result, do not retry
    // result.finStatus absent or UNDEFINED → safe to retry
  },
  function(error) { /* handle error */ }
)
```

Alternatively query the Cloud API status endpoint directly:
```http
GET https://cloud.handpoint.com/status/{transactionReference}
ApiKeyCLoud: YOUR_MERCHANT_API_KEY
```

For feed-based recovery across a time window, load `optional/transaction-feed.md`.

## Logging

Logging is required for integration validation. Set log level before the first transaction and capture all events.

### Set SDK log level

```javascript
// 0=None  1=Info  2=Full  3=Debug — call before first operation
HAPI.setLogLevel({ level: 3 },
  function() { console.log('[HP] log level set to Debug'); },
  function(err) { console.error('[HP] setLogLevel failed:', err); }
)
```

### Listen to SDK log stream

The `onMessageLogged` event fires for every internal SDK message at or above the configured level:

```javascript
document.addEventListener('handpoint.onMessageLogged', function(e) {
  console.log('[HP SDK level=' + e.detail.level + ']', e.detail.message)
})
```

### Log all transaction events

```javascript
// Full transaction result — log the complete object
document.addEventListener('handpoint.transactionResultReady', function(e) {
  const r = e.detail.transactionResult
  console.log('[HP] endOfTransaction:', JSON.stringify({
    finStatus:          r.finStatus,
    transactionID:      r.transactionID,
    amount:             r.amount,
    currency:           r.currency,
    cardSchemeName:     r.cardSchemeName,
    maskedCardNumber:   r.maskedCardNumber,
    customerReference:  r.customerReference,
    errorMessage:       r.errorMessage,
    transactionReference: r.transactionReference
  }))
})

// Mid-transaction status updates
document.addEventListener('handpoint.currentTransactionStatus', function(e) {
  const i = e.detail.info
  console.log('[HP] txStatus:', i.status, '|', i.message, '| cancelAllowed:', i.cancelAllowed)
})
```

### Log connection and discovery events

```javascript
document.addEventListener('handpoint.connectionStatusChanged', function(e) {
  console.log('[HP] connectionStatus:', e.detail.status,
    'device:', e.detail.device && e.detail.device.name)
})

document.addEventListener('handpoint.deviceDiscoveryFinished', function(e) {
  console.log('[HP] devicesFound:', e.detail.devices.map(function(d) {
    return d.name + '/' + d.address
  }))
})
```

### Fetch device logs (card reader side)

```javascript
HAPI.getDeviceLogs({}, function() {}, function(err) { console.error('[HP] getDeviceLogs:', err) })

document.addEventListener('handpoint.deviceLogsReady', function(e) {
  console.log('[HP] deviceLogs:', e.detail.logs)
})
```

### Log before each operation

```javascript
console.log('[HP] sale: amount=1000 currency=USD ref=ORDER-123')
HAPI.sale({ amount: 1000, currency: 'USD', customerReference: 'ORDER-123' }, success, error)
```

### Minimum fields to capture per result

| Field | Why |
|---|---|
| `finStatus` | Outcome — must be `AUTHORISED` to fulfil order |
| `transactionID` | Required for reversal and refund |
| `amount` | Actual authorised amount (minor units) |
| `currency` | Currency |
| `maskedCardNumber` | Cardholder match for UNDEFINED recovery |
| `cardSchemeName` | Visa / Mastercard / Amex / etc. |
| `customerReference` | Links to your order |
| `errorMessage` | Non-empty on DECLINED or FAILED |
| `transactionReference` | Your idempotency UUID — links request to result |

### errorCallback strings (immediate — before any event fires)

| String | Meaning |
|---|---|
| `"Can't send <operation> operation to device"` | `OperationStartResult` was false — reader busy or not connected |
| `"Can't send <operation> operation to device. Incorrect parameters"` | JSON parse error on your config object |
| `"Handpoint SDK method not defined: <action>"` | Unknown method name — check plugin version |
| `"Error initializing Handpoint SDK <error>"` | SDK init failed — check `sharedSecret` / `cloudApiKey` |

## See also

- Acquirer constraints: load `acquirers/{acquirer}.md`
