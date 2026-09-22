"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[99495],{

/***/ 69338
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_android_versioned_docs_version_android_sdk_7_0_1_androidreleasenotes_md_7bc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/android/site-android-versioned-docs-version-android-sdk-7-0-1-androidreleasenotes-md-7bc.json
const site_android_versioned_docs_version_android_sdk_7_0_1_androidreleasenotes_md_7bc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"androidreleasenotes","title":"Release Notes","description":"Don’t miss any updates on our latest releases. Contact your Handpoint relationship manager to subscribe to the Handpoint Newsletter!","source":"@site/android_versioned_docs/version-Android SDK 7.0.1/androidreleasenotes.md","sourceDirName":".","slug":"/androidreleasenotes","permalink":"/legacy/android/Android SDK 7.0.1/androidreleasenotes","draft":false,"unlisted":false,"tags":[],"version":"Android SDK 7.0.1","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"id":"androidreleasenotes"},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/legacy/android/Android SDK 7.0.1/androidintroduction"},"next":{"title":"Migration from 6.X to 7.X","permalink":"/legacy/android/Android SDK 7.0.1/androidmigrationguide"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./android_versioned_docs/version-Android SDK 7.0.1/androidreleasenotes.md


const frontMatter = {
	sidebar_position: 2,
	id: 'androidreleasenotes'
};
const contentTitle = 'Release Notes';

const assets = {

};



const toc = [{
  "value": "7.0.1",
  "id": "701",
  "level": 2
}, {
  "value": "6.7.4",
  "id": "674",
  "level": 2
}, {
  "value": "6.7.3",
  "id": "673",
  "level": 2
}, {
  "value": "6.7.2",
  "id": "672",
  "level": 2
}, {
  "value": "6.7.0",
  "id": "670",
  "level": 2
}, {
  "value": "6.6.7",
  "id": "667",
  "level": 2
}, {
  "value": "6.6.3",
  "id": "663",
  "level": 2
}, {
  "value": "6.6.0",
  "id": "660",
  "level": 2
}, {
  "value": "6.5.0",
  "id": "650",
  "level": 2
}, {
  "value": "6.4.1",
  "id": "641",
  "level": 2
}, {
  "value": "6.4.0",
  "id": "640",
  "level": 2
}, {
  "value": "6.3.0",
  "id": "630",
  "level": 2
}, {
  "value": "6.2.2",
  "id": "622",
  "level": 2
}, {
  "value": "6.2.1",
  "id": "621",
  "level": 2
}, {
  "value": "6.2.0",
  "id": "620",
  "level": 2
}, {
  "value": "6.1.1",
  "id": "611",
  "level": 2
}, {
  "value": "6.1.0",
  "id": "610",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
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
      id: "701",
      children: "7.0.1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Removed the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Events.Required"
        }), " interface and divided it into ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.0.1/androidmigrationguide#1-new-integration-interfaces",
          children: "3 different interfaces"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.0.1/androidmigrationguide#3",
          children: "financial operations"
        }), " will now be returning an ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.0.1/androidobjects#operation-start-result",
          children: "OperationStartResult"
        }), " object instead of a boolean to indicate that the operation was successfully sent to the payment terminal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Introducing a new feature called ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "duplicate payment check"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deviceCapabilities"
        }), " event has been renamed to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "supportedCardBrands"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For more information please check our ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/legacy/android/Android%20SDK%207.0.1/androidmigrationguide",
          children: "migration guide"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "674",
      children: "6.7.4"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "customerReference"
        }), " correctly populated when card is removed in the middle of a transaction"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MOTO: Correct handling of expired access and refresh tokens"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLOUD: Channel connection/subscription handling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "673",
      children: "6.7.3"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MOTO: Linked Refund only with GUID."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Correctly populated transaction result the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "originalEFTTransactionID"
        }), " on Linked Refunds."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correctly populated on transaction result amounts on \"Already reversed\" operations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Crashes identified in the field."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "672",
      children: "6.7.2"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MOTO: Retry token and configuration download if missing for MoTo transactions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLOUD: device status moving terminals between merchants."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLOUD: REST-API transaction result delivery."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "requestedAmount"
        }), " field in Transaction Result correctly populated."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "670",
      children: "6.7.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A35 support added"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Swedish language support"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Field customerReference added to TransactionResult"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cloud client shows \"Unable to process your request\" while the request reach the device"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contactless card tokenization fixed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CVM fixed in receipts for MOTO transactions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Amount fields are now populated in case of FAILURE and DECLINE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interact/AMEX certification fixes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix minor issues and app crashes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "667",
      children: "6.6.7"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SCA scenarios on PAX A80"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLOUD: receipt printing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deadman mechanism for not completed trx. App dies in the middle of a trx, will be auto cancelled in the restart"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "663",
      children: "6.6.3"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DATECS: Stop reconnection loop on api.disconnect()"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "660",
      children: "6.6.0"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Features"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MoTo (Mail Order Telephone Order)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLOUD: Connection stability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AID parsing for Discover cards."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PIN input on physical keyboards."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "650",
      children: "6.5.0"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Features"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Card brand display: 2 new events deviceCapabilities (supportedCardBrands) and readCard to show the supported card brands and card used during a transaction respectively."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update webview for devices that do not support co-branding."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correct handling of stopCurrentTransaction operation result for cloud operations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pin bypass for contactless transactions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic reconnection logic for android Datecs devices."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "641",
      children: "6.4.1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic Cancellation parameters."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "640",
      children: "6.4.0"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Features"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Populate operation timeout on CLOUD operations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Max attempts on Cancellation retries."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generic screen to show text messages."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Base amount handling in TipDialog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cancellation service max retry window"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verification method on transaction result object"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correct population of MessageReasonCode"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error message multi-language translation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cardholder name for contact operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Amount presentation in transactions report"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analytics and Cloud services stability moving terminals between merchants"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Refactor"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deprecated jcenter repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improved structure of cryptography module"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Legacy code removal"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "630",
      children: "6.3.0"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Features"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Print Report v2."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PAXA80 physical keyboard full support."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deadman mechanism for not completed trx."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Addition of customer reference on transaction result for cancelled of timed out trx"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Certification scenarios."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unification of sdk dialogs styles."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Card reading during tokenizations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contactless light thread handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Xml parsing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Printing html using uncommon characters."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monospace font for printing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SCA cases on contact."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PAX A80 Pin bypass handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receipts for partial approvals."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correct message on empty config update."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Refactor"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal Emv Classes to improve performance."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "622",
      children: "6.2.2"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility issues with Android 11 devices."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLOUD: Improved logic to wake up device and start trx during device sleep mode."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "621",
      children: "6.2.1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improved bluetooth connection logic (Datecs)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "620",
      children: "6.2.0"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Features"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New Tip Dialog."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-mid Phase 2."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Physical Keyboard PAX-A80."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Visa debit US app selection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cardHolderName filed in Transaction Result object"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Temporarily block during consecutive operations (Datecs devices)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Translations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility with Android 11."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "611",
      children: "6.1.1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Translations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "610",
      children: "6.1.0"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Features"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "End of the day report."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New printing framework."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transaction limit exceeds event."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-language in Status and End of Transaction → Transaction Result new fields: multiLanguageStatusMessages and multiLanguageErrorMessages."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support for MerchantAuth and Bypass options for Cloud + REST-API."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fixes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receipt adjustments for mobile wallets."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receipt adjustments for empty tags."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fields in TransactionResult."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contactless lights after card reading error."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "REST-API ACK."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Translations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error handling prior connecting to device"
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