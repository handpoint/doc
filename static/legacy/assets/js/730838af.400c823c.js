"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[1057],{

/***/ 34888
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_ios_versioned_docs_version_i_os_sdk_4_0_1_iosobjects_md_730_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/ios/site-ios-versioned-docs-version-i-os-sdk-4-0-1-iosobjects-md-730.json
const site_ios_versioned_docs_version_i_os_sdk_4_0_1_iosobjects_md_730_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"iosobjects","title":"Objects","description":"HeftManager","source":"@site/ios_versioned_docs/version-iOS SDK 4.0.1/iosobjects.md","sourceDirName":".","slug":"/iosobjects","permalink":"/legacy/ios/iOS SDK 4.0.1/iosobjects","draft":false,"unlisted":false,"tags":[],"version":"iOS SDK 4.0.1","sidebarPosition":11,"frontMatter":{"sidebar_position":11,"id":"iosobjects"},"sidebar":"tutorialSidebar","previous":{"title":"Events","permalink":"/legacy/ios/iOS SDK 4.0.1/iosevents"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./ios_versioned_docs/version-iOS SDK 4.0.1/iosobjects.md


const frontMatter = {
	sidebar_position: 11,
	id: 'iosobjects'
};
const contentTitle = 'Objects';

const assets = {

};



const toc = [{
  "value": "HeftManager",
  "id": "19",
  "level": 2
}, {
  "value": "HeftClient",
  "id": "22",
  "level": 2
}, {
  "value": "HeftRemoteDevice",
  "id": "23",
  "level": 2
}, {
  "value": "HeftDiscoveryDelegate",
  "id": "heftdiscoverydelegate",
  "level": 2
}, {
  "value": "HeftStatusReportDelegate",
  "id": "heftstatusreportdelegate",
  "level": 2
}, {
  "value": "ResponseInfo",
  "id": "24",
  "level": 2
}, {
  "value": "FinanceResponseInfo",
  "id": "25",
  "level": 2
}, {
  "value": "ScannerEventResponseInfo",
  "id": "26",
  "level": 2
}, {
  "value": "ScannerDisabledResponseInfo",
  "id": "27",
  "level": 2
}, {
  "value": "LogInfo",
  "id": "28",
  "level": 2
}, {
  "value": "eLogLevel",
  "id": "13",
  "level": 2
}, {
  "value": "Transaction Details",
  "id": "46",
  "level": 2
}, {
  "value": "CmdIds",
  "id": "cmdids",
  "level": 2
}, {
  "value": "Status strings",
  "id": "45",
  "level": 2
}, {
  "value": "Process details",
  "id": "process-details",
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
    hr: "hr",
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
        id: "objects",
        children: "Objects"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19",
      children: "HeftManager"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "HeftManager"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The HeftManager is used for discovering and connecting to devices as well as creating a HeftClient object for the appropriate payment terminal. The manager reports messages to the HeftDiscoveryDelegate protocol during the discovery process. Starting the manager is the first thing to be done after loading up an UIView which enables the user to search for and connect to bluetooth terminals. When starting the manager an object (usually the UIViewController itself) is passed as the HeftDiscoveryDelegate delegate to report to."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "devicesCopy"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSArray"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DEPRECATED_ATTRIBUTE"
            }), ": Array which contains the discovered payment terminals."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "connectedCardReaders"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array which contains the discovered payment terminals."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "delegate"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.code, {
              children: "NSObject<HeftDiscoveryDelegate>"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key for value in mpedInfo."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "version"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current HeftManager version."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "// Create a manager on view load\r\n- (void)viewDidLoad{\r\n\t[super viewDidLoad];\r\n\tHeftManager* manager = [HeftManager sharedManager];\r\n\tmanager.delegate = self;\r\n\t[manager resetDevices]; // Clean out the payment terminal list\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosdevicemanagement#32",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Start Discovery"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(void)startDiscovery;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosdevicemanagement#11",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Shared Manager"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["(HeftManager ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), ")sharedManager;"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosdevicemanagement#12",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Client for device (NSString)"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["(void)clientForDevice:(HeftRemoteDevice ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), ")device sharedSecret:(NSString ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), ")sharedSecret delegate:(NSObject HeftStatusReportDelegate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), ")delegate;"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22",
      children: "HeftClient"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "HeftClient"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "High level interface for the API. HeftClient handles the communication between your application and the payment terminal. The HeftClient object also stores information about the payment terminal in the mpedInfo dictionary. Device Log operations are also implemented in HeftClient. To create a new HeftClient object the clientForDevice method is called from an instance of the HeftManager. Transaction and log requests (and the acceptSignature response) are done by calling HeftClient methods with the relevant input. The library reports the status of the requests by calling delegates of the HeftStatusReportDelegate protocol."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sharedSecret"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The shared secret is a unique authentication key provided by Handpoint for each merchant."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "mpedInfo"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSDictionary"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dictionary with payment terminal details, obtained from the device on interface creation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "isTransactionResultPending"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BOOL"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Indicates whether a transaction result is pending on the payment terminal. ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.strong, {
              children: "Note: A pending transaction result is retained by the payment terminal if a disconnect occurs between the terminal and your application before the transaction result can be delivered during a SALE, REFUND or VOID operation."
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kSerialNumberInfoKey"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString Constant"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key for value in mpedInfo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kPublicKeyVersionInfoKey"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString Constant"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key for value in mpedInfo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kEMVParamVersionInfoKey"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString Constant"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key for value in mpedInfo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kGeneralParamInfoKey"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString Constant"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key for value in mpedInfo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kManufacturerCodeInfoKey"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString Constant"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key for value in mpedInfo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kModelCodeInfoKey"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString Constant"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key for value in mpedInfo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kAppNameInfoKey"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString Constant"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key for value in mpedInfo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kAppVersionInfoKey"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString Constant"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key for value in mpedInfo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kXMLDetailsInfoKey"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString Constant"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key for value in mpedInfo"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-objectivec",
        children: "//clientForDevice:sharedSecret:delegate:\r\n//Creates a HeftClient object(connection to device)\r\n-(void)connectToFirstCardReaderWith:(NSData*)sharedSecret;\r\n{\r\n\t//Try to connect to the first device in the devices array\r\n\t[heftManager clientForDevice:[[heftManager devicesCopy] objectAtIndex:0] sharedSecret:sharedSecret delegate:self];\r\n\t//Client calls the didConnect delegate function if successful \r\n}\r\n\r\n//....\r\n\r\n//didConnect:\r\n//Called when a connection to a specified device was created.\r\n-(void)didConnect:(id<HeftClient>)client \r\n{\r\n\t// connected successfully to a device\r\n\t// assigned the client to the heftClient property\r\n\theftClient = client;\r\n}\r\n\r\n// .....\r\n\r\n// Do one sale later in code\r\n[heftClient saleWithAmount:1000 currency:@\"GBP\" cardholder:YES];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "cancel"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(void)cancel;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iostransactions#2",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "saleWithAmount"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)saleWithAmount:(NSInteger)amount currency:(NSString*)currency cardholder:(BOOL)present;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iostransactions#2",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "saleWithAmount"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)saleWithAmount:(NSInteger)amount currency:(NSString*)currency cardholder:(BOOL)present reference:(NSString*)reference;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iostransactions#2",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "saleWithAmount"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)saleWithAmount:(NSInteger)amount currency:(NSString*)currency cardholder:(BOOL)present reference:(NSString*)reference divideBy:(NSString*)months;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iostransactions#5",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "refundWithAmount"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)refundWithAmount:(NSInteger)amount currency:(NSString*)currency cardholder:(BOOL)present;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iostransactions#5",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "refundWithAmount"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)refundWithAmount:(NSInteger)amount currency:(NSString*)currency cardholder:(BOOL)present reference:(NSString*)reference;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iostransactions#3",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "saleVoidWithAmount"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)saleVoidWithAmount:(NSInteger)amount currency:(NSString*)currency cardholder:(BOOL)present transaction:(NSString*)transaction;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iostransactions#6",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "refundVoidWithAmount"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)refundVoidWithAmount:(NSInteger)amount currency:(NSString*)currency cardholder:(BOOL)present transaction:(NSString*)transaction;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iostransactions#8",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "retrievePendingTransaction"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)retrievePendingTransaction;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosdevicemanagement#36",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "enableScanner"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)enableScanner;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "enableScannerWithMultiScan"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)enableScannerWithMultiScan:(BOOL)multiScan;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "enableScannerWithMultiScan"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)enableScannerWithMultiScan:(BOOL)multiScan buttonMode:(BOOL)buttonMode;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "enableScannerWithMultiScan"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)enableScannerWithMultiScan:(BOOL)multiScan buttonMode:(BOOL)buttonMode timeoutSeconds:(NSInteger)timeoutSeconds;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosdevicemanagement#disable-scanner",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Disable scanner"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)disableScanner;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "financeStartOfDay"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)financeStartOfDay;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "financeEndOfDay"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)financeEndOfDay;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosdevicemanagement#47",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "financeInit"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)financeInit;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosdevicemanagement#33",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "logSetLevel"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)logSetLevel:(eLogLevel)level;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosdevicemanagement#35",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "logReset"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)logReset;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosdevicemanagement#34",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "logGetInfo"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)logGetInfo;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iostransactions#7",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "acceptSignature"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(void)acceptSignature:(BOOL)flag;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "getEMVConfiguration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(BOOL)getEMVConfiguration;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23",
      children: "HeftRemoteDevice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "HeftRemoteDevice"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An object containing a reference to the accessory device which is passed to the HeftClient on creation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Name of device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "accessory"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "EAAccessory"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The EAAccessory object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "address"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address of device"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "heftdiscoverydelegate",
      children: "HeftDiscoveryDelegate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HeftDiscoveryDelegate"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Notifications sent by the SDK on various events - new available device found, connection lost, connection found, etc"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosevents#37",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "didDiscoverFinished"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(void)didDiscoverFinished;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosevents#38",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "didFindAccessoryDevice"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(void)didFindAccessoryDevice:(HeftRemoteDevice*)newDevice;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosevents#39",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "didLostAccessoryDevice"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(void)didLostAccessoryDevice:(HeftRemoteDevice*)oldDevice;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "heftstatusreportdelegate",
      children: "HeftStatusReportDelegate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "HeftStatusReportDelegate"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Notifications sent by the SDK on various events - connected to device, request signature, response on error etc."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosevents#20",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "didConnect"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(void)didConnect:(id-HeftClient)client;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosevents#14",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "responseStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(void)responseStatus:(id-ResponseInfo)info;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosevents#15",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "responseError"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(void)responseError:(id-ResponseInfo)info;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosevents#16",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "responseFinanceStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(void)responseFinanceStatus:(id-FinanceResponseInfo)info;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosevents#43",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "responseLogInfo"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(void)responseLogInfo:(id-LogInfo)info;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosevents#17",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "requestSignature"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(void)requestSignature:(NSString*)receipt;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosevents#40",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "cancelSignature"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(void)cancelSignature;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosevents#44",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "responseRecoveredTransactionStatus"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(void)responseRecoveredTransactionStatus:(id-FinanceResponseInfo)info;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosevents#41",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "responseScannerEvent"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(void)responseScannerEvent:(id-ScannerEventResponseInfo)info;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/legacy/ios/iOS%20SDK%204.0.1/iosevents#42",
        children: "**responseScannerDisabled **"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(void)responseScannerDisabled:(id-ScannerDisabledResponseInfo)info;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "responseEMVReport"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(void)responseEMVReport:(NSString *)report;"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24",
      children: "ResponseInfo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ResponseInfo"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A ResponseInfo object is passed to the ResponseStatus delegate. It contains information from the payment terminal about the status of the current transaction. There are two properties: status and xml. status is a string and xml is a dictionary. Usually status contains a descriptive enough message to know what is going, this messsage should be displayed to the yser. The xml dictionary has detailed information on the current state of the payment terminal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "statusCode"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "int"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A numerical representation of the status."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#45",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Status as NSString"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status message of the financial operation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "xml"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#46",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "XML as NSDictionary"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Details of the transaction."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25",
      children: "FinanceResponseInfo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "FinanceResponseInfo"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A FinanceResponseInfo is passed to the responseFinanceStatus delegate at the end of a transaction. It contains all necessary information about the outcome of the transaction. FinanceResponseInfo inherits from ResponseInfo so it includes the status string and xml dictionary in addition to the authorisedAmount, transactionId and the html formatted receipts."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "financialResult"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSInteger"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A numerical representation of a financial status result. ", (0,jsx_runtime.jsx)("br", {}), "EFT_FINANC_STATUS_UNDEFINED\t0x00", (0,jsx_runtime.jsx)("br", {}), "EFT_FINANC_STATUS_TRANS_APPROVED 0x01 ", (0,jsx_runtime.jsx)("br", {}), "EFT_FINANC_STATUS_TRANS_DECLINED 0x02 ", (0,jsx_runtime.jsx)("br", {}), "EFT_FINANC_STATUS_TRANS_PROCESSED 0x03 ", (0,jsx_runtime.jsx)("br", {}), "EFT_FINANC_STATUS_TRANS_NOT_PROCESSED\t0x04 ", (0,jsx_runtime.jsx)("br", {}), "EFT_FINANC_STATUS_TRANS_CANCELLED 0x05"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "isRestarting"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BOOL"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indicates whether the card reader is about to restart or not (usually triggered after a software update is received).If a restart is imminent then you have 2 seconds to start fetching the logs (before the card reader restarts). After fetching the logs you should disconnect from the card reader and wait for it to be visible again."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "authorisedAmount"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSInteger"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount in the smallest unit of the currency - For example 1000 in case the CurrencyCode is \"0826\" (GBP) corresponds to 10.00 pounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "transactionId"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The id of the current transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "customerReceipt"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer receipt in html format."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "merchantReceipt"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merchant receipt in html format."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "statusMessage"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A human readable message describing the result of the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "type"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type of financial operation (\"SALE\" is an example)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "finStatus"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The financial status describes the outcome of the transaction(\"AUTHORISED\" is an example)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "requestedAmount"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amount sent in the original request to the payment terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "gratuityAmount"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The gratuity amount is an additional amount (for example a tip) added to the requested amount. This field is returned when the tipping functionality is activated on the payment terminal.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "  Example: a sale is started for 10.00 and the payment terminal is set to support tipping. The terminal asks the cardholder if a tip should be added for the transaction. The cardholder inputs an additional amount as a tip, lets say 1.00. The card is then charged for the requested amount, 10.00, as well as the additional gratuity amount, 1.00. The resulting charge will be for a total of 11.00."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "gratuityPercentage"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The gratuity percentage is used to calculate an additional amount (for example a tip) added to the requested amount. The terminal calculates the gratuity amount based on the percentage chosen by the cardholder on the payment terminal, the amount is rounded up to the closest whole number.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "  Example: a sale is started for 10.00 and the payment terminal is set to support tipping. The terminal asks the cardholder if a tip should be added for the transaction. The cardholder chooses a %  as a tip, lets say 10%. The card is then charged for the requested amount, 10.00, as well as the additional gratuity amount, 1.00 (10%). The resulting charge will be for a total of 11.00."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "totalAmount"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The total amount is the amount for which the card was charged in the minor unit of the currency. It is possible for the total amount to be different from the requested amount if a tip is added or the transaction is partially approved (US acquirers only)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "currency"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The currency used for the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "eFTTransactionID"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The EFT (electronic funds transfer) transaction id is a unique GUID assigned to the transaction. This id is used as a parameter for the sale or refund reversal function in case the transaction needs to be reversed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "originalEFTTransactionID"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This field is only returned in a reversal or refund transaction and references the GUID of the original transaction being refunded or reversed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "eFTTimestamp"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The eFTTimestamp is the time at which the transaction was processed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "authorisationCode"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This is the approval code returned by the payment processor when a transaction is approved."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "verificationMethod"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cardholder verification method, for example \"PIN\"."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardEntryType"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method used by the terminal to read the card."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardSchemeName"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A string representing different card brands (VISA, Mastercard, etc...)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "errorMessage"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed reason for the transaction error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "customerReference"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If a customer reference was added, as an optional parameter, when the transaction was started. It is received here, unaltered. The customer reference can be used at your will for tracking of transactions."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "budgetNumber"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If a budget number was added, as an optional parameter, when the transaction was started. It is received here, unaltered. The budget number can be used to split payments over a period of months."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "recoveredTransaction"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "BOOL"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This flag is true if the transaction result retrieved is from a previous transaction which failed to get sent from the payment terminal to your application, false otherwise. In case the communication between your application and the terminal breaks down, the terminal will attempt to send the result of the previous transaction as an immediate reply when the next transaction is started. If this happens, the transaction is flagged as a \"RecoveredTransaction\"."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardTypeId"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEPRECATED - The card type id is an identifier inside the Handpoint gateway which represents what kind of card was used. \"U015\" for an example represents SAS Airline-Systems in our systems."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "chipTransactionReport"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If present, a full report of the card EMV parameters."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "deviceStatus"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gets the device status."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dueAmount"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If there's still a part of the amount to be paid, in case of a partial approval (US acquirers only)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "balance"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The balance of the cardholder's card, if the bank/acquirer supports it."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CardToken"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token representing the PAN of the card."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26",
      children: "ScannerEventResponseInfo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ScannerEventResponseInfo"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A ScannerEventResponseInfo is passed to the responseScannerEvent delegate when a scan is detected. ScannerEventResponseInfo inherits from ResponseInfo so it includes the status string and xml dictionary in addition to the scanCode string."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "statusCode"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "int"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A numerical representation of the status."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#45",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Status as NSString"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial transaction status message."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "xml"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#46",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "XML as NSDictionary"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feedback with xml details about transaction from the card reader."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scanCode"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The code that was scanned."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27",
      children: "ScannerDisabledResponseInfo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ScannerDisabledResponseInfo"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This object contains information about the scanner operation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "statusCode"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "int"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A numerical representation of the status."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#45",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Status as NSString"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial transaction status."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "xml"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#46",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "XML as NSDictionary"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML details from the payment terminal."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "28",
      children: "LogInfo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "LogInfo"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A LogInfo object is passed to the ResponseLogInfo delegate when logs have been downloaded from the payment terminal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "statusCode"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "int"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A numerical representation of the status."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "status"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#45",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "Status as NSString"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial transaction status."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "xml"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.a, {
              href: "#46",
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "XML as NSDictionary"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML details from the payment terminal."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "log"
            }), "  ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
              children: "NSString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String containing the logging information."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13",
      children: "eLogLevel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "eLogLevel"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Enum"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An enum describing the different levels of logging used in the SDK and in the payment terminal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "eLogNone"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "eLogError"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "eLogInfo"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "eLogFull"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "eLogDebug"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "46",
      children: "Transaction Details"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "XML as NSDictionary"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Object"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The contents of the xml property depend on which type of operation the payment terminal is responding to. Listed below are all possible keys in the dictionary. Note that not all fields are included all the time."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "StatusMessage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The status of the transaction, for example \"Waiting for pin\"."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TransactionType"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The type of transaction performed: UNDEFINED SALE VOID_SALE REFUND VOID_REFUND REVERSAL, TOKENIZE_CARD SALE_AND_TOKENIZE_CARD"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "FinancialStatus"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The result of the transaction: UNDEFINED AUTHORISED DECLINED PROCESSED FAILED CANCELLED PARTIAL_APPROVA"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Description of the different financial statuses:"
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
              children: "UNDEFINED"
            }), "   ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Any Financial Status other than the below mentioned financial statuses will be ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UNDEFINED"
            }), ".  UNDEFINED means that the SDK couldn't get a response from the Gateway. An automatic cancellation service will try to cancel the transaction in case it was approved."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "AUTHORISED"
            }), " ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The transaction (Sale, Refund,...) has been authorised. Consider this value as \"successful\"."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DECLINED"
            }), " ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The transaction has been declined by the acquirer or issuer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PROCESSED"
            }), "  ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "update"
            }), " operation was successful."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "FAILED"
            }), "  ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Status generated due to a network error, a card which can not be read etc. As a general rule, errors are mapped to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FAILED"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CANCELLED"
            }), "  ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The transaction has been cancelled. For example if the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stopCurrentTransaction"
            }), " operation has been used or the cancel button on the terminal has been pressed."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PARTIAL_APPROVAL"
            }), "  ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A partial approval is the ability to partially authorize a transaction if the cardholder does not have the funds to cover the entire cost on their card. The merchant can obtain the remainder of the purchase amount in another form of payment. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PARTIAL_APPROVAL"
            }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "only"
            }), "  applicable to the United States market."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RequestedAmount"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The requested amount is the transaction amount sent to the terminal."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GratuityAmount"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The gratuity amount entered by the cardholder, if any."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GratuityPercentage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The gratuity amount, as a percentage of the requested amount."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TotalAmount"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The total of the gratuity and requested amount."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TransactionID"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The transaction number used for this transaction, as maintained by the Eft Client."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "EFTTransactionID"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The EFT reference, given by the system, to make the transaction unique."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OriginalEFTTransactionID"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The original EFT reference, given by the POS, as part of a VOID_SALE or a VOID_REFUND transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "EFTTimestamp"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The date and time of the transaction, in ISO format (YYYYMMDDHHmmSS)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AuthorisationCode"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The transaction authorization code, as given by the system."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CVM"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Cardholder Verfication Method: UNDEFINED, SIGNATURE, PIN, PIN_SIGNATURE, FAILED, NOT_REQUIRED"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CardEntryType"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The card data acquisition type: UNDEFINED, MSR, ICC, CNP"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CardSchemeName"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The card brand : MasterCard, Visa, Maestro, American Express, Discover, JCB, Diners, UnionPay"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CardTypeId"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DEPRECATED - The ID of the Card Type."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SerialNumber"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The serial number of the payment terminal."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BatteryStatus"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A number, followed by the % sign, which indicates the current charge level of the battery."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BatterymV"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An integer, which represent the battery charge, in mV."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BatteryCharging"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Indicates whether the battery is charging, or not. Values are true or false."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ExternalPower"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Indicates whether the PED is connected to an external power source (e.g. a AC adapter). Values are true or false."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ApplicationName"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The name of the application running on the payment terminal."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ApplicationVersion"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A version string of the form major.minor.build”(e.g. 1.2.118)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ErrorMessage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Description of the error, if any."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RecoveredTransaction"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Indicates that the transaction result is a recovered transaction. The key is only included if value is true."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cmdids",
      children: "CmdIds"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "card reader Status messages"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Value List"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Status messages received from the payment terminal:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_SUCCESS"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_INVALID_DATA"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_PROCESSING_ERROR"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_COMMAND_NOT_ALLOWED"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_NOT_INITIALISED"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_CONNECT_TIMEOUT"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_CONNECT_ERROR"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_SENDING_ERROR"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_RECEIVING_ERROR"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_NO_DATA_AVAILABLE"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_TRANS_NOT_ALLOWED"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_UNSUPPORTED_CURRENCY"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_NO_HOST_AVAILABLE"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_CARD_READER_ERROR"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_CARD_READING_FAILED"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_INVALID_CARD"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_INPUT_TIMEOUT"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_USER_CANCELLED"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_INVALID_SIGNATURE"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_WAITING_CARD"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_CARD_INSERTED"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_APPLICATION_SELECTION"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_APPLICATION_CONFIRMATION"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_AMOUNT_VALIDATION"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_PIN_INPUT"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_MANUAL_CARD_INPUT"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_WAITING_CARD_REMOVAL"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_TIP_INPUT"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_SHARED_SECRET_INVALID"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_SHARED_SECRET_AUTH"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_WAITING_SIGNATURE"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_CONNECTING"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_SENDING"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_RECEIVEING"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_DISCONNECTING"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_PIN_INPUT_COMPLETED"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_POS_CANCELLED"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_REQUEST_INVALID"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_CARD_CANCELLED"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_CARD_BLOCKED"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_REQUEST_AUTH_TIMEOUT"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_REQUEST_PAYMENT_TIMEOUT"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_RESPONSE_AUTH_TIMEOUT"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_RESPONSE_PAYMENT_TIMEOUT"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_ICC_CARD_SWIPED"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_REMOVE_CARD"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_SCANNER_IS_NOT_SUPPORTED"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_SCANNER_EVENT"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_BATTERY_TOO_LOW"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_ACCOUNT_TYPE_SELECTION"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_BT_IS_NOT_SUPPORTED"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_PAYMENT_CODE_SELECTION"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_PARTIAL_APPROVAL"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_AMOUNT_DUE_VALIDATION"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_INVALID_URL"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_WAITING_CUSTOMER_RECEIPT"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_PRINTING_MERCHANT_RECEIPT"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_PRINTING_CUSTOMER_RECEIPT"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_WAITING_HOST_MSG_TO_HOST"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_WAITING_HOST_MSG_RESP"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "EFT_PP_STATUS_INITIALISATION_COMPLETE"
      }), (0,jsx_runtime.jsx)("br", {})]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45",
      children: "Status strings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Status as NSString"
      }), " ", (0,jsx_runtime.jsx)("span", {
        class: "badge badge--info",
        children: "Value List"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An NSString containing the status message - can be one of the following:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Possible values"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Success"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Invalid data"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Processing error"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Not allowed"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Not initialized"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Connect timeout"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Connect error"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Sending error"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Receiveing error"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "No data available"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Transaction not allowed"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Unsupported currency"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "No host available"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Card reader error"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Card reading failed"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Invalid card"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Input timeout"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "User cancelled"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Invalid signature"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Waiting card"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Card inserted"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Application selection"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Application confirmation"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Amount validation"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "PIN input"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Manual card input"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Waiting card removal"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tip input"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Shared secret invalid"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Connecting"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Sending"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Receiving"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Disconnecting"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "PIN entry completed"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Merchant cancelled the transaction"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Request invalid"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Card cancelled the transaction"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Blocked card"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Request for authorisation timed out"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Request for payment timed out"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Response to authorisation request timed out"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Response to payment request timed out"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Please insert card in chip reader"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Remove the card from the reader"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "This device does not have a scanner"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Scanner is not supported"
      }), (0,jsx_runtime.jsx)("br", {}), "\r\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Scanner event"
      }), (0,jsx_runtime.jsx)("br", {})]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "process-details",
      children: "Process details"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following table contains result codes that can occur in the COMMAND response STATUS field (see section 1.3 above)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In addition the following table contains the text information presented in the StatusMessage field that is part of the FinancialTransactionResponse Xml response object."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All values are in hex in the following table."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Status ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "StatusMessage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_SUCCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One of the following: \"\" (an empty string) \"AUTH CODE #\" \"REFUND ACCEPTED\" \"REVERSAL ACCEPTED\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation completed successfully. No further actions required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_INVALID_DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Invalid data\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid COMMAND request object, from the POS App, at the start of an operation. Please retry the operation. If the issue persists please contact technical support and provide card reader logs."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_PROCESSING_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Processing error\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An unexpected error occurred during processing. Please retry the operation. If the issue persists please contact technical support and provide card reader logs."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_COMMAND_NOT_ALLOWED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Command not allowed\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card reader is currently busy processing another command. Please retry the operation once the current operation has completed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_NOT_INITIALISED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Device is not initialized\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation can’t be completed because there is a pending software update that must be applied before processing can continue. Please retry the operation after the card reader has restarted itself."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_CONNECT_TIMEOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Connection time out detected\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The back end connection timed out during an update. Please retry the operation. If the issue persists please contact technical support and provide card reader logs."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_CONNECT_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Connection error\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It was not possible to establish a connection to the back end system during an update operation. Please retry the operation. If the issue persists please contact technical support and provide card reader logs."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_SENDING_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Send error\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A failure was detected during communication with the back end system. If a SALE or a REFUND transaction was in progress when this occurred then you MUST contact technical support and verify whether the transaction went through or not. If you fail to do so then you may be liable for any costs incurred due to any double charges. Note: You may be asked to provide the card reader logs. Once verified please retry the operation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_RECEIVING_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Receiving error\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A failure was detected during communication with the back end system. If a SALE or a REFUND transaction was in progress when this occurred then you MUST contact technical support and verify whether the transaction went through or not. If you fail to do so then you may be liable for any costs incurred due to any double charges. Note: You may be asked to provide the card reader logs. Once verified please retry the operation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_NO_DATA_AVAILABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "000A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"No data available\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The POS App is trying to fetch the card reader log file but there is no data stored in the log file. If logs are required then please set the log level to an appropriate value and retry the operation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_TRANS_NOT_ALLOWED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "000B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Transaction not allowed\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Currently not used"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_UNSUPPORTED_CURRENCY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "000C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Currency not supported\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A currency has been selected that the card reader has not been configured for. Please select the correct currency and retry the operation. Alternatively, please contact technical support and ask for the specific currency to be supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_NO_HOST_AVAILABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "000D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"No host configuration found\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["An update was initiated but the card reader could not find any host information for the back end system, even though it otherwise contains valid configuration. This is indicative of an invalid ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hostBlock"
            }), " block with in the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "HostList"
            }), " block in this device configuration, which was placed on the card reader during a previous update. Please contact technical support and provide card reader logs and ask for a replacement device. The card reader will be unable to update itself and must be replaced."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_CARD_READER_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "000E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Card reader error\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error detected in the chip reader or the magnetic stripe reader. Please retry the operation. If the issue persists please contact technical support and provide them with the card reader logs as well as asking for a replacement reader."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_CARD_READING_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "000F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Failed to read card data\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card reader could not read any data from the card. Please retry the operation. If the issue persists the card may be faulty, please try another card. If the issue still persists the card reader may require replacement, please contact technical support."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_INVALID_CARD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"INVALID CARD\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card reader detected invalid card data. Please retry the operation. If the issue persists the card may be faulty, please try another card. If the issue still persists the card reader may require replacement, please contact technical support."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_INPUT_TIMEOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Timeout waiting for user input\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card reader timed out while waiting for a user action. No further actions required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_USER_CANCELLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"TRANSACTION VOID\" \"User cancelled the transaction\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation was cancelled by card holder. No further actions required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_SHARED_SECRET_INVALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "001D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Shared Secret invalid\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card reader believes that the POS App has an incorrect shared secret. No financial operations will be possible (e.g. SALE, REFUND). Please type the correct shared secret into the POS App or contact technical support for further assistance."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_SHARED_SECRET_AUTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "001E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Authenticating POS\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card reader is about to challenge the POS App for a correct shared secret. No further actions are required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REPORT STATUS SPECIFIC"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_INVALID_SIGNATURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"TRANSACTION VOID\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The merchant indicated that the signature provided by the card holder was invalid. No further actions are required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_WAITING_CARD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Waiting for card\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card reader is waiting for a card to be inserted into the chip reader or for a card to be swiped (only applies to card readers with external MSR). Insert or swipe a card to continue with the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_CARD_INSERTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0015"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Card detected\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Currently not used"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_APPLICATION_SELECTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Waiting for application selection\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card reader is waiting for the card holder to select a card application to be used for the transaction. The card holder must select an application for use (e.g. VISA, MASTERCARD, etc.) and should then press either the OK button to continue. Press the C/Cancel button to abort the transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_APPLICATION_CONFIRMATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0017"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Waiting for application confirmation\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card reader is waiting for the card holder to confirm that the displayed card application should be used for the transaction. The card holder should press either the OK or the C/Cancel button."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_AMOUNT_VALIDATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Waiting for amount validation\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card reader is waiting for the card holder to confirm that the amount presented is correct. The card holder should press either the OK or the C/Cancel button."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_PIN_INPUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Waiting for PIN entry\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card reader is waiting for the card holder to enter his/her PIN. The card holder should enter his PIN and then press the OK button to continue. For PIN bypass press the OK button without entering any PIN digits (this will trigger signature fallback). Press the C/Cancel button to abort the transaction. Note: It is not possible to cancel this operation from the POS App."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_MANUAL_CARD_INPUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "001A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Waiting for manual card data\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Currently not used"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_WAITING_CARD_REMOVAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "001B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Waiting for card removal\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A card was detected in the card reader at the start of a transaction, presumably left there from a previous transaction. Please remove the card and restart the operation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_TIP_INPUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "001C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Waiting for gratuity\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card reader is waiting for the card holder to enter/confirm tip/gratuity information."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_WAITING_SIGNATURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "001F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Waiting for signature\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card reader is waiting for confirmation from the merchant that the card holder signature is valid. The merchant should press either the Accepted or Declined/Cancel in the POS App. Pressing Cancel or OK on the card reader will not have any effect."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_WAITING_HOST_CONNECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Connecting to host\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card reader is establishing a connection to the back end system. No further actions are required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_WAITING_HOST_SEND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Sending data to host\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card reader is sending data to the back end system. No further actions are required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_WAITING_HOST_RECEIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Waiting for data from host\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card reader is waiting for data from to the back end system. No further actions are required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_WAITING_HOST_DISCONNECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Disconnecting from host\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card reader is disconnecting from the back end system. No further actions are required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_PIN_INPUT_COMPLETED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"PIN entry completed\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PIN entry has been completed. No further actions required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_POS_CANCELLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"TRANSACTION VOID\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation was cancelled by merchant. No further actions required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_REQUEST_INVALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Request invalid\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Card not allowed with this transaction type."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_CARD_CANCELLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"TRANSACTION VOID\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The chip on the card cancelled the transaction. No further actions required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_CARD_BLOCKED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0028"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"CARD BLOCKED\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_REQUEST_AUTH_TIMEOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Request for authorisation timed out\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indicates that the card reader detected a communication failure between itself and the back end system during the authorization phase. Please make sure the phone/pc has an internet connection and then retry the operation. If the problem persists then please contact technical support. Note: You may be asked to provide the card reader logs."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_REQUEST_PAYMENT_TIMEOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "002A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Request for payment timed out\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indicates that the card reader detected a communication failure between itself and the back end system during the payments phase. Please make sure the phone/pc has an internet connection and then retry the operation. If the problem persists then please contact technical support. Note: You may be asked to provide the card reader logs."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_RESPONSE_AUTH_TIMEOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "002B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Response to authorisation request timed out\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indicates that the card reader detected a communication failure between itself and the back end system during the authorization phase. Please make sure the phone/pc has an internet connection and then retry the operation. If the problem persists then please contact technical support. Note: You may be asked to provide the card reader logs."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_RESPONSE_PAYMENT_TIMEOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "002C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Response to payment request timed out\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indicates that the card reader detected a communication failure between itself and the back end system during the payments phase. You MUST contact technical support and verify whether the transaction went through or not. If you fail to do so then you may be liable for any costs incurred due to any double charges.   Note: You may be asked to provide the card reader logs. Once you have verified that the transaction did not go through then please make sure the phone/pc has an internet connection and then retry the operation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_ICC_CARD_SWIPED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "002D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Please insert card in chip reader\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Currently not used"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_REMOVE_CARD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "002E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Remove the card from the reader\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Currently not used"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_SCANNER_IS_NOT_SUPPORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "002F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"This device does not have a scanner\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bar-code scanner hardware is not present on this card reader. No further actions are required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_SCANNER_EVENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bar-code data was just read with the bar-code scanner and returned to the POS App. No further actions are required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_BATTERY_TOO_LOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Operation cancelled, the battery is too low. Please charge.\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An operation was started, but the battery charge level is too low to complete the operation. Please recharge the card reader."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFT_ACCOUNT_TYPE_SELECTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0032"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Waiting for account type selection\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The card reader is waiting for the card holder to choose an account type for the transaction (i.e. default, credit, cheque/debit or savings)."
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