---
sidebar_position: 2
id: javascriptreleasenotes
---



# Release Notes

:::tip
Do not miss any news from Handpoint releases. [Subscribe](https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e) to our Handpoint Newsletter!
:::


## 6.0.0

**BREAKING CHANGE:**
- The recovery function in the init method was added to make sure that ALL transaction results are received by the POS, even in case of an unstable network connection. The recovery function passed as third parameter in the init method MUST return a promise. The resolution of the promise will send a message to the payment terminal acknowledging the reception of the transaction result.
