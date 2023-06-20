---
sidebar_position: 5
id: javascriptsandbox
---


# Handpoint Sandbox

Get started today with the Handpoint sandbox and test payment transactions right in your browser. The sandbox is available here: http://www.handpoint.com/lab/cloudpos. **A payment terminal is required to start testing.**


This is the initial setup screen:

![Sandbox logo](/img/cloudpos.png)

To get started, select the target environment in which you are going to operate (Sandbox or Production). If you have any doubts selecting the correct environment, click on  "*How do I know what type of card reader I have?*" and you will be redirected to an explanation page.

![Sandbox logo](/img/cloudpos2.png)

Next, enter your Handpoint API key in the box labeled "*INSERT API KEY*” and save. This action will automatically populate the “*SELECT A DEVICE*” drop down with the list of payment terminals assigned to your test account. If the API key is not valid, an error message will appear in the “RESPONSES” section of the sandbox.

![Sandbox logo](/img/cloudpos3.png)

In the “*SELECT A DEVICE*” list choose any of the payment terminals assigned to your account. You can refresh the “*SELECT A DEVICE*” list by clicking the refresh button on the right side of the “*SELECT A DEVICE*” box. If you are already connected to a device, you can disconnect from it using the “*Disconnect*” button or trigger a software and configuration update operation by using the "*Update*" button.

![Sandbox logo](/img/cloudpos4.png)

Once you have selected a device, the “SELECT A DEVICE” box will be disabled, and the rest of the sandbox will be enabled. With your selected device, you can simulate a number of operations, including:

- Sale
- Sale and tokenize
- Refund
- Tokenize card
- Reverse sale transactions
- Reverse refund transactions

In order to reverse a transaction, a transaction id is needed, this id is available in the transaction result data coming from a previous sale or refund operation. Each transaction result will appear in the RESPONSES panel, on the right side of the screen.

With each transaction result you will be able to perform several operations:
- View and print the merchant receipt
- View and print the customer receipt
- Reverse the transaction
- Copy the transaction result data, it is the raw JSON transaction result, as received by the application from the payment terminal. 

![Sandbox logo](/img/cloudpos5.png)