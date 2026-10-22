"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[96955],{

/***/ 50257
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_restapi_versioned_docs_version_rest_api_2_6_0_restoverview_md_f3a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/restapi/site-restapi-versioned-docs-version-rest-api-2-6-0-restoverview-md-f3a.json
const site_restapi_versioned_docs_version_rest_api_2_6_0_restoverview_md_f3a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"restapioverview","title":"API Overview","description":"First of all, ensure you are using the correct environment by reviewing the type of card reader you have. To check if you should be using a production or development environment, see \\"How do I know what type of card reader do I have?\\" and select the corresponding URL, as you see below:","source":"@site/restapi_versioned_docs/version-REST API 2.6.0/restoverview.md","sourceDirName":".","slug":"/restapioverview","permalink":"/legacy/restapi/REST API 2.6.0/restapioverview","draft":false,"unlisted":false,"tags":[],"version":"REST API 2.6.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"id":"restapioverview"},"sidebar":"tutorialSidebar","previous":{"title":"Release Notes","permalink":"/legacy/restapi/REST API 2.6.0/restreleasenotes"},"next":{"title":"Downloads","permalink":"/legacy/restapi/REST API 2.6.0/restapidownloads"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./restapi_versioned_docs/version-REST API 2.6.0/restoverview.md


const frontMatter = {
	sidebar_position: 3,
	id: 'restapioverview'
};
const contentTitle = 'API Overview';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h1: "h1",
    header: "header",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "api-overview",
        children: "API Overview"
      })
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
      }), " Send a POST ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.6.0/restobjects#transaction-request-object",
        children: "transaction request"
      }), " to the REST API."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2)"
      }), " The API will validate the request body and, if it is correct, will respond back to your software with the response code 202 (\"Accepted”) to confirm that the data has been correctly forwarded to the payment terminal."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3)"
      }), " The validated ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.6.0/restobjects#transaction-request-object",
        children: "transaction request"
      }), " object is forwarded to the terminal and the transaction starts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4.1)"
      }), " In case the original ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.6.0/restobjects#transaction-request-object",
        children: "transaction request"
      }), " contains a callbackUrl and token, the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.6.0/restobjects#transaction-result-object",
        children: "transaction result"
      }), " will be sent back from the terminal to your software by using the callbackUrl. The terminal will be authenticated against your endpoint by setting the authentication token of the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.6.0/restobjects#transaction-request-object",
        children: "transaction request"
      }), " in the custom header ( \"AUTH-TOKEN\"). All 2XXs http response codes from the callbackUrl are considered as valid by the terminal to acknowledge of a successful delivery of the transaction result."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4.2)"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IMPORTANT"
        }), " Feature only compatible with Handpoint App v3.3.0 and above. In case the original ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/restapi/REST%20API%202.6.0/restobjects#transaction-request-object",
          children: "transaction request"
        }), " does not ontain a callbackUrl and token, the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/restapi/REST%20API%202.6.0/restobjects#transaction-result-object",
          children: "transaction result"
        }), " is sent back from the terminal to Handpoint's REST-API. The result can then be retrieved from the endpoint GET ", (0,jsx_runtime.jsx)(_components.a, {
          href: "restendpoints#transaction-resulttransactionresultid",
          children: "transaction-result/{transactionResultId}"
        }), " where the transactionResultId (also called cloud transaction identifier) is found in the answer from the initial POST[1] to the REST-API (see step ", (0,jsx_runtime.jsx)(_components.strong, {
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