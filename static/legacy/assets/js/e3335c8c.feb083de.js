"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[40694],{

/***/ 63902
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_windows_versioned_docs_version_windows_sdk_3_2_5_windowsreleasenotes_md_e33_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/windows/site-windows-versioned-docs-version-windows-sdk-3-2-5-windowsreleasenotes-md-e33.json
const site_windows_versioned_docs_version_windows_sdk_3_2_5_windowsreleasenotes_md_e33_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"windowsreleasenotes","title":"Release Notes","description":"Don’t miss any updates on our latest releases. Contact your Handpoint relationship manager to subscribe to the Handpoint Newsletter!","source":"@site/windows_versioned_docs/version-Windows SDK 3.2.5/windowsreleasenotes.md","sourceDirName":".","slug":"/windowsreleasenotes","permalink":"/legacy/windows/Windows SDK 3.2.5/windowsreleasenotes","draft":false,"unlisted":false,"tags":[],"version":"Windows SDK 3.2.5","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"id":"windowsreleasenotes"},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/legacy/windows/Windows SDK 3.2.5/windowsintroduction"},"next":{"title":"Trigger Amounts","permalink":"/legacy/windows/Windows SDK 3.2.5/windowsapioverview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./windows_versioned_docs/version-Windows SDK 3.2.5/windowsreleasenotes.md


const frontMatter = {
	sidebar_position: 2,
	id: 'windowsreleasenotes'
};
const contentTitle = 'Release Notes';

const assets = {

};



const toc = [{
  "value": "3.2.5",
  "id": "325",
  "level": 2
}, {
  "value": "3.2.4",
  "id": "324",
  "level": 2
}, {
  "value": "3.2.3",
  "id": "323",
  "level": 2
}, {
  "value": "3.2.1",
  "id": "321",
  "level": 2
}, {
  "value": "3.2.0",
  "id": "320",
  "level": 2
}, {
  "value": "3.1.7",
  "id": "317",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
      id: "325",
      children: "3.2.5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nullpointer Exception on Cloud connect without network connection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cloud dependencies update."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connection handling on transitions states: Connecting and Disconnecting."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic Cloud reconnection handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unable to manually disconnect during a transaction."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "324",
      children: "3.2.4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "SignatureResult"
        }), " method. Signature result is always true no matter what is passed to the method."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "323",
      children: "3.2.3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Crash on signature result (DATECS)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "321",
      children: "3.2.1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improved SDK reconnection logic in case of network unstability."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "320",
      children: "3.2.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CLOUD Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mail Order/Telephone Order (MoTo)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "StopCurrentTransaction operation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "317",
      children: "3.1.7"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLOUD: Improved initial retry mechanism for triggering transactions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLOUD: Increased initial timeout for triggering transactions."
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