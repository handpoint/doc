---
sidebar_position: 6
id: iosintegration
---


# Integration Guide

**The SDK supports the following connection method:** 

**[Bluetooth (HiLite)](#filesiniOSSDK)**

## Files in iOS SDK {#filesiniOSSDK}

### If you're using the library/Cocoapods:

- **HandpointAll.h**: #import this header file into your classes.
- **libheft.a**: The SDK library.

### If you're using the framework/Carthage:

- **HandpointSDK.h**: #import this header file into your classes.
- **HandpointSDK.framework**: The SDK library.

The SDK also includes a simulator, a library configured to simulate a payment terminal - intended for early development of an user interface. To use it, just link the libheft.a file in the HeftSimulatorLibrary folder, instead of the actual SDK library.

##  Development settings for the SDK

- **Dependencies**:The Heft library depends on the``` ExternalAccessory``` and ``` libc++.dylib``` frameworks included with the iOS SDK. These frameworks and the **libheft.a** SDK library itself need to be linked to your project for the Handpoint interface to work properly.

- **Communication protocol**: Your application needs to support the card reader communication protocol. For this reason, the ```com.datecs.pinpad``` string needs to be added to the ```Supported external accessory protocols``` in the **.plist file**:

````xml
    <key>UISupportedExternalAccessoryProtocols</key>
    <array>
        <string>com.datecs.pinpad</string>
    </array>
````       

- **Background mode support**: Your application needs to support connection to external devices when in the background. For this reason, in the "Capabilities" section of the project settings, the **Background Modes** profile needs to be ON, and the ```External accessory communication ``` option must be checked. This is equivalent to adding the following entry in the .plist file:


````xml
    <key>UIBackgroundModes</key>
    <array>
        <string>external-accessory</string>
    </array>
````
            
- **C++ linker flag**: A part of the library is written in c++ therefore the **-lc++ linker flag** needs to be set. Add it under "Other Linker Flags" under the "Linking" section of your projects settings "Build Settings" tab.
- **Other settings**: To prevent the warning "file was built for archive which is not the architecture being linked (armv7s)", **set Build Active Architecture Only** to YES.


## Usage summary

Any application using the Handpoint SDK should follow these steps:

1. Define a class that implements the **HeftDiscoveryDelegate** protocol.
This class defines the behavior of the app when discovery related events are received from the SDK.
2. Define a class that implements the **HeftStatusReportDelegate** protocol (it can be the same as above).
This class defines the behavior of the app when connection and transaction related events are received from the SDK
3. Get a reference to the HeftManager singleton and assign your HeftDiscoveryDelegate instance as delegate.
4. Start the discovery process by calling the **startDiscovery** function of the HeftManager and recover a list of the discovered devices by calling the **connectedCardReaders** function of the HeftManager.
5. Connect to a device by calling the **clientForDevice** function of the HeftManager.
6. If connection is successful, the **didConnect** function of the HeftStatusReportDelegate instance will be invoked.
7. From this point, start processing transactions and have fun!

## Usage details

1. Define a class that implements the **HeftDiscoveryDelegate** protocol.
This class will define the behavior of the application when discovery related events are received from the SDK.

````objectivec
    @interface MyDiscoveryDelegate () <HeftDiscoveryDelegate>
    @implementation MyDiscoveryDelegate
````  
 
2. Define a class that implements the **HeftStatusReportDelegate** protocol (it can be the same as above).
This class will define the behavior of the application when connection and transaction related events are received from the SDK.

````objectivec
    @interface MyStatusReportDelegate () <HeftStatusReportDelegate>
    @implementation MyStatusReportDelegate
````
 
3. Get a reference to the HeftManager singleton in SDK by calling the **sharedManager** class method.
Assign your HeftDiscoveryDelegate instance as delegate of the manager.

````objectivec
    MyDiscoveryDelegate* myDiscoveryDelegate = [[alloc MyDiscoveryDelegate] init];
    HeftManager* manager = [HeftManager sharedManager];
    manager.delegate = myDiscoveryDelegate;
````          

4. If device is available through BT connection, start the discovery process by calling the **startDiscovery** function of the HeftManager.

````objectivec
    [manager startDiscovery];
````
   
When a device is selected by the user in the “Select device” popup window, the **didFindAccessoryDevice** function of the HeftDiscoveryDelegate is invoked.

````objectivec
    - (void)didFindAccessoryDevice:(HeftRemoteDevice*)newDevice
    {
        NSLog(@"Found new device");
        //Connect to found device or store it for later
    } 
````
   
When the discovery process is finished, the **didDiscoverFinished** function of the HeftDiscoveryDelegate instance will be invoked. Recover a list of all the discovered devices by calling the **connectedCardReaders** function of the HeftManager.

````objectivec
    - (void)didDiscoverFinished
    {
        NSMutableDictionary *discoveredDevices = [self.manager connectedCardReaders];
    }
````
   
5. Connect to a device by calling the **clientForDevice** function of the HeftManager.

* Expected parameters of this function are:

    - A discovered device (HeftRemoteDevice object).

    - A shared secret. The shared secret is a unique identifier. It is a used to link a merchant with his readers. Each one of your merchants will be assigned a different shared secret so it needs to be a configurable value in your application or backend. If you received a development kit with a card reader, our support team probably sent you a shared secret via email already.

    - A HeftStatusReportDelegate instance, which will be notified of all the events related with the device.

```` objectivec
    // Declare the shared secret (below SS is an example, please put the one sent by our support team)
    NSString *sharedSecret =@"0102030405060708091011121314151617181920212223242526272829303132";
    // Connect to reader
    [manager clientForDevice:device
			sharedSecret:mySharedSecret
			delegate:myStatusReportDelegate];
````
  
6. If connection is successful, the **didConnect** function of the HeftStatusReportDelegate instance will be invoked. Function receives as parameter a HeftClient object, whose reference must be stored since it is the communication bridge to the device we have connected to.

```` objectivec
    - (void)didConnect:(id <HeftClient>)client
    {
        self.heftClient = client;
    }
````
   
7. Once connected to the card reader, transactions can be started through the HeftClient object. For example, the next code starts a sale of 100 GBP:

````objectivec
[self.heftClient saleWithAmount:100 currency:@"GBP" cardholder:YES];
````
   
8. When a transaction has been initiated (E.g saleWithAmount), the HeftClient alerts the HeftStatusReportDelegate object by invoking **responseStatus** during the process and **responceFinanceStatus** when the process has finished.

````objectivec
    - (void)responseStatus:(id<ResponseInfo>)info
    {
        NSLog(@"responseStatus:");
        NSLog(info.status);
        NSLog(info.xml.description);
    }
    
    - (void)responseFinanceStatus:(id<FinanceResponseInfo>)info
    {
        NSLog(@"responseFinanceStatus:");
        NSLog(info.status);
        NSLog(info.customerReceipt);
        NSLog(info.xml.description);
    }
````
	
9. In case you are using the **SDK simulator**, the behavior changes according to the amount of the transaction:

| **Amount**      | **Behavior** |
| ----------- | ----------- |
| 1000     | 		Declined transaction|
| 2000     | 		User Cancelled|
| 3000     | 		Signature Requested|
| Other  amount     | 		Approved transaction|