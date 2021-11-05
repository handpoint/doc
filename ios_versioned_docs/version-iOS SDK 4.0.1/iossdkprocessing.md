---
sidebar_position: 6
id: iossdkprocessing
---


# SDK integration example

## HandpointModule header

**HandpointModule.h**

````objectivec
#import "HandpointAll.h"

@interface HandpointModule : NSObject <HeftDiscoveryDelegate, HeftStatusReportDelegate>

- (instancetype)initWithSharedSecret:(NSString *)sharedSecret;

- (void)saleWithAmount:(NSInteger)amount
                currency:(NSString *)currency;

- (void)refundWithAmount:(NSInteger)amount
                currency:(NSString *)currency;

- (void)saleReversalWithAmount:(NSInteger)amount
                        currency:(NSString *)currency
            originalTransactionID:(NSString *)originalTransactionID;

- (void)refundReversalWithAmount:(NSInteger)amount
                        currency:(NSString *)currency
            originalTransactionID:(NSString *)originalTransactionID;

- (void)connectToAddress:(NSString *)address;

- (void)setLogLevel:(eLogLevel)logLevel;

- (void)getDeviceLogs;

- (void)getPendingTransaction;

- (void)update;

- (void)listDevices;

@end 
````

## HandpointModule

**HandpointModule.m**

````objectivec
#import "<Foundation/Foundation.h>"
#import "HandpointModule.h"
#import "HeftRemoteDevice+SendableDevice.h"
#import "SDKEvent.h"
#import "ConnectionStatus.h"
#import "Currency.h"
#import "CDVInvokedUrlCommand+Arguments.h"
#import "StatusInfo.h"
#import "TransactionResult.h"

typedef NS_ENUM(NSInteger, ConnectionStatus)
{
    ConnectionStatusNotConfigured,
    ConnectionStatusConnected,
    ConnectionStatusConnecting,
    ConnectionStatusDisconnected,
    ConnectionStatusDisconnecting,
    ConnectionStatusInitializing
};

@interface HandpointModule ()

@property (nonatomic) HeftManager* manager;
@property (nonatomic, strong) id<HeftClient> api;
@property (nonatomic) NSString *ssk;
@property (nonatomic) HeftRemoteDevice* preferredDevice;
@property (nonatomic) NSString *eventHandlerCallbackId;
@property (nonatomic) NSMutableDictionary *devices;

@end

@implementation HandpointModule

- (instancetype)initWithSharedSecret:(NSString *)sharedSecret
{
    NSLog(@"\n\tpluginInitialize");
    self.manager = [HeftManager sharedManager];
    self.manager.delegate = self;
    self.devices = [@{} mutableCopy];
    
    [self fillDevicesFromConnectedCardReaders];
    
    self.ssk = sharedSecret;
}

- (void)saleWithAmount:(NSInteger)amount
                currency:(NSString *)currency
{
    BOOL result = [self.api saleWithAmount:amount
                                    currency:currency
                                cardholder:YES];

    if (result == false)
    {
        //Do something
    }
}

- (void)refundWithAmount:(NSInteger)amount
                currency:(NSString *)currency
{
    BOOL result = [self.api refundWithAmount:amount
                                    currency:currency
                                    cardholder:YES]

    if (result == false)
    {
        //Do something
    }
}

- (void)saleReversalWithAmount:(NSInteger)amount
                        currency:(NSString *)currency
            originalTransactionID:(NSString *)originalTransactionID
{
    BOOL result = [self.api saleVoidWithAmount:amount
                                        currency:currency
                                    cardholder:YES
                                    transaction:originalTransactionID];

    if (result == false)
    {
        //Do something
    }
}

- (void)refundReversalWithAmount:(NSInteger)amount
                        currency:(NSString *)currency
            originalTransactionID:(NSString *)originalTransactionID
{
    BOOL result = [self.api refundVoidWithAmount:amount
                                    currency:currency
                                cardholder:YES
                                transaction:originalTransactionID];

    if (result == false)
    {
        //Do something
    }
}

#pragma mark - Device Management

- (void)connectToAddress:(NSString *)address
{
    HeftRemoteDevice *remoteDevice = self.devices[address];

    if (remoteDevice)
    {
        BOOL isRemoteDeviceSameAsPreferred = self.preferredDevice &&
                [self.preferredDevice.address isEqualToString:remoteDevice.address];

        // If we are already connected to this device, update shared secret
        if (self.api && isRemoteDeviceSameAsPreferred)
        {
            // Already connected to device
        }
        else
        {
            self.preferredDevice = remoteDevice;

            [self.manager clientForDevice:remoteDevice
                                sharedSecret:self.ssk
                                    delegate:self];
        }

        [self connectionStatusChanged:ConnectionStatusConnecting];
    }
    else
    {
        NSLog(@"Can't connect. No device available. Have you searched?");
    }
}
    
