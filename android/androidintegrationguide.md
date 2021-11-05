---
sidebar_position: 4
id: androidintegrationguide
---


# Integration Guide


**We support the following connection methods** 

1. **[Android Payment Terminal](#8)**
2. **[Bluetooth](#9)**
3. **[Cloud](#10)**

## Android Terminal Native Integration{#8}

 **Introduction**

This tutorial is guiding you through all the required steps to create a basic payment application for Android Payment devices such as PAX and Telpo.

The new generation of Handpoint SDK's is designed to make your life easier. Simple and created for humans, it does not require any specific knowledge of the payment industry to be able to start accepting credit/debit card transactions.

At Handpoint we take care of securing every transaction so you don´t have to worry about it while creating your application. We encrypt data from the payment terminal to the bank with our point-to-point encryption solution. Our platform is always up to the latest PCI-DSS security requirements.

**Let's start programming!**

**1. Modify the AndroidManifest.xml**

We **strongly** recommend you add the following to your main **`<activity>`**:

```groovy
android:launchMode="singleTask"
```

**2. In the gradle.build**

```groovy
android {
	defaultConfig {
		minSdkVersion 22 //Required to support all PAX & Telpo models
		targetSdkVersion 29
		multiDexEnabled true
	}

    packagingOptions {
        pickFirst '**/*.so'
        exclude 'META-INF/*'
        exclude '**/anim/*.xml'
        exclude '**/layout/*.xml'
        exclude 'resources.arsc'
        exclude 'AndroidManifest.xml'
    }
}
```

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
public class HandpointDelegate implements Events.Required, Events.ConnectionStatusChanged, Events.CurrentTransactionStatus {

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

    @Override
    public void deviceDiscoveryFinished(List<Device> devices) {
        // This event can be safely ignored for a PAX/Telpo integration
    }

    public boolean pay() {
        return this.api.sale(new BigInteger("1000"), Currency.GBP);
        // Let´s start our first payment of 10 pounds
        // Use the currency of the country in which you will be deploying terminals
    }

    public boolean payWithOptions() {
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
        // This event can be safely ignored for a PAX/Telpo integration
        // The complete signature capture process is already handled in the sdk, a dialog will prompt the user for a signature if required.
        // If a signature was entered, it should be printed on the receipts.
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

## Bluetooth Integration{#9}

 **Introduction**

This tutorial is guiding you through all the required steps to create a basic payment application for Android devices integrated with a HiLite or Hi5 payment terminal.

The new generation of Handpoint SDK's is designed to make your life easier. Simple and created for humans, it does not require any specific knowledge of the payment industry to be able to start accepting credit/debit card transactions.

At Handpoint we take care of securing every transaction so you don´t have to worry about it while creating your application. We encrypt data from the payment terminal to the bank with our point-to-point encryption solution. Our platform is always up to the latest PCI-DSS security requirements.

**Let's start programming!**

**1. Modify the AndroidManifest.xml**

We **strongly** recommend you add the following to your main **`<activity>`**:

```groovy
android:launchMode="singleTask"
```

**2. In the gradle.build**

```groovy
android {
	defaultConfig {
		minSdkVersion 22 //change the SDK version to the one corresponding to the device you are using
		targetSdkVersion 29
		multiDexEnabled true
	}

    packagingOptions {
        pickFirst '**/*.so'
        exclude 'META-INF/*'
        exclude '**/anim/*.xml'
        exclude '**/layout/*.xml'
        exclude 'resources.arsc'
        exclude 'AndroidManifest.xml'
    }
}
```

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
import com.handpoint.api.shared.TransactionResult;

import java.math.BigInteger;
import java.util.List;

//Check all the events available in the Events interface.
//If you want to subscribe to more events, just add to the list of implemented interfaces.
public class HandpointDelegate implements Events.Required, Events.ConnectionStatusChanged {

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
            // Let's launch a payment
            pay();
        }
    }

    public boolean pay() {
        return this.api.sale(new BigInteger("1000"), Currency.GBP);
        // Let´s start our first payment of 10 pounds
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

**Note about reconnections:** By default, the SDK will automatically reconnect to the last known device when the connection is lost.If you want to change this behaviour set the property Settings.AutomaticReconnection in HapiManager to **false**.

**We're done!**

Sort of. With the above tutorial you've done a basic integration that can perform sale transactions.

Explore the rest of the documentation to see more transaction types supported and possibilities.

## Cloud Integration{#10}

 **Introduction**

This tutorial is guiding you through all the required steps to integrate with a Handpoint (PAX, Telpo or Datecs) payment terminal, from your Android application, through the internet. CLOUD will be the ConnectionMethod of choice for this guide. With this connection method you become the client in a client - server connection.

**There needs to be another app with one of our SDKs that is active and keeping the connection open.**

The new generation of Handpoint SDK's is designed to make your life easier. Simple and created for humans, it does not require any specific knowledge of the payment industry to be able to start accepting credit/debit card transactions.

At Handpoint we take care of securing every transaction so you don´t have to worry about it while creating your application. We encrypt data from the payment terminal to the bank with our point-to-point encryption solution. The platform is always up to the latest PCI-DSS security requirements.

 **Let's start programming!**

**1. In the gradle.build**

```groovy
android {
	defaultConfig {
		minSdkVersion 22 //Required to support all PAX & Telpo models
		targetSdkVersion 29
		multiDexEnabled true
	}

  packagingOptions {
    pickFirst '**/*.so'
    exclude 'META-INF/*'
    exclude '**/anim/*.xml'
    exclude '**/layout/*.xml'
    exclude 'resources.arsc'
    exclude 'AndroidManifest.xml'
}
}
```

**2. Create a Java class**

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
public class HandpointDelegate implements Events.Required, Events.ConnectionStatusChanged, Events.CurrentTransactionStatus {

    private Hapi api;

    public HandpointDelegate(Context context) {
        initApi(context);
    }

    public void initApi(Context context) {
        String sharedSecret = "0102030405060708091011121314151617181920212223242526272829303132";
        String merchantApiKey = "This-is-my-api-key-provided-by-Handpoint";
        HandpointCredentials handpointCredentials = new HandpointCredentials(sharedSecret, merchantApiKey);
        this.api = HapiFactory.getAsyncInterface(this, context, handpointCredentials);
        // The api is now initialized. Yay! we've even set default credentials.
        // The shared secret is a unique string shared between the payment terminal and your application, it is a free field.
        // The Api key is a unique key per merchant used to authenticate the terminal against the Cloud.
        // You should replace the API key with the one sent by the Handpoint support team.
        // Now we need to find our device and connect to it.
        discoverDevices();
    }

    // Now  we need to connect to a device to start taking payments.
    // Let's search for them:
    public void discoverDevices(){
        this.api.searchDevices(ConnectionMethod.CLOUD);
        // This triggers the asynchronous search for all the devices around that haven't been paired.

        // You could, alternatively, search for the already paired devices
        // List<Device> devices = this.api.getPairedDevices(ConnectionMethod.CLOUD);
        // Now:
        // selectDeviceAndConnect(devices);
        // You'll receive the devices found through the deviceDiscoveryFinished method.
        // See: https://handpoint.com/docs/device/Android/#elem_eventsDeviceDiscoveryFinished
    }

    @Override
    public void deviceDiscoveryFinished(List<Device> devices) {
        selectDeviceAndConnect(devices);
    }

    private void selectDeviceAndConnect(List<Device> devices) {
        for (Device device : devices) {
            if (device.getName() != null){
                // All the devices here are all of the merchant's devices
                if (/* Fill your logic here */) {
                    this.api.connect(device);
                    // Now take a look at connectionStatusChanged method
                    break;
                }
            }
        }
    }

    //Potentially, if you know the Serial number and model of the device you want to connect to, you can skip the search and do it this way
    public void connect(){
        Device device = new Device("CloudDevice", "9822032398-PAXA920", "", ConnectionMethod.CLOUD);
        //new Device("name", "address", "port", ConnectionMethod.CLOUD);
        this.api.connect(device);
    }

    @Override
    public void connectionStatusChanged(ConnectionStatus status, Device device) {
        if (status == ConnectionStatus.Connected) {
            // Let's launch a payment
            pay();
        }
    }

    public boolean pay() {
        return this.api.sale(new BigInteger("1000"), Currency.GBP);
        // Let´s start our first payment of 10 pounds
    }

    public boolean payWithOptions() {
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
    }

    @Override
    public void currentTransactionStatus(StatusInfo statusInfo, Device device) {
        if (statusInfo.getStatus() == StatusInfo.Status.InitialisationComplete) {
            // The StatusInfo object holds the different transaction statuses like reading card, pin entry, etc.
        }
    }

    @Override
    public void signatureRequired(SignatureRequest signatureRequest, Device device) {
        // This event can be safely ignored for a PAX/Telpo integration. The complete signature capture process
        // is already handled in the sdk, a dialog will prompt the user for a signature if required.
        // If a signature was entered, it should be printed on the receipts.

        //For Datecs integrations:
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

    public void disconnect(){
        this.api.disconnect();
        //This disconnects the connection
    }

}
```

**We're done!**

Sort of. With the above tutorial you've done a basic integration that can perform sale transactions.

Explore the rest of the documentation to see more transaction types supported and possibilities.
