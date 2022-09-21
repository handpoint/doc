import React, { useState } from "react";
import clsx from 'clsx';
import Footer from '@theme/Footer';
import LayoutProviders from '@theme/Layout/Provider';
import { padding } from "@mui/system";


function Header() {
  return (
  <div>
    <div style={{
      padding: '10px',
      textAlign: 'center',
      color: '#25365d'
    }}>
      <h3>Developer Center</h3></div>
    <div 
      style={{
        textAlign: 'center',
        display: 'block',
        height: '150px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
        width: '100%'
      }}>
      <a href="https://www.handpoint.com/" target='_blank'><img src="/img/logo-header" alt="Logo" width="260px" /></a>
      <br></br>
      <h2 style={{
        color: '#25365d'
      }} >Global Payments-Powered Growth for SaaS</h2>
    </div>
  </div>
  );
}

function Options() {
  return (
    <div 
      style={{
        textAlign: 'center',
        display: 'block',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        width: '100%'
      }}>
      <br></br>

      <div class="card__footer">
        <div class="row">

          <div class="col col--4">
            <div class="handpointOptions">
              <div class="card-demo">
                <div class="card shadow--md">
                  <div class="card__header" style={{ color: '#25365d'}} >
                    <b><h4>In-person payments</h4></b>
                  </div>
                  <div class="card__body" align="center">
                    <div><img src="/img/cppayment.png" alt="In-person payments"></img></div>
                    <a class="button button--primary indexButtons" href="cpdocs/index.html">Integrate your software with payment terminals</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="col col--4">
            <div class="handpointOptions">
              <div class="card-demo" >
                <div class="card shadow--md">
                  <div class="card__header" style={{ color: '#25365d'}} >
                    <b><h4>Online payments</h4></b>
                  </div>
                  <div class="card__body" align="center">
                    <div><img src="/img/cnppayment.png" alt="Online payments"></img></div>
                    <a class="button button--primary indexButtons" href="https://developer-ecomm.handpoint.com/cnpdocs/index.html" >Integrate eCommerce payments into your software</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="col col--4">
            <div class="handpointOptions">
              <div class="card-demo">
                <div class="card shadow--md">
                  <div class="card__header" style={{ color: '#25365d'}}> 
                    <b><h4>Transaction Analytics</h4></b>
                  </div>
                  <div class="card__body" align="center">
                    <div><img src="/img/feedapi.png" alt="Transaction Analytics"></img></div>
                    <a class="button button--primary indexButtons" href="https://handpoint.com/docs/txnfeedapi/" ><b>Build in-depth transaction reporting for your software</b></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </div>

    </div>

  );
}

function Main() {
  const [count, setCount] = useState(0);

  return (
  <div>
    <div class="handpointBackground">
      <Header></Header>
      <Options></Options>
    </div>
    <div>
      <LayoutProviders>
        <Footer></Footer>
      </LayoutProviders>
    </div>
  </div>
  );
}

export default Main;