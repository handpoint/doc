"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[97197],{

/***/ 60601
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_javascript_versioned_docs_version_java_script_sdk_7_2_3_javascriptintroduction_md_ecd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/javascript/site-javascript-versioned-docs-version-java-script-sdk-7-2-3-javascriptintroduction-md-ecd.json
const site_javascript_versioned_docs_version_java_script_sdk_7_2_3_javascriptintroduction_md_ecd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"javascriptintroduction","title":"Introduction","description":"javascriptIntro}","source":"@site/javascript_versioned_docs/version-JavaScript SDK 7.2.3/javascriptintroduction.md","sourceDirName":".","slug":"/javascriptintroduction","permalink":"/legacy/javascript/JavaScript SDK 7.2.3/javascriptintroduction","draft":false,"unlisted":false,"tags":[],"version":"JavaScript SDK 7.2.3","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"id":"javascriptintroduction"},"sidebar":"tutorialSidebar","next":{"title":"Release Notes","permalink":"/legacy/javascript/JavaScript SDK 7.2.3/javascriptreleasenotes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./javascript_versioned_docs/version-JavaScript SDK 7.2.3/javascriptintroduction.md


const frontMatter = {
	sidebar_position: 1,
	id: 'javascriptintroduction'
};
const contentTitle = 'Introduction {#javascriptIntro}';

const assets = {

};



const toc = [{
  "value": "API Overview",
  "id": "api-overview",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
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
        id: "javascriptIntro",
        children: "Introduction"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      class: "card-demo",
      align: "middle",
      children: (0,jsx_runtime.jsxs)("div", {
        class: "card card-background",
        children: [(0,jsx_runtime.jsx)("div", {
          class: "card__header",
          children: (0,jsx_runtime.jsx)("h3", {
            children: "JavaScript SDK"
          })
        }), (0,jsx_runtime.jsx)("div", {
          class: "card__body",
          children: (0,jsx_runtime.jsx)("a", {
            href: "hhttps://hpoint-cr-binaries-prod.s3.amazonaws.com/cloud/sdk/wrappers/js/7.2.2/handpoint-7.2.2.js",
            children: (0,jsx_runtime.jsx)("img", {
              src: "https://handpoint.imgix.net/ballicons/small/cloud.png"
            })
          })
        }), (0,jsx_runtime.jsx)("div", {
          class: "card__footer",
          children: (0,jsx_runtime.jsx)("a", {
            class: "button button--primary",
            href: "https://hpoint-cr-binaries-prod.s3.amazonaws.com/cloud/sdk/wrappers/js/7.2.2/handpoint-7.2.2.js",
            children: "Get the latest JavaScript SDK!"
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Download the Handpoint JavaScript SDK to integrate leading smartpos terminals with your cloud based software. The Handpoint JavaScript SDK is a simple javascript interface running in your web application which acts as a bridge between ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "the web browser and the payment terminal"
      }), ", while shielding your software from handling card data. It is seamless to integrate, keeps your software out of PCI scope, and allows you to use the best Android terminals on the market."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Complete your integration in just three steps, initialize the interface, choose a terminal and start a sale. It is as simple as it sounds. The only thing you need is a valid API key to communicate with the payment terminal. As part of the initialize step you will get back a list of terminals with which you can connect. Simply execute the financial operation, and within seconds you’ll get back the transaction result and receipt in your software, all while you monitor the transaction status. The Handpoint Javascript SDK seamlessly starts and manages the entire point to point encrypted transaction with the payment terminal, minimizing hassle for you and maximizing reliability, security, and control."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For your merchants, the terminal setup is easier than a standalone. A merchant connects the terminal to their network, just like a smartphone, authenticates his/her account, and it simply works. Your software then control the terminal from anywhere in the world, and your merchants have secure, reliable and intuitive payments."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-overview",
      children: "API Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following transaction flow shows how easy it is to add card present payments to your web based application. The interaction between your cloud application and the Handpoint Javascript SDK is simple and streamlined. The Handpoint Javascript SDK takes care of the communication with the payment terminal. The status messages are received in your web application via the callback function defined in the financial operation requests call. That’s it."
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