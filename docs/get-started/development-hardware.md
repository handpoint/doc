---
title: Development hardware
sidebar_position: 4
description: Hardware requirements for SDK-based integrations.
---

# Development hardware

## REST API integrations

REST API integrations do not require physical hardware. Use the sandbox environment with your API key.

## Android SDK — PAX devices

PAX production terminals run firmware that **rejects unsigned APKs**. You cannot sideload a development build on a production PAX device.

To develop with Android SDK (PAX):

1. **Request a PAX debug device** from your Handpoint integration engineer. Debug devices accept unsigned APKs.
2. Build your APK in debug mode: `./gradlew assembleDebug`
3. Install via ADB: `adb install app-debug.apk`
4. The debug device connects to sandbox by default.

:::caution
Do not attempt to install unsigned APKs on production PAX terminals — this will fail and may trigger security alerts on the device.
:::

## Android SDK — HiLite (DATECS) devices

HiLite devices connect via Bluetooth. You need:

1. A HiLite device (contact your Handpoint integration engineer for the loaner program or purchase options)
2. Enable Bluetooth on your Android development phone/tablet
3. Pair the HiLite device via your app using the `ConnectionMethod.BLUETOOTH` connection type

No special device mode is required — HiLite accepts connections from any paired Android app.

## iOS SDK — HiLite (DATECS) devices

iOS connects to HiLite via Bluetooth (external accessory protocol: `com.datecs.pinpad`).

1. A HiLite device (same as Android above)
2. An iOS development device (iPhone or iPad)
3. A provisioning profile that includes the `com.datecs.pinpad` external accessory protocol

## Cordova

Cordova wraps the native Android SDK (PAX + HiLite) and iOS SDK (HiLite). Hardware requirements are the same as the respective native platforms above.
