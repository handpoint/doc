"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[62749],{

/***/ 30571
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_windows_versioned_docs_version_windows_sdk_4_4_0_windowseventsubscribers_md_d1f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/windows/site-windows-versioned-docs-version-windows-sdk-4-4-0-windowseventsubscribers-md-d1f.json
const site_windows_versioned_docs_version_windows_sdk_4_4_0_windowseventsubscribers_md_d1f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"windowseventssubscribers","title":"Events Subscribers","description":"Register events delegate","source":"@site/windows_versioned_docs/version-Windows SDK 4.4.0/windowseventsubscribers.md","sourceDirName":".","slug":"/windowseventssubscribers","permalink":"/legacy/windows/windowseventssubscribers","draft":false,"unlisted":false,"tags":[],"version":"Windows SDK 4.4.0","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"id":"windowseventssubscribers"},"sidebar":"tutorialSidebar","previous":{"title":"Terminal Management","permalink":"/legacy/windows/windowsdevicemanagement"},"next":{"title":"Events Listeners","permalink":"/legacy/windows/windowsevents"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./windows_versioned_docs/version-Windows SDK 4.4.0/windowseventsubscribers.md


const frontMatter = {
	sidebar_position: 7,
	id: 'windowseventssubscribers'
};
const contentTitle = 'Events Subscribers';

const assets = {

};



const toc = [{
  "value": "Register events delegate",
  "id": "register-events-delegate",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters",
  "level": 5
}, {
  "value": "Unregister events delegate",
  "id": "unregister-events-delegate",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-1",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h4: "h4",
    h5: "h5",
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
        id: "events-subscribers",
        children: "Events Subscribers"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "register-events-delegate",
      children: "Register events delegate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "RegisterEventsDelegate"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Registers a delegate for the SDK events. The method getAsyncInterface in HapiFactory executes internally this subscription."
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "parameters",
      children: "Parameters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "listener"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Object"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any Object implementing one or more of the available delegate interfaces"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "public class ObjectHelper : Events.Required, Events.Status, Events.Log {\r\n\t...\r\n\tprivate void RegisterEventHandler() {\r\n\t\t// Register this class as listener for events \r\n\t\tthis.api.RegisterEventsDelegate(this);\r\n\t\t...\r\n\t}\r\n\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Boolean"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "True"
            }), " if the new delegate was added successfully."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "unregister-events-delegate",
      children: "Unregister events delegate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "UnregisterEventsDelegate"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unregisters an object from SDK events."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-1",
      children: "Parameters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "listener"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "Object"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any Object implementing one or more of the available delegate interfaces"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "public class ObjectHelper : Events.Required, Events.Status, Events.Log {\r\n\t...\r\n\tprivate void Unsubscribe() {\r\n\t// Stop receiving events\r\n\tthis.api.UnregisterEventsDelegate(this);\r\n\t...\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Boolean"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "True"
            }), " if the new delegate was removedded successfully."]
          })]
        })
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