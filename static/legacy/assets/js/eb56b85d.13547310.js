"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[95770],{

/***/ 82048
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_ios_versioned_docs_version_i_os_sdk_4_0_2_iosintegration_md_eb5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/ios/site-ios-versioned-docs-version-i-os-sdk-4-0-2-iosintegration-md-eb5.json
const site_ios_versioned_docs_version_i_os_sdk_4_0_2_iosintegration_md_eb5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"iosintegration","title":"Integration Guide","description":"The SDK supports the following connection methods:","source":"@site/ios_versioned_docs/version-iOS SDK 4.0.2/iosintegration.md","sourceDirName":".","slug":"/iosintegration","permalink":"/legacy/ios/iosintegration","draft":false,"unlisted":false,"tags":[],"version":"iOS SDK 4.0.2","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"id":"iosintegration"},"sidebar":"tutorialSidebar","previous":{"title":"SDK Installation","permalink":"/legacy/ios/iosinstallation"},"next":{"title":"Integration Example","permalink":"/legacy/ios/iossdkprocessing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./ios_versioned_docs/version-iOS SDK 4.0.2/iosintegration.md


const frontMatter = {
	sidebar_position: 6,
	id: 'iosintegration'
};
const contentTitle = 'Integration Guide';

const assets = {

};



