---

id: faq
---

# FAQ


### What is the difference between a Debug device and a Prod device?
The A920 Debug device is intended for development purposes only. It allows you to sideload an APK and transfer files through USB cable easily and quickly. With Prod devices, for security reasons, it is impossible to sideload an APK. 

The only way to update the applications is through PAXSTORE. Only Prod devices are allowed to be deployed in the market.


### How to check if a PAX A920 device is Debug Mode or Prod Mode?
Turn on the device, you can find a DEBUG only Not for COMMERCIAL watermark on the bottom right of the screen on a Debug device. If there is no watermark visible, it is a Prod device. [Here](https://handpoint.atlassian.net/wiki/spaces/PD/pages/1578401793/How+to+Identify+Between+Development+and+Production+Terminals) we have a guide with more info about this topic.

### How to install an App on a Debug device?
If you develop your Android app with Android Studio you can simply connect the device to your computer and install the APK directly on the device. Alternatively, you can transfer the APK to the device, then click it on the device and follow the instructions to install it. 

On Mac, you will need a file transfer tool (e.g. Android File Transfer). On Windows, you can simply copy and paste the APK.

### PAX Password

| Terminal OS  | Setting Password	  |  Developer Option Password (Debug Device Only) |
|---|---|---|
| A920 5.1 (V3.22 and Below  | 9876  | pax9876  | 
|  A920 5.1 (V3.23 and Above) | pax9876@@  | Dev9876@@  | 
| A920 7.1 (V5.05 and Below)  | 9876  | pax9876  |
| A920 7.1 (V5.06 and Above)  | pax9876@@  | Dev9876@@  |


### What type of signature should be used when signing an App?
In order to publish an APK on PAXSTORE, the suggested method is to use a local Keystore and let Android Studio sign the APK. All the APK versions of the same App should be signed with the same developer signature.
