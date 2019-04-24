import React, { Component } from 'react';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      zipCode: "",
      state: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleSubmit() {

  }

  render() {
    return (
      <div className="container" style={{ marginTop: '50px', width: '700px', marginBottom: '70px'}}>
        <h2 style={{marginBottom: '40px'}}>Shipping Information</h2>
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
          <div className="form-group">
              <button style={{background: "grey", border: "grey"}} type="submit" className="btn btn-primary">
                  Confirm
              </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Checkout;
