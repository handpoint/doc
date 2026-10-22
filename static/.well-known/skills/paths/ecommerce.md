# eCommerce (SmartBoard) — path skill

**Europe only** — EEA, UK, and Monaco. Not available to US or non-European merchants.

SmartBoard is Handpoint's Card-Not-Present (CNP) gateway for online payments. It runs on the CardStream/P3 platform and is entirely separate from the card-present SDK stack. No `sharedSecret` or `cloudApiKey` — eCommerce uses its own `merchantID` and `merchantSecret`.

Also load your acquirer skill if the merchant also uses a card-present acquirer (EmerchantPay, Paystrax, etc.) — SmartBoard does not replace it.

Full API reference: https://developer-ecomm.handpoint.com

---

## Credentials

| Field | Description |
|---|---|
| `merchantID` | Merchant account ID — provided during onboarding by the partner |
| `merchantSecret` | Signing secret for HMAC-SHA512 request signatures |

These are not the same as `sharedSecret` or `cloudApiKey`. eCommerce credentials are scoped to the SmartBoard/CardStream gateway only.

---

## Integration paths

| Method | PCI scope | 3DS | Recurring/MIT | Google/Apple Pay |
|---|---|---|---|---|
| **Hosted Payment Page (HPP)** | Lowest — card data never touches your server | Automatic | CIT card-on-file only | No |
| **Hosted Payment Fields (HPF)** | Low — iFrame fields post directly to gateway | Manual redirect | Full MIT | Yes |
| **Direct** | Higher — card data passes through your server | Manual redirect | Full MIT | Yes |
| **Batch** | Varies | N/A | Supported | No |
| **Pay By Link / Pay Button** | Out of scope | Automatic | No | No |
| **Shopping Carts** | Out of scope | Automatic | No | No |
| **Mobile SDKs** | Out of scope | Automatic | Card-on-file | Yes |

**Default recommendation:** HPP. Handles 3DS and SCA automatically. Use Direct or HPF when you need recurring MIT, Google/Apple Pay, or REFUND/CANCEL actions.

---

## API endpoint

```
POST https://commerce-api.handpoint.com/hosted/    ← HPP
POST https://commerce-api.handpoint.com/direct/    ← Direct / HPF
```

All requests use `Content-Type: application/x-www-form-urlencoded`.

---

## Core request fields

| Field | Required | Description |
|---|---|---|
| `merchantID` | Yes | Your merchant account ID |
| `action` | Yes | `SALE`, `VERIFY`, `PREAUTH`, `REFUND`, `CANCEL`, `QUERY` |
| `type` | Yes | `1`=ECOM, `2`=MOTO, `9`=Continuous Authority (MIT) |
| `amount` | Yes | Integer minor units — `1099` = £10.99 |
| `currencyCode` | Yes | ISO 4217 numeric — `826`=GBP, `978`=EUR |
| `countryCode` | Yes | ISO 3166-1 numeric — `826`=UK |
| `redirectURL` | HPP | URL browser is sent to after payment |
| `callbackURL` | No | Server-to-server result POST — more reliable than redirectURL |
| `transactionUnique` | Recommended | Your idempotency key — prevents replay attacks |
| `orderRef` | No | Free-text order reference |
| `signature` | Yes* | SHA-512 HMAC — see Signature section |
| `xref` | No | Cross-reference for repeat charges, refunds, cancellations |

*Required on most merchant accounts; strongly recommended on all.

---

## Supported actions by path

| Action | HPP | Direct / HPF |
|---|---|---|
| `SALE` | ✅ | ✅ |
| `VERIFY` | ✅ | ✅ |
| `PREAUTH` | ✅ | ✅ |
| `REFUND` | ❌ | ✅ |
| `CANCEL` | ❌ | ✅ |
| `QUERY` | ❌ | ✅ |

---

## 3DS / SCA

3DS v2 (EMV 3DS) is **mandatory** for all `type=1` (ECOM) transactions in EEA/UK under PSD2. `type=2` (MOTO) and `type=9` (MIT) are exempt.

**HPP:** handled automatically — no extra code.

