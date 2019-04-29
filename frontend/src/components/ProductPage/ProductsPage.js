import React, { Component } from 'react';
//import ProductGrid from './ProductGrid'
import Product from './Product';
import productData from "./mockdata/SampleProductsGen";
//import './products.css';
import './producttesting.scss';
import axios from 'axios';
import { connect } from 'react-redux';
import { setProductsData } from '../../actions/cartActions';


class ProductsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productList: this.props.items,
        }
    }

    componentDidMount() {
        axios.get('/api/products')
        .then(
            res => {
                console.log(res.data)
                console.log("Got it!")
                //this.state.productList = res.data

                this.setState(() => {
                    return {productList: res.data};
                });

                this.props.setProductsData(res.data);
            },
            res => {console.log(res)})
    }

    render() {
        const products = this.state.productList.map(product => <Product product={product}/>)

        return (
            // prod-grid-container will hold ProductGrids + other things
            <div className="prod-grid-container">
                {/* ex: <ProductHeader> */}
                {products}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProductsData: (productsData) => {dispatch(setProductsData(productsData))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)
