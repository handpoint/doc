## v7.1014.0

### Breaking Change

Starting with this version, the SDK requires core library desugaring to support
modern Java APIs on older Android devices. Add the following to your app module's
`build.gradle`:

```groovy
android {
    compileOptions {
        isCoreLibraryDesugaringEnabled true
    }
}
dependencies {
    coreLibraryDesugaring 'com.android.tools.build:desugaring:2.1.5'
}
```

### New Features

- Address Verification Service (AVS) support for MoTo transactions. Pass a
  `billing` object (`zipCode` required, `address` optional) in `MoToOptions`
  and enable `MoToOptions.enableAvsFields` to display AVS input fields on the
  payment screen. The AVS result is returned as
  `TransactionResult.addressVerification.resultCode`
  (`AvsResultCode` enum: `FULL_MATCH`, `ADDRESS_MATCH`, `ZIP_MATCH`, etc.).
