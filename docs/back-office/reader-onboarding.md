---
title: Reader Onboarding API
sidebar_position: 4
unlisted: true
description: Create a merchant, attach a card reader from a template, and edit the reader settings through the partner configuration API.
---

# Reader Onboarding API

Use this API to build your own onboarding screens. With eight calls, you create a merchant, attach a card reader to it, and edit the reader settings.

A **template** supplies the configuration of the reader. You give only the data that a template cannot supply: the merchant data, the serial number of the reader, and the MID.

:::info Pre-release
This API is available on the staging environment. The production base URL and the release date are not final. Contact your Handpoint integration engineer for access.
:::

## Before you start

| Item | Value |
|---|---|
| Base URL (staging) | `https://config.handpoint.io` |
| Authentication | `Authorization: Bearer <token>`. The token is a Handpoint JWT with the scope `access:tms` and the role `partner`. |
| Content type | `Content-Type: application/json` on every request with a body |
| Correlation id | Optional `messageGuid` header (a UUID). Every error body has a `messageGuid` for support. It is the value of your header only in two cases: a body field that fails validation, and a token, role or ownership rejection. For all other errors, the server makes a new id. This includes `400` and `403` errors such as `Unknown setting key` and `Setting {key} is read-only`. |
| Path ids | `{partnerId}` is your partner id. `{merchantIdAlpha}` is the merchant id from step 1. A reader is `{deviceTypeName}-{serialNumber}`, for example `PAXA920-1850214352`. |

The token must belong to the partner in the path. A token of another partner gets `403`.

All values in this guide are examples. They are not real merchants, MIDs or secrets.

## The flow

