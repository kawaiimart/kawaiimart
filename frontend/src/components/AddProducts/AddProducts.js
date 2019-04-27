import React, { Component } from 'react';

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
            price: {
                value: ''
            },
            desc: {
                value: ''
            },

            category: {
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
          price: p.price.value,
          desc: p.desc.value,
          category: p.category.value,
      }

      axios.post('/api/products', product)
          .then(res => {
            console.log(res);
            console.log(res.data);
      })
  }

  render() {
      return (
          <div>
              <form className="prod-form" onSubmit={this.handleSubmit}>
                  <label>  k a w a i i</label>
                  
                  <input type="text" 
                      name="productName"
                      value={this.state.email}
                      onChange={this.changeHandler}
                  />

                  <input type="number" step='.01'
                      name="price" 
                      value={this.state.price}
                      onChange={this.changeHandler}
                  />

                  <input type="text" 
                      name="desc"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                  />

                  <input type="text" 
                      name="category"
                      value={this.state.category}
                      onChange={this.changeHandler}
                  />

                  <input className="subButton" type="submit"/> 
              </form>
          </div>
      )
   }
}

export default AddProduct