import React, { Component } from 'react';
import './home.css'
import FooterBar from './FooterBar';
export default class Home extends Component {
    render() {
        return (
            <div className = "home">
              <main class= "inner cover">
                <div>
                  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={require('../KMP0.svg')} className="d-block w-100"/>
                      </div>
                      <div className="carousel-item">
                        <img src={require('../templateSlide.svg')} className="d-block w-100"/>
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Second slide label</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src={require('../templateSlide.svg')} className="d-block w-100"/>
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
              </main>
              <FooterBar />
            </div>
        );
    }
}
