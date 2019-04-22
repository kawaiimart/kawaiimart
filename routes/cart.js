const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

const Cart = require('../models/Cart');
const User = require('../models/User');


// GET api/cart
router.get('/', function(req, res) {
     Cart.find()
    .then(cart => res.json(cart))
});

// POST api/cart
router.post('/cart', function(req, res) {

    User.findOne({
      email: req.body.email
    }).then(cart => {
      if(cart) {
        return res.status(400).json({
            cart: 'Cart already exists for this user'
        });
      }
      else {
        // Construct an object to insert to DB
        const newCart = new Cart({
            user: req.body.user,
            items: req.body.items,
            address: req.body.address
        });
        // Adds newly created cart to database.
        // Also responds with the product
        newCart.save().then(cart => res.json(cart))
      }
    });
});

// POST api/cart/item
router.post('/cart/item', function(req, res) {

    Cart.findOne({
      user: req.body.user
    }).then(cart => {
      if(cart) {
        return res.status(400).json({
            cart: 'Cart already exists for this user'
        });
      }
      else {
        // Construct an object to insert to DB
        const newCart = new Cart({
            user: req.body.user,
            items: req.body.items,
            address: req.body.address
        });
        // Adds newly created cart to database.
        // Also responds with the product
        newCart.save().then(cart => res.json(cart))
      }
    });
});

// DELETE api/cart
router.delete('/:id', function(req, res) {
   Cart.findById(req.params.id)
   .then(cart => cart.remove().then(() => res.json({success: true})))
   .catch(err => res.status(404).json({success: false}))
})

module.exports = router
