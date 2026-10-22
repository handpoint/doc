"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[83976],{

/***/ 2053
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_intro_md_0e3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intro-md-0e3.json
const site_docs_intro_md_0e3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"intro","title":"REST API","description":"Introduction","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/legacy/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/intro.md


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = 'REST API';

const assets = {

};



const toc = [{
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Release Notes",
  "id": "release-notes",
  "level": 2
}, {
  "value": "2.4.0",
  "id": "240",
  "level": 3
}, {
  "value": "API Overview",
  "id": "api-overview",
  "level": 2
}, {
  "value": "Configuration",
  "id": "configuration",
  "level": 2
}, {
  "value": "Sandbox",
  "id": "sandbox",
  "level": 2
}, {
  "value": "Processing Payments Simulation",
  "id": "processing-payments-simulation",
  "level": 2
}, {
  "value": "Endpoints",
  "id": "endpoints",
  "level": 2
}, {
  "value": "/initialize",
  "id": "initialize",
  "level": 3
}, {
  "value": "/transactions",
  "id": "transactions",
  "level": 3
}, {
  "value": "/transaction-result/{transactionResultId}",
  "id": "transaction-resulttransactionresultid",
  "level": 3
}, {
  "value": "Transaction Result Recovery",
  "id": "transaction-result-recovery",
  "level": 3
}, {
  "value": "Objects",
  "id": "objects",
  "level": 2
}, {
  "value": "Operation Type",
  "id": "operation-type",
  "level": 3
}, {
  "value": "Operation Types Description",
  "id": "operation-types-description",
  "level": 3
}, {
  "value": "Financial Status",
  "id": "financial-status",
  "level": 3
}, {
  "value": "Transaction Result Object",
  "id": "transaction-result-object",
  "level": 3
}, {
  "value": "Transaction Request Object",
  "id": "transaction-request-object",
  "level": 3
}, {
  "value": "Bypass Options",
  "id": "bypass-options",
  "level": 3
}, {
  "value": "Merchant Auth",
  "id": "merchant-auth",
  "level": 3
}, {
  "value": "Acquirer",
  "id": "acquirer",
  "level": 3
}, {
  "value": "Device",
  "id": "device",
  "level": 3
}, {
  "value": "Currency",
  "id": "currency",
  "level": 3
}, {
  "value": "Card Entry Type",
  "id": "card-entry-type",
  "level": 3
}, {
  "value": "Verification Method",
  "id": "verification-method",
  "level": 3
}, {
  "value": "Merchant Auth Credential",
  "id": "merchant-auth-credential",
  "level": 3
}, {
  "value": "Device Status",
  "id": "device-status",
  "level": 3
}, {
  "value": "Card Scheme Name",
  "id": "card-scheme-name",
  "level": 3
}, {
  "value": "Transaction Type",
  "id": "transaction-type",
  "level": 3
}, {
  "value": "Payment Scenario",
  "id": "payment-scenario",
  "level": 3
}, {
  "value": "Status Info",
  "id": "status-info",
  "level": 3
}, {
  "value": "Status",
  "id": "status",
  "level": 3
}, {
  "value": "Tip Configuration",
  "id": "tip-configuration",
  "level": 3
}, {
  "value": "Tender Type",
  "id": "tender-type",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "rest-api",
        children: "REST API"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Introducing the Revolutionary Handpoint REST API: Seamlessly integrate card present payments into any software"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use the Handpoint REST API to integrate leading smartpos terminals with your software. The Handpoint REST API is a simple REST interface that acts as a bridge between ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "your software and the payment terminal"
      }), " , while shielding your software from card data. It is seamless to integrate, keeps all card data out of your system, works with every platform, and lets you use the best Android terminals on the market."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Complete your integration in just three steps: Initiate the interface, choose the terminal, and start the sale. It is as simple as it sounds. The only thing you need is a valid API key to authenticate against the API. You even get a list of terminals to which you can connect. Simply execute the financial operation, and within seconds you’ll get back the transaction result and receipts in your software. The Handpoint REST API seamlessly starts and manages the entire P2PE transaction with the payment terminal, minimizing hassle for you and maximizing reliability, security, and control."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "release-notes",
      children: "Release Notes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "240",
      children: "2.4.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transaction result retrieval through API endpoint GET .../transaction-result/{transactionResultId}"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-overview",
      children: "API Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["First of all, ensure you are using the correct environment by reviewing the type of card reader you have. To check if you should be using a production or development environment, see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://hndpt.co/39utmzi",
          children: "\"How do I know what type of card reader do I have?\""
        }), " and select the corresponding URL, as you see below:"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["  ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "For production terminals the endpoint to target is:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://cloud.handpoint.com/",
          children: "https://cloud.handpoint.com/"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["  ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "For debug terminals the endpoint to target is:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://cloud.handpoint.io/",
          children: "https://cloud.handpoint.io/"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following flow shows the interactions between your application and the Handpoint REST API:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1)"
      }), " Send a POST transaction request to the REST API."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2)"
      }), " The API will validate the request body and, if it is correct, will respond back to your software with the response code 202 (\"Accepted”) to confirm that the data has been correctly forwarded to the payment terminal."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3)"
      }), " The validated transaction request object is forwarded to the terminal and the transaction starts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4.1)"
      }), " In case the original transaction request contains a callbackUrl and token, the transaction result will be sent back from the terminal to your software by using the callbackUrl. The terminal will be authenticated against your endpoint by setting the authentication token of the transaction request in the custom header ( \"AUTH-TOKEN\"). All 2XXs http response codes from the callbackUrl are considered as valid by the terminal to acknowledge of a successful delivery of the transaction result."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4.2)"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IMPORTANT"
        }), " Feature only compatible with Handpoint App v3.3.0 and above. In case the original transaction request does not ontain a callbackUrl and token, the transaction result is sent back from the terminal to Handpoint's REST-API. The result can then be retrieved from the endpoint GET where the transactionResultId (also called cloud transaction identifier) is found in the answer from the initial POST[1] to the REST-API (see step ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2"
        }), "))."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(9544)/* ["default"] */ .A) + "",
        width: "1124",
        height: "862"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration",
      children: "Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Just request a valid API key from Handpoint to start using API. Initialize your interface with the API key and receive the list of devices available to perform a financial operation. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fast and easy"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sandbox",
      children: "Sandbox"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Get started today with our sandbox. You can generate sample transactions and test the experience right in your browser. Check it at: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://www.handpoint.com/lab/cloudpos",
        children: "http://www.handpoint.com/lab/cloudpos"
      }), ". A payment terminal is required to start testing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the initial setup screen:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(8564)/* ["default"] */ .A) + "",
        width: "1998",
        height: "1008"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To get started, select the target environment where you are going to operate (Sandbox/Production). If the user has any doubts selecting the correct environment, click on \"*How do I know what type of card reader do I have?\" and you will be redirected to an explanation page."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(43823)/* ["default"] */ .A) + "",
        width: "2004",
        height: "1010"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Next, enter your Handpoint API key in the box labeled \"INSERT API KEY” and click the check button. This will automatically populate the “SELECT A DEVICE” drop down with the list of devices that are assigned to you. If the API key is not valid, an error message will appear in the “RESPONSES” section of the sandbox."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(4806)/* ["default"] */ .A) + "",
        width: "1996",
        height: "1010"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before you can begin any further testing, you first must select the device that you will be using. In the “SELECT A DEVICE” list, you will see both the real terminals assigned to you, as well as simulated devices (listed by serial number). You can choose any device to test with. Serial numbers for the simulated devices always have this format: XXXX | 999999xxxxx. Choose a simulated terminal if you do not have access to a real device or if you just want to see simulated behavior. You can refresh the “SELECT A DEVICE” list by clicking the refresh button on the right side of the “SELECT A DEVICE” box. If you are already connected to a device, you can disconnect from it using the “Disconnect” button or trigger a software and configuration update operation by using the \"Update\" button."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(4806)/* ["default"] */ .A) + "",
        width: "1996",
        height: "1010"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Once you have selected a device, the “", (0,jsx_runtime.jsx)(_components.em, {
        children: "SELECT A DEVICE"
      }), "” box will be disabled, and the rest of the sandbox will be enabled. With your selected device, you can simulate a number of operations, including:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sale and tokenize"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "refund"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tokenize card"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reverse sale transactions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reverse refund transactions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In order to reverse a transaction, a transaction id is needed, this id is available in the transaction result data coming from a previous sale or refund operation. Each transaction result will appear in the RESPONSES panel, on the right side of the screen."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With each transaction result you will be able to perform several operations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "View and print the merchant receipt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "View and print the customer receipt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reverse the transaction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy the transaction result data; it is the raw transaction result, as received by the application from the device"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(976)/* ["default"] */ .A) + "",
        width: "1992",
        height: "1014"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "processing-payments-simulation",
      children: "Processing Payments Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test transactions are conducted against a test server which is designed to simulate the behavior of an acquiring bank without moving any funds. As with every Handpoint terminal, sensitive card data is fully encrypted."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use trigger amounts to generate some specific responses from our server:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sale amounts"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Amount"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behaviour"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "37.79"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issuer response code = 01 (Refer to issuer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "37.84"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issuer response code = 05 (Not authorized)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "37.93"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issuer response code = 04 (Pick up card)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "37.57"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request is partially approved"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "37.68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request timeout"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Any other values will behave as normal authorized operations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "endpoints",
      children: "Endpoints"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "initialize",
      children: "/initialize"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initialize"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initializes the REST API client and returns the list of payment terminals associated with the merchant account"
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
              children: "Header: ApiKeyCloud  *"
            }), "   ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request Header used to identify the merchant"
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
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "List of Device objects"
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
        children: "Operation executed using CLI tool CURL:\r\nREQUEST:\r\n  curl -X GET \\\r\n   -H \"ApiKeyCLoud: MeRcHaNt-ApIkEy\" \\\r\n   \"https://cloud.handpoint.com/initialize\"\r\n\r\nRESPONSE:\r\n Code 200 -> Body:\r\n  [\r\n    {\r\n      \"merchant_id_alpha\": \"merchantID\",\r\n      \"serial_number\": \"082104578\",\r\n      \"customerReference\": \"op15248\",\r\n      \"terminal_type\": \"PAXA920\"\r\n    }\r\n  ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transactions",
      children: "/transactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Transactions"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "POST endpoint used to execute a financial operation"
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
              children: "Header: ApiKeyCloud * "
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request Header used to identify the merchant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Request Body: Transaction Request *"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "TransactionRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object containing the transaction information"
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
            children: "Response code 202 is received if the transaction has been successfully sent to the terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BadRequest DeviceIsBusy Error"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response code 400 with error 1001. Wait until the end of the current transaction to be able to execute the next operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BadRequest DeviceNotResponding Error"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response code 400 with error 1002. The device is not responding, verify the device is online and retry in a few seconds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BadRequest CancelOperationNotAllowed Error"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response code 400 with error 1003. Operation type stopCurrentTransaction cannot be executed because the terminal is processing the transaction and it can not be stopped."
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
        children: "Operation executed using CLI tool CURL:\r\nREQUEST:\r\n  curl -X GET \\\r\n   -H \"ApiKeyCLoud: MeRcHaNt-ApIkEy\" \\\r\n   \"https://cloud.handpoint.com/initialize\"\r\n\r\nRESPONSE:\r\n Code 200 -> Body:\r\n  [\r\n    {\r\n      \"merchant_id_alpha\": \"merchantID\",\r\n      \"serial_number\": \"082104578\",\r\n      \"customerReference\": \"op15248\",\r\n      \"terminal_type\": \"PAXA920\"\r\n    }\r\n  ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transaction-resulttransactionresultid",
      children: "/transaction-result/{transactionResultId}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TransactionResultRetrieval"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GET endpoint used to retrieve transaction results. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IMPORTANT"
      }), " Feature only compatible with Handpoint App v3.3.0 and above."]
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
              children: "Header: ApiKeyCloud * "
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request Header used to identify the merchant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Path parameter: transactionResultId *"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom transaction result Id provided in the response when a Transaction was triggered without callbackUrl."
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
            children: "Response code 204. transactionResultId found in the database but there is no transaction result associated yet. This status will be retrieved while the transaction is ongoing and the transaction result has not been delivered yet."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response code 200 + Transaction Result. transactionResultId found in the database and the associated Transaction Result object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Not Found"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response code 404. transactionResultId NOT found in the database"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
      children: "All 2XXs http response codes from the callbackUrl are valid to notify the device of a successful delivery of the result."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transaction Result"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.th, {
            children: "Transaction Result"
          })
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "The Transaction Result is delivered to the callback Url from the Transaction Request."
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "objects",
      children: "Objects"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "operation-type",
      children: "Operation Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OperationType"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different types of transactions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Possible Values:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "sale"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "refund"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "refundReversal"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "saleReversal"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "saleAndTokenizeCard"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tokenizeCard"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "printReceipt"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cardPan"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pingDevice"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stopCurrentTransaction"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "operation-types-description",
      children: "Operation Types Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OperationTypesDescription"
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A sale initiates a payment operation to the card reader"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "refund"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A refund operation moves funds from the merchant account to the cardholder´s credit card. For Interac (Canadian Debit Network), refunds can only be processed until Interac closes the batch of transactions at night"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "refundReversal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A refund reversal, also called refund VOID allows the merchant to reverse a previous refund operation. This operation reverts (if possible) a specific refund identified with a transaction id"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "saleReversal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A sale reversal, also called sale VOID allows the user to reverse a previous sale operation. This operation reverts (if possible) a specific sale identified with a transaction id"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "saleAndTokenizeCard"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A sale operation which also returns a card token (not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tokenizeCard"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns a card token (not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printReceipt"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["This method sends the merchant or customer receipt to the terminal for printing. The format of the HTML data, passed to the method or stored in the url, must follow this format: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://handpoint.atlassian.net/wiki/spaces/PD/pages/1409875969/Html+Print+Format",
              children: "Html Print Format"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The update operation checks for new software or configuration updates and initiates a download if required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cardPan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A cardPan request will return the full PAN of the card being swiped, dipped or tapped. Only the PANs of whitelisted card ranges will be returned by the Handpoint systems. This operation is mostly used to be able to process funds or points from loyalty cards."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pingDevice"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This operation will ping the terminal to confirm if it is online."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "stopCurrentTransaction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation used to stop the current transaction. The transaction can only be stopped at specific stages of a payment processing, for example a transaction can not be stopped when the card is being read but can be stopped when waiting for the cardholder to initially insert a card."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "financial-status",
      children: "Financial Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Financial Status"
      }), ":"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transaction-result-object",
      children: "Transaction Result Object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TransactionResult"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object holding information about the result of a transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n  \"aid\": \"A0000000041010\",\r\n  \"arc\": \"0000\",\r\n  \"authorisationCode\": \"123456\",\r\n  \"balance\": null,\r\n  \"budgetNumber\": \"\",\r\n  \"cardEntryType\": \"UNDEFINED\",\r\n  \"cardLanguagePreference\": \"\",\r\n  \"cardSchemeName\": \"MasterCard\",\r\n  \"cardToken\": \"\",\r\n  \"chipTransactionReport\": \"\",\r\n  \"currency\": \"USD\",\r\n  \"customerReceipt\": \"https://s3.[...]/customerReceipt.html\",\r\n  \"customerReference\": \"\",\r\n  \"deviceStatus\": {\r\n      \"applicationName\": \"ClientApp\",\r\n      \"applicationVersion\": \"20.1.0\",\r\n      \"batteryCharging\": \"Not Charging\",\r\n      \"batteryStatus\": \"100\",\r\n      \"batterymV\": \"4126\",\r\n      \"bluetoothName\": \"PAXA920\",\r\n      \"externalPower\": \"USB\",\r\n      \"serialNumber\": \"0821032398\",\r\n      \"statusMessage\": \"Approved or completed successfully\"\r\n  },\r\n  \"dueAmount\": 0,\r\n  \"errorMessage\": \"\",\r\n  \"expiryDateMMYY\": \"0422\",\r\n  \"finStatus\": \"AUTHORISED\",\r\n  \"iad\": \"0210A000002A0000000000000000000000FF\",\r\n  \"issuerResponseCode\": \"00\",\r\n  \"maskedCardNumber\": \"************1456\",\r\n  \"merchantAddress\": \"Plaza Soledad Torres Acosta 1 28013 Madrid\",\r\n  \"merchantName\": \"Hago la cama\",\r\n  \"merchantReceipt\": \"https://s3.[...]/merchantReceipt.html\",\r\n  \"mid\": \"\",\r\n  \"originalEFTTransactionID\": \"\",\r\n  \"paymentScenario\": \"CHIPCONTACTLESS\",\r\n  \"rrn\": \"\",\r\n  \"signatureUrl\": \"\",\r\n  \"statusMessage\": \"Approved or completed successfully\",\r\n  \"tenderType\": \"CREDIT\",\r\n  \"tid\": \"ACQUIRER_TID\",\r\n  \"tipAmount\": 0,\r\n  \"totalAmount\": 100,\r\n  \"transactionID\": \"01236fc0-8192-11eb-9aca-ad4b0e95f241\",\r\n  \"tsi\": \"0000\",\r\n  \"tvr\": \"0400008001\",\r\n  \"type\": \"SALE\",\r\n  \"unMaskedPan\": \"\",\r\n  \"verificationMethod\": \"UNDEFINED\",\r\n  \"efttimestamp\": 1615374961000,\r\n  \"efttransactionID\": \"01236fc0-8192-11eb-9aca-ad4b0e95f241\",\r\n  \"requestedAmount\": 100,\r\n  \"tipPercentage\": 0,\r\n  \"recoveredTransaction\": false,\r\n  \"cardHolderName\": \"Mr/Mrs card holder full name\"\r\n}\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object holding information about the result of a transaction."
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "aid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application Identifier of the card (EMV tag 9F06)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMV Authorisation Response Code (EMV tag 8A)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "authorisationCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acquirer response code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "balance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balance available on the card"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "budgetNumber"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used to split payments over a period of months"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cardEntryType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method used by the terminal to read the card"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cardLanguagePreference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preferred language of the card (EMV tag 5F2D)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cardSchemeName"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The brand of the card"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cardToken"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token representing the PAN of the card"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "chipTransactionReport"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full report of the card EMV parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The currency used for the transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "customerReceipt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A URL containing the customer receipt in HTML format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "customerReference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If a customerReference was provided as an optional parameter in the transaction request it is echoed unaltered in this field"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deviceStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status of the device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dueAmount"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In case of a partial approval for the transaction, this field contains the amount which remains to be paid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "efttimestamp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time of the transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "efttransactionID"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handpoint unique identifier for a transaction, this id is the one to be used for a transaction to be reversed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "errorMessage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed reason for the transaction error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "expiryDateMMYY"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expiry date of the card used for the operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "finStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The financial status contains the outcome of the transaction. For example \"AUTHORISED\" or \"DECLINED\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "iad"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issuer Application Data (EMV tag 9F10)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "issuerResponseCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response code from the card issuer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transaction-request-object",
      children: "Transaction Request Object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TransactionRequest"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object to store the information about the payment terminal in use"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "// Result will be served to result.com\r\n{\r\n       \"operation\": \"sale\",\r\n       \"amount\": \"10000\",\r\n       \"currency\": \"EUR\",\r\n       \"terminal_type\": \"PAXA920\",\r\n       \"serial_number\": \"1547854757\",\r\n       \"customerReference\": \"storeSale12548\",\r\n       \"callbackUrl\": \"https://result.com\",\r\n       \"token\": \"123456789\",\r\n       \"tipConfiguration\": {\r\n              \"baseAmount\": \"2000\",\r\n              \"tipPercentages\": [5,10,15,20,25],\r\n              \"enterAmountEnabled\": true,\r\n              \"skipEnabled\": false,\r\n              \"footer\": \"Thank you!!! ;)\"\r\n           },\r\n       \"bypassOptions\": {\r\n              \"signatureBypass\": true,\r\n              \"pinBypass\": true\r\n           },\r\n       \"merchantAuth\": [{\r\n              \"acquirer\": \"ACQ_DUMMY\",\r\n              \"mid\": \"1111\",\r\n              \"tid\": \"2222\",\r\n              \"mcc\": \"3333\",\r\n              \"externalId\": \"4444\"\r\n           }]\r\n}\r\n\r\n// Result will be served back to Handpoint's REST-API\r\n{\r\n       \"operation\": \"sale\",\r\n       \"amount\": \"10000\",\r\n       \"currency\": \"EUR\",\r\n       \"terminal_type\": \"PAXA920\",\r\n       \"serial_number\": \"1547854757\",\r\n       \"customerReference\": \"storeSale12548\",\r\n       \"tipConfiguration\": {\r\n              \"baseAmount\": \"2000\",\r\n              \"tipPercentages\": [5,10,15,20,25],\r\n              \"enterAmountEnabled\": true,\r\n              \"skipEnabled\": false,\r\n              \"footer\": \"Thank you!!! ;)\"\r\n           },\r\n       \"bypassOptions\": {\r\n              \"signatureBypass\": true,\r\n              \"pinBypass\": true\r\n           },\r\n       \"merchantAuth\": [{\r\n              \"acquirer\": \"ACQ_DUMMY\",\r\n              \"mid\": \"1111\",\r\n              \"tid\": \"2222\",\r\n              \"mcc\": \"3333\",\r\n              \"externalId\": \"4444\"\r\n           }]\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object to store the information about the payment terminal in use."
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operation"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The type of transaction to be performed. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "REQUIRED"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "serial_number"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Device serial number. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "REQUIRED"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "terminal_type"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Device type. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "REQUIRED"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "callbackUrl"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "if used, url the terminal will use to send the Transaction Result. All 2XXs http response codes from the callbackUrl are valid to notify the terminal of a successful delivery of the result. If the callbackUrl is not present, the device will send back the transaction result to Handpoint's REST-API and results can be retrieved using the Transaction Result Retrieval endpoint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "token"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Token used to authenticate the terminal and transaction when serving the Transaction Result through the callbackUrl . The token will be injected in the Request Header with key value 'AUTH-TOKEN'. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "REQUIRED"
            }), " when the callbackUrl is present."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "customerReference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction identifier provided by the integrator. The customerReference sent in TransactionRequests objects is echoed in the TransactionResults"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 EUR). ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "REQUIRED"
            }), " for operations: sale, refund, refundReversal, saleReversal and saleAndTokenizeCard."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The currency of the transaction. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "REQUIRED"
            }), " for operations: sale, refund, refundReversal, saleReversal and saleAndTokenizeCard."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "originalTransactionId"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The transaction id of the original transaction to reverse. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "REQUIRED"
            }), " for operations: refundReversal, saleReversal and LINKED refunds."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "receipt"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTML receipt, following the format defined in Html Print Format, or url to locate the receipt, it can be found in the response of a Transaction Request, in the fields merchantReceipt or customerReceipt. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "REQUIRED"
            }), " for operations: printReceipt."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tipConfiguration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration to enable tipping. At the time of sale, a tip menu will be shown to the cardholder with the predefined configuration. The tip configuration is optional and can only be used with the sale and saleAndTokenize operations."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bypassOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration to enable the possibility of bypassing signature or pin. The bypass configuration is optional and can only be used with the sale, saleAndTokenize and refund operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "merchantAuth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object used to store merchant authentication. The merchantAuth is optional and can only be used with the sale, saleAndTokenize and refund operations. For reversals, the credentials passed for the original sale will be automatically looked up by Handpoint and used to process the reversal. This object allows a transaction to be funded to a specific merchant account other than the default one. It is useful if a terminal is shared between multiple merchants, for example at an Hair Salon or a Doctor's office."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bypass-options",
      children: "Bypass Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BypassOptions"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configuration to enable/disable signature or pin bypass."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n   \"bypassOptions\": {\r\n       \"signatureBypass\": true,\r\n       \"pinBypass\": true\r\n       }\r\n}\n"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pinBypass"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables/disables pin bypass. Bypasses PIN entry when the shopper says they don't know the PIN for the card and the merchant either knows they are the legitimate cardholder or want to give them the benefit of the doubt."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "signatureBypass"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables/disables signature bypass. Whether the terminal prompts for a signature, depends on how you configure this parameter. The major card schemes (American Express, Diners, Discover, JCB, Mastercard, Visa, UnionPay) no longer require a signature; they regard it as optional for card-present transactions. This means you can speed up your checkout by skipping the signature prompt. But if your business requires it, you can still let the terminal prompt for a signature. The shopper then provides their signature on the touch screen of the terminal or on the printed transaction receipt. This depends on how you configure this setting. It is your responsibility to verify the signature of the shopper with the signature on the card or another form of identification."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "merchant-auth",
      children: "Merchant Auth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MerchantAuth"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Object used to store merchant authentication. This object is optional, it allows a transaction to be funded to a specific merchant account other than the default one. It is useful if a terminal is shared between multiple merchants, for example at an Hair Salon or a Doctor's office."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n   \"merchantAuth\": [{\r\n       \"acquirer\": \"ACQ_DUMMY\",\r\n       \"mid\": \"1111\",\r\n       \"tid\": \"2222\",\r\n       \"mcc\": \"3333\",\r\n       \"externalId\": \"4444\"\r\n       }]\r\n}\n"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Credential"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array of credentials"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "acquirer",
      children: "Acquirer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Acquirer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing the supported acquirers for merchant authentication."
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device",
      children: "Device"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Device"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An object to store the information about the payment terminal you are working with. ALL values are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "REQUIRED"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n       \"merchant_id_alpha\": \"Test_Merchant\",\r\n       \"serial_number\": \"614004878\",\r\n       \"ssk\": \"74817EA5C63437ADE7AA3A5401\",\r\n       \"terminal_type\": \"PAXA920\"\r\n}\n"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "merchant_id_alpha"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merchant unique identifier to which the device is associated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "serial_number"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device serial number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ssk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merchant shared secret key, unique id for the merchant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "terminal_type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device type"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "currency",
      children: "Currency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Currency"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum of most currencies in the world."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Contains the ISO name, ISO number and the name of the currency. Additionally contains information about how many decimals the currency uses."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "AED"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AFN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ALL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AMD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ANG"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AOA"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ARS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AUD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AWG"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AZN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BAM"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BBD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BDT"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BGN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BHD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BIF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BMD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BND"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BOB"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BOV"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BRL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BSD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BTN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BWP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BYR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BZD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CAD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CDF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CLP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CNY"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "COP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "COU"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CRC"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CUC"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CUP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CVE"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CZK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DJF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DKK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DOP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DZD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EEK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EGP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ERN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ETB"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EUR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FJD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FKP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GBP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GEL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GHS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GIP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GMD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GNF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GTQ"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GYD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HKD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HNL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HRK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HTG"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HUF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IDR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ILS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "INR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IQD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IRR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ISK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JMD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JOD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JPY"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KES"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KGS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KHR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KMF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KPW"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KRW"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KWD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KYD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KZT"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LAK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LBP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LKR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LRD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LSL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LTL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LVL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LYD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MDL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MKD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MMK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MNT"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MOP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MUR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MVR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MWK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MXN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MXV"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MYR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MZN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NAD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NGN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NIO"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NOK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NPR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NZD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OMR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PAB"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PEN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PGK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PHP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PKR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PLN"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PYG"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "QAR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RON"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RSD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RUB"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RWF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SAR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SBD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SCR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SDG"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SEK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SGD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SHP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SLL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SOS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SRD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "STD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SYP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SZL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "THB"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TJS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TMT"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TND"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TOP"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TRY"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TTD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TWD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TZS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UAH"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UGX"
      }), "      ", (0,jsx_runtime.jsx)(_components.code, {
        children: "VND"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "VUV"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WST"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "XAF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "XCD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "XOF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "XPF"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "YER"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ZAR"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ZMK"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ZWL"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "USD"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UZS"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "VEF"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "card-entry-type",
      children: "Card Entry Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CardEntryType"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different card entry types."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n    \"acquirer\": \"ACQ_DUMMY\",\r\n    \"mid\": \"1111\",\r\n    \"tid\": \"2222\",\r\n    \"mcc\": \"3333\"\r\n}\r\n\r\n{\r\n    \"externalId\": \"4444\"\r\n}\n"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verification-method",
      children: "Verification Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VerificationMethod"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing the possible verification methods used during the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Possible values:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "UNDEFINED"
      }), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "merchant-auth-credential",
      children: "Merchant Auth Credential"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Credential"
      }), "\r\nAn object to store credentials (Acquirer, Mid, Tid, MCC and ExternalId) for merchant authentication."]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "acquirer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If present, it links this credential to the specified acquirer. Required if more than one credential is provided."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For this transaction, overrides the default MID (merchant ID) saved in the terminal configuration."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For this transaction, overrides the default TID (terminal ID) saved in the terminal configuration."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mcc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merchant Category Code, overrides the default MCC saved in the terminal configuration."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ExternalId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For this transaction, the External Id will be used to lookup the credential of the merchant in the Handpoint backend and process the transaction accordingly. The External id replaces the need to pass MID/TID/MCC as credentials"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device-status",
      children: "Device Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DeviceStatus"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A class that holds the device status."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n    \"applicationName\": \"TestApp\",\r\n    \"applicationVersion\": \"20.1.0.1\",\r\n    \"batteryCharging\": \"Charging\",\r\n    \"batteryStatus\": \"100\",\r\n    \"batterymV\": \"4134\",\r\n    \"bluetoothName\": \"A920\",\r\n    \"externalPower\": \"USB\",\r\n    \"serialNumber\": \"0821032397\",\r\n    \"statusMessage\": \"Card reader time out\"\r\n}\n"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SerialNumber"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The serial number of the device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BatteryStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The battery status in percentages of a device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BatterymV"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The battery milli volts of a device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BatteryCharging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The battery charging status of a device."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ExternalPower"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The status of an external power of a device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ApplicationName"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The application name used on a device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ApplicationVersion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The application version number used on a device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bluetoothName"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The bluetooth interface name used on a device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "statusMessage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device human readable status message"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "card-scheme-name",
      children: "Card Scheme Name"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CardSchemeName"
      })
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
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transaction-type",
      children: "Transaction Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TransactionType"
      })
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
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "payment-scenario",
      children: "Payment Scenario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentScenario"
      })
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
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "status-info",
      children: "Status Info"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "StatusInfo"
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cancelAllowed"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "boolean"
            }), " letting the integrator know if the terminal will accept a stop transaction request.)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Status"
            }), " enum representing the status of the transaction."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "message"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            }), " containing the status message of the transaction."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deviceStatus"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DeviceStatus"
            }), " object containing information about the payment terminal."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "status",
      children: "Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "status"
      })
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
      }), " ´ResponseAuthTimeout´ ´ResponsePaymentTimeout´ IccCardSwiped RemoveCard ScannerIsNotSupported ScannerEvent BatteryTooLow AccountTypeSelection BtIsNotSupported PaymentCodeSelection PartialApproval AmountDueValidation InvalidUrl WaitingCustomerReceipt PrintingMerchantReceipt PrintingCustomerReceipt UpdateStarted UpdateFinished UpdateFailed UpdateProgress WaitingHostPostSend WaitingHostPostReceive Rebooting PrinterOutOfPaper ErrorConnectingToPrinter CardTapped ReceiptPrintSuccess InvalidPinLength OfflinePinAttempt OfflinePinLastAttempt ProcessingSignature CardRemoved TipEntered CardLanguagePreference AutomaticPrintingStarted CancelOperationNotAllowed UpdateSoftwareStarted UpdateSoftwareFinished UpdateSoftwareFailed UpdateSoftwareProgress InstallSoftwareStarted InstallSoftwareFinished InstallSoftwareFailed InstallSoftwareProgress UpdateConfigStarted UpdateConfigFinished UpdateConfigFailed UpdateConfigProgress InitialisationComplete"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tip-configuration",
      children: "Tip Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TipConfiguration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n    \"baseAmount\": \"2000\",\r\n    \"headerName\": \"\",\r\n    \"tipPercentages\": [5,10,15,20,25],\r\n    \"enterAmountEnabled\": true,\r\n    \"skipEnabled\": false,\r\n    \"footer\": \"Thank you!!! ;)\"\r\n}\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TipConfiguration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Properties"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "baseAmount"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base amount used to calculate the tip - in the minor unit of currency (f.ex. 1000 is 10.00 GBP). If no base amount is defined, the transaction amount is used as base amount."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "headerName"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Name of the tipping menu appearing on the terminal. Default: Tip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tipPercentages"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["List of percentages used to calculate the tip amount. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "REQUIRED"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "enterAmountEnabled"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flag used to enable the cardholder to manually enter the tip amount. Default: true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "skipEnabled"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flag used to enable the cardholder to skip the tipping step. Default: true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "footer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Footer note which will appear on the tipping menu. Default: Empty string"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tender-type",
      children: "Tender Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TenderType"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum representing different tender types."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Possible values"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "NOT_SET"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CREDIT"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DEBIT"
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

/***/ 9544
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/RestApiDiagram-a3a9124e52f7ebc40bd6099852c05e19.bin");

/***/ },

/***/ 8564
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Sandbox1-264a7a3a1a077e35789c2c4d323cbc91.png");

/***/ },

/***/ 43823
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Sandbox2-1e4237ad557b64f948644c7f333d3bf1.png");

/***/ },

/***/ 4806
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Sandbox3-5a8bc52b630c9d9e994311362f770f67.png");

/***/ },

/***/ 976
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Sandbox5-6de557a26e534dc5e33c981064f75de3.png");

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