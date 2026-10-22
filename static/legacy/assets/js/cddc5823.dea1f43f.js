"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[81519],{

/***/ 53607
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_javascript_versioned_docs_version_java_script_sdk_6_0_1_javascriptintroduction_md_cdd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/javascript/site-javascript-versioned-docs-version-java-script-sdk-6-0-1-javascriptintroduction-md-cdd.json
const site_javascript_versioned_docs_version_java_script_sdk_6_0_1_javascriptintroduction_md_cdd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"javascriptintroduction","title":"Introduction","description":"Introducing the Revolutionary Handpoint JavaScript SDK: Seamlessly integrate card present payments into any cloud software","source":"@site/javascript_versioned_docs/version-JavaScript SDK 6.0.1/javascriptintroduction.md","sourceDirName":".","slug":"/javascriptintroduction","permalink":"/legacy/javascript/JavaScript SDK 6.0.1/javascriptintroduction","draft":false,"unlisted":false,"tags":[],"version":"JavaScript SDK 6.0.1","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"id":"javascriptintroduction"},"sidebar":"tutorialSidebar","next":{"title":"Release Notes","permalink":"/legacy/javascript/JavaScript SDK 6.0.1/javascriptreleasenotes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./javascript_versioned_docs/version-JavaScript SDK 6.0.1/javascriptintroduction.md


const frontMatter = {
	sidebar_position: 1,
	id: 'javascriptintroduction'
};
const contentTitle = 'Introduction';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
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
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Introducing the Revolutionary Handpoint JavaScript SDK: Seamlessly integrate card present payments into any cloud software"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      class: "card-demo",
      align: "middle",
      children: (0,jsx_runtime.jsxs)("div", {
        class: "card card-background",
        children: [(0,jsx_runtime.jsxs)("div", {
          class: "card__header",
          children: [(0,jsx_runtime.jsx)("h3", {
            children: "JavaScript SDK"
          }), (0,jsx_runtime.jsx)("p", {
            children: "version 6.0.1"
          })]
        }), (0,jsx_runtime.jsx)("div", {
          class: "card__body",
          children: (0,jsx_runtime.jsx)("a", {
            href: "https://hpoint-cr-binaries-prod.s3.amazonaws.com/cloud/sdk/wrappers/js/6.0.1/handpoint-6.0.1.js",
            children: (0,jsx_runtime.jsx)("img", {
              src: "https://handpoint.imgix.net/ballicons/small/cloud.png"
            })
          })
        }), (0,jsx_runtime.jsx)("div", {
          class: "card__footer",
          children: (0,jsx_runtime.jsx)("a", {
            class: "button button--primary",
            href: "https://hpoint-cr-binaries-prod.s3.amazonaws.com/cloud/sdk/wrappers/js/6.0.1/handpoint-6.0.1.js",
            children: "Get the JavaScript SDK!"
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use the Handpoint JavaScript SDK to integrate leading smartpos terminals with your cloud software. The Handpoint JavaScript SDK is a simple javascript interface running in your web application that acts as a bridge between ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "the web browser and the payment terminal"
      }), ", while shielding your software from card data. It is seamless to integrate, keeps all card data out of your system, works with every platform, and lets you use the best Android terminals on the market."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Complete your integration in just three steps: Initiate the interface, choose the terminal, and start the sale. It is as simple as it sounds. The only thing you need is a valid API key to initialize the SDK. You even get a list of terminals to which you can connect. Simply execute the operation, and within seconds you’ll get back the transaction result and receipt in your software all while you monitor the transaction status. The Handpoint JavaScript SDK seamlessly starts and manages the entire P2PE transaction with the payment terminal, minimizing hassle for you and maximizing reliability, security, and control."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For your merchants, the terminal setup is easier than a standalone. A merchant connects the terminal to their network, just like a smartphone, authenticates his/her account, and it simply works. Your software then control the terminal from anywhere in the world, and your merchants have secure, reliable, intuitive payments."
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