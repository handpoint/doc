import React, {useState, useEffect} from 'react';
import {
  PATH_LABELS,
  CARD_PRESENT_PATHS,
  BACK_OFFICE_PATHS,
  PORTAL_PATHS,
} from '@site/src/data/acquirerCaps';

// Capabilities shown in the summary table — tokenization is intentionally excluded
const CAPABILITY_LABELS = {
  'sale':                       'Sale',
  'refund':                     'Refund',
  'reversal':                   'Reversal',
  'partial-reversal':           'Partial Reversal',
  'tip-adjustment':             'Tip Adjustment',
  'pre-auth':                   'Pre-Authorization',
  'pre-auth-capture-reversal':  'Pre-Auth Capture Reversal',
  'remote-sale':                'Remote Sale (no reader)',
  'batching':       'Batch Operations (Close / Summary / Detail)',
  'money-remittance':           'Money Remittance',
  'void':                       'Void',
};

const DISPLAY_ORDER = Object.keys(CAPABILITY_LABELS);

// The global integration-path selector offers one flat "Cordova" / "Windows SDK"
// option each, but the underlying capability data models them as two distinct
// connectivity modes. Expand the unified selection to both real data columns.
const PATH_EXPANSION = {
  'cordova':     ['cordova-pax', 'cordova-hilite'],
  'windows-sdk': ['windows-sdk-pax', 'windows-sdk-bt'],
};

const STORAGE_KEY = 'docusaurus.tab.integration-path';

function cellIcon(value) {
  if (value === 'public') return '✅';
  return '❌';
}

// Translate YAML-format _caps keys (cordova, windows-sdk, backoffice) to the
// split-path keys that acquirerCaps.js and PATH_LABELS expect. If the data is
// already in split-path format (e.g. from acquirerCaps.js), this is a no-op.
function normalizeCaps(capabilities) {
  const result = {};
  for (const [cap, pathMap] of Object.entries(capabilities)) {
    const m = { ...pathMap };
    if ('cordova' in m) {
      m['cordova-pax'] = m['cordova-pax'] ?? m['cordova'];
      m['cordova-hilite'] = m['cordova-hilite'] ?? m['cordova'];
      delete m['cordova'];
    }
    if ('windows-sdk' in m) {
      m['windows-sdk-pax'] = m['windows-sdk-pax'] ?? m['windows-sdk'];
      m['windows-sdk-bt']  = m['windows-sdk-bt']  ?? m['windows-sdk'];
      delete m['windows-sdk'];
    }
    if ('backoffice' in m) {
      m['back-office'] = m['back-office'] ?? m['backoffice'];
      delete m['backoffice'];
    }
    result[cap] = m;
  }
  return result;
}

export default function CapabilitySummary({capabilities}) {
  const normalizedCaps = normalizeCaps(capabilities);
  const [selectedPath, setSelectedPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEY) || '';
    }
    return '';
  });

useEffect(() => {
    const handlePathChange = (e) => {
      // Use nullish coalescing so empty string ('all paths') isn't replaced by a default
      setSelectedPath(e.detail?.path ?? '');
    };
    window.addEventListener('handpoint:pathChanged', handlePathChange);
    return () => window.removeEventListener('handpoint:pathChanged', handlePathChange);
  }, []);

  // Empty selectedPath means "All paths" — expand to all card-present columns.
  // A unified Cordova/Windows SDK selection expands to its real split data columns.
  const cardPresentCols = selectedPath === ''
    ? CARD_PRESENT_PATHS
    : (PATH_EXPANSION[selectedPath] || [selectedPath]);

  // Paysafe Portal column only shown when this acquirer has at least one capability on that path
  const hasPortal = PORTAL_PATHS.some(p =>
    DISPLAY_ORDER.some(cap => normalizedCaps[cap] && normalizedCaps[cap][p] === 'public')
  );
  const pathsToShow = Array.from(new Set([...cardPresentCols, ...BACK_OFFICE_PATHS, ...(hasPortal ? PORTAL_PATHS : [])]));

  // Only show capability rows supported on at least one visible path
  const visibleCaps = DISPLAY_ORDER.filter(cap => {
    if (!normalizedCaps[cap]) return false;
    return pathsToShow.some(p => (normalizedCaps[cap] || {})[p] === 'public');
  });

  return (
    <div className="capability-summary">
      {visibleCaps.length === 0 ? (
        <p className="capability-summary-empty">
          No capabilities supported on this integration path.
        </p>
      ) : (
        <table className="capability-summary-table">
          <thead>
            <tr>
              <th>Capability</th>
              {pathsToShow.map((p, i) => {
                const isFirstBackOffice = BACK_OFFICE_PATHS.includes(p) && (i === 0 || !BACK_OFFICE_PATHS.includes(pathsToShow[i - 1]));
                const isFirstPortal     = PORTAL_PATHS.includes(p)      && (i === 0 || !PORTAL_PATHS.includes(pathsToShow[i - 1]));
                return (
                  <th
                    key={p}
                    className={['cap-col', isFirstBackOffice ? 'cap-col--backoffice-start' : '', isFirstPortal ? 'cap-col--portal-start' : ''].filter(Boolean).join(' ')}
                  >
                    {PATH_LABELS[p] || p}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {visibleCaps.map(cap => (
              <tr key={cap}>
                <td className="cap-label">{CAPABILITY_LABELS[cap]}</td>
                {pathsToShow.map((p, i) => {
                  const isFirstBackOffice = BACK_OFFICE_PATHS.includes(p) && (i === 0 || !BACK_OFFICE_PATHS.includes(pathsToShow[i - 1]));
                  const isFirstPortal     = PORTAL_PATHS.includes(p)      && (i === 0 || !PORTAL_PATHS.includes(pathsToShow[i - 1]));
                  return (
                    <td
                      key={p}
                      className={['cap-cell', isFirstBackOffice ? 'cap-col--backoffice-start' : '', isFirstPortal ? 'cap-col--portal-start' : ''].filter(Boolean).join(' ')}
                    >
                      {cellIcon((normalizedCaps[cap] || {})[p])}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {hasPortal && (
        <p className="capability-summary-note">
          <small>
            <strong>Paysafe Portal</strong> — CNP refund performed directly via Paysafe's Cards API, outside Handpoint. Handpoint has no record of portal-processed transactions. Use the <code>eftTransactionID</code> from <code>TransactionResult</code> as Paysafe's <code>MerchantRefNum</code>. Wait 24h for settlement, then retrieve the auth by MerchantRefNum and submit the refund using Paysafe's TXN ID. See the Refund section below for full steps.
          </small>
        </p>
      )}
    </div>
  );
}

