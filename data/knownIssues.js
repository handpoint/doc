/**
 * Known issues for all Handpoint SDK and API products.
 *
 * Fields:
 *   id          — unique identifier, format KI-YYYY-NNN
 *   product     — key from PRODUCTS below
 *   severity    — 'high' | 'medium' | 'low'
 *   visibility  — 'public' | 'internal'  (internal hidden in production builds)
 *   title       — short one-line summary
 *   description — fuller explanation of what goes wrong and when
 *   introduced  — first version that exhibits this behaviour (null = unknown)
 *   fixed       — version where it was resolved (null = not yet fixed)
 *   workaround  — plain-text workaround, or null if none exists
 *   regression_of — id of a prior KI this re-introduced, or null
 *   jiraKey       — Jira issue key(s) for internal traceability, e.g. 'DEV-1234' or ['DEV-1234', 'DEV-5678'] (internal only, never shown in production)
 */

export const PRODUCTS = {
  'android-sdk':    'Android SDK',
  'ios-sdk':        'iOS SDK (HiLite)',
  'javascript-sdk': 'JavaScript SDK',
  'cloud-api':      'Cloud API (REST)',
  'cordova':        'Cordova Plugin',
  'express-sdk':    'Express SDK',
  'windows-sdk':    'Windows SDK',
  'txnfeed-api':    'TXN Feed API',
};

export const KNOWN_ISSUES = [
  // ─── Android SDK ──────────────────────────────────────────────────────────
  {
    id: 'KI-2024-001',
    product: 'android-sdk',
    severity: 'high',
    visibility: 'public',
    title: 'Pre-auth capture fails silently when terminal loses connectivity mid-capture',
    description:
      'If the terminal drops its connection to Handpoint Cloud between the pre-auth and the capture call, ' +
      'the capture request may be lost without triggering a connection-loss callback. The transaction ' +
      'remains in an open authorized state with no indication of failure on the POS side.',
    introduced: '7.1010.0',
    fixed: null,
    workaround:
      'After any capture call, poll `getTransactionStatus()` using the original pre-auth GUID to confirm ' +
      'the capture was received and processed. Implement a retry with exponential back-off before surfacing ' +
      'a failure to the operator.',
    regression_of: null,
    jiraKey: null,
  },
  {
    id: 'KI-2024-002',
    product: 'android-sdk',
    severity: 'medium',
    visibility: 'public',
    title: 'Tip adjustment returns SUCCESS status but amount is not updated in batch when applied within 60 s of the original sale',
    description:
      'A race condition in the batch reconciliation layer causes tip adjustments submitted less than ~60 seconds ' +
      'after the original transaction to return a SUCCESS response from the SDK, but the batch record is not ' +
      'updated. The adjusted amount is absent from the settled batch.',
    introduced: '7.1009.0',
    fixed: '7.1012.2',
    workaround:
      'Enforce a minimum 90-second delay between a card-present sale and any subsequent tip adjustment ' +
      'on that transaction. Display a UI message like "Tip adjustment is available once payment is fully processed."',
    regression_of: null,
    jiraKey: null,
  },
  {
    id: 'KI-2024-003',
    product: 'android-sdk',
    severity: 'low',
    visibility: 'internal',
    title: '[INTERNAL] Battery level callback fires twice on PAX A920 Pro on first connection',
    description:
      'On A920 Pro firmware 5.x, the `onBatteryLevelChanged` callback is invoked twice with the same value ' +
      'immediately after initial SDK connection. This is cosmetic — no functional impact — but can cause ' +
      'duplicate log entries.',
    introduced: '7.1011.0',
    fixed: null,
    workaround: 'De-duplicate consecutive identical battery values in your callback handler.',
    regression_of: null,
    jiraKey: null,
  },

  // ─── iOS SDK ──────────────────────────────────────────────────────────────
  {
    id: 'KI-2024-004',
    product: 'ios-sdk',
    severity: 'medium',
    visibility: 'public',
    title: 'HiLite Bluetooth reconnection fails after iOS 17.4 background refresh',
    description:
      'After an iOS background refresh cycle on iOS 17.4+, the HiLite device Bluetooth connection is ' +
      'not automatically re-established. The SDK reports `DeviceDisconnected` but does not attempt ' +
      'a reconnect within the expected 30-second window.',
    introduced: '4.0.2',
    fixed: null,
    workaround:
      'Listen for `DeviceDisconnected` and call `connectToDevice()` explicitly with the last-known ' +
      'device descriptor. Store the descriptor in `UserDefaults` after first connection so it survives ' +
      'app lifecycle events.',
    regression_of: null,
    jiraKey: null,
  },

  // ─── Cloud API (REST) ─────────────────────────────────────────────────────
  {
    id: 'KI-2024-005',
    product: 'cloud-api',
    severity: 'high',
    visibility: 'public',
    title: 'MOTO refund via GUID returns 200 but transaction is not refunded when original sale is older than 90 days',
    description:
      'Refund requests targeting transactions older than 90 days return HTTP 200 with a SUCCESS status, ' +
      'but the acquirer rejects the refund silently. The transaction remains settled with no credit applied. ' +
      'Affects all TSYS-backed acquirers.',
    introduced: null,
    fixed: null,
    workaround:
      'For refunds on transactions older than 90 days, process a standalone refund (without GUID) ' +
      'instead of a linked refund. Verify acquirer age limits for linked refunds with your Handpoint ' +
      'integration contact before relying on the GUID-based path.',
    regression_of: null,
    jiraKey: null,
  },
  {
    id: 'KI-2024-006',
    product: 'cloud-api',
    severity: 'low',
    visibility: 'internal',
    title: '[INTERNAL] Batch close response occasionally omits transactionCount field under high load',
    description:
      'Under sustained load (>50 concurrent batch-close requests), the `/closeBatch` response ' +
      'sometimes returns without the `transactionCount` field. All other fields and the settlement ' +
      'itself are unaffected.',
    introduced: null,
    fixed: null,
    workaround: 'Treat a missing `transactionCount` as 0 and continue — the batch is closed regardless.',
    regression_of: null,
    jiraKey: null,
  },

  // ─── JavaScript SDK ───────────────────────────────────────────────────────
  {
    id: 'KI-2023-007',
    product: 'javascript-sdk',
    severity: 'medium',
    visibility: 'public',
    title: 'onMessageReceived callback not fired for STATUS_CHANGED events in Firefox 121+',
    description:
      'A change in Firefox 121\'s WebSocket event handling breaks the `onMessageReceived` listener ' +
      'for `STATUS_CHANGED` event types. Other event types are unaffected. The device connection ' +
      'itself remains intact.',
    introduced: '7.2.0',
    fixed: '7.2.4',
    workaround: 'Upgrade to JavaScript SDK 7.2.4 or later. As an interim measure, poll device status via `getDeviceStatus()` every 5 seconds.',
    regression_of: null,
    jiraKey: null,
  },
];
