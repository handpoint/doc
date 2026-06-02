// @ts-check
'use strict';

const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ACQUIRERS_FILE = path.join(ROOT, 'data', 'acquirers.yaml');
const PARTIALS_DIR = path.join(ROOT, 'src', 'partials', 'functions');
const OUTPUT_DIR = path.join(ROOT, 'docs', 'acquirers');
const LLMS_OUT = path.join(ROOT, 'static', 'llms.txt');
const ACQUIRERS_DATA_OUT = path.join(ROOT, 'src', 'data', 'acquirers.js');

const CAPABILITY_PARTIALS = {
  sale:               ['sale'],
  refund:             ['refund'],
  reversal:           ['reversal'],
  'partial-reversal': ['partial-reversal'],
  'tip-adjustment':   ['tip-adjustment'],
  'pre-auth':         ['pre-auth-create', 'pre-auth-capture', 'pre-auth-void'],
  moto:               ['moto'],
  tokenization:       ['tokenization'],
  batching:           ['batching'],
  'money-remittance': ['money-remittance'],
  void:               ['void'],
};

const CAPABILITY_ORDER = Object.keys(CAPABILITY_PARTIALS);

const PATHS = ['rest-api', 'android-pax', 'android-hilite', 'ios-hilite', 'cordova'];
const PATH_LABELS = {
  'rest-api':       'REST API',
  'android-pax':    'Android (PAX)',
  'android-hilite': 'Android (HiLite)',
  'ios-hilite':     'iOS (HiLite)',
  'cordova':        'Cordova',
};

function isVisible(pathMap) {
  if (!pathMap || typeof pathMap !== 'object') return false;
  return Object.values(pathMap).some(v => v === 'public' || v === 'coming-soon');
}

function aggregate(pathMap) {
  const vals = Object.values(pathMap || {});
  if (vals.includes('public')) return true;
  if (vals.includes('coming-soon')) return 'coming-soon';
  return false;
}

function buildFrontmatter(slug, a) {
  const caps = a.capabilities || {};
  const aggCaps = {};
  for (const [k, v] of Object.entries(caps)) {
    const agg = aggregate(v);
    if (agg !== false) aggCaps[k] = agg;
  }
  const integrationPaths = PATHS.filter(p =>
    Object.values(caps).some(c => (c || {})[p] === 'public' || (c || {})[p] === 'coming-soon')
  );
  const capList = Object.keys(aggCaps).join(', ');

  const lines = [
    '---',
    `id: ${slug}`,
    `title: "${a.name}"`,
    `description: "${a.geography} card-present acquirer. Supports: ${capList}."`,
    `geography: "${a.geography}"`,
    `status: ${a.status}`,
    `card-brands: [${(a['card-brands'] || []).join(', ')}]`,
    `interac: ${a.interac || false}`,
    'capabilities:',
    ...Object.entries(aggCaps).map(([k, v]) => `  ${k}: ${v}`),
    'integration-paths:',
    ...integrationPaths.map(p => `  - ${p}`),
    `last-reviewed: "${new Date().toISOString().split('T')[0]}"`,
    '---',
  ];
  return lines.join('\n');
}

function buildSummaryTable(caps) {
  const header = `| Capability | ${PATHS.map(p => PATH_LABELS[p]).join(' | ')} |`;
  const sep = `|---|${PATHS.map(() => '---').join('|')}|`;
  const rows = CAPABILITY_ORDER
    .filter(cap => cap in caps && isVisible(caps[cap]))
    .map(cap => {
      const label = cap.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const cells = PATHS.map(p => {
        const v = (caps[cap] || {})[p];
        if (v === 'public') return '✅';
        if (v === 'coming-soon') return '🔜';
        return '❌';
      });
      return `| ${label} | ${cells.join(' | ')} |`;
    });
  return [header, sep, ...rows].join('\n');
}

