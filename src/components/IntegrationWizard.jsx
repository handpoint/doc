import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import { ACQUIRER_DETAILS } from '@site/src/data/acquirerDetails';

const MARKETS = [
  {
    value: 'us-canada',
    label: 'United States & Canada',
    description: 'TSYS, PAYSAFE, PAYSAFE + Interac, TNS (Interac), VANTIV (Worldpay)',
  },
  {
    value: 'eu',
    label: 'Europe',
    description: 'EmerchantPay, Lloyds, Paystrax, TEYA (Borgun)',
  },
];

const USE_CASES = [
  {
    value: 'cloud',
    icon: '🖥️',
    label: 'Cloud (POS → PAX)',
    description: 'Your POS system runs on a separate device and commands a PAX terminal over the Handpoint Cloud.',
    primaryPaths: ['cloud-api'],
    recommendation: {
      primary: {
        label: 'REST API',
        description: 'Your POS application calls the Handpoint Cloud API to command the PAX terminal. Language-agnostic — any platform that can make HTTP requests works.',
      },
      secondary: {
        label: 'Android SDK (PAX)',
        description: 'Alternative: build a native Android POS app that communicates with the PAX terminal via Bluetooth or local network using the Android SDK.',
      },
    },
    nextSteps: {
      auth: {
        title: 'Authentication — REST API',
        points: [
          'Pass your API key in every request using the ApiKeyCloud header.',
          'Credentials are per-merchant — one API key per merchant account.',
          'Use https://cloud.handpoint.io for PAX debug devices (staging).',
          'Use https://cloud.handpoint.com for PAX production devices (DEMO or live merchant).',
        ],
      },
      hardware: {
        title: 'Development hardware',
        points: [
          'A physical PAX device is required — there is no virtual terminal.',
          'Request a PAX debug device from your referring partner.',
          'Debug devices accept unsigned APKs and connect to the staging environment automatically.',
          'Production PAX devices can also be used — they target the production environment.',
        ],
      },
    },
  },
  {
    value: 'handheld',
    icon: '📱',
    label: 'Handheld (PAX native)',
    description: 'Build a native Android app that runs directly on the PAX payment device.',
    primaryPaths: ['android-pax'],
    recommendation: {
      primary: {
        label: 'Android SDK (PAX)',
        description: 'Build a native Android app using the Handpoint Android SDK. The app runs on the PAX device and controls all terminal operations directly.',
      },
    },
    nextSteps: {
      auth: {
        title: 'Authentication — Android SDK',
        points: [
          'The SDK uses an SSK (Shared Secret Key) — one SSK per merchant, passed at SDK initialisation.',
          'DEMO merchant SSK is provided by Handpoint Integration Support for development.',
          'Live merchant SSKs are provisioned per merchant via TMS when the merchant goes live.',
        ],
      },
      hardware: {
        title: 'Development hardware',
        points: [
          'A physical PAX device is required — there is no virtual terminal.',
          'Request a PAX debug device from your referring partner.',
          'PAX production firmware rejects unsigned APKs — use a debug device during development.',
          'Build against RC candidates provided by Handpoint Integration Support, not the public release.',
        ],
      },
    },
  },
  {
    value: 'bluetooth',
    icon: '🔵',
    label: 'Bluetooth (HiLite)',
    description: 'A phone or tablet app connects to a HiLite card reader over Bluetooth.',
    primaryPaths: ['android-hilite', 'ios-hilite'],
    recommendation: {
      primary: {
        label: 'Android (HiLite) or iOS (HiLite)',
        description: 'A mobile app on an Android or iOS device pairs with the HiLite Bluetooth card reader. Use the Android SDK for Android apps or the iOS SDK for iPhone/iPad apps.',
      },
    },
    nextSteps: {
      auth: {
        title: 'Authentication — HiLite SDK',
        points: [
          'The SDK uses an SSK (Shared Secret Key) — one SSK per merchant, passed at SDK initialisation.',
          'iOS additionally requires a provisioning profile that includes the com.datecs.pinpad external accessory protocol.',
          'There is no staging environment for HiLite — development uses a DEMO merchant on production.',
          'DEMO merchant credentials are provided by Handpoint Integration Support.',
        ],
      },
      hardware: {
        title: 'Development hardware',
        points: [
          'A physical HiLite card reader is required — there is no virtual device.',
          'Request a HiLite device from your referring partner.',
          'HiLite connects via Bluetooth only — no REST API or HTTP endpoint involved.',
          'The HiLite device always connects to the production environment; the DEMO vs live distinction is in the merchant credentials.',
        ],
      },
    },
  },
];

const CAPABILITY_LABELS = {
  'sale':                      'Sale',
  'refund':                    'Refund',
  'reversal':                  'Reversal',
  'partial-reversal':          'Partial Reversal',
  'tip-adjustment':            'Tip Adjustment',
  'pre-auth':                  'Pre-Authorization',
  'pre-auth-capture-reversal': 'Pre-Auth Capture Reversal',
  'moto':                      'MOTO',
  'batching':                  'Batching',
  'money-remittance':          'Money Remittance',
  'void':                      'Void',
};

