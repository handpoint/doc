import React, {useState, useEffect} from 'react';
import {useHistory, useLocation} from '@docusaurus/router';
import {ACQUIRERS} from '@site/src/data/acquirers';

const PATHS = [
  {value: 'rest-api',       label: 'REST API'},
  {value: 'android-pax',    label: 'Android (PAX)'},
  {value: 'android-hilite', label: 'Android (HiLite)'},
  {value: 'ios-hilite',     label: 'iOS (HiLite)'},
  {value: 'cordova',        label: 'Cordova'},
];

const STORAGE_KEY = 'docusaurus.tab.integration-path';

function broadcast(path) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('handpoint:pathChanged', {detail: {path}}));
  }
}

export default function GlobalFilters() {
  const history = useHistory();
  const location = useLocation();

  // Detect current acquirer from URL
  const currentAcquirerSlug = location.pathname.match(/\/acquirers\/([^/]+)/)?.[1] || '';

  const [selectedPath, setSelectedPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEY) || '';
    }
    return '';
  });

  // Keep in sync when path changes from AcquirerPageHeader or tab clicks
  useEffect(() => {
    const handler = (e) => setSelectedPath(e.detail?.path || '');
    window.addEventListener('handpoint:pathChanged', handler);
    return () => window.removeEventListener('handpoint:pathChanged', handler);
  }, []);

  const handlePathChange = (value) => {
    setSelectedPath(value || '');
    if (typeof window !== 'undefined') {
      if (value) {
        localStorage.setItem(STORAGE_KEY, value);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
      broadcast(value || null);
    }
  };

  const handleAcquirerChange = (slug) => {
    if (slug) history.push(`/acquirers/${slug}`);
  };

  return (
    <div className="navbar-global-filters">

      <div className="navbar-filter-group">
        <label className="navbar-filter-label" htmlFor="nav-acquirer-select">Acquirer</label>
        <select
          id="nav-acquirer-select"
          className="navbar-filter-select"
          value={currentAcquirerSlug}
          onChange={(e) => handleAcquirerChange(e.target.value)}
          aria-label="Select acquirer"
        >
          <option value="">— select —</option>
          {ACQUIRERS.map(a => (
            <option key={a.slug} value={a.slug}>
              {a.name}
            </option>
          ))}
        </select>
      </div>

      <div className="navbar-filter-group">
        <label className="navbar-filter-label" htmlFor="nav-path-select">Integration path</label>
        <select
          id="nav-path-select"
          className="navbar-filter-select"
          value={selectedPath}
          onChange={(e) => handlePathChange(e.target.value)}
          aria-label="Select integration path"
        >
          <option value="">All paths</option>
          {PATHS.map(p => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
      </div>

    </div>
  );
}
