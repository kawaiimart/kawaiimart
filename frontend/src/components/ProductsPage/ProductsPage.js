import React, { Component } from 'react';
//import ProductGrid from './ProductGrid'
import Product from './Product';
import productData from "./mockdata/SampleProducts"

import './products.css';

export default class ProductsPage extends Component {
    
    constructor(props) {
        super();
        this.state = {
            productList: productData,
        }
    }
    
    
    render() {
        
        
        const products = this.state.productList.map(product => <Product product={product}/> )

        return (
            // prod-grid-container will hold ProductGrids + other things
            <div className="prod-grid-container">
                {/* ex: <ProductHeader> */}
                {products}
            </div>
        );
    }
}
