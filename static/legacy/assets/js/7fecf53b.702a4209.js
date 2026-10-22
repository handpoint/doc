"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[59676],{

/***/ 98257
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_restapi_versioned_docs_version_rest_api_2_17_0_restdownloads_md_7fe_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/restapi/site-restapi-versioned-docs-version-rest-api-2-17-0-restdownloads-md-7fe.json
const site_restapi_versioned_docs_version_rest_api_2_17_0_restdownloads_md_7fe_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"restapidownloads","title":"POSTMAN Collection","description":"Below is a Postman collection to get started with the REST API integration. In this collection you will find examples of different operations such as initialize, ping device, sale, sale (money remittance example), MOTO sale, sale and tokenize, sale reversal, sale with partial approval, refund, linked refund, refund reversal, print receipt(Bitmap and custom receipt), tokenize card, update terminal, tip-adjustment, Pre-Auth, MOTO Pre-Auth, GetTransactionResult and GetTransactionStatus.","source":"@site/restapi_versioned_docs/version-REST API 2.17.0/restdownloads.md","sourceDirName":".","slug":"/restapidownloads","permalink":"/legacy/restapi/REST API 2.17.0/restapidownloads","draft":false,"unlisted":false,"tags":[],"version":"REST API 2.17.0","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"id":"restapidownloads"},"sidebar":"tutorialSidebar","previous":{"title":"Trigger Amounts","permalink":"/legacy/restapi/REST API 2.17.0/restprocessingpayments"},"next":{"title":"Handpoint Sandbox","permalink":"/legacy/restapi/REST API 2.17.0/restsandbox"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./restapi_versioned_docs/version-REST API 2.17.0/restdownloads.md


const frontMatter = {
	sidebar_position: 4,
	id: 'restapidownloads'
};
const contentTitle = 'POSTMAN Collection';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "postman-collection",
        children: "POSTMAN Collection"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Below is a Postman collection to get started with the REST API integration. In this collection you will find examples of different ", (0,jsx_runtime.jsx)(_components.a, {
        href: "restobjects#operation-types-description",
        children: "operations"
      }), " such as initialize, ping device, sale, sale (money remittance example), MOTO sale, sale and tokenize, sale reversal, sale with partial approval, refund, linked refund, refund reversal, print receipt(Bitmap and custom receipt), tokenize card, update terminal, tip-adjustment, Pre-Auth, MOTO Pre-Auth, ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.17.0/restendpoints#transaction-resulttransactionresultid",
        children: "GetTransactionResult"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/restapi/REST%20API%202.17.0/restendpoints#transactionstransactionreferencestatus",
        children: "GetTransactionStatus"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(1586)/* ["default"] */ .A) + "",
        children: "Download this Postman Collection"
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

/***/ 1586
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/API_REST_Nov2023.postman_collection.json-e2c23a86942c8b2bd393eb0a3af32d45.zip");

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