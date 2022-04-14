"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6967],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},649:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:7,id:"restprocessingpayments"},l="Processing Payments Simulation",p={unversionedId:"restprocessingpayments",id:"version-REST API 2.3.0/restprocessingpayments",title:"Processing Payments Simulation",description:"Test transactions are conducted against a test server which is designed to simulate the behavior of an acquiring bank without moving any funds. As with every Handpoint terminal, sensitive card data is fully encrypted.",source:"@site/restapi_versioned_docs/version-REST API 2.3.0/restprocessingpayments.md",sourceDirName:".",slug:"/restprocessingpayments",permalink:"/doc/restapi/REST API 2.3.0/restprocessingpayments",tags:[],version:"REST API 2.3.0",sidebarPosition:7,frontMatter:{sidebar_position:7,id:"restprocessingpayments"},sidebar:"version-REST API 2.3.0/tutorialSidebar",previous:{title:"Sandbox",permalink:"/doc/restapi/REST API 2.3.0/restsandbox"},next:{title:"Endpoints",permalink:"/doc/restapi/REST API 2.3.0/restendpoints"}},u=[],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"processing-payments-simulation"},"Processing Payments Simulation"),(0,i.kt)("p",null,"Test transactions are conducted against a test server which is designed to simulate the behavior of an acquiring bank without moving any funds. As with every Handpoint terminal, sensitive card data is fully encrypted."),(0,i.kt)("p",null,"Use trigger amounts to generate some specific responses from our server:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sale amounts")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Amount"),(0,i.kt)("th",{parentName:"tr",align:null},"Behaviour"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"37.79"),(0,i.kt)("td",{parentName:"tr",align:null},"Issuer response code = 01 (Refer to issuer)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"37.84"),(0,i.kt)("td",{parentName:"tr",align:null},"Issuer response code = 05 (Not authorized)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"37.93"),(0,i.kt)("td",{parentName:"tr",align:null},"Issuer response code = 04 (Pick up card)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"37.57"),(0,i.kt)("td",{parentName:"tr",align:null},"Request is partially approved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"37.68"),(0,i.kt)("td",{parentName:"tr",align:null},"Request timeout")))),(0,i.kt)("p",null,"Any other values will behave as normal authorized operations."))}m.isMDXComponent=!0}}]);