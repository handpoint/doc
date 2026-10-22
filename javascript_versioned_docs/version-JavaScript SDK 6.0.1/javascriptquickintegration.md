---
sidebar_position: 7
id: javascriptquickintegration
---



# Quick Integration Test

This js script sample shows how you can integrate your solution with Handpoint JavaScript SDK to perform a product sale in three quick and simple SDK calls:

1) Request your test configuration (apiKey and deviceName constants) from Handpoint and set them in your web application

2) Download handpoint.js from this [link](https://hpoint-cr-binaries-prod.s3.amazonaws.com/cloud/sdk/wrappers/js/6.0.0/handpoint-6.0.0.js)

3) In the same directory, copy both handpoint.js and the code below in an html file

4) Open the html file in the browser and see test transactions immediately

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
                    error => console.log('Disconnection to device [' + deviceName + '] Failed -> ' + JSON.stringify(error))
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