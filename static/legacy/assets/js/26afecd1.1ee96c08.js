"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[92179],{

/***/ 24772
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_express_versioned_docs_version_express_sdk_1_2_expresssetup_md_26a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/express/site-express-versioned-docs-version-express-sdk-1-2-expresssetup-md-26a.json
const site_express_versioned_docs_version_express_sdk_1_2_expresssetup_md_26a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"expresssetup","title":"Setup","description":"Download and install the app for your platform and start integrating, either directly through the custom url scheme or by using our Javascript interface that abstracts the messaging format. You can start developing as soon as you receive a Handpoint payment terminal. Your end user, the merchant, only has to install the Express application on the platform of her choice to start accepting card present payments seamlessly with your application and a Handpoint card reader.","source":"@site/express_versioned_docs/version-Express SDK 1.2/expresssetup.md","sourceDirName":".","slug":"/expresssetup","permalink":"/legacy/express/Express SDK 1.2/expresssetup","draft":false,"unlisted":false,"tags":[],"version":"Express SDK 1.2","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"id":"expresssetup"},"sidebar":"tutorialSidebar","previous":{"title":"Data Flow","permalink":"/legacy/express/Express SDK 1.2/expressdataflow"},"next":{"title":"Sandbox","permalink":"/legacy/express/Express SDK 1.2/expresssandbox"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./express_versioned_docs/version-Express SDK 1.2/expresssetup.md


const frontMatter = {
	sidebar_position: 4,
	id: 'expresssetup'
};
const contentTitle = 'Setup';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "setup",
        children: "Setup"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Download and install the app for your platform and start integrating, either directly through the custom url scheme or by using our Javascript interface that abstracts the messaging format. You can start developing as soon as you receive a Handpoint payment terminal. Your end user, the merchant, only has to install the Express application on the platform of her choice to start accepting card present payments seamlessly with your application and a Handpoint card reader."
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