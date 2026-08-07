import React, { useState, useMemo } from 'react';
import Link from '@docusaurus/Link';
import { ACQUIRERS as BASE_ACQUIRERS } from '@site/src/data/acquirerCaps';

// ─── Region & Path data ───────────────────────────────────────────────────────

const REGIONS = [
  {
    value: 'us-canada',
    label: 'US & Canada',
    flag: '🇺🇸',
    desc: 'EPI (TSYS) · Paysafe — Handpoint referral acquirers for North America',
  },
  {
    value: 'eu',
    label: 'Europe',
    flag: '🇪🇺',
    desc: 'Card present: EmerchantPay · Paystrax · eCommerce via Handpoint Commerce API',
  },
];

const PAYMENT_MODES = [
  {
    value: 'card-present',
    label: 'Card Present (In-Person)',
    icon: '💳',
    desc: 'Physical card reader — PAX terminal or HiLite Bluetooth device. Customer taps, dips, or swipes at checkout.',
  },
  {
    value: 'ecomm',
    label: 'eCommerce (Card Not Present)',
    icon: '🌐',
    desc: 'Online checkout — no card reader required. Powered by Handpoint Commerce API (Smartboard). Available for EU merchants only.',
  },
];

const ECOMM_TYPES = [
  {
    value: 'hosted',
    label: 'Hosted (Web Payment Form)',
    icon: '🔗',
    desc: 'Customer redirected to Handpoint\'s secure hosted checkout page to enter card details. 3DS v2 handled automatically. PCI SAQ A — no card data touches your server.',
  },
  {
    value: 'direct',
    label: 'Direct API (Server-to-Server)',
    icon: '⚡',
    desc: 'Your server calls the Commerce API directly. Full control over checkout UX. Requires 3DS v2 browser data collection and ACS redirect handling. Higher PCI scope — consult your QSA.',
  },
];

const PATHS = [
  { value: 'cloud-api',      label: 'REST API',         icon: '☁️',  desc: 'PAX terminal commanded via Handpoint Cloud. Language-agnostic — any platform that makes HTTP requests.' },
  { value: 'android-pax',    label: 'Android (PAX)',    icon: '📱',  desc: 'Native Android app running directly on the PAX payment device.' },
  { value: 'android-hilite', label: 'Android (HiLite)', icon: '🔵',  desc: 'Android phone or tablet paired with a HiLite Bluetooth card reader.' },
  { value: 'ios-hilite',     label: 'iOS (HiLite)',     icon: '📲',  desc: 'iPhone or iPad paired with a HiLite Bluetooth card reader.' },
  { value: 'cordova',        label: 'Cordova',          icon: '🧩',  desc: 'Cordova/Ionic plugin wrapping the native Handpoint SDKs — shared JavaScript code that runs on PAX (Android), HiLite (Android), and HiLite (iOS).' },
];

const ACQUIRERS = BASE_ACQUIRERS;

// ─── Acquirer → region mapping ────────────────────────────────────────────────

const ACQUIRER_REGIONS = {
  'epi':              'us-canada',
  'tsys-tns':         'us-canada',
  'tns':              'us-canada',
  'paysafe-tsys':     'us-canada',
  'omnipay-emp':      'eu',
  'omnipay-paystrax': 'eu',
  'smartboard':       'eu',
};

// ─── Token providers (internal reference) ────────────────────────────────────
// procharge: stores PAN + expiry → enables MOTO charges with stored token (EPI only)
// paysafe:   Paysafe vault → card-present tokenization for Paysafe acquirers
// tokenex:   third-party vault → card-present tokenization, supported by all acquirers

const ACQUIRER_TOKEN_PROVIDERS = {
  'epi':              ['procharge', 'tokenex'],
  'tsys-tns':         ['paysafe', 'tokenex'],
  'tns':              ['tokenex'],
  'paysafe-tsys':     ['paysafe', 'tokenex'],
  'omnipay-emp':      ['tokenex'],
  'omnipay-paystrax': ['tokenex'],
};

const TOKEN_PROVIDERS = [
  { value: 'procharge', label: 'ProCharge', icon: '🔐', desc: 'EPI\'s token service. Stores the full PAN and expiry date — enables card-not-present remote sale charges using stored tokens.' },
  { value: 'paysafe',   label: 'Paysafe',   icon: '💳', desc: 'Paysafe\'s own vault. Supported for Paysafe acquirers — card-present tokenization and PCI-scope reduction.' },
  { value: 'tokenex',   label: 'TokenEx',   icon: '🏦', desc: 'Third-party card vault. Supported by all acquirers — card-present tokenization and PCI-scope reduction.' },
];

// ─── eCommerce feature groups ─────────────────────────────────────────────────

const ECOMM_FEATURE_GROUPS = [
  {
    id: 'ecomm-core',
    label: 'Core Payments',
    icon: '🌐',
    features: [
      { id: 'ecomm-sale', label: 'Online Sale',           required: true,  desc: 'Standard CNP charge — customer provides card details on the Handpoint hosted payment form or your own checkout page (Direct API).' },
      { id: 'ecomm-3ds',  label: '3DS v2 Authentication', required: true,  desc: 'Mandatory for EU transactions under PSD2/SCA. Hosted: handled automatically. Direct API: requires browser fingerprint data collection (JS snippet) and ACS redirect/challenge handling.' },
    ],
  },
  {
    id: 'ecomm-refunds',
    label: 'Refunds',
    icon: '↩️',
    features: [
      { id: 'ecomm-refund', label: 'CNP Refund', required: false, desc: 'Refund a completed transaction by its transaction reference — no card re-presentation needed.' },
    ],
  },
  {
    id: 'ecomm-recurring',
    label: 'Card Vaulting & Recurring',
    icon: '🔄',
    features: [
      { id: 'ecomm-tokenize',  label: 'Card Tokenization',           required: false, desc: 'Store card details securely in the Handpoint Commerce API vault — reduces PCI scope and enables future charges without card re-entry.' },
      { id: 'ecomm-recurring', label: 'Recurring Billing',           required: false, desc: 'Use a stored card token to charge a customer on a recurring schedule — subscriptions, memberships, installments.' },
      { id: 'ecomm-cof',       label: 'Card-on-File (Unscheduled)',  required: false, desc: 'Charge a stored card for unscheduled merchant-initiated transactions — top-ups, reorders, one-click checkout.' },
    ],
  },
  {
    id: 'ecomm-advanced',
    label: 'Authorization & Verification',
    icon: '✅',
    features: [
      { id: 'ecomm-preauth', label: 'Pre-Authorization',         required: false, desc: 'Hold funds without capturing — used in travel/hospitality for booking deposits.' },
      { id: 'ecomm-verify',  label: 'Card Verification (VERIFY)', required: false, desc: 'Validate a card is real and in-date without charging — used at enrollment or before a first subscription charge. Returns response code 85 on success.' },
    ],
  },
];

