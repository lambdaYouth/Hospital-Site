import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './stylesheets/termspoli.css';
import Header from "./Header";
import Footer from "./Footer";
const TermsPoli = () => {
  return (
    <>
      <Header />
      <div className="tpage">
        <h3 className="text-center">ePayment Gateway Services</h3>
        <section className="mt-4">
          <h5>I. Applicability</h5>
          <p>
            The terms and conditions set out hereunder for Online Payments being
            offered by PAYTM ("Payment Service Provider") linked with
            www.rkph.com ("Website") are applicable to any person ("User") who
            is intending to avail of the services of Rajakrishnappa
            Hospitals Ltd. ("RKPH"). By accessing this website, the User is
            deemed to have read and accepted the terms and conditions of Online
            Payment Gateway.
          </p>
        </section>

        <section className="mt-3">
          <h5>II. Disclaimer</h5>
          <p>
            The User expressly agrees that his/her use of the aforesaid online
            payment Service is entirely at his/her own risk and responsibility.
            RKPH makes no representation of any kind, express or implied, as to
            the operation of the Payment Gateway.
          </p>
        </section>

        <section className="mt-3">
          <h5>III. Debit/Credit Card, Bank Account Details</h5>
          <p>
            User may pay bills by using a PAYTM/ANY Wallet, Debit/Credit Card,
            Internet Banking Account or through any BHIM/UPI ID. User submits and
            agrees that the details provided by the User to the Payment Gateway
            for payment transaction processing will be correct and the User shall
            not use a debit/credit card, which is not lawfully owned by the User.
          </p>
          <p>
            User is responsible to ensure that all the details provided are
            accurate and authorises the debit to the nominated account or wallet
            for the settlement of bills selected by the User including applicable
            fees.
          </p>
        </section>

        <section className="mt-3">
          <h5>IV. Refund Policy</h5>
          <p>
            It is the sole discretion of the RKPH to refund the Fees/Charges
            received online. In the event of a refund, it will be processed only
            through the Payment Gateway to the User's account. No cash refunds.
          </p>
          <p>
            Refunds apply if the service is not rendered, cancelled or if the
            amount deposited exceeds the bill. Ensure not to pay twice in case of
            network issues; confirm via support.
          </p>
        </section>

        <section className="mt-3">
          <h5>V. Limitation of Liability</h5>
          <p>
            RKPH is not liable for any damages including loss of data, profits,
            or unauthorized data use arising from Payment Gateway usage. Users are
            advised to ensure secure internet practices.
          </p>
        </section>

        <section className="mt-3">
          <h5>VI. Personal Information</h5>
          <p>
            RKPH may collect and use User information in accordance with
            applicable laws and privacy policies. Communications via email imply
            consent to share data with RKPH.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TermsPoli;