function getSupportedCapabilities(capabilities, paths) {
  return Object.entries(CAPABILITY_LABELS)
    .filter(([key]) => {
      const cap = capabilities[key];
      if (!cap) return false;
      return paths.some(p => cap[p] === 'public');
    })
    .map(([, label]) => label);
}

function NextStepCard({ title, points, link, linkLabel }) {
  return (
    <div className="wizard-nextstep-card">
      <div className="wizard-nextstep-card__title">{title}</div>
      <ul className="wizard-nextstep-card__list">
        {points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
      {link && (
        <Link className="wizard-nextstep-card__link" to={link}>{linkLabel} →</Link>
      )}
    </div>
  );
}

export default function IntegrationWizard() {
  const [market, setMarket] = useState(null);
  const [useCase, setUseCase] = useState(null);

  const selectedUseCase = USE_CASES.find(u => u.value === useCase);
  const selectedMarket = MARKETS.find(m => m.value === market);

  const filteredAcquirers = market && selectedUseCase
    ? ACQUIRER_DETAILS.filter(a => a.markets.includes(market))
    : [];

  const handleMarketSelect = (value) => {
    setMarket(value);
    setUseCase(null);
  };

  return (
    <div className="integration-wizard">

      {/* Step 1: Market */}
      <div className="wizard-step">
        <div className="wizard-step-label">Step 1 — Select your market</div>
        <div className="wizard-cards wizard-cards--market">
          {MARKETS.map(m => (
            <div
              key={m.value}
              className={`wizard-card${market === m.value ? ' wizard-card--selected' : ''}`}
              onClick={() => handleMarketSelect(m.value)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && handleMarketSelect(m.value)}
            >
              <div className="wizard-card__title">{m.label}</div>
              <div className="wizard-card__desc">{m.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Step 2: Integration type */}
      {market && (
        <div className="wizard-step wizard-step--reveal" key={`usecase-${market}`}>
          <div className="wizard-step-label">Step 2 — How will you integrate?</div>
          <div className="wizard-cards wizard-cards--usecase">
            {USE_CASES.map(u => (
              <div
                key={u.value}
                className={`wizard-card${useCase === u.value ? ' wizard-card--selected' : ''}`}
                onClick={() => setUseCase(u.value)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setUseCase(u.value)}
              >
                <div className="wizard-card__icon">{u.icon}</div>
                <div className="wizard-card__title">{u.label}</div>
                <div className="wizard-card__desc">{u.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Results */}
      {market && useCase && selectedUseCase && (
        <div className="wizard-step wizard-step--reveal" key={`results-${market}-${useCase}`}>

          {/* Integration path recommendation */}
          <div className="wizard-step-label">Your integration path</div>

          <div className="wizard-path-banner wizard-path-banner--primary">
            <div className="wizard-path-banner__header">
              <span className="wizard-path-banner__name">{selectedUseCase.recommendation.primary.label}</span>
              <span className="wizard-path-banner__badge">Recommended</span>
            </div>
            <p className="wizard-path-banner__desc">{selectedUseCase.recommendation.primary.description}</p>
          </div>

          {selectedUseCase.recommendation.secondary && (
            <div className="wizard-path-banner wizard-path-banner--secondary">
              <div className="wizard-path-banner__header">
                <span className="wizard-path-banner__name">{selectedUseCase.recommendation.secondary.label}</span>
                <span className="wizard-path-banner__badge wizard-path-banner__badge--alt">Alternative</span>
              </div>
              <p className="wizard-path-banner__desc">{selectedUseCase.recommendation.secondary.description}</p>
            </div>
          )}

          {/* Acquirer table */}
          <div className="wizard-step-label" style={{marginTop: '28px'}}>
            Available acquirers — {selectedMarket?.label}
          </div>

          <table className="wizard-acquirer-table">
            <thead>
              <tr>
                <th>Acquirer</th>
                <th>Card brands</th>
                <th>Capabilities on this path</th>
              </tr>
            </thead>
            <tbody>
              {filteredAcquirers.map(a => {
                const caps = getSupportedCapabilities(a.capabilities, selectedUseCase.primaryPaths);
                return (
                  <tr key={a.slug}>
                    <td><Link to={`/acquirers/${a.slug}`}>{a.name}</Link></td>
                    <td className="wizard-acquirer-table__brands">{a.cardBrands.join(', ')}</td>
                    <td>{caps.length > 0 ? caps.join(' · ') : '—'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <p className="wizard-footer-note">
            Click an acquirer to see full implementation details and code examples, or{' '}
            <Link to="/reference/full-matrix">view the complete capability matrix →</Link>
          </p>

          {/* Authentication & hardware */}
          <div className="wizard-step-label" style={{marginTop: '36px'}}>Before you build</div>
          <div className="wizard-nextsteps">
            <NextStepCard
              title={selectedUseCase.nextSteps.auth.title}
              points={selectedUseCase.nextSteps.auth.points}
              link="/reference/authentication"
              linkLabel="Full authentication guide"
            />
            <NextStepCard
              title={selectedUseCase.nextSteps.hardware.title}
              points={selectedUseCase.nextSteps.hardware.points}
              link="/reference/development-hardware"
              linkLabel="Full hardware guide"
            />
          </div>

        </div>
      )}

    </div>
  );
}
