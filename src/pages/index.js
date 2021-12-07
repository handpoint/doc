import React from 'react';
import Layout from '@theme/Layout';
import logo from './header.png';
import './index.module.css';
import styles from './index.module.css';
import Link from '@docusaurus/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { height } from '@mui/system';


function Hello() {
  return (

    <Layout title="Handpoint Doc">
      <Header />
      <main>
        <div class="step1">

          {/* style={{
            display: 'block',
            justifyContent: 'center',
            
            fontSize: '15px',
            marginTop: '25px',
            width: '80%',
            marginLeft:'50px'
           

           }}> */}

          <h2>Step 1. Choose your SDK</h2>
          <br></br>
          <h3>High level features supported by the SDKs:</h3>
          <p>
            The Handpoint SDKs provide you with several functions to communicate with the payment terminals:
            <br></br>
            <br></br>

            <div class="card-demo" style={{ fontSize: '13px' }}>
              <div class="card shadow--md ">
                <div class="card__header">
                  <h4>Sale operation</h4>
                </div>
                <div class="card__body">
                  <p>
                    It starts a purchase transaction on the payment terminal. In its
                    simplest form
                    you only have to pass the transaction amount and currency as parameters.
                  </p>
                </div>
              </div>
            </div>
            <br></br>


            <div class="card-demo" style={{ fontSize: '13px' }}>
              <div class="card shadow--md " >

                <div class="card__header" >
                  <h4>Sale and tokenize operation</h4>
                </div>
                <div class="card__body" >
                  <p>
                    A sale operation which also returns a card token
                    (not available for all acquirers, please check with Handpoint to know if tokenization is
                    supported for your acquirer of choice)
                  </p>
                </div>
              </div>
            </div>
            <br></br>

            <div class="card-demo" style={{ fontSize: '13px' }}>
              <div class="card shadow--md " >
                <div class="card__header">
                  <h4>Tokenize operation</h4>
                </div>
                <div class="card__body">
                  <p>
                    Returns a card token representing the PAN of the card (not available for
                    all acquirers,
                    please check with Handpoint to know if tokenization is supported for your
                    acquirer of choice)
                  </p>
                </div>
              </div>
            </div>
            <br></br>

            <div class="card-demo" style={{ fontSize: '13px' }}>
              <div class="card shadow--md ">
                <div class="card__header">
                  <h4>Refund operation</h4>
                </div>
                <div class="card__body">
                  <p>
                    It starts a refund transaction on the payment terminal. This
                    operation moves
                    funds from the merchant account to the cardholder's payment card.
                  </p>
                </div>
              </div>
            </div>
            <br></br>

            <div class="card-demo" style={{ fontSize: '13px' }}>
              <div class="card shadow--md ">
                <div class="card__header">
                  <h4>Sale reversal operation</h4>
                </div>
                <div class="card__body">
                  <p>
                    Allows the merchant to reverse a previously approved sale
                    operation.
                  </p>
                </div>
              </div>
            </div>
            <br></br>

            <div class="card-demo" style={{ fontSize: '13px' }}>
              <div class="card shadow--md ">
                <div class="card__header">
                  <h4>Refund reversal operation</h4>
                </div>
                <div class="card__body">
                  <p>
                    Allows the merchant to reverse a previously approved
                    refund
                    operation.
                  </p>
                </div>
              </div>

            </div>
            <br></br>

            <div class="card-demo" style={{ fontSize: '13px' }}>
              <div class="card shadow--md ">
                <div class="card__header">
                  <h4>Card PAN operation</h4>
                </div>
                <div class="card__body">
                  <p>
                    A cardPan request will return the full PAN of the card being swiped, dipped or tapped.
                    Only the PANs of whitelisted card ranges will be returned by the Handpoint systems.
                    This operation is mostly used to be able to process funds or points from loyalty card.
                  </p>
                </div>
              </div>
            </div>
            <br></br>

            <div class="card-demo" style={{ fontSize: '13px' }}>
              <div class="card shadow--md ">
                <div class="card__header">
                  <h4>Update operation</h4>
                </div>
                <div class="card__body">
                  <p>
                    Allows the merchant to search for the latest software updates on the terminal.
                  </p>
                </div>
              </div>
            </div>
            <br></br>

            <div class="card-demo" style={{ fontSize: '13px' }}>
              <div class="card shadow--md ">
                <div class="card__header">
                  <h4>Print receipt operation</h4>
                </div>
                <div class="card__body">
                  <p>
                    This method sends the merchant or customer receipt to the terminal for printing. The printer can print any HTML data passed as parameter.
                  </p>
                </div>
              </div>

            </div>
            <br></br>

            <div class="card-demo" style={{ fontSize: '13px' }}>
              <div class="card shadow--md ">
                <div class="card__header">
                  <h4>Ping operation</h4>
                </div>
                <div class="card__body">
                  <p>
                    This operation will ping the terminal to confirm if it is online.
                  </p>
                </div>
              </div>
            </div>
            <br></br>

            <div class="card-demo" style={{ fontSize: '13px' }}>
              <div class="card shadow--md ">
                <div class="card__header">
                  <h4>Stop current transaction operation</h4>
                </div>
                <div class="card__body">
                  <p>
                    Operation used to stop the current transaction. The transaction can only be stopped at specific stages of a payment processing, for example a transaction can not be stopped when the card is being read but can be stopped when waiting for the cardholder to initially insert a card.
                  </p>
                </div>
              </div>

            </div>
            <br></br>



            {/* <ul>
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

            </ul> */}
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
        <br></br>
        <div class="step1">
          <h2>Step 2. Check your terminal specs:</h2>
          <h3>Terminal full specifications:</h3>
        </div>
        <Step2tableterminals />
        <br></br>
        <div class="step1">
          <h3>Communication types:</h3>
        </div>
        <Step2tablecomms />
        <br></br>
        <Step3 />
        <Github />

        <Helpandsupport />
      </main>
    </Layout>
  );
}

