import React, { Component } from 'react';
import './Terms.css';
import FooterBar from './FooterBar';
export default class Terms extends Component {
  render() {
      return (
        <div className= "terms">
          <main class= "inner cover">
            <div className = "container">
              <div className = "termsText">
                <h1>Terms and Conditions</h1>
                <p>Last updated: May 1, 2019</p>
                <p>Welcome to KawaiiMart. These Terms and Conditions apply to the
                KawaiiMart website and all other websites related to the KawaiiMart
                brand. As used in these Terms and Conditions, "KawaiiMart", "KM",
                "us", or "we" refers to the KawaiiMart company and its subsidiaries
                and affiliates.</p>
                <h5>Content</h5>
                <p>KawaiiMart is a student-made fictional brand, and exists only as
                a case study for creating a functional website. Nothing a user orders
                will be shipped, and no orders have an actual physical value. Emails
                are stored only for user validation and nothing else. Everything else
                on this page is just filler to make it look pretty.</p>
                <h5>License and Access</h5>
                <p>KawaiiMart grants you a limited license to access and make personal
                use of the Site and the Content for NONCOMMERCIAL PURPOSES ONLY and only
                to the extent such use does not violate these Terms & Conditions including,
                without limitation, the prohibitions listed in the "UNLAWFUL OR PROHIBITED USES"
                section of these Terms & Conditions. You may download, print and copy Content
                for personal, noncommercial purposes only, provided you do not modify or alter
                the Content in any way, delete or change any copyright or trademark notice, or
                violate these Terms & Conditions in any way. Accessing, downloading, printing,
                posting, storing or otherwise using the Site or any of the Content for any
                commercial purpose, whether on behalf of yourself or on behalf of any third party,
                constitutes a material breach of these Terms & Conditions. The Site is intended for
                use by individuals 13 years of age or older. If you are under 18, you may use this
                Site only with involvement of a parent or guardian.
                </p>
                <h5>Unlawful or Prohibited Uses</h5>
                <p>The Site may only be used for lawful purposes in accordance with the terms of the license granted in these Terms & Conditions. As a condition of your use of this Site, you warrant to KM that you will not use the Site for any purpose that is unlawful or prohibited by these Terms & Conditions. Whether on behalf of yourself or on behalf of any third party, YOU MAY NOT:
                </p>
                <ul>
                  <li>Use this website maliciously</li>
                  <li>Be anything else other than kawaii</li>
                </ul>
                <h5>Your Account</h5>
                <p>Your account belongs to KawaiiMart, and once an account is opened, it will forever belong to the KawaiiMart Company. Associated with your account is your name, email, and soul. Therefore, by registering an account with KawaiiMart, you agree to willfully give your soul to our company. Your soul is non-refundable, and you may contest to get your soul back by filling out form 134S. Good luck finding form 134S.
                </p>
              </div>
            </div>
          </main>
          <FooterBar />
        </div>
      );
    }

}
