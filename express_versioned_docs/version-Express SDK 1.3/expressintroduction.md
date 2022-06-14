---
sidebar_position: 1
id: expressintroduction
---

# Introduction

The Handpoint Express SDK is composed of a Custom URL Protocol, a javascript interface and the Handpoint Express application running on the clients platform (computer, tablet or phone). The Handpoint Express application acts as a bridge between the web browser and the bluetooth payment terminal (HiLite). When a transaction is initiated from the web based point of sale it reaches outside of the browser via a custom url. The Express application then takes care of commpleting the transaction with the payment terminal and sends the result and receipts back to the web application at the end of the operation. 


## Handpoint Express Installation

**Windows**

:::info
The Windows Express app is portable, no installation is required, just download it and run it once. The Express application will download updates automatically so you don't need to worry about keeping the application up to date.
:::

## Downloads


Get the Express apps! <br />  ![Express logo](/img/icon-express.png)  |  Get the SDK! <br />  ![Cloud logo](/img/cloud.png)
:-------------------------:|:-------------------------:
 [![iOS download](./assets/apple-store.png)](https://itunes.apple.com/us/app/express-handpoint/id1324085213?mt=8) <br />[![Android download](./assets/play-store.png)](https://play.google.com/store/apps/details?id=com.handpoint.express)<br />[![Windows download](./assets/windows-store.png)](/files/Express.exe)|  [![Javascript SDK download](/img/Javascriptsdk.png)](/files/hapiexpress.js.zip)

## Data Flow

![Sandbox logo](/img/Expressdiagram)

## Setup

Download and install the app for your platform and start integrating, either directly through the custom url scheme or by using our Javascript interface which abstracts the messaging format. You can start developing as soon as you receive a Handpoint payment terminal. Your end user, the merchant, only has to install the Express application on the platform of his choice to start accepting card present payments seamlessly with your application and a Handpoint card reader.
