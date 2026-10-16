// @ts-check
'use strict';

// Usage: node scripts/validate.js
// Checks consistency across data/capabilities.yaml and data/acquirers.yaml.

const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CAPABILITIES_FILE = path.join(ROOT, 'data', 'capabilities.yaml');
const ACQUIRERS_FILE = path.join(ROOT, 'data', 'acquirers.yaml');
const PARTIALS_DIR = path.join(ROOT, 'src', 'partials', 'functions');

// Capability keys that are modifiers (no partials, no panel row) — allowed in acquirers.yaml
// but not defined in capabilities.yaml.
const KNOWN_MODIFIERS = ['avs-for-moto', 'fee-mitigation'];

// Valid path identifiers for min-sdk blocks.
const VALID_SDK_PATHS = [
  'cloud-api', 'android-pax', 'android-hilite', 'ios-hilite',
  'cordova', 'javascript-sdk', 'windows-sdk', 'backoffice',
];

// Valid status values for capability path entries.
const VALID_PATH_VALUES = ['public', 'coming-soon', 'not-supported'];

// Keys in a capability block (or flavor block) that are NOT path entries.
const NON_PATH_KEYS = new Set(['flavors', 'min-sdk', 'label', 'flavor-notes']);

function main() {
  const errors = [];
  let checks = 0;

  // Load data files
  const capsRaw = yaml.load(fs.readFileSync(CAPABILITIES_FILE, 'utf8'));
  const CAPS_DEF = capsRaw.capabilities || {};

  const acquirersRaw = yaml.load(fs.readFileSync(ACQUIRERS_FILE, 'utf8'));
  const acquirers = acquirersRaw.acquirers || acquirersRaw;

  // ── Check 1: Partial files exist ──────────────────────────────────────────
  // For each capability in capabilities.yaml, verify every listed partial file
  // exists at src/partials/functions/<partial>.mdx.
  for (const [capKey, capDef] of Object.entries(CAPS_DEF)) {
    const partials = capDef.partials || [];
    for (const partial of partials) {
      checks++;
      const file = path.join(PARTIALS_DIR, `${partial}.mdx`);
      if (!fs.existsSync(file)) {
        errors.push(`[partial-missing] capabilities.yaml "${capKey}" lists partial "${partial}" but src/partials/functions/${partial}.mdx does not exist.`);
      }
    }
  }

  // ── Check 2: Acquirer capability keys are known ───────────────────────────
  const knownCapKeys = new Set([...Object.keys(CAPS_DEF), ...KNOWN_MODIFIERS]);
  for (const [slug, acquirer] of Object.entries(acquirers)) {
    const caps = acquirer.capabilities || {};
    for (const capKey of Object.keys(caps)) {
      checks++;
      if (!knownCapKeys.has(capKey)) {
        errors.push(`[unknown-capability] acquirers.yaml "${slug}" uses unknown capability key "${capKey}" (not in capabilities.yaml and not a known modifier).`);
      }
    }
  }

  // ── Check 3: Path values are valid ───────────────────────────────────────
  // For each acquirer capability block (and flavor blocks inside it),
  // non-metadata keys must have a valid path value.
  for (const [slug, acquirer] of Object.entries(acquirers)) {
    const caps = acquirer.capabilities || {};
    for (const [capKey, capData] of Object.entries(caps)) {
      if (!capData || typeof capData !== 'object') continue;

      // Check top-level path values in the capability block
      for (const [k, v] of Object.entries(capData)) {
        if (NON_PATH_KEYS.has(k)) continue;
        checks++;
        if (!VALID_PATH_VALUES.includes(v)) {
          errors.push(`[invalid-path-value] acquirers.yaml "${slug}" > "${capKey}" > "${k}": invalid value "${v}" (must be public, coming-soon, or not-supported).`);
        }
      }

      // Check path values inside flavor blocks
      const flavors = capData.flavors || {};
      for (const [flavorKey, flavorData] of Object.entries(flavors)) {
        if (!flavorData || typeof flavorData !== 'object') continue;
        for (const [k, v] of Object.entries(flavorData)) {
          if (NON_PATH_KEYS.has(k)) continue;
          checks++;
          if (!VALID_PATH_VALUES.includes(v)) {
            errors.push(`[invalid-path-value] acquirers.yaml "${slug}" > "${capKey}" > flavors > "${flavorKey}" > "${k}": invalid value "${v}" (must be public, coming-soon, or not-supported).`);
          }
        }
      }
    }
  }

  // ── Check 4: min-sdk paths are valid ─────────────────────────────────────
  for (const [slug, acquirer] of Object.entries(acquirers)) {
    const caps = acquirer.capabilities || {};
    for (const [capKey, capData] of Object.entries(caps)) {
      if (!capData || typeof capData !== 'object') continue;
      const minSdk = capData['min-sdk'];
      if (minSdk && typeof minSdk === 'object') {
        for (const sdkPath of Object.keys(minSdk)) {
          checks++;
          if (!VALID_SDK_PATHS.includes(sdkPath)) {
            errors.push(`[invalid-min-sdk-path] acquirers.yaml "${slug}" > "${capKey}" > min-sdk: unknown path key "${sdkPath}" (must be one of: ${VALID_SDK_PATHS.join(', ')}).`);
          }
        }
      }
    }
  }

  // ── Summary ───────────────────────────────────────────────────────────────
  if (errors.length === 0) {
    console.log(`✓ ${checks} checks passed`);
  } else {
    for (const err of errors) {
      console.error(err);
    }
    console.error(`\n✗ ${errors.length} error(s) found (${checks} checks run)`);
    process.exit(1);
  }
}

main();
