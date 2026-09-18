// AUTO-GENERATED — do not edit directly.
// Run: node scripts/generate-matrix-data.js
// Source: data/acquirers.yaml + data/processors.yaml

export const MATRIX_PATHS = [
  {
    "id": "cloud-api",
    "label": "Cloud API",
    "short": "API"
  },
  {
    "id": "android-pax",
    "label": "Android PAX",
    "short": "PAX"
  },
  {
    "id": "android-hilite",
    "label": "Android HiLite",
    "short": "HIL"
  },
  {
    "id": "ios-hilite",
    "label": "iOS HiLite",
    "short": "iOS"
  },
  {
    "id": "cordova",
    "label": "Cordova",
    "short": "CDV"
  },
  {
    "id": "javascript-sdk",
    "label": "JavaScript SDK",
    "short": "JS"
  },
  {
    "id": "windows-sdk",
    "label": "Windows SDK",
    "short": "WIN"
  },
  {
    "id": "backoffice",
    "label": "Backoffice",
    "short": "BO"
  }
];

export const MATRIX_ACQUIRERS = [
  {
    "id": "epi",
    "name": "EPI",
    "geo": "US, Canada",
    "processor": "tsys",
    "slug": "epi",
    "cards": [
      "VISA",
      "MC",
      "Discover"
    ],
    "interac": false
  },
  {
    "id": "paysafe",
    "name": "PAYSAFE",
    "geo": "US & Canada",
    "processor": "tsys",
    "slug": "paysafe",
    "cards": [
      "VISA",
      "MC",
      "AMEX",
      "Discover",
      "Interac"
    ],
    "interac": true
  },
  {
    "id": "emerchantpay",
    "name": "EmerchantPay",
    "geo": "EU",
    "processor": "omnipay",
    "slug": "emerchantpay",
    "cards": [
      "VISA",
      "MC",
      "AMEX",
      "UnionPay"
    ],
    "interac": false
  },
  {
    "id": "paystrax",
    "name": "Paystrax",
    "geo": "EU",
    "processor": "omnipay",
    "slug": "paystrax",
    "cards": [
      "VISA",
      "MC",
      "AMEX",
      "UnionPay"
    ],
    "interac": false
  }
];

export const MATRIX_PROCESSORS = {
  "tsys": {
    "name": "TSYS",
    "description": "Primary processor for EPI and PAYSAFE — US & Canada",
    "cardBrands": [
      "VISA",
      "MC",
      "AMEX",
      "Discover"
    ],
    "acquirers": [
      "epi",
      "paysafe"
    ],
    "viaRouting": false
  },
  "omnipay": {
    "name": "Omnipay",
    "description": "Gateway processor for EmerchantPay and Paystrax — Europe",
    "cardBrands": [
      "VISA",
      "MC",
      "AMEX",
      "Discover",
      "UnionPay"
    ],
    "acquirers": [
      "emerchantpay",
      "paystrax"
    ],
    "viaRouting": false
  },
  "tns": {
    "name": "TNS",
    "description": "Interac network processor for Canadian card-present transactions. Merchants are explicitly onboarded on TNS, TSYS, or both. When a merchant has both processors configured, the Handpoint gateway routes Interac cards to TNS and all other cards to TSYS.",
    "cardBrands": [
      "Interac"
    ],
    "acquirers": [
      "paysafe"
    ],
    "viaRouting": true
  },
  "amex": {
    "name": "AMEX",
    "description": "AMEX network routing for processors that don't support AMEX natively. Handpoint routes AMEX card transactions to AMEX as the processing party when configured on top of a primary processor. Merchants are not onboarded on AMEX directly — it is additive routing only. Applies to Omnipay acquirers (EmerchantPay, Paystrax). TSYS handles AMEX natively so no separate AMEX routing is needed there.",
    "cardBrands": [
      "AMEX"
    ],
    "acquirers": [
      "emerchantpay",
      "paystrax"
    ],
    "viaRouting": true
  }
};

