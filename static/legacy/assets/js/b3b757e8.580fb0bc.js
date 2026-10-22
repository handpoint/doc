"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[14968],{

/***/ 82892
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_restapi_versioned_docs_version_rest_api_2_22_2_restendpoints_md_b3b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/restapi/site-restapi-versioned-docs-version-rest-api-2-22-2-restendpoints-md-b3b.json
const site_restapi_versioned_docs_version_rest_api_2_22_2_restendpoints_md_b3b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"restendpoints","title":"REST API Endpoints","description":"/initialize","source":"@site/restapi_versioned_docs/version-REST API 2.22.2/restendpoints.md","sourceDirName":".","slug":"/restendpoints","permalink":"/legacy/restapi/REST API 2.22.2/restendpoints","draft":false,"unlisted":false,"tags":[],"version":"REST API 2.22.2","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"id":"restendpoints"},"sidebar":"tutorialSidebar","previous":{"title":"Handpoint Sandbox","permalink":"/legacy/restapi/REST API 2.22.2/restsandbox"},"next":{"title":"Objects","permalink":"/legacy/restapi/REST API 2.22.2/restobjects"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./restapi_versioned_docs/version-REST API 2.22.2/restendpoints.md


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
  "value": "Transaction Result Recovery",
  "id": "transaction-result-recovery",
  "level": 2
}, {
  "value": "/transactions/{transactionReference}/status",
  "id": "transactionstransactionreferencestatus",
  "level": 2
}, {
  "value": "/transactions/{transactionReference}/status/{selector}",
  "id": "transactionstransactionreferencestatusselector",
  "level": 2
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
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
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
              href: "/legacy/restapi/REST%20API%202.22.2/restobjects#deviceObject",
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
              href: "/legacy/restapi/REST%20API%202.22.2/restobjects#transactionRequest",
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
              href: "/legacy/restapi/REST%20API%202.22.2/restobjects#tip-adjustment",
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
              href: "/legacy/restapi/REST%20API%202.22.2/restobjects#transaction-result-object",
              children: "Transaction Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/REST%20API%202.22.2/restobjects#transaction-result-object",
              children: "Transaction Result"
            }), " is delivered to the callback URL from the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/REST%20API%202.22.2/restobjects#transaction-request-object",
              children: "Transaction Request"
            }), "."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        href: "/legacy/restapi/REST%20API%202.22.2/restobjects#transactionRequest",
        children: " transaction request"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The main transaction result ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.22.2/restobjects#financialStatus",
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
              href: "/legacy/restapi/REST%20API%202.22.2/restobjects#transaction-result-object",
              children: "Transaction Result"
            }), ". ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), " There are two possible outcomes:", (0,jsx_runtime.jsx)("br", {}), " - The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " was found in the database and the associated ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/REST%20API%202.22.2/restobjects#transaction-result-object",
              children: "Transaction Result"
            }), " object is delivered. By checking the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/REST%20API%202.22.2/restobjects#financialStatus",
              children: "financial status"
            }), " field you will be able to know the status of the transaction at the time of the query. ", (0,jsx_runtime.jsx)("br", {}), " - The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " was not found in the Handpoint gateway. The ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/restapi/REST%20API%202.22.2/restobjects#financialStatus",
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
        children: "Operation executed using CLI tool CURL:\r\nREQUEST:\r\n    curl -X GET \\\\\r\n      -H\"ApiKeyCLoud: MeRcHaNt-ApIkEy\" \\\\\r\n      \"https://transactions.handpoint.com/transactions/3e665342-a95b-49c1-b6fe-b3f102305a76/status\" (production)\r\n      \"https://transactions.handpoint.io/transactions/3e665342-a95b-49c1-b6fe-b3f102305a76/status\" (development)\r\n\r\nRESPONSE:\r\n{\r\n    \"aid\": \"A0000000031010\",\r\n    \"arc\": \"00\",\r\n    \"iad\": \"06011103A00000\",\r\n    \"tsi\": \"0000\",\r\n    \"tvr\": \"0000000000\",\r\n    \"cardEntryType\": \"ICC\",\r\n    \"cardLanguagePreference\": \"\",\r\n    \"currency\": \"USD\",\r\n    \"type\": \"SALE\",\r\n    \"tipAmount\": 0,\r\n    \"totalAmount\": 100,\r\n    \"requestedAmount\": 100,\r\n    \"dueAmount\": 0,\r\n    \"tipPercentage\": 0,\r\n    \"efttimestamp\": \"20230511110113006\",\r\n    \"originalEFTTransactionID\": \"\",\r\n    \"paymentScenario\": \"CHIPCONTACTLESS\",\r\n    \"verificationMethod\": \"UNDEFINED\",\r\n    \"authorisationCode\": \"123456\",\r\n    \"cardSchemeName\": \"Visa\",\r\n    \"cardToken\": \"\",\r\n    \"maskedCardNumber\": \"************5733\",\r\n    \"cardTypeId\": \"\",\r\n    \"customerReference\": \"\",\r\n    \"efttransactionID\": \"66d94f20-efda-11ed-929c-47fffda5f9b5\",\r\n    \"transactionID\": \"66d94f20-efda-11ed-929c-47fffda5f9b5\",\r\n    \"errorMessage\": \"\",\r\n    \"expiryDateMMYY\": \"0924\",\r\n    \"issuerResponseCode\": \"00\",\r\n    \"rrn\": \"0000511573740\",\r\n    \"tenderType\": \"CREDIT\",\r\n    \"unMaskedPan\": \"\",\r\n    \"merchantAddress\": \"Navalaosa 48770 Madrid\",\r\n    \"merchantName\": \"Hago la cama 2\",\r\n    \"mid\": \"\",\r\n    \"cardHolderName\": \"\",\r\n    \"chipTransactionReport\": \"\",\r\n    \"customerReceipt\": \"\",\r\n    \"merchantReceipt\": \"\",\r\n    \"signatureUrl\": \"\",\r\n    \"statusMessage\": \"\",\r\n    \"tid\": \"\",\r\n    \"transactionReference\": \"3e665342-a95b-49c1-b6fe-b3f102305a76\",\r\n    \"transactionOrigin\": \"\",\r\n    \"finStatus\": \"AUTHORISED\"\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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