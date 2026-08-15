import React, {useState, useEffect} from 'react';

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

const PATH_LABELS = {
  'cloud-api':       'Cloud API',
  'android-pax':     'Android (PAX)',
  'android-hilite':  'Android (HiLite)',
  'ios-hilite':      'iOS (HiLite)',
  'cordova':         'Cordova',
  'javascript-sdk':  'JavaScript SDK',
  'windows-sdk':     'Windows SDK',
  'back-office':     'REST API (Back Office)',
  'backoffice':      'Backoffice',
  'paysafe-portal':  'Paysafe Portal',
};

const CARD_PRESENT_PATHS = ['cloud-api', 'android-pax', 'android-hilite', 'ios-hilite', 'cordova', 'javascript-sdk', 'windows-sdk'];
const BACK_OFFICE_PATHS  = ['back-office', 'backoffice'];
const PORTAL_PATHS       = ['paysafe-portal'];
const STORAGE_KEY = 'docusaurus.tab.integration-path';

function cellIcon(value) {
  if (value === 'public') return '✅';
  return '❌';
}

export default function CapabilitySummary({capabilities}) {
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

  // Empty selectedPath means "All paths" — expand to all card-present columns
  const cardPresentCols = selectedPath === '' ? CARD_PRESENT_PATHS : [selectedPath];

  // Paysafe Portal column only shown when this acquirer has at least one capability on that path
  const hasPortal = PORTAL_PATHS.some(p =>
    DISPLAY_ORDER.some(cap => capabilities[cap] && capabilities[cap][p] === 'public')
  );
  const pathsToShow = [...new Set([...cardPresentCols, ...BACK_OFFICE_PATHS, ...(hasPortal ? PORTAL_PATHS : [])])];

  // Only show capability rows supported on at least one visible path
  const visibleCaps = DISPLAY_ORDER.filter(cap => {
    if (!capabilities[cap]) return false;
    return pathsToShow.some(p => (capabilities[cap] || {})[p] === 'public');
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
                      {cellIcon((capabilities[cap] || {})[p])}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedPath === 'cloud-api' && (
        <p className="capability-summary-note">
          <small>
            All Cloud API operations (except Back Office) command a PAX terminal via the Handpoint Cloud.
          </small>
        </p>
      )}
      <p className="capability-summary-note">
        <small>
          <strong>Backoffice</strong> — REST API operations sent directly to the payment gateway, bypassing the terminal SDK. Transactions do not appear in the device app transaction history. Reversal (<code>POST /reversal</code>) is available to all acquirers. Sale and refund require card-present at the terminal and are not available via Backoffice. Remote Sale (MOTO) is a separate server-side capability that requires merchant onboarding.
        </small>
      </p>
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

