---
title: Manual Injection — PAX Debug Terminals
sidebar_label: Manual Injection (PAX Debug)
sidebar_position: 4
description: How to sideload an unsigned APK onto a PAX debug terminal for development and testing.
---

# Manual Injection — PAX Debug Terminals

PAX production terminals run hardened firmware that rejects any APK not signed with a PAX-issued key. **Manual injection** is the process of installing an unsigned debug APK onto a specially provisioned **PAX debug terminal** via ADB (Android Debug Bridge).

Debug terminals are distinct devices — they accept unsigned builds and connect automatically to the Handpoint **staging environment**. You cannot sideload onto a production terminal.

---

## Prerequisites

- A **PAX debug terminal** obtained from your referring partner (see [Development Hardware](/reference/development-hardware))
- [Android Debug Bridge (ADB)](https://developer.android.com/tools/adb) installed on your development machine
- The **PAX USB driver** for your OS — download from the PAX developer portal or request it from your Handpoint Integration Support contact
- A USB cable (Type-C or Micro-USB depending on the PAX model)

---

## Step 1 — Use the correct SDK version

Debug and production terminals require **different SDK builds**. Do not use the production release on a debug terminal.

| Terminal type | SDK version format | Example |
|---|---|---|
| **Debug** (staging) | `-RC.x-SNAPSHOT` Nexus build | `7.1012.1-RC.1-SNAPSHOT` |
| **Production** | Standard release | `7.1012.1` |

The RC/SNAPSHOT builds are published to the Handpoint private Nexus repository, not Maven Central. Your Handpoint Integration Support contact provides the Nexus credentials after a debug device is ordered.

---

## Step 2 — Configure Nexus in Gradle

Add the Handpoint Nexus repository to your project's `settings.gradle` or top-level `build.gradle`:

```groovy title="settings.gradle (or build.gradle — top level)"
dependencyResolutionManagement {
  repositories {
    google()
    mavenCentral()
    maven {
      name = "HandpointNexus"
      url = uri("https://nexus.handpoint.com/repository/...")  // URL provided by Integration Support
      credentials {
        username = "usernameProvided"
        password = "passwordProvided"
      }
    }
  }
}
```

Then reference the RC/SNAPSHOT version in your app's `build.gradle`:

```groovy title="app/build.gradle"
dependencies {
  implementation 'com.handpoint.api:sdk:7.x.x-RC.x-SNAPSHOT'
}
```

Replace `7.x.x-RC.x-SNAPSHOT` with the specific build supplied by your integration contact.

---

## Step 3 — Build an unsigned APK

Build your APK using Android Studio or the Gradle command line:

```bash
./gradlew assembleDebug
```

The resulting APK is at `app/build/outputs/apk/debug/app-debug.apk`. This is an unsigned build — it will **only install on a debug terminal**.

---

## Step 4 — Enable ADB on the PAX terminal

1. Connect the PAX terminal to your machine via USB.
2. On the terminal, navigate to the developer/ADB settings. The exact path varies by PAX model:
   - Some models expose this in **Settings → About → tap build number** several times
   - Others require an engineer menu accessible via a keycode — your Handpoint Integration Support contact can provide the unlock code for your specific model
3. Enable **USB debugging** when prompted.
4. On your development machine, confirm the device is recognised:
   ```bash
   adb devices
   ```
   The PAX terminal should appear in the list as an authorized device. If it shows `unauthorized`, accept the RSA fingerprint prompt on the terminal screen.

:::tip PAX USB driver on Windows
Windows may not recognise the PAX terminal automatically. Install the PAX-specific USB driver (provided by your integration contact or available from the PAX developer portal). After driver installation, the device appears in Device Manager under **Android Devices** or **ADB Interface**.
:::

---

## Step 5 — Install the APK

```bash
adb install app-debug.apk
```

If replacing an existing version:

```bash
adb install -r app-debug.apk
```

A successful install prints `Success`. The app appears on the terminal home screen.

:::caution Do not install on production terminals
`adb install` on a PAX production terminal will fail — PAX firmware validates APK signatures before allowing installation. If the command produces `INSTALL_FAILED_UPDATE_INCOMPATIBLE` or `INSTALL_FAILED_ABORTED`, you are likely connected to a production terminal. Check the terminal type before attempting injection.
:::

---

## Staging environment behaviour

Debug terminals connect to the Handpoint **staging environment** automatically — no configuration is required. The staging environment uses test acquirer credentials and mocks real acquirer responses.

- Use the [trigger amounts](/reference/development-hardware#trigger-amounts) to simulate specific responses (declines, timeouts, SCA challenges, etc.)
- Real card numbers are accepted but **no real money moves** — all transactions settle against the test acquirer
- Debug terminals do **not** receive EMV kernel updates via PAXStore; they stay on the firmware version provisioned by Handpoint

---

## Identifying debug vs. production terminals

| Indicator | Debug | Production |
|---|---|---|
| Accepts unsigned APKs | Yes | No |
| Environment | Staging | Production |
| Provisioned via | Handpoint (partner request) | PAXStore / partner |
| Firmware build suffix | Typically includes `-debug` or a Handpoint build tag | Standard PAX release |

When in doubt, attempt a test install: if `adb install` succeeds and the app launches against staging, it is a debug terminal.

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| `adb devices` returns empty | Driver not installed, USB debugging not enabled, or cable issue | Install PAX USB driver; re-enable USB debugging |
| `adb devices` shows `unauthorized` | Terminal has not accepted the RSA key | Tap "Allow" on the terminal screen |
| `INSTALL_FAILED_TEST_ONLY` | APK built with `testOnly=true` flag | Add `adb install -t` flag, or remove `android:testOnly="true"` from `AndroidManifest.xml` |
| `INSTALL_FAILED_UPDATE_INCOMPATIBLE` | Version code conflict with existing install | Uninstall first: `adb uninstall com.your.package` |
| App launches but cannot connect to gateway | Wrong SDK version (production release on debug terminal) | Switch to the RC/SNAPSHOT Nexus build |
| App crashes on startup | Native library ABI mismatch | Ensure your APK includes the correct ABI for the PAX model (arm64-v8a for most modern PAX) |

---

## Security scope

Debug terminals are exclusively for development. They must not be used in merchant-facing environments or connected to live acquirer credentials. The staging environment processes no real payments. Treat the Nexus credentials and the debug terminal itself as developer hardware — do not share with or deploy to merchants.
