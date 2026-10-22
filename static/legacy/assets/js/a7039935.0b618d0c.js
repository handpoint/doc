"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[95882],{

/***/ 28972
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_android_versioned_docs_version_android_sdk_7_1010_8_androidtransactions_md_a70_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/android/site-android-versioned-docs-version-android-sdk-7-1010-8-androidtransactions-md-a70.json
const site_android_versioned_docs_version_android_sdk_7_1010_8_androidtransactions_md_a70_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"androidtransactions","title":"Transaction Types","description":"Sale","source":"@site/android_versioned_docs/version-Android SDK 7.1010.8/androidtransactions.md","sourceDirName":".","slug":"/androidtransactions","permalink":"/legacy/android/Android SDK 7.1010.8/androidtransactions","draft":false,"unlisted":false,"tags":[],"version":"Android SDK 7.1010.8","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"id":"androidtransactions"},"sidebar":"tutorialSidebar","previous":{"title":"Integration Guides","permalink":"/legacy/android/Android SDK 7.1010.8/androidintegrationguide"},"next":{"title":"Terminal Management","permalink":"/legacy/android/Android SDK 7.1010.8/androiddevicemanagement"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./android_versioned_docs/version-Android SDK 7.1010.8/androidtransactions.md


const frontMatter = {
	sidebar_position: 5,
	id: 'androidtransactions'
};
const contentTitle = 'Transaction Types';

const assets = {

};



