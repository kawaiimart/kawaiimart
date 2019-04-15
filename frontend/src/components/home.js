import React, { Component } from 'react';
import './home.css'
export default class Home extends Component {
    render() {
        return (
            <div className = "home">
                <header class= "cover">
                  <h3 class = "welcome"> Welcome to KawaiiMart! </h3>
                </header>
                <main class= "inner cover">
                  <h4 class="cover-heading">See today's featured items</h4>
                  <div className="container">
                   <div className="row row-header">
                    <div className="col col-4">
                    <img src = {require('../images/PixelFood/Chicken.png')} className="chicken" alt="Chicken"/>
                    <img src = {require('../images/PixelFood/Beer.png')} className="beer" alt="Beer"/>
                    </div>
                    <div className="comment col">
                      <h2>Game of Thrones Special</h2>
                      <p>Prepare provisions for the final season! This month only: get a 10% discount if you shop Chicken and Beer</p>
                    </div>
                   </div>
                   <div className="row row-header">
                    <div className="comment col col-8">
                      <h2>Gen Z Discount</h2>
                      <p>We can relate to the end of the month struggle, that is why we have decided to give out a hand to our youngsters. Buy Toast and Avocado and get Salmon free!</p>
                    </div>
                    <div className="col">
                      <img src = {require('../images/PixelFood/Beer.png')} className="beer" alt="Beer"/>
                      <img src = {require('../images/PixelFood/Beer.png')} className="beer" alt="Beer"/>
                    </div>
                   </div>
                   <div className="row row-header">
                    <div className="col col-4">
                      <img src = {require('../images/PixelFood/Beer.png')} className="beer" alt="Beer"/>
                      <img src = {require('../images/PixelFood/Beer.png')} className="beer" alt="Beer"/>
                    </div>
                    <div className="comment col">
                      <h2>Kawaii Catch of the Day</h2>
                      <p>Find today's best fish deals! Get a 20% discount when purchasing cod, yellowfin tuna, or salmon</p>
                    </div>
                   </div>
                   <div className="row row-header">
                    <div className="comment col col-8">
                      <h2>Life After COACHELLA</h2>
                      <p>Sadly, the dream is over. Now is time to stay hidrated and recover; therefore, we prepared a special sale for Vitamin Water — all flavors for $0.70 each!</p>
                    </div>
                    <div className="col">
                      <img src = {require('../images/PixelFood/Beer.png')} className="beer" alt="Beer"/>
                      <img src = {require('../images/PixelFood/Beer.png')} className="beer" alt="Beer"/>
                    </div>
                   </div>
                   <div className="row row-header">
                    <div className="col col-4">
                      <img src = {require('../images/PixelFood/Beer.png')} className="beer" alt="Beer"/>
                      <img src = {require('../images/PixelFood/Beer.png')} className="beer" alt="Beer"/>
                    </div>
                    <div className="comment col">
                      <h2>National Pie Day</h2>
                      <p>Get 2x1 in any pie purchases. It is the sweetest time of the year! Our chef's recommendation this week: Lemon Pie</p>
                    </div>
                   </div>
                  </div>
                </main>
            </div>
        );
    }
}
