---
sidebar_position: 3
id: restapioverview
---

# API Overview


:::tip

First of all, ensure you are using the correct environment by reviewing the type of card reader you have. To check if you should be using a production or development environment, see ["How do I know what type of card reader do I have?"](https://hndpt.co/39utmzi) and select the corresponding URL, as you see below:

  **For production terminals the endpoint to target is:** https://cloud.handpoint.com/

  **For debug terminals the endpoint to target is:** https://cloud.handpoint.io/

:::


The following flow shows the interactions between your application and the Handpoint REST API:

**1)** Send a POST [transaction request](restobjects.md#transaction-request-object) to the REST API.

**2)** The API will validate the request body and, if it is correct, will respond back to your software with the response code 202 ("Accepted”) to confirm that the data has been correctly forwarded to the payment terminal.

**3)** The validated [transaction request](restobjects.md#transaction-request-object) object is forwarded to the terminal and the transaction starts.

**4.1)** In case the original [transaction request](restobjects.md#transaction-request-object) contains a callbackUrl and token, the [transaction result](restobjects.md#transaction-result-object) will be sent back from the terminal to your software by using the callbackUrl. The terminal will be authenticated against your endpoint by setting the authentication token of the [transaction request](restobjects.md#transaction-request-object) in the custom header ( "AUTH-TOKEN"). All 2XXs http response codes from the callbackUrl are considered as valid by the terminal to acknowledge of a successful delivery of the transaction result.

:::caution

**4.2)** **IMPORTANT** Feature only compatible with Handpoint App v3.3.0 and above. In case the original [transaction request](restobjects.md#transaction-request-object) does not ontain a callbackUrl and token, the [transaction result](restobjects.md#transaction-result-object) is sent back from the terminal to Handpoint's REST-API. The result can then be retrieved from the endpoint GET [transaction-result/{transactionResultId}](restendpoints#transaction-resulttransactionresultid) where the transactionResultId (also called cloud transaction identifier) is found in the answer from the initial POST[1] to the REST-API (see step **2**)).

:::




![Sandbox logo](/img/RestApiDiagram)
