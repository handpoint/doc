"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[48330],{

/***/ 73723
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_javascript_versioned_docs_version_java_script_sdk_6_0_1_javascriptmethods_md_4a3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/javascript/site-javascript-versioned-docs-version-java-script-sdk-6-0-1-javascriptmethods-md-4a3.json
const site_javascript_versioned_docs_version_java_script_sdk_6_0_1_javascriptmethods_md_4a3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"javascriptmethods","title":"Methods","description":"Initialize","source":"@site/javascript_versioned_docs/version-JavaScript SDK 6.0.1/javascriptmethods.md","sourceDirName":".","slug":"/javascriptmethods","permalink":"/legacy/javascript/JavaScript SDK 6.0.1/javascriptmethods","draft":false,"unlisted":false,"tags":[],"version":"JavaScript SDK 6.0.1","sidebarPosition":9,"frontMatter":{"sidebar_position":9,"id":"javascriptmethods"},"sidebar":"tutorialSidebar","previous":{"title":"Integration Tips","permalink":"/legacy/javascript/JavaScript SDK 6.0.1/javascriptintegrationtips"},"next":{"title":"Objects","permalink":"/legacy/javascript/JavaScript SDK 6.0.1/javascriptobjects"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./javascript_versioned_docs/version-JavaScript SDK 6.0.1/javascriptmethods.md


const frontMatter = {
	sidebar_position: 9,
	id: 'javascriptmethods'
};
const contentTitle = 'Methods';

const assets = {

};



const toc = [{
  "value": "Initialize",
  "id": "1",
  "level": 2
}, {
  "value": "Connect",
  "id": "2",
  "level": 2
}, {
  "value": "Disconnect",
  "id": "3",
  "level": 2
}, {
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
  "value": "Stop Listening Device",
  "id": "7",
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
  "value": "Tokenize Card",
  "id": "11",
  "level": 2
}, {
  "value": "Card Pan",
  "id": "12",
  "level": 2
}, {
  "value": "Stop Current Transaction",
  "id": "13",
  "level": 2
}, {
  "value": "Print Receipt",
  "id": "14",
  "level": 2
}, {
  "value": "Ping Device",
  "id": "15",
  "level": 2
}, {
  "value": "Update",
  "id": "16",
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
        id: "methods",
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1",
      children: "Initialize"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initialize"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initializes the JavaScript SDK and returns the list of payment terminals associated with the account."
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
              children: "API_key"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Actor API key."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dev_or_prod_environment"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value that defines if the actor is targeting a development (true -> cloud.handpoint.io) or production (false -> cloud.handpoint.com) environment."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "recovery_EoT_callback"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "promise"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise that collects the pending transaction results that couldn't be delivered to the POS during the execution of the transaction, for example if the network connection became unstable. The callback input parameter is a TransactionResult object. When the promise is resolved the JS SDK will send the ACK to the payment terminal to mark the result as recovered and the device will delete it from its storage. If the promise is rejected, the device will resend the TransactionResult until the promise is correctly resolved and the ACK sent to the reader. The sdk has a 5 second window for the promise to be resolved"
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
        children: "Handpoint.init('API KEY', true, (pendingEoT) => {\r\n console.log('Recovered Transaction -> ' + JSON.stringify(pendingEoT);\r\n return handleTransactionResultPromise(pendingEoT);\r\n})\r\n \r\n// For simple or sync operations you may just return a resolved Promise. \r\nHandpoint.init('API KEY', true, (pendingEoT) => {\r\n console.log('Recovered Transaction -> ' + JSON.stringify(pendingEoT);\r\n return Promise.resolve();\r\n})\n"
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
              children: "Devices"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List of Device objects"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2",
      children: "Connect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Connect"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Connect the JavaScript SDK to a payment terminal."
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
              children: "device_name"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target payment terminal to connect to. The device_name is returned in the Device object of the init call."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "Handpoint.connect('1234263-TYPE1');\n"
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
              children: "Connection Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "200"
            }), " code for OK ", (0,jsx_runtime.jsx)("br", {}), " - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "403"
            }), " code for NOK"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3",
      children: "Disconnect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Disconnect"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Connect the JavaScript SDK to a payment terminal."
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
              children: "device_name"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target payment terminal to disconnect from. The device_name is returned in the Device object of the init call."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "Handpoint.connect('1234263-TYPE1');\n"
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
              children: "Connection Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Disconnected"
            }), " message for OK ", (0,jsx_runtime.jsx)("br", {}), " - ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ERROR disconnecting"
            }), " message for NOK"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4",
      children: "Sale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sale"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A sale initiates a payment operation to the card reader. In its simplest form, you only have to pass the amount and currency as parameters."
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
            children: "Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
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
            children: "Currency of the charge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "saleOptions"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.0.1/javascriptobjects#23",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "SaleOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store all the customisation options for a sale. This object can be empty if no options are required."
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
        children: "var [*SaleOptions*](#23)  = {\r\n    customerReference: \"MyCustomReference\",\r\n    tipConfiguration: {\r\n        baseAmount: \"100\",\r\n        skipEnabled: true,\r\n        enterAmountEnabled: true,\r\n        tipPercentages: [\r\n            1,\r\n            2,\r\n            3,\r\n            5\r\n        ]\r\n    },\r\n    bypassOptions: {\r\n        signatureBypass: true,\r\n        pinBypass: true\r\n    },\r\n    merchantAuth: [\r\n        {\r\n            acquirer: \"ACQUIRER\",\r\n            mid: \"11111\",\r\n            tid: \"22222\",\r\n            mcc: \"33333\"\r\n        }\r\n    ],\r\n}\r\n\r\nHandpoint.sale('1000', 'USD', [*SaleOptions*](#23) , function (stat) {\r\n  console.log('Transaction Status received -> '+ stat.message) \r\n});\n"
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
            children: "A Financial Response object"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5",
      children: "Sale And Tokenization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SaleAndTokenization"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A sale which both authorizes the transaction and returns a token representing the card. This feature is not available for all acquirers. Please check with Handpoint to know if tokenization is supported for your acquirer of choice."
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
            children: "Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
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
            children: "Currency of the charge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "saleOptions"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.0.1/javascriptobjects#23",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "SaleOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store all the customisation options for a sale. This object can be empty if no options are required."
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
        children: "var [*SaleOptions*](#23)  = {\r\n    customerReference: \"MyCustomReference\",\r\n    tipConfiguration: {\r\n        baseAmount: \"100\",\r\n        skipEnabled: true,\r\n        enterAmountEnabled: true,\r\n        tipPercentages: [\r\n            1,\r\n            2,\r\n            3,\r\n            5\r\n        ]\r\n    },\r\n    bypassOptions: {\r\n        signatureBypass: true,\r\n        pinBypass: true\r\n    },\r\n    merchantAuth: [\r\n        {\r\n            acquirer: \"ACQUIRER\",\r\n            mid: \"11111\",\r\n            tid: \"22222\",\r\n            mcc: \"33333\"\r\n        }\r\n    ],\r\n}\r\n\r\nHandpoint.saleAndTokenization('1000', 'USD', [*SaleOptions*](#23) , CallbackFunction(stat){...});\n"
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
            children: "A Financial Response object"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6",
      children: "Transaction Recovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "StartRecovery"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The terminal has a transaction recovery loop to automatically send back the pending ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/javascript/JavaScript%20SDK%206.0.1/javascriptobjects#18",
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Transaction Result"
        })
      }), " to the Point of sale in case it becomes unreachable (network issue or other)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the point of sale is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc…)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The recovery loop is reinitialized every time the Handpoint application is restarted or the startRecovery method is triggered.The ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/javascript/JavaScript%20SDK%206.0.1/javascriptobjects#18",
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Transaction Result"
        })
      }), " received through the transaction recovery loop will have the recoveredTransaction field set to true"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Important information: The point of sale must be successfully connected to a terminal in order to receive the pending transactions."
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
            children: "The event has been sent to the device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Promise Error Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The event was not sent to the terminal because it is unreachable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7",
      children: "Stop Listening Device"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "StopListeningDevice"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This operation interrupts the connection, stops listening to transaction events and resets the connection with the device"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "//Stop Listening to Events \r\nHandpoint.stopListeningDevice();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8",
      children: "Sale Reversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SaleReversal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A sale Reversal, also called sale VOID allows the user to reverse a previous sale operation. This operation reverts (if possible) a specific sale identified with a transaction id. In its simplest form, you only have to pass the amount, currency and originalTransactionID as parameters"
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
            children: "Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
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
            children: "Currency of the charge"
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
            children: "The transaction id of the original sale authorization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "merchantAuthOptions"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.0.1/javascriptobjects#25",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MerchantAuthOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store all the customisation options for a saleReversal. This object can be empty if no options are required."
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A Financial Response object"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9",
      children: "Refund"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Refund"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A refund initiates a refund operation to the payment terminal. This operation moves funds from the merchant account to the cardholder´s credit card. In its simplest form, you only have to pass the amount and currency as parameters. For Interac (Canadian Debit Network), refunds can only be processed until Interac closes the batch of transactions at night."
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
            children: "Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
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
            children: "Currency of the charge"
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
            children: "The transaction id of the original sale authorization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "refundOptions"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.0.1/javascriptobjects#24",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "RefundOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store all the customisation options for a saleReversal. This object can be empty if no options are required."
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A Financial Response object"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10",
      children: "Refund Reversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RefundReversal"
      })
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
            children: "Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)."
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
            children: "Currency of the charge"
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
            children: "The transaction id of the original sale authorization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "merchantAuthOptions"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.0.1/javascriptobjects#25",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "MerchantAuthOptions"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store all the customisation options for a refundReversal. This object can be empty if no options are required."
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
              children: "Refund Reversal Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A Financial Response object"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11",
      children: "Tokenize Card"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TokenizeCard"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns a token for the card. This feature is not available for all acquirers. Please check with Handpoint to know if tokenization is supported for your acquirer of choice"
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
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.0.1/javascriptobjects#26",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Options"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store all the customisation options for a tokenizeCard. This object can be empty if no options are required."
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
            children: "A Financial Response object"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12",
      children: "Card Pan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CardPan"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "options"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.0.1/javascriptobjects#26",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Options"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object to store all the customisation options for a tokenizeCard. This object can be empty if no options are required."
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
            children: "A Financial Response object"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13",
      children: "Stop Current Transaction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "StopCurrentTransaction"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Operation used to stop the current transaction. The transaction can only be stopped at specific stages of a payment processing, for example a transaction can not be stopped when the card is being read but can be stopped when waiting for the cardholder to initially insert a card."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "Handpoint.stopCurrentTransaction();\r\n\n"
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{finStatus: CANCELLED, statusMessage: 'Operation stopped'}"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Promise Error Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{finStatus: FAILED, errorMessage: 'Unable to stop current transaction'}"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Promise Error Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ finStatus: FAILED, errorMessage: 'No response received from the card reader' }"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14",
      children: "Print Receipt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PrintReceipt"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This method sends the merchant or customer receipt to the terminal for printing. The format of the HTML data, passed to the method or stored in the url, must follow this format: Html Print Format."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "Handpoint.printReceipt('https://location_of_receipt_container.com/receipt_location', CallbackFunction(stat){...});\r\n\r\nvar htmlReceipt = '[...] HTML receipt [...]'\r\n\r\nHandpoint.printReceipt(htmlReceipt, CallbackFunction(stat){...});\n"
      })
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
              children: "receipt"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTML receipt or url to locate the receipt, it can be found in the response of a financial operation, in the fields merchantReceipt or customerReceipt"
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
              children: "Print Receipt Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A specific Status object that describes the printing action (PrinterOutOfPaper, ErrorConnectingToPrinter or ReceiptPrintSuccess)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15",
      children: "Ping Device"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PingDevice"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This operation will ping the terminal to confirm if it is online. The promise is correctly resolved if the device is online and successfully answers to the ping"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "Handpoint.pingDevice(CallbackFunction(stat){...});\n"
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
              children: "Device Status"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/javascript/JavaScript%20SDK%206.0.1/javascriptobjects#27",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device Status"
              })
            }), " object"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16",
      children: "Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Update"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Triggers a terminal software and config update"
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
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "Handpoint.update(CallbackFunction(stat){...});\n"
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
              children: "Update Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A Financial Response object"
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