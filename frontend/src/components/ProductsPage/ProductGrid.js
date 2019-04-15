
// Currently not used, but may come in later

import React, { Component } from 'react';
import Product from './Product';
import productData from "./mockdata/SampleProducts"

class ProductGrid extends Component {


    render(){

        const products = this.state.productList.map(product => <Product product={product}/> )

        return (
            <div className="product-list">
                {products}
            </div>

        )
    }
}

//export default ProductGrid