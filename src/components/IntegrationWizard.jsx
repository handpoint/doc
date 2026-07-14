import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import { ACQUIRERS } from '@site/src/data/acquirerCaps';

// ─── Region & Path data ───────────────────────────────────────────────────────

const REGIONS = [
  {
    value: 'us-canada',
    label: 'US & Canada',
    flag: '🇺🇸',
    desc: 'TSYS · PAYSAFE · PAYSAFE + Interac · TNS (Interac) · VANTIV',
  },
  {
    value: 'eu',
    label: 'Europe',
    flag: '🇪🇺',
    desc: 'EmerchantPay · Lloyds · Paystrax · TEYA (Borgun)',
  },
];

const PATHS = [
  { value: 'cloud-api',      label: 'REST API',         icon: '☁️',  desc: 'PAX terminal commanded via Handpoint Cloud. Language-agnostic — any platform that makes HTTP requests.' },
  { value: 'android-pax',    label: 'Android (PAX)',    icon: '📱',  desc: 'Native Android app running directly on the PAX payment device.' },
  { value: 'android-hilite', label: 'Android (HiLite)', icon: '🔵',  desc: 'Android phone or tablet paired with a HiLite Bluetooth card reader.' },
  { value: 'ios-hilite',     label: 'iOS (HiLite)',     icon: '📲',  desc: 'iPhone or iPad paired with a HiLite Bluetooth card reader.' },
  { value: 'back-office',    label: 'Back Office API',  icon: '🏦',  desc: 'Server-side only — reversals, tip adjustments, MOTO, and pre-auth captures with no terminal.' },
];

// ─── Acquirer → region mapping (derived from subtitle) ───────────────────────

const ACQUIRER_REGIONS = {
  'tsys':            'us-canada',
  'tsys-tns':        'us-canada',
  'tns':             'us-canada',
  'paysafe-tsys':    'us-canada',
  'vantiv':          'us-canada',
  'omnipay-emp':     'eu',
  'omnipay-lloyds':  'eu',
  'omnipay-paystrax':'eu',
  'teya':            'eu',
};

