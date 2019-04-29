import React, { Component } from 'react';
import Product from './Product';
import './producttesting.scss';
import { connect } from 'react-redux'

class BeveragesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: this.props.items,
    }
  }

  render() {
    const newList = this.state.productList.filter(item => item.category === "Beverages");

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

export default connect(mapStateToProps)(BeveragesPage)