// ─── Card-present feature groups ─────────────────────────────────────────────

const FEATURE_GROUPS = [
  {
    id: 'inperson',
    label: 'In-Person Payments',
    icon: '💳',
    features: [
      { id: 'sale',             label: 'Standard Sale',              required: true,  capKey: 'sale',             desc: 'Card-present payment — customer taps, dips, or swipes.' },
      { id: 'partial-approval', label: 'Partial Approval',           required: true,  capKey: null,               desc: 'Accept when card covers only part of the total. If unsupported by your flow, send an automatic reversal and show "declined — insufficient funds".' },
      { id: 'reversal',         label: 'Connection Loss & Reversal', required: true,  capKey: 'reversal',         desc: 'Auto-query and reverse on connection drop. Required for Handpoint certification.' },
      { id: 'refund',           label: 'Refund (Card Present)',      required: false, capKey: 'refund',           desc: 'Return funds with the card physically present — linked to original transaction or standalone.' },
      { id: 'partial-reversal', label: 'Partial Reversal',           required: false, capKey: 'partial-reversal', desc: 'Reduce the authorized amount before settlement — e.g. when a customer returns part of an order before the batch closes.' },
      { id: 'pre-auth',         label: 'Pre-Authorization',          required: false, capKey: 'pre-auth',         desc: 'Hold + increase + capture flow. Used in hotels, car rental, restaurants with tabs.' },
      { id: 'remote-sale-entry', label: 'Remote Sale (on terminal)',  required: false, capKey: 'remote-sale',       desc: 'Staff keys card details on terminal keypad for a customer who is NOT present — phone or mail order CNP.' },
      { id: 'money-remittance', label: 'Money Remittance',           required: false, capKey: 'money-remittance', paths: ['cloud-api', 'android-pax'], desc: 'Process money transfer transactions via PAX terminal. AMEX routing requires a separate MID — contact Handpoint to configure.' },
      { id: 'debit-only',       label: 'Debit-Only Acceptance',      required: false, capKey: null,               desc: 'Restrict merchant to debit cards only — all terminals under the merchant decline credit transactions. Configured at the merchant level in TMS.' },
    ],
  },
  {
    id: 'tips',
    label: 'Tips',
    icon: '💰',
    features: [
      { id: 'tips',    label: 'On-Screen Tip',                required: false, capKey: null,             desc: 'Customer selects or enters a tip on the terminal screen during checkout.' },
      { id: 'tip-adj', label: 'Tip Adjustment (Back Office)', required: false, capKey: 'tip-adjustment', desc: 'Staff adds a written tip after the transaction via your software — no terminal re-tap. Cannot be applied to a transaction that already had an on-screen tip.' },
    ],
  },
  {
    id: 'backoffice',
    label: 'Back Office & Remote',
    icon: '🏢',
    features: [
      { id: 'auto-refund',        label: 'Remote Refund (GUID)',                required: false, pathIndependent: true, capKey: 'refund',        desc: 'Refund via original transaction GUID using the REST API — no terminal or card re-presentation needed, regardless of your terminal integration path.' },
      { id: 'remote-sale-token', label: 'Remote Sale with Card Token',         required: false, pathIndependent: true, capKey: 'remote-sale', tokenProviderNote: 'ProCharge (EPI) or Cygma — token must store the full PAN and expiry date to enable card-not-present charges.', desc: 'Charge a customer using a stored card token via the REST API — covers recurring billing, card-on-file, and remote sale scenarios. The token must come from a provider that stores full PAN and expiry (ProCharge for EPI, or Cygma).' },
      { id: 'token-guid',    label: 'Get Token from Transaction GUID', required: false, pathIndependent: true, capKey: 'tokenization',             desc: 'Retrieve a card token from any past transaction using its GUID via the REST API — no new terminal interaction.' },
      { id: 'preauth-retry', label: 'Pre-Auth Capture Retry',          required: false, pathIndependent: true, capKey: 'pre-auth-capture-reversal', desc: 'Retry a failed pre-auth capture using the original auth GUID via the REST API — no customer re-presence needed.' },
      { id: 'batching',      label: 'Batch / EOD Settlement',          required: false, pathIndependent: true, capKey: 'batching',                  desc: 'Manually trigger end-of-day batch settlement via the REST API instead of relying on automatic settlement. Must be enabled in TMS.' },
      { id: 'txn-feed',      label: 'TXN Feed API Reconciliation',     required: false, pathIndependent: true, capKey: null,                        desc: 'Query, reconcile, and export transactions via the Handpoint TXN Feed API.' },
    ],
  },
  {
    id: 'tokens',
    label: 'Card Storage & Tokenization',
    icon: '🔑',
    features: [
      { id: 'token-only',    label: 'Tokenize Card Only',      required: false, capKey: 'tokenization', desc: 'Card tapped/dipped at terminal, stored without charging — enrollment, subscription sign-up.' },
      { id: 'sale-tokenize', label: 'Sale & Tokenize (Atomic)', required: false, capKey: 'tokenization', desc: 'Single call for payment + tokenization. If the token provider fails, the entire transaction fails.' },
    ],
  },
  {
    id: 'special',
    label: 'Special Cards & Acquirer Features',
    icon: '🏷️',
    features: [
      { id: 'closed-loop',    label: 'Closed-Loop / Badge Cards', required: false, capKey: null,               desc: 'Whitelisted PAN ranges return the actual card number — used for employee badges, merchant-issued gift cards, loyalty cards.' },
      { id: 'interac',        label: 'Interac (Canada)',           required: false, capKey: null, region: 'us-canada', acquirers: ['paysafe-tsys', 'tsys-tns', 'tns'], desc: 'Interac debit acceptance for Canadian cardholders. Requires specific fallback handling, void timing, and acquirer-level Interac enablement. Paysafe: Interac is available but must be enabled separately — contact Handpoint. See Dev Center for full Interac compliance requirements.' },
    ],
  },
];

