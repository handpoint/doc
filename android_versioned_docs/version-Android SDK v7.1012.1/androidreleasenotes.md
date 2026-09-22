## v7.1012.1

### Bug Fixes

- **Pre-authorization reversal format correction (SDKS-201):** Fixed an issue where `preAuthorizationReversal` was sending the amount and currency in an incorrect format, causing the operation to fail or behave unexpectedly at the gateway level.

### Changed APIs

The `preAuthorizationReversal` method signatures have been updated to use strongly-typed parameters, replacing the previous raw `String?` parameters. This aligns the method with the rest of the SDK's transaction API surface.

**Before:**
```kotlin
fun preAuthorizationReversal(
    amount: String?,
    currency: String?,
    originalTransactionID: String
): OperationStartResult

fun preAuthorizationReversal(
    amount: String?,
    currency: String?,
    originalTransactionID: String,
    options: Options
): OperationStartResult
```

**After:**
```kotlin
fun preAuthorizationReversal(
    amount: BigInteger,
    currency: Currency,
    originalTransactionID: String
): OperationStartResult

fun preAuthorizationReversal(
    amount: BigInteger?,
    currency: Currency?,
    originalTransactionID: String,
    options: Options
): OperationStartResult
```

**Migration:** Replace any `String` values passed for `amount` and `currency` with `BigInteger` and `Currency` instances respectively. The overload without `options` now requires non-null values for both parameters; use the `options` overload if nullable amount/currency is needed.
