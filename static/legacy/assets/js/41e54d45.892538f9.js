"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[81813],{

/***/ 20283
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_javascript_versioned_docs_version_java_script_sdk_6_2_1_javascriptreleasenotes_md_41e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/javascript/site-javascript-versioned-docs-version-java-script-sdk-6-2-1-javascriptreleasenotes-md-41e.json
const site_javascript_versioned_docs_version_java_script_sdk_6_2_1_javascriptreleasenotes_md_41e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"javascriptreleasenotes","title":"Release Notes","description":"Don’t miss any updates on our latest releases. Contact your Handpoint relationship manager to subscribe to the Handpoint Newsletter!","source":"@site/javascript_versioned_docs/version-JavaScript SDK 6.2.1/javascriptreleasenotes.md","sourceDirName":".","slug":"/javascriptreleasenotes","permalink":"/legacy/javascript/JavaScript SDK 6.2.1/javascriptreleasenotes","draft":false,"unlisted":false,"tags":[],"version":"JavaScript SDK 6.2.1","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"id":"javascriptreleasenotes"},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/legacy/javascript/JavaScript SDK 6.2.1/javascriptintroduction"},"next":{"title":"Trigger Amounts","permalink":"/legacy/javascript/JavaScript SDK 6.2.1/javascriptprocessingpayments"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./javascript_versioned_docs/version-JavaScript SDK 6.2.1/javascriptreleasenotes.md


const frontMatter = {
	sidebar_position: 2,
	id: 'javascriptreleasenotes'
};
const contentTitle = 'Release Notes';

const assets = {

};



const toc = [{
  "value": "6.2.1",
  "id": "621",
  "level": 2
}, {
  "value": "6.2.0",
  "id": "620",
  "level": 2
}, {
  "value": "6.1.0",
  "id": "610",
  "level": 2
}, {
  "value": "6.0.1",
  "id": "601",
  "level": 2
}, {
  "value": "6.0.0",
  "id": "600",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "release-notes",
        children: "Release Notes"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Don’t miss any updates on our latest releases. Contact your Handpoint relationship manager to subscribe to the Handpoint Newsletter!"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "621",
      children: "6.2.1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reconnection management."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "620",
      children: "6.2.0"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Features"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We are introducing a new feature called duplicate payment check. Looking back at our data we have seen that when a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are now flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the 2nd charge. This menu will automatically be prompted on the payment terminal if a suspicious charge is detected. We are only prompting the duplicate menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The duplicate payment check feature will be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "enabled by default"
      }), " when the Handpoint Payments app ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v4.0.0."
      }), " or higher is used. You do not need to update to v6.2.0 to benefit from this new feature. v6.2.0 will only allow you to disable the duplicate payment check feature if you wish to not support it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The new ", (0,jsx_runtime.jsx)(_components.code, {
        children: "duplicate_check"
      }), " parameter is available under the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/javascript/JavaScript%20SDK%206.2.1/javascriptobjects#23",
        children: "SaleOptions"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/javascript/JavaScript%20SDK%206.2.1/javascriptobjects#24",
        children: "RefundOptions"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "610",
      children: "6.1.0"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Features"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mail order/Telephone order (MoTo)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duplications on recovered transactions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "601",
      children: "6.0.1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Features"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal variable handling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "600",
      children: "6.0.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BREAKING CHANGE:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The recovery function in the init method was added to make sure that ALL transaction results are received by the POS, even in case of an unstable network connection. The recovery function passed as third parameter in the init method MUST return a promise. The resolution of the promise will send a message to the payment terminal acknowledging the reception of the transaction result."
      }), "\n"]
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