export default Hello;


function Header() {
  // Import result is the URL of your image
  //return <img src={logo} alt="Logo" />;

  return (

    <div
      style={{
        backgroundColor: ' #34495e',
        textAlign: 'center',
        display: 'block',
        height: '250px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '80px',
        width: '100%'
      }}>

      <img src="img/handpoint-logo-hvitt.svg" alt="Logo" height="60px" />

      <br></br>

      <h2 style={{
        color: 'white'
      }} >Card payments. Made simple</h2>
      <div>

      </div>

    </div>



  );
}


function Step1table() {
  return (


    // <table style={{ width: '80%', marginLeft: '15%' }}>
    //   <thead>
    //     <tr>
    //       <th class="text-center" ></th>
    //       <th class="text-center" >Android SDK</th>
    //       <th class="text-center" >iOS SDK</th>
    //       <th class="text-center" >Windows SDK</th>
    //       <th class="text-center" >Cordova SDK</th>
    //       <th class="text-center" >Express SDK</th>
    //       <th class="text-center" >Javascript SDK</th>
    //       <th class="text-center" >REST API</th>
    //       <th class="text-center" >Xamarin SDK</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <th class="text-center" >
    //         <a href="https://handpoint.com/specs/hilite/">HiLite</a>
    //       </th>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>-</td>
    //       <td align='center'>-</td>
    //       <td align='center'>✅</td>
    //     </tr>
    //     <tr>
    //       <th class="text-center" >
    //         <a target="_tab" href="https://handpoint.com/specs/hipro/">HiPro</a>
    //       </th>
    //       <td align='center'>-</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>-</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>-</td>
    //       <td align='center'>-</td>
    //       <td align='center'>-</td>
    //     </tr>
    //     <tr>
    //       <th class="text-center" >
    //         <a target="_tab" href="https://handpoint.com/specs/hi5/">Hi5</a>
    //       </th>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>-</td>
    //       <td align='center'>-</td>
    //       <td align='center'>✅</td>

    //     </tr>
    //     <tr>
    //       <th class="text-center" >
    //         <a target="_tab" href="https://handpoint.com/specs/paxa920/">PAX A920</a>
    //       </th>
    //       <td align='center'>✅</td>
    //       <td align='center'>-</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>-</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //     </tr>
    //     <tr>
    //       <th class="text-center" >
    //         <a target="_tab"
    //           href="https://www.pax.us/wp-content/uploads/2021/06/A920-Pro-Data-Sheet_May2021.pdf">PAX
    //           A920 Pro</a>
    //       </th>
    //       <td align='center'>✅</td>
    //       <td align='center'>-</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>-</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //     </tr>
    //     <tr>
    //       <th class="text-center" >
    //         <a target="_tab"
    //           href="https://www.pax.us/wp-content/uploads/2021/06/A60-Data-Sheet_May2021.pdf">PAX A60</a>
    //       </th>
    //       <td align='center'>✅</td>
    //       <td align='center'>-</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>-</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //     </tr>
    //     <tr>
    //       <th class="text-center" >
    //         <a target="_tab"
    //           href="https://www.pax.us/wp-content/uploads/2021/06/A77-Data-Sheet_May2021.pdf">PAX A77</a>
    //       </th>
    //       <td align='center'>✅</td>
    //       <td align='center'>-</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>-</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //     </tr>
    //     <tr>
    //       <th class="text-center" >
    //         <a target="_tab" href="https://handpoint.com/specs/paxa80/">PAX A80</a>
    //       </th>
    //       <td align='center'>✅</td>
    //       <td align='center'>-</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>-</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //     </tr>
    //     <tr>
    //       <th class="text-center" >
    //         <a target="_tab" href="https://handpoint.com/specs/TPS900/">Telpo TPS900</a>
    //       </th>
    //       <td align='center'>✅</td>
    //       <td align='center'>-</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>-</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //       <td align='center'>✅</td>
    //     </tr>
    //     {/* <tr>
    //                 <td></td>
    //                 <td class="text-left">
    //                     - Written in native Java and Kotlin
    //                     <br></br> - Available through Maven Central
    //                     <br></br> - Min api version 22
    //                     <br></br> - Target api version 29
    //                     <br></br> - JDK 1.8
    //                 </td>
    //                 <td class="text-left">
    //                     - Written in Objective-C
    //                     <br></br>- Available through Cocoapods and Carthage
    //                     <br></br>- Min iOS deployment version 8.0
    //                     <br></br>- iOS deployment target version 8.0
    //                 </td>
    //                 <td class="text-left">
    //                     - Written in csharp
    //                     <br></br>- Available through NuGet
    //                     <br></br>- .Net Framework Version 4.6.1
    //                 </td>
    //                 <td class="text-left">
    //                     - Version &gt;=3.0.0
    //                     <br></br>- Compatible with Android and iOS
    //                 </td>
    //                 <td class="text-left">
    //                     - HiLite, HiPro or Hi5 terminals are your preferred form factors.
    //                     <br></br>- Lightweight integration
    //                     <br></br>- <b>Important Note:</b> The Express app must be installed on the merchants
    //                     device (computer/tablet/phone).
    //                 </td>
    //                 <td class="text-left">
    //                     - ECMAScript 6
    //                     <br></br>- Enables remote control of Android based terminals like PAX or Telpo.
    //                 </td>
    //                 <td class="text-left">
    //                     - Searching for a quick, simple and tremendously flexible integration, this is your choice
    //                 </td>
    //                 <td class="text-left">
    //                     - Xamarin SDK maintained by the community of Handpoint developers.
    //                 </td>
    //             </tr> */}
    //   </tbody>
    // </table>

    <div>
      <TableContainer>
        <Table align="center" sx={{ maxWidth: 1000 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ height: 30 }}>
              <TableCell></TableCell>
              <TableCell align="center"><b><Link to="/android/androidintroduction"> Android SDK</Link></b>
              </TableCell>
              <TableCell align="center"><b><Link to="/ios/iosintroduction"> iOS SDK</Link></b></TableCell>
              <TableCell align="center"><b><Link to="/windows/windowsintroduction"> Windows SDK</Link></b></TableCell>
              <TableCell align="center"><b><Link href="https://www.npmjs.com/package/cordova-plugin-handpoint"> Cordova SDK</Link></b></TableCell>
              <TableCell align="center"><b><Link to="/express/expressintroduction"> Express SDK</Link></b></TableCell>
              <TableCell align="center"><b><Link to="/javascript/javascriptintroduction"> JavaScript SDK</Link></b></TableCell>
              <TableCell align="center"><b><Link to="/restapi/restintroduction"> REST API</Link></b></TableCell>
              <TableCell align="center"><b><Link href="https://github.com/thescruba/xamarin-handpoint-bindings"> Xamarin SDK</Link></b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center"><b><a href="https://handpoint.com/specs/hilite/">HiLite</a></b></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b><a href="https://handpoint.com/specs/hipro/">HiPro</a></b></TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b><a href="https://handpoint.com/specs/hi5/">Hi5</a></b></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b><a href="https://handpoint.com/specs/paxa920/">PAX A920</a></b></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>


            <TableRow>
              <TableCell align="center"><b><a href="https://www.pax.us/wp-content/uploads/2021/06/A920-Pro-Data-Sheet_May2021.pdf">PAX A920 PRO</a></b></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b><a href="https://www.pax.us/wp-content/uploads/2021/06/A60-Data-Sheet_May2021.pdf">PAX A60</a></b></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b><a href="https://www.pax.us/wp-content/uploads/2021/06/A77-Data-Sheet_May2021.pdf">PAX A77</a></b></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b><a href="https://handpoint.com/specs/paxa80/">PAX A80</a></b></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b><a href="https://handpoint.com/specs/TPS900/">Telpo TPS900</a></b></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>


          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

}


function Step2tableterminals() {
  return (


    // <div style={{ width: '80%', marginLeft: '15%' }}>
    //   <table style={{
    //     width: '70%',
    //     textAlign: 'center',
    //     height: '30%'
    //   }}>
    //     <thead>
    //       <tr>
    //         <th >
    //           <a href="https://handpoint.com/specs/hilite/">HiLite <br></br>
    //             <img style={{ height: '80px' }}
    //               src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/HiLite_big.jpg?fit=crop&crop=focalpoint&fp-y=.53&h=750&w=600&fp-z=4.5&fp-x=.5"
    //               alt="">
    //             </img>


    //           </a>
    //         </th>
    //         <th >
    //           <a href="https://handpoint.com/specs/hipro/">HiPro <br></br>
    //             <img style={{ height: '80px' }}
    //               src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/HiPro_and_Sled.png"
    //               alt="">
    //             </img>


    //           </a>
    //         </th>
    //         <th>
    //           <a href="https://handpoint.com/specs/hi5/">Hi5 <br></br><img style={{ height: '80px' }}
    //             src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/Hi5-large-crop.png?h=300&amp;w=200"
    //             alt=""></img></a>
    //         </th>
    //         <th >
    //           <a href="https://handpoint.com/specs/paxa920/">PAX A920 <br></br><img style={{ height: '80px' }}

    //             src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/SmartPOS_clean.png"
    //             alt=""></img></a>
    //         </th>
    //         <th >
    //           <a
    //             href="https://www.pax.us/wp-content/uploads/2021/06/A920-Pro-Data-Sheet_May2021.pdf">PAX
    //             A920 Pro<br></br><img style={{ height: '80px' }}
    //               src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/SmartPOS_clean.png"
    //               alt=""></img></a>
    //         </th>
    //         <th >
    //           <a
    //             href="https://uploads.strikinglycdn.com/files/3e131f4b-daec-42e1-802c-8e2329794ace/A50_EN_20200522.pdf">PAX
    //             A50<br></br><img style={{ height: '80px' }}
    //               src="https://i.ibb.co/LZvJ5hx/main-photo-min.png"
    //               alt=""></img></a>
    //         </th>

    //         <th >
    //           <a
    //             href="https://www.pax.us/wp-content/uploads/2021/06/A60-Data-Sheet_May2021.pdf">PAX
    //             A60<br></br><img style={{ height: '80px' }}
    //               src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/PAX_A60.png"
    //               alt=""></img></a>
    //         </th>
    //         <th >
    //           <a href="https://www.pax.us/wp-content/uploads/2021/06/A77-Data-Sheet_May2021.pdf">PAX A77 <br></br>
    //             <img style={{ height: '80px' }}
    //               src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/PAX_A77.png"
    //               alt="">
    //             </img>


    //           </a>
    //         </th>
    //         <th>
    //           <a href="https://handpoint.com/specs/paxa80/">PAX A80<br></br><img style={{ height: '80px' }}
    //             src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/Pax_A80.png"
    //             alt=""></img></a>
    //         </th>
    //         <th >
    //           <a href="https://handpoint.com/specs/TPS900/">Telpo TPS 900 <br></br><img style={{ height: '80px' }}

    //             src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/TPS900_zoom.png"
    //             alt=""></img></a>
    //         </th>

    //       </tr>

    //     </thead>
    //   </table>
    // </div>
    // <TableContainer>
    // <Table align="center" sx={{ maxWidth:1050 , tableLayout:'fixed'}} aria-label="simple table">
    //         <TableRow align="center">

    //           <TableCell align="center"><a href="https://handpoint.com/specs/hilite/">HiLite <br></br>
    //              <img style={{ height: '80px' }}
    //                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/HiLite_big.jpg?fit=crop&crop=focalpoint&fp-y=.53&h=750&w=600&fp-z=4.5&fp-x=.5"
    //                alt="">
    //              </img></a>
    //           </TableCell>
    //           <TableCell align="center"><a href="https://handpoint.com/specs/hilite/">HiPro <br></br>
    //              <img style={{ height: '80px' }}
    //                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/HiPro_and_Sled.png"
    //                alt="">
    //              </img></a></TableCell>
    //           <TableCell align="center"><a href="https://handpoint.com/specs/hilite/">Hi5 <br></br>
    //              <img style={{ height: '80px' }}
    //                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/Hi5-large-crop.png?h=300&amp;w=200"
    //                alt="">
    //              </img></a></TableCell>
    //           <TableCell align="center"><a href="https://handpoint.com/specs/hilite/">PAX A920 <br></br>
    //              <img style={{ height: '80px' }}
    //                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/SmartPOS_clean.png"
    //                alt="">
    //              </img></a>	</TableCell>
    //           <TableCell align="center"><a href="https://handpoint.com/specs/hilite/">PAX A920 PRO <br></br>
    //              <img style={{ height: '80px' }}
    //                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/SmartPOS_clean.png"
    //                alt="">
    //              </img></a></TableCell>

    //              <TableCell align="center"><a href="https://handpoint.com/specs/hilite/">PAX A50 <br></br>
    //              <img style={{ height: '80px' }}
    //                src="https://i.ibb.co/LZvJ5hx/main-photo-min.png"
    //                alt="">
    //              </img></a>
    //           </TableCell>
    //           <TableCell align="center"><a href="https://handpoint.com/specs/hilite/">PAX A60 <br></br>
    //              <img style={{ height: '80px' }}
    //                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/PAX_A60.png"
    //                alt="">
    //              </img></a></TableCell>
    //           <TableCell align="center"><a href="https://handpoint.com/specs/hilite/">PAX A77 <br></br>
    //              <img style={{ height: '80px' }}
    //                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/PAX_A77.png"
    //                alt="">
    //              </img></a></TableCell>
    //           <TableCell align="center"><a href="https://handpoint.com/specs/hilite/">PAX A80 <br></br>
    //              <img style={{ height: '80px' }}
    //                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/Pax_A80.png"
    //                alt="">
    //              </img></a>	</TableCell>
    //           <TableCell align="center"><a href="https://handpoint.com/specs/hilite/">Telpo TPS 900 <br></br>
    //              <img style={{ height: '80px' }}
    //                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/TPS900_zoom.png"
    //                alt="">
    //              </img></a></TableCell>

    //         </TableRow>


    //       </Table>
    <div class="container">

      <div class="row">
        <div class="col col--4"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <div class="card__header" >
              <b><a href="https://handpoint.com/specs/hilite/">HiLite</a></b>
            </div>
            <div class="card__body" align="center">
              <a><img style={{ height: '80px' }}
                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/HiLite_big.jpg?fit=crop&crop=focalpoint&fp-y=.53&h=750&w=600&fp-z=4.5&fp-x=.5"
                alt="">
              </img></a>
            </div>
          </div>
        </div></div>
        <div class="col col--4"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <div class="card__header">
              <b><a href="https://handpoint.com/specs/hilite/">HiPro</a></b>
            </div>
            <div class="card__body" align="center">
              <a><img style={{ height: '80px' }}
                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/HiPro_and_Sled.png"
                alt="">
              </img></a>
            </div>
          </div>
        </div></div>
        <div class="col col--4"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <div class="card__header">
              <b><a href="https://handpoint.com/specs/hilite/">Hi5</a></b>
            </div>
            <div class="card__body" align="center">
              <a><img style={{ height: '80px' }}
                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/Hi5-large-crop.png?h=300&amp;w=200"
                alt="">
              </img></a>
            </div>
          </div>
        </div></div>
      </div>
      <br></br>

      <div class="row">
        <div class="col col--4"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <div class="card__header" >
              <b><a href="https://handpoint.com/specs/hilite/">PAX A920</a></b>
            </div>
            <div class="card__body" align="center">
              <a><img style={{ height: '80px' }}
                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/SmartPOS_clean.png"
                alt="">
              </img></a>
            </div>
          </div>
        </div></div>
        <div class="col col--4"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <div class="card__header">
              <b><a href="https://handpoint.com/specs/hilite/">PAX A920 PRO</a></b>
            </div>
            <div class="card__body" align="center">
              <a><img style={{ height: '80px' }}
                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/SmartPOS_clean.png"
                alt="">
              </img></a>
            </div>
          </div>
        </div></div>
        <div class="col col--4"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <div class="card__header">
              <b><a href="https://handpoint.com/specs/hilite/">PAX A80</a></b>
            </div>
            <div class="card__body" align="center">
              <a><img style={{ height: '80px' }}
                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/Pax_A80.png"
                alt="">
              </img></a>
            </div>
          </div>
        </div></div>
      </div>
      <br></br>

      <div class="row">
        <div class="col col--3"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <div class="card__header" >
              <b><a href="https://handpoint.com/specs/hilite/">PAX A50</a></b>
            </div>
            <div class="card__body" align="center">
              <a><img style={{ height: '80px' }}
                src="https://i.ibb.co/LZvJ5hx/main-photo-min.png"
                alt="">
              </img></a>
            </div>
          </div>
        </div>
        </div>
        <div class="col col--3"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <div class="card__header" >
              <b><a href="https://handpoint.com/specs/hilite/">PAX A60</a></b>
            </div>
            <div class="card__body" align="center">
              <a><img style={{ height: '80px' }}
                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/PAX_A60.png"
                alt="">
              </img></a>
            </div>
          </div>
        </div>
        </div>
        <div class="col col--3"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <div class="card__header" >
              <b><a href="https://handpoint.com/specs/hilite/">PAX A77</a></b>
            </div>
            <div class="card__body" align="center">
              <a><img style={{ height: '80px' }}
                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/PAX_A77.png"
                alt="">
              </img></a>
            </div>
          </div>
        </div>
        </div>
        <div class="col col--3"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <div class="card__header" >
              <b><a href="https://handpoint.com/specs/TPS900/">TELPO TPS 900</a></b>
            </div>
            <div class="card__body" align="center">
              <a><img style={{ height: '80px' }}
                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/TPS900_zoom.png"
                alt="">
              </img></a>
            </div>
          </div>
        </div>
        </div></div>

    </div>
    // </TableContainer>

  );
}

function Step2tablecomms() {
  return (
    // <table style={{ width: '80%', marginLeft: '15%' }}>
    //   <thead className={styles.tableCentered}>
    //     <tr>
    //       <th class="text-center"></th>
    //       <th class="text-center">Lightning</th>
    //       <th class="text-center">Bluetooth</th>
    //       <th class="text-center">Ethernet</th>
    //       <th class="text-center">Mobile Network</th>
    //       <th className={{ textAlign: "text-center" }}>Wifi</th>
    //     </tr>
    //   </thead>
    //   <tr className={styles.tableCentered}>
    //     <th className={{ textAlign: "text-center" }}>
    //       <a target="_tab" href="https://handpoint.com/specs/hilite/">HiLite</a>
    //     </th>
    //     <td align='center'>-</td>
    //     <td align='center'>✅</td>
    //     <td align='center'>-</td>
    //     <td align='center'>-</td>
    //     <td align='center'>-</td>
    //   </tr>
    //   <tr>
    //     <th class="text-center" >
    //       <a target="_tab" href="https://handpoint.com/specs/hipro/">HiPro</a>
    //     </th>
    //     <td align='center'>✅</td>
    //     <td align='center'>-</td>
    //     <td align='center'>-</td>
    //     <td align='center'>-</td>
    //     <td align='center'>-</td>
    //   </tr>
    //   <tr>
    //     <th class="text-center" >
    //       <a target="_tab" href="https://handpoint.com/specs/hi5/">Hi5</a>
    //     </th>
    //     <td align='center'>-</td>
    //     <td align='center'>✅</td>
    //     <td align='center'>-</td>
    //     <td align='center'> ✅ (2G)
    //     </td>
    //     <td align='center'>-</td>
    //   </tr>
    //   <tr>
    //     <th align='center' >
    //       <a target="_tab" href="https://handpoint.com/specs/paxa920/">PAX A920</a>
    //     </th>
    //     <td align='center'>-</td>
    //     <td align='center'>-</td>
    //     <td align='center'>-</td>
    //     <td align='center'> ✅ (4G/LTE)
    //     </td>
    //     <td align='center'>✅</td>
    //   </tr>
    //   <tr>
    //     <th class="text-center" >
    //       <a target="_tab"
    //         href="https://www.pax.us/wp-content/uploads/2021/06/A920-Pro-Data-Sheet_May2021.pdf">PAX A920
    //         Pro</a>
    //     </th>
    //     <td align='center'>-</td>
    //     <td align='center'>-</td>
    //     <td align='center'>-</td>
    //     <td align='center'> ✅ (4G/LTE)
    //     </td>
    //     <td align='center'>✅</td>
    //   </tr>
    //   <tr>
    //     <th class="text-center" >
    //       <a target="_tab" href="https://www.pax.us/wp-content/uploads/2021/06/A60-Data-Sheet_May2021.pdf">PAX
    //         A60</a>
    //     </th>
    //     <td align='center'>-</td>
    //     <td align='center'>-</td>
    //     <td align='center'>-</td>
    //     <td align='center'>✅ (4G/LTE)
    //     </td>
    //     <td align='center'>✅</td>
    //   </tr>
    //   <tr>
    //     <th class="text-center" >
    //       <a target="_tab" href="https://www.pax.us/wp-content/uploads/2021/06/A77-Data-Sheet_May2021.pdf">PAX
    //         A77</a>
    //     </th>
    //     <td align='center'>-</td>
    //     <td align='center'>-</td>
    //     <td align='center'>-</td>
    //     <td align='center'> ✅ (4G/LTE)
    //     </td>
    //     <td align='center'>✅</td>
    //   </tr>
    //   <tr>
    //     <th class="text-center" >
    //       <a target="_tab" href="https://handpoint.com/specs/paxa80/">PAX A80</a>
    //     </th>
    //     <td align='center'>-</td>
    //     <td align='center'>-</td>
    //     <td align='center'>✅</td>
    //     <td align='center'> ✅ (4G/LTE)
    //     </td>
    //     <td align='center'>✅</td>
    //   </tr>
    //   <tr>
    //     <th class="text-center" >
    //       <a target="_tab" href="https://handpoint.com/specs/TPS900/">Telpo TPS900</a>
    //     </th>
    //     <td align='center'>-</td>
    //     <td align='center'>-</td>
    //     <td align='center'>-</td>
    //     <td align='center'> ✅ (4G)</td>
    //     <td align='center'>✅</td>
    //   </tr>
    // </table>
    <div>
      <TableContainer >
        <Table align="center" sx={{ maxWidth: 1000 }} >
          <TableHead>
            <TableRow sx={{ maxHeight: 20 }}>
              <TableCell></TableCell>
              <TableCell align="center" ><b>Lightning</b></TableCell>
              <TableCell align="center"><b>Bluetooth</b></TableCell>
              <TableCell align="center"><b>Ethernet</b></TableCell>
              <TableCell align="center"><b>Mobile Network</b>	</TableCell>
              <TableCell align="center"><b>Wifi</b></TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ height: 40 }}>
              <TableCell align="center"><b><a href="https://handpoint.com/specs/hilite/">HiLite</a></b></TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>

            </TableRow>

            <TableRow>
              <TableCell align="center"><b><a href="https://handpoint.com/specs/hipro/">HiPro</a></b></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b><a href="https://handpoint.com/specs/hi5/">Hi5</a></b></TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅(2G)</TableCell>
              <TableCell align="center">-</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b><a href="https://handpoint.com/specs/paxa920/">PAX A920</a></b></TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅(4G/LTE)</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>


            <TableRow>
              <TableCell align="center"><b><a href="https://www.pax.us/wp-content/uploads/2021/06/A920-Pro-Data-Sheet_May2021.pdf">PAX A920 PRO</a></b></TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅(4G/LTE)</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b><a href="https://www.pax.us/wp-content/uploads/2021/06/A60-Data-Sheet_May2021.pdf">PAX A60</a></b></TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅(4G/LTE)</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b><a href="https://www.pax.us/wp-content/uploads/2021/06/A77-Data-Sheet_May2021.pdf">PAX A77</a></b></TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅(4G/LTE)</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b><a href="https://handpoint.com/specs/paxa80/">PAX A80</a></b></TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅(4G/LTE)</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b><a href="https://handpoint.com/specs/TPS900/">Telpo TPS900</a></b></TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅(4G)</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>


          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );

}