**Direct / HPF redirect flow:**
1. Submit with `remoteAddress` and `threeDSRedirectURL`
2. If `responseCode = 65802` → redirect cardholder to `threeDSURL`
3. ACS redirects back to `threeDSRedirectURL` with POST data
4. Merge ACS POST with stored original response and resubmit

SCA exemptions: pass `scaExemption` = `lowvalue` / `trusted` / `risk` / `corporate` / `delegated`. Issuer can refuse and soft-decline with `responseCode = 65` — gateway retries with 3DS automatically if configured.

---

## Recurring payments

| Type | `type` | `rtAgreementType` | SCA |
|---|---|---|---|
| CIT sign-up | `1` | `recurring` or `instalment` | Required |
| CIT card-on-file | `1` | `cardonfile` | Required |
| MIT recurring | `9` | `recurring` or `instalment` | Exempt |
| MIT unscheduled | `2` | `unscheduled` | Exempt |

Store the `xref` from the initial CIT — required for all subsequent MITs. `xref` values expire after 13 months.

HPP does not support fully unattended MIT recurring. Use Direct or HPF.

---

## Signature calculation

Sign every request. Verify every callback. Never trust an unsigned response.

**PHP:**
```php
function sign(array $fields, string $secret): string {
    ksort($fields);  // ASCII byte order — matches gateway sort
    $str = http_build_query($fields, '', '&');
    $str = preg_replace('/%0D%0A|%0A%0D|%0D/i', '%0A', $str);
    return hash('SHA512', $str . $secret);
}

function verifyResponse(array $response, string $secret): void {
    $received = $response['signature'] ?? '';
    unset($response['signature']);
    // Handle partial signatures (gateway signs only certain fields on HPP responses)
    if (strpos($received, '|') !== false) {
        [$received, $fields] = explode('|', $received, 2);
        $response = array_intersect_key($response, array_flip(explode(',', $fields)));
    }
    $expected = sign($response, $secret);
    if (!hash_equals($expected, $received)) {
        throw new RuntimeException('Invalid gateway signature');
    }
}
```

**Node.js:**
```javascript
const crypto = require('crypto');

function sign(fields, secret) {
    // Sort by key in byte (ASCII) order — same as PHP ksort
    const sorted = Object.fromEntries(
        Object.entries(fields).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    );
    // URLSearchParams produces application/x-www-form-urlencoded (spaces → +)
    let str = new URLSearchParams(sorted).toString();
    str = str.replace(/%0D%0A|%0A%0D|%0D/gi, '%0A');
    return crypto.createHash('sha512').update(str + secret).digest('hex');
}

function verifyResponse(response, secret) {
    const { signature: received, ...rest } = response;
    if (!received) throw new Error('Missing signature');
    let fields = rest;
    // Handle partial signatures
    if (received.includes('|')) {
        const [sig, fieldList] = received.split('|');
        fields = Object.fromEntries(fieldList.split(',').map(k => [k, rest[k]]));
        return crypto.timingSafeEqual(
            Buffer.from(sign(fields, secret)), Buffer.from(sig)
        );
    }
    const expected = sign(fields, secret);
    if (!crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(received))) {
        throw new Error('Invalid gateway signature');
    }
}
```

### ⚠️ Common bug: unescaped reserved characters in field values

If an integration builds its query string by hand (string concatenation) instead of using a proper query-string/form-encoding function, it will usually encode spaces (`+` or `%20`) but forget to percent-encode other reserved characters — `&`, `=`, `#` — when they appear *inside a field value* (not just inside URLs). A company name like `Sutton Stone & Ceramics Ltd.` becomes `customerName=Sutton+Stone+&+Ceramics+Ltd.` with a literal, unescaped `&`.

Since `&` is the field separator, this silently splits the value into two fields mid-string. The signature computed over this malformed string is internally consistent (hashing the same broken string twice gives the same result), but it can never match what the gateway computes, because the gateway parses `&` as a field separator too and reconstructs the fields differently. On HPP this surfaces as the generic "Sorry, we encountered an error…" page with zero diagnostic detail, since there's no page to render yet at the point signature validation fails.

