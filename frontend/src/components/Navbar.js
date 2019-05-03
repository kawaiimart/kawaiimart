import React, { Component } from 'react';
import Cart from "./cart";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import './Navbar.css';
import './cart.css';

class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.toggleCart = this.toggleCart.bind(this);
      this.state = {
        dropdownOpen: false,
        searchResult: '',
      };
      this.handleSearch = this.handleSearch.bind(this);
    }

    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }

    toggleCart() {
      document.getElementById("cart").classList.toggle('active');
    }

    handleSearch(e) {
      e.preventDefault();
      let searchResult = e.target[0].value;
      this.props.history.push("/search/" + searchResult);
    }


    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <Link className="nav-link" onClick={this.onLogout.bind(this)}>
                  Logout
                </Link>
            </ul>
        )
      const guestLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/register">Sign Up</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Log In</Link>
            </li>
        </ul>
      )

      const cart = (
              <div>
                <div className="nav-item navbar-nav ml-auto" onClick={this.toggleCart}>
                  <Link className="nav-link">Cart</Link>
                </div>
                <Cart/>
              </div>
      )
        return(
          <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-white">
                  <Link className="navbar-brand" to="/"><img src = {require('../KawaiiMart.png')} className = "LogoHome" alt= "KawaiiMart"/></Link>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      {isAuthenticated ? authLinks : guestLinks}
                      {cart}
                    </div>
              </nav>
              <nav className="navbar navBottom navbar-expand-lg navbar-dark bg-dark">
                  <Link className="navbar-brand" to="/">Home</Link>
                  <div className= "collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Browse
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <Link className= "dropdown-item"  to="/products">All</Link>
                          <Link className= "dropdown-item"  to="/beverages">Beverages</Link>
                          <Link className= "dropdown-item"  to="/dessertsSweets">Desserts/Sweets</Link>
                          <Link className= "dropdown-item"  to="fruitsVegetables">Fruits/Vegetables</Link>
                          <Link className= "dropdown-item"  to="/protein">Protein</Link>
                        </div>
                      </li>
                      <li className="nav-item">
                        <Link class="nav-link" to="/">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link class="nav-link" to="/">Rewards</Link>
                      </li>
                    </ul>
                  </div>
                  <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSearch}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                  </form>
              </nav>
            </div>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
