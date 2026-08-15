import React, {useState, useEffect} from 'react';

const STORAGE_KEY = 'docusaurus.tab.integration-path';

const PATH_LABELS = {
  'cloud-api':      'Cloud API',
  'android-pax':    'Android (PAX)',
  'android-hilite': 'Android (HiLite)',
  'ios-hilite':     'iOS (HiLite)',
  'cordova':        'Cordova',
  'javascript-sdk': 'JavaScript SDK',
  'windows-sdk':    'Windows (.NET)',
  'backoffice':     'Backoffice',
};

/**
 * Collapsible flavor section.
 *
 * The h3 heading with anchor lives ABOVE this component in the generated MDX.
 * The summary row shows: a short description + path chips.
 *
 * When a path is selected that isn't in `paths`, renders a compact
 * "Not supported for [path]" notice so the heading isn't orphaned.
 *
 * Props:
 *   description — one-liner shown in the summary, e.g. "On-device · card-present"
 *   paths       — array of supported path keys, e.g. ["cloud-api","android-pax"]
 *   children    — MDX content
 */
export default function FlavorSection({description, paths, children}) {
  const [selectedPath, setSelectedPath] = useState(() => {
    if (typeof window !== 'undefined') return localStorage.getItem(STORAGE_KEY) || '';
    return '';
  });

  useEffect(() => {
    const handler = (e) => setSelectedPath(e.detail?.path ?? '');
    window.addEventListener('handpoint:pathChanged', handler);
    return () => window.removeEventListener('handpoint:pathChanged', handler);
  }, []);

  if (selectedPath && paths && !paths.includes(selectedPath)) {
    return (
      <div className="flavor-section flavor-section--not-supported">
        {description && <span className="flavor-section__description">{description}</span>}
        <span className="flavor-section__not-supported-text">
          Not supported for {PATH_LABELS[selectedPath] || selectedPath}
        </span>
      </div>
    );
  }

  const pathChips = paths
    ? paths.map(p => (
        <span key={p} className="flavor-section__chip">
          {PATH_LABELS[p] || p}
        </span>
      ))
    : null;

  return (
    <details className="flavor-section">
      <summary className="flavor-section__summary">
        {description && <span className="flavor-section__description">{description}</span>}
        {pathChips && <span className="flavor-section__chips">{pathChips}</span>}
      </summary>
      <div className="flavor-section__body">{children}</div>
    </details>
  );
}
