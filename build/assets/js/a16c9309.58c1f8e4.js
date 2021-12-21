"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7121],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),b=a,f=d["".concat(l,".").concat(b)]||d[b]||p[b]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9508:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:6,id:"restsandbox"},l="Sandbox",c={unversionedId:"restsandbox",id:"version-REST API 2.4.0/restsandbox",title:"Sandbox",description:"Get started today with our sandbox. You can generate sample transactions and test the experience right in your browser. Check it at//www.handpoint.com/lab/cloudpos. A payment terminal is required to start testing.",source:"@site/restapi_versioned_docs/version-REST API 2.4.0/restsandbox.md",sourceDirName:".",slug:"/restsandbox",permalink:"/restapi/restsandbox",tags:[],version:"REST API 2.4.0",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"restsandbox"},sidebar:"version-REST API 2.4.0/tutorialSidebar",previous:{title:"Configuration",permalink:"/restapi/restconfiguration"},next:{title:"Processing Payments Simulation",permalink:"/restapi/restprocessingpayments"}},u=[],p={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sandbox"},"Sandbox"),(0,o.kt)("p",null,"Get started today with our sandbox. You can generate sample transactions and test the experience right in your browser. Check it at: ",(0,o.kt)("a",{parentName:"p",href:"http://www.handpoint.com/lab/cloudpos"},"http://www.handpoint.com/lab/cloudpos"),". A payment terminal is required to start testing."),(0,o.kt)("p",null,"This is the initial setup screen:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sandbox logo",src:n(8104).Z})),(0,o.kt)("p",null,'To get started, select the target environment where you are going to operate (Sandbox/Production). If the user has any doubts selecting the correct environment, click on "*How do I know what type of card reader do I have?" and you will be redirected to an explanation page.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sandbox logo",src:n(9655).Z})),(0,o.kt)("p",null,'Next, enter your Handpoint API key in the box labeled "INSERT API KEY\u201d and click the check button. This will automatically populate the \u201cSELECT A DEVICE\u201d drop down with the list of devices that are assigned to you. If the API key is not valid, an error message will appear in the \u201cRESPONSES\u201d section of the sandbox.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sandbox logo",src:n(2390).Z})),(0,o.kt)("p",null,'Before you can begin any further testing, you first must select the device that you will be using. In the \u201cSELECT A DEVICE\u201d list, you will see both the real terminals assigned to you, as well as simulated devices (listed by serial number). You can choose any device to test with. Serial numbers for the simulated devices always have this format: XXXX | 999999xxxxx. Choose a simulated terminal if you do not have access to a real device or if you just want to see simulated behavior. You can refresh the \u201cSELECT A DEVICE\u201d list by clicking the refresh button on the right side of the \u201cSELECT A DEVICE\u201d box. If you are already connected to a device, you can disconnect from it using the \u201cDisconnect\u201d button or trigger a software and configuration update operation by using the "Update" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sandbox logo",src:n(2390).Z})),(0,o.kt)("p",null,"Once you have selected a device, the \u201c",(0,o.kt)("em",{parentName:"p"},"SELECT A DEVICE"),"\u201d box will be disabled, and the rest of the sandbox will be enabled. With your selected device, you can simulate a number of operations, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"sale"),(0,o.kt)("li",{parentName:"ul"},"sale and tokenize"),(0,o.kt)("li",{parentName:"ul"},"refund"),(0,o.kt)("li",{parentName:"ul"},"tokenize card"),(0,o.kt)("li",{parentName:"ul"},"reverse sale transactions"),(0,o.kt)("li",{parentName:"ul"},"reverse refund transactions")),(0,o.kt)("p",null,"In order to reverse a transaction, a transaction id is needed, this id is available in the transaction result data coming from a previous sale or refund operation. Each transaction result will appear in the RESPONSES panel, on the right side of the screen."),(0,o.kt)("p",null,"With each transaction result you will be able to perform several operations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"View and print the merchant receipt"),(0,o.kt)("li",{parentName:"ul"},"View and print the customer receipt"),(0,o.kt)("li",{parentName:"ul"},"Reverse the transaction"),(0,o.kt)("li",{parentName:"ul"},"Copy the transaction result data; it is the raw transaction result, as received by the application from the device")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sandbox logo",src:n(1404).Z})))}d.isMDXComponent=!0},8104:function(e,t,n){t.Z=n.p+"assets/images/Sandbox1-264a7a3a1a077e35789c2c4d323cbc91.png"},9655:function(e,t,n){t.Z=n.p+"assets/images/Sandbox2-1e4237ad557b64f948644c7f333d3bf1.png"},2390:function(e,t,n){t.Z=n.p+"assets/images/Sandbox3-5a8bc52b630c9d9e994311362f770f67.png"},1404:function(e,t,n){t.Z=n.p+"assets/images/Sandbox5-6de557a26e534dc5e33c981064f75de3.png"}}]);