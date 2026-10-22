import React, { useState, useMemo, useEffect } from 'react';
import {
  MATRIX_PATHS,
  MATRIX_ACQUIRERS,
  MATRIX_PROCESSORS,
  MATRIX_SECTIONS,
} from '@site/src/data/acquirerMatrix';
import styles from './CapabilityMatrix.module.css';

const LS_KEY     = 'hp-matrix-filters';
const LS_TAB_KEY = 'hp-matrix-tab';

// Stable proc → CSS color-slot mapping (follows YAML definition order).
// procColor0 = first processor in YAML, procColor1 = second, etc.
// Add more procColorN classes in the CSS if you add processors.
const ALL_PROC_IDS = Object.keys(MATRIX_PROCESSORS);
function procColorClass(pid) {
  const idx = ALL_PROC_IDS.indexOf(pid);
  return styles[`procColor${Math.max(0, idx)}`] ?? styles.procColor0;
}

function loadFilters() {
  try { const r = localStorage.getItem(LS_KEY); return r ? JSON.parse(r) : null; }
  catch (_) { return null; }
}
function saveFilters(s) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(s)); } catch (_) {}
}

// ─── Chip ─────────────────────────────────────────────────────────────────────

function Chip({ short, status }) {
  const cls = status === 'public'      ? styles.chipPublic
    : status === 'coming-soon'         ? styles.chipSoon
    : styles.chipNo;
  return <span className={`${styles.chip} ${cls}`}>{short}</span>;
}

// ─── ProcBadge ────────────────────────────────────────────────────────────────

