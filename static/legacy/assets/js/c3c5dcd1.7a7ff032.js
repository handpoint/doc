"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[54623],{

/***/ 99828
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_javascript_versioned_docs_version_java_script_sdk_7_0_0_javascriptsandbox_md_c3c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/javascript/site-javascript-versioned-docs-version-java-script-sdk-7-0-0-javascriptsandbox-md-c3c.json
const site_javascript_versioned_docs_version_java_script_sdk_7_0_0_javascriptsandbox_md_c3c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"javascriptsandbox","title":"Handpoint Sandbox","description":"Get started today with the Handpoint sandbox and test payment transactions right in your browser. The sandbox is available here//www.handpoint.com/lab/cloudpos. A payment terminal is required to start testing.","source":"@site/javascript_versioned_docs/version-JavaScript SDK 7.0.0/javascriptsandbox.md","sourceDirName":".","slug":"/javascriptsandbox","permalink":"/legacy/javascript/JavaScript SDK 7.0.0/javascriptsandbox","draft":false,"unlisted":false,"tags":[],"version":"JavaScript SDK 7.0.0","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"id":"javascriptsandbox"},"sidebar":"tutorialSidebar","previous":{"title":"Integration Guide","permalink":"/legacy/javascript/JavaScript SDK 7.0.0/javascriptquickintegration"},"next":{"title":"Transaction Types","permalink":"/legacy/javascript/JavaScript SDK 7.0.0/javascripttransactiontypes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./javascript_versioned_docs/version-JavaScript SDK 7.0.0/javascriptsandbox.md


const frontMatter = {
	sidebar_position: 5,
	id: 'javascriptsandbox'
};
const contentTitle = 'Handpoint Sandbox';

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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "handpoint-sandbox",
        children: "Handpoint Sandbox"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Get started today with the Handpoint sandbox and test payment transactions right in your browser. The sandbox is available here: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://www.handpoint.com/lab/cloudpos",
        children: "http://www.handpoint.com/lab/cloudpos"
      }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A payment terminal is required to start testing."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the initial setup screen:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(49789)/* ["default"] */ .A) + "",
        width: "1010",
        height: "532"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To get started, select the target environment in which you are going to operate (Sandbox or Production). If you have any doubts selecting the correct environment, click on  \"", (0,jsx_runtime.jsx)(_components.em, {
        children: "How do I know what type of card reader I have?"
      }), "\" and you will be redirected to an explanation page."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(28328)/* ["default"] */ .A) + "",
        width: "1017",
        height: "520"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Next, enter your Handpoint API key in the box labeled \"", (0,jsx_runtime.jsx)(_components.em, {
        children: "INSERT API KEY"
      }), "” and save. This action will automatically populate the “", (0,jsx_runtime.jsx)(_components.em, {
        children: "SELECT A DEVICE"
      }), "” drop down with the list of payment terminals assigned to your test account. If the API key is not valid, an error message will appear in the “RESPONSES” section of the sandbox."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(40594)/* ["default"] */ .A) + "",
        width: "1023",
        height: "527"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the “", (0,jsx_runtime.jsx)(_components.em, {
        children: "SELECT A DEVICE"
      }), "” list choose any of the payment terminals assigned to your account. You can refresh the “", (0,jsx_runtime.jsx)(_components.em, {
        children: "SELECT A DEVICE"
      }), "” list by clicking the refresh button on the right side of the “", (0,jsx_runtime.jsx)(_components.em, {
        children: "SELECT A DEVICE"
      }), "” box. If you are already connected to a device, you can disconnect from it using the “", (0,jsx_runtime.jsx)(_components.em, {
        children: "Disconnect"
      }), "” button or trigger a software and configuration update operation by using the \"", (0,jsx_runtime.jsx)(_components.em, {
        children: "Update"
      }), "\" button."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(22157)/* ["default"] */ .A) + "",
        width: "1017",
        height: "521"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once you have selected a device, the “SELECT A DEVICE” box will be disabled, and the rest of the sandbox will be enabled. With your selected device, you can simulate a number of operations, including:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sale and tokenize"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Refund"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tokenize card"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reverse sale transactions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reverse refund transactions"
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
        children: "Copy the transaction result data, it is the raw JSON transaction result, as received by the application from the payment terminal."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(96004)/* ["default"] */ .A) + "",
        width: "1010",
        height: "527"
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

/***/ 49789
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cloudpos-1dd12e65b9220c043771880182d1ecff.png");

/***/ },

/***/ 28328
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cloudpos2-81ba10174d6fe33b8fbb91df42decb7d.png");

/***/ },

/***/ 40594
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cloudpos3-28f448bfc040e6cf11ba7e03a9f6ba39.png");

/***/ },

/***/ 22157
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cloudpos4-99a17307c037fdf9ce537df9ea0b7ae9.png");

/***/ },

/***/ 96004
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cloudpos5-98886b5a16ad2faeeeebf8dffa1cf62a.png");

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