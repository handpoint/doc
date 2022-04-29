---
sidebar_position: 1
id: restintroduction
---

# Introduction
Use the Handpoint REST API to integrate leading smartpos terminals with your software. The Handpoint REST API is a simple REST interface that acts as a bridge between **your software and the payment terminal** , while shielding your software from unmasked card data. It is seamless to integrate, keeps you out of PCI scope, works with every platform, and lets you use the best Android terminals on the market.

Complete your integration in just three steps: Initiate the interface, choose the terminal, and start the sale. It is as simple as it sounds. The only thing you need is a valid API key to authenticate against the API. Simply execute the financial operation, and within seconds you’ll get back the transaction result and receipts in your software. The Handpoint REST API seamlessly starts and manages the entire point to point encrypted transaction with the payment terminal, minimizing hassle for you and maximizing reliability, security, and control.

## API Overview

When integrating to the Handpoint REST API, there are 2 possible transaction flows in order to get back the transaction result from the payment terminal to your application: 

1. **Run a server to receive the transaction result**. In this scenario you will need to specify a callback URL in the transaction request. At the end of the transaction, the payment terminal will send back the transaction result to the specified callback URL. 

2. **Query an endpoint provided by Handpoint**. In this scenario a transaction result id is delivered immediately to your application as a response to the transaction request. A specific API endpoint then needs to be queried with the transaction result id in order to get the transaction result when the financial operation is finished on the payment terminal. 

## Transaction flow   

:::tip

1. Pre-requisite: request your test credentials (API key) and test payment terminal from Handpoint. 

2. ensure you are targeting the correct environment. If your payment terminal is a **debug** terminal then the development environment (.io) needs to be targeted. If your payment terminal is a **demo** terminal or a **production** terminal then the production environment (.com) needs to be targeted. Demo terminals are production terminals linked to a mock acquirer so funds are not moved. To check if you should be using the production or the development environment you can refer to this guide: ["How do I know what type of card reader I have?"](https://hndpt.co/39utmzi)

  **For production terminals the endpoint to target is:** https://cloud.handpoint.com/

  **For debug terminals the endpoint to target is:** https://cloud.handpoint.io/

:::

The following flow shows the interactions between your application and the Handpoint REST API:

**1)** Send a POST [transaction request](restobjects.md#transaction-request-object) to the REST API.

**2)** The API will validate the request body and, if it is correct, will respond back to your software with the response code 202 ("Accepted”) to confirm that the data has been correctly forwarded to the payment terminal.

**3)** The validated [transaction request](restobjects.md#transaction-request-object) object is forwarded to the payment terminal and the transaction starts.

**4.1)** In case the original [transaction request](restobjects.md#transaction-request-object) contains a callbackUrl and token, the [transaction result](restobjects.md#transaction-result-object) will be sent back from the payment terminal to your software by using the callbackUrl. The terminal will be authenticated against your endpoint by setting the authentication token of the [transaction request](restobjects.md#transaction-request-object) in the custom header ( "AUTH-TOKEN"). All 2XXs http response codes from the callbackUrl are considered as valid by the payment terminal to acknowledge of a successful delivery of the transaction result. **See figure 4.1 below**. 

 **4.2)** In case the original [transaction request](restobjects.md#transaction-request-object) does not contain a callbackUrl and token, the [transaction result](restobjects.md#transaction-result-object) is sent back from the terminal to Handpoint's REST-API. The transaction result can then be retrieved from the endpoint GET https://cloud.handpoint.[com//io]/transaction-result/{transactionResultId} where the transactionResultId (also called cloud transaction identifier) is found in the immediate answer from the initial transaction request POST to the REST-API (see step 2). **See figure 4.2 below**. 




![Sandbox logo](/img/RestApiDiagram)


