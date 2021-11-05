---
sidebar_position: 5
id: javascriptsandbox
---


# Sandbox

Get started today with our sandbox. You can generate sample transactions and test the experience right in your browser. Check it at: http://www.handpoint.com/lab/cloudpos. A payment terminal is required to start testing.
Get started today with our sandbox. You can generate sample transactions and test the experience right in your browser. Check it at: http://www.handpoint.com/lab/cloudpos. A payment terminal is required to start testing.

This is the initial setup screen:

<!-- ![Sandbox logo](/img/cloudpos.png) -->

To get started, select the target environment where you are going to operate (Sandbox/Production). If the user has any doubts selecting the correct environment, click on  "*How do I know what type of card reader do I have?*" and you will be redirected to an explanation page.

<!-- ![Sandbox logo](/img/cloudpos2.png) -->

Next, enter your Handpoint API key in the box labeled "*INSERT API KEY*” and click the check button. This will automatically populate the “*SELECT A DEVICE*” drop down with the list of devices that are assigned to you. If the API key is not valid, an error message will appear in the “RESPONSES” section of the sandbox.

<!-- ![Sandbox logo](/img/cloudpos3.png) -->

Before you can begin any further testing, you first must select the device that you will be using. In the “*SELECT A DEVICE*” list, you will see both the real terminals assigned to you, as well as simulated devices (listed by serial number). You can choose any device to test with. Serial numbers for the simulated devices always have this format: XXXX | 999999xxxxx. Choose a simulated terminal if you do not have access to a real device or if you just want to see simulated behavior. You can refresh the “*SELECT A DEVICE*” list by clicking the refresh button on the right side of the “*SELECT A DEVICE*” box. If you are already connected to a device, you can disconnect from it using the “*Disconnect*” button or trigger a software and configuration update operation by using the "*Update*" button.

<!-- ![Sandbox logo](/img/cloudpos4.png) -->

Once you have selected a device, the “SELECT A DEVICE” box will be disabled, and the rest of the sandbox will be enabled. With your selected device, you can simulate a number of operations, including:

- sale
- sale and tokenize
- refund
- tokenize card
- reverse sale transactions
- reverse refund transactions

In order to reverse a transaction, a transaction id is needed, this id is available in the transaction result data coming from a previous sale or refund operation. Each transaction result will appear in the RESPONSES panel, on the right side of the screen.

With each transaction result you will be able to perform several operations:
- View and print the merchant receipt
- View and print the customer receipt
- Reverse the transaction
- Copy the transaction result data; it is the raw transaction result, as received by the application from the device

<!-- ![Sandbox logo](/img/cloudpos5.png) -->