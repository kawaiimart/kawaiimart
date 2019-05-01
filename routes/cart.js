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
    const uId = req.body._id;
    let uCart = false;

    User.findOne({
      _id: uId,
    }).then(user => {
      uCart = user.cart;
      if(!user) {
          return res.status(404).json('User was not found');
      }
      Cart.findOne({
        user: uId,
      }).then(cart => {
        if(cart) {
          let products = cart.items.map((item) => item.product + '');
          if (products.includes(item.product)) {
            Product.findOne({
              _id: req.body.productId,
            }).then(found => {
              found.stock -= item.quantity;
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
                  .then(() => {
                    res.end('Quantity and stock updated');
                  });
            });
          } else {
            res.end('Product not found');
          }
        } else {
          user.cart = true;
          Cart.create({
            user: uId,
            items: [item]
          })
            .then(() => res.end('New Cart Created'));
        }
    });
  });
});

router.get('/', function(req, res) {

  Cart.findOne({ user: req.body._id })
  .populate('items.product')
  .exec((err, cart) => {
    if (!cart) {
      return res.send(null);
    }

    res.send(cart);
  });
});

router.put('/', function(req, res) {

  Cart.findById(req.body._id)
    .then(cart => {
      if(cart) {
        cart.items = cart.items.filter((item) => item._id != req.body.itemId);
        cart.save(() => res.end());
      } else {
        res.end('PUT error');
      }
    });

});

router.delete('/', function(req, res) {

  Cart.findByIdAndRemove(req.query._id)
    .then(() => res.end())
    .catch((err) => res.send(err));
});

module.exports = router;
