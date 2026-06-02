---
title: Authentication
sidebar_position: 2
description: How to authenticate with the Handpoint Cloud API.
---

# Authentication

## API Keys

Handpoint uses API keys for authentication. Each merchant account has a unique API key.

```http
Authorization: YOUR_API_KEY
```

Include this header in every REST API request. Keep your API key secret — do not expose it in client-side code.

## OAuth Client Credentials (server-to-server)

For server-to-server integrations, Handpoint also supports OAuth 2.0 client credentials flow.

```http
POST https://cloud.handpoint.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET
```

The response contains a bearer token valid for 1 hour. Use it as:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

## Staging vs Production

| Environment | Base URL | Use |
|---|---|---|
| Staging | `https://cloud.handpoint.com` (staging key) | PAX debug devices; TEST/DEMO merchant on HiLite |
| Production | `https://cloud.handpoint.com` | Live merchant transactions |

Staging keys are provisioned for debug PAX devices and TEST/DEMO HiLite merchants by the Handpoint Integration Support team. Production keys are provisioned per merchant via the TMS.

:::caution
Staging and production share the same base URL — the environment is determined by the API key. Never use a production merchant key in development.
:::
