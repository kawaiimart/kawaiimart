import React, { Component } from 'react';



function Product(props) {
    return (
        <div className="product">
            <p className="product-name">{props.product.name}</p>
            <p className="product-price">{props.product.price}</p>
            <p className="product-desc">{props.product.desc}</p>
        
        </div>
    )
}

export default Product