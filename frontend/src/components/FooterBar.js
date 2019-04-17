import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./footer.css";
export default class Navbar extends Component {
    render() {
        return(
          <div>
              <nav className="navbar navBottom navbar-expand-lg navbar-dark bg-dark">
                  <div className= "collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Contact Us</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Order Tracking</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Social Media</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Social Media</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Terms and Conditions</Link>
                      </li>
                    </ul>
                  </div>
              </nav>
            </div>
        )
    }
}
