"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5114],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(n),k=r,c=m["".concat(s,".").concat(k)]||m[k]||u[k]||i;return n?a.createElement(c,l(l({ref:e},d),{},{components:n})):a.createElement(c,l({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6375:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:5,id:"androidtransactions"},s="Transactions",p={unversionedId:"androidtransactions",id:"version-Android SDK 6.5.0/androidtransactions",title:"Transactions",description:"Sale",source:"@site/android_versioned_docs/version-Android SDK 6.5.0/androidtransactions.md",sourceDirName:".",slug:"/androidtransactions",permalink:"/android/androidtransactions",tags:[],version:"Android SDK 6.5.0",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"androidtransactions"},sidebar:"version-Android SDK 6.5.0/tutorialSidebar",previous:{title:"Integration Guide",permalink:"/android/androidintegrationguide"},next:{title:"Device management",permalink:"/android/androiddevicemanagement"}},d=[{value:"Sale",id:"2",children:[],level:2},{value:"Sale And Tokenize Card",id:"3",children:[],level:2},{value:"Sale Reversal",id:"sale-reversal",children:[],level:2},{value:"Refund",id:"5",children:[],level:2},{value:"Refund reversal",id:"refund-reversal",children:[],level:2},{value:"Signature result",id:"signature-result",children:[],level:2},{value:"Tip Adjustment",id:"tip-adjustment",children:[],level:2},{value:"Tokenize Card",id:"tokenize-card",children:[],level:2},{value:"Card PAN",id:"card-pan",children:[],level:2}],u={toc:d};function m(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transactions"},"Transactions"),(0,i.kt)("h2",{id:"2"},"Sale"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Sale")),(0,i.kt)("p",null,"A sale initiates a payment operation to the card reader. In it's simplest form you only have to pass the ",(0,i.kt)("strong",{parentName:"p"},"amount")," and ",(0,i.kt)("strong",{parentName:"p"},"currency")," but it also accepts tip configuration and a map with extra parameters."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"amount")," ",(0,i.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"BigInteger")),(0,i.kt)("td",{parentName:"tr",align:null},"Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"currency")," ",(0,i.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"/android/androidobjects#13"},(0,i.kt)("em",{parentName:"a"},"Currency"))),(0,i.kt)("td",{parentName:"tr",align:null},"Currency of the charge")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"options")," ",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"/android/androidobjects#4"},(0,i.kt)("em",{parentName:"a"},"SaleOptions"))),(0,i.kt)("td",{parentName:"tr",align:null},"An object to store all the customization options for a sale.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'//Initiate a sale for 10.00 in Great British Pounds\napi.sale(new BigInteger("1000"),Currency.GBP);\n\n//Initiate a sale for 10.00 in Great British Pounds with tipping configuration\n//This feature is only available for PAX and Telpo devices\nTipConfiguration tipConfiguration = new TipConfiguration();\ntipConfiguration.setTipPercentages(Arrays.asList(5, 10, 15, 20));\ntipConfiguration.setAmount(new BigInteger("1000"));\ntipConfiguration.setBaseAmount(new BigInteger("1000"));\ntipConfiguration.setEnterAmountEnabled(true);\ntipConfiguration.setFooter("Thank you");\ntipConfiguration.setSkipEnabled(true);\nSaleOptions options = new SaleOptions();\noptions.setTipConfiguration(tipConfiguration);\n\napi.sale(new BigInteger("1000"),Currency.GBP, options);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Events invoked")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#14"},(0,i.kt)("strong",{parentName:"a"},"currentTransactionStatus"))),(0,i.kt)("p",null,"Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#15"},(0,i.kt)("strong",{parentName:"a"},"signatureRequired"))),(0,i.kt)("p",null,"Invoked if card verification requires signature."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#16"},(0,i.kt)("strong",{parentName:"a"},"endOfTransaction"))),(0,i.kt)("p",null,"Invoked when the terminal finishes processing the transaction."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successfully sent to the terminal.")))),(0,i.kt)("h2",{id:"3"},"Sale And Tokenize Card"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"saleAndTokenizeCard")),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"#2"},"sale")," operation which also returns a card token. (not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"amount")," ",(0,i.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"BigInteger")),(0,i.kt)("td",{parentName:"tr",align:null},"Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"currency")," ",(0,i.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"/android/androidobjects#13"},(0,i.kt)("em",{parentName:"a"},"Currency"))),(0,i.kt)("td",{parentName:"tr",align:null},"Currency of the charge")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"options")," ",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"/android/androidobjects#4"},(0,i.kt)("em",{parentName:"a"},"SaleOptions"))),(0,i.kt)("td",{parentName:"tr",align:null},"An object to store all the customization options for a sale.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'//Initiate a sale for 10.00 in Great British Pounds\napi.saleAndTokenizeCard(new BigInteger("1000"),Currency.GBP);\n\n//Initiate a sale for 10.00 in Great British Pounds with tipping configuration\n//This feature is not available for HiLite & Hi5 devices\nTipConfiguration tipConfiguration = new TipConfiguration();\ntipConfiguration.setTipPercentages(Arrays.asList(5, 10, 15, 20));\ntipConfiguration.setAmount(new BigInteger("1000"));\ntipConfiguration.setBaseAmount(new BigInteger("1000"));\ntipConfiguration.setEnterAmountEnabled(true);\ntipConfiguration.setFooter("Thank you");\ntipConfiguration.setSkipEnabled(true);\nSaleOptions options = new SaleOptions();\noptions.setTipConfiguration(tipConfiguration);\n\napi.saleAndTokenizeCard(new BigInteger("1000"),Currency.GBP,options);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Events invoked")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#14"},(0,i.kt)("strong",{parentName:"a"},"currentTransactionStatus"))),(0,i.kt)("p",null,"Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#15"},(0,i.kt)("strong",{parentName:"a"},"signatureRequired"))),(0,i.kt)("p",null,"Invoked if card verification requires signature."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#16"},(0,i.kt)("strong",{parentName:"a"},"endOfTransaction"))),(0,i.kt)("p",null,"Invoked when the terminal finishes processing the transaction."),(0,i.kt)("hr",null),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successfully sent to the terminal.")))),(0,i.kt)("h2",{id:"sale-reversal"},"Sale Reversal"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"saleReversal")),(0,i.kt)("p",null,"A sale reversal, also called sale VOID allows the user to reverse a previous sale operation. This operation reverts (if possible) a specific sale identified with a transaction id. In its simplest form you only have to pass the amount, currency and originalTransactionID but it also accepts a map with extra parameters. Note that transactions can only be reversed within a 24 hours timeframe or until the daily batch of transactions has been sent for submission."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"amount")," ",(0,i.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"BigInteger")),(0,i.kt)("td",{parentName:"tr",align:null},"Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"currency")," ",(0,i.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"/android/androidobjects#13"},(0,i.kt)("em",{parentName:"a"},"Currency"))),(0,i.kt)("td",{parentName:"tr",align:null},"Currency of the charge")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"originalTransactionID")," ",(0,i.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"Id of the original sale transaction")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"options")," ",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"/android/androidobjects#4"},(0,i.kt)("em",{parentName:"a"},"SaleOptions"))),(0,i.kt)("td",{parentName:"tr",align:null},"An object to store all the customization options for a sale.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'//Initiate a reversal for 10.00 in Great British Pounds\napi.saleReversal(new BigInteger("1000"),Currency.GBP,"00000000-0000-0000-0000-000000000000");\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Events invoked")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#14"},(0,i.kt)("strong",{parentName:"a"},"currentTransactionStatus"))),(0,i.kt)("p",null,"Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#15"},(0,i.kt)("strong",{parentName:"a"},"signatureRequired"))),(0,i.kt)("p",null,"Invoked if card verification requires signature."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#16"},(0,i.kt)("strong",{parentName:"a"},"endOfTransaction"))),(0,i.kt)("p",null,"Invoked when the terminal finishes processing the transaction."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successfully sent to the terminal.")))),(0,i.kt)("h2",{id:"5"},"Refund"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"refund")),(0,i.kt)("p",null,"A refund operation moves funds from the merchant account to the cardholder\xb4s credit card. In it's simplest form you only have to pass the amount and currency but it also accepts a map with extra parameters. Note that a card is required to be swiped, dipped or tapped for this operation. For Interac (Canadian Debit Network), refunds can only be processed until Interac closes the batch of transactions at night."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"amount")," ",(0,i.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"BigInteger")),(0,i.kt)("td",{parentName:"tr",align:null},"Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"currency")," ",(0,i.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"/android/androidobjects#13"},(0,i.kt)("em",{parentName:"a"},"Currency"))),(0,i.kt)("td",{parentName:"tr",align:null},"Currency of the charge")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"originalTransactionID")," ",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"If present it links the refund with a previous sale. It effectively limits the maximum amount refunded to that of the original transaction.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"options")," ",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"/android/androidobjects#4"},(0,i.kt)("em",{parentName:"a"},"SaleOptions"))),(0,i.kt)("td",{parentName:"tr",align:null},"An object to store all the customization options for a refund.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'//Initiate a refund for 10.00 in Great British Pounds\napi.refund(new BigInteger("1000"),Currency.GBP,"00000000-0000-0000-0000-000000000000");\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Events invoked")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#14"},(0,i.kt)("strong",{parentName:"a"},"currentTransactionStatus"))),(0,i.kt)("p",null,"Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#15"},(0,i.kt)("strong",{parentName:"a"},"signatureRequired"))),(0,i.kt)("p",null,"Invoked if card verification requires signature."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#16"},(0,i.kt)("strong",{parentName:"a"},"endOfTransaction"))),(0,i.kt)("p",null,"Invoked when the terminal finishes processing the transaction"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successfully sent to the terminal.")))),(0,i.kt)("h2",{id:"refund-reversal"},"Refund reversal"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"refundReversal")),(0,i.kt)("p",null,"A refund reversal, also called refund VOID allows the merchant to reverse a previous refund operation. This operation reverts (if possible) a specific refund identified with a transaction id. In it's simplest form you only have to pass the amount, currency and originalTransactionID but it also accepts a map with extra parameters. Note that transactions can only be reversed within a 24 hours timeframe or until the daily batch of transactions has been sent for submission."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"amount")," ",(0,i.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"BigInteger")),(0,i.kt)("td",{parentName:"tr",align:null},"Amount of funds to charge - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"currency")," ",(0,i.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"/android/androidobjects#13"},(0,i.kt)("em",{parentName:"a"},"Currency"))),(0,i.kt)("td",{parentName:"tr",align:null},"Currency of the charge")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"originalTransactionID")," ",(0,i.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"transaction id of the original refund")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"options")," ",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"/android/androidobjects#4"},(0,i.kt)("em",{parentName:"a"},"SaleOptions"))),(0,i.kt)("td",{parentName:"tr",align:null},"An object to store all the customization options for the transaction.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'//Initiate a refund reversal for 10.00 in Great British Pounds\napi.refundReversal(new BigInteger("1000"),Currency.GBP,"00000000-0000-0000-0000-000000000000");\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Events invoked")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#14"},(0,i.kt)("strong",{parentName:"a"},"currentTransactionStatus"))),(0,i.kt)("p",null,"Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#15"},(0,i.kt)("strong",{parentName:"a"},"signatureRequired"))),(0,i.kt)("p",null,"Invoked if card verification requires signature."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#16"},(0,i.kt)("strong",{parentName:"a"},"endOfTransaction"))),(0,i.kt)("p",null,"Invoked when the terminal finishes processing the transaction"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successfully sent to the terminal.")))),(0,i.kt)("h2",{id:"signature-result"},"Signature result"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"signatureResult")),(0,i.kt)("p",null,"A signatureRequired event is invoked during a transaction when a signature verification is required (f.ex when a payment is done with a swiped or chip and sign card). The merchant is required to ask the cardholder for signature and approve (or decline) the signature. signatureResult tells the card reader if the signature was approved by passing the value true in the method. To decline a signature event then false should be passed to the card reader. Note that this event is only required for an HiLite or Hi5 integration and can be safely ignored for a PAX or Telpo integration."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"accepted")," ",(0,i.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"pass true if merchant accepts cardholder signature")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"//Approves signature automatically in signatureRequired event\n@Override\npublic void signatureRequired(SignatureRequest signatureRequest, Device device){\n    api.signatureResult(true);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Events invoked")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#14"},(0,i.kt)("strong",{parentName:"a"},"currentTransactionStatus"))),(0,i.kt)("p",null,"Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#16"},(0,i.kt)("strong",{parentName:"a"},"endOfTransaction"))),(0,i.kt)("p",null,"Invoked when the terminal finishes processing the transaction"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successfully sent to the terminal.")))),(0,i.kt)("h2",{id:"tip-adjustment"},"Tip Adjustment"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TipAdjustment")),(0,i.kt)("p",null,"A tip adjustment operation allows merchants to adjust the tip amount of a sale transaction before the batch of transactions is settled by the processor at the end of the day.\nNote: This functionality is only available for the restaurant industry in the United States and the processors currently supporting this functionality are TSYS and VANTIV."),(0,i.kt)("p",null,"Dependencies:\nThe code example provided depends on RxJava, take a look a their ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/RxAndroid"},"documentation")," to see how to easily include this dependency in your android project. If you do not want to use RxJava or any additional dependencies then ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/os/AsyncTask.html"},"AsyncTask"),", provided by android, can be used instead for this asynchronous processing. Still we recommend using RxJava as it improves readability and maintainability."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tipAmount")," ",(0,i.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"BigDecimal")),(0,i.kt)("td",{parentName:"tr",align:null},"Tip amount added to the original (base) transaction amount - in the minor unit of currency (f.ex. 1000 is 10.00 GBP)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"originalTransactionID")," ",(0,i.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"Unique id of the original sale transaction as received from the card reader (EFTTransactionID)")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Observable.fromCallable(new Callable() {\n    @Override\n    public FinancialStatus call() throws Exception {\n        return api.tipAdjustment(new BigDecimal(1000), "2bc23910-c3b3-11e6-9e62-07b2a5f091ec");\n    }\n})\n.subscribeOn(Schedulers.io())\n.observeOn(AndroidSchedulers.mainThread())\n.subscribe(new Consumer() {\n    @Override\n    public void accept(@NonNull FinancialStatus status) throws Exception {\n        if (status == FinancialStatus.AUTHORISED) {\n            //SUCCESS\n        } else if (status == FinancialStatus.DECLINED) {\n            //DECLINED\n        } else {\n            //FAILED\n    }\n});\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("p",null,"Result of the tip adjustment transaction, it returns a FinancialStatus, the possible values are :"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"FinancialStatus")),(0,i.kt)("td",{parentName:"tr",align:null},"- ",(0,i.kt)("strong",{parentName:"td"},"FinancialStatus.AUTHORISED")," (tip adjustment approved by the processor) ",(0,i.kt)("br",null),"  - ",(0,i.kt)("strong",{parentName:"td"},"FinancialStatus.FAILED")," (system error or timeout)",(0,i.kt)("br",null)," - ",(0,i.kt)("strong",{parentName:"td"},"FinancialStatus.DECLINED")," (tip adjustment declined by the processor).")))),(0,i.kt)("p",null,"If two tip adjustments are sent for the same sale transaction, the second tip adjustment will override the first one. In case the transaction fails (not declined) we recommend that you prompt the user of the POS to retry the adjustment."),(0,i.kt)("h2",{id:"tokenize-card"},"Tokenize Card"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tokenizeCard")),(0,i.kt)("p",null,"Returns a card token (not available for all acquirers, please check with Handpoint to know if tokenization is supported for your acquirer of choice)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"options")," ",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"/android/androidobjects#4"},(0,i.kt)("em",{parentName:"a"},"SaleOptions"))),(0,i.kt)("td",{parentName:"tr",align:null},"An object to store all the customization options for the transaction.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"//Tokenize a card\napi.tokenizeCard();\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Events invoked")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#14"},(0,i.kt)("strong",{parentName:"a"},"currentTransactionStatus"))),(0,i.kt)("p",null,"Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#16"},(0,i.kt)("strong",{parentName:"a"},"endOfTransaction"))),(0,i.kt)("p",null,"Invoked when the terminal finishes processing the transaction"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successfully sent to the terminal.")))),(0,i.kt)("h2",{id:"card-pan"},"Card PAN"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cardPan")),(0,i.kt)("p",null,"A cardPan request will return the full PAN of the card being swiped, dipped or tapped. Only the PANs of whitelisted card ranges will be returned by the Handpoint systems. This operation is mostly used to be able to process funds or points from loyalty cards."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"options")," ",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"/android/androidobjects#4"},(0,i.kt)("em",{parentName:"a"},"SaleOptions"))),(0,i.kt)("td",{parentName:"tr",align:null},"An object to store all the customization options for the transaction.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"//Gets the PAN of a card\napi.cardPan();\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Events invoked")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#14"},(0,i.kt)("strong",{parentName:"a"},"currentTransactionStatus"))),(0,i.kt)("p",null,"Invoked during a transaction, it fetches statuses coming from the terminal (ex : 'waiting for card' or 'waiting for PIN entry')"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/android/androideventlisteners#16"},(0,i.kt)("strong",{parentName:"a"},"endOfTransaction"))),(0,i.kt)("p",null,"Invoked when the terminal finishes processing the transaction"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successfully sent to the terminal.")))))}m.isMDXComponent=!0}}]);