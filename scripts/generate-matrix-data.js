'use strict';
// Reads data/acquirers.yaml + data/processors.yaml and writes src/data/acquirerMatrix.js
// Run: node scripts/generate-matrix-data.js
// Called automatically by generate-acquirer-pages.js

const fs   = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const ROOT   = path.join(__dirname, '..');
const OUT    = path.join(ROOT, 'src', 'data', 'acquirerMatrix.js');

// ─── Static definitions ──────────────────────────────────────────────────────

const PATHS = [
  { id: 'cloud-api',      label: 'Cloud API',      short: 'API' },
  { id: 'android-pax',    label: 'Android PAX',    short: 'PAX' },
  { id: 'android-hilite', label: 'Android HiLite', short: 'HIL' },
  { id: 'ios-hilite',     label: 'iOS HiLite',     short: 'iOS' },
  { id: 'cordova',        label: 'Cordova',        short: 'CDV' },
  { id: 'javascript-sdk', label: 'JavaScript SDK', short: 'JS'  },
  { id: 'windows-sdk',    label: 'Windows SDK',    short: 'WIN' },
  { id: 'backoffice',     label: 'Backoffice',     short: 'BO'  },
];

const CAP_LABELS = {
  'emv-sale':              'EMV Sale',
  'key-entry-sale':        'Key Entry Sale',
  'moto-sale':             'Remote Sale (MOTO)',
  'sale-and-tip':          'Sale with Tip',
  'sale-and-tokenize':     'Sale + Tokenize',
  'card-present':          'EMV Refund',
  'moto-refund':           'Remote Refund (MOTO)',
  'key-entry-refund':      'Key Entry Refund',
  'reversal':              'On-Device Reversal',
  'remote-reversal':       'Remote Reversal',
  'pre-auth-create':       'Pre-Auth Create',
  'key-entry-pre-auth':    'Key Entry Pre-Auth',
  'pre-auth-capture':      'Pre-Auth Capture',
  'pre-auth-void':         'Pre-Auth Reversal',
  'pre-auth-capture-reversal': 'Capture Reversal',
  'procharge':             'proCharge Token',
  'paysafe-token':         'Paysafe Single-Use Token',
  'tokenex':               'TokenEx',
  'tip-adjustment':        'Tip Adjustment',
  'moto':                  'MOTO (key-entered)',
  'batching':              'Batching',
  'void':                  'Void (Interac)',
  'money-remittance':      'Money Remittance',
  'interac':               'Interac Card Support',
  'avs-for-moto':          'AVS for MOTO',
  'fee-mitigation':        'Fee Mitigation',
};

const REF_LINKS = {
  'sale-and-tip':          [{ label: 'Tipping guide',      url: '/reference/tipping-guide' }],
  'moto-sale':             [{ label: 'MOTO guide',         url: '/reference/moto-guide' }],
  'moto-refund':           [{ label: 'MOTO guide',         url: '/reference/moto-guide' }],
  'moto':                  [{ label: 'MOTO guide',         url: '/reference/moto-guide' }],
  'tip-adjustment':        [{ label: 'Tipping guide',      url: '/reference/tipping-guide' }],
  'pre-auth-create':       [{ label: 'Pre-auth guide',     url: '/reference/pre-authorization-guide' }],
  'avs-for-moto':          [{ label: 'AVS guide',          url: '/reference/avs' }],
  'fee-mitigation':        [{ label: 'Fee mitigation',     url: '/reference/fee-mitigation' }],
};

