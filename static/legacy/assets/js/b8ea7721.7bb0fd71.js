"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[96578],{

/***/ 90230
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_windows_versioned_docs_version_windows_sdk_3_2_0_windowsapioverview_md_b8e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/windows/site-windows-versioned-docs-version-windows-sdk-3-2-0-windowsapioverview-md-b8e.json
const site_windows_versioned_docs_version_windows_sdk_3_2_0_windowsapioverview_md_b8e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"windowsapioverview","title":"API overview","description":"How to implement a Sale Transaction","source":"@site/windows_versioned_docs/version-Windows SDK 3.2.0/windowsapioverview.md","sourceDirName":".","slug":"/windowsapioverview","permalink":"/legacy/windows/Windows SDK 3.2.0/windowsapioverview","draft":false,"unlisted":false,"tags":[],"version":"Windows SDK 3.2.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"id":"windowsapioverview"},"sidebar":"tutorialSidebar","previous":{"title":"Release Notes","permalink":"/legacy/windows/Windows SDK 3.2.0/windowsreleasenotes"},"next":{"title":"Integration Guide","permalink":"/legacy/windows/Windows SDK 3.2.0/windowsintegrationguide"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./windows_versioned_docs/version-Windows SDK 3.2.0/windowsapioverview.md


const frontMatter = {
	sidebar_position: 3,
	id: 'windowsapioverview'
};
const contentTitle = 'API overview';

const assets = {

};



const toc = [{
  "value": "How to implement a Sale Transaction",
  "id": "how-to-implement-a-sale-transaction",
  "level": 3
}, {
  "value": "How to implement a Sale Transaction with Recovery feature",
  "id": "how-to-implement-a-sale-transaction-with-recovery-feature",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "api-overview",
        children: "API overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-to-implement-a-sale-transaction",
      children: "How to implement a Sale Transaction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The below flow chart shows the interaction between the SDK, the payment terminal and your application. The orange arrows represent methods (requests) that need to be invoked to communicate with the Handpoint SDK's. The dark arrows represent events that need to be integrated in your code in order to retrieve information from the SDK´s and the card reader."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(42507)/* ["default"] */ .A) + "",
        width: "731",
        height: "512"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-to-implement-a-sale-transaction-with-recovery-feature",
      children: "How to implement a Sale Transaction with Recovery feature"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At some point, the connection between the SDK and the card reader can become unstable. For example, the Bluetooth connection can be cut in the middle of a sale transaction if the smartphone runs out of battery. If this happens, you need to have implemented the “transaction recovery feature” in order to get the receipts from the previous transaction and knowing if it was successful despite the connection problem."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sandbox logo",
        src: (__webpack_require__(75670)/* ["default"] */ .A) + "",
        width: "700",
        height: "526"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Supported functionality"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discovery of remote BT and CLOUD devices."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect to remote BT and CLOUD device."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Physical connection to HiPro external accessory."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic or manual reconnection to the card reader."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Executing financial transaction."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reporting status of transactions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Control and access to device logs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Barcode scanner with HiPro card readers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Limited card reader simulation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Processing Payments Simulation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your test payments are sent against a test server on the Handpoint side which simulates the behavior of an acquiring bank. Funds are not moved and sensitive data from the card is fully encrypted. You can use trigger amounts to generate some specific responses from our server:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sale amounts"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Amount"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behaviour"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "37.79"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issuer response code = 01 (Refer to issuer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "37.84"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issuer response code = 05 (Not authorized)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "37.93"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issuer response code = 04 (Pick up card)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "37.57"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request is partially approved"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "37.68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request timeout"
          })]
        })]
      })]
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

/***/ 42507
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/SaleTransaction-2e80005335a3658d461e8866b11d40c5.png");

/***/ },

/***/ 75670
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/SaleTransactionRecovery-7152e3a8c2bfc334345679ebde736511.png");

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