import React, { Component } from 'react';
import Thumbnail from './Thumbnail'


function Product(props)  {

    return (
        <div className="product">
            {/*<Thumbnail
                src = {require(`../../images/PixelFood/${props.product.name}.png`)}
            />*/}
            <Thumbnail src = {require(`../../images/PixelFood/Apple.png`)}/>
            <p className="product-name">{props.product.name}</p>
            <p className="product-price">{props.product.price}</p>
            <p className="product-desc">{props.product.desc}</p>

        </div>
    )
}

export default Product
