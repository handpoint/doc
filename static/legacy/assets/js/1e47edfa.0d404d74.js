"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[99162],{

/***/ 48014
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_javascript_versioned_docs_version_java_script_sdk_7_2_3_javascriptobjects_md_1e4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/javascript/site-javascript-versioned-docs-version-java-script-sdk-7-2-3-javascriptobjects-md-1e4.json
const site_javascript_versioned_docs_version_java_script_sdk_7_2_3_javascriptobjects_md_1e4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"javascriptobjects","title":"Objects","description":"Acquirer","source":"@site/javascript_versioned_docs/version-JavaScript SDK 7.2.3/javascriptobjects.md","sourceDirName":".","slug":"/javascriptobjects","permalink":"/legacy/javascript/JavaScript SDK 7.2.3/javascriptobjects","draft":false,"unlisted":false,"tags":[],"version":"JavaScript SDK 7.2.3","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"id":"javascriptobjects"},"sidebar":"tutorialSidebar","previous":{"title":"Terminal Management","permalink":"/legacy/javascript/JavaScript SDK 7.2.3/javascriptterminalmanagement"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./javascript_versioned_docs/version-JavaScript SDK 7.2.3/javascriptobjects.md


const frontMatter = {
	sidebar_position: 8,
	id: 'javascriptobjects'
};
const contentTitle = 'Objects';

const assets = {

};



