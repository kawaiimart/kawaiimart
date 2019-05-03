import React, { Component } from 'react';
import Product from './Product';
import './producttesting.scss';
import { connect } from 'react-redux';
import axios from 'axios';
import { setProductsData } from '../../actions/cartActions';

class DessertsSweetsPage extends Component {
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

              this.props.setProductsData(res.data);
          },
          res => {console.log(res)})
  }

  render() {
    const newList = this.state.productList.filter(item => item.category === "Desserts/Sweets");

    const products = newList.map(product => <Product product={product}/>);

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

const mapDispatchToProps = (dispatch) => {
  return {
    setProductsData: (productsData) => {dispatch(setProductsData(productsData))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DessertsSweetsPage)
