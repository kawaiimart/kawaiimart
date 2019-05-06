const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({

  cart: {
    type: String,
    //required: true,
  },
  items: [
    {
      product: {
          type: String,
          required: true,
        },

      quantity: {
        type: Number,
        required: true,
      }
    }
  ],
  name: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  address: {
    type: String,
  }

});

const Order = mongoose.model('orders', OrderSchema);

module.exports = Order;
