"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[362],{

/***/ 50057
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_express_versioned_docs_version_express_sdk_1_3_expressjavascriptinterface_md_e37_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/express/site-express-versioned-docs-version-express-sdk-1-3-expressjavascriptinterface-md-e37.json
const site_express_versioned_docs_version_express_sdk_1_3_expressjavascriptinterface_md_e37_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"expressjavascriptinterface","title":"Javascript Interface","description":"We provide a simple Javascript interface for web based implementations. It is a helper library that generates URLs for the different types of transactions.","source":"@site/express_versioned_docs/version-Express SDK 1.3/expressjavascriptinterface.md","sourceDirName":".","slug":"/expressjavascriptinterface","permalink":"/legacy/express/expressjavascriptinterface","draft":false,"unlisted":false,"tags":[],"version":"Express SDK 1.3","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"id":"expressjavascriptinterface"},"sidebar":"tutorialSidebar","previous":{"title":"Json Response","permalink":"/legacy/express/expressjsonresponse"},"next":{"title":"Javascript Methods","permalink":"/legacy/express/expressjavascriptmethods"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./express_versioned_docs/version-Express SDK 1.3/expressjavascriptinterface.md


const frontMatter = {
	sidebar_position: 7,
	id: 'expressjavascriptinterface'
};
const contentTitle = 'Javascript Interface';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "javascript-interface",
        children: "Javascript Interface"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We provide a simple Javascript interface for web based implementations. It is a helper library that generates URLs for the different types of transactions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To use it you must include hapiexpress.js in your code and initialise it before generating the urls."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example for a 10$ sale"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "let ssk = '0102030405060708091011121314151617181920212223242526272829303132';\r\n    let shouldAutoReturn = false;\r\n    let autoReturnTimeout = 0;\r\n\r\n    initHapiExpress('hapi-tests', ssk, shouldAutoReturn, autoReturnTimeout);\r\n\r\n    let amount = 1000; // Translates to 10.00\r\n    let currency = \"USD\"\r\n    let callbackurl = \"http://example.com/callbackID\"\r\n    let url = Hapi.urlForSale(amount, currency, {'extra-value':'some info'}, callbackurl);\r\n    Hapi.openUrl(url);\r\n\n"
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