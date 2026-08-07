# Functionalities — Dual-Axis Navigation Design

**Date:** 2026-08-03  
**Status:** Awaiting user review  
**Scope:** Sidebar restructure + feature pages for the Handpoint Developer Portal (`docs-v2` branch)

---

## Problem

The current "Functionalities" sidebar lists acquirer pages flat under region groups. Two developer types are underserved:

1. **Acquirer-first developer** — knows their acquirer, wants to drill into supported operations quickly without reading a monolithic page.
2. **Feature-first developer** — evaluating which acquirer to use, or verifying whether a specific feature is available, needs a cross-acquirer view per operation.

Additionally, the sidebar structure and the capability data are maintained in separate files (`sidebars.js` vs `acquirerCaps.js`), so adding or reordering an acquirer requires two edits.

---

## Goals

1. Single source of truth: editing `acquirerCaps.js` propagates to sidebar, feature pages, and the full matrix — no other file needs touching.
2. Acquirer-first nav: collapsible acquirer entries that expose only their supported operations as sub-items.
3. Feature-first nav: one page per operation, showing all acquirers + SDK implementation — internal-only.
4. No disruption to existing acquirer pages or external URLs.

---

## Architecture

### 1. Data layer — `src/data/acquirerCaps.js`

**Change:** Add `region: 'us' | 'canada' | 'eu'` field to each acquirer object.  
**Change:** Convert from ESM (`export const`) to CJS (`module.exports`) so `sidebars.js` (Node.js / CJS context) can `require()` it directly.

All React component imports (`import { ACQUIRERS } from '@site/src/data/acquirerCaps'`) continue to work — webpack handles CJS `module.exports` objects as named exports.

No other schema changes. Capabilities, notes, portalNote, name, subtitle remain exactly as-is.

Regions map:
```
us      → "United States"   (tsys, paysafe-tsys, vantiv)
canada  → "Canada"          (tsys-tns, tns)
eu      → "Europe"          (omnipay-emp, omnipay-lloyds, omnipay-paystrax, teya)
```

`acquirers.js` (the thin duplicate file) is deleted — fully superseded.

---

### 2. Sidebar — `sidebars.js`

Replace the hardcoded `acquirersSidebar` with a programmatically generated structure. `sidebars.js` requires `acquirerCaps.js` and builds two branches under "Functionalities":

#### Branch A — By Acquirer

```
United States
  TSYS                       ← category, link → docs id: acquirers/tsys
    ↳ Sale                   ← type: link, href: /acquirers/tsys#sale
    ↳ Refund
    ↳ Pre-Authorization      ← only emitted if tsys.caps['pre-auth'] has ≥1 'public' path
    ↳ MOTO
    ↳ Tip Adjustment
    ↳ Tokenization
    ↳ Batch Operations
  PAYSAFE
    ↳ Sale
    ↳ Refund
    ↳ Reversal
    ↳ Paysafe Token          ← manually added entry (not a caps key — see note)
  VANTIV
    ...
Canada
  PAYSAFE + Interac
    ...
  TNS (Interac)
    ...
Europe
  EmerchantPay               ← own entry, NOT grouped with Lloyds
  Lloyds                     ← own entry
  Paystrax
  TEYA
```

**Generation logic:**
```js
const REGIONS = [
  { id: 'us', label: 'United States' },
  { id: 'canada', label: 'Canada' },
  { id: 'eu', label: 'Europe' },
];

function supportedOps(acq) {
  return DISPLAY_ORDER
    .filter(key => acq.caps[key] && Object.values(acq.caps[key]).some(v => v === 'public'))
    .map(key => ({
      type: 'link',
      label: CAPABILITY_LABELS[key],
      href: `/acquirers/${acq.id}#${key}`,
    }));
}

function acquirerCategory(acq) {
  return {
    type: 'category',
    label: acq.name,
    link: { type: 'doc', id: `acquirers/${acq.id}` },
    collapsible: true,
    collapsed: true,
    items: supportedOps(acq),
  };
}
```

**Note on Paysafe Token:** `paysafe-token` is a field in the transaction result, not a transaction operation — it won't appear in `caps`. A manual `type: link` entry is appended to the Paysafe category items pointing to `/acquirers/paysafe-tsys#paysafe-token`.

#### Branch B — By Feature

```
By Feature
  Sale              ← type: doc, id: functionalities/sale
  Refund            ← type: doc, id: functionalities/refund
  Reversal
  Partial Reversal
  Tip Adjustment
  Pre-Authorization
  MOTO
  Tokenization
  Void
  Batch Operations
  Money Remittance
```

Generated from `DISPLAY_ORDER`:
```js
DISPLAY_ORDER.map(key => ({
  type: 'doc',
  id: `functionalities/${key}`,
  label: CAPABILITY_LABELS[key],
}))
```