const toc = [{
  "value": "Sale",
  "id": "2",
  "level": 2
}, {
  "value": "Sale And Tokenize Card",
  "id": "3",
  "level": 2
}, {
  "value": "Sale Reversal",
  "id": "4",
  "level": 2
}, {
  "value": "Refund",
  "id": "5",
  "level": 2
}, {
  "value": "Automatic Refund",
  "id": "automatic-refund",
  "level": 2
}, {
  "value": "Automatic Partial Refund",
  "id": "automatic-partial-refund",
  "level": 2
}, {
  "value": "Refund reversal",
  "id": "6",
  "level": 2
}, {
  "value": "MoTo Sale",
  "id": "7",
  "level": 2
}, {
  "value": "MoTo Refund",
  "id": "8",
  "level": 2
}, {
  "value": "MoTo Reversal",
  "id": "9",
  "level": 2
}, {
  "value": "MoTo Pre-Auth",
  "id": "10",
  "level": 2
}, {
  "value": "Signature result",
  "id": "signature-result",
  "level": 2
}, {
  "value": "Tip Adjustment",
  "id": "tip-adjustment",
  "level": 2
}, {
  "value": "Tokenize Card",
  "id": "12",
  "level": 2
}, {
  "value": "Card PAN",
  "id": "13",
  "level": 2
}, {
  "value": "Pre-Auth",
  "id": "pre-auth",
  "level": 2
}, {
  "value": "Pre-Auth Increase/Decrease",
  "id": "pre-auth-increasedecrease",
  "level": 2
}, {
  "value": "Pre-Auth Capture",
  "id": "pre-auth-capture",
  "level": 2
}, {
  "value": "Pre-Auth/Capture Reversal",
  "id": "pre-authcapture-reversal",
  "level": 2
}, {
  "value": "Standalone Tokenized Payments Operations (Tokenize and Modify)",
  "id": "standalone-tokenized-payments-operations-tokenize-and-modify",
  "level": 2
}, {
  "value": "Standalone Tokenized Sale",
  "id": "standalone-tokenized-sale",
  "level": 3
}, {
  "value": "Standalone Tokenized SALE Sequence Diagram",
  "id": "standalone-tokenized-sale-sequence-diagram",
  "level": 2
}, {
  "value": "Standalone Tokenized Refund, Reversal and RefundReversal",
  "id": "standalone-tokenized-refund-reversal-and-refundreversal",
  "level": 3
}, {
  "value": "Cloud Tokenized Payments Operations",
  "id": "cloudTokenizedPaymentsOperations",
  "level": 2
}, {
  "value": "Cloud Tokenized Sale",
  "id": "cloud-tokenized-sale",
  "level": 3
}, {
  "value": "Cloud Tokenized Sale Reversal",
  "id": "cloud-tokenized-sale-reversal",
  "level": 3
}, {
  "value": "Standalone Tokenized Refund, Reversal and RefundReversal Sequence Diagram",
  "id": "standalone-tokenized-refund-reversal-and-refundreversal-sequence-diagram",
  "level": 2
}, {
  "value": "Cloud Tokenized Refund",
  "id": "cloud-tokenized-refund",
  "level": 3
}, {
  "value": "Cloud Tokenized Refund Reversal",
  "id": "cloud-tokenized-refund-reversal",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "transaction-types",
        children: "Transaction Types"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2",
      children: "Sale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sale"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A sale initiates a payment operation to the card reader. In it's simplest form you only have to pass the amount and currency but it also accepts tip configuration and a map with extra parameters."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#13",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the charge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "options"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#4",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "SaleOptions"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["An object to store all the customization options for a sale (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#39",
              children: "Tip Configuration"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#metadata",
              children: "Metadata"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#money-remittance-options",
              children: "Money Remittance Options"
            }), ",...)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "//Initiate a sale for 10.00 in Great British Pounds\r\napi.sale(new BigInteger(\"1000\"),Currency.GBP);\r\n\r\n//Initiate a sale for 10.00 in Great British Pounds with a tipping configuration\r\n//This feature is only available for PAX and Telpo devices\r\nTipConfiguration tipConfiguration = new TipConfiguration();\r\ntipConfiguration.setTipPercentages(Arrays.asList(5, 10, 15, 20));\r\ntipConfiguration.setTipAmount(new BigInteger(\"1000\"));\r\ntipConfiguration.setBaseAmount(new BigInteger(\"1000\"));\r\ntipConfiguration.setEnterAmountEnabled(true);\r\ntipConfiguration.setFooter(\"Thank you\");\r\ntipConfiguration.setSkipEnabled(true);\r\n// Metadata\r\nMetadata metadata = new Metadata(\"Data 1\", \"Data 2\", \"Data 3\", \"Data 4\", \"Data 5\");\r\n\r\nSaleOptions options = new SaleOptions();\r\noptions.setTipConfiguration(tipConfiguration);\r\noptions.setMetadata(metadata);\r\n\r\napi.sale(new BigInteger(\"1000\"),Currency.GBP, options);\r\n\r\n\r\n//Initiate a sale for 10.00 USD using Money Remitance options\r\nMoneyRemittanceOptions moneyRemittanceOptions = new MoneyRemittanceOptions(\"John Doe\", CountryCode.USA);\r\nSaleOptions saleOptions = new SaleOptions(true, moneyRemittanceOptions);\r\n\r\napi.sale(new BigInteger(\"1000\"), Currency.USD, saleOptions);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#15",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "signatureRequired"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked if card verification requires signature."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "endOfTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the terminal finishes processing the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#OperationStartResult",
                children: "OperationStartResult"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object containing information about the financial operation started. Most specifically the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " which ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must"
            }), " be saved on your end in case you do not get back the transaction result object at the end of the transaction. The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3",
      children: "Sale And Tokenize Card"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#2",
        children: "sale"
      }), " operation which also returns a card token. (not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#13",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the charge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "options"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#sale-and-tokenize-options",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "SaleAndTokenizeOptions"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["An object to store all the customization options for a sale (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#39",
              children: "Tip Configuration"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#money-remittance-options",
              children: "Money Remittance Options"
            }), ",...)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "//Initiate a sale for 10.00 in Great British Pounds\r\nSaleOptions options = new SaleAndTokenizeOptions();\r\napi.sale(new BigInteger(\"1000\"),Currency.GBP, options);\r\n\r\n\r\n//Initiate a sale for 10.00 in Great British Pounds with a tipping configuration\r\n//This feature is only available for PAX and Telpo devices\r\n\r\nTipConfiguration tipConfiguration = new TipConfiguration();\r\ntipConfiguration.setTipPercentages(Arrays.asList(5, 10, 15, 20));\r\ntipConfiguration.setTipAmount(new BigInteger(\"1000\"));\r\ntipConfiguration.setBaseAmount(new BigInteger(\"1000\"));\r\ntipConfiguration.setEnterAmountEnabled(true);\r\ntipConfiguration.setFooter(\"Thank you\");\r\ntipConfiguration.setSkipEnabled(true);\r\nSaleOptions options = new SaleOptions();\r\noptions.setTipConfiguration(tipConfiguration);\r\noptions.toSaleAndTokenizeOptions();\r\n\r\napi.sale(new BigInteger(\"1000\"),Currency.GBP,options);\r\n\r\n//Initiate a sale for 10.00 USD using Money Remitance options\r\nMoneyRemittanceOptions moneyRemittanceOptions = new MoneyRemittanceOptions(\"John Doe\", CountryCode.USA);\r\nSaleAndTokenizeOptions saleAndTokenizeOptions= new SaleAndTokenizeOptions(moneyRemittanceOptions);\r\n\r\napi.sale(new BigInteger(\"1000\"), Currency.USD, saleAndTokenizeOptions);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#15",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "signatureRequired"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked if card verification requires signature."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "endOfTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the terminal finishes processing the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#OperationStartResult",
                children: "OperationStartResult"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object containing information about the financial operation started. Most specifically the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " which ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must"
            }), " be saved on your end in case you do not get back the transaction result object at the end of the transaction. The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4",
      children: "Sale Reversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "saleReversal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A sale reversal, also called sale VOID allows the user to reverse a previous sale operation. This operation reverts (if possible) a specific sale identified with a transaction id. In its simplest form you only have to pass the amount, currency and originalTransactionID but it also accepts a map with extra parameters. Note that transactions can only be reversed within a 24 hours timeframe or until the daily batch of transactions has been sent for submission."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#13",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the charge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Id of the original sale transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "options"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#4",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "SaleOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store all the customization options for a sale."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "//Initiate a reversal for 10.00 in Great British Pounds\r\napi.saleReversal(new BigInteger(\"1000\"),Currency.GBP,\"00000000-0000-0000-0000-000000000000\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#15",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "signatureRequired"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked if card verification requires signature."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "endOfTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the terminal finishes processing the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#OperationStartResult",
                children: "OperationStartResult"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object containing information about the financial operation started. Most specifically the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " which ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must"
            }), " be saved on your end in case you do not get back the transaction result object at the end of the transaction. The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5",
      children: "Refund"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "refund"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A refund operation moves funds from the merchant account to the cardholder´s credit card. In it's simplest form you only have to pass the amount and currency but it also accepts a map with extra parameters. Note that a card is required to be swiped, dipped or tapped for this operation. For Interac (Canadian Debit Network), refunds can only be processed until Interac closes the batch of transactions at night."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#13",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the charge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If present it links the refund with a previous sale. It effectively limits the maximum amount refunded to that of the original transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "options"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#6",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "RefundOptions"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["An object to store all the customization options for a refund (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#metadata",
              children: "Metadata"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#money-remittance-options",
              children: "Money Remittance Options"
            }), ",...)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "//Initiate a refund for 10.00 in Great British Pounds (Linked Refund)\r\napi.refund(new BigInteger(\"1000\"),Currency.GBP,\"00000000-0000-0000-0000-000000000000\");\r\n\r\n//Initiate a refund for 10.00 USD using Money Remitance options (Linked Refund)\r\nMoneyRemittanceOptions moneyRemittanceOptions = new MoneyRemittanceOptions(\"John Doe\", CountryCode.USA);\r\nRefundOptions refundOptions= new RefundOptions(true, moneyRemittanceOptions);\r\n\r\napi.refund(new BigInteger(\"1000\"), Currency.GBP, \"00000000-0000-0000-0000-000000000000\", refundOptions);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Events invoked**"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#15",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "signatureRequired"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked if card verification requires signature."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "endOfTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the terminal finishes processing the transaction"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#OperationStartResult",
                children: "OperationStartResult"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object containing information about the financial operation started. Most specifically the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " which ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must"
            }), " be saved on your end in case you do not get back the transaction result object at the end of the transaction. The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "automatic-refund",
      children: "Automatic Refund"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "automaticRefund"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A refund operation moves funds from the merchant account to the cardholder's credit card. This operation allows you to refund a card automatically without requiring the cardholder to dip/tap/swipe his card.  In its simplest form you only have to pass the Original Transaction ID (GUID) to this function. The amount to be refunded will be the same amount as the one of the original sale."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID"
            }), "  ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Links the automatic refund with a previous sale. The amount refunded will be the same as the one of the original transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "options"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#moto-options",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MoToOptions"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["An object to store optional parameters for a MoTo refund (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#moto-channel",
              children: "MoTo Channel"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#money-remittance-options",
              children: "Money Remittance Options"
            }), ",...)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "//Initiate an automatic refund\r\napi.automaticRefund(\"00000000-0000-0000-0000-000000000000\");\r\n\r\n//Initiate an automatic refund using MoTo Options\r\nMoToOptions moToOptions = new MoToOptions();\r\nmoToOptions.setChannel(MoToChannel.TO);\r\n\r\napi.automaticRefund(\"00000000-0000-0000-0000-000000000000\", moToOptions);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Events invoked**"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "endOfTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the terminal finishes processing the transaction"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#OperationStartResult",
                children: "OperationStartResult"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object containing information about the financial operation started. Most specifically the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " which ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must"
            }), " be saved on your end in case you do not get back the transaction result object at the end of the transaction. The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "automatic-partial-refund",
      children: "Automatic Partial Refund"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "automaticRefund"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A refund operation moves funds from the merchant account to the cardholder's credit card. This operation allows you to PARTIALLY refund a card automatically without requiring the cardholder to dip/tap/swipe his card.  In its simplest form you only have to pass the amount, currency and the Original Transaction ID (GUID). Note that the amount can not go above the amount of the original sale. If a refund is attempted for an amount higher than the one of the original sale, the transaction will be automatically declined."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of funds to refund - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#13",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the refund"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Links the refund with a previous sale. It effectively limits the maximum amount refunded to that of the original transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "options"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#moto-options",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MoToOptions"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["An object to store optional parameters for a MoTo refund (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#moto-channel",
              children: "MoTo Channel"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#money-remittance-options",
              children: "Money Remittance Options"
            }), ",...)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "//Initiate an automatic partial refund for 5.00 Great British Pounds\r\napi.automaticRefund(new BigInteger(\"500\"),Currency.GBP,\"00000000-0000-0000-0000-000000000000\");\r\n\r\n//Initiate an automatic partial refund for 5.00 Great British Pounds using MoTo Options\r\nMoToOptions moToOptions = new MoToOptions();\r\nmoToOptions.setChannel(MoToChannel.MO);\r\n\r\napi.automaticRefund(new BigInteger(\"500\"),Currency.GBP,\"00000000-0000-0000-0000-000000000000\", moToOptions);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Events invoked**"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "endOfTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the terminal finishes processing the transaction"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#OperationStartResult",
                children: "OperationStartResult"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object containing information about the financial operation started. Most specifically the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " which ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must"
            }), " be saved on your end in case you do not get back the transaction result object at the end of the transaction. The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6",
      children: "Refund reversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "refundReversal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A refund reversal, also called refund VOID allows the merchant to reverse a previous refund operation. This operation reverts (if possible) a specific refund identified with a transaction id. In it's simplest form you only have to pass the amount, currency and originalTransactionID but it also accepts a map with extra parameters. Note that transactions can only be reversed within a 24 hours timeframe or until the daily batch of transactions has been sent for submission."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#13",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the charge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "transaction id of the original refund"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "options"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#4",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "SaleOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store all the customization options for the transaction."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "//Initiate a refund reversal for 10.00 in Great British Pounds\r\napi.refundReversal(new BigInteger(\"1000\"),Currency.GBP,\"00000000-0000-0000-0000-000000000000\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#15",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "signatureRequired"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked if card verification requires signature."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "endOfTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the terminal finishes processing the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#OperationStartResult",
                children: "OperationStartResult"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object containing information about the financial operation started. Most specifically the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " which ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must"
            }), " be saved on your end in case you do not get back the transaction result object at the end of the transaction. The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7",
      children: "MoTo Sale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MoToSale"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mail Order /Telephone Order (MOTO) sale. MOTO is a type of card-not-present (CNP) transaction in which services are paid and delivered via telephone, mail, fax, or internet communication. MOTO has become synonymous with any financial transaction where the entity taking payment does not physically see the card used to make the purchase."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#13",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the charge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "options"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#moto-options",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MoToOptions"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["An object to store optional parameters for a MoTo sale (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#moto-channel",
              children: "MoTo Channel"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#money-remittance-options",
              children: "Money Remittance Options"
            }), ",...)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "//Initiate a MoTo sale for 10.00 in Great British Pounds\r\nMoToOptions options = new MoToOptions();\r\noptions.setCustomerReference(\"MoTo Sale Example\");\r\n\r\napi.motoSale(new BigInteger(\"1000\"), Currency.EUR, options);\r\n\r\n//Initiate a MoTo sale for 10.00 USD using Money Remitance options\r\nMoneyRemittanceOptions moneyRemittanceOptions = new MoneyRemittanceOptions(\"Test Integration\", CountryCode.USA);\r\nMoToOptions moToOptions = new MoToOptions(moneyRemittanceOptions);\r\n\r\napi.motoSale(new BigInteger(\"1000\"), Currency.USD, moToOptions);\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction,  it fetches statuses coming from the sdk (ex : 'processing')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "endOfTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the terminal finishes processing the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#OperationStartResult",
                children: "OperationStartResult"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object containing information about the financial operation started."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8",
      children: "MoTo Refund"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "moToRefund"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A MOTO refund operation moves funds from the merchant account to the cardholder´s credit card. In it's simplest form you only have to pass the amount and currency but it also accepts the original transaction id. MOTO Refund is a type of card-not-present (CNP) transaction in which services are refunded via telephone, mail, fax, or internet communication. MOTO has become synonymous with any financial transaction where the entity taking payment does not physically see the card used to make the purchase or refund."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#13",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the charge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionId"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If present it links the refund with a previous sale. It effectively limits the maximum amount refunded to that of the original transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "options"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#moto-options",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MoToOptions"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["An object to store optional parameters for a MoTo refund (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#moto-channel",
              children: "MoTo Channel"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#money-remittance-options",
              children: "Money Remittance Options"
            }), ",...)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "MoToOptions options = new MoToOptions();\r\noptions.setCustomerReference(\"MoTo Refund Example\");\r\n\r\napi.motoRefund(new BigInteger(\"1000\"), Currency.EUR, \"00000000-0000-0000-0000-000000000000\",options);\r\n\r\n\r\n//Initiate a MoTo refund for 10.00 USD using Money Remitance options\r\nMoneyRemittanceOptions moneyRemittanceOptions = new MoneyRemittanceOptions(\"John Doe\", CountryCode.USA);\r\nMoToOptions moToOptions = new MoToOptions(moneyRemittanceOptions);\r\n\r\napi.motoRefund(new BigInteger(\"1000\"), Currency.USD,\"00000000-0000-0000-0000-000000000000\", moToOptions);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction,  it fetches statuses coming from the sdk (ex : 'processing')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "endOfTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the terminal finishes processing the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#OperationStartResult",
                children: "OperationStartResult"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object containing information about the financial operation started."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9",
      children: "MoTo Reversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "moToReversal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A MOTO reversal, also called VOID allows the user to reverse a previous sale/refund operation. This operation reverts (if possible) a specific operation identified with a transaction id. Note that transactions can only be reversed within a 24 hours timeframe or until the daily batch of transactions has been sent for submission. MOTO Reversal is a type of card-not-present (CNP) transaction used to reverse a previous MOTO Sale or MOTO Refund."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionId"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Id of the original sale transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "options"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#moto-options",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MoToOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store optional parameters for a MoTo reversal."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "MoToOptions options = new MoToOptions();\r\noptions.setCustomerReference(\"MoTo Reversal Example\");\r\n\r\napi.motoReversal(\"00000000-0000-0000-0000-000000000000\",options);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction,  it fetches statuses coming from the sdk (ex : 'processing')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "endOfTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the terminal finishes processing the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#OperationStartResult",
                children: "OperationStartResult"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object containing information about the financial operation started."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10",
      children: "MoTo Pre-Auth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "motoPreauthorization"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A MOTO pre-auth initiates a pre-authorization operation to the card reader. It's used to verify that the account is valid and has sufficient funds to cover a pending transaction, without actually debiting the cardholder's account upfront."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#13",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the charge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "options"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#moto-options",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MoToOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store optional parameters for a MoTo sale."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "MoToOptions options = new MoToOptions();\r\noptions.setCustomerReference(\"MoTo Sale Example\");\r\n\r\napi.motoPreauthorization(new BigInteger(\"1000\"), Currency.EUR, options);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction,  it fetches statuses coming from the sdk (ex : 'processing')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "endOfTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the terminal finishes processing the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#OperationStartResult",
                children: "OperationStartResult"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object containing information about the financial operation started."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "signature-result",
      children: "Signature result"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "signatureResult"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A signatureRequired event is invoked during a transaction when a signature verification is required (f.ex when a payment is done with a swiped or chip and sign card). The merchant is required to ask the cardholder for signature and approve (or decline) the signature. signatureResult tells the card reader if the signature was approved by passing the value true in the method. To decline a signature event then false should be passed to the card reader. Note that this event is only required for an HiLite or Hi5 integration and can be safely ignored for a PAX or Telpo integration."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "accepted"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pass true if merchant accepts cardholder signature"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "//Approves signature automatically in signatureRequired event\r\n@Override\r\npublic void signatureRequired(SignatureRequest signatureRequest, Device device){\r\n\tapi.signatureResult(true);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "endOfTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the terminal finishes processing the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#operation-start-result",
                children: "OperationStartResult"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object containing information about the financial operation started. Most specifically the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " which ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must"
            }), " be saved on your end in case you do not get back the transaction result object at the end of the transaction. The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tip-adjustment",
      children: "Tip Adjustment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TipAdjustment"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A tip adjustment operation allows merchants to adjust the tip amount of a sale transaction before the batch of transactions is settled by the processor at the end of the day.\r\nNote: This functionality is only available for the restaurant industry in the United States and the processors currently supporting this functionality are TSYS and VANTIV."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dependencies:\r\nThe code example provided depends on RxJava, take a look a their documentation to see how to easily include this dependency in your android project. If you do not want to use RxJava or any additional dependencies then AsyncTask, provided by android, can be used instead for this asynchronous processing. Still we recommend using RxJava as it improves readability and maintainability."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tipAmount"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigDecimal"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tip amount added to the original (base) transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "ENUM"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the original transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique id of the original sale transaction as received from the card reader (EFTTransactionID)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "Observable.fromCallable(new Callable() {\r\n\t@Override\r\n\tpublic FinancialStatus call() throws Exception {\r\n\t\treturn api.tipAdjustment(new BigDecimal(1000), currency.GBP, \"2bc23910-c3b3-11e6-9e62-07b2a5f091ec\");\r\n\t}\r\n})\r\n.subscribeOn(Schedulers.io())\r\n.observeOn(AndroidSchedulers.mainThread())\r\n.subscribe(new Consumer() {\r\n\t@Override\r\n\tpublic void accept(@NonNull FinancialStatus status) throws Exception {\r\n\t\tif (status == FinancialStatus.AUTHORISED) {\r\n\t\t\t//SUCCESS\r\n\t\t} else if (status == FinancialStatus.DECLINED) {\r\n\t\t\t//DECLINED\r\n\t\t} else {\r\n\t\t\t//FAILED\r\n\t}\r\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result of the tip adjustment transaction, it returns a FinancialStatus, the possible values are :"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FinancialStatus"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FinancialStatus.AUTHORISED"
            }), " (tip adjustment approved by the processor) ", (0,jsx_runtime.jsx)("br", {}), "  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FinancialStatus.FAILED"
            }), " (system error or timeout)", (0,jsx_runtime.jsx)("br", {}), " - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FinancialStatus.DECLINED"
            }), " (tip adjustment declined by the processor)."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If two tip adjustments are sent for the same sale transaction, the second tip adjustment will override the first one. In case the transaction fails (not declined) we recommend that you prompt the user of the POS to retry the adjustment."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12",
      children: "Tokenize Card"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "tokenizeCard"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns a card token (not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "options"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#4",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "SaleOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store all the customization options for the transaction."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "//Tokenize a card\r\napi.tokenizeCard();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "endOfTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the terminal finishes processing the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#operation-start-result",
                children: "OperationStartResult"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object containing information about the financial operation started. Most specifically the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " which ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must"
            }), " be saved on your end in case you do not get back the transaction result object at the end of the transaction. The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13",
      children: "Card PAN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cardPan"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A cardPan request will return the full PAN of the card being swiped, dipped or tapped. Only the PANs of whitelisted card ranges will be returned by the Handpoint systems. This operation is mostly used to be able to process funds or points from loyalty cards."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "options"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#4",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "SaleOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store all the customization options for the transaction."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "//Gets the PAN of a card\r\napi.cardPan();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "endOfTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the terminal finishes processing the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#operation-start-result",
                children: "OperationStartResult"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object containing information about the financial operation started. Most specifically the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " which ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must"
            }), " be saved on your end in case you do not get back the transaction result object at the end of the transaction. The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pre-auth",
      children: "Pre-Auth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "preAuthorization"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A pre-auth initiates a pre-authorization operation to the card reader. In it's simplest form you only have to pass the amount and currency but it also accepts tip configuration and a map with extra parameters.\r\nA pre-authorization charge, also known as a pre-auth or authorization hold, is a temporary hold placed on a customer's payment card. It's used to verify that the account is valid and has sufficient funds to cover a pending transaction, without actually debiting the cardholder's account upfront."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of funds to pre-auth - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#13",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the charge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "preauthOptions"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#MerchantAuthOptions",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MerchantAuthOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store merchant authentication options for pre-auth operations."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "//Initiate a pre-auth for 1.00 in Great British Pounds\r\napi.preAuthorization(new BigInteger(\"100\"),Currency.GBP);\r\n\r\n//With Options\r\nMerchantAuthOptions preauthOptions = new MerchantAuthOptions();\r\npreauthOptions.setCustomerReference(\"CustomerReference\");\r\n\r\napi.preAuthorization(new BigInteger(\"100\"),Currency.GBP, preauthOptions);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "endOfTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the terminal finishes processing the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#operation-start-result",
                children: "OperationStartResult"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object containing information about the financial operation performed. Most specifically the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " which ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must"
            }), " be saved on your end in case you do not get back the transaction result object at the end of the transaction. The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pre-auth-increasedecrease",
      children: "Pre-Auth Increase/Decrease"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "preAuthorizationIncrease"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This operation allows the merchant to increase/decrease the amount of a previously performed pre-auth operation. For example, if a tab was opened at a restaurant and the consumer is adding new orders going above the initial pre-authorized amount, it is required to increase the amount of the initial pre-authorization before capturing it. If the merchant wants to release part of a pre-auth, an increase with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "negative"
      }), " amount should be passed to the function."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of the pre-auth increase, in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#13",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the charge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction ID of the original pre-auth operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "preauthOptions"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#7",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Options"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store merchant authentication options for pre-auth operations."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "//Initiate a pre-auth increase for 1.00 in Great British Pounds\r\nOptions preauthOptions = new Options();\r\npreauthOptions.setCustomerReference(\"CustomerReference\");\r\n\r\napi.preAuthorizationIncrease(new BigInteger(\"100\"),Currency.GBP,\"00000000-0000-0000-0000-000000000000\", preauthOptions);\r\n\r\n//Initiate a pre-auth decrease for 1.00 in Great British Pounds\r\nOptions preauthOptions = new Options();\r\npreauthOptions.setCustomerReference(\"CustomerReference\");\r\n\r\napi.preAuthorizationIncrease(new BigInteger(\"-100\"),Currency.GBP,\"00000000-0000-0000-0000-000000000000\", preauthOptions);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "endOfTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the terminal finishes processing the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#operation-start-result",
                children: "OperationStartResult"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object containing information about the financial operation performed. Most specifically the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " which ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must"
            }), " be saved on your end in case you do not get back the transaction result object at the end of the transaction. The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pre-auth-capture",
      children: "Pre-Auth Capture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "preAuthorizationCapture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A pre-authorized transaction can be captured to actually debit the cardholder's account. Depending on the merchant category code, the capture needs to happen between 7 and 31 days after the original pre-authorization. If not captured the funds will be automatically released by the issuing bank."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Please note that a pre-authorization can only be captured ONCE, multiple partial captures are not allowed"
      }), ". If for some reason, the pre-authorization was captured for an incorrect amount, you can attempt to reverse the capture (does not work with all acquirers). If the capture reversal was declined, the cardholder needs to come back into the store with his card to get refunded or re-authorize the transaction. Alternatively, the cardholder can give his card details over the phone to the merchant and a MOTO pre-auth or MOTO refund can be issued."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Card schemes set specific rules around which businesses are able to use pre-auth transactions. Eligibility is determined based on the Merchant Category Code (MCC), together with the card scheme."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Card schemes have their own set of rules on authorisation expiry. Capturing a transaction after the scheme expiry time increases the risk of a failed capture, and may also increase the interchange and/or scheme fees charged for the transaction. Card schemes can also expire an authorisation before or after the official scheme expiry period has been reached. You can often capture a payment successfully after an authorisation has expired. Depending on the card scheme, there can be a fee for late capture, and an increase in interchange fee. The risk of cardholder chargebacks increase as well."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scheme"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MCC"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mastercard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All MCCs except 5542"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visa"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All MCCs except 5542"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3351-3441, 3501-3999, 4111, 4112, 4121, 4131, 4411, 4457, 5499, 5812, 5813, 7011, 7033, 7996, 7394, 7512, 7513, 7519, 7999"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "American Express"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All MCCs except 5542"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "VISA rules"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "MCC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Segment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Authorization timeframe"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Amount tolerance (captured amount above pre-authorized amount)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3501-3999, 7011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lodging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3351-3500, 7512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Car Rental"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4411"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Steamship and Cruise Lines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7513"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truck Rentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trailer Parks and Campgrounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7519"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Motor Home and Recreational Vehicle Rentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5552"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Electric Vehicle Charging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7523"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parking and Garages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7394"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equipment, Tool, Furniture and Appliance Rental"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recreation Services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7996"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amusement Parks, Carnivals, Circuses, Fortune Tellers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5599"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Miscellaneous Automotive, Aircraft, and Farm Equipment Dealers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4457"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boat Rentals and Leasing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5571"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Motorcycle Shops and Dealers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4111"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local and Suburban Commuter, Passenger Transportation, including Ferries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25 USD (or equivalent amount in local currency)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4112"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passenger Railways"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25 USD (or equivalent amount in local currency)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4131"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bus Lines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25 USD (or equivalent amount in local currency)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5812"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eating Places and Restaurants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same day"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5813"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drinking Places, Bars, Taverns, Cocktail Lounges, Nightclubs, Discotheques"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same day"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4121"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Taxicabs and Limousines (Card-Absent Environment only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same day"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MASTERCARD rules"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "MCC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Authorization timeframe"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Amount tolerance (captured amount above pre-authorized amount)"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All MCCs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20%"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maestro rules"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "MCC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Segment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Authorization timeframe"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Amount tolerance (captured amount above pre-authorized amount)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5812"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eating Places and Restaurants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5814"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast Food Restaurants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AMEX rules"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "MCC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Authorization timeframe"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All MCCs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Note: Pre-Auth with AMEX is only available in the United States/Canada with the processor TSYS."
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Discover rules"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "MCC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Authorization timeframe"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Car Rental, Hotel/Lodging MCCs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All MCCs except Car Rental and Hotel/Lodging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 days"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Diners rules"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "MCC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Debit/credit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Authorization timeframe"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Car Rental, Hotel/Lodging MCCs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All MCCs except Car Rental and Hotel/Lodging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All MCCs except Car Rental and Hotel/Lodging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 days"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "JCB rules"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "MCC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Authorization timeframe"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hotel and Car rental"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time of stay/rental"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All MCCs except Hotel and Car rental"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 year"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of funds to pre-auth - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#13",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the charge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction id of the original pre-auth transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "preauthOptions"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#7",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Options"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store merchant authentication options for pre-auth operations."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "//Initiate a pre-auth capture for 1.00 in Great British Pounds\r\nOptions preauthOptions = new Options();\r\npreauthOptions.setCustomerReference(\"CustomerReference\");\r\n\r\napi.preAuthorizationCapture(new BigInteger(\"1000\"),Currency.GBP,\"00000000-0000-0000-0000-000000000000\", preauthOptions);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "endOfTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the terminal finishes processing the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#operation-start-result",
                children: "OperationStartResult"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object containing information about the financial operation performed. Most specifically the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " which ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must"
            }), " be saved on your end in case you do not get back the transaction result object at the end of the transaction. The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pre-authcapture-reversal",
      children: "Pre-Auth/Capture Reversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "preAuthorizationReversal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A Pre-Auth reversal allows the user to reverse a previous pre-auth operation. This operation reverts (if possible) a specific pre-auth identified with a transaction id.\r\nA pre-authorized reversal transaction ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "will release the whole pre-authorized amount"
      }), ", for example when renting a car, the pre-auth reversal allows the merchant to release the funds if the car was not damaged. For partial releases, please check the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androidtransactions#pre-auth-increasedecrease",
        children: "Pre-Auth Increase/Decrease"
      }), " operation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A Pre-Auth reversal can be used to reverse a capture operation as well. A capture reversal transaction ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "will release all the funds withheld"
      }), ". Reversing a capture operation can only be done before the funds are automatically settled at night, please note that not all acquirers support reversal of captured transactions. If a capture reversal is attempted after the funds have been moved, the operation will receive a decline.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "When the capture is reverted it returns to the previous state (", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#34",
        children: "CAPTURED"
      }), " -> ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#34",
        children: "AUTHORISED"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction id of the original pre-auth or capture GUID transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "preauthOptions"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#7",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Options"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store merchant authentication options for pre-auth operations."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "//Initiate a pre-auth reversal\r\napi.preAuthorizationReversal(\"00000000-0000-0000-0000-000000000000\");\r\n\r\nOptions preauthOptions = new Options();\r\npreauthOptions.setCustomerReference(\"CustomerReference\");\r\n\r\n//Initiate a pre-auth reversal with options\r\napi.preAuthorizationReversal(\"00000000-0000-0000-0000-000000000000\", preauthOptions);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1010.8/androideventlisteners#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "endOfTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the terminal finishes processing the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/legacy/android/Android%20SDK%207.1010.8/androidobjects#operation-start-result",
                children: "OperationStartResult"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object containing information about the financial operation performed. Most specifically the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " which ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must"
            }), " be saved on your end in case you do not get back the transaction result object at the end of the transaction. The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "standalone-tokenized-payments-operations-tokenize-and-modify",
      children: "Standalone Tokenized Payments Operations (Tokenize and Modify)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "standaloneTokenizedPaymentsOperations"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "standalone-tokenized-sale",
      children: "Standalone Tokenized Sale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Overview **"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "tokenizedOperation"
        })
      }), " functionality in the Handpoint Android SDK enables card tokenization followed by a sale transaction. It is executed through the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Hapi"
      }), " Android interface."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This operation consists of two stages:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Card Tokenization"
        }), ": The SDK tokenizes the card and triggers the ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "Events.CardTokenized"
          }), " event"]
        }), ", providing the tokenized card details and control callbacks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sale Execution"
        }), ": The integrator must invoke the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "resume()"
        }), " method from the callback object to proceed with the sale transaction. The outcome is returned through the ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "Events.EndOfTransaction"
          }), " event"]
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Method Signature **"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "/**\r\n * Tokenized Operation on a specific device using regular parameters.\r\n * This operation consists of two parts. The first part, performs a tokenization of the card,\r\n * whose token is sent to the integrator through the Events.CardTokenized event.\r\n * Once the integrator wishes to continue the operation,\r\n * it must execute the resume method of the object sent through the event,\r\n * with the data of the operation it wishes to perform.\r\n * This operation will be executed and\r\n * the result will be received through the Events.EndOfTransaction event.\r\n * The operation supported is Sale.\r\n *\r\n * @param amount   The transaction amount.\r\n * @param currency The currency to be used.\r\n * @param options  An object containing configuration parameters for customer reference.\r\n * @return True if the command was sent successfully to the device. False if sending failed.\r\n */\r\n@JvmOverloads\r\nfun tokenizedOperation(amount: BigInteger, currency: Currency, options: Options = Options()): OperationStartResult\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Events Flow **"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["*** 1. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Events.CardTokenized"
      }), " ***"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Triggered after the card is tokenized. Provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "CardTokenizationData"
          })
        }), ": Contains tokenized card information."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ResumeCallback"
          })
        }), ": Allows the integrator to resume, cancel, or finish the operation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["*** 2. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Events.EndOfTransaction"
      }), " ***"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Triggered after the sale transaction is completed, returning the transaction result."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** cardTokenized Event Components **"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "*** CardTokenizationData ***"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "token"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokenized card value."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "expiryDate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Card's expiry date."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tenderType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TenderType"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Transaction type: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CREDIT"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DEBIT"
            }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NOT_SET"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "issuerCountryCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CountryCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Country code of the issuer (defaults to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Unknown"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cardBrand"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brand of the card (e.g., Visa, MasterCard)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "languagePref"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preferred language setting."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tipAmount"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BigInteger"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Tip amount (defaults to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BigInteger.ZERO"
            }), ")."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "*** ResumeCallback ***"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interface responsible for managing the continuation or termination of the tokenization operation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exceptions"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fun resume(operationDto: OperationDto)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Continues the operation with a specified ", (0,jsx_runtime.jsx)(_components.code, {
              children: "OperationDto"
            }), ". Only ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Sale"
            }), " operations are allowed."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ResumedOperation"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CancelledOperation"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TimeoutOperation"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IllegalStateException"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fun finishWithoutCardOperation()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Completes the operation without proceeding to a card transaction."
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ResumedOperation"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CancelledOperation"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TimeoutOperation"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IllegalStateException"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fun cancel()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cancels the ongoing operation."
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ResumedOperation"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CancelledOperation"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TimeoutOperation"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IllegalStateException"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Calling any method multiple times, after timeout, or after cancellation triggers exceptions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["*** Example Handling of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Events.CardTokenized"
      }), " (Kotlin) ***"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "override fun onCardTokenized(\r\n\tcardTokenizationData: CardTokenizationData,\r\n\tresumeCallback: ResumeCallback\r\n) {\r\n\t// Access tokenized card details\r\n\tval token = cardTokenizationData.token\r\n\tval cardBrand = cardTokenizationData.cardBrand\r\n\t\r\n\t// Decide next action: proceed with sale\r\n\tresumeCallback.resume(\r\n\t\tOperationDto.Sale(\r\n\t\t\tamount = BigInteger.valueOf(2000),\r\n\t\t\tcurrency = Currency.getInstance(\"USD\"),\r\n\t\t\toptions = SaleOptions(/* configuration options */)\r\n\t\t)\r\n\t)\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** OperationDto **"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A sealed class representing supported transaction types after tokenization."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Subclass"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fields"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Sale"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount: BigInteger"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "currency: Currency"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "options: SaleOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initiates a sale transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Refund"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount: BigInteger"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "currency: Currency"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID: String?"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "options: RefundOptions"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Initiates a refund transaction. ", (0,jsx_runtime.jsx)(_components.em, {
              children: "(Not allowed after tokenization)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SaleReversal"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount: BigInteger"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "currency: Currency"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID: String"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "options: SaleReversalOptions"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reverses a previous sale. ", (0,jsx_runtime.jsx)(_components.em, {
              children: "(Not allowed after tokenization)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RefundReversal"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount: BigInteger"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "currency: Currency"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID: String"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "options: RefundReversalOptions"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reverses a previous refund. ", (0,jsx_runtime.jsx)(_components.em, {
              children: "(Not allowed after tokenization)"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Behavior and Restrictions **"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Only ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Sale"
            }), " operations are allowed"]
          }), " when invoking ", (0,jsx_runtime.jsx)(_components.code, {
            children: "resume()"
          }), " after receiving the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "cardTokenized"
          }), " event."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Passing other operation types (", (0,jsx_runtime.jsx)(_components.code, {
              children: "Refund"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SaleReversal"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RefundReversal"
            }), ") will result in a transaction result with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "MessageType.FEATURE_NOT_SUPPORTED"
              })
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Proper exception handling is required when using the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ResumeCallback"
          }), " methods."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Exceptions **"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Exception"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ResumedOperation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thrown if the operation was already resumed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CancelledOperation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thrown if the operation was previously cancelled."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TimeoutOperation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thrown if the operation timed out."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IllegalStateException"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thrown for any invalid operation state."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Sequence Diagram **"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "standalone-tokenized-sale-sequence-diagram",
      children: (0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(93152)/* ["default"] */ .A) + "",
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "Standalone Tokenized SALE Sequence Diagram",
          src: (__webpack_require__(95725)/* ["default"] */ .A) + "",
          width: "2068",
          height: "1592"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Summary **"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "tokenizedOperation"
        })
      }), " method securely tokenizes card data and passes control to the integrator via the ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Events.CardTokenized"
        }), " event"]
      }), ", delivering:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "CardTokenizationData"
          })
        }), ": Contains the tokenized card details."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ResumeCallback"
          })
        }), ": Allows integrators to resume with a supported ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Sale"
        }), " operation, cancel, or finish without a transaction."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The result of the operation is returned through the ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Events.EndOfTransaction"
        }), " event"]
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tip:"
        }), " Always validate and handle exceptions when interacting with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ResumeCallback"
        }), " to ensure smooth operation flow."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "standalone-tokenized-refund-reversal-and-refundreversal",
      children: "Standalone Tokenized Refund, Reversal and RefundReversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "standaloneTokenizedRefund"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Overview **"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "tokenizedOperation"
        })
      }), " functionality in the Handpoint Android SDK allows the execution of a card tokenization followed immediately by a specified operation (such as SaleReversal, Refund, or RefundReversal)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this version, the integrator provides the required operation as a parameter, and the SDK performs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Card Tokenization (with a REST API request to retrieve the card token)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execution of the operation passed by the integrator."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The result of both actions is delivered through the ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Events.EndOfTransaction"
        }), " event"]
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Method Signature **"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "/**\r\n * Tokenized Operation on a specific device using regular parameters.\r\n * This operation consists of the consecutive execution of two operations:\r\n * Tokenization of the card and the operation passed by parameter by\r\n * the integrator. The result of both operations will be received through\r\n * the Events.EndOfTransaction event.\r\n * The operations supported are: SaleReversal, Refund, RefundReversal\r\n *\r\n * @param currency  The currency to be used.\r\n * @param operation The operation to be executed.\r\n * @param options   An object containing configuration parameters for customer reference.\r\n * @return True if the command was sent successfully to the device. False if the sending was not successful.\r\n */\r\nfun tokenizedOperation(\r\n\tcurrency: Currency,\r\n\toperation: OperationDto,\r\n\toptions: Options = Options()\r\n): OperationStartResult\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Events Flow **"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "*** Events.EndOfTransaction ***"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Triggered after both card tokenization and the specified operation are executed. The integrator receives the final transaction result in this event."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Supported Operations **"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This version of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tokenizedOperation"
      }), " supports the following ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OperationDto"
      }), " types:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "OperationDto Subclass"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fields"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Refund"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount: BigInteger"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "currency: Currency"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID: String?"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "options: RefundOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initiates a refund transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SaleReversal"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount: BigInteger"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "currency: Currency"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID: String"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "options: SaleReversalOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverses a previous sale."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RefundReversal"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount: BigInteger"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "currency: Currency"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID: String"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "options: RefundReversalOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverses a previous refund."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "Sale"
        }), " operation is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not supported"
        }), " in this version of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tokenizedOperation"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Tokenization Process **"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Internally, the SDK performs a REST API call to retrieve the card token. Once retrieved, it immediately proceeds to execute the operation provided by the integrator."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "*** Example Usage (Kotlin) ***"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "val refundOperation = OperationDto.Refund(\r\n\tamount = BigInteger.valueOf(1500),\r\n\tcurrency = Currency.getInstance(\"EUR\"),\r\n\toriginalTransactionID = \"TX123456\",\r\n\toptions = RefundOptions(/* options */)\r\n)\r\n\r\nval result = hapi.tokenizedOperation(\r\n\tcurrency = Currency.getInstance(\"EUR\"),\r\n\toperation = refundOperation,\r\n\toptions = Options(/* config */)\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Behavior and Restrictions **"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The SDK will ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "automatically execute"
          }), " both:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tokenization (via REST API)."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The provided operation (", (0,jsx_runtime.jsx)(_components.code, {
              children: "Refund"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SaleReversal"
            }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RefundReversal"
            }), ")."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The integrator will receive the outcome via ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Events.EndOfTransaction"
            })
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Sale operations are ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "not allowed"
          }), " in this mode."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Exceptions **"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The method itself returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "false"
      }), " if the command fails to send to the device. Other exceptions related to transaction processing will be communicated via the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.EndOfTransaction"
        })
      }), " event."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Sequence Diagram **"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(24989)/* ["default"] */ .A) + "",
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "Standalone Tokenized Refund, Reversal and RefundReversal Sequence Diagram",
          src: (__webpack_require__(85576)/* ["default"] */ .A) + "",
          width: "2068",
          height: "1592"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Summary **"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "tokenizedOperation"
        })
      }), " method allows integrators to provide a specific operation upfront (Refund, SaleReversal, RefundReversal). The SDK:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retrieves the card token via REST API."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Immediately executes the operation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Returns the result via ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Events.EndOfTransaction"
          })
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tip:"
        }), " Use this method when you want to perform tokenization and the operation in one streamlined flow, without intermediate decision points."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cloudTokenizedPaymentsOperations",
      children: "Cloud Tokenized Payments Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cloudTokenizedPaymentsOperations"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Overview **"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In Cloud mode, integrators can control the Android SDK via one of our Cloud clients, which are our ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/restapi/restintroduction",
        children: "REST API"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/javascript/javascriptintroduction",
        children: "JavaScript SDK"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/windows/windowsintroduction",
        children: "Windows SDK"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are two possible types of Cloud integrations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration with a callback URL"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration with Polling"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration with a callback URL"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "callbackUrl"
      }), " and a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "token"
      }), " are included in the request, the terminal sends a POST with the transaction result to the specified URL. The token will be included in the HTTP header as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AUTH-TOKEN"
      }), " and can be used on the callback URL side to identify or authenticate the call."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Request:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -X POST -H\"ApiKeyCloud: XXXXXXX-KXDMZV1-HW8MXBG-XXXXXXX\" -H\"Content-Type: application/json\" \\\r\n-d '{\"operation\": \"sale\", \"terminal_type\":\"PAXA910S\", \"serial_number\": \"2840011110\", \"amount\": \"1034\", \"currency\": \"EUR\", \"tokenize\": true, \"callbackUrl\": \"https://results.example.com/callback\", \"token\": \"auth-token-1\" }' \\\r\nhttps://cloud.handpoint.io/transactions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Response:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\"statusMessage\":\"Operation Accepted\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Callback:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following is an example of the transaction result sent to the specified ", (0,jsx_runtime.jsx)(_components.code, {
        children: "callbackUrl"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n   \"accountType\": \"\",\r\n   \"aid\": \"A0000000041010\",\r\n   \"arc\": \"0000\",\r\n   \"authorisationCode\": \"010119\",\r\n   \"balance\": null,\r\n   \"budgetNumber\": \"\",\r\n   \"cardEntryType\": \"ICC\",\r\n   \"cardHolderName\": \"\",\r\n   \"cardLanguagePreference\": \"\",\r\n   \"cardSchemeName\": \"VISA\",\r\n   \"cardToken\": \"535120cMXnuK6046\",\r\n   \"cardTypeId\": \"************6046\",\r\n   \"chipTransactionReport\": \"\",\r\n   \"currency\": \"EUR\",\r\n   \"customData\": \"...\",\r\n   \"customerReceipt\": \"https://receipts.handpoint.io/receipts/f6059a10-c1fe-11ef-9cf2-8b8a2cdbabca/customer.html\",\r\n   \"customerReference\": \"\",\r\n   \"deviceStatus\": {\r\n\t   \"applicationName\": \"Atom\",\r\n\t   \"applicationVersion\": \"20.4.9.2-RC.5\",\r\n\t   \"batteryCharging\": \"Full\",\r\n\t   \"batteryStatus\": \"100\",\r\n\t   \"batterymV\": \"8154\",\r\n\t   \"bluetoothName\": \"PAXA910S\",\r\n\t   \"externalPower\": \"USB\",\r\n\t   \"serialNumber\": \"2840011110\",\r\n\t   \"statusMessage\": \"\"\r\n   },\r\n   \"dueAmount\": 0,\r\n   \"errorMessage\": \"\",\r\n   \"expiryDateMMYY\": \"0129\",\r\n   \"finStatus\": \"AUTHORISED\",\r\n   \"iad\": \"0210A04003240000000000000000000000FF\",\r\n   \"issuerResponseCode\": \"00\",\r\n   \"maskedCardNumber\": \"************6046\",\r\n   \"merchantAddress\": \"Random Street, Some City\",\r\n   \"merchantName\": \"Random Merchant\",\r\n   \"merchantReceipt\": \"https://receipts.handpoint.io/receipts/f6059a10-c1fe-11ef-9cf2-8b8a2cdbabca/merchant.html\",\r\n   \"metadata\": null,\r\n   \"mid\": \"12S001\",\r\n   \"moneyRemittanceOptions\": null,\r\n   \"multiLanguageErrorMessages\": {},\r\n   \"multiLanguageStatusMessages\": {\r\n\t   \"en_CA\": \"Approved or completed successfully\",\r\n\t   \"fr_FR\": \"Transaction approuvée\"\r\n   },\r\n   \"originalEFTTransactionID\": \"\",\r\n   \"paymentScenario\": \"CHIPCONTACTLESS\",\r\n   \"requestedAmount\": 524,\r\n   \"rrn\": \"513815902180\",\r\n   \"signatureUrl\": \"\",\r\n   \"statusMessage\": \"Approved or completed successfully\",\r\n   \"tenderType\": \"CREDIT\",\r\n   \"tid\": \"123123\",\r\n   \"tipAmount\": 0,\r\n   \"totalAmount\": 524,\r\n   \"transactionID\": \"16059a10-c1fe-11ef-9cf2-8b8a2cdbabca\",\r\n   \"transactionOrigin\": \"CLOUD\",\r\n   \"transactionReference\": \"b45ff306-78f2-4d3b-970c-e47c8d9b9f83\",\r\n   \"tsi\": \"0000\",\r\n   \"tvr\": \"0000008001\",\r\n   \"type\": \"SALE\",\r\n   \"unMaskedPan\": \"\",\r\n   \"verificationMethod\": \"NOT_REQUIRED\",\r\n   \"efttimestamp\": 1735048275000,\r\n   \"efttransactionID\": \"16059a10-c1fe-11ef-9cf2-8b8a2cdbabca\",\r\n   \"tipPercentage\": 0.0,\r\n   \"recoveredTransaction\": false\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration using Polling"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If the request does not include a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "callbackUrl"
      }), " and a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "token"
      }), ", then polling can be used to retrieve the transaction result from Handpoint's transaction-result endpoint."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Request:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -X POST -H\"ApiKeyCloud: XXXXXXX-KXDMZV1-HW8MXBG-XXXXXXX\" -H\"Content-Type: application/json\" \\\r\n-d '{\"operation\": \"sale\", \"terminal_type\":\"PAXA910S\", \"serial_number\": \"2840011110\", \"amount\": \"1034\", \"currency\": \"EUR\", \"tokenize\": true }' \\\r\nhttps://cloud.handpoint.io/transactions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Response:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionResultId"
      }), ", integrators can poll the transaction-result endpoint to retrieve the result:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n  \"statusMessage\": \"Operation Accepted\",\r\n  \"transactionResultId\": \"1840011114-1735048331833\"\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Polling request:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -i -X GET -H\"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" -H\"Content-Type: application/json\" \\\r\nhttps://cloud.handpoint.io/transaction-result/1840011114-1735048331833\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Possible responses from polling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "204: Transaction still in process."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "200: Transaction result is available."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloud-tokenized-sale",
      children: "Cloud Tokenized Sale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud Tokenized Operation"
      }), " enables remote-triggered financial operations, where a cloud-based system initiates a request to tokenize a card and perform a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sale"
      }), " transaction using the Android SDK."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This operation is initiated by sending a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "CloudFinancialRequest"
        })
      }), " object. The SDK handles the following workflow:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Parses and validates the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CloudFinancialRequest"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tokenizes the card (if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tokenize"
        }), " is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operation"
        }), " is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Sale"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Triggers the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Events.CardTokenized"
          })
        }), " event with token and callback."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Proceeds with the Sale operation upon ", (0,jsx_runtime.jsx)(_components.code, {
          children: "resume()"
        }), " call."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Emits the final result via ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Events.EndOfTransaction"
          })
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CloudFinancialRequest"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Description"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A data object that represents the request payload for initiating cloud-based financial operations including tokenized sales."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Fields"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Operations"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must be set to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Operations.Sale"
            }), " for this flow."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tokenize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Boolean"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must be set to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), " to trigger card tokenization."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction amount as string."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency code."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "callbackUrl"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If present, indicates REST API request."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifier of original transaction (if any)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "uuid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event UUID, auto-formatted as 6-digit string."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference for idempotency; auto-generated if blank."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "receipt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw or URL-based receipt data."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "metadata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Metadata?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional metadata for the operation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "merchantAuth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MerchantAuth?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merchant authentication object."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "duplicateCheck"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Boolean"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables duplicate request validation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "duplicateCheckEndpoint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional custom endpoint for duplicate checks."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Other fields may be present but are not required for the tokenized Sale flow."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal Behavior"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The SDK uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getParsedAmount()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getParsedCurrency()"
        }), " to convert string values into typed ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BigInteger"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Currency"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "callbackUrl"
        }), " is present, the request is treated as a REST API request."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tokenize"
        }), " is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operation == Sale"
        }), ", the card is tokenized, and the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Events.CardTokenized"
          })
        }), " event is emitted."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After receiving the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "resume()"
        }), " call, the SDK performs the Sale operation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events Flow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.CardTokenized"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Emitted after card tokenization. Provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CardTokenizationData"
        }), ": Includes card token and card info."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ResumeCallback"
        }), ": To resume with the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Sale"
        }), " operation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.EndOfTransaction"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Emitted after the sale is completed."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavior and Restrictions"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The only supported operation for this flow is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Sale"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Must set:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operation = Operations.Sale"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tokenize = true"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Invoking ", (0,jsx_runtime.jsx)(_components.code, {
          children: "resume()"
        }), " with any operation other than ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Sale"
        }), " will result in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MessageType.FEATURE_NOT_SUPPORTED"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example CloudFinancialRequest JSON"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n  \"operation\": \"Sale\",\r\n  \"tokenize\": true,\r\n  \"amount\": \"1000\",\r\n  \"currency\": \"EUR\",\r\n  \"transactionReference\": \"a1b2c3d4\",\r\n  \"callbackUrl\": \"https://merchant.com/callback\"\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Kotlin Flow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "override fun onCardTokenized(\r\n\tcardTokenizationData: CardTokenizationData,\r\n\tresumeCallback: ResumeCallback\r\n) {\r\n\tval sale = OperationDto.Sale(\r\n\t\tamount = cardTokenizationData.tipAmount,\r\n\t\tcurrency = Currency.getInstance(\"EUR\"),\r\n\t\toptions = SaleOptions(/* additional config */)\r\n\t)\r\n\tresumeCallback.resume(sale)\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sequence Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(82206)/* ["default"] */ .A) + "",
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "Cloud Tokenized SALE",
          src: (__webpack_require__(63073)/* ["default"] */ .A) + "",
          width: "2068",
          height: "1592"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud Tokenized Operation"
      }), " enables external services to initiate tokenized Sale transactions through a structured ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudFinancialRequest"
      }), ". The SDK handles card tokenization and executes the Sale transaction if the correct flags are set."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tip:"
        }), " This is ideal for headless or server-triggered flows that require secure card tokenization and transaction execution in a single interaction."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloud-tokenized-sale-reversal",
      children: "Cloud Tokenized Sale Reversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sale Reversal Tokenized Operation"
      }), " is a cloud-initiated process that tokenizes a card and performs a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sale Reversal"
      }), " transaction. This operation is triggered via a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudFinancialRequest"
      }), " object and follows the same interaction pattern as other dependant tokenized operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It is identified by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "operation = Operations.SaleReversal"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "tokenize = true"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Upon receiving this request, the SDK emits the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.DependantReversalReceived"
        })
      }), " event. The integrator is then responsible for controlling the transaction flow using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ResumeDependantOperationExecutor"
      }), " interface."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CloudFinancialRequest Configuration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Fields"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Operations.SaleReversal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifies a Sale Reversal request."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tokenize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triggers tokenization before the operation."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Other fields such as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "originalTransactionId"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "currency"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "amount"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionReference"
      }), " must also be set as needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Event: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.DependantReversalReceived"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Emitted when the SDK receives a cloud request for a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sale Reversal"
      }), " with tokenization enabled. The integrator handles this event via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DependantOperationEvent"
      }), " interface:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "interface DependantOperationEvent {\r\n\tfun dependantRefundReceived(\r\n\t\tamount: BigInteger,\r\n\t\tcurrency: Currency,\r\n\t\toriginalTransactionId: String,\r\n\t\tresumeDependantOperation: ResumeDependantOperation\r\n\t)\r\n\r\n\tfun dependantReversalReceived(\r\n\t\toriginalTransactionId: String,\r\n\t\tresumeDependantOperation: ResumeDependantOperation\r\n\t)\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interface: ResumeDependantOperationExecutor"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "interface ResumeDependantOperationExecutor {\r\n\tfun executeDependantOperation(amount: BigInteger, currency: Currency, originalTransactionId: String)\r\n\tfun finishWithoutCardOperation()\r\n\tfun cancel()\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation: ResumeDependantSaleReversalExecutorImpl"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "class ResumeDependantSaleReversalExecutorImpl(\r\n\tprivate val currency: Currency,\r\n\tprivate val originalTransactionId: String,\r\n\tprivate val options: InternalSaleReversalOptions,\r\n\tprivate val delegate: Hapi\r\n): ResumeDependantOperationExecutor {\r\n\r\n\toverride fun executeDependantOperation(amount: BigInteger, currency: Currency, originalTransactionId: String) {\r\n\t\tval refundOperationDto = OperationDto.SaleReversal(\r\n\t\t\tamount,\r\n\t\t\tcurrency,\r\n\t\t\toriginalTransactionId,\r\n\t\t\toptions\r\n\t\t)\r\n\t\tval result = delegate.tokenizedOperation(currency, refundOperationDto, options).operationStarted\r\n\t\tif (!result) {\r\n\t\t\tval transactionResult = InstancesManager.transactionData.generateTransactionResultWithoutResponse()\r\n\t\t\ttransactionResult.finStatus = FinancialStatus.FAILED\r\n\t\t\ttransactionResult.transactionOrigin = TransactionOrigin.CLOUD\r\n\t\t\tsendTransactionResult(transactionResult)\r\n\t\t}\r\n\t}\r\n\r\n\toverride fun finishWithoutCardOperation() {\r\n\t\tval transactionResult = InstancesManager.transactionData.generateTransactionResultWithoutResponse()\r\n\t\ttransactionResult.finStatus = FinancialStatus.AUTHORISED\r\n\t\ttransactionResult.type = TransactionType.VOID_SALE\r\n\t\ttransactionResult.currency = currency\r\n\t\ttransactionResult.totalAmount = BigInteger.ZERO\r\n\t\ttransactionResult.transactionOrigin = TransactionOrigin.CLOUD\r\n\t\ttransactionResult.transactionID = UUID.randomUUID().toString()\r\n\t\ttransactionResult.eFTTransactionID = transactionResult.transactionID\r\n\t\ttransactionResult.originalEFTTransactionID = originalTransactionId\r\n\r\n\t\tInstancesManager.cardReader.isCardPresent = true\r\n\t\tsendTransactionResult(transactionResult)\r\n\t}\r\n\r\n\toverride fun cancel() {\r\n\t\tval transactionResult = InstancesManager.transactionData.generateTransactionResultWithoutResponse()\r\n\t\ttransactionResult.finStatus = FinancialStatus.CANCELLED\r\n\t\ttransactionResult.type = TransactionType.VOID_SALE\r\n\t\ttransactionResult.currency = Currency.Unknown\r\n\t\ttransactionResult.totalAmount = BigInteger.ZERO\r\n\t\ttransactionResult.transactionOrigin = TransactionOrigin.CLOUD\r\n\t\ttransactionResult.originalEFTTransactionID = originalTransactionId\r\n\t\tsendTransactionResult(transactionResult)\r\n\t}\r\n\r\n\tinternal fun sendTransactionResult(transactionResult: TransactionResult) {\r\n\t\tTransactionResultHandler.transactionFinished(transactionResult)\r\n\t}\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavior and Flow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "executeDependantOperation(...)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Executes the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SaleReversal"
            }), " operation after tokenization."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "finishWithoutCardOperation()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns an ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AUTHORISED"
            }), " transaction result without financial movement."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cancel()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Sends a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CANCELLED"
            }), " transaction result indicating cancellation."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sequence Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "standalone-tokenized-refund-reversal-and-refundreversal-sequence-diagram",
      children: (0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(87352)/* ["default"] */ .A) + "",
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "Standalone Tokenized Refund, Reversal and RefundReversal Sequence Diagram",
          src: (__webpack_require__(20459)/* ["default"] */ .A) + "",
          width: "2068",
          height: "1592"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sale Reversal Tokenized Operation"
      }), " is a secure, cloud-triggered flow for performing a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sale Reversal"
      }), " using a tokenized card. The operation is handled through the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DependantReversalReceived"
      }), " event and executed with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ResumeDependantOperationExecutor"
      }), " implementation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tip:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "finishWithoutCardOperation()"
        }), " when the sale reversal is already completed outside the SDK but you want to report it as authorised for consistency."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloud-tokenized-refund",
      children: "Cloud Tokenized Refund"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Refund Tokenized Operation"
      }), " is a cloud-based flow that allows merchants to initiate a tokenized refund from a remote system. It uses the same ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudFinancialRequest"
      }), " object as other cloud operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This operation is identified by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "operation = Operations.Refund"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "tokenize = true"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Upon receiving the request, the SDK emits the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.DependantRefundReceived"
        })
      }), " event. The integrator must handle this event by using the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ResumeDependantOperationExecutor"
        })
      }), " interface to define the next step."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CloudFinancialRequest Configuration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Fields"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Operations.Refund"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indicates the refund operation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tokenize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables card tokenization."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Other standard fields such as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "amount"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "currency"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "originalTransactionId"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionReference"
      }), " should be populated according to the use case."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Event: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.DependantRefundReceived"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Triggered when a tokenized refund request is received from the cloud. The integrator must respond using a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ResumeDependantOperationExecutor"
      }), " implementation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interface: ResumeDependantOperationExecutor"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Defines the actions the integrator must take after receiving the refund request."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "interface ResumeDependantOperationExecutor {\r\n\r\n\tfun executeDependantOperation(\r\n\t\tamount: BigInteger,\r\n\t\tcurrency: Currency,\r\n\t\toriginalTransactionId: String\r\n\t)\r\n\r\n\tfun finishWithoutCardOperation()\r\n\r\n\tfun cancel()\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation: ResumeDependantRefundExecutorImpl"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This implementation manages the refund operation execution and fallback flows."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "class ResumeDependantRefundExecutorImpl(\r\n\tprivate val currency: Currency,\r\n\tprivate val options: InternalRefundOptions,\r\n\tprivate val originalTransactionId: String,\r\n\tprivate val delegate: Hapi\r\n) : ResumeDependantOperationExecutor {\r\n\r\n\toverride fun executeDependantOperation(amount: BigInteger, currency: Currency, originalTransactionId: String) {\r\n\t\tval refundOperationDto = OperationDto.Refund(\r\n\t\t\tamount,\r\n\t\t\tcurrency,\r\n\t\t\toriginalTransactionId.ifBlank { null },\r\n\t\t\toptions\r\n\t\t)\r\n\t\tval result = delegate.tokenizedOperation(currency, refundOperationDto, options).operationStarted\r\n\t\tif (!result) {\r\n\t\t\tval transactionResult = InstancesManager.transactionData.generateTransactionResultWithoutResponse()\r\n\t\t\ttransactionResult.finStatus = FinancialStatus.FAILED\r\n\t\t\tsendTransactionResult(transactionResult)\r\n\t\t}\r\n\t}\r\n\r\n\toverride fun finishWithoutCardOperation() {\r\n\t\tval transactionResult = InstancesManager.transactionData.generateTransactionResultWithoutResponse()\r\n\t\ttransactionResult.originalEFTTransactionID = originalTransactionId\r\n\t\ttransactionResult.finStatus = FinancialStatus.AUTHORISED\r\n\t\ttransactionResult.type = TransactionType.REFUND\r\n\t\ttransactionResult.currency = currency\r\n\t\ttransactionResult.totalAmount = BigInteger.ZERO\r\n\t\ttransactionResult.transactionOrigin = TransactionOrigin.CLOUD\r\n\t\ttransactionResult.transactionID = UUID.randomUUID().toString()\r\n\t\ttransactionResult.eFTTransactionID = transactionResult.transactionID\r\n\t\tInstancesManager.cardReader.isCardPresent = true\r\n\t\tsendTransactionResult(transactionResult)\r\n\t}\r\n\r\n\toverride fun cancel() {\r\n\t\tval transactionResult = InstancesManager.transactionData.generateTransactionResultWithoutResponse()\r\n\t\ttransactionResult.finStatus = FinancialStatus.CANCELLED\r\n\t\ttransactionResult.type = TransactionType.REFUND\r\n\t\ttransactionResult.currency = currency\r\n\t\ttransactionResult.totalAmount = BigInteger.ZERO\r\n\t\ttransactionResult.transactionOrigin = TransactionOrigin.CLOUD\r\n\t\ttransactionResult.originalEFTTransactionID = originalTransactionId\r\n\t\tsendTransactionResult(transactionResult)\r\n\t}\r\n\r\n\tinternal fun sendTransactionResult(transactionResult: TransactionResult) {\r\n\t\tTransactionResultHandler.transactionFinished(transactionResult)\r\n\t}\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavior and Flow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "executeDependantOperation(...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triggers the refund transaction using the provided amount, currency, and original transaction ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "finishWithoutCardOperation()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Sends a transaction result with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AUTHORISED"
            }), " status but ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "without processing a refund"
            }), " — used when the refund was completed outside the SDK."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cancel()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Sends a transaction result with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CANCELLED"
            }), " status — used when the integrator cancels the operation."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sequence Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(35193)/* ["default"] */ .A) + "",
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "Cloud Tokenized Refund Sequence Diagram",
          src: (__webpack_require__(11958)/* ["default"] */ .A) + "",
          width: "2068",
          height: "1592"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Refund Tokenized Operation"
      }), " is a controlled cloud-based refund workflow that tokenizes the card and delegates control to the integrator for determining the refund outcome."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Triggered via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CloudFinancialRequest"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operation = Refund"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tokenize = true"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ResumeDependantOperationExecutor"
        }), " interface to define the refund behavior."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides flexibility to execute, authorize without refund, or cancel the transaction."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tip:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "finishWithoutCardOperation()"
        }), " when refund logic is handled outside the SDK and you only need to notify the POS system."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloud-tokenized-refund-reversal",
      children: "Cloud Tokenized Refund Reversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Refund Reversal Tokenized Operation"
      }), " is a cloud-triggered operation that securely tokenizes a card and performs a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Refund Reversal"
      }), ". This operation is initiated via a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudFinancialRequest"
      }), " object with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "operation = Operations.RefundReversal"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "tokenize = true"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After receiving the request, the SDK emits the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.DependantReversalReceived"
        })
      }), " event. The integrator must respond by using the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ResumeDependantOperationExecutor"
        })
      }), " interface to control how the operation proceeds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CloudFinancialRequest Configuration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Fields"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Operations.RefundReversal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indicates the refund reversal operation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tokenize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables card tokenization."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Other standard fields such as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "amount"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "currency"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "originalTransactionId"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionReference"
      }), " should also be included."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Event: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.DependantReversalReceived"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This event is emitted after receiving a valid cloud request for a refund reversal. The integrator must implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ResumeDependantOperationExecutor"
      }), " to define the next action."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interface: ResumeDependantOperationExecutor"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "interface ResumeDependantOperationExecutor {\r\n\r\n\tfun executeDependantOperation(\r\n\t\tamount: BigInteger,\r\n\t\tcurrency: Currency,\r\n\t\toriginalTransactionId: String\r\n\t)\r\n\r\n\tfun finishWithoutCardOperation()\r\n\r\n\tfun cancel()\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation: ResumeDependantRefundReversalExecutorImpl"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "class ResumeDependantRefundReversalExecutorImpl(\r\n\tprivate val currency: Currency,\r\n\tprivate val originalTransactionId: String,\r\n\tprivate val options: InternalRefundReversalOptions,\r\n\tprivate val delegate: Hapi\r\n): ResumeDependantOperationExecutor {\r\n\r\n\toverride fun executeDependantOperation(amount: BigInteger, currency: Currency, originalTransactionId: String) {\r\n\t\tval refundOperationDto = OperationDto.RefundReversal(\r\n\t\t\tamount,\r\n\t\t\tcurrency,\r\n\t\t\toriginalTransactionId,\r\n\t\t\toptions\r\n\t\t)\r\n\t\tval result = delegate.tokenizedOperation(currency, refundOperationDto, options).operationStarted\r\n\t\tif (!result) {\r\n\t\t\tval transactionResult = InstancesManager.transactionData.generateTransactionResultWithoutResponse()\r\n\t\t\ttransactionResult.finStatus = FinancialStatus.FAILED\r\n\t\t\tsendTransactionResult(transactionResult)\r\n\t\t}\r\n\t}\r\n\r\n\toverride fun finishWithoutCardOperation() {\r\n\t\tval transactionResult = InstancesManager.transactionData.generateTransactionResultWithoutResponse()\r\n\t\ttransactionResult.finStatus = FinancialStatus.AUTHORISED\r\n\t\ttransactionResult.type = TransactionType.VOID_REFUND\r\n\t\ttransactionResult.currency = currency\r\n\t\ttransactionResult.totalAmount = BigInteger.ZERO\r\n\t\ttransactionResult.transactionOrigin = TransactionOrigin.CLOUD\r\n\t\ttransactionResult.transactionID = UUID.randomUUID().toString()\r\n\t\ttransactionResult.eFTTransactionID = transactionResult.transactionID\r\n\t\ttransactionResult.originalEFTTransactionID = originalTransactionId\r\n\r\n\t\tInstancesManager.cardReader.isCardPresent = true\r\n\t\tsendTransactionResult(transactionResult)\r\n\t}\r\n\r\n\toverride fun cancel() {\r\n\t\tval transactionResult = InstancesManager.transactionData.generateTransactionResultWithoutResponse()\r\n\t\ttransactionResult.finStatus = FinancialStatus.CANCELLED\r\n\t\ttransactionResult.type = TransactionType.VOID_REFUND\r\n\t\ttransactionResult.currency = Currency.Unknown\r\n\t\ttransactionResult.totalAmount = BigInteger.ZERO\r\n\t\ttransactionResult.transactionOrigin = TransactionOrigin.CLOUD\r\n\t\ttransactionResult.originalEFTTransactionID = originalTransactionId\r\n\t\tsendTransactionResult(transactionResult)\r\n\t}\r\n\r\n\tinternal fun sendTransactionResult(transactionResult: TransactionResult) {\r\n\t\tTransactionResultHandler.transactionFinished(transactionResult)\r\n\t}\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavior and Flow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "executeDependantOperation(...)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Launches the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RefundReversal"
            }), " operation after tokenization."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "finishWithoutCardOperation()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Sends an ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AUTHORISED"
            }), " transaction result without moving funds — used when reversal is handled externally."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cancel()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Sends a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CANCELLED"
            }), " result indicating the integrator aborted the operation."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sequence Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(3716)/* ["default"] */ .A) + "",
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "Cloud Tokenized Refund Reversal Sequence Diagram",
          src: (__webpack_require__(61077)/* ["default"] */ .A) + "",
          width: "2068",
          height: "1592"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Refund Reversal Tokenized Operation"
      }), " is a cloud-driven flow designed to securely tokenize a card and optionally reverse a refund. It follows the same interaction pattern as other dependant cloud operations, with three possible paths controlled by the integrator:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute the refund reversal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Acknowledge the transaction without refund movement."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cancel the operation entirely."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tip:"
        }), " Use this operation in cloud or headless setups where refunds need to be securely reversed with authorization logging."]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 35193
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/cloud_tokenized_Refund-b3508452b56d3bb18fdd21d3924186ed.png");

