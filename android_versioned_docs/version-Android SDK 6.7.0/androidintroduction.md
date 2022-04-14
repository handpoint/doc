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

:::tip
If you are currently using 5.x of the Android SDK, take a look at the [migration guide](androidmigrationguide.md) to 6.x
:::


The new generation of Handpoint APIs and SDKs are engineered to make your life simpler and happier.

**Awesomely simple**

Created for humans, coders, geeks, no need of a dark and complex knowledge of the payment industry.

<br></br>

**Super secure**

We take care of PCI compliance so you can be kept out of scope
The Handpoint terminals encrypt all sensitive cardholder data so your app does not have to deal with it.



<br></br>


**Available through Maven Central**

The Handpoint Android SDK is compatible with Android version 5.1.1 [(API level 22)](https://developer.android.com/about/versions/lollipop/android-5.1) and up.
The latest version is compiled with java **1.8**

### Maven

```json
    <dependency>
      <groupId>com.handpoint.api</groupId>
      <artifactId>sdk</artifactId>
      <version>[6.0.0,7.0.0)</version>
      <type>aar</type>
    </dependency>
```

### Gradle

```groovy
 //Handpoint Production SDK (Production devices)
 implementation 'com.handpoint.api:sdk:6.x.x'
    
 //Handpoint Staging/Development SDK (Debug devices)
 implementation 'com.handpoint.api:sdk:6.x.x-RC.x-SNAPSHOT'
```



- Some considerations to keep in mind when using gradle:

 In the `gradle.build` (app module):

  ```groovy
    packagingOptions {
        pickFirst '**/*.so'
        exclude 'META-INF/*'
        exclude '**/anim/*.xml'
        exclude '**/layout/*.xml'
        exclude 'resources.arsc'
        exclude 'AndroidManifest.xml'
        exclude '**/animator/*.xml'
    }
  ```

  In the `gradle.build` (Top-level build file):

  ```groovy
        allprojects {     //Handpoint Production SDK
          repositories {
             google()
             mavenCentral()
             maven { url 'https://jitpack.io' }
              }
        }
  ```

  ```groovy
        allprojects {   //Handpoint Staging/Development SDK
          repositories {
            google()
            mavenCentral()
            maven {
              name = "Handpoint Nexus"
              url = uri("urlProvided")
              credentials {
                username = 'usernameProvided'
                password = 'passwordProvided'
             }
            }
          }
        }
  ```


It is time to visit our **[Integration Guides](androidintegrationguide)** section.

If you have any questions, do not hesitate to **[Contact Us](mailto:support@handpoint.com)**.
