const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = require('../models/User');
const Cart = require('../models/Cart');
const Order = require('../models/Order');


// POST api/cart
router.post('/', function(req, res) {

  const item = {
    product: req.body.product,
    quantity: req.body.quantity,
  };
  var cart = req.body.cart;
  Cart.findOne({
    _id: cart
  }).then(cart => {
    if(cart) {
      Order.create({
        cart: cart,
        items: [item]
      });
    } else {
      return res.end('Could not find cart');
    }
  });


});

router.get('/', function(req, res) {

  Order.findOne({ user: req.body.id })
  .populate('items.product')
  .exec((err, order) => {
    if (!order) {
      return res.send(null);
    }

    res.send(order);
  });
});


router.delete('/', function(req, res) {

  Cart.findByIdAndRemove(req.query.id)
    .then(() => res.end())
    .catch((err) => res.send(err));
});

module.exports = router;
