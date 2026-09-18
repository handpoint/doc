"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[85856],{

/***/ 19363
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_restapi_versioned_docs_version_rest_api_2_23_1_restreleasenotes_md_00f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/restapi/site-restapi-versioned-docs-version-rest-api-2-23-1-restreleasenotes-md-00f.json
const site_restapi_versioned_docs_version_rest_api_2_23_1_restreleasenotes_md_00f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"restreleasenotes","title":"Release Notes","description":"Don’t miss any updates on our latest releases. Contact your Handpoint relationship manager to subscribe to the Handpoint Newsletter!","source":"@site/restapi_versioned_docs/version-REST API 2.23.1/restreleasenotes.md","sourceDirName":".","slug":"/restreleasenotes","permalink":"/legacy/restapi/REST API 2.23.1/restreleasenotes","draft":false,"unlisted":false,"tags":[],"version":"REST API 2.23.1","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"id":"restreleasenotes"},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/legacy/restapi/REST API 2.23.1/restintroduction"},"next":{"title":"Trigger Amounts","permalink":"/legacy/restapi/REST API 2.23.1/restprocessingpayments"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./restapi_versioned_docs/version-REST API 2.23.1/restreleasenotes.md


const frontMatter = {
	sidebar_position: 2,
	id: 'restreleasenotes'
};
const contentTitle = 'Release Notes';

const assets = {

};



const toc = [{
  "value": "2.23.1",
  "id": "2231",
  "level": 2
}, {
  "value": "2.23.0",
  "id": "2230",
  "level": 2
}, {
  "value": "2.22.4",
  "id": "2224",
  "level": 2
}, {
  "value": "2.22.3",
  "id": "2223",
  "level": 2
}, {
  "value": "2.22.2",
  "id": "2222",
  "level": 2
}, {
  "value": "2.20.0",
  "id": "2200",
  "level": 2
}, {
  "value": "2.17.0",
  "id": "2170",
  "level": 2
}, {
  "value": "2.15.0",
  "id": "2150",
  "level": 2
}, {
  "value": "2.14.0",
  "id": "2140",
  "level": 2
}, {
  "value": "2.13.0",
  "id": "2130",
  "level": 2
}, {
  "value": "2.12.0",
  "id": "2120",
  "level": 2
}, {
  "value": "2.10.0",
  "id": "2100",
  "level": 2
}, {
  "value": "2.7.1",
  "id": "271",
  "level": 2
}, {
  "value": "2.7.0",
  "id": "270",
  "level": 2
}, {
  "value": "2.6.0",
  "id": "260",
  "level": 2
}, {
  "value": "2.4.0",
  "id": "240",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "release-notes",
        children: "Release Notes"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Don’t miss any updates on our latest releases. Contact your Handpoint relationship manager to subscribe to the Handpoint Newsletter!"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2231",
      children: "2.23.1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The batch number is returned in the Transaction Result object now as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "batchNumber"
      }), ", provided the acquirer returns it. Please see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.23.1/restobjects#transactionResult",
        children: "Transaction Result Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2230",
      children: "2.23.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug fixes:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Support for MOTO operations in the Get Transaction Status service has been added"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2224",
      children: "2.22.4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug fixes:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Internal performance issues have been solved."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2223",
      children: "2.22.3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug fixes:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A external vulnerability has been addressed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2222",
      children: "2.22.2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A new ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cardPresent"
      }), " parameter is available under ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.23.1/restobjects#transactionRequest",
        children: "Optional Transaction Parameters"
      }), ". See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/android/androidreleasenotes#710105",
        children: "Android SDK 7.1010.5"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://handpoint.atlassian.net/wiki/spaces/PD/pages/5104533505/Handling+card+present+reversals+with+Elavon+acquirers",
        children: "Handling card present reversals with Elavon acquirers"
      }), " for detailed information on the purpose of this feature."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2200",
      children: "2.20.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Added a selector to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.23.1/restendpoints#transactionstransactionreferencestatusselector",
        children: "{transactionReference}/status"
      }), " endpoint which improves greatly on reporting"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Added \"commands\" to allow greater device control options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A new ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tokenize"
      }), " parameter is available under ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.23.1/restobjects#transactionRequest",
        children: "Optional Transaction Parameters"
      }), ". See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/android/androidreleasenotes#710095",
        children: "Android SDK 7.1009.5"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/android/androidtransactions#cloudTokenizedPaymentsOperations",
        children: "Tokenized Payments Operations"
      }), " for detailed information on how to use this feature."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2170",
      children: "2.17.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We're excited to announce the latest update to our REST API, featuring support of Mastercard MoneySend fields for money remittance merchants. In order to use this functionality, we provide you with an object called ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.23.1/restobjects#money-remittance-options",
        children: "Money Remittance Options"
      }), ", which must be used in the operation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The supported operations are Sale, Sale & Tokenize, Refund, Linked Refunds, Reversals, MoTo Sale, MoTo Refund. For Linked Refunds and Reversals, Money Remittance fields should be taken from the original Sale/MoTo/Refund when using the field ", (0,jsx_runtime.jsx)(_components.code, {
        children: "originalTransactionID"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["*", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Please note"
      }), ": Money Remittance is available only for some acquirers and geographies. Please check with your Handpoint relationship manager about the availability of this functionality for your merchants."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2150",
      children: "2.15.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We are introducing a new transaction type called ", (0,jsx_runtime.jsx)(_components.a, {
        href: "restobjects#operation-types-description",
        children: "Pre-Authorization"
      }), ". A pre-authorization charge, also known as a pre-auth or authorization hold, is a temporary hold placed on a customer's payment card. It's used to verify that the account is valid and has sufficient funds to cover a pending transaction, without actually debiting the cardholder's account upfront."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A pre-authorized transaction can be increased or decreased (Pre-Auth Increase), for example if a tab was opened and the consumer is adding new orders going above the initial pre-authorized amount."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A pre-authorized transaction can be captured (Pre-Auth Capture) to actually debit the cardholder's account. Depending on the merchant category code, the capture needs to happen between 7 and 31 days after the original pre-authorization. If not captured the funds will be automatically released by the issuing bank."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A pre-authorized transaction can be fully released (Pre-Auth Reversal), for example when renting a car, the pre-auth reversal allows the merchant to release the funds if the car was not damaged."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "restapidownloads",
        children: "POSTMAN Collection"
      }), " section you will find sample code for each of these operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2140",
      children: "2.14.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We are introducing a new feature called ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.23.1/restendpoints#transactionstransactionreferencestatus",
        children: "Get Transaction Status"
      }), ". This new ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.23.1/restendpoints#transactionstransactionreferencestatus",
        children: "endpoint"
      }), " allows you to query the Handpoint Gateway for the status of a transaction at any given time. You can use this feature to track the progress of your payments and troubleshoot any issues that may arise. This feature is available for all payment methods and currencies."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a financial operation is started from the REST API, you need to provide a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionReference"
      }), " in the body of the transaction ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.23.1/restobjects#transactionRequest",
        children: "request"
      }), ". This ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionReference"
      }), " can then be used to query the status of a transaction (using the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.23.1/restendpoints#transactionstransactionreferencestatus",
        children: "transaction status"
      }), " endpoint) if you are not receiving the result from the terminal in a timely fashion. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionReference"
      }), " must be a unique identifier (", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)",
        children: "UUID v4"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example request/response to the transaction status endpoint:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "SaleWithGetTrxStatusExample",
        src: (__webpack_require__(21070)/* ["default"] */ .A) + "",
        width: "826",
        height: "649"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2130",
      children: "2.13.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We are introducing a new feature called ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.23.1/restobjects#metadata",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Transaction Metadata"
        })
      }), ". This new feature helps the customer to persist and echo back some data that belongs to the customer business domain at transaction time. The Transaction Metadata is sent in the request and echoed back in the response from the gateway. In addition, customers will be able to use the Transaction Metadata to search matching transactions from our Transaction Feed API.*****"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Transaction Metadata feature will be available when the Handpoint Payments app ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v4.1.0"
      }), " or higher is used."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["*", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Please note"
      }), ": Transactions will be available in TXN Feed API only if the request has reached the gateway."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parsing errors from the gateway (Tip Adjustment)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2120",
      children: "2.12.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New endpoint ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/restapi/REST%20API%202.23.1/restendpoints#transactionsguidtip-adjustment",
          children: "Tip-Adjustment"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A tip adjustment operation allows merchants to adjust the tip amount of a sale transaction before the batch of transactions is settled by the processor at the end of the day."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2100",
      children: "2.10.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We are introducing a new feature called duplicate payment check. Looking back at our data we have seen that when a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are now flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the 2nd charge. This menu will automatically be prompted on the payment terminal if a suspicious charge is detected. We are only prompting the duplicate menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The duplicate payment check feature will be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "enabled by default"
      }), " when the Handpoint Payments app ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v4.0.0."
      }), " or higher is used. V2.10.0 of the REST API only allows you to disable the duplicate payment check feature if you wish to not support it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The new ", (0,jsx_runtime.jsx)(_components.code, {
        children: "duplicate_check"
      }), " parameter is available under the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.23.1/restobjects#transactionRequest",
        children: "Transaction Request Object"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "271",
      children: "2.7.1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New endpoint to create, get and delete API keys for Merchants"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "270",
      children: "2.7.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mail/Telephone Order functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retry logic for transaction triggering"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "260",
      children: "2.6.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Endpoints for virtual terminals"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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

/***/ 21070
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/RestAPIexample-02d52469a35c0cd5db791d2a1b3f832e.png");

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