/***/ },

/***/ 82206
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/cloud_tokenized_Sale-c6593ad6d9aaa852da56409f3489e547.png");

/***/ },

/***/ 87352
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/cloud_tokenized_SaleReversal-48d5006c05ace5d84adf4a08e468ba30.png");

/***/ },

/***/ 3716
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/cloud_tokenized_refund_Reversal-a8f1e7e9cb1f3430066adc53fc4ee59b.png");

/***/ },

/***/ 24989
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/standalone_Tokenized_Refund_and_reversals-fd7a4482cb81f3ce75f93b60dc72a294.png");

/***/ },

/***/ 93152
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/standalone_tokenized_SALE-658f0d279fc673c875b35735dcd9a9ed.png");

/***/ },

/***/ 11958
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cloud_tokenized_Refund-b3508452b56d3bb18fdd21d3924186ed.png");

/***/ },

/***/ 63073
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cloud_tokenized_Sale-c6593ad6d9aaa852da56409f3489e547.png");

/***/ },

/***/ 20459
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cloud_tokenized_SaleReversal-48d5006c05ace5d84adf4a08e468ba30.png");

/***/ },

/***/ 61077
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cloud_tokenized_refund_Reversal-a8f1e7e9cb1f3430066adc53fc4ee59b.png");

/***/ },

/***/ 85576
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/standalone_Tokenized_Refund_and_reversals-fd7a4482cb81f3ce75f93b60dc72a294.png");

/***/ },

/***/ 95725
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/standalone_tokenized_SALE-658f0d279fc673c875b35735dcd9a9ed.png");

/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);