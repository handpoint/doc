"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[91819],{

/***/ 37361
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_android_versioned_docs_version_android_sdk_7_1005_2_androidmigrationguide_md_5da_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/android/site-android-versioned-docs-version-android-sdk-7-1005-2-androidmigrationguide-md-5da.json
const site_android_versioned_docs_version_android_sdk_7_1005_2_androidmigrationguide_md_5da_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"androidmigrationguide","title":"Migration from 6.X to 7.X","description":"1}","source":"@site/android_versioned_docs/version-Android SDK 7.1005.2/androidmigrationguide.md","sourceDirName":".","slug":"/androidmigrationguide","permalink":"/legacy/android/Android SDK 7.1005.2/androidmigrationguide","draft":false,"unlisted":false,"tags":[],"version":"Android SDK 7.1005.2","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"id":"androidmigrationguide"},"sidebar":"tutorialSidebar","previous":{"title":"Release Notes","permalink":"/legacy/android/Android SDK 7.1005.2/androidreleasenotes"},"next":{"title":"Trigger Amounts","permalink":"/legacy/android/Android SDK 7.1005.2/androidapioverview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 1 modules
var Tabs = __webpack_require__(4865);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(19365);
;// ./android_versioned_docs/version-Android SDK 7.1005.2/androidmigrationguide.md


const frontMatter = {
	sidebar_position: 3,
	id: 'androidmigrationguide'
};
const contentTitle = 'Migration from 6.X to 7.X{#1}';

const assets = {

};





