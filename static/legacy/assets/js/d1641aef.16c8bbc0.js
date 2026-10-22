"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[4795],{

/***/ 51805
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_javascript_versioned_docs_version_java_script_sdk_6_0_1_javascriptapioverview_md_d16_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/javascript/site-javascript-versioned-docs-version-java-script-sdk-6-0-1-javascriptapioverview-md-d16.json
const site_javascript_versioned_docs_version_java_script_sdk_6_0_1_javascriptapioverview_md_d16_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"javascriptapioverview","title":"API Overview","description":"This API flow shows how easy it is to add card present payments to your cloud application. The interaction between your cloud application and the Handpoint JavaScript SDK is simple and streamlined. The Handpoint JavaScript SDK takes care of all of the communication with the terminal. The status messages are received in the WEB APP via the callback function defined in the Financial Operation requests call. That’s it.","source":"@site/javascript_versioned_docs/version-JavaScript SDK 6.0.1/javascriptapioverview.md","sourceDirName":".","slug":"/javascriptapioverview","permalink":"/legacy/javascript/JavaScript SDK 6.0.1/javascriptapioverview","draft":false,"unlisted":false,"tags":[],"version":"JavaScript SDK 6.0.1","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"id":"javascriptapioverview"},"sidebar":"tutorialSidebar","previous":{"title":"Release Notes","permalink":"/legacy/javascript/JavaScript SDK 6.0.1/javascriptreleasenotes"},"next":{"title":"Configuration","permalink":"/legacy/javascript/JavaScript SDK 6.0.1/javascriptconfiguration"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./javascript_versioned_docs/version-JavaScript SDK 6.0.1/javascriptapioverview.md


const frontMatter = {
	sidebar_position: 3,
	id: 'javascriptapioverview'
};
const contentTitle = 'API Overview';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    img: "img",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "api-overview",
        children: "API Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This API flow shows how easy it is to add card present payments to your cloud application. The interaction between your cloud application and the Handpoint JavaScript SDK is simple and streamlined. The Handpoint JavaScript SDK takes care of all of the communication with the terminal. The status messages are received in the WEB APP via the callback function defined in the Financial Operation requests call. That’s it."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Handpoint JavaScript SDK shields your software from all sensitive cardholder data. With Handpoint JavaScript SDK, the transaction request goes from your software to Handpoint in the cloud. We steer the terminal from the cloud. All of the results come to your software via Handpoint in the cloud."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(13898)/* ["default"] */ .A) + "",
        width: "1292",
        height: "790"
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

/***/ 13898
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/jsoverview-0d173a620f42ffb7043652fc40c8570d.png");

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