// ─── Per-path hardware / auth prereqs ────────────────────────────────────────

const PATH_PREREQS = {
  'cloud-api': {
    auth: [
      'Pass your API key in every request using the ApiKeyCloud header.',
      'Credentials are per-merchant — one API key per merchant account.',
      'Staging: https://cloud.handpoint.io (PAX debug devices)',
      'Production: https://cloud.handpoint.com (PAX DEMO or live merchant)',
    ],
    hardware: [
      'A physical PAX device is required — no virtual terminal.',
      'Request a PAX debug device from your referring Handpoint partner.',
      'Debug devices accept unsigned APKs and connect to staging automatically.',
      'Production PAX devices can also be used — they target the production environment.',
    ],
    authLink: '/reference/authentication',
    hwLink: '/reference/development-hardware',
  },
  'android-pax': {
    auth: [
      'SDK uses an SSK (Shared Secret Key) — one SSK per merchant, passed at SDK initialisation.',
      'DEMO merchant SSK is provided by Handpoint Integration Support for development.',
      'Live merchant SSKs are provisioned per merchant via TMS when the merchant goes live.',
    ],
    hardware: [
      'A physical PAX device is required — no virtual terminal.',
      'Request a PAX debug device from your referring Handpoint partner.',
      'PAX production firmware rejects unsigned APKs — use a debug device during development.',
      'Build against RC candidates provided by Handpoint Integration Support.',
    ],
    authLink: '/reference/authentication',
    hwLink: '/reference/development-hardware',
  },
  'android-hilite': {
    auth: [
      'SDK uses an SSK per merchant, passed at SDK initialisation.',
      'No staging environment for HiLite — development uses a DEMO merchant on production.',
      'DEMO merchant credentials are provided by Handpoint Integration Support.',
    ],
    hardware: [
      'A physical HiLite Bluetooth card reader is required — no virtual device.',
      'Request a HiLite device from your referring Handpoint partner.',
      'HiLite connects via Bluetooth only — no HTTP endpoint or REST API involved.',
      'The device always connects to production; DEMO vs live is determined by the merchant credentials.',
    ],
    authLink: '/reference/authentication',
    hwLink: '/reference/development-hardware',
  },
  'ios-hilite': {
    auth: [
      'SSK per merchant, passed at SDK initialisation.',
      'iOS requires a provisioning profile with the com.datecs.pinpad external accessory protocol.',
      'No staging — uses a DEMO merchant on production.',
      'DEMO merchant credentials from Handpoint Integration Support.',
    ],
    hardware: [
      'A physical HiLite Bluetooth card reader is required.',
      'No staging environment — device always connects to production.',
      'DEMO vs live is determined by the merchant credentials.',
    ],
    authLink: '/reference/authentication',
    hwLink: '/reference/development-hardware',
  },
  'back-office': {
    auth: [
      'Same API key as REST API — pass via ApiKeyCloud header.',
      'Back Office endpoints: https://cloud.handpoint.io (staging) and https://cloud.handpoint.com (prod).',
      'All Back Office operations reference GUIDs from card-present transactions.',
    ],
    hardware: [
      'No terminal required for Back Office operations.',
      'Initial card-present transactions must have been processed to generate the GUIDs you reference.',
    ],
    authLink: '/reference/authentication',
    hwLink: null,
  },
};

// ─── eCommerce prerequisites by integration type ──────────────────────────────

const ECOMM_PREREQS = {
  hosted: {
    auth: [
      'Request a merchantID from Handpoint Integration Support.',
      'A merchantSecret is provided with the merchantID — used for SHA512 request signing.',
      'Signature: SHA512 of all request fields sorted by key, URL-encoded, then concatenated with the secret.',
      'Staging: https://commerce-api.handpoint.com/hosted/ — test cards provided by support.',
    ],
    setup: [
      'No terminal or card reader required.',
      'Define a redirectURL (customer return page) and an optional callbackURL (server-side notification).',
      '3DS v2 is handled automatically by Handpoint — no browser data collection needed on your end.',
      'PCI SAQ A compliant — no card data ever reaches your server.',
    ],
    authLink: '/ecomm/authentication',
    setupLink: '/ecomm/hosted',
  },
  direct: {
    auth: [
      'Request a merchantID from Handpoint Integration Support.',
      'A merchantSecret is provided with the merchantID — used for SHA512 request signing.',
      'Signature: SHA512 of all request fields sorted by key, URL-encoded, then concatenated with the secret.',
      'Staging: https://commerce-api.handpoint.com/direct/ — test cards provided by support.',
    ],
    setup: [
      'No terminal or card reader required.',
      'Collect browser fingerprint data using a JS snippet on your checkout page (required for 3DS v2).',
      'Handle the 3DS ACS redirect: persist threeDSRef, then submit the completion request after ACS posts back.',
      'PCI DSS scope depends on your card collection method — consult your QSA.',
    ],
    authLink: '/ecomm/authentication',
    setupLink: '/ecomm/direct',
  },
};

// ─── Validation tests per feature ────────────────────────────────────────────

