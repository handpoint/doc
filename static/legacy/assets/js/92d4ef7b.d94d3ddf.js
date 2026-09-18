"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[96600],{

/***/ 84448
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_restapi_restendpoints_md_92d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/restapi/site-restapi-restendpoints-md-92d.json
const site_restapi_restendpoints_md_92d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"restendpoints","title":"REST API Endpoints","description":"List Devices","source":"@site/restapi/restendpoints.md","sourceDirName":".","slug":"/restendpoints","permalink":"/legacy/restapi/next/restendpoints","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"id":"restendpoints"},"sidebar":"tutorialSidebar","previous":{"title":"Handpoint Sandbox","permalink":"/legacy/restapi/next/restsandbox"},"next":{"title":"Objects","permalink":"/legacy/restapi/next/restobjects"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 1 modules
var Tabs = __webpack_require__(4865);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(19365);
;// ./restapi/restendpoints.md


const frontMatter = {
	sidebar_position: 6,
	id: 'restendpoints'
};
const contentTitle = 'REST API Endpoints';

const assets = {

};





const toc = [{
  "value": "List Devices",
  "id": "list-devices",
  "level": 2
}, {
  "value": "Terminal Operations",
  "id": "terminal-operations",
  "level": 2
}, {
  "value": "Operation Requests",
  "id": "operation-requests",
  "level": 3
}, {
  "value": "Transaction Result Recovery",
  "id": "transaction-result-recovery",
  "level": 2
}, {
  "value": "Fetch Transaction Result",
  "id": "fetch-transaction-result",
  "level": 3
}, {
  "value": "Retrieve Transaction Status",
  "id": "retrieve-transaction-status",
  "level": 3
}, {
  "value": "Device Control Commands",
  "id": "device-control-commands",
  "level": 2
}, {
  "value": "Set Unattended Mode",
  "id": "set-unattended-mode",
  "level": 3
}, {
  "value": "Set Locale",
  "id": "set-locale",
  "level": 3
}, {
  "value": "Set Password Protected",
  "id": "set-password-protected",
  "level": 3
}, {
  "value": "Reboot",
  "id": "reboot",
  "level": 3
}, {
  "value": "Set Screen Brightness",
  "id": "set-screen-brightness",
  "level": 3
}, {
  "value": "Set Reboot Time",
  "id": "set-reboot-time",
  "level": 3
}, {
  "value": "Endpoints Not Requiring a Payment Terminal",
  "id": "endpoints-not-requiring-a-payment-terminal",
  "level": 2
}, {
  "value": "Tip Adjustment",
  "id": "tip-adjustment",
  "level": 3
}, {
  "value": "Get Card Token",
  "id": "transactionsguidtoken",
  "level": 3
}, {
  "value": "Reversal",
  "id": "reversal",
  "level": 3
}, {
  "value": "Preauthorization Increase / Decrease",
  "id": "preauthorization-increase--decrease",
  "level": 3
}, {
  "value": "Parameters",
  "id": "parameters",
  "level": 4
}, {
  "value": "Returns",
  "id": "returns",
  "level": 4
}, {
  "value": "Preauthorization Capture",
  "id": "preauthorization-capture",
  "level": 3
}, {
  "value": "Parameters",
  "id": "parameters-1",
  "level": 4
}, {
  "value": "Returns",
  "id": "returns-1",
  "level": 4
}, {
  "value": "<strong>MOTO Operations</strong>",
  "id": "moto-operations",
  "level": 2
}, {
  "value": "MOTO Sale",
  "id": "moto-sale",
  "level": 3
}, {
  "value": "Parameters",
  "id": "parameters-2",
  "level": 4
}, {
  "value": "Returns",
  "id": "returns-2",
  "level": 4
}, {
  "value": "Code Example",
  "id": "code-example",
  "level": 4
}, {
  "value": "MOTO Refund",
  "id": "moto-refund",
  "level": 3
}, {
  "value": "Parameters",
  "id": "parameters-3",
  "level": 4
}, {
  "value": "Returns",
  "id": "returns-3",
  "level": 4
}, {
  "value": "Code Example",
  "id": "code-example-1",
  "level": 4
}, {
  "value": "MOTO Reversal",
  "id": "moto-reversal",
  "level": 3
}, {
  "value": "Parameters",
  "id": "parameters-4",
  "level": 4
}, {
  "value": "Returns",
  "id": "returns-4",
  "level": 4
}, {
  "value": "Code Example",
  "id": "code-example-2",
  "level": 4
}, {
  "value": "Batch Operations <span class=\"badge badge--warning\">Beta</span>",
  "id": "batch-operations",
  "level": 2
}, {
  "value": "Close Batch",
  "id": "close-batch",
  "level": 3
}, {
  "value": "Parameters",
  "id": "parameters-5",
  "level": 4
}, {
  "value": "Returns",
  "id": "returns-5",
  "level": 4
}, {
  "value": "Batch Summary",
  "id": "batch-summary",
  "level": 3
}, {
  "value": "Parameters",
  "id": "parameters-6",
  "level": 4
}, {
  "value": "Returns",
  "id": "returns-6",
  "level": 4
}, {
  "value": "Batch Detail",
  "id": "batch-detail",
  "level": 3
}, {
  "value": "Parameters",
  "id": "parameters-7",
  "level": 4
}, {
  "value": "Returns",
  "id": "returns-7",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "rest-api-endpoints",
        children: "REST API Endpoints"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "list-devices",
      children: "List Devices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GET endpoint (previous ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "/initialize"
      }), " endpoint) that returns the list of payment terminals (physical devices + Virtual Terminal if MOTO is enabled) associated with the merchant account. Use this to display available terminals to the merchant or to retrieve device information needed for other operations. A merchant can have multiple API keys, all granting the same access to the merchant's devices, requests auths and Analytics credentials too. API keys are merchant-specific and are not shared between merchants."]
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
              children: "Header: ApiKeyCloud"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "    ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Api key used to authenticate the merchant. (merchant-specific and are not shared between merchants)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.th, {
            children: "Response"
          })
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsxs)(_components.td, {
            children: ["List of ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/next/restobjects#deviceObject",
              children: "Device"
            }), " objects."]
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsx)(Tabs/* default */.A, {
      children: (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "request",
        label: "Request",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X GET \\\r\n -H \"ApiKeyCLoud: MeRcHaNt-ApIkEy\" \\\r\n \"https://cloud.handpoint.com/devices\" (production)\r\n \"https://cloud.handpoint.io/devices\" (development)\n"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsx)(Tabs/* default */.A, {
      children: (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "200",
        label: "200 OK",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "[\r\n  {\r\n    \"merchant_id_alpha\": \"merchantID\",\r\n    \"serial_number\": \"1850025030\",\r\n    \"ssk\": \"A1B2C3D4E5F60718293A4B5C6D7E8F901A2B3C4D5E6F7890ABCDEF0123456789\",\r\n    \"terminal_type\": \"PAXA920PRO\"\r\n  }\r\n]\n"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Both serial_number and terminal_type values will be a required combination for requests sent to the terminal."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "terminal-operations",
      children: "Terminal Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following endpoints require a direct request to a physical payment terminal."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "operation-requests",
      children: "Operation Requests"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/transactions"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["POST endpoint used to send a financial operation to the payment terminal. The transaction type to be executed (sale, refund etc.) is defined in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operation"
      }), " field of the request body."]
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
              children: "Header: ApiKeyCloud"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Api key used to authenticate the merchant. (UNIQUE per Merchant)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Request Body: Transaction Request"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/next/restobjects#transactionRequest",
              children: "TransactionRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object containing the transaction request information."
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
            children: "Response"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Response Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transaction Accepted"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The response code 202 is received from the API if the transaction was successfully sent to the payment terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BadRequest DeviceIsBusy Error"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The response code 400 with error 1001 is received from the API if the payment terminal is already processing a transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BadRequest DeviceNotResponding Error"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The response code 400 with error 1002 is received from the API if the payment terminal is offline."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BadRequest CancelOperationNotAllowed Error"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The response code 400 with error 1003 is received from the API if the stopCurrentTransaction operation cannot be executed. A transaction can only be cancelled at specific steps of the transaction, while waiting for the card to be inserted or on PIN screen."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BadRequest NoTransactionToCancel Error"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The response code 400 with error 1005 is received from the API if the stopCurrentTransaction operation is attempted but there is no transaction currently in progress to cancel."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Make sure that your transactionReference is unique per request, and change it for every new request attempt (even if the request contains the same values re-attempt). This will improve logs and could help troubleshooting."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "transactionReference"
        }), " should only be included in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "original"
        }), " operations (Sale, Pre-Auth, MOTO Sale, or an ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "unlinked"
        }), " MOTO Refund). Linked operations — such as Refund, Reversal, Pre-Auth Increase/Capture — should ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " include a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transactionReference"
        }), ". These operations will be automatically logged under the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transactionReference"
        }), " of the original transaction."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "no-callback",
        label: "Sale (no callback)",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n -H \"ApiKeyCLoud: MeRcHaNt-ApIkEy\" \\\r\n -H \"Content-Type: application/json\" \\\r\n -d '{\r\n     \"operation\":\"sale\",\r\n     \"amount\":\"10000\",\r\n     \"currency\":\"EUR\",\r\n     \"terminal_type\":\"PAXA920\",\r\n     \"serial_number\":\"1547854757\",\r\n     \"customerReference\":\"op15248\",\r\n     \"transactionReference\": \"2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f\"\r\n }' \\\r\n \"https://cloud.handpoint.com/transactions\" (production)\r\n \"https://cloud.handpoint.io/transactions\" (development)\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "with-callback",
        label: "Sale (with callback)",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n -H \"ApiKeyCLoud: MeRcHaNt-ApIkEy\" \\\r\n -H \"Content-Type: application/json\" \\\r\n -d '{\r\n     \"operation\":\"sale\",\r\n     \"amount\":\"10000\",\r\n     \"currency\":\"EUR\",\r\n     \"terminal_type\":\"PAXA920\",\r\n     \"serial_number\":\"1547854757\",\r\n     \"customerReference\":\"op15248\",\r\n     \"callbackUrl\":\"https://url.where.the.result.is.served.com\",\r\n     \"token\":\"2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f\",\r\n     \"transactionReference\": \"2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f\"\r\n }' \\\r\n \"https://cloud.handpoint.com/transactions\" (production)\r\n \"https://cloud.handpoint.io/transactions\" (development)\n"
          })
        })
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "refund",
        label: "Refund",
        children: [(0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n -H \"ApiKeyCLoud: MeRcHaNt-ApIkEy\" \\\r\n -H \"Content-Type: application/json\" \\\r\n -d '{\r\n     \"operation\":\"refund\",\r\n     \"amount\":\"10000\",\r\n     \"currency\":\"EUR\",\r\n     \"terminal_type\":\"PAXA920\",\r\n     \"serial_number\":\"1547854757\",\r\n     \"originalTransactionId\":\"2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f\"\r\n }' \\\r\n \"https://cloud.handpoint.com/transactions\" (production)\r\n \"https://cloud.handpoint.io/transactions\" (development)\n"
          })
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), " field can be a partial or full refund. The amount specified is what will be refunded (in minor units, e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"10000\""
            }), " = 100.00). ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " should not be included — the refund will be linked to the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " of the original transaction."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "unlinked-refund",
        label: "Unlinked Refund",
        children: [(0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n -H \"ApiKeyCLoud: MeRcHaNt-ApIkEy\" \\\r\n -H \"Content-Type: application/json\" \\\r\n -d '{\r\n     \"operation\":\"refund\",\r\n     \"amount\":\"10000\",\r\n     \"currency\":\"EUR\",\r\n     \"terminal_type\":\"PAXA920\",\r\n     \"serial_number\":\"1547854757\",\r\n     \"transactionReference\": \"9f3a1b2c-44d5-67e8-f901-23456789abcd\"\r\n }' \\\r\n \"https://cloud.handpoint.com/transactions\" (production)\r\n \"https://cloud.handpoint.io/transactions\" (development)\n"
          })
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["An unlinked refund is not tied to a previous transaction — no ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionId"
            }), " is provided. Because it is an original operation, a unique ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " (UUID v4) must be included."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "reversal",
        label: "Reversal",
        children: [(0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n -H \"ApiKeyCLoud: MeRcHaNt-ApIkEy\" \\\r\n -H \"Content-Type: application/json\" \\\r\n -d '{\r\n     \"operation\":\"refundReversal\",\r\n     \"amount\":\"10000\",\r\n     \"currency\":\"EUR\",\r\n     \"terminal_type\":\"PAXA920\",\r\n     \"serial_number\":\"1547854757\",\r\n     \"originalTransactionId\":\"2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f\"\r\n }' \\\r\n \"https://cloud.handpoint.com/transactions\" (production)\r\n \"https://cloud.handpoint.io/transactions\" (development)\n"
          })
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " are required fields. For acquirers that support partial reversals, the specified amount will be reversed. For all other acquirers, the full original amount is reversed regardless of the amount sent (must be between 0 and 999999999999). ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " should not be included — the reversal will be linked to the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " of the original transaction."]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "202-no-callback",
        label: "202 (no callback)",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"transactionResultId\": \"0821032398-1628774190395\",\r\n  \"statusMessage\": \"Operation Accepted\",\r\n  \"transactionReference\": \"00000000-0000-0000-0000-000000000000\"\r\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "202-with-callback",
        label: "202 (with callback)",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"statusMessage\": \"Operation Accepted\",\r\n  \"transactionReference\": \"00000000-0000-0000-0000-000000000000\"\r\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "400",
        label: "400 DeviceIsBusy",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"error\": {\r\n    \"statusCode\": 400,\r\n    \"name\": \"BadRequestError\",\r\n    \"message\": {\r\n      \"error\": 1001,\r\n      \"message\": \"The device is busy\"\r\n    }\r\n  }\r\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transaction-result-recovery",
      children: "Transaction Result Recovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TransactionResultRecovery"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The terminal has a transaction recovery loop to automatically send back the pending TransactionResult to the callback URL in case it becomes unreachable (network issue or server down)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the server is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc…).\r\nThe recovery loop is reinitialized every time the Handpoint application is restarted or the startRecovery method is triggered. The Transaction Result received through the transaction recovery loop will have the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recoveredTransaction"
      }), " field set to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "true"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All 2XXs http response codes from the callbackUrl are valid to notify the payment terminal of a successful delivery of the result."
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/next/restobjects#transaction-result-object",
              children: "Transaction Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/next/restobjects#transaction-result-object",
              children: "Transaction Result"
            }), " is delivered to the callback URL from the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/next/restobjects#transaction-request-object",
              children: "Transaction Request"
            }), "."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fetch-transaction-result",
      children: "Fetch Transaction Result"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/transaction-result/{transactionResultId}"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GET endpoint used to retrieve transaction results from the payment terminal. In case you do not provide a callbackURL and token in the transaction request, the terminal will post the transaction result to an Handpoint internal API which can be queried in order for your software to fetch the transaction result. If you are running a server to receive results and pass a callback URL and token as part of the transaction request you do not need to query this endpoint."
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
              children: "Header: ApiKeyCloud"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Api key used to authenticate the merchant. (UNIQUE per Merchant)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Path parameter: transactionResultId"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The transactionResultId is a unique transaction id delivered immediately as a response to your transaction request. It can be used to query for a transaction result."
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
            children: "Response"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Response Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No Content"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response code 204. The transactionResultId was found in the database but there is no transaction result associated yet. This status will be retrieved while the transaction is ongoing and the transaction result has not been delivered yet."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response code 200 + Transaction Result. The transactionResultId was found in the database and the associated Transaction Result object is delivered."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Not Found"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response code 404. The transactionResultId was not found in the database."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsx)(Tabs/* default */.A, {
      children: (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "request",
        label: "Request",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X GET \\\\\r\n -H \"ApiKeyCLoud: MeRcHaNt-ApIkEy\" \\\\\r\n \"https://cloud.handpoint.com/transaction-result/1850025030-1776238708721\" (production)\r\n \"https://cloud.handpoint.io/transaction-result/1850025030-1776238708721\" (development)\n"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "200",
        label: "200 OK",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n    \"_statusMessage\": \"TEXT_IRT_00\",\r\n    \"accountType\": \"\",\r\n    \"aid\": \"A0000000031010\",\r\n    \"applicationLabel\": \"VISA CLASICA\",\r\n    \"arc\": \"0000\",\r\n    \"authorisationCode\": \"123456\",\r\n    \"balance\": null,\r\n    \"batchNumber\": \"123\",\r\n    \"budgetNumber\": \"\",\r\n    \"cardEntryType\": \"ICC\",\r\n    \"cardHolderName\": \"\",\r\n    \"cardLanguagePreference\": \"es_ES\",\r\n    \"cardSchemeName\": \"Visa\",\r\n    \"cardToken\": \"\",\r\n    \"cardTypeId\": \"************0936\",\r\n    \"chipTransactionReport\": \"\",\r\n    \"currency\": \"EUR\",\r\n    \"customData\": \"\",\r\n    \"customerReceipt\": \"https://receipts.handpoint.com/receipts/1abe8dc0-389e-11f1-8672-a1e0852a3198/customer.html\",\r\n    \"customerReference\": \"\",\r\n    \"deviceStatus\": {\r\n        \"applicationName\": \"Payments\",\r\n        \"applicationVersion\": \"20.4.12.1\",\r\n        \"batteryCharging\": \"Not Charging\",\r\n        \"batteryStatus\": \"80\",\r\n        \"batterymV\": \"3922\",\r\n        \"bluetoothName\": \"PAXA920PRO\",\r\n        \"externalPower\": \"USB\",\r\n        \"serialNumber\": \"1850025030\",\r\n        \"statusMessage\": \"\"\r\n    },\r\n    \"dueAmount\": 0,\r\n    \"errorMessage\": \"\",\r\n    \"expiryDateMMYY\": \"1027\",\r\n    \"finStatus\": \"AUTHORISED\",\r\n    \"iad\": \"06011203A00000\",\r\n    \"issuerResponseCode\": \"00\",\r\n    \"maskedCardNumber\": \"************0936\",\r\n    \"merchantAddress\": \"373 Douglas Ave. 2671 Malaga\",\r\n    \"merchantName\": \"im25merchant\",\r\n    \"merchantReceipt\": \"https://receipts.handpoint.com/receipts/1abe8dc0-389e-11f1-8672-a1e0852a3198/merchant.html\",\r\n    \"metadata\": null,\r\n    \"mid\": \"12345678\",\r\n    \"moneyRemittanceOptions\": null,\r\n    \"multiLanguageErrorMessages\": {},\r\n    \"multiLanguageStatusMessages\": {},\r\n    \"originalEFTTransactionID\": \"\",\r\n    \"paymentScenario\": \"CHIPCONTACTLESS\",\r\n    \"requestedAmount\": 300,\r\n    \"rrn\": \"0000415558180\",\r\n    \"signatureUrl\": \"\",\r\n    \"statusMessage\": \"Aprobado o completado con éxito\",\r\n    \"tenderType\": \"CREDIT\",\r\n    \"tid\": \"50025030\",\r\n    \"tipAmount\": 0,\r\n    \"totalAmount\": 300,\r\n    \"transactionID\": \"1abe8dc0-389e-11f1-8672-a1e0852a3198\",\r\n    \"transactionOrigin\": \"CLOUD\",\r\n    \"transactionReference\": \"f147c2e7-f445-4af8-9e11-ae035320ade3\",\r\n    \"tsi\": \"\",\r\n    \"tvr\": \"0000000000\",\r\n    \"type\": \"SALE\",\r\n    \"unMaskedPan\": \"\",\r\n    \"verificationMethod\": \"NOT_REQUIRED\",\r\n    \"efttimestamp\": 1776238711000,\r\n    \"efttransactionID\": \"1abe8dc0-389e-11f1-8672-a1e0852a3198\",\r\n    \"tipPercentage\": 0,\r\n    \"recoveredTransaction\": false\r\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "204",
        label: "204 No Content",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Transaction is still in progress. Poll again after a few seconds."
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "404",
        label: "404 Not Found",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "transactionResultId"
          }), " was not found in the database."]
        })
      })]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "retrieve-transaction-status",
      children: "Retrieve Transaction Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/transactions/{transactionReference}/status"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["This endpoint does ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://cloud.handpoint.(io/com)/",
            children: "https://cloud.handpoint.(io/com)/"
          })
        }), " as a base URL, it uses ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://transactions.handpoint.(io/com)/",
            children: "https://transactions.handpoint.(io/com)/"
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://transactions.handpoint.com/transactions/{transactionReference}/status/{selector}"
      }), " endpoint retrieves the status of transactions associated with a specific ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionReference"
      }), ". The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionReference"
      }), " is a unique value that you need to generate and pass in the original ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/next/restobjects#transactionRequest",
        children: " transaction request"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{selector}"
      }), " path parameter allows you to specify whether you want to retrieve a specific transaction by its index or all transactions associated with the reference. ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["If no selector is sent, the default value is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "first"
        }), ", and the endpoint returns the status of the initial transaction."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The main transaction result ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/next/restobjects#financialStatus",
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "FinancialStatus"
        })
      }), " that can be returned as a response to this method are the following ones:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AUTHORISED - Transaction was successful."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DECLINED - Transaction was declined."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UNDEFINED (NOT FOUND) -  The transaction does not exist in the Handpoint gateway. If this status is returned within 90s of the start of a transaction, there could be a chance that the cardholder has not inserted, swiped or tapped his card yet on the terminal and the Handpoint gateway might soon receive the transaction. If the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UNDEFINED"
        }), " status is returned after 90s, it means that the transaction processed has not reached the Handpoint gateway and it will NOT be charged."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IN_PROGRESS - The transaction has been received by the gateway but the outcome is not known yet, try again after a few seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "REFUNDED - Transaction was refunded."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "getTrxStatusEndpoint",
        src: (__webpack_require__(6287)/* ["default"] */ .A) + "",
        width: "671",
        height: "611"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Important Note:"
        }), " The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "finStatus"
        }), " field for the first transaction reflects its current status. In contrast, for subsequent transactions, the finStatus reflects the original status at the time of processing. For example, if a refund is later reversed, the refund transaction will still show as AUTHORISED."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Selector"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "all"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Returns the status of all transactions associated with the reference."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "first"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "(Default) Returns the status of the first transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "last"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Returns the status of the last transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{index}"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Returns the status of a specific transaction identified by its 1-based index in the sequence of transactions associated with the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), ". For example, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            }), " for the first transaction, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2"
            }), " for the second, and so on."]
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
              children: "Header: ApiKeyCloud"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Api key used to authenticate the merchant. (UNIQUE per Merchant)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Path parameter: transactionReference"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "UNIQUE"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)",
              children: "UUID v4"
            }), " generated by you and added as a parameter to the initial financial request. It can then be used to query the transaction status endpoint."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Handpoint does not verify that the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transactionReference"
        }), " values sent on every request are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UNIQUE"
        }), ".\r\nIt's our recommendation that a new value is created and sent for every originale request attempt (Sale, Pre-Auth, MOTO Sale, or an unlinked MOTO Refund)."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Response"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Response Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "200 OK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The request was successful, and the transaction status(es) are returned in the response."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "404 Not Found"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The specified ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "selector"
            }), " does not exist."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "403 Forbidden"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication failed. Please check that your API Key is valid."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "first",
        label: "No selector - first transaction",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X GET \\\r\n-H \"ApiKeyCloud: your-api-key\" \\\r\n\"https://transactions.handpoint.io/transactions/123e4567-e89b-12d3-a456-426614174000/status\"\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "all",
        label: "Retrieve All Transactions",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X GET \\\r\n-H \"ApiKeyCloud: your-api-key\" \\\r\n\"https://transactions.handpoint.io/transactions/123e4567-e89b-12d3-a456-426614174000/status/all\"\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "specific",
        label: "Retrieve Specific Transaction",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X GET \\\r\n-H \"ApiKeyCloud: your-api-key\" \\\r\n\"https://transactions.handpoint.io/transactions/123e4567-e89b-12d3-a456-426614174000/status/3\"\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "200-index",
        label: "200 OK (first - default)",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n    \"aid\": \"A0000000031010\",\r\n    \"arc\": \"00\",\r\n    \"iad\": \"06011203A00000\",\r\n    \"tsi\": \"\",\r\n    \"tvr\": \"0000000000\",\r\n    \"cardEntryType\": \"ICC\",\r\n    \"cardLanguagePreference\": \"6573\",\r\n    \"currency\": \"USD\",\r\n    \"type\": \"SALE\",\r\n    \"tipAmount\": 0,\r\n    \"totalAmount\": 4000,\r\n    \"requestedAmount\": 4000,\r\n    \"dueAmount\": 0,\r\n    \"tipPercentage\": 0,\r\n    \"efttimestamp\": 1776940115244,\r\n    \"originalEFTTransactionID\": \"\",\r\n    \"paymentScenario\": \"CHIPCONTACTLESS\",\r\n    \"verificationMethod\": \"UNDEFINED\",\r\n    \"authorisationCode\": \"123456\",\r\n    \"cardSchemeName\": \"Visa\",\r\n    \"cardToken\": \"\",\r\n    \"maskedCardNumber\": \"************0936\",\r\n    \"cardTypeId\": \"\",\r\n    \"customerReference\": \"\",\r\n    \"efttransactionID\": \"2f727990-3eff-11f1-909c-f50efeae2190\",\r\n    \"transactionID\": \"2f727990-3eff-11f1-909c-f50efeae2190\",\r\n    \"errorMessage\": \"\",\r\n    \"expiryDateMMYY\": \"1027\",\r\n    \"issuerResponseCode\": \"00\",\r\n    \"batchNumber\": \"\",\r\n    \"rrn\": \"0000423131600\",\r\n    \"tenderType\": \"CREDIT\",\r\n    \"unMaskedPan\": \"\",\r\n    \"holdAmount\": 0,\r\n    \"increaseAmount\": 0,\r\n    \"capturedAmount\": 0,\r\n    \"merchantAddress\": \"373 Douglas Ave. 2671 Malaga\",\r\n    \"merchantName\": \"im25merchant\",\r\n    \"mid\": \"\",\r\n    \"cardHolderName\": \"\",\r\n    \"chipTransactionReport\": \"\",\r\n    \"customerReceipt\": \"\",\r\n    \"merchantReceipt\": \"\",\r\n    \"signatureUrl\": \"\",\r\n    \"statusMessage\": \"\",\r\n    \"tid\": \"\",\r\n    \"transactionReference\": \"7d27b00b-0d9f-4175-a025-6688ef8aebb3\",\r\n    \"transactionOrigin\": \"\",\r\n    \"finStatus\": \"CANCELLED\"\r\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "200-all",
        label: "200 OK (All Transactions)",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "[\r\n    {\r\n        \"aid\": \"A0000000031010\",\r\n        \"arc\": \"00\",\r\n        \"iad\": \"06011203A00000\",\r\n        \"tsi\": \"\",\r\n        \"tvr\": \"0000000000\",\r\n        \"cardEntryType\": \"ICC\",\r\n        \"cardLanguagePreference\": \"6573\",\r\n        \"currency\": \"USD\",\r\n        \"type\": \"SALE\",\r\n        \"tipAmount\": 0,\r\n        \"totalAmount\": 4000,\r\n        \"requestedAmount\": 4000,\r\n        \"dueAmount\": 0,\r\n        \"tipPercentage\": 0,\r\n        \"efttimestamp\": 1776940115244,\r\n        \"originalEFTTransactionID\": \"\",\r\n        \"paymentScenario\": \"CHIPCONTACTLESS\",\r\n        \"verificationMethod\": \"UNDEFINED\",\r\n        \"authorisationCode\": \"123456\",\r\n        \"cardSchemeName\": \"Visa\",\r\n        \"cardToken\": \"\",\r\n        \"maskedCardNumber\": \"************0936\",\r\n        \"cardTypeId\": \"\",\r\n        \"customerReference\": \"\",\r\n        \"efttransactionID\": \"2f727990-3eff-11f1-909c-f50efeae2190\",\r\n        \"transactionID\": \"2f727990-3eff-11f1-909c-f50efeae2190\",\r\n        \"errorMessage\": \"\",\r\n        \"expiryDateMMYY\": \"1027\",\r\n        \"issuerResponseCode\": \"00\",\r\n        \"batchNumber\": \"\",\r\n        \"rrn\": \"0000423131600\",\r\n        \"tenderType\": \"CREDIT\",\r\n        \"unMaskedPan\": \"\",\r\n        \"holdAmount\": 0,\r\n        \"increaseAmount\": 0,\r\n        \"capturedAmount\": 0,\r\n        \"merchantAddress\": \"\",\r\n        \"merchantName\": \"\",\r\n        \"mid\": \"\",\r\n        \"cardHolderName\": \"\",\r\n        \"chipTransactionReport\": \"\",\r\n        \"customerReceipt\": \"\",\r\n        \"merchantReceipt\": \"\",\r\n        \"signatureUrl\": \"\",\r\n        \"statusMessage\": \"\",\r\n        \"tid\": \"\",\r\n        \"transactionReference\": \"7d27b00b-0d9f-4175-a025-6688ef8aebb3\",\r\n        \"transactionOrigin\": \"\",\r\n        \"finStatus\": \"CANCELLED\"\r\n    },\r\n    {\r\n        \"aid\": \"\",\r\n        \"arc\": \"\",\r\n        \"iad\": \"\",\r\n        \"tsi\": \"\",\r\n        \"tvr\": \"\",\r\n        \"cardEntryType\": \"UNDEFINED\",\r\n        \"cardLanguagePreference\": \"\",\r\n        \"currency\": \"USD\",\r\n        \"type\": \"REVERSAL\",\r\n        \"tipAmount\": 0,\r\n        \"totalAmount\": 4000,\r\n        \"requestedAmount\": 4000,\r\n        \"dueAmount\": 0,\r\n        \"tipPercentage\": 0,\r\n        \"efttimestamp\": 1776940127201,\r\n        \"originalEFTTransactionID\": \"2f727990-3eff-11f1-909c-f50efeae2190\",\r\n        \"paymentScenario\": \"UNKNOWN\",\r\n        \"verificationMethod\": \"UNDEFINED\",\r\n        \"authorisationCode\": \"123456\",\r\n        \"cardSchemeName\": \"Visa\",\r\n        \"cardToken\": \"\",\r\n        \"maskedCardNumber\": \"************0936\",\r\n        \"cardTypeId\": \"\",\r\n        \"customerReference\": \"\",\r\n        \"efttransactionID\": \"365d41e0-3eff-11f1-909c-f50efeae2190\",\r\n        \"transactionID\": \"365d41e0-3eff-11f1-909c-f50efeae2190\",\r\n        \"errorMessage\": \"\",\r\n        \"expiryDateMMYY\": \"1027\",\r\n        \"issuerResponseCode\": \"00\",\r\n        \"batchNumber\": \"\",\r\n        \"rrn\": \"\",\r\n        \"tenderType\": \"CREDIT\",\r\n        \"unMaskedPan\": \"\",\r\n        \"holdAmount\": 0,\r\n        \"increaseAmount\": 0,\r\n        \"capturedAmount\": 0,\r\n        \"merchantAddress\": \"\",\r\n        \"merchantName\": \"\",\r\n        \"mid\": \"\",\r\n        \"cardHolderName\": \"\",\r\n        \"chipTransactionReport\": \"\",\r\n        \"customerReceipt\": \"\",\r\n        \"merchantReceipt\": \"\",\r\n        \"signatureUrl\": \"\",\r\n        \"statusMessage\": \"\",\r\n        \"tid\": \"\",\r\n        \"transactionReference\": \"7d27b00b-0d9f-4175-a025-6688ef8aebb3\",\r\n        \"transactionOrigin\": \"\",\r\n        \"finStatus\": \"AUTHORISED\"\r\n    }\r\n]\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "200-last",
        label: "200 OK (Last Transaction)",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n    \"aid\": \"\",\r\n    \"arc\": \"\",\r\n    \"iad\": \"\",\r\n    \"tsi\": \"\",\r\n    \"tvr\": \"\",\r\n    \"cardEntryType\": \"UNDEFINED\",\r\n    \"cardLanguagePreference\": \"\",\r\n    \"currency\": \"USD\",\r\n    \"type\": \"REVERSAL\",\r\n    \"tipAmount\": 0,\r\n    \"totalAmount\": 4000,\r\n    \"requestedAmount\": 4000,\r\n    \"dueAmount\": 0,\r\n    \"tipPercentage\": 0,\r\n    \"efttimestamp\": 1776940127201,\r\n    \"originalEFTTransactionID\": \"2f727990-3eff-11f1-909c-f50efeae2190\",\r\n    \"paymentScenario\": \"UNKNOWN\",\r\n    \"verificationMethod\": \"UNDEFINED\",\r\n    \"authorisationCode\": \"123456\",\r\n    \"cardSchemeName\": \"Visa\",\r\n    \"cardToken\": \"\",\r\n    \"maskedCardNumber\": \"************0936\",\r\n    \"cardTypeId\": \"\",\r\n    \"customerReference\": \"\",\r\n    \"efttransactionID\": \"365d41e0-3eff-11f1-909c-f50efeae2190\",\r\n    \"transactionID\": \"365d41e0-3eff-11f1-909c-f50efeae2190\",\r\n    \"errorMessage\": \"\",\r\n    \"expiryDateMMYY\": \"1027\",\r\n    \"issuerResponseCode\": \"00\",\r\n    \"batchNumber\": \"\",\r\n    \"rrn\": \"\",\r\n    \"tenderType\": \"CREDIT\",\r\n    \"unMaskedPan\": \"\",\r\n    \"holdAmount\": 0,\r\n    \"increaseAmount\": 0,\r\n    \"capturedAmount\": 0,\r\n    \"merchantAddress\": \"\",\r\n    \"merchantName\": \"\",\r\n    \"mid\": \"\",\r\n    \"cardHolderName\": \"\",\r\n    \"chipTransactionReport\": \"\",\r\n    \"customerReceipt\": \"\",\r\n    \"merchantReceipt\": \"\",\r\n    \"signatureUrl\": \"\",\r\n    \"statusMessage\": \"\",\r\n    \"tid\": \"\",\r\n    \"transactionReference\": \"7d27b00b-0d9f-4175-a025-6688ef8aebb3\",\r\n    \"transactionOrigin\": \"\",\r\n    \"finStatus\": \"AUTHORISED\"\r\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device-control-commands",
      children: "Device Control Commands"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "The following commands are available for all devices running Android SDK version 7.1006.0 or later."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Command Endpoint Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All device control commands follow this endpoint structure:\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://cloud.handpoint.io/devices/{deviceType}/{serialNumber}/{command}"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{deviceType}"
        }), " is the type of the device (e.g., PAXIM30)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{serialNumber}"
        }), " is the serial number of the device (e.g., 1640013848)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{command}"
        }), " is the specific command to execute"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All commands share these common parameters:"
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
              children: "Header: ApiKeyCloud"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Api key used to authenticate the merchant. (UNIQUE per Merchant)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Header: Content-Type"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must be set to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "application/json"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common Response Codes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Response Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "202"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request accepted, command will be executed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "403"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication failed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "422"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid parameter value (when applicable)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For the Commands to work properly, the Handpoint Payments App ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MUST"
        }), " be in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Integrated Mode"
        }), " (enabled via ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Handpoint TMS"
        }), " and controlled by the merchant in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Handpoint Payments App"
        }), " Settings).", (0,jsx_runtime.jsx)("br", {})]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-unattended-mode",
      children: "Set Unattended Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /devices/{deviceType}/{serialNumber}/set-unattended-mode"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enables or disables unattended mode on the device.\r\nUnattended mode will disable the Bottom navigation bar containing the Home, back, recent buttons.\r\nThe Payment screen will be the only visible screen in the Handpoint Payments App. (Settings, Hisotry and Analytic tabs will not be accessible)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Request Body Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), " to enable unattended mode, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            }), " to disable"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Request"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsx)(Tabs/* default */.A, {
      children: (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "request",
        label: "Request",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -d '{\r\n    \"status\": false\r\n  }' \\\r\n  \"https://cloud.handpoint.io/devices/PAXIM30/0000000000/set-unattended-mode\"\n"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "202",
        label: "202 Accepted",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "No response body is returned."
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "400-not-listening",
        label: "400 DeviceNotListening",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n    \"error\": {\r\n        \"statusCode\": 400,\r\n        \"name\": \"BadRequestError\",\r\n        \"message\": {\r\n            \"error\": 1002,\r\n            \"message\": \"No device listening at the other end of the secure channel\"\r\n        }\r\n    }\r\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-locale",
      children: "Set Locale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /devices/{deviceType}/{serialNumber}/set-locale"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sets the locale of the target device."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Request Body Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "locale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["IETF BCP 47 language tag (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "en_US"
            }), "). Two-letter language and country code."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Response Codes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "202"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The request is accepted and will be executed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "403"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication failed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "422"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid request"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Request"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsx)(Tabs/* default */.A, {
      children: (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "request",
        label: "Request",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -d '{\r\n    \"locale\": \"en_CA\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/devices/PAXIM30/0000000000/set-locale\"\n"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "202",
        label: "202 Accepted",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "No response body is returned."
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "400-not-listening",
        label: "400 DeviceNotListening",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n    \"error\": {\r\n        \"statusCode\": 400,\r\n        \"name\": \"BadRequestError\",\r\n        \"message\": {\r\n            \"error\": 1002,\r\n            \"message\": \"No device listening at the other end of the secure channel\"\r\n        }\r\n    }\r\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-password-protected",
      children: "Set Password Protected"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /devices/{deviceType}/{serialNumber}/set-password-protected"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enables or disables password protection on the device."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Request Body Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), " to enable password protection, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            }), " to disable"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Response Codes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "202"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The request is accepted and will be executed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "403"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication failed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "422"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid request"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Request"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsx)(Tabs/* default */.A, {
      children: (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "request",
        label: "Request",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -d '{\r\n    \"status\": true\r\n  }' \\\r\n  \"https://cloud.handpoint.io/devices/PAXIM30/0000000000/set-password-protected\"\n"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "202",
        label: "202 Accepted",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "No response body is returned."
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "400-not-listening",
        label: "400 DeviceNotListening",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n    \"error\": {\r\n        \"statusCode\": 400,\r\n        \"name\": \"BadRequestError\",\r\n        \"message\": {\r\n            \"error\": 1002,\r\n            \"message\": \"No device listening at the other end of the secure channel\"\r\n        }\r\n    }\r\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reboot",
      children: "Reboot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /devices/{deviceType}/{serialNumber}/reboot"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reboots the device with an optional force parameter."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Request Body Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "force"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), " to force reboot even during transaction, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            }), " to check status first"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Response Codes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "202"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The request is accepted and will be executed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "403"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication failed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "422"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid request"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Request"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsx)(Tabs/* default */.A, {
      children: (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "request",
        label: "Request",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -d '{\r\n    \"force\": false\r\n  }' \\\r\n  \"https://cloud.handpoint.io/devices/PAXIM30/0000000000/reboot\"\n"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "202",
        label: "202 Accepted",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "No response body is returned."
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "400-not-listening",
        label: "400 DeviceNotListening",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n    \"error\": {\r\n        \"statusCode\": 400,\r\n        \"name\": \"BadRequestError\",\r\n        \"message\": {\r\n            \"error\": 1002,\r\n            \"message\": \"No device listening at the other end of the secure channel\"\r\n        }\r\n    }\r\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-screen-brightness",
      children: "Set Screen Brightness"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /devices/{deviceType}/{serialNumber}/set-screen-brightness"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sets the screen brightness levels."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Request Body Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
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
              children: "minimumBrightnessLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value between 0 and 100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "maximumBrightnessLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value between 0 and 100"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Response Codes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "202"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The request is accepted and will be executed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "403"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication failed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "422"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value is outside the valid range"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Request"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsx)(Tabs/* default */.A, {
      children: (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "request",
        label: "Request",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -d '{\r\n    \"minimumBrightnessLevel\": 20,\r\n    \"maximumBrightnessLevel\": 100\r\n  }' \\\r\n  \"https://cloud.handpoint.io/devices/PAXIM30/0000000000/set-screen-brightness\"\n"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "202",
        label: "202 Accepted",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "No response body is returned."
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "400-not-listening",
        label: "400 DeviceNotListening",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n    \"error\": {\r\n        \"statusCode\": 400,\r\n        \"name\": \"BadRequestError\",\r\n        \"message\": {\r\n            \"error\": 1002,\r\n            \"message\": \"No device listening at the other end of the secure channel\"\r\n        }\r\n    }\r\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-reboot-time",
      children: "Set Reboot Time"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "This feature is only enabled for production devices."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /devices/{deviceType}/{serialNumber}/set-reboot-time"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sets the daily reboot time for the device. The actual reboot will occur at a random minute within the specified hour."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Request Body Parameters"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hour"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hour of the day (0-23) when device should reboot"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "If hour is set to 22, the device will reboot at a random time between 22:01 and 22:59."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Response Codes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "202"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The request is accepted and will be executed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "403"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication failed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "422"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value is outside the valid range"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Request"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsx)(Tabs/* default */.A, {
      children: (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "request",
        label: "Request",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -d '{\r\n    \"hour\": 22\r\n  }' \\\r\n  \"https://cloud.handpoint.io/devices/PAXIM30/0000000000/set-reboot-time\"\n"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "202",
        label: "202 Accepted",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "No response body is returned."
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "400-not-listening",
        label: "400 DeviceNotListening",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n    \"error\": {\r\n        \"statusCode\": 400,\r\n        \"name\": \"BadRequestError\",\r\n        \"message\": {\r\n            \"error\": 1002,\r\n            \"message\": \"No device listening at the other end of the secure channel\"\r\n        }\r\n    }\r\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "endpoints-not-requiring-a-payment-terminal",
      children: "Endpoints Not Requiring a Payment Terminal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following endpoints operate entirely through the Cloud API and do ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " require a connected payment terminal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tip-adjustment",
      children: "Tip Adjustment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TipAdjustment"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "POST endpoint used to execute a tip adjustment operation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A tip adjustment operation allows merchants to adjust the tip amount of a sale transaction before the batch of transactions is settled by the processor at the end of the day. Note: This functionality is only available for the restaurant industry in the United States and the processors currently supporting this functionality are TSYS and VANTIV."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: If two tip adjustments are sent for the same original transaction, only the second one will be taken into account. Each new tip adjustment will override the previous one. A tip adjustment will be rejected if the original transaction has already been batched out by the acquirer."
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
              children: "Header: ApiKeyCloud"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Api key used to authenticate the merchant. (UNIQUE per Merchant)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Path parameter: guid"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The guid of the transaction to be adjusted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Request Body: Tip Adjustment"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/next/restobjects#tip-adjustment",
              children: "TipAdjustment"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object containing the tip amount (as a ", (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            }), " in MAJOR units, e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"5.25\""
            }), ") and currency of the tip adjustment."]
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
            children: "Response"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Response Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response code 200."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BadRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response code 400."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsx)(Tabs/* default */.A, {
      children: (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "request",
        label: "Request",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl --location --request POST 'https://cloud.handpoint.com/transactions/ff6da784-8b57-11ed-9891-ebe2a88ff071/tip-adjustment' \\\r\n--header 'ApiKeyCloud: MeRcHaNt-ApI-KeY' \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n    \"amount\": \"5.25\"  //5 => 5.00\r\n}'\n"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "200",
        label: "200 OK",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"statusMessage\": \"tip adjusted\"\r\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "400",
        label: "400 Bad Request",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"error\": {\r\n    \"statusCode\": 400,\r\n    \"name\": \"BadRequestError\",\r\n    \"message\": \"Invalid guid [fake-guid]\"\r\n  }\r\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transactionsguidtoken",
      children: "Get Card Token"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DeferredTokenization"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GET endpoint used to retrieve a card token from a previously completed transaction. This operation, known as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deferred tokenization"
      }), ", allows merchants to obtain a card token without requiring tokenization to be enabled at the time of the original transaction. The returned ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cardToken"
      }), " can be used for subsequent operations such as cardholder identification or MOTO payments. See the supported transaction types below."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Deferred tokenization is supported for the following transaction types: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sale"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "refund"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "preAuthorizationCapture"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "moToSale"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "moToRefund"
        }), ". Other transaction types will return a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "400"
        }), " error."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Tokenization requests must be made within ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "12 months"
        }), " of the original transaction. Requests for transactions older than 12 months will not be processed."]
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
              children: "Header: ApiKeyCloud"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Api key used to authenticate the merchant. (UNIQUE per Merchant)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Path parameter: guid"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The GUID of the completed card-present transaction from which to retrieve the token."
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
            children: "Response"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Response Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/next/restobjects#deferredTokenizationResponse",
              children: "DeferredTokenizationResponse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response code 200."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BadRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response code 400. Returned when the transaction type is not eligible for deferred tokenization."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsx)(Tabs/* default */.A, {
      children: (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "request",
        label: "Request",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X GET \\\r\n -H \"ApiKeyCloud: MeRcHaNt-ApIkEy\" \\\r\n -H \"Content-Type: application/json\" \\\r\n \"https://cloud.handpoint.com/transactions/75413c40-21db-11f1-991b-6f80eaf25911/token\" (production)\r\n \"https://cloud.handpoint.io/transactions/75413c40-21db-11f1-991b-6f80eaf25911/token\" (development)\n"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "200",
        label: "200",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n    \"agreementNumber\": \"123456789010102\",\r\n    \"cardToken\": \"665630867\",\r\n    \"cardTokenizationGuid\": \"7df78050-21dc-11f1-991b-6f80eaf25911\",\r\n    \"expiryDateMMYY\": \"0927\",\r\n    \"httpStatus\": \"200\",\r\n    \"maskedCardNumber\": \"************3555\",\r\n    \"serverDateTime\": \"20260317083711509\",\r\n    \"transactionReference\": \"75413c40-21db-11f1-991b-6f80eaf25911\"\r\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "400",
        label: "400",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n    \"error\": {\r\n        \"details\": {\r\n            \"body\": {\r\n                \"error\": {\r\n                    \"errorCode\": \"3112\",\r\n                    \"errorGuid\": \"624d05e0-21dd-11f1-991b-6f80eaf25911\",\r\n                    \"httpStatus\": \"403\",\r\n                    \"reason\": \"Transaction type is not eligible for deferred tokenization\"\r\n                }\r\n            },\r\n            \"status\": 403\r\n        },\r\n        \"message\": \"Viscus operation failed\",\r\n        \"name\": \"BadRequestError\",\r\n        \"statusCode\": 400\r\n    }\r\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reversal",
      children: "Reversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Depending on the acquirer"
        }), " Only applies to reversals that don't require the card to be presented."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This endpoint allows to Cancel/Void/Reverse a previous transaction without a reader."
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
              children: "Header: ApiKeyCloud"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Api key used to authenticate the merchant. (UNIQUE per Merchant)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Body: originalGuid"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The GUID of the previously completed transaction to reverse."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Body: amount"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--secondary",
              children: "Optional"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Decimal amount in String, ISO 4217; Required for partial-reversals. ", (0,jsx_runtime.jsx)(_components.em, {
              children: "Only if your acquirer supports partial-reversals"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Body: currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--secondary",
              children: "Optional"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Required for partial-reversals ", (0,jsx_runtime.jsx)(_components.em, {
              children: "Only if your acquirer supports partial-reversals"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Body: messageReasonCode"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--secondary",
              children: "Optional"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["default: CUSTOMER_CANCELLATION. See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/next/restobjects#messageReasonCode",
              children: "allowed values"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Body: timestamp"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--secondary",
              children: "Optional"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Timestamp in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "YYYYMMDDHHmmssSSS"
            }), " format (17 characters). Defaults to the current server time when not provided."]
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
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "200"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reversal accepted and processed. Response body is a ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/next/restobjects#reversalResponse",
              children: "ReversalResponse"
            }), " object."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "400"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Business rule error from the gateway (for example, the transaction was already reversed, or a partial-reversal ", (0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), " exceeds the original amount). Returned as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BadRequestError"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.code"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.details"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "403"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forbidden — the API key does not belong to a merchant. Partner keys are not accepted by this endpoint."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "422"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Payload validation error (", (0,jsx_runtime.jsx)(_components.code, {
              children: "VALIDATION_FAILED"
            }), ") — missing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalGuid"
            }), ", invalid ", (0,jsx_runtime.jsx)(_components.code, {
              children: "messageReasonCode"
            }), " enum value, or invalid ", (0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " length."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "request",
        label: "Full Reversal",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl --location --request POST 'https://cloud.handpoint.io/reversal' \\\r\n--header 'ApiKeyCloud: MeRcHaNt-ApI-KeY' \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n    \"originalGuid\": \"bb6e0b90-420f-11f1-b809-51c9c7fda18b\"\r\n}'\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "parital",
        label: "Partial Reversal",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl --location --request POST 'https://cloud.handpoint.io/reversal' \\\r\n--header 'ApiKeyCloud: MeRcHaNt-ApI-KeY' \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n    \"originalGuid\": \"bb6e0b90-420f-11f1-b809-51c9c7fda18b\",\r\n    \"amount\": \"15.00\",\r\n    \"currency\": \"EUR\"\r\n}'\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "explicit",
        label: "With explicit reason",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl --location --request POST 'https://cloud.handpoint.io/reversal' \\\r\n--header 'ApiKeyCloud: MeRcHaNt-ApI-KeY' \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n    \"originalGuid\": \"bb6e0b90-420f-11f1-b809-51c9c7fda18b\",\r\n    \"messageReasonCode\": \"TIMEOUT_WAITING_FOR_RESPONSE\"\r\n}'\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "200",
        label: "200",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n    \"httpStatus\": 200,\r\n    \"acquirerTid\": \"ACQUIRER_TID\",\r\n    \"agreementNumber\": \"123456789010102\",\r\n    \"amount\": \"0.04\",\r\n    \"approvalCode\": \"123456\",\r\n    \"batchNumber\": \"123\",\r\n    \"cardTypeName\": \"Visa\",\r\n    \"currency\": \"USD\",\r\n    \"customFields\": {\r\n        \"entry\": [\r\n            {\r\n                \"key\": \"messageReasonCode\",\r\n                \"value\": \"4000\"\r\n            },\r\n            {\r\n                \"key\": \"tenderType\",\r\n                \"value\": \"Credit\"\r\n            },\r\n            {\r\n                \"key\": \"issuerResponseCode\",\r\n                \"value\": \"00\"\r\n            }\r\n        ]\r\n    },\r\n    \"expiryDateMMYY\": \"1027\",\r\n    \"f25\": \"4000\",\r\n    \"issuerResponseCode\": \"00\",\r\n    \"issuerResponseText\": \"Successful\",\r\n    \"maskedCardNumber\": \"************0936\",\r\n    \"serverDateTime\": \"20260709074155101\",\r\n    \"terminalDateTime\": \"20260709074155083\",\r\n    \"transactionReference\": \"ee47c0b5-ff0b-4847-977c-cb8b6c4a848c\",\r\n    \"authorizationGuid\": \"9db20c30-7b69-11f1-9754-81955277651b\",\r\n    \"originalGuid\": \"9db20c30-7b69-11f1-9754-81955277651b\",\r\n    \"reversalGuid\": \"a8534cd0-7b69-11f1-a47e-6df6451d705a\"\r\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "Already Reversed",
        label: "Already Reversed",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n    \"error\": {\r\n        \"statusCode\": 400,\r\n        \"name\": \"BadRequestError\",\r\n        \"message\": \"Already reversed\",\r\n        \"code\": \"3051\",\r\n        \"details\": {\r\n            \"errorCode\": \"3051\",\r\n            \"errorGuid\": \"c267a170-7b69-11f1-9754-81955277651b\",\r\n            \"httpStatus\": 409,\r\n            \"reason\": \"Already reversed\"\r\n        }\r\n    }\r\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "Exceeds original amount",
        label: "Exceeds original amount",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n    \"error\": {\r\n        \"statusCode\": 400,\r\n        \"name\": \"BadRequestError\",\r\n        \"message\": \"Partial reversal amount exceeds original amount\",\r\n        \"code\": \"4066\",\r\n        \"details\": {\r\n            \"errorCode\": \"4066\",\r\n            \"errorGuid\": \"e5197770-7b69-11f1-9754-81955277651b\",\r\n            \"httpStatus\": 400,\r\n            \"reason\": \"Partial reversal amount exceeds original amount\"\r\n        }\r\n    }\r\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Pre-authorization operations are only available for acquirers that support pre-authorization flows. Contact your Handpoint relationship manager to confirm support for your acquirer."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pre-authorization operations allow you to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "manage open pre-authorizations"
      }), " remotely via Cloud API. A pre-authorization reserves funds on a card without charging them; the increase and capture endpoints let you adjust or finalize that reservation without requiring a physical payment terminal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cloud API currently supports the following pre-authorization operations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "POST /preauthorization/increase"
        }), " — increases (or decreases, with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "subtract: \"1\""
        }), ") the authorized amount of an open pre-authorization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "POST /preauthorization/capture"
        }), " — finalizes (captures) an open pre-authorization, charging the captured amount."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All request and response payloads are defined in the corresponding ", (0,jsx_runtime.jsx)(_components.a, {
        href: "restobjects#preauthorization",
        children: "Pre-authorization objects"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "preauthorization-increase--decrease",
      children: "Preauthorization Increase / Decrease"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PreauthIncrease"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "POST /preauthorization/increase"
      }), " is used to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "modify the authorized amount"
      }), " of an existing open pre-authorization. The operation is linked to the original pre-authorization via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "originalGuid"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pass ", (0,jsx_runtime.jsx)(_components.code, {
        children: "subtract: \"1\""
      }), " to decrease the authorized amount instead of increasing it."]
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
              children: "Header: ApiKeyCloud"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud API key used to authenticate the merchant."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Request Body: PreauthIncreaseRequest"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "restobjects#preauthIncreaseRequest",
              children: "PreauthIncreaseRequest"
            }), " object containing the original pre-authorization GUID and the amount delta."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Typical fields in the request body (see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "restobjects#preauthIncreaseRequest",
        children: "PreauthIncreaseRequest"
      }), " for full details):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "originalGuid"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – GUID of the original pre-authorization transaction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "increaseAmount"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – Amount delta to apply (for example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"10.00\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "tipAmount"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--secondary",
          children: "Optional"
        }), " – Tip amount to add (for example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"2.00\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "subtract"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--secondary",
          children: "Optional"
        }), " – Pass ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"1\""
        }), " to decrease the authorized amount instead of increasing it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "customerReference"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--secondary",
          children: "Optional"
        }), " – Integrator-defined reference, forwarded as-is to the gateway."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "returns",
      children: "Returns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "200"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-authorization increase accepted. Response body is a parsed gateway object."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "400"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Business rule error from the gateway (for example, unknown ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalGuid"
            }), " or pre-authorization no longer open). Returned as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BadRequestError"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.code"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.details"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "403"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forbidden — the API key does not belong to a merchant. Partner keys are not accepted by this endpoint."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "422"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Payload validation error (", (0,jsx_runtime.jsx)(_components.code, {
              children: "VALIDATION_FAILED"
            }), ") — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalGuid"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "increaseAmount"
            }), " is missing."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "increase",
        label: "Increase amount",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"originalGuid\": \"0c9d9df0-48ec-11eb-81a1-470a19c80d3a\",\r\n    \"increaseAmount\": \"10.00\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/preauthorization/increase\"\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "decrease",
        label: "Decrease amount",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"originalGuid\": \"0c9d9df0-48ec-11eb-81a1-470a19c80d3a\",\r\n    \"increaseAmount\": \"5.00\",\r\n    \"subtract\": \"1\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/preauthorization/increase\"\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "with-tip",
        label: "With tip and reference",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"originalGuid\": \"0c9d9df0-48ec-11eb-81a1-470a19c80d3a\",\r\n    \"increaseAmount\": \"10.00\",\r\n    \"tipAmount\": \"2.00\",\r\n    \"customerReference\": \"table-12-increase\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/preauthorization/increase\"\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "200",
        label: "200 OK",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n    \"httpStatus\": 200,\r\n    \"customFields\": {\r\n        \"tenderType\": \"Credit\",\r\n        \"issuerResponseCode\": \"200\"\r\n    },\r\n    \"acquirerTid\": \"0821599465\",\r\n    \"actionCode\": \"0000\",\r\n    \"agreementNumber\": \"123456789010102\",\r\n    \"approvalCode\": \"010119\",\r\n    \"batchNumber\": \"1\",\r\n    \"cardTypeName\": \"VISA\",\r\n    \"currency\": \"USD\",\r\n    \"expiryDateMMYY\": \"1027\",\r\n    \"holdAmount\": \"102.00\",\r\n    \"issuerResponseCode\": \"00\",\r\n    \"issuerResponseText\": \"COMPLETED\",\r\n    \"maskedCardNumber\": \"************0936\",\r\n    \"nonce\": \"1776156307790\",\r\n    \"originalAmount\": \"1.00\",\r\n    \"preAuthorizationGuid\": \"664ec4c0-37e6-11f1-bc66-3114cb76dabf\",\r\n    \"serverDateTime\": \"20260414094416641\",\r\n    \"terminalDateTime\": \"20260414094416433\",\r\n    \"transNumber\": \"000001\",\r\n    \"increaseAmount\": \"100.00\",\r\n    \"preAuthorizationIncreaseGuid\": \"80b2e710-37e6-11f1-bc66-3114cb76dabf\"\r\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "400",
        label: "400 Already captured (3211)",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n    \"error\": {\r\n        \"statusCode\": 400,\r\n        \"name\": \"BadRequestError\",\r\n        \"message\": \"Original pre-auth is voided, not approved or already captured\",\r\n        \"code\": \"3211\",\r\n        \"details\": {\r\n            \"errorCode\": \"3211\",\r\n            \"errorGuid\": \"e8b35da0-37ea-11f1-bc66-3114cb76dabf\",\r\n            \"httpStatus\": 403,\r\n            \"reason\": \"Original pre-auth is voided, not approved or already captured\"\r\n        }\r\n    }\r\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "422",
        label: "422 Validation Error",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"error\": {\r\n    \"statusCode\": 422,\r\n    \"name\": \"UnprocessableEntityError\",\r\n    \"message\": \"The request body is invalid.\",\r\n    \"code\": \"VALIDATION_FAILED\",\r\n    \"details\": [\r\n      {\r\n        \"path\": \"\",\r\n        \"code\": \"required\",\r\n        \"message\": \"must have required property 'increaseAmount'\",\r\n        \"info\": { \"missingProperty\": \"increaseAmount\" }\r\n      }\r\n    ]\r\n  }\r\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "preauthorization-capture",
      children: "Preauthorization Capture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PreauthCapture"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "POST /preauthorization/capture"
      }), " is used to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "finalize (capture) an open pre-authorization"
      }), ", charging the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "capturedAmount"
      }), " to the cardholder. Once captured, the pre-authorization is settled and the held funds are transferred."]
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
              children: "Header: ApiKeyCloud"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud API key used to authenticate the merchant."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Request Body: PreauthCaptureRequest"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "restobjects#preauthCaptureRequest",
              children: "PreauthCaptureRequest"
            }), " object containing the original pre-authorization GUID and the amount to capture."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Typical fields in the request body (see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "restobjects#preauthCaptureRequest",
        children: "PreauthCaptureRequest"
      }), " for full details):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "originalGuid"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – GUID of the original pre-authorization transaction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "capturedAmount"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – Amount to capture and charge (for example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"120.00\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "tipAmount"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--secondary",
          children: "Optional"
        }), " – Tip amount to include in the captured total (for example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"5.00\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "customerReference"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--secondary",
          children: "Optional"
        }), " – Integrator-defined reference, forwarded as-is to the gateway."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "returns-1",
      children: "Returns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "200"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-authorization capture accepted. Response body is a parsed gateway object."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "400"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Business rule error from the gateway (for example, unknown ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalGuid"
            }), ", pre-authorization already captured, or captured amount exceeds authorized amount). Returned as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BadRequestError"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.code"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.details"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "403"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forbidden — the API key does not belong to a merchant. Partner keys are not accepted by this endpoint."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "422"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Payload validation error (", (0,jsx_runtime.jsx)(_components.code, {
              children: "VALIDATION_FAILED"
            }), ") — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalGuid"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "capturedAmount"
            }), " is missing."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "capture",
        label: "Capture pre-authorization",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"originalGuid\": \"0c9d9df0-48ec-11eb-81a1-470a19c80d3a\",\r\n    \"capturedAmount\": \"120.00\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/preauthorization/capture\"\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "with-tip",
        label: "With tip and reference",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"originalGuid\": \"0c9d9df0-48ec-11eb-81a1-470a19c80d3a\",\r\n    \"capturedAmount\": \"120.00\",\r\n    \"tipAmount\": \"5.00\",\r\n    \"customerReference\": \"hotel-folio-4422\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/preauthorization/capture\"\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "200",
        label: "200 OK",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n    \"httpStatus\": 200,\r\n    \"customFields\": {\r\n        \"tenderType\": \"Credit\",\r\n        \"RRN\": \"513815902180\",\r\n        \"issuerResponseCode\": \"200\"\r\n    },\r\n    \"acquirerTid\": \"0821599465\",\r\n    \"actionCode\": \"0000\",\r\n    \"agreementNumber\": \"123456789010102\",\r\n    \"approvalCode\": \"010119\",\r\n    \"batchNumber\": \"1\",\r\n    \"cardTypeName\": \"VISA\",\r\n    \"currency\": \"USD\",\r\n    \"expiryDateMMYY\": \"1027\",\r\n    \"holdAmount\": \"102.00\",\r\n    \"issuerResponseCode\": \"00\",\r\n    \"issuerResponseText\": \"COMPLETED\",\r\n    \"maskedCardNumber\": \"************0936\",\r\n    \"nonce\": \"1776156307790\",\r\n    \"originalAmount\": \"1.00\",\r\n    \"preAuthorizationGuid\": \"664ec4c0-37e6-11f1-bc66-3114cb76dabf\",\r\n    \"serverDateTime\": \"20260414094532102\",\r\n    \"terminalDateTime\": \"20260414094532085\",\r\n    \"transNumber\": \"000001\",\r\n    \"capturedAmount\": \"100.00\",\r\n    \"preAuthorizationCaptureGuid\": \"adad5660-37e6-11f1-9d29-81969834b189\"\r\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "422",
        label: "422 Validation Error",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"error\": {\r\n    \"statusCode\": 422,\r\n    \"name\": \"UnprocessableEntityError\",\r\n    \"message\": \"The request body is invalid.\",\r\n    \"code\": \"VALIDATION_FAILED\",\r\n    \"details\": [\r\n      {\r\n        \"path\": \"\",\r\n        \"code\": \"required\",\r\n        \"message\": \"must have required property 'capturedAmount'\",\r\n        \"info\": { \"missingProperty\": \"capturedAmount\" }\r\n      }\r\n    ]\r\n  }\r\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "moto-operations",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MOTO Operations"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "MOTO (Mail Order / Telephone Order)"
      }), " operations can also be processed ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "without a payment reader"
      }), ", using information\r\nthat is already stored in the gateway (tokens and references to previous transactions)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These endpoints are intended for MOTO scenarios where the merchant does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " need to collect or handle sensitive\r\ncard data (PAN, expiry date, CVV) in their own systems:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/moto/sale"
        }), " performs a sale using a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "previously generated card token"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "cardToken"
        }), ") that represents card details stored in the gateway."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/moto/refund"
        }), " performs a refund of a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "previous operation"
        }), ", using the card associated with that original operation (", (0,jsx_runtime.jsx)(_components.code, {
          children: "originalGuid"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/moto/reversal"
        }), " performs a reversal (void) of a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "previous operation"
        }), ", passing only its identifier (", (0,jsx_runtime.jsx)(_components.code, {
          children: "originalGuid"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Unlike the standard MOTO operations that use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/transactions"
        }), " and a physical terminal, these endpoints:"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Do ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "not"
          }), " require ", (0,jsx_runtime.jsx)(_components.code, {
            children: "serial_number"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "terminal_type"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Do ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "not"
          }), " receive raw card data in the request."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Rely on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "cardToken"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "originalGuid"
          }), " to reference card information already stored in the gateway."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All request and response payloads are defined in the corresponding ", (0,jsx_runtime.jsx)(_components.a, {
        href: "restobjects#moto",
        children: "Moto objects"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moto-sale",
      children: "MOTO Sale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MotoSale"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "POST /moto/sale"
      }), " is used to perform a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MOTO sale without a payment reader"
      }), ", using a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "card token"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "cardToken"
      }), ")\r\nthat was generated previously (for example, by a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "saleAndTokenizeCard"
      }), " operation)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The card details are ", (0,jsx_runtime.jsx)(_components.em, {
        children: "not"
      }), " sent in the request; they are resolved by the gateway using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cardToken"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Typical flow:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A card is captured securely in a previous flow, for example through the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "restendpoints#transactions",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/transactions"
          })
        }), " endpoint using a\r\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "saleAndTokenizeCard"
        }), " operation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The gateway returns a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cardToken"
        }), " (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "665630867"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The integrator can later perform one or more MOTO sales using that ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cardToken"
        }), ", without handling PAN/CVV again."]
      }), "\n"]
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
              children: "Header: ApiKeyCloud"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud API key used to authenticate the merchant."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Request Body: MotoSaleRequest"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "restobjects#motoSaleRequest",
              children: "MotoSaleRequest"
            }), " object containing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cardToken"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " and optional merchant references."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Typical fields in the request body (see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "restobjects#motoSaleRequest",
        children: "MotoSaleRequest"
      }), " for full details):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cardToken"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – Token representing the card stored in the gateway (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"665630867\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "amount"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – String amount in MAJOR units (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"20.00\""
        }), " for 20.00). Must be a positive integer string."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "currency"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – 3-character ISO 4217 currency code (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"EUR\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optional references for reconciliation: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "customerReference"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transactionReference"
        }), ", etc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "returns-2",
      children: "Returns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "200"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Sale successfully processed. The response body is a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "motoSaleResponse"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "restobjects#motoTransactionResponse",
              children: "Moto Transaction Response"
            }), " with the authorization result (approved/declined), authorization code, masked card details, acquirer TID, timestamps, etc."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "400"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Business rule error from the payment gateway (for example, CVV required, card token failure). Returned as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BadRequestError"
            }), ", with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.code"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.details"
            }), " containing the gateway error code and description."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "422"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Payload validation error (", (0,jsx_runtime.jsx)(_components.code, {
              children: "VALIDATION_FAILED"
            }), ") when required fields are missing or do not match the schema (invalid amount (must be a positive integer string in minor units), currency length, etc.)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5xx"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error or gateway unavailability. The final outcome may be unknown and may require reconciliation."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "code-example",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsx)(Tabs/* default */.A, {
      children: (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "request",
        label: "MOTO Sale",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"amount\": \"20.00\", // 20 => 20.00\r\n    \"currency\": \"EUR\",\r\n    \"cardToken\": \"665630867\",\r\n    \"customerReference\": \"order-12345\",\r\n    \"transactionReference\": \"b7b2360d-3e9e-4b62-9a3a-2e6ef6c5cd01\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/moto/sale\"\n"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "400-cvv",
        label: "400 CVV required (3107)",
        children: [(0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"error\": {\r\n    \"statusCode\": 400,\r\n    \"name\": \"BadRequestError\",\r\n    \"message\": \"CVV required\",\r\n    \"code\": \"3107\",\r\n    \"details\": {\r\n      \"errorGuid\": \"dae59b20-cf71-11f0-b588-a122fae316de\",\r\n      \"errorCode\": \"3107\",\r\n      \"description\": \"CVV required\",\r\n      \"httpStatus\": 400\r\n    }\r\n  }\r\n}\n"
          })
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["A very common cause of ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3107"
            }), " is having \"CVV/CV2 input mandatory\" enabled for Card Not Present."]
          })
        })]
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "400-token",
        label: "400 Card token failure (5252)",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"error\": {\r\n    \"code\": \"5252\",\r\n    \"details\": {\r\n      \"description\": \"Card token failure\",\r\n      \"errorCode\": \"5252\",\r\n      \"errorGuid\": \"10a3d120-cf75-11f0-95b2-770b7d1d8e67\",\r\n      \"httpStatus\": 404\r\n    },\r\n    \"message\": \"Card token failure\",\r\n    \"name\": \"BadRequestError\",\r\n    \"statusCode\": 400\r\n  }\r\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "422",
        label: "422 Validation Error",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"error\": {\r\n    \"code\": \"VALIDATION_FAILED\",\r\n    \"details\": [\r\n      {\r\n        \"code\": \"required\",\r\n        \"info\": {\r\n          \"missingProperty\": \"amount\"\r\n        },\r\n        \"message\": \"must have required property 'amount'\",\r\n        \"path\": \"\"\r\n      }\r\n    ],\r\n    \"message\": \"The request body is invalid. See error object `details` property for more info.\",\r\n    \"name\": \"UnprocessableEntityError\",\r\n    \"statusCode\": 422\r\n  }\r\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moto-refund",
      children: "MOTO Refund"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MotoRefund"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "POST /moto/refund"
      }), " is used to perform a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MOTO refund without a payment reader"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The refund is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "linked"
      }), " to a previous MOTO sale via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "originalGuid"
      }), ", and the gateway reuses the card associated with that\r\noriginal transaction. No card data is passed in the refund request."]
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
              children: "Header: ApiKeyCloud"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud API key used to authenticate the merchant."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Request Body: MotoRefundRequest"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "restobjects#motoRefundRequest",
              children: "MotoRefundRequest"
            }), " object containing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalGuid"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " and optional merchant references."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Typical fields (see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "restobjects#motoRefundRequest",
        children: "MotoRefundRequest"
      }), " for full details):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "originalGuid"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – GUID of the original sale to be refunded (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"1a41d9f0-cf72-11f0-95b2-770b7d1d8e67\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "amount"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – String amount to be refunded in MAJOR units (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"5.00\""
        }), " for $5.00). Must be a positive integer string."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "currency"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – 3-character ISO 4217 code (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"EUR\""
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"USD\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optional: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "customerReference"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "returns-3",
      children: "Returns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "200"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Refund successfully processed. The response body is a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "motoRefundResponse"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "restobjects#motoTransactionResponse",
              children: "Moto Transaction Response"
            }), " including ", (0,jsx_runtime.jsx)(_components.code, {
              children: "guid"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalGuid"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "maskedCardNumber"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "approvalCode"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "issuerResponseText"
            }), ", etc."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "400"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Business rule error from the payment gateway (for example, currency mismatch, refund amount greater than the original sale). Returned as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BadRequestError"
            }), ", with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.code"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.details"
            }), " describing the gateway error."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "422"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Payload validation error (", (0,jsx_runtime.jsx)(_components.code, {
              children: "VALIDATION_FAILED"
            }), ") when required fields are missing or invalid (missing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalGuid"
            }), ", invalid amount, invalid currency format, etc.)."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "code-example-1",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsx)(Tabs/* default */.A, {
      children: (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "request",
        label: "MOTO Refund",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"originalGuid\": \"1a41d9f0-cf72-11f0-95b2-770b7d1d8e67\",\r\n    \"amount\": \"5.00\", // 5 => 5.00\r\n    \"currency\": \"EUR\",\r\n    \"customerReference\": \"refund-98765\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/moto/refund\"\n"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "400-currency",
        label: "400 Currency mismatch (3210)",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"error\": {\r\n    \"code\": \"3210\",\r\n    \"details\": {\r\n      \"description\": \"Original and linked currency do not match\",\r\n      \"errorCode\": \"3210\",\r\n      \"errorGuid\": \"35a2b220-cf7a-11f0-b588-a122fae316de\",\r\n      \"httpStatus\": 400\r\n    },\r\n    \"message\": \"Original and linked currency do not match\",\r\n    \"name\": \"BadRequestError\",\r\n    \"statusCode\": 400\r\n  }\r\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "400-amount",
        label: "400 Amount exceeds original (3209)",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"error\": {\r\n    \"code\": \"3209\",\r\n    \"details\": {\r\n      \"description\": \"The requested refund amount is greater than the initial sale amount\",\r\n      \"errorCode\": \"3209\",\r\n      \"errorGuid\": \"e72ea940-cf7a-11f0-b588-a122fae316de\",\r\n      \"httpStatus\": 400\r\n    },\r\n    \"message\": \"The requested refund amount is greater than the initial sale amount\",\r\n    \"name\": \"BadRequestError\",\r\n    \"statusCode\": 400\r\n  }\r\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "422",
        label: "422 Validation Error",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Missing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "originalGuid"
          }), ", missing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "amount"
          }), ", invalid ", (0,jsx_runtime.jsx)(_components.code, {
            children: "currency"
          }), " length, or invalid ", (0,jsx_runtime.jsx)(_components.code, {
            children: "amount"
          }), " pattern — returned as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "422 VALIDATION_FAILED"
          }), " with one or more entries in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "error.details"
          }), "."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moto-reversal",
      children: "MOTO Reversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MotoReversal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "POST /moto/reversal"
      }), " is used to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reverse (void)"
      }), " a previous MOTO operation processed via the no-reader MOTO endpoints."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The request is linked to the original sale via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "originalGuid"
      }), ". No card data is sent; the gateway uses the original\r\ntransaction information."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reversals are typically used to cancel a MOTO sale shortly after authorization, subject to acquirer rules."
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
              children: "Header: ApiKeyCloud"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud API key used to authenticate the merchant."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Request Body: MotoReversalRequest"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "restobjects#motoReversalRequest",
              children: "MotoReversalRequest"
            }), " object referencing the original MOTO transaction (", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalGuid"
            }), ") and including the reversal ", (0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Typical fields (see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "restobjects#motoReversalRequest",
        children: "MotoReversalRequest"
      }), " for full details):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "originalGuid"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – GUID of the original sale to be reversed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "amount"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – String amount to reverse in MAJOR units (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"20.00\""
        }), " for $20.00). Must be a positive integer string."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "currency"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--secondary",
          children: "Optional"
        }), " – 3-character ISO 4217 code; if provided, must respect ", (0,jsx_runtime.jsx)(_components.code, {
          children: "minLength = 3"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "maxLength = 3"
        }), " and may need to match the original transaction’s currency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optional merchant references: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "customerReference"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transactionReference"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "returns-4",
      children: "Returns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "200"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reversal accepted and processed. Response body is a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "motoReversalResponse"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "restobjects#motoTransactionResponse",
              children: "Moto Transaction Response"
            }), " indicating whether the reversal was approved, with fields such as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "guid"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalGuid"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "issuerResponseCode"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "issuerResponseText"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "f25"
            }), ", etc."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "400"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Business rule error from the payment gateway (for example, unknown ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalGuid"
            }), ", reversal not allowed). Returned as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BadRequestError"
            }), ", with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.code"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.details"
            }), " describing the gateway error (for example, code ", (0,jsx_runtime.jsx)(_components.code, {
              children: "3153"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "422"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Payload validation error (", (0,jsx_runtime.jsx)(_components.code, {
              children: "VALIDATION_FAILED"
            }), ") when required fields are missing or invalid (missing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalGuid"
            }), ", missing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), ", invalid ", (0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), ", invalid ", (0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), " pattern)."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "code-example-2",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsx)(Tabs/* default */.A, {
      children: (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "request",
        label: "MOTO Reversal",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"originalGuid\": \"b28bdb10-cf87-11f0-b588-a122fae316de\",\r\n    \"amount\": \"20.00\", //20 => 20.00 || 2000 => 2000.00\r\n    \"currency\": \"EUR\",\r\n    \"customerReference\": \"void-001\",\r\n    \"transactionReference\": \"4d7b1a2c-5bfd-4a30-9b6f-123456789abc\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/moto/reversal\"\n"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "200",
        label: "200 OK",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"type\": \"motoReversalResponse\",\r\n  \"httpStatus\": 200,\r\n  \"amount\": \"20.00\",\r\n  \"currency\": \"EUR\",\r\n  \"guid\": \"3f7772a0-cf88-11f0-b588-a122fae316de\",\r\n  \"originalGuid\": \"b28bdb10-cf87-11f0-b588-a122fae316de\",\r\n  \"issuerResponseCode\": \"00\",\r\n  \"issuerResponseText\": \"Successful\",\r\n  \"maskedCardNumber\": \"************3555\",\r\n  \"f25\": \"4000\"\r\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "400",
        label: "400 Invalid originalGuid (3153)",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"error\": {\r\n    \"code\": \"3153\",\r\n    \"details\": {\r\n      \"description\": \"Unable to find message to reverse.\",\r\n      \"errorCode\": \"3153\",\r\n      \"errorGuid\": \"633a4370-cf88-11f0-b588-a122fae316de\",\r\n      \"httpStatus\": 404\r\n    },\r\n    \"message\": \"Unable to find message to reverse.\",\r\n    \"name\": \"BadRequestError\",\r\n    \"statusCode\": 400\r\n  }\r\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "422",
        label: "422 Validation Error",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Missing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "originalGuid"
          }), ", missing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "amount"
          }), ", invalid ", (0,jsx_runtime.jsx)(_components.code, {
            children: "currency"
          }), " length, or invalid ", (0,jsx_runtime.jsx)(_components.code, {
            children: "amount"
          }), " pattern — returned as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "422 VALIDATION_FAILED"
          }), " with one or more entries in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "error.details"
          }), "."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "batch-operations",
      children: ["Batch Operations ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--warning",
        children: "Beta"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Batch Operations are not available for all acquirers. Contact your Handpoint relationship manager to find out if this feature is supported for your acquirer."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Batch operations allow you to remotely ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "manage batches on a specific payment terminal"
      }), " using Cloud API."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These endpoints are typically used in scenarios where the acquirer or merchant workflow is batch-based (for example,\r\ndaily settlement batches per terminal)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cloud API currently supports the following batch operations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "POST /batch/close"
        }), " — requests the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "closure of a batch"
        }), " for a given terminal (", (0,jsx_runtime.jsx)(_components.code, {
          children: "deviceType"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "serialNumber"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "POST /batch/summary"
        }), " — retrieves a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "summary of a batch"
        }), " for a given terminal (", (0,jsx_runtime.jsx)(_components.code, {
          children: "deviceType"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "serialNumber"
        }), ") and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "batchNumber"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "POST /batch/detail"
        }), " — retrieves ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "batch detail"
        }), " (including a list of transactions) for a given terminal (", (0,jsx_runtime.jsx)(_components.code, {
          children: "deviceType"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "serialNumber"
        }), ") and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "batchNumber"
        }), " (and optional ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rrn"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All request and response payloads are defined in the corresponding ", (0,jsx_runtime.jsx)(_components.a, {
        href: "restobjects#batch",
        children: "Batch objects"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["In MOTO scenarios, the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deviceType"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "serialNumber"
        }), " fields can refer to a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "virtual terminal"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "VT"
        }), ") instead of a physical device. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VT"
        }), " as the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deviceType"
        }), " and the serial number of the virtual terminal assigned to the merchant. The serial number of the virtual terminal can be retrieved from the response of the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "restendpoints#initialize",
          children: "/initialize"
        }), " endpoint."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "close-batch",
      children: "Close Batch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BatchClose"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "POST /batch/close"
      }), " is used to request ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "closure of a batch"
      }), " for a specific payment terminal, identified by its\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "deviceType"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "serialNumber"
      }), ", and optionally a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "batchNumber"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Typical use cases:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "End-of-day batch closure triggered from a back-office or back-office job."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual batch close as part of a support or reconciliation process."
      }), "\n"]
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
              children: "Header: ApiKeyCloud"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud API key used to authenticate the merchant."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Request Body: BatchCloseRequest"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "restobjects#batchCloseRequest",
              children: "BatchCloseRequest"
            }), " object containing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "deviceType"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "serialNumber"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "batchNumber"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Typical fields in the request body (see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "restobjects#batchCloseRequest",
        children: "BatchCloseRequest"
      }), " for full details):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "deviceType"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – Terminal model identifier (for example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"PAXA920MAX\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "serialNumber"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – Serial number of the payment terminal (for example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"2740013262\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "batchNumber"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--secondary",
          children: "Optional"
        }), " – Identifier of the batch to close (for example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"1\""
        }), "), if not specified, the current open batch for that Terminal will be closed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "returns-5",
      children: "Returns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "200"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Batch close request accepted. The response body is a ", (0,jsx_runtime.jsx)(_components.a, {
              href: "restobjects#batchCloseResponse",
              children: "BatchCloseResponse"
            }), " with the batch number, a unique ", (0,jsx_runtime.jsx)(_components.code, {
              children: "closeBatchGuid"
            }), ", timestamps and an issuer-style response code/text."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "400"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Business rule error or generic gateway error. Returned as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BadRequestError"
            }), ", with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.code"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.message"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.details"
            }), " describing the problem."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "422"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Payload validation error (", (0,jsx_runtime.jsx)(_components.code, {
              children: "VALIDATION_FAILED"
            }), ") when required fields are missing or do not match the schema (for example, missing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "serialNumber"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5xx"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error or service unavailability. The final outcome of the batch close may be unknown and may require reconciliation or a retry at a later time."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "request",
        label: "Close batch",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"deviceType\": \"PAXA920MAX\",\r\n    \"serialNumber\": \"2740013262\",\r\n    \"batchNumber\": \"1\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/batch/close\"\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "validation",
        label: "Missing batchNumber",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"deviceType\": \"PAXA920MAX\",\r\n    \"serialNumber\": \"2740013262\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/batch/close\"\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "200",
        label: "200 OK",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"batchNumber\": \"1\",\r\n  \"closeBatchGuid\": \"14431ad0-d0dc-11f0-9ed0-695d1a368668\",\r\n  \"closedAt\": \"20251204064010281\",\r\n  \"customerReference\": {},\r\n  \"httpStatus\": \"200\",\r\n  \"issuerResponseCode\": \"00\",\r\n  \"issuerResponseText\": \"ACCEPTED\"\r\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "200x2",
        label: "200 OK",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n    \"httpStatus\": \"200\",\r\n    \"customerReference\": {},\r\n    \"customFields\": {\r\n        \"entry\": {\r\n            \"key\": \"issuerBatchCloseLocalTimestamp\",\r\n            \"value\": \"2026-05-07T10:02:12\"\r\n        }\r\n    },\r\n    \"batchNumber\": \"1\",\r\n    \"closeBatchGuid\": \"d1988a50-49fb-11f1-b64d-2969d719a012\",\r\n    \"closedAt\": \"20260507100212859\",\r\n    \"issuerResponseCode\": \"00\",\r\n    \"issuerResponseText\": \"ACCEPTED\",\r\n    \"batchStatus\": \"CLOSED\"\r\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "422",
        label: "422 Validation Error",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"error\": {\r\n    \"code\": \"VALIDATION_FAILED\",\r\n    \"details\": [\r\n      {\r\n        \"code\": \"required\",\r\n        \"info\": {\r\n          \"missingProperty\": \"batchNumber\"\r\n        },\r\n        \"message\": \"must have required property 'batchNumber'\",\r\n        \"path\": \"\"\r\n      }\r\n    ],\r\n    \"message\": \"The request body is invalid. See error object `details` property for more info.\",\r\n    \"name\": \"UnprocessableEntityError\",\r\n    \"statusCode\": 422\r\n  }\r\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "batch-summary",
      children: "Batch Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BatchSummary"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "POST /batch/summary"
      }), " is used to retrieve a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "summary of a batch"
      }), " for a specific payment terminal, identified by its\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "deviceType"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "serialNumber"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "batchNumber"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Typical use cases:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Back-office reconciliation after a batch close."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reporting and dashboards that need batch-level totals (number of transactions, net amount, status)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support tools that need to check the status of a batch on a given terminal."
      }), "\n"]
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
              children: "Header: ApiKeyCloud"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud API key used to authenticate the merchant."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Request Body: BatchSummaryRequest"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "restobjects#batchSummaryRequest",
              children: "BatchSummaryRequest"
            }), " object containing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "deviceType"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "serialNumber"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "batchNumber"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Typical fields in the request body (see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "restobjects#batchSummaryRequest",
        children: "BatchSummaryRequest"
      }), " for full details):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "deviceType"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – Terminal model identifier (for example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"PAXA920MAX\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "serialNumber"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – Serial number of the payment terminal (for example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"2740013262\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "batchNumber"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – Identifier of the batch whose summary is being requested (for example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"1\""
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "returns-6",
      children: "Returns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "200"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Batch summary successfully retrieved. The response body is a ", (0,jsx_runtime.jsx)(_components.a, {
              href: "restobjects#batchSummaryResponse",
              children: "BatchSummaryResponse"
            }), " with batch status, transaction counts, net amount and optional custom fields."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "400"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Business / lookup error (for example, the batch cannot be summarised for the given terminal). Returned as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BadRequestError"
            }), ", with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.code"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.message"
            }), " and optional ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.details"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "422"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Payload validation error (", (0,jsx_runtime.jsx)(_components.code, {
              children: "VALIDATION_FAILED"
            }), ") when required fields are missing or do not match the schema (for example, missing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "batchNumber"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5xx"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error or service unavailability. The batch itself is not modified; the integrator may retry later or reconcile through other means."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "request",
        label: "Get batch summary",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"deviceType\": \"PAXA920MAX\",\r\n    \"serialNumber\": \"2740013262\",\r\n    \"batchNumber\": \"1\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/batch/summary\"\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "validation",
        label: "Missing batchNumber",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"deviceType\": \"PAXA920MAX\",\r\n    \"serialNumber\": \"2740013262\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/batch/summary\"\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "200",
        label: "200 OK",
        children: [(0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"batchNumber\": \"1\",\r\n  \"batchStatus\": \"CLOSED\",\r\n  \"batchSummaryGuid\": \"61573ba0-08ac-11f1-b002-eb225f134f40\",\r\n  \"customFields\": {\r\n    \"entry\": [\r\n      {\r\n        \"key\": \"salesCount\",\r\n        \"value\": \"155\"\r\n      },\r\n      {\r\n        \"key\": \"refundsCount\",\r\n        \"value\": \"3\"\r\n      },\r\n      {\r\n        \"key\": \"issuerBatchCloseLocalTimestamp\",\r\n        \"value\": \"2025-12-05T11:00:00\"\r\n      }\r\n    ]\r\n  },\r\n  \"httpStatus\": \"200\",\r\n  \"issuerResponseCode\": \"00\",\r\n  \"issuerResponseText\": \"DATA RETRIEVED\",\r\n  \"netAmount\": \"245.00\",\r\n  \"transactionCount\": \"158\"\r\n}\n"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Key fields:"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "batchStatus"
            }), " – Current status of the batch (for example, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"CLOSED\""
            }), ")."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "transactionCount"
            }), " – Total number of transactions in the batch."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "netAmount"
            }), " – Net amount for the batch in major units as a string (for example, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"245.00\""
            }), ")."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "customFields.entry"
            }), " – Optional list of key/value pairs with acquirer-specific metrics (for example, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "salesCount"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "refundsCount"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "issuerBatchCloseLocalTimestamp"
            }), ")."]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "422",
        label: "422 Validation Error",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"error\": {\r\n    \"code\": \"VALIDATION_FAILED\",\r\n    \"details\": [\r\n      {\r\n        \"code\": \"required\",\r\n        \"info\": {\r\n          \"missingProperty\": \"batchNumber\"\r\n        },\r\n        \"message\": \"must have required property 'batchNumber'\",\r\n        \"path\": \"\"\r\n      }\r\n    ],\r\n    \"message\": \"The request body is invalid. See error object `details` property for more info.\",\r\n    \"name\": \"UnprocessableEntityError\",\r\n    \"statusCode\": 422\r\n  }\r\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "batch-detail",
      children: "Batch Detail"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "BatchDetail"
      }), "\r\nA Batch Detail allows the user to retrieve information about a specific batch (including a list of transacctions) included in the batch for a specific payment terminal."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "POST /batch/detail"
      }), " is used to retrieve information about a specific batch (including a list of transacctions) included in the batch for a specific payment terminal, identified by its\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "deviceType"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "serialNumber"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "batchNumber"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RRN"
      }), "."]
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
              children: "Header: ApiKeyCloud"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud API key used to authenticate the merchant."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Request Body: BatchDetailRequest"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "restobjects#batchDetailRequest",
              children: "BatchDetailRequest"
            }), " object containing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "deviceType"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "serialNumber"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "batchNumber"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rrn"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Typical fields in the request body (see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "restobjects#batchDetailRequest",
        children: "BatchDetailRequest"
      }), " for full details):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "deviceType"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – Terminal model identifier (for example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"PAXA920MAX\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "serialNumber"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – Serial number of the payment terminal (for example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"2740013262\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "batchNumber"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Required"
        }), " – Identifier of the batch whose summary is being requested (for example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"1\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "rrn"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "badge badge--primary",
          children: "Optional"
        }), " – Retrieval Reference Number, unique number assigned by the acquirer (for example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"123\""
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "returns-7",
      children: "Returns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "200"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Batch detail successfully retrieved. The response body is a ", (0,jsx_runtime.jsx)(_components.a, {
              href: "restobjects#batchDetailResponse",
              children: "BatchDetailResponse"
            }), " with batch status and optional details fields."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "400"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Business / lookup error (for example, the batch cannot be summarised for the given terminal). Returned as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BadRequestError"
            }), ", with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.code"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.message"
            }), " and optional ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.details"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "422"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Payload validation error (", (0,jsx_runtime.jsx)(_components.code, {
              children: "VALIDATION_FAILED"
            }), ") when required fields are missing or do not match the schema (for example, missing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "batchNumber"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5xx"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error or service unavailability. The batch itself is not modified; the integrator may retry later or reconcile through other means."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requests"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "request",
        label: "Get batch detail",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"deviceType\": \"PAXA920MAX\",\r\n    \"serialNumber\": \"2740013262\",\r\n    \"batchNumber\": \"1\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/batch/detail\"\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "validation",
        label: "Missing batchNumber",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"deviceType\": \"PAXA920MAX\",\r\n    \"serialNumber\": \"2740013262\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/batch/detail\"\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Responses"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "200",
        label: "200 OK",
        children: [(0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"httpStatus\": \"200\",\r\n  \"batchNumber\": \"1\",\r\n  \"closedAt\": \"20260213135114884\",\r\n  \"issuerResponseCode\": \"00\",\r\n  \"issuerResponseText\": \"Batch detail retrieved\",\r\n  \"details\": [\r\n    {\r\n      \"transactionType\": \"SALE\",\r\n      \"amount\": \"100.00\",\r\n      \"batchDetailElementGuid\": \"2fac8676-396a-4cf1-a5ab-650f3f79e923\"\r\n    },\r\n    {\r\n      \"transactionType\": \"SALE\",\r\n      \"retrievalReferenceNumber\": \"RRN08236\",\r\n      \"amount\": \"50.00\",\r\n      \"batchDetailElementGuid\": \"dcb718ef-59f0-4de8-b414-41048782aff9\"\r\n    },\r\n    {\r\n      \"transactionType\": \"REFUND\",\r\n      \"retrievalReferenceNumber\": \"RRN08237\",\r\n      \"amount\": \"25.00\",\r\n      \"batchDetailElementGuid\": \"d1a7ef06-c429-4a57-a07b-b461482bcafa\"\r\n    }\r\n  ],\r\n  \"batchDetailGuid\": \"10360390-08e4-11f1-8bbe-a982e87fcbf2\",\r\n  \"batchStatus\": \"CLOSED\"\r\n}\n"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Key fields:"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "batchStatus"
            }), " – Current status of the batch (for example, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"CLOSED\""
            }), ")."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "details.entry"
            }), " – Optional list with transaction info (for example, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionType"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "retrievalReferenceNumber"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "batchDetailElementGuid"
            }), ")."]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "422",
        label: "422 Validation Error",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"error\": {\r\n    \"code\": \"VALIDATION_FAILED\",\r\n    \"details\": [\r\n      {\r\n        \"code\": \"required\",\r\n        \"info\": {\r\n          \"missingProperty\": \"batchNumber\"\r\n        },\r\n        \"message\": \"must have required property 'batchNumber'\",\r\n        \"path\": \"\"\r\n      }\r\n    ],\r\n    \"message\": \"The request body is invalid. See error object `details` property for more info.\",\r\n    \"name\": \"UnprocessableEntityError\",\r\n    \"statusCode\": 422\r\n  }\r\n}\n"
          })
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

