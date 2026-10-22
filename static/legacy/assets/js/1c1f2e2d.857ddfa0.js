"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[60615],{

/***/ 25913
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_android_versioned_docs_version_android_sdk_6_7_4_androidmigrationguide_md_1c1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/android/site-android-versioned-docs-version-android-sdk-6-7-4-androidmigrationguide-md-1c1.json
const site_android_versioned_docs_version_android_sdk_6_7_4_androidmigrationguide_md_1c1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"androidmigrationguide","title":"Migration from 5.X","description":"1}","source":"@site/android_versioned_docs/version-Android SDK 6.7.4/androidmigrationguide.md","sourceDirName":".","slug":"/androidmigrationguide","permalink":"/legacy/android/Android SDK 6.7.4/androidmigrationguide","draft":false,"unlisted":false,"tags":[],"version":"Android SDK 6.7.4","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"id":"androidmigrationguide"},"sidebar":"tutorialSidebar","previous":{"title":"Release Notes","permalink":"/legacy/android/Android SDK 6.7.4/androidreleasenotes"},"next":{"title":"Trigger Amounts","permalink":"/legacy/android/Android SDK 6.7.4/androidapioverview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./android_versioned_docs/version-Android SDK 6.7.4/androidmigrationguide.md


const frontMatter = {
	sidebar_position: 3,
	id: 'androidmigrationguide'
};
const contentTitle = 'Migration from 5.X{#1}';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "1",
        children: "Migration from 5.X"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Version 6.0.0 introduces a well defined, typed, way of passing extra values, options, parameters or flags to the financial transactions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We have unified all the extra and optional parameters in an Options object. Different operations have different options."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["1. For a ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%206.7.4/androidtransactions#2",
          children: "Sale"
        }), " or ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%206.7.4/androidtransactions#3",
          children: "Sale and Tokenize"
        }), " operation, please see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%206.7.4/androidobjects#4",
          children: "SaleOptions"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you use a customer reference:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "options.setCustomerReference(\"Your customer reference\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you need Multi MID / Custom merchant Authentication:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "\tMerchantAuth auth = new MerchantAuth();\r\n\tCredential credential = new Credential();\r\n\t//Optionally\r\n\tcredential.setAcquirer(YOUR_ACQUIRER);\r\n\t//Optionally\r\n\tcredential.setMerchantId(mid);\r\n\t//Optionally\r\n\tcredential.setTerminalId(tid);\r\n\t//Add as many credentials as Acquirers your merchant have agreements with\r\n\tauth.add(credential);\r\n\toptions.setMerchantAuth(auth);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you need to enable pin bypass:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "options.setPinBypass(true);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you want to specify the budget period ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Only available for SureSwipe"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "options.setBudgetNumber(YOUR_BUDGET_NUMBER);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you want to specify tip options ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Only available for PAX and Telpo terminals"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "TipConfiguration config = new TipConfiguration();\r\n\t//Optionally\r\n\tconfig.setHeaderName(HEADER);\r\n\t//Optionally\r\n\tconfig.setFooter(FOOTER);\r\n\t//Optionally\r\n\tconfig.setEnterAmountEnabled(true);\r\n\t//Optionally\r\n\tconfig.setSkipEnabled(true);\r\n\t//Optionally\r\n\tconfig.setTipPercentages(percentages);\r\n\r\n\toptions.setTipConfiguration(config);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alternatively, you can set the tip amount directly:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "\toptions.setTipConfiguration(new TipConfiguration(AMOUNT));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Finally:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "api.sale(amount, currency, options);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["2. Similar to SaleOptions, but with less possible parameters, for a ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%206.7.4/androidtransactions#5",
          children: "Refund"
        }), " operation, please see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%206.7.4/androidobjects#6",
          children: "RefundOptions"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you use a customer reference:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "options.setCustomerReference(\"Your customer reference\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you need Multi MID / Custom merchant Authentication:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "\tMerchantAuth auth = new MerchantAuth();\r\n\tCredential credential = new Credential();\r\n\t//Optionally\r\n\tcredential.setAcquirer(YOUR_ACQUIRER);\r\n\t//Optionally\r\n\tcredential.setMerchantId(mid);\r\n\t//Optionally\r\n\tcredential.setTerminalId(tid);\r\n\t//Add as many credentials as Acquirers your merchant have agreements with\r\n\tauth.add(credential);\r\n\toptions.setMerchantAuth(auth);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you need to enable pin bypass:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "options.setPinBypass(true);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Finally:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "\tapi.refund(amount, currency, options);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["3. For the rest of operations, please see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%206.7.4/androidobjects#7",
          children: "Options"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you use a customer reference:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "options.setCustomerReference(\"Your customer reference\");\n"
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