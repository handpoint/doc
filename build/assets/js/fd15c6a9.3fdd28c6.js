"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5317],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=o(a),k=r,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(c,p(p({ref:e},s),{},{components:a})):n.createElement(c,p({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9353:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),p=["components"],i={sidebar_position:11,id:"expressjavascriptmethods"},d="Javascript Methods",o={unversionedId:"expressjavascriptmethods",id:"version-Express SDK 1.2/expressjavascriptmethods",title:"Javascript Methods",description:"initHapiExpress",source:"@site/express_versioned_docs/version-Express SDK 1.2/expressjavascriptmethods.md",sourceDirName:".",slug:"/expressjavascriptmethods",permalink:"/express/Express SDK 1.2/expressjavascriptmethods",tags:[],version:"Express SDK 1.2",sidebarPosition:11,frontMatter:{sidebar_position:11,id:"expressjavascriptmethods"},sidebar:"version-Express SDK 1.2/tutorialSidebar",previous:{title:"Javascript Interface",permalink:"/express/Express SDK 1.2/expressjavascriptinterface"}},s=[{value:"initHapiExpress",id:"inithapiexpress",children:[],level:2},{value:"openURL",id:"openurl",children:[],level:2},{value:"urlForRefund",id:"urlforrefund",children:[],level:2},{value:"urlForRefundReversal",id:"urlforrefundreversal",children:[],level:2},{value:"urlForSale",id:"urlforsale",children:[],level:2},{value:"urlForSaleAndTokenizeCard",id:"urlforsaleandtokenizecard",children:[],level:2},{value:"urlForSaleReversal",id:"urlforsalereversal",children:[],level:2},{value:"urlForScanner",id:"urlforscanner",children:[],level:2},{value:"urlForTokenizeCard",id:"urlfortokenizecard",children:[],level:2}],m={toc:s};function u(t){var e=t.components,a=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"javascript-methods"},"Javascript Methods"),(0,l.kt)("h2",{id:"inithapiexpress"},"initHapiExpress"),(0,l.kt)("p",null,"Creates an instance of Hapi."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"client_id")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"A unique identifier of your system to group operations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ssk")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"    ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The shared secret key to authorize the operations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"auto_return")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"If true, Handpoint Express automatically switches back to your app following a short timeout after the transaction completes.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"initHapiExpress('hapi-tests', '010203040050606', false);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},"The Hapi interface object with functions to generate URLs for sale, refund and reversals")))),(0,l.kt)("h2",{id:"openurl"},"openURL"),(0,l.kt)("p",null,"Opens a URL that is passed. This is a helper method. URLs generated by the UrlFor... methods can also be opened just like a normal link."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"url")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Url to open")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Hapi.openURL('handpoint://express/v1/?data=')\n")),(0,l.kt)("h2",{id:"urlforrefund"},"urlForRefund"),(0,l.kt)("p",null,"Constructs the URL needed for opening the express app and starting a refund operation."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"amount")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"   ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"currency")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"   ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Currency of the charge")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"extra_parameters")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},'An object containing additional sale parameters, fx. Key: "Budget", Value: "03"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"callbacl_url")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The URL that Handpoint Express will send its response to.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Hapi.urlForRefund('1000', 'USD', {'extra-value':'some info'}, 'http://callback.com');\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"A complete constructed and encoded URL string that includes the data for opening the express app and performing the operation")))),(0,l.kt)("h2",{id:"urlforrefundreversal"},"urlForRefundReversal"),(0,l.kt)("p",null,"Constructs the URL needed for opening the express app and reverting a refund transaction. This operation tries to void an earlier refund transaction, therefor the transaction GUID is needed for the transaction to be voided."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"amount")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"    ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"currency")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Currency of the charge")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"originalTransactionID")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The transaction id number for the transactino to void/revert")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"extra_parameters")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},'An object containing additional sale parameters, fx. Key: "Budget", Value: "03"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"callbacl_url")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The URL that Handpoint Express will send its response to.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Hapi.urlForRefundReversal('1000', 'USD', '1234' {'extra-value':'some info'}, 'http://callback.com');\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"A complete constructed and encoded URL string that includes the data for opening the express app and performing the operation")))),(0,l.kt)("h2",{id:"urlforsale"},"urlForSale"),(0,l.kt)("p",null,"Constructs the URL needed for opening the express app and starting a sale."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"amount")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"   ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"currency")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"    ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Currency of the charge")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"extra_parameters")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},'An object containing additional sale parameters, fx. Key: "Budget", Value: "03"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"callbacl_url")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The URL that Handpoint Express will send its response to.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Hapi.urlForSale('1000', 'USD', {'extra-value':'some info'}, 'http://callback.com');\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"A complete constructed and encoded URL string that includes the data for opening the express app and performing the operation")))),(0,l.kt)("h2",{id:"urlforsaleandtokenizecard"},"urlForSaleAndTokenizeCard"),(0,l.kt)("p",null,"Constructs the URL needed for opening the express app and starting a saleAndTokenizeCard"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"amount")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"    ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"currency")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"   ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Currency of the charge")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"extra_parameters")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},'An object containing additional sale parameters, fx. Key: "Budget", Value: "03"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"callbacl_url")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The URL that Handpoint Express will send its response to.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Hapi.urlForSaleAndTokenizeCard('1000', 'USD', {'extra-value':'some info'}, 'http://callback.com');\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"A complete constructed and encoded URL string that includes the data for opening the express app and performing the operation")))),(0,l.kt)("h2",{id:"urlforsalereversal"},"urlForSaleReversal"),(0,l.kt)("p",null,"Constructs the URL needed for opening the express app and reverting a sale transaction. This operation tries to void an earlier sale transaction, therefor the transaction GUID is needed for the transaction to be voided."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"amount")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"    ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"currency")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"    ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Currency of the charge")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"extra_parameters")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},'An object containing additional sale parameters, fx. Key: "Budget", Value: "03"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"originalTransactionID")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The transaction id number for the transactino to void/revert")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"callbacl_url")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The URL that Handpoint Express will send its response to.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Hapi.urlForSaleReversal('1000', 'USD', '1234' {'extra-value':'some info'}, 'http://callback.com');\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"A complete constructed and encoded URL string that includes the data for opening the express app and performing the operation")))),(0,l.kt)("h2",{id:"urlforscanner"},"urlForScanner"),(0,l.kt)("p",null,"Constructs the URL needed for opening the express app and starting scanning."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"multiScan")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"   ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"True if you want the scanner to stay on to capture multiple codes. False to shut off after the first succesful scan, timeout or cancel. Default is False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"autoScan")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"    ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"True if you want the scanner to function automatically without the press of a button. Default is False.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resultsGrouped")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"True if you want the results of the scan to come all grouped when the scanner is turned off. Otherwise the device will send an event per each code scanned. Default is True.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timeout")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of seconds after which the scanner, if left idle, turns itself off. Default is 0.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"extra_parameters")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},'An object containing additional sale parameters, fx. Key: "Budget", Value: "03"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"callback_url")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The URL that Handpoint Express will send its response to.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Hapi.urlForScanner(false, false, true, 0, {'extra-value':'some info'}, 'http://callback.com');\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"A complete constructed and encoded URL string that includes the data for opening the express app and performing the operation")))),(0,l.kt)("h2",{id:"urlfortokenizecard"},"urlForTokenizeCard"),(0,l.kt)("p",null,"Constructs the URL needed for opening the express app and starting a tokenizeCard."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"extra_parameters")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"   ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},'An object containing additional sale parameters, fx. Key: "Budget", Value: "03"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"callback_url")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"   ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The URL that Handpoint Express will send its response to.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Hapi.urlForTokenizeCard({'extra-value':'some info'}, 'http://callback.com');\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"A complete constructed and encoded URL string that includes the data for opening the express app and performing the operation")))))}u.isMDXComponent=!0}}]);