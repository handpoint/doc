import React, {useState, useEffect} from 'react';
import {
  ACQUIRERS,
  DISPLAY_ORDER,
  CAPABILITY_LABELS,
  PATH_LABELS,
  CARD_PRESENT_PATHS,
  BACK_OFFICE_PATHS,
  PORTAL_PATHS,
} from '@site/src/data/acquirerCaps';

const CHECK = '✅';
const CROSS = '❌';

function isPublic(pathMap, path) {
  return pathMap && pathMap[path] === 'public';
}

function isSupported(caps, op) {
  if (!caps[op]) return false;
  return Object.values(caps[op]).includes('public');
}

/** Split `backtick text` spans into inline <code> elements. */
function renderText(text) {
  if (!text) return null;
  const parts = text.split(/`([^`]+)`/);
  return parts.map((part, i) =>
    i % 2 === 1 ? <code key={i}>{part}</code> : part
  );
}

function AcquirerTable({ acquirer }) {
  const { name, subtitle, caps, notes, portalNote } = acquirer;

  const hasPortal = PORTAL_PATHS.some(p =>
    DISPLAY_ORDER.some(op => isPublic(caps[op], p))
  );

  const allPaths = [...CARD_PRESENT_PATHS, ...BACK_OFFICE_PATHS, ...(hasPortal ? PORTAL_PATHS : [])];
  const visibleOps = DISPLAY_ORDER.filter(op => op in caps);

  return (
    <div style={{ marginBottom: '2rem' }}>
      <table>
        <thead>
          <tr>
            <th>Operation</th>
            {allPaths.map((p, i) => {
              const isBOStart = BACK_OFFICE_PATHS.includes(p) && (i === 0 || !BACK_OFFICE_PATHS.includes(allPaths[i - 1]));
              const isPortalStart = PORTAL_PATHS.includes(p) && (i === 0 || !PORTAL_PATHS.includes(allPaths[i - 1]));
              return (
                <th
                  key={p}
                  style={{
                    textAlign: 'center',
                    borderLeft: (isBOStart || isPortalStart) ? '2px solid var(--ifm-color-emphasis-300)' : undefined,
                  }}
                >
                  {PATH_LABELS[p] || p}
                </th>
              );
            })}
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {visibleOps.map(op => (
            <tr key={op}>
              <td>{CAPABILITY_LABELS[op] || op}</td>
              {allPaths.map((p, i) => {
                const isBOStart = BACK_OFFICE_PATHS.includes(p) && (i === 0 || !BACK_OFFICE_PATHS.includes(allPaths[i - 1]));
                const isPortalStart = PORTAL_PATHS.includes(p) && (i === 0 || !PORTAL_PATHS.includes(allPaths[i - 1]));
                return (
                  <td
                    key={p}
                    style={{
                      textAlign: 'center',
                      borderLeft: (isBOStart || isPortalStart) ? '2px solid var(--ifm-color-emphasis-300)' : undefined,
                    }}
                  >
                    {isPublic(caps[op], p) ? CHECK : CROSS}
                  </td>
                );
              })}
              <td>{renderText(notes[op])}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {portalNote && (
        <blockquote style={{ marginTop: '0.5rem' }}>
          <small>{renderText(portalNote)}</small>
        </blockquote>
      )}
    </div>
  );
}

function CrossAcquirerSummary() {
  const opsWithSupport = DISPLAY_ORDER.filter(op =>
    ACQUIRERS.some(a => isSupported(a.caps, op))
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Operation</th>
          {ACQUIRERS.map(a => (
            <th key={a.id} style={{ textAlign: 'center' }}>
              {a.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {opsWithSupport.map(op => (
          <tr key={op}>
            <td>{CAPABILITY_LABELS[op] || op}</td>
            {ACQUIRERS.map(a => (
              <td key={a.id} style={{ textAlign: 'center' }}>
                {isSupported(a.caps, op) ? CHECK : CROSS}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const ACQUIRER_KEY = 'handpoint.selected.acquirer';

export function FullMatrix() {
  const [selectedAcquirer, setSelectedAcquirer] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(ACQUIRER_KEY) || '';
    }
    return '';
  });

  useEffect(() => {
    const handler = (e) => setSelectedAcquirer(e.detail?.slug || '');
    window.addEventListener('handpoint:acquirerChanged', handler);
    return () => window.removeEventListener('handpoint:acquirerChanged', handler);
  }, []);

  const visible = selectedAcquirer
    ? ACQUIRERS.filter(a => a.id === selectedAcquirer)
    : ACQUIRERS;

  return (
    <div>
      {visible.map(a => (
        <section key={a.id}>
          <h2>{a.name} — {a.subtitle}</h2>
          <AcquirerTable acquirer={a} />
          <hr />
        </section>
      ))}
    </div>
  );
}

export function CrossAcquirerMatrix() {
  return <CrossAcquirerSummary />;
}