/***/ 19365
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
var tabsUtils = __webpack_require__(47751);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabItem":"tabItem_Ymn6"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabItemPanel({children,className,hidden}){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{role:"tabpanel",className:(0,clsx/* default */.A)(styles_module.tabItem,className),hidden,children:children});}function TabItem({children,className,value}){const{selectedValue,lazy}=(0,tabsUtils/* useTabs */.uc)();const isSelected=value===selectedValue;// TODO Docusaurus v4: use <Activity> ?
if(!isSelected&&lazy){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)(TabItemPanel,{className:className,hidden:!isSelected,children:children});}

/***/ },

/***/ 4865
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(17559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
var tabsUtils = __webpack_require__(47751);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(23104);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(92303);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabList({className}){const{selectedValue,selectValue,tabValues,block}=(0,tabsUtils/* useTabs */.uc)();const tabRefs=[];const{blockElementScrollPositionUntilNextRender}=(0,scrollUtils/* useScrollPositionBlocker */.a_)();const handleTabChange=event=>{const newTab=event.currentTarget;const newTabIndex=tabRefs.indexOf(newTab);const newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};const handleKeydown=event=>{let focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{const nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=tabRefs[nextTab]??tabRefs[0];break;}case'ArrowLeft':{const prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=tabRefs[prevTab]??tabRefs[tabRefs.length-1];break;}default:break;}focusElement?.focus();};return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx/* default */.A)('tabs',{'tabs--block':block},className),children:tabValues.map(({value,label,attributes})=>/*#__PURE__*/(0,jsx_runtime.jsx)("li",{// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,ref:ref=>{tabRefs.push(ref);},onKeyDown:handleKeydown,onClick:handleTabChange,...attributes,className:(0,clsx/* default */.A)('tabs__item',styles_module.tabItem,attributes?.className,{'tabs__item--active':selectedValue===value}),children:label??value},value))});}function TabContent({children}){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-top--md",children:children});}function TabsContainer({className,children}){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.tabs.container,// former name kept for backward compatibility
// see https://github.com/facebook/docusaurus/pull/4086
'tabs-container',styles_module.tabList),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TabList// Surprising but historical
// className is applied on TabList, not on TabsContainer
,{className:className}),/*#__PURE__*/(0,jsx_runtime.jsx)(TabContent,{children:children})]});}function Tabs(props){const isBrowser=(0,useIsBrowser/* default */.A)();const value=(0,tabsUtils/* useTabsContextValue */.OC)(props);return/*#__PURE__*/(0,jsx_runtime.jsx)(tabsUtils/* TabsProvider */.O_,{value:value// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TabsContainer,{className:props.className,children:(0,tabsUtils/* sanitizeTabsChildren */.vT)(props.children)})},String(isBrowser));}

/***/ },

/***/ 47751
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OC: () => (/* binding */ useTabsContextValue),
/* harmony export */   O_: () => (/* binding */ TabsProvider),
/* harmony export */   uc: () => (/* binding */ useTabs),
/* harmony export */   vT: () => (/* binding */ sanitizeTabsChildren)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56347);
/* harmony import */ var _docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(205);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57485);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70679);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31682);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function sanitizeTabsChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(child=>child!=='\n');}function extractChildrenTabValues(children){// ✅ <TabItem value="red"/> => true
// ✅ <CustomTabItem value="red"/> => true
// ❌ <RedTabItem value="tab-value"/> => requires <Tabs values> prop
function isTabItemWithValueProp(comp){const{props}=comp;return!!props&&typeof props==='object'&&'value'in props;}const elements=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).flatMap(child=>{// Historical case, not sure when it happens, do we really need this?
if(!child){return[];}if(/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)&&isTabItemWithValueProp(child)){return[child];}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
const badChildTypeName=// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name;throw new Error(`Docusaurus error: Bad <Tabs> child <${badChildTypeName}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.
If you do not want to pass on a "value" prop to the direct children of <Tabs>, you can also pass an explicit <Tabs values={...}> prop.`);});return elements.map(({props:{value,label,attributes,default:isDefault}})=>({value,label,attributes,default:isDefault}));}function ensureNoDuplicateValue(values){const dup=(0,_index__WEBPACK_IMPORTED_MODULE_5__/* .duplicates */ .XI)(values,(a,b)=>a.value===b.value);if(dup.length>0){throw new Error(`Docusaurus error: Duplicate values "${dup.map(a=>`'${a.value}'`).join(', ')}" found in <Tabs>. Every value needs to be unique.`);}}function useTabValues(props){const{values:valuesProp,children}=props;return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{const values=valuesProp??extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue({value,tabValues}){return tabValues.some(a=>a.value===value);}function getInitialStateValue({defaultValue,tabValues}){if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues})){throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${tabValues.map(a=>a.value).join(', ')}. If you intend to show no default tab, use defaultValue={null} instead.`);}return defaultValue;}const defaultTabValue=tabValues.find(tabValue=>tabValue.default)??tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return`docusaurus.tab.${groupId}`;}function getQueryStringKey({queryString=false,groupId}){if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);}return groupId??null;}function useTabQueryString({queryString=false,groupId}){const history=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useHistory */ .W6)();const key=getQueryStringKey({queryString,groupId});const value=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useQueryStringValue */ .aZ)(key);const setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue=>{if(!key){return;// no-op
}const searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace({...history.location,search:searchParams.toString()});},[key,history]);return[value,setValue];}function useTabStorage({groupId}){const key=getStorageKey(groupId);const[value,storageSlot]=(0,_index__WEBPACK_IMPORTED_MODULE_4__/* .useStorageSlot */ .Dv)(key);const setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue=>{if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabsContextValue(props){const{defaultValue,queryString=false,groupId}=props;const tabValues=useTabValues(props);const[selectedValue,setSelectedValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>getInitialStateValue({defaultValue,tabValues}));const[queryStringValue,setQueryString]=useTabQueryString({queryString,groupId});const[storageValue,setStorageValue]=useTabStorage({groupId});// We sync valid querystring/storage value to state on change + hydration
const valueToSync=(()=>{const value=queryStringValue??storageValue;if(!isValidValue({value,tabValues})){return null;}return value;})();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(()=>{if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);const selectValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue=>{if(!isValidValue({value:newValue,tabValues})){throw new Error(`Can't select invalid tab value=${newValue}`);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue,selectValue,tabValues,lazy:props.lazy??false,block:props.block??false};}const TabsContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function useTabs(){const contextValue=react__WEBPACK_IMPORTED_MODULE_0__.useContext(TabsContext);if(!contextValue){throw new Error('useTabsContext() must be used within a Tabs component');}return contextValue;}function TabsProvider(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabsContext.Provider,{value:props.value,children:props.children});}

/***/ },

/***/ 6287
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/getTransactionStatusEndpoint.drawio-c446aeef53cce796e297b0f95ff8318a.png");

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