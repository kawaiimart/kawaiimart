import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import './style.scss';

class AddProduct extends Component {

  constructor(props){
    super(props)

    this.state = {

        formControls: {
            productName: {
                value: ''
            },

          }
      }
  }

  changeHandler = event => {
      const name = event.target.name;
      const value = event.target.value;

      this.setState({
          formControls: {
              ...this.state.formControls,
              [name]: {
                  ...this.state.formControls[name],
                  value
              }
          }
      })
  }

  handleSubmit = event => {

      event.preventDefault();
      const p = this.state.formControls

      const product = {
          name: p.productName.value,
      }

      axios.delete('/api/products', product)
        .then(res => {
        console.log(res);
        console.log(res.data);
      })

      window.location.href = '/removeproducts'
  }

  render() {
      return (
          <div>
              <form className="prod-form" onSubmit={this.handleSubmit}>
                  <label> l e s s   k a w a i i</label>

                  <input type="text"
                      name="productName"
                      placeholder="Name"
                      value={this.state.productName}
                      onChange={this.changeHandler}
                  />

                    <input className="subButton" type="submit"/>
              </form>
          </div>
      )
   }
}

export default AddProduct
