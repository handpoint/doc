"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[42481],{

/***/ 162
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_android_versioned_docs_version_android_sdk_7_1005_1_androidobjects_md_4b8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/android/site-android-versioned-docs-version-android-sdk-7-1005-1-androidobjects-md-4b8.json
const site_android_versioned_docs_version_android_sdk_7_1005_1_androidobjects_md_4b8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"androidobjects","title":"Objects","description":"Transaction Result","source":"@site/android_versioned_docs/version-Android SDK 7.1005.1/androidobjects.md","sourceDirName":".","slug":"/androidobjects","permalink":"/legacy/android/Android SDK 7.1005.1/androidobjects","draft":false,"unlisted":false,"tags":[],"version":"Android SDK 7.1005.1","sidebarPosition":9,"frontMatter":{"sidebar_position":9,"id":"androidobjects"},"sidebar":"tutorialSidebar","previous":{"title":"Events Listeners","permalink":"/legacy/android/Android SDK 7.1005.1/androideventlisteners"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./android_versioned_docs/version-Android SDK 7.1005.1/androidobjects.md


const frontMatter = {
	sidebar_position: 9,
	id: 'androidobjects'
};
const contentTitle = 'Objects';

const assets = {

};



const toc = [{
  "value": "Transaction Result",
  "id": "25",
  "level": 2
}, {
  "value": "Acquirer",
  "id": "21",
  "level": 2
}, {
  "value": "Balance",
  "id": "balance",
  "level": 2
}, {
  "value": "Balance Sign",
  "id": "balance-sign",
  "level": 2
}, {
  "value": "Card Brands",
  "id": "cardBrands",
  "level": 2
}, {
  "value": "Card Entry Type",
  "id": "22",
  "level": 2
}, {
  "value": "Card Scheme Name",
  "id": "32",
  "level": 2
}, {
  "value": "Card Tokenization Data",
  "id": "card-tokenization-data",
  "level": 2
}, {
  "value": "Connection Method",
  "id": "20",
  "level": 2
}, {
  "value": "Connection Status",
  "id": "connection-status",
  "level": 2
}, {
  "value": "Currency",
  "id": "13",
  "level": 2
}, {
  "value": "Device",
  "id": "17",
  "level": 2
}, {
  "value": "Device Capabilities",
  "id": "24",
  "level": 2
}, {
  "value": "Device Parameter",
  "id": "device-parameter",
  "level": 2
}, {
  "value": "Device Status",
  "id": "33",
  "level": 2
}, {
  "value": "Financial Status",
  "id": "34",
  "level": 2
}, {
  "value": "Handpoint Credentials",
  "id": "43",
  "level": 2
}, {
  "value": "Handpoint API (Hapi) Factory",
  "id": "handpoint-api-hapi-factory",
  "level": 2
}, {
  "value": "Hapi Manager",
  "id": "hapi-manager",
  "level": 2
}, {
  "value": "Log Level",
  "id": "18",
  "level": 2
}, {
  "value": "Manufacturer",
  "id": "manufacturer",
  "level": 2
}, {
  "value": "MerchantAuth",
  "id": "37",
  "level": 2
}, {
  "value": "Merchant Auth Credential",
  "id": "40",
  "level": 2
}, {
  "value": "Merchant Auth Options",
  "id": "MerchantAuthOptions",
  "level": 2
}, {
  "value": "Metadata",
  "id": "metadata",
  "level": 2
}, {
  "value": "Money Remittance Options",
  "id": "money-remittance-options",
  "level": 2
}, {
  "value": "MoTo Channel",
  "id": "moto-channel",
  "level": 2
}, {
  "value": "MoTo Options",
  "id": "moto-options",
  "level": 2
}, {
  "value": "Operation DTO",
  "id": "operation-dto",
  "level": 2
}, {
  "value": "Operation Start Result",
  "id": "OperationStartResult",
  "level": 2
}, {
  "value": "Optional Transaction Parameters",
  "id": "optional-transaction-parameters",
  "level": 2
}, {
  "value": "Options",
  "id": "7",
  "level": 2
}, {
  "value": "Payment Scenario",
  "id": "35",
  "level": 2
}, {
  "value": "PAX A80 Keys",
  "id": "28",
  "level": 2
}, {
  "value": "Print Error",
  "id": "29",
  "level": 2
}, {
  "value": "Refund Options",
  "id": "6",
  "level": 2
}, {
  "value": "Report Configuration",
  "id": "19",
  "level": 2
}, {
  "value": "Sale Options",
  "id": "4",
  "level": 2
}, {
  "value": "Sale and Tokenize Options",
  "id": "sale-and-tokenize-options",
  "level": 2
}, {
  "value": "Settings",
  "id": "settings",
  "level": 2
}, {
  "value": "Signature Request",
  "id": "signature-request",
  "level": 2
}, {
  "value": "Status",
  "id": "45",
  "level": 2
}, {
  "value": "Status Info",
  "id": "status-info",
  "level": 2
}, {
  "value": "Supported Locales",
  "id": "23",
  "level": 2
}, {
  "value": "Tender Type",
  "id": "36",
  "level": 2
}, {
  "value": "Tip Configuration",
  "id": "39",
  "level": 2
}, {
  "value": "Transaction Type",
  "id": "31",
  "level": 2
}, {
  "value": "Type of Result",
  "id": "30",
  "level": 2
}, {
  "value": "Verification Method",
  "id": "38",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "objects",
        children: "Objects"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25",
      children: "Transaction Result"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "TransactionResult"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object holding information about the result of a transaction."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "signatureUrl"
        }), ": In case the signature can not be updated to the Handpoint servers and an URL is not generated, the terminal will send back the image binary in base64 format to your software. It is important to be able to support both the URL and the image binary format."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "customerReceipt"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "merchantReceipt"
        }), ": The receipts are usually received as URLs in the transaction result from the terminal. Please note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and an URL is not generated then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "aid"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application Identifier of the card (EMV tag 9F06)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "arc"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMV Authorisation Response Code (EMV tag 8A)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "authorisationCode"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acquirer response code."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "balance"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#balance",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Balance"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balance available on the card."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "budgetNumber"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used to split payments over a period of months."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardEntryType"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#22",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "CardEntryType"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method used by the terminal to read the card."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardLanguagePreference"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preferred language of the card (EMV tag 5F2D)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardSchemeName"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#32",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "CardSchemeName"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The brand of the card."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardToken"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token representing the PAN of the card."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "chipTransactionReport"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full report of the card EMV parameters."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#13",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The currency used for the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "customerReceipt"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A URL containing the customer receipt in HTML format. Note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "customerReference"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If a customerReference was provided as an optional parameter in the transaction request it is echoed unaltered in this field."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "deviceStatus"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#33",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "DeviceStatus"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status of the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dueAmount"
            }), "    ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In case of a partial approval for the transaction, this field contains the amount which remains to be paid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "efttimestamp"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Date"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time of the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "efttransactionID"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handpoint unique identifier for a transaction, this id is the one to be used for a transaction to be reversed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "errorMessage"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed reason for the transaction error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "expiryDateMMYY"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expiry date of the card used for the operation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "finStatus"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#34",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "FinancialStatus"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The financial status contains the outcome of the transaction. For example \"AUTHORISED\" or \"DECLINED\"."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "iad"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issuer Application Data (EMV tag 9F10)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "issuerResponseCode"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response code from the card issuer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "maskedCardNumber"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Masked card number of the card used for the operation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "merchantAddress"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merchant Address."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "merchantName"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merchant Name."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "merchantReceipt"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A URL containing the customer receipt in HTML format. Note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "metadata"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#metadata",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Metadata"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If metadata was provided as an optional parameter in the transaction request it is echoed unaltered in this field"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "mid"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merchant Identifier."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalEFTTransactionID"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In case the transaction type is a reversal, this field will contain the identifier of the original transaction being reversed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "paymentScenario"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#35",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "PaymentScenario"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indicates the card entry mode."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "recoveredTransaction"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This flag is set to true if the transaction result is sent through the transaction recovery logic (network or communication failure), false otherwise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "requestedAmount"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The requested amount is the transaction amount sent to the terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rrn"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval Reference Number, unique number assigned by the acquirer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "signatureUrl"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If a digital signature is required, this is the URL containing the image of the captured signature. In case the signature can not be updated to the Handpoint servers and an URL is not generated, the terminal will send back the image binary in base64 format to your software. It is important to be able to support both the URL and the image binary format."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "statusMessage"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The status of the transaction, for example \"Waiting for pin\"."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tenderType"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#36",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "TenderType"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction tender type (credit / debit)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tid"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminal Identifier."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tipAmount"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tip amount, if any, in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tipPercentage"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Double"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If tipping is enabled, this field will return the tip percentage added on top of the base amount."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "totalAmount"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The total amount is the amount the card was charged for. It is possible that the total amount is not the same as the requested amount since an additional fee can be added, with the customer's approval, via the tipping functionality."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "transactionID"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The transaction id is a terminal internal counter incremented for each transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tsi"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction Status Information (EMV tag 9B)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tvr"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction Verification Results (EMV tag 95)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "type"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#31",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "TransactionType"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The type of transaction initiated, for example \"SALE\"."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "unMaskedPan"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unmasked PAN, only received if the card is a non-payment card (loyalty)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "verificationMethod"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#38",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "VerificationMethod"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cardholder verification method, for example \"PIN\"."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "multiLanguageStatusMessages"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Map"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Map"
            }), " containing the status message in a human readable format for all the supported locales."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "multiLanguageErrorMessages"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Map"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Map"
            }), " containing the error message in a human readable format for all the supported locales."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardHolderName"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Name of the cardholder."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n  \"aid\": \"A0000000041010\",\r\n  \"arc\": \"0000\",\r\n  \"authorisationCode\": \"123456\",\r\n  \"balance\": null,\r\n  \"budgetNumber\": \"\",\r\n  \"cardEntryType\": \"UNDEFINED\",\r\n  \"cardLanguagePreference\": \"\",\r\n  \"cardSchemeName\": \"MasterCard\",\r\n  \"cardToken\": \"\",\r\n  \"chipTransactionReport\": \"\",\r\n  \"currency\": \"USD\",\r\n  \"customerReceipt\": \"https://s3.[...]/customerReceipt.html\",\r\n  \"customerReference\": \"\",\r\n  \"deviceStatus\": {\r\n      \"applicationName\": \"ClientApp\",\r\n      \"applicationVersion\": \"20.1.0\",\r\n      \"batteryCharging\": \"Not Charging\",\r\n      \"batteryStatus\": \"100\",\r\n      \"batterymV\": \"4126\",\r\n      \"bluetoothName\": \"PAXA920\",\r\n      \"externalPower\": \"USB\",\r\n      \"serialNumber\": \"0821032398\",\r\n      \"statusMessage\": \"Approved or completed successfully\"\r\n  },\r\n  \"dueAmount\": 0,\r\n  \"errorMessage\": \"\",\r\n  \"expiryDateMMYY\": \"0422\",\r\n  \"finStatus\": \"AUTHORISED\",\r\n  \"iad\": \"0210A000002A0000000000000000000000FF\",\r\n  \"issuerResponseCode\": \"00\",\r\n  \"maskedCardNumber\": \"************1456\",\r\n  \"merchantAddress\": \"Plaza Soledad Torres Acosta 1 28013 Madrid\",\r\n  \"merchantName\": \"Hago la cama\",\r\n  \"merchantReceipt\": \"https://s3.[...]/merchantReceipt.html\",\r\n  \"metadata\": {\r\n    \"metadata1\":\"data 1\",\r\n    \"metadata2\":\"data 2\",\r\n    \"metadata3\":\"data 3\",\r\n    \"metadata4\":\"data 4\",\r\n    \"metadata5\":\"data 5\",\r\n  },\r\n  \"mid\": \"\",\r\n  \"originalEFTTransactionID\": \"\",\r\n  \"paymentScenario\": \"CHIPCONTACTLESS\",\r\n  \"rrn\": \"\",\r\n  \"signatureUrl\": \"\",\r\n  \"statusMessage\": \"Approved or completed successfully\",\r\n  \"tenderType\": \"CREDIT\",\r\n  \"tid\": \"ACQUIRER_TID\",\r\n  \"tipAmount\": 0,\r\n  \"totalAmount\": 100,\r\n  \"transactionID\": \"01236fc0-8192-11eb-9aca-ad4b0e95f241\",\r\n  \"tsi\": \"0000\",\r\n  \"tvr\": \"0400008001\",\r\n  \"type\": \"SALE\",\r\n  \"unMaskedPan\": \"\",\r\n  \"verificationMethod\": \"UNDEFINED\",\r\n  \"efttimestamp\": 1615374961000,\r\n  \"efttransactionID\": \"01236fc0-8192-11eb-9aca-ad4b0e95f241\",\r\n  \"requestedAmount\": 100,\r\n  \"tipPercentage\": 0,\r\n  \"recoveredTransaction\": false,\r\n  \"multiLanguageStatusMessages\": [\r\n        { \"en_US\" : \"Approved or completed successfully\" },\r\n        { \"fr_FR\" : \"Transaction approuvée\" }\r\n  ],\r\n  \"multiLanguageErrorMessages\": [],\r\n  \"cardHolderName\": \"cardholder name\"\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21",
      children: "Acquirer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Acquirer"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing all the supported acquirers for merchant authentication."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "AMEX"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BORGUN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EVO"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OMNIPAY"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "POSTBRIDGE"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "INTERAC"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TSYS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "VANTIV"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SANDBOX"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public enum Acquirer {\tAMEX,\r\n\tBORGUN,\r\n\tEVO,\r\n\tOMNIPAY,\r\n\tPOSTBRIDGE,\r\n\tINTERAC,\r\n\tTSYS,\r\n\tVANTIV,\r\n\tSANDBOX\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "balance",
      children: "Balance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Balance"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Balance available on the card"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Integer"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The amount balance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Currency"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The balance currency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sign"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#balance-sign",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "BalanceSign"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Positive (C) or negative (D) balance. You can retrieve the balance sign using the methods isPositive() or isNegative()"
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
        children: "Balance balance = Balance.Companion.factory(\r\n    \"1000\", \r\n    Currency.EUR.getAlpha(), \r\n    BalanceSign.POSITIVE_SIGN.name()\r\n  )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "balance-sign",
      children: "Balance Sign"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "BalanceSign"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing the balance sign."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "POSITIVE_SIGN('C')"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NEGATIVE_SIGN('D')"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cardBrands",
      children: "Card Brands"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "CardBrands"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A string representing the supported card brands."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "VISA"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MASTERCARD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAESTRO"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AMEX"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DISCOVER"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DINERS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JCB"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "INTERAC"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OTHER"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22",
      children: "Card Entry Type"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "CardEntryType"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different card entry types."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "UNDEFINED"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MSR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ICC"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CNP"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32",
      children: "Card Scheme Name"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "CardSchemeName"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A string representing different card brands."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "MasterCard"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Visa"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Maestro"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "American Express"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Discover"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JCB"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Diners"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UnionPay"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Interac"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "card-tokenization-data",
      children: "Card Tokenization Data"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "CardTokenizationData"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object representing the tokenized card."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "token"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token representing the card number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "expiryDate"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expiration date of the card"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tenderType"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#36",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "TenderType"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ternder type of the card (credit/debit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "issuerCountryCode"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "CountryCode"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The country code of the issuer of the card ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://en.wikipedia.org/wiki/ISO_3166-1",
              children: "(ISO 3166-1)"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "20",
      children: "Connection Method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ConnectionMethod"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different connection methods with the payment terminal."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Currently ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BLUETOOTH"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ANDROID_PAYMENT"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "USB"
      }), " are the only supported types."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "BLUETOOTH"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ANDROID_PAYMENT"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "USB"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "//Currently BLUETOOTH, ANDROID_PAYMENT and USB are the only connection methods available.\r\npublic enum ConnectionMethod {\r\n  BLUETOOTH,\r\n  ANDROID_PAYMENT,\r\n  USB\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "connection-status",
      children: "Connection Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ConnectionStatus"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A list of connection statuses. Note: the events starting with Cloud[...] are exclusively for devices linked to merchants with CLOUD Api key (CLOUD mode enabled) and can be safely ignored for Android native integrations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Connected"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Connecting"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Disconnected"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Disconnecting"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NotConfigured"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Initializing"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudConnected"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudInitialized"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudAvailable"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudDisconnected"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CloudUnavailable"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13",
      children: "Currency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Currency"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum of currencies."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It contains the name of the currency, its ISO code, as well as information about how many decimals the currency uses."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "AED"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AFN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ALL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AMD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ANG"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AOA"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ARS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AUD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AWG"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AZN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BAM"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BBD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BDT"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BGN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BHD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BIF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BMD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BND"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BOB"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BOV"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BRL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BSD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BTN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BWP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BYR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BZD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CAD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CDF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CLP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CNY"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "COP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "COU"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CRC"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CUC"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CUP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CVE"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CZK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DJF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DKK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DOP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DZD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EEK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EGP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ERN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ETB"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EUR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FJD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FKP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GBP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GEL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GHS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GIP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GMD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GNF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GTQ"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GYD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HKD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HNL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HRK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HTG"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HUF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IDR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ILS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "INR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IQD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IRR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ISK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JMD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JOD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JPY"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KES"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KGS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KHR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KMF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KPW"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KRW"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KWD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KYD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KZT"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LAK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LBP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LKR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LRD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LSL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LTL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LVL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LYD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MDL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MKD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MMK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MNT"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MOP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MUR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MVR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MWK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MXN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MXV"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MYR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MZN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NAD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NGN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NIO"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NOK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NPR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NZD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OMR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PAB"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PEN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PGK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PHP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PKR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PLN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PYG"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "QAR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RON"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RSD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RUB"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RWF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SAR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SBD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SCR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SDG"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SEK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SGD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SHP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SLL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SOS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SRD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "STD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SYP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SZL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "THB"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TJS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TMT"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TND"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TOP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TRY"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TTD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TWD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TZS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UAH"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UGX"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "USD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UZS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "VEF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "VND"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "VUV"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WST"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "XAF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "XCD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "XOF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "XPF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "YER"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ZAR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ZMK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ZWL"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17",
      children: "Device"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Device"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object to store the information about the payment terminal in use."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constructor"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "Device(String name, String address, UsbDevice usbDevice, ConnectionMethod connectionMethod, String sharedSecret, int timeout);\n"
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
              children: "name"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A name to identify the device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "address"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The address of the device you wish to connect to. E.g.: \"08:00:69:02:01", ":FC", "\" for bluetooth or just an identifier if your application is running directly on a PAX or Telpo device (ConnectionMethod.ANDROID_PAYMENT)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "usbDevice"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "UsbDevice"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Represents a concrete attached USB device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "connectionMethod"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#20",
              children: "*ConnectionMethod *"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type of connection with the payment terminal. E.g: Bluetooth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sharedSecret"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replaces the default shared secret proviced in the initialization step."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "timeout"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "int"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of miliseconds until a connection is considered timed out. If not set, the default timeout is 15 seconds."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Id *"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A unique identifier for the payment terminal."
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
        children: "//Create and init a new Datecs Device\r\nDevice dev = new Device(\"CardReader7\", \"08:00:69:02:01:FC\", \"1\", ConnectionMethod.BLUETOOTH);\r\n\r\n//Create and init a new PAX/Telpo Device for a ANDROID_PAYMENT connection\r\nDevice dev = new Device(\"LocalPaxOrTelpo\", \"LocalHost\", \"null\", ConnectionMethod.ANDROID_PAYMENT);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24",
      children: "Device Capabilities"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "DeviceCapabilities"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object holding the capabilities of the payment terminal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "printer"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True if the terminal has printer, false otherwise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cloudApi"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True if the terminal is cloud-enabled, false otherwise"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device-parameter",
      children: "Device Parameter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "DeviceParameter"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum describing all the admin commands to send to a payment terminal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "BluetoothName"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BluetoothPass"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SystemTimeout"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ScreenTimeout"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SignatureTimeout"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33",
      children: "Device Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "DeviceStatus"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A class which holds the status of the payment terminal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "SerialNumber"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the serial number of the payment terminal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BatteryStatus"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the battery status of the payment terminal (in percentages)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BatterymV"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the battery voltage of the payment terminal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BatteryCharging"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the battery charging status of the payment terminal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ExternalPower"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the status of the payment terminal external power"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ApplicationName"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the application name of the payment terminal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ApplicationVersion"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the application version of the payment terminal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34",
      children: "Financial Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "FinancialStatus"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different statuses of a finalized transaction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "UNDEFINED"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AUTHORISED"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DECLINED"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PROCESSED"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FAILED"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CANCELLED"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PARTIAL_APPROVAL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IN_PROGRESS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "REFUNDED"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CAPTURED"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Description of the different financial statuses:"
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
              children: "UNDEFINED"
            }), " (NOT FOUND)  ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Any financial status other than the below mentioned financial statuses will be ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UNDEFINED"
            }), ". The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UNDEFINED"
            }), " (NOT FOUND) status can be returned as a response to the  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1005.1/androiddevicemanagement#getTransactionStatus",
              children: "get transaction status"
            }), " method. This status means that the transaction does not exist in the Handpoint gateway. If this status is returned within 90s of the start of a transaction, there could be a chance that the cardholder has not inserted, swiped or tapped his card yet on the terminal and the Handpoint gateway might soon receive the transaction. If the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UNDEFINED"
            }), " status is returned after 90s, it means that the transaction processed has not reached the Handpoint gateway and it will NOT be charged."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "AUTHORISED"
            }), " ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The transaction (Sale, Refund, etc.) has been authorised. Consider this value as \"successful\"."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DECLINED"
            }), " ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The transaction has been declined by the acquirer or issuer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PROCESSED"
            }), "  ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "printReceipt"
            }), " operation was successful."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "FAILED"
            }), "  ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Status generated due to a network error, a card which can not be read etc. As a general rule, errors are mapped to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FAILED"
            }), ". This means the operation was unsuccessful and the transaction has not been charged."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CANCELLED"
            }), "  ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The transaction has been cancelled. For example if the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stopCurrentTransaction"
            }), " operation has been used or the cancel button on the terminal has been pressed."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PARTIAL_APPROVAL"
            }), "  ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A partial approval is returned by the acquirer when funds have been partially authorized, for example if the cardholder does not have all the funds to cover the entire cost of the goods or services they are buying. The merchant can obtain the remainder of the purchase amount in another form of payment (cash, check or another card transaction for the remaining). ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PARTIAL_APPROVAL"
            }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "only"
            }), " applicable to the United States market."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IN_PROGRESS"
            }), " * ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN_PROGRESS"
            }), " status can be returned as a response to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1005.1/androiddevicemanagement#getTransactionStatus",
              children: "get transaction status"
            }), " method. The transaction is known by the gateway but the result is not available yet. Please check the status again after a few seconds."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "REFUNDED"
            }), " * ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "REFUNDED"
            }), " status can be returned as a response to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1005.1/androiddevicemanagement#getTransactionStatus",
              children: "get transaction status"
            }), " method. The original transaction (sale) has been refunded."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CAPTURED"
            }), " ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The pre-authorization has been captured and funds are being moved to the merchant account. The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CAPTURED"
            }), " financial status will only be returned in case a ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1005.1/androidtransactions#pre-auth-capture",
              children: "preAuthorizationCapture"
            }), " message was used to complete a pre-authorization. Regular Sales do NOT need to be captured and will not return a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CAPTURED"
            }), " financial status."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["* Financial statuses marked with an asterisk (*) can only be returned as a response to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1005.1/androiddevicemanagement#getTransactionStatus",
        children: "get transaction status"
      }), " method."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "43",
      children: "Handpoint Credentials"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "HandpointCredentials"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A class containing the credentials used to communicate with the payment terminal, essentially the shared secret (always required).\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sharedSecret"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            }), " the value of the Shared secret."]
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
        children: "{\r\n\tString sharedSecret = \"0102030405060708091011121314151617181920212223242526272829303132\";\r\n\tHandpointCredentials handpointCredentials = new HandpointCredentials(sharedSecret);\r\n\t//We've even set a default shared secret!\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "handpoint-api-hapi-factory",
      children: "Handpoint API (Hapi) Factory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "HapiFactory"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A factory to provide a unified entrypoint and simplify the instantiation of the Hapi object."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Static factory"
      }), "\r\ngetAsyncInterface( Events.Required requiredListener , Context context , HandpointCredentials handpointCredentials );"]
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
              children: "requiredListener"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1005.1/androideventlisteners#42",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Events.Required"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A listener object to report the required events."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "context"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Context"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Android context."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "handpointCredentials"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#43",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "HandpointCredentials"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object containing the actor's shared secret key."
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
        children: "//InitApi for Datecs devices or PAX/Telpo ConnectionMethod.ANDROID_PAYMENT\r\npublic void InitApi()\r\n{\r\n\tString sharedSecret = \"0102030405060708091011121314151617181920212223242526272829303132\";\r\n\tapi = HapiFactory.getAsyncInterface(this, new HandpointCredentials(sharedSecret));\r\n\t//The api is now initialized. Yay! we've even set a default shared secret\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hapi-manager",
      children: "Hapi Manager"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "HapiManager"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A static class containing information about the current status of the SDK"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DefaultSharedSecret"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the default shared secret in use."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "LogLevel"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#18",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "LogLevel"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the current log level of the SDK and payment terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "inTransaction"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checks whether the SDK is in the middle of a transaction. True if the SDK is in a transaction, false otherwise."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "SdkVersion"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the current SDK version."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "isTransactionResultPending"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In the case of a communication failure between the payment terminal and the SDK a TransactionResult might have not been delivered. This function checks if there is a pending TransactionResult. This field is only updated when connecting to a payment terminal. If this function returns true the TransactionResult (which includes the receipt) can be fetched.getPendingTransactionResult();. This function serves the same functionality as the event pendingTransactionResult(Device device), so every time this event is invoked, HapiManager.IsTransactionResultPending() is true until the result is fetched."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Settings.AutomaticReconnection"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When this property is set to true, the SDK will automatically try to reconnect to the payment terminal after a disconnection. The SDK internally maintains a reconnection thread which keeps on trying to connect until it succeeds. The delay between reconnections is exponentially increased on every new attempt. The default value for this property is true"
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
        children: "//Check if the SDK is in transaction\r\nboolean inTransaction = HapiManager.inTransaction(someConnectedDevice);\r\n//Check the current logLevel\r\nLogLevel level = HapiManager.getLogLevel();\r\n\r\n//Disable automatic reconnection feature\r\nHapiManager.Settings.AutomaticReconnection = false;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18",
      children: "Log Level"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "LogLevel"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum describing the different levels of logging available."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "None"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Info"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Full"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Debug"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manufacturer",
      children: "Manufacturer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Manufacturer"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A string representing different payment terminal supported manufacturers."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "INVALID"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DATECS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PAX"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TELPO"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "37",
      children: "MerchantAuth"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "MerchantAuth"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object to store merchant authentication."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "Constructor\r\nMerchantAuth( );\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "Constructor\r\nMerchantAuth( Credential credential );\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "credential"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#40",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Credential"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If present, adds the given credential to the list."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "Constructor\r\nMerchantAuth( Credential credential );\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "credential"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#40",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Credential"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If present, the list of credentials."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "Add Credential\r\nadd( Credential credential );\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "credential"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#40",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Credential"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The credential to be added."
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
        children: "MerchantAuth auth = new MerchantAuth();\r\nCredential credential = new Credential();\r\n//Optionally\r\ncredential.setAcquirer(YOUR_ACQUIRER);\r\n//Optionally\r\ncredential.setMid(mid);\r\n//Optionally\r\ncredential.setTid(tid);\r\n//Add as many credentials as acquirers your merchant supports (for example OMNIPAY/AMEX). \r\nauth.add(credential);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "40",
      children: "Merchant Auth Credential"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Credential"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object to store credentials (Acquirer, Mid, Tid, MCC and ExternalId) for merchant authentication."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "acquirer"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#21",
              children: "*Acquirer *"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If present, it links this credential to the specified acquirer. Required if more than one credential is provided."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "mid"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For this transaction, overrides the default MID (merchant ID) saved in the terminal configuration."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tid"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For this transaction, overrides the default TID (terminal ID) saved in the terminal configuration."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "mcc"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merchant Category Code, overrides the default MCC saved in the terminal configuration."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ExternalId"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For this transaction, the External Id will be used to lookup the credential of the merchant in the Handpoint backend and process the transaction accordingly. The External id replaces the need to pass MID/TID/MCC as credentials"
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
        children: "// Credential using Acquirer, MID, TID and  MCC\r\nCredential credential1 = new Credential();\r\n//Optionally\r\ncredential1.setAcquirer(YOUR_ACQUIRER);\r\n//Optionally\r\ncredential1.setMid(mid);\r\n//Optionally\r\ncredential1.setTid(tid);\r\n//Optionally\r\ncredential1.setMcc(mcc);\r\n\r\n// Credential using ExternalId\r\nCredential credential2 = new Credential();\r\ncredential2.setExternalId(externalId);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "MerchantAuthOptions",
      children: "Merchant Auth Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "MerchantAuthOptions"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object to store merchant authentication options for regular operations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CustomerReference"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An arbitrary string to use as your own identifier for a transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MerchantAuth"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#37",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MerchantAuth"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object containing all the credentials used to optionally authenticate a merchant"
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
        children: "MerchantAuthOptions options = new MerchantAuthOptions();\r\n\r\n//If you use a customer reference\r\noptions.setCustomerReference(\"Your customer reference\");\r\n\r\n//If you need Multi MID / Custom merchant Authentication\r\nMerchantAuth auth = new MerchantAuth();\r\nCredential credential = new Credential();\r\n//Optionally\r\ncredential.setAcquirer(YOUR_ACQUIRER);\r\n//Optionally\r\ncredential.setMid(mid);\r\n//Optionally\r\ncredential.setTid(tid);\r\n//Add as many credentials as acquirers your merchant supports (for example OMNIPAY/AMEX). \r\nauth.add(credential);\r\noptions.setMerchantAuth(auth);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "metadata",
      children: "Metadata"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Metadata"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object to store metadata. This field can be used to pass custom data to the Handpoint gateway, it will be echoed back in the transaction result. This field will also be part of the transaction response if querying the Handpoint transaction reporting API."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "metadata1"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["An arbitrary string containing any information/data. Max length 250 characters ", (0,jsx_runtime.jsx)("br", {}), " Valid characters: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a-z A-Z 0-9 - ( ) @ : % _ \\ + . ~ # ? & / = { } \" ' ,"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "metadata2"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["An arbitrary string containing any information/data. Max length 250 characters ", (0,jsx_runtime.jsx)("br", {}), " Valid characters: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a-z A-Z 0-9 - ( ) @ : % _ \\ + . ~ # ? & / = { } \" ' ,"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "metadata3"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["An arbitrary string containing any information/data. Max length 250 characters ", (0,jsx_runtime.jsx)("br", {}), " Valid characters: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a-z A-Z 0-9 - ( ) @ : % _ \\ + . ~ # ? & / = { } \" ' ,"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "metadata4"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["An arbitrary string containing any information/data. Max length 250 characters ", (0,jsx_runtime.jsx)("br", {}), " Valid characters: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a-z A-Z 0-9 - ( ) @ : % _ \\ + . ~ # ? & / = { } \" ' ,"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "metadata5"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["An arbitrary string containing any information/data. Max length 250 characters ", (0,jsx_runtime.jsx)("br", {}), " Valid characters: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a-z A-Z 0-9 - ( ) @ : % _ \\ + . ~ # ? & / = { } \" ' ,"
            })]
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
        children: "// Option 1\r\nMetadata metadata = new Metadata(\"Data 1\", \"Data 2\", \"Data 3\", \"Data 4\", \"Data 5\");\r\n\r\n// Option 2\r\nMetadata metadata = new Metadata();\r\nmetadata.setMetadata1(\"Data 1\");\r\nmetadata.setMetadata2(\"Data 2\");\r\nmetadata.setMetadata3(\"Data 3\");\r\nmetadata.setMetadata4(\"Data 4\");\r\nmetadata.setMetadata5(\"Data 5\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "money-remittance-options",
      children: "Money Remittance Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "MoneyRemittanceOptions"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object representing options for Mastercard money remittance transactions. The recipient's first and last name and the recipient's country code are mandatory for Mastercard transactions processed by merchants with category codes 4829 and 6540. VISA transactions do not require money remittance options to be sent."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fullName"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "first and last name of the recipient of the funds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "countryCode"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "CountryCode"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Country code of the recipient of the funds ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3",
              children: "(ISO 3166-1 alpha-3)"
            })]
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
        children: "MoneyRemittanceOptions moneyRemittanceOptions = new MoneyRemittanceOptions(\"John Doe\", CountryCode.USA);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "moto-channel",
      children: "MoTo Channel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "MoToChannel"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A enum representing the channel used for the card not present transaction (MO = Mail Order / TO = Telephone Order) ."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "MO"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TO"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "moto-options",
      children: "MoTo Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "MoToOptions"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object to store optional parameters for card not present (MoTo) transactions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CustomerReference"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An arbitrary string to use as your own identifier for a transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Channel"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#moto-channel",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MoToChannel"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MO for Mail order - TO for Telephone order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Tokenize"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flag to activate tokenization of the operation, if this flag is set, a token representing the PAN of the card will be sent back by the Handpoint sytems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MoneyRemittanceOptions"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1005.1/androidobjects#money-remittance-options",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MoneyRemittanceOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object representing options for Mastercard money remittance transactions."
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
        children: "MoToOptions options = new MoToOptions();\r\noptions.setCustomerReference(\"Trx3245\");\r\noptions.setTokenize(true);\r\noptions.setTokenize(false);\r\noptions.setChannel(MoToChannel.MO);\r\noptions.setChannel(MoToChannel.TO);\r\n\r\n//Adding Money Remitance options\r\nMoneyRemittanceOptions moneyRemittanceOptions = new MoneyRemittanceOptions(\"John Doe\", CountryCode.USA);\r\nMoToOptions moToOptions = new MoToOptions(moneyRemittanceOptions);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "operation-dto",
      children: "Operation DTO"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "OperationDto"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Object indicating which financial transaction type needs to be performed after tokenization of the card during a Tokenize and Modify operation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sale"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1005.1/androidtransactions#2",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Sale"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A sale sends a payment request to the payment terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "refund"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1005.1/androidtransactions#5",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Refund"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A refund operation moves funds from the merchant account to the cardholder´s credit card."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "saleReversal"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1005.1/androidtransactions#4",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Sale Reversal"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A sale reversal, also called sale VOID allows the user to reverse a previous sale operation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "refundReversal"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1005.1/androidtransactions#6",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Refund Reversal"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A refund reversal, also called refund VOID allows the merchant to reverse a previous refund operation."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "OperationStartResult",
      children: "Operation Start Result"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "OperationStartResult"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Object containing information about the financial operation being performed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operationStarted"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "boolean"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), " if the operation has started. false otherwise"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must"
            }), " be saved on your end in case you do not get back the transaction result object at the end of the transaction. The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction. A linked refund or a reversal will ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not"
            }), " return a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " because the transaction reference for those types of transactions is the same as the one received for the original financial operation."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "errorMessage"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed reason for the transaction error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optional-transaction-parameters",
      children: "Optional Transaction Parameters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "OptionalParameters"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A class containing optional transaction parameters supported by the payment terminal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Budget"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Budget is only available for sale transactions."
            }), "  A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            }), " representing the key for a budget number.A budget number can be used to split up an amout over a period of months. The value has to be a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            }), " of 2 digits representing the number of months to split the transaction to."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CustomerReference"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CustomerReference is available for all transactions."
            }), " A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            }), " representing the key for a customer reference.A customer reference can be used for an internal marking system. The value is sent as a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            }), " of a maximum 25 characters and received back when the transaction has been processed."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7",
      children: "Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "options"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object to store customer reference options for regular operations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CustomerReference"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An arbitrary string to use as your own identifier for a transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Metadata"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#metadata",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Metadata"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object used to store metadata, this data will be echoed in the transaction result. ", (0,jsx_runtime.jsx)("br", {}), " Valid characters: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a-z A-Z 0-9 - ( ) @ : % _ \\ + . ~ # ? & / = { } \" ' ,"
            })]
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
        children: "Options options = new Options();\r\n\r\n//If you use a customer reference\r\noptions.setCustomerReference(\"Your customer reference\");\r\n\r\n// Metadata\r\nMetadata metadata = new Metadata(\"Data 1\", \"Data 2\", \"Data 3\", \"Data 4\", \"Data 5\");\r\noptions.setMetadata(metadata);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "35",
      children: "Payment Scenario"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentScenario"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different types of scenario."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "UNKNOWN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAGSTRIPE"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAGSTRIPECONTACTLESS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHIP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHIPCONTACTLESS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHIPFAILMAGSTRIPE"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MOTO"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "28",
      children: "PAX A80 Keys"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "PaxA80Keys"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "String"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A string representing the PAX A80 physical keyboard keys."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "0"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "3"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "4"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "5"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "6"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "7"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "8"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "9"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GREEN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ORANGE"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RED"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNC"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "options"
      }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
        href: "#4",
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "SaleOptions"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "29",
      children: "Print Error"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "PrintError"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different errors that can come from print action."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Unexpected"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InvalidArgument"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CantConnectToPrinter"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NotSupported"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NoPermission"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PrinterDisabled"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NotWhitelisted"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Busy"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OutOfPaper"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DataPacketInvalid"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PrinterHasProblems"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PrinterOverheating"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PrintingUnfinished"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FontNotPresent"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FontFormatError"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TooLong"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BatteryTooLow"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PaperCutterError"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PaperCutterJam"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CoverOpen"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UnsupportedEncoding"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6",
      children: "Refund Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "RefundOptions"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object to store all the customization options for a refund."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CustomerReference"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An arbitrary string to use as your own identifier for a transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MerchantAuth"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#37",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MerchantAuth"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object containing all the credentials used to optionally authenticate a merchant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PinBypass"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bypasses PIN entry when the shopper says they don't know the PIN for the card and the merchant either knows they are the legitimate cardholder or want to give them the benefit of the doubt. PIN Bypass should be set to True if you want to enable pin bypass for a transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "SignatureBypass"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether the terminal prompts for a signature, depends on how you configure this. The major card schemes (American Express, Diners, Discover, JCB, Mastercard, Visa, UnionPay) no longer require a signature; they regard it as optional for card-present transactions. This means you can speed up your checkout by skipping the signature prompt. But if your business requires it, you can still let the terminal prompt for a signature. The shopper then provides their signature on the touch screen of the terminal or on the printed transaction receipt. This depends on how you configure this setting. It is your responsibility to verify the signature of the shopper with the signature on the card or another form of identification. Signature Bypass should be set to True if you want to disable signature for this transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CheckDuplicates"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used to disable the duplicate payment check functionality. When a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the second charge. This menu is pushed by the Handpoint SDK and will automatically be displayed on top of your own UI when required. The Handpoint SDK will only prompt the duplicate payment check menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe. The duplicate payment check feature is enabled by default but can be disabled by passing a false value."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Metadata"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#metadata",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Metadata"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object used to store metadata, this data will be echoed in the transaction result. ", (0,jsx_runtime.jsx)("br", {}), " Valid characters: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a-z A-Z 0-9 - ( ) @ : % _ \\ + . ~ # ? & / = { } \" ' ,"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MoneyRemittanceOptions"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1005.1/androidobjects#money-remittance-options",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MoneyRemittanceOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object representing options for Mastercard money remittance transactions."
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
        children: "RefundOptions options = new RefundOptions();\r\n\r\n//If you use a customer reference\r\noptions.setCustomerReference(\"Your customer reference\");\r\n\r\n//If you need Multi MID / Custom merchant Authentication\r\nMerchantAuth auth = new MerchantAuth();\r\nCredential credential = new Credential();\r\n//Optionally\r\ncredential.setAcquirer(YOUR_ACQUIRER);\r\n//Optionally\r\ncredential.setMid(mid);\r\n//Optionally\r\ncredential.setTid(tid);\r\n//Add as many credentials as acquirers your merchant supports (for example OMNIPAY/AMEX). \r\nauth.add(credential);\r\noptions.setMerchantAuth(auth);\r\n\r\n//If you need to enable pin bypass\r\noptions.setPinBypass(true);\r\n\r\n//If you need to disable the duplicate payment check service\r\noptions.setCheckDuplicates(false);\r\n\r\n// Metadata\r\nMetadata metadata = new Metadata(\"Data 1\", \"Data 2\", \"Data 3\", \"Data 4\", \"Data 5\");\r\noptions.setMetadata(metadata);\r\n\r\n//Adding Money Remitance options\r\nMoneyRemittanceOptions moneyRemittanceOptions = new MoneyRemittanceOptions(\"John Doe\", CountryCode.USA);\r\nRefundOptions saleOptions = new RefundOptions(true, moneyRemittanceOptions);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19",
      children: "Report Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ReportConfiguration"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object to store all the configuration for a transactions report."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#13",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The currency to filter the transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "startDate"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The start date in format 'YYYYMMDDHHmmss'."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "endDate"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The end date in format 'YYYYMMDDHHmmss'."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "timeZone"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The time zone in format '+00:00'."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "terminalSerialNumber"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "List"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The serial number of the terminal to fetch the transactions from (if terminalSerialNumber is empty or null, the report will show all the transactions for this merchant)."
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
        children: "ReportConfiguration configuration = new ReportConfiguration(\"'USD'\", \"'20210430000000'\", \"'20210430235959'\", \"null\");\r\n\r\nIf you want to add terminal serial numbers: List terminalSerialNumber = new ArrayList<>();\r\nterminalSerialNumber.add(\"0123456789\");\r\nterminalSerialNumber.add(\"9876543210\");\r\n ... ;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4",
      children: "Sale Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "SaleOptions"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object to store all the customization options for a sale."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BudgetNumber"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The budget number can be used to split payments over a period of months."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CustomerReference"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An arbitrary string to use as your own identifier for a transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MerchantAuth"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#37",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MerchantAuth"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object containing all the credentials used to optionally authenticate a merchant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PinBypass"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bypasses PIN entry when the shopper says they don't know the PIN for the card and the merchant either knows they are the legitimate cardholder or want to give them the benefit of the doubt. PIN Bypass should be set to True if you want to enable pin bypass for a transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "SignatureBypass"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether the terminal prompts for a signature, depends on how you configure this. The major card schemes (American Express, Diners, Discover, JCB, Mastercard, Visa, UnionPay) no longer require a signature; they regard it as optional for card-present transactions. This means you can speed up your checkout by skipping the signature prompt. But if your business requires it, you can still let the terminal prompt for a signature. The shopper then provides their signature on the touch screen of the terminal or on the printed transaction receipt. This depends on how you configure this setting. It is your responsibility to verify the signature of the shopper with the signature on the card or another form of identification. Signature Bypass should be set to True if you want to disable signature for this transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "TipConfiguration"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#39",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "TipConfiguration"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object containing the tip configuration for this transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CheckDuplicates"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used to disable the duplicate payment check functionality. When a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the second charge. This menu is pushed by the Handpoint SDK and will automatically be displayed on top of your own UI when required. The Handpoint SDK will only prompt the duplicate payment check menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe. The duplicate payment check feature is enabled by default but can be disabled by passing a false value."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Metadata"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#metadata",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Metadata"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object used to store metadata, this data will be echoed in the transaction result. ", (0,jsx_runtime.jsx)("br", {}), " Valid characters: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a-z A-Z 0-9 - ( ) @ : % _ \\ + . ~ # ? & / = { } \" ' ,"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MoneyRemittanceOptions"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1005.1/androidobjects#money-remittance-options",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MoneyRemittanceOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object representing options for Mastercard money remittance transactions."
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
        children: "SaleOptions options = new SaleOptions();\r\n\r\n//If you use a customer reference\r\noptions.setCustomerReference(\"Your customer reference\");\r\n\r\n//If you need Multi MID / Custom merchant Authentication\r\nMerchantAuth auth = new MerchantAuth();\r\nCredential credential = new Credential();\r\n//Optionally\r\ncredential.setAcquirer(YOUR_ACQUIRER);\r\n//Optionally\r\ncredential.setMid(mid);\r\n//Optionally\r\ncredential.setTid(tid);\r\n//Add as many credentials as acquirers your merchant supports (for example OMNIPAY/AMEX). \r\nauth.add(credential);\r\noptions.setMerchantAuth(auth);\r\n\r\n//If you need to enable pin bypass\r\noptions.setPinBypass(true);\r\n\r\n//If you need to disable the duplicate payment check service\r\noptions.setCheckDuplicates(false);\r\n\r\n//If you want to specify the budget period\r\n//Only available for SureSwipe\r\noptions.setBudgetNumber(YOUR_BUDGET_NUMBER);\r\n\r\n//If you want to specify tip options\r\n//Only available for PAX and Telpo terminals.\r\nTipConfiguration config = new TipConfiguration();\r\n//Optionally\r\nconfig.setHeaderName(HEADER);\r\n//Optionally\r\nconfig.setFooter(FOOTER);\r\n//Optionally\r\nconfig.setEnterAmountEnabled(true);\r\n//Optionally\r\nconfig.setSkipEnabled(true);\r\nconfig.setTipPercentages(percentages);\r\noptions.setTipConfiguration(config);\r\n\r\n//Alternatively, you can set the tip amount directly\r\noptions.setTipConfiguration(new TipConfiguration(AMOUNT));\r\n\r\n// Metadata\r\nMetadata metadata = new Metadata(\"Data 1\", \"Data 2\", \"Data 3\", \"Data 4\", \"Data 5\");\r\noptions.setMetadata(metadata);\r\n\r\n//Adding Money Remitance options\r\nMoneyRemittanceOptions moneyRemittanceOptions = new MoneyRemittanceOptions(\"John Doe\", CountryCode.USA);\r\nSaleOptions saleOptions = new SaleOptions(true,moneyRemittanceOptions);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sale-and-tokenize-options",
      children: "Sale and Tokenize Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "SaleAndTokenizeOptions"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object to store all the customization options for a sale and tokenize options."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BudgetNumber"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The budget number can be used to split payments over a period of months."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CustomerReference"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An arbitrary string to use as your own identifier for a transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MerchantAuth"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#37",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MerchantAuth"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object containing all the credentials used to optionally authenticate a merchant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PinBypass"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bypasses PIN entry when the shopper says they don't know the PIN for the card and the merchant either knows they are the legitimate cardholder or want to give them the benefit of the doubt. PIN Bypass should be set to True if you want to enable pin bypass for a transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "SignatureBypass"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether the terminal prompts for a signature, depends on how you configure this. The major card schemes (American Express, Diners, Discover, JCB, Mastercard, Visa, UnionPay) no longer require a signature; they regard it as optional for card-present transactions. This means you can speed up your checkout by skipping the signature prompt. But if your business requires it, you can still let the terminal prompt for a signature. The shopper then provides their signature on the touch screen of the terminal or on the printed transaction receipt. This depends on how you configure this setting. It is your responsibility to verify the signature of the shopper with the signature on the card or another form of identification. Signature Bypass should be set to True if you want to disable signature for this transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "TipConfiguration"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#39",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "TipConfiguration"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object containing the tip configuration for this transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CheckDuplicates"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used to disable the duplicate payment check functionality. When a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the second charge. This menu is pushed by the Handpoint SDK and will automatically be displayed on top of your own UI when required. The Handpoint SDK will only prompt the duplicate payment check menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe. The duplicate payment check feature is enabled by default but can be disabled by passing a false value."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MoneyRemittanceOptions"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1005.1/androidobjects#money-remittance-options",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MoneyRemittanceOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object representing options for Mastercard money remittance transactions."
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
        children: "SaleAndTokenizeOptions options = new SaleAndTokenizeOptions();\r\n\r\n//If you use a customer reference\r\noptions.setCustomerReference(\"Your customer reference\");\r\n\r\n//If you need Multi MID / Custom merchant Authentication\r\nMerchantAuth auth = new MerchantAuth();\r\nCredential credential = new Credential();\r\n//Optionally\r\ncredential.setAcquirer(YOUR_ACQUIRER);\r\n//Optionally\r\ncredential.setMid(mid);\r\n//Optionally\r\ncredential.setTid(tid);\r\n//Add as many credentials as acquirers your merchant supports (for example OMNIPAY/AMEX). \r\nauth.add(credential);\r\noptions.setMerchantAuth(auth);\r\n\r\n//If you need to enable pin bypass\r\noptions.setPinBypass(true);\r\n\r\n//If you need to disable the duplicate payment check service\r\noptions.setCheckDuplicates(false);\r\n\r\n//If you want to specify the budget period\r\n//Only available for SureSwipe\r\noptions.setBudgetNumber(YOUR_BUDGET_NUMBER);\r\n\r\n//If you want to specify tip options\r\n//Only available for PAX and Telpo terminals.\r\nTipConfiguration config = new TipConfiguration();\r\n//Optionally\r\nconfig.setHeaderName(HEADER);\r\n//Optionally\r\nconfig.setFooter(FOOTER);\r\n//Optionally\r\nconfig.setEnterAmountEnabled(true);\r\n//Optionally\r\nconfig.setSkipEnabled(true);\r\nconfig.setTipPercentages(percentages);\r\noptions.setTipConfiguration(config);\r\n\r\n//Alternatively, you can set the tip amount directly\r\noptions.setTipConfiguration(new TipConfiguration(AMOUNT));\r\n\r\n//Adding Money Remitance options\r\nMoneyRemittanceOptions moneyRemittanceOptions = new MoneyRemittanceOptions(\"John Doe\", CountryCode.USA);\r\nSaleAndTokenizeOptions saleAndTokenizeOptions= new SaleAndTokenizeOptions(moneyRemittanceOptions);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settings",
      children: "Settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Settings"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An Object holding the SDK initialization settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "automaticReconnection"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "boolean"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["When this property is set to true, the SDK will automatically try to reconnect to the terminal after disconnection. The SDK maintains internally a reconnection thread which keeps on trying to connect until it succeeds. The delay between reconnections is exponentially increased on every new attempt. The default value for this property is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "autoRecoverTransactionResult"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "boolean"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The default value for this property is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sendToDeviceMaxAttempts"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Integer"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Number of retry attemps when there is an error communicating with the card reader. The default value for this property is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "timeBetweenAttempts"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Integer"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Time in milliseconds between attempts. The default value for this property is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "5000"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "showSDKUIComponents"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "boolean"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The default value for this property is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "getReceiptsAsURLs"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "boolean"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The default value for this property is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "signature-request",
      children: "Signature Request"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "SignatureRequest"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A class containing information about a signature verification."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "timeout"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "int"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " the value of the timeout in seconds."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MerchantReceipt"
            }), " ", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            }), " the merchant receipt as html. Note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45",
      children: "Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "status"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum containing information about the status of a transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Undefined"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Success"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InvalidData"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProcessingError"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CommandNotAllowed"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NotInitialised"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ConnectTimeout"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ConnectError"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SendingError"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReceivingError"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NoDataAvailable"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TransactionNotAllowed"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UnsupportedCurrency"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NoHostAvailable"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CardReaderError"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CardReadingFailed"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InvalidCard"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InputTimeout"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserCancelled"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InvalidSignature"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WaitingForCard"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CardInserted"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationSelection"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationConfirmation"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AmountValidation"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PinInput"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ManualCardInput"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WaitingForCardRemoval"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TipInput"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SharedSecretInvalid"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SharedSecretAuth"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WaitingSignature"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WaitingHostConnect"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WaitingHostSend"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WaitingHostReceive"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WaitingHostDisconnect"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PinInputCompleted"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PosCancelled"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RequestInvalid"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CardCancelled"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CardBlocked"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RequestAuthTimeout"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RequestPaymentTimeout"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ResponseAuthTimeout"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ResponsePaymentTimeout"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IccCardSwiped"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RemoveCard"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ScannerIsNotSupported"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ScannerEvent"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BatteryTooLow"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AccountTypeSelection"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BtIsNotSupported"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentCodeSelection"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PartialApproval"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AmountDueValidation"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InvalidUrl"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WaitingCustomerReceipt"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PrintingMerchantReceipt"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PrintingCustomerReceipt"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UpdateStarted"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UpdateFinished"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UpdateFailed"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UpdateProgress"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WaitingHostPostSend"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WaitingHostPostReceive"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Rebooting"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PrinterOutOfPaper"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ErrorConnectingToPrinter"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CardTapped"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReceiptPrintSuccess"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InvalidPinLength"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OfflinePinAttempt"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OfflinePinLastAttempt"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProcessingSignature"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CardRemoved"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TipEntered"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CardLanguagePreference"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AutomaticPrintingStarted"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CancelOperationNotAllowed"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UpdateSoftwareStarted"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UpdateSoftwareFinished"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UpdateSoftwareFailed"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UpdateSoftwareProgress"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InstallSoftwareStarted"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InstallSoftwareFinished"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InstallSoftwareFailed"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InstallSoftwareProgress"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UpdateConfigStarted"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UpdateConfigFinished"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UpdateConfigFailed"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UpdateConfigProgress"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InitialisationComplete"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "status-info",
      children: "Status Info"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "statusInfo"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A class containing information about the status of the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "isCancelAllowed"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "boolean"
            }), " letting the integrator know if the terminal will accept a stop transaction request."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#45",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Status"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Status"
            }), " enum representing the status of the transaction."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardLanguage"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#23",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "SupportedLocales"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card language preference in all supported locales."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "multiLanguageMessages"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Map"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "map"
            }), " containing the status message in a human readable format in all the supported locales."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "message"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            }), " containing the status message of the transaction."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "deviceStatus"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#33",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "DeviceStatus"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DeviceStatus"
            }), " object containing information about the payment terminal."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23",
      children: "Supported Locales"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "SupportedLocales"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum of the SDK supported languages."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "en_CA"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "en_UK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "en_US"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "es_ES"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hr_HR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "is_IS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fr_FR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pt_PT"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "it_IT"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "no_NO"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "de_DE"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sl_SL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "et_EE"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36",
      children: "Tender Type"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "TenderType"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different tender types."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "NOT_SET"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CREDIT"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DEBIT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "39",
      children: "Tip Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "TipConfiguration"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constructor"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TipConfiguration( String tipAmount );"
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
              children: "tipAmount"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If present, the amount of the tip to be used for the transaction."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction amount in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "baseAmount"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base amount used to calculate the tip - in the minor unit of currency (f.ex. 1000 is 10.00 GBP). If no base amount is defined, the transaction amount is used as base amount."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "headerName"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Name of the tipping menu appearing on the terminal. Default: Tip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tipPercentages"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "List of Integer"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["List of percentages used to calculate the tip amount. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "REQUIRED"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "enterAmountEnabled"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flag used to enable the cardholder to manually enter the tip amount. Default: true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "skipEnabled"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flag used to enable the cardholder to skip the tipping step. Default: true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "footer"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Footer note which will appear on the tipping menu. Default: Empty string"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n    \"amount\": \"2000\",\r\n    \"baseAmount\": \"2000\",\r\n    \"headerName\": \"\",\r\n    \"tipPercentages\": [5,10,15,20,25],\r\n    \"enterAmountEnabled\": true,\r\n    \"skipEnabled\": false,\r\n    \"footer\": \"Thank you!!! ;)\"\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31",
      children: "Transaction Type"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "TransactionType"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different types of transactions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "UNDEFINED"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SALE"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "VOID_SALE"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "REFUND"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "VOID_REFUND"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "REVERSAL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CANCEL_SALE"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CANCEL_REFUND"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TOKENIZE_CARD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SALE_AND_TOKENIZE_CARD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CARD_PAN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "30",
      children: "Type of Result"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "TypeOfResult"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different types of device reports."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "STATUS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "REPORT"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BLUETOOTHNAME"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EMVCONFIGURATION"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "38",
      children: "Verification Method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "VerificationMethod"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different verification methods used in the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "UNDEFINED"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SIGNATURE"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PIN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PIN_SIGNATURE"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FAILED"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NOT_REQUIRED"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MOBILE_PASS_CODE"
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