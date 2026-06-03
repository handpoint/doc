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

![HiLite](/img/devices/hilite.png)

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

### PAX A6630 / A6650

| | |
|---|---|
| **TMS device types** | `PAXA6630`, `PAXA6650` |
| **Form factor** | Handheld smart terminal |
| **Connectivity** | Wi-Fi, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | v7.1011.0+ (A6630) |

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

## Complete TMS device type reference

| Code | Device | Family |
|---|---|---|
| `MPED400` | HiLite | DATECS |
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
| `PAXA6630` | PAX A6630 | PAX |
| `PAXA6650` | PAX A6650 | PAX |
| `PAXA60` | PAX A60 | PAX |
| `PAXA35` | PAX A35 | PAX |
| `PAXA50` | PAX A50 | PAX |
| `PAXA50S` | PAX A50S | PAX |
| `PAX30` | PAX A30 | PAX |
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
| `VT` | Virtual Terminal | Virtual |

:::info Adding device images
Product images for PAX terminals should be sourced from [PAX Technology](https://www.paxtechnology.com) or Handpoint marketing assets. Place images in `static/img/devices/` as `pax-a920.png`, `pax-a80.png` etc.
:::
