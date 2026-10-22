"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[75416],{

/***/ 78988
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_windows_versioned_docs_version_windows_sdk_3_2_4_windowsevents_md_f39_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/windows/site-windows-versioned-docs-version-windows-sdk-3-2-4-windowsevents-md-f39.json
const site_windows_versioned_docs_version_windows_sdk_3_2_4_windowsevents_md_f39_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"windowsevents","title":"Events Listeners","description":"Transaction Result Recovery over CLOUD connection","source":"@site/windows_versioned_docs/version-Windows SDK 3.2.4/windowsevents.md","sourceDirName":".","slug":"/windowsevents","permalink":"/legacy/windows/Windows SDK 3.2.4/windowsevents","draft":false,"unlisted":false,"tags":[],"version":"Windows SDK 3.2.4","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"id":"windowsevents"},"sidebar":"tutorialSidebar","previous":{"title":"Events Subscribers","permalink":"/legacy/windows/Windows SDK 3.2.4/windowseventssubscribers"},"next":{"title":"Objects","permalink":"/legacy/windows/Windows SDK 3.2.4/windowobjects"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./windows_versioned_docs/version-Windows SDK 3.2.4/windowsevents.md


const frontMatter = {
	sidebar_position: 8,
	id: 'windowsevents'
};
const contentTitle = 'Events Listeners';

const assets = {

};



const toc = [{
  "value": "Transaction Result Recovery over CLOUD connection",
  "id": "transaction-result-recovery-over-cloud-connection",
  "level": 2
}, {
  "value": "Device discovery finished",
  "id": "13",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters",
  "level": 5
}, {
  "value": "Signature required",
  "id": "5",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-1",
  "level": 4
}, {
  "value": "End of transaction",
  "id": "6",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-2",
  "level": 4
}, {
  "value": "Connection status changed",
  "id": "7",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-3",
  "level": 4
}, {
  "value": "Current transaction status",
  "id": "4",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-4",
  "level": 4
}, {
  "value": "Message logged",
  "id": "message-logged",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-5",
  "level": 4
}, {
  "value": "Device Logs ready",
  "id": "WinDeviceLogsReady",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-6",
  "level": 4
}, {
  "value": "Pending transaction result",
  "id": "pending-transaction-result",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-7",
  "level": 4
}, {
  "value": "Transaction result ready",
  "id": "11",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-8",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "events-listeners",
        children: "Events Listeners"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transaction-result-recovery-over-cloud-connection",
      children: "Transaction Result Recovery over CLOUD connection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "CloudTransactionResultRecovery"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The terminal has a transaction recovery loop to automatically send back the pending ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/Windows%20SDK%203.2.4/windowobjects#14",
        children: "Transaction Result"
      }), " to the point of sale in case it becomes unreachable (network issue or other).\r\nFor the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the point of sale is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc…).\r\nThe recovery loop is reinitialized every time the Handpoint application is restarted.The ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/Windows%20SDK%203.2.4/windowobjects#14",
        children: "Transaction Result"
      }), " received through the transaction recovery loop will have the recoveredTransaction field set to true."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Important information: The point of sale must be successfully connected to a terminal in order to receive the pending transactions."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Returns:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/Windows%20SDK%203.2.4/windowsevents#11",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "Transaction Result Ready Event"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Event containing the pending ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/Windows%20SDK%203.2.4/windowobjects#14",
        children: "Transaction Result"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13",
      children: "Device discovery finished"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "deviceDiscoveryFinished"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The deviceDiscoveryFinished event gets called when the payment terminal search has finished, it returns a list of devices."
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
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%203.2.4/windowobjects#2",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The payment terminal invoking the event."
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
        children: "//Receiving a list of connectable devices\r\nList Device myListOfDevices = new List Device();\r\npublic void deviceDiscoveryFinished(List Device devices)\r\n{\r\n    foreach(Device device in devices)\r\n    {\r\n        myListOfDevices.Add(device);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5",
      children: "Signature required"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "SignatureRequired"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The SignatureRequired event gets called when the card issuer requires a signature. This event is only required for an Hilite integration, PAX and Telpo terminals automatically prompt for signature capture on the payment terminal."
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "request"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%203.2.4/windowobjects#17",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "SignatureRequest"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holds the signature request object."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%203.2.4/windowobjects#2",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The payment terminal invoking the event."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "//Receiving a SignatureRequest from the SDK.\r\npublic void SignatureRequired(SignatureRequest signatureRequest, Device device)\r\n{\r\n    //You might want to print out the receipt or ask the customer to sign the receipt on your device\r\n    DisplayReceiptInUI(signatureRequest.MerchantReceipt)\r\n    //If you accept the signature\r\n    api.SignatureResult(true);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6",
      children: "End of transaction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "EndOfTransaction"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The EndOfTransaction event gets called at the end of each transaction and has two parameters, result and device."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-2",
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "result"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%203.2.4/windowobjects#14",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "TransactionResult"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holds the result and receipts for the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%203.2.4/windowobjects#2",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The payment terminal invoking the event."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "//Receiving a TransactionResult from the SDK.\r\npublic void EndOfTransaction(TransactionResult transactionResult, Device device)\r\n{\r\n    //You might want to display this information in the UI\r\n    postTransactionResultToUI(transactionResult);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7",
      children: "Connection status changed"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ConnectionStatusChanged"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The ConnectionStatusChanged event gets called when the state of a payment terminal connection changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-3",
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%203.2.4/windowobjects#18",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "ConnectionStatus"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An enum containing the status code for the connection."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%203.2.4/windowobjects#2",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The payment terminal invoking the event."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "//Receiving a new ConnectionStatus from the SDK\r\npublic void ConnectionStatusChanged(ConnectionStatus connectionStatus, Device device)\r\n{\r\n    //You might want to display this information in the UI\r\n    postNewStatusToUI(connectionStatus);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4",
      children: "Current transaction status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "CurrentTransactionStatus"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The currentTransactionStatus event gets called when the state of an ongoing transaction changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-4",
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "statusInfo"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%203.2.4/windowobjects#statusInfo",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "StatusInfo"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object containing information about the current transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%203.2.4/windowobjects#2",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The payment terminal invoking the event."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "//Receiving a transaction status from the SDK.\r\npublic void currentTransactionStatus(StatusInfo statusInfo, Device device)\r\n{\r\n    //You might want to display some of this information in the UI\r\n    DisplayTransactionStatusInUI(statusInfo)\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "message-logged",
      children: "Message logged"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "OnMessageLogged"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The OnMessageLogged event gets called for each and every message logged by the SDK. This function is only intended for debugging."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-5",
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "logLevel"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%203.2.4/windowobjects#9",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "LogLevel"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An enum containing the log level."
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
            children: "A String containing the current log message."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "//Receiving a log from the SDK\r\npublic void OnMessageLogged(LogLevel logLevel, String message)\r\n{\r\n    //You do not want to display this information in the UI\r\n    Debug.WriteLine(message);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "WinDeviceLogsReady",
      children: "Device Logs ready"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "DeviceLogsReady"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The DeviceLogsReady event gets called when the payment terminal logs are ready to be delivered (in response to a request to getDeviceLogs()). This Event is useful if case of a communication error between the payment terminal and the API (e.g : Bluetooth communication lost). After reconnecting, you can then fetch the card reader logs to the API."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-6",
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "logs"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String containing the current log."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%203.2.4/windowobjects#2",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The payment terminal invoking the event."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "//Receiving a log from the device\r\npublic void DeviceLogsReady(string logs, Device device)\r\n{\r\n    //You might want to save this information\r\n    WriteLogsToDisk(logs);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pending-transaction-result",
      children: "Pending transaction result"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "PendingTransactionResult"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In case of a communication failure between the payment terminal and your application a TransactionResult might have not been delivered to the SDK. This event is invoked when the device has a pending TransactionResult. This event might be invoked when reconnecting to a device after a communication failure during a transaction. This event will not be called if HapiManager.Settings.AutoRecoverTransactionResult is set to true."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-7",
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
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%203.2.4/windowobjects#2",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The payment terminal invoking the event."
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
        children: "@Override\r\npublic void PendingTransactionResult(Device device){\r\n\t//Here you might want to call api.GetPendingTransaction(); to receive the TransactionResult\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11",
      children: "Transaction result ready"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "TransactionResultReady"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In case of a communication failure between the device and your application a TransactionResult might have not been delivered to the SDK. This event will be invoked after using hapi.GetPendingTransaction();. When there is no pending transaction the TransactionResult will contain default/error fields and no receipts. This event is called if HapiManager.Settings.AutoRecoverTransactionResult is set to true."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters-8",
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "result"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%203.2.4/windowobjects#14",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "TransactionResult"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holds the results for the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/Windows%20SDK%203.2.4/windowobjects#2",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The payment terminal invoking the event."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "@Override\r\npublic void TransactionResultReady(TransactionResult transactionResult, Device device){\r\n\t//Here you might want to do stuff to the transactionResult\r\n}\n"
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