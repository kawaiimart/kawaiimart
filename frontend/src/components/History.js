import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './ProductPage/Product';



class History extends Component {
  render() {
    const products = this.props.history.map(product => <Product product={product}/>);

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
    history: state.cart.history,
  }
}

export default connect(mapStateToProps)(History)
