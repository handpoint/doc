import React from 'react';
import Layout from '@theme/Layout';
import logo from './header.png';
import './index.module.css';
import styles from './index.module.css';


function Hello() {
  return (

    <Layout title="Handpoint Doc">
      <Header />
      <main>
        <div
          style={{
            display: 'block',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '15px',
            marginTop: '25px',
            marginLeft: '250px',
            marginRight: '150px'
          }}>

          <h2>Step 1. Choose your SDK</h2>
          <br></br>
          <h3>High level features supported by the SDKs:</h3>
          <p>
            The Handpoint SDKs provide you with several functions to communicate with the payment terminals:
            <br></br>
            <ul>
              <li> <b>Sale operation</b> - It starts a purchase transaction on the payment terminal. In its
                simplest form
                you only have to pass the transaction amount and currency as parameters.</li>
              <li> <b>Sale and tokenize operation</b> - A sale operation which also returns a card token
                (not available for all acquirers, please check with Handpoint to know if tokenization is
                supported for your acquirer of choice)</li>
              <li> <b>Tokenize operation</b> - Returns a card token representing the PAN of the card (not available for
                all acquirers,
                please check with Handpoint to know if tokenization is supported for your
                acquirer of choice)</li>
              <li> <b>Refund operation</b> - It starts a refund transaction on the payment terminal. This
                operation moves
                funds from the merchant account to the cardholder's payment card. </li>
              <li> <b>Sale reversal operation</b> - Allows the merchant to reverse a previously approved sale
                operation.
              </li>
              <li> <b>Refund reversal operation</b> - Allows the merchant to reverse a previously approved
                refund
                operation.</li>
              <li> <b>Card pan operation</b> - A cardPan request will return the full PAN of the card being swiped,
                dipped or tapped. Only the PANs of whitelisted card ranges will be returned by the
                Handpoint systems. This operation is mostly used to be able to process funds or points
                from loyalty card.</li>
              <li> <b>Update operation</b> - Allows the merchant to search for the latest software updates on
                the
                terminal.</li>
              <li> <b>Print receipt operation</b> - This method sends the merchant or customer receipt to the
                terminal for printing. The printer can print any HTML data passed as parameter.</li>
              <li> <b>Ping operation</b> - This operation will ping the terminal to confirm if it is online.</li>
              <li> <b>Stop current transaction operation</b> - Operation used to stop the current transaction.
                The transaction can only be stopped at specific stages of a payment processing,
                for example a transaction can not be stopped when the card is being read but can
                be stopped when waiting for the cardholder to initially insert a card.</li>

            </ul>
          </p>
          <p>
            Status messages are sent back to the SDK throughout the transaction process so you can customize the checkout experience. At the end of the transaction, the result and receipts of the transaction are sent back to your application in a JSON format.
            No cardholder data is transmitted to your POS so you can be kept out of scope of the PCI data security standard.
          </p>
          <br />
          <h3>Payment terminals supported by SDK:</h3>
        </div>
        <div >
          <div>
          </div>
        </div>
        <Step1table />
        <div
          style={{
            display: 'block',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '15px',
            marginTop: '25px',
            marginLeft: '250px',
            marginRight: '150px'
          }}>
          <h2>Step 2. Check your terminal specs:</h2>
          <h3>High level features supported by the SDKs:</h3>
        </div>
        <Step2tableterminals />
        <div
          style={{
            display: 'block',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '15px',
            marginTop: '25px',
            marginLeft: '250px',
            marginRight: '150px'
          }}>
          <h3>Communication types:</h3>
        </div>
        <Step2tablecomms />
        <br></br>
        <div
          style={{
            display: 'block',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '15px',
            marginTop: '25px',
            marginLeft: '250px',
            marginRight: '150px'
          }}>
          <h2>Step 3. Choose your payment processor(s)</h2>
          <h3>Solutions by processor</h3>
        </div>
        <Step3tableprocessor />
        <div style={{
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '15px',
          marginTop: '25px',
          marginLeft: '250px',
          marginRight: '150px'
        }}>
          <h3>By features supported:</h3>
        </div>
        <Step3tablefeatures />
        <Step4 />
        <Github />
        <Helpandsupport />
      </main>
    </Layout>
  );
}

export default Hello;


function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}


