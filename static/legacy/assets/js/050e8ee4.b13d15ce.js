"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[33037],{

/***/ 61911
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_javascript_versioned_docs_version_java_script_sdk_6_3_0_javascripttransactiontypes_md_050_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/javascript/site-javascript-versioned-docs-version-java-script-sdk-6-3-0-javascripttransactiontypes-md-050.json
const site_javascript_versioned_docs_version_java_script_sdk_6_3_0_javascripttransactiontypes_md_050_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"javascripttransactiontypes","title":"Transaction Types","description":"Sale","source":"@site/javascript_versioned_docs/version-JavaScript SDK 6.3.0/javascripttransactiontypes.md","sourceDirName":".","slug":"/javascripttransactiontypes","permalink":"/legacy/javascript/JavaScript SDK 6.3.0/javascripttransactiontypes","draft":false,"unlisted":false,"tags":[],"version":"JavaScript SDK 6.3.0","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"id":"javascripttransactiontypes"},"sidebar":"tutorialSidebar","previous":{"title":"Handpoint Sandbox","permalink":"/legacy/javascript/JavaScript SDK 6.3.0/javascriptsandbox"},"next":{"title":"Terminal Management","permalink":"/legacy/javascript/JavaScript SDK 6.3.0/javascriptterminalmanagement"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./javascript_versioned_docs/version-JavaScript SDK 6.3.0/javascripttransactiontypes.md


const frontMatter = {
	sidebar_position: 6,
	id: 'javascripttransactiontypes'
};
const contentTitle = 'Transaction Types';

const assets = {

};



