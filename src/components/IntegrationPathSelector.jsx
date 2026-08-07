import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';

const STORAGE_KEY = 'docusaurus.tab.integration-path';

const PATHS = [
  { value: 'cloud-api',      tabValue: 'cloud-api',      label: 'REST API' },
  { value: 'android-pax',    tabValue: 'android-pax',    label: 'Android (PAX)' },
  { value: 'android-hilite', tabValue: 'android-hilite', label: 'Android (HiLite)' },
  { value: 'ios-hilite',     tabValue: 'ios-hilite',     label: 'iOS (HiLite)' },
  { value: 'cordova',        tabValue: 'cordova',        label: 'Cordova' },
  { value: 'back-office',    tabValue: 'cloud-api',      label: 'Back Office' },
];

function getStoredValue() {
  if (typeof window === 'undefined') return 'cloud-api';
  return localStorage.getItem(STORAGE_KEY) || 'cloud-api';
}

function setStoredValue(tabValue, oldValue) {
  localStorage.setItem(STORAGE_KEY, tabValue);
  try {
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: STORAGE_KEY,
        newValue: tabValue,
        oldValue,
        storageArea: window.localStorage,
      })
    );
  } catch (_) {
    // StorageEvent constructor not supported in some environments
  }
}

export function IntegrationPathSelector() {
  const [selected, setSelected] = useState('cloud-api');

  useEffect(() => {
    setSelected(getStoredValue());

    const handler = (e) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        // Map tab value back to selector value
        const match = PATHS.find((p) => p.tabValue === e.newValue);
        if (match) setSelected(match.value);
      }
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    const path = PATHS.find((p) => p.value === val);
    if (!path) return;
    setSelected(val);
    setStoredValue(path.tabValue, localStorage.getItem(STORAGE_KEY));
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        flexWrap: 'wrap',
        padding: '0.6rem 1rem',
        borderRadius: '6px',
        border: '1px solid var(--ifm-color-emphasis-300)',
        background: 'var(--ifm-background-surface-color)',
        marginBottom: '1.5rem',
        fontSize: '0.875rem',
      }}
    >
      <span style={{ fontWeight: 600, whiteSpace: 'nowrap' }}>Integration path:</span>
      <select
        value={selected}
        onChange={handleChange}
        style={{
          padding: '0.3rem 0.6rem',
          borderRadius: '4px',
          border: '1px solid var(--ifm-color-emphasis-400)',
          background: 'var(--ifm-background-color)',
          color: 'var(--ifm-font-color-base)',
          cursor: 'pointer',
          fontSize: '0.875rem',
        }}
      >
        {PATHS.map((p) => (
          <option key={p.value} value={p.value}>
            {p.label}
          </option>
        ))}
      </select>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.25rem',
          padding: '0.2rem 0.55rem',
          borderRadius: '12px',
          border: '1px solid var(--ifm-color-emphasis-300)',
          fontSize: '0.78rem',
          color: 'var(--ifm-color-emphasis-700)',
          whiteSpace: 'nowrap',
        }}
      >
        <Link to="/back-office/transaction-feed-api" style={{ textDecoration: 'none', color: 'inherit' }}>
          Transaction Feed
        </Link>
        {' '}always available
      </span>
    </div>
  );
}
