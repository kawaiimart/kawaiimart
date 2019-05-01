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
import About from './components/About';
import Contact from './components/Contact';
import Terms from './components/Terms';
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
                <Route exact path="/about" component={ About } />
                <Route exact path="/contact" component={ Contact } />
                <Route exact path="/terms" component={ Terms } />
                <div className="container">
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />
                  <Route exact path="/products" component={ Products } />
                </div>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
