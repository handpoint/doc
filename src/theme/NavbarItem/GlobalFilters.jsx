import React, {useState, useEffect} from 'react';
import {useHistory, useLocation} from '@docusaurus/router';
import {ACQUIRERS} from '@site/src/data/acquirers';

const PATHS = [
  {value: 'cloud-api',      label: 'Cloud API'},
  {value: 'android-pax',    label: 'Android (PAX)'},
  {value: 'android-hilite', label: 'Android (HiLite)', sdkVersion: '7.1004.3'},
  {value: 'ios-hilite',     label: 'iOS (HiLite)'},
  {value: 'cordova',        label: 'Cordova'},
];

const PATH_KEY     = 'docusaurus.tab.integration-path';
const ACQUIRER_KEY = 'handpoint.selected.acquirer';

function broadcast(path) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('handpoint:pathChanged', {detail: {path}}));
  }
}

export default function GlobalFilters() {
  const history  = useHistory();
  const location = useLocation();

  // Detect current acquirer from URL
  const urlAcquirerSlug = location.pathname.match(/\/acquirers\/([^/]+)/)?.[1] || '';

  // Acquirer state — persists via localStorage even on non-acquirer pages
  const [selectedAcquirer, setSelectedAcquirer] = useState(() => {
    if (typeof window !== 'undefined') {
      return urlAcquirerSlug || localStorage.getItem(ACQUIRER_KEY) || '';
    }
    return urlAcquirerSlug || '';
  });

  // Integration path state — persists via localStorage
  const [selectedPath, setSelectedPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(PATH_KEY) || '';
    }
    return '';
  });

  // When URL changes to an acquirer page, update stored acquirer
  useEffect(() => {
    if (urlAcquirerSlug) {
      setSelectedAcquirer(urlAcquirerSlug);
      if (typeof window !== 'undefined') {
        localStorage.setItem(ACQUIRER_KEY, urlAcquirerSlug);
      }
    }
  }, [urlAcquirerSlug]);

  // On EVERY page navigation: re-broadcast the current path so newly mounted
  // components (CapabilitySummary, AcquirerPageHeader, etc.) pick up the selection
  useEffect(() => {
    const t = setTimeout(() => {
      if (selectedPath) broadcast(selectedPath);
    }, 80);  // small delay lets new page components mount and attach listeners
    return () => clearTimeout(t);
  }, [location.pathname, selectedPath]);

  // Keep in sync when path changes from AcquirerPageHeader or tab clicks on the page
  useEffect(() => {
    const handler = (e) => {
      const path = e.detail?.path || '';
      setSelectedPath(path);
      if (typeof window !== 'undefined') {
        if (path) localStorage.setItem(PATH_KEY, path);
        else localStorage.removeItem(PATH_KEY);
      }
    };
    window.addEventListener('handpoint:pathChanged', handler);
    return () => window.removeEventListener('handpoint:pathChanged', handler);
  }, []);

  const handlePathChange = (value) => {
    const path = value || '';
    setSelectedPath(path);
    if (typeof window !== 'undefined') {
      if (path) localStorage.setItem(PATH_KEY, path);
      else localStorage.removeItem(PATH_KEY);
    }
    broadcast(path);
  };

  const handleAcquirerChange = (slug) => {
    setSelectedAcquirer(slug);
    if (typeof window !== 'undefined') {
      if (slug) localStorage.setItem(ACQUIRER_KEY, slug);
      else localStorage.removeItem(ACQUIRER_KEY);
      window.dispatchEvent(new CustomEvent('handpoint:acquirerChanged', {detail: {slug}}));
    }
    // On the full-matrix page, filter in-place instead of navigating
    if (location.pathname.includes('full-matrix')) return;
    if (slug) history.push(`/acquirers/${slug}`);
  };

  return (
    <div className="navbar-global-filters">

      <div className="navbar-filter-group">
        <label className="navbar-filter-label" htmlFor="nav-acquirer-select">Acquirer</label>
        <select
          id="nav-acquirer-select"
          className="navbar-filter-select"
          value={selectedAcquirer}
          onChange={(e) => handleAcquirerChange(e.target.value)}
          aria-label="Select acquirer"
        >
          <option value="">ALL</option>
          {ACQUIRERS.map(a => (
            <option key={a.slug} value={a.slug}>{a.name}</option>
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
        {PATHS.find(p => p.value === selectedPath)?.sdkVersion && (
          <span className="navbar-filter-version">
            Last stable SDK v{PATHS.find(p => p.value === selectedPath).sdkVersion}
          </span>
        )}
      </div>

    </div>
  );
}
