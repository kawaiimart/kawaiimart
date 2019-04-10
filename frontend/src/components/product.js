import React, { Component } from 'react';



function Product(props) {
    return (
        <div className="product">
            <p className="product_name">{props.product.name}</p>
            <p className="product_price">{props.product.price}</p>
            <p className="product_desc">{props.product.desc}</p>
        
        </div>
    )
}

export default Product