import React, { useState } from "react";
import clsx from 'clsx';
import Footer from '@theme/Footer';
import LayoutProviders from '@theme/LayoutProviders';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { useColorMode } from '@docusaurus/theme-common';


function HandpointLink() {
  return (
    <div style={{
      backgroundColor: ' #25365D',
      padding: '5px',
      justifyContent: 'left',
        alignItems: 'left',
    }}><a href="https://www.handpoint.com/"><img src="img/handpoint-logo-hvitt.svg" alt="Logo" width="100px" /></a>
    <p style={{
        color: 'white'
      }}><i>&lt;Documentation Website/&gt;</i></p></div>
  );
}



function Header() {
  return (
    <div
      style={{
        backgroundColor: ' #25365D',
        textAlign: 'center',
        display: 'block',
        height: '220px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
        width: '100%'
      }}>
      <img src="img/handpoint-logo-hvitt.svg" alt="Logo" width="260px" />
      <br></br>
      <h2 style={{
        color: 'white'
      }} >Global Payments-Powered Growth for SaaS</h2>
    </div>
  );
}

function Options() {
  return (
    <div
      style={{
        backgroundColor: ' #e9ecef',
        textAlign: 'center',
        display: 'block',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        width: '100%'
      }}>
      {/* <img src="img/handpoint-logo-hvitt.svg" alt="Logo" width="260px" /> */}
      <br></br>

      <div class="card__footer">
        <div class="row">
          <div class="col col--4">
            <div class="card-demo" style={{ fontSize: '14px' }}>
              <div class="card shadow--md ">
                <div class="card__header" >
                  <b><p>In-person payments</p></b>
                </div>
                <div class="card__body" align="center">

                  <div><img src="img/cppayment.png" alt="Flowers in Chania"></img></div>
                  <a class="button button--primary" href="cpdocs" >Integrate your software with payment terminals</a>
                </div>
              </div>

            </div>
          </div>
          
          <div class="col col--4">
            <div class="card-demo" style={{ fontSize: '14px' }}>
              <div class="card shadow--md ">
                <div class="card__header" >
                  <b><p>Online payments</p></b>
                </div>
                <div class="card__body" align="center">

                  <div><img src="img/cnppayment.png" alt="Flowers in Chania"></img></div>
                  <a class="button button--primary" href="cpdocs" >Integrate eCommerce payments into your software</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col col--4">
            <div class="card-demo" style={{ fontSize: '14px' }}>
              <div class="card shadow--md ">
                <div class="card__header" >
                  <b><p>Transaction Analytics</p></b>
                </div>
                <div class="card__body" align="center">

                  <div><img src="img/feedapi.png" alt="Txn Feed API"></img></div>
                  <a class="button button--primary" href="https://www.handpoint.com/docs/txnfeedapi/" >Build in-depth transaction reporting for your software</a>
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
      <HandpointLink/>
      <Header></Header>
      <Options></Options>
      <LayoutProviders>
        <Footer></Footer>
      </LayoutProviders>
    </div>
  );
}

export default Main;