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

## Sandbox vs Production

| Environment | Base URL | Keys |
|---|---|---|
| Sandbox | `https://sandbox.handpoint.com` | Sandbox keys only |
| Production | `https://cloud.handpoint.com` | Production keys only |

Sandbox keys are issued automatically when you register a developer account. Production keys are provisioned per merchant via the TMS.

:::caution
Never use production keys in development. Production keys create real charges on real cards.
:::
