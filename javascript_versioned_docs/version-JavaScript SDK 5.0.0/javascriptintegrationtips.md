---
sidebar_position: 8
id: javascriptintegrationtips
---

# Integration Tips

Maintain the connection with the terminal at all times:
- To be able to recover a transaction result through the callback passed in the [*init*](#1) method, the point of sale and the terminal MUST be connected and online. For that reason, we recommend to connect to the target terminal and maintain the connection alive at all times instead of connecting and disconnecting for every transaction.
- Using the same connection, the user may perform as many transactions as desired. The SDK is in charge of maintaining the secure channel between the point of sale and the terminal. No connection and disconnection between transactions is required. The silent connected periods will provide the possibility for the device to deliver any pending transaction result in case of a network issue.

How Transaction Recovery Works:
- The terminal has a transaction recovery loop to automatically send back the pending [*Transaction Result*](#18) to the Point of sale in case it becomes unreachable (network issue or other). For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the point of sale is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc…). The recovery loop is reinitialized every time the Handpoint application is restarted or anytime the startRecovery method is used.