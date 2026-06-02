import React, {useState, useEffect} from 'react';

// Capabilities shown in the summary table — tokenization is intentionally excluded
const CAPABILITY_LABELS = {
  'sale':             'Sale',
  'refund':           'Refund',
  'reversal':         'Reversal',
  'partial-reversal': 'Partial Reversal',
  'tip-adjustment':   'Tip Adjustment',
  'pre-auth':         'Pre-Authorization',
  'moto':             'MOTO (no reader)',
  'batching':         'Batch Close (no reader)',
  'money-remittance': 'Money Remittance',
  'void':             'Void',
};

const DISPLAY_ORDER = Object.keys(CAPABILITY_LABELS);

const PATH_LABELS = {
  'rest-api':       'REST API',
  'android-pax':    'Android (PAX)',
  'android-hilite': 'Android (HiLite)',
  'ios-hilite':     'iOS (HiLite)',
  'cordova':        'Cordova',
};

const ALL_PATHS = Object.keys(PATH_LABELS);
const STORAGE_KEY = 'docusaurus.tab.integration-path';

function cellIcon(value) {
  if (value === 'public') return '✅';
  if (value === 'coming-soon') return '🔜';
  return '❌';
}

/**
 * Dynamic capability summary table. When an integration path is selected via
 * the path dropdown or any code block tab, the table filters to show only that
 * path's supported capabilities.
 *
 * @param {{capabilities: Object}} props
 */
export default function CapabilitySummary({capabilities}) {
  const [selectedPath, setSelectedPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEY) || null;
    }
    return null;
  });

  useEffect(() => {
    // Listen for path changes broadcast by AcquirerPageHeader
    const handlePathChange = (e) => {
      setSelectedPath(e.detail?.path || null);
    };
    window.addEventListener('handpoint:pathChanged', handlePathChange);
    return () => window.removeEventListener('handpoint:pathChanged', handlePathChange);
  }, []);

  const pathsToShow = selectedPath ? [selectedPath] : ALL_PATHS;

  // Only show capabilities visible for the displayed paths (+ exclude tokenization)
  const visibleCaps = DISPLAY_ORDER.filter(cap => {
    if (!capabilities[cap]) return false;
    return pathsToShow.some(p => {
      const v = (capabilities[cap] || {})[p];
      return v === 'public' || v === 'coming-soon';
    });
  });

  const handleClearFilter = () => {
    setSelectedPath(null);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('handpoint:pathChanged', {detail: {path: null}}));
    }
  };

  return (
    <div className="capability-summary">
      {selectedPath && (
        <div className="capability-summary-filter-bar">
          <span>
            Showing capabilities for{' '}
            <strong>{PATH_LABELS[selectedPath] || selectedPath}</strong>
          </span>
          <button
            className="capability-summary-clear-btn"
            onClick={handleClearFilter}
            title="Show all integration paths"
          >
            Show all paths
          </button>
        </div>
      )}

      {visibleCaps.length === 0 ? (
        <p className="capability-summary-empty">
          No capabilities supported on this integration path.
        </p>
      ) : (
        <table className="capability-summary-table">
          <thead>
            <tr>
              <th>Capability</th>
              {pathsToShow.map(p => (
                <th key={p} className={`cap-col${selectedPath === p ? ' cap-col--active' : ''}`}>
                  {PATH_LABELS[p] || p}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleCaps.map(cap => (
              <tr key={cap}>
                <td className="cap-label">{CAPABILITY_LABELS[cap]}</td>
                {pathsToShow.map(p => (
                  <td key={p} className="cap-cell">
                    {cellIcon((capabilities[cap] || {})[p])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedPath === 'rest-api' && (
        <p className="capability-summary-note">
          <small>
            MOTO and Batch Close are server-side operations — no physical terminal required.
            All other operations command a PAX terminal via the Handpoint Cloud.
          </small>
        </p>
      )}
    </div>
  );
}
