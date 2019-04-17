import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
    }

    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
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
        return(
          <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-white">
                  <Link className="navbar-brand" to="/"><img src = {require('../KawaiiMart.png')} className = "LogoHome" alt= "KawaiiMart"/></Link>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      {isAuthenticated ? authLinks : guestLinks}
                    </div>
              </nav>
              <nav className="navbar navBottom navbar-expand-lg navbar-dark bg-dark">
                  <Link className="navbar-brand" to="/">Home</Link>
                  <div className= "collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <Link className="navbar-brand dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Browse
                        </Link>
                        <div className="dropdown-container">
                          <ul className="dropdown">
                            <li className="nav-item"><Link className="navbar-brand" to="/">Aile</Link></li>
                            <li className="nav-item"><Link className="navbar-brand" to="/">Category</Link></li>
                            <li className="nav-item"><Link className="navbar-brand" to="/">Favorite</Link></li>
                          </ul>
                          </div>
                      </li>
                      <li className="nav-item">
                        <Link className="navbar-brand" to="/">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="navbar-brand" to="/">Rewards</Link>
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
