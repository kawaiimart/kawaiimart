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
            price: {
                value: ''
            },
            desc: {
                value: ''
            },

            category: {
                value: ''
            },

            img: {
              value: ''
            },
            stock: {
                value: ''
            }

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
          img: p.img.value,
          stock: p.stock.value,
      }

      axios.post('/api/products', product)
        .then(res => {
        console.log(res);
        console.log(res.data);
      })
      window.location.href = '/addproducts'
  }

  render() {
      return (
          <div>
              <form className="prod-form" onSubmit={this.handleSubmit}>
                  <label>  k a w a i i</label>

                  <input type="text"
                      name="productName"
                      placeholder="Name (ex. Apple)"
                      value={this.state.productName}
                      onChange={this.changeHandler}
                  />

                  <input type="number" step='.01'
                      name="price"
                      placeholder="Price (ex. 1.99)"
                      value={this.state.price}
                      onChange={this.changeHandler}
                  />

                  <input type="text"
                      name="desc"
                      placeholder="Description (ex. Juicy, red apple)"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                  />

                  <input type="text"
                      name="category"
                      placeholder="Category (choose from 4)"
                      value={this.state.category}
                      onChange={this.changeHandler}
                  />

                  <input type="text"
                      name="img"
                      placeholder="Image (ex. Apple for 'Apple.png')"
                      value={this.state.img}
                      onChange={this.changeHandler}
                  />

                    <input type="number" step='1'
                      name="stock"
                      placeholder="Stock"
                      value={this.state.stock}
                      onChange={this.changeHandler}
                  />
              
                    <input className="subButton" type="submit"/>
              </form>
          </div>
      )
   }
}

export default AddProduct