function ProcBadge({ pid }) {
  const info = MATRIX_PROCESSORS[pid];
  return (
    <span className={`${styles.procBadge} ${procColorClass(pid)}`}>
      {info?.name ?? pid}
    </span>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function CapabilityMatrix() {
  const allPathIds = MATRIX_PATHS.map(p => p.id);
  // Only non-viaRouting processors appear as primary acquirer groupings in the matrix
  const directProcIds = ALL_PROC_IDS.filter(pid => !MATRIX_PROCESSORS[pid]?.viaRouting);
  const allAcqIds     = MATRIX_ACQUIRERS.map(a => a.id);

  // ── Tab state ───────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState(() => {
    try { return parseInt(localStorage.getItem(LS_TAB_KEY) || '0', 10) || 0; }
    catch (_) { return 0; }
  });

  function switchTab(t) {
    setActiveTab(t);
    try { localStorage.setItem(LS_TAB_KEY, String(t)); } catch (_) {}
  }

  // ── Shared filter state (persisted) ─────────────────────────────────────────
  const [activePaths, setActivePaths] = useState(() => {
    const s = loadFilters(); return new Set(s?.paths ?? allPathIds);
  });
  const [showNotSupported, setShowNotSupported] = useState(() => {
    const s = loadFilters(); return s?.showNo ?? false;
  });

  // Tab 3 — additional filters
  const [activeProcs, setActiveProcs] = useState(() => {
    const s = loadFilters(); return new Set(s?.procs ?? directProcIds);
  });
  const [activeAcqs, setActiveAcqs] = useState(() => {
    const s = loadFilters(); return new Set(s?.acqs ?? allAcqIds);
  });

  useEffect(() => {
    saveFilters({
      procs:  Array.from(activeProcs),
      acqs:   Array.from(activeAcqs),
      paths:  Array.from(activePaths),
      showNo: showNotSupported,
    });
  }, [activeProcs, activeAcqs, activePaths, showNotSupported]);

  // Tab 2 — expanded acquirer rows
  const [expandedAcqs, setExpandedAcqs] = useState(new Set());
  function toggleAcqExpand(id) {
    setExpandedAcqs(prev => {
      const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n;
    });
  }

  // ── Toggle helpers ──────────────────────────────────────────────────────────
  function toggle(setter) {
    return id => setter(prev => {
      const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n;
    });
  }
  const togglePath = toggle(setActivePaths);
  const toggleProc = toggle(setActiveProcs);
  const toggleAcq  = toggle(setActiveAcqs);

  function resetAll() {
    setActiveProcs(new Set(directProcIds));
    setActiveAcqs(new Set(allAcqIds));
    setActivePaths(new Set(allPathIds));
    setShowNotSupported(false);
  }

  // ── Chip renderer (shared by Tab 2 and Tab 3) ───────────────────────────────
  function renderChips(pathMap) {
    if (!pathMap) return <span className={styles.emptyCell}>—</span>;
    const chips = [];
    MATRIX_PATHS.forEach(p => {
      if (!activePaths.has(p.id)) return;
      const status = pathMap[p.id];
      if (!status) return;
      if (status === 'not-supported' && !showNotSupported) return;
      chips.push(<Chip key={p.id} short={p.short} status={status} />);
    });
    if (!chips.length) {
      const hasPublic = Object.values(pathMap).some(v => v === 'public');
      return <span className={styles.emptyCell}>{hasPublic ? '—' : '✗'}</span>;
    }
    return <div className={styles.chipsWrap}>{chips}</div>;
  }

  // ── Tab 1: Processors ───────────────────────────────────────────────────────

  function renderProcessorsTab() {
    return (
      <div className={styles.processorCards}>
        {ALL_PROC_IDS.map(pid => {
          const info = MATRIX_PROCESSORS[pid];
          if (!info) return null;
          return (
            <div key={pid} className={`${styles.processorCard} ${procColorClass(pid)}`}>
              <div className={styles.procCardHeader}>
                <span className={styles.procCardName}>{info.name}</span>
                {info.viaRouting && (
                  <span className={styles.procRoutingBadge}>card routing</span>
                )}
              </div>
              {info.description && (
                <p className={styles.procCardDesc}>{info.description}</p>
              )}
              <div className={styles.procCardMeta}>
                {info.cardBrands.length > 0 && (
                  <div className={styles.procCardMetaRow}>
                    <span className={styles.procMetaLabel}>Card brands</span>
                    <span className={styles.procMetaValue}>{info.cardBrands.join(' · ')}</span>
                  </div>
                )}
                {info.acquirers.length > 0 && (
                  <div className={styles.procCardMetaRow}>
                    <span className={styles.procMetaLabel}>
                      {info.viaRouting ? 'Merchant acquirer' : 'Acquirers'}
                    </span>
                    <span className={styles.procMetaValue}>
                      {info.acquirers.map(aid => {
                        const acq = MATRIX_ACQUIRERS.find(a => a.id === aid);
                        return acq ? acq.name : aid;
                      }).join(', ')}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // ── Tab 2: Acquirers ────────────────────────────────────────────────────────

  function renderAcqDetail(acqId) {
    const visiblePaths = MATRIX_PATHS.filter(p => activePaths.has(p.id));
    return (
      <div className={styles.acqDetailWrap}>
        <div className={styles.acqDetailTableWrap}>
          <table className={styles.acqDetailTable}>
            <thead>
              <tr>
                <th className={styles.acqDetailCapCol}>Capability</th>
                {visiblePaths.map(p => (
                  <th key={p.id} className={styles.acqDetailPathCol} title={p.label}>{p.short}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MATRIX_SECTIONS.map(sec => {
                const rows = sec.rows.filter(cap => cap.byAcquirer[acqId]);
                if (!rows.length) return null;
                return (
                  <React.Fragment key={sec.label}>
                    <tr className={styles.acqDetailSectionRow}>
                      <td colSpan={1 + visiblePaths.length}>{sec.label}</td>
                    </tr>
                    {rows.map(cap => (
                      <tr key={cap.id} className={styles.acqDetailCapRow}>
                        <td className={styles.acqDetailCapName}>
                          {cap.label}
                          {cap.refs.map(r => (
                            <a key={r.url} href={r.url} className={styles.refLink}> ↗</a>
                          ))}
                        </td>
                        {visiblePaths.map(p => {
                          const status = cap.byAcquirer[acqId]?.[p.id];
                          if (!status || (status === 'not-supported' && !showNotSupported)) {
                            return (
                              <td key={p.id} className={styles.acqDetailPathCell}>
                                <span className={styles.emptyCell}>—</span>
                              </td>
                            );
                          }
                          return (
                            <td key={p.id} className={styles.acqDetailPathCell}>
                              <Chip short={p.short} status={status} />
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  function renderAcquirersTab() {
    return (
      <>
        <div className={styles.filterBar}>
          <div className={styles.filterGroup}>
            <div className={styles.filterLabel}>Integration path</div>
            <div className={styles.pillRow}>
              {MATRIX_PATHS.map(p => (
                <button
                  key={p.id}
                  className={`${styles.pill} ${activePaths.has(p.id) ? styles.pillOn : ''}`}
                  onClick={() => togglePath(p.id)}
                  title={p.label}
                >
                  {p.short}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.filterGroup}>
            <div className={styles.filterLabel}>Not-supported</div>
            <div className={styles.pillRow}>
              <button
                className={`${styles.pill} ${showNotSupported ? styles.pillOn : ''}`}
                onClick={() => setShowNotSupported(v => !v)}
              >
                {showNotSupported ? 'Visible' : 'Hidden'}
              </button>
            </div>
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table} style={{ minWidth: 480 }}>
            <thead>
              <tr>
                <th style={{ minWidth: 160 }}>Acquirer</th>
                <th style={{ minWidth: 100 }}>Geography</th>
                <th style={{ minWidth: 90 }}>Processor</th>
                <th>Card brands</th>
              </tr>
            </thead>
            <tbody>
              {MATRIX_ACQUIRERS.map(acq => {
                const isOpen = expandedAcqs.has(acq.id);
                return (
                  <React.Fragment key={acq.id}>
                    <tr
                      className={`${styles.acqSummaryRow} ${isOpen ? styles.acqSummaryRowOpen : ''}`}
                      onClick={() => toggleAcqExpand(acq.id)}
                    >
                      <td>
                        <span className={styles.acqExpandIcon}>{isOpen ? '▼' : '▶'}</span>
                        <strong>{acq.name}</strong>
                      </td>
                      <td>{acq.geo}</td>
                      <td><ProcBadge pid={acq.processor} /></td>
                      <td>
                        <div className={styles.cardBrandsList}>
                          {acq.cards.map(c => (
                            <span key={c} className={styles.cardBrandTag}>{c}</span>
                          ))}
                        </div>
                      </td>
                    </tr>
                    {isOpen && (
                      <tr className={styles.acqDetailRow}>
                        <td colSpan={4} className={styles.acqDetailCell}>
                          {renderAcqDetail(acq.id)}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  // ── Tab 3: Matrix ───────────────────────────────────────────────────────────

  const visibleAcquirers = useMemo(
    () => MATRIX_ACQUIRERS.filter(a => activeProcs.has(a.processor) && activeAcqs.has(a.id)),
    [activeProcs, activeAcqs],
  );

  function renderMatrixTab() {
    const procGroups = directProcIds
      .filter(pid => activeProcs.has(pid) && MATRIX_PROCESSORS[pid])
      .map(pid => ({
        id: pid,
        ...MATRIX_PROCESSORS[pid],
        visibleAcqs: visibleAcquirers.filter(a => a.processor === pid),
      }))
      .filter(g => g.visibleAcqs.length > 0);

    const totalCols = visibleAcquirers.length;

    return (
      <>
        <div className={styles.filterBar}>
          <div className={styles.filterGroup}>
            <div className={styles.filterLabel}>Processor</div>
            <div className={styles.pillRow}>
              {directProcIds.map(pid => (
                <button
                  key={pid}
                  className={`${styles.pill} ${activeProcs.has(pid) ? styles.pillOn : ''}`}
                  onClick={() => toggleProc(pid)}
                >
                  {MATRIX_PROCESSORS[pid]?.name ?? pid}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <div className={styles.filterLabel}>Acquirer</div>
            <div className={styles.pillRow}>
              {MATRIX_ACQUIRERS.map(a => (
                <button
                  key={a.id}
                  className={`${styles.pill} ${activeAcqs.has(a.id) ? styles.pillOn : ''}`}
                  onClick={() => toggleAcq(a.id)}
                  disabled={!activeProcs.has(a.processor)}
                  style={{ opacity: activeProcs.has(a.processor) ? 1 : 0.35 }}
                >
                  {a.name}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <div className={styles.filterLabel}>Integration path</div>
            <div className={styles.pillRow}>
              {MATRIX_PATHS.map(p => (
                <button
                  key={p.id}
                  className={`${styles.pill} ${activePaths.has(p.id) ? styles.pillOn : ''}`}
                  onClick={() => togglePath(p.id)}
                  title={p.label}
                >
                  {p.short}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <div className={styles.filterLabel}>Not-supported</div>
            <div className={styles.pillRow}>
              <button
                className={`${styles.pill} ${showNotSupported ? styles.pillOn : ''}`}
                onClick={() => setShowNotSupported(v => !v)}
              >
                {showNotSupported ? 'Visible' : 'Hidden'}
              </button>
            </div>
          </div>

          <div className={styles.filterGroup}>
            <div className={styles.filterLabel}>&nbsp;</div>
            <div className={styles.pillRow}>
              <button className={styles.pill} onClick={resetAll}>Reset</button>
            </div>
          </div>
        </div>

        <div className={styles.legend}>
          <div className={styles.legendItem}><Chip short="API" status="public" /> public — code example</div>
          <div className={styles.legendItem}><Chip short="JS" status="coming-soon" /> coming soon</div>
          {showNotSupported && (
            <div className={styles.legendItem}><Chip short="WIN" status="not-supported" /> not supported</div>
          )}
          <div className={styles.legendItem}><span className={styles.emptyCell}>—</span> absent / not certified</div>
        </div>

        {visibleAcquirers.length === 0 && (
          <p style={{ color: 'var(--ifm-color-emphasis-600)', fontStyle: 'italic' }}>
            Select at least one acquirer to show the matrix.
          </p>
        )}

        {visibleAcquirers.length > 0 && (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr className={styles.procHeaderRow}>
                  <th rowSpan={2} style={{ verticalAlign: 'bottom', paddingBottom: 9 }}>Capability</th>
                  {procGroups.map((grp, gi) => (
                    <th
                      key={grp.id}
                      colSpan={grp.visibleAcqs.length}
                      className={`${procColorClass(grp.id)}${gi > 0 ? ' ' + styles.procSep : ''}`}
                    >
                      {grp.name}
                    </th>
                  ))}
                </tr>
                <tr className={styles.acqHeaderRow}>
                  {visibleAcquirers.map((a, ai) => {
                    const isSep = ai > 0 && a.processor !== visibleAcquirers[ai - 1].processor;
                    return (
                      <th
                        key={a.id}
                        className={`${procColorClass(a.processor)}${isSep ? ' ' + styles.procSep : ''}`}
                      >
                        <a href={`/acquirers/${a.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {a.name}
                        </a>
                        <span className={styles.acqGeo}>{a.geo}</span>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {MATRIX_SECTIONS.map(sec => (
                  <React.Fragment key={sec.label}>
                    <tr className={styles.sectionRow}>
                      <td colSpan={1 + totalCols}>{sec.label}</td>
                    </tr>
                    {sec.rows.map(cap => {
                      const anyData = visibleAcquirers.some(a => cap.byAcquirer[a.id]);
                      if (!anyData) return null;
                      return (
                        <tr key={cap.id} className={styles.capRow}>
                          <td>
                            <div className={styles.capNameWrap}>
                              <span className={styles.capName}>{cap.label}</span>
                              {cap.refs.length > 0 && (
                                <div className={styles.refLinks}>
                                  {cap.refs.map(r => (
                                    <a key={r.url} href={r.url} className={styles.refLink}>↗ {r.label}</a>
                                  ))}
                                </div>
                              )}
                            </div>
                          </td>
                          {visibleAcquirers.map((a, ai) => {
                            const isSep = ai > 0 && a.processor !== visibleAcquirers[ai - 1].processor;
                            return (
                              <td key={a.id} className={isSep ? styles.procSep : undefined}>
                                {renderChips(cap.byAcquirer[a.id])}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </>
    );
  }

  // ── Root render ─────────────────────────────────────────────────────────────

  const TAB_LABELS = ['Processors', 'Acquirers', 'Matrix'];

  return (
    <div className={styles.root}>
      <div className={styles.tabBar}>
        {TAB_LABELS.map((label, i) => (
          <button
            key={i}
            className={`${styles.tabBtn} ${activeTab === i ? styles.tabBtnActive : ''}`}
            onClick={() => switchTab(i)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        {activeTab === 0 && renderProcessorsTab()}
        {activeTab === 1 && renderAcquirersTab()}
        {activeTab === 2 && renderMatrixTab()}
      </div>
    </div>
  );
}
