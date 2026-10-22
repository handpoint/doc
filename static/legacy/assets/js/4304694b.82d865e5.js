"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[72857],{

/***/ 80762
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_javascript_versioned_docs_version_java_script_sdk_7_1_0_javascriptquickintegration_md_430_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/javascript/site-javascript-versioned-docs-version-java-script-sdk-7-1-0-javascriptquickintegration-md-430.json
const site_javascript_versioned_docs_version_java_script_sdk_7_1_0_javascriptquickintegration_md_430_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"javascriptquickintegration","title":"Integration Guide","description":"Pre-requisite: request your test credentials (API key) and test payment terminal from Handpoint.","source":"@site/javascript_versioned_docs/version-JavaScript SDK 7.1.0/javascriptquickintegration.md","sourceDirName":".","slug":"/javascriptquickintegration","permalink":"/legacy/javascript/JavaScript SDK 7.1.0/javascriptquickintegration","draft":false,"unlisted":false,"tags":[],"version":"JavaScript SDK 7.1.0","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"id":"javascriptquickintegration"},"sidebar":"tutorialSidebar","previous":{"title":"Trigger Amounts","permalink":"/legacy/javascript/JavaScript SDK 7.1.0/javascriptprocessingpayments"},"next":{"title":"Handpoint Sandbox","permalink":"/legacy/javascript/JavaScript SDK 7.1.0/javascriptsandbox"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./javascript_versioned_docs/version-JavaScript SDK 7.1.0/javascriptquickintegration.md


const frontMatter = {
	sidebar_position: 4,
	id: 'javascriptquickintegration'
};
const contentTitle = 'Integration Guide';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "integration-guide",
        children: "Integration Guide"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Pre-requisite: request your test credentials (API key) and test payment terminal from Handpoint."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following example shows how you can integrate your web application with the Handpoint javascript SDK to perform a sale transaction in four easy steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Download the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/legacy/javascript/JavaScript%20SDK%207.1.0/javascriptintroduction#javascriptIntro",
            children: "handpoint.js"
          }), " SDK."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the same directory, copy both handpoint.js and the code below in an html file."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the code below, replace the variable apiKey with your test api key and replace the variable deviceName with the concatenation of your terminal serial number and model, for example ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "0821032395-PAXA920"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Note: If your payment terminal shows the debug watermark on the screen when it is on, then keep the variable ", (0,jsx_runtime.jsx)(_components.code, {
        children: "environmentIsDevelopment"
      }), " to true otherwise change it to false."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open the HTML file in the browser and see the test transaction immediately."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SIMPLE, FAST, and EASY"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!doctype html>\r\n<html>\r\n\r\n<head>\r\n  <title>Handpoint SDK Trial Integration</title>\r\n  <script src=\"handpoint.js\"></script>\r\n</head>\r\n\r\n<body>\r\n  <script>\r\n    (async function () {\r\n      var hp = new Handpoint();\r\n      //************* Test configuration *************//\r\n      var apiKey = 'Your-API-KEY';\r\n      var deviceName = '0821032395-PAXA920';\r\n      var environmentIsDevelopment = true;\r\n      //*********************************************//\r\n\r\n      //An object to store the customization options for a sale operation. This object can be empty if no options are required.\r\n      var options = {\r\n        duplicate_check: false,\r\n        metadata: {\r\n          metadata1: \"\",\r\n          metadata2: \"\",\r\n          metadata3: \"\",\r\n          metadata4: \"\",\r\n          metadata5: \"\",\r\n        },\r\n      };\r\n\r\n      let result; // Declare the result variable\r\n\r\n      try {\r\n        // Initialize Handpoint SDK\r\n        await hp.init(apiKey, environmentIsDevelopment, (pendingEoT) => {\r\n          console.log('Recovered Transaction -> ' + JSON.stringify(pendingEoT));\r\n        });\r\n        console.log('Successful initialization');\r\n\r\n        // Connect to the Handpoint device\r\n        await hp.connect(deviceName);\r\n        console.log('Successful Connection to device [' + deviceName + ']');\r\n        console.log('Executing sale');\r\n\r\n        try {\r\n          // Perform the sale operation\r\n          let operationStartedResult = await hp.sale('1234', 'EUR', options);\r\n          console.log('Successful sale');\r\n          var transactionReference = operationStartedResult.transactionReference;\r\n          console.log('Transaction Result -> ' + JSON.stringify(operationStartedResult));\r\n          console.log('transactionReference [' + operationStartedResult.transactionReference + ']');\r\n          result = await operationStartedResult.transactionResult; // Assign the transactionResult to result\r\n        } catch (error) {\r\n          console.log('Sale Failed -> ' + JSON.stringify(error));\r\n        }\r\n      } catch (error) {\r\n        console.log('Initialization Failed -> ' + JSON.stringify(error));\r\n      }\r\n\r\n      // Retrieve transaction status\r\n      hp.getTransactionStatus(result.transactionReference).then(\r\n        transactionResult => {\r\n          console.log('Transaction Result (from getTransactionStatus) -> ' + JSON.stringify(transactionResult))\r\n        }\r\n      ).catch(\r\n        errorStatus => console.log('ERROR in getTransactionStatus -> ' + JSON.stringify(errorStatus))\r\n      );\r\n\r\n    })();\r\n  </script>\r\n</body>\r\n\r\n</html>\r\n\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Maintain the connection with the terminal at all times:"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["To be able to recover a transaction result through the callback passed in the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/legacy/javascript/JavaScript%20SDK%207.1.0/javascriptterminalmanagement#1",
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "init"
            })
          }), " method, the point of sale and the terminal ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "MUST"
          }), " be connected and online. For that reason, we recommend to connect to the target terminal and maintain the connection alive at all times instead of connecting and disconnecting for every transaction."]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Using the same connection, the user may perform as many transactions as desired. The SDK is in charge of maintaining the secure channel between the point of sale and the terminal. No connection and disconnection between transactions is required. The silent connected periods will provide the possibility for the device to deliver any pending transaction result in case of a network issue."
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "How Transaction Recovery Works:"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["The terminal has a transaction recovery loop to automatically send back the pending ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/legacy/javascript/JavaScript%20SDK%207.1.0/javascriptobjects#18",
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "Transaction Result"
            })
          }), " to the Point of sale in case it becomes unreachable (network issue or other). For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the point of sale is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc…). The recovery loop is reinitialized every time the Handpoint application is restarted or anytime the startRecovery method is used."]
        }), "\n"]
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