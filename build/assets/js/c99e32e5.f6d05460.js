"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5893],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),d=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),h=a,m=u["".concat(c,".").concat(h)]||u[h]||l[h]||o;return t?i.createElement(m,r(r({ref:n},p),{},{components:t})):i.createElement(m,r({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2379:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var i=t(7462),a=t(3366),o=(t(7294),t(3905)),r=["components"],s={sidebar_position:4,id:"androidintegrationguide"},c="Integration Guide",d={unversionedId:"androidintegrationguide",id:"version-Android SDK 6.5.0/androidintegrationguide",title:"Integration Guide",description:"We support the following connection methods",source:"@site/android_versioned_docs/version-Android SDK 6.5.0/androidintegrationguide.md",sourceDirName:".",slug:"/androidintegrationguide",permalink:"/android/androidintegrationguide",tags:[],version:"Android SDK 6.5.0",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"androidintegrationguide"},sidebar:"version-Android SDK 6.5.0/tutorialSidebar",previous:{title:"API overview",permalink:"/android/androidapioverview"},next:{title:"Transactions",permalink:"/android/androidtransactions"}},p=[{value:"Android Terminal Native Integration",id:"8",children:[],level:2},{value:"Bluetooth Integration",id:"9",children:[],level:2},{value:"Cloud Integration",id:"10",children:[],level:2}],l={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integration-guide"},"Integration Guide"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"We support the following connection methods")," "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#8"},"Android Payment Terminal"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#9"},"Bluetooth"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#10"},"Cloud")))),(0,o.kt)("h2",{id:"8"},"Android Terminal Native Integration"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Introduction")),(0,o.kt)("p",null,"This tutorial is guiding you through all the required steps to create a basic payment application for Android Payment devices such as PAX and Telpo."),(0,o.kt)("p",null,"The new generation of Handpoint SDK's is designed to make your life easier. Simple and created for humans, it does not require any specific knowledge of the payment industry to be able to start accepting credit/debit card transactions."),(0,o.kt)("p",null,"At Handpoint we take care of securing every transaction so you don\xb4t have to worry about it while creating your application. We encrypt data from the payment terminal to the bank with our point-to-point encryption solution. Our platform is always up to the latest PCI-DSS security requirements."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please, start an operation (sale,refund etc.) ONLY if you have received the ",(0,o.kt)("strong",{parentName:"p"},"InitialisationComplete")," message from the ",(0,o.kt)("strong",{parentName:"p"},"currentTransactionStatus")," method"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Let's start programming!")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Modify the AndroidManifest.xml")),(0,o.kt)("p",null,"We ",(0,o.kt)("strong",{parentName:"p"},"strongly")," recommend you add the following to your main ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"<activity>")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'android:launchMode="singleTask"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. In the gradle.build")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"android {\n    defaultConfig {\n        minSdkVersion 22 //Required to support all PAX & Telpo models\n        targetSdkVersion 29\n        multiDexEnabled true\n    }\n\n    packagingOptions {\n        pickFirst '**/*.so'\n        exclude 'META-INF/*'\n        exclude '**/anim/*.xml'\n        exclude '**/layout/*.xml'\n        exclude 'resources.arsc'\n        exclude 'AndroidManifest.xml'\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Create a Java class")),(0,o.kt)("p",null,"Create a new java class called HandpointDelegate.java and include com.handpoint.api.* as a dependency:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.yourpackage.name;\n\nimport com.handpoint.api.HandpointCredentials;\nimport com.handpoint.api.Hapi;\nimport com.handpoint.api.HapiFactory;\nimport com.handpoint.api.shared.ConnectionMethod;\nimport com.handpoint.api.shared.ConnectionStatus;\nimport com.handpoint.api.shared.Currency;\nimport com.handpoint.api.shared.Device;\nimport com.handpoint.api.shared.Events;\nimport com.handpoint.api.shared.SignatureRequest;\nimport com.handpoint.api.shared.StatusInfo;\nimport com.handpoint.api.shared.TipConfiguration;\nimport com.handpoint.api.shared.TransactionResult;\nimport com.handpoint.api.shared.agreements.Acquirer;\nimport com.handpoint.api.shared.agreements.Credential;\nimport com.handpoint.api.shared.agreements.MerchantAuth;\nimport com.handpoint.api.shared.options.SaleOptions;\n\nimport java.math.BigInteger;\nimport java.util.Arrays;\nimport java.util.List;\n\n//Check all the events available in the Events interface.\n//If you want to subscribe to more events, just add to the list of implemented interfaces.\npublic class HandpointDelegate implements Events.Required, Events.ConnectionStatusChanged, Events.CurrentTransactionStatus {\n\n    private Hapi api;\n\n    public HandpointDelegate(Context context) {\n        initApi(context);\n    }\n\n    public void initApi(Context context) {\n        String sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";\n        HandpointCredentials handpointCredentials = new HandpointCredentials(sharedSecret);\n        this.api = HapiFactory.getAsyncInterface(this, context, handpointCredentials);\n        // The api is now initialized. Yay! we\'ve even set default credentials.\n        // The shared secret is a unique string shared between the payment terminal and your application, it is unique per merchant.\n        // You should replace this default shared secret with the one sent by the Handpoint support team.\n\n        //Since we\'re running inside the terminal, we can create a device ourselves and connect to it\n        Device device = new Device("some name", "address", "", ConnectionMethod.ANDROID_PAYMENT);\n        this.api.connect(device);\n    }\n\n    @Override\n    public void connectionStatusChanged(ConnectionStatus status, Device device) {\n        if (status == ConnectionStatus.Connected) {\n            //Connection Status connected\n\n        }\n    }\n\n    @Override\n    public void deviceDiscoveryFinished(List<Device> devices) {\n        // This event can be safely ignored for a PAX/Telpo integration\n    }\n\n    public boolean pay() {\n        return this.api.sale(new BigInteger("1000"), Currency.GBP);\n        // Let\xb4s start our first payment of 10 pounds\n        // Use the currency of the country in which you will be deploying terminals\n    }\n\n    public boolean payWithOptions() {\n        SaleOptions options = new SaleOptions();\n\n        // Adding tipping\n        TipConfiguration config = new TipConfiguration();\n        //Optionally\n        config.setHeaderName("HEADER");\n        //Optionally\n        config.setFooter("FOOTER");\n        //Optionally\n        config.setEnterAmountEnabled(true);\n        //Optionally\n        config.setSkipEnabled(true);\n        //Optionally\n        config.setTipPercentages(Arrays.asList(5, 10, 15, 20));\n        options.setTipConfiguration(config);\n\n        // Adding Multi MID / Custom merchant Authentication\n        MerchantAuth auth = new MerchantAuth();\n        Credential credential = new Credential();\n        //Optionally\n        credential.setAcquirer(Acquirer.SANDBOX);\n        //Optionally\n        credential.setMid("mid");\n        //Optionally\n        credential.setTid("tid");\n        //Add as many credentials as Acquirers your merchant have agreements with\n        auth.add(credential);\n        options.setMerchantAuth(auth);\n\n        //Add a customer reference\n        options.setCustomerReference("Your customer reference");\n\n        //Enable pin bypass\n        options.setPinBypass(true);\n\n        //Enable signature bypass\n        options.setSignatureBypass(true);\n\n        //Define a budget number\n        options.setBudgetNumber("YOUR_BUDGET_NUMBER");\n\n        return this.api.sale(new BigInteger("1000"),Currency.GBP, options);\n    }\n\n    @Override\n    public void currentTransactionStatus(StatusInfo statusInfo, Device device) {\n        if (statusInfo.getStatus() == StatusInfo.Status.InitialisationComplete) {\n            // The StatusInfo object holds the different transaction statuses like reading card, pin entry, etc.\n            // Let\'s launch a payment\n            pay();\n        }\n    }\n\n    @Override\n    public void signatureRequired(SignatureRequest signatureRequest, Device device) {\n        // This event can be safely ignored for a PAX/Telpo integration\n        // The complete signature capture process is already handled in the sdk, a dialog will prompt the user for a signature if required.\n        // If a signature was entered, it should be printed on the receipts.\n    }\n\n    @Override\n    public void endOfTransaction(TransactionResult transactionResult, Device device) {\n        // The TransactionResult object holds details about the transaction as well as the receipts\n        // Useful information can be accessed through this object like the transaction ID, the amount, etc.\n    }\n\n    @Override\n    public void transactionResultReady(TransactionResult transactionResult, Device device) {\n        // Pending TransactionResult objects will be received through this event if the EndOfTransaction\n        // event was not delivered during the transaction, for example because of a network issue\n        // For this sample app we are not going to implement this event\n    }\n\n    public void disconnect(){\n        this.api.disconnect();\n        //This disconnects the connection\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"We're done!")),(0,o.kt)("p",null,"Sort of. With the above tutorial you've done a basic integration that can perform sale transactions."),(0,o.kt)("p",null,"Explore the rest of the documentation to see more transaction types supported and possibilities."),(0,o.kt)("h2",{id:"9"},"Bluetooth Integration"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Introduction")),(0,o.kt)("p",null,"This tutorial is guiding you through all the required steps to create a basic payment application for Android devices integrated with a HiLite or Hi5 payment terminal."),(0,o.kt)("p",null,"The new generation of Handpoint SDK's is designed to make your life easier. Simple and created for humans, it does not require any specific knowledge of the payment industry to be able to start accepting credit/debit card transactions."),(0,o.kt)("p",null,"At Handpoint we take care of securing every transaction so you don\xb4t have to worry about it while creating your application. We encrypt data from the payment terminal to the bank with our point-to-point encryption solution. Our platform is always up to the latest PCI-DSS security requirements."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please, start an operation (sale,refund etc.) ONLY if you have received the ",(0,o.kt)("strong",{parentName:"p"},"InitialisationComplete")," message from the ",(0,o.kt)("strong",{parentName:"p"},"currentTransactionStatus")," method"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Let's start programming!")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Modify the AndroidManifest.xml")),(0,o.kt)("p",null,"We ",(0,o.kt)("strong",{parentName:"p"},"strongly")," recommend you add the following to your main ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"<activity>")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'android:launchMode="singleTask"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. In the gradle.build")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"android {\n    defaultConfig {\n        minSdkVersion 22 //change the SDK version to the one corresponding to the device you are using\n        targetSdkVersion 29\n        multiDexEnabled true\n    }\n\n    packagingOptions {\n        pickFirst '**/*.so'\n        exclude 'META-INF/*'\n        exclude '**/anim/*.xml'\n        exclude '**/layout/*.xml'\n        exclude 'resources.arsc'\n        exclude 'AndroidManifest.xml'\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Create a Java class")),(0,o.kt)("p",null,"Create a new java class called HandpointDelegate.java and include com.handpoint.api.* as a dependency:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.yourpackage.name;\n\nimport android.content.Context;\n\nimport com.handpoint.api.HandpointCredentials;\nimport com.handpoint.api.Hapi;\nimport com.handpoint.api.HapiFactory;\nimport com.handpoint.api.shared.ConnectionMethod;\nimport com.handpoint.api.shared.ConnectionStatus;\nimport com.handpoint.api.shared.Currency;\nimport com.handpoint.api.shared.Device;\nimport com.handpoint.api.shared.Events;\nimport com.handpoint.api.shared.SignatureRequest;\nimport com.handpoint.api.shared.StatusInfo;\nimport com.handpoint.api.shared.TransactionResult;\n\nimport java.math.BigInteger;\nimport java.util.List;\n\n//Check all the events available in the Events interface.\n//If you want to subscribe to more events, just add to the list of implemented interfaces.\npublic class HandpointDelegate implements Events.Required, Events.ConnectionStatusChanged, Events.CurrentTransactionStatus {\n\n    private Hapi api;\n\n\n    public HandpointDelegate(Context context) {\n        initApi(context);\n    }\n\n    public void initApi(Context context) {\n        String sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";\n        HandpointCredentials handpointCredentials = new HandpointCredentials(sharedSecret);\n        this.api = HapiFactory.getAsyncInterface(this, context, handpointCredentials);\n        // The api is now initialized. Yay! we\'ve even set a shared secret!\n        // The shared secret is a unique string shared between the card reader and your mobile application\n        // It prevents other people to connect to your card reader\n        // You have to replace this default shared secret by the one sent by our support team\n        // The shared secret is unique per merchant (not per terminal)\n\n        //Now we need to find our device and connect to it\n        discoverDevices();\n    }\n\n    // Now  we need to connect to a device to start taking payments.\n    // Let\'s search for them:\n    public void discoverDevices() {\n        this.api.searchDevices(ConnectionMethod.BLUETOOTH);\n        // This triggers the asynchronous search for all the devices around that haven\'t been paired.\n        // You could, alternatively, search for the already paired devices\n        // List<Device> devices = this.api.getPairedDevices(ConnectionMethod.BLUETOOTH);\n        // Now:\n        // selectDeviceAndConnect(devices);\n        // You\'ll receive the devices found through deviceDiscoveryFinished method.\n        // See: https://handpoint.com/docs/device/Android/#elem_eventsDeviceDiscoveryFinished\n    }\n\n    @Override\n    public void deviceDiscoveryFinished(List<Device> devices) {\n        selectDeviceAndConnect(devices);\n    }\n\n    private void selectDeviceAndConnect(List<Device> devices) {\n        for (Device device : devices) {\n            if (device.getName() != null) {\n                // All the devices here are datecs devices\n                if (/* Fill your logic here */) {\n                    this.api.connect(device);\n                    // Now take a look at connectionStatusChanged method\n                    break;\n                }\n            }\n        }\n    }\n\n    //Potentially, if you know the MAC address of the device you want to connect to, you can skip the search and do it this way\n    public void connect() {\n        Device device = new Device("PP0513901435", "68:AA:D2:00:D5:27", "", ConnectionMethod.BLUETOOTH);\n        //The Address always has to be written in UPPER CASE\n        //new Device("name", "address", "port", ConnectionMethod.BLUETOOTH);\n        this.api.connect(device);\n    }\n\n    @Override\n    public void connectionStatusChanged(ConnectionStatus status, Device device) {\n        if (status == ConnectionStatus.Connected) {\n            // Connected to device\n        }\n    }\n\n    public boolean pay() {\n        return this.api.sale(new BigInteger("1000"), Currency.GBP);\n        // Let\xb4s start our first payment of 10 pounds\n    }\n\n    @Override\n    public void currentTransactionStatus(StatusInfo statusInfo, Device device) {\n        if (statusInfo.getStatus() == StatusInfo.Status.InitialisationComplete) {\n            // The StatusInfo object holds the different transaction statuses like reading card, pin entry, etc.\n            // Let\'s launch a payment\n            pay();\n        }\n    }\n\n    @Override\n    public void signatureRequired(SignatureRequest signatureRequest, Device device) {\n        // You\'ll be notified here if a sale process needs a signature verification\n        // A signature verification is needed if the cardholder uses an MSR or a chip & signature card\n        // This method will not be invoked if a transaction is made with a Chip & PIN card\n        // At this step, you are supposed to display the merchant receipt to the cardholder on the android device\n        // The cardholder must have the possibility to accept or decline the transaction\n        // If the cardholder clicks on decline, the transaction is VOID\n        // If the cardholder clicks on accept he is then asked to sign electronically the receipt\n        this.api.signatureResult(true);\n        // This line means that the cardholder ALWAYS accepts to sign the receipt\n        // For this sample app we are not going to implement the whole signature process\n    }\n\n    @Override\n    public void endOfTransaction(TransactionResult transactionResult, Device device) {\n        // The object TransactionResult stores the different receipts\n        // Other information can be accessed through this object like the transaction ID, the amount...\n    }\n\n    @Override\n    public void transactionResultReady(TransactionResult transactionResult, Device device) {\n        // Pending TransactionResult objects will be received through this event if the EndOfTransaction\n        // event was not delivered during the transaction, for example because of a network issue.\n        // For this sample app we are not going to implement this event.\n    }\n\n    public void disconnect() {\n        this.api.disconnect();\n        //This disconnects the connection\n    }\n}\n                \n\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Note about reconnections:")," By default, the SDK will automatically reconnect to the last known device when the connection is lost.If you want to change this behaviour set the property Settings.AutomaticReconnection in HapiManager to ",(0,o.kt)("strong",{parentName:"p"},"false"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"We're done!")),(0,o.kt)("p",null,"Sort of. With the above tutorial you've done a basic integration that can perform sale transactions."),(0,o.kt)("p",null,"Explore the rest of the documentation to see more transaction types supported and possibilities."),(0,o.kt)("h2",{id:"10"},"Cloud Integration"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Introduction")),(0,o.kt)("p",null,"This tutorial is guiding you through all the required steps to integrate with a Handpoint (PAX, Telpo or Datecs) payment terminal, from your Android application, through the internet. CLOUD will be the ConnectionMethod of choice for this guide. With this connection method you become the client in a client - server connection."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There needs to be another app with one of our SDKs that is active and keeping the connection open."))),(0,o.kt)("p",null,"The new generation of Handpoint SDK's is designed to make your life easier. Simple and created for humans, it does not require any specific knowledge of the payment industry to be able to start accepting credit/debit card transactions."),(0,o.kt)("p",null,"At Handpoint we take care of securing every transaction so you don\xb4t have to worry about it while creating your application. We encrypt data from the payment terminal to the bank with our point-to-point encryption solution. The platform is always up to the latest PCI-DSS security requirements."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please, start an operation (sale,refund etc.) ONLY if you have received the ",(0,o.kt)("strong",{parentName:"p"},"InitialisationComplete")," message from the ",(0,o.kt)("strong",{parentName:"p"},"currentTransactionStatus")," method"))),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Let's start programming!")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. In the gradle.build")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"android {\n    defaultConfig {\n        minSdkVersion 22 //Required to support all PAX & Telpo models\n        targetSdkVersion 29\n        multiDexEnabled true\n    }\n\n  packagingOptions {\n    pickFirst '**/*.so'\n    exclude 'META-INF/*'\n    exclude '**/anim/*.xml'\n    exclude '**/layout/*.xml'\n    exclude 'resources.arsc'\n    exclude 'AndroidManifest.xml'\n}\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Create a Java class")),(0,o.kt)("p",null,"Create a new java class called HandpointDelegate.java and include com.handpoint.api.* as a dependency:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.yourpackage.name;\n\nimport android.content.Context;\n\nimport com.handpoint.api.HandpointCredentials;\nimport com.handpoint.api.Hapi;\nimport com.handpoint.api.HapiFactory;\nimport com.handpoint.api.shared.ConnectionMethod;\nimport com.handpoint.api.shared.ConnectionStatus;\nimport com.handpoint.api.shared.Currency;\nimport com.handpoint.api.shared.Device;\nimport com.handpoint.api.shared.Events;\nimport com.handpoint.api.shared.SignatureRequest;\nimport com.handpoint.api.shared.StatusInfo;\nimport com.handpoint.api.shared.TipConfiguration;\nimport com.handpoint.api.shared.TransactionResult;\nimport com.handpoint.api.shared.agreements.Acquirer;\nimport com.handpoint.api.shared.agreements.Credential;\nimport com.handpoint.api.shared.agreements.MerchantAuth;\nimport com.handpoint.api.shared.options.SaleOptions;\n\nimport java.math.BigInteger;\nimport java.util.Arrays;\nimport java.util.List;\n\n//Check all the events available in the Events interface.\n//If you want to subscribe to more events, just add to the list of implemented interfaces.\npublic class HandpointDelegate implements Events.Required, Events.ConnectionStatusChanged, Events.CurrentTransactionStatus {\n\n    private Hapi api;\n\n    public HandpointDelegate(Context context) {\n        initApi(context);\n    }\n\n    public void initApi(Context context) {\n        String sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";\n        String merchantApiKey = "This-is-my-api-key-provided-by-Handpoint";\n        HandpointCredentials handpointCredentials = new HandpointCredentials(sharedSecret, merchantApiKey);\n        this.api = HapiFactory.getAsyncInterface(this, context, handpointCredentials);\n        // The api is now initialized. Yay! we\'ve even set default credentials.\n        // The shared secret is a unique string shared between the payment terminal and your application, it is a free field.\n        // The Api key is a unique key per merchant used to authenticate the terminal against the Cloud.\n        // You should replace the API key with the one sent by the Handpoint support team.\n        // Now we need to find our device and connect to it.\n        discoverDevices();\n    }\n\n    // Now  we need to connect to a device to start taking payments.\n    // Let\'s search for them:\n    public void discoverDevices(){\n        this.api.searchDevices(ConnectionMethod.CLOUD);\n        // This triggers the asynchronous search for all the devices around that haven\'t been paired.\n\n        // You could, alternatively, search for the already paired devices\n        // List<Device> devices = this.api.getPairedDevices(ConnectionMethod.CLOUD);\n        // Now:\n        // selectDeviceAndConnect(devices);\n        // You\'ll receive the devices found through the deviceDiscoveryFinished method.\n        // See: https://handpoint.com/docs/device/Android/#elem_eventsDeviceDiscoveryFinished\n    }\n\n    @Override\n    public void deviceDiscoveryFinished(List<Device> devices) {\n        selectDeviceAndConnect(devices);\n    }\n\n    private void selectDeviceAndConnect(List<Device> devices) {\n        for (Device device : devices) {\n            if (device.getName() != null){\n                // All the devices here are all of the merchant\'s devices\n                if (/* Fill your logic here */) {\n                    this.api.connect(device);\n                    // Now take a look at connectionStatusChanged method\n                    break;\n                }\n            }\n        }\n    }\n\n    //Potentially, if you know the Serial number and model of the device you want to connect to, you can skip the search and do it this way\n    public void connect(){\n        Device device = new Device("CloudDevice", "9822032398-PAXA920", "", ConnectionMethod.CLOUD);\n        //new Device("name", "address", "port", ConnectionMethod.CLOUD);\n        this.api.connect(device);\n    }\n\n    @Override\n    public void connectionStatusChanged(ConnectionStatus status, Device device) {\n        if (status == ConnectionStatus.Connected) {\n            // Let\'s launch a payment\n            pay();\n        }\n    }\n\n    public boolean pay() {\n        return this.api.sale(new BigInteger("1000"), Currency.GBP);\n        // Let\xb4s start our first payment of 10 pounds\n    }\n\n    public boolean payWithOptions() {\n        SaleOptions options = new SaleOptions();\n\n        // Adding tipping\n        TipConfiguration config = new TipConfiguration();\n        //Optionally\n        config.setHeaderName("HEADER");\n        //Optionally\n        config.setFooter("FOOTER");\n        //Optionally\n        config.setEnterAmountEnabled(true);\n        //Optionally\n        config.setSkipEnabled(true);\n        //Optionally\n        config.setTipPercentages(Arrays.asList(5, 10, 15, 20));\n        options.setTipConfiguration(config);\n\n        // Adding Multi MID / Custom merchant Authentication\n        MerchantAuth auth = new MerchantAuth();\n        Credential credential = new Credential();\n        //Optionally\n        credential.setAcquirer(Acquirer.SANDBOX);\n        //Optionally\n        credential.setMid("mid");\n        //Optionally\n        credential.setTid("tid");\n        //Add as many credentials as Acquirers your merchant have agreements with\n        auth.add(credential);\n        options.setMerchantAuth(auth);\n\n        //Add a customer reference\n        options.setCustomerReference("Your customer reference");\n\n        //Enable pin bypass\n        options.setPinBypass(true);\n\n        //Enable signature bypass\n        options.setSignatureBypass(true);\n\n        //Define a budget number\n        options.setBudgetNumber("YOUR_BUDGET_NUMBER");\n\n        return this.api.sale(new BigInteger("1000"),Currency.GBP, options);\n    }\n\n    @Override\n    public void currentTransactionStatus(StatusInfo statusInfo, Device device) {\n        if (statusInfo.getStatus() == StatusInfo.Status.InitialisationComplete) {\n            // The StatusInfo object holds the different transaction statuses like reading card, pin entry, etc.\n        }\n    }\n\n    @Override\n    public void signatureRequired(SignatureRequest signatureRequest, Device device) {\n        // This event can be safely ignored for a PAX/Telpo integration. The complete signature capture process\n        // is already handled in the sdk, a dialog will prompt the user for a signature if required.\n        // If a signature was entered, it should be printed on the receipts.\n\n        //For Datecs integrations:\n        // You\'ll be notified here if a sale process needs a signature verification\n        // A signature verification is needed if the cardholder uses an MSR or a chip & signature card\n        // This method will not be invoked if a transaction is made with a Chip & PIN card\n        // At this step, you are supposed to display the merchant receipt to the cardholder on the android device\n        // The cardholder must have the possibility to accept or decline the transaction\n        // If the cardholder clicks on decline, the transaction is VOID\n        // If the cardholder clicks on accept he is then asked to sign electronically the receipt\n        this.api.signatureResult(true);\n        // This line means that the cardholder ALWAYS accepts to sign the receipt\n        // For this sample app we are not going to implement the whole signature process\n    }\n\n    @Override\n    public void endOfTransaction(TransactionResult transactionResult, Device device) {\n        // The object TransactionResult stores the different receipts\n        // Other information can be accessed through this object like the transaction ID, the amount...\n    }\n\n    @Override\n    public void transactionResultReady(TransactionResult transactionResult, Device device) {\n        // Pending TransactionResult objects will be received through this event if the EndOfTransaction\n        // event was not delivered during the transaction, for example because of a network issue.\n        // For this sample app we are not going to implement this event.\n    }\n\n    public void disconnect(){\n        this.api.disconnect();\n        //This disconnects the connection\n    }\n\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"We're done!")),(0,o.kt)("p",null,"Sort of. With the above tutorial you've done a basic integration that can perform sale transactions."),(0,o.kt)("p",null,"Explore the rest of the documentation to see more transaction types supported and possibilities."))}u.isMDXComponent=!0}}]);