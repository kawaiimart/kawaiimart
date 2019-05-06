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

    handleRemove = (_id) => {
      this.props.removeItem(_id);
    }

    handleAddQuantity = (_id) => {
      this.props.addQuantity(_id);
    }

    handleSubtractQuantity = (_id) => {
      this.props.subtractQuantity(_id);
    }

    toggleCart() {
      document.getElementById("cart").classList.toggle('active');
    }

  render() {
    return(
      <div className="cart" id="cart">
        <button style={buttonStyle} onClick={this.toggleCart} className="btn btn-primary">Close</button>
        <h4>Shopping cart</h4>
          <div>
            {this.props.addedItems.map(item => (
              <div className="cartItem" key={item._id}>
                <Thumbnail src = {require(`../images/ProductImages/${item.img}.png`)}/>
                <span style={{paddingLeft: "20px"}}>
                  <div style={{position: "absolute"}}>{item.name}</div>
                  <a href="#a" style={removeStyle} onClick={() => {this.handleRemove(item._id)}}>Remove</a>
                </span>
                <span style={{width: "70px", paddingLeft: "20px"}}>${item.price}</span>
                <span>
                  <button style={buttonStyle} onClick={() => {this.handleSubtractQuantity(item._id)}}>-</button>
                  <span>{item.quantity}</span>
                  <button style={buttonStyle} onClick={() => {this.handleAddQuantity(item._id)}}>+</button>
                </span>
              </div>
            ))}
          </div>
        <h5>Sub Total: ${this.props.subtotal < 0 ? Number(0).toFixed(2) : this.props.subtotal.toFixed(2)}</h5>
        <h6>Discount: -${this.props.discount < 0 ? Number(0).toFixed(2) : this.props.discount.toFixed(2)}</h6>
        <span>
          <h5 style={{display: "inline-block", paddingRight: "140px"}}>
            Total: ${this.props.total < 0 ? Number(0).toFixed(2) : this.props.total.toFixed(2)}
          </h5>
          <Link to="/checkout">
            <button style={buttonStyle} onClick={
              this.toggleCart
            }
            className="btn btn-primary">Checkout</button>
          </Link>
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.cart.addedItems,
    subtotal: state.cart.subtotal,
    discount: state.cart.discount,
    total: state.cart.total,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (_id) => {dispatch(removeItem(_id))},
    addQuantity: (_id) => {dispatch(addQuantity(_id))},
    subtractQuantity: (_id) => {dispatch(subtractQuantity(_id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
