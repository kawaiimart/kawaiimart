import React, { Component } from 'react';
import Product from './product';
import productData from "./../mockdata/SampleProducts"
import './products.css';

export default class Products extends Component {
    
    constructor(props) {
        super();
        this.state = {
            productList: productData,
        }

    }
    
    
    render() {
        
        const products = this.state.productList.map(product => <Product product={product}/> )

        return (
            <div className="product-list">
                {products}
            </div>
        );
    }
}
