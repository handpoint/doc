---
sidebar_position: 1
id: javascriptintroduction
---



# Introduction {#javascriptIntro}

<div class="card-demo" align='middle'  >
  <div class="card card-background" >
    <div class="card__header">
      <h3>JavaScript SDK</h3>
    </div>
    <div class="card__body">
      <a href="https://hpoint-cr-binaries-prod.s3.amazonaws.com/cloud/sdk/wrappers/js/6.2.0/handpoint-6.2.0.js">
  <img src="https://handpoint.imgix.net/ballicons/small/cloud.png"/> 
</a>
    </div>
    <div class="card__footer">
      <a class="button button--primary" href="https://hpoint-cr-binaries-prod.s3.amazonaws.com/cloud/sdk/wrappers/js/6.2.0/handpoint-6.2.0.js" >Get the latest JavaScript SDK!</a>
    </div>
  </div>
</div>

<br></br>

Download the Handpoint JavaScript SDK to integrate leading smartpos terminals with your cloud based software. The Handpoint JavaScript SDK is a simple javascript interface running in your web application which acts as a bridge between **the web browser and the payment terminal**, while shielding your software from handling card data. It is seamless to integrate, keeps your software out of PCI scope, and allows you to use the best Android terminals on the market.

Complete your integration in just three steps, initialize the interface, choose a terminal and start a sale. It is as simple as it sounds. The only thing you need is a valid API key to communicate with the payment terminal. As part of the initialize step you will get back a list of terminals with which you can connect. Simply execute the financial operation, and within seconds you’ll get back the transaction result and receipt in your software, all while you monitor the transaction status. The Handpoint Javascript SDK seamlessly starts and manages the entire point to point encrypted transaction with the payment terminal, minimizing hassle for you and maximizing reliability, security, and control.

For your merchants, the terminal setup is easier than a standalone. A merchant connects the terminal to their network, just like a smartphone, authenticates his/her account, and it simply works. Your software then control the terminal from anywhere in the world, and your merchants have secure, reliable and intuitive payments.

## API Overview

The following transaction flow shows how easy it is to add card present payments to your web based application. The interaction between your cloud application and the Handpoint Javascript SDK is simple and streamlined. The Handpoint Javascript SDK takes care of the communication with the payment terminal. The status messages are received in your web application via the callback function defined in the financial operation requests call. That’s it.

![Sandbox logo](/img/jsoverview.png)

