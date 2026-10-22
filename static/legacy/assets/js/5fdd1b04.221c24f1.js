"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[53071],{

/***/ 92415
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_android_versioned_docs_version_android_sdk_7_1008_4_androideventlisteners_md_5fd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/android/site-android-versioned-docs-version-android-sdk-7-1008-4-androideventlisteners-md-5fd.json
const site_android_versioned_docs_version_android_sdk_7_1008_4_androideventlisteners_md_5fd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"androideventlisteners","title":"Events Listeners","description":"SmartposRequired","source":"@site/android_versioned_docs/version-Android SDK 7.1008.4/androideventlisteners.md","sourceDirName":".","slug":"/androideventlisteners","permalink":"/legacy/android/Android SDK 7.1008.4/androideventlisteners","draft":false,"unlisted":false,"tags":[],"version":"Android SDK 7.1008.4","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"id":"androideventlisteners"},"sidebar":"tutorialSidebar","previous":{"title":"Events Subscribers","permalink":"/legacy/android/Android SDK 7.1008.4/androideventsubscribers"},"next":{"title":"Objects","permalink":"/legacy/android/Android SDK 7.1008.4/androidobjects"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./android_versioned_docs/version-Android SDK 7.1008.4/androideventlisteners.md


const frontMatter = {
	sidebar_position: 8,
	id: 'androideventlisteners'
};
const contentTitle = 'Events Listeners';

const assets = {

};



