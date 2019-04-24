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

    handleRemove = (id) => {
      this.props.removeItem(id);
    }

    handleAddQuantity = (id) => {
      this.props.addQuantity(id);
    }

    handleSubtractQuantity = (id) => {
      this.props.subtractQuantity(id);
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
              <div className="cartItem" key={item.id}>
                <Thumbnail src = {require(`../images/PixelFood/${item.name}.png`)}/>
                <span style={{paddingLeft: "20px"}}>
                  <div style={{position: "absolute"}}>{item.displayname}</div>
                  <a href="#a" style={removeStyle} onClick={() => {this.handleRemove(item.id)}}>Remove</a>
                </span>
                <span style={{width: "70px"}}>${item.price}</span>
                <span>
                  <button style={buttonStyle} onClick={() => {this.handleSubtractQuantity(item.id)}}>-</button>
                  <span>{item.quantity}</span>
                  <button style={buttonStyle} onClick={() => {this.handleAddQuantity(item.id)}}>+</button>
                </span>
              </div>
            ))}
          </div>
        <h5>Sub Total: ${this.props.total.toFixed(2)}</h5>
        <h6>Discount: -$0.00</h6>
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
    total: state.cart.total
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {dispatch(removeItem(id))},
    addQuantity: (id) => {dispatch(addQuantity(id))},
    subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
