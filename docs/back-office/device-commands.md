---
title: Device Control Commands
sidebar_position: 4
description: Remote device management commands — reboot, locale, brightness, unattended mode, and password protection via REST API.
---

# Device Control Commands

Use these endpoints to remotely configure and control PAX terminals via the Cloud API. No terminal interaction or SDK is required — commands are delivered over the existing message channel.

:::info Requirements
- **Handpoint Payments App version 4.6.0+** (Android SDK 7.1006.0+) must be installed on the terminal.
- **Integrated mode must be enabled** on the terminal via Handpoint TMS. A `202 Accepted` response is returned regardless of whether the command was delivered — if Integrated mode is not active on the device, the command will not execute.
:::

All endpoints share the same structure:

```
POST https://cloud.handpoint.com/devices/{terminal_type}/{serial_number}/{command}
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json
```

All endpoints return `202 Accepted` immediately. Command delivery to the device is asynchronous.

---

## `set-unattended-mode`

Enable or disable unattended (kiosk) mode on the terminal. When enabled, the bottom navigation bar (Home, Back, Recents) is hidden and the payment screen is always in the foreground. History, Analytics, and Settings tabs become inaccessible.

```http
POST https://cloud.handpoint.com/devices/PAXA920/082104578/set-unattended-mode
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "status": true
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `status` | boolean | Yes | `true` to enable unattended mode, `false` to disable |

---

## `set-locale`

Change the terminal display language.

```http
POST https://cloud.handpoint.com/devices/PAXA920/082104578/set-locale
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "locale": "en_US"
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `locale` | string | Yes | IETF BCP 47 language tag, e.g. `"en_US"`, `"en_CA"`, `"fr_FR"`, `"es_ES"` |

---

## `set-password-protected`

Enable or disable password protection on the terminal configuration screen. When enabled, accessing the configuration requires a PIN.

```http
POST https://cloud.handpoint.com/devices/PAXA920/082104578/set-password-protected
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "status": true
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `status` | boolean | Yes | `true` to enable password protection, `false` to disable |

---

## `reboot`

Reboot the terminal remotely.

```http
POST https://cloud.handpoint.com/devices/PAXA920/082104578/reboot
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "force": false
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `force` | boolean | Yes | `false` to check whether a transaction is in progress before rebooting (recommended). `true` to reboot immediately regardless of transaction state — this can interrupt an active transaction. |

---

## `set-screen-brightness`

Set the minimum and maximum screen brightness range for the terminal display.

```http
POST https://cloud.handpoint.com/devices/PAXA920/082104578/set-screen-brightness
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "minimumBrightnessLevel": 20,
  "maximumBrightnessLevel": 100
}
```

| Field | Type | Required | Constraints | Description |
|---|---|---|---|---|
| `minimumBrightnessLevel` | integer | Yes | 0–100 | Minimum brightness level (0 = off, 100 = maximum) |
| `maximumBrightnessLevel` | integer | Yes | 0–100 | Maximum brightness level |

Returns `400 Bad Request` if either value is outside 0–100.

---

## `set-reboot-time`

Schedule a daily automatic reboot at a specific hour. The actual reboot occurs at a random minute within the specified hour (e.g. `22` → reboots between 22:01–22:59) to avoid all devices rebooting simultaneously.

:::caution Production devices only
This feature is enabled for production devices only. It has no effect on development or staging devices.
:::

```http
POST https://cloud.handpoint.com/devices/PAXA920/082104578/set-reboot-time
ApiKeyCloud: YOUR_MERCHANT_API_KEY
Content-Type: application/json

{
  "hour": 2
}
```

| Field | Type | Required | Constraints | Description |
|---|---|---|---|---|
| `hour` | integer | Yes | 0–23 | Hour of day (24h clock) for the scheduled reboot |

Returns `400 Bad Request` if `hour` is outside 0–23.

---

## URL path parameters

| Parameter | Description | Example |
|---|---|---|
| `{terminal_type}` | Terminal model identifier — same value as `terminal_type` in `POST /transactions` | `PAXA920`, `PAXA8900`, `PAXA3700` |
| `{serial_number}` | Terminal serial number printed on the device label | `082104578` |
