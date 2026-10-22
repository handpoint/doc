"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[34704],{

/***/ 29810
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_windows_versioned_docs_version_windows_sdk_3_2_5_windowsobjects_md_cc8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/windows/site-windows-versioned-docs-version-windows-sdk-3-2-5-windowsobjects-md-cc8.json
const site_windows_versioned_docs_version_windows_sdk_3_2_5_windowsobjects_md_cc8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"windowobjects","title":"Objects","description":"Transaction Result Object","source":"@site/windows_versioned_docs/version-Windows SDK 3.2.5/windowsobjects.md","sourceDirName":".","slug":"/windowobjects","permalink":"/legacy/windows/Windows SDK 3.2.5/windowobjects","draft":false,"unlisted":false,"tags":[],"version":"Windows SDK 3.2.5","sidebarPosition":9,"frontMatter":{"sidebar_position":9,"id":"windowobjects"},"sidebar":"tutorialSidebar","previous":{"title":"Events Listeners","permalink":"/legacy/windows/Windows SDK 3.2.5/windowsevents"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./windows_versioned_docs/version-Windows SDK 3.2.5/windowsobjects.md


const frontMatter = {
	sidebar_position: 9,
	id: 'windowobjects'
};
const contentTitle = 'Objects';

const assets = {

};



const toc = [{
  "value": "Transaction Result Object",
  "id": "14",
  "level": 2
}, {
  "value": "Handpoint Credentials",
  "id": "30",
  "level": 2
}, {
  "value": "Handpoint API (Hapi) factory",
  "id": "handpoint-api-hapi-factory",
  "level": 2
}, {
  "value": "Transaction Type",
  "id": "28",
  "level": 2
}, {
  "value": "Connection Method",
  "id": "12",
  "level": 2
}, {
  "value": "Device",
  "id": "2",
  "level": 2
}, {
  "value": "Connection Status",
  "id": "18",
  "level": 2
}, {
  "value": "Currency",
  "id": "1",
  "level": 2
}, {
  "value": "Signature Request",
  "id": "17",
  "level": 2
}, {
  "value": "Card Scheme Name",
  "id": "23",
  "level": 2
}, {
  "value": "Device Parameter",
  "id": "8",
  "level": 2
}, {
  "value": "Device Status",
  "id": "24",
  "level": 2
}, {
  "value": "Terminal Parameters",
  "id": "terminal-parameters",
  "level": 2
}, {
  "value": "Financial Status",
  "id": "25",
  "level": 2
}, {
  "value": "Optional Transaction Parameters",
  "id": "3",
  "level": 2
}, {
  "value": "Log Level",
  "id": "9",
  "level": 2
}, {
  "value": "Status Info",
  "id": "statusInfo",
  "level": 2
}, {
  "value": "Verification Method",
  "id": "29",
  "level": 2
}, {
  "value": "Payment Scenario",
  "id": "26",
  "level": 2
}, {
  "value": "Status",
  "id": "status",
  "level": 2
}, {
  "value": "Tender Type",
  "id": "27",
  "level": 2
}, {
  "value": "Card Entry Type",
  "id": "22",
  "level": 2
}, {
  "value": "Hapi Manager",
  "id": "hapi-manager",
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
      id: "14",
      children: "Transaction Result Object"
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
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "aid"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMV Application Identifier of the card (EMV tag 9F06)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "arc"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMV Authorisation Response Code (EMV tag 8A)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "authorisationCode"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acquirer response code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "balance"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balance available on the card"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "budgetNumber"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used to split payments over a period of months"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardEntryType"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#22",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "CardEntryType"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method used by the terminal to read the card"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardLanguagePreference"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preferred language of the card (EMV tag 5F2D)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardSchemeName"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#23",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "CardSchemeName"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The brand of the card"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardToken"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token representing the PAN of the card"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "chipTransactionReport"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full report of the card EMV parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#1",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The currency used for the transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "customerReceipt"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The receipts are usually received as URLs in the transaction result from the terminal but note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "customerReference"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If a customerReference was provided as an optional parameter in the transaction request it is echoed unaltered in this field"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "deviceStatus"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#24",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "DeviceStatus"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status of the payment terminal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dueAmount"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In case of a partial approval for the transaction, this field contains the amount which remains to be paid. Partial approval support is only required by the card brands in the United States"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "efttimestamp"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time of the transaction (based on the date and time of the payment terminal)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "efttransactionID"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handpoint unique identifier for a transaction, this id is the one to be used for a transaction to be reversed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "errorMessage"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed reason for the transaction error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "expiryDateMMYY"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expiry date of the card used for the operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "finStatus"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#25",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "FinancialStatus"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The financial status contains the outcome of the transaction. For example \"AUTHORISED\" or \"DECLINED\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "iad"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMV Issuer Application Data (EMV tag 9F10)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "issuerResponseCode"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response code from the card issuer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "maskedCardNumber"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Masked card number of the card used for the operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "merchantAddress"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merchant Address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "merchantName"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merchant Name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "merchantReceipt"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The receipts are usually received as URLs in the transaction result from the terminal but note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "mid"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merchant Identifier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalEFTTransactionID"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In case the transaction type is a reversal, this field will contain the identifier of the original transaction being reversed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "paymentScenario"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#26",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "PaymentScenario"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indicates the card entry mode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "recoveredTransaction"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This flag is set to true if the transaction result is sent through the transaction recovery logic explained in the Recovey Section, false otherwise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "requestedAmount"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The requested amount is the transaction amount sent to the terminal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rrn"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval Reference Number, unique number assigned by the acquirer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "signatureUrl"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If a digital signature is required, this is the URL containing the image of the captured signature. In case the signature can not be updated to the Handpoint servers and an URL is not generated, the terminal will send back the image binary in base64 format to your software. It is important to be able to support both the URL and the image binary format."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "statusMessage"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The status of the transaction, for example \"Waiting for pin\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tenderType"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#27",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "TenderType"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction tender type (credit / debit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tid"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminal Identifier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tipAmount"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tip amount, if any, in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tipPercentage"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "double"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If tipping is enabled, this field will return the tip percentage added on top of the base amount"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "totalAmount"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The total amount is the amount the card was charged for. It is possible that the total amount is not the same as the requested amount since an additional fee can be added, with the customer's approval, via the tipping functionality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "transactionID"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The transaction id is a terminal internal counter incremented for each transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tsi"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMV Transaction Status Information (EMV tag 9B)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tvr"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMV Transaction Verification Results (EMV tag 95)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "type"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#28",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "TransactionType"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The type of transaction initiated, for example \"SALE\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "unMaskedPan"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unmasked PAN, only received if the card is a non-payment card (loyalty)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "verificationMethod"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#29",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "VerificationMethod"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cardholder verification method, for example \"PIN\""
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
        children: "{\r\n  \"aid\": \"A0000000041010\",\r\n  \"arc\": \"0000\",\r\n  \"authorisationCode\": \"123456\",\r\n  \"balance\": null,\r\n  \"budgetNumber\": \"\",\r\n  \"cardEntryType\": \"UNDEFINED\",\r\n  \"cardLanguagePreference\": \"\",\r\n  \"cardSchemeName\": \"MasterCard\",\r\n  \"cardToken\": \"\",\r\n  \"chipTransactionReport\": \"\",\r\n  \"currency\": \"USD\",\r\n  \"customerReceipt\": \"https://s3.[...]/customerReceipt.html\",\r\n  \"customerReference\": \"\",\r\n  \"deviceStatus\": {\r\n      \"applicationName\": \"ClientApp\",\r\n      \"applicationVersion\": \"20.1.0\",\r\n      \"batteryCharging\": \"Not Charging\",\r\n      \"batteryStatus\": \"100\",\r\n      \"batterymV\": \"4126\",\r\n      \"bluetoothName\": \"PAXA920\",\r\n      \"externalPower\": \"USB\",\r\n      \"serialNumber\": \"0821032398\",\r\n      \"statusMessage\": \"Approved or completed successfully\"\r\n  },\r\n  \"dueAmount\": 0,\r\n  \"errorMessage\": \"\",\r\n  \"expiryDateMMYY\": \"0422\",\r\n  \"finStatus\": \"AUTHORISED\",\r\n  \"iad\": \"0210A000002A0000000000000000000000FF\",\r\n  \"issuerResponseCode\": \"00\",\r\n  \"maskedCardNumber\": \"************1456\",\r\n  \"merchantAddress\": \"Plaza Soledad Torres Acosta 1 28013 Madrid\",\r\n  \"merchantName\": \"Hago la cama\",\r\n  \"merchantReceipt\": \"https://s3.[...]/merchantReceipt.html\",\r\n  \"mid\": \"\",\r\n  \"originalEFTTransactionID\": \"\",\r\n  \"paymentScenario\": \"CHIPCONTACTLESS\",\r\n  \"rrn\": \"\",\r\n  \"signatureUrl\": \"\",\r\n  \"statusMessage\": \"Approved or completed successfully\",\r\n  \"tenderType\": \"CREDIT\",\r\n  \"tid\": \"ACQUIRER_TID\",\r\n  \"tipAmount\": 0,\r\n  \"totalAmount\": 100,\r\n  \"transactionID\": \"01236fc0-8192-11eb-9aca-ad4b0e95f241\",\r\n  \"tsi\": \"0000\",\r\n  \"tvr\": \"0400008001\",\r\n  \"type\": \"SALE\",\r\n  \"unMaskedPan\": \"\",\r\n  \"verificationMethod\": \"UNDEFINED\",\r\n  \"efttimestamp\": 1615374961000,\r\n  \"efttransactionID\": \"01236fc0-8192-11eb-9aca-ad4b0e95f241\",\r\n  \"requestedAmount\": 100,\r\n  \"tipPercentage\": 0,\r\n  \"recoveredTransaction\": false\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "30",
      children: "Handpoint Credentials"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "HandpointCredentials"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A class containing information related to the user credentials."
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
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "SharedSecret"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            }), " the value of the shared secret (provided by Handpoint), only required when using BLUETOOTH as connection method. If using CLOUD this value can be any non-null string."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CloudApiKey"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            }), " the value of the merchant Cloud Api Key (provided by Handpoint), only required when using CLOUD as connection method."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "{\r\n\tstring sharedSecret = \"0102030405060708091011121314151617181920212223242526272829303132\";\r\n\tnew HandpointCredentials(sharedSecret);\r\n\t//We've set a default shared secret!\r\n}\r\n\t\r\n{\r\n\tstring sharedSecret = \"0102030405060708091011121314151617181920212223242526272829303132\";\r\n\tstring apikey = \"This-Is-The-Merchant-Api-Key\";\r\n\tnew HandpointCredentials(sharedSecret, apikey);\r\n\t//We've set a default shared secret and the merchant Api Key!\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "handpoint-api-hapi-factory",
      children: "Handpoint API (Hapi) factory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "HapiFactory"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A factory to provide a unified entrypoint and to simplify the way to instantiate the Hapi (SDK) object."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Static factory"
      }), "\r\ngetAsyncInterface( Events.Required requiredListener , HandpointCredentials handpointCredentials );"]
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
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Events.Required"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A listener object to report the required events."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "handpointCredentials"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#30",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "HandpointCredentials"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object containing the user's shared secret and/or Cloud Api Key."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "//InitApi for HiLite payment terminals\r\npublic void InitApi()\r\n{\r\n\tstring sharedSecret = \"0102030405060708091011121314151617181920212223242526272829303132\";\r\n\tapi = HapiFactory.GetAsyncInterface(this, new HandpointCredentials(sharedSecret));\r\n\t//The api is now initialized. Yay! we've even set a default shared secret\r\n}\r\n\r\n//InitApi for Cloud payment terminals (PAX/Telpo)\r\npublic void InitApi()\r\n{\r\n\tstring sharedSecret = \"0102030405060708091011121314151617181920212223242526272829303132\";\r\n\tstring apikey = \"This-Is-The-Merchant-Api-Key\";\r\n\tapi = HapiFactory.GetAsyncInterface(this, new HandpointCredentials(sharedSecret, apikey));\r\n\t//The api is now initialized. Yay! we've even set a default shared secret and the merchant Api Key!\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "28",
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
        children: "CANCEL_SALE"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CANCEL_REFUND"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TOKENIZE_CARD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SALE_AND_TOKENIZE_CARD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "REVERSAL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UPDATE"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HOST_INIT"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PRINT_RECEIPT"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CARD_PAN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CANCEL_TRX"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MOTO_SALE"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MOTO_REFUND"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MOTO_REVERSAL"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12",
      children: "Connection Method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ConnectionMethod"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different types of connection methods."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "BLUETOOTH"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CLOUD"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SIMULATOR"
      }), " are supported for Windows."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Possible values\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "USB"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SERIAL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BLUETOOTH"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CLOUD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTPS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WIFI"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ETHERNET"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SIMULATOR"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "//Currently CLOUD, BLUETOOTH, and SIMULATOR are the only ConnectionMethod available.\r\npublic enum ConnectionMethod \r\n{\r\n\tUSB,\r\n\tSERIAL,\r\n\tHTTPS,\r\n\tWIFI,\r\n\tETHERNET,\r\n\tBLUETOOTH,\r\n\tCLOUD,\r\n\tSIMULATOR\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2",
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Device( String name , String address , String port , ConnectionMethod ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#12",
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "connectionMethod"
        })
      }), " , String sharedSecret , int timeout );"]
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
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A name to identify the payment terminal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "address"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The address of the device you wish to connect to. E.g.: \"08:00:69:02:01", ":FC", "\" for bluetooth or \"9822032398-PAXA920\" for CLOUD (composition of serial number and model of the target device) ."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "port"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The port to connect to."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "connectionMethod"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#12",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "ConnectionMethod"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The type of connection with the device. E.g: Bluetooth, Cloud, Serial, etc."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sharedSecret"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This parameter can be used to change the default shared secret for the payment terminal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "timeout"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "int"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of miliseconds after which the connection is considered timed out"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "//Create and init a new HiLite payment terminal\r\nDevice dev = new Device(\"CardReader7\", \"08:00:69:02:01:FC\", \"1\", ConnectionMethod.BLUETOOTH);\r\n\r\n//Create and init a new PAX/Telpo payment terminal\r\nDevice dev = new Device(\"CloudDevice\", \"9822032398-PAXA920\", \"\", ConnectionMethod.CLOUD);\r\n// The address is the composition of the serial number and model ot the target device.\r\n//Example for a PAX A920 device: serial_number - model  -> 9822032398-PAXA920\n"
      })
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Id"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A unique identifier for the device."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18",
      children: "Connection Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ConnectionStatus"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A list of statuses given to a connection."
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
        children: "Initializing"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NotConfigured"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1",
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
      children: "Signature Request"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "SignatureRequest"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A class containing information about a signature request or verification."
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
            children: ["Timeout", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Int"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The value of the timeout in seconds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["MerchantReceipt", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Html"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The receipts are usually received as URLs in the transaction result from the terminal but note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23",
      children: "Card Scheme Name"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "CardSchemeName"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different card brands."
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
      id: "8",
      children: "Device Parameter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "DeviceParameter"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum describing all the available commands to send to a device."
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
      }), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Language"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24",
      children: "Device Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "DeviceStatus"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A class that holds the device status."
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
              children: "SerialNumber"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the serial number of the device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BatteryStatus"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the battery status in percentages of the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BatterymV"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the battery milli volts of the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BatteryChargingt"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the battery charging status of the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ExternalPower"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the status of an external power source for the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ApplicationName"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the application name used by the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ApplicationVersion"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the application version number used by the device."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "terminal-parameters",
      children: "Terminal Parameters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "TerminalType"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum describing parameters supported by the payment terminal."
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
      }), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Language"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25",
      children: "Financial Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "FinancialStatus"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different final statuses of a transaction."
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
            }), "   ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Any Financial Status other than the below mentioned financial statuses will be ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UNDEFINED"
            }), ".  UNDEFINED means that the SDK couldn't get a response from the Gateway. An automatic cancellation service will try to cancel the transaction in case it was approved."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "AUTHORISED"
            }), " ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The transaction (Sale, Refund,...) has been authorised. Consider this value as \"successful\"."
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
            }), "."]
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
            children: ["A partial approval is the ability to partially authorize a transaction if the cardholder does not have the funds to cover the entire cost on their card. The merchant can obtain the remainder of the purchase amount in another form of payment. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PARTIAL_APPROVAL"
            }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "only"
            }), "  applicable to the United States market."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3",
      children: "Optional Transaction Parameters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "OptionalParameters"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A class containing optional transaction parameters now supported by the device."
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
              children: "Budget"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Budget is only available for sale transactions"
            }), ".", (0,jsx_runtime.jsx)("br", {}), " A", (0,jsx_runtime.jsx)(_components.code, {
              children: " String"
            }), " representing the key for a budget number.A budget number can be used to split up an amout over a period of months. The value has to be a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            }), " of 2 digits representing the number of months to split the transaction to. Example: \"03\" or \"24\"."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CustomerReference"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "String\tCustomerReference is available for all transactions."
            }), (0,jsx_runtime.jsx)("br", {}), "A ", (0,jsx_runtime.jsx)(_components.code, {
              children: " String"
            }), " representing the key for a customer reference.A customer reference can be used for an internal marking system. The value is sent as a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            }), " of a maximum 36 characters and received back when the transaction has been processed. Example: \"C.nr. 212311\"."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9",
      children: "Log Level"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "LogLevel"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum describing the different levels of logging used in the SDK and the payment terminal."
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
      id: "statusInfo",
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
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CancelAllowed"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "bool"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bool"
            }), " allowing the user to know if the payment terminal will accept a cancel request."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#status",
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
              children: "message"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
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
              children: "DeviceStatus"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#24",
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
      id: "29",
      children: "Verification Method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "VerificationMethod"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different cardholder verification methods."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Possible values **"
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
      }), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "MOBILE_PASS_CODE"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26",
      children: "Payment Scenario"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentScenario"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different types of payment scenarios."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Possible values **"
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
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "status",
      children: "Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "status"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum containing information about the status of the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Possible values **"
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
      }), " \t", (0,jsx_runtime.jsx)(_components.code, {
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
      }), "  ", (0,jsx_runtime.jsx)(_components.code, {
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
      id: "27",
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
      children: "** Possible values**"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "NOT_SET"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CREDIT"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DEBIT"
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
      children: "** Possible values **"
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
      children: "** Properties **"
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
              children: "DefaultSharedSecret"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the default shared secret used in the SDK."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "LogLevel"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#9",
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
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "bool"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checks whether the SDK is in transaction or not. True if the SDK is in transaction, false otherwise. This might return a true if there is a communication error between the SDK and payment terminal but the transaction has been completed on the card reader."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "SdkVersion"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the current Sdk version."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IsTransactionResultPending"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "boolean"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["In case of a communication failure between the device and the API a ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#14",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Transaction Result"
              })
            }), " might not be delivered to the API. This function checks if there is a pending ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#14",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Transaction Result"
              })
            }), ". This field is only updated when connecting to a device. If this function returns true the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#14",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Transaction Result"
              })
            }), " (which includes the receipt) can be fetched with hapi.GetPendingTransactionResult();. This function serves the same functionality as the event PendingTransactionResult(Device device), so every time that event is invoked, HapiManager.IsTransactionResultPending() is true until the result is fetched."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Settings.AutoRecoverTransactionResult"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "boolean"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["In case of a communication failure between the device and the API a ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#14",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Transaction Result"
              })
            }), " might not be delivered to the API. This property can be set to true or false. If set to true, the SDK will automatically fetch the pending ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#14",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Transaction Result"
              })
            }), " when detected and return it via ", (0,jsx_runtime.jsx)(_components.em, {
              children: "TransactionResultReady"
            }), ". The function PendingTransactionResult is never invoked if this property is set to true. If set to false PendingTransactionResult will be called when a TransactionResult is pending."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "//Check if the SDK is in transaction\r\nbool inTransaction = HapiManager.InTransaction(SomeConnectedDevice);\r\n//Check the current logLevel\r\nLogLevel level = HapiManager.GetLogLevel();\n"
      })
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