**Diagnosis:** ask for the exact raw string they hash (before hashing) and the resulting signature. If hashing their exact raw string reproduces their signature, their hashing step is fine — the bug is upstream, in whatever builds that raw string. Check every field value (not just fields that look like URLs) for a literal `&`, `=`, or `#`.

**Fix:** percent-encode every field value with a real URL-encoding function (`http_build_query()` in PHP, `URLSearchParams` in Node — both already used in the code samples above) rather than hand-rolling string concatenation. This bug tends to surface intermittently — most values won't happen to contain `&`/`=`/`#`, so most transactions sign correctly and only specific customer names/addresses/order data trip it.

---

## PHP — HPP quick-start

Complete server-side flow: build the form → render it → handle the callback.

```php
<?php
// config.php — keep outside web root
define('MERCHANT_ID',     getenv('HP_MERCHANT_ID'));
define('MERCHANT_SECRET', getenv('HP_MERCHANT_SECRET'));
define('HOSTED_URL',      'https://commerce-api.handpoint.com/hosted/');

function sign(array $fields): string {
    ksort($fields);
    $str = http_build_query($fields, '', '&');
    $str = preg_replace('/%0D%0A|%0A%0D|%0D/i', '%0A', $str);
    return hash('SHA512', $str . MERCHANT_SECRET);
}

// checkout.php — renders the HPP form
$request = [
    'merchantID'   => MERCHANT_ID,
    'action'       => 'SALE',
    'type'         => 1,           // 1 = ECOM
    'currencyCode' => 978,         // EUR
    'countryCode'  => 276,         // DE
    'amount'       => 1099,        // €10.99 in cents
    'orderRef'     => 'order-' . bin2hex(random_bytes(8)),
    'redirectURL'  => 'https://yoursite.com/payment/return',
    'callbackURL'  => 'https://yoursite.com/payment/callback',
];
$request['signature'] = sign($request);

echo '<form method="post" action="' . HOSTED_URL . '" data-hostedforms-modal>';
foreach ($request as $k => $v) {
    printf('<input type="hidden" name="%s" value="%s">', htmlspecialchars($k), htmlspecialchars($v));
}
echo '<button type="submit">Pay Now</button></form>';
echo '<script src="https://commerce-api.handpoint.com/sdk/web/v1/js/hostedforms.min.js"></script>';
```

```php
// callback.php — server-to-server POST from gateway (callbackURL)
// Always respond 200; gateway retries on non-2xx
$response = $_POST;
$received = $response['signature'] ?? '';
unset($response['signature']);

// Handle partial signature (gateway signs only known-good fields on HPP callbacks)
if (strpos($received, '|') !== false) {
    [$received, $fieldList] = explode('|', $received, 2);
    $response = array_intersect_key($response, array_flip(explode(',', $fieldList)));
}
ksort($response);
$str = http_build_query($response, '', '&');
$str = preg_replace('/%0D%0A|%0A%0D|%0D/i', '%0A', $str);
if (!hash_equals(hash('SHA512', $str . MERCHANT_SECRET), $received)) {
    http_response_code(400);
    exit;
}

$code = (int)($_POST['responseCode'] ?? -1);
if ($code === 0) {
    $xref          = $_POST['xref'];          // store for future refunds
    $transactionID = $_POST['transactionID']; // store for reconciliation
    // update your order in the database
}
// Always return 200 — the gateway does not retry on success
http_response_code(200);
```

---

## Node.js — HPP quick-start

