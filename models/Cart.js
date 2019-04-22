const mongoose = require('mongoose');
const product = require('../models/Product');

const Schema = mongoose.Schema;

const CartSchema = new Schema({

  user: {
    id: String,
  },

  items: [
    {
    product: {
        type: product
    },
    quantity: Number,
    }
  ],

  name: {
    type: String,
  },

  address: {
    type: String,
    required: true,
  }

});

const Cart = mongoose.model('carts', CartSchema);

module.exports = Cart;