const toc = [{
  "value": "1. New Interfaces",
  "id": "1-new-interfaces",
  "level": 2
}, {
  "value": "Interface SmartposRequired",
  "id": "interface-smartposrequired",
  "level": 4
}, {
  "value": "Interface MposRequired",
  "id": "interface-mposrequired",
  "level": 4
}, {
  "value": "Interface PosRequired",
  "id": "interface-posrequired",
  "level": 4
}, {
  "value": "Android Native Integration (PAX)",
  "id": "android-native-integration-pax",
  "level": 3
}, {
  "value": "Older Implementation (Android SDK 6.X)",
  "id": "older-implementation-android-sdk-6x",
  "level": 4
}, {
  "value": "Current Implementation (Android SDK 7.X)",
  "id": "current-implementation-android-sdk-7x",
  "level": 4
}, {
  "value": "Bluetooth Integration (HiLite)",
  "id": "bluetooth-integration-hilite",
  "level": 3
}, {
  "value": "Older Implementation (Android SDK 6.X)",
  "id": "older-implementation-android-sdk-6x-1",
  "level": 4
}, {
  "value": "Current Implementation (Android SDK 7.X)",
  "id": "current-implementation-android-sdk-7x-1",
  "level": 4
}, {
  "value": "Bluetooth and Android Native Integration (PAX &amp; HiLite)",
  "id": "bluetooth-and-android-native-integration-pax--hilite",
  "level": 3
}, {
  "value": "Older Implementation (Android SDK 6.X)",
  "id": "older-implementation-android-sdk-6x-2",
  "level": 4
}, {
  "value": "Current Implementation (Android SDK 7.X)",
  "id": "current-implementation-android-sdk-7x-2",
  "level": 4
}, {
  "value": "2. All financial operations are now returning an OperationStartResult object instead of a boolean",
  "id": "3",
  "level": 2
}, {
  "value": "3. Disabling the duplicate payment check service",
  "id": "4",
  "level": 2
}, {
  "value": "4. The <code>deviceCapabilities</code> event has been renamed to <code>supportedCardBrands</code>",
  "id": "4-the-devicecapabilities-event-has-been-renamed-to-supportedcardbrands",
  "level": 2
}, {
  "value": "5. The <code>saleAndTokenize</code> method has been removed. Since Android SDK 7.0.0, a <code>saleAndTokenizeOptions</code> object needs to be passed in &#39;options&#39; parameter of financial operations methods like <code>sale</code>",
  "id": "5-the-saleandtokenize-method-has-been-removed-since-android-sdk-700-a-saleandtokenizeoptions-object-needs-to-be-passed-in-options-parameter-of-financial-operations-methods-like-sale",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "1",
        children: "Migration from 6.X to 7.X"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The new version 7.X.X of our Android SDK introduces the following changes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["We removed the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.Required"
        }), " interface and divided it into ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.1005.2/androidmigrationguide#1-new-integration-interfaces",
          children: "3 different interfaces"
        }), " for a simpler and smoother integration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.1005.2/androidmigrationguide#3",
          children: "financial operations"
        }), " will now be returning an ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.1005.2/androidobjects#OperationStartResult",
          children: "OperationStartResult"
        }), " object instead of a boolean to indicate that the operation was successfully sent to the payment terminal:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The MAIN reason why we are now returning an object is because we want to give you access to the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " field inside the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "OperationStartResult"
            }), " object. The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " field is a unique identifier for the transaction that you will receive immediately after sending the transaction request to the terminal. If for any reason you do not receive the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TransactionResult"
            }), " object at the end of the transaction you will now be able to use the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " to directly query our Gateway and know instantly if the transaction for which you do not know the outcome was approved or declined."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["We are introducing a new feature called ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "duplicate payment check"
        }), ". Looking back at our data we have seen that when a merchant is not 100% sure of the transaction outcome, they will reprocess the transaction leading to the cardholder being charged twice. In order to avoid this scenario, we are now flagging the duplicate transaction and prompting a menu to the cardholder/merchant to confirm/cancel the 2nd charge, this menu is pushed by our SDK and will automatically be displayed on top of your own UI when required. We are only prompting the duplicate menu in case the same card is used twice in a row to process a transaction for the same amount within a 5 minutes timeframe. The duplicate payment check feature will be ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "enabled by default"
        }), " in the Android sdk 7.0.0 and can be disabled by passing a false value as part of the sale options ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.1005.2/androidmigrationguide#4",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "saleOptions.setCheckDuplicates(false);"
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deviceCapabilities"
        }), " event has been renamed to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "supportedCardBrands"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.a, {
          href: "androidtransactions#3",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "saleAndTokenize"
          })
        }), " method has been removed. Since Android SDK 7.0.0, a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "saleAndTokenizeOptions"
        }), " object needs to be passed in 'options' parameter of financial operations methods like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sale"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-new-interfaces",
      children: "1. New Interfaces"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For an easier integration with our SDK we removed the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Events.Required"
      }), " interface and divided it into 3 different interfaces:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Events.SmartposRequired"
        }), " which are the mandatory events to subscribe to for a PAX integration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Events.MposRequired"
        }), " which are the mandatory events to subscribe to for an HiLite integration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Events.PosRequired"
        }), " which are the mandatory events to subscribe to if you are doing both a PAX AND HiLite integration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here is the list of events being part of each interface:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "interface-smartposrequired",
      children: "Interface SmartposRequired"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.PendingResults"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.ConnectionStatusChanged"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.CurrentTransactionStatus"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.EndOfTransaction"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "interface-mposrequired",
      children: "Interface MposRequired"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.PendingResults"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.ConnectionStatusChanged"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.CurrentTransactionStatus"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.EndOfTransaction"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.DeviceDiscoveryFinished"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.SignatureRequired"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "interface-posrequired",
      children: "Interface PosRequired"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.PendingResults"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.ConnectionStatusChanged"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.CurrentTransactionStatus"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.EndOfTransaction"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.DeviceDiscoveryFinished"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.SignatureRequired"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The changes required for each of the above scenarios is described below."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "android-native-integration-pax",
      children: "Android Native Integration (PAX)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "older-implementation-android-sdk-6x",
      children: "Older Implementation (Android SDK 6.X)"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "Java",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            children: "public class HandpointDelegate implements \r\n\tEvents.Required,\r\n\tEvents.CurrentTransactionStatus,\r\n\tEvents.ConnectionStatusChanged,\r\n\tEvents.EndOfTransaction,\r\n\tEvents.TransactionResultReady {\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "Kotlin",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            children: "class KotlinClient: \r\n\tEvents.Required,\r\n    Events.CurrentTransactionStatus,\r\n    Events.ConnectionStatusChanged {\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "current-implementation-android-sdk-7x",
      children: "Current Implementation (Android SDK 7.X)"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "Java",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            children: "public class HandpointDelegate implements\r\n    Events.SmartposRequired,\r\n    Events.CurrentTransactionStatus,\r\n    Events.ConnectionStatusChanged,\r\n    Events.EndOfTransaction,\r\n    Events.TransactionResultReady {\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "Kotlin",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            children: "class KotlinClient: Events.SmartposRequired {\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bluetooth-integration-hilite",
      children: "Bluetooth Integration (HiLite)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "older-implementation-android-sdk-6x-1",
      children: "Older Implementation (Android SDK 6.X)"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "Java",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            children: "public class HandpointDelegate implements \r\n\tEvents.Required, \r\n\tEvents.ConnectionStatusChanged, \r\n\tEvents.CurrentTransactionStatus,\r\n\tEvents.SignatureRequired,\r\n\tEvents.EndOfTransaction,\r\n\tEvents.DeviceDiscoveryFinished,\r\n\tEvents.TransactionResultReady {\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "Kotlin",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            children: "class KotlinClient: \r\n    Events.Required, \r\n\tEvents.ConnectionStatusChanged, \r\n\tEvents.CurrentTransactionStatus {\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "current-implementation-android-sdk-7x-1",
      children: "Current Implementation (Android SDK 7.X)"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "Java",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            children: "public class JavaClient implements\r\n\tEvents.MposRequired,\r\n\tEvents.ConnectionStatusChanged, \r\n    Events.CurrentTransactionStatus,\r\n    Events.SignatureRequired,\r\n    Events.EndOfTransaction,\r\n    Events.DeviceDiscoveryFinished,\r\n    Events.TransactionResultReady {\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "Kotlin",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            children: "class KotlinClient: Events.MposRequired {\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bluetooth-and-android-native-integration-pax--hilite",
      children: "Bluetooth and Android Native Integration (PAX & HiLite)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "older-implementation-android-sdk-6x-2",
      children: "Older Implementation (Android SDK 6.X)"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "Java",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            children: "public class HandpointDelegate implements \r\n\tEvents.Required, \r\n\tEvents.ConnectionStatusChanged, \r\n\tEvents.CurrentTransactionStatus,\r\n\tEvents.SignatureRequired,\r\n\tEvents.EndOfTransaction,\r\n\tEvents.DeviceDiscoveryFinished,\r\n\tEvents.TransactionResultReady {\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "Kotlin",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            children: "class KotlinClient: \r\n    Events.Required, \r\n\tEvents.ConnectionStatusChanged, \r\n\tEvents.CurrentTransactionStatus {\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "current-implementation-android-sdk-7x-2",
      children: "Current Implementation (Android SDK 7.X)"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "Java",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            children: "public class JavaClient implements\r\n\tEvents.PosRequired,\r\n\tEvents.ConnectionStatusChanged, \r\n\tEvents.CurrentTransactionStatus,\r\n\tEvents.SignatureRequired,\r\n\tEvents.EndOfTransaction,\r\n\tEvents.DeviceDiscoveryFinished,\r\n\tEvents.TransactionResultReady  {\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "Kotlin",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            children: "class KotlinClient: Events.PosRequired {\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "3",
      children: ["2. All financial operations are now returning an ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1005.2/androidobjects#operation-start-result",
        children: "OperationStartResult"
      }), " object instead of a boolean"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The methods affected by this change are the following:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.1005.2/androidtransactions#2",
          children: "Sale"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.1005.2/androidtransactions#4",
          children: "SaleReversal"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.1005.2/androidtransactions#5",
          children: "Refund"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.1005.2/androidtransactions#6",
          children: "RefundReversal"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.1005.2/androidtransactions#7",
          children: "MotoSale"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.1005.2/androidtransactions#8",
          children: "MotoRefund"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.1005.2/androidtransactions#9",
          children: "MotoReversal"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.1005.2/androidtransactions#12",
          children: "TokenizeCard"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.1005.2/androidtransactions#13",
          children: "CardPan"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4",
      children: "3. Disabling the duplicate payment check service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "This functionality is only available for SmartPos devices (PAX)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, the duplicate payment check service is enabled. If you want to manually disable this service you will need to set the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "checkDuplicate"
      }), " field to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "false"
      }), " using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SaleOptions"
      }), " parameter. Here is an example:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public void pay(BigInteger amount, Currency currency) {\r\n\tSaleOptions saleOptions = new SaleOptions();\r\n\tsaleOptions.setCheckDuplicates(false);\r\n\tthis.api.sale(amount, currency, saleOptions);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can disable the duplicate check functionality for the following financial operations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.1005.2/androidtransactions#2",
          children: "Sale"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.1005.2/androidtransactions#3",
          children: "Sale and Tokenize"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.1005.2/androidtransactions#5",
          children: "Refund"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "4-the-devicecapabilities-event-has-been-renamed-to-supportedcardbrands",
      children: ["4. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "deviceCapabilities"
      }), " event has been renamed to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "supportedCardBrands"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Check out the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1005.2/androideventlisteners#cardBrandDisplay",
        children: "card brand display"
      }), " object."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "5-the-saleandtokenize-method-has-been-removed-since-android-sdk-700-a-saleandtokenizeoptions-object-needs-to-be-passed-in-options-parameter-of-financial-operations-methods-like-sale",
      children: ["5. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "saleAndTokenize"
      }), " method has been removed. Since Android SDK 7.0.0, a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "saleAndTokenizeOptions"
      }), " object needs to be passed in 'options' parameter of financial operations methods like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sale"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Check out the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1005.2/androidtransactions#3",
        children: "Sale and Tokenize Card"
      }), " section."]
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

