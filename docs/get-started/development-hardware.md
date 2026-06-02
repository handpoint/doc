---
title: Development hardware
sidebar_position: 3
description: Hardware requirements and testing guidance for Handpoint SDK integrations.
---

# Development hardware

All Handpoint integrations require a **physical device** — there is no simulated or virtual payment terminal. We recommend the development team keeps the device with them after live deployment for ongoing troubleshooting and future feature development.

---

## Android SDK — PAX devices (REST API or native on-terminal)

For card-present integrations using a PAX terminal (via REST API or Android SDK native), you can use either a **production PAX device** or a **PAX debug device**.

### PAX debug device (recommended for development)

PAX production firmware **rejects unsigned APKs**. A debug device accepts unsigned builds and connects to the Handpoint **staging environment** for testing.

1. **Request a PAX debug device from your referring partner.** Your referring partner is the entity that onboarded you to Handpoint — contact them to arrange hardware.
2. **Build your APK using RC candidates provided by the Handpoint Integration Support team.** Do not build against the production SDK release; use the release candidate builds supplied by your integration contact.
3. Install via ADB: `adb install app-debug.apk`
4. The debug device connects to the Handpoint **staging environment** automatically.

:::info PAX debug vs production devices
See the full guide on debug terminal injection and behaviour differences:
[Manual Injection — PAX Debug Terminals (ONLY)](https://handpoint.atlassian.net/wiki/spaces/PD/pages/5349212162/Manual+Injection+PAX+Debug+Terminals+ONLY)
:::

:::caution
Do not install unsigned APKs on production PAX terminals — this will fail and may trigger security alerts on the device.
:::

### Production PAX device

A production PAX device can also be used for development. It processes real transactions against the configured acquirer. Use test card numbers and low amounts during development, and ensure the merchant account is set up for testing with your acquirer.

---

## Android SDK / iOS SDK — HiLite (DATECS) devices

HiLite devices connect via Bluetooth. Request a HiLite device from your **referring partner**.

HiLite devices always connect to the **production environment** (`https://cloud.handpoint.com`) — there is no staging path for HiLite. Testing is done against a **TEST/DEMO merchant** set up on production, which uses a test acquirer that mocks real acquirer responses.

When the merchant goes live, new unique credentials are issued for the live merchant account. The HiLite device continues to connect to the same production environment — the merchant type changes from DEMO to live.

**iOS:** Requires a provisioning profile that includes the `com.datecs.pinpad` external accessory protocol.

---

## Cordova

Cordova wraps the native Android SDK (PAX + HiLite) and iOS SDK (HiLite). Hardware requirements are the same as the respective native platforms above.

---

## Testing with trigger amounts {#trigger-amounts}

When testing against the **TEST/DEMO merchant** (HiLite devices) or a PAX device on the **staging environment**, use the following amounts (in **minor units** — cents/pence) to simulate specific gateway responses.

### Tip Adjustment

| Amount | Gateway response |
|---|---|
| `3784` | Issuer response code 05 — Not authorized |
| `3768` | Request timeout |

### General transaction behaviour

| Amount | Gateway response |
|---|---|
| `3779` | Issuer response code 01 — Refer to issuer |
| `3784` | Issuer response code 05 — Not authorized |
| `3793` | Issuer response code 04 — Pick up card |
| `3757` | Partially approved |
| `3768` | Request timeout |
| `3741` | Unauthorized |

### Withdrawal limit and issuer contact responses

| Amount | Gateway response |
|---|---|
| `6165` | `responseCode 61` — Exceeds withdrawal amount limit |
| `155` | `responseCode 65` — Exceeds withdrawal frequency limit |
| `165` | `responseCode 65` — Exceeds withdrawal frequency limit |
| `1101` | `responseCode 70` — Cardholder to contact issuer |
| `1103` | `responseCode 70` — Cardholder to contact issuer |
| `1109` | `responseCode 70` — Cardholder to contact issuer |
| `1111` | `responseCode 70` — Cardholder to contact issuer |
| `1102` | `responseCode 65` — Exceeds withdrawal frequency limit |
| `1104` | `responseCode 65` — Exceeds withdrawal frequency limit |
| `1110` | `responseCode 65` — Exceeds withdrawal frequency limit |
| `1112` | `responseCode 65` — Exceeds withdrawal frequency limit |
| `1114` | `responseCode 65` — Exceeds withdrawal frequency limit |
| `1115` | `responseCode 65` — Exceeds withdrawal frequency limit |
| `1116` | `responseCode 65` — Exceeds withdrawal frequency limit |
| `1117` | `responseCode 65` — Exceeds withdrawal frequency limit |
| `1118` | `responseCode 65` — Exceeds withdrawal frequency limit |
| `1119` | `responseCode 65` — Exceeds withdrawal frequency limit |

All other amounts process as approved transactions against the TEST/DEMO merchant.
