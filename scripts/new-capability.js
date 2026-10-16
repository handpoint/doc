// @ts-check
'use strict';

// Usage: node scripts/new-capability.js <key> "<Heading>" "<Panel label>"
// Example: node scripts/new-capability.js my-feature "My Feature" "My Feature"

const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CAPABILITIES_FILE = path.join(ROOT, 'data', 'capabilities.yaml');
const PARTIALS_DIR = path.join(ROOT, 'src', 'partials', 'functions');

function main() {
  const [, , key, heading, panelLabel] = process.argv;

  if (!key || !heading || !panelLabel) {
    console.error('Usage: node scripts/new-capability.js <key> "<Heading>" "<Panel label>"');
    process.exit(1);
  }

  // Validate key is kebab-case
  if (!/^[a-z][a-z0-9-]*$/.test(key)) {
    console.error(`Error: key "${key}" must be kebab-case (lowercase letters, digits, hyphens; must start with a letter).`);
    process.exit(1);
  }

  // Check key is not already in capabilities.yaml
  const capsRaw = yaml.load(fs.readFileSync(CAPABILITIES_FILE, 'utf8'));
  const existingKeys = Object.keys(capsRaw.capabilities || {});
  if (existingKeys.includes(key)) {
    console.error(`Error: capability "${key}" already exists in data/capabilities.yaml.`);
    process.exit(1);
  }

  // Append new entry to capabilities.yaml using string manipulation
  // (preserves existing comments — avoids re-serializing the whole file)
  const existing = fs.readFileSync(CAPABILITIES_FILE, 'utf8');
  const entry = [
    '',
    `  ${key}:`,
    `    heading: "${heading}"`,
    `    panel-label: "${panelLabel}"`,
    `    partials: [${key}]`,
    `    flavors:`,
    `      ${key}:`,
    `        description: "TODO — add a one-liner description"`,
  ].join('\n');

  // Append before the trailing newline (if any), otherwise just append
  const newContent = existing.endsWith('\n')
    ? existing.slice(0, -1) + entry + '\n'
    : existing + entry + '\n';
  fs.writeFileSync(CAPABILITIES_FILE, newContent);
  console.log(`✓ Appended "${key}" to data/capabilities.yaml`);

  // Create template partial at src/partials/functions/<key>/<key>.mdx
  const partialDir = path.join(PARTIALS_DIR, key);
  const partialFile = path.join(partialDir, `${key}.mdx`);
  if (fs.existsSync(partialFile)) {
    console.warn(`  ⚠ Partial already exists — skipping: ${partialFile}`);
  } else {
    fs.mkdirSync(partialDir, { recursive: true });
    const partialContent = [
      `## ${heading}`,
      '',
      '{/* ACQUIRER_NOTE_INJECTION_POINT */}',
      '',
      'TODO — add implementation detail here.',
      '',
    ].join('\n');
    fs.writeFileSync(partialFile, partialContent);
    console.log(`✓ Created partial: src/partials/functions/${key}/${key}.mdx`);
  }

  console.log('');
  console.log(`Next steps:`);
  console.log(`  1. Edit data/capabilities.yaml — update the "${key}" flavor description.`);
  console.log(`  2. Edit src/partials/functions/${key}/${key}.mdx — fill in the implementation docs.`);
  console.log(`  3. Add "${key}:" entries under capabilities: in data/acquirers.yaml for each acquirer that supports it.`);
  console.log(`  4. Regenerate pages:`);
  console.log(`       node scripts/generate-acquirer-pages.js`);
}

main();