function Step3tableprocessor() {
  return (
    <table style={{
      width: '70%',
      textAlign: 'center',
      height: '30%'
    }}>
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

    <table >
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


function Step3() {
  return (

    <div>
      <div class="step1">
        <h2>Step 3. Start your integration!</h2>
      </div>

      <div class="container">
        <div class="row">
          <div class="col col--3"><div class="card-demo" style={{ fontSize: '13px' }}>
            <div class="card shadow--md ">
              <div class="card__header" align="center" >
                <h3>Android</h3>
              </div>
              <div class="card__body" align="center">
                <a>
                  <img src="https://handpoint.imgix.net/ballicons/small/android.png"></img>
                </a>

              </div>
              <div class="card__footer" align="center">
                <Link
                  className="button button--secondary button--lg"
                  to="/android/androidintroduction">
                  View the SDK
                </Link>
              </div>
            </div>
          </div>
          </div>
          <div class="col col--3"><div class="card-demo" style={{ fontSize: '13px' }}>
            <div class="card shadow--md ">
              <div class="card__header" align="center" >
                <h3>iOS</h3>
              </div>
              <div class="card__body" align="center">
                <a>
                  <img src="https://handpoint.imgix.net/ballicons/small/ios-devices.png"></img>
                </a>

              </div>
              <div class="card__footer" align="center">
                <Link
                  className="button button--secondary button--lg"
                  to="/ios/iosintroduction">
                  View the SDK
                </Link>
              </div>
            </div>
          </div>
          </div>
          <div class="col col--3"><div class="card-demo" style={{ fontSize: '13px' }}>
            <div class="card shadow--md ">
              <div class="card__header" align="center" >
                <h3>Windows .NET</h3>
              </div>
              <div class="card__body" align="center">
                <a>
                  <img src="https://handpoint.imgix.net/ballicons/small/macbook.png"></img>
                </a>
              </div>
              <div class="card__footer" align="center">
                <Link
                  className="button button--secondary button--lg"
                  to="/windows/windowsintroduction">
                  View the SDK
                </Link>
              </div>
            </div>
          </div>
          </div>
          <div class="col col--3"><div class="card-demo" style={{ fontSize: '13px' }}>
            <div class="card shadow--md ">
              <div class="card__header" align="center">
                <h3>JavaScript</h3>
              </div>
              <div class="card__body" align="center">
                <a>
                  <img src="https://handpoint.imgix.net/ballicons/small/cloud.png"></img>
                </a>
              </div>
              <div class="card__footer" align="center">
                <Link
                  className="button button--secondary button--lg"
                  to="/javascript/javascriptintroduction">
                  View the SDK
                </Link>
              </div>
            </div>
          </div>
          </div></div>
      </div>

      <br></br>
      <div class="container">
        <div class="row">
          <div class="col col--3"><div class="card-demo" style={{ fontSize: '13px' }}>
            <div class="card shadow--md ">
              <div class="card__header" align="center" >
                <h3>REST API</h3>
              </div>
              <div class="card__body" align="center">
                <a>
                  <img src="https://handpoint.imgix.net/ballicons/small/satellite.png"></img>
                </a>

              </div>
              <div class="card__footer" align="center">
                <Link
                  className="button button--secondary button--lg"
                  to="/restapi/restintroduction">
                  View the API
                </Link>
              </div>
            </div>
          </div>
          </div>
          <div class="col col--3"><div class="card-demo" style={{ fontSize: '13px' }}>
            <div class="card shadow--md ">
              <div class="card__header" align="center" >
                <h4>Xamarin SDK (Community)</h4>
              </div>
              <div class="card__body" align="center">
                <a>
                  <img src="https://handpoint.imgix.net/ballicons/small/open-box.png"></img>
                </a>

              </div>
              <div class="card__footer" align="center">
                <Link
                  className="button button--secondary button--lg"
                  href="https://github.com/thescruba/xamarin-handpoint-bindings">
                  View the SDK
                </Link>
              </div>
            </div>
          </div>
          </div>
          <div class="col col--3"><div class="card-demo" style={{ fontSize: '13px' }}>
            <div class="card shadow--md ">
              <div class="card__header" align="center" >
                <h3>Express</h3>
              </div>
              <div class="card__body" align="center">
                <a>
                  <img src="https://handpoint.imgix.net/ballicons/small/browser.png"></img>
                </a>
              </div>
              <div class="card__footer" align="center">
                <Link
                  className="button button--secondary button--lg"
                  to="/express/expressintroduction">
                  View the SDK
                </Link>
              </div>
            </div>
          </div>
          </div>
          <div class="col col--3"><div class="card-demo" style={{ fontSize: '13px' }}>
            <div class="card shadow--md ">
              <div class="card__header" align="center">
                <h3>Cordova Plugin</h3>
              </div>
              <div class="card__body" align="center">
                <a>
                  <img src="https://handpoint.imgix.net/ballicons/small/open-box.png"></img>
                </a>
              </div>
              <div class="card__footer" align="center">
                <Link
                  className="button button--secondary button--lg"
                  href="https://www.npmjs.com/package/cordova-plugin-handpoint">
                  View the SDK
                </Link>
              </div>
            </div>
          </div>
          </div></div>
      </div>
      <br></br>

      {/* <div style={{
        display: 'flex',
        flexDirection:'row',  
       
        justifyContent:'center',
        fontSize: '15px',
        marginTop: '25px',
        marginLeft: '25px',
        marginRight: '25px',
        textAlign: 'center',
        //paddingRight: '50px'
      }}>
        <div className={styles.margingImages}>
          <a>
            <img src="https://handpoint.imgix.net/ballicons/small/android.png"></img>
          </a>
          <p>Android</p>

          <Link
            className="button button--secondary button--lg"
            to="/android/androidintroduction">
            View the SDK
          </Link>
        </div>

        <div className={styles.margingImages}>
          <a>
            <img src="https://handpoint.imgix.net/ballicons/small/ios-devices.png"></img>
          </a>
          <p>iOS</p>
          <Link
            className="button button--secondary button--lg"
            to="/ios/iosintroduction">
            View the SDK
          </Link>
        </div>

        <div className={styles.margingImages}>
          <a>
            <img src="https://handpoint.imgix.net/ballicons/small/macbook.png"></img>
          </a>
          <p>Windows .NET</p>
          <Link
            className="button button--secondary button--lg"
            to="/windows/windowsintroduction">
            View the SDK
          </Link>
        </div>

        <div className={styles.margingImages}>
          <a>
            <img src="https://handpoint.imgix.net/ballicons/small/cloud.png"></img>
          </a>
          <p>JavaScript</p>
          <Link
            className="button button--secondary button--lg"
            to="/javascript/javascriptintroduction">
            View the SDK
          </Link>
        </div>
      </div> */}
      {/* <div style={{
        display: 'flex  ',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '15px',
        marginTop: '25px',
        marginLeft: '25px',
        marginRight: '25px',
        textAlign: 'center',
        //paddingRight: '50px'
      }}>
        <div className={styles.margingImages}>
          <a>
            <img src="https://handpoint.imgix.net/ballicons/small/satellite.png"></img>
          </a>
          <p>REST API</p>
          <Link
            className="button button--secondary button--lg"
            to="/restapi/restintroduction">
            View the API
          </Link>
        </div>

        <div className={styles.margingImages}>
          <a>
            <img src="https://handpoint.imgix.net/ballicons/small/open-box.png"></img>
          </a>
          <p>Xamarin SDK (Community)</p>
          <Link
            className="button button--secondary button--lg"
            href="https://github.com/thescruba/xamarin-handpoint-bindings">
            View the SDK
          </Link>
        </div>

        <div className={styles.margingImages}>
          <a>
            <img src="https://handpoint.imgix.net/ballicons/small/browser.png"></img>
          </a>
          <p>Express</p>
          <Link
            className="button button--secondary button--lg"
            href="https://www.handpoint.com/docs/device/Express/">
            View the SDK
          </Link>
        </div>

        <div className={styles.margingImages}>
          <a>
            <img src="https://handpoint.imgix.net/ballicons/small/open-box.png"></img>
          </a>
          <p>Cordova Plugin</p>
          <Link
            className="button button--secondary button--lg"
            href="https://www.npmjs.com/package/cordova-plugin-handpoint">
            View the SDK
          </Link>
        </div>
      </div> */}

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


        marginBottom: '25px',
        paddingTop: '25px',
        paddingBottom: '10px'
      }}>
      <h2>Help & Support 🔧</h2>
      <p>Looking for something? If you have questions about anything not covered in our documentation,
        need assistance
        integrating,
        or are unsure where to go from here, our developer support team is here to help. </p>
      <a class="button button--secondary button--lg" href="mailto:support@handpoint.com">Contact Us</a>

      <br></br>
      <br></br>
      <br></br>

      <p>Take a look at our <a href="http://status.handpoint.com/">Handpoint Status Page</a>, this is where you will be able to monitor the uptime of the Handpoint systems. </p>


      <p>Do not miss any news, subscribe to our 📬 <a href="https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e">Handpoint Newsletter!</a> </p>
    </div>

  );
}

