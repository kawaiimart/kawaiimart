import React, { Component } from 'react';
import Product from './ProductPage/Product';
import axios from 'axios';
import { setProductsData } from '../actions/cartActions';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
      super(props);
      this.state = {
          productList: this.props.items,
      }
  }

  componentDidMount() {
      axios.get('/api/products')
      .then(
          res => {
              //this.state.productList = res.data

              this.setState(() => {
                  return {productList: res.data};
              });

          },
          res => {console.log(res)})
  }

  render() {
    let searchResult = this.props.match.params.searchResult.toLowerCase();

    const filteredProducts = this.state.productList.filter(item => item.name.toLowerCase().includes(searchResult) ||
                                item.category.toLowerCase().includes(searchResult));

    console.log(filteredProducts);

      const products = filteredProducts.map(product => <Product product={product}/>)
      return (
          // prod-grid-container will hold ProductGrids + other things
          <div className="prod-grid-container">
              {/* ex: <ProductHeader> */}
              {products}
          </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
  }
}


export default connect(mapStateToProps)(Search);