/***/ 19365
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
var tabsUtils = __webpack_require__(47751);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabItem":"tabItem_Ymn6"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabItemPanel({children,className,hidden}){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{role:"tabpanel",className:(0,clsx/* default */.A)(styles_module.tabItem,className),hidden,children:children});}function TabItem({children,className,value}){const{selectedValue,lazy}=(0,tabsUtils/* useTabs */.uc)();const isSelected=value===selectedValue;// TODO Docusaurus v4: use <Activity> ?
if(!isSelected&&lazy){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)(TabItemPanel,{className:className,hidden:!isSelected,children:children});}

/***/ },

/***/ 4865
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(17559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
var tabsUtils = __webpack_require__(47751);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(23104);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(92303);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabList({className}){const{selectedValue,selectValue,tabValues,block}=(0,tabsUtils/* useTabs */.uc)();const tabRefs=[];const{blockElementScrollPositionUntilNextRender}=(0,scrollUtils/* useScrollPositionBlocker */.a_)();const handleTabChange=event=>{const newTab=event.currentTarget;const newTabIndex=tabRefs.indexOf(newTab);const newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};const handleKeydown=event=>{let focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{const nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=tabRefs[nextTab]??tabRefs[0];break;}case'ArrowLeft':{const prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=tabRefs[prevTab]??tabRefs[tabRefs.length-1];break;}default:break;}focusElement?.focus();};return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx/* default */.A)('tabs',{'tabs--block':block},className),children:tabValues.map(({value,label,attributes})=>/*#__PURE__*/(0,jsx_runtime.jsx)("li",{// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,ref:ref=>{tabRefs.push(ref);},onKeyDown:handleKeydown,onClick:handleTabChange,...attributes,className:(0,clsx/* default */.A)('tabs__item',styles_module.tabItem,attributes?.className,{'tabs__item--active':selectedValue===value}),children:label??value},value))});}function TabContent({children}){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-top--md",children:children});}function TabsContainer({className,children}){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.tabs.container,// former name kept for backward compatibility
// see https://github.com/facebook/docusaurus/pull/4086
'tabs-container',styles_module.tabList),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TabList// Surprising but historical
// className is applied on TabList, not on TabsContainer
,{className:className}),/*#__PURE__*/(0,jsx_runtime.jsx)(TabContent,{children:children})]});}function Tabs(props){const isBrowser=(0,useIsBrowser/* default */.A)();const value=(0,tabsUtils/* useTabsContextValue */.OC)(props);return/*#__PURE__*/(0,jsx_runtime.jsx)(tabsUtils/* TabsProvider */.O_,{value:value// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TabsContainer,{className:props.className,children:(0,tabsUtils/* sanitizeTabsChildren */.vT)(props.children)})},String(isBrowser));}

/***/ },

/***/ 47751
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OC: () => (/* binding */ useTabsContextValue),
/* harmony export */   O_: () => (/* binding */ TabsProvider),
/* harmony export */   uc: () => (/* binding */ useTabs),
/* harmony export */   vT: () => (/* binding */ sanitizeTabsChildren)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56347);
/* harmony import */ var _docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(205);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57485);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70679);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31682);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function sanitizeTabsChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(child=>child!=='\n');}function extractChildrenTabValues(children){// ✅ <TabItem value="red"/> => true
// ✅ <CustomTabItem value="red"/> => true
// ❌ <RedTabItem value="tab-value"/> => requires <Tabs values> prop
function isTabItemWithValueProp(comp){const{props}=comp;return!!props&&typeof props==='object'&&'value'in props;}const elements=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).flatMap(child=>{// Historical case, not sure when it happens, do we really need this?
if(!child){return[];}if(/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)&&isTabItemWithValueProp(child)){return[child];}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
const badChildTypeName=// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name;throw new Error(`Docusaurus error: Bad <Tabs> child <${badChildTypeName}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.
If you do not want to pass on a "value" prop to the direct children of <Tabs>, you can also pass an explicit <Tabs values={...}> prop.`);});return elements.map(({props:{value,label,attributes,default:isDefault}})=>({value,label,attributes,default:isDefault}));}function ensureNoDuplicateValue(values){const dup=(0,_index__WEBPACK_IMPORTED_MODULE_5__/* .duplicates */ .XI)(values,(a,b)=>a.value===b.value);if(dup.length>0){throw new Error(`Docusaurus error: Duplicate values "${dup.map(a=>`'${a.value}'`).join(', ')}" found in <Tabs>. Every value needs to be unique.`);}}function useTabValues(props){const{values:valuesProp,children}=props;return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{const values=valuesProp??extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue({value,tabValues}){return tabValues.some(a=>a.value===value);}function getInitialStateValue({defaultValue,tabValues}){if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues})){throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${tabValues.map(a=>a.value).join(', ')}. If you intend to show no default tab, use defaultValue={null} instead.`);}return defaultValue;}const defaultTabValue=tabValues.find(tabValue=>tabValue.default)??tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return`docusaurus.tab.${groupId}`;}function getQueryStringKey({queryString=false,groupId}){if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);}return groupId??null;}function useTabQueryString({queryString=false,groupId}){const history=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useHistory */ .W6)();const key=getQueryStringKey({queryString,groupId});const value=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useQueryStringValue */ .aZ)(key);const setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue=>{if(!key){return;// no-op
}const searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace({...history.location,search:searchParams.toString()});},[key,history]);return[value,setValue];}function useTabStorage({groupId}){const key=getStorageKey(groupId);const[value,storageSlot]=(0,_index__WEBPACK_IMPORTED_MODULE_4__/* .useStorageSlot */ .Dv)(key);const setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue=>{if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabsContextValue(props){const{defaultValue,queryString=false,groupId}=props;const tabValues=useTabValues(props);const[selectedValue,setSelectedValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>getInitialStateValue({defaultValue,tabValues}));const[queryStringValue,setQueryString]=useTabQueryString({queryString,groupId});const[storageValue,setStorageValue]=useTabStorage({groupId});// We sync valid querystring/storage value to state on change + hydration
const valueToSync=(()=>{const value=queryStringValue??storageValue;if(!isValidValue({value,tabValues})){return null;}return value;})();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(()=>{if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);const selectValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue=>{if(!isValidValue({value:newValue,tabValues})){throw new Error(`Can't select invalid tab value=${newValue}`);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue,selectValue,tabValues,lazy:props.lazy??false,block:props.block??false};}const TabsContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function useTabs(){const contextValue=react__WEBPACK_IMPORTED_MODULE_0__.useContext(TabsContext);if(!contextValue){throw new Error('useTabsContext() must be used within a Tabs component');}return contextValue;}function TabsProvider(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabsContext.Provider,{value:props.value,children:props.children});}

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