```javascript
// gateway.js — shared utilities
const crypto = require('crypto');
const https  = require('https');

const MERCHANT_ID     = process.env.HP_MERCHANT_ID;
const MERCHANT_SECRET = process.env.HP_MERCHANT_SECRET;
const HOSTED_URL      = 'https://commerce-api.handpoint.com/hosted/';
const DIRECT_URL      = 'https://commerce-api.handpoint.com/direct/';

function sign(fields) {
    const sorted = Object.fromEntries(
        Object.entries(fields).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    );
    let str = new URLSearchParams(sorted).toString();
    str = str.replace(/%0D%0A|%0A%0D|%0D/gi, '%0A');
    return crypto.createHash('sha512').update(str + MERCHANT_SECRET).digest('hex');
}

function verifyResponse(params) {
    let { signature: received, ...rest } = params;
    if (!received) throw new Error('Missing signature');
    let fields = rest;
    if (received.includes('|')) {
        const [sig, fieldList] = received.split('|');
        fields = Object.fromEntries(fieldList.split(',').map(k => [k, rest[k]]));
        received = sig;
    }
    const expected = sign(fields);
    if (!crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(received))) {
        throw new Error('Invalid signature');
    }
    return rest;
}

// Express route — GET /checkout
function checkoutHandler(req, res) {
    const request = {
        merchantID:   MERCHANT_ID,
        action:       'SALE',
        type:         1,
        currencyCode: 978,
        countryCode:  276,
        amount:       1099,
        orderRef:     'order-' + crypto.randomBytes(8).toString('hex'),
        redirectURL:  'https://yoursite.com/payment/return',
        callbackURL:  'https://yoursite.com/payment/callback',
    };
    request.signature = sign(request);

    const inputs = Object.entries(request)
        .map(([k, v]) => `<input type="hidden" name="${k}" value="${String(v).replace(/"/g, '&quot;')}">`)
        .join('\n    ');

    res.send(`<!doctype html><html><body>
  <form method="post" action="${HOSTED_URL}" data-hostedforms-modal>
    ${inputs}
    <button type="submit">Pay Now</button>
  </form>
  <script src="https://commerce-api.handpoint.com/sdk/web/v1/js/hostedforms.min.js"></script>
</body></html>`);
}

// Express route — POST /payment/callback (server-to-server from gateway)
function callbackHandler(req, res) {
    try {
        const response = verifyResponse(req.body);
        if (parseInt(response.responseCode, 10) === 0) {
            // Payment authorised
            const { transactionID, xref, orderRef } = response;
            // store xref — required for refunds and recurring MITs
        }
    } catch {
        return res.sendStatus(400);
    }
    res.sendStatus(200); // gateway retries on non-2xx
}
```

---

## Node.js — Direct request (SALE + 3DS)

Use Direct when you need REFUND, CANCEL, QUERY, or full recurring MIT control. Card data passes through your server — ensure PCI DSS compliance or use HPF instead.

```javascript
async function directRequest(fields) {
    const request = { merchantID: MERCHANT_ID, ...fields };
    request.signature = sign(request);
    const body = new URLSearchParams(request).toString();

    return new Promise((resolve, reject) => {
        const req = https.request(DIRECT_URL, {
            method:  'POST',
            headers: {
                'Content-Type':   'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(body),
            },
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const r = Object.fromEntries(new URLSearchParams(data));
                r.responseCode = parseInt(r.responseCode, 10);
                resolve(r);
            });
        });
        req.on('error', reject);
        req.write(body);
        req.end();
    });
}

// Step 1 — browser submits card form → server sends to gateway
app.post('/checkout/direct', express.urlencoded({ extended: false }), async (req, res) => {
    const response = await directRequest({
        action:            'SALE',
        type:              1,
        currencyCode:      978,
        countryCode:       276,
        amount:            1099,
        cardNumber:        req.body.cardNumber,
        cardExpiryMonth:   req.body.expiryMonth,
        cardExpiryYear:    req.body.expiryYear,
        cardCVV:           req.body.cvv,
        customerName:      req.body.name,
        customerEmail:     req.body.email,
        orderRef:          'order-' + crypto.randomBytes(6).toString('hex'),
        remoteAddress:     req.ip,
        threeDSRedirectURL:'https://yoursite.com/checkout/3ds?sid=' + req.sessionID,
    });

    req.session.pending = response;

    if (response.responseCode === 65802) {
        // 3DS challenge — redirect to ACS
        return res.redirect(response.threeDSURL);
    }
    if (response.responseCode === 0) {
        return res.redirect('/success?txn=' + response.transactionID);
    }
    res.redirect('/declined?msg=' + encodeURIComponent(response.responseMessage));
});

