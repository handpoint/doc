"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[3236],{

/***/ 5901
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_ios_versioned_docs_version_i_os_sdk_4_0_1_iosmigration_md_d57_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/ios/site-ios-versioned-docs-version-i-os-sdk-4-0-1-iosmigration-md-d57.json
const site_ios_versioned_docs_version_i_os_sdk_4_0_1_iosmigration_md_d57_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"iosmigration","title":"Migration from 3.X","description":"Version 4.0.0 introduces a well defined, typed, way of passing extra values, options, parameters or flags to the financial transactions.","source":"@site/ios_versioned_docs/version-iOS SDK 4.0.1/iosmigration.md","sourceDirName":".","slug":"/iosmigration","permalink":"/legacy/ios/iOS SDK 4.0.1/iosmigration","draft":false,"unlisted":false,"tags":[],"version":"iOS SDK 4.0.1","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"id":"iosmigration"},"sidebar":"tutorialSidebar","previous":{"title":"Release Notes","permalink":"/legacy/ios/iOS SDK 4.0.1/iosreleasenotes"},"next":{"title":"Trigger Amounts","permalink":"/legacy/ios/iOS SDK 4.0.1/iosprocessing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./ios_versioned_docs/version-iOS SDK 4.0.1/iosmigration.md


const frontMatter = {
	sidebar_position: 3,
	id: 'iosmigration'
};
const contentTitle = 'Migration from 3.X';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
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
        id: "migration-from-3x",
        children: "Migration from 3.X"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Version 4.0.0 introduces a well defined, typed, way of passing extra values, options, parameters or flags to the financial transactions."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We have unified all the extra and optional parameters in an Options object. Different operations have different options."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["1. For a ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/ios/iOS%20SDK%204.0.1/iostransactions#2",
          children: "Sale"
        }), " or ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/ios/iOS%20SDK%204.0.1/iostransactions#4",
          children: "Sale and Tokenize"
        }), " operation"]
      }), (0,jsx_runtime.jsx)("br", {}), "If you use a customer reference:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\tSaleOptions *options = [SaleOptions new];\r\n\toptions.customerReference = @\"Your customer reference\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you need Multi MID / Custom merchant Authentication:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "\tMerchantAuth *auth = [MerchantAuth new];\r\n\tCredential *cred = [Credential new];\r\n\t//Optionally\r\n\tcred.acquirer = [Credential getAcquirerFromString:@\"acquirer\"];\r\n\t//Optionally\r\n\tcred.mid = @\"mid\";\r\n\t//Optionally\r\n\tcred.tid = @\"tid\";\r\n\t//Add as many credentials as Acquirers your merchant have agreements with\r\n\t[auth add:cred];\r\n\toptions.merchantAuth = auth;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you want to specify the budget period Only available for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SureSwipe/Altech"
      }), " (South Africa):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "options.divideByMonths = @\"YOUR_BUDGET_NUMBER\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Finally:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "[self.api saleWithAmount:amount currency:currency options:options];\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["2. for a ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/ios/iOS%20SDK%204.0.1/iostransactions#5",
          children: "Refund"
        }), " operation (less optional parameters)"]
      }), (0,jsx_runtime.jsx)("br", {}), "If you use a customer reference:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "\tSaleOptions *options = [SaleOptions new];\r\n\toptions.customerReference = @\"Your customer reference\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you need Multi MID / Custom merchant Authentication:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "MerchantAuth *auth = [MerchantAuth new];\r\n\tCredential *cred = [Credential new];\r\n\t//Optionally\r\n\tcred.acquirer = [Credential getAcquirerFromString:@\"acquirer\"];\r\n\t//Optionally\r\n\tcred.mid = @\"mid\";\r\n\t//Optionally\r\n\tcred.tid = @\"tid\";\r\n\t//Add as many credentials as Acquirers your merchant have agreements with\r\n\t[auth add:cred];\r\n\toptions.merchantAuth = auth;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Finally:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "[self.api refundWithAmount:amount currency:currency transaction:originalTransactionID options:options];\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. For the rest of operations"
      }), (0,jsx_runtime.jsx)("br", {}), "If you use a customer reference:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "options.customerReference = @\"Your customer reference\";\n"
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