---
sidebar_position: 4
id: androidintegrationguide
---


# Integration Guides


**The SDK supports the following connection methods:** 

1. **[Android Native (PAX/Telpo)](#8)**
2. **[Bluetooth (HiLite)](#9)**

## Android Native Integration (PAX/Telpo) {#8}

 **Introduction**

This tutorial is guiding you through all the required steps to create a basic payment application for Android Payment devices such as PAX and Telpo.

The new generation of Handpoint SDK's is designed to make your life easier. Simple and created for humans, it does not require any specific knowledge of the payment industry to be able to start accepting card payments.

At Handpoint we take care of securing every transaction so you don´t have to worry about it while creating your application. We encrypt data from the payment terminal to the bank with our point-to-point encryption solution. Our platform is always up to the latest PCI security requirements.

:::warning
Please, start an operation (sale,refund etc.) ONLY if you have received the **InitialisationComplete** message from the **currentTransactionStatus** method
:::

**Let's start programming!**

**1. Modify the AndroidManifest.xml**

We **strongly** recommend you add the following to your `AndroidManifest.xml`:

- Inside the tag **`<application>`** -> `android:extractNativeLibs:"true"`

```xml
<application
    android:extractNativeLibs:"true"
    ...
    ...
    ...>    
</application>   
```

- Inside the tag **`<activity>`** -> `android:launchMode="singleTask"`:

```xml
<activity android:name=".MainActivity"
    android:launchMode="singleTask">
    ...
    ...
</activity>    
```

**2. SDK distribution** 

The Handpoint Android SDK is available on Maven central as well as the Handpoint internal Nexus server. Maven central contains the **production builds** while Nexus contains **development snapshots** of the SDK.
- If you are integrating your software with a **PAX debug terminal** you will need to get the SDK from **Nexus**. 
- If you are integrating your software with a **PAX production terminal** you will need to get the SDK from **Maven Central**. 
- If you are integrating your software with an HiLite terminal you will need to get the SDK from **Maven Central**. 


The Handpoint Android SDK is compatible with Android version 5.1.1 [(API level 22)](https://developer.android.com/about/versions/lollipop/android-5.1) and up.
The latest version is compiled with java **1.8**

**Gradle Settings**

For production terminals (Maven):
```groovy
 //Handpoint Production SDK (Production terminals)
 implementation 'com.handpoint.api:sdk:7.x.x'
```
In the `gradle.build` (Top-level build file) for production terminals (Maven):

  ```groovy
        allprojects {     //Handpoint Production SDK (Production terminals)
          repositories {
             google()
             mavenCentral()
             maven { url 'https://jitpack.io' }
              }
        }
  ```

For debug terminals (Nexus):  
```groovy 
 //Handpoint Staging/Development SDK (Debug terminals)
 implementation 'com.handpoint.api:sdk:7.x.x-RC.x-SNAPSHOT'
```
   In the `gradle.build` (Top-level build file) for debug terminals (Nexus):

  ```groovy
        allprojects {   //Handpoint Staging/Development SDK (Debug terminals)
          repositories {
            google()
            mavenCentral()
            maven {
              name = "Handpoint Nexus"
              url = uri("urlProvided") //URL provided by Handpoint once you order a dev kit 
              credentials { //Credentials provided by Handpoint once you order a dev kit 
                username = 'usernameProvided' 
                password = 'passwordProvided' 
             }
            }
          }
        }
  ```

- Some considerations to keep in mind when using gradle (for both production and debug terminals)

 In the `gradle.build` (app module) add the following packaging options:

```groovy
android {
    defaultConfig {
        minSdkVersion 22 //Required to support all PAX & Telpo models
        targetSdkVersion 29 //If using version targetSdkVersion 30 or higher, please note that you will need 
                            //to add android:exported="true" or android:exported="false" in your activities
        multiDexEnabled true
        ndk {
            abiFilters "armeabi", "armeabi-v7a", "x86", "mips"
        }
    }

    packagingOptions {
        pickFirst '**/*.so'
        exclude 'META-INF/*'
        exclude '**/anim/*.xml'
        exclude '**/layout/*.xml'
        exclude 'resources.arsc'
        exclude 'AndroidManifest.xml'
        exclude '**/animator/*.xml'
    }
 }
```

**Maven Settings**

For production terminals: 

```xml
    <dependency>
      <groupId>com.handpoint.api</groupId>
      <artifactId>sdk</artifactId>
      <version>[6.0.0,7.0.0)</version>
      <type>aar</type>
    </dependency>
```
:::tip
If using AndroidX you will need to switch the following flags to true:<br></br> 
android.enableJetifier=true<br></br> 
android.useAndroidX=true
:::


**3. Create a Java class**

Create a new java class called HandpointDelegate.java and include com.handpoint.api.* as a dependency:

```java
package com.yourpackage.name;

import com.handpoint.api.HandpointCredentials;
import com.handpoint.api.Hapi;
import com.handpoint.api.HapiFactory;
import com.handpoint.api.shared.ConnectionMethod;
import com.handpoint.api.shared.ConnectionStatus;
import com.handpoint.api.shared.Currency;
import com.handpoint.api.shared.Device;
import com.handpoint.api.shared.Events;
import com.handpoint.api.shared.SignatureRequest;
import com.handpoint.api.shared.StatusInfo;
import com.handpoint.api.shared.TipConfiguration;
import com.handpoint.api.shared.TransactionResult;
import com.handpoint.api.shared.agreements.Acquirer;
import com.handpoint.api.shared.agreements.Credential;
import com.handpoint.api.shared.agreements.MerchantAuth;
import com.handpoint.api.shared.options.SaleOptions;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.List;

//Check all the events available in the Events interface.
//If you want to subscribe to more events, just add to the list of implemented interfaces.
public class HandpointDelegate implements Events.SmartposRequired, Events.CurrentTransactionStatus, Events.ConnectionStatusChanged, Events.EndOfTransaction, Events.TransactionResultReady {

    private Hapi api;

    public HandpointDelegate(Context context) {
        initApi(context);
    }

    public void initApi(Context context) {
        String sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";
        HandpointCredentials handpointCredentials = new HandpointCredentials(sharedSecret);
        this.api = HapiFactory.getAsyncInterface(this, context, handpointCredentials);
        // The api is now initialized. Yay! we've even set default credentials.
        // The shared secret is a unique string shared between the payment terminal and your application, it is unique per merchant.
        // You should replace this default shared secret with the one sent by the Handpoint support team.

        //Since we're running inside the terminal, we can create a device ourselves and connect to it
        Device device = new Device("some name", "address", "", ConnectionMethod.ANDROID_PAYMENT);
        this.api.connect(device);
    }

    @Override
    public void connectionStatusChanged(ConnectionStatus status, Device device) {
        if (status == ConnectionStatus.Connected) {
            //Connection Status connected

        }
    }

    public OperationStartResult pay() {
        return this.api.sale(new BigInteger("1000"), Currency.GBP);
        // Let´s start our first payment of 10.00 pounds
        // Use the currency of the country in which you will be deploying terminals
    }

    public OperationStartResult payWithOptions() {
        SaleOptions options = new SaleOptions();

        // Adding tipping
        TipConfiguration config = new TipConfiguration();
        //Optionally
        config.setHeaderName("HEADER");
        //Optionally
        config.setFooter("FOOTER");
        //Optionally
        config.setEnterAmountEnabled(true);
        //Optionally
        config.setSkipEnabled(true);
        //Optionally
        config.setTipPercentages(Arrays.asList(5, 10, 15, 20));
        options.setTipConfiguration(config);

        // Adding Multi MID / Custom merchant Authentication
        MerchantAuth auth = new MerchantAuth();
        Credential credential = new Credential();
        //Optionally
        credential.setAcquirer(Acquirer.SANDBOX);
        //Optionally
        credential.setMid("mid");
        //Optionally
        credential.setTid("tid");
        //Add as many credentials as Acquirers your merchant have agreements with
        auth.add(credential);
        options.setMerchantAuth(auth);

        //Add a customer reference
        options.setCustomerReference("Your customer reference");

        //Enable pin bypass
        options.setPinBypass(true);

        //Enable signature bypass
        options.setSignatureBypass(true);

        //Define a budget number
        options.setBudgetNumber("YOUR_BUDGET_NUMBER");

        return this.api.sale(new BigInteger("1000"),Currency.GBP, options);
        // Let´s start our first payment of 10.00 pounds
        // Use the currency of the country in which you will be deploying terminals
    }

    @Override
    public void currentTransactionStatus(StatusInfo statusInfo, Device device) {
        if (statusInfo.getStatus() == StatusInfo.Status.InitialisationComplete) {
            // The StatusInfo object holds the different transaction statuses like reading card, pin entry, etc.
            // Let's launch a payment
            pay();
        }
    }

    @Override
    public void endOfTransaction(TransactionResult transactionResult, Device device) {
        // The TransactionResult object holds details about the transaction as well as the receipts
        // Useful information can be accessed through this object like the transaction ID, the amount, etc.
    }

    @Override
    public void transactionResultReady(TransactionResult transactionResult, Device device) {
        // Pending TransactionResult objects will be received through this event if the EndOfTransaction
        // event was not delivered during the transaction, for example because of a network issue
        // For this sample app we are not going to implement this event
    }

    public void disconnect(){
        this.api.disconnect();
        //This disconnects the connection
    }
}
```

**We're done!**

Sort of. With the above tutorial you've done a basic integration that can perform sale transactions.

Explore the rest of the documentation to see more transaction types supported and possibilities.

## Bluetooth Integration (HiLite) {#9}

 **Introduction**

This tutorial is guiding you through all the required steps to create a basic payment application for Android devices integrated with an HiLite payment terminal.

The new generation of Handpoint SDK's is designed to make your life easier. Simple and created for humans, it does not require any specific knowledge of the payment industry to be able to start accepting credit/debit card transactions.

At Handpoint we take care of securing every transaction so you don´t have to worry about it while creating your application. We encrypt data from the payment terminal to the bank with our point-to-point encryption solution. Our platform is always up to the latest PCI-DSS security requirements.

:::warning
Please, start an operation (sale,refund etc.) ONLY if you have received the **InitialisationComplete** message from the **currentTransactionStatus** method
:::



**Let's start programming!**

**1. Modify the AndroidManifest.xml**

We **strongly** recommend you add the following to your `AndroidManifest.xml`:

- Inside the tag **`<application>`** -> `android:extractNativeLibs:"true"`

```xml
<application
    android:extractNativeLibs:"true"
    ...
    ...
    ...>    
</application>   
```

- Inside the tag **`<activity>`** -> `android:launchMode="singleTask"`:

```xml
<activity android:name=".MainActivity"
    android:launchMode="singleTask">
    ...
    ...
</activity>    
```

**2.1 In the gradle.build (app module)** 

```groovy
android {
	defaultConfig {
		minSdkVersion 22 //Required to support all devices
		targetSdkVersion 29 //If using version targetSdkVersion 30 or higher, please note that you will need 
                            //to add android:exported="true" or android:exported="false" in your activities
		multiDexEnabled true
	}

    packagingOptions {
        pickFirst '**/*.so'
        exclude 'META-INF/*'
        exclude '**/anim/*.xml'
        exclude '**/layout/*.xml'
        exclude 'resources.arsc'
        exclude 'AndroidManifest.xml'
        exclude '**/animator/*.xml'
    }
}
````
```groovy
dependencies {

    //Handpoint Production SDK (Production devices)
    implementation 'com.handpoint.api:sdk:7.x.x'
}
```


**2.2 In the gradle.build (Top-level build file)** 

```groovy
allprojects {    
    repositories {
        google()
        mavenCentral()
        maven { url 'https://jitpack.io' }
    }
}
```

:::tip
During the build process, a DEX error may appear.

To be able to build, we recommend adding the following lines to the `gradle.properties` file:

```groovy
org.gradle.jvmargs = -Xmx4096m -XX:MaxPermSize=4096m -XX:+HeapDumpOnOutOfMemoryError
org.gradle.daemon = true
org.gradle.parallel = true
org.gradle.configureondemand = true
````

:::


**3. Create a Java class**

Create a new java class called HandpointDelegate.java and include com.handpoint.api.* as a dependency:

```java
package com.yourpackage.name;

import android.content.Context;

import com.handpoint.api.HandpointCredentials;
import com.handpoint.api.Hapi;
import com.handpoint.api.HapiFactory;
import com.handpoint.api.shared.ConnectionMethod;
import com.handpoint.api.shared.ConnectionStatus;
import com.handpoint.api.shared.Currency;
import com.handpoint.api.shared.Device;
import com.handpoint.api.shared.Events;
import com.handpoint.api.shared.SignatureRequest;
import com.handpoint.api.shared.StatusInfo;
import com.handpoint.api.shared.TransactionResult;

import java.math.BigInteger;
import java.util.List;

//Check all the events available in the Events interface.
//If you want to subscribe to more events, just add to the list of implemented interfaces.
public class HandpointDelegate implements Events.MposRequired, Events.ConnectionStatusChanged, Events.CurrentTransactionStatus, Events.SignatureRequired, Events.EndOfTransaction, Events.DeviceDiscoveryFinished, Events.TransactionResultReady {

    private Hapi api;


    public HandpointDelegate(Context context) {
        initApi(context);
    }

    public void initApi(Context context) {
        String sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";
        HandpointCredentials handpointCredentials = new HandpointCredentials(sharedSecret);
        this.api = HapiFactory.getAsyncInterface(this, context, handpointCredentials);
        // The api is now initialized. Yay! we've even set a shared secret!
        // The shared secret is a unique string shared between the card reader and your mobile application
        // It prevents other people to connect to your card reader
        // You have to replace this default shared secret by the one sent by our support team
        // The shared secret is unique per merchant (not per terminal)

        //Now we need to find our device and connect to it
        discoverDevices();
    }

    // Now  we need to connect to a device to start taking payments.
    // Let's search for them:
    public void discoverDevices() {
        this.api.searchDevices(ConnectionMethod.BLUETOOTH);
        // This triggers the asynchronous search for all the devices around that haven't been paired.
        // You could, alternatively, search for the already paired devices
        // List<Device> devices = this.api.getPairedDevices(ConnectionMethod.BLUETOOTH);
        // Now:
        // selectDeviceAndConnect(devices);
        // You'll receive the devices found through deviceDiscoveryFinished method.
        // See: https://handpoint.com/docs/device/Android/#elem_eventsDeviceDiscoveryFinished
    }

    @Override
    public void deviceDiscoveryFinished(List<Device> devices) {
        selectDeviceAndConnect(devices);
    }

    private void selectDeviceAndConnect(List<Device> devices) {
        for (Device device : devices) {
            if (device.getName() != null) {
                // All the devices here are datecs devices
                if (/* Fill your logic here */) {
                    this.api.connect(device);
                    // Now take a look at connectionStatusChanged method
                    break;
                }
            }
        }
    }

    //Potentially, if you know the MAC address of the device you want to connect to, you can skip the search and do it this way
    public void connect() {
        Device device = new Device("PP0513901435", "68:AA:D2:00:D5:27", "", ConnectionMethod.BLUETOOTH);
        //The Address always has to be written in UPPER CASE
        //new Device("name", "address", "port", ConnectionMethod.BLUETOOTH);
        this.api.connect(device);
    }

    @Override
    public void connectionStatusChanged(ConnectionStatus status, Device device) {
        if (status == ConnectionStatus.Connected) {
            // Connected to device
        }
    }

    public OperationStartResult pay() {
        return this.api.sale(new BigInteger("1000"), Currency.GBP);
        // Let´s start our first payment of 10.00 pounds
        // Use the currency of the country in which you will be deploying terminals
    }

    @Override
    public void currentTransactionStatus(StatusInfo statusInfo, Device device) {
        if (statusInfo.getStatus() == StatusInfo.Status.InitialisationComplete) {
            // The StatusInfo object holds the different transaction statuses like reading card, pin entry, etc.
            // Let's launch a payment
            pay();
        }
    }

    @Override
    public void signatureRequired(SignatureRequest signatureRequest, Device device) {
        // You'll be notified here if a sale process needs a signature verification
        // A signature verification is needed if the cardholder uses an MSR or a chip & signature card
        // This method will not be invoked if a transaction is made with a Chip & PIN card
        // At this step, you are supposed to display the merchant receipt to the cardholder on the android device
        // The cardholder must have the possibility to accept or decline the transaction
        // If the cardholder clicks on decline, the transaction is VOID
        // If the cardholder clicks on accept he is then asked to sign electronically the receipt
        this.api.signatureResult(true);
        // This line means that the cardholder ALWAYS accepts to sign the receipt
        // For this sample app we are not going to implement the whole signature process
    }

    @Override
    public void endOfTransaction(TransactionResult transactionResult, Device device) {
        // The object TransactionResult stores the different receipts
        // Other information can be accessed through this object like the transaction ID, the amount...
    }

    @Override
    public void transactionResultReady(TransactionResult transactionResult, Device device) {
        // Pending TransactionResult objects will be received through this event if the EndOfTransaction
        // event was not delivered during the transaction, for example because of a network issue.
        // For this sample app we are not going to implement this event.
    }

    public void disconnect() {
        this.api.disconnect();
        //This disconnects the connection
    }
}
                

```

:::info
**Note about reconnections:** By default, the SDK will automatically reconnect to the last known device when the connection is lost.If you want to change this behaviour set the property Settings.AutomaticReconnection in HapiManager to **false**.
:::

**We're done!**

Sort of. With the above tutorial you've done a basic integration that can perform sale transactions.

Explore the rest of the documentation to see more transaction types supported and possibilities.