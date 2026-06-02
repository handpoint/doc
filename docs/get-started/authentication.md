---
title: Authentication
sidebar_position: 2
description: How to authenticate with the Handpoint Cloud API.
---

# Authentication

## REST API — API Keys

Each merchant account has one or more API keys. The API key is passed in every REST API request using the `ApiKeyCloud` header:

```http
ApiKeyCloud: YOUR_MERCHANT_API_KEY
```

**Key facts:**
- Credentials are **per-merchant** — the same API key is valid for all terminals assigned to that merchant.
- A merchant can have **multiple API keys**, but all of them belong to the same merchant and are not shared across merchants.
- POS applications that serve multiple merchants must implement logic to map each merchant to their correct API key.

## REST API — Base URL

The base URL depends on whether the PAX terminal is a **debug device** or a **production device**:

| Device type | Base URL | Environment |
|---|---|---|
| PAX debug device | `https://cloud.handpoint.io` | Staging — TEST/DEMO merchant |
| PAX production device | `https://cloud.handpoint.com` | Production — live merchant |

Your POS application should include logic to select the correct base URL based on the device in use. This mapping is typically done at configuration time (not runtime).

:::caution
Staging (`.io`) and production (`.com`) credentials are **not interchangeable**. A production merchant key will not work against the staging endpoint, and vice versa.
:::

## Android SDK — SSK (Shared Secret Key)

The Android SDK uses an SSK (Shared Secret Key) for authentication. The SSK has a **1:1 relationship with the merchant** — each merchant has exactly one SSK, and it is unique to that merchant.

The SSK is passed at SDK initialisation:

```kotlin
val hapi = HapiFactory.getHapi(ssk = "YOUR_MERCHANT_SSK", context = applicationContext, ...)
```

## iOS SDK — HiLite (Bluetooth)

Authentication for iOS HiLite integrations uses the same merchant-scoped credential model. Contact your Handpoint Integration Support engineer for the correct credentials for your merchant.

## Staging vs Production

| Environment | Base URL | Use |
|---|---|---|
| Staging | `https://cloud.handpoint.io` | PAX debug devices; TEST/DEMO merchant |
| Production | `https://cloud.handpoint.com` | Live merchant transactions |

Staging credentials are provisioned for debug PAX devices and TEST/DEMO HiLite merchants by the Handpoint Integration Support team. Production credentials are provisioned per merchant via the TMS.
