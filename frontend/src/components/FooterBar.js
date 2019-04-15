import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export default class Navbar extends Component {
    render() {
        return(
          <div>
              <nav class="navbar navBottom navbar-expand-lg navbar-dark bg-dark">
                  <div class= "collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <Link class="nav-link" to="/">Contact Us</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/">Order Tracking</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/">Social Media</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/">Social Media</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/">Terms and Conditions</Link>
                      </li>
                    </ul>
                  </div>
              </nav>
            </div>
        )
    }
}
