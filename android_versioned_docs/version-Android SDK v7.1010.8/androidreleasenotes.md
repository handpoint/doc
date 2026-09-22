## v7.1010.8

### Bug Fixes

- **Fixed exception on SDK initialization** â€” `AndroidDevice` setup was incorrectly performed during EMV configuration loading, which could cause an exception before the SDK was fully initialised. Device identification is now registered at the SDK entry point (`Hapi`) instead.

### Contactless Kernel

- **Added Consumer Device CVM support** â€” The contactless DPAS kernel now correctly handles CVM type `0x30` (Consumer Device CVM), which is required for certain card scheme certification flows.
- **Added CPR TLV (tag `0x9F71`) logging** â€” Tag `0x9F71` (Card Product Restrictions) is now captured and logged during contactless processing to support DINERS certification diagnostics.