function Step1table() {
  return (

    <div
      style={{
        width: '70%',
        textAlign: 'center',
        height: '30%'
      }}>
      <table style={{ width: '100%', height: '100%', marginLeft: '10px' }}>
        <thead>
          <tr>
            <th class="text-center" ></th>
            <th class="text-center" >Android SDK</th>
            <th class="text-center" >iOS SDK</th>
            <th class="text-center" >Windows SDK</th>
            <th class="text-center" >Cordova SDK</th>
            <th class="text-center" >Express SDK</th>
            <th class="text-center" >Javascript SDK</th>
            <th class="text-center" >REST API</th>
            <th class="text-center" >Xamarin SDK</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="text-center" >
              <a target="_tab" href="https://handpoint.com/specs/hilite/">HiLite</a>
            </th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>-</td>
            <td>-</td>
            <td></td>
          </tr>
          <tr>
            <th class="text-center" >
              <a target="_tab" href="https://handpoint.com/specs/hipro/">HiPro</a>
            </th>
            <td>-</td>
            <td></td>
            <td>-</td>
            <td></td>
            <td></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <th class="text-center" >
              <a target="_tab" href="https://handpoint.com/specs/hi5/">Hi5</a>
            </th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>-</td>
            <td>-</td>
            <td></td>
          </tr>
          <tr>
            <th class="text-center" >
              <a target="_tab" href="https://handpoint.com/specs/paxa920/">PAX A920</a>
            </th>
            <td></td>
            <td>-</td>
            <td></td>
            <td></td>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th class="text-center" >
              <a target="_tab"
                href="https://www.pax.us/wp-content/uploads/2021/06/A920-Pro-Data-Sheet_May2021.pdf">PAX
                A920 Pro</a>
            </th>
            <td></td>
            <td>-</td>
            <td></td>
            <td></td>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th class="text-center" >
              <a target="_tab"
                href="https://www.pax.us/wp-content/uploads/2021/06/A60-Data-Sheet_May2021.pdf">PAX A60</a>
            </th>
            <td></td>
            <td>-</td>
            <td></td>
            <td></td>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th class="text-center" >
              <a target="_tab"
                href="https://www.pax.us/wp-content/uploads/2021/06/A77-Data-Sheet_May2021.pdf">PAX A77</a>
            </th>
            <td></td>
            <td>-</td>
            <td></td>
            <td></td>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th class="text-center" >
              <a target="_tab" href="https://handpoint.com/specs/paxa80/">PAX A80</a>
            </th>
            <td></td>
            <td>-</td>
            <td></td>
            <td></td>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th class="text-center" >
              <a target="_tab" href="https://handpoint.com/specs/TPS900/">Telpo TPS900</a>
            </th>
            <td></td>
            <td>-</td>
            <td></td>
            <td></td>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* <tr>
                    <td></td>
                    <td class="text-left">
                        - Written in native Java and Kotlin
                        <br></br> - Available through Maven Central
                        <br></br> - Min api version 22
                        <br></br> - Target api version 29
                        <br></br> - JDK 1.8
                    </td>
                    <td class="text-left">
                        - Written in Objective-C
                        <br></br>- Available through Cocoapods and Carthage
                        <br></br>- Min iOS deployment version 8.0
                        <br></br>- iOS deployment target version 8.0
                    </td>
                    <td class="text-left">
                        - Written in csharp
                        <br></br>- Available through NuGet
                        <br></br>- .Net Framework Version 4.6.1
                    </td>
                    <td class="text-left">
                        - Version &gt;=3.0.0
                        <br></br>- Compatible with Android and iOS
                    </td>
                    <td class="text-left">
                        - HiLite, HiPro or Hi5 terminals are your preferred form factors.
                        <br></br>- Lightweight integration
                        <br></br>- <b>Important Note:</b> The Express app must be installed on the merchants
                        device (computer/tablet/phone).
                    </td>
                    <td class="text-left">
                        - ECMAScript 6
                        <br></br>- Enables remote control of Android based terminals like PAX or Telpo.
                    </td>
                    <td class="text-left">
                        - Searching for a quick, simple and tremendously flexible integration, this is your choice
                    </td>
                    <td class="text-left">
                        - Xamarin SDK maintained by the community of Handpoint developers.
                    </td>
                </tr> */}
        </tbody>
      </table>


    </div>

  );

}


