/*
Purpose: 
Routes carts to the carts collection in the db.

Each user will have a single cart ID.

A cart is bound to the user from the time they register.
*/
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

const Cart = require('../models/Cart');
const User = require('../models/User');
const Product = require('../models/Product');

// GET api/cartstorage 
router.get('/', function(req, res){
    Cart.findById(req.body.id)
        .then(cart => {
            res.json(cart)
        })
})

// POST api/cartstorage
router.post('/', function(req, res) {
    const newCart = new Cart({});
    newCart.save().then(cart => res.json(cart))
})


module.exports = router;