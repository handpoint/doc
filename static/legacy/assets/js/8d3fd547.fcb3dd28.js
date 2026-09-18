"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[34370],{

/***/ 81494
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_windows_versioned_docs_version_windows_sdk_4_3_1_windowsintroduction_md_8d3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/windows/site-windows-versioned-docs-version-windows-sdk-4-3-1-windowsintroduction-md-8d3.json
const site_windows_versioned_docs_version_windows_sdk_4_3_1_windowsintroduction_md_8d3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"windowsintroduction","title":"Introduction","description":"Windows SDK","source":"@site/windows_versioned_docs/version-Windows SDK 4.3.1/windowsintroduction.md","sourceDirName":".","slug":"/windowsintroduction","permalink":"/legacy/windows/Windows SDK 4.3.1/windowsintroduction","draft":false,"unlisted":false,"tags":[],"version":"Windows SDK 4.3.1","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"id":"windowsintroduction"},"sidebar":"tutorialSidebar","next":{"title":"Release Notes","permalink":"/legacy/windows/Windows SDK 4.3.1/windowsreleasenotes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./windows_versioned_docs/version-Windows SDK 4.3.1/windowsintroduction.md


const frontMatter = {
	sidebar_position: 1,
	id: 'windowsintroduction'
};
const contentTitle = 'Introduction';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "introduction",
        children: "Introduction"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      class: "card-demo",
      align: "middle",
      children: (0,jsx_runtime.jsxs)("div", {
        class: "card card-background",
        children: [(0,jsx_runtime.jsx)("div", {
          class: "card__header",
          children: (0,jsx_runtime.jsx)("h3", {
            children: "Windows SDK"
          })
        }), (0,jsx_runtime.jsx)("div", {
          class: "card__body",
          children: (0,jsx_runtime.jsx)("a", {
            href: "https://www.nuget.org/packages/HandpointSDK/",
            children: (0,jsx_runtime.jsx)("img", {
              src: "https://handpoint.imgix.net/ballicons/small/macbook.png"
            })
          })
        }), (0,jsx_runtime.jsxs)("div", {
          class: "card__footer",
          children: [(0,jsx_runtime.jsx)("p", {
            children: (0,jsx_runtime.jsx)("a", {
              class: "button button--primary",
              href: "https://www.nuget.org/packages/HandpointSDK/",
              children: "Get the latest Windows SDK!"
            })
          }), (0,jsx_runtime.jsxs)("p", {
            children: ["If you are integrating your software with a ", (0,jsx_runtime.jsx)("b", {
              children: "PAX debug terminal"
            }), " you will need to use the ", (0,jsx_runtime.jsx)("b", {
              children: "x.x.x-beta"
            }), " version of the SDK."]
          }), (0,jsx_runtime.jsxs)("p", {
            children: ["If you are integrating your software with a ", (0,jsx_runtime.jsx)("b", {
              children: "PAX production terminal"
            }), " you will need to use the ", (0,jsx_runtime.jsx)("b", {
              children: "x.x.x"
            }), " version of the SDK."]
          }), (0,jsx_runtime.jsxs)("p", {
            children: ["If you are integrating your software with an ", (0,jsx_runtime.jsx)("b", {
              children: "HiLite terminal"
            }), " you will need to to use the ", (0,jsx_runtime.jsx)("b", {
              children: "x.x.x"
            }), " version of the SDK."]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The new generation of Handpoint APIs and SDKs are engineered to make your life simpler, happier."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Awesomely simple"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Created for humans, coders, geeks, no need of dark and complex knowledge of the payment industry."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Superly secure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We take care of the PCI side so you don't have to spend months becoming compliant.\r\nThe Handpoint card reader encrypts all sensitive cardholder data so your app does not have to deal with it."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Working with the SDK"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Handpoint Windows SDK is compatible with .NET Framework Version 4.6.1."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Download the SDK."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a new windows form project in Visual Studio 2010 (or above) using .Net Framework Version 4.6.1."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.nuget.org/packages/HandpointSDK/",
          children: "HandpointSDK NuGet Package"
        }), " to your project.\r\nIf you have a DEBUG device ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://handpoint.atlassian.net/wiki/spaces/PD/pages/1578401793/How+to+Identify+Between+Development+and+Production+Terminals",
          children: "(How to identify DEBUG devices)"
        }), " please use the package version -beta (prerelease): Example 3.0.0-beta"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow the getting started guide, to get you up and running or dive into the documentation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you have any questions, do not hesitate to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "mailto:support@handpoint.com",
        children: "contact us"
      }), "."]
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