// Step 2 — browser returns from ACS; resubmit with 3DS response
app.post('/checkout/3ds', express.urlencoded({ extended: false }), async (req, res) => {
    const pending = req.session.pending;
    if (!pending) return res.redirect('/checkout');

    const response = await directRequest({
        ...pending,
        threeDSResponse: JSON.stringify(req.body),
    });

    delete req.session.pending;

    if (response.responseCode === 0) {
        return res.redirect('/success?txn=' + response.transactionID);
    }
    res.redirect('/declined');
});
```

---

## PHP — Direct request (SALE + 3DS)

```php
<?php
require 'gateway.php';   // P3\SDK\Gateway from ecommdoc library
use \P3\SDK\Gateway;

Gateway::$merchantSecret = MERCHANT_SECRET;
Gateway::$directUrl      = DIRECT_URL;

// Session is required to persist state between 3DS redirect steps
if (isset($_GET['sid'])) session_id($_GET['sid']);
session_start();

$pageUrl = (isset($_SERVER['HTTPS']) ? 'https://' : 'http://')
    . $_SERVER['SERVER_NAME']
    . preg_replace('/(sid=[^&]+&?)|(acs=1&?)/', '', $_SERVER['REQUEST_URI']);
$pageUrl .= (strpos($pageUrl, '?') === false ? '?' : '&') . 'sid=' . session_id();

// ACS posts back into an iframe; bubble the result to the parent window
if (!empty($_GET['acs'])) {
    echo silentPost($pageUrl, ['threeDSResponse' => $_POST], '_parent');
    exit;
}

// Collect browser device info (required for 3DS v2)
if (!isset($_POST['browserInfo'])) {
    echo Gateway::collectBrowserInfo();
    exit;
}

if (!isset($_POST['threeDSResponse'])) {
    // Step 1 — initial request
    $req = [
        'action'            => 'SALE',
        'type'              => 1,
        'currencyCode'      => 978,
        'countryCode'       => 276,
        'amount'            => 1099,
        'cardNumber'        => '5573471234567898',
        'cardExpiryMonth'   => 12,  // 12 = simulate 3DS challenge
        'cardExpiryYear'    => 26,
        'cardCVV'           => '159',
        'customerName'      => 'Test Customer',
        'customerEmail'     => 'test@example.com',
        'orderRef'          => 'order-' . bin2hex(random_bytes(4)),
        'remoteAddress'     => $_SERVER['REMOTE_ADDR'],
        'threeDSRedirectURL'=> $pageUrl . '&acs=1',
    ];

    $response = Gateway::directRequest($req);
    $_SESSION['pending'] = $response;

    if ((int)$response['responseCode'] === 65802) {
        // 3DS required — redirect into iframe
        echo silentPost($response['threeDSURL'], $response['threeDSRequest'] ?? []);
        exit;
    }
} else {
    // Step 2 — resubmit with ACS response
    $response = Gateway::directRequest(
        array_merge($_SESSION['pending'], ['threeDSResponse' => $_POST['threeDSResponse']])
    );
}

if ((int)$response['responseCode'] === 0) {
    echo 'Payment authorised. Transaction ID: ' . $response['transactionID'];
} else {
    echo 'Payment declined: ' . $response['responseMessage'];
}
```

---

## Test credentials and cards

Test `merchantID` and `merchantSecret` are provided during onboarding. They connect to a simulator — no real acquiring.

| Scheme | Card number | CVV |
|---|---|---|
| Mastercard Debit | `5573 4712 3456 7898` | `159` |
| Visa Credit | `4929 4212 3460 0821` | `356` |
| Amex | `3742 454554 00001` | `4887` |

Use any future expiry. Amount ranges: 100–2499 = approved; 10000–14999 = declined; 20000–24999 = SCA soft-decline then approved after 3DS.

3DS simulation via expiry month: `01` = frictionless, `12` = challenge (full redirect flow).

---

## See also

- Full API reference: https://developer-ecomm.handpoint.com
- SmartBoard overview: https://developer.handpoint.com/acquirers/smartboard
