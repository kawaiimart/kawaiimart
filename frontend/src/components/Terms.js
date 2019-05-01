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
                <h1>TERMS AND CONDITIONS</h1>
                <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
              </div>
            </div>
          </main>
          <div className= "footer">
            <FooterBar />
          </div>
        </div>
      );
    }

}
