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
const ACQUIRER_DETAILS_OUT = path.join(ROOT, 'src', 'data', 'acquirerDetails.js');

const CAPABILITY_PARTIALS = {
  sale:                       ['sale'],
  refund:                     ['refund'],
  reversal:                   ['reversal'],
  'partial-reversal':         ['partial-reversal'],
  'tip-adjustment':           ['tip-adjustment'],
  'pre-auth':                 ['pre-auth-create', 'pre-auth-capture', 'pre-auth-void'],
  'pre-auth-capture-reversal':['pre-auth-capture-void'],
  moto:                       ['moto'],
  tokenization:               ['tokenization'],
  batching:                   ['batching'],
  'money-remittance':         ['money-remittance'],
  void:                       ['void'],
  interac:                    ['interac'],
};

// Human-readable labels for capability section headings
const CAPABILITY_HEADINGS = {
  sale:                       'Sale',
  refund:                     'Refund',
  reversal:                   'Reversal',
  'partial-reversal':         'Partial Reversal',
  'tip-adjustment':           'Tip Adjustment',
  'pre-auth':                 'Pre-Authorization',
  'pre-auth-capture-reversal':'Pre-Auth Capture Reversal',
  moto:                       'MOTO (Mail Order / Telephone Order)',
  tokenization:               'Tokenization',
  batching:                   'Batch Operations',
  'money-remittance':         'Money Remittance',
  void:                       'Void',
  interac:                    'Interac Card Transactions',
};

// Short one-liner + optional anchor override shown in the FlavorSection summary header.
// If 'anchor' is omitted the flavorKey itself is used as the anchor ID.
const FLAVOR_DESCRIPTIONS = {
  sale: {
    'emv-sale':          { description: 'On-device · chip, tap, or swipe' },
    'key-entry-sale':    { description: 'On-device · operator keys card number' },
    'moto-sale':         { description: 'Back-office · charges a stored card token', anchor: 'remote-sale' },
    'sale-and-tip':      { description: 'On-device · tip collected at checkout' },
    'sale-and-tokenize': { description: 'On-device · stores card token for future charges' },
  },
  refund: {
    'card-present':  { description: 'On-device · card present at terminal', anchor: 'emv-refund' },
    'moto-refund':   { description: 'Back-office · linked to original MOTO sale' },
  },
  reversal: {
    'reversal':        { description: 'On-device · no card required' },
    'remote-reversal': { description: 'Back-office · no reader required' },
  },
  tokenization: {
    'procharge':     { description: 'EPI · proCharge vault — MOTO detokenization by gateway; ISV stays out of PCI scope' },
    'paysafe-token': { description: 'Paysafe · single-use token — for use on Paysafe APIs; consult Paysafe team' },
    'tokenex':       { description: '3rd-party · TokenEx — loyalty / card-matching; no detokenization through Handpoint' },
  },
};

const CAPABILITY_ORDER = Object.keys(CAPABILITY_PARTIALS);

const PATHS = ['cloud-api', 'android-pax', 'android-hilite', 'ios-hilite', 'cordova', 'backoffice'];
const PATH_LABELS = {
  'cloud-api':      'Cloud API',
  'android-pax':    'Android (PAX)',
  'android-hilite': 'Android (HiLite)',
  'ios-hilite':     'iOS (HiLite)',
  'cordova':        'Cordova',
  'backoffice':     'Backoffice',
};

function isVisible(pathMap) {
  if (!pathMap || typeof pathMap !== 'object') return false;
  return Object.values(pathMap).some(v => v === 'public' || v === 'coming-soon');
}