const toc = [{
  "value": "Sale",
  "id": "4",
  "level": 2
}, {
  "value": "Sale And Tokenization",
  "id": "5",
  "level": 2
}, {
  "value": "Transaction Recovery",
  "id": "6",
  "level": 2
}, {
  "value": "Sale Reversal",
  "id": "8",
  "level": 2
}, {
  "value": "Refund",
  "id": "9",
  "level": 2
}, {
  "value": "Refund Reversal",
  "id": "10",
  "level": 2
}, {
  "value": "MoTo Sale",
  "id": "moto-sale",
  "level": 2
}, {
  "value": "MoTo Refund",
  "id": "moto-refund",
  "level": 2
}, {
  "value": "MoTo Reversal",
  "id": "moto-reversal",
  "level": 2
}, {
  "value": "Tokenize Card",
  "id": "11",
  "level": 2
}, {
  "value": "Card Pan",
  "id": "12",
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
      id: "4",
      children: "Sale"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Sale"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A sale initiates a transaction with the payment terminal. In its simplest form, you only have to pass the amount and currency as parameters."
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
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "integer"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of the transaction - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "saleOptions"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#23",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "SaleOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store the customization options for a sale. This object can be empty if no options are required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "callback_function "
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback function to subscribe to the transaction status updates."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var saleOptions = {\r\n    customerReference: \"MyCustomReference\",\r\n    tipConfiguration: {\r\n        baseAmount: \"100\",\r\n        skipEnabled: true,\r\n        enterAmountEnabled: true,\r\n        tipPercentages: [\r\n            1,\r\n            2,\r\n            3,\r\n            5\r\n        ]\r\n    },\r\n    bypassOptions: {\r\n        signatureBypass: true,\r\n        pinBypass: true\r\n    },\r\n    merchantAuth: [\r\n        {\r\n            acquirer: \"ACQUIRER\",\r\n            mid: \"11111\",\r\n            tid: \"22222\",\r\n            mcc: \"33333\"\r\n        }\r\n    ],\r\n    metadata: {\r\n        metadata1: \"data1\",\r\n        metadata2: \"data2\",\r\n        metadata3: \"data3\",\r\n        metadata4: \"data4\",\r\n        metadata5: \"data5\"\r\n    }  \r\n}\r\n\r\nHandpoint.sale('1000', 'USD', saleOptions, function (stat) {\r\n  console.log('Transaction status received -> '+ stat.message) \r\n});\n"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sale Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#18",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Transaction Result Object"
              })
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5",
      children: "Sale And Tokenization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "SaleAndTokenization"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A sale operation which also returns a card token. This functionality is not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice."
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
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "integer"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of the transaction - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "saleOptions"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#23",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "SaleOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store the customization options for a sale. This object can be empty if no options are required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "callback_function"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback function to subscribe to the transaction status updates."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var saleOptions = {\r\n    customerReference: \"MyCustomReference\",\r\n    tipConfiguration: {\r\n        baseAmount: \"100\",\r\n        skipEnabled: true,\r\n        enterAmountEnabled: true,\r\n        tipPercentages: [\r\n            1,\r\n            2,\r\n            3,\r\n            5\r\n        ]\r\n    },\r\n    bypassOptions: {\r\n        signatureBypass: true,\r\n        pinBypass: true\r\n    },\r\n    merchantAuth: [\r\n        {\r\n            acquirer: \"ACQUIRER\",\r\n            mid: \"11111\",\r\n            tid: \"22222\",\r\n            mcc: \"33333\"\r\n        }\r\n    ],\r\n}\r\n\r\nHandpoint.saleAndTokenization('1000', 'USD', saleOptions, CallbackFunction(stat){...});\n"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sale and Tokenization Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#18",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Transaction Result Object"
              })
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6",
      children: "Transaction Recovery"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "StartRecovery"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The terminal has a transaction recovery loop to automatically send back the pending ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#18",
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Transaction Result"
        })
      }), " to the web application in case it becomes unreachable (network issue or other)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the web application is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc…)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The recovery loop is reinitialized every time the Handpoint application is restarted on the payment terminal or the startRecovery method is triggered.The ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#18",
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Transaction Result"
        })
      }), " received through the transaction recovery loop will have the recoveredTransaction field set to true."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Important information: The web application must be successfully connected to a terminal in order to receive the pending transactions."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "//Start recovery of pending transactions \r\nHandpoint.startRecovery();\n"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Promise Successful Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The event has been sent to the payment terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Promise Error Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The event was not sent to the payment terminal because it is unreachable."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8",
      children: "Sale Reversal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "SaleReversal"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A sale Reversal, also called sale VOID allows the merchant to reverse a previous sale operation. This operation reverts (if possible) a specific sale identified with a transaction id. In its simplest form, you only have to pass the amount, currency and originalTransactionID as parameters"
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
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "integer"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of the transaction - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
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
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The transaction id of the original sale authorization."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "merchantAuthOptions"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#25",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MerchantAuthOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store the customization options for a saleReversal operation. This object can be empty if no options are required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "callback_function"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback function to subscribe to the transaction status updates."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var saleReversalOptions = {\r\n    customerReference: \"MyCustomReference\",\r\n    merchantAuth: [\r\n        {\r\n            acquirer: \"ACQUIRER\",\r\n            mid: \"11111\",\r\n            tid: \"22222\",\r\n            mcc: \"33333\"\r\n        }\r\n    ],\r\n}\r\n\r\nHandpoint.saleReversal('1000', 'USD', 'OriginalSaleGUID', saleReversalOptions, CallbackFunction(stat){...});\n"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sale Reversal Response"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#18",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Transaction Result Object"
              })
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9",
      children: "Refund"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Refund"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A refund initiates a transaction with the payment terminal. This operation moves funds from the merchant account to the cardholder´s credit card. In its simplest form, you only have to pass the amount and currency as parameters. For Interac (Canadian Debit Network), refunds can only be processed until Interac closes the batch of transactions at night."
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
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "integer"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of the transaction - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The transaction id of the original sale authorization."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "refundOptions"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#24",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "RefundOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store the customization options for a refund. This object can be empty if no options are required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "callback_function"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback function to subscribe to the transaction status updates."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var refundOptions = {\r\n    customerReference: \"MyCustomReference\",\r\n    bypassOptions: {\r\n        signatureBypass: true,\r\n        pinBypass: true\r\n    },\r\n    merchantAuth: [\r\n        {\r\n            acquirer: \"ACQUIRER\",\r\n            mid: \"11111\",\r\n            tid: \"22222\",\r\n            mcc: \"33333\"\r\n        }\r\n    ],\r\n}\r\n\r\nHandpoint.refund('1000', 'USD', undefined ,refundOptions, CallbackFunction(stat){...});\r\n\r\n// Linked Refund\r\nHandpoint.refund('1000', 'USD', 'OriginalSaleGUID' ,refundOptions, CallbackFunction(stat){...});\n"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Refund Response"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#18",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Transaction Result Object"
              })
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10",
      children: "Refund Reversal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "RefundReversal"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Refund Reversal, also called Refund VOID, allows the merchant to reverse a previous refund operation. This operation reverts (if possible) a specific refund identified with a transaction id. In its simplest form, you only have to pass the amount, currency and originalTransactionID as parameters."
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
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "integer"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of the transaction - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
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
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The transaction id of the original refund authorization."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "merchantAuthOptions"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#25",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MerchantAuthOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store the customization options for a refundReversal operation. This object can be empty if no options are required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "callback_function"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback function to subscribe to the transaction status updates."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var refundReversalOptions = {\r\n    customerReference: \"MyCustomReference\",\r\n    merchantAuth: [\r\n        {\r\n            acquirer: \"ACQUIRER\",\r\n            mid: \"11111\",\r\n            tid: \"22222\",\r\n            mcc: \"33333\"\r\n        }\r\n    ],\r\n}\r\n\r\nHandpoint.refundReversal('1000', 'USD', 'OriginalRefundGUID', refundReversalOptions, CallbackFunction(stat){...});\n"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Refund Reversal Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#18",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Transaction Result Object"
              })
            })
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
      children: "Mail Order /Telephone Order (MOTO) sale. MOTO is a type of card-not-present (CNP) transaction in which services are paid and delivered via telephone, mail, fax, or internet communication. Triggering this function will prompt a card input form on the terminal for the merchant to enter the card number, expiry date and CVV of the card to be charged. MOTO has become synonymous with any financial transaction where the entity taking payment does not physically see the card used to make the purchase."
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
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "integer"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of the transaction - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "options"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#26",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Options"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store the customization options for a MOTO sale. This object can be empty if no options are required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "callback_function"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback function to subscribe to the transaction status updates."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var saleOptions = { \r\n        customerReference: \"MyCustomReference\",\r\n    }\r\n\r\nHandpoint.moToSale('1000', 'USD', saleOptions, function (stat) {\r\n  console.log('Transaction Status received -> '+ stat.message) \r\n});\n"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sale Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#18",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Transaction Result Object"
              })
            })
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
      children: "A MOTO refund operation moves funds from the merchant account to the cardholder´s credit card. In it's simplest form you only have to pass the amount and currency but it also accepts the original transaction id. Triggering this function will prompt a card input form on the terminal for the merchant to enter the card number, expiry date and CVV of the card to be charged. MOTO Refund is a type of card-not-present (CNP) transaction in which services are refunded via telephone, mail, fax, or internet communication. MOTO has become synonymous with any financial transaction where the entity taking payment does not physically see the card used to make the purchase or refund."
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
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "integer"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount of the transaction - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionID"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If this field is populated, it links the refund with a previous sale and effectively limits the maximum amount refunded to that of the original transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "options"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#26",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Options"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store the customization options for a MOTO refund. This object can be empty if no options are required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "callback_function"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback function to subscribe to the transaction status updates."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var refundOptions = {\r\n    customerReference: \"MyCustomReference\"\r\n}\r\n\r\nHandpoint.moToRefund('1000', 'USD', undefined ,refundOptions, CallbackFunction(stat){...});\r\n\r\n// Linked Refund\r\nHandpoint.moToRefund('1000', 'USD', '00000000-0000-0000-0000-000000000000' ,refundOptions, CallbackFunction(stat){...});\n"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Refund Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#18",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Transaction Result Object"
              })
            })
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
      children: "A MOTO reversal, also called VOID allows the user to reverse a previous MOTO sale/refund operation. This operation reverts (if possible) a specific operation identified with a transaction id. Note that transactions can only be reversed within a 24 hours timeframe or until the daily batch of transactions has been sent for submission. MOTO Reversal is a type of card-not-present (CNP) transaction used to reverse a previous MOTO Sale or MOTO Refund."
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
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The transaction id of the original sale or refund authorization."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "options"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#26",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Options"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store the customization options for a MOTO reversal operation. This object can be empty if no options are required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "callback_function"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback function to subscribe to the transaction status updates."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var moToReversalOptions = {\r\n    customerReference: \"MyCustomReference\"\r\n}\r\n\r\nHandpoint.moToReversal('00000000-0000-0000-0000-000000000000', moToReversalOptions, CallbackFunction(stat){...});\n"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sale Reversal Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#18",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Transaction Result Object"
              })
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11",
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
              children: "options"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#26",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Options"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store the customization options for a tokenizeCard operation. This object can be empty if no options are required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "callback_function"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback function to subscribe to the transaction status updates."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var options = {\r\n    customerReference: \"MyCustomReference\",\r\n}\r\n\r\nHandpoint.tokenizeCard(options, CallbackFunction(stat){...});\n"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tokenize Card Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#18",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Transaction Result Object"
              })
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12",
      children: "Card Pan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "CardPan"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "options"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#26",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Options"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store the customization options for a cardPan operation. This object can be empty if no options are required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "callback_function"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback function to subscribe to the transaction status updates."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var options = {\r\n    customerReference: \"MyCustomReference\",\r\n}\r\n\r\nHandpoint.tokenizeCard(options, CallbackFunction(stat){...});\n"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Card Pan Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.3.0/javascriptobjects#18",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Transaction Result Object"
              })
            })
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