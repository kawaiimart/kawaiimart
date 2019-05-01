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
              <nav className="navbar navBottom navbar-expand-lg navbar-dark bg-dark">
                  <Link className="navbar-brand" to="/">Home</Link>
                  <div className= "collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Browse
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <Link className= "dropdown-item"  to="/">Category1</Link>
                          <Link className= "dropdown-item"  to="/">Category2</Link>
                          <Link className= "dropdown-item"  to="/">Category3</Link>
                        </div>
                      </li>
                      <li className="nav-item">
                        <Link class="nav-link" to="/about">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link class="nav-link" to="/">Rewards</Link>
                      </li>
                    </ul>
                  </div>
                  <form className="form-inline my-2 my-lg-0">
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
