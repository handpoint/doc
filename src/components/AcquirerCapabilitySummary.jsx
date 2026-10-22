import React from 'react';
import { ACQUIRER_DETAILS } from '../data/acquirerDetails';
import { CAPABILITY_PANEL_LABELS } from '../data/capabilities';
import styles from './AcquirerCapabilitySummary.module.css';

const COLUMN_GROUPS = [
  {
    key: 'cloud-api',
    label: 'Cloud API',
    paths: ['cloud-api', 'javascript-sdk', 'windows-sdk', 'cordova'],
  },
  {
    key: 'android-pax',
    label: 'Native PAX',
    paths: ['android-pax'],
  },
  {
    key: 'hilite',
    label: 'HiLite',
    paths: ['android-hilite', 'ios-hilite'],
  },
  {
    key: 'backoffice',
    label: 'Back Office',
    paths: ['backoffice'],
  },
];

// Modifiers and unreleased capabilities are excluded — panel shows only released operations.
// Note: partial-reversal is a flavor of 'reversal', not a top-level capability key.
// CAPABILITY_PANEL_LABELS is auto-generated from data/capabilities.yaml via the generator.

function groupStatus(capData, paths) {
  for (const p of paths) {
    if (capData[p] === 'public') return 'public';
  }
  return null;
}

// Returns the lowest min-sdk version required for any path in this group, or null.
function groupMinSdk(capData, paths) {
  const sdkMap = capData['min-sdk'];
  if (!sdkMap || typeof sdkMap !== 'object') return null;
  for (const p of paths) {
    if (sdkMap[p]) return sdkMap[p];
  }
  return null;
}

function StatusCell({ status, minSdk }) {
  if (status !== 'public') {
    return <span className={styles.no}>—</span>;
  }
  if (!minSdk) {
    return <span className={styles.yes}>✓</span>;
  }
  return (
    <span className={styles.supported}>
      <span className={styles.yes}>✓</span>
      <span className={styles.versionHint} data-tooltip={`Min SDK: ${minSdk}`}>ⓘ</span>
    </span>
  );
}

export default function AcquirerCapabilitySummary({ slug }) {
  const acquirer = ACQUIRER_DETAILS.find(a => a.slug === slug);
  if (!acquirer) return null;

  const caps = acquirer.capabilities || {};

  // Only show capabilities that are supported on at least one path.
  const visibleCaps = Object.keys(CAPABILITY_PANEL_LABELS).filter(capKey => {
    const capData = caps[capKey];
    if (!capData) return false;
    return COLUMN_GROUPS.some(group => groupStatus(capData, group.paths) !== null);
  });

  if (visibleCaps.length === 0) return null;

  // Collect footnotes for min-sdk requirements.
  const footnotes = [];
  const footnoteMap = {}; // "group.key:capKey" -> footnote index

  visibleCaps.forEach(capKey => {
    const capData = caps[capKey] || {};
    COLUMN_GROUPS.forEach(group => {
      const minSdk = groupMinSdk(capData, group.paths);
      if (minSdk && groupStatus(capData, group.paths) === 'public') {
        const key = `${group.key}:${capKey}`;
        if (!footnoteMap[key]) {
          const existing = footnotes.findIndex(f => f.sdk === minSdk && f.note.includes('Android'));
          if (existing >= 0) {
            footnoteMap[key] = existing + 1;
          } else {
            footnotes.push({ sdk: minSdk, note: `Android SDK ${minSdk}+` });
            footnoteMap[key] = footnotes.length;
          }
        }
      }
    });
  });

  return (
    <div className={styles.panel}>
      <h3 className={styles.heading}>Integration Capabilities</h3>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.capCol}>Capability</th>
              {COLUMN_GROUPS.map(g => (
                <th key={g.key} className={styles.pathCol}>{g.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleCaps.map(capKey => {
              const capData = caps[capKey] || {};
              return (
                <tr key={capKey}>
                  <td className={styles.capName}>{CAPABILITY_PANEL_LABELS[capKey]}</td>
                  {COLUMN_GROUPS.map(group => {
                    const status = groupStatus(capData, group.paths);
                    const minSdk = groupMinSdk(capData, group.paths);
                    return (
                      <td key={group.key} className={styles.cell}>
                        <StatusCell status={status} minSdk={minSdk} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className={styles.legend}>
        <span className={styles.yes}>✓</span> Supported &nbsp;
        <span className={styles.no}>—</span> Not available on this path
        {footnotes.length > 0 && (
          <>
            &nbsp;&nbsp;
            {footnotes.map((f, i) => (
              <span key={i}> · <span className={styles.versionHint} data-tooltip={f.note}>ⓘ</span> {f.note}</span>
            ))}
          </>
        )}
      </p>
    </div>
  );
}
