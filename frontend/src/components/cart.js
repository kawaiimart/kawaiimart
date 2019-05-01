import React, { Component } from 'react';
import Thumbnail from './ProductPage/Thumbnail';
import { Link } from 'react-router-dom';
import './cart.css';
import { connect } from 'react-redux'
import {removeItem, addQuantity, subtractQuantity } from '../actions/cartActions'

const removeStyle = {
  position: "relative",
  top: "40px",
  fontSize: "12px",
  color: "grey"
};

const buttonStyle = {
  background: "grey",
  color: "whitesmoke",
  border: "grey"
}

class Cart extends Component {
  constructor(props) {
    super(props);
    }

    handleRemove = (name) => {
      this.props.removeItem(name);
    }

    handleAddQuantity = (name) => {
      this.props.addQuantity(name);
    }

    handleSubtractQuantity = (name) => {
      this.props.subtractQuantity(name);
    }

    toggleCart() {
      document.getElementById("cart").classList.toggle('active');
    }

  render() {
    return(
      <div className="cart" id="cart">
        <h4>Shopping cart</h4>
          <div>
            {this.props.addedItems.map(item => (
              <div className="cartItem" key={item.name}>
                <Thumbnail src = {require(`../images/ProductImages/${item.name}.png`)}/>
                <span style={{paddingLeft: "20px"}}>
                  <div style={{position: "absolute"}}>{item.name}</div>
                  <a href="#a" style={removeStyle} onClick={() => {this.handleRemove(item.name)}}>Remove</a>
                </span>
                <span style={{width: "70px"}}>${item.price}</span>
                <span>
                  <button style={buttonStyle} onClick={() => {this.handleSubtractQuantity(item.name)}}>-</button>
                  <span>{item.quantity}</span>
                  <button style={buttonStyle} onClick={() => {this.handleAddQuantity(item.name)}}>+</button>
                </span>
              </div>
            ))}
          </div>
        <h5>Sub Total: ${this.props.total.toFixed(2)}</h5>
        <h6>Discount: -${this.props.discount.toFixed(2)}</h6>
        <span>
          <h5 style={{display: "inline-block", paddingRight: "140px"}}>Total: ${this.props.total.toFixed(2)}</h5>
          <Link to="/checkout">
            <button style={buttonStyle} onClick={this.toggleCart} className="btn btn-primary">Checkout</button>
          </Link>
        </span>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    addedItems: state.cart.addedItems,
    total: state.cart.total,
    discount: state.cart.discount,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (name) => {dispatch(removeItem(name))},
    addQuantity: (name) => {dispatch(addQuantity(name))},
    subtractQuantity: (name) => {dispatch(subtractQuantity(name))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
