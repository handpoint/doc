---
title: Authentication
sidebar_position: 2
description: How to authenticate with the Handpoint Cloud API.
---

# Authentication

## REST API — API Keys

The REST API integration commands a PAX terminal running the Handpoint Android SDK in **cloud/integrated mode**. Your POS application calls the Handpoint Cloud API, which forwards the command to the terminal. For card-present operations the PAX terminal must be connected and initialised.

Each merchant account has one or more API keys. The API key is passed in every REST API request using the `ApiKeyCloud` header:

```http
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

**Key facts:**
- Credentials are **per-merchant** — the same API key is valid for all terminals assigned to that merchant.
- A merchant can have **multiple API keys**, but all of them belong to the same merchant and are not shared across merchants.
- POS applications that serve multiple merchants must implement logic to map each merchant to their correct API key.

## REST API — Base URL

The base URL is determined by the **PAX device type** — debug or production:

| Device type | Base URL | Notes |
|---|---|---|
| PAX debug device | `https://cloud.handpoint.io` | Staging environment only |
| PAX production device | `https://cloud.handpoint.com` | Production environment — DEMO or live merchant |

Your POS application should include logic to select the correct base URL based on the device in use. This mapping is typically done at configuration time, not at runtime.

### Production environment — DEMO vs live merchants

The production environment (`https://cloud.handpoint.com`) supports **two merchant types**:

- **DEMO merchant** — uses a test acquirer that mocks real acquirer responses. REST API integrators use this during development on a production PAX device. Credentials are provided by Handpoint Integration Support.
- **Live merchant** — processes real transactions against the configured acquirer. Each live merchant receives their own unique credentials when they go live. These are **not shared** with any other merchant, including the DEMO merchant used during development.

:::caution
`.io` (staging) and `.com` (production) credentials are not interchangeable. When a merchant goes live, new unique credentials are issued — they do not inherit the DEMO merchant credentials.
:::

## Android SDK — SSK (Shared Secret Key)

The Android SDK uses an SSK (Shared Secret Key) for authentication. The SSK has a **1:1 relationship with the merchant** — each merchant has exactly one SSK, and it is unique to that merchant.

The SSK is passed at SDK initialisation:

```kotlin
val hapi = HapiFactory.getHapi(ssk = "YOUR_MERCHANT_SSK", context = applicationContext, ...)
```

## iOS SDK — HiLite (Bluetooth)

Authentication for iOS HiLite integrations uses the same merchant-scoped credential model. Contact your Handpoint Integration Support engineer for the correct credentials for your merchant.

## Summary — environments and credentials

| Integration path | Endpoint | Device | Merchant type |
|---|---|---|---|
| REST API — staging | `https://cloud.handpoint.io` | PAX debug device | DEMO only |
| REST API — production | `https://cloud.handpoint.com` | PAX production device | DEMO or live |
| Android / iOS SDK (BT) | Bluetooth — no HTTP endpoint | HiLite (any) | DEMO or live |

**HiLite devices** (Android BT and iOS BT) connect via Bluetooth to the native SDK — they do not use the REST API or any HTTP endpoint. The merchant context (DEMO or live) is determined by the SSK/credentials configured in the SDK. There is no staging path for HiLite — testing is done against the DEMO merchant on production.

Credentials are provisioned by Handpoint Integration Support for DEMO merchants. Live merchant credentials are provisioned per merchant via the TMS when the merchant goes live.

## Back-office operations and integration path

Back-office operations — tip adjustment, reversal, partial reversal, pre-authorization capture, and the transaction feed — are **always available regardless of the integration path** used for the original card-present transaction. They run server-side via the Handpoint Cloud API and require only the merchant API key.

This means:
- A sale initiated from an **Android SDK** app can have its tip adjusted via the **Cloud API** back office.
- A sale from a **Cloud API** integration can have a partial reversal submitted via the same endpoint, even if the merchant also uses Android SDK terminals for other operations.
- **Multi-MID** back-office operations use the same API key with `externalId` to route to the correct sub-merchant account — see [Multi-MID](/reference/multi-mid).

The only requirement is that the back-office operation is supported by the acquirer for that transaction type. See the [Acquirer Capabilities Matrix](/reference/acquirer-capabilities-matrix) for per-acquirer support.
