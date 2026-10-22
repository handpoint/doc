---
sidebar_position: 7
id: expresscustomurl
---

# Custom URL


To initiate an Express client transaction from your web or app, you open a URL with the following format: `handpoint://express/v1/?data=<url_encoded_data>` 

* For web apps, you can open this URL just as you would any other URL on a webpage.
* For native iOS apps, you use the openURL: method of UIApplication.
The query parameter in the URL, data, is a percent-encoded JSON object that contains the information Express client needs to process the transaction request.

For example, a valid unencoded JSON object looks like this (replace CLIENT_ID with your application's ID, and SHARED_SECRET_KEY with the device activation key you receive from our support team): If you're opening this URL from a native app, you can use your own app's custom scheme as a callback: `"myapp-url-scheme://payment-complete"`

```json
{
    "action": {
        "type": "sale",
        "parameters": {
            "amount": 1500,
            "currency": "USD"
        },
        "extraParameters": {
            "your custom field" : "custom value"
        }
    },
    "client": {
        "clientId": "CLIENT_ID",
        "ssk": "SHARED_SECRET_KEY",
        "autoReturn": true,
        "autoReturnTimeout": 0
    },
    "callbackUrl": "http://yourbackend.com/payment-result"
}
```


If you're developing a web application, this Javascript sample demonstrates encoding a Register API URL and directing the merchant's browser to open it:


```jsx
<script>
var dataParameter = {
    "action": {
        "type": "sale",
        "parameters": {
            "amount": 1500,
            "currency": "USD"
        },
        "extraParameters": {
            "your custom field" : "custom value"
        }
    },
    "client": {
        "clientId": "CLIENT_ID",
        "ssk": "SHARED_SECRET_KEY",
        "autoReturn": true,
        "autoReturnTimeout": 0
    },
    "callbackUrl": "http://yourbackend.com/payment-result"
};
window.location = "handpoint://express/v1/?data=" + encodeURIComponent(JSON.stringify(dataParameter));
</script>
```
