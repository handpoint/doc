"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[69943],{

/***/ 56257
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_windows_versioned_docs_version_windows_sdk_4_3_1_windowstransactions_md_fff_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/windows/site-windows-versioned-docs-version-windows-sdk-4-3-1-windowstransactions-md-fff.json
const site_windows_versioned_docs_version_windows_sdk_4_3_1_windowstransactions_md_fff_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"windowstransactions","title":"Transaction Types","description":"Since Windows SDK 3.3.0 the Duplicate Check service it will be enabled by default when Handpoint Payments app v4.0.0. or higher is used. (Handpoint Android SDK 7.0.0 or higher).","source":"@site/windows_versioned_docs/version-Windows SDK 4.3.1/windowstransactions.md","sourceDirName":".","slug":"/windowstransactions","permalink":"/legacy/windows/Windows SDK 4.3.1/windowstransactions","draft":false,"unlisted":false,"tags":[],"version":"Windows SDK 4.3.1","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"id":"windowstransactions"},"sidebar":"tutorialSidebar","previous":{"title":"Integration Guides","permalink":"/legacy/windows/Windows SDK 4.3.1/windowsintegrationguide"},"next":{"title":"Terminal Management","permalink":"/legacy/windows/Windows SDK 4.3.1/windowsdevicemanagement"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./windows_versioned_docs/version-Windows SDK 4.3.1/windowstransactions.md


const frontMatter = {
	sidebar_position: 5,
	id: 'windowstransactions'
};
const contentTitle = 'Transaction Types';

const assets = {

};



