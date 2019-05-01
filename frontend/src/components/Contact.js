import React, { Component } from 'react';
import './Contact.css';
import FooterBar from './FooterBar';
export default class Contact extends Component {
  render() {
      return (
        <div className= "contact">
          <main class= "inner cover">
            <div className = "container">
              <div className = "contactText">
                <h1>CONTACT US</h1>
                <div className= "person">
                  <h5><b>Andres Cortes</b> (Development Team)</h5>
                  <p>andres.cortes@sjsu.edu</p>
                  <p>https://www.linkedin.com/in/andres-cortes-a758a7141/</p>
                </div>
                <div className= "person">
                  <h5><b>Miguel Gonzalez</b> (Development Team)</h5>
                  <p>miguel.gonzalezfernandez@sjsu.edu</p>
                </div>
                <div className= "person">
                  <h5><b>Jasmit Mahajan:</b> (Documentation Team)</h5>
                  <p>jasmit.mahajan@sjsu.edu</p>
                </div>
                <div className= "person">
                  <h5><b>Cole McKinnon</b> (Development Team) </h5>
                  <p>cole.mckinnon@sjsu.edu</p>
                </div>
                <div className= "person">
                  <h5><b>Phillip Nguyen</b> (Documentation & Development Team) </h5>
                  <p>phillip.nguyen01@sjsu.edu</p>
                </div>
                <div className= "person">
                  <h5><b>Trevor O’Neil</b> (Project Manager)</h5>
                   <p>trevor.oneil@sjsu.edu</p>
                </div>
                <div className= "person">
                  <h5><b>Haasitha Pidaparthi</b> (Documentation Team) </h5>
                  <p>haasitha.pidaparthi@sjsu.edu</p>
                </div>
                <div className= "person">
                  <h5><b>Duyen Tran</b> (Documentation Team) </h5>
                  <p>duyen.tran@sjsu.edu</p>
                </div>
                <div className= "person">
                  <h5><b>Ken Tran</b> (Documentation Team) </h5>
                  <p>kham.tran@sjsu.edu</p>
                </div>
                <div className= "person">
                  <h5><b>Spencer Wong</b> (Development Team) </h5>
                  <p>spencer.wong@sjsu.edu</p>
                </div>
              </div>
            </div>
          </main>
            <FooterBar />
        </div>
      );
    }

}
