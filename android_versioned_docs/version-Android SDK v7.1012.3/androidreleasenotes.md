## v7.1012.3

### Bug Fixes

- **Mastercard contactless declines** â€” Fixed an issue where Mastercard contactless transactions could be incorrectly declined due to missing EMV fields during the contactless flow.
- **Reader parameter setup resilience** â€” Fixed an issue where a failure to SET a single EMV tag during reader parameter initialization would abort the entire setup sequence. Remaining tags are now processed correctly even when an individual tag SET fails.