const toc = [{
  "value": "Sale",
  "id": "sale",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked",
  "level": 4
}, {
  "value": "Sale And Tokenize Card",
  "id": "sale-and-tokenize-card",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-1",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked-1",
  "level": 4
}, {
  "value": "Sale Reversal",
  "id": "sale-reversal",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-2",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked-2",
  "level": 4
}, {
  "value": "Refund",
  "id": "refund",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-3",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked-3",
  "level": 4
}, {
  "value": "Refund Reversal",
  "id": "refund-reversal",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-4",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked-4",
  "level": 4
}, {
  "value": "MoTo Sale",
  "id": "moto-sale",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-5",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked-5",
  "level": 4
}, {
  "value": "MoTo Refund",
  "id": "moto-refund",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-6",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked-6",
  "level": 4
}, {
  "value": "MoTo Reversal",
  "id": "moto-reversal",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-7",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked-7",
  "level": 4
}, {
  "value": "MoTo Pre-Auth",
  "id": "moto-pre-auth",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-8",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked-8",
  "level": 4
}, {
  "value": "Print Receipt",
  "id": "print-receipt",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-9",
  "level": 4
}, {
  "value": "Signature Result",
  "id": "signature-result",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-10",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked-9",
  "level": 4
}, {
  "value": "Tip Adjustment",
  "id": "tip-adjustment",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-11",
  "level": 4
}, {
  "value": "Tokenize Card",
  "id": "tokenize-card",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-12",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked-10",
  "level": 4
}, {
  "value": "Stop Current Transaction",
  "id": "stop-current-transaction",
  "level": 2
}, {
  "value": "Events invoked",
  "id": "events-invoked-11",
  "level": 4
}, {
  "value": "Pre-Auth",
  "id": "pre-auth",
  "level": 2
}, {
  "value": "Events invoked",
  "id": "events-invoked-12",
  "level": 4
}, {
  "value": "Pre-Auth Increase/Decrease",
  "id": "pre-auth-increasedecrease",
  "level": 2
}, {
  "value": "Events invoked",
  "id": "events-invoked-13",
  "level": 4
}, {
  "value": "Pre-Auth Capture",
  "id": "pre-auth-capture",
  "level": 2
}, {
  "value": "Events invoked",
  "id": "events-invoked-14",
  "level": 4
}, {
  "value": "Pre-Auth/Capture Reversal",
  "id": "pre-authcapture-reversal",
  "level": 2
}, {
  "value": "Events invoked",
  "id": "events-invoked-15",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h4: "h4",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Since ", (0,jsx_runtime.jsx)(_components.a, {
          href: "windowsreleasenotes#330",
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Windows SDK 3.3.0"
          })
        }), " the Duplicate Check service it will be ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "enabled by default"
        }), " when Handpoint Payments app ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v4.0.0."
        }), " or higher is used. (Handpoint ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Android SDK 7.0.0"
        }), " or higher)."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sale",
      children: "Sale"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Sale"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A sale initiates a transaction with the payment terminal. In it's simplest form you only have to pass the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "amount"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "currency"
      }), " but it also accepts a map with optional parameters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters",
      children: "Parameters"
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
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#1",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "map"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Map"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A map including ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#3",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "optional transaction parameters."
              })
            }), " (Customer reference, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#metadata",
              children: "Metadata"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#money-remittance-options",
              children: "Money Remittance Options"
            }), ",...). This object can be empty if no options are required."]
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
        children: "// Basic\r\nthis.Hapi.Sale(new BigInteger(\"1000\"), Currency.EUR);\r\n\r\n// With options\r\nDictionary map = new Dictionary();\r\nmap.Add(XmlTag.CustomerReference.Tag(), \"YourCustomerReference\");\r\nmap.Add(XmlTag.Metadata1.Tag(), \"Data 1\");\r\nmap.Add(XmlTag.MoneyRemittanceCountryCode.Tag(), \"USA\");\r\nmap.Add(XmlTag.MoneyRemittanceFullName.Tag(), \"John Doe\");\r\n\r\nthis.Hapi.Sale(new BigInteger(\"1000\"), Currency.EUR, map);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#4",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "currentTransactionStatus"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#5",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "signatureRequired"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked if the card issuer requires the cardholder to sign the transaction receipt."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#6",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "endOfTransaction"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked when the transaction is completed, it contains the transaction result and receipts."
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#OperationStartResult",
              children: "OperationStartResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object containing information about the financial operation started. Most specifically the transactionReference which must be saved on your end in case you do not get back the transaction result object at the end of the transaction. The transactionReference will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sale-and-tokenize-card",
      children: "Sale And Tokenize Card"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "SaleAndTokenizeCard"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A sale operation which also returns a card token. This functionality is not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-1",
      children: "Parameters"
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
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#1",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "map"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Map"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A map including ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#3",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "optional transaction parameters."
              })
            }), " (Customer reference, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#metadata",
              children: "Metadata"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#money-remittance-options",
              children: "Money Remittance Options"
            }), ",...). This object can be empty if no options are required."]
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
        children: "//Initiate a sale for 10.00 in Great British Pounds\r\napi.SaleAndTokenizeCard(new BigInteger(\"1000\"),Currency.GBP);\r\n\r\n// With options\r\nDictionary map = new Dictionary();\r\nmap.Add(XmlTag.CustomerReference.Tag(), \"YourCustomerReference\");\r\nmap.Add(XmlTag.MoneyRemittanceCountryCode.Tag(), \"USA\");\r\nmap.Add(XmlTag.MoneyRemittanceFullName.Tag(), \"John Doe\");\r\n\r\napi.SaleAndTokenizeCard(new BigInteger(\"1000\"), Currency.EUR, map);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-1",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#4",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "currentTransactionStatus"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#5",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "signatureRequired"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked if the card issuer requires the cardholder to sign the transaction receipt."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#6",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "endOfTransaction"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked when the transaction is completed, it contains the transaction result and receipts."
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#OperationStartResult",
              children: "OperationStartResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object containing information about the financial operation started. Most specifically the transactionReference which must be saved on your end in case you do not get back the transaction result object at the end of the transaction. The transactionReference will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sale-reversal",
      children: "Sale Reversal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "SaleReversal"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A sale reversal, also called sale VOID allows the user to reverse a previous sale operation. This operation reverts (if possible) a specific sale identified with a transaction id. In its simplest form you only have to pass the amount, currency and originalTransactionID but it also accepts a map with optional parameters. Note that transactions can only be reversed within a 24 hours timeframe or until the daily batch of transactions has been sent for submission."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-2",
      children: "Parameters"
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
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#1",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Id of the original sale transaction (EFTTransactionID)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "map"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Map"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A map including ", (0,jsx_runtime.jsx)(_components.a, {
              href: "windowobjects#3",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "optional transaction parameters."
              })
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
        className: "language-csharp",
        children: "//Initiate a reversal for 10.00 Pounds\r\napi.SaleReversal(new BigInteger(1000),Currency.GBP,\"00000000-0000-0000-0000-000000000000\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-2",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#4",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "currentTransactionStatus"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#5",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "signatureRequired"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked if the card issuer requires the cardholder to sign the transaction receipt."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#6",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "endOfTransaction"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked when the transaction is completed, it contains the transaction result and receipts."
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#OperationStartResult",
              children: "OperationStartResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object containing information about the financial operation started. Most specifically the transactionReference which must be saved on your end in case you do not get back the transaction result object at the end of the transaction. The transactionReference will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "refund",
      children: "Refund"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Refund"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A refund operation moves funds from the merchant account to the cardholder´s credit card. In it's simplest form you only have to pass the amount and currency but it also accepts a map with optional parameters. Note that a card is required to be swiped, dipped or tapped for this operation. For Interac (Canadian Debit Network), refunds can only be processed until Interac closes the batch of transactions at night."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-3",
      children: "Parameters"
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
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#1",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Id of the original sale transaction (EFTTransactionID)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "map"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Map"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A map including ", (0,jsx_runtime.jsx)(_components.a, {
              href: "windowobjects#3",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "optional transaction parameters."
              })
            }), " (Customer reference, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#metadata",
              children: "Metadata"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#money-remittance-options",
              children: "Money Remittance Options"
            }), ",...). This object can be empty if no options are required."]
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
        children: "//Initiate a refund for 10.00 in Great British Pounds\r\napi.Refund(new BigInteger(1000),Currency.GBP,\"00000000-0000-0000-0000-000000000000\");\r\n\r\n\r\n// With options\r\nDictionary map = new Dictionary();\r\nmap.Add(XmlTag.CustomerReference.Tag(), \"YourCustomerReference\");\r\nmap.Add(XmlTag.MoneyRemittanceCountryCode.Tag(), \"USA\");\r\nmap.Add(XmlTag.MoneyRemittanceFullName.Tag(), \"John Doe\");\r\n\r\napi.Refund(new BigInteger(\"1000\"), Currency.EUR, map);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-3",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#4",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "currentTransactionStatus"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#5",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "signatureRequired"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked if the card issuer requires the cardholder to sign the transaction receipt."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#6",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "endOfTransaction"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked when the transaction is completed, it contains the transaction result and receipts."
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#OperationStartResult",
              children: "OperationStartResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object containing information about the financial operation started. Most specifically the transactionReference which must be saved on your end in case you do not get back the transaction result object at the end of the transaction. The transactionReference will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "refund-reversal",
      children: "Refund Reversal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "RefundReversal"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Refund Reversal, also called Refund VOID allows the merchant to reverse a previous refund operation. This operation reverts (if possible) a specific refund identified with a transaction id. In its simplest form you only have to pass the amount, currency and originalTransactionID but it also accepts a map with optional parameters. Note that transactions can only be reversed within the same day as the transaction was made."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-4",
      children: "Parameters"
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
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#1",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Id of the original refund transaction (EFTTransactionID)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "map"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Map"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A map including ", (0,jsx_runtime.jsx)(_components.a, {
              href: "windowobjects#3",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "optional transaction parameters."
              })
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
        className: "language-csharp",
        children: "//Initiate a refund reversal for 10.00 in Great British Pounds\r\napi.RefundReversal(new BigInteger(1000),Currency.GBP,\"00000000-0000-0000-0000-000000000000\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-4",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#4",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "currentTransactionStatus"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#5",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "signatureRequired"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked if the card issuer requires the cardholder to sign the transaction receipt."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#6",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "endOfTransaction"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked when the transaction is completed, it contains the transaction result and receipts."
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#OperationStartResult",
              children: "OperationStartResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object containing information about the financial operation started. Most specifically the transactionReference which must be saved on your end in case you do not get back the transaction result object at the end of the transaction. The transactionReference will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "moto-sale",
      children: "MoTo Sale"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "moToSale"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mail Order /Telephone Order (MOTO) sale. MOTO is a type of card-not-present (CNP) transaction in which services are paid and delivered via telephone, mail, fax, or internet communication. MOTO has become synonymous with any financial transaction where the entity taking payment does not physically see the card used to make the purchase."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-5",
      children: "Parameters"
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
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Currency"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "map"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Map"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A map including ", (0,jsx_runtime.jsx)(_components.a, {
              href: "windowobjects#3",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "optional transaction parameters."
              })
            }), " (Customer reference, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#metadata",
              children: "Metadata"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#money-remittance-options",
              children: "Money Remittance Options"
            }), ",...). This object can be empty if no options are required."]
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
        children: "// Basic MoTo Sale\r\nthis.Hapi.MotoSale(new BigInteger(\"1000\"), Currency.EUR);\r\n\r\n// With options\r\nDictionary dic = new Dictionary();\r\ndic.Add(XmlTag.CustomerReference.Tag(), \"YourCustomerReference\");\r\nmap.Add(XmlTag.MoneyRemittanceCountryCode.Tag(), \"USA\");\r\nmap.Add(XmlTag.MoneyRemittanceFullName.Tag(), \"John Doe\");\r\n\r\nthis.Hapi.MotoSale(new BigInteger(\"1000\"), Currency.EUR, dic);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-5",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#4",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "currentTransactionStatus"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#6",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "endOfTransaction"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked when the transaction is completed, it contains the transaction result and receipts."
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#OperationStartResult",
              children: "OperationStartResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object containing information about the financial operation started. Most specifically the transactionReference which must be saved on your end in case you do not get back the transaction result object at the end of the transaction. The transactionReference will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "moto-refund",
      children: "MoTo Refund"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "moToRefund"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A MOTO refund operation moves funds from the merchant account to the cardholder´s credit card. In it's simplest form you only have to pass the amount and currency but it also accepts the original transaction id. MOTO Refund is a type of card-not-present (CNP) transaction in which services are refunded via telephone, mail, fax, or internet communication. MOTO has become synonymous with any financial transaction where the entity taking payment does not physically see the card used to make the purchase or refund."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-6",
      children: "Parameters"
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
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)(_components.em, {
              children: "Currency"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionId"
            }), (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If present it links the refund with a previous sale. It effectively limits the maximum amount refunded to that of the original transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "map"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Map"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A map including ", (0,jsx_runtime.jsx)(_components.a, {
              href: "windowobjects#3",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "optional transaction parameters."
              })
            }), " (Customer reference, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#metadata",
              children: "Metadata"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#money-remittance-options",
              children: "Money Remittance Options"
            }), ",...). This object can be empty if no options are required."]
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
        children: "//Basic MoTo Refund\r\nthis.Hapi.MotoRefund(new BigInteger(1000), Currency.EUR);\r\n\r\nthis.Hapi.MotoRefund(new BigInteger(1000), Currency.EUR, \"00000000-0000-0000-0000-000000000000\");\r\n\r\n\r\n//With Options\r\nDictionary dic = new Dictionary();\r\ndic.Add(XmlTag.CustomerReference.Tag(), \"YourCustomerReference\");\r\nmap.Add(XmlTag.MoneyRemittanceCountryCode.Tag(), \"USA\");\r\nmap.Add(XmlTag.MoneyRemittanceFullName.Tag(), \"John Doe\");\r\n\r\nthis.Hapi.MotoRefund(new BigInteger(\"1000\"), Currency.EUR, dic);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-6",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#4",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "currentTransactionStatus"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#6",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "endOfTransaction"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked when the transaction is completed, it contains the transaction result and receipts."
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#OperationStartResult",
              children: "OperationStartResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object containing information about the financial operation started. Most specifically the transactionReference which must be saved on your end in case you do not get back the transaction result object at the end of the transaction. The transactionReference will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "moto-reversal",
      children: "MoTo Reversal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "moToReversal"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A MOTO reversal, also called VOID allows the user to reverse a previous sale/refund operation. This operation reverts (if possible) a specific operation identified with a transaction id. Note that transactions can only be reversed within a 24 hours timeframe or until the daily batch of transactions has been sent for submission. MOTO Reversal is a type of card-not-present (CNP) transaction used to reverse a previous MOTO Sale or MOTO Refund."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-7",
      children: "Parameters"
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
            }), (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Id of the original sale transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "map"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: "Map"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A map including optional transaction parameters"
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
        children: "this.Hapi.MotoReversal(\"00000000-0000-0000-0000-000000000000\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-7",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#4",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "currentTransactionStatus"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#6",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "endOfTransaction"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked when the transaction is completed, it contains the transaction result and receipts."
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#OperationStartResult",
              children: "OperationStartResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object containing information about the financial operation started. Most specifically the transactionReference which must be saved on your end in case you do not get back the transaction result object at the end of the transaction. The transactionReference will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "moto-pre-auth",
      children: "MoTo Pre-Auth"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "moToPreAuthorization"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A MOTO pre-auth initiates a pre-authorization operation to the card reader. It's used to verify that the account is valid and has sufficient funds to cover a pending transaction, without actually debiting the cardholder's account upfront."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-8",
      children: "Parameters"
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
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#1",
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
              children: "map"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: "Map"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A map including optional transaction parameters"
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
        children: "this.Hapi.moToPreAuthorization(new BigInteger(1000), Currency.EUR);\r\n\r\n// With options\r\nDictionary map = new Dictionary();\r\nmap.Add(XmlTag.CustomerReference.Tag(), \"YourCustomerReference\");\r\nmap.Add(XmlTag.Metadata1.Tag(), \"Data 1\");\r\n\r\nthis.Hapi.moToPreAuthorization(new BigInteger(1000), Currency.EUR, map);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-8",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#4",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "currentTransactionStatus"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#6",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "endOfTransaction"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked when the transaction is completed, it contains the transaction result and receipts."
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#OperationStartResult",
              children: "OperationStartResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object containing information about the financial operation started. Most specifically the transactionReference which must be saved on your end in case you do not get back the transaction result object at the end of the transaction. The transactionReference will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "print-receipt",
      children: "Print Receipt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "PrintReceipt"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Print on demand functionality allowing the merchant to print any HTML formatted receipt. It is possible to print images or barcodes as well as passing directly a URL to the printReceipt function. A bitmap can also be printed, in order to do so it needs to be rendered as an image and inserted into the html."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "The receipts are usually received as URLs in the transaction result from the terminal but note that if the terminal is not able to upload the receipt to the Handpoint cloud servers and generate a URL then the HTML formatted receipt will be delivered to your software. It is important to be able to manage both formats."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-9",
      children: "Parameters"
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
              children: "receipt"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTML receipt or url to locate the receipt, it can be found in the response of a financial operation, in the fields merchantReceipt or customerReceipt. The receipt must match the following ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://handpoint.atlassian.net/wiki/spaces/PD/pages/1409875969/Html+Print+Format",
              children: "HTML Print Format"
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "// string validReceipt = '...';\r\nbool success = api.PrintReceipt(validReceipt);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Boolean"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), " if the receipt was sent to the printer, false otherwise"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "signature-result",
      children: "Signature Result"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "SignatureResult"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A signatureRequired event is invoked during a transaction when a signature verification is required, for example when a payment is done with a swiped or chip and signature card. The merchant is required to ask the cardholder for signature and approve (or decline) the transaction. signatureResult tells the payment terminal if the signature was approved by passing the value true in the method. To decline a signature event then false should be passed to the payment terminal. Note that this event is only required for an HiLite integration and can be safely ignored for a PAX or Telpo integration."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-10",
      children: "Parameters"
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
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pass true if merchant accepts customer signature"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "//Receiving a SignatureRequest from the SDK.\r\npublic void SignatureRequired(SignatureRequest signatureRequest, Device device)\r\n{\r\n    //If you accept the signature\r\n    api.SignatureResult(true);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-9",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#4",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "currentTransactionStatus"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#6",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "endOfTransaction"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked when the transaction is completed, it contains the transaction result and receipts."
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Boolean"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), " if the operation was successfully sent to the payment terminal"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tip-adjustment",
      children: "Tip Adjustment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "TipAdjustment"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A tip adjustment operation allows merchants to adjust the tip amount of a sale transaction before the batch of transactions is settled by the processor at the end of the day.\r\nNote: This functionality is only available for the restaurant industry in the United States and the processors currently supporting this functionality are TSYS and VANTIV. This functionality is limited to HiLite terminals."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-11",
      children: "Parameters"
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
              children: "originalTransactionID"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Id of the original sale transaction (EFTTransactionID)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "//Initiate a tip adjustment for $10.00\r\nTask<FinancialStatus> result = hapi.TipAdjustment(BigInteger.Parse(\"1000\"), \"2bc23910-c3b3-11e6-9e62-07b2a5f091ec\");\r\nFinancialStatus status = result.Result;\r\nif (status != FinancialStatus.FAILED)\r\n{\r\n\tif (status == FinancialStatus.AUTHORISED)\r\n\t{\r\n\t\t//Success!\r\n\t}\r\n\telse\r\n\t{\r\n\t\t//Declined\r\n\t}\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Result of the tip adjustment transaction, this is an asynchronous method that returns a task called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<FinancialStatus>"
      }), ", the possible values are :"]
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
            }), " (tip adjustment approved by the processor) ", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FinancialStatus.FAILED"
            }), " (system error or timeout) ", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FinancialStatus.DECLINED"
            }), " (tip adjustment declined by the processor)"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If two tip adjustments are sent for the same sale transaction, the second tip adjustment will override the first one. In case the transaction fails (not declined) we recommend that you prompt the user of the POS to retry the adjustment."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tokenize-card",
      children: "Tokenize Card"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "TokenizeCard"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns a card token (representing the card number). This functionality is not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-12",
      children: "Parameters"
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
              children: "map"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Map"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A map including ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#3",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "optional transaction parameters."
              })
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "//Initiates a card tokenization operation.\r\napi.TokenizeCard();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-10",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#4",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "currentTransactionStatus"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#5",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "signatureRequired"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked if the card issuer requires the cardholder to sign the transaction receipt."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#6",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "endOfTransaction"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked when the transaction is completed, it contains the transaction result and receipts."
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#OperationStartResult",
              children: "OperationStartResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object containing information about the financial operation started. Most specifically the transactionReference which must be saved on your end in case you do not get back the transaction result object at the end of the transaction. The transactionReference will allow you to query the Handpoint Gateway directly to know the outcome of the transaction in case it is not delivered as planned by the terminal at the end of the transaction."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "stop-current-transaction",
      children: "Stop Current Transaction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "StopCurrentTransaction"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This method attempts to cancel the current transaction on the payment terminal. Note that operations can only be cancelled before requests are sent to the gateway. There is a flag called ", (0,jsx_runtime.jsx)(_components.a, {
        href: "windowobjects#statusInfo",
        children: "cancelAllowed"
      }), " in the currentTransactionStatus event that can be used to check if the transaction is in a state allowing the transaction to be cancelled."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "this.Hapi.StopCurrentTransaction();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-11",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#4",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "currentTransactionStatus"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#6",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "endOfTransaction"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked when the transaction is completed, it contains the transaction result and receipts."
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Boolean"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), " if the operation was successfully sent to the payment terminal"]
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
            children: "Amount of funds to be pre-authorized - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#1",
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
              children: "map"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Map"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A map including ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#3",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "optional transaction parameters."
              })
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
        className: "language-csharp",
        children: "// Basic\r\nthis.Hapi.PreAuthorization(new BigInteger(\"1000\"), Currency.EUR);\r\n\r\n// With options\r\nDictionary map = new Dictionary();\r\nmap.Add(XmlTag.CustomerReference.Tag(), \"YourCustomerReference\");\r\nmap.Add(XmlTag.Metadata1.Tag(), \"Data 1\");\r\n\r\nthis.Hapi.PreAuthorization(new BigInteger(\"1000\"), Currency.EUR, map);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-12",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#4",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "currentTransactionStatus"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#5",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "signatureRequired"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked if the card issuer requires the cardholder to sign the transaction receipt."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#6",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "endOfTransaction"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked when the transaction is completed, it contains the transaction result and receipts."
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
                href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#OperationStartResult",
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
            children: "Amount of funds to be pre-authorized - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#1",
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
              children: "map"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Map"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A map including ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#3",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "optional transaction parameters."
              })
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
        className: "language-csharp",
        children: "// Basic PreAuth Increase\r\nthis.Hapi.PreAuthorizationIncrease(new BigInteger(\"1000\"), Currency.EUR, \"\"00000000-0000-0000-0000-000000000000\");\r\n\r\n// With options\r\nDictionary map = new Dictionary();\r\nmap.Add(XmlTag.CustomerReference.Tag(), \"YourCustomerReference\");\r\nmap.Add(XmlTag.Metadata1.Tag(), \"Data 1\");\r\n\r\nthis.Hapi.PreAuthorizationIncrease(new BigInteger(\"1000\"), Currency.EUR, \"00000000-0000-0000-0000-000000000000\", map);\r\n\r\n// Basic PreAuth Decrease\r\nthis.Hapi.PreAuthorizationIncrease(new BigInteger(\"-1000\"), Currency.EUR, \"\"00000000-0000-0000-0000-000000000000\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-13",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#4",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "currentTransactionStatus"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#5",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "signatureRequired"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked if the card issuer requires the cardholder to sign the transaction receipt."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#6",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "endOfTransaction"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked when the transaction is completed, it contains the transaction result and receipts."
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
                href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#OperationStartResult",
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
            children: "Amount of funds to be pre-authorized - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#1",
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
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "// Basic\r\nthis.Hapi.PreAuthorizationCapture(new BigInteger(\"1000\"), Currency.EUR, \"00000000-0000-0000-0000-000000000000\");\r\n\r\n// With options\r\nDictionary map = new Dictionary();\r\nmap.Add(XmlTag.CustomerReference.Tag(), \"YourCustomerReference\");\r\nmap.Add(XmlTag.Metadata1.Tag(), \"Data 1\");\r\n\r\nthis.Hapi.PreAuthorizationCapture(new BigInteger(\"1000\"), Currency.EUR, \"00000000-0000-0000-0000-000000000000\", map);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-14",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#4",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "currentTransactionStatus"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#5",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "signatureRequired"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked if the card issuer requires the cardholder to sign the transaction receipt."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#6",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "endOfTransaction"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked when the transaction is completed, it contains the transaction result and receipts."
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
                href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#OperationStartResult",
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
        children: "will released the whole pre-authorized amount"
      }), ", for example when renting a car, the pre-auth reversal allows the merchant to release the funds if the car was not damaged. For partial releases, please check the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/Windows%20SDK%204.3.1/windowstransactions#pre-auth-increasedecrease",
        children: "Pre-Auth Increase/Decrease"
      }), " operation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A Pre-Auth reversal can be used to reverse a capture operation as well. A capture reversal transaction ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "will release all the funds withheld"
      }), ". Reversing a capture operation can only be done before the funds are automatically settled at night, please note that not all acquirers support reversal of captured transactions. If a capture reversal is attempted after the funds have been moved, the operation will receive a decline.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "When the capture is reverted it returns to the previous state (", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#25",
        children: "CAPTURED"
      }), " -> ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#25",
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
            children: "Transaction id of the original pre-auth or capture GUID transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "map"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Map"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A map including ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#3",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "optional transaction parameters."
              })
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
        className: "language-csharp",
        children: "// Basic\r\nthis.Hapi.PreAuthorizationReversal(\"00000000-0000-0000-0000-000000000000\");\r\n\r\n// With options\r\nDictionary map = new Dictionary();\r\nmap.Add(XmlTag.CustomerReference.Tag(), \"YourCustomerReference\");\r\nmap.Add(XmlTag.Metadata1.Tag(), \"Data 1\");\r\n\r\nthis.Hapi.PreAuthorizationReversal(\"00000000-0000-0000-0000-000000000000\", map);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-15",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#4",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "currentTransactionStatus"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event gets statuses from the payment terminal during the transaction, for example: 'waiting for card' or 'waiting for PIN entry'."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#5",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "signatureRequired"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked if the card issuer requires the cardholder to sign the transaction receipt."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%204.3.1/windowsevents#6",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "endOfTransaction"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This event is invoked when the transaction is completed, it contains the transaction result and receipts."
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
                href: "/legacy/windows/Windows%20SDK%204.3.1/windowobjects#OperationStartResult",
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