| Step | Call |
|---|---|
| 1 | [Create the merchant](#step-1-create-the-merchant) — `POST /partners/{partnerId}/merchants` |
| 2 | [List the applications](#step-2-list-the-applications) — `GET /partners/{partnerId}/applications` |
| 3 | [List the templates](#step-3-list-the-templates) — `GET /partners/{partnerId}/templates` |
| 4 | [Collect the reader identifiers](#step-4-collect-the-reader-identifiers) — no call |
| 5 | [Attach the reader](#step-5-attach-the-reader) — `POST /partners/{partnerId}/merchants/{merchantIdAlpha}/devices` |
| 6 | [Read the settings schema](#step-6-read-the-settings-schema) — `GET …/devices/{deviceTypeName}-{serialNumber}/settings/schema` |
| 7 | [Read the settings](#step-7-read-the-settings) — `GET …/devices/{deviceTypeName}-{serialNumber}/settings` |
| 8 | [Change the settings](#step-8-change-the-settings) — `PATCH …/devices/{deviceTypeName}-{serialNumber}/settings` |

Steps 2, 3, 6 and 7 are reads that feed your screens. Steps 1, 5 and 8 change data. After steps 5 and 8, Handpoint regenerates the reader configuration and sends it to the reader. You do not orchestrate this.

```text
Your back office                      Handpoint configuration API
     |  1. POST /merchants  --------------->  merchant data only, no agreement
     |  2. GET  /applications  ------------>  applications you can sell
     |  3. GET  /templates?applicationId=  ->  templates with processor capabilities
     |  4. (collect serial number, MID, TID on your screen)
     |  5. POST /merchants/{m}/devices  --->  inventory, assign, agreement + MID, seed, publish
     |  6. GET  .../settings/schema  ------>  what the form shows, per role
     |  7. GET  .../settings  ------------->  current values + ETag
     |  8. PATCH .../settings + If-Match -->  write, regenerate, publish
```

## Step 1: Create the merchant

Send the merchant data only. Do not send an acquirer or a configuration. The merchant has no acquirer agreement after this call. The first reader attach (step 5) creates the agreement.

```http
POST /partners/acme_pay/merchants
Authorization: Bearer <token>
Content-Type: application/json
```

```json title="Request: create the merchant"
{
  "merchantName": "Bella Trattoria",
  "legalBusinessName": "Bella Trattoria LLC",
  "merchantCategoryCode": "5812",
  "isvId": "isv_example",
  "taxId": "00-0000000",
  "addressLine1": "100 Example Street",
  "city": "Springfield",
  "state": "IL",
  "zipCode": "62701",
  "countryCodeAlpha2": "US",
  "timeZone": "America/Chicago",
  "email": "owner@bellatrattoria.example",
  "phone": "5550100",
  "externalId": "ACME-88213"
}
```

| Name | Type | Required | Description |
|---|---|---|---|
| `merchantName` | string | Yes | The trading name. The first three characters become the prefix of the merchant id. |
| `merchantCategoryCode` | string | Yes | The MCC. |
| `isvId` | string | Yes | Your ISV id, from Handpoint. |
| `addressLine1`, `city`, `zipCode`, `countryCodeAlpha2` | string | Yes | The merchant address. `countryCodeAlpha2` is ISO 3166-1 alpha-2. |
| `timeZone` | string | Yes | A tz database id, for example `America/Chicago`. |
| `email` | string | Yes | The merchant contact email. |
| `legalBusinessName` | string | No | Maximum 100 characters. |
| `externalId` | string | No | Your own reference for the merchant. |
| `taxId`, `addressLine2`, `state`, `locationName`, `phone`, `countryCodePhonePrefix`, `otherEmails`, `hiposSmsPhone` | | No | Other merchant data. |

```json title="Response 201: merchant created"
{
  "merchantId": "bel20261008093015412",
  "sharedSecret": "0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF",
  "warnings": []
}
```

:::warning
The response is the only time you get `sharedSecret`. Keep it in a secure store. Do not write it to a log.
:::

Use `merchantId` as `{merchantIdAlpha}` in the next calls. `warnings` is always empty.

The fields `agreements`, `templateIds` and `defaultTemplateId` are from the old contract. The API ignores `templateIds` and `defaultTemplateId`. `agreements` is deprecated: do not send it.

## Step 2: List the applications

A reader runs one application. The application decides which templates apply. Read the list from the API. Do not hard-code it.

```http
GET /partners/acme_pay/applications
Authorization: Bearer <token>
```

```json title="Response 200: applications"
{
  "applications": [
    { "applicationId": "com.handpoint.hipos", "name": "Handpoint App" },
    { "applicationId": "merchant360", "name": "Merchant360" },
    { "applicationId": "tableturn", "name": "TableTurn" }
  ]
}
```

`applicationId` is an opaque string. Compare it exactly. Do not parse it.

## Step 3: List the templates

A template is a complete configuration of a reader. Handpoint makes templates (`owner: HANDPOINT`). You can also own templates (`owner: PARTNER`). The template also selects the **processor**: the acquirer that the merchant agreement uses.

```http
GET /partners/acme_pay/templates?applicationId=merchant360
Authorization: Bearer <token>
```

```json title="Response 200: templates"
{
  "templates": [
    {
      "templateId": 31,
      "name": "Restaurant — TSYS",
      "description": "Tipping on, refunds on.",
      "owner": "HANDPOINT",
      "processor": {
        "acquirerId": "tsys",
        "name": "TSYS",
        "capabilities": {
          "cardTokenization": false,
          "preAuth": false,
          "moto": true,
          "storeAndForward": false,
          "partialReversal": false,
          "batching": true,
          "payFac": false,
          "avs": false,
          "binSourceOverride": false,
          "forcedLinkedRefunds": false,
          "tipping": true,
          "tipAdjustment": true,
          "debitOnlyFilter": true
        }
      },
      "currencies": ["USD"],
      "applicationId": "merchant360"
    },
    {
      "templateId": 503,
      "name": "Acme Restaurant — no tips",
      "description": null,
      "owner": "PARTNER",
      "processor": null,
      "currencies": [],
      "applicationId": "merchant360"
    }
  ]
}
```

| Query parameter | Description |
|---|---|
| `applicationId` | Optional. Only the templates of this application. A template for every application (`applicationId: null`) is **not** in the filtered list, but the attach accepts it for any application. An unknown value is `400`. |
| `merchantIdAlpha` | Optional. Only the templates that can seed a reader of this merchant: the templates of the acquirer of its agreement, and the templates without an acquirer. Use it for the second and later readers. A merchant without an agreement is `412`. |

`processor.capabilities` tells you what the acquirer supports for your partner account. Handpoint calculates it on each read. Use it to show what a template enables. For example, with `preAuth: false`, the reader cannot do pre-authorizations. See [Capability gates](#capability-gates).

`processor: null` means a template for every acquirer. It can seed a reader of a merchant that already has an agreement. It cannot create the first agreement.

## Step 4: Collect the reader identifiers

This step has no API call. Your screen collects the values that a template cannot supply:

| Value | When to ask for it |
|---|---|
| Serial number and terminal type | Always. The terminal type is the device type name, for example `PAXA920`. |
| `acquirerMid` | Only for the **first reader** of the merchant. The MID belongs to the merchant agreement. Every later reader uses the same MID. |
| `acquirerTid` | Optional. Without it, the default TID of the merchant agreement applies. |

To know if the reader is the first one, keep a record of the merchants that have a reader. Alternatively, call step 3 with `merchantIdAlpha`: `412` `Merchant {merchantIdAlpha} has no agreement` tells you that the merchant has no agreement yet.

## Step 5: Attach the reader

One call makes the reader live for the merchant. The call does these steps in sequence:

1. Adds the reader to your inventory.
2. Creates the merchant agreement, if this is the first reader. The agreement uses the acquirer, protocol and currencies of the template, and `acquirerMid`.
3. Assigns the reader to the merchant.
4. Seeds the reader settings from the template.
5. Regenerates the reader configuration and publishes it.

```http
POST /partners/acme_pay/merchants/bel20261008093015412/devices
Authorization: Bearer <token>
Content-Type: application/json
```

```json title="Request: attach the first reader"
{
  "serialNumber": "1850214352",
  "terminalType": "PAXA920",
  "templateId": 31,
  "applicationId": "merchant360",
  "acquirerMid": "999000001234",
  "acquirerTid": "77010042"
}
```

For a later reader of the same merchant, leave out `acquirerMid`:

```json title="Request: attach a later reader"
{
  "serialNumber": "1850214353",
  "terminalType": "PAXA920",
  "templateId": 31,
  "applicationId": "merchant360"
}
```

| Name | Type | Required | Description |
|---|---|---|---|
| `serialNumber` | string | Yes | Maximum 16 characters, letters, digits and `_` only. |
| `terminalType` | string | Yes | The device type name, for example `PAXA920`. |
| `templateId` | integer | Yes | A Handpoint template or a template that you own, from step 3. |
| `applicationId` | string | Yes | From step 2. The template must be for this application, or for every application. |
| `acquirerMid` | string | First reader only | The MID of the merchant for the acquirer of the template. For a later reader, leave it out. The same MID is accepted. A different MID is `400`. |
| `acquirerTid` | string | No | The TID of this reader. The API stores it as `acquirerTid.{protocol}`, for example `acquirerTid.TSYS`. |

```json title="Response 201: reader attached"
{
  "deviceId": "PAXA920-1850214352",
  "merchantId": "bel20261008093015412",
  "seededFrom": { "templateId": 31, "name": "Restaurant — TSYS" },
  "settingsVersion": 1,
  "settings": {
    "acquirerMid.TSYS": "999000001234",
    "acquirerTid.TSYS": "77010042",
    "mccCode": "5812",
    "preAuthEnabled": "false",
    "refunds": "true",
    "surcharge": "false",
    "tipAdjustment": "true",
    "tipEnabled": "true"
  },
  "applicationId": "merchant360"
}
```

The example shows a part of the `settings` map. The real map has every key that your role can see. All values are strings.

| Status | Meaning |
|---|---|
| `201` | The reader is live. At least one of the steps ran. |
| `200` | Every step was already done: the reader is in your inventory, it is assigned to the merchant, and its last seed used the same `templateId` and `applicationId`. The body has the current settings of the reader. |

The reader keeps its own copy of the template values. A later change to the template does not change a reader that is already attached.

:::note
A retry with the same `templateId` and `applicationId` does not seed again. A different `acquirerTid` in the retry does not change the stored values. To change a value after the attach, use step 8.

A call with a different `templateId` or `applicationId` seeds the reader again, and increases the settings version.
:::

## Step 6: Read the settings schema

The schema tells your form what to show for this reader. The API answers it for the role of the caller.

```http
GET /partners/acme_pay/merchants/bel20261008093015412/devices/PAXA920-1850214352/settings/schema
Authorization: Bearer <token>
```

```json title="Response 200: settings schema"
{
  "answeredForRole": "partner",
  "groups": [
    { "key": "tips", "label": "tips", "order": 1 },
    { "key": "transactions", "label": "transactions", "order": 2 },
    { "key": "pricing", "label": "pricing", "order": 3 },
    { "key": "acquirer", "label": "acquirer", "order": 4 },
    { "key": "others", "label": "others", "order": 5 }
  ],
  "properties": [
    {
      "key": "tipEnabled",
      "label": "Tip",
      "group": "tips",
      "type": "boolean",
      "permission": "write",
      "owner": "TERMINAL",
      "defaultValue": "false",
      "options": []
    },
    {
      "key": "tipSuggestionValues",
      "label": "Tip Suggestion Values",
      "group": "tips",
      "type": "list",
      "permission": "write",
      "owner": "TERMINAL",
      "defaultValue": "10,15,20,25",
      "options": [],
      "listItem": { "type": "integer" },
      "dependsOn": { "key": "tipSuggestionEnabled", "value": "true" }
    },
    {
      "key": "preAuthEnabled",
      "label": "Pre-Auth",
      "group": "transactions",
      "type": "boolean",
      "permission": "read",
      "reason": "Pre-auth is not supported by the acquirer",
      "owner": "TERMINAL",
      "defaultValue": "false",
      "options": []
    },
    {
      "key": "surchargeValue",
      "label": "Surcharge Value",
      "group": "pricing",
      "type": "decimal",
      "permission": "read",
      "owner": "TERMINAL",
      "defaultValue": "3",
      "options": [],
      "dependsOn": { "key": "surcharge", "value": "true" }
    },
    {
      "key": "acquirerMid.TSYS",
      "label": "MID (TSYS)",
      "group": "acquirer",
      "type": "string",
      "permission": "read",
      "owner": "MERCHANT",
      "options": []
    },
    {
      "key": "acquirerTid.TSYS",
      "label": "TID (TSYS)",
      "group": "acquirer",
      "type": "string",
      "permission": "write",
      "owner": "TERMINAL",
      "options": []
    },
    {
      "key": "mccCode",
      "label": "MCCCode",
      "group": "others",
      "type": "string",
      "permission": "read",
      "owner": "MERCHANT",
      "options": []
    }
  ],
  "processorCapabilities": {
    "cardTokenization": false,
    "preAuth": false,
    "moto": true,
    "storeAndForward": false,
    "partialReversal": false,
    "batching": true,
    "payFac": false,
    "avs": false,
    "binSourceOverride": false,
    "forcedLinkedRefunds": false,
    "tipping": true,
    "tipAdjustment": true,
    "debitOnlyFilter": true
  }
}
```

The example shows a part of `properties`. The API leaves out a member that has no value, for example `reason` or `minValue`.

| Field | Description |
|---|---|
| `key` | The setting key. Use it in step 7 and step 8. |
| `label`, `description`, `group` | Text for your form. `group` is the `key` of one of `groups`. |
| `type` | `boolean`, `integer`, `decimal`, `string`, `singleOption`, `multipleOption`, `list` or `image`. |
| `permission` | `write` or `read`. See [Schema semantics](#schema-semantics). |
| `reason` | Only on a `read` property that a capability of the processor blocks. Show it to the user. |
| `owner` | `TERMINAL`: the reader can have its own value. `MERCHANT`: the value belongs to the merchant, and it is always `read`. |
| `minValue`, `maxValue`, `options`, `listItem`, `imageSpec` | The constraints to validate input before you send it. |
| `defaultValue` | The catalogue default. It is not the template value. For example, template 31 sets `tipEnabled` to `"true"`, but the catalogue default is `"false"`. |
| `dependsOn` | Show the property only when the other key has this value. |
| `processorCapabilities` | The capabilities that the API used for this answer. |

The response has an `ETag` header: a hash of the schema content. The schema changes rarely. Keep it in a cache, and refresh only the values (step 7).

## Step 7: Read the settings

This call returns the current value of every key that your role can see.

```http
GET /partners/acme_pay/merchants/bel20261008093015412/devices/PAXA920-1850214352/settings
Authorization: Bearer <token>
```

```http
HTTP/1.1 200 OK
ETag: "1"
```

```json title="Response 200: settings"
{
  "settingsVersion": 1,
  "seededFrom": { "templateId": 31, "name": "Restaurant — TSYS" },
  "settings": {
    "acquirerMid.TSYS": "999000001234",
    "acquirerTid.TSYS": "77010042",
    "mccCode": "5812",
    "preAuthEnabled": "false",
    "refunds": "true",
    "surcharge": "false",
    "tipAdjustment": "true",
    "tipEnabled": "true"
  },
  "permissions": {
    "acquirerMid.TSYS": "read",
    "acquirerTid.TSYS": "write",
    "mccCode": "read",
    "preAuthEnabled": "read",
    "refunds": "write",
    "surcharge": "write",
    "tipAdjustment": "write",
    "tipEnabled": "write"
  },
  "applicationId": "merchant360"
}
```

| Field | Description |
|---|---|
| `settingsVersion` | The version of the stored settings. Every write increases it. The `ETag` header has the same value. |
| `seededFrom` | The template that last seeded the settings. `name` is `null` if the template does not exist any more. |
| `settings` | `key → value`. Every value is a string. |
| `permissions` | `key → permission` for every key in `settings`: `read` or `write`. Same rules as the schema. |
| `applicationId` | The application of the attach. |

Keep the `ETag`. You send it back in step 8.

## Step 8: Change the settings

Send only the keys that change. The other keys keep their values.

```http
PATCH /partners/acme_pay/merchants/bel20261008093015412/devices/PAXA920-1850214352/settings
Authorization: Bearer <token>
Content-Type: application/json
If-Match: "1"
```

```json title="Request: change settings"
{
  "settings": {
    "surcharge": "true",
    "tipAdjustment": "false"
  }
}
```

| Value in the body | Result |
|---|---|
| A string | The API stores the value on the reader. |
| `null` | The API deletes the stored value. The merchant value or the generated value applies again. The template value does not come back. |
| Key not in the body | No change. |

```json title="Response 200: settings changed"
{
  "settingsVersion": 2,
  "changedKeys": ["surcharge", "tipAdjustment"],
  "settings": {
    "acquirerMid.TSYS": "999000001234",
    "acquirerTid.TSYS": "77010042",
    "mccCode": "5812",
    "preAuthEnabled": "false",
    "refunds": "true",
    "surcharge": "true",
    "tipAdjustment": "false",
    "tipEnabled": "true"
  }
}
```

The response has the new `ETag` (`"2"`). `changedKeys` lists, in order, the keys whose stored value changed. Every accepted call increases the version, also when no value changed.

The API validates the full body first. If one key fails, the API writes nothing.

### Replace all settings (PUT)

`PUT` on the same path replaces all the stored values that your role can write. The API deletes the stored value of a key that is not in the body: the merchant value or the generated value applies again. You can send the `settings` map of step 7 back as the body: the API ignores a `read` key that has the value from step 7.

```json title="Request: replace settings"
{
  "settings": {
    "acquirerTid.TSYS": "77010042",
    "refunds": "true",
    "surcharge": "true",
    "tipAdjustment": "false",
    "tipEnabled": "true"
  }
}
```

A `PUT` is always conditional. Without `If-Match`, the API uses the version that it read just before the write. A concurrent write gets `412`.

### Seed from another template

To apply a different template to an attached reader, use the seed. The seed merges the template values into the stored values. Keys that the template does not have keep their values.

```http
POST /partners/acme_pay/merchants/bel20261008093015412/devices/PAXA920-1850214352/settings/seed
Authorization: Bearer <token>
Content-Type: application/json
If-Match: "2"
```

```json title="Request: seed from another template"
{ "templateId": 503, "applicationId": "merchant360" }
```

```json title="Response 200: seeded"
{
  "settingsVersion": 3,
  "changedKeys": ["tipEnabled"],
  "settings": {
    "acquirerMid.TSYS": "999000001234",
    "acquirerTid.TSYS": "77010042",
    "mccCode": "5812",
    "preAuthEnabled": "false",
    "refunds": "true",
    "surcharge": "true",
    "tipAdjustment": "false",
    "tipEnabled": "false"
  }
}
```

The seed skips a template value that a `PATCH` cannot set, for example a `read` key or a value that a capability gate blocks.

## Schema semantics

The schema and `permissions` give each key one of three states for the caller:

| State | In the schema | In `settings` | What your form does | A write of the key |
|---|---|---|---|---|
| `write` | `permission: write` | Yes | Show an editable field. | Accepted after validation. |
| `read` | `permission: read`, sometimes with `reason` | Yes | Show the value, locked. Show `reason` if present. | `403` (but see [Capability gates](#capability-gates)). |
| Absent | Not in `properties` | No | Show nothing. | `400` `Unknown setting key: {key}`. Same answer as a key that does not exist. |

A key is `read` for one of these reasons:

1. The merchant owns it (`owner: MERCHANT`), for example `mccCode` and `acquirerMid.{protocol}`. Change merchant data on the merchant, not on the reader.
2. Handpoint does not let a reader have its own value for the key.
3. The access of your role to the key is `read`.
4. The processor of the merchant does not support the option. The property then has a `reason`.

### Capability gates

A capability gate blocks an option that the processor of the merchant does not support. The gate uses the acquirer and the partner of the merchant agreement, and its protocol.

The table shows the gated keys that are reader settings today. The capabilities `cardTokenization`, `payFac` and `binSourceOverride` also have gates, but they are not reader settings.

| Key | Capability |
|---|---|
| `preAuthEnabled` | `preAuth` |
| `motoEnabled` | `moto` |
| `batching` | `batching` |
| `avsForMoto` | `avs` |
| `safEnabled` | `storeAndForward` |
| `partialReversalEnabled` | `partialReversal` |
| `tipEnabled` | `tipping` |
| `tipAdjustment` | `tipAdjustment` |
| `debitCardOnly` | `debitOnlyFilter` |

A gated key is `read` with a `reason`. The gate blocks only the value that **enables** the option:

1. `"false"` is accepted. You can always switch off an unsupported option.
2. `null` (delete the stored value) is accepted.
3. `"true"` is `400` `Setting {key} accepts only false: {reason}`.

A gate applies only to a key that your role can write. A write to a `MERCHANT` key, or to a key that is not terminal-editable, is `403` for each value.

If the acquirer forces linked refunds, a partner sees `linkedRefund`, `refundCardMatch` and `refundOtherCard` as `read` with a `reason`. A partner can send only the forced value: `"true"` for `linkedRefund` and `refundCardMatch`, and `"false"` for `refundOtherCard`. A `null` for these keys is `400` for a partner. The gate does not change the value that you read. You read the value that the reader uses.

A merchant without an agreement has no gates.

## Permission model

The schema and the writes use one access policy. The result depends on the role in the token.

| | Partner | Admin |
|---|---|---|
| `answeredForRole` | `partner` | `admin` |
| Keys in the schema | The keys that partners can see. Other keys are absent. | Every key. |
| `read` or `write` | From the partner access of the key. | From the admin access of the key. |
| `MERCHANT` keys | `read` | `read` |
| Capability gates | Yes | Yes |
| Forced linked refunds | Yes | No. An admin can override them. |

A device token gets `403` on the settings endpoints.

Show the form that the schema gives you. Do not keep your own list of editable keys: Handpoint can change the access of a key without a change to the API.

## Versions and concurrent edits

Every settings write increases `settingsVersion`: `PATCH`, `PUT`, the seed, and the seed of the attach. The API returns the version in the `ETag` header.

1. Read the settings (step 7). Keep the `ETag`.
2. Send the write with `If-Match: "<version>"`.
3. If you get `412` `Settings version mismatch: expected {n}, found {m}`, another write came first. The API wrote nothing.
4. Read the settings again, show the new values to the user, and send the write again.

`If-Match` accepts one quoted or unquoted integer, or `*` (no check). A weak tag (`W/"1"`) or a list is `400`. On `PATCH`, without `If-Match`, the last write wins.

## Retries and idempotency

| Call | Safe to send again? | Notes |
|---|---|---|
| Step 1, create the merchant | No | Each call creates a new merchant with a new id. This API cannot search merchants. Before a retry, check in TMS Web, or ask Handpoint, if the merchant exists. |
| Step 5, attach | Yes, with the same body | Each step checks the stored state and skips the work that is done. When all steps are done, you get `200` with the current settings. Nothing is rolled back across services when a step fails: send the same call again. A different `templateId` or `applicationId` seeds again. |
| Step 8, `PATCH` / `PUT` / seed | Yes, with `If-Match` | After `500` or `502`, the write can already be stored: only the regeneration or the reader notification failed. Read the settings, then send again with the new `ETag`. |
| Reads | Yes | |

## Errors

Every error that the API raises has this body:

```json title="Error body"
{
  "messageGuid": "5b0c2f1e-8a77-4b1e-9c51-2d0f6c1a9e10",
  "code": 412,
  "reason": "Settings version mismatch: expected 1, found 2"
}
```

`code` repeats the HTTP status. `reason` is for a person: do not parse it. Use the status to decide what to do.

A request that the framework rejects before the API reads it can have a different body. Examples are malformed JSON, a value of the wrong JSON type, and an unknown path.

| Code | Meaning | Recovery |
|---|---|---|
| `400` | A field is missing or not valid. Examples: `Unknown applicationId {applicationId}`; `acquirerMid is required: merchant {merchantIdAlpha} has no agreement with acquirer {acquirerId} yet`; `Merchant {merchantIdAlpha} has a different MID for acquirer {acquirerId}; leave out acquirerMid to use it`; `Unknown setting key: {key}`; `Setting {key} must be of type {type}`; `Setting {key} accepts only false: {reason}`; a malformed `If-Match`. | Correct the request. Do not retry without a change. |
| `401` | The token is missing or not valid. | Get a new token. |
| `403` | The role or the partner in the token does not match the path. Or a write of a `read` key: `Setting {key} is read-only`, `Setting {key} belongs to the merchant and cannot be set per terminal`. Or the template belongs to another partner. | Remove the key from the write, or use the correct token. |
| `404` | The merchant, the template or the reader is not found, or it is not yours: `Merchant {merchantIdAlpha} not found`, `Template {templateId} not found`, `Terminal {deviceType}-{serialNumber} not found for merchant {merchantIdAlpha}`. | Check the ids. |
| `409` | The reader belongs to another partner, or it is assigned to another merchant. | Move the reader in TMS Web or Console, or contact Handpoint. |
| `412` | A precondition is false. `Settings version mismatch: expected {n}, found {m}`: read again and retry. `Template {templateId} is for application {a}, not {b}`, `Template {templateId} is for acquirer {a}; merchant {merchantIdAlpha} uses {b}`, `Merchant {merchantIdAlpha} has no agreement`: choose another template. The acquirer does not allow a merchant option: correct the merchant. | Only the version mismatch is solved by a retry. |
| `422` | `Merchant {merchantIdAlpha} has {n} acquirer agreements; reader onboarding supports one`. | Do not retry. The merchant must have one agreement only. Contact Handpoint. |
| `500` | Unexpected error, or the reader notification failed after the write. | Read the settings. If the version increased, the write is stored. |
| `502` | `TMS call failed` or `Config regeneration failed in TMS`. | Send the same call again, but not a merchant create (see [Retries and idempotency](#retries-and-idempotency)). For a settings write, read the `ETag` first. |

## What changed from TMS Web

| Topic | TMS Web | This API |
|---|---|---|
| Create a merchant | One form with merchant data, acquirer, MID and options such as tips, refunds and pre-auth. | Merchant data only. The first reader attach creates the agreement and stores the MID. |
| Options such as tips, refunds, pre-auth, batching, surcharge | Merchant-level flags. | Settings of each reader. Two readers of one merchant can have different values. |
| MID | Per merchant agreement. | The same. It shows on each reader as `acquirerMid.{protocol}`, `read`. |
| TID | Per reader. | `acquirerTid.{protocol}`, `write`. |

A reader becomes **managed** at its first settings write. The attach does this write. Handpoint rebuilds the configuration of a managed reader from its stored settings.

:::caution
Do not edit a managed reader in TMS Web. The next rebuild of the reader configuration reverts the TMS Web change. Use step 8.
:::

A change to the merchant data, for example the address, still applies to the reader. The rebuild applies the stored reader settings on top.

## Related

- [TMS APIs](/back-office/tms-apis)
- [Device Control Commands](/back-office/device-commands)
