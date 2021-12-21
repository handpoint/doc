"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4848],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6417:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={sidebar_position:7,id:"expresscustomurl"},p="Custom URL",u={unversionedId:"expresscustomurl",id:"version-Express SDK 1.2/expresscustomurl",title:"Custom URL",description:"To initiate an Express client transaction from your web or app, you open a URL with the following format//express/v1/?data=",source:"@site/express_versioned_docs/version-Express SDK 1.2/expresscustomurl.md",sourceDirName:".",slug:"/expresscustomurl",permalink:"/express/Express SDK 1.2/expresscustomurl",tags:[],version:"Express SDK 1.2",sidebarPosition:7,frontMatter:{sidebar_position:7,id:"expresscustomurl"},sidebar:"version-Express SDK 1.2/tutorialSidebar",previous:{title:"Processing Payments Simulation",permalink:"/express/Express SDK 1.2/expressprocessing"},next:{title:"Json Request",permalink:"/express/Express SDK 1.2/expressjsonrequest"}},c=[],l={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-url"},"Custom URL"),(0,a.kt)("p",null,"To initiate an Express client transaction from your web or app, you open a URL with the following format: ",(0,a.kt)("inlineCode",{parentName:"p"},"handpoint://express/v1/?data=<url_encoded_data>")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For web apps, you can open this URL just as you would any other URL on a webpage."),(0,a.kt)("li",{parentName:"ul"},"For native iOS apps, you use the openURL: method of UIApplication.\nThe query parameter in the URL, data, is a percent-encoded JSON object that contains the information Express client needs to process the transaction request.")),(0,a.kt)("p",null,"For example, a valid unencoded JSON object looks like this (replace CLIENT_ID with your application's ID, and SHARED_SECRET_KEY with the device activation key you receive from our support team): If you're opening this URL from a native app, you can use your own app's custom scheme as a callback: ",(0,a.kt)("inlineCode",{parentName:"p"},'"myapp-url-scheme://payment-complete"')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": {\n        "type": "sale",\n        "parameters": {\n            "amount": 1500,\n            "currency": "USD"\n        },\n        "extraParameters": {\n            "your custom field" : "custom value"\n        }\n    },\n    "client": {\n        "clientId": "CLIENT_ID",\n        "ssk": "SHARED_SECRET_KEY",\n        "autoReturn": true,\n        "autoReturnTimeout": 0\n    },\n    "callbackUrl": "http://yourbackend.com/payment-result"\n}\n')),(0,a.kt)("p",null,"If you're developing a web application, this Javascript sample demonstrates encoding a Register API URL and directing the merchant's browser to open it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<script>\nvar dataParameter = {\n    "action": {\n        "type": "sale",\n        "parameters": {\n            "amount": 1500,\n            "currency": "USD"\n        },\n        "extraParameters": {\n            "your custom field" : "custom value"\n        }\n    },\n    "client": {\n        "clientId": "CLIENT_ID",\n        "ssk": "SHARED_SECRET_KEY",\n        "autoReturn": true,\n        "autoReturnTimeout": 0\n    },\n    "callbackUrl": "http://yourbackend.com/payment-result"\n};\nwindow.location = "handpoint://express/v1/?data=" + encodeURIComponent(JSON.stringify(dataParameter));\n<\/script>\n')))}m.isMDXComponent=!0}}]);