import React, { Component } from 'react';
import Product from './product';

export default class Products extends Component {
    render() {
        return (
            <div>
                Products Component
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        );
    }
}