const FEATURE_TESTS = {
  'partial-approval': { label: 'Partial Approval', test: 'Present a prepaid card with insufficient balance. Your software must detect the partial-approval response and prompt for split tender to cover the remaining amount.' },
  'reversal':         { label: 'Connection Loss Recovery', test: 'Simulate a connection drop mid-transaction. Your software must query transaction status on reconnect and send an automatic reversal when the outcome is ambiguous. This test also covers app-crash recovery.' },
  'pre-auth':         { label: 'Pre-Auth Lifecycle', test: 'Execute the full lifecycle: initial hold → increase → capture. Also test a pre-auth reversal (release without capturing). Verify the terminal is correctly freed after each step.' },
  'tip-adj':          { label: 'Tip Adjustment', test: 'Perform a backoffice tip adjustment on a completed transaction. Confirm the feature is unavailable on any transaction that already included an on-screen tip.' },
  'remote-sale-token': { label: 'Remote Sale with Card Token', tokenProviderNote: 'ProCharge (EPI) or Cygma — token must store the full PAN and expiry date.', test: 'Retrieve a card token from a past transaction GUID, then process a remote sale using that token. Verify the charge succeeds without any terminal interaction, and that it works for both a one-off card-on-file charge and a scheduled recurring charge.' },
  'partial-reversal': { label: 'Partial Reversal', test: 'Process a sale, then send a partial reversal to reduce the authorized amount before settlement. Confirm the terminal displays the updated amount and the batch reflects the reduced value.' },
  'batching':         { label: 'Batch / EOD Settlement', test: 'Trigger a manual end-of-day batch close via the Back Office API. Confirm all open transactions are settled and the batch report is returned.' },
  'auto-refund':       { label: 'Remote Refund (GUID)', test: 'Refund a transaction using only its GUID — confirm no terminal or card re-presentation is required.' },
  'sale-tokenize':    { label: 'Atomic Sale & Tokenize', test: 'Simulate a token provider failure during a sale — confirm the entire transaction is declined, not just the tokenization step.' },
  'token-guid':       { label: 'Deferred Token Retrieval', test: 'Retrieve a token from the GUID of a completed transaction that was not originally tokenized at time of sale.' },
  'debit-only':       { label: 'Debit-Only Restriction', test: 'Present a credit card to a terminal configured for debit-only — confirm the terminal declines the card and prompts for debit.' },
};

const ECOMM_FEATURE_TESTS = {
  'ecomm-3ds':       { label: '3DS v2 Challenge Flow', test: 'Process a transaction that triggers a 3DS challenge (new card or high-risk amount). Hosted: verify the customer is redirected to the ACS and returned to your redirectURL with the correct result. Direct API: verify browser data collection is complete, the threeDSURL redirect is handled, and the completion request with threeDSRef and threeDSResponse is submitted correctly.' },
  'ecomm-refund':    { label: 'CNP Refund', test: 'Refund a completed transaction using only its transaction reference. Confirm no card re-presentation is required and the amount is correctly credited.' },
  'ecomm-tokenize':  { label: 'Card Tokenization', test: 'Use the VERIFY action to validate and store a card. Retrieve the resulting token and confirm it can be used for a subsequent charge without re-collecting card details.' },
  'ecomm-recurring': { label: 'Recurring Charge', test: 'Process an initial transaction to obtain a token, then process two subsequent recurring charges using only the stored token. Verify no card re-entry is required for subsequent charges.' },
  'ecomm-verify':    { label: 'Card Verification (VERIFY)', test: 'Submit a VERIFY action for a test card. Confirm the card is validated without funds being captured and the response returns code 85 (verification successful).' },
  'ecomm-preauth':   { label: 'Pre-Authorization', test: 'Authorize a hold using the pre-auth action, then capture the final amount. Verify the hold appears and the capture settles correctly.' },
  'ecomm-cof':       { label: 'Card-on-File Charge', test: 'Use a stored card token to process a merchant-initiated unscheduled charge. Confirm the charge succeeds without any customer interaction or card re-entry.' },
};

// ─── Step indicator ───────────────────────────────────────────────────────────

