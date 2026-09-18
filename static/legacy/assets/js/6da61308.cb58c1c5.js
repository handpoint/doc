"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[41372],{

/***/ 23561
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_ios_versioned_docs_version_i_os_sdk_4_0_0_iosinstallation_md_6da_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/ios/site-ios-versioned-docs-version-i-os-sdk-4-0-0-iosinstallation-md-6da.json
const site_ios_versioned_docs_version_i_os_sdk_4_0_0_iosinstallation_md_6da_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"iosinstallation","title":"Installation","description":"CocoaPods","source":"@site/ios_versioned_docs/version-iOS SDK 4.0.0/iosinstallation.md","sourceDirName":".","slug":"/iosinstallation","permalink":"/legacy/ios/iOS SDK 4.0.0/iosinstallation","draft":false,"unlisted":false,"tags":[],"version":"iOS SDK 4.0.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"id":"iosinstallation"},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/legacy/ios/iOS SDK 4.0.0/iosintroduction"},"next":{"title":"Release Notes","permalink":"/legacy/ios/iOS SDK 4.0.0/iosreleasenotes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./ios_versioned_docs/version-iOS SDK 4.0.0/iosinstallation.md


const frontMatter = {
	sidebar_position: 2,
	id: 'iosinstallation'
};
const contentTitle = 'Installation';

const assets = {

};



const toc = [{
  "value": "CocoaPods",
  "id": "cocoapods",
  "level": 2
}, {
  "value": "Carthage",
  "id": "carthage",
  "level": 2
}, {
  "value": "Manually",
  "id": "manually",
  "level": 2
}, {
  "value": "Prebuilt static library",
  "id": "prebuilt-static-library",
  "level": 3
}, {
  "value": "Building the project yourself",
  "id": "building-the-project-yourself",
  "level": 3
}, {
  "value": "Framework",
  "id": "framework",
  "level": 3
}, {
  "value": "Static Library",
  "id": "static-library",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "installation",
        children: "Installation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cocoapods",
      children: "CocoaPods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://cocoapods.org/",
        children: "CocoaPods"
      }), " is a dependency manager for Cocoa projects. You can install it with the following command:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ gem install cocoapods\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you don't have a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Podfile"
      }), " yet:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ pod init\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To integrate HandpointSDK into your Xcode project using CocoaPods, specify it in your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Podfile"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "source 'https://github.com/CocoaPods/Specs.git'\r\nplatform :ios, '8.0'\r\nuse_frameworks!\r\n\r\ntarget 'your_target' do\r\n    pod 'HandpointSDK', '~> 3.2.3'\r\nend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then, run the following command:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ pod install\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "carthage",
      children: "Carthage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/Carthage/Carthage",
        children: "Carthage"
      }), " is a decentralized dependency manager that builds your dependencies and provides you with binary frameworks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can install Carthage with ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://brew.sh/",
        children: "Homebrew"
      }), " using the following command:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ brew update\r\n$ brew install carthage\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To integrate HandpointSDK into your Xcode project using Carthage, specify it in your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Cartfile"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "github \"handpoint/HandpointSDK-iOS\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "carthage update"
      }), " to build the framework and drag the built ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HandpointSDK.framework"
      }), " into your Xcode project."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manually",
      children: "Manually"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you'd rather handle the dependency manually there are three approaches to include ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HandpointSDK"
      }), " in your project:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prebuilt-static-library",
      children: "Prebuilt static library"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Download the latest pre-built static library from ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/handpoint/HandpointSDK-iOS",
        children: "Handpoint's developer portal"
      }), " and refer to the documentation there for the installation steps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "building-the-project-yourself",
      children: "Building the project yourself"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Download the latest version from the master branch:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ git clone https://github.com/handpoint/HandpointSDK-iOS.git\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Alternatively you can add it as a git ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://git-scm.com/docs/git-submodule",
        children: "submodule"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ git submodule add https://github.com/handpoint/HandpointSDK-iOS.git\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework",
      children: "Framework"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You'll find the dynamic framework project called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HandpointSDK.xcodeproj"
      }), " at the root of the repo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Static Library\r\nYou'll find the static library project called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "headstart.xcodeproj"
      }), " under the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Library"
      }), " folder."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "strongly"
      }), " discourage you from building this project yourself."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This project contains several targets, you need to build the aggregated target ", (0,jsx_runtime.jsx)(_components.code, {
        children: "device-simulator Release"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This target produces a .zip file in the same directory as the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "headstart.xcodeproj"
      }), " file containing both the library and the simulator library."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "static-library",
      children: "Static Library"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You'll find the static library project called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "headstart.xcodeproj"
      }), " under the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Library"
      }), " folder."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "strongly"
      }), " discourage you from building this project yourself."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This project contains several targets, you need to build the aggregated target ", (0,jsx_runtime.jsx)(_components.code, {
        children: "device-simulator Release"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This target produces a .zip file in the same directory as the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "headstart.xcodeproj"
      }), " file containing both the library and the simulator library."]
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