const toc = [{
  "value": "SmartposRequired",
  "id": "smartposrequired",
  "level": 2
}, {
  "value": "MposRequired",
  "id": "mposrequired",
  "level": 2
}, {
  "value": "PosRequired",
  "id": "posrequired",
  "level": 2
}, {
  "value": "Card Brand Display",
  "id": "cardBrandDisplay",
  "level": 2
}, {
  "value": "Card Tokenization",
  "id": "card-tokenization",
  "level": 2
}, {
  "value": "Connection status changed",
  "id": "connectionStatusChanged",
  "level": 2
}, {
  "value": "Current transaction status",
  "id": "14",
  "level": 2
}, {
  "value": "Device capabilities ready",
  "id": "deviceCapabilitiesReady",
  "level": 2
}, {
  "value": "Device discovery finished",
  "id": "deviceDiscoveryFinished",
  "level": 2
}, {
  "value": "End of transaction",
  "id": "16",
  "level": 2
}, {
  "value": "Hardware status changed",
  "id": "hardwareStatusChanged",
  "level": 2
}, {
  "value": "Log",
  "id": "log",
  "level": 2
}, {
  "value": "MessageHandling",
  "id": "messageHandling",
  "level": 2
}, {
  "value": "On message logged",
  "id": "onMessageLogged",
  "level": 2
}, {
  "value": "PhysicalKeyboardEvent",
  "id": "physicalKeyboardEvent",
  "level": 2
}, {
  "value": "PendingResults",
  "id": "pendingResults",
  "level": 2
}, {
  "value": "PaymentProvider",
  "id": "paymentprovider",
  "level": 2
}, {
  "value": "PrinterEvents",
  "id": "printerEvents",
  "level": 2
}, {
  "value": "Report result",
  "id": "reportResult",
  "level": 2
}, {
  "value": "Signature required",
  "id": "15",
  "level": 2
}, {
  "value": "Status",
  "id": "status",
  "level": 2
}, {
  "value": "Transaction result ready",
  "id": "transactionResultReady",
  "level": 2
}, {
  "value": "Transaction started",
  "id": "transactionStarted",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
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
        id: "events-listeners",
        children: "Events Listeners"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "smartposrequired",
      children: "SmartposRequired"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.SmartposRequired"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You must provide a class implementing this interface when initializing the SDK for a smartPOS terminal (PAX/Telpo)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.SmartposRequired {\r\n\r\n\t@Override\r\n    public void connectionStatusChanged(ConnectionStatus status, Device device)  { ... }\r\n\t @Override\r\n    public void currentTransactionStatus(StatusInfo statusInfo, Device device) { ... }\r\n\t@Override\r\n\tpublic void endOfTransaction(TransactionResult transactionResult, Device device) { ... }\r\n\t@Override\r\n\tpublic void transactionResultReady(TransactionResult transactionResult, Device device) { ... }\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#connectionStatusChanged",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ConnectionStatusChanged"
        })
      }), (0,jsx_runtime.jsx)(_components.a, {
        href: "#14",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "CurrentTransactionStatus"
        })
      }), (0,jsx_runtime.jsx)(_components.a, {
        href: "#16",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "EndOfTransaction"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pendingResults",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "PendingResults"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mposrequired",
      children: "MposRequired"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.MposRequired"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You must provide a class implementing this interface when initializing the SDK for an mPOS terminal (HiLite)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.MposRequired {\r\n    @Override\r\n    public void deviceDiscoveryFinished(List devices) { ... }\r\n\t@Override\r\n    public void connectionStatusChanged(ConnectionStatus status, Device device)  { ... }\r\n\t @Override\r\n    public void currentTransactionStatus(StatusInfo statusInfo, Device device) { ... }\r\n\t@Override\r\n    public void signatureRequired(SignatureRequest signatureRequest, Device device) { ... }\r\n\t@Override\r\n\tpublic void endOfTransaction(TransactionResult transactionResult, Device device) { ... }\r\n\t@Override\r\n\tpublic void transactionResultReady(TransactionResult transactionResult, Device device) { ... }\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#connectionStatusChanged",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ConnectionStatusChanged"
        })
      }), (0,jsx_runtime.jsx)(_components.a, {
        href: "#14",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "CurrentTransactionStatus"
        })
      }), (0,jsx_runtime.jsx)(_components.a, {
        href: "#16",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "EndOfTransaction"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pendingResults",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "PendingResults"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#deviceDiscoveryFinished",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "DeviceDiscoveryFinished"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#15",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "SignatureRequired"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "posrequired",
      children: "PosRequired"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.PosRequired"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You must provide a class implementing this interface when initializing the SDK when supporting both mPOS and SmartPOS terminals (PAX/Telpo & HiLite)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.PosRequired {\r\n    @Override\r\n    public void deviceDiscoveryFinished(List devices) { ... }\r\n\t@Override\r\n    public void connectionStatusChanged(ConnectionStatus status, Device device)  { ... }\r\n\t @Override\r\n    public void currentTransactionStatus(StatusInfo statusInfo, Device device) { ... }\r\n\t@Override\r\n    public void signatureRequired(SignatureRequest signatureRequest, Device device) { ... }\r\n\t@Override\r\n\tpublic void endOfTransaction(TransactionResult transactionResult, Device device) { ... }\r\n\t@Override\r\n\tpublic void transactionResultReady(TransactionResult transactionResult, Device device) { ... }\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#connectionStatusChanged",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ConnectionStatusChanged"
        })
      }), (0,jsx_runtime.jsx)(_components.a, {
        href: "#14",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "CurrentTransactionStatus"
        })
      }), (0,jsx_runtime.jsx)(_components.a, {
        href: "#16",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "EndOfTransaction"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pendingResults",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "PendingResults"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#deviceDiscoveryFinished",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "DeviceDiscoveryFinished"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#15",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "SignatureRequired"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cardBrandDisplay",
      children: "Card Brand Display"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.CardBrandDisplay"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An interface which needs to be implemented and added as a listener to get events providing information on the supported card brands and/or the card brand used during the transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "supportedCardBrands( List cardBrandsList );"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardBrandsList"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#cardBrands",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "CardBrands"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A list containing the supported card brands"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "readCard( CardBrands usedCard );"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "usedCard"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#cardBrands",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "CardBrands"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Name of the card brand"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.CardBrandDisplay {\r\n\r\n\t@Override\r\n\tpublic void supportedCardBrands(List cardBrandsList) {\r\n\t\t// Get supported card brands \r\n\t}\r\n\r\n\t@Override\r\n\tpublic void readCard(CardBrands usedCard) {\r\n\t\t// Get the used card brand \r\n\t}\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "card-tokenization",
      children: "Card Tokenization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.CardTokenization"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement this interface in order to receive events about the card tokenization."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cardTokenized( ResumeCallback callback, CardTokenizationData cardTokenizationData)"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "callback"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: "ResumeCallback"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lets the SDK continue the operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardTokenizationData"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#card-tokenization-data",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "CardTokenizationData"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object with the tokenization data."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.CardTokenization {\r\n\t\r\n\t@Override \r\n\tpublic void cardTokenized(@NonNull ResumeCallback callback, @NonNull CardTokenizationData cardTokenizationData) { ... }\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "connectionStatusChanged",
      children: "Connection status changed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.ConnectionStatusChanged"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement this interface in order to receive connection status changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "connectionStatusChanged( ConnectionStatus status , Device device );"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#connection-status",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "ConnectionStatus"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New status of the connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#17",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The terminal which sent this information."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.ConnectionStatusChanged {\r\n\r\n\t@Override\r\n\tpublic void connectionStatusChanged(ConnectionStatus status, Device device) { ... }\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14",
      children: "Current transaction status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.CurrentTransactionStatus"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement this interface in order to receive events about the current transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "currentTransactionStatus( StatusInfo status , Device device );"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#status-info",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "StatusInfo"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "StatusInfo"
            }), " of the current transaction"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#17",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The terminal the request is sent from."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.CurrentTransactionStatus {\r\n\r\n\t@Override\r\n\tpublic void currentTransactionStatus(StatusInfo info, Device device) { ... }\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deviceCapabilitiesReady",
      children: "Device capabilities ready"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.DeviceCapabilitiesReady"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement this interface in case the payment terminal needs to notify the SDK of its capabilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "deviceCapabilities( DeviceCapabilities capabilities , Device device );"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "capabilities"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#24",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "DeviceCapabilities"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The capabilities of the terminal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#17",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The terminal sending its capabilities"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.DeviceCapabilitiesReady {\r\n\r\n\t@Override\r\n\tpublic void deviceCapabilities(DeviceCapabilities capabilities, Device device) { ... }\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deviceDiscoveryFinished",
      children: "Device discovery finished"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.DeviceDiscoveryFinished"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement this interface in order to receive a list of available payment terminals. The event handler defined in this interface is invoked after calling the method searchDevices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "deviceDiscoveryFinished( List devices );"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "devices"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#17",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A list of available devices."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.DeviceDiscoveryFinished {\r\n\r\n\t@Override\r\n\tpublic void deviceDiscoveryFinished(List devices) {\r\n\t\t// Receiving a list of connectable payment terminals\r\n\t\tforeach(Device device in devices) { ... }\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16",
      children: "End of transaction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.EndOfTransaction"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement this interface to receive an event when a transaction is complete."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "endOfTransaction( TransactionResult result , Device device );"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "result"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#25",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "TransactionResult"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holds all the information about the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#17",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The payment terminal."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.EndOfTransaction {\r\n\r\n\t@Override\r\n\tpublic void endOfTransaction(TransactionResult result, Device device) {\r\n\t\t// Check the status of the transaction, save it, ...\r\n\t}\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hardwareStatusChanged",
      children: "Hardware status changed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.HardwareStatusChanged"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement this interface in order to receive events when the hardware status changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hardwareStatusChanged( HardwareStatus status , Device device );"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: "HardwareStatus"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New status of the hardware."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#17",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The payment terminal."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.HardwareStatusChanged {\r\n\r\n\t@Override\r\n\tpublic void hardwareStatusChanged(HardwareStatus status, Device device) { ... }\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "log",
      children: "Log"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.Log"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An interface which needs to be implemented and added as a listener to receive logging information."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Extends"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#onMessageLogged",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "OnMessageLogged"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.Log {\r\n\r\n\t@Override\r\n\tpublic void deviceLogsReady(String logs, Device device) { ... }\r\n\t@Override\r\n\tpublic void onMessageLogged(LogLevel level , String message) { ... }\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "messageHandling",
      children: "MessageHandling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.MessageHandling"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An interface which needs to be implemented and added as a listener to get events which are called when the sdk asks the application to display or hide a message."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "showMessage( String message , Boolean dismissible , int duration );"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "message"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message to display"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dismissible"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: "Boolean"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A flag that indicates whether the message can be dismissed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "duration"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: "int"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The timeout to hide the message. In milliseconds, if 0 is sent, the message should not auto dismiss."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hideMessage( String message );"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "message"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message to hide"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.MessageHandling {\r\n\r\n\t@Override\r\n\tpublic void showMessage(String message, Boolean dismissible, int duration) {\r\n\t\t// Show message for a 'duration' period (if duration = 0 DO NOT dismiss until hideMessage(String message) event is received) and make it dismissible if the input marks it as possible\r\n\t}\r\n\r\n\t@Override\r\n\tpublic void hideMessage(String message) {\r\n\t\t// Hide the message\r\n\t}\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onMessageLogged",
      children: "On message logged"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.OnMessageLogged"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement this interface to receive logs from the payment terminal.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onMessageLogged( LogLevel level , String message );"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "level"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#18",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "LogLevel"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The LogLevel of the logging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "message"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The log trace which was logged by the SDK."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.OnMessageLogged {\r\n\r\n\t@Override\r\n\tpublic void onMessageLogged(LogLevel level, String message) {\r\n\t\t// Process log trace\r\n\t}\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "physicalKeyboardEvent",
      children: "PhysicalKeyboardEvent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.PhysicalKeyboardEvent"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An interface which needs to be implemented and added as a listener to get events coming from the PAX A80 physical keyboard."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "** Methods**"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onKeyPressed( PaxA80Keys key );"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "key"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#28",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "PaxA80Keys"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The name of the key that has been pressed"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.PhysicalKeyboardEvent {\r\n\r\n\t@Override\r\n\tpublic void onKeyPressed(String key) { ... }\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pendingResults",
      children: "PendingResults"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.PendingResults"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An interface which needs to be implemented and added as a listener to receive information about pending TransactionResults. In case of a communication failure between the SDK and the payment terminal there might be a result pending from the transaction which did not get sent to the SDK."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.PendingResults {\r\n\r\n\t@Override\r\n\tpublic void transactionResultReady(TransactionResult transactionResult, Device device) { ... }\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Extends"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#transactionResultReady",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "TransactionResultReady"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "paymentprovider",
      children: "PaymentProvider"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.PaymentProvider"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An interface which needs to be implemented and added as a listener to receive all available events related to financial operations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Extends"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#15",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "SignatureRequired"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#16",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "EndOfTransaction"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onMessageLogged",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "OnMessageLogged"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#14",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "CurrentTransactionStatus"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "printerEvents",
      children: "PrinterEvents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.PrinterEvents"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An interface which needs to be implemented and added as a listener to get events coming from the printer."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "printSuccess( );"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "printError(PrintError error);"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "error"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#29",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "PrintError"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enum detailing the reason of the error"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.PrinterEvents {\r\n\r\n\t@Override\r\n\tpublic void printSuccess() {\r\n\t\t// Successful print action\r\n\t}\r\n\r\n\t@Override\r\n\tpublic void printError(PrintError error) {\r\n\t\t// Unable to perform print action due to error\r\n\t}\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reportResult",
      children: "Report result"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.ReportResult"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement this interface to receive an event when a report result from a ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/android/Android%20SDK%207.1008.4/androiddevicemanagement#getTransactionReport",
        children: "getTransactionsReport"
      }), " is returned."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "reportResult( TypeOfResult type , String report , DeviceStatus status , Device device );"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "type"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#30",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "TypeOfResult"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The type of the report"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "report"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The text of the report"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#33",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "DeviceStatus"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The status of the device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#17",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The terminal sending the report"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.ReportResult {\r\n\r\n\t@Override\r\n\tpublic void reportResult(TypeOfResult type, String report, DeviceStatus status, Device device) { ... }\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#deviceDiscoveryFinished",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "DeviceDiscoveryFinished"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#15",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "SignatureRequired"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#16",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "EndOfTransaction"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pendingResults",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "PendingResults"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15",
      children: "Signature required"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.SignatureRequired"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The SignatureRequired interface must be implemented in order to receive an event when a card requires a signature as a verification method. This interface is only required for an Hilite integration, PAX and Telpo terminals automatically prompt for signature capture on the terminal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "signatureRequired( SignatureRequest request , Device device );"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "request"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#signature-request",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "SignatureRequest"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holds the signature request."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#17",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The payment terminal."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.SignatureRequired {\r\n\r\n\t@Override\r\npublic void signatureRequired(SignatureRequest signatureRequest, Device device) {\r\n\t\t// Save merchant receipt\r\n\t\tString merchantReceipt = signatureRequest.getMerchantReceipt();\r\n\t\tapi.signatureResult(true);\r\n\t}\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "status",
      children: "Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.Status"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An interface which needs to be implemented and added as a listener to receive connection and transaction statuses."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.Status {\r\n\r\n\t@Override\r\n\tpublic void connectionStatusChanged(ConnectionStatus status, Device device) { ... }\r\n\t@Override\r\n\tpublic void hardwareStatusChanged(HardwareStatus status, Device device) { ... }\r\n\t@Override\r\n\tpublic void currentTransactionStatus(StatusInfo info, Device device) { ... }\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Extends"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#connectionStatusChanged",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ConnectionStatusChanged"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hardwareStatusChanged",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "HardwareStatusChanged"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#14",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "CurrentTransactionStatus"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transactionResultReady",
      children: "Transaction result ready"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.TransactionResultReady"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement this interface in order to receive an event after a pending TransactionResult has been recovered from the payment terminal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionResultReady( TransactionResult transactionResult , Device device );"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "transactionResult"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#25",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "TransactionResult"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TransactionResult"
              })
            }), " is containing all information about the recovered transaction."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#17",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The payment terminal."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.TransactionResultReady {\r\n\r\n\t@Override\r\n\tpublic void transactionResultReady(TransactionResult transactionResult, Device device) { ... }\r\n\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transactionStarted",
      children: "Transaction started"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Events.TransactionStarted"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Interface"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement this interface in order to receive an event when a transaction is started through the Cloud API channel."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "IMPORTANT NOTE"
      }), ": This interface is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "only"
      }), " available for cloud-enabled devices. See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#deviceCapabilitiesReady",
        children: "DeviceCapabilitiesReady"
      }), " interface."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionStarted( TransactionType transactionType , BigInteger amount , Currency currency, String transactionReference );"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "transactionType"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#31",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "TransactionType"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type of transaction started"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BigInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount in the minor unit of currency (f.ex. 1000 is 10.00 GBP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/android/Android%20SDK%207.1008.4/androidobjects#13",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Currency"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Currency of the transaction started"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), " ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The transaction reference of the started transaction. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " will be empty if the operation has not been started with one, or if it is an operation to which it does not apply (a tokenization, for example)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public final class EventHandler implements Events.TransactionStarted {\r\n\r\n\t//If the transactionReference has NOT been included in the request, it will be empty.\r\n\t@Override\r\npublic void transactionStarted(TransactionType type, BigInteger amount, Currency currency, String transactionReference) {\r\n\t\t// Notify the app user transaction has been started ...\r\n\t}\r\n}\r\n\r\n// Remember to register the instance of this EventHandler:\r\nthis.api.registerEventsDelegate(eventHandlerInstance);\n"
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