// Ordered sections and capability IDs within each section
const SECTIONS_DEF = [
  { label: 'Sale',             capIds: ['emv-sale','key-entry-sale','moto-sale','sale-and-tip','sale-and-tokenize'] },
  { label: 'Refund',           capIds: ['card-present','moto-refund','key-entry-refund'] },
  { label: 'Reversal',         capIds: ['reversal','remote-reversal'] },
  { label: 'Pre-Authorization',capIds: ['pre-auth-create','key-entry-pre-auth','pre-auth-capture','pre-auth-void','pre-auth-capture-reversal'] },
  { label: 'Tokenization',     capIds: ['procharge','paysafe-token','tokenex'] },
  { label: 'Operations',       capIds: ['tip-adjustment','moto','batching','void','money-remittance','interac','avs-for-moto','fee-mitigation'] },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Extract only path-value entries (strings, not nested objects) from a capability block. */
function flatPaths(capBlock) {
  if (!capBlock || typeof capBlock !== 'object') return null;
  const valid = new Set(['public', 'coming-soon', 'not-supported']);
  const result = {};
  for (const [k, v] of Object.entries(capBlock)) {
    if (typeof v === 'string' && valid.has(v)) result[k] = v;
  }
  return Object.keys(result).length ? result : null;
}

/**
 * Given an acquirer's full capabilities object, extract the path-status map
 * for a given flat capability ID.
 * Returns null if the acquirer has no data for this capability.
 */
const EXTRACTORS = {
  'emv-sale':                  c => c.sale?.flavors?.['emv-sale']              || null,
  'key-entry-sale':            c => c.sale?.flavors?.['key-entry-sale']        || null,
  'moto-sale':                 c => c.sale?.flavors?.['moto-sale']             || null,
  'sale-and-tip':              c => c.sale?.flavors?.['sale-and-tip']          || null,
  'sale-and-tokenize':         c => c.sale?.flavors?.['sale-and-tokenize']     || null,
  'card-present':              c => c.refund?.flavors?.['card-present']        || null,
  'moto-refund':               c => c.refund?.flavors?.['moto-refund']         || null,
  'key-entry-refund':          c => c.refund?.flavors?.['key-entry-refund']    || null,
  // 'reversal' flavor has same name as parent; fall back to parent paths if no flavors
  'reversal':                  c => c.reversal?.flavors?.['reversal']          || flatPaths(c.reversal),
  'remote-reversal':           c => c.reversal?.flavors?.['remote-reversal']   || null,
  // pre-auth sub-capabilities; fall back to parent paths when no flavors are listed
  'pre-auth-create':           c => c['pre-auth']?.flavors?.['pre-auth-create']     || flatPaths(c['pre-auth']),
  'key-entry-pre-auth':        c => c['pre-auth']?.flavors?.['key-entry-pre-auth']  || null,
  'pre-auth-capture':          c => c['pre-auth']?.flavors?.['pre-auth-capture']    || null,
  'pre-auth-void':             c => c['pre-auth']?.flavors?.['pre-auth-void']       || null,
  'pre-auth-capture-reversal': c => c['pre-auth-capture-reversal']                  || null,
  'procharge':                 c => c.tokenization?.flavors?.['procharge']           || null,
  'paysafe-token':             c => c.tokenization?.flavors?.['paysafe-token']       || null,
  'tokenex':                   c => c.tokenization?.flavors?.['tokenex']             || null,
  'tip-adjustment':            c => flatPaths(c['tip-adjustment']),
  'moto':                      c => flatPaths(c.moto),
  'batching':                  c => flatPaths(c.batching),
  'void':                      c => flatPaths(c.void),
  'money-remittance':          c => flatPaths(c['money-remittance']),
  'interac':                   c => flatPaths(c.interac),
  'avs-for-moto':              c => flatPaths(c['avs-for-moto']),
  'fee-mitigation':            c => flatPaths(c['fee-mitigation']),
};

// ─── Main ─────────────────────────────────────────────────────────────────────

function main() {
  const allAcquirers = yaml.load(fs.readFileSync(path.join(ROOT, 'data', 'acquirers.yaml'), 'utf8')).acquirers;
  const processorsRaw = yaml.load(fs.readFileSync(path.join(ROOT, 'data', 'processors.yaml'), 'utf8'));
  const processors = processorsRaw.processors || processorsRaw;

  // Active acquirers only, in a fixed display order
  const ACTIVE_ORDER = ['epi', 'paysafe', 'emerchantpay', 'paystrax'];
  const activeAcquirers = ACTIVE_ORDER
    .filter(id => allAcquirers[id] && allAcquirers[id].status === 'active')
    .map(id => {
      const a = allAcquirers[id];
      return {
        id,
        name: a.name,
        geo: a.geography || '',
        processor: a.processor || 'unknown',
        slug: id,
        cards: a['card-brands'] || [],
        interac: !!a.interac,
      };
    });

  // Processor summary (active acquirers only).
  // Processors with `via-acquirers` are reached via auto-routing (e.g. TNS via PAYSAFE
  // Interac) — they have no `processor:` field in acquirers.yaml but are still tracked here
  // so the Processors tab can show them alongside the acquirer(s) that route to them.
  const procInfo = {};
  for (const [pid, pdata] of Object.entries(processors)) {
    const viaRouting = Array.isArray(pdata['via-acquirers']) && pdata['via-acquirers'].length > 0;
    let acqIds;
    if (viaRouting) {
      acqIds = pdata['via-acquirers'].filter(id => activeAcquirers.some(a => a.id === id));
    } else {
      acqIds = activeAcquirers.filter(a => a.processor === pid).map(a => a.id);
    }
    if (!acqIds.length) continue;
    procInfo[pid] = {
      name: pdata.name || pid,
      description: pdata.description || '',
      cardBrands: pdata['card-brands'] || [],
      acquirers: acqIds,
      viaRouting,
    };
  }

  // Build sections
  const sections = SECTIONS_DEF.map(sec => ({
    label: sec.label,
    rows: sec.capIds.map(capId => {
      const byAcquirer = {};
      activeAcquirers.forEach(acq => {
        const caps = allAcquirers[acq.id]?.capabilities || {};
        const raw = EXTRACTORS[capId]?.(caps);
        if (!raw) return;
        // Keep only known path IDs
        const pathMap = {};
        PATHS.forEach(p => {
          if (raw[p.id]) pathMap[p.id] = raw[p.id];
        });
        if (Object.keys(pathMap).length) byAcquirer[acq.id] = pathMap;
      });
      return {
        id: capId,
        label: CAP_LABELS[capId] || capId,
        refs: REF_LINKS[capId] || [],
        byAcquirer,
      };
    }),
  }));

  const output = `// AUTO-GENERATED — do not edit directly.
// Run: node scripts/generate-matrix-data.js
// Source: data/acquirers.yaml + data/processors.yaml

export const MATRIX_PATHS = ${JSON.stringify(PATHS, null, 2)};

export const MATRIX_ACQUIRERS = ${JSON.stringify(activeAcquirers, null, 2)};

export const MATRIX_PROCESSORS = ${JSON.stringify(procInfo, null, 2)};

export const MATRIX_SECTIONS = ${JSON.stringify(sections, null, 2)};
`;

  fs.writeFileSync(OUT, output, 'utf8');
  console.log(`[matrix] Written ${path.relative(ROOT, OUT)}`);
}

main();