function Step2tableterminals() {
  return (


    <div
      style={{
        width: '70%',
        textAlign: 'center',
        height: '30%'
      }}>
      <table >
        <thead>
          <tr>
            <th >
              <a href="https://handpoint.com/specs/hipro/">HiPro <br></br>
                <img style={{ height: '80px' }}
                  src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/HiPro_and_Sled.png"
                  alt="">
                </img>


              </a>
            </th>
            <th>
              <a href="https://handpoint.com/specs/hi5/">Hi5 <br></br><img style={{ height: '80px' }}
                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/Hi5-large-crop.png?h=300&amp;w=200"
                alt=""></img></a>
            </th>
            <th >
              <a href="https://handpoint.com/specs/paxa920/">PAX A920 <br></br><img style={{ height: '80px' }}

                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/SmartPOS_clean.png"
                alt=""></img></a>
            </th>
            <th >
              <a
                href="https://www.pax.us/wp-content/uploads/2021/06/A920-Pro-Data-Sheet_May2021.pdf">PAX
                A920 Pro<br></br><img style={{ height: '80px' }}
                  src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/SmartPOS_clean.png"
                  alt=""></img></a>
            </th>
            <th >
              <a
                href="https://www.pax.us/wp-content/uploads/2021/06/A60-Data-Sheet_May2021.pdf">PAX
                A60<br></br><img style={{ height: '80px' }}
                  src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/PAX_A60.png"
                  alt=""></img></a>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

function Step2tablecomms() {
  return (
    <table>
      <thead className={styles.tableCentered}>
        <tr>
          <th class="text-center"></th>
          <th class="text-center">Lightning</th>
          <th class="text-center">Bluetooth</th>
          <th class="text-center">Ethernet</th>
          <th class="text-center">Mobile Network</th>
          <th className={{ textAlign: "text-center" }}>Wifi</th>
        </tr>
      </thead>
      <tr className={styles.tableCentered}>
        <th className={{ textAlign: "text-center" }}>
          <a target="_tab" href="https://handpoint.com/specs/hilite/">HiLite</a>
        </th>
        <td className={styles.tableCentered}>-</td>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
      </tr>
      <tr>
        <th class="text-center" >
          <a target="_tab" href="https://handpoint.com/specs/hipro/">HiPro</a>
        </th>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
      </tr>
      <tr>
        <th class="text-center" >
          <a target="_tab" href="https://handpoint.com/specs/hi5/">Hi5</a>
        </th>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center"> (2G)
        </td>
        <td class="text-center">-</td>
      </tr>
      <tr>
        <th class="text-center" >
          <a target="_tab" href="https://handpoint.com/specs/paxa920/">PAX A920</a>
        </th>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center"> (4G/LTE)
        </td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" >
          <a target="_tab"
            href="https://www.pax.us/wp-content/uploads/2021/06/A920-Pro-Data-Sheet_May2021.pdf">PAX A920
            Pro</a>
        </th>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center"> (4G/LTE)
        </td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" >
          <a target="_tab" href="https://www.pax.us/wp-content/uploads/2021/06/A60-Data-Sheet_May2021.pdf">PAX
            A60</a>
        </th>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center"> (4G/LTE)
        </td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" >
          <a target="_tab" href="https://www.pax.us/wp-content/uploads/2021/06/A77-Data-Sheet_May2021.pdf">PAX
            A77</a>
        </th>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center"> (4G/LTE)
        </td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" >
          <a target="_tab" href="https://handpoint.com/specs/paxa80/">PAX A80</a>
        </th>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center"> (4G/LTE)
        </td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" >
          <a target="_tab" href="https://handpoint.com/specs/TPS900/">Telpo TPS900</a>
        </th>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center"> (4G)
        </td>
        <td class="text-center"></td>
      </tr>
    </table>

  );

}


function Step3tableprocessor() {
  return (
    <table>
      <thead>
        <tr>
          <th class="text-center"></th>
          <th class="text-center">TSYS<br></br>(US & CN)</th>
          <th class="text-center">Worldpay<br></br>(US)</th>
          <th class="text-center">EVO<br></br>(US & EU)</th>
          <th class="text-center">Borgun<br></br>(EU)</th>
          <th class="text-center">Lloyds<br></br>(EU)</th>
          <th class="text-center">eMerchantPay<br></br>(EU)</th>
          <th class="text-center">Paystrax<br></br>(EU)</th>
          <th class="text-center">SureSwipe<br></br>(SAf)</th>
          <th class="text-center">NRT Technology<br></br>(CN)</th>
          <th class="text-center">Paysafe<br></br>(US, CN & EU)</th>
          <th class="text-center">OmniPay<br></br>(EU)</th>
          <th class="text-center">Amex Direct<br></br>All Regions</th>
        </tr>
      </thead>
      <tr>
        <th class="text-center" >
          <a target="_tab" href="https://handpoint.com/specs/hilite/">HiLite</a>
        </th>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" >
          <a target="_tab" href="https://handpoint.com/specs/hipro/">HiPro</a>
        </th>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" >
          <a target="_tab" href="https://handpoint.com/specs/hi5/">Hi5</a>
        </th>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" >
          <a target="_tab" href="https://handpoint.com/specs/paxa920/">PAX A920</a>
        </th>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" >
          <a target="_tab"
            href="https://www.pax.us/wp-content/uploads/2021/06/A920-Pro-Data-Sheet_May2021.pdf">PAX A920
            Pro</a>
        </th>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" >
          <a target="_tab" href="https://www.pax.us/wp-content/uploads/2021/06/A60-Data-Sheet_May2021.pdf">PAX
            A60</a>
        </th>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" >
          <a target="_tab" href="https://www.pax.us/wp-content/uploads/2021/06/A77-Data-Sheet_May2021.pdf">PAX
            A77</a>
        </th>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" >
          <a target="_tab" href="https://handpoint.com/specs/paxa80/">PAX A80</a>
        </th>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" >
          <a target="_tab" href="https://handpoint.com/specs/TPS900/">Telpo TPS900</a>
        </th>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
      </tr>
    </table>

  );
}


function Step3tablefeatures() {
  return (
    <table>
      <thead>
        <tr>
          <th class="text-center"></th>
          <th class="text-center">TSYS<br></br>(US & CN)</th>
          <th class="text-center">Worldpay<br></br>(US)</th>
          <th class="text-center">EVO<br></br>(US & EU)</th>
          <th class="text-center">Borgun<br></br>(EU)</th>
          <th class="text-center">Lloyds<br></br>(EU)</th>
          <th class="text-center">eMerchantPay<br></br>(EU)</th>
          <th class="text-center">Paystrax<br></br>(EU)</th>
          <th class="text-center">SureSwipe<br></br>(South Africa)</th>
          <th class="text-center">NRT Technology<br></br>(CN)</th>
          <th class="text-center">Paysafe<br></br>(US, CN & EU)</th>
          <th class="text-center">OmniPay<br></br>(EU)</th>
          <th class="text-center">Amex Direct<br></br>All Regions</th>
        </tr>
      </thead>
      <tr>
        <th class="text-center" scope="row"> Card brands supported </th>
        <td class="text-center">Mastercard<br></br>VISA<br></br>Discover<br></br> Amex<br></br>Diners<br></br> JCB</td>
        <td class="text-center">Mastercard<br></br>VISA<br></br>Discover<br></br> Amex</td>
        <td class="text-center">Mastercard<br></br>VISA<br></br>Discover (US only)<br></br> Amex (US only)</td>
        <td class="text-center">Mastercard<br></br>VISA<br></br>Diners<br></br> JCB<br></br> Amex (IS only)</td>
        <td class="text-center">Mastercard<br></br>VISA<br></br>Diners<br></br> JCB<br></br> Amex</td>
        <td class="text-center">Mastercard<br></br>VISA<br></br> Amex</td>
        <td class="text-center">Mastercard<br></br>VISA<br></br> Amex</td>
        <td class="text-center">Mastercard<br></br>VISA<br></br> Amex</td>
        <td class="text-center">INTERAC</td>
        <td class="text-center">Mastercard<br></br>VISA<br></br> Discover<br></br> Amex<br></br>INTERAC</td>
        <td class="text-center">Mastercard<br></br>VISA</td>
        <td class="text-center">Amex</td>
      </tr>
      <tr>
        <th class="text-center" scope="row">EMV<br></br>(Chip & PIN or Chip & Sign)</th>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" scope="row">Magnetic stripe</th>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" scope="row">Contactless</th>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"> (EU
          only) </td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" scope="row">Apple/Android Pay</th>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"> (EU
          only) </td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" scope="row">In-line tipping</th>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" scope="row">Tip adjustment</th>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" scope="row">Tokenization with sale </th>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" scope="row">Tokenization only</th>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center"></td>
      </tr>
      <tr>
        <th class="text-center" scope="row">EBT (US specific)</th>
        <td class="text-center"></td>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
        <td class="text-center"></td>
        <td class="text-center">-</td>
        <td class="text-center">-</td>
      </tr>
    </table>

  );
}


function Step4() {
  return (

    <div>
      <div style={{
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '15px',
        marginTop: '25px',
        marginLeft: '250px',
        marginRight: '250px'
      }}>
        <h2>Step 4. Start your integration!</h2>
      </div>


      <div style={{
        display: 'flex  ',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '15px',
        marginTop: '25px',
        marginLeft: '25px',
        marginRight: '25px',
        textAlign: 'center',
        paddingRight: '50px'
      }}>
        <div className={styles.margingImages}>
          <a href="https://www.github.com/handpoint">
            <img src="https://handpoint.imgix.net/ballicons/small/android.png"></img>
          </a>
          <p>Android</p>
          <p>
            <a>View the SDK</a>
          </p>
        </div>

        <div className={styles.margingImages}>           <a href="https://www.github.com/handpoint">
          <img src="https://handpoint.imgix.net/ballicons/small/android.png"></img>
        </a>
          <p>iOS</p>
          <p>
            <a>View the SDK</a>
          </p>
        </div>

        <div className={styles.margingImages}>
          <a href="https://www.github.com/handpoint">
            <img src="https://handpoint.imgix.net/ballicons/small/android.png"></img>
          </a>
          <p>iOS</p>
          <p>
            <a>View the SDK</a>
          </p>
        </div>

        <div className={styles.margingImages}>
          <a href="https://www.github.com/handpoint">
            <img src="https://handpoint.imgix.net/ballicons/small/android.png"></img>
          </a>
          <p>iOS</p>
          <p>
            <a>View the SDK</a>
          </p>
        </div>
      </div>
      <div style={{
        display: 'flex  ',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '15px',
        marginTop: '25px',
        marginLeft: '25px',
        marginRight: '25px',
        textAlign: 'center',
        paddingRight: '50px'
      }}>
        <div className={styles.margingImages}>
          <a href="https://www.github.com/handpoint">
            <img src="https://handpoint.imgix.net/ballicons/small/android.png"></img>
          </a>
          <p>Android</p>
          <p>
            <a>View the SDK</a>
          </p>
        </div>

        <div className={styles.margingImages}>
          <a href="https://www.github.com/handpoint">
            <img src="https://handpoint.imgix.net/ballicons/small/android.png"></img>
          </a>
          <p>iOS</p>
          <p>
            <a>View the SDK</a>
          </p>
        </div>

        <div className={styles.margingImages}>
          <a href="https://www.github.com/handpoint">
            <img src="https://handpoint.imgix.net/ballicons/small/android.png"></img>
          </a>
          <p>iOS</p>
          <p>
            <a>View the SDK</a>
          </p>
        </div>

        <div className={styles.margingImages}>
          <a href="https://www.github.com/handpoint">
            <img src="https://handpoint.imgix.net/ballicons/small/android.png"></img>
          </a>
          <p>iOS</p>
          <p>
            <a>View the SDK</a>
          </p>
        </div>
      </div>

    </div>



  );

}


function Github() {
  return (

    <div
      style={{
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: '18px',
        marginTop: '25px',
        background: '#e9ecef',
        paddingTop: '25px',
        paddingBottom: '50px'
      }}>
      <p>You can also look at some getting-started sample apps, our SDKs and other fun stuff on the
        <a href="https://www.github.com/handpoint"> Handpoint GitHub</a> site
      </p>
      <a href="https://www.github.com/handpoint">
        <img src="https://handpoint.imgix.net/GitHub_Logo.png?w=200" class="img-responsive center-block"></img>
      </a>


    </div>

  );

}


function Helpandsupport() {
  return (
    <div
      style={{
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: '18px',
        marginTop: '25px',
        marginLeft: '250px',
        marginRight: '250px',
        marginBottom: '25px',
        paddingTop: '25px',
        paddingBottom: '50px'
      }}>
      <h2>Help & Support</h2>
      <p>Looking for something? If you have questions about anything not covered in our documentation,
        need assistance
        integrating,
        or are unsure where to go from here, our developer support team is here to help. </p>
      <button className="button button--secondary button--lg">
        Contact Us
      </button>
    </div>
  );
}

