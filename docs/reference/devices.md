---
title: Supported devices
sidebar_position: 4
description: All payment terminals supported by Handpoint — PAX, HiLite family, Telpo, and Datecs. Complete list sourced from TMS device registry.
hide_table_of_contents: false
---

# Supported devices

All Handpoint card-present integrations require a physical payment terminal. Devices fall into two families based on connection method.

| Family | Connection | Integration paths |
|---|---|---|
| **PAX** | Wi-Fi / 4G / Ethernet | Android SDK (native on-terminal), REST API (integrated mode) |
| **HiLite family (DATECS)** | Bluetooth | Android SDK (HiLite BT), iOS SDK (HiLite BT), Cordova |
| **Telpo** | Wi-Fi / 4G | Android SDK (native), REST API (integrated mode) |

---

## HiLite family (DATECS)

DATECS Bluetooth card readers. Connect wirelessly to an Android or iOS host device running the Handpoint SDK. Come pre-injected for the Handpoint production environment with a TEST/DEMO merchant for development. Request a device from your referring partner — see [Development hardware](/get-started/development-hardware).

### HiLite

![HiLite](/img/devices/hilite.png)

| | |
|---|---|
| **TMS device type** | `HILITE` |
| **Connection** | Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Integration paths** | Android SDK (HiLite BT), iOS SDK (HiLite BT), Cordova |

---

### HiPro

![HiPro](/img/devices/hipro.png)

| | |
|---|---|
| **TMS device type** | `HIPRO` |
| **Connection** | Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Integration paths** | Android SDK (HiLite BT), iOS SDK (HiLite BT), Cordova |

---

### HiPlus

![HiPlus](/img/devices/hiplus.png)

| | |
|---|---|
| **TMS device type** | `HIPLUS` |
| **Connection** | Bluetooth LE |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Integration paths** | Android SDK (HiLite BT), iOS SDK (HiLite BT), Cordova |
| **Note** | Previously listed as HiLite Pro in some documentation |

---

### HiFive

| | |
|---|---|
| **TMS device type** | `HIFIVE` |
| **Connection** | Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Integration paths** | Android SDK (HiLite BT), iOS SDK (HiLite BT), Cordova |

---

## PAX terminals

Android-based smart terminals. Support two integration paths: Android SDK (code runs natively on the device) or REST API (your POS calls the Handpoint Cloud, which commands the terminal in integrated mode). PAX production devices reject unsigned APKs — a PAX debug device is required for SDK development. See [Development hardware](/get-started/development-hardware).

### PAX A920 / A920 Pro

| | |
|---|---|
| **TMS device types** | `PAXA920`, `PAXA920PRO` |
| **Form factor** | Handheld smart terminal |
| **Connectivity** | Wi-Fi, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | v6.6.7+ |

---

### PAX A920 MAX

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

| | |
|---|---|
| **TMS device types** | `PAXA910`, `PAXA910S` |
| **Form factor** | Handheld smart terminal |
| **Connectivity** | Wi-Fi, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A80

| | |
|---|---|
| **TMS device type** | `PAXA80` |
| **Form factor** | Countertop smart terminal |
| **Connectivity** | Ethernet, Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | v6.7.0+ |

---

### PAX A800

| | |
|---|---|
| **TMS device type** | `PAXA800` |
| **Form factor** | Countertop smart terminal with large screen |
| **Connectivity** | Ethernet, Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | v7.1001.0+ |

---

### PAX A8700

| | |
|---|---|
| **TMS device type** | `PAXA8700` |
| **Form factor** | Countertop smart terminal |
| **Connectivity** | Ethernet, Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A8900

| | |
|---|---|
| **TMS device type** | `PAXA8900` |
| **Form factor** | Countertop smart terminal |
| **Connectivity** | Ethernet, Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A6650

| | |
|---|---|
| **TMS device type** | `PAXA6650` |
| **Form factor** | Handheld smart terminal |
| **Connectivity** | Wi-Fi, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A60

| | |
|---|---|
| **TMS device type** | `PAXA60` |
| **Form factor** | Compact handheld terminal |
| **Connectivity** | Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A35

| | |
|---|---|
| **TMS device type** | `PAXA35` |
| **Form factor** | Compact handheld terminal |
| **Connectivity** | Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | v6.7.0+ |

---

### PAX A50 / A50S

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

