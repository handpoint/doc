"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[76994],{

/***/ 74804
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_android_versioned_docs_version_android_sdk_7_0_1_androidtransactions_md_e1e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/android/site-android-versioned-docs-version-android-sdk-7-0-1-androidtransactions-md-e1e.json
const site_android_versioned_docs_version_android_sdk_7_0_1_androidtransactions_md_e1e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"androidtransactions","title":"Transaction Types","description":"Sale","source":"@site/android_versioned_docs/version-Android SDK 7.0.1/androidtransactions.md","sourceDirName":".","slug":"/androidtransactions","permalink":"/legacy/android/Android SDK 7.0.1/androidtransactions","draft":false,"unlisted":false,"tags":[],"version":"Android SDK 7.0.1","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"id":"androidtransactions"},"sidebar":"tutorialSidebar","previous":{"title":"Integration Guides","permalink":"/legacy/android/Android SDK 7.0.1/androidintegrationguide"},"next":{"title":"Terminal Management","permalink":"/legacy/android/Android SDK 7.0.1/androiddevicemanagement"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./android_versioned_docs/version-Android SDK 7.0.1/androidtransactions.md


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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
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
              href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#13",
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
              href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#4",
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
        children: "//Initiate a sale for 10.00 in Great British Pounds\r\napi.sale(new BigInteger(\"1000\"),Currency.GBP);\r\n\r\n//Initiate a sale for 10.00 in Great British Pounds with a tipping configuration\r\n//This feature is only available for PAX and Telpo devices\r\nTipConfiguration tipConfiguration = new TipConfiguration();\r\ntipConfiguration.setTipPercentages(Arrays.asList(5, 10, 15, 20));\r\ntipConfiguration.setTipAmount(new BigInteger(\"1000\"));\r\ntipConfiguration.setBaseAmount(new BigInteger(\"1000\"));\r\ntipConfiguration.setEnterAmountEnabled(true);\r\ntipConfiguration.setFooter(\"Thank you\");\r\ntipConfiguration.setSkipEnabled(true);\r\nSaleOptions options = new SaleOptions();\r\noptions.setTipConfiguration(tipConfiguration);\r\n\r\napi.sale(new BigInteger(\"1000\"),Currency.GBP, options);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#15",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "signatureRequired"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked if card verification requires signature."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#16",
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
                href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#operation-start-result",
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
              href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#13",
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
              href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#sale-and-tokenize-options",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "SaleAndTokenizeOptions"
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
        children: "//Initiate a sale for 10.00 in Great British Pounds\r\nSaleOptions options = new SaleAndTokenizeOptions();\r\napi.sale(new BigInteger(\"1000\"),Currency.GBP, options);\r\n\r\n//Initiate a sale for 10.00 in Great British Pounds with a tipping configuration\r\n//This feature is only available for PAX and Telpo devices\r\nTipConfiguration tipConfiguration = new TipConfiguration();\r\ntipConfiguration.setTipPercentages(Arrays.asList(5, 10, 15, 20));\r\ntipConfiguration.setTipAmount(new BigInteger(\"1000\"));\r\ntipConfiguration.setBaseAmount(new BigInteger(\"1000\"));\r\ntipConfiguration.setEnterAmountEnabled(true);\r\ntipConfiguration.setFooter(\"Thank you\");\r\ntipConfiguration.setSkipEnabled(true);\r\nSaleOptions options = new SaleOptions();\r\noptions.setTipConfiguration(tipConfiguration);\r\noptions.toSaleAndTokenizeOptions();\r\n\r\napi.sale(new BigInteger(\"1000\"),Currency.GBP,options);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#15",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "signatureRequired"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked if card verification requires signature."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#16",
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
                href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#operation-start-result",
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
              href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#13",
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
              href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#4",
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
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#15",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "signatureRequired"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked if card verification requires signature."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#16",
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
                href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#operation-start-result",
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
              href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#13",
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
              href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#4",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "SaleOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store all the customization options for a refund."
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
        children: "//Initiate a refund for 10.00 in Great British Pounds\r\napi.refund(new BigInteger(\"1000\"),Currency.GBP,\"00000000-0000-0000-0000-000000000000\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Events invoked**"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#15",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "signatureRequired"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked if card verification requires signature."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#16",
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
                href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#operation-start-result",
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
              href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#13",
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
              href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#4",
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
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#15",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "signatureRequired"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked if card verification requires signature."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#16",
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
                href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#operation-start-result",
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
              href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#13",
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
              href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#moto-options",
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
        children: "MoToOptions options = new MoToOptions();\r\noptions.setCustomerReference(\"MoTo Sale Example\");\r\n\r\napi.motoSale(new BigInteger(\"1000\"), Currency.EUR, options);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction,  it fetches statuses coming from the sdk (ex : 'processing')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#16",
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
                href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#operation-start-result",
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
              href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#13",
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
              href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#moto-options",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MoToOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store optional parameters for a MoTo refund."
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
        children: "MoToOptions options = new MoToOptions();\r\noptions.setCustomerReference(\"MoTo Refund Example\");\r\n\r\napi.motoRefund(new BigInteger(\"1000\"), Currency.EUR, \"00000000-0000-0000-0000-000000000000\",options);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events invoked"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction,  it fetches statuses coming from the sdk (ex : 'processing')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#16",
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
                href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#operation-start-result",
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
              href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#moto-options",
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
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction,  it fetches statuses coming from the sdk (ex : 'processing')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#16",
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
                href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#operation-start-result",
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
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#16",
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
                href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#operation-start-result",
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
        children: "Observable.fromCallable(new Callable() {\r\n\t@Override\r\n\tpublic FinancialStatus call() throws Exception {\r\n\t\treturn api.tipAdjustment(new BigDecimal(1000), \"2bc23910-c3b3-11e6-9e62-07b2a5f091ec\");\r\n\t}\r\n})\r\n.subscribeOn(Schedulers.io())\r\n.observeOn(AndroidSchedulers.mainThread())\r\n.subscribe(new Consumer() {\r\n\t@Override\r\n\tpublic void accept(@NonNull FinancialStatus status) throws Exception {\r\n\t\tif (status == FinancialStatus.AUTHORISED) {\r\n\t\t\t//SUCCESS\r\n\t\t} else if (status == FinancialStatus.DECLINED) {\r\n\t\t\t//DECLINED\r\n\t\t} else {\r\n\t\t\t//FAILED\r\n\t}\r\n});\n"
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
              href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#4",
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
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#16",
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
                href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#operation-start-result",
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
              href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#4",
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
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "currentTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.0.1/androideventlisteners#16",
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
                href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#operation-start-result",
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