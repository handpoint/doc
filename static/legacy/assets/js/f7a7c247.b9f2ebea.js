"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[99874],{

/***/ 11154
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_restapi_versioned_docs_version_rest_api_2_6_0_restsandbox_md_f7a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/restapi/site-restapi-versioned-docs-version-rest-api-2-6-0-restsandbox-md-f7a.json
const site_restapi_versioned_docs_version_rest_api_2_6_0_restsandbox_md_f7a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"restsandbox","title":"Sandbox","description":"Get started today with our sandbox. You can generate sample transactions and test the experience right in your browser. Check it at//www.handpoint.com/lab/cloudpos. A payment terminal is required to start testing.","source":"@site/restapi_versioned_docs/version-REST API 2.6.0/restsandbox.md","sourceDirName":".","slug":"/restsandbox","permalink":"/legacy/restapi/REST API 2.6.0/restsandbox","draft":false,"unlisted":false,"tags":[],"version":"REST API 2.6.0","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"id":"restsandbox"},"sidebar":"tutorialSidebar","previous":{"title":"Configuration","permalink":"/legacy/restapi/REST API 2.6.0/restconfiguration"},"next":{"title":"Processing Payments Simulation","permalink":"/legacy/restapi/REST API 2.6.0/restprocessingpayments"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./restapi_versioned_docs/version-REST API 2.6.0/restsandbox.md


const frontMatter = {
	sidebar_position: 6,
	id: 'restsandbox'
};
const contentTitle = 'Sandbox';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "sandbox",
        children: "Sandbox"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Get started today with our sandbox. You can generate sample transactions and test the experience right in your browser. Check it at: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://www.handpoint.com/lab/cloudpos",
        children: "http://www.handpoint.com/lab/cloudpos"
      }), ". A payment terminal is required to start testing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the initial setup screen:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(8564)/* ["default"] */ .A) + "",
        width: "1998",
        height: "1008"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To get started, select the target environment where you are going to operate (Sandbox/Production). If the user has any doubts selecting the correct environment, click on \"*How do I know what type of card reader do I have?\" and you will be redirected to an explanation page."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(43823)/* ["default"] */ .A) + "",
        width: "2004",
        height: "1010"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Next, enter your Handpoint API key in the box labeled \"INSERT API KEY” and click the check button. This will automatically populate the “SELECT A DEVICE” drop down with the list of devices that are assigned to you. If the API key is not valid, an error message will appear in the “RESPONSES” section of the sandbox."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(4806)/* ["default"] */ .A) + "",
        width: "1996",
        height: "1010"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before you can begin any further testing, you first must select the device that you will be using. In the “SELECT A DEVICE” list, you will see both the real terminals assigned to you, as well as simulated devices (listed by serial number). You can choose any device to test with. Serial numbers for the simulated devices always have this format: XXXX | 999999xxxxx. Choose a simulated terminal if you do not have access to a real device or if you just want to see simulated behavior. You can refresh the “SELECT A DEVICE” list by clicking the refresh button on the right side of the “SELECT A DEVICE” box. If you are already connected to a device, you can disconnect from it using the “Disconnect” button or trigger a software and configuration update operation by using the \"Update\" button."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(4806)/* ["default"] */ .A) + "",
        width: "1996",
        height: "1010"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Once you have selected a device, the “", (0,jsx_runtime.jsx)(_components.em, {
        children: "SELECT A DEVICE"
      }), "” box will be disabled, and the rest of the sandbox will be enabled. With your selected device, you can simulate a number of operations, including:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sale and tokenize"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "refund"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tokenize card"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reverse sale transactions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reverse refund transactions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In order to reverse a transaction, a transaction id is needed, this id is available in the transaction result data coming from a previous sale or refund operation. Each transaction result will appear in the RESPONSES panel, on the right side of the screen."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With each transaction result you will be able to perform several operations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "View and print the merchant receipt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "View and print the customer receipt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reverse the transaction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy the transaction result data; it is the raw transaction result, as received by the application from the device"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(976)/* ["default"] */ .A) + "",
        width: "1992",
        height: "1014"
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

/***/ 8564
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Sandbox1-264a7a3a1a077e35789c2c4d323cbc91.png");

/***/ },

/***/ 43823
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Sandbox2-1e4237ad557b64f948644c7f333d3bf1.png");

/***/ },

/***/ 4806
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Sandbox3-5a8bc52b630c9d9e994311362f770f67.png");

/***/ },

/***/ 976
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Sandbox5-6de557a26e534dc5e33c981064f75de3.png");

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