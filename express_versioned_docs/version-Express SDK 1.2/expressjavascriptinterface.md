---
sidebar_position: 10
id: expressjavascriptinterface
---

# Javascript Interface


We provide a simple Javascript interface for web based implementations. It is a helper library that generates URLs for the different types of transactions.

To use it you must include hapiexpress.js in your code and initialise it before generating the urls.


**Example for a 10$ sale**

```jsx
let ssk = '0102030405060708091011121314151617181920212223242526272829303132';
    let shouldAutoReturn = false;
    let autoReturnTimeout = 0;

    initHapiExpress('hapi-tests', ssk, shouldAutoReturn, autoReturnTimeout);

    let amount = 1000; // Translates to 10.00
    let currency = "USD"
    let callbackurl = "http://example.com/callbackID"
    let url = Hapi.urlForSale(amount, currency, {'extra-value':'some info'}, callbackurl);
    Hapi.openUrl(url);

   ```