function StepIndicator({ stepLabels, currentStep, onStepClick }) {
  return (
    <div className="wizard-stepper">
      {stepLabels.map((label, i) => {
        const status = i < currentStep ? 'done' : i === currentStep ? 'active' : 'pending';
        const clickable = i < currentStep;
        return (
          <React.Fragment key={i}>
            <div
              className={`wizard-stepper__step wizard-stepper__step--${status}${clickable ? ' wizard-stepper__step--clickable' : ''}`}
              onClick={() => clickable && onStepClick(i)}
              onKeyDown={e => e.key === 'Enter' && clickable && onStepClick(i)}
              role={clickable ? 'button' : undefined}
              tabIndex={clickable ? 0 : undefined}
              title={clickable ? `Go back to ${label}` : undefined}
            >
              <div className="wizard-stepper__dot">
                {status === 'done' ? '✓' : i + 1}
              </div>
              <div className="wizard-stepper__label">{label}</div>
            </div>
            {i < stepLabels.length - 1 && (
              <div className={`wizard-stepper__line wizard-stepper__line--${i < currentStep ? 'done' : 'pending'}`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ─── Feature toggle row ───────────────────────────────────────────────────────

function FeatureRow({ feature, pathId, acquirer, enabled, onToggle }) {
  const supported = isFeatureSupported(feature, pathId, acquirer);
  const unavailable = !supported && !feature.required && feature.capKey !== null;

  return (
    <div
      className={[
        'wizard-feature-row',
        feature.required ? 'wizard-feature-row--required' : '',
        unavailable ? 'wizard-feature-row--unavailable' : '',
        enabled && !feature.required ? 'wizard-feature-row--active' : '',
      ].filter(Boolean).join(' ')}
      onClick={() => !feature.required && !unavailable && onToggle(feature.id)}
      role={feature.required || unavailable ? undefined : 'checkbox'}
      aria-checked={feature.required ? true : enabled}
      tabIndex={feature.required || unavailable ? undefined : 0}
      onKeyDown={e => e.key === 'Enter' && !feature.required && !unavailable && onToggle(feature.id)}
    >
      <div className="wizard-feature-row__toggle">
        <div className={`wizard-feature-row__dot ${feature.required ? 'wizard-feature-row__dot--required' : enabled && !unavailable ? 'wizard-feature-row__dot--on' : 'wizard-feature-row__dot--off'}`}>
          {feature.required || (!unavailable && enabled) ? '✓' : ''}
        </div>
      </div>
      <div className="wizard-feature-row__body">
        <div className="wizard-feature-row__name">
          {feature.label}
          {feature.required && <span className="wizard-feature-badge wizard-feature-badge--required">Required</span>}
          {unavailable && <span className="wizard-feature-badge wizard-feature-badge--na">Not on this path</span>}
          {feature.tokenProviderNote && !unavailable && <span className="wizard-feature-badge wizard-feature-badge--token-req">🔑 Token required</span>}
        </div>
        <div className="wizard-feature-row__desc">{feature.desc}</div>
        {feature.tokenProviderNote && !unavailable && (
          <div className="wizard-feature-row__token-note">Requires: {feature.tokenProviderNote}</div>
        )}
      </div>
    </div>
  );
}

// ─── eCommerce feature toggle row (no capKey greyout logic) ──────────────────

function EcommFeatureRow({ feature, enabled, onToggle }) {
  return (
    <div
      className={[
        'wizard-feature-row',
        feature.required ? 'wizard-feature-row--required' : '',
        enabled && !feature.required ? 'wizard-feature-row--active' : '',
      ].filter(Boolean).join(' ')}
      onClick={() => !feature.required && onToggle(feature.id)}
      role={feature.required ? undefined : 'checkbox'}
      aria-checked={feature.required ? true : enabled}
      tabIndex={feature.required ? undefined : 0}
      onKeyDown={e => e.key === 'Enter' && !feature.required && onToggle(feature.id)}
    >
      <div className="wizard-feature-row__toggle">
        <div className={`wizard-feature-row__dot ${feature.required ? 'wizard-feature-row__dot--required' : enabled ? 'wizard-feature-row__dot--on' : 'wizard-feature-row__dot--off'}`}>
          {feature.required || enabled ? '✓' : ''}
        </div>
      </div>
      <div className="wizard-feature-row__body">
        <div className="wizard-feature-row__name">
          {feature.label}
          {feature.required && <span className="wizard-feature-badge wizard-feature-badge--required">Required</span>}
        </div>
        <div className="wizard-feature-row__desc">{feature.desc}</div>
      </div>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function isFeatureSupported(feature, pathId, acquirer) {
  // Back Office features are server-side REST API calls — always available regardless of terminal path
  if (feature.pathIndependent) return true;
  if (!feature.capKey || !acquirer) return true;
  const cap = acquirer.caps[feature.capKey];
  if (!cap) return false;
  return cap[pathId] === 'public';
}

function isFeatureAvailableForAcquirer(feature, acquirer) {
  if (!feature.capKey || !acquirer) return true;
  const cap = acquirer.caps[feature.capKey];
  if (!cap) return false;
  return Object.values(cap).some(v => v === 'public');
}

function getValidationTests(enabledFeatures, testMap) {
  return enabledFeatures
    .filter(id => testMap[id])
    .map(id => testMap[id]);
}

function getCPDocLinks(pathId, enabledFeatures) {
  const links = [
    { label: 'Authentication guide', to: '/reference/authentication' },
    { label: 'Transaction result object', to: '/reference/transaction-result-object' },
    { label: 'Transaction recovery & status', to: '/reference/transaction-recovery' },
  ];
  if (enabledFeatures.some(f => ['pre-auth', 'preauth-retry'].includes(f))) {
    links.push({ label: 'Pre-Authorization guide', to: '/reference/pre-authorization-guide' });
  }
  if (enabledFeatures.some(f => ['token-guid', 'token-only', 'sale-tokenize', 'remote-sale-token'].includes(f))) {
    links.push({ label: 'Tokenization reference', to: '/reference/tokenization' });
  }
  if (enabledFeatures.some(f => ['remote-sale-token', 'remote-sale-entry', 'tip-adj', 'auto-refund', 'preauth-retry'].includes(f))) {
    links.push({ label: 'Back Office API reference', to: '/reference/back-office' });
  }
  links.push({ label: 'Testing edge cases', to: '/reference/testing-edge-cases' });
  return links;
}

function getEcommDocLinks(ecommType, enabledFeatures) {
  const links = [
    { label: 'Commerce API overview', to: '/ecomm/overview' },
    { label: 'Authentication & signing', to: '/ecomm/authentication' },
  ];
  if (ecommType === 'hosted') links.push({ label: 'Hosted (HPF) integration guide', to: '/ecomm/hosted' });
  if (ecommType === 'direct') links.push({ label: 'Direct API integration guide', to: '/ecomm/direct' });
  if (enabledFeatures.some(f => f.startsWith('ecomm-') && ['ecomm-3ds'].includes(f))) {
    links.push({ label: '3DS v2 implementation guide', to: '/ecomm/3dsv2' });
  }
  if (enabledFeatures.some(f => ['ecomm-tokenize', 'ecomm-recurring', 'ecomm-cof'].includes(f))) {
    links.push({ label: 'Card vaulting & recurring billing', to: '/ecomm/tokenization' });
  }
  links.push({ label: 'Response codes reference', to: '/ecomm/response-codes' });
  links.push({ label: 'Test cards & sandbox', to: '/ecomm/test-cards' });
  return links;
}

// ─── Main component ───────────────────────────────────────────────────────────

const SESSION_KEY  = 'hp-wizard-state';
const LS_PATH_KEY  = 'docusaurus.tab.integration-path';
const LS_ACQ_KEY   = 'handpoint.selected.acquirer';

// Navbar paths don't include 'back-office' — clear the filter in that case.
const NAVBAR_PATH_VALUES = new Set(['cloud-api', 'android-pax', 'android-hilite', 'ios-hilite', 'cordova']);

function syncNavbar(type, value) {
  if (typeof window === 'undefined') return;
  if (type === 'path') {
    const navValue = NAVBAR_PATH_VALUES.has(value) ? value : '';
    if (navValue) localStorage.setItem(LS_PATH_KEY, navValue);
    else localStorage.removeItem(LS_PATH_KEY);
    window.dispatchEvent(new CustomEvent('handpoint:pathChanged', { detail: { path: navValue || null } }));
  } else if (type === 'acquirer') {
    if (value) localStorage.setItem(LS_ACQ_KEY, value);
    else localStorage.removeItem(LS_ACQ_KEY);
    window.dispatchEvent(new CustomEvent('handpoint:acquirerChanged', { detail: { slug: value } }));
  }
}

function loadSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return {};
    const s = JSON.parse(raw);
    if (s.features) s.features = new Set(s.features);
    return s;
  } catch { return {}; }
}

function saveSession(state) {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({
      ...state,
      features: [...state.features],
    }));
  } catch {}
}

export default function IntegrationWizard() {
  const saved = loadSession();

  const [step, setStep]               = useState(saved.step ?? 0);
  const [region, setRegion]           = useState(saved.region ?? null);
  const [paymentMode, setPaymentMode] = useState(saved.paymentMode ?? null);
  const [ecommType, setEcommType]     = useState(saved.ecommType ?? null);
  const [pathId, setPathId]           = useState(saved.pathId ?? null);
  const [acquirerId, setAcquirerId]   = useState(saved.acquirerId ?? null);
  const [features, setFeatures]       = useState(saved.features ?? new Set());

  const persist = (patch) => saveSession({ step, region, paymentMode, ecommType, pathId, acquirerId, features, ...patch });

  // ── Path helpers ──────────────────────────────────────────────────────────

  const isEU     = region === 'eu';
  const isEComm  = isEU && paymentMode === 'ecomm';
  const isCP     = !isEU || paymentMode === 'card-present';

  // EU adds a "Payment Type" step between Region and Integration/eComm
  // EU + Card Present: Region(0) → PayType(1) → Integration(2) → Acquirer(3) → Features(4) → Plan(5)
  // EU + eComm:        Region(0) → PayType(1) → eCommSetup(2) → Features(3) → Plan(4)
  // US/Canada:         Region(0) → Integration(1) → Acquirer(2) → Features(3) → Plan(4)

  const stepLabels = useMemo(() => {
    if (!isEU) return ['Region', 'Integration', 'Acquirer', 'Features', 'Your Plan'];
    if (isEComm) return ['Region', 'Payment Type', 'eComm Setup', 'Features', 'Your Plan'];
    return ['Region', 'Payment Type', 'Integration', 'Acquirer', 'Features', 'Your Plan'];
  }, [isEU, isEComm]);

  const maxStep = stepLabels.length - 1;

  // EU shifts all card-present steps forward by 1
  const offset = isEU ? 1 : 0;

  const showPaymentTypeStep  = step === 1 && isEU;
  const showIntegrationStep  = step === 1 + offset && isCP;
  const showAcquirerStep     = step === 2 + offset && isCP;
  const showFeaturesStep     = (step === 3 + offset && isCP) || (step === 3 && isEComm);
  const showECommSetupStep   = step === 2 && isEComm;
  const showPlanStep         = (step === 4 + offset && isCP) || (step === 4 && isEComm);

  // ── Derived data ──────────────────────────────────────────────────────────

  const acquirer        = ACQUIRERS.find(a => a.id === acquirerId) || null;
  const prereqs         = PATH_PREREQS[pathId] || null;
  const ecommPrereqs    = ecommType ? ECOMM_PREREQS[ecommType] : null;
  const US_ACQUIRERS = new Set(['epi', 'paysafe-tsys']);
  const regionAcquirers = ACQUIRERS.filter(a => {
    if (ACQUIRER_REGIONS[a.id] !== region) return false;
    if (region === 'us-canada') return US_ACQUIRERS.has(a.id);
    return true;
  });

  const allRequiredCPIds = FEATURE_GROUPS.flatMap(g => g.features.filter(f => f.required).map(f => f.id));
  const allRequiredEcommIds = ECOMM_FEATURE_GROUPS.flatMap(g => g.features.filter(f => f.required).map(f => f.id));

  const enabledFeatures = isEComm
    ? [...new Set([...allRequiredEcommIds, ...features])]
    : [...new Set([...allRequiredCPIds, ...features])];

  // ── Navigation ────────────────────────────────────────────────────────────

  const goTo = (s) => { setStep(s); persist({ step: s }); };
  const next = () => { setStep(s => { const n = Math.min(s + 1, maxStep); persist({ step: n }); return n; }); };
  const back = () => { setStep(s => { const n = Math.max(s - 1, 0); persist({ step: n }); return n; }); };

  const selectRegion = (v) => {
    setRegion(v);
    setPaymentMode(null);
    setAcquirerId(null);
    setEcommType(null);
    persist({ region: v, paymentMode: null, acquirerId: null, ecommType: null });
  };

  const toggleFeature = (id) => {
    setFeatures(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      persist({ features: next });
      return next;
    });
  };

  const restart = () => {
    setStep(0); setRegion(null); setPaymentMode(null); setEcommType(null);
    setPathId(null); setAcquirerId(null); setFeatures(new Set());
    saveSession({ step: 0, region: null, paymentMode: null, ecommType: null, pathId: null, acquirerId: null, features: new Set() });
    syncNavbar('path', null); syncNavbar('acquirer', null);
  };

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="integration-wizard">
      <StepIndicator stepLabels={stepLabels} currentStep={step} onStepClick={goTo} />

      {/* ── STEP 0: Region ── */}
      {step === 0 && (
        <div className="wizard-step wizard-step--reveal">
          <div className="wizard-step-label">Which region are you integrating for?</div>
          <div className="wizard-cards wizard-cards--market">
            {REGIONS.map(r => (
              <div
                key={r.value}
                className={`wizard-card${region === r.value ? ' wizard-card--selected' : ''}`}
                onClick={() => { selectRegion(r.value); next(); }}
                role="button" tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && (selectRegion(r.value), next())}
              >
                <div className="wizard-card__icon">{r.flag}</div>
                <div className="wizard-card__title">{r.label}</div>
                <div className="wizard-card__desc">{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── STEP 1 (EU only): Payment Type — Card Present vs eCommerce ── */}
      {showPaymentTypeStep && (
        <div className="wizard-step wizard-step--reveal">
          <div className="wizard-step-label">How will your merchants accept payments?</div>
          <div className="wizard-cards wizard-cards--usecase">
            {PAYMENT_MODES.map(m => (
              <div
                key={m.value}
                className={`wizard-card${paymentMode === m.value ? ' wizard-card--selected' : ''}${m.value === 'ecomm' ? ' wizard-card--ecomm' : ''}`}
                onClick={() => { setPaymentMode(m.value); persist({ paymentMode: m.value }); next(); }}
                role="button" tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && (setPaymentMode(m.value), persist({ paymentMode: m.value }), next())}
              >
                <div className="wizard-card__icon">{m.icon}</div>
                <div className="wizard-card__title">{m.label}</div>
                <div className="wizard-card__desc">{m.desc}</div>
              </div>
            ))}
          </div>
          <button className="wizard-back-btn" onClick={back}>← Back</button>
        </div>
      )}

      {/* ── Integration Path (step 1 for US, step 2 for EU+CP) ── */}
      {showIntegrationStep && (
        <div className="wizard-step wizard-step--reveal">
          <div className="wizard-step-label">How will your software integrate?</div>
          <div className="wizard-cards wizard-cards--usecase">
            {PATHS.map(p => (
              <div
                key={p.value}
                className={`wizard-card${pathId === p.value ? ' wizard-card--selected' : ''}`}
                onClick={() => { setPathId(p.value); persist({ pathId: p.value }); syncNavbar('path', p.value); next(); }}
                role="button" tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && (setPathId(p.value), persist({ pathId: p.value }), syncNavbar('path', p.value), next())}
              >
                <div className="wizard-card__icon">{p.icon}</div>
                <div className="wizard-card__title">{p.label}</div>
                <div className="wizard-card__desc">{p.desc}</div>
              </div>
            ))}
          </div>
          <button className="wizard-back-btn" onClick={back}>← Back</button>
        </div>
      )}

      {/* ── Acquirer (step 2 for US, step 3 for EU+CP) ── */}
      {showAcquirerStep && (
        <div className="wizard-step wizard-step--reveal">
          <div className="wizard-step-label">Which acquirer will you work with?</div>
          <div className="wizard-cards wizard-cards--acquirer">
            {regionAcquirers.map(a => (
              <div
                key={a.id}
                className={`wizard-card${acquirerId === a.id ? ' wizard-card--selected' : ''}`}
                onClick={() => { setAcquirerId(a.id); persist({ acquirerId: a.id }); syncNavbar('acquirer', a.id); next(); }}
                role="button" tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && (setAcquirerId(a.id), persist({ acquirerId: a.id }), syncNavbar('acquirer', a.id), next())}
              >
                <div className="wizard-card__title">{a.name}</div>
                <div className="wizard-card__desc">{a.subtitle}</div>
              </div>
            ))}
          </div>
          <p className="wizard-footer-note">
            Not sure which acquirer? Contact your Handpoint integration engineer or account manager.
          </p>
          <button className="wizard-back-btn" onClick={back}>← Back</button>
        </div>
      )}

      {/* ── eComm Setup — Hosted vs Direct (step 2 for EU+eComm) ── */}
      {showECommSetupStep && (
        <div className="wizard-step wizard-step--reveal">
          <div className="wizard-step-label">How will your integration connect to the Commerce API?</div>
          <p className="wizard-features-note">
            Both options use the same <strong>Handpoint Commerce API</strong> endpoint. The difference is where card data is collected and who handles 3DS.
          </p>
          <div className="wizard-cards wizard-cards--usecase">
            {ECOMM_TYPES.map(t => (
              <div
                key={t.value}
                className={`wizard-card${ecommType === t.value ? ' wizard-card--selected' : ''}`}
                onClick={() => { setEcommType(t.value); persist({ ecommType: t.value }); next(); }}
                role="button" tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && (setEcommType(t.value), persist({ ecommType: t.value }), next())}
              >
                <div className="wizard-card__icon">{t.icon}</div>
                <div className="wizard-card__title">{t.label}</div>
                <div className="wizard-card__desc">{t.desc}</div>
              </div>
            ))}
          </div>
          <button className="wizard-back-btn" onClick={back}>← Back</button>
        </div>
      )}

      {/* ── Features — Card Present path ── */}
      {showFeaturesStep && isCP && (
        <div className="wizard-step wizard-step--reveal">
          <div className="wizard-step-label">Which payment features does your integration need?</div>
          <p className="wizard-features-note">
            Required items are always enabled. Greyed-out items are not supported by{' '}
            <strong>{acquirer?.name}</strong> on the <strong>{PATHS.find(p => p.value === pathId)?.label}</strong> path.
          </p>
          {FEATURE_GROUPS.map(group => (
            <div key={group.id} className="wizard-feature-group">
              <div className="wizard-feature-group__header">
                <span className="wizard-feature-group__icon">{group.icon}</span>
                {group.label}
              </div>
              {group.features
                .filter(f => !f.region    || f.region === region)
                .filter(f => !f.paths     || f.paths.includes(pathId))
                .filter(f => !f.acquirers || f.acquirers.includes(acquirerId))
                .filter(f => f.required   || isFeatureAvailableForAcquirer(f, acquirer))
                .map(feature => (
                  <FeatureRow
                    key={feature.id}
                    feature={feature}
                    pathId={pathId}
                    acquirer={acquirer}
                    enabled={features.has(feature.id) || feature.required}
                    onToggle={toggleFeature}
                  />
                ))}
            </div>
          ))}
          <div className="wizard-step-nav">
            <button className="wizard-back-btn" onClick={back}>← Back</button>
            <button className="wizard-next-btn" onClick={next}>See your plan →</button>
          </div>
        </div>
      )}

      {/* ── Features — eCommerce path ── */}
      {showFeaturesStep && isEComm && (
        <div className="wizard-step wizard-step--reveal">
          <div className="wizard-step-label">Which eCommerce features does your integration need?</div>
          <p className="wizard-features-note">
            Required items are always enabled.{' '}
            {ecommType === 'hosted'
              ? '3DS v2 and security handled automatically by Handpoint — no extra implementation needed.'
              : 'Direct API requires 3DS v2 browser data collection and ACS redirect handling.'}
          </p>
          {ECOMM_FEATURE_GROUPS.map(group => (
            <div key={group.id} className="wizard-feature-group">
              <div className="wizard-feature-group__header">
                <span className="wizard-feature-group__icon">{group.icon}</span>
                {group.label}
              </div>
              {group.features.map(feature => (
                <EcommFeatureRow
                  key={feature.id}
                  feature={feature}
                  enabled={features.has(feature.id) || feature.required}
                  onToggle={toggleFeature}
                />
              ))}
            </div>
          ))}
          <div className="wizard-step-nav">
            <button className="wizard-back-btn" onClick={back}>← Back</button>
            <button className="wizard-next-btn" onClick={next}>See your plan →</button>
          </div>
        </div>
      )}

      {/* ── Plan — Card Present path ── */}
      {showPlanStep && isCP && prereqs && (
        <div className="wizard-step wizard-step--reveal">
          <div className="wizard-step-label">Your integration plan</div>

          <div className="wizard-plan-summary">
            <span className="wizard-plan-chip wizard-plan-chip--region">
              {REGIONS.find(r => r.value === region)?.flag} {REGIONS.find(r => r.value === region)?.label}
            </span>
            <span className="wizard-plan-chip wizard-plan-chip--path">
              {PATHS.find(p => p.value === pathId)?.icon} {PATHS.find(p => p.value === pathId)?.label}
            </span>
            <span className="wizard-plan-chip wizard-plan-chip--acquirer">
              {acquirer?.name}
            </span>
          </div>

          <div className="wizard-plan-section-label">Before you build</div>
          <div className="wizard-nextsteps">
            <div className="wizard-nextstep-card">
              <div className="wizard-nextstep-card__title">🔐 Authentication</div>
              <ul className="wizard-nextstep-card__list">
                {prereqs.auth.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
              <Link className="wizard-nextstep-card__link" to={prereqs.authLink}>Full authentication guide →</Link>
            </div>
            <div className="wizard-nextstep-card">
              <div className="wizard-nextstep-card__title">🔧 Development hardware</div>
              <ul className="wizard-nextstep-card__list">
                {prereqs.hardware.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
              {prereqs.hwLink && (
                <Link className="wizard-nextstep-card__link" to={prereqs.hwLink}>Full hardware guide →</Link>
              )}
            </div>
          </div>

          {getValidationTests(enabledFeatures, FEATURE_TESTS).length > 0 && (
            <>
              <div className="wizard-plan-section-label">Validation tests for certification</div>
              <div className="wizard-validation-list">
                {getValidationTests(enabledFeatures, FEATURE_TESTS).map(t => (
                  <div key={t.label} className="wizard-validation-item">
                    <div className="wizard-validation-item__name">{t.label}</div>
                    {t.tokenProviderNote && (
                      <div className="wizard-validation-item__token-req">
                        🔑 <strong>Token provider required:</strong> {t.tokenProviderNote}
                      </div>
                    )}
                    <div className="wizard-validation-item__desc">{t.test}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="wizard-plan-section-label">Relevant documentation</div>
          <div className="wizard-doc-links">
            {getCPDocLinks(pathId, enabledFeatures).map(l => (
              <Link key={l.to} className="wizard-doc-link" to={l.to}>{l.label} →</Link>
            ))}
          </div>

          {acquirer && (
            <>
              <div className="wizard-plan-section-label" style={{ marginTop: '36px' }}>
                {acquirer.name} — supported capabilities on {PATHS.find(p => p.value === pathId)?.label}
              </div>
              <table className="wizard-acquirer-table">
                <thead>
                  <tr>
                    <th>Operation</th>
                    <th style={{ textAlign: 'center' }}>Supported</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(acquirer.caps).map(op => {
                    const supported = acquirer.caps[op]?.[pathId] === 'public';
                    return (
                      <tr key={op}>
                        <td>{op.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</td>
                        <td style={{ textAlign: 'center' }}>{supported ? '✅' : '❌'}</td>
                        <td style={{ fontSize: '0.85em', color: 'var(--ifm-color-secondary-darkest)' }}>{acquirer.notes?.[op] || ''}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          )}

          <div className="wizard-step-nav" style={{ marginTop: '32px' }}>
            <button className="wizard-back-btn" onClick={back}>← Back</button>
            <button className="wizard-restart-btn" onClick={restart}>Start over</button>
          </div>
        </div>
      )}

      {/* ── Plan — eCommerce path ── */}
      {showPlanStep && isEComm && ecommPrereqs && (
        <div className="wizard-step wizard-step--reveal">
          <div className="wizard-step-label">Your eCommerce integration plan</div>

          <div className="wizard-plan-summary">
            <span className="wizard-plan-chip wizard-plan-chip--region">
              {REGIONS.find(r => r.value === region)?.flag} {REGIONS.find(r => r.value === region)?.label}
            </span>
            <span className="wizard-plan-chip wizard-plan-chip--path">
              {ECOMM_TYPES.find(t => t.value === ecommType)?.icon} {ECOMM_TYPES.find(t => t.value === ecommType)?.label}
            </span>
            <span className="wizard-plan-chip wizard-plan-chip--ecomm">
              🌐 Commerce API
            </span>
          </div>

          <div className="wizard-plan-notice wizard-plan-notice--info">
            ℹ️ Transactions processed through the Commerce API are visible in the Handpoint portal for up to <strong>13 months</strong>.
          </div>

          <div className="wizard-plan-section-label">Before you build</div>
          <div className="wizard-nextsteps">
            <div className="wizard-nextstep-card">
              <div className="wizard-nextstep-card__title">🔐 Authentication & signing</div>
              <ul className="wizard-nextstep-card__list">
                {ecommPrereqs.auth.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
              <Link className="wizard-nextstep-card__link" to={ecommPrereqs.authLink}>Authentication guide →</Link>
            </div>
            <div className="wizard-nextstep-card">
              <div className="wizard-nextstep-card__title">⚙️ Integration setup</div>
              <ul className="wizard-nextstep-card__list">
                {ecommPrereqs.setup.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
              <Link className="wizard-nextstep-card__link" to={ecommPrereqs.setupLink}>
                {ecommType === 'hosted' ? 'Hosted integration guide' : 'Direct API guide'} →
              </Link>
            </div>
          </div>

          {getValidationTests(enabledFeatures, ECOMM_FEATURE_TESTS).length > 0 && (
            <>
              <div className="wizard-plan-section-label">Validation tests for certification</div>
              <div className="wizard-validation-list">
                {getValidationTests(enabledFeatures, ECOMM_FEATURE_TESTS).map(t => (
                  <div key={t.label} className="wizard-validation-item">
                    <div className="wizard-validation-item__name">{t.label}</div>
                    <div className="wizard-validation-item__desc">{t.test}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="wizard-plan-section-label">Relevant documentation</div>
          <div className="wizard-doc-links">
            {getEcommDocLinks(ecommType, enabledFeatures).map(l => (
              <Link key={l.to} className="wizard-doc-link" to={l.to}>{l.label} →</Link>
            ))}
          </div>

          <div className="wizard-step-nav" style={{ marginTop: '32px' }}>
            <button className="wizard-back-btn" onClick={back}>← Back</button>
            <button className="wizard-restart-btn" onClick={restart}>Start over</button>
          </div>
        </div>
      )}

    </div>
  );
}
