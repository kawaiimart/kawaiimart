import React, { Component } from 'react';
import './About.css';
import FooterBar from './FooterBar';
export default class About extends Component {
  render() {
      return (
        <div className= "about">
          <main class= "inner cover">
            <div className = "container">
              <div className = "aboutText">
                <h1>ABOUT US</h1>
                <p>KawaiiMart is dedicated to providing our customers with the freshest groceries possible, at the lowest price possible, as Kawaii (trademark pending) as possible.
                Our company was started at San Jose State University by 10 kawaii students. On the development team, Andres Cortes, Miguel Gonzalez, Cole McKinnon, and Spencer Wong
                worked day in and day out making this very website. On our documentation team, Jasmit Mahajan, Phillip Nguyen, Haasitha Pidaparthi, Duyen Tran, and Ken Tran
                spent billions of hours designing and documenting KawaiiMart as an application. Our leader, Trevor O'Neil, made sure our team worked cohesively and efficiently.
                Together, we created KawaiiMart.</p>
                <p>Kawaii (かわいい) is a Japanese word meaning cute or adorable. We thought it would be a fitting descriptor for our humble grocery mart. As competitors to corporate
                grocery giants, our only hope in standing out from the rest is our cuteness, our kawaii-ness. Please enjoy navigating our website, ordering groceries, and eating
                said groceries.</p>
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
