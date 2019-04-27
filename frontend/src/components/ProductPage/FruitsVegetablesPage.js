import React, { Component } from 'react';
import Product from './Product';
import productData from "./mockdata/SampleProductsGen";
import './producttesting.scss';

export default class FruitsVegetablesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: productData,
    }
  }

  render() {
    const newList = this.state.productList.filter(item => item.category === "Fruits/Vegetables");

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
