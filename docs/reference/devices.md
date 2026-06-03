---
title: Supported devices
sidebar_position: 4
description: All payment terminals supported by Handpoint — PAX and HiLite (DATECS). Complete list sourced from TMS device registry.
hide_table_of_contents: false
---

# Supported devices

All Handpoint card-present integrations require a physical payment terminal. Devices fall into two families based on connection method.

| Family | Connection | Integration paths |
|---|---|---|
| **PAX** | Wi-Fi / 4G / Ethernet | Android SDK (native on-terminal), REST API (integrated mode) |
| **HiLite (DATECS)** | Bluetooth | Android SDK (HiLite BT), iOS SDK (HiLite BT), Cordova |

---

## HiLite (DATECS)

Bluetooth card reader manufactured by DATECS. Connects wirelessly to an Android or iOS host device running the Handpoint SDK. Comes pre-injected for the Handpoint production environment with a TEST/DEMO merchant for development. Request a device from your referring partner — see [Development hardware](/get-started/development-hardware).

### HiLite

![HiLite](pathname:///img/devices/HiLite.jpg)

| | |
|---|---|
| **TMS device type** | `MPED400` |
| **Connection** | Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Integration paths** | Android SDK (HiLite BT), iOS SDK (HiLite BT), Cordova |

---

## PAX terminals

Android-based smart terminals. Support two integration paths: Android SDK (code runs natively on the device) or REST API (your POS calls the Handpoint Cloud, which commands the terminal in integrated mode). PAX production devices reject unsigned APKs — a PAX debug device is required for SDK development. See [Development hardware](/get-started/development-hardware).

### PAX A920 / A920 Pro

![PAX A920](pathname:///img/devices/PAXA920.png)
![PAX A920 Pro](pathname:///img/devices/PAXA920PRO.png)

| | |
|---|---|
| **TMS device types** | `PAXA920`, `PAXA920PRO` |
| **Form factor** | Handheld smart terminal |
| **Connectivity** | Wi-Fi, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | v6.6.7+ |

---

### PAX A920 MAX

![PAX A920 MAX](pathname:///img/devices/PAXA920MAX.jpg)

| | |
|---|---|
| **TMS device type** | `PAXA920MAX` |
| **Form factor** | Handheld smart terminal (large screen) |
| **Connectivity** | Wi-Fi, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A930

| | |
|---|---|
| **TMS device type** | `PAXA930` |
| **Form factor** | Handheld smart terminal |
| **Connectivity** | Wi-Fi, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A910 / A910S

![PAX A910S](pathname:///img/devices/PAXA910S.jpg)

| | |
|---|---|
| **TMS device types** | `PAXA910`, `PAXA910S` |
| **Form factor** | Handheld smart terminal |
| **Connectivity** | Wi-Fi, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A80

![PAX A80](pathname:///img/devices/PAXA80.png)

| | |
|---|---|
| **TMS device type** | `PAXA80` |
| **Form factor** | Countertop smart terminal |
| **Connectivity** | Ethernet, Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | v6.7.0+ |

---

### PAX A800

![PAX A800](pathname:///img/devices/PAXA800.jpg)

| | |
|---|---|
| **TMS device type** | `PAXA800` |
| **Form factor** | Countertop smart terminal with large screen |
| **Connectivity** | Ethernet, Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | v7.1001.0+ |

---

### PAX A8700

![PAX A8700](pathname:///img/devices/PAXA8700.jpg)

| | |
|---|---|
| **TMS device type** | `PAXA8700` |
| **Form factor** | Countertop smart terminal |
| **Connectivity** | Ethernet, Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A8900

![PAX A8900](pathname:///img/devices/PAXA8900.jpg)

| | |
|---|---|
| **TMS device type** | `PAXA8900` |
| **Form factor** | Countertop smart terminal |
| **Connectivity** | Ethernet, Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A6630 / A6650

![PAX A6630](pathname:///img/devices/PAXA6630.jpg)
![PAX A6650](pathname:///img/devices/PAXA6650.jpg)

| | |
|---|---|
| **TMS device types** | `PAXA6630`, `PAXA6650` |
| **Form factor** | Handheld smart terminal |
| **Connectivity** | Wi-Fi, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | v7.1011.0+ (A6630) |

---

### PAX A60

![PAX A60](pathname:///img/devices/PAXA60.png)

| | |
|---|---|
| **TMS device type** | `PAXA60` |
| **Form factor** | Compact handheld terminal |
| **Connectivity** | Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A35

![PAX A35](pathname:///img/devices/PAXA35.jpg)

| | |
|---|---|
| **TMS device type** | `PAXA35` |
| **Form factor** | Compact handheld terminal |
| **Connectivity** | Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | v6.7.0+ |

---

### PAX A50 / A50S

![PAX A50](pathname:///img/devices/PAXA50.png)

| | |
|---|---|
| **TMS device types** | `PAXA50`, `PAXA50S` |
| **Form factor** | Compact handheld terminal |
| **Connectivity** | Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A30

| | |
|---|---|
| **TMS device type** | `PAX30` |
| **Form factor** | Entry-level smart terminal |
| **Connectivity** | Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A77

![PAX A77](pathname:///img/devices/PAXA77.png)

| | |
|---|---|
| **TMS device type** | `PAXA77` |
| **Form factor** | Handheld smart terminal |
| **Connectivity** | Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A960

![PAX A960](pathname:///img/devices/PAXA960.jpg)

| | |
|---|---|
| **TMS device type** | `PAXA960` |
| **Form factor** | Handheld smart terminal |
| **Connectivity** | Wi-Fi, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX ARIES6 / ARIES8

| | |
|---|---|
| **TMS device types** | `PAXARIES6`, `PAXARIES8` |
| **Form factor** | Biometric smart terminal |
| **Connectivity** | Wi-Fi, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe, fingerprint |

---

### PAX E500 / E700 / E800

| | |
|---|---|
| **TMS device types** | `PAXE500`, `PAXE700`, `PAXE800` |
| **Form factor** | ECR / integrated POS terminal |
| **Connectivity** | Ethernet, Wi-Fi |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX IM25 / IM30

![PAX IM25](pathname:///img/devices/PAXIM25.jpg)
![PAX IM30](pathname:///img/devices/PAXIM30.png)

| | |
|---|---|
| **TMS device types** | `PAXIM25`, `PAXIM30` |
| **Form factor** | Integrated module / OEM |
| **Connectivity** | Serial, USB, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | IM25: v7.1009.5+ |

---

### PAX A3700

![PAX A3700](pathname:///img/devices/PAXA3700.jpg)

| | |
|---|---|
| **TMS device type** | `PAXA3700` |
| **Form factor** | Portable countertop terminal |
| **Connectivity** | Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | v7.1010.6+ |

---

## Complete TMS device type reference

| Code | Device | Image |
|---|---|---|
| `MPED400` | HiLite | ✅ |
| `PAXA920` | PAX A920 | ✅ |
| `PAXA920PRO` | PAX A920 Pro | ✅ |
| `PAXA920MAX` | PAX A920 MAX | ✅ |
| `PAXA930` | PAX A930 | ❌ |
| `PAXA910` | PAX A910 | — |
| `PAXA910S` | PAX A910S | ✅ |
| `PAXA80` | PAX A80 | ✅ |
| `PAXA800` | PAX A800 | ✅ |
| `PAXA8700` | PAX A8700 | ✅ |
| `PAXA8900` | PAX A8900 | ✅ |
| `PAXA6630` | PAX A6630 | ✅ |
| `PAXA6650` | PAX A6650 | ✅ |
| `PAXA60` | PAX A60 | ✅ |
| `PAXA35` | PAX A35 | ✅ |
| `PAXA50` | PAX A50 | ✅ |
| `PAXA50S` | PAX A50S | — |
| `PAX30` | PAX A30 | ❌ |
| `PAXA77` | PAX A77 | ✅ |
| `PAXA960` | PAX A960 | ✅ |
| `PAXARIES6` | PAX ARIES6 | ❌ |
| `PAXARIES8` | PAX ARIES8 | ❌ |
| `PAXE500` | PAX E500 | ❌ |
| `PAXE700` | PAX E700 | ❌ |
| `PAXE800` | PAX E800 | ❌ |
| `PAXIM25` | PAX IM25 | ✅ |
| `PAXIM30` | PAX IM30 | ✅ |
| `PAXA3700` | PAX A3700 | ✅ |
| `VT` | Virtual Terminal | — |

**Missing images** (add to `static/img/devices/` as `PAXA930.jpg`, `PAX30.jpg`, `PAXARIES6.jpg`, `PAXARIES8.jpg`, `PAXE500.jpg`, `PAXE700.jpg`, `PAXE800.jpg`):

- `PAXA930` — PAX A930
- `PAX30` — PAX A30
- `PAXARIES6` — PAX ARIES6
- `PAXARIES8` — PAX ARIES8
- `PAXE500` — PAX E500
- `PAXE700` — PAX E700
- `PAXE800` — PAX E800

:::info
Product images sourced from PAX Technology or Handpoint marketing assets. Place new images in `static/img/devices/` matching the TMS code as the filename (e.g. `PAXARIES6.jpg`), then rebuild.
:::