const toc = [{
  "value": "Files in iOS SDK",
  "id": "filesiniOSSDK",
  "level": 2
}, {
  "value": "If you&#39;re using the library/Cocoapods:",
  "id": "if-youre-using-the-librarycocoapods",
  "level": 3
}, {
  "value": "If you&#39;re using the framework/Carthage:",
  "id": "if-youre-using-the-frameworkcarthage",
  "level": 3
}, {
  "value": "Development settings for the SDK",
  "id": "development-settings-for-the-sdk",
  "level": 2
}, {
  "value": "Usage summary",
  "id": "usage-summary",
  "level": 2
}, {
  "value": "Usage details",
  "id": "usage-details",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The SDK supports the following connection methods:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "#filesiniOSSDK",
            children: "Bluetooth (HiLite)"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "#filesiniOSSDK",
            children: "Lightning (HiPro)"
          })
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filesiniOSSDK",
      children: "Files in iOS SDK"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "if-youre-using-the-librarycocoapods",
      children: "If you're using the library/Cocoapods:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HandpointAll.h"
        }), ": #import this header file into your classes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "libheft.a"
        }), ": The SDK library."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "if-youre-using-the-frameworkcarthage",
      children: "If you're using the framework/Carthage:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "** HandpointSDK.h**: #import this header file into your classes."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HandpointSDK.framework"
        }), ": The SDK library."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The SDK also includes a simulator, a library configured to simulate a payment terminal - intended for early development of an user interface. To use it, just link the libheft.a file in the HeftSimulatorLibrary folder, instead of the actual SDK library."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "development-settings-for-the-sdk",
      children: "Development settings for the SDK"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dependencies"
          }), ":The", " Heft library depends on the", (0,jsx_runtime.jsx)(_components.code, {
            children: " ExternalAccessory"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: " libc++.dylib"
          }), " frameworks included with the iOS SDK. These frameworks and the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "libheft.a"
          }), " SDK library itself need to be linked to your project for the Handpoint interface to work properly."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Communication protocol"
          }), ": Your application needs to support the card reader communication protocol. For this reason, the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "com.datecs.pinpad"
          }), " string needs to be added to the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Supported external accessory protocols"
          }), " in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: ".plist file"
          }), ":"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "    <key>UISupportedExternalAccessoryProtocols</key>\r\n    <array>\r\n        <string>com.datecs.pinpad</string>\r\n    </array>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Background mode support"
        }), ": Your application needs to support connection to external devices when in the background. For this reason, in the \"Capabilities\" section of the project settings, the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Background Modes"
        }), " profile needs to be ON, and the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "External accessory communication "
        }), " option must be checked. This is equivalent to adding the following entry in the .plist file:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "    <key>UIBackgroundModes</key>\r\n    <array>\r\n        <string>external-accessory</string>\r\n    </array>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "C++ linker flag"
        }), ": A part of the library is written in c++ therefore the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "-lc++ linker flag"
        }), " needs to be set. Add it under \"Other Linker Flags\" under the \"Linking\" section of your projects settings \"Build Settings\" tab."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Other settings"
        }), ": To prevent the warning \"file was built for archive which is not the architecture being linked (armv7s)\", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "set Build Active Architecture Only"
        }), " to YES."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usage-summary",
      children: "Usage summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Any application using the Handpoint SDK should follow these steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define a class that implements the** HeftDiscoveryDelegate **protocol.\r\nThis class defines the behavior of the app when discovery related events are received from the SDK."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define a class that implements the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "HeftStatusReportDelegate"
        }), " protocol (it can be the same as above).\r\nThis class defines the behavior of the app when connection and transaction related events are received from the SDK"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Get a reference to the HeftManager singleton and assign your HeftDiscoveryDelegate instance as delegate."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If device is available through BT connection, start the discovery process by calling the** startDiscovery** function of the HeftManager and recover a list of the discovered devices by calling the **connectedCardReaders **function of the HeftManager."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If device is using a Lightning connector (HiPro devices), recover the device by directly calling the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "connectedCardReaders"
        }), " function of the HeftManager."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Connect to a device by calling the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "clientForDevice"
        }), " function of the HeftManager."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If connection is successful, the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "didConnect"
        }), " function of the HeftStatusReportDelegate instance will be invoked."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "From this point, start processing transactions and have fun!"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usage-details",
      children: "Usage details"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define a class that implements the ** HeftDiscoveryDelegate **protocol.\r\nThis class will define the behavior of the application when discovery related events are received from the SDK."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "    @interface MyDiscoveryDelegate () <HeftDiscoveryDelegate>\r\n    @implementation MyDiscoveryDelegate\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define a class that implements the** HeftStatusReportDelegate **protocol (it can be the same as above).\r\nThis class will define the behavior of the application when connection and transaction related events are received from the SDK."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "    @interface MyStatusReportDelegate () <HeftStatusReportDelegate>\r\n    @implementation MyStatusReportDelegate\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Get a reference to the HeftManager singleton in SDK by calling the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "sharedManager"
        }), " class method.\r\nAssign your HeftDiscoveryDelegate instance as delegate of the manager."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "    MyDiscoveryDelegate* myDiscoveryDelegate = [[alloc MyDiscoveryDelegate] init];\r\n    HeftManager* manager = [HeftManager sharedManager];\r\n    manager.delegate = myDiscoveryDelegate;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If device is available through BT connection, start the discovery process by calling the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "startDiscovery"
        }), " function of the HeftManager."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "    [manager startDiscovery];\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a device is selected by the user in the “Select device” popup window, the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "didFindAccessoryDevice"
      }), " function of the HeftDiscoveryDelegate is invoked."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "    - (void)didFindAccessoryDevice:(HeftRemoteDevice*)newDevice\r\n    {\r\n        NSLog(@\"Found new device\");\r\n        //Connect to found device or store it for later\r\n    } \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the discovery process is finished, the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "didDiscoverFinished"
      }), " function of the HeftDiscoveryDelegate instance will be invoked. Recover a list of all the discovered devices by calling the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "connectedCardReaders"
      }), " function of the HeftManager."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "    - (void)didDiscoverFinished\r\n    {\r\n        NSMutableDictionary *discoveredDevices = [self.manager connectedCardReaders];\r\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If device is using a Lightning connection (HiPro devices), skip the previous step and recover the device by directly calling the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "connectedCardReaders"
        }), " function of the HeftManager."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "HeftRemoteDevice *lightningDevice = [[self.manager connectedCardReaders] firstObject];\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Connect to a device by calling the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "clientForDevice"
        }), " function of the HeftManager."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Expected parameters of this function are:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "A discovered device (HeftRemoteDevice object)."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "A shared secret. The shared secret is a unique identifier. It is a used to link a merchant with his readers. Each one of your merchants will be assigned a different shared secret so it needs to be a configurable value in your application or backend. If you received a development kit with a card reader, our support team probably sent you a shared secret via email already."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "A HeftStatusReportDelegate instance, which will be notified of all the events related with the device."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "    // Declare the shared secret (below SS is an example, please put the one sent by our support team)\r\n    NSString *sharedSecret =@\"0102030405060708091011121314151617181920212223242526272829303132\";\r\n    // Connect to reader\r\n    [manager clientForDevice:device\r\n\t\t\tsharedSecret:mySharedSecret\r\n\t\t\tdelegate:myStatusReportDelegate];\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If connection is successful, the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "didConnect"
        }), " function of the HeftStatusReportDelegate instance will be invoked. Function receives as parameter a HeftClient object, whose reference must be stored since it is the communication bridge to the device we have connected to."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "    - (void)didConnect:(id <HeftClient>)client\r\n    {\r\n        self.heftClient = client;\r\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Once connected to the card reader, transactions can be started through the HeftClient object. For example, the next code starts a sale of 100 GBP:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "[self.heftClient saleWithAmount:100 currency:@\"GBP\" cardholder:YES];\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When a transaction has been initiated (f.ex saleWithAmount), the HeftClient alerts the HeftStatusReportDelegate object by invoking ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "responseStatus"
        }), " during the process and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "responceFinanceStatus"
        }), " when the process has finished."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "    - (void)responseStatus:(id<ResponseInfo>)info\r\n    {\r\n        NSLog(@\"responseStatus:\");\r\n        NSLog(info.status);\r\n        NSLog(info.xml.description);\r\n    }\r\n    \r\n    - (void)responseFinanceStatus:(id<FinanceResponseInfo>)info\r\n    {\r\n        NSLog(@\"responseFinanceStatus:\");\r\n        NSLog(info.status);\r\n        NSLog(info.customerReceipt);\r\n        NSLog(info.xml.description);\r\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In case you are using the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SDK simulator"
        }), ", the behavior changes according to the amount of the transaction:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Amount"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Behavior"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declined transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User Cancelled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature Requested"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Other  amount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approved transaction"
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