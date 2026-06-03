---
title: Supported devices
sidebar_position: 4
description: All PAX and HiLite payment terminals supported by the Handpoint SDK, with integration path and capability notes.
hide_table_of_contents: false
---

# Supported devices

All Handpoint card-present integrations require a physical payment terminal. Devices fall into two families based on connection type.

---

## PAX terminals

PAX devices are Android-based smart terminals. They support two integration paths:

- **Android SDK (native)** — your app runs directly on the PAX device
- **REST API (integrated mode)** — your POS system calls the Handpoint Cloud API, which commands the PAX terminal running the Android SDK in cloud/integrated mode

PAX production devices reject unsigned APKs. A **PAX debug device** is required for development — request one from your referring partner. See [Development hardware](/get-started/development-hardware).

---

### PAX A920 / A920 Pro

![PAX A920](pathname:///img/devices/pax-a920.png)

| | |
|---|---|
| **Form factor** | Handheld smart terminal |
| **OS** | Android |
| **Connectivity** | Wi-Fi, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Integration paths** | Android SDK (native), REST API (integrated mode) |
| **Handpoint SDK** | v6.6.7+ |

---

### PAX A80

![PAX A80](pathname:///img/devices/pax-a80.png)

| | |
|---|---|
| **Form factor** | Countertop smart terminal |
| **OS** | Android |
| **Connectivity** | Ethernet, Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Integration paths** | Android SDK (native), REST API (integrated mode) |
| **Handpoint SDK** | v6.7.0+ |

---

### PAX A800

![PAX A800](pathname:///img/devices/pax-a800.png)

| | |
|---|---|
| **Form factor** | Countertop smart terminal with large screen |
| **OS** | Android |
| **Connectivity** | Ethernet, Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Integration paths** | Android SDK (native), REST API (integrated mode) |
| **Handpoint SDK** | v7.1001.0+ |

---

### PAX A35

![PAX A35](pathname:///img/devices/pax-a35.png)

| | |
|---|---|
| **Form factor** | Compact handheld terminal |
| **OS** | Android |
| **Connectivity** | Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Integration paths** | Android SDK (native), REST API (integrated mode) |
| **Handpoint SDK** | v6.7.0+ |

---

### PAX A6630

![PAX A6630](pathname:///img/devices/pax-a6630.png)

| | |
|---|---|
| **Form factor** | Handheld smart terminal |
| **OS** | Android |
| **Connectivity** | Wi-Fi, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Integration paths** | Android SDK (native), REST API (integrated mode) |
| **Handpoint SDK** | v7.1011.0+ |

---

### PAX A3700

![PAX A3700](pathname:///img/devices/pax-a3700.png)

| | |
|---|---|
| **Form factor** | Portable countertop terminal |
| **OS** | Android |
| **Connectivity** | Wi-Fi, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Integration paths** | Android SDK (native), REST API (integrated mode) |
| **Handpoint SDK** | v7.1010.6+ |

---

### PAX IM25

![PAX IM25](pathname:///img/devices/pax-im25.png)

| | |
|---|---|
| **Form factor** | Integrated module / OEM terminal |
| **OS** | Android |
| **Connectivity** | Serial, USB, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Integration paths** | Android SDK (native), REST API (integrated mode) |
| **Handpoint SDK** | v7.1009.5+ |

---

## HiLite devices (DATECS)

HiLite devices are Bluetooth card readers manufactured by DATECS. They connect wirelessly to an Android phone/tablet or iOS device running the Handpoint SDK.

HiLite devices come **pre-injected** for the Handpoint production environment with a TEST/DEMO merchant for development. Request a HiLite from your referring partner. See [Development hardware](/get-started/development-hardware).

- **Integration paths**: Android SDK (HiLite BT), iOS SDK (HiLite BT)
- **Connection**: Bluetooth (external accessory protocol `com.datecs.pinpad` on iOS)

---

### HiLite

![DATECS HiLite](pathname:///img/devices/datecs-hilite.png)

| | |
|---|---|
| **Manufacturer** | DATECS |
| **Form factor** | Compact Bluetooth card reader |
| **Connectivity** | Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Integration paths** | Android SDK (HiLite BT), iOS SDK (HiLite BT), Cordova |

---

### HiLite Pro

![DATECS HiLite Pro](pathname:///img/devices/datecs-hilite-pro.png)

| | |
|---|---|
| **Manufacturer** | DATECS |
| **Form factor** | Compact Bluetooth card reader (Pro model) |
| **Connectivity** | Bluetooth LE |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Integration paths** | Android SDK (HiLite BT), iOS SDK (HiLite BT), Cordova |

---

## Device type identifiers

Internal device type codes used by the Handpoint gateway (viscus):

| Device type | Description |
|---|---|
| `PAXA920` | PAX A920 |
| `PAXA80` | PAX A80 |
| `A920` | PAX A920 (alternate) |
| `A80` | PAX A80 (alternate) |
| `MPED400` | Handpoint MPED400 (legacy) |
| `MPED800` | Handpoint MPED800 (legacy) |
| `TELPOTPS900` | Telpo TPS900 |
| `VT` | Virtual Terminal |

---

:::info Adding device images
Device images should be placed in `static/img/devices/` following the naming convention in this page. Source product images from the PAX Technology or DATECS official resources, or contact Handpoint for approved marketing assets.
:::

