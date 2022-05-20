import React from 'react';
import Layout from '@theme/Layout';
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
          <h2>Integration Paths</h2>
          <br></br>
          <IntegrationPaths />
          <br></br>
          <h2>Cobranding</h2>
          <br></br>
          <Cobranding />
          <br></br>
          <h2>High Level Features</h2>
          <br></br>
          <HighLevelFeatures />
          <br></br>
          <h2>Handpoint Terminals</h2>
          <br></br>
          <TableTerminals />
          <br></br>
           <h3>Payment terminals supported by SDK:</h3>
          <Step1table />
          <br></br>
          <div class="step1">
            <h2>Step 2. Check your terminal specs:</h2>
            <h3>Terminal full specifications:</h3>
          </div>
          <br></br>
          <div class="step1">
            <h3>Communication types:</h3>
          </div>
          <Step2tablecomms />
          <br></br>
          <Step3 />
          <Github />
          <Helpandsupport />
        </div>
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

      <img src="img/handpoint-logo-hvitt.svg" alt="Logo" width="260px" />

      <br></br>

      <h2 style={{
        color: 'white'
      }} >Integrate in-person payments with your software</h2>
    

    </div>



  );
}


function Step1table() {
  return (
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
              <TableCell align="center"><b><a href="https://uploads.strikinglycdn.com/files/7a3eda34-43f2-4a70-ba3d-19f5328011cf/A35_EN_20210129.pdf">PAX A35</a></b></TableCell>
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
              <TableCell align="center"><b><a href="https://uploads.strikinglycdn.com/files/3e131f4b-daec-42e1-802c-8e2329794ace/A50_EN_20200522.pdf">PAX A50</a></b></TableCell>
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


function IntegrationPaths() {
  return (

    <div class="container">
      <div class="row">
        <div class="col" >
          <div class="card-demo card shadow--md" style={{ fontSize: '13px' }}>
              <h3 class="card__header">
                <b>Cloud Integration</b>
              </h3>
              <p class="card__body">The Handpoint cloud payments solution allows your point of sale to easily communicate with
                the payment terminal via the internet (cellular or wifi). Only an API key is required to start sending sales to the card reader and get back the transaction result to your software when the operation is completed.
                No other configuration is required, the terminals are android based making the interface familiar to the merchant. 
                The merchant only needs to connect the terminal to Wifi and open the payment application to be able to start taking payments. Card data is never sent unmasked to your software so you can be kept out of PCI scope.</p>
              <div align="center">
                <img class="card-image" src="img/cloud-integration.png" alt="cloud integration"></img>
              </div>
          </div>
        </div>
      </div>
      <br></br>
      <div class="row">
        <div class="col col--12" >
          <div class="card-demo card shadow--md" style={{ fontSize: '13px' }}>
              <h3 class="card__header">
                <b>Native Integration</b>
              </h3>
              <p class="card__body">The Handpoint native integration allows you to run your own Android application on the payment terminal. Your application embeds the Handpoint
              Android SDK in order to process payments. This all-in-one solution puts you in control of the checkout experience and does not require any separate application for payment processing.
              Card data is never sent unmasked to your application so you can be kept out of PCI scope.</p>
              <div align="center">
                <img class="card-image" src="img/native-integration.png" alt="native integration"></img>
              </div>
          </div>
        </div>
      </div>
      <br></br>
      <div class="row">
        <div class="col col--12" >
          <div class="card-demo card shadow--md" style={{ fontSize: '13px' }}>
              <h3 class="card__header">
                <b>Standalone</b>
              </h3>
              <p class="card__body">Handpoint offers a basic standalone application allowing your merchants to take payments without being connected to a point of sale software.
              When the card reader is used in standalone mode, the merchant can simply type in an amount and start processing payments. 
              The Handpoint standalone application offers a full set of functionalities, from powerful analytics, to end of day reports and manual entry of card data for over the phone orders.</p>
              <div align="center">
                <img class="card-image" src="img/standalone.png" alt="standalone terminal"></img>
              </div>
              <p class="card__body">Standalone terminals are not integrated to your software. However, they can be switched from standalone to cloud integrated by the flip
               of a button. You can therefore start shipping standalone terminals to your merchants and when your integration is ready upgrade the terminals to start accepting cloud payments.</p>
              <div align="center">
                <img class="card-image" src="img/integrated-mode.png" alt="integrated mode"></img>
              </div>
          </div>
        </div>
      </div>
      <br></br>
      <div class="row">
        <div class="col col--12" >
          <div class="card-demo card shadow--md" style={{ fontSize: '13px' }}>
              <h3 class="card__header">
                <b>Bluetooth Integration</b>
              </h3>
              <p class="card__body">The Handpoint bluetooth integration allows you to integrate your point of sale with the Handpoint HiLite terminal.
              The HiLite is portable and the preferred payment terminal for small merchants in a mobile environment.</p>
              <div align="center">
                <img class="card-image" src="img/hilite-integration.png" alt="HiLite integration"></img>
              </div>
          </div>
        </div>
      </div>
    </div>
    // </TableContainer>

  );
}

function Cobranding() {
  return (

    <div class="container">
      <div class="row">
        <div class="col" >
          <div class="card-demo card shadow--md" style={{ fontSize: '13px' }}>
              <h3 class="card__header">
                <b>Brand the app as your own!</b>
              </h3>
              <p class="card__body">Handpoint has an intuitive, simple-to-use yet powerful payment application that enables any merchant (from pop-ups to big retailers) to accept payments instantly and securely.
               As a way to provide the same seamless experience to our partners’ customers, the app can be customized to include the partner’s logo, colors and custom links. 
               Thus, offer the same simple user experience with some of their own branding. Here is the <a href="https://handpoint.atlassian.net/wiki/spaces/PD/pages/3294986356/Partner+Guide+Cobranding+-+Theme+guide+for+the+Handpoint+app" target="_blank">guide</a> to theme the Handpoint payment application,
               logos and color schemes can be emailed to support@handpoint.com.</p>
              <div align="center">
              <img src="img/cobranding-extended.gif" alt="cobranding gif"></img>
              </div>
          </div>
        </div>
      </div>
    </div>

  );
}
function TableTerminals() {
  return (

    <div class="container">

      <div class="row">
        <div class="col col--6"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <h3 class="card__header" >
              <b><a href="http://datecs.co.uk/product/bluepad-50/" target="_blank">HiLite</a></b>
            </h3>
            <div class="card__body" align="center">
              <a href="http://datecs.co.uk/product/bluepad-50/" target="_blank"><img style={{ height: '150px' }}
                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/HiLite_big.jpg?fit=crop&crop=focalpoint&fp-y=.53&h=750&w=600&fp-z=4.5&fp-x=.5"
                alt=""
              >
              </img></a>
            </div>
          </div>
        </div></div>
        <div class="col col--6"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <h3 class="card__header">
              <b><a href="http://datecs.co.uk/product/bluepad-500/" target="_blank">HiPro</a></b>
            </h3>
            <div class="card__body" align="center">
              <a href="http://datecs.co.uk/product/bluepad-500/" target="_blank"><img style={{ height: '150px' }}
                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/HiPro_and_Sled.png"
                alt="">
              </img></a>
            </div>
          </div>
        </div></div>
      </div>
      <br></br>
      <div class="row">
        <div class="col col--6"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <h3 class="card__header" >
              <b><a href="https://www.paxtechnology.com/a920" target="_blank">PAX A920</a></b>
            </h3>
            <div class="card__body" align="center">
              <a href="https://www.paxtechnology.com/a920" target="_blank"><img style={{ height: '150px' }}
                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/SmartPOS_clean.png"
                alt="">
              </img></a>
            </div>
          </div>
        </div></div>
        <div class="col col--6"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <h3 class="card__header">
              <b><a href="https://www.paxtechnology.com/a920pro" target="_blank">PAX A920 PRO</a></b>
            </h3>
            <div class="card__body" align="center">
              <a href="https://www.paxtechnology.com/a920pro" target="_blank"><img style={{ height: '150px' }}
                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/SmartPOS_clean.png"
                alt="">
              </img></a>
            </div>
          </div>
        </div></div>
      </div>
      <br></br>
      <div class="row">
        <div class="col col--6"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <h3 class="card__header">
              <b><a href="https://www.paxtechnology.com/a80" target="_blank">PAX A80</a></b>
            </h3>
            <div class="card__body" align="center">
              <a href="https://www.paxtechnology.com/a80" target="_blank"><img style={{ height: '150px' }}
                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/Pax_A80.png"
                alt="">
              </img></a>
            </div>
          </div>
        </div></div>
        <div class="col col--6"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <h3 class="card__header">
              <b><a href="https://www.paxtechnology.com/a35" target="_blank">PAX A35</a></b>
            </h3>
            <div class="card__body" align="center">
              <a href="https://www.paxtechnology.com/a35" target="_blank"><img style={{ height: '150px' }}
                src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1402119/92236_330021.png"
                alt="">
              </img></a>
            </div>
          </div>
        </div></div>
      </div>
      <br></br>
      <div class="row">
        <div class="col col--6"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <h3 class="card__header" >
              <b><a href="https://www.paxtechnology.com/a50" target="_blank">PAX A50</a></b>
            </h3>
            <div class="card__body" align="center">
              <a href="https://www.paxtechnology.com/a50" target="_blank"><img style={{ height: '150px' }}
                src="https://i.ibb.co/LZvJ5hx/main-photo-min.png"
                alt="">
              </img></a>
            </div>
          </div>
        </div>
        </div>
        <div class="col col--6"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <h3 class="card__header" >
              <b><a href="https://www.pax.us/wp-content/uploads/2021/06/A60-Data-Sheet_May2021.pdf" target="_blank">PAX A60</a></b>
            </h3>
            <div class="card__body" align="center">
              <a href="https://www.pax.us/wp-content/uploads/2021/06/A60-Data-Sheet_May2021.pdf" target="_blank"><img style={{ height: '150px' }}
                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/PAX_A60.png"
                alt="">
              </img></a>
            </div>
          </div>
        </div></div>
      </div>
      <br></br>
      <div class="row">
        <div class="col col--6"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <h3 class="card__header" >
              <b><a href="https://www.paxtechnology.com/a77" target="_blank">PAX A77</a></b>
            </h3>
            <div class="card__body" align="center">
              <a href="https://www.paxtechnology.com/a77" target="_blank"><img style={{ height: '150px' }}
                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/PAX_A77.png"
                alt="">
              </img></a>
            </div>
          </div>
        </div>
        </div>
        <div class="col col--6"><div class="card-demo" style={{ fontSize: '13px' }}>
          <div class="card shadow--md ">
            <h3 class="card__header" >
              <b><a href="https://www.telpo.com.cn/eft-pos/tps900-eft-pos.html" target="_blank">TELPO TPS 900</a></b>
            </h3>
            <div class="card__body" align="center">
              <a href="https://www.telpo.com.cn/eft-pos/tps900-eft-pos.html" target="_blank"><img style={{ height: '150px' }}
                src="https://handpoint.imgix.net/Website%20refresh%20photos/product-images/TPS900_zoom.png"
                alt="">
              </img></a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    // </TableContainer>

  );
}

function Step2tablecomms() {
  return (
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
              <TableCell align="center"><b><a href="https://uploads.strikinglycdn.com/files/7a3eda34-43f2-4a70-ba3d-19f5328011cf/A35_EN_20210129.pdf">PAX A35</a></b></TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅(4G/LTE)</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b><a href="https://uploads.strikinglycdn.com/files/3e131f4b-daec-42e1-802c-8e2329794ace/A50_EN_20200522.pdf">PAX A50</a></b></TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">✅</TableCell>
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
                <Link
                  to="/android/androidintroduction">
                  <img src="https://handpoint.imgix.net/ballicons/small/android.png"></img>
                </Link>


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

                <Link
                  to="/ios/iosintroduction">
                  <img src="https://handpoint.imgix.net/ballicons/small/ios-devices.png"></img>
                </Link>

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

                <Link
                  to="/windows/windowsintroduction">
                  <img src="https://handpoint.imgix.net/ballicons/small/macbook.png"></img>
                </Link>
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

                <Link
                  to="/javascript/javascriptintroduction">
                  <img src="https://handpoint.imgix.net/ballicons/small/cloud.png"></img>
                </Link>
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

                <Link
                  to="/restapi/restintroduction">
                  <img src="https://handpoint.imgix.net/ballicons/small/satellite.png"></img>
                </Link>
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
                <a href="https://github.com/thescruba/xamarin-handpoint-bindings">
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

                <Link
                  to="/express/expressintroduction">
                  <img src="https://handpoint.imgix.net/ballicons/small/browser.png"></img>
                </Link>
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
                <a href="https://www.npmjs.com/package/cordova-plugin-handpoint">
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

function HighLevelFeatures() {
  return (
<div class="container">
  <div class="row">
    <div class="col col--6">
      <div class="card-demo" style={{ fontSize: '13px' }}>
        <div class="card shadow--md ">
          <div class="card__header">
            <h3>Sale</h3>
          </div>
          <div class="card__body">
            <p>
            Sends a sale transaction to the payment terminal. This is the most basic operation,
             in its simplest form you only need to send the amount and currency to the payment terminal for the transaction to start.
            </p>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <div class="col col--6">
      <div class="card-demo" style={{ fontSize: '13px' }}>
        <div class="card shadow--md " >
          <div class="card__header" >
            <h3>Sale & Tokenize</h3>
          </div>
          <div class="card__body" >
            <p>
              A sale operation which also returns a card token. Tokens keep your software out of PCI scope and can be used for tracking customer behavior
              ,keep a card on file as well as initiating recurring payments. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br></br>
    <div class="row">
    <div class="col col--6">
      <div class="card-demo" style={{ fontSize: '13px' }}>
        <div class="card shadow--md ">
          <div class="card__header">
            <h3>Tokenize Only</h3>
          </div>
          <div class="card__body">
            <p>
             Returns a card token without withdrawing funds from the card. This functionality is useful for all kinds of custom scenarios, 
             for example when a card needs to be kept on file but no funds should be charged. 
            </p>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <div class="col col--6">
      <div class="card-demo" style={{ fontSize: '13px' }}>
        <div class="card shadow--md " >
          <div class="card__header" >
            <h3>Get Card Number</h3>
          </div>
          <div class="card__body" >
            <p>
            This function returns the full PAN of the card being swiped, dipped or tapped. Only the PANs of whitelisted card 
            ranges will be returned by the Handpoint systems. This operation is most often used to be able to process funds or points from loyalty cards.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br></br>
    <div class="row">
    <div class="col col--6">
      <div class="card-demo" style={{ fontSize: '13px' }}>
        <div class="card shadow--md ">
          <div class="card__header">
            <h3>Refund</h3>
          </div>
          <div class="card__body">
            <p>
            Sends a refund operation to the payment terminal. This transaction type moves funds from the merchant account to the cardholder´s card. 
            in its simplest form you only need to send the amount and currency to the payment terminal for the transaction to start.
            </p>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <div class="col col--6">
      <div class="card-demo" style={{ fontSize: '13px' }}>
        <div class="card shadow--md " >
          <div class="card__header" >
            <h3>Reversal / Void</h3>
          </div>
          <div class="card__body" >
            <p>
              A reversal operation allows the merchant to reverse a previous sale or refund operation. A reversal is different from a refund, 
              it does not require a card to be inserted and can only be completed until the acquirer settles the batch of transactions at night. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br></br>
    <div class="row">
    <div class="col col--6">
      <div class="card-demo" style={{ fontSize: '13px' }}>
        <div class="card shadow--md ">
          <div class="card__header">
            <h3>Manual Card Entry / MOTO</h3>
          </div>
          <div class="card__body">
            <p>
             MOTO (Mail Order / Telephone Order) also called manual card entry is a type of transaction used by merchants to get services paid via telephone, mail, fax, or internet communication.
             Triggering this function will prompt a card input form on the terminal for the merchant to enter the card number, expiry date and CVV of the card 
             to be charged.
            </p>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <div class="col col--6">
      <div class="card-demo" style={{ fontSize: '13px' }}>
        <div class="card shadow--md " >
          <div class="card__header" >
            <h3>Print Receipt</h3>
          </div>
          <div class="card__body" >
            <p>
            Several terminals provided by Handpoint have an integrated printer which can be used to print any HTML formatted receipt, including printing images, bitmaps or barcodes. 
            The printer can also be used prior to taking a payment, for example it can be used to print the itemized receipt provided by your software.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br></br>
    <div class="row">
    <div class="col col--6">
      <div class="card-demo" style={{ fontSize: '13px' }}>
        <div class="card shadow--md ">
          <div class="card__header">
            <h3>Stop Current Transaction</h3>
          </div>
          <div class="card__body">
            <p>
            This function allows the merchant to stop a transaction after it was sent to the payment terminal. This is very useful in case the amount to be charged is incorrect
            and the merchant needs to send another transaction request to the card reader. 
            </p>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <div class="col col--6">
      <div class="card-demo" style={{ fontSize: '13px' }}>
        <div class="card shadow--md " >
          <div class="card__header" >
            <h3>Transaction Routing to Multiple Merchant Accounts</h3>
          </div>
          <div class="card__body" >
            <p>
            This operation allows your software to fund separate merchant accounts from a single terminal.
             It is particularly useful if a terminal is shared between multiple merchants, for example at an Hair Salon or a Doctor's office.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br></br>
  <div class="row">
    <div class="col col--6">
      <div class="card-demo" style={{ fontSize: '13px' }}>
        <div class="card shadow--md ">
          <div class="card__header">
            <h3>On reader Tipping</h3>
          </div>
          <div class="card__body">
            <p>
            With on-reader tipping, you can display suggested tip amounts on the reader before the customer presents their payment method.
             The reader shows the customer suggestions based on the tipping option that you set up. 
            </p>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <div class="col col--6">
      <div class="card-demo" style={{ fontSize: '13px' }}>
        <div class="card shadow--md " >
          <div class="card__header" >
            <h3>pin / signature bypass</h3>
          </div>
          <div class="card__body" >
            <p>
             Pin bypass can be enabled to allow disabled or visually impaired cardholders to skip the PIN entry step. 
             Signature bypass can be enabled to prevent the terminal from asking the cardholder to sign on the digital screen. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
 <br></br>
  <div class="row">
    <div class="col col--6">
      <div class="card-demo" style={{ fontSize: '13px' }}>
        <div class="card shadow--md ">
          <div class="card__header">
            <h3>Remote Software Updates</h3>
          </div>
          <div class="card__body">
            <p>
            Software updates can be pushed automatically to the payment terminals. If you are using the Handpoint payment application or building your own application on top of the Handpoint Android SDK 
            you can easily manage distribution of new updates to payment terminals in the field.
            </p>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <div class="col col--6">
      <div class="card-demo" style={{ fontSize: '13px' }}>
        <div class="card shadow--md " >
          <div class="card__header" >
            <h3>Remote encryption key injection</h3>
          </div>
          <div class="card__body" >
            <p>
            Payment terminals are secure devices and it is required to inject the terminal with an encryption key to protect the card number and PIN during a transaction.
            Most terminal distributors inject keys manually via cable before shipping devices to the merchant. With the Handpoint solution the encryption key can be downloaded 
            over the air which improves the overall setup experience. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
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

