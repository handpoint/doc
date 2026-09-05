# Handpoint Docs — Contributor Guide

This guide covers the conventions, structure, and components used across this documentation site. Read it before adding or editing content so your contribution feels consistent with the rest of the docs.

---

## Repository layout

```
docs/
  acquirers/        One MDX file per acquirer (epi.mdx, paysafe-tsys.mdx…)
  back-office/      Back Office REST API pages
  guides/           Use-case / vertical guides (restaurant, clinic…)
  reference/        Cross-cutting reference docs (AVS, partial approval, devices…)
  release-notes/    Release notes index
src/
  components/       React components used in MDX (FlavorSection, AcquirerPageHeader…)
  css/custom.css    All custom styles — one file, sections separated by comments
  data/             Static data used by components (acquirerCaps.js, acquirers.js…)
sidebars.js         Sidebar definitions for all doc sections
```

---

## Terminology rules

Use these names everywhere — headings, prose, link text, descriptions. The only exceptions are code identifiers (API operation names, SDK method names, flag keys) which must stay as-is.

| Use this | Not this |
|---|---|
| Remote Sale | MOTO Sale, MoTo Sale, back-office MOTO |
| Keyed Entry Sale | Key Entry Sale, MOTO key entry |
| Remote Refund | MOTO Refund, back-office refund |
| Remote Pre-Authorization | MOTO Pre-Auth |
| Partial Reversal | partial refund, partial reversal (lowercase in prose is fine) |
| card-not-present | CNP (spell it out on first mention) |

**Code identifiers that stay as-is:** `moToSale`, `moToPreAuthorization`, `motoEnabled`, `avsForMoto`, `MoToOptions`, `hapi.motoSale()`, `MOTO_NOT_ENABLED`.

---

## Acquirer page structure

Every acquirer page (`docs/acquirers/*.mdx`) follows this layout:

```mdx
---
id: <slug>
title: "<Acquirer name>"
description: "Geography. Supports: <comma-separated capability IDs>."
geography: "<US, Canada | Europe | …>"
status: active
card-brands: [Visa, Mastercard, …]
capabilities:
  sale: true
  refund: true
  # … list all supported capabilities
integration-paths:
  - cloud-api
  - android-pax
  # … list supported paths
last-reviewed: "YYYY-MM-DD"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NotSupported from '@site/src/components/NotSupported';
import AcquirerPageHeader from '@site/src/components/AcquirerPageHeader';
import FlavorSection from '@site/src/components/FlavorSection';

<AcquirerPageHeader currentSlug="<slug>" />

## Functionalities

## Sale {#sale}

### EMV Sale {#emv-sale}
…

### Keyed Entry Sale {#key-entry-sale}
…
```

**Section order** inside each acquirer page:

1. Sale
2. Refund
3. Reversal (full → partial reversal subsection)
4. Tip Adjustment
5. Pre-Authorization (create → capture → capture reversal → increase/decrease)
6. Remote Sale (card token)
7. Remote Refund
8. Tokenization
9. Money Remittance
10. Batching
11. Void (Interac-only acquirers)

Only include sections for capabilities the acquirer actually supports.

---

## Section template

Each `###` subsection inside a functionality follows this order. Omit sub-headings that have nothing to say.

```mdx
### <Name> {#anchor}

<FlavorSection description="…" paths={[…]}>

<description — one sentence, what it does>

#### When to use it
<one paragraph>

#### Implementation notes

1. …
2. …

#### Code

<Tabs groupId="integration-path">
…
</Tabs>

#### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
…

#### Errors

| Code | Meaning | Recovery |
|---|---|---|
…

#### Testing

…

</FlavorSection>
```

---

## Components

### `<AcquirerPageHeader currentSlug="…" />`

**Required** as the first element in every acquirer page, before any headings. Renders the acquirer selector and integration-path filter. Pass the page's own slug as `currentSlug`.

### `<FlavorSection description="…" paths={[…]}>`

Wraps a code variant that applies to specific integration paths. The `paths` array controls which integration-path selections show this block. The `description` is the label shown in the collapsed summary row.

```jsx
<FlavorSection description="On-device · chip, tap, or swipe" paths={["cloud-api","android-pax","android-hilite"]}>
…
</FlavorSection>
```

Available path values: `cloud-api`, `android-pax`, `android-hilite`, `ios-hilite`, `cordova`, `cordova-pax`, `cordova-hilite`, `windows-sdk-pax`, `windows-sdk-bt`, `javascript-sdk`.

### `<NotSupported />`

Drop inside a `<FlavorSection>` to mark a path as explicitly not supported (shows a "Not supported" badge rather than hiding).

### `<ComingSoon />`

Same as `NotSupported` but for planned features. Use sparingly — only when there is a concrete roadmap item.

---

## Callout conventions

| Type | When to use |
|---|---|
| `:::info` | Availability constraints, acquirer-specific scope (geography, merchant enablement) |
| `:::note` | Implementation gotchas, non-obvious behaviour that applies to most readers |
| `:::warning` | Actions with financial or compliance consequences (batch close, refund deadlines) |
| `:::tip` | Optional optimisations or shortcuts |
| `:::danger` | Never use for docs content — reserved for breaking changes in release notes |

**Do not** use a blanket callout at the top of a page to summarise acquirer restrictions. Place each restriction as an implementation note under the specific section it applies to.

---

## Heading sizes and hierarchy

```
## Sale                    ← h2: main functionality section
### EMV Sale               ← h3: flavor / variant (indented, smaller, left-border accent)
#### What this does        ← h4: sub-section within a flavor
```

The CSS enforces this hierarchy automatically — do not override heading sizes with HTML or inline styles.

---

## Adding a new acquirer page

1. Copy an existing page (e.g. `omnipay-emp.mdx`) as a starting template.
2. Add the new slug to `sidebars.js` under the correct geography category.
3. Add the acquirer to `src/data/acquirers.js` (navbar dropdown) and `src/data/acquirerCaps.js` (capability matrix).
4. Add the acquirer to `data/acquirers.yaml` if it drives any generation scripts.
5. Set `last-reviewed` to today's date in the frontmatter.

---

## Adding a new functionality section

1. Add the section under the correct position in the section order (see above).
2. Add the capability key to the page's frontmatter `capabilities:` block.
3. If it's a cross-acquirer capability, add it to `CAPABILITY_LABELS` in `src/components/CapabilitySummary.jsx` and to `CAPS_BY_ID` in `src/data/acquirerCaps.js`.

---

## Style decisions

- **No comments in MDX unless the WHY is non-obvious.** The structure itself is documentation.
- **One :::note per section, maximum.** If you have two separate notes, merge them or promote one to an implementation note.
- **Implementation notes are numbered prose, not bullet points.** Use `1.`, `2.`, `3.` — not `-`.
- **Parameter tables** use `| Name | Type | Required | Description |` as the header row, always.
- **Error tables** use `| Code | Meaning | Recovery |`.
- **Testing sections** describe how to trigger each scenario, not just that testing is possible.
- **Links**: use meaningful link text (`[Remote Sale](#remote-sale)`, not `[here](#remote-sale)`).
- **Dates** in frontmatter: ISO 8601 (`YYYY-MM-DD`).
- **Amounts in code examples**: always in smallest currency unit (cents/pence) unless the field explicitly takes major units (`originalGuid` amount in Remote Refund is an exception — it uses major units).
