import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import Products from './components/ProductPage/ProductsPage';
import Navbar from './components/Navbar';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import FooterBar from './components/FooterBar';
import Checkout from './components/checkout'
import Confirmation from './components/confirmation';
import FruitsVegetables from './components/ProductPage/FruitsVegetablesPage';
import Protein from './components/ProductPage/ProteinPage';
import Beverages from './components/ProductPage/BeveragesPage';
import DessertsSweets from './components/ProductPage/DessertsSweetsPage';
import AddProducts from './components/AddProducts/AddProducts';
import Search from './components/Search'
//import RemoveProduct from './components/AddProducts/RemoveProducts';

import About from './components/About';
import Contact from './components/Contact';
import Terms from './components/Terms';
import 'bootstrap/dist/css/bootstrap.min.css';

import AccountInfo from './components/Account/AccountInfo'

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
              <Navbar />
                <Route exact path="/" component={ Home } />
                <Route exact path="/about" component={ About } />
                <Route exact path="/contact" component={ Contact } />
                <Route exact path="/terms" component={ Terms } />
                <Route exact path="/register" component={ Register } />
                <Route exact path="/login" component={ Login } />
                <Route exact path="/checkout" component={ Checkout } />
                <div className="container">
                  <Route exact path="/products" component={ Products } />

                  <Route exact path="/confirmation" component={ Confirmation } />
                  <Route exact path="/fruitsVegetables" component={ FruitsVegetables } />
                  <Route exact path="/protein" component={ Protein } />
                  <Route exact path="/beverages" component={ Beverages } />
                  <Route exact path="/dessertsSweets" component={ DessertsSweets } />
                  <Route exact path="/addproducts" component = { AddProducts } />
                  <Route exact path="/search/:searchResult" component = { Search } />
                  <Route exact path="/accountinfo" component = {AccountInfo} />
                </div>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
