import React, { Component } from 'react';
import Thumbnail from './Thumbnail'
import { connect } from 'react-redux'
import { addToCart } from '../../actions/cartActions'

const buttonStyle = {
  background: "grey",
  color: "whitesmoke",
  border: "grey"
}

class Product extends Component
{
    constructor(props)
    {
      super(props);
      this.handleMouseHover = this.handleMouseHover.bind(this);
      this.toggleHoverState = this.toggleHoverState.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        isHovering: false,
      };
    }

    handleMouseHover()
    {
      this.setState(this.toggleHoverState);
    }

    toggleHoverState(state)
    {
      return {
        isHovering: !state.isHovering,
      };
    }

    handleClick(name)
    {
      this.props.addToCart(name);
      console.log(name);
    }

    render()
    {
      let imgLink = ""
      if (this.props.product.img === undefined || this.props.product.img === ""
          || this.props.product.img === "Fruits/Vegetables")
      {
        imgLink="Apple";
      }
      else {
        {
          imgLink = this.props.product.img;
        }
      }

      return (
          <div className="product"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}>
              <Thumbnail
                  //src = {require(`../../images/ProductImages/${this.props.product.image}.png`)}
                  src = {require(`../../images/ProductImages/${imgLink}.png`)}
              />
              <p className="product-name">{this.props.product.name}</p>
              <p className="product-price">${this.props.product.price}</p>
              <p className="product-desc">{this.props.product.desc}</p>
              <p className="product-id">{this.props.product.id}</p>
              {
                this.state.isHovering &&
                <button
                style={buttonStyle}
                className="btn btn-primary"
                onClick={() => {this.handleClick(this.props.product.name)}}>
                Add Item</button>
              }
          </div>
      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (name) => {dispatch(addToCart(name))}
  }
}

export default connect(null, mapDispatchToProps)(Product)
