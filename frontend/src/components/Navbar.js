import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <a className="nav-link" onClick={this.onLogout.bind(this)}>
                  Logout
                </a>
            </ul>
        )
      const guestLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link class="nav-link" to="/register">Sign Up</Link>
            </li>
            <li className="nav-item">
                <Link class="nav-link" to="/login">Log In</Link>
            </li>
        </ul>
      )
        return(
          <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-white">
                  <Link class="navbar-brand" to="/"><img src = {require('../KawaiiMart.png')} className = "LogoHome" alt= "KawaiiMart"/></Link>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      {isAuthenticated ? authLinks : guestLinks}
                    </div>
              </nav>
              <nav class="navbar navBottom navbar-expand-lg navbar-dark bg-dark">
                  <Link class="navbar-brand" to="/">Home</Link>
                  <div class= "collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Browse
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <Link class= "dropdown-item"  to="/">Category1</Link>
                          <Link class= "dropdown-item"  to="/">Category2</Link>
                          <Link class= "dropdown-item"  to="/">Category3</Link>
                        </div>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/">About</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/">Rewards</Link>
                      </li>
                    </ul>
                  </div>
                  <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
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
