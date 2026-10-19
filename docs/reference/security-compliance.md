---
title: Security & Compliance
sidebar_position: 15
description: Handpoint's PCI DSS Level 1 and PCI-P2PE certifications, verification links, and what they mean for your own compliance scope as an integrator.
---

# Security & Compliance

## PCI DSS v4.0 — Level 1 Service Provider

Handpoint is certified as a **PCI DSS v4.0 Level 1 Service Provider** — the highest compliance tier, requiring an annual on-site assessment by a Qualified Security Assessor (QSA).

Verify the listing: search for "Handpoint" on the [Visa Global Registry of Service Providers](https://www.visa.com/splisting/searchGrsp.do).

## PCI-P2PE Validated Android SDK

The Handpoint Android SDK (used by the Handpoint App on all PAX devices) is **PCI-P2PE validated**, meaning card data is encrypted at the point of interaction before it can be read by any software layer, including the ISV application.

Verify the listing: search for "handpoint" on the [PCI Security Standards Council solution search](https://www.pcisecuritystandards.org/search/#?cludoquery=handpoint&cludopage=1&cludoinputtype=standard).

## What this means for integrators

Integrating with a PCI-P2PE validated solution can **significantly reduce your own PCI compliance scope**. Because cardholder data is encrypted before it reaches your application, ISVs using Handpoint's validated SDK typically qualify for the [SAQ P2PE questionnaire](https://www.pcisecuritystandards.org/document_library/#agreement) (~35 questions) rather than the full SAQ D (~300+ questions).

For more background: [PCI SSC Point-to-Point Encryption solutions](https://www.pcisecuritystandards.org/assessors_and_solutions/point_to_point_encryption_solutions/).