function buildPage(slug, a) {
  const caps = a.capabilities || {};
  const sections = [];

  for (const cap of CAPABILITY_ORDER) {
    if (!caps[cap] || !isVisible(caps[cap])) continue;
    for (const partialName of (CAPABILITY_PARTIALS[cap] || [])) {
      const file = path.join(PARTIALS_DIR, `${partialName}.mdx`);
      if (!fs.existsSync(file)) continue;
      let content = fs.readFileSync(file, 'utf8');
      const note = a.notes
        ? `:::note ${a.name}\n${a.notes.trim()}\n:::\n`
        : '';
      content = content.replace('{/* ACQUIRER_NOTE_INJECTION_POINT */}', note);
      sections.push(content);
    }
  }

  const notesBlock = a.notes
    ? `:::info Acquirer notes\n${a.notes.trim()}\n:::\n`
    : '';

  return [
    buildFrontmatter(slug, a),
    '',
    "import Tabs from '@theme/Tabs';",
    "import TabItem from '@theme/TabItem';",
    "import NotSupported from '@site/src/components/NotSupported';",
    "import ComingSoon from '@site/src/components/ComingSoon';",
    "import AcquirerPageHeader from '@site/src/components/AcquirerPageHeader';",
    '',
    `<AcquirerPageHeader currentSlug="${slug}" />`,
    '',
    '## Capabilities',
    '',
    buildSummaryTable(caps),
    '',
    notesBlock,
    ...sections,
  ].join('\n');
}

function buildLlmsTxt(acquirers) {
  const lines = [
    '# Handpoint Developer Documentation',
    '# Fetch the acquirer URL for full implementation detail.',
    `# Generated: ${new Date().toISOString()}`,
    '',
    '## Acquirers',
  ];
  for (const [slug, a] of Object.entries(acquirers)) {
    if (a.status !== 'active') continue;
    const caps = Object.entries(a.capabilities || {})
      .filter(([, v]) => isVisible(v))
      .map(([k]) => k);
    const interacNote = a.interac ? ' | interac: true' : '';
    lines.push(`${a.name} | geography: ${a.geography} | ${caps.join(', ')} | cards: ${(a['card-brands'] || []).join(', ')}${interacNote} | url: /acquirers/${slug}`);
  }
  lines.push(
    '',
    '## Integration paths',
    'rest-api | cloud | PAX terminals (card-present); no terminal for MOTO/CNP',
    'android-pax | native on-terminal | PAX devices',
    'android-hilite | bluetooth | HiLite (DATECS) devices',
    'ios-hilite | bluetooth | HiLite (DATECS) devices',
    'cordova | native SDK wrapper | PAX + HiLite devices',
    '',
    '## Reference',
    '/reference/acquirer-capabilities-matrix',
    '/reference/transaction-result-object',
    '/reference/error-codes',
  );
  return lines.join('\n');
}

/** Write src/data/acquirers.js — imported by AcquirerPageHeader */
function buildAcquirersData(acquirers) {
  const list = Object.entries(acquirers)
    .filter(([, a]) => a.status === 'active')
    .map(([slug, a]) => ({ slug, name: a.name, geography: a.geography }));

  return [
    '// Auto-generated from data/acquirers.yaml — do not edit directly.',
    '// Regenerated by: node scripts/generate-acquirer-pages.js',
    '',
    `export const ACQUIRERS = ${JSON.stringify(list, null, 2)};`,
    '',
  ].join('\n');
}

function main() {
  const raw = yaml.load(fs.readFileSync(ACQUIRERS_FILE, 'utf8'));
  const acquirers = raw.acquirers || raw;

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(path.dirname(LLMS_OUT), { recursive: true });
  fs.mkdirSync(path.dirname(ACQUIRERS_DATA_OUT), { recursive: true });

  let count = 0;
  for (const [slug, a] of Object.entries(acquirers)) {
    if (a.status !== 'active') continue;
    fs.writeFileSync(path.join(OUTPUT_DIR, `${slug}.mdx`), buildPage(slug, a));
    count++;
  }

  fs.writeFileSync(LLMS_OUT, buildLlmsTxt(acquirers));
  fs.writeFileSync(ACQUIRERS_DATA_OUT, buildAcquirersData(acquirers));

  console.log(`✓ Generated ${count} acquirer pages + static/llms.txt + src/data/acquirers.js`);
}

if (require.main === module) main();

module.exports = { isVisible, aggregate, buildFrontmatter, buildSummaryTable, buildPage, buildLlmsTxt };