// ─── Feature groups (adapted from ISV Config Form) ───────────────────────────

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
      { id: 'pre-auth',         label: 'Pre-Authorization',          required: false, capKey: 'pre-auth',         desc: 'Hold + increase + capture flow. Used in hotels, car rental, restaurants with tabs.' },
      { id: 'moto-entry',       label: 'MOTO Entry (on terminal)',   required: false, capKey: 'moto',             desc: 'Staff keys card details on terminal keypad for a customer who is NOT present — phone or mail order CNP.' },
      { id: 'debit-only',       label: 'Debit-Only Acceptance',      required: false, capKey: null,               desc: 'Restrict terminal to debit cards only — credit transactions declined. Configured in TMS.' },
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
    label: 'Backoffice & Remote',
    icon: '🏢',
    features: [
      { id: 'auto-refund',   label: 'Automatic Refund (GUID)',        required: false, capKey: 'refund',                   desc: 'Refund via original transaction GUID — no terminal, no card re-presentation. The equivalent of a MOTO refund in the REST API.' },
      { id: 'moto-remote',   label: 'MOTO Remote (Phone / Mail)',     required: false, capKey: 'moto',                     desc: 'Charge a card provided by phone or mail — fully server-side, no reader involved.' },
      { id: 'moto-token',    label: 'MOTO with Stored Token',         required: false, capKey: 'moto',                     desc: 'Charge a customer using a stored card token instead of entering card details.' },
      { id: 'recurring',     label: 'Recurring / Subscription',       required: false, capKey: 'moto',                     desc: 'Scheduled charges using a stored token — retrieve token from transaction GUID, then charge on schedule.' },
      { id: 'cof',           label: 'Card-on-File Charge',            required: false, capKey: 'moto',                     desc: 'Unscheduled charge of a returning customer using their stored card token.' },
      { id: 'preauth-retry', label: 'Pre-Auth Capture Retry',         required: false, capKey: 'pre-auth-capture-reversal', desc: 'Retry a failed capture using the original auth GUID — no customer re-presence needed.' },
      { id: 'txn-feed',      label: 'TXN Feed API Reconciliation',    required: false, capKey: null,                       desc: 'Query, reconcile, and export transactions via the Handpoint TXN Feed API.' },
    ],
  },
  {
    id: 'tokens',
    label: 'Card Storage & Tokenization',
    icon: '🔑',
    features: [
      { id: 'token-guid',    label: 'Get Token from Transaction GUID', required: false, capKey: 'tokenization', desc: 'Retrieve a card token from any past transaction using its GUID — no new terminal interaction.' },
      { id: 'token-only',    label: 'Tokenize Card Only',              required: false, capKey: 'tokenization', desc: 'Card tapped/dipped at terminal, stored without charging — enrollment, subscription sign-up.' },
      { id: 'sale-tokenize', label: 'Sale & Tokenize (Atomic)',         required: false, capKey: 'tokenization', desc: 'Single call for payment + tokenization. If the token provider fails, the entire transaction fails.' },
    ],
  },
  {
    id: 'special',
    label: 'Special Cards & Acquirer Features',
    icon: '🏷️',
    features: [
      { id: 'closed-loop', label: 'Closed-Loop / Badge Cards', required: false, capKey: null,  desc: 'Whitelisted PAN ranges return the actual card number — used for employee badges, merchant-issued gift cards, loyalty cards.' },
      { id: 'paysafe-sdk', label: 'Paysafe Android SDK Differences', required: false, capKey: null, desc: 'Pre-auth, MOTO, and partial reversals not supported. Void replaces next-day reversal for Interac.' },
      { id: 'interac',     label: 'Interac (Canada)',           required: false, capKey: null,  desc: 'Interac has special requirements around fallback handling and void timing — see Dev Center for Interac compliance documentation.' },
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

// ─── Validation tests per feature ────────────────────────────────────────────

const FEATURE_TESTS = {
  'partial-approval': { label: 'Partial Approval', test: 'Present a prepaid card with insufficient balance. Your software must detect the partial-approval response and prompt for split tender to cover the remaining amount.' },
  'reversal':         { label: 'Connection Loss Recovery', test: 'Simulate a connection drop mid-transaction. Your software must query transaction status on reconnect and send an automatic reversal when the outcome is ambiguous. This test also covers app-crash recovery.' },
  'pre-auth':         { label: 'Pre-Auth Lifecycle', test: 'Execute the full lifecycle: initial hold → increase → capture. Also test a pre-auth reversal (release without capturing). Verify the terminal is correctly freed after each step.' },
  'tip-adj':          { label: 'Tip Adjustment', test: 'Perform a backoffice tip adjustment on a completed transaction. Confirm the feature is unavailable on any transaction that already included an on-screen tip.' },
  'moto-remote':      { label: 'MOTO Transaction', test: 'Complete a phone-order charge entirely through your software — no terminal interaction, no card reader.' },
  'moto-token':       { label: 'MOTO with Token', test: 'Retrieve a token from a past transaction GUID, then process a MOTO charge using that token in place of raw card details.' },
  'recurring':        { label: 'Recurring Charge', test: 'Retrieve a card token from a GUID, store it, then process a MOTO charge on a schedule. Verify that the charge works without any terminal interaction.' },
  'auto-refund':      { label: 'Automatic Refund', test: 'Refund a transaction using only its GUID — confirm no terminal or card re-presentation is required.' },
  'sale-tokenize':    { label: 'Atomic Sale & Tokenize', test: 'Simulate a token provider failure during a sale — confirm the entire transaction is declined, not just the tokenization step.' },
  'token-guid':       { label: 'Deferred Token Retrieval', test: 'Retrieve a token from the GUID of a completed transaction that was not originally tokenized at time of sale.' },
  'debit-only':       { label: 'Debit-Only Restriction', test: 'Present a credit card to a terminal configured for debit-only — confirm the terminal declines the card and prompts for debit.' },
};

// ─── Step indicator ───────────────────────────────────────────────────────────

const STEP_LABELS = ['Region', 'Integration', 'Acquirer', 'Features', 'Your Plan'];

function StepIndicator({ currentStep }) {
  return (
    <div className="wizard-stepper">
      {STEP_LABELS.map((label, i) => {
        const status = i < currentStep ? 'done' : i === currentStep ? 'active' : 'pending';
        return (
          <React.Fragment key={i}>
            <div className={`wizard-stepper__step wizard-stepper__step--${status}`}>
              <div className="wizard-stepper__dot">
                {status === 'done' ? '✓' : i + 1}
              </div>
              <div className="wizard-stepper__label">{label}</div>
            </div>
            {i < STEP_LABELS.length - 1 && (
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
        </div>
        <div className="wizard-feature-row__desc">{feature.desc}</div>
      </div>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function isFeatureSupported(feature, pathId, acquirer) {
  if (!feature.capKey || !acquirer) return true;
  const cap = acquirer.caps[feature.capKey];
  if (!cap) return false;
  return cap[pathId] === 'public';
}

function getValidationTests(enabledFeatures) {
  return enabledFeatures
    .filter(id => FEATURE_TESTS[id])
    .map(id => FEATURE_TESTS[id]);
}

function getDocLinks(pathId, enabledFeatures) {
  const links = [
    { label: 'Authentication guide', to: '/reference/authentication' },
    { label: 'Transaction result object', to: '/reference/transaction-result-object' },
    { label: 'Transaction recovery & status', to: '/reference/transaction-recovery' },
  ];
  if (enabledFeatures.some(f => ['pre-auth', 'preauth-retry'].includes(f))) {
    links.push({ label: 'Pre-Authorization guide', to: '/reference/pre-authorization-guide' });
  }
  if (enabledFeatures.some(f => ['token-guid', 'token-only', 'sale-tokenize', 'moto-token', 'recurring', 'cof'].includes(f))) {
    links.push({ label: 'Tokenization reference', to: '/reference/tokenization' });
  }
  if (enabledFeatures.some(f => ['moto-remote', 'moto-token', 'moto-entry', 'tip-adj', 'auto-refund', 'preauth-retry'].includes(f))) {
    links.push({ label: 'Back Office API reference', to: '/reference/back-office' });
  }
  links.push({ label: 'Full capability matrix', to: '/reference/full-matrix' });
  links.push({ label: 'Testing edge cases', to: '/reference/testing-edge-cases' });
  return links;
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function IntegrationWizard() {
  const [step, setStep]             = useState(0);
  const [region, setRegion]         = useState(null);
  const [pathId, setPathId]         = useState(null);
  const [acquirerId, setAcquirerId] = useState(null);
  const [features, setFeatures]     = useState(new Set());

  const acquirer = ACQUIRERS.find(a => a.id === acquirerId) || null;
  const prereqs  = PATH_PREREQS[pathId] || null;

  const regionAcquirers = ACQUIRERS.filter(a => ACQUIRER_REGIONS[a.id] === region);

  // All required feature IDs pre-seeded
  const allRequiredIds = FEATURE_GROUPS.flatMap(g => g.features.filter(f => f.required).map(f => f.id));
  const enabledFeatures = [...new Set([...allRequiredIds, ...features])];

  const toggleFeature = (id) => {
    setFeatures(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const goTo = (s) => setStep(s);
  const next = () => setStep(s => Math.min(s + 1, 4));
  const back = () => setStep(s => Math.max(s - 1, 0));

  const selectRegion = (v) => {
    setRegion(v);
    setAcquirerId(null);
  };

  return (
    <div className="integration-wizard">
      <StepIndicator currentStep={step} />

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

      {/* ── STEP 1: Integration Path ── */}
      {step === 1 && (
        <div className="wizard-step wizard-step--reveal">
          <div className="wizard-step-label">How will your software integrate?</div>
          <div className="wizard-cards wizard-cards--usecase">
            {PATHS.map(p => (
              <div
                key={p.value}
                className={`wizard-card${pathId === p.value ? ' wizard-card--selected' : ''}`}
                onClick={() => { setPathId(p.value); next(); }}
                role="button" tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && (setPathId(p.value), next())}
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

      {/* ── STEP 2: Acquirer ── */}
      {step === 2 && (
        <div className="wizard-step wizard-step--reveal">
          <div className="wizard-step-label">Which acquirer will you work with?</div>
          <div className="wizard-cards wizard-cards--acquirer">
            {regionAcquirers.map(a => (
              <div
                key={a.id}
                className={`wizard-card${acquirerId === a.id ? ' wizard-card--selected' : ''}`}
                onClick={() => { setAcquirerId(a.id); next(); }}
                role="button" tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && (setAcquirerId(a.id), next())}
              >
                <div className="wizard-card__title">{a.name}</div>
                <div className="wizard-card__desc">{a.subtitle}</div>
              </div>
            ))}
          </div>
          <p className="wizard-footer-note">
            Not sure which acquirer? <Link to="/reference/full-matrix">View the full capability matrix →</Link>
          </p>
          <button className="wizard-back-btn" onClick={back}>← Back</button>
        </div>
      )}

      {/* ── STEP 3: Features ── */}
      {step === 3 && (
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
              {group.features.map(feature => (
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

      {/* ── STEP 4: Plan ── */}
      {step === 4 && prereqs && (
        <div className="wizard-step wizard-step--reveal">
          <div className="wizard-step-label">Your integration plan</div>

          {/* Summary chips */}
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

          {/* Before you build */}
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

          {/* Validation tests */}
          {getValidationTests(enabledFeatures).length > 0 && (
            <>
              <div className="wizard-plan-section-label">Validation tests for certification</div>
              <div className="wizard-validation-list">
                {getValidationTests(enabledFeatures).map(t => (
                  <div key={t.label} className="wizard-validation-item">
                    <div className="wizard-validation-item__name">{t.label}</div>
                    <div className="wizard-validation-item__desc">{t.test}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Doc links */}
          <div className="wizard-plan-section-label">Relevant documentation</div>
          <div className="wizard-doc-links">
            {getDocLinks(pathId, enabledFeatures).map(l => (
              <Link key={l.to} className="wizard-doc-link" to={l.to}>{l.label} →</Link>
            ))}
          </div>

          {/* Acquirer capabilities table */}
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
            <button className="wizard-restart-btn" onClick={() => { setStep(0); setRegion(null); setPathId(null); setAcquirerId(null); setFeatures(new Set()); }}>
              Start over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
