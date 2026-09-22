"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[77086],{

/***/ 85294
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_restapi_versioned_docs_version_rest_api_2_17_0_restintroduction_md_15a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/restapi/site-restapi-versioned-docs-version-rest-api-2-17-0-restintroduction-md-15a.json
const site_restapi_versioned_docs_version_rest_api_2_17_0_restintroduction_md_15a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"restintroduction","title":"Introduction","description":"Use the Handpoint REST API to integrate leading smartpos terminals with your software. The Handpoint REST API is a simple REST interface that acts as a bridge between your software and the payment terminal , while shielding your software from unmasked card data. It is seamless to integrate, keeps you out of PCI scope, works with every platform, and lets you use the best Android terminals on the market.","source":"@site/restapi_versioned_docs/version-REST API 2.17.0/restintroduction.md","sourceDirName":".","slug":"/restintroduction","permalink":"/legacy/restapi/REST API 2.17.0/restintroduction","draft":false,"unlisted":false,"tags":[],"version":"REST API 2.17.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"id":"restintroduction"},"sidebar":"tutorialSidebar","next":{"title":"Release Notes","permalink":"/legacy/restapi/REST API 2.17.0/restreleasenotes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./restapi_versioned_docs/version-REST API 2.17.0/restintroduction.md


const frontMatter = {
	sidebar_position: 1,
	id: 'restintroduction'
};
const contentTitle = 'Introduction';

const assets = {

};



const toc = [{
  "value": "API Overview",
  "id": "api-overview",
  "level": 2
}, {
  "value": "Transaction flow",
  "id": "transaction-flow",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "introduction",
        children: "Introduction"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use the Handpoint REST API to integrate leading smartpos terminals with your software. The Handpoint REST API is a simple REST interface that acts as a bridge between ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "your software and the payment terminal"
      }), " , while shielding your software from unmasked card data. It is seamless to integrate, keeps you out of PCI scope, works with every platform, and lets you use the best Android terminals on the market."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Complete your integration in just three steps: Initiate the interface, choose the terminal, and start the sale. It is as simple as it sounds. The only thing you need is a valid API key to authenticate against the API. Simply execute the financial operation, and within seconds you’ll get back the transaction result and receipts in your software. The Handpoint REST API seamlessly starts and manages the entire point to point encrypted transaction with the payment terminal, minimizing hassle for you and maximizing reliability, security, and control."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-overview",
      children: "API Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When integrating with the Handpoint REST API, there are 2 possible transaction flows in order to get back the transaction result from the payment terminal to your application:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Run a server to receive the transaction result"
          }), ". In this scenario you will need to specify a callback URL in the transaction request. At the end of the transaction, the payment terminal will send back the transaction result to the specified callback URL."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Query an endpoint provided by Handpoint"
          }), ". In this scenario a transaction result id is delivered immediately to your application as a response to the transaction request. In order to retrieve the transaction result, a specific API endpoint needs to be queried with the transaction id once the financial operation is completed on the payment terminal."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transaction-flow",
      children: "Transaction flow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Pre-requisite: request your test credentials (API key) and a payment terminal from Handpoint."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ensure you are targeting the correct environment. If your payment terminal is a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "debug"
            }), " terminal then the development environment (.io) needs to be targeted. If your payment terminal is a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "demo"
            }), " terminal or a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "production"
            }), " terminal then the production environment (.com) needs to be targeted. Demo terminals are production terminals linked to a mock acquirer so ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "funds are not moved"
            }), ". To check if you should be using the production or the development environment you can refer to this guide: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://hndpt.co/39utmzi",
              children: "\"How do I know what type of card reader I have?\""
            })]
          }), "\n"]
        }), "\n"]
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
      }), " Initialize your interface with the API key and receive the list of payment terminals available to perform a financial operation. Each API key is unique per merchant and needs to be configurable in your backend. Select a payment terminal and send a POST ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.17.0/restobjects#transaction-request-object",
        children: "transaction request"
      }), " to the REST API."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2)"
      }), " The API will validate the request body and will immediately respond back to your software with the response code 202 (\"Accepted”) to confirm that the data has been correctly forwarded to the payment terminal. Depending on your request body, a transactionResultId might be returned by the Handpoint API at this step (see 4.2 below)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3)"
      }), " The validated transaction request object is forwarded to the payment terminal and the transaction starts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4.1) If the original transaction request contains a callbackUrl and token"
      }), " , the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.17.0/restobjects#transaction-result-object",
        children: "transaction result"
      }), " will be sent back from the payment terminal to your software by using the callbackUrl. The token is a unique value generated by your software, it will be echoed in the custom HTTP header called AUTH-TOKEN of the transaction result sent by the terminal to your server. We recommend to use the token in order to authenticate the messages hitting your endpoint. The terminal expects a response back from your server when you receive the transaction result, 2XXs http response codes from the callbackUrl are considered as valid by the payment terminal to acknowledge a successful delivery of the transaction result. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "See figure 4.1 below"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you're going to use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "4.1"
        }), ", make sure to use an ssl certificate whose certification authority is supported by the versions of Android running on the payment terminals (Android versions vary between Android 5 and Android 10 depending on the terminal model)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4.2) If the original transaction request does not contain a callbackUrl and token"
      }), " , the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.17.0/restobjects#transaction-result-object",
        children: "transaction result"
      }), " is sent back from the terminal to Handpoint's REST-API. The transaction result can then be retrieved from the endpoint GET ", (0,jsx_runtime.jsx)(_components.a, {
        href: "restendpoints#transaction-resulttransactionresultid",
        children: "transaction-result/{transactionResultId}"
      }), " where the transactionResultId (also called cloud transaction identifier) is found in the immediate answer from the initial transaction request POST to the REST-API (see step 2). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "See figure 4.2 below"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(9544)/* ["default"] */ .A) + "",
        width: "1124",
        height: "862"
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

/***/ 9544
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/RestApiDiagram-a3a9124e52f7ebc40bd6099852c05e19.bin");

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