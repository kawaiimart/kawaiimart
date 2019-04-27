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

import 'bootstrap/dist/css/bootstrap.min.css';

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
                <div className="container">
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />
                  <Route exact path="/products" component={ Products } />
<<<<<<< HEAD
                  <Route exact path="/checkout" component={ Checkout } />
                  <Route exact path="/confirmation" component={ Confirmation } />
                  <Route exact path="/fruitsVegetables" component={ FruitsVegetables } />
                  <Route exact path="/protein" component={ Protein } />
                  <Route exact path="/beverages" component={ Beverages } />
                  <Route exact path="/dessertsSweets" component={ DessertsSweets } />
=======
                  <Route exact path="/addproducts" component={ AddProducts } />
                
>>>>>>> JasmitMahajan
                </div>
                <FooterBar />
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