- (void)setLogLevel:(eLogLevel)logLevel
{
    [self.api logSetLevel:logLevel];
}

- (void)getDeviceLogs
{
    [self.api logGetInfo];
}

- (void)getPendingTransaction
{
    BOOL success = NO;

    if ([self.api isTransactionResultPending])
    {
        success = [self.api retrievePendingTransaction];
    }

    if (success)
    {
        //...
    }
    else
    {
        //...
    }
}

- (void)update
{
    [self.api financeInit];
}

- (void)listDevices
{
    NSArray* devices = [self.manager connectedCardReaders];

    /**
        * A device can have four levels of connection: unpaired, paired,
        * connected and connected in the SDK.
        *
        * Due to the nature of the iOS ExternalAccessory framework,
        * devices that are already connected at an iOS level will not appear in a normal search,
        * as they already appear through the "connectedCardReaders" array in the manager
        * (Yeah, I know)
        *
        * So the "if" takes care of differentiating those two cases
        *
        * If we have device(s) connected we just go for those, otherwise, search.
        */

    if(devices.count)
    {
        //We have device(s) already connected, we skip the search.
        for (HeftRemoteDevice *device in devices)
        {
            [self addDevice:device];
        }

        [self didDiscoverFinished];
    }
    else
    {
        //We search and wait...
        [self.manager startDiscovery];
    }
}

# pragma mark - Callbacks
    
- (void)didFindAccessoryDevice:(HeftRemoteDevice*)newDevice
{
    [self addDevice:newDevice];
}

- (void)didLostAccessoryDevice:(HeftRemoteDevice *)oldDevice
{
    [self removeDevice:oldDevice];
    
    if(self.preferredDevice && self.preferredDevice.address == oldDevice.address)
    {
        [self connectionStatusChanged:ConnectionStatusDisconnected];
        
        self.preferredDevice = nil;
    }
}

- (void)didDiscoverFinished
{
    [self fillDevicesFromConnectedCardReaders];

    for (NSString *key in [self.devices allKeys])
    {
        HeftRemoteDevice *device = self.devices[key];
        
        if ([device.address isEqualToString:<my_saved_mac_address>])
        {
            //Do something with the device if it's the same one you expect.
            break;
        }
    }
}

- (void)didConnect:(id <HeftClient>)client
{
    if(client)
    {
        self.api = client;
        
        [self connectionStatusChanged:ConnectionStatusConnected];
    }
}

- (void)connectionStatusChanged:(ConnectionStatus)status
{
    //Here you get notified of connection status changes
}

- (NSString *)stringFromConnectionStatus:(ConnectionStatus)status
{
    switch(status)
    {
        case ConnectionStatusNotConfigured:
            return @"NotConfigured";
        case ConnectionStatusConnected:
            return @"Connected";
        case ConnectionStatusConnecting:
            return @"Connecting";
        case ConnectionStatusDisconnected:
            return @"Disconnected";
        case ConnectionStatusDisconnecting:
            return @"Diconnecting";
        case ConnectionStatusInitializing:
            return @"Initializing";
    }
}

- (void)responseStatus:(id <ResponseInfo>)info
{
    //Here you'll get status updates during the transaction
}

- (void)responseError:(id <ResponseInfo>)info
{
    //Here if something went wrong
}

- (void)responseFinanceStatus:(id <FinanceResponseInfo>)info
{
    //Here's the result of your transaction
}

- (void)responseLogInfo:(id <LogInfo>)info
{
    NSLog(@"\n\tresponseLogInfo: %@", info.status);
}

- (void)requestSignature:(NSString *)receipt
{
    [self.api acceptSignature:YES];
}

- (void)addDevice:(HeftRemoteDevice *)device
{
    self.devices[device.address] = device;
}

- (void)removeDevice:(HeftRemoteDevice *)device
{
    if (self.devices[device.address])
    {
        [self.devices removeObjectForKey:device.address];
    }
}

- (void)fillDevicesFromConnectedCardReaders
{
    for (HeftRemoteDevice *device in [self.manager connectedCardReaders])
    {
        [self addDevice:device];
    }
}
    
@end
````
