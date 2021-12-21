"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8466],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5085:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:4,id:"androidapioverview"},u="API overview",p={unversionedId:"androidapioverview",id:"version-Android SDK 6.5.0/androidapioverview",title:"API overview",description:"Supported functionality",source:"@site/android_versioned_docs/version-Android SDK 6.5.0/androidapioverview.md",sourceDirName:".",slug:"/androidapioverview",permalink:"/android/androidapioverview",tags:[],version:"Android SDK 6.5.0",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"androidapioverview"},sidebar:"version-Android SDK 6.5.0/tutorialSidebar",previous:{title:"Migration from 5.X",permalink:"/android/androidmigrationguide"},next:{title:"Integration Guide",permalink:"/android/androidintegrationguide"}},s=[],d={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api-overview"},"API overview"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Supported functionality")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"List the available payment terminals"),(0,o.kt)("li",{parentName:"ul"},"Connect/disconnect to and from a payment terminal."),(0,o.kt)("li",{parentName:"ul"},"Automatically or manually reconnect to a payment terminal."),(0,o.kt)("li",{parentName:"ul"},"Execute financial transactions."),(0,o.kt)("li",{parentName:"ul"},"Get the status of transactions."),(0,o.kt)("li",{parentName:"ul"},"Control and access the device logs.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Processing Payments Simulation")),(0,o.kt)("p",null,"Your test payments are sent against a test server on the Handpoint side which simulates the behavior of an acquiring bank. Funds are not moved and sensitive data from the card is fully encrypted. You can use trigger amounts to generate some specific responses from our server:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sale amounts")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Amount"),(0,o.kt)("th",{parentName:"tr",align:null},"Behaviour"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"37.79"),(0,o.kt)("td",{parentName:"tr",align:null},"Issuer response code = 01 (Refer to issuer)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"37.84"),(0,o.kt)("td",{parentName:"tr",align:null},"Issuer response code = 05 (Not authorized)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"37.93"),(0,o.kt)("td",{parentName:"tr",align:null},"Issuer response code = 04 (Pick up card)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"37.57"),(0,o.kt)("td",{parentName:"tr",align:null},"Request is partially approved")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"37.68"),(0,o.kt)("td",{parentName:"tr",align:null},"Request timeout")))))}c.isMDXComponent=!0}}]);