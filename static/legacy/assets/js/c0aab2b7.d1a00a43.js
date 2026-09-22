"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[60865],{

/***/ 85172
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_express_versioned_docs_version_express_sdk_1_2_expressintroduction_md_c0a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/express/site-express-versioned-docs-version-express-sdk-1-2-expressintroduction-md-c0a.json
const site_express_versioned_docs_version_express_sdk_1_2_expressintroduction_md_c0a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"expressintroduction","title":"Introduction","description":"The Handpoint Express SDK is composed of a Custom URL Protocol, a javascript interface and the Handpoint Express application running on the clients platform. The Handpoint Express application acts as a bridge between the web browser and the bluetooth card reader. When a transaction is initiated from the web based point of sale it reaches outside of the browser via a custom url. The Express application then takes care of finalizing the transaction with the card reader and sends the result and receipts back to the web application at the end of the operation.","source":"@site/express_versioned_docs/version-Express SDK 1.2/expressintroduction.md","sourceDirName":".","slug":"/expressintroduction","permalink":"/legacy/express/Express SDK 1.2/expressintroduction","draft":false,"unlisted":false,"tags":[],"version":"Express SDK 1.2","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"id":"expressintroduction"},"sidebar":"tutorialSidebar","next":{"title":"Downloads","permalink":"/legacy/express/Express SDK 1.2/expressdownloads"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./express_versioned_docs/version-Express SDK 1.2/expressintroduction.md


const frontMatter = {
	sidebar_position: 1,
	id: 'expressintroduction'
};
const contentTitle = 'Introduction';

const assets = {

};



const toc = [{
  "value": "Handpoint Express Installation",
  "id": "handpoint-express-installation",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    header: "header",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Handpoint Express SDK is composed of a Custom URL Protocol, a javascript interface and the Handpoint Express application running on the clients platform. The Handpoint Express application acts as a bridge between the web browser and the bluetooth card reader. When a transaction is initiated from the web based point of sale it reaches outside of the browser via a custom url. The Express application then takes care of finalizing the transaction with the card reader and sends the result and receipts back to the web application at the end of the operation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "handpoint-express-installation",
      children: "Handpoint Express Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Windows"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "The Windows Express app is portable since version 1.3.2!\r\nThis means that you don't need to install it, just download it and run it once. We take care of the rest.\r\nIt will download updates automatically so you don't have to worry about that.\r\nHowever if you had a previous version installed it is advised that you uninstall it previously to avoid confusion and conflicts."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Android & iOS"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Download the Android & iOS Express apps directly from the Android Play Store or iOS App Store."
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