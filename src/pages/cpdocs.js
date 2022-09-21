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
import * as Scroll from 'react-scroll';
import { Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function CpDocs() {
  return (
    
    <Layout title="Getting Started" >
      
      <main>
          <div class="handpointBackground">
          <Header />
          </div>
          <div class="gettingStarted">
          <InfoTabs />
          <h2>Integration Paths</h2>
          <br></br>
          <IntegrationPaths />
          <br></br>
          <h2>Standalone Options</h2>
          <br></br>
          <Standalone />
          <br></br>
          <h2>Cobranding</h2>
          <br></br>
          <Cobranding />
          <br></br>
          <h2>Geographies & Card Brands</h2>
          <br></br>
          <GeographiesAndCardBrands />
          <br></br>
          <h2>High Level Features</h2>
          <br></br>
          <HighLevelFeatures />
          <br></br>
          <h2>Handpoint Terminals</h2>
          <br></br>
          <TableTerminals />
          <br></br>
          <h2>Payment Terminals Supported by SDK/API</h2>
          <br></br>
          <SdkTerminalTable />
          <br></br>
          <h2>Payment Terminals Communication Types</h2>
          <br></br>
          <CommunicationTypesTable />
          <br></br>
          <h2>Order a Development Kit</h2>
          <br></br>
          <OrderDevKit />
          <br></br>
          <h2>Start Your Integration</h2>
          <br></br>
          <StartYourIntegration />
          <br></br>
          </div>
          <Github />
          <div class="gettingStarted">
          <Helpandsupport />
          <TermsConditions />
          </div>

      </main>
  
    </Layout>
  );
}

export default CpDocs;

function InfoTabs() {
  var Scroll = require('react-scroll');
  var scroller = Scroll.scroller;

  return (
    <ul class="pills pills--block">
      <li class="pills__item pills__item--active" onClick={() => scroller.scrollTo('integrationsElement', { smooth: true, offset: -150 })} >Integration Paths</li>
      <li class="pills__item pills__item--active" onClick={() => scroller.scrollTo('standaloneElement', { smooth: true, offset: -150 })}>Standalone Options</li>
      <li class="pills__item pills__item--active" onClick={() => scroller.scrollTo('cobrandingElement', { smooth: true, offset: -150 })}>Cobranding</li>
      <li class="pills__item pills__item--active" onClick={() => scroller.scrollTo('geoandcardsElement', { smooth: true, offset: -150 })}>Geographies & Card Brands</li>
      <li class="pills__item pills__item--active" onClick={() => scroller.scrollTo('highLevelElement', { smooth: true, offset: -150 })}>High Level Features</li>
      <li class="pills__item pills__item--active" onClick={() => scroller.scrollTo('tableTerminalsElement', { smooth: true, offset: -150 })}>Handpoint Terminals</li>
      <li class="pills__item pills__item--active" onClick={() => scroller.scrollTo('orderDevKitElement', { smooth: true, offset: -150 })}>Order a Development Kit</li>
      <li class="pills__item pills__item--active" onClick={() => scroller.scrollTo('startYourIntegrationElement', { smooth: true, offset: -150 })}>Start your Integration</li>
    </ul>
  );
}



function Header() {

  return (
    <div
      style={{
        textAlign: 'center',
        display: 'block',
        height: '250px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '80px',
        width: '100%'
      }}>
      <a href="/"><img src="/img/Logo.svg" alt="Logo" width="260px" /></a>
      <br></br>
      <h2 style={{
        color: '#25365d'
      }} >Integrate in-person payments with your software</h2>
    </div>
  );
}


function SdkTerminalTable() {

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
              <TableCell align="center"><b><Link href="https://www.npmjs.com/package/cordova-plugin-handpoint"> Cordova Plugin</Link></b></TableCell>
              <TableCell align="center"><b><Link to="/express/expressintroduction"> Express SDK</Link></b></TableCell>
              <TableCell align="center"><b><Link to="/javascript/javascriptintroduction"> JavaScript SDK</Link></b></TableCell>
              <TableCell align="center"><b><Link to="/restapi/restintroduction"> REST API</Link></b></TableCell>
              <TableCell align="center"><b><Link href="https://github.com/thescruba/xamarin-handpoint-bindings"> Xamarin Plugin</Link></b><br></br>Community SDK not officially maintained by Handpoint</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell align="center"><b>HiLite</b></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅ </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b>HiPro</b></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b>PAX Android Terminals</b></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b>Telpo TPS900</b></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center"></TableCell>
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
    <Element name="integrationsElement">
      <div class="container">
        <div class="row">
          <div class="col col--12" >
          <div class="integrationOptions">
            <div class="card-demo card shadow--md" style={{ fontSize: '13px' }}>
              <h3 class="card__header">
                <b>Cloud Integration</b>
              </h3>
              <p class="card__body">The Handpoint cloud payments solution allows your point of sale to easily communicate with
                payment terminals via the internet (cellular or wifi). Only an API key is required to start sending sales to the card reader and get back the transaction result to your software when the operation is completed.
                No other configuration is required, the merchant only needs to connect the terminal to Wifi and open the payment application to be able to start taking payments. Card data is never sent unmasked to your software so you can be kept out of PCI scope.</p>
              <div align="center">
                <img class="card-image-larger imagesSize" src="/img/cloud-integration.png" alt="cloud integration"></img>
              </div>
            </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col col--12" >
          <div class="integrationOptions">
            <div class="card-demo card shadow--md" style={{ fontSize: '13px' }}>
              <h3 class="card__header">
                <b>Native Integration</b>
              </h3>
              <p class="card__body">The Handpoint native integration allows you to run your own Android application on the payment terminal. Your application embeds the Handpoint
                Android SDK in order to process payments. This all-in-one solution puts you in control of the checkout experience and does not require any separate application for payment processing.
                Card data is never sent unmasked to your application so you can be kept out of PCI scope.</p>
              <div align="center">
                <img class="card-image imagesSize" src="/img/native-integration.png" alt="native integration"></img>
              </div>
            </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col col--12" >
          <div class="integrationOptions">
            <div class="card-demo card shadow--md" style={{ fontSize: '13px' }}>
              <h3 class="card__header">
                <b>Bluetooth Integration</b>
              </h3>
              <p class="card__body">The Handpoint bluetooth integration allows your point of sale to easily communicate with the Handpoint HiLite terminal.
                The HiLite is Handpoint's ultra portable card reader for small and/or highly mobile merchants. With the HiLite, merchants can start accepting
                payments on the go!</p>
              <div align="center">
                <img class="card-image imagesSize" src="/img/hilite-integration.png" alt="HiLite integration"></img>
              </div>
            </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col col--12" >
          <div class="integrationOptions">
            <div class="card-demo card shadow--md" style={{ fontSize: '13px' }}>
              <h3 class="card__header">
                <b>Lightning Integration</b>
              </h3>
              <p class="card__body">The Handpoint HiPro is an all-in-one payment terminal compatible with iOS devices. The lightning port is used for the communication
                between the iOS phone or ipod and the payment terminal. This is the perfect line buster for busy retail environments. With its integrated scanner It can also be used to
                scan barcodes and manage inventory as well as taking payments on the spot, directly in the store aisles.</p>
              <div align="center">
                <img class="card-image imagesSize" src="/img/hipro-integration.png" alt="HiPro integration"></img>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

function Standalone() {
  return (
    <Element name="standaloneElement">
      <div class="container">
        <div class="row">
          <div class="col col--12" >
          <div class="integrationOptions">
            <div class="card-demo card shadow--md" style={{ fontSize: '13px' }}>
              <h3 class="card__header">
                <b>Standalone smartPOS application</b>
              </h3>
              <p class="card__body">Handpoint offers a basic standalone application allowing your merchants to take payments without being connected to a point of sale software.
                When the card reader is used in standalone mode, the merchant can simply type in an amount and start processing payments.
                The Handpoint standalone application offers a full set of functionalities, from powerful analytics, to end-of-day reports and manual card entry for over the phone transactions.</p>
              <div align="center">
                <img class="card-image-larger imagesSize" src="/img/standalone.png" alt="standalone terminal"></img>
              </div>
              <p class="card__body">Standalone terminals are not integrated to your software. However, they can be turned from standalone to cloud integrated by the flip
                of a switch. You can therefore start shipping standalone terminals to your merchants and when your integration is ready, upgrade the terminals to start accepting cloud payments.
                Standalone mode can also be used as a fallback method for the merchant to continue processing payments even if the point of sale is down.</p>
              <div align="center">
                <img class="card-image imagesSize" src="/img/integrated-mode.png" alt="integrated mode"></img>
              </div>
            </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col col--12" >
          <div class="integrationOptions">
            <div class="card-demo card shadow--md" style={{ fontSize: '13px' }}>
              <h3 class="card__header">
                <b>standalone mPOS application</b>
              </h3>
              <p class="card__body">The Handpoint mPOS application is available on the <a href="https://play.google.com/store/apps/details?id=com.handpoint.hipos" target="_blank">Google Play Store</a> and <a href="https://apps.apple.com/us/app/handpoint/id1450546788" target="_blank">Apple App Store</a>.
                The mPOS application is connected via bluetooth with the HiLite payment terminal and offers the same powerful yet simple functionalities as the standalone smartPOS application. It is a perfect solution for occasional merchants needing to accept payments on the move.</p>
              <div align="center">
                <img class="card-image imagesSize" src="/img/mposapp.png" alt="mPOS payments application"></img>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

function Cobranding() {
  return (
    <Element name="cobrandingElement">
      <div class="container">
        <div class="row">
          <div class="col" >
            <div class="card-demo card shadow--md" style={{ fontSize: '13px' }}>
              <h3 class="card__header">
                <b>Brand the Payment Application as Your Own</b>
              </h3>
              <p class="card__body">Handpoint has an intuitive, simple-to-use yet powerful payment application that enables any merchant (from pop-ups to big retailers) to accept payments instantly and securely.
                As a way to provide the same seamless experience to our partners’ customers, the app can be customized to include your logo, colors and custom links.
                Thus, offer the same simple user experience with some of your own branding. Here is the <a href="https://handpoint.atlassian.net/wiki/spaces/PD/pages/3294986356/Partner+Guide+Cobranding+-+Theme+guide+for+the+Handpoint+app" target="_blank">guide</a> to theme the Handpoint payment application,
                logos and color schemes can be emailed to support@handpoint.com.</p>
              <div align="center">
                <img class="card-image" src="/img/cobranding-extended.gif" alt="cobranding gif"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

function GeographiesAndCardBrands() {
  return (
    <Element name="geoandcardsElement">
      <div class="container">
        <div class="row">
          <div class="col" >
            <div class="card-demo card shadow--md" style={{ fontSize: '13px' }}>
              <h3 class="card__header">
                <b>A Global Solution</b>
              </h3>
              <p class="card__body">Handpoint currently supports all major card brands and is able to process in-person transactions on three continents: Europe, America and Africa. Each country has its own local rules about payment processing
                so don't hesitate to contact us in order to know if we can help you with your processing needs. </p>
              <div align="center">
                <img class="card-image imagesSize" src="/img/geographies.png" alt="Handpoint world map"></img>
              </div>
              <div align="center">
                <img class="card-image imagesSize" src="/img/card-brand-logos.png" alt="Card brand logos"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>

  );
}


function TableTerminals() {
  return (

    <div class="container">
      <Element name="tableTerminalsElement">
        <div class="row">
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
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
              </div>
            </div></div>
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
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
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
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
              </div>
            </div></div>
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
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
              </div>
            </div></div>
        </div>
        <br></br>
        <div class="row">
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
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
              </div>
            </div></div>
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
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
              </div>
            </div></div>
        </div>
        <br></br>
        <div class="row">
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
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
          </div>
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
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
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
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
          </div>
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
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
      </Element>
    </div>

    // </TableContainer>

  );
}

function CommunicationTypesTable() {
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
              <TableCell align="center"><b>Cellular</b>	</TableCell>
              <TableCell align="center"><b>Wifi</b></TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ height: 40 }}>
              <TableCell align="center"><b>HiLite</b></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>

            </TableRow>

            <TableRow>
              <TableCell align="center"><b>HiPro</b></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b>PAX A920</b></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>


            <TableRow>
              <TableCell align="center"><b>PAX A920 PRO</b></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b>PAX A35</b></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b>PAX A50</b></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b>PAX A60</b></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b>PAX A77</b></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b>PAX A80</b></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center"><b>Telpo TPS900</b></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">✅</TableCell>
              <TableCell align="center">✅</TableCell>
            </TableRow>


          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );

}

function OrderDevKit() {
  return (

    <Element name="orderDevKitElement">
      <div class="container">
        <div class="row">
          <div class="col col--12" >
            <div class="card-demo card shadow--md" style={{ fontSize: '13px' }}>
              <h3 class="card__header">
                <b>Technical Integration Lifecycle</b>
              </h3>
              <p class="card__body">Please contact <a target="_blank" href="mailto:sales@handpoint.com">sales@handpoint.com</a> to kickstart an integration process and order a development card reader.
                Once the integration starts you will get a dedicated slack channel with the Handpoint developers to address any issues that might arise.
                Once the integration is ready, the Handpoint team will certify the solution by running a set of standard tests to make sure the integration is robust and ready for Go Live.
                The Handpoint team will then closely follow the first pilot merchants to make sure the solution is ready to scale. </p>
              <div align="center">
                <img class="card-image-larger imagesSize" src="/img/technical-integration-lifecycle.png" alt="Technical integration lifecycle"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}


function StartYourIntegration() {
  return (
    <Element name="startYourIntegrationElement">
      <div>
        <div class="container">
          <div class="row">
            <div class="col col--3">
              <div class="integrationOptions">
                <div class="card-demo" style={{ fontSize: '13px' }}>
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
            </div>
            <div class="col col--3">
              <div class="integrationOptions">
                <div class="card-demo" style={{ fontSize: '13px' }}>
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
            </div>
            <div class="col col--3">
              <div class="integrationOptions">
                <div class="card-demo" style={{ fontSize: '13px' }}>
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
            </div>
            <div class="col col--3">
              <div class="integrationOptions">
                <div class="card-demo" style={{ fontSize: '13px' }}>
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
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <div class="container">
          <div class="row">
            <div class="col col--3">
              <div class="integrationOptions">
                <div class="card-demo" style={{ fontSize: '13px' }}>
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
            </div>
            <div class="col col--3">
              <div class="integrationOptions">
                <div class="card-demo" style={{ fontSize: '13px' }}>
                  <div class="card shadow--md ">
                    <div class="card__header" align="center" >
                      <h4>Xamarin Plugin (Community)</h4>
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
                        View the Plugin
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col col--3">
              <div class="integrationOptions">
                <div class="card-demo" style={{ fontSize: '13px' }}>
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
            </div>
            <div class="col col--3">
              <div class="integrationOptions">
                <div class="card-demo" style={{ fontSize: '13px' }}>
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
                        View the Plugin
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div></div>
        </div>
        <br></br>
      </div>
    </Element>
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
      <p>You can also take a look at some sample apps, SDKs and other fun stuff on the
        <a href="https://www.github.com/handpoint"> Handpoint GitHub</a> workspace
      </p>
      <a href="https://www.github.com/handpoint">
        <img src="https://handpoint.imgix.net/GitHub_Logo.png?w=200" class="img-responsive center-block"></img>
      </a>
    </div>
  );
}

function HighLevelFeatures() {
  return (
    <Element name="highLevelElement">
      <div class="container">
        <div class="row">
          <div class="col col--6">
            <div class="integrationOptions">
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
          </div>
          <br></br>
          <div class="col col--6">
            <div class="integrationOptions">
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
        </div>
        <br></br>
        <div class="row">
          <div class="col col--6">
            <div class="integrationOptions">
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
          </div>
          <br></br>
          <div class="col col--6">
            <div class="integrationOptions">
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
        </div>
        <br></br>
        <div class="row">
          <div class="col col--6">
            <div class="integrationOptions">
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
          </div>
          <br></br>
          <div class="col col--6">
            <div class="integrationOptions">
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
        </div>
        <br></br>
        <div class="row">
          <div class="col col--6">
            <div class="integrationOptions">
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
          </div>
          <br></br>
          <div class="col col--6">
            <div class="integrationOptions">
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
        </div>
        <br></br>
        <div class="row">
          <div class="col col--6">
            <div class="integrationOptions">
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
          </div>
          <br></br>
          <div class="col col--6">
            <div class="integrationOptions">
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
        </div>
        <br></br>
        <div class="row">
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
                <div class="card shadow--md ">
                  <div class="card__header">
                    <h3>On Reader Tipping</h3>
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
          </div>
          <br></br>
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
                <div class="card shadow--md " >
                  <div class="card__header" >
                    <h3>Pin / Signature Bypass</h3>
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
        </div>
        <br></br>
        <div class="row">
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
                <div class="card shadow--md ">
                  <div class="card__header">
                    <h3>Kiosk Mode</h3>
                  </div>
                  <div class="card__body">
                    <p>
                      The payment application can be set in kiosk mode to prevent navigation between the different menus of the terminal.
                      In order to get out of kiosk mode a password is required from the merchant. This merchant password is defined during onboarding the first time the payment application is launched.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
                <div class="card shadow--md " >
                  <div class="card__header" >
                    <h3>Automatic Printing Modes</h3>
                  </div>
                  <div class="card__body" >
                    <p>
                      The payment terminal can automatically print merchant and/or customer receipts by changing a configuration parameter in the settings of the application. With this easy solution
                      you can rely on Handpoint to print receipts instead of integrating to the print receipt function.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
                <div class="card shadow--md ">
                  <div class="card__header">
                    <h3>Debit Filter</h3>
                  </div>
                  <div class="card__body">
                    <p>
                      For some types of merchants (e.g gambling categories) it is important to only be able to accept debit cards.
                      Therefore, Handpoint offers to their partners the possibility to filter and decline specific card types based on custom rules.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
                <div class="card shadow--md " >
                  <div class="card__header" >
                    <h3>Remote Debugging</h3>
                  </div>
                  <div class="card__body" >
                    <p>
                      Android based terminals allow you to remotely log into the terminals to help troubleshoot any issues that may arise on merchant location. From fetching logs remotely to
                      taking full control over the terminal we give you tools to make the merchant experience as smooth as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col col--6">
            <div class="integrationOptions">
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
          </div>
          <br></br>
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
                <div class="card shadow--md " >
                  <div class="card__header" >
                    <h3>Remote Encryption Key Injection</h3>
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
        <br></br>
        <div class="row">
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
                <div class="card shadow--md ">
                  <div class="card__header">
                    <h3>End-of-day report</h3>
                  </div>
                  <div class="card__body">
                    <p>
                      A transaction report can be printed with the list of transactions that happened during a specific period.
                      The report shows the transaction split by card brands and transaction types (sales, refunds and reversals).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="col col--6">
            <div class="integrationOptions">
              <div class="card-demo" style={{ fontSize: '13px' }}>
                <div class="card shadow--md " >
                  <div class="card__header" >
                    <h3>Multi Language Support</h3>
                  </div>
                  <div class="card__body" >
                    <p>
                      The Handpoint payment application and SDK messages are available in multiple languages. Thanks to the Handpoint modular architecture it is also very easy to add a new language
                      if currently not supported by simply translating a couple of files.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
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
      <a class="button button--secondary button--lg" target="_blank" href="mailto:support@handpoint.com">Contact Us</a>
      <br></br>
      <br></br>
      <br></br>
      <p>Take a look at our <a href="http://status.handpoint.com/" target="_blank">Handpoint Status Page</a>, this is where you will be able to monitor the uptime of the Handpoint systems. </p>
      <p>Do not miss any news, subscribe to our 📬 <a href="https://handpoint.us6.list-manage.com/subscribe?u=4d9dff9e7edb7e57a67a7b252&id=0a2179241e" target="_blank">Handpoint Newsletter!</a> </p>
    </div>

  );
}



function TermsConditions() {
  return (

    <div class="container">
      <div class="row">
        <div class="col col--12" >
          <div class="card-demo card shadow--md" style={{ fontSize: '13px' }}>
            <h3 class="card__header">
              <b>Terms & Conditions</b>
            </h3>
            <p class="card__body">By using this documentation you agree to be bound by the following:
              <br></br>
              <br></br>
              All information on this website including all documentation, code examples, pictures, drawings, graphs and any other information whatsoever
              (jointly "the API Documentation“) was created by and is the intellectual property of Handpoint and as such subject to copyright.
              The intented purpose of the API Documentation is to enable third party software companies to embed acceptance of card payments
              with Handpoint into their applications and no warranties, neither expressed nor implied, are provided regarding the accuracy of
              the documentation or the API service itself.
              <br></br>
              <br></br>
              If you work for a 3rd party software company and have a need for embedded payments you are only allowed to use the information for
              the intended purpose i.e. to embed Handpoint payment acceptance into your application. Specifically, you are not allowed to make copies of the API
              Documentation and present as your own as that is a breach of copyright. You are also not allowed to wrap your own API around the Handpoint API and present
              as your own unless you have a written agreement with Handpoint to do so.
              <br></br>
              <br></br>
              Handpoint reserves the right to change these terms and conditions at any time without warning.</p>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
}