export const MATRIX_SECTIONS = [
  {
    "label": "Sale",
    "rows": [
      {
        "id": "emv-sale",
        "label": "EMV Sale",
        "refs": [],
        "byAcquirer": {
          "epi": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "paysafe": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "emerchantpay": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "paystrax": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          }
        }
      },
      {
        "id": "key-entry-sale",
        "label": "Key Entry Sale",
        "refs": [],
        "byAcquirer": {
          "epi": {
            "cloud-api": "public",
            "android-pax": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "paysafe": {
            "cloud-api": "public",
            "android-pax": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "emerchantpay": {
            "cloud-api": "public",
            "android-pax": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "paystrax": {
            "cloud-api": "public",
            "android-pax": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          }
        }
      },
      {
        "id": "moto-sale",
        "label": "Remote Sale (MOTO)",
        "refs": [
          {
            "label": "MOTO guide",
            "url": "/reference/moto-guide"
          }
        ],
        "byAcquirer": {
          "epi": {
            "cloud-api": "not-supported",
            "android-pax": "public",
            "cordova": "public",
            "backoffice": "public"
          },
          "paysafe": {
            "cloud-api": "not-supported",
            "android-pax": "public",
            "cordova": "public",
            "backoffice": "public"
          },
          "emerchantpay": {
            "cloud-api": "not-supported",
            "android-pax": "public",
            "cordova": "public",
            "backoffice": "public"
          },
          "paystrax": {
            "cloud-api": "not-supported",
            "android-pax": "public",
            "cordova": "public",
            "backoffice": "public"
          }
        }
      },
      {
        "id": "sale-and-tip",
        "label": "Sale with Tip",
        "refs": [
          {
            "label": "Tipping guide",
            "url": "/reference/tipping-guide"
          }
        ],
        "byAcquirer": {
          "epi": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "paysafe": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "emerchantpay": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "paystrax": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          }
        }
      },
      {
        "id": "sale-and-tokenize",
        "label": "Sale + Tokenize",
        "refs": [],
        "byAcquirer": {
          "epi": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "paysafe": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "emerchantpay": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "paystrax": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          }
        }
      }
    ]
  },
  {
    "label": "Refund",
    "rows": [
      {
        "id": "card-present",
        "label": "EMV Refund",
        "refs": [],
        "byAcquirer": {
          "epi": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "paysafe": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "emerchantpay": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "paystrax": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          }
        }
      },
      {
        "id": "moto-refund",
        "label": "Remote Refund (MOTO)",
        "refs": [
          {
            "label": "MOTO guide",
            "url": "/reference/moto-guide"
          }
        ],
        "byAcquirer": {
          "epi": {
            "cloud-api": "not-supported",
            "android-pax": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public",
            "backoffice": "public"
          },
          "paysafe": {
            "cloud-api": "not-supported",
            "android-pax": "public",
            "cordova": "public",
            "backoffice": "public"
          },
          "emerchantpay": {
            "cloud-api": "not-supported",
            "android-pax": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public",
            "backoffice": "public"
          },
          "paystrax": {
            "cloud-api": "not-supported",
            "android-pax": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public",
            "backoffice": "public"
          }
        }
      },
      {
        "id": "key-entry-refund",
        "label": "Key Entry Refund",
        "refs": [],
        "byAcquirer": {
          "epi": {
            "cloud-api": "public",
            "android-pax": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "emerchantpay": {
            "cloud-api": "public",
            "android-pax": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "paystrax": {
            "cloud-api": "public",
            "android-pax": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          }
        }
      }
    ]
  },
  {
    "label": "Reversal",
    "rows": [
      {
        "id": "reversal",
        "label": "On-Device Reversal",
        "refs": [],
        "byAcquirer": {
          "epi": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "paysafe": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "emerchantpay": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "paystrax": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          }
        }
      },
      {
        "id": "remote-reversal",
        "label": "Remote Reversal",
        "refs": [],
        "byAcquirer": {
          "epi": {
            "cloud-api": "public",
            "backoffice": "public"
          },
          "paysafe": {
            "cloud-api": "public",
            "backoffice": "public"
          },
          "emerchantpay": {
            "cloud-api": "public",
            "backoffice": "public"
          },
          "paystrax": {
            "cloud-api": "public",
            "backoffice": "public"
          }
        }
      }
    ]
  },
  {
    "label": "Pre-Authorization",
    "rows": [
      {
        "id": "pre-auth-create",
        "label": "Pre-Auth Create",
        "refs": [
          {
            "label": "Pre-auth guide",
            "url": "/reference/pre-authorization-guide"
          }
        ],
        "byAcquirer": {
          "epi": {
            "cloud-api": "public",
            "android-pax": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "paysafe": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "not-supported",
            "ios-hilite": "not-supported",
            "cordova": "public",
            "backoffice": "public"
          },
          "emerchantpay": {
            "cloud-api": "public",
            "android-pax": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "paystrax": {
            "cloud-api": "public",
            "android-pax": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          }
        }
      },
      {
        "id": "key-entry-pre-auth",
        "label": "Key Entry Pre-Auth",
        "refs": [],
        "byAcquirer": {
          "epi": {
            "cloud-api": "public",
            "android-pax": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "emerchantpay": {
            "cloud-api": "public",
            "android-pax": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "paystrax": {
            "cloud-api": "public",
            "android-pax": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          }
        }
      },
      {
        "id": "pre-auth-capture",
        "label": "Pre-Auth Capture",
        "refs": [],
        "byAcquirer": {
          "epi": {
            "android-pax": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public",
            "backoffice": "public"
          },
          "emerchantpay": {
            "android-pax": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public",
            "backoffice": "public"
          },
          "paystrax": {
            "android-pax": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public",
            "backoffice": "public"
          }
        }
      },
      {
        "id": "pre-auth-void",
        "label": "Pre-Auth Reversal",
        "refs": [],
        "byAcquirer": {
          "epi": {
            "cloud-api": "public",
            "android-pax": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "emerchantpay": {
            "cloud-api": "public",
            "android-pax": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "paystrax": {
            "cloud-api": "public",
            "android-pax": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          }
        }
      },
      {
        "id": "pre-auth-capture-reversal",
        "label": "Capture Reversal",
        "refs": [],
        "byAcquirer": {
          "epi": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "not-supported",
            "ios-hilite": "not-supported",
            "cordova": "not-supported",
            "backoffice": "public"
          },
          "emerchantpay": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "not-supported",
            "ios-hilite": "not-supported",
            "cordova": "not-supported",
            "backoffice": "public"
          },
          "paystrax": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "not-supported",
            "ios-hilite": "not-supported",
            "cordova": "not-supported",
            "backoffice": "public"
          }
        }
      }
    ]
  },
  {
    "label": "Tokenization",
    "rows": [
      {
        "id": "procharge",
        "label": "proCharge Token",
        "refs": [],
        "byAcquirer": {
          "epi": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "backoffice": "public"
          }
        }
      },
      {
        "id": "paysafe-token",
        "label": "Paysafe Single-Use Token",
        "refs": [],
        "byAcquirer": {
          "paysafe": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          }
        }
      },
      {
        "id": "tokenex",
        "label": "TokenEx",
        "refs": [],
        "byAcquirer": {
          "paysafe": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "emerchantpay": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          },
          "paystrax": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public",
            "javascript-sdk": "public",
            "windows-sdk": "public"
          }
        }
      }
    ]
  },
  {
    "label": "Operations",
    "rows": [
      {
        "id": "tip-adjustment",
        "label": "Tip Adjustment",
        "refs": [
          {
            "label": "Tipping guide",
            "url": "/reference/tipping-guide"
          }
        ],
        "byAcquirer": {
          "epi": {
            "cloud-api": "not-supported",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "not-supported",
            "cordova": "public",
            "backoffice": "public"
          },
          "paysafe": {
            "cloud-api": "not-supported",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "not-supported",
            "cordova": "public",
            "backoffice": "public"
          },
          "paystrax": {
            "cloud-api": "not-supported",
            "android-pax": "not-supported",
            "android-hilite": "not-supported",
            "ios-hilite": "not-supported",
            "cordova": "not-supported"
          }
        }
      },
      {
        "id": "moto",
        "label": "MOTO (key-entered)",
        "refs": [
          {
            "label": "MOTO guide",
            "url": "/reference/moto-guide"
          }
        ],
        "byAcquirer": {
          "epi": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "not-supported",
            "ios-hilite": "not-supported",
            "cordova": "not-supported"
          },
          "paysafe": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "not-supported",
            "ios-hilite": "not-supported",
            "cordova": "not-supported"
          },
          "emerchantpay": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "not-supported",
            "ios-hilite": "not-supported",
            "cordova": "not-supported"
          },
          "paystrax": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "not-supported",
            "ios-hilite": "not-supported",
            "cordova": "not-supported"
          }
        }
      },
      {
        "id": "batching",
        "label": "Batching",
        "refs": [],
        "byAcquirer": {
          "epi": {
            "cloud-api": "not-supported",
            "android-pax": "not-supported",
            "android-hilite": "not-supported",
            "ios-hilite": "not-supported",
            "cordova": "not-supported",
            "backoffice": "public"
          },
          "paysafe": {
            "cloud-api": "not-supported",
            "android-pax": "not-supported",
            "android-hilite": "not-supported",
            "ios-hilite": "not-supported",
            "cordova": "not-supported",
            "backoffice": "public"
          }
        }
      },
      {
        "id": "void",
        "label": "Void (Interac)",
        "refs": [],
        "byAcquirer": {
          "paysafe": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public"
          }
        }
      },
      {
        "id": "money-remittance",
        "label": "Money Remittance",
        "refs": [],
        "byAcquirer": {
          "emerchantpay": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public"
          }
        }
      },
      {
        "id": "interac",
        "label": "Interac Card Support",
        "refs": [],
        "byAcquirer": {
          "paysafe": {
            "cloud-api": "public",
            "android-pax": "public",
            "android-hilite": "public",
            "ios-hilite": "public",
            "cordova": "public"
          }
        }
      },
      {
        "id": "avs-for-moto",
        "label": "AVS for MOTO",
        "refs": [
          {
            "label": "AVS guide",
            "url": "/reference/avs"
          }
        ],
        "byAcquirer": {
          "epi": {
            "cloud-api": "public",
            "android-pax": "public"
          }
        }
      },
      {
        "id": "fee-mitigation",
        "label": "Fee Mitigation",
        "refs": [
          {
            "label": "Fee mitigation",
            "url": "/reference/fee-mitigation"
          }
        ],
        "byAcquirer": {
          "epi": {
            "cloud-api": "coming-soon",
            "android-pax": "public"
          }
        }
      }
    ]
  }
];
