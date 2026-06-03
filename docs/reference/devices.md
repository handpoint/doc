---
title: Supported devices
sidebar_position: 4
description: All payment terminals supported by Handpoint — PAX and HiLite (DATECS). Includes hardware comparison table and TMS device type reference.
hide_table_of_contents: false
---

# Supported devices

All Handpoint card-present integrations require a physical payment terminal. Devices fall into two families:

| Family | Connection | Integration paths |
|---|---|---|
| **PAX** | Wi-Fi / 4G / Ethernet | Android SDK (native on-terminal), REST API (integrated mode) |
| **HiLite (DATECS)** | Bluetooth | Android SDK (HiLite BT), iOS SDK (HiLite BT), Cordova |

:::note PCI compliance
Please reference the [PCI SSC website](https://www.pcisecuritystandards.org) to adhere to all PCI and card brand guidelines for your terminal deployment.
:::

---

## Hardware comparison

✅ = Included &nbsp;|&nbsp; ❌ = Not included &nbsp;|&nbsp; — = Verify with PAX

| Device | Printer | Wi-Fi 2.4G | Wi-Fi 5G | 4G | 5G | Ethernet |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| HiLite | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| PAX A920 | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| PAX A920 Pro | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| PAX A920 MAX | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| PAX A930 | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| PAX A910 / A910S | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| PAX A80 | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ |
| PAX A800 | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ |
| PAX A8700 | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| PAX A8900 | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| PAX A6630 / A6650 | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ |
| PAX A60 | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| PAX A35 | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| PAX A50 / A50S | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| PAX A30 | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| PAX A77 | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| PAX A960 | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| PAX ARIES6 / ARIES8 | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ |
| PAX E500 | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |
| PAX E700 | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ |
| PAX E800 *(EOL)* | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ |
| PAX IM25 | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| PAX IM30 | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |
| PAX A3700 | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |

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
| **Form factor** | Handheld smart terminal with printer |
| **Connectivity** | Wi-Fi 2.4GHz, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | v6.6.7+ |

---

### PAX A920 MAX

![PAX A920 MAX](pathname:///img/devices/PAXA920MAX.jpg)

| | |
|---|---|
| **TMS device type** | `PAXA920MAX` |
| **Form factor** | Handheld smart terminal with printer (large screen) |
| **Connectivity** | Wi-Fi 2.4/5GHz, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A930

![PAX A930](pathname:///img/devices/PAXA930.png)

| | |
|---|---|
| **TMS device type** | `PAXA930` |
| **Form factor** | Handheld smart terminal with printer |
| **Connectivity** | Wi-Fi 2.4/5GHz, 4G, 5G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A910 / A910S

![PAX A910S](pathname:///img/devices/PAXA910S.jpg)

| | |
|---|---|
| **TMS device types** | `PAXA910`, `PAXA910S` |
| **Form factor** | Handheld smart terminal with printer |
| **Connectivity** | Wi-Fi 2.4GHz, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A80

![PAX A80](pathname:///img/devices/PAXA80.png)

| | |
|---|---|
| **TMS device type** | `PAXA80` |
| **Form factor** | Countertop smart terminal with printer |
| **Connectivity** | Wi-Fi 2.4GHz, Ethernet, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | v6.7.0+ |

---

### PAX A800

![PAX A800](pathname:///img/devices/PAXA800.jpg)

| | |
|---|---|
| **TMS device type** | `PAXA800` |
| **Form factor** | Countertop smart terminal with printer (large screen) |
| **Connectivity** | Wi-Fi 2.4GHz, Ethernet, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | v7.1001.0+ |

---

### PAX A8700

![PAX A8700](pathname:///img/devices/PAXA8700.jpg)

| | |
|---|---|
| **TMS device type** | `PAXA8700` |
| **Form factor** | Countertop smart terminal with printer |
| **Connectivity** | Wi-Fi 2.4/5GHz, 4G, Ethernet, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A8900

![PAX A8900](pathname:///img/devices/PAXA8900.jpg)

| | |
|---|---|
| **TMS device type** | `PAXA8900` |
| **Form factor** | Countertop smart terminal with printer |
| **Connectivity** | Wi-Fi 2.4/5GHz, 4G, Ethernet, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A6630 / A6650

![PAX A6630](pathname:///img/devices/PAXA6630.jpg)
![PAX A6650](pathname:///img/devices/PAXA6650.jpg)

| | |
|---|---|
| **TMS device types** | `PAXA6630`, `PAXA6650` |
| **Form factor** | Handheld smart terminal (no printer) |
| **Connectivity** | Wi-Fi 2.4/5GHz, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | v7.1011.0+ (A6630) |

---

### PAX A60

![PAX A60](pathname:///img/devices/PAXA60.png)

| | |
|---|---|
| **TMS device type** | `PAXA60` |
| **Form factor** | Compact handheld terminal (no printer) |
| **Connectivity** | Wi-Fi 2.4GHz, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A35

![PAX A35](pathname:///img/devices/PAXA35.jpg)

| | |
|---|---|
| **TMS device type** | `PAXA35` |
| **Form factor** | Compact handheld terminal (no printer) |
| **Connectivity** | Wi-Fi 2.4GHz, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | v6.7.0+ |

---

### PAX A50 / A50S

![PAX A50](pathname:///img/devices/PAXA50.png)

| | |
|---|---|
| **TMS device types** | `PAXA50`, `PAXA50S` |
| **Form factor** | Compact handheld terminal (no printer) |
| **Connectivity** | Wi-Fi 2.4GHz, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A30

![PAX A30](pathname:///img/devices/PAXA30.png)

| | |
|---|---|
| **TMS device type** | `PAXA30` *(TMS inconsistency: currently stored as `PAX30` — being corrected)* |
| **Form factor** | Entry-level smart terminal (no printer) |
| **Connectivity** | Wi-Fi 2.4GHz, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A77

![PAX A77](pathname:///img/devices/PAXA77.png)

| | |
|---|---|
| **TMS device type** | `PAXA77` |
| **Form factor** | Handheld smart terminal with printer |
| **Connectivity** | Wi-Fi 2.4GHz, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX A960

![PAX A960](pathname:///img/devices/PAXA960.jpg)

| | |
|---|---|
| **TMS device type** | `PAXA960` |
| **Form factor** | Handheld smart terminal with printer |
| **Connectivity** | Wi-Fi 2.4/5GHz, 4G, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |

---

### PAX ARIES6 / ARIES8

![PAX ARIES6](pathname:///img/devices/PAXAR6.png)
![PAX ARIES8](pathname:///img/devices/PAXAR8.png)

| | |
|---|---|
| **TMS device types** | `PAXARIES6`, `PAXARIES8` |
| **Form factor** | Biometric smart terminal (fingerprint reader) |
| **Connectivity** | Wi-Fi 2.4/5GHz, 4G, Ethernet, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe, fingerprint |

---

### PAX E500 / E700

![PAX E500](pathname:///img/devices/PAXE500.png)
![PAX E700](pathname:///img/devices/PAXE700.png)

| | |
|---|---|
| **TMS device types** | `PAXE500`, `PAXE700` |
| **Form factor** | ECR / integrated POS terminal |
| **Connectivity** | Wi-Fi 2.4GHz, Ethernet |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Note** | E700 includes built-in printer; E500 does not |

---

### PAX E800 *(End of Life)*

![PAX E800](pathname:///img/devices/PAXE800.png)

:::danger End of Life
The PAX E800 has reached end of life. Now is the perfect time to upgrade to PAX's innovative **Elys Workstation** — the PAX A3700 combined with the L1400 tablet. Please reference the [PCI SSC website](https://www.pcisecuritystandards.org) to adhere to all PCI and card brand guidelines.
:::

| | |
|---|---|
| **TMS device type** | `PAXE800` |
| **Form factor** | ECR / integrated POS terminal with printer |
| **Connectivity** | Wi-Fi 2.4GHz, Ethernet |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Replacement** | PAX A3700 + L1400 (Elys Workstation) |

---

### PAX IM25 / IM30

![PAX IM25](pathname:///img/devices/PAXIM25.jpg)
![PAX IM30](pathname:///img/devices/PAXIM30.png)

| | |
|---|---|
| **TMS device types** | `PAXIM25`, `PAXIM30` |
| **Form factor** | Integrated module / OEM (no printer) |
| **Connectivity** | IM25: Wi-Fi 2.4GHz, 4G · IM30: Wi-Fi 2.4GHz, Ethernet |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | IM25: v7.1009.5+ |

---

### PAX A3700 *(Elys Workstation)*

![PAX A3700](pathname:///img/devices/PAXA3700.jpg)

| | |
|---|---|
| **TMS device type** | `PAXA3700` |
| **Form factor** | Portable countertop terminal with printer |
| **Connectivity** | Wi-Fi 2.4/5GHz, 4G, Ethernet, Bluetooth |
| **Card entry** | EMV chip, contactless (NFC), magnetic stripe |
| **Handpoint Android SDK** | v7.1010.6+ |
| **Note** | Part of the Elys Workstation (A3700 + L1400 tablet) — recommended upgrade for E800 |

---

## Complete TMS device type reference

| Code | Device | Image |
|---|---|---|
| `MPED400` | HiLite | ✅ |
| `PAXA920` | PAX A920 | ✅ |
| `PAXA920PRO` | PAX A920 Pro | ✅ |
| `PAXA920MAX` | PAX A920 MAX | ✅ |
| `PAXA930` | PAX A930 | ✅ |
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
| `PAX30` → `PAXA30` | PAX A30 *(TMS naming inconsistency — being corrected to PAXA30)* | ✅ |
| `PAXA77` | PAX A77 | ✅ |
| `PAXA960` | PAX A960 | ✅ |
| `PAXARIES6` | PAX ARIES6 | ✅ |
| `PAXARIES8` | PAX ARIES8 | ✅ |
| `PAXE500` | PAX E500 | ✅ |
| `PAXE700` | PAX E700 | ✅ |
| `PAXE800` | PAX E800 *(EOL)* | ✅ |
| `PAXIM25` | PAX IM25 | ✅ |
| `PAXIM30` | PAX IM30 | ✅ |
| `PAXA3700` | PAX A3700 | ✅ |
| `VT` | Virtual Terminal | — |

