"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[54868],{

/***/ 62263
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_express_versioned_docs_version_express_sdk_1_2_expressdownloads_md_0c4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/express/site-express-versioned-docs-version-express-sdk-1-2-expressdownloads-md-0c4.json
const site_express_versioned_docs_version_express_sdk_1_2_expressdownloads_md_0c4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"expressdownloads","title":"Downloads","description":"Sandbox logo  |  Get the SDK!   Sandbox logo","source":"@site/express_versioned_docs/version-Express SDK 1.2/expressdownloads.md","sourceDirName":".","slug":"/expressdownloads","permalink":"/legacy/express/Express SDK 1.2/expressdownloads","draft":false,"unlisted":false,"tags":[],"version":"Express SDK 1.2","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"id":"expressdownloads"},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/legacy/express/Express SDK 1.2/expressintroduction"},"next":{"title":"Data Flow","permalink":"/legacy/express/Express SDK 1.2/expressdataflow"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./express_versioned_docs/version-Express SDK 1.2/expressdownloads.md


const frontMatter = {
	sidebar_position: 2,
	id: 'expressdownloads'
};
const contentTitle = 'Downloads';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "downloads",
        children: "Downloads"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Express application then takes care of finalizing the transaction with the card reader and sends the result and receipts back to the web application at the end of the operation."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      class: "card-demo",
      align: "middle",
      children: (0,jsx_runtime.jsxs)("div", {
        class: "card card-background",
        style: {
          flexDirection: 'row'
        },
        children: [(0,jsx_runtime.jsxs)("div", {
          children: [(0,jsx_runtime.jsx)("div", {
            class: "card__header",
            children: (0,jsx_runtime.jsx)("img", {
              src: "https://handpoint.imgix.net/icon-express.png?w=90"
            })
          }), (0,jsx_runtime.jsxs)("div", {
            class: "card__body",
            children: [(0,jsx_runtime.jsx)("h2", {
              children: "Get the Express apps! "
            }), (0,jsx_runtime.jsx)("a", {
              href: "https://itunes.apple.com/us/app/express-handpoint/id1324085213?mt=8",
              children: (0,jsx_runtime.jsx)("img", {
                src: "https://handpoint.imgix.net/apple-store.png?w=180"
              })
            })]
          }), (0,jsx_runtime.jsx)("div", {
            class: "card__body",
            children: (0,jsx_runtime.jsx)("a", {
              href: "https://play.google.com/store/apps/details?id=com.handpoint.express",
              children: (0,jsx_runtime.jsx)("img", {
                src: "https://handpoint.imgix.net/play-store.png?w=180"
              })
            })
          }), (0,jsx_runtime.jsx)("div", {
            class: "card__body",
            children: (0,jsx_runtime.jsx)("a", {
              href: "https://www.handpoint.com/downloads/express/windows/Express.exe",
              children: (0,jsx_runtime.jsx)("img", {
                src: "https://handpoint.imgix.net/windows-store.png?w=180"
              })
            })
          })]
        }), (0,jsx_runtime.jsxs)("div", {
          children: [(0,jsx_runtime.jsx)("div", {
            class: "card__header",
            children: (0,jsx_runtime.jsx)("img", {
              src: "https://handpoint.imgix.net/ballicons/small/cloud.png?w=90"
            })
          }), (0,jsx_runtime.jsxs)("div", {
            class: "card__body",
            children: [(0,jsx_runtime.jsx)("h2", {
              children: "Get the SDK! "
            }), (0,jsx_runtime.jsx)("a", {
              class: "button button--primary",
              href: "https://handpoint.com/express/js/hapiexpress.js",
              children: "JavaScript Express SDK"
            })]
          })]
        })]
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