"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[69954],{

/***/ 68395
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_android_versioned_docs_version_android_sdk_7_1011_0_androidintroduction_md_107_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/android/site-android-versioned-docs-version-android-sdk-7-1011-0-androidintroduction-md-107.json
const site_android_versioned_docs_version_android_sdk_7_1011_0_androidintroduction_md_107_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"androidintroduction","title":"Introduction","description":"Android SDK","source":"@site/android_versioned_docs/version-Android SDK 7.1011.0/androidintroduction.md","sourceDirName":".","slug":"/androidintroduction","permalink":"/legacy/android/Android SDK 7.1011.0/androidintroduction","draft":false,"unlisted":false,"tags":[],"version":"Android SDK 7.1011.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"id":"androidintroduction"},"sidebar":"tutorialSidebar","next":{"title":"Release Notes","permalink":"/legacy/android/Android SDK 7.1011.0/androidreleasenotes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./android_versioned_docs/version-Android SDK 7.1011.0/androidintroduction.md


const frontMatter = {
	sidebar_position: 1,
	id: 'androidintroduction'
};
const contentTitle = 'Introduction';

const assets = {

};



const toc = [{
  "value": "SDK distribution",
  "id": "sdk-distribution",
  "level": 3
}, {
  "value": "AndroidManifest.xml",
  "id": "androidmanifestxml",
  "level": 3
}, {
  "value": "Gradle Settings",
  "id": "gradle-settings",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h3: "h3",
    header: "header",
    li: "li",
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
            children: "Android SDK"
          })
        }), (0,jsx_runtime.jsx)("div", {
          class: "card__body",
          children: (0,jsx_runtime.jsx)("img", {
            src: "https://handpoint.imgix.net/ballicons/small/android.png"
          })
        }), (0,jsx_runtime.jsx)("div", {
          class: "card__footer",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Get our latest android SDK! Ask our support team to obtain access if you don't have already.", (0,jsx_runtime.jsx)("br", {}), "\r\nIn our ", (0,jsx_runtime.jsx)("strong", {
              children: "Nexus Repository"
            }), " you will find both Development and Production ", (0,jsx_runtime.jsx)("strong", {
              children: "SDK"
            }), " versions."]
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you are currently using 6.x of the Android SDK, take a look at the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.1011.0/androidmigrationguide",
          children: "migration guide"
        }), " to 7.x"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The new generation of Handpoint APIs and SDKs are engineered to make your life simpler and happier."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Awesomely simple"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Created for humans, coders, geeks, no need of a dark and complex knowledge of the payment industry."
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Super secure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We take care of PCI compliance so you can be kept out of PCI scope. The Handpoint terminals encrypt all sensitive cardholder data so your app does not have to deal with it."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sdk-distribution",
      children: "SDK distribution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Handpoint Android SDK is available on the Handpoint internal Nexus server which contains both the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "production builds"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "development snapshots"
      }), " of the SDK."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If you are integrating your software with a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PAX debug terminal"
        }), " you will need to use the development Snapshots, listed as -RC.X-SNAPSHOT for example ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "7.1010.3-RC.1-SNAPSHOT"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If you are integrating your software with a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PAX production terminal"
        }), " or with a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "HiLite terminal"
        }), " you will need to use the Production versions listed eg ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "7.1010.3"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If in doubt regarding what version to use, we always recommend using the latest available production version, for development snapshots the recommendation is to use the latest RC (highest number) that matches the latest production SDK version published. Our support team is also available to answer any questions regarding what version to use."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Handpoint Android SDK is compatible with Android version 5.1.1 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.android.com/about/versions/lollipop/android-5.1",
        children: "(API level 22)"
      }), " and up.\r\nThe latest version is compiled with java ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.8"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "androidmanifestxml",
      children: "AndroidManifest.xml"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "strongly"
      }), " recommend you add the following to your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AndroidManifest.xml"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Inside the tag ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<application>"
          })
        }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "android:extractNativeLibs:\"true\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<application\r\n    android:extractNativeLibs:\"true\"\r\n    ...\r\n    ...\r\n    ...>    \r\n</application>   \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Inside the tag ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<activity>"
          })
        }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "android:launchMode=\"singleTask\""
        }), ":"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<activity android:name=\".MainActivity\"\r\n    android:launchMode=\"singleTask\">\r\n    ...\r\n    ...\r\n</activity>    \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gradle-settings",
      children: "Gradle Settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: " //Handpoint Staging/Development SDK (Debug terminals)\r\n implementation 'com.handpoint.api:sdk:7.x.x-RC.x-SNAPSHOT'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gradle.build"
      }), " (Top-level build file) for debug terminals (Nexus) [Only applies to PAX/Telpo devices]:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "      allprojects {\r\n        repositories {\r\n          google()\r\n          mavenCentral()\r\n          maven {\r\n            name = \"Handpoint Nexus\"\r\n            url = uri(\"urlProvided\") //URL provided by Handpoint once you order a dev kit \r\n            credentials { //Credentials provided by Handpoint once you order a dev kit \r\n              username = 'usernameProvided' \r\n              password = 'passwordProvided' \r\n           }\r\n          }\r\n        }\r\n      }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Some considerations to keep in mind when using gradle (for both production and debug terminals)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gradle.build"
      }), " (app module) add the following packaging options:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "android {\r\n  defaultConfig {\r\n      minSdkVersion 22 //Required to support all PAX & Telpo models\r\n      targetSdkVersion 29 //If using version targetSdkVersion 30 or higher, please note that you will need \r\n                          //to add android:exported=\"true\" or android:exported=\"false\" in your activities\r\n      multiDexEnabled true\r\n      ndk {\r\n          abiFilters \"arm64-v8a\", \"armeabi-v7a\", \"x86\", \"x86_64\"\r\n      }\r\n  }\r\n\r\n  packagingOptions {\r\n      pickFirst '**/*.so'\r\n      exclude 'META-INF/*'\r\n      exclude '**/anim/*.xml'\r\n      exclude '**/layout/*.xml'\r\n      exclude 'resources.arsc'\r\n      exclude 'AndroidManifest.xml'\r\n      exclude '**/animator/*.xml'\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It is time to visit our ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "androidintegrationguide",
          children: "Integration Guides"
        })
      }), " section."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you have any questions, do not hesitate to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "mailto:support@handpoint.com",
          children: "Contact Us"
        })
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