| | |
|---|---|
| **TMS device type** | `PAXA77` |
| **Form factor** | Handheld smart terminal |
| **Connectivity** | Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A960

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

| | |
|---|---|
| **TMS device types** | `PAXIM25`, `PAXIM30` |
| **Form factor** | Integrated module / OEM |
| **Connectivity** | Serial, USB, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | IM25: v7.1009.5+ |

---

### PAX A3700

| | |
|---|---|
| **TMS device type** | `PAXA3700` |
| **Form factor** | Portable countertop terminal |
| **Connectivity** | Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | v7.1010.6+ |

---

## Telpo terminals

### Telpo TPS900

| | |
|---|---|
| **TMS device type** | `TELPOTPS900` |
| **Form factor** | Handheld smart terminal |
| **Connectivity** | Wi-Fi, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### Telpo TPS300 / TPS328 / TPS988 / TPS989

| | |
|---|---|
| **TMS device types** | `TELPOTPS300`, `TELPOTPS328`, `TELPOTPS988`, `TELPOTPS989` |
| **Form factor** | Various handheld and countertop models |
| **Connectivity** | Wi-Fi, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

## Datecs accessories

### Datecs BP50 Plus

| | |
|---|---|
| **TMS device type** | `BP50PLUS` |
| **Type** | Bluetooth receipt printer |
| **Connectivity** | Bluetooth |
| **Note** | Companion printer, not a standalone payment terminal |

---

## Virtual Terminal

| | |
|---|---|
| **TMS device type** | `VT` |
| **Type** | Software-only virtual terminal |
| **Note** | No physical hardware required |

---

## Complete TMS device type reference

All device type codes registered in the Handpoint TMS gateway:

| Code | Device | Family |
|---|---|---|
| `HILITE` | HiLite | DATECS |
| `HIPRO` | HiPro | DATECS |
| `HIFIVE` | HiFive | DATECS |
| `HIPLUS` | HiPlus (formerly HiLite Pro) | DATECS |
| `PAXA920` | PAX A920 | PAX |
| `PAXA920PRO` | PAX A920 Pro | PAX |
| `PAXA920MAX` | PAX A920 MAX | PAX |
| `PAXA930` | PAX A930 | PAX |
| `PAXA910` | PAX A910 | PAX |
| `PAXA910S` | PAX A910S | PAX |
| `PAXA80` | PAX A80 | PAX |
| `PAXA800` | PAX A800 | PAX |
| `PAXA8700` | PAX A8700 | PAX |
| `PAXA8900` | PAX A8900 | PAX |
| `PAXA6650` | PAX A6650 | PAX |
| `PAXA60` | PAX A60 | PAX |
| `PAXA35` | PAX A35 | PAX |
| `PAXA50` | PAX A50 | PAX |
| `PAXA50S` | PAX A50S | PAX |
| `PAXA30` / `PAX30` | PAX A30 | PAX |
| `PAXA77` | PAX A77 | PAX |
| `PAXA960` | PAX A960 | PAX |
| `PAXARIES6` | PAX ARIES6 | PAX |
| `PAXARIES8` | PAX ARIES8 | PAX |
| `PAXE500` | PAX E500 | PAX |
| `PAXE700` | PAX E700 | PAX |
| `PAXE800` | PAX E800 | PAX |
| `PAXIM25` | PAX IM25 | PAX |
| `PAXIM30` | PAX IM30 | PAX |
| `PAXA3700` | PAX A3700 | PAX |
| `TELPOTPS900` | Telpo TPS900 | Telpo |
| `TELPOTPS` | Telpo TPS | Telpo |
| `TELPOTPS300` | Telpo TPS300 | Telpo |
| `TELPOTPS328` | Telpo TPS328 | Telpo |
| `TELPOTPS988` | Telpo TPS988 | Telpo |
| `TELPOTPS989` | Telpo TPS989 | Telpo |
| `BP50PLUS` | Datecs BP50 Plus | Datecs |
| `MPED400` | Handpoint MPED400 (legacy) | Legacy |
| `MPED800` | Handpoint MPED800 (legacy) | Legacy |
| `VT` | Virtual Terminal | Virtual |

:::info Adding device images
Product images for PAX terminals should be sourced from [PAX Technology](https://www.paxtechnology.com) or Handpoint marketing assets. Place images in `static/img/devices/` following the naming convention `pax-a920.png`, `pax-a80.png` etc.
:::
