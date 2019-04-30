const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

const Cart = require('../models/Cart');
const User = require('../models/User');
const Product = require('../models/Product');

// POST api/cart
router.post('/', function(req, res) {

    const item = {
      product: req.body.product,
      quantity: req.body.quantity,
    };
    const uId = req.body.id;
    let uCart = false;

    User.findOne({
      id: uId,
    }).then((user) => {
      uCart = user.cart;
      if(uCart) {
        Cart.findOne({
          user: uId,
        }).then(cart => {
          if(cart) {
            let products = cart.items.map((item) => item.product + '');
            if (products.includes(item.product)) {
              Cart.findOneAndUpdate({
                user: uId,
                items: {
                  $elemMatch: { product: item.product }
                }
              },
                {
                  $inc: { 'items.$.quantity': item.quantity }
                })
                .exec()
                .then(() => res.end());
            } else {
              cart.items.push(item);
              cart.save().then(() => res.end());
            }
          }
        });
      } else {
        user.cart = true;
        Cart.create({
          user: uId,
          items: [item]
        })
          .then(() => res.end());
      }});
});

router.get('/', function(req, res) {

  Cart.findOne({ user: req.body.id })
  .populate('items.product')
  .exec((err, cart) => {
    if (!cart) {
      return res.send(null);
    }

    res.send(cart);
  });
});

router.put('/', function(req, res) {

  Cart.findById(req.body.cartId)
    .then((cart) => {
      cart.items = cart.items.filter((item) => item._id != req.body.itemId);
      cart.save(() => res.end());
    });
});

router.delete('/', function(req, res) {

  Cart.findByIdAndRemove(req.query.id)
    .then(() => res.end())
    .catch((err) => res.send(err));
});

module.exports = router
