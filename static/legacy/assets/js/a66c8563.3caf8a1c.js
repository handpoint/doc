"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[33151],{

/***/ 65083
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_express_versioned_docs_version_express_sdk_1_3_expressjsonresponse_md_a66_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/express/site-express-versioned-docs-version-express-sdk-1-3-expressjsonresponse-md-a66.json
const site_express_versioned_docs_version_express_sdk_1_3_expressjsonresponse_md_a66_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"expressjsonresponse","title":"Json Response","description":"The response object is sent to the callback url and contains data relevant to the financial operation. It contains relevant information, extra parameters, a representation of the TransactionResult object returned from our native libraries and any error that occurred.","source":"@site/express_versioned_docs/version-Express SDK 1.3/expressjsonresponse.md","sourceDirName":".","slug":"/expressjsonresponse","permalink":"/legacy/express/expressjsonresponse","draft":false,"unlisted":false,"tags":[],"version":"Express SDK 1.3","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"id":"expressjsonresponse"},"sidebar":"tutorialSidebar","previous":{"title":"Json Request","permalink":"/legacy/express/expressjsonrequest"},"next":{"title":"Javascript Interface","permalink":"/legacy/express/expressjavascriptinterface"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./express_versioned_docs/version-Express SDK 1.3/expressjsonresponse.md


const frontMatter = {
	sidebar_position: 6,
	id: 'expressjsonresponse'
};
const contentTitle = 'Json Response';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "json-response",
        children: "Json Response"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The response object is sent to the callback url and contains data relevant to the financial operation. It contains relevant information, extra parameters, a representation of the TransactionResult object returned from our native libraries and any error that occurred."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It is formatted in JSON and structured as a collection of \"name\":\"value\" pairs. Values are always a string except in the cases where the value is a boolean or another collection of \"name\":\"value\" pairs."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The response will be packed and added to your callbackUrl in the following format ", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://your_callback_url?data=<packed_response_data>"
      }), " in a GET request."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "<packed_response_data>"
      }), " is a JSON string that has been URL encoded to make it safe to use as a GET parameter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Response sample"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{ \"metadata\": {\r\n            \"appVersion\": \"1.0.0\",\r\n            \"systemInfo\": {\r\n                \"osName\": \"Windows 7 Home edition\",\r\n                \"deviceName\": \"PP917838383832\",\r\n                \"internetConnectionType\": [\r\n                    \"WiFi\",\r\n                    \"Ethernet\"\r\n                ]\r\n            },\r\n            \"protocolVersion\": \"v1\"\r\n        },\r\n        \"transactionResult\": {\r\n            \"statusMessage\": \"AUTH CODE 12345\",\r\n            \"type\": \"SALE\",\r\n            \"finStatus\": \"AUTHORISED\",\r\n            \"requestedAmount\": \"1000\",\r\n            \"gratuityAmount\": \"000\",\r\n            \"gratuityPercentage\": \"0\",\r\n            \"totalAmount\": \"1000\",\r\n            \"currency\": \"USD\",\r\n            \"transactionID\": \"00021010001-10033331231\",\r\n            \"eftTransactionID\": \"778799887-77798987-798798878887888\",\r\n            \"originalEftTransactionID\": \"778799887-77798987-798798878887888\",\r\n            \"eftTimestamp\": \"1476113261\",\r\n            \"authorisationCode\": \"155884656588899\",\r\n            \"verificationMethod\": \"PIN\",\r\n            \"cardEntryType\": \"ICC\",\r\n            \"cardSchemeName\": \"VISA\",\r\n            \"errorMessage\": \"No error\",\r\n            \"customerReference\": \"0000000\",\r\n            \"budgetNumber\": \"0\",\r\n            \"recoveredTransaction\": false,\r\n            \"cardTypeId\": \"U015\",\r\n            \"merchantReceipt\": \"https://url_to_merchant_receipt\",\r\n            \"customerReceipt\": \"https://url_to_customer_receipt\"\r\n        },\r\n        \"deviceStatus\": {\r\n            \"serialNumber\": \"615856933558\",\r\n            \"batteryStatus\": \"100%\",\r\n            \"batterymV\": \"234\",\r\n            \"batteryCharging\": \"Charging\",\r\n            \"externalPower\": \"Connected\",\r\n            \"applicationName\": \"EFTClient\",\r\n            \"applicationVersion\": \"2.15.789\"\r\n        },\r\n        \"extraParameters\" : {}\r\n    }\r\n        \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metadata fields"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A string representation of the client version."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "systemInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object containing info about the Express client."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "protocolVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A string representation of the Express protocol version used in this request."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SystemInfo fields"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "osName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A string containing the name and version of the OS the client is running in."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A string containing the Bluetooth name of the card reader."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "internetConnectionType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A list of the available internet connection methods."
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