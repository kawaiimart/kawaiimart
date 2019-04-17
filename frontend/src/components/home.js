import React, { Component } from 'react';
import './home.css'
import FooterBar from './FooterBar';
export default class Home extends Component {
    render() {
        return (
            <div className = "home">
                <main class= "inner cover">
                <div className = "jumbotron head">
                  <h1 class="cover-heading">Welcome to KawaiiMart!</h1>
                  <p>The number one place to keep it kawaii!</p>
                </div>
                <div className="bd-example">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./KawaiiMart.png" className="d-block w-100"/>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                    <img src="./KawaiiMart.png" className="d-block w-100"/>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="./KawaiiMart.png" className="d-block w-100"/>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
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
                <FooterBar />
            </div>
        );
    }
}
