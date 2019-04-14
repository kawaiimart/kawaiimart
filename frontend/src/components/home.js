import React, { Component } from 'react';
import './home.css'
export default class Home extends Component {
    render() {
        return (
            <div className = "home">
                <header class= "cover">
                  <h3 class = "welcome"> Welcome to KawaiiMart! </h3>
                </header>
                <main class= "inner cover">
                  <h4 class="cover-heading">See today's featured items</h4>
                  <div class= "featured">
                      <p class = "item">
                      "Featured: __ Cereal"
                      </p>
                      <p class = "item">
                      "Featured: __ Snack"
                      </p>
                      <p class = "item">
                      "Featured: __ Brand Veggies"
                      </p>
                  </div>
                  <div class= "featured">
                      <p class = "item">
                      "Featured: __ Soda"
                      </p>
                      <p class = "item">
                      "Featured: __ Chips"
                      </p>
                      <p class = "item">
                      "Featured: __ Pastries"
                      </p>
                  </div>
                </main>
            </div>
        );
    }
}
