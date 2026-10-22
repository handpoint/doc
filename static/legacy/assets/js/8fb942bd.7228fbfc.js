"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[5894],{

/***/ 39521
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_windows_windowsreleasenotes_md_8fb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/windows/site-windows-windowsreleasenotes-md-8fb.json
const site_windows_windowsreleasenotes_md_8fb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"windowsreleasenotes","title":"Release Notes","description":"Don’t miss any updates on our latest releases. Contact your Handpoint relationship manager to subscribe to the Handpoint Newsletter!","source":"@site/windows/windowsreleasenotes.md","sourceDirName":".","slug":"/windowsreleasenotes","permalink":"/legacy/windows/next/windowsreleasenotes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"id":"windowsreleasenotes"},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/legacy/windows/next/windowsintroduction"},"next":{"title":"Trigger Amounts","permalink":"/legacy/windows/next/windowsapioverview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./windows/windowsreleasenotes.md


const frontMatter = {
	sidebar_position: 2,
	id: 'windowsreleasenotes'
};
const contentTitle = 'Release Notes';

const assets = {

};



const toc = [{
  "value": "4.2.0",
  "id": "420",
  "level": 2
}, {
  "value": "4.1.0",
  "id": "410",
  "level": 2
}, {
  "value": "4.0.0",
  "id": "400",
  "level": 2
}, {
  "value": "3.4.0",
  "id": "340",
  "level": 2
}, {
  "value": "3.3.0",
  "id": "330",
  "level": 2
}, {
  "value": "3.2.6",
  "id": "326",
  "level": 2
}, {
  "value": "3.2.5",
  "id": "325",
  "level": 2
}, {
  "value": "3.2.4",
  "id": "324",
  "level": 2
}, {
  "value": "3.2.3",
  "id": "323",
  "level": 2
}, {
  "value": "3.2.1",
  "id": "321",
  "level": 2
}, {
  "value": "3.2.0",
  "id": "320",
  "level": 2
}, {
  "value": "3.1.7",
  "id": "317",
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
    li: "li",
    p: "p",
    pre: "pre",
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
      id: "420",
      children: "4.2.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We're excited to announce the latest update to our Windows SDK, featuring support of Mastercard MoneySend fields for money remittance merchants. In order to use this functionality, we provide you with an object called ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/next/windowobjects#money-remittance-options",
        children: "Money Remittance Options"
      }), ", which must be used in the operation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The supported operations are Sale, Sale & Tokenize, Refund, Linked Refunds, Reversals, MoTo Sale, MoTo Refund. For Linked Refunds and Reversals, Money Remittance fields should be taken from the original Sale/MoTo/Refund when using the field ", (0,jsx_runtime.jsx)(_components.code, {
        children: "originalTransactionID"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["*", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Please note"
      }), ": Money Remittance is only available for some acquirers and geographies. Please check with your Handpoint relationship manager about the availability of this functionality for your merchants."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "410",
      children: "4.1.0"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Features"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We are introducing a new transaction type called ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/next/windowstransactions#pre-auth",
        children: "Pre-Authorization"
      }), ". A pre-authorization charge, also known as a pre-auth or authorization hold, is a temporary hold placed on a customer's payment card. It's used to verify that the account is valid and has sufficient funds to cover a pending transaction, without actually debiting the cardholder's account upfront."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A pre-authorized transaction can be increased or decreased (", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/next/windowstransactions#pre-auth-increasedecrease",
        children: "Pre-Auth Increase"
      }), "), for example if a tab was opened and the consumer is adding new orders going above the initial pre-authorized amount."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A pre-authorized transaction can be captured (", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/next/windowstransactions#pre-auth-capture",
        children: "Pre-Auth Capture"
      }), ") to actually debit the cardholder's account. Depending on the merchant category code, the capture needs to happen between 7 and 31 days after the original pre-authorization. If not captured the funds will be automatically released by the issuing bank."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A pre-authorized transaction can be fully released (", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/next/windowstransactions#pre-authcapture-reversal",
        children: "Pre-Auth Reversal"
      }), "), for example when renting a car, the pre-auth reversal allows the merchant to release the funds if the car was not damaged."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "400",
      children: "4.0.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BREAKING CHANGE:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We are introducing a new feature called ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/next/windowsdevicemanagement#get-transaction-status",
        children: "Get Transaction Status"
      }), ". This new feature allows you to query the Handpoint Gateway for the status of a transaction at any given time. For example, in case of an app crash, timeout, or connection problem, you are now able to use the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/next/windowobjects#OperationStartResult",
        children: "transaction reference"
      }), " returned at the start of a financial operation to get the status of a transaction in real time. You can use this feature to track the progress of your payments and troubleshoot any issues that may arise. This feature is available for all payment methods and currencies."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All financial operations will now be returning an ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/next/windowobjects#OperationStartResult",
        children: "OperationStartResult"
      }), " object instead of a boolean to indicate that the operation was successfully sent to the payment terminal:\r\nThe ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionReference"
      }), " field is a unique identifier for the transaction that you will receive immediately after sending the transaction request to the terminal. If for any reason you do not receive the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/next/windowobjects#14",
        children: "TransactionResult"
      }), " object at the end of the transaction you will now be able to use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionReference"
      }), " to directly query our Gateway and know instantly if the transaction for which you do not know the outcome was approved or declined."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "340",
      children: "3.4.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We are introducing a new feature called ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/next/windowobjects#metadata",
        children: "Transaction Metadata"
      }), ". This new feature helps the customer to persist and echo back some data that belongs to the customer business domain at transaction time. The Transaction Metadata is sent in the request and echoed back in the response from the gateway. In addition, customers will be able to use the Transaction Metadata to search matching transactions from our Transaction Feed API.*****"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Transaction Metadata feature will be available when the Handpoint Payments app ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v4.1.0"
      }), " or higher is used."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["*", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Please note"
      }), ": Transactions will be available in TXN Feed API only if the request has reached the gateway."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "330",
      children: "3.3.0"
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
      }), " or higher is used. You do not need to update to v3.3.0 to benefit from this new feature. v3.3.0 will only allow you to disable the duplicate payment check feature if you wish to not support it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here is an example showing how to disable the duplicate payment check functionality:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "Dictionary <string, string> options = new Dictionary<string, string>();\r\noptions.Add(XmlTag.DuplicateCheck.Tag(), \"0\");\r\nhapi.Sale(amount, currency, options);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "326",
      children: "3.2.6"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cloud dependencies update (NewtonSoft Lib)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "325",
      children: "3.2.5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nullpointer Exception on Cloud connect without network connection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cloud dependencies update."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connection handling on transitions states: Connecting and Disconnecting."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic Cloud reconnection handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unable to manually disconnect during a transaction."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "324",
      children: "3.2.4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "SignatureResult"
        }), " method. Signature result is always true no matter what is passed to the method."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "323",
      children: "3.2.3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Crash on signature result (DATECS)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "321",
      children: "3.2.1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improved SDK reconnection logic in case of network unstability."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "320",
      children: "3.2.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CLOUD Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mail Order/Telephone Order (MoTo)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "StopCurrentTransaction operation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "317",
      children: "3.1.7"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLOUD: Improved initial retry mechanism for triggering transactions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLOUD: Increased initial timeout for triggering transactions."
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