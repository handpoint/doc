"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[60040],{

/***/ 64764
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_restapi_versioned_docs_version_rest_api_2_26_0_restendpoints_md_065_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/restapi/site-restapi-versioned-docs-version-rest-api-2-26-0-restendpoints-md-065.json
const site_restapi_versioned_docs_version_rest_api_2_26_0_restendpoints_md_065_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"restendpoints","title":"REST API Endpoints","description":"/initialize","source":"@site/restapi_versioned_docs/version-REST API 2.26.0/restendpoints.md","sourceDirName":".","slug":"/restendpoints","permalink":"/legacy/restapi/REST API 2.26.0/restendpoints","draft":false,"unlisted":false,"tags":[],"version":"REST API 2.26.0","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"id":"restendpoints"},"sidebar":"tutorialSidebar","previous":{"title":"Handpoint Sandbox","permalink":"/legacy/restapi/REST API 2.26.0/restsandbox"},"next":{"title":"Objects","permalink":"/legacy/restapi/REST API 2.26.0/restobjects"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./restapi_versioned_docs/version-REST API 2.26.0/restendpoints.md


const frontMatter = {
	sidebar_position: 6,
	id: 'restendpoints'
};
const contentTitle = 'REST API Endpoints';

const assets = {

};



const toc = [{
  "value": "/initialize",
  "id": "initialize",
  "level": 2
}, {
  "value": "/transactions",
  "id": "transactions",
  "level": 2
}, {
  "value": "/transaction-result/{transactionResultId}",
  "id": "transaction-resulttransactionresultid",
  "level": 2
}, {
  "value": "/transactions/{guid}/tip-adjustment",
  "id": "transactionsguidtip-adjustment",
  "level": 2
}, {
  "value": "/transactions/{guid}/token",
  "id": "transactionsguidtoken",
  "level": 2
}, {
  "value": "Transaction Result Recovery",
  "id": "transaction-result-recovery",
  "level": 2
}, {
  "value": "/transactions/{transactionReference}/status",
  "id": "transactionstransactionreferencestatus",
  "level": 3
}, {
  "value": "/transactions/{transactionReference}/status/{selector}",
  "id": "transactionstransactionreferencestatusselector",
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
  "value": "Set Password Protection",
  "id": "set-password-protection",
  "level": 3
}, {
  "value": "Reboot Device",
  "id": "reboot-device",
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
  "value": "MOTO Operations (no reader)",
  "id": "moto-operations-no-reader",
  "level": 2
}, {
  "value": "/moto/sale",
  "id": "motosale",
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
  "value": "Behaviour examples",
  "id": "behaviour-examples",
  "level": 4
}, {
  "value": "Code example – MOTO sale with <code>cardToken</code>",
  "id": "code-example--moto-sale-with-cardtoken",
  "level": 4
}, {
  "value": "/moto/refund",
  "id": "motorefund",
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
  "value": "Behaviour examples",
  "id": "behaviour-examples-1",
  "level": 4
}, {
  "value": "Code example – partial MOTO refund by <code>originalGuid</code>",
  "id": "code-example--partial-moto-refund-by-originalguid",
  "level": 4
}, {
  "value": "/moto/reversal",
  "id": "motoreversal",
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
  "value": "Behaviour examples",
  "id": "behaviour-examples-2",
  "level": 4
}, {
  "value": "Code example – MOTO reversal by <code>originalGuid</code>",
  "id": "code-example--moto-reversal-by-originalguid",
  "level": 4
}, {
  "value": "Batch Operations <span class=\"badge badge--warning\">Beta</span>",
  "id": "batch-operations-beta",
  "level": 2
}, {
  "value": "/batch/close",
  "id": "batchclose",
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
  "value": "Behaviour examples",
  "id": "behaviour-examples-3",
  "level": 4
}, {
  "value": "Code example – Close batch via <code>curl</code>",
  "id": "code-example--close-batch-via-curl",
  "level": 4
}, {
  "value": "/batch/summary",
  "id": "batchsummary",
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
  "value": "Behaviour examples",
  "id": "behaviour-examples-4",
  "level": 4
}, {
  "value": "Code example – Batch summary",
  "id": "code-example--batch-summary",
  "level": 4
}, {
  "value": "/batch/detail",
  "id": "batchdetail",
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
  "value": "Behaviour examples",
  "id": "behaviour-examples-5",
  "level": 4
}, {
  "value": "Code example – Batch detail",
  "id": "code-example--batch-detail",
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
      id: "initialize",
      children: "/initialize"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initialize"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initializes the REST API client and returns the list of payment terminals associated with the merchant account. We recommend that you display the list of available payment terminals to the merchant in your software. Each API key is unique per merchant and needs to be configurable in your backend."
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
            children: "Api key used to authenticate the merchant. (UNIQUE per Merchant)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.th, {
            children: "Devices"
          })
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsxs)(_components.td, {
            children: ["List of ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/REST%20API%202.26.0/restobjects#deviceObject",
              children: "Device"
            }), " object."]
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "Operation executed using CLI tool CURL:\r\n\r\nREQUEST:\r\n  curl -X GET \\\r\n   -H \"ApiKeyCLoud: MeRcHaNt-ApIkEy\" \\\r\n   \"https://cloud.handpoint.com/initialize\" (production)\r\n   \"https://cloud.handpoint.io/initialize\" (development)\r\n\r\nRESPONSE:\r\n Code 200 -> Body:\r\n  [\r\n    {\r\n      \"merchant_id_alpha\": \"merchantID\",\r\n      \"serial_number\": \"082104578\",\r\n      \"ssk\": \"A1B2C3D4E5F60718293A4B5C6D7E8F901A2B3C4D5E6F7890ABCDEF0123456789\",\r\n      \"terminal_type\": \"PAXA920\"\r\n    }\r\n  ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Reminder that SSK (Shared Secret Key) is a value unique to a Merchant, and the same Merchant (SSK) can have assigned multiple devices from different manufacturers. This includes PAX and Datecs (eg. HiLite)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transactions",
      children: "/transactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Transactions"
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
              href: "/legacy/restapi/REST%20API%202.26.0/restobjects#transactionRequest",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "Operation executed using CLI tool CURL:\r\nREQUEST:\r\n    curl -X POST \\\\\r\n     -H\"ApiKeyCLoud: MeRcHaNt-ApIkEy\" \\\\\r\n     -H\"Content-Type: application/json\" \\\\\r\nTransaction Request without callbackUrl and token\r\n     -d '{\r\n         \"operation\":\"sale\",\r\n         \"amount\":\"10000\",\r\n         \"currency\":\"EUR\",\r\n         \"terminal_type\":\"PAXA920\",\r\n         \"serial_number\":\"1547854757\",\r\n         \"customerReference\":\"op15248\",\r\n         \"transactionReference\": \"2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f\"\r\n          }' \\\\\r\nTransaction Request with callbackUrl and token\r\n     -d '{\r\n         \"operation\":\"sale\",\r\n         \"amount\":\"10000\",\r\n         \"currency\":\"EUR\",\r\n         \"terminal_type\":\"PAXA920\",\r\n         \"serial_number\":\"1547854757\",\r\n         \"customerReference\":\"op15248\",\r\n         \"callbackUrl\":\"https://url.where.the.result.is.served.com\",\r\n         \"token\":\"123456789\",\r\n         \"transactionReference\": \"2bfde1fc-23b1-4c67-93d9-1d4a557f4d4f\"\r\n          }' \\\\  \r\n   \"https://cloud.handpoint.com/transactions\" (production)\r\n   \"https://cloud.handpoint.io/transactions\" (development)\r\n\r\nRESPONSES:\r\n  Code 202\r\nTransaction Request without callbackUrl\r\n    {\r\n      \"transactionResultId\": \"0821032398-1628774190395\",\r\n      \"statusMessage\": \"Operation Accepted\",\r\n      \"transactionReference\":\"00000000-0000-0000-0000-000000000000\"\r\n    }\r\n \r\nTransaction Request with callbackUrl and token\r\n    {\r\n      \"statusMessage\": \"Operation Accepted\",\r\n      \"transactionReference\":\"00000000-0000-0000-0000-000000000000\"\r\n    }\r\n\r\n  Code 400 Ex:DeviceIsBusy\r\n    {\r\n    \"error\": {\r\n      \"statusCode\": 400,\r\n      \"name\":\"BadRequestError\",\r\n      \"message\": {\r\n          \"error\": 1001,\r\n          \"message\":\"The device is busy\"\r\n        }\r\n      }\r\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transaction-resulttransactionresultid",
      children: "/transaction-result/{transactionResultId}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TransactionResultRetrieval"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "Operation executed using CLI tool CURL:\r\nREQUEST:\r\n    curl -X GET \\\\\r\n      -H\"ApiKeyCLoud: MeRcHaNt-ApIkEy\" \\\\\r\n      \"https://cloud.handpoint.com/transaction-result/0821032398-1628774190395\" (production)\r\n      \"https://cloud.handpoint.io/transaction-result/0821032398-1628774190395\" (development)\r\n\r\nRESPONSE:\r\n{\r\n  \"aid\": \"A0000000041010\",\r\n  \"arc\": \"0000\",\r\n  \"authorisationCode\": \"123456\",\r\n  \"balance\": null,\r\n  \"budgetNumber\": \"\",\r\n  \"cardEntryType\": \"UNDEFINED\",\r\n  \"cardLanguagePreference\": \"\",\r\n  \"cardSchemeName\": \"MasterCard\",\r\n  \"cardToken\": \"\",\r\n  \"chipTransactionReport\": \"\",\r\n  \"currency\": \"USD\",\r\n  \"customerReceipt\": \"https://s3.[...]/customerReceipt.html\",\r\n  \"customerReference\": \"\",\r\n  \"deviceStatus\": {\r\n      \"applicationName\": \"ClientApp\",\r\n      \"applicationVersion\": \"20.1.0\",\r\n      \"batteryCharging\": \"Not Charging\",\r\n      \"batteryStatus\": \"100\",\r\n      \"batterymV\": \"4126\",\r\n      \"bluetoothName\": \"PAXA920\",\r\n      \"externalPower\": \"USB\",\r\n      \"serialNumber\": \"0821032398\",\r\n      \"statusMessage\": \"Approved or completed successfully\"\r\n  },\r\n  \"dueAmount\": 0,\r\n  \"errorMessage\": \"\",\r\n  \"expiryDateMMYY\": \"0422\",\r\n  \"finStatus\": \"AUTHORISED\",\r\n  \"iad\": \"0210A000002A0000000000000000000000FF\",\r\n  \"issuerResponseCode\": \"00\",\r\n  \"maskedCardNumber\": \"************1456\",\r\n  \"merchantAddress\": \"Plaza Soledad Torres Acosta 1 28013 Madrid\",\r\n  \"merchantName\": \"Hago la cama\",\r\n  \"merchantReceipt\": \"https://s3.[...]/merchantReceipt.html\",\r\n  \"mid\": \"\",\r\n  \"originalEFTTransactionID\": \"\",\r\n  \"paymentScenario\": \"CHIPCONTACTLESS\",\r\n  \"rrn\": \"\",\r\n  \"signatureUrl\": \"\",\r\n  \"statusMessage\": \"Approved or completed successfully\",\r\n  \"tenderType\": \"CREDIT\",\r\n  \"tid\": \"ACQUIRER_TID\",\r\n  \"tipAmount\": 0,\r\n  \"totalAmount\": 100,\r\n  \"transactionID\": \"01236fc0-8192-11eb-9aca-ad4b0e95f241\",\r\n  \"tsi\": \"0000\",\r\n  \"tvr\": \"0400008001\",\r\n  \"type\": \"SALE\",\r\n  \"unMaskedPan\": \"\",\r\n  \"verificationMethod\": \"UNDEFINED\",\r\n  \"efttimestamp\": 1615374961000,\r\n  \"efttransactionID\": \"01236fc0-8192-11eb-9aca-ad4b0e95f241\",\r\n  \"requestedAmount\": 100,\r\n  \"tipPercentage\": 0,\r\n  \"recoveredTransaction\": false,\r\n  \"cardHolderName\": \"cardholder name\"\r\n}\n"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transactionsguidtip-adjustment",
      children: "/transactions/{guid}/tip-adjustment"
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
              href: "/legacy/restapi/REST%20API%202.26.0/restobjects#tip-adjustment",
              children: "TipAdjustment"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object containing the amount and currency of the tip adjustment."
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "Operation executed using CLI tool CURL:\r\nREQUEST:\r\n    curl --location --request POST 'https://cloud.handpoint.com/transactions/ff6da784-8b57-11ed-9891-ebe2a88ff071/tip-adjustment' (production)\\\r\n    curl --location --request POST 'https://cloud.handpoint.io/transactions/ff6da784-8b57-11ed-9891-ebe2a88ff071/tip-adjustment' (development)\\\r\n          --header 'ApiKeyCloud: MeRcHaNt-ApI-KeY' \\\r\n          --header 'Content-Type: application/json' \\\r\n          --data-raw '{\r\n              \"amount\": 5.25\r\n          }'\r\n\r\nRESPONSE code 200:\r\n{\r\n    \"statusMessage\": \"tip adjusted\"\r\n}\r\n\r\nError example response (using invalid guid):\r\n{\r\n    \"error\": {\r\n        \"statusCode\": 400,\r\n        \"name\": \"BadRequestError\",\r\n        \"message\": \"Invalid guid [fake-guid]\"\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transactionsguidtoken",
      children: "/transactions/{guid}/token"
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
              href: "/legacy/restapi/REST%20API%202.26.0/restobjects#deferredTokenizationResponse",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "Operation executed using CLI tool CURL:\r\n\r\nREQUEST (sale tokenization):\r\n  curl -X GET \\\r\n   -H \"ApiKeyCloud: MeRcHaNt-ApIkEy\" \\\r\n   -H \"Content-Type: application/json\" \\\r\n   \"https://cloud.handpoint.com/transactions/75413c40-21db-11f1-991b-6f80eaf25911/token\" (production)\r\n   \"https://cloud.handpoint.io/transactions/75413c40-21db-11f1-991b-6f80eaf25911/token\" (development)\r\n\r\nRESPONSE code 200:\r\n{\r\n    \"agreementNumber\": \"123456789010102\",\r\n    \"cardToken\": \"665630867\",\r\n    \"cardTokenizationGuid\": \"7df78050-21dc-11f1-991b-6f80eaf25911\",\r\n    \"expiryDateMMYY\": \"0927\",\r\n    \"httpStatus\": \"200\",\r\n    \"maskedCardNumber\": \"************3555\",\r\n    \"serverDateTime\": \"20260317083711509\",\r\n    \"transactionReference\": \"75413c40-21db-11f1-991b-6f80eaf25911\"\r\n}\r\n\r\nError example response (transaction type not eligible for deferred tokenization):\r\n{\r\n    \"error\": {\r\n        \"details\": {\r\n            \"body\": {\r\n                \"error\": {\r\n                    \"errorCode\": \"3112\",\r\n                    \"errorGuid\": \"624d05e0-21dd-11f1-991b-6f80eaf25911\",\r\n                    \"httpStatus\": \"403\",\r\n                    \"reason\": \"Transaction type is not eligible for deferred tokenization\"\r\n                }\r\n            },\r\n            \"status\": 403\r\n        },\r\n        \"message\": \"Viscus operation failed\",\r\n        \"name\": \"BadRequestError\",\r\n        \"statusCode\": 400\r\n    }\r\n}\n"
      })
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
              href: "/legacy/restapi/REST%20API%202.26.0/restobjects#transaction-result-object",
              children: "Transaction Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/REST%20API%202.26.0/restobjects#transaction-result-object",
              children: "Transaction Result"
            }), " is delivered to the callback URL from the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/REST%20API%202.26.0/restobjects#transaction-request-object",
              children: "Transaction Request"
            }), "."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transactionstransactionreferencestatus",
      children: "/transactions/{transactionReference}/status"
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
        children: "https://transactions.handpoint.com/transactions/\\{transactionReference\\}/status"
      }), " endpoint is a RESTful API endpoint designed to retrieve the status of the first transaction associated with a given ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionReference"
      }), ". This endpoint returns the status of the initial transaction linked to the reference, reflecting the current state of that transaction.The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionReference"
      }), " is a unique value that you need to generate and pass in the original ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.26.0/restobjects#transactionRequest",
        children: " transaction request"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The main transaction result ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.26.0/restobjects#financialStatus",
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
        }), ".\r\nIt's our recommendation that a new value is created and sent for every request attempt."]
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
              children: "OK"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Response code ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "200"
            }), " + ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/REST%20API%202.26.0/restobjects#transaction-result-object",
              children: "Transaction Result"
            }), ". ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), " There are two possible outcomes:", (0,jsx_runtime.jsx)("br", {}), " - The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " was found in the database and the associated ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/REST%20API%202.26.0/restobjects#transaction-result-object",
              children: "Transaction Result"
            }), " object is delivered. By checking the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/REST%20API%202.26.0/restobjects#financialStatus",
              children: "financial status"
            }), " field you will be able to know the status of the transaction at the time of the query. ", (0,jsx_runtime.jsx)("br", {}), " - The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " was not found in the Handpoint gateway. The ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/REST%20API%202.26.0/restobjects#financialStatus",
              children: "financial status"
            }), " received in this case will be ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UNDEFINED"
            }), " (NOT FOUND)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unauthorized"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Response code ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "401"
            }), ". The client request has not been completed because it lacks valid authentication credentials for the requested resource. Please check your API Key is correct for this ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Forbidden"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Response code ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "403"
            }), ". Authentication was unsuccessful. Please check your API Key is valid."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "Operation executed using CLI tool CURL:\r\nREQUEST:\r\n    curl -X GET \\\\\r\n      -H\"ApiKeyCLoud: MeRcHaNt-ApIkEy\" \\\\\r\n      \"https://transactions.handpoint.com/transactions/b25381cc-2396-42b5-94cd-8f8b3112de0e/status\" (production)\r\n      \"https://transactions.handpoint.io/transactions/b25381cc-2396-42b5-94cd-8f8b3112de0e/status\" (development)\r\n\r\nRESPONSE:\r\n{\r\n    \"aid\": \"A0000000031010\",\r\n    \"arc\": \"00\",\r\n    \"iad\": \"06011203A00000\",\r\n    \"tsi\": \"\",\r\n    \"tvr\": \"0000000000\",\r\n    \"cardEntryType\": \"ICC\",\r\n    \"cardLanguagePreference\": \"6573\",\r\n    \"currency\": \"USD\",\r\n    \"type\": \"SALE\",\r\n    \"tipAmount\": 0,\r\n    \"totalAmount\": 3000,\r\n    \"requestedAmount\": 3000,\r\n    \"dueAmount\": 0,\r\n    \"tipPercentage\": 0,\r\n    \"efttimestamp\": 1775047061554,\r\n    \"originalEFTTransactionID\": \"\",\r\n    \"paymentScenario\": \"CHIPCONTACTLESS\",\r\n    \"verificationMethod\": \"UNDEFINED\",\r\n    \"authorisationCode\": \"010119\",\r\n    \"cardSchemeName\": \"VISA\",\r\n    \"cardToken\": \"\",\r\n    \"maskedCardNumber\": \"************0936\",\r\n    \"cardTypeId\": \"\",\r\n    \"customerReference\": \"\",\r\n    \"efttransactionID\": \"605597c0-2dc7-11f1-af50-e16c4b0ae383\",\r\n    \"transactionID\": \"605597c0-2dc7-11f1-af50-e16c4b0ae383\",\r\n    \"errorMessage\": \"\",\r\n    \"expiryDateMMYY\": \"1027\",\r\n    \"issuerResponseCode\": \"00\",\r\n    \"batchNumber\": \"\",\r\n    \"rrn\": \"513815902180\",\r\n    \"tenderType\": \"CREDIT\",\r\n    \"unMaskedPan\": \"\",\r\n    \"holdAmount\": 0,\r\n    \"increaseAmount\": 0,\r\n    \"capturedAmount\": 0,\r\n    \"merchantAddress\": \"\",\r\n    \"merchantName\": \"\",\r\n    \"mid\": \"\",\r\n    \"cardHolderName\": \"\",\r\n    \"chipTransactionReport\": \"\",\r\n    \"customerReceipt\": \"\",\r\n    \"merchantReceipt\": \"\",\r\n    \"signatureUrl\": \"\",\r\n    \"statusMessage\": \"\",\r\n    \"tid\": \"\",\r\n    \"transactionReference\": \"b25381cc-2396-42b5-94cd-8f8b3112de0e\",\r\n    \"transactionOrigin\": \"\",\r\n    \"finStatus\": \"AUTHORISED\"\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transactionstransactionreferencestatusselector",
      children: "/transactions/{transactionReference}/status/{selector}"
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
        children: "https://transactions.handpoint.io/transactions/\\{transactionReference\\}/status/\\{selector\\}"
      }), " endpoint is a RESTful API that retrieves the status of transactions associated with a given ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionReference"
      }), ". The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\{selector\\}"
      }), " path parameter allows you to specify whether you want to retrieve the status of a specific transaction by its index or retrieve all transactions associated with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionReference"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Selector Values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Selector"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "all"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns the status of all transactions associated with the given ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "first"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns the status of the first transaction associated with the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "last"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns the status of the last transaction associated with the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "{index}"
          }), (0,jsx_runtime.jsxs)(_components.td, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Important Note:"
        }), " The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "finStatus"
        }), " field for the first transaction reflects its current status. In contrast, for subsequent transactions, the finStatus reflects the original status at the time of processing. For example, if a refund is later reversed, the refund transaction will still show as AUTHORISED."]
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
            children: "Description"
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
              children: "Path: transactionReference"
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
            }), " generated by you and added as a parameter to the initial financial request. It is used to query the transaction status."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Path: selector"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "   ", (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specifies whether to return all transactions or a specific transaction by index."
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
        }), ".\r\nIt's our recommendation that a new value is created and sent for every request attempt."]
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
        children: "Example Request"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retrieve All Transactions:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X GET \\\r\n-H \"ApiKeyCloud: your-api-key\" \\\r\n\"https://transactions.handpoint.io/transactions/123e4567-e89b-12d3-a456-426614174000/status/all\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retrieve third transaction"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X GET \\\r\n-H \"ApiKeyCloud: your-api-key\" \\\r\n\"https://transactions.handpoint.io/transactions/123e4567-e89b-12d3-a456-426614174000/status/3\"\n"
      })
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
        children: "https://cloud.handpoint.io/devices/\\{deviceType\\}/\\{serialNumber\\}/\\{command\\}"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "\\{deviceType\\}"
        }), " is the type of the device (e.g., PAXIM30)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "\\{serialNumber\\}"
        }), " is the serial number of the device (e.g., 1640013848)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "\\{command\\}"
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
        }), " Settings).  Use the ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "restobjects#operation-types-description",
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "pingDevice"
          }), " operation"]
        }), " to confirm the device is in Integrated Mode before you send these commands.", (0,jsx_runtime.jsx)("br", {}), "\r\nIf you attempt to send one of these commands and the device is not yet in Integrated Mode, you may receive a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "202 Accepted"
        }), " response but the command will not have been executed by the terminal."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-unattended-mode",
      children: "Set Unattended Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /devices/\\{deviceType\\}/\\{serialNumber\\}/set-unattended-mode"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -d '{\r\n    \"status\": false\r\n  }' \\\r\n  \"https://cloud.handpoint.io/devices/PAXIM30/0000000000/set-unattended-mode\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-locale",
      children: "Set Locale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /devices/\\{deviceType\\}/\\{serialNumber\\}/set-locale"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -d '{\r\n    \"locale\": \"en_CA\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/devices/PAXIM30/0000000000/set-locale\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-password-protection",
      children: "Set Password Protection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /devices/\\{deviceType\\}/\\{serialNumber\\}/set-password-protected"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -d '{\r\n    \"status\": true\r\n  }' \\\r\n  \"https://cloud.handpoint.io/devices/PAXIM30/0000000000/set-password-protected\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reboot-device",
      children: "Reboot Device"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /devices/\\{deviceType\\}/\\{serialNumber\\}/reboot"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -d '{\r\n    \"force\": false\r\n  }' \\\r\n  \"https://cloud.handpoint.io/devices/PAXIM30/0000000000/reboot\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-screen-brightness",
      children: "Set Screen Brightness"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /devices/\\{deviceType\\}/\\{serialNumber\\}/set-screen-brightness"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -d '{\r\n    \"minimumBrightnessLevel\": 20,\r\n    \"maximumBrightnessLevel\": 100\r\n  }' \\\r\n  \"https://cloud.handpoint.io/devices/PAXIM30/0000000000/set-screen-brightness\"\n"
      })
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
        children: "POST /devices/\\{deviceType\\}/\\{serialNumber\\}/set-reboot-time"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -d '{\r\n    \"hour\": 22\r\n  }' \\\r\n  \"https://cloud.handpoint.io/devices/PAXIM30/0000000000/set-reboot-time\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "moto-operations-no-reader",
      children: "MOTO Operations (no reader)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MOTO (Mail Order / Telephone Order) operations can also be processed ", (0,jsx_runtime.jsx)(_components.strong, {
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
      id: "motosale",
      children: "/moto/sale"
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
        }), " – String amount with dot as decimal separator (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"20.00\""
        }), "), matching ", (0,jsx_runtime.jsx)(_components.code, {
          children: "^\\d+(\\.\\d+)?$"
        }), "."]
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
            }), ") when required fields are missing or do not match the schema (invalid amount pattern, currency length, etc.)."]
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
      id: "behaviour-examples",
      children: "Behaviour examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CVV required (3107)"
        }), " — merchant configured with “CVV/CV2 input mandatory” for Card Not Present:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"amount\": \"20.00\",\r\n    \"currency\": \"EUR\",\r\n    \"cardToken\": \"665630867\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/moto/sale\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example response:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n  \"error\": {\r\n    \"statusCode\": 400,\r\n    \"name\": \"BadRequestError\",\r\n    \"message\": \"CVV required\",\r\n    \"code\": \"3107\",\r\n    \"details\": {\r\n      \"errorGuid\": \"dae59b20-cf71-11f0-b588-a122fae316de\",\r\n      \"errorCode\": \"3107\",\r\n      \"description\": \"CVV required\",\r\n      \"httpStatus\": 400\r\n    }\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A very common cause of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3107"
      }), " is having “CVV/CV2 input mandatory” enabled for Card Not Present."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Invalid / unknown card token (5252)"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"error\": {\r\n    \"code\": \"5252\",\r\n    \"details\": {\r\n      \"description\": \"Card token failure\",\r\n      \"errorCode\": \"5252\",\r\n      \"errorGuid\": \"10a3d120-cf75-11f0-95b2-770b7d1d8e67\",\r\n      \"httpStatus\": 404\r\n    },\r\n    \"message\": \"Card token failure\",\r\n    \"name\": \"BadRequestError\",\r\n    \"statusCode\": 400\r\n  }\r\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Validation errors (422 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VALIDATION_FAILED"
            }), ")"]
          }), " – for example, missing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "amount"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"error\": {\r\n    \"code\": \"VALIDATION_FAILED\",\r\n    \"details\": [\r\n      {\r\n        \"code\": \"required\",\r\n        \"info\": {\r\n          \"missingProperty\": \"amount\"\r\n        },\r\n        \"message\": \"must have required property 'amount'\",\r\n        \"path\": \"\"\r\n      }\r\n    ],\r\n    \"message\": \"The request body is invalid. See error object `details` property for more info.\",\r\n    \"name\": \"UnprocessableEntityError\",\r\n    \"statusCode\": 422\r\n  }\r\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "code-example--moto-sale-with-cardtoken",
      children: ["Code example – MOTO sale with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cardToken"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"amount\": \"20.00\",\r\n    \"currency\": \"EUR\",\r\n    \"cardToken\": \"665630867\",\r\n    \"customerReference\": \"order-12345\",\r\n    \"transactionReference\": \"b7b2360d-3e9e-4b62-9a3a-2e6ef6c5cd01\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/moto/sale\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "motorefund",
      children: "/moto/refund"
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
        }), " – String amount to be refunded (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"5.00\""
        }), "), matching ", (0,jsx_runtime.jsx)(_components.code, {
          children: "^\\d+(\\.\\d+)?$"
        }), "."]
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
      id: "behaviour-examples-1",
      children: "Behaviour examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Partial refund – happy path"
          }), " (EUR 5.00 of a 20.00 EUR sale):"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"originalGuid\": \"1a41d9f0-cf72-11f0-95b2-770b7d1d8e67\",\r\n    \"amount\": \"5.00\",\r\n    \"currency\": \"EUR\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/moto/refund\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Currency mismatch (3210)"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"error\": {\r\n    \"code\": \"3210\",\r\n    \"details\": {\r\n      \"description\": \"Original and linked currency do not match\",\r\n      \"errorCode\": \"3210\",\r\n      \"errorGuid\": \"35a2b220-cf7a-11f0-b588-a122fae316de\",\r\n      \"httpStatus\": 400\r\n    },\r\n    \"message\": \"Original and linked currency do not match\",\r\n    \"name\": \"BadRequestError\",\r\n    \"statusCode\": 400\r\n  }\r\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Refund amount greater than original (3209)"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"error\": {\r\n    \"code\": \"3209\",\r\n    \"details\": {\r\n      \"description\": \"The requested refund amount is greater than the initial sale amount\",\r\n      \"errorCode\": \"3209\",\r\n      \"errorGuid\": \"e72ea940-cf7a-11f0-b588-a122fae316de\",\r\n      \"httpStatus\": 400\r\n    },\r\n    \"message\": \"The requested refund amount is greater than the initial sale amount\",\r\n    \"name\": \"BadRequestError\",\r\n    \"statusCode\": 400\r\n  }\r\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Validation errors"
          }), " – missing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "originalGuid"
          }), ", missing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "amount"
          }), ", invalid ", (0,jsx_runtime.jsx)(_components.code, {
            children: "currency"
          }), " length, invalid ", (0,jsx_runtime.jsx)(_components.code, {
            children: "amount"
          }), " pattern — are returned as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "422 VALIDATION_FAILED"
          }), " with one or more entries in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "error.details"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "code-example--partial-moto-refund-by-originalguid",
      children: ["Code example – partial MOTO refund by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "originalGuid"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"originalGuid\": \"1a41d9f0-cf72-11f0-95b2-770b7d1d8e67\",\r\n    \"amount\": \"5.00\",\r\n    \"currency\": \"EUR\",\r\n    \"customerReference\": \"refund-98765\",\r\n    \"transactionReference\": \"a1fe8db5-69a4-4b4d-a704-94ac2570f9b0\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/moto/refund\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "motoreversal",
      children: "/moto/reversal"
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
        }), " – String amount to reverse (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"20.00\""
        }), "), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "^\\d+(\\.\\d+)?$"
        }), "."]
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
      id: "behaviour-examples-2",
      children: "Behaviour examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Happy path – full MOTO reversal"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell",
            children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"originalGuid\": \"b28bdb10-cf87-11f0-b588-a122fae316de\",\r\n    \"amount\": \"20.00\",\r\n    \"currency\": \"EUR\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/moto/reversal\"\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Typical success response (simplified):"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"type\": \"motoReversalResponse\",\r\n  \"httpStatus\": 200,\r\n  \"amount\": \"20.00\",\r\n  \"currency\": \"EUR\",\r\n  \"guid\": \"3f7772a0-cf88-11f0-b588-a122fae316de\",\r\n  \"originalGuid\": \"b28bdb10-cf87-11f0-b588-a122fae316de\",\r\n  \"issuerResponseCode\": \"00\",\r\n  \"issuerResponseText\": \"Successful\",\r\n  \"maskedCardNumber\": \"************3555\",\r\n  \"f25\": \"4000\"\r\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Unknown / invalid ", (0,jsx_runtime.jsx)(_components.code, {
              children: "originalGuid"
            }), " (3153)"]
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\r\n  \"error\": {\r\n    \"code\": \"3153\",\r\n    \"details\": {\r\n      \"description\": \"Unable to find message to reverse.\",\r\n      \"errorCode\": \"3153\",\r\n      \"errorGuid\": \"633a4370-cf88-11f0-b588-a122fae316de\",\r\n      \"httpStatus\": 404\r\n    },\r\n    \"message\": \"Unable to find message to reverse.\",\r\n    \"name\": \"BadRequestError\",\r\n    \"statusCode\": 400\r\n  }\r\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Validation errors"
          }), " – missing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "originalGuid"
          }), ", missing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "amount"
          }), ", invalid ", (0,jsx_runtime.jsx)(_components.code, {
            children: "currency"
          }), " length, invalid ", (0,jsx_runtime.jsx)(_components.code, {
            children: "amount"
          }), " pattern — result in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "422 VALIDATION_FAILED"
          }), " with one or more entries in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "error.details"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "code-example--moto-reversal-by-originalguid",
      children: ["Code example – MOTO reversal by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "originalGuid"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"originalGuid\": \"b28bdb10-cf87-11f0-b588-a122fae316de\",\r\n    \"amount\": \"20.00\",\r\n    \"currency\": \"EUR\",\r\n    \"customerReference\": \"void-001\",\r\n    \"transactionReference\": \"4d7b1a2c-5bfd-4a30-9b6f-123456789abc\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/moto/reversal\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "batch-operations-beta",
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
        }), ") and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "batchNumber"
        }), "."]
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
      id: "batchclose",
      children: "/batch/close"
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
      }), ", and a ", (0,jsx_runtime.jsx)(_components.code, {
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
          class: "badge badge--primary",
          children: "Required"
        }), " – Identifier of the batch to close (for example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"1\""
        }), ")."]
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
              children: "batchNumber"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "behaviour-examples-3",
      children: "Behaviour examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Happy path – close batch 1 for a terminal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"deviceType\": \"PAXA920MAX\",\r\n    \"serialNumber\": \"2740013262\",\r\n    \"batchNumber\": \"1\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/batch/close\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example response:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n  \"batchNumber\": \"1\",\r\n  \"closeBatchGuid\": \"14431ad0-d0dc-11f0-9ed0-695d1a368668\",\r\n  \"closedAt\": \"20251204064010281\",\r\n  \"customerReference\": {},\r\n  \"httpStatus\": \"200\",\r\n  \"issuerResponseCode\": \"00\",\r\n  \"issuerResponseText\": \"ACCEPTED\"\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Validation error – missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "batchNumber"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"deviceType\": \"PAXA920MAX\",\r\n    \"serialNumber\": \"2740013262\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/batch/close\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Response:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n  \"error\": {\r\n    \"code\": \"VALIDATION_FAILED\",\r\n    \"details\": [\r\n      {\r\n        \"code\": \"required\",\r\n        \"info\": {\r\n          \"missingProperty\": \"batchNumber\"\r\n        },\r\n        \"message\": \"must have required property 'batchNumber'\",\r\n        \"path\": \"\"\r\n      }\r\n    ],\r\n    \"message\": \"The request body is invalid. See error object `details` property for more info.\",\r\n    \"name\": \"UnprocessableEntityError\",\r\n    \"statusCode\": 422\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "code-example--close-batch-via-curl",
      children: ["Code example – Close batch via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "curl"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"deviceType\": \"PAXA920MAX\",\r\n    \"serialNumber\": \"2740013262\",\r\n    \"batchNumber\": \"1\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/batch/close\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "batchsummary",
      children: "/batch/summary"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "behaviour-examples-4",
      children: "Behaviour examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Happy path – summary for batch ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"deviceType\": \"PAXA920MAX\",\r\n    \"serialNumber\": \"2740013262\",\r\n    \"batchNumber\": \"1\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/batch/summary\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example response:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n  \"batchNumber\": \"1\",\r\n  \"batchStatus\": \"CLOSED\",\r\n  \"batchSummaryGuid\": \"61573ba0-08ac-11f1-b002-eb225f134f40\",\r\n  \"customFields\": {\r\n    \"entry\": [\r\n      {\r\n        \"key\": \"salesCount\",\r\n        \"value\": \"155\"\r\n      },\r\n      {\r\n        \"key\": \"refundsCount\",\r\n        \"value\": \"3\"\r\n      },\r\n      {\r\n        \"key\": \"issuerBatchCloseLocalTimestamp\",\r\n        \"value\": \"2025-12-05T11:00:00\"\r\n      }\r\n    ]\r\n  },\r\n  \"httpStatus\": \"200\",\r\n  \"issuerResponseCode\": \"00\",\r\n  \"issuerResponseText\": \"DATA RETRIEVED\",\r\n  \"netAmount\": \"245.00\",\r\n  \"transactionCount\": \"158\"\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key fields:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Validation error – missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "batchNumber"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"deviceType\": \"PAXA920MAX\",\r\n    \"serialNumber\": \"2740013262\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/batch/summary\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Response:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n  \"error\": {\r\n    \"code\": \"VALIDATION_FAILED\",\r\n    \"details\": [\r\n      {\r\n        \"code\": \"required\",\r\n        \"info\": {\r\n          \"missingProperty\": \"batchNumber\"\r\n        },\r\n        \"message\": \"must have required property 'batchNumber'\",\r\n        \"path\": \"\"\r\n      }\r\n    ],\r\n    \"message\": \"The request body is invalid. See error object `details` property for more info.\",\r\n    \"name\": \"UnprocessableEntityError\",\r\n    \"statusCode\": 422\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "code-example--batch-summary",
      children: "Code example – Batch summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"deviceType\": \"PAXA920MAX\",\r\n    \"serialNumber\": \"2740013262\",\r\n    \"batchNumber\": \"1\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/batch/summary\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "batchdetail",
      children: "/batch/detail"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "behaviour-examples-5",
      children: "Behaviour examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Happy path – detail for batch ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"deviceType\": \"PAXA920MAX\",\r\n    \"serialNumber\": \"2740013262\",\r\n    \"batchNumber\": \"1\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/batch/detail\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example response:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n  \"httpStatus\": \"200\",\r\n  \"batchNumber\": \"1\",\r\n  \"closedAt\": \"20260213135114884\",\r\n  \"issuerResponseCode\": \"00\",\r\n  \"issuerResponseText\": \"Batch detail retrieved\",\r\n  \"details\": [\r\n    {\r\n      \"transactionType\": \"SALE\",\r\n      \"amount\": \"100.00\",\r\n      \"batchDetailElementGuid\": \"2fac8676-396a-4cf1-a5ab-650f3f79e923\"\r\n    },\r\n    {\r\n      \"transactionType\": \"SALE\",\r\n      \"retrievalReferenceNumber\": \"RRN08236\",\r\n      \"amount\": \"50.00\",\r\n      \"batchDetailElementGuid\": \"dcb718ef-59f0-4de8-b414-41048782aff9\"\r\n    },\r\n    {\r\n      \"transactionType\": \"REFUND\",\r\n      \"retrievalReferenceNumber\": \"RRN08237\",\r\n      \"amount\": \"25.00\",\r\n      \"batchDetailElementGuid\": \"d1a7ef06-c429-4a57-a07b-b461482bcafa\"\r\n    }\r\n  ],\r\n  \"batchDetailGuid\": \"10360390-08e4-11f1-8bbe-a982e87fcbf2\",\r\n  \"batchStatus\": \"CLOSED\"\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key fields:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Validation error – missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "batchNumber"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"deviceType\": \"PAXA920MAX\",\r\n    \"serialNumber\": \"2740013262\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/batch/detail\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Response:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n  \"error\": {\r\n    \"code\": \"VALIDATION_FAILED\",\r\n    \"details\": [\r\n      {\r\n        \"code\": \"required\",\r\n        \"info\": {\r\n          \"missingProperty\": \"batchNumber\"\r\n        },\r\n        \"message\": \"must have required property 'batchNumber'\",\r\n        \"path\": \"\"\r\n      }\r\n    ],\r\n    \"message\": \"The request body is invalid. See error object `details` property for more info.\",\r\n    \"name\": \"UnprocessableEntityError\",\r\n    \"statusCode\": 422\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "code-example--batch-detail",
      children: "Code example – Batch detail"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl -X POST \\\r\n  -H \"Content-Type: application/json\" \\\r\n  -H \"ApiKeyCloud: XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX\" \\\r\n  -d '{\r\n    \"deviceType\": \"PAXA920MAX\",\r\n    \"serialNumber\": \"2740013262\",\r\n    \"batchNumber\": \"1\"\r\n  }' \\\r\n  \"https://cloud.handpoint.io/batch/detail\"\n"
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