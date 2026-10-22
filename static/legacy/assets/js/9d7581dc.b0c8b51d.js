"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[67390],{

/***/ 20865
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_windows_windowsdevicemanagement_md_9d7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/windows/site-windows-windowsdevicemanagement-md-9d7.json
const site_windows_windowsdevicemanagement_md_9d7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"windowsdevicemanagement","title":"Terminal Management","description":"Connect","source":"@site/windows/windowsdevicemanagement.md","sourceDirName":".","slug":"/windowsdevicemanagement","permalink":"/legacy/windows/next/windowsdevicemanagement","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"id":"windowsdevicemanagement"},"sidebar":"tutorialSidebar","previous":{"title":"Transaction Types","permalink":"/legacy/windows/next/windowstransactions"},"next":{"title":"Events Subscribers","permalink":"/legacy/windows/next/windowseventssubscribers"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./windows/windowsdevicemanagement.md


const frontMatter = {
	sidebar_position: 6,
	id: 'windowsdevicemanagement'
};
const contentTitle = 'Terminal Management';

const assets = {

};



const toc = [{
  "value": "Connect",
  "id": "connect",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked",
  "level": 4
}, {
  "value": "Disconnect",
  "id": "disconnect",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-1",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked-1",
  "level": 4
}, {
  "value": "Set shared secret",
  "id": "set-shared-secret",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-2",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked-2",
  "level": 4
}, {
  "value": "Set logging level",
  "id": "set-logging-level",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-3",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked-3",
  "level": 4
}, {
  "value": "Request device logs",
  "id": "request-device-logs",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-4",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked-4",
  "level": 4
}, {
  "value": "Request pending transaction results",
  "id": "request-pending-transaction-results",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-5",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked-5",
  "level": 4
}, {
  "value": "Update device",
  "id": "update-device",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-6",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked-6",
  "level": 4
}, {
  "value": "List Devices (search)",
  "id": "list-devices-search",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters-7",
  "level": 4
}, {
  "value": "Events invoked",
  "id": "events-invoked-7",
  "level": 4
}, {
  "value": "Start monitoring connections",
  "id": "start-monitoring-connections",
  "level": 2
}, {
  "value": "Events invoked",
  "id": "events-invoked-8",
  "level": 4
}, {
  "value": "Stop monitoring connections",
  "id": "stop-monitoring-connections",
  "level": 2
}, {
  "value": "Events invoked",
  "id": "events-invoked-9",
  "level": 4
}, {
  "value": "Get Transaction Status",
  "id": "get-transaction-status",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h4: "h4",
    header: "header",
    li: "li",
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
        id: "terminal-management",
        children: "Terminal Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "connect",
      children: "Connect"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Connect"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configures the device as the preferred device and tries to connect to it. Everytime a new connection is started the SDK will make 3 attempts to re-establish the connection. If those attempts fail, the connection is considered dead."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
              href: "/legacy/windows/next/windowobjects#2",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This parameter specifies to the sdk which payment terminal should be used."
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
        children: "//Connect to a CLOUD device (PAX/Telpo)\r\nDevice device = new Device(\"CloudDevice\", \"9822032398-PAXA920\", \"\", ConnectionMethod.Cloud);\r\n// The address is the composition of the serial number and model ot the target device.\r\n//Example for a PAX A920 device: serial_number - model  -> 9822032398-PAXA920\r\napi.Connect(device);\r\n\r\n//Connect to a BLUETOOTH device (HiLite)\r\nDevice device = new Device(\"CardReader7\", \"08:00:69:02:01:FC\", \"1\", ConnectionMethod.BLUETOOTH);\r\napi.Connect(device);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/next/windowsevents#7",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "ConnectionStatusChanged"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each time the card reader state changes (ex : going from Connected to Disconnected) the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/next/windowsevents#7",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "ConnectionStatusChanged"
          })
        })
      }), " event is called. It causes the connection manager to invoke this event with the appropriate information."]
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
            }), " if the operation was successful."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "disconnect",
      children: "Disconnect"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Disconnect"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Disconnect will stop the active connection (and reconnection process). Please note that the method does NOT ignore the current state of the payment terminal. This means that if a disconnect is attempted during a transaction it will not be successful and the method will return ", (0,jsx_runtime.jsx)(_components.code, {
        children: "false"
      }), ". If a transaction is not in progress, the disconnect will take 1-3 seconds to successfully finish and will then return ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), "."]
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
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/next/windowobjects#2",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any."
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
        children: "//Disconnect from current device\r\napi.Disconnect();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-1",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/next/windowsevents#7",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "ConnectionStatusChanged"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each time the card reader state changes (ex : going from Connected to Disconnected) the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/next/windowsevents#7",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "ConnectionStatusChanged"
          })
        })
      }), " event is called. It causes the connection manager to invoke this event with the appropriate information."]
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
            }), " if the operation was succesful"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "set-shared-secret",
      children: "Set shared secret"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "SetSharedSecret"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Validates your application for this session, thus enabling financial transactions."
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
              children: "sharedSecret"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The shared secret is a an authentication key provided by Handpoint, it is unique per merchant (not per terminal)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/next/windowobjects#2",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any."
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
        children: "//Sets the shared secret\r\napi.SetSharedSecret(\"0102030405060708091011121314151617181920212223242526272829303132\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-2",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "None"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No events invoked."
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
            }), " if the operation was successfully sent to the payment terminal."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "set-logging-level",
      children: "Set logging level"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "SetLogLevel"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sets the log level (info, debug etc.) for both the payment terminal and the API."
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
              children: "level"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/next/windowobjects#9",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "LogLevel"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The desired log level. Possible values are ", (0,jsx_runtime.jsx)(_components.code, {
              children: "LogLevel.None"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "LogLevel.Info"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "LogLevel.Full"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "LogLevel.Debug"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/next/windowobjects#2",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any."
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
        children: "//Sets the log level to info\r\napi.SetLogLevel(LogLevel.info);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-3",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "None"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No events are invoked."
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
            }), " if the operation was successfully sent to the payment terminal."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "request-device-logs",
      children: "Request device logs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "GetDeviceLogs"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fetches the logs from the payment terminal and reports them to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/next/windowsevents#WinDeviceLogsReady",
        children: "DeviceLogsReady"
      }), " event."]
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/next/windowobjects#2",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any."
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
        children: "//Downloads logs from device\r\napi.GetDeviceLogs();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-4",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/next/windowsevents#WinDeviceLogsReady",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "DeviceLogsReady"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the SDK has finished downloading logs from the payment terminal."
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
            }), " if the operation was successfully sent to the payment terminal."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "request-pending-transaction-results",
      children: "Request pending transaction results"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "GetPendingTransaction"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the case of a communication failure between the device and the SDK a TransactionResult might have not been delivered to the API. This function fetches a pending TransactionResult (which contains receipts) from the payment terminal, if any. If no TransactionResult was pending a result will be delivered containing default fields. In order to receive only valid TransactionResults this function should only be called when PendingTransactionResult event is invoked or when HapiManager.IsTransactionResultPending() is true. To receive events when a TransactionResult is pending on the device please add the Events.PendingResults listener."
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/next/windowobjects#2",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any."
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
        children: "//Fetches a pending TransactionResult from a device\r\napi.GetPendingTransaction();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-5",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/next/windowsevents#11",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "TransactionResultReady"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the SDK has finished fetching a TransactionResult from the payment terminal."
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
            }), " if the operation was successfully sent to the payment terminal."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update-device",
      children: "Update device"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Update"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The update operation checks for available software or configuration update. If an update is pending it will be downloaded and installed by the payment terminal."
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/next/windowobjects#2",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Device"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This parameter specifies to the sdk which payment terminal should be used. If none is supplied the system will attempt to use a default device, if any."
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
        children: "//Check for card reader update\r\napi.Update();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-6",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "None"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Information about this process should be available at the device's screen."
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
            }), " if the operation was successfully sent to the payment terminal."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "list-devices-search",
      children: "List Devices (search)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ListDevices"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Starts the search for payment terminals to connect to."
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
              children: "method"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/next/windowobjects#12",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "ConnectionMethod"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The connection type to the payment terminal (Bluetooth or Cloud)"
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
        children: "//Search for Bluetooth devices\r\napi.ListDevices(ConnectionMethod.BLUETOOTH);\r\n\r\n//Search for Cloud devices\r\napi.ListDevices(ConnectionMethod.CLOUD);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-7",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/next/windowsevents#13",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "deviceDiscoveryFinished"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns a list of available payment terminals."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "start-monitoring-connections",
      children: "Start monitoring connections"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "StartMonitoringConnections"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Starts a connection monitoring service. The service listens to events sent by the operating system about the connected hardware. If the service notices that a previously connected device suddenly disconnects on the hardware layer it attempts to reconnect to that particular device. Since this is a service it is necessary that the service is turned off before the application ends its life-time. This means that, if the service was running, stopMonitoringConnections() has to be called before the application is exited completely. Note that the service currently only works with USB. In the case of USB the service will only disconnect from the device and when it notices that it has been plugged in again it will connect to it."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "//Starts the connection monitoring service\r\n//app starts it's life-time\r\napi.StartMonitoringConnections();\r\n...\r\n//app ends its life-time\r\napi.StopMonitoringConnections();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-8",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/next/windowsevents#7",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "ConnectionStatusChanged"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the status of the connection with the payment terminal changes."
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "None"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No information is returned."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "stop-monitoring-connections",
      children: "Stop monitoring connections"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "StopMonitoringConnections"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stops a connection monitoring service. The service listens to events sent by the operating system about the connected hardware. If the service notices that a previously connected device suddenly disconnects on the hardware layer it attempts to reconnect to that particular device. Since this is a service it is necessary that the service is turned off before the application ends its life-time. This means that, if the service was running, stopMonitoringConnections() has to be called before the application is exited completely. Note that the service currently only works with USB. In the case of USB the service will only disconnect from the device and when it notices that it has been plugged in again it will connect to it."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        children: "//Starts the connection monitoring service\r\n//app starts it's life-time\r\napi.StartMonitoringConnections();\r\n...\r\n//app ends its life-time\r\napi.StopMonitoringConnections();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "events-invoked-9",
      children: "Events invoked"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/windows/next/windowsevents#7",
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "ConnectionStatusChanged"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invoked when the status of the connection with the payment terminal changes."
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "None"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No information is returned."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "get-transaction-status",
      children: "Get Transaction Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "getTransactionStatus"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Method"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If for any reasons you do not know if a transaction was approved or declined then this method will allow you to retrieve the status of the transaction from the Handpoint gateway. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getTransactionStatus"
      }), " method is a convenient way to retrieve the current status of a transaction based on its unique reference. This method accepts a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionReference"
      }), " as a parameter and returns the current status of the transaction. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionReference"
      }), " is returned at the start of a transaction, as part of the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/next/windowobjects#OperationStartResult",
        children: "Operation Start Result"
      }), " object."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The main ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/windows/next/windowobjects#25",
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "FinancialStatus"
        })
      }), " that can be returned as a response to this method are the following ones:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AUTHORISED - Transaction was successful."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DECLINED - Transaction was declined."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UNDEFINED (NOT FOUND) -  The transaction does not exist in the Handpoint gateway. If this status is returned within 90s of the start of a transaction, there could be a chance that the cardholder has not inserted, swiped or tapped his card yet on the terminal and the Handpoint gateway might soon receive the transaction. If the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UNDEFINED"
        }), " status is returned after 90s, it means that the transaction processed has not reached the Handpoint gateway and it will NOT be charged."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IN_PROGRESS - The transaction has been received by the gateway but the outcome is not known yet, try again after a few seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "REFUNDED - Transaction was refunded."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FAILED - Status generated due to a network error, a card which can not be read etc. As a general rule, errors are mapped to FAILED. This means the operation was unsuccessful and the transaction has not been charged."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
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
              children: "transactionReference"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "badge badge--primary",
              children: "Required"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "String"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transactionReference"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)",
              children: "UUID v4"
            }), ") is returned at the start of a transaction, as part of the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/next/windowobjects#OperationStartResult",
              children: "OperationStartResult"
            }), " object."]
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
        children: "//Gets the current status of a transaction \r\nthis.Hapi.GetTransactionStatus(\"00000000-0000-0000-0000-000000000000\");\n"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/legacy/windows/next/windowobjects#14",
              children: "TransactionResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An object holding information about the result of a transaction."
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