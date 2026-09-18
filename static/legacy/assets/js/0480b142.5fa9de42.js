"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[8070],{

/***/ 7208
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_faq_md_048_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-faq-md-048.json
const site_docs_faq_md_048_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"faq","title":"FAQ","description":"What is the difference between a Debug device and a Prod device?","source":"@site/docs/faq.md","sourceDirName":".","slug":"/faq","permalink":"/legacy/docs/faq","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/faq.md","tags":[],"version":"current","frontMatter":{"id":"faq"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/faq.md


const frontMatter = {
	id: 'faq'
};
const contentTitle = 'FAQ';

const assets = {

};



const toc = [{
  "value": "What is the difference between a Debug device and a Prod device?",
  "id": "what-is-the-difference-between-a-debug-device-and-a-prod-device",
  "level": 3
}, {
  "value": "How to check if a PAX A920 device is Debug Mode or Prod Mode?",
  "id": "how-to-check-if-a-pax-a920-device-is-debug-mode-or-prod-mode",
  "level": 3
}, {
  "value": "How to install an App on a Debug device?",
  "id": "how-to-install-an-app-on-a-debug-device",
  "level": 3
}, {
  "value": "PAX Password",
  "id": "pax-password",
  "level": 3
}, {
  "value": "What type of signature should be used when signing an App?",
  "id": "what-type-of-signature-should-be-used-when-signing-an-app",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "faq",
        children: "FAQ"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-the-difference-between-a-debug-device-and-a-prod-device",
      children: "What is the difference between a Debug device and a Prod device?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The A920 Debug device is intended for development purposes only. It allows you to sideload an APK and transfer files through USB cable easily and quickly. With Prod devices, for security reasons, it is impossible to sideload an APK."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The only way to update the applications is through PAXSTORE. Only Prod devices are allowed to be deployed in the market."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-to-check-if-a-pax-a920-device-is-debug-mode-or-prod-mode",
      children: "How to check if a PAX A920 device is Debug Mode or Prod Mode?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Turn on the device, you can find a DEBUG only Not for COMMERCIAL watermark on the bottom right of the screen on a Debug device. If there is no watermark visible, it is a Prod device. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://handpoint.atlassian.net/wiki/spaces/PD/pages/1578401793/How+to+Identify+Between+Development+and+Production+Terminals",
        children: "Here"
      }), " we have a guide with more info about this topic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-to-install-an-app-on-a-debug-device",
      children: "How to install an App on a Debug device?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you develop your Android app with Android Studio you can simply connect the device to your computer and install the APK directly on the device. Alternatively, you can transfer the APK to the device, then click it on the device and follow the instructions to install it."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "On Mac, you will need a file transfer tool (e.g. Android File Transfer). On Windows, you can simply copy and paste the APK."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pax-password",
      children: "PAX Password"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Terminal OS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Setting Password"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Developer Option Password (Debug Device Only)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A920 5.1 (V3.22 and Below"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9876"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pax9876"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A920 5.1 (V3.23 and Above)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pax9876@@"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dev9876@@"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A920 7.1 (V5.05 and Below)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9876"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pax9876"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A920 7.1 (V5.06 and Above)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pax9876@@"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dev9876@@"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-type-of-signature-should-be-used-when-signing-an-app",
      children: "What type of signature should be used when signing an App?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In order to publish an APK on PAXSTORE, the suggested method is to use a local Keystore and let Android Studio sign the APK. All the APK versions of the same App should be signed with the same developer signature."
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