import React from 'react';
import { ACQUIRER_DETAILS } from '../data/acquirerDetails';
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
const CAPABILITY_LABELS = {
  sale: 'Sale',
  refund: 'Refund',
  reversal: 'Reversal',
  'partial-reversal': 'Partial Reversal',
  'tip-adjustment': 'Tip Adjustment',
  'pre-auth': 'Pre-Authorization',
  'pre-auth-capture-reversal': 'Pre-Auth Capture Reversal',
  moto: 'MOTO',
  tokenization: 'Tokenization',
  batching: 'Batch Operations',
  void: 'Void',
  interac: 'Interac',
  'money-remittance': 'Money Remittance',
};

function groupStatus(capData, paths) {
  for (const p of paths) {
    if (capData[p] === 'public') return 'public';
  }
  return null;
}

function StatusIcon({ status }) {
  if (status === 'public') return <span className={styles.yes} title="Supported">✓</span>;
  return <span className={styles.no} title="Not supported">—</span>;
}

export default function AcquirerCapabilitySummary({ slug }) {
  const acquirer = ACQUIRER_DETAILS.find(a => a.slug === slug);
  if (!acquirer) return null;

  const caps = acquirer.capabilities || {};

  // Only show capabilities that are supported on at least one path
  const visibleCaps = Object.keys(CAPABILITY_LABELS).filter(capKey => {
    const capData = caps[capKey];
    if (!capData) return false;
    return COLUMN_GROUPS.some(group => groupStatus(capData, group.paths) !== null);
  });

  if (visibleCaps.length === 0) return null;

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
                  <td className={styles.capName}>{CAPABILITY_LABELS[capKey]}</td>
                  {COLUMN_GROUPS.map(group => (
                    <td key={group.key} className={styles.cell}>
                      <StatusIcon status={groupStatus(capData, group.paths)} />
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className={styles.legend}>
        <span className={styles.yes}>✓</span> Supported &nbsp;
        <span className={styles.no}>—</span> Not available on this path
      </p>
    </div>
  );
}
