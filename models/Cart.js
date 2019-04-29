const mongoose = require('mongoose');
const Product = require('../models/Product').schema;
const User = require('../models/User').schema;

const Schema = mongoose.Schema;

const CartSchema = new Schema({

  user: {
    type: User,
  },

  items: [
    {
    product: {
        type: Product,
    },
    quantity: Number,
    }
  ],

  name: {
    type: String,
  },

  address: {
    type: String,
  }

});

const Cart = mongoose.model('carts', CartSchema);

module.exports = Cart;
