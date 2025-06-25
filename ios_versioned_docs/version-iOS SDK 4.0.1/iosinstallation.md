---
sidebar_position: 5
id: iosinstallation
---




# SDK Installation	


## CocoaPods

[CocoaPods](https://cocoapods.org/) is a dependency manager for Cocoa projects. You can install it with the following command:

````
$ gem install cocoapods
````

If you don't have a `Podfile` yet:

````
$ pod init
````

To integrate the HandpointSDK into your Xcode project using CocoaPods, specify it in your `Podfile`:

````
source 'https://github.com/CocoaPods/Specs.git'
platform :ios, '8.0'
use_frameworks!

target 'your_target' do
    pod 'HandpointSDK', '~> 3.2.3'
end
````

Then, run the following command:

````
$ pod install
````

## Carthage

[Carthage](https://github.com/Carthage/Carthage) is a decentralized dependency manager that builds your dependencies and provides you with binary frameworks.

You can install Carthage with [Homebrew](https://brew.sh/) using the following command:

```
$ brew update
$ brew install carthage
```

To integrate the HandpointSDK into your Xcode project using Carthage, specify it in your `Cartfile`:

````
github "handpoint/HandpointSDK-iOS"
`````

Run `carthage update` to build the framework and drag the built `HandpointSDK.framework` into your Xcode project.

## Manually

If you'd rather handle the dependency manually there are three different approaches to include the ```HandpointSDK``` in your project:

### Prebuilt static library

Download the latest pre-built static library from [Github](https://github.com/handpoint/HandpointSDK-iOS) and refer to the readme.md for the installation steps.

### Building the project yourself

Download the latest version from the master branch:

```
$ git clone https://github.com/handpoint/HandpointSDK-iOS.git
```

Alternatively you can add it as a git [submodule](https://git-scm.com/docs/git-submodule):

```
$ git submodule add https://github.com/handpoint/HandpointSDK-iOS.git
```

### Framework

You'll find the dynamic framework project called `HandpointSDK.xcodeproj` at the root of the repo.

### Static Library

You'll find the static library project called `headstart.xcodeproj` under the `Library` folder.

We **strongly** discourage you from building this project yourself.

This project contains several targets, you need to build the aggregated target `device-simulator Release`

This target produces a .zip file in the same directory as the `headstart.xcodeproj` file containing both the library and the simulator library.

