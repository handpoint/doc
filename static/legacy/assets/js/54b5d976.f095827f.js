"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[63549],{

/***/ 5059
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_express_versioned_docs_version_express_sdk_1_3_expresscustomurl_md_54b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/express/site-express-versioned-docs-version-express-sdk-1-3-expresscustomurl-md-54b.json
const site_express_versioned_docs_version_express_sdk_1_3_expresscustomurl_md_54b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"expresscustomurl","title":"Custom URL","description":"To initiate an Express client transaction from your application, you have to open a URL with the following format//express/v1/?data=","source":"@site/express_versioned_docs/version-Express SDK 1.3/expresscustomurl.md","sourceDirName":".","slug":"/expresscustomurl","permalink":"/legacy/express/expresscustomurl","draft":false,"unlisted":false,"tags":[],"version":"Express SDK 1.3","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"id":"expresscustomurl"},"sidebar":"tutorialSidebar","previous":{"title":"Express Sandbox","permalink":"/legacy/express/expresssandbox"},"next":{"title":"Json Request","permalink":"/legacy/express/expressjsonrequest"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./express_versioned_docs/version-Express SDK 1.3/expresscustomurl.md


const frontMatter = {
	sidebar_position: 4,
	id: 'expresscustomurl'
};
const contentTitle = 'Custom URL';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "custom-url",
        children: "Custom URL"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To initiate an Express client transaction from your application, you have to open a URL with the following format: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handpoint://express/v1/?data=<url_encoded_data>"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For web apps, you can open this URL just as you would any other URL on a webpage."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For native iOS apps, you use the openURL: method of UIApplication.\r\nThe query parameter in the URL, data, is a percent-encoded JSON object that contains information the Express client needs to process the transaction request."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For example, a valid unencoded JSON object looks like this (replace CLIENT_ID with your application's ID, and SHARED_SECRET_KEY with the device activation key you received from the Handpoint support team): If you're opening this URL from a native app, you can use your own app custom scheme as a callback: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"myapp-url-scheme://payment-complete\""
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\r\n    \"action\": {\r\n        \"type\": \"sale\",\r\n        \"parameters\": {\r\n            \"amount\": 1500,\r\n            \"currency\": \"USD\"\r\n        },\r\n        \"extraParameters\": {\r\n            \"your custom field\" : \"custom value\"\r\n        }\r\n    },\r\n    \"client\": {\r\n        \"clientId\": \"CLIENT_ID\",\r\n        \"ssk\": \"SHARED_SECRET_KEY\",\r\n        \"autoReturn\": true,\r\n        \"autoReturnTimeout\": 0\r\n    },\r\n    \"callbackUrl\": \"http://yourbackend.com/payment-result\"\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you're developing a web application, this Javascript sample demonstrates encoding a Register API URL and directing the merchant's browser to open it:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "<script>\r\nvar dataParameter = {\r\n    \"action\": {\r\n        \"type\": \"sale\",\r\n        \"parameters\": {\r\n            \"amount\": 1500,\r\n            \"currency\": \"USD\"\r\n        },\r\n        \"extraParameters\": {\r\n            \"your custom field\" : \"custom value\"\r\n        }\r\n    },\r\n    \"client\": {\r\n        \"clientId\": \"CLIENT_ID\",\r\n        \"ssk\": \"SHARED_SECRET_KEY\",\r\n        \"autoReturn\": true,\r\n        \"autoReturnTimeout\": 0\r\n    },\r\n    \"callbackUrl\": \"http://yourbackend.com/payment-result\"\r\n};\r\nwindow.location = \"handpoint://express/v1/?data=\" + encodeURIComponent(JSON.stringify(dataParameter));\r\n</script>\n"
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