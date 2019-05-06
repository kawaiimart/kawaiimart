import React, { Component } from 'react';
import './home.css'
import FooterBar from './FooterBar';
import axios from 'axios';
import { connect } from 'react-redux';
import { setProductsData } from '../actions/cartActions';

class Home extends Component {
  componentDidMount() {
      axios.get('/api/products')
      .then(
          res => {
              //this.state.productList = res.data

              this.props.setProductsData(res.data);
          },
          res => {console.log(res)})
  }

    render() {
        return (
            <div className = "home">
              <main class= "inner cover">
                  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={require('../KMP0.svg')} className="d-block w-100"/>
                      </div>
                      <div className="carousel-item">
                        <img src={require('../KMP1.svg')} className="d-block w-100"/>
                      </div>
                      <div className="carousel-item">
                        <img src={require('../KMP2.svg')} className="d-block w-100"/>
                      </div>
                      <div className="carousel-item">
                        <img src={require('../KMP3.svg')} className="d-block w-100"/>
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
                <div className= "newProducts">
                  <h1>Newly added Products</h1>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm">
                        <div className="item">
                          <img src = {require('../dkBread.png')} alt= "Dave's Killer Bread"/>
                          <p>Try Dave's 100% Organic, 100% GMO free, 100% Killer Bread!</p>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div className="item">
                          <img src = {require('../plantainChips.png')} alt= "Pink Salt Plaintain Chips"/>
                          <p>Barnana's Pink Salt Plantain Chips taste like nothing you've every tried before!</p>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div className="item">
                          <img src = {require('../acai.png')} alt= "Chocolate Covered Acai Berries"/>
                          <p>You won't want to miss out on Brookside's Chocolate covered Acai Berries!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <FooterBar />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProductsData: (productsData) => {dispatch(setProductsData(productsData))}
  }
}

export default connect(null, mapDispatchToProps)(Home)