/** isVisible for a flavor entry — checks only the known PATHS keys, not 'label' etc. */
function isFlavorVisible(flavorData) {
  if (!flavorData) return false;
  return PATHS.some(p => flavorData[p] === 'public' || flavorData[p] === 'coming-soon');
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
    // aggregate ignores 'flavors' key since its value is an object not a path-map
    const pathOnlyMap = {};
    for (const p of PATHS) {
      if (v[p]) pathOnlyMap[p] = v[p];
    }
    const agg = aggregate(pathOnlyMap);
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

/**
 * Build a ### heading + <FlavorSection> block for one flavor of a capability.
 * The h3 heading provides the anchor (for right-panel ToC and URL deep-links).
 * FlavorSection wraps the collapsible body with a description + path chips in the summary.
 * Returns empty string if the partial file doesn't exist.
 */
function buildFlavorBlock(capKey, flavorKey, flavorData, acquirer) {
  const partialFile = path.join(PARTIALS_DIR, capKey, `${flavorKey}.mdx`);
  if (!fs.existsSync(partialFile)) return '';

  let content = fs.readFileSync(partialFile, 'utf8');

  // Partial reversal injection for on-device-reversal on acquirers that support it
  if (flavorKey === 'reversal' && capKey === 'reversal') {
    if (acquirer['reversal-partial']) {
      const prFile = path.join(PARTIALS_DIR, 'reversal', 'partial-reversal.mdx');
      const prContent = fs.existsSync(prFile) ? `\n#### Partial Reversal\n\n${fs.readFileSync(prFile, 'utf8')}` : '';
      content = content.replace('{/* PARTIAL_REVERSAL_INJECTION_POINT */}', prContent);
    } else {
      content = content.replace('{/* PARTIAL_REVERSAL_INJECTION_POINT */}', '');
    }
  }

  // AVS injection for moto-sale and key-entry-sale flavors
  if (flavorKey === 'moto-sale' || flavorKey === 'key-entry-sale') {
    const avsCaps = (acquirer.capabilities || {})['avs-for-moto'];
    let avsNote = '';
    if (avsCaps && isVisible(avsCaps)) {
      if (flavorKey === 'moto-sale') {
        avsNote = [
          '',
          '#### Address Verification (AVS)',
          '',
          `${acquirer.name} supports an optional \`billing\` object on MOTO Sale — postal code (and optionally street address) are forwarded to the acquirer to reduce CNP fraud risk. Requires \`avsForMoto\` enabled per merchant by Handpoint.`,
          '',
          '<Tabs groupId="integration-path">',
          '<TabItem value="cloud-api" label="Cloud API">',
          '',
          '```http',
          'POST https://cloud.handpoint.com/moto/sale',
          'ApiKeyCloud: YOUR_MERCHANT_API_KEY',
          'Content-Type: application/json',
          '',
          '{',
          '  "amount": "33.09",',
          '  "currency": "USD",',
          '  "cardToken": "YOUR_STORED_CARD_TOKEN",',
          '  "transactionReference": "c1e1a7ee-1432-4a9c-9171-414e203dbb49",',
          '  "billing": {',
          '    "zipCode": "10001",',
          '    "address": "123 Main St"',
          '  }',
          '}',
          '```',
          '',
          '`address` is optional — `zipCode` alone is a valid `billing` object. Both are personal data; handle per your retention and masking policy.',
          '',
          '</TabItem>',
          '<TabItem value="android-pax" label="Android (PAX)">',
          '',
          '```kotlin',
          'val billing = Billing(zipCode = "10001", address = "123 Main St")',
          'val options = MoToOptions(cardToken = "YOUR_STORED_CARD_TOKEN", billing = billing)',
          'hapi.motoSale(BigInteger("1000"), Currency.USD, options)',
          '```',
          '',
          '</TabItem>',
          '</Tabs>',
          '',
          ':::info',
          'See [AVS for MOTO](/features/avs-for-moto) for prerequisites, full field reference, and edge cases.',
          ':::',
          '',
        ].join('\n');
      } else { // key-entry-sale
        avsNote = [
          '',
          '#### Address Verification (AVS)',
          '',
          `${acquirer.name} supports optional Address Verification on Key Entry Sale. The terminal can prompt for the cardholder's billing postal code after card entry, or you can pass it programmatically.`,
          '',
          '<Tabs groupId="integration-path">',
          '<TabItem value="android-pax" label="Android (PAX)">',
          '',
          '```kotlin',
          '// Option A — terminal prompts for zip code after card details are entered',
          'val options = MoToOptions(enableAvsFields = true)',
          'hapi.motoSale(BigInteger("1000"), Currency.USD, options)',
          '',
          '// Option B — supply billing data from your own UI',
          'val billing = Billing(zipCode = "10001", address = "123 Main St")',
          'val options = MoToOptions(billing = billing)',
          'hapi.motoSale(BigInteger("1000"), Currency.USD, options)',
          '```',
          '',
          'Do not combine `enableAvsFields` with `billing` — they are mutually exclusive.',
          'Requires `avsForMoto` and `motoEnabled = true` (both set per merchant by Handpoint).',
          '',
          '</TabItem>',
          '</Tabs>',
          '',
          ':::info',
          'See [AVS for MOTO](/features/avs-for-moto) for prerequisites and edge cases.',
          ':::',
          '',
        ].join('\n');
      }
    }
    content = content.replace('{/* AVS_FOR_MOTO_INJECTION_POINT */}', avsNote);
  }

  const label = flavorData.label || flavorKey.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const supportedPaths = PATHS.filter(p => flavorData[p] === 'public');
  const pathsJson = JSON.stringify(supportedPaths);
  const flavorMeta = (FLAVOR_DESCRIPTIONS[capKey] || {})[flavorKey] || {};
  const description = flavorMeta.description || '';
  const anchor = flavorMeta.anchor || flavorKey;
  const descAttr = description ? ` description="${description}"` : '';

  return `
### ${label} {#${anchor}}

<FlavorSection${descAttr} paths={${pathsJson}}>

${content}

</FlavorSection>
`;
}

/**
 * Build the full section for a capability that has flavors.
 * Returns the ## heading + CapabilitySummary + acquirer note + flavor accordions.
 */
function buildFlavorCapabilitySection(cap, capData, acquirer) {
  const heading = CAPABILITY_HEADINGS[cap] || cap.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const anchor = cap;

  const noteBlock = acquirer.notes
    ? `\n:::note ${acquirer.name}\n${acquirer.notes.trim()}\n:::\n`
    : '';

  const flavorBlocks = Object.entries(capData.flavors)
    .filter(([, fd]) => isFlavorVisible(fd))
    .map(([flavorKey, flavorData]) => buildFlavorBlock(cap, flavorKey, flavorData, acquirer))
    .filter(Boolean)
    .join('\n');

  return `
## ${heading} {#${anchor}}

${noteBlock}
${flavorBlocks}
`;
}

function buildPage(slug, a) {
  const caps = a.capabilities || {};
  const sections = [];

  // Determine which top-level capabilities are covered by flavors elsewhere
  // so we can suppress their standalone sections.
  // Rule: if sale has a moto-sale flavor, skip the standalone moto section.
  const coveredByFlavor = new Set();
  for (const [cap, capData] of Object.entries(caps)) {
    if (capData && capData.flavors) {
      if (capData.flavors['moto-sale'] && isFlavorVisible(capData.flavors['moto-sale'])) {
        coveredByFlavor.add('moto');
      }
    }
  }

  const hasFlavors = Object.values(caps).some(c => c && c.flavors && Object.keys(c.flavors).length > 0);

  for (const cap of CAPABILITY_ORDER) {
    if (!caps[cap] || !isVisible(caps[cap])) continue;
    if (coveredByFlavor.has(cap)) continue;

    const capData = caps[cap];

    if (capData.flavors && Object.keys(capData.flavors).length > 0) {
      // Render as flavor accordion section
      sections.push(buildFlavorCapabilitySection(cap, capData, a));
    } else {
      // Existing behavior: render partials directly
      for (const partialName of (CAPABILITY_PARTIALS[cap] || [])) {
        const file = path.join(PARTIALS_DIR, `${partialName}.mdx`);
        if (!fs.existsSync(file)) continue;
        let content = fs.readFileSync(file, 'utf8');
        const note = a.notes
          ? `:::note ${a.name}\n${a.notes.trim()}\n:::\n`
          : '';
        content = content.replace('{/* ACQUIRER_NOTE_INJECTION_POINT */}', note);

        if (partialName === 'moto') {
          const avsCaps = caps['avs-for-moto'];
          let avsNote = '';
          if (avsCaps && isVisible(avsCaps)) {
            const supportedPaths = PATHS.filter(p => avsCaps[p] === 'public' || avsCaps[p] === 'coming-soon');
            const pathLabels = supportedPaths.map(p => PATH_LABELS[p]).join(' and ');
            avsNote = `### Address Verification Service (AVS)\n\n${a.name} supports optional Address Verification (AVS) for MOTO Sale and Pre-Authorization — on ${pathLabels} only, for now. Refunds and referenced operations never carry billing data.\n\nTurning it on for a merchant requires \`avsForMoto\` (an internal flag Handpoint sets per merchant, default \`false\`) and \`motoEnabled = true\`.\n\n:::info\nSetup, code samples for both integration paths, and known limitations are covered in [AVS for MOTO](/features/avs-for-moto).\n:::\n`;
          }
          content = content.replace('{/* AVS_FOR_MOTO_INJECTION_POINT */}', avsNote);
        }

        sections.push(content);
      }
    }
  }

  const notesBlock = a.notes
    ? `:::info Acquirer notes\n${a.notes.trim()}\n:::\n`
    : '';

  // Strip 'flavors' from the caps JSON passed to CapabilitySummary (it doesn't need it)
  const capsForComponent = {};
  for (const [k, v] of Object.entries(caps)) {
    const {flavors: _f, ...pathMap} = v;
    capsForComponent[k] = pathMap;
  }
  const capsJson = JSON.stringify(capsForComponent);

  const imports = [
    "import Tabs from '@theme/Tabs';",
    "import TabItem from '@theme/TabItem';",
    "import NotSupported from '@site/src/components/NotSupported';",
    "import ComingSoon from '@site/src/components/ComingSoon';",
    "import AcquirerPageHeader from '@site/src/components/AcquirerPageHeader';",
    "import CapabilitySummary from '@site/src/components/CapabilitySummary';",
  ];
  if (hasFlavors) {
    imports.push("import FlavorSection from '@site/src/components/FlavorSection';");
  }

  return [
    buildFrontmatter(slug, a),
    '',
    ...imports,
    '',
    `export const _caps = ${capsJson};`,
    '',
    `<AcquirerPageHeader currentSlug="${slug}" />`,
    '',
    '## Functionalities',
    '',
    '<CapabilitySummary capabilities={_caps} />',
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
      .map(([k, v]) => {
        // Include flavor names if present
        if (v.flavors) {
          const flavorNames = Object.keys(v.flavors).filter(fk => isFlavorVisible(v.flavors[fk])).join('+');
          return `${k}(${flavorNames})`;
        }
        return k;
      });
    const interacNote = a.interac ? ' | interac: true' : '';
    lines.push(`${a.name} | geography: ${a.geography} | ${caps.join(', ')} | cards: ${(a['card-brands'] || []).join(', ')}${interacNote} | url: /acquirers/${slug}`);
  }
  lines.push(
    '',
    '## Integration paths',
    'cloud-api | cloud/integrated mode | PAX terminal commanded via Handpoint Cloud API',
    'android-pax | native on-terminal | PAX devices',
    'android-hilite | bluetooth | HiLite (DATECS) devices',
    'ios-hilite | bluetooth | HiLite (DATECS) devices',
    'cordova | native SDK wrapper | PAX + HiLite devices',
    '',
    '## Sale flavors',
    'emv-sale | chip or contactless card-present sale',
    'key-entry-sale | manual card number entry on PAX terminal screen',
    'moto-sale | back-office remote sale using stored card token, no reader required',
    'sale-and-tip | tip collected at terminal during sale',
    'sale-and-tokenize | card tokenized during sale for future card-not-present charges',
    '',
    '## Refund flavors',
    'card-present | linked or unlinked refund with card present at terminal',
    'moto-refund | back-office remote refund using original transaction GUID, no reader required',
    '',
    '## Reference',
    '/reference/acquirer-capabilities-matrix',
    '/reference/transaction-result-object',
    '/reference/error-codes',
  );
  return lines.join('\n');
}

function getMarkets(geography) {
  if (!geography) return [];
  const geo = geography.toLowerCase();
  const markets = [];
  if (geo.includes('us') || geo.includes('canada')) markets.push('us-canada');
  if (geo.includes('eu')) markets.push('eu');
  return markets;
}

/** Write src/data/acquirerDetails.js — imported by IntegrationWizard */
function buildAcquirerDetailsData(acquirers) {
  const list = Object.entries(acquirers)
    .filter(([, a]) => a.status === 'active')
    .map(([slug, a]) => ({
      slug,
      name: a.name,
      geography: a.geography || '',
      markets: getMarkets(a.geography),
      cardBrands: a['card-brands'] || [],
      capabilities: a.capabilities || {},
    }));

  return [
    '// Auto-generated from data/acquirers.yaml — do not edit directly.',
    '// Regenerated by: node scripts/generate-acquirer-pages.js',
    '',
    `export const ACQUIRER_DETAILS = ${JSON.stringify(list, null, 2)};`,
    '',
  ].join('\n');
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
  fs.writeFileSync(ACQUIRER_DETAILS_OUT, buildAcquirerDetailsData(acquirers));

  console.log(`✓ Generated ${count} acquirer pages + static/llms.txt + src/data/acquirers.js + src/data/acquirerDetails.js`);
}

if (require.main === module) main();

module.exports = { isVisible, isFlavorVisible, aggregate, buildFrontmatter, buildSummaryTable, buildPage, buildLlmsTxt };