const toc = [{
  "value": "Acquirer",
  "id": "21",
  "level": 2
}, {
  "value": "Balance",
  "id": "balance",
  "level": 2
}, {
  "value": "Bypass Options",
  "id": "19",
  "level": 2
}, {
  "value": "Card Entry Type",
  "id": "29",
  "level": 2
}, {
  "value": "Card Scheme Name",
  "id": "30",
  "level": 2
}, {
  "value": "Currency",
  "id": "31",
  "level": 2
}, {
  "value": "Device",
  "id": "20",
  "level": 2
}, {
  "value": "Device Status",
  "id": "27",
  "level": 2
}, {
  "value": "Financial Status",
  "id": "33",
  "level": 2
}, {
  "value": "Merchant Auth",
  "id": "17",
  "level": 2
}, {
  "value": "Merchant Auth Credential",
  "id": "28",
  "level": 2
}, {
  "value": "Merchant Auth Options",
  "id": "25",
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
  "value": "Operation Start Result",
  "id": "operation-start-result",
  "level": 2
}, {
  "value": "Options",
  "id": "26",
  "level": 2
}, {
  "value": "Payment Scenario",
  "id": "34",
  "level": 2
}, {
  "value": "Reversal Options",
  "id": "40",
  "level": 2
}, {
  "value": "Refund Options",
  "id": "24",
  "level": 2
}, {
  "value": "Sale Options",
  "id": "23",
  "level": 2
}, {
  "value": "Status",
  "id": "38",
  "level": 2
}, {
  "value": "Status Info",
  "id": "status-info",
  "level": 2
}, {
  "value": "Tender Type",
  "id": "35",
  "level": 2
}, {
  "value": "Tip Configuration",
  "id": "39",
  "level": 2
}, {
  "value": "Transaction Result Object",
  "id": "18",
  "level": 2
}, {
  "value": "Transaction Status",
  "id": "22",
  "level": 2
}, {
  "value": "Transaction Type",
  "id": "36",
  "level": 2
}, {
  "value": "Verification Method",
  "id": "37",
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
      children: "An enum representing the supported acquirers for merchant authentication"
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
      children: "Balance available on the card."
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
              children: "amount"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Integer"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The balance amount."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Currency"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The balance currency."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "positive"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marks if the balance is positive."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "negative"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marks if the balance is negative."
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
        children: "\"balance\": {\r\n    \"amount\": 1000,\r\n    \"currency\": \"EUR\",\r\n    \"negative\": false,\r\n    \"positive\": true\r\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19",
      children: "Bypass Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "BypassOptions"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configuration to enable/disable signature or pin bypass."
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
              children: "pinBypass"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bypasses PIN entry when the cardholder does not know the PIN of the card and the merchant either knows they are the legitimate cardholder or want to give them the benefit of the doubt. PIN bypass should be set to true in order for the cardholder to be able to bypass the PIN by clicking once on the \"validate(green)\" button of the PIN screen on the payment terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "signatureBypass"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether the terminal prompts for a signature, depends on how you configure this parameter. The major card schemes (American Express, Diners, Discover, JCB, Mastercard, Visa, UnionPay) no longer require a signature for US merchants, they regard it as optional for card-present transactions. This means you can speed up your checkout by skipping the signature prompt. But if your business requires it, you can still let the terminal prompt for a signature."
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
        children: "{\r\n   \"bypassOptions\": {\r\n       \"signatureBypass\": true,\r\n       \"pinBypass\": true\r\n       }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "29",
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
      id: "30",
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
      id: "31",
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
      id: "20",
      children: "Device"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Device"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An object to store information about the payment terminal in use. ALL values are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "REQUIRED"
      }), "."]
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
              children: "merchant_id_alpha"
            }), "  ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merchant unique identifier associated with the payment terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "serial_number"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payment terminal serial number."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ssk"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device shared secret key to authenticate financial operations."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "terminal_type"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payment terminal type."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device_name"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payment terminal name composed of two parts \"serial_number - terminal_type\""
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
        children: "{\r\n       \"merchant_id_alpha\": \"Test_Merchant\",\r\n       \"serial_number\": \"614004878\",\r\n       \"ssk\": \"74817EA5C63437ADE7AA3A5401\",\r\n       \"terminal_type\": \"PAXA920\",\r\n       \"device_name\": \"0821032395-PAXA920\"\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27",
      children: "Device Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "DeviceStatus"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A class which holds the payment terminal status."
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
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The serial number of the payment terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BatteryStatus"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The battery status in percentages of the payment terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BatterymV"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The battery millivolts of the payment terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BatteryCharging"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The battery charging status of the payment terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ExternalPower"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The external power status of the payment terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ApplicationName"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The application name used by the payment terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ApplicationVersion"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The application version number used by the payment terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "bluetoothName"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The bluetooth interface name used by the payment terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "statusMessage"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status message of the payment terminal."
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
        children: "{\r\n    \"applicationName\": \"TestApp\",\r\n    \"applicationVersion\": \"20.1.0.1\",\r\n    \"batteryCharging\": \"Charging\",\r\n    \"batteryStatus\": \"100\",\r\n    \"batterymV\": \"4134\",\r\n    \"bluetoothName\": \"A920\",\r\n    \"externalPower\": \"USB\",\r\n    \"serialNumber\": \"0821032397\",\r\n    \"statusMessage\": \"Card reader time out\"\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33",
      children: "Financial Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "FinancialStatus"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different statuses for a completed transaction."
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
              href: "/legacy/javascript/JavaScript%20SDK%207.2.3/javascriptterminalmanagement#17",
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
            children: "The transaction (Sale, Refund etc.) has been authorised. Consider this value as \"successful\"."
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
            }), " status can be returned as a response to the  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%207.2.3/javascriptterminalmanagement#17",
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
              href: "/legacy/javascript/JavaScript%20SDK%207.2.3/javascriptterminalmanagement#17",
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
              href: "/legacy/javascript/JavaScript%20SDK%207.2.3/javascripttransactiontypes#pre-auth-capture",
              children: "preAuthorizationCapture"
            }), " message was used to complete a pre-authorization. Regular Sales do NOT need to be captured and will not return a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CAPTURED"
            }), " financial status"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["* Financial statuses marked with an asterisk (*) can only be returned as a response to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/javascript/JavaScript%20SDK%207.2.3/javascriptterminalmanagement#17",
        children: "get transaction status"
      }), " method."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17",
      children: "Merchant Auth"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "MerchantAuth"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object used to store merchant authentication. This object can be empty, it allows a transaction to be funded to a specific merchant account other than the default one (linked to the API key). It is useful if a terminal is shared between multiple merchants, for example at an Hair Salon or a Doctor's office."
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
              children: "Credential"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#28",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Credential[]"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array of credentials."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n   \"merchantAuth\": [{\r\n       \"acquirer\": \"ACQ_DUMMY\",\r\n       \"mid\": \"1111\",\r\n       \"tid\": \"2222\",\r\n       \"mcc\": \"3333\",\r\n       \"externalId\": \"4444\"\r\n       }]\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "28",
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
            children: "Property"
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
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Acquirer"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If present, it links the credential to a specific acquirer. Only required if more than one credential is provided."
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
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For this transaction, the External Id will be used to lookup the credential of the merchant in the Handpoint backend and process the transaction accordingly. The External id replaces the need to pass MID/TID/MCC as credentials."
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
        children: "{\r\n    \"acquirer\": \"ACQ_DUMMY\",\r\n    \"mid\": \"1111\",\r\n    \"tid\": \"2222\",\r\n    \"mcc\": \"3333\"\r\n}\r\n\r\n{\r\n    \"externalId\": \"4444\"\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25",
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
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "customerReference"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An arbitrary string to use as your own identifier for a transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "merchantAuth"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#17",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MerchantAuth"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration required to fund a specific merchant account in a multi-mid scenario (one payment terminal funding multiple merchants)."
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
        children: "{\r\n    \"customerReference\": \"MyCustomReference\",\r\n    \"merchantAuth\": [\r\n        {\r\n            \"acquirer\": \"ACQUIRER\",\r\n            \"mid\": \"11111\",\r\n            \"tid\": \"22222\",\r\n            \"mcc\": \"33333\"\r\n        }\r\n    ],\r\n}\n"
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
      children: "An object to store metadata."
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
        className: "language-json",
        children: "{\r\n    \"metadata\": {\r\n        \"metadata1\": \"data1\",\r\n        \"metadata2\": \"data2\",\r\n        \"metadata3\": \"data3\",\r\n        \"metadata4\": \"data4\",\r\n        \"metadata5\": \"data5\"\r\n    }\r\n}\n"
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
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fullName"
            }), "  ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["First and last name of the money transfer recipient.(", (0,jsx_runtime.jsx)(_components.strong, {
              children: "a-Z, A-Z"
            }), " only)"]
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
            children: ["Country code of the recipient (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3",
              children: "ISO 3166-1 alpha-3"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n   \"moneyRemittanceOptions\":{\r\n            \"fullName\":\"John Doe\",\r\n            \"countryCode\":\"USA\"\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "operation-start-result",
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
              children: "transactionResult"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise that will resolve/reject with ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%207.2.3/javascriptobjects#18",
              children: "Transaction Result"
            }), " object."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26",
      children: "Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Options"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object to store all the customisation options for an operation. This object can be empty if no options are required."
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
              children: "customerReference"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An arbitrary string to use as your own identifier for a transaction"
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
        className: "language-json",
        children: "{\r\n    \"customerReference\": \"MyCustomReference\",\r\n    \"metadata\": {\r\n        \"metadata1\": \"data1\",\r\n        \"metadata2\": \"data2\",\r\n        \"metadata3\": \"data3\",\r\n        \"metadata4\": \"data4\",\r\n        \"metadata5\": \"data5\"\r\n    }    \r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34",
      children: "Payment Scenario"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentScenario"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different types of payment scenario."
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
      id: "40",
      children: "Reversal Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ReversalOptions"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object to store the customization options for a reversal. This object can be empty if no options are required."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "customerReference"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An arbitrary string to use as your own identifier for a transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tokenize"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Used to enable tokenization in the payments flow. See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/android/androidreleasenotes#710095",
              children: "Android SDK 7.1009.5"
            }), " and ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/android/androidtransactions#cloudTokenizedPaymentsOperations",
              children: "Tokenized Payments Operations"
            }), " for detailed information on how to use this feature."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "duplicate_check"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Used to disable the duplicate payment check functionality. When a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the second charge. This menu will automatically be prompted on the payment terminal if a suspicious charge is detected. We are only prompting the duplicate check menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "  ** The duplicate_check functionality is available for the following transaction types:** Sale, Sale and Tokenize, Sale Reversal, Refund, Refund Reversal, MoTo Sale, MoTo Refund and MoTo Reversal.", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)("br", {}), "The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "duplicate_check"
            }), " service is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "enabled to \"true\" by default"
            }), ", if you want to disable it, you must explicitly pass the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "duplicate_check"
            }), " flag as part of the transaction request with the value \"false\"."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardPresent"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Optional parameter to indicate that a reversal operation will imply an actual present card, and this will be taken into account in the payments flow. See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/android/androidreleasenotes#710105",
              children: "Android SDK 7.1010.5"
            }), " and ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://handpoint.atlassian.net/wiki/spaces/PD/pages/5104533505/Handling+card+present+reversals+with+Elavon+acquirers",
              children: "Handling card present reversals with Elavon acquirers"
            }), " for detailed information on how to use this feature."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "bypassOptions"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#19",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "BypassOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration required to bypass the pin or signature verification methods."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "merchantAuth"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#17",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MerchantAuth"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration required to fund a specific merchant account in a multi-mid scenario (one payment terminal funding multiple merchants)."
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
              href: "/legacy/javascript/JavaScript%20SDK%207.2.3/javascriptobjects#money-remittance-options",
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
        className: "language-json",
        children: "{\r\n    \"customerReference\": \"MyCustomReference\",\r\n    \"tokenize\": false,\r\n    \"duplicate_check\": false,\r\n    \"tipConfiguration\": {\r\n        \"baseAmount\": \"100\",\r\n        \"skipEnabled\": true,\r\n        \"enterAmountEnabled\": true,\r\n        \"tipPercentages\": [\r\n            1,\r\n            2,\r\n            3,\r\n            5\r\n        ]\r\n    },\r\n    \"bypassOptions\": {\r\n        \"signatureBypass\": true,\r\n        \"pinBypass\": true\r\n    },\r\n    \"merchantAuth\": [\r\n        {\r\n            \"acquirer\": \"ACQUIRER\",\r\n            \"mid\": \"11111\",\r\n            \"tid\": \"22222\",\r\n            \"mcc\": \"33333\"\r\n        }\r\n    ],\r\n    \"metadata\": {\r\n        \"metadata1\": \"data1\",\r\n        \"metadata2\": \"data2\",\r\n        \"metadata3\": \"data3\",\r\n        \"metadata4\": \"data4\",\r\n        \"metadata5\": \"data5\"\r\n    },\r\n    \"moneyRemittanceOptions\":{\r\n            \"fullName\":\"John Doe\",\r\n            \"countryCode\":\"USA\"\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24",
      children: "Refund Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "RefundOptions"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object to store the customization options for a refund. This object can be empty if no options are required."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "customerReference"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An arbitrary string to use as your own identifier for a transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tokenize"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Used to enable tokenization in the payments flow. See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/android/androidreleasenotes#710095",
              children: "Android SDK 7.1009.5"
            }), " and ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/android/androidtransactions#cloudTokenizedPaymentsOperations",
              children: "Tokenized Payments Operations"
            }), " for detailed information on how to use this feature."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "duplicate_check"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Used to disable the duplicate payment check functionality. When a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the second charge. This menu will automatically be prompted on the payment terminal if a suspicious charge is detected. We are only prompting the duplicate check menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "  ** The duplicate_check functionality is available for the following transaction types:** Sale, Sale and Tokenize, Sale Reversal, Refund, Refund Reversal, MoTo Sale, MoTo Refund and MoTo Reversal.", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)("br", {}), "The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "duplicate_check"
            }), " service is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "enabled to \"true\" by default"
            }), ", if you want to disable it, you must explicitly pass the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "duplicate_check"
            }), " flag as part of the transaction request with the value \"false\"."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "bypassOptions"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#19",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "BypassOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration required to bypass the pin or signature verification methods."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "merchantAuth"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#17",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MerchantAuth"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration required to fund a specific merchant account in a multi-mid scenario (one payment terminal funding multiple merchants)."
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
              href: "/legacy/javascript/JavaScript%20SDK%207.2.3/javascriptobjects#money-remittance-options",
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
        className: "language-json",
        children: "{\r\n    \"customerReference\": \"MyCustomReference\",\r\n    \"tokenize\": false,\r\n    \"duplicate_check\": false,\r\n    \"tipConfiguration\": {\r\n        \"baseAmount\": \"100\",\r\n        \"skipEnabled\": true,\r\n        \"enterAmountEnabled\": true,\r\n        \"tipPercentages\": [\r\n            1,\r\n            2,\r\n            3,\r\n            5\r\n        ]\r\n    },\r\n    \"bypassOptions\": {\r\n        \"signatureBypass\": true,\r\n        \"pinBypass\": true\r\n    },\r\n    \"merchantAuth\": [\r\n        {\r\n            \"acquirer\": \"ACQUIRER\",\r\n            \"mid\": \"11111\",\r\n            \"tid\": \"22222\",\r\n            \"mcc\": \"33333\"\r\n        }\r\n    ],\r\n    \"metadata\": {\r\n        \"metadata1\": \"data1\",\r\n        \"metadata2\": \"data2\",\r\n        \"metadata3\": \"data3\",\r\n        \"metadata4\": \"data4\",\r\n        \"metadata5\": \"data5\"\r\n    },\r\n    \"moneyRemittanceOptions\":{\r\n            \"fullName\":\"John Doe\",\r\n            \"countryCode\":\"USA\"\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23",
      children: "Sale Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "SaleOptions"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object to store the customization options for a sale operation. This object can be empty if no options are required."
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
              children: "customerReference"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An arbitrary string to use as your own identifier for a transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tokenize"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Used to enable the tokenization flow in Tokenized Payments Operationss. See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/android/androidreleasenotes#710095",
              children: "Android SDK 7.1009.5"
            }), " and ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/android/androidtransactions#cloudTokenizedPaymentsOperations",
              children: "Tokenized Payments Operations"
            }), " for detailed information."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "duplicate_check"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Used to disable the duplicate payment check functionality. When a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the second charge. This menu will automatically be prompted on the payment terminal if a suspicious charge is detected. We are only prompting the duplicate check menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "  ** The duplicate_check functionality is available for the following transaction types:** Sale, Sale and Tokenize, Sale Reversal, Refund, Refund Reversal, MoTo Sale, MoTo Refund and MoTo Reversal.", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)("br", {}), "The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "duplicate_check"
            }), " service is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "enabled to \"true\" by default"
            }), ", if you want to disable it, you must explicitly pass the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "duplicate_check"
            }), " flag as part of the transaction request with the value \"false\"."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "TipConfiguration"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#39",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "TipConfiguration"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration for the tipping menu of the payment terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "bypassOptions"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#19",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "BypassOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration required to bypass the pin or signature verification methods."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "merchantAuth"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#17",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MerchantAuth"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration required to fund a specific merchant account in a multi-mid scenario (one payment terminal funding multiple merchants)."
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
              href: "/legacy/javascript/JavaScript%20SDK%207.2.3/javascriptobjects#money-remittance-options",
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
        className: "language-json",
        children: "{\r\n    \"customerReference\": \"MyCustomReference\",\r\n    \"tokenize\": false,\r\n    \"duplicate_check\": false,\r\n    \"tipConfiguration\": {\r\n        \"baseAmount\": \"100\",\r\n        \"skipEnabled\": true,\r\n        \"enterAmountEnabled\": true,\r\n        \"tipPercentages\": [\r\n            1,\r\n            2,\r\n            3,\r\n            5\r\n        ]\r\n    },\r\n    \"bypassOptions\": {\r\n        \"signatureBypass\": true,\r\n        \"pinBypass\": true\r\n    },\r\n    \"merchantAuth\": [\r\n        {\r\n            \"acquirer\": \"ACQUIRER\",\r\n            \"mid\": \"11111\",\r\n            \"tid\": \"22222\",\r\n            \"mcc\": \"33333\"\r\n        }\r\n    ],\r\n    \"metadata\": {\r\n        \"metadata1\": \"data1\",\r\n        \"metadata2\": \"data2\",\r\n        \"metadata3\": \"data3\",\r\n        \"metadata4\": \"data4\",\r\n        \"metadata5\": \"data5\"\r\n    },\r\n    \"moneyRemittanceOptions\":{\r\n            \"fullName\":\"John Doe\",\r\n            \"countryCode\":\"USA\"\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "38",
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
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cancelAllowed"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "bool"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "boolean"
            }), " allowing the user to know if the payment terminal will accept a cancel request."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#38",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "status"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            }), " enum representing the status of the transaction."]
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
              children: "string"
            }), " containing the status message of the transaction."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "deviceStatus"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#27",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device Status"
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
      id: "35",
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
      children: "An object holding information about the configuration of the tipping menu for the payment terminal. When a tipping configuration is sent to the payment terminal, the card reader will prompt the cardholder with a tipping menu at the time of the transaction with the parameters that have been sent."
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
              children: "baseAmount"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base amount used to calculate the tip - in the minor unit of currency (f.ex. 1000 is 10.00 GBP). If no base amount is defined, the transaction amount is used as base amount."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "headerName"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Name of the tipping menu appearing on the terminal. Default: Tip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tipPercentages"
            }), "  ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "    ", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "List Integer"
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
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flag used to enable the cardholder to manually enter the tip amount. Default: true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "skipEnabled"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flag used to enable the cardholder to skip the tipping step. Default: true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "footer"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
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
        children: "{\r\n    baseAmount: '2000',\r\n    tipPercentages: [5,10,15,20,25],\r\n    enterAmountEnabled: true,\r\n    skipEnabled: false,\r\n    footer: 'Thank you!!! ;)'\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18",
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
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "aid"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMV Application Identifier of the card (EMV tag 9F06)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "arc"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMV Authorisation Response Code (EMV tag 8A)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "authorisationCode"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acquirer response code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "balance"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#balance",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Balance"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balance available on the card"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "budgetNumber"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used to split payments over a period of months"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardEntryType"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#29",
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
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preferred language of the card (EMV tag 5F2D)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardSchemeName"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#30",
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
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token representing the PAN of the card"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "chipTransactionReport"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full report of the card EMV parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#31",
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
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The receipts are usually received as URLs in the transaction result from the terminal but note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "customerReference"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If a customerReference was provided as an optional parameter in the transaction request it is echoed unaltered in this field"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "deviceStatus"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#27",
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
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Number"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In case of a partial approval for the transaction, this field contains the amount which remains to be paid. Partial approval support is only required by the card brands in the United States"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "efttimestamp"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Date (Unix epoch)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time of the transaction (based on the date and time of the payment terminal)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "efttransactionID"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handpoint unique identifier for a transaction, this id is the one to be used for a transaction to be reversed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "errorMessage"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed reason for the transaction error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "expiryDateMMYY"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expiry date of the card used for the operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "finStatus"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#33",
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
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMV Issuer Application Data (EMV tag 9F10)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "issuerResponseCode"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response code from the card issuer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "maskedCardNumber"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Masked card number of the card used for the operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "merchantAddress"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merchant Address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "merchantName"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merchant Name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "merchantReceipt"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The receipts are usually received as URLs in the transaction result from the terminal but note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats"
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
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merchant Identifier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalEFTTransactionID"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In case the transaction type is a reversal, this field will contain the identifier of the original transaction being reversed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "paymentScenario"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#34",
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
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*Boolean\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This flag is set to true if the transaction result is sent through the transaction recovery logic explained in the Recovey Section, false otherwise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "requestedAmount"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*BigInteger\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The requested amount is the transaction amount sent to the terminal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rrn"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval Reference Number, unique number assigned by the acquirer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "signatureUrl"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If a digital signature is required, this is the URL containing the image of the captured signature. In case the signature can not be updated to the Handpoint servers and an URL is not generated, the terminal will send back the image binary in base64 format to your software. It is important to be able to support both the URL and the image binary format."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "statusMessage"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The status of the transaction, for example \"Waiting for pin\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tenderType"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#35",
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
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminal Identifier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tipAmount"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*BigInteger\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tip amount, if any, in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tipPercentage"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*Double\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If tipping is enabled, this field will return the tip percentage added on top of the base amount"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "totalAmount"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*BigInteger\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The total amount is the amount the card was charged for. It is possible that the total amount is not the same as the requested amount since an additional fee can be added, with the customer's approval, via the tipping functionality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "transactionID"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The transaction id is a terminal internal counter incremented for each transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tsi"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMV Transaction Status Information (EMV tag 9B)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tvr"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMV Transaction Verification Results (EMV tag 95)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "type"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#36",
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
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unmasked PAN, only received if the card is a non-payment card (loyalty)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "verificationMethod"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#37",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "VerificationMethod"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cardholder verification method, for example \"PIN\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "multiLanguageStatusMessages"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*Map\t*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "map"
            }), " containing the status message in a human readable format for all the supported locales."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "multiLanguageErrorMessages"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*Map\t*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "map"
            }), " containing the error message in a human readable format for all the supported locales."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardHolderName"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), "*String\t*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Name of the cardholder"
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
        children: "{\r\n  \"aid\": \"A0000000041010\",\r\n  \"arc\": \"0000\",\r\n  \"authorisationCode\": \"123456\",\r\n  \"balance\": null,\r\n  \"budgetNumber\": \"\",\r\n  \"cardEntryType\": \"UNDEFINED\",\r\n  \"cardLanguagePreference\": \"\",\r\n  \"cardSchemeName\": \"MasterCard\",\r\n  \"cardToken\": \"\",\r\n  \"chipTransactionReport\": \"\",\r\n  \"currency\": \"USD\",\r\n  \"customerReceipt\": \"https://s3.[...]/customerReceipt.html\",\r\n  \"customerReference\": \"\",\r\n  \"deviceStatus\": {\r\n      \"applicationName\": \"ClientApp\",\r\n      \"applicationVersion\": \"20.1.0\",\r\n      \"batteryCharging\": \"Not Charging\",\r\n      \"batteryStatus\": \"100\",\r\n      \"batterymV\": \"4126\",\r\n      \"bluetoothName\": \"PAXA920\",\r\n      \"externalPower\": \"USB\",\r\n      \"serialNumber\": \"0821032398\",\r\n      \"statusMessage\": \"Approved or completed successfully\"\r\n  },\r\n  \"dueAmount\": 0,\r\n  \"errorMessage\": \"\",\r\n  \"expiryDateMMYY\": \"0422\",\r\n  \"finStatus\": \"AUTHORISED\",\r\n  \"iad\": \"0210A000002A0000000000000000000000FF\",\r\n  \"issuerResponseCode\": \"00\",\r\n  \"maskedCardNumber\": \"************1456\",\r\n  \"merchantAddress\": \"Plaza Soledad Torres Acosta 1 28013 Madrid\",\r\n  \"merchantName\": \"Hago la cama\",\r\n  \"merchantReceipt\": \"https://s3.[...]/merchantReceipt.html\",\r\n  \"metadata\": {\r\n    \"metadata1\":\"data 1\",\r\n    \"metadata2\":\"data 2\",\r\n    \"metadata3\":\"data 3\",\r\n    \"metadata4\":\"data 4\",\r\n    \"metadata5\":\"data 5\",\r\n  },\r\n  \"mid\": \"\",\r\n  \"originalEFTTransactionID\": \"\",\r\n  \"paymentScenario\": \"CHIPCONTACTLESS\",\r\n  \"rrn\": \"\",\r\n  \"signatureUrl\": \"\",\r\n  \"statusMessage\": \"Approved or completed successfully\",\r\n  \"tenderType\": \"CREDIT\",\r\n  \"tid\": \"ACQUIRER_TID\",\r\n  \"tipAmount\": 0,\r\n  \"totalAmount\": 100,\r\n  \"transactionID\": \"01236fc0-8192-11eb-9aca-ad4b0e95f241\",\r\n  \"tsi\": \"0000\",\r\n  \"tvr\": \"0400008001\",\r\n  \"type\": \"SALE\",\r\n  \"unMaskedPan\": \"\",\r\n  \"verificationMethod\": \"UNDEFINED\",\r\n  \"efttimestamp\": 1615374961000,\r\n  \"efttransactionID\": \"01236fc0-8192-11eb-9aca-ad4b0e95f241\",\r\n  \"requestedAmount\": 100,\r\n  \"tipPercentage\": 0,\r\n  \"recoveredTransaction\": false,\r\n  \"cardHolderName\": \"cardholder name\"\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22",
      children: "Transaction Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "TransactionStatus"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A class which holds the payment terminal status. This object is received in the financial operation callback."
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
              children: "deviceStatus"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#27",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device Status"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OPTIONAL - The status of the payment terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "isCancelAllowed"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defines if the transaction can be cancelled or not."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "message"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human readable status message."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#38",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "status"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An enum containing information about the status of the transaction."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36",
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
        children: "CARD_PAN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CANCEL_TRX"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MOTO_SALE"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MOTO_REFUND"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MOTO_REVERSAL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SALE_AND_TOKENIZE_CARD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UPDATE"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PRINT_RECEIPT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "37",
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