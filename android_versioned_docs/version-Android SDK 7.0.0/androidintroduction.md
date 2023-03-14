---
sidebar_position: 1
id: androidintroduction
---

# Introduction




<div class="card-demo" align='middle'  >
  <div class="card card-background" >
    <div class="card__header">
      <h3>Android SDK</h3>
    </div>
    <div class="card__body">
      <a href="https://search.maven.org/artifact/com.handpoint.api/sdk/">
  <img src="https://handpoint.imgix.net/ballicons/small/android.png"/> 
</a>
    </div>
    <div class="card__footer">
      <a class="button button--primary" href="https://search.maven.org/artifact/com.handpoint.api/sdk/" >Get the latest Android SDK!</a>
    </div>
  </div>
</div>

<br></br>


:::caution
**Handpoint recommends use the Android SDK 7.0.1 or higher.**
:::

:::tip
If you are currently using 6.x of the Android SDK, take a look at the [migration guide](androidmigrationguide.md) to 7.x

:::


The new generation of Handpoint APIs and SDKs are engineered to make your life simpler and happier.

**Awesomely simple**

Created for humans, coders, geeks, no need of a dark and complex knowledge of the payment industry.

<br></br>

**Super secure**

We take care of PCI compliance so you can be kept out of PCI scope. The Handpoint terminals encrypt all sensitive cardholder data so your app does not have to deal with it.

### SDK distribution 

The Handpoint Android SDK is available on Maven central as well as the Handpoint internal Nexus server. Maven central contains the **production builds** while Nexus contains **development snapshots** of the SDK.
- If you are integrating your software with a **PAX debug terminal** you will need to get the SDK from **Nexus**. 
- If you are integrating your software with a **PAX production terminal** you will need to get the SDK from **Maven Central**. 
- If you are integrating your software with an HiLite terminal you will need to get the SDK from **Maven Central**. 


The Handpoint Android SDK is compatible with Android version 5.1.1 [(API level 22)](https://developer.android.com/about/versions/lollipop/android-5.1) and up.
The latest version is compiled with java **1.8**

### AndroidManifest.xml

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

### Gradle Settings

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
             abiFilters  "arm64-v8a", "armeabi-v7a", "x86", "x86_64"
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

### Maven Settings

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

It is time to visit our **[Integration Guides](androidintegrationguide)** section.

If you have any questions, do not hesitate to **[Contact Us](mailto:support@handpoint.com)**.
