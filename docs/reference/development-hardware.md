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
[Manual Injection — PAX Debug Terminals](/reference/manual-injection)
:::

:::caution
Do not install unsigned APKs on production PAX terminals — this will fail and may trigger security alerts on the device.
:::

### Production PAX device

A production PAX device can also be used for development. It processes real transactions against the configured acquirer. Use test card numbers and low amounts during development, and ensure the merchant account is set up for testing with your acquirer.

---

## Android SDK / iOS SDK — HiLite (DATECS) devices

HiLite devices connect via Bluetooth. Request a HiLite device from your **referring partner**.

HiLite devices connect via **Bluetooth** to the native Android or iOS SDK — they do not use the REST API. There is no staging path for HiLite; testing is done against a **TEST/DEMO merchant** configured in production, which uses a test acquirer that mocks real acquirer responses.

When the merchant goes live, new unique credentials are issued for the live merchant account. The HiLite device continues to connect to the same production environment — the merchant type changes from DEMO to live.

**iOS:** Requires a provisioning profile that includes the `com.datecs.pinpad` external accessory protocol.

---

## Cordova

Cordova wraps the native Android SDK (PAX + HiLite) and iOS SDK (HiLite). Hardware requirements are the same as the respective native platforms above.

---

## Testing with trigger amounts {#trigger-amounts}

When testing against the **TEST/DEMO merchant** (HiLite devices) or a PAX device on the **staging environment**, use the following amounts (in **minor units** — cents/pence) to simulate specific gateway responses. These are powered by **Viscus-Dummy**, the Handpoint mock server used in staging.

All other amounts process as approved transactions.

### General transaction behaviour

| Amount | Behaviour | HTTP status |
|---|---|---|
| `3779` | Issuer response code `01` — Refer to issuer | 403 |
| `3784` | Issuer response code `05` — Not authorized | 403 |
| `3793` | Issuer response code `04` — Pick up card | 403 |
| `3757` | Partially approved | 200 |
| `3768` | Request timeout | 408 |
| `3741` | Unauthorized | 401 |

### Tip Adjustment

| Amount | Behaviour |
|---|---|
| `3784` | Issuer response code `05` — Not authorized |
| `3768` | Request timeout |

### SCA / Strong Customer Authentication

These amounts simulate issuer SCA challenges and withdrawal-limit responses. The test case code column maps to specific Viscus-Dummy test scenarios.

| Amount | Test case | Response code | Description | SCA required | `actionCode` |
|---|---|---|---|---|---|
| `6165` | — | `61` | Exceeds withdrawal amount limit | No | `0065` |
| `155` | `MCD_55_01_01` | `65` | Exceeds withdrawal frequency limit | **Yes** | `0065` |
| `165` | `MCD_65_01_01` | `65` | Exceeds withdrawal frequency limit | No | `0065` |
| `1102` | `T6_11_02` | `65` | Exceeds withdrawal frequency limit | No | `0065` |
| `1104` | `T6_11_04` | `65` | Exceeds withdrawal frequency limit | No | `0065` |
| `1110` | `T6_11_10` | `65` | Exceeds withdrawal frequency limit | No | `0065` |
| `1112` | `T6_11_12` | `65` | Exceeds withdrawal frequency limit | No | `0065` |
| `1114` | `T6_11_14` | `65` | Exceeds withdrawal frequency limit | No | `0065` |
| `1115` | `T6_11_15` | `65` | Exceeds withdrawal frequency limit | **Yes** | `0065` |
| `1116` | `T6_11_16` | `65` | Exceeds withdrawal frequency limit | **Yes** | `0065` |
| `1117` | `T6_11_17` | `65` | Exceeds withdrawal frequency limit | **Yes** | `0065` |
| `1118` | `T6_11_18` | `65` | Exceeds withdrawal frequency limit | **Yes** | `0065` |
| `1119` | `T6_11_19` | `65` | Exceeds withdrawal frequency limit | **Yes** | `0065` |
| `1101` | `T6_11_01` | `70` | Cardholder to contact issuer | **Yes** | `0070` |
| `1103` | `T6_11_03` | `70` | Cardholder to contact issuer | **Yes** | `0070` |
| `1109` | `T6_11_09` | `70` | Cardholder to contact issuer | **Yes** | `0070` |
| `1111` | `T6_11_11` | `70` | Cardholder to contact issuer | **Yes** | `0070` |

<details>
<summary>EMV data for SCA test cases</summary>

Some SCA test cases include specific EMV data injected by the mock server into the response. These are for low-level EMV testing only — most SDK integrations do not need to inspect this data.

| Amount | Test case | `emvData` |
|---|---|---|
| `1102` | `T6_11_02` | `9F36020002910A5722F90461A4F0763141` |
| `1104` | `T6_11_04` | `9F36020002910A960352251058DF033141` |
| `1110` | `T6_11_10` | `9F36020002910A555EDC4A21F1F0723141` |
| `1112` | `T6_11_12` | `9F36020002910A809B40BB8D6FCCFA3141` |
| `1114` | `T6_11_14` | `9F36020002910A8D61FDF0BF292A3C3141` |
| `1115` | `T6_11_15` | `9F36020002910A9895847308201C433730` |
| `1116` | `T6_11_16` | `9F36020002910AA07A3E62227A64C93730` |
| `1117` | `T6_11_17` | `9F36020002910A660923D5C65E19133730` |
| `1118` | `T6_11_18` | `9F36020002910A8CEDCA1DF65591393730` |
| `1119` | `T6_11_19` | `9F36020002910A3BD9FAC2CC9AB6B23730` |
| `1101` | `T6_11_01` | `910AF820D48D879DA1DA37308A023730` |
| `1103` | `T6_11_03` | `910ACE6DB89DB783C7DD37308A023730` |
| `1109` | `T6_11_09` | `910A0427E4CB8DB1DB4A37308A023730` |
| `1111` | `T6_11_11` | `910A0427E4CB8DB1DB4A37308A023730` |

</details>