This branch is automatically hidden in production by the existing `sidebarItemsGenerator` (which filters pages with `visibility: internal` frontmatter). No special handling needed.

#### Back Office (unchanged)
```
Back Office
  REST API (No Reader)
  Transaction Feed API
  TMS APIs
```

---

### 3. New component — `AcquirerSupportMatrix.jsx`

**Location:** `src/components/AcquirerSupportMatrix.jsx`  
**Props:** `capability` (string — key from `DISPLAY_ORDER`)

Renders a table:
- **Rows:** all acquirers from `ACQUIRERS`
- **Columns:** the 5 integration paths (cloud-api, android-pax, android-hilite, ios-hilite, cordova)
- **Cells:** ✓ (green) for `'public'`, ✗ (red) for `'not-supported'`, `—` for absent
- **Notes column:** shows `acq.notes[capability]` if present
- **Acquirer column:** links to `/acquirers/{acq.id}` page

No `docsEnv` check needed inside this component — it only appears on internal pages so it never renders in production.

---

### 4. New feature pages — `docs/functionalities/*.mdx`

**11 files** (one per key in `DISPLAY_ORDER`):

```
docs/functionalities/
  sale.mdx
  refund.mdx
  reversal.mdx
  partial-reversal.mdx
  tip-adjustment.mdx
  pre-auth.mdx
  moto.mdx
  tokenization.mdx
  void.mdx
  batching.mdx
  money-remittance.mdx
```

**Common frontmatter:**
```yaml
---
id: sale
title: Sale
visibility: internal
sidebar_label: Sale
---
```

**Common page structure:**

```mdx
---
id: sale
title: Sale
visibility: internal
---

import AcquirerSupportMatrix from '@site/src/components/AcquirerSupportMatrix';
import Sale from '@site/src/partials/functions/sale.mdx';

# Sale

<brief 2-sentence description of the operation — what it does, when to use it>

## Acquirer support

<AcquirerSupportMatrix capability="sale" />

## Implementation

<Sale />
```

The code examples (the `<Sale />` partial) are acquirer-agnostic and already cover all 5 SDK tabs (cloud-api, android-pax, android-hilite, ios-hilite, cordova) with real working examples.

**Pre-auth** is a special case — it has 3 partials (create, capture, void). Its feature page includes all three in sequence with H3 sub-headings.

---

## What Does NOT Change

- All 9 acquirer MDX pages (`docs/acquirers/*.mdx`) — structure, content, URLs unchanged
- The existing partials in `src/partials/functions/` — content unchanged, just imported
- `docusaurus.config.js` — no routing changes needed (`routeBasePath: '/'` already covers `functionalities/`)
- The full-matrix reference page (`docs/reference/acquirer-capabilities-matrix.mdx`)
- The `AcquirerPageHeader` and `CapabilitySummary` components

---

## File Change Summary

| File | Action |
|---|---|
| `src/data/acquirerCaps.js` | Edit: add `region`, convert ESM→CJS |
| `src/data/acquirers.js` | Delete (superseded) — after updating GlobalFilters |
| `src/theme/NavbarItem/GlobalFilters.jsx` | Edit: import ACQUIRERS from acquirerCaps; rename `slug` refs → `id` |
| `sidebars.js` | Rewrite: generate from acquirerCaps |
| `src/components/AcquirerSupportMatrix.jsx` | Create |
| `docs/functionalities/sale.mdx` | Create |
| `docs/functionalities/refund.mdx` | Create |
| `docs/functionalities/reversal.mdx` | Create |
| `docs/functionalities/partial-reversal.mdx` | Create |
| `docs/functionalities/tip-adjustment.mdx` | Create |
| `docs/functionalities/pre-auth.mdx` | Create |
| `docs/functionalities/moto.mdx` | Create |
| `docs/functionalities/tokenization.mdx` | Create |
| `docs/functionalities/void.mdx` | Create |
| `docs/functionalities/batching.mdx` | Create |
| `docs/functionalities/money-remittance.mdx` | Create |

**Total:** 2 edits, 1 delete, 1 component, 11 MDX pages.

---

## Risks & Mitigations

| Risk | Mitigation |
|---|---|
| `sidebars.js` CJS `require()` fails on ESM `acquirerCaps.js` | Convert caps file to CJS — webpack handles it fine for React imports |
| Anchor links (`#sale`) break if acquirer page H2 IDs change | H2 IDs in Docusaurus are derived from heading text, which is stable (`## Sale` → `#sale`) |
| `acquirers.js` imported somewhere other than identified | Already found: `GlobalFilters.jsx` uses `ACQUIRERS[].slug` — update to `id` before deleting |
| Pre-auth page is more complex (3 partials) | Handle explicitly with H3 sub-headings — Create / Capture / Void |
