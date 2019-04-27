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

    handleClick(id)
    {
      this.props.addToCart(id);
    }

    render()
    {
      return (
          <div className="product"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}>
              <Thumbnail
                  //src = {require(`../../images/ProductImages/${this.props.product.name}.png`)}
                  src = {require(`../../images/ProductImages/Apple.png`)}
              />
              <p className="product-name">{this.props.product.displayname}</p>
              <p className="product-price">${this.props.product.price}</p>
              <p className="product-desc">{this.props.product.desc}</p>

              {
                this.state.isHovering &&
                <button
                style={buttonStyle}
                className="btn btn-primary"
                onClick={() => {this.handleClick(this.props.product.id)}}>
                Add Item</button>
              }
          </div>
      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {dispatch(addToCart(id))}
  }
}

export default connect(null, mapDispatchToProps)(Product)
