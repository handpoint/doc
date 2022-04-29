---
sidebar_position: 4
id: javascriptquickintegration
---



# Integration Guide

:::tip
Pre-requisite: request your test credentials (API key) and test payment terminal from Handpoint. 
:::

The following example shows how you can integrate your web application with the Handpoint javascript SDK to perform a sale transaction in four easy steps:

1) Download the [handpoint.js](javascriptintroduction.md#javascriptIntro) SDK.

2) In the same directory, copy both handpoint.js and the code below in an html file.

3) In the code below, replace the variable apiKey with your test api key and replace the variable deviceName with the concatenation of your terminal serial number and model, for example 0821032395-PAXA920. If your payment terminal shows the debug watermark on the screen when it is on, then keep the variable environmentIsDevelopment to true otherwise change it to false. 

4)Open the html file in the browser and see the test transaction immediately.

**SIMPLE, FAST, and EASY**

```html
<!doctype html>
<html>

<head>
  <title>Handpoint SDK Trial Integration</title>
  <script src="handpoint.js"></script>
</head>

<body>
  <script>
      var hp = new Handpoint()
      //************* Test configuration *************//
      var apiKey = 'YourApiKey';
      var deviceName = '082245-Device';
      var environmentIsDevelopment = true;
      //*********************************************//
      hp.init(apiKey, environmentIsDevelopment, (pendingEoT) => {
        console.log('Recovered Transaction -> ' + JSON.stringify(pendingEoT));
      }).then(
        response1 => {
          console.log('Successful initialization')
          //document.writeln('Successful initialization<br />')
          hp.connect(deviceName).then(
            response2 => {
              console.log('Successful Connection to device [' + deviceName + ']');
              //document.writeln('Successful Connection to device [' + deviceName + ']<br />')
              console.log('Executing sale');
              //document.writeln('Executing sale<br />')
              hp.sale('10', 'EUR').then(
                response3 => {
                  console.log('Successful sale');
                  //document.writeln('Successful sale<br />');
                  hp.disconnect(deviceName).then(
                    response3 => {
                      console.log('Successful disconnection from device [' + deviceName + ']')
                      //document.writeln('Successful disconnection from device [' + deviceName + ']<br />')
                    }
                  ).catch(
                    error => console.log('Disconnection from device [' + deviceName + '] Failed -> ' + JSON.stringify(error))
                  );
                }
              ).catch(
                error => console.log('Sale Failed -> ' + JSON.stringify(error))
              );
            }
          ).catch(
            error => console.log('Connection to device [' + deviceName + '] Failed -> ' + JSON.stringify(error))
          );
        }
      ).catch(
        error => console.log('Initialization Failed -> ' + JSON.stringify(error))
      );
  </script>
</body>

</html>
```

:::tip
Maintain the connection with the terminal at all times:
- To be able to recover a transaction result through the callback passed in the [*init*](javascriptmethods.md#1) method, the point of sale and the terminal **MUST** be connected and online. For that reason, we recommend to connect to the target terminal and maintain the connection alive at all times instead of connecting and disconnecting for every transaction.
- Using the same connection, the user may perform as many transactions as desired. The SDK is in charge of maintaining the secure channel between the point of sale and the terminal. No connection and disconnection between transactions is required. The silent connected periods will provide the possibility for the device to deliver any pending transaction result in case of a network issue.

How Transaction Recovery Works:
- The terminal has a transaction recovery loop to automatically send back the pending [*Transaction Result*](javascriptobjects.md#18) to the Point of sale in case it becomes unreachable (network issue or other). For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the point of sale is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc…). The recovery loop is reinitialized every time the Handpoint application is restarted or anytime the startRecovery method is used.
:::