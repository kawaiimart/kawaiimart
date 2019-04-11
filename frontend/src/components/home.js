import React, { Component } from 'react';
import './home.css'
export default class Home extends Component {
    render() {
        return (
            <div className = "home cover-container d-flex h-100 p-3 mx-auto flex-column">
                <header class= "masthead mb-auto">
                  <h3 class = "masthead-brand"> COVER </h3>
                </header>
                <main role = "main" class= "inner cover">
                  <h1 class="cover-heading">Home page</h1>
                  <p class = "lead">
                    "test test test test test test test."
                  </p>
                </main>
            </div>
        );
    }
}
