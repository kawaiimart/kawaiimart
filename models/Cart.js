const mongoose = require('mongoose');
const Product = require('../models/Product').schema;
const User = require('../models/User').schema;

const Schema = mongoose.Schema;

const CartSchema = new Schema({

  user: {
    type: String,
    //required: true,    user._id entered after user initially created
  },
  items: [
    {
      product: {
          type: String,
          //required: true,
        },

      quantity: {
        type: Number,
        //required: true,
      }
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
