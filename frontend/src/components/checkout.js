import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { emptyCart } from '../actions/cartActions';
import './checkout.css';
import FooterBar from './FooterBar';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      zipCode: "",
      state: "",
      cardNumber: "",
      nameOnCard: "",
      securityCode: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleSubmit() {

  }

  handleClick() {
    this.props.emptyCart()
  }

  render() {
    return (
    <div className="checkoutPage">
      <main className="inner cover">
        <div className="container" style={{ marginTop: '50px', width: '700px', marginBottom: '70px'}}>
          <div style={{float: "left"}}>
            <h2 style={{marginBottom: '20px'}}>Shipping Information</h2>
            <hr/>
            <form onSubmit={ this.handleSubmit }>
              <div className="form-group">
                  <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className='form-control form-control-lg'
                  onChange={ this.handleInputChange }
                  value={ this.state.name }
                  />
              </div>
              <div className="form-group">
                  <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  className='form-control form-control-lg'
                  onChange={ this.handleInputChange }
                  value={ this.state.address }
                  />
              </div>
              <div className="form-group">
                  <input
                  type="text"
                  placeholder="City"
                  name="city"
                  className='form-control form-control-lg'
                  onChange={ this.handleInputChange }
                  value={ this.state.city }
                  />
              </div>
              <div className="form-group">
                  <input
                  type="text"
                  placeholder="Zip code"
                  name="zipCode"
                  className='form-control form-control-lg'
                  onChange={ this.handleInputChange }
                  value={ this.state.zipCode }
                  />
              </div>
              <div className="form-group">
                  <input
                  type="text"
                  placeholder="State"
                  name="state"
                  className='form-control form-control-lg'
                  onChange={ this.handleInputChange }
                  value={ this.state.state }
                  />
              </div>
            </form>
            </div>
            <div style={{float: "right"}}>
            <h2 style={{marginBottom: '20px'}}>Payment Information</h2>
            <hr/>
            <form onSubmit={ this.handleSubmit }>
              <div className="form-group">
                  <input
                  type="text"
                  placeholder="Credit card number"
                  name="cardNumber"
                  className='form-control form-control-lg'
                  onChange={ this.handleInputChange }
                  value={ this.state.cardNumber }
                  />
              </div>
              <div className="form-group">
                  <input
                  type="text"
                  placeholder="Security Code"
                  name="securityCode"
                  className='form-control form-control-lg'
                  onChange={ this.handleInputChange }
                  value={ this.state.securityCode }
                  />
              </div>
              <div className="form-group">
                  <input
                  type="text"
                  placeholder="Name on card"
                  name="nameOnCard"
                  className='form-control form-control-lg'
                  onChange={ this.handleInputChange }
                  value={ this.state.nameOnCard }
                  />
              </div>
              <Link to="/confirmation">
                  <button style={{background: "grey", border: "grey"}} type="submit" className="btn btn-primary"
                    onClick={this.handleClick}>
                      Place order
                  </button>
              </Link>
            </form>
            </div>
          </div>
        </main>
        <div className="footer">
          <FooterBar/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: () => {dispatch(emptyCart())},
  }
}

export default connect(null, mapDispatchToProps)(Checkout);
