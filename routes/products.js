const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');


const Product = require('../models/Product');

// router.get('/test', passport.authenticate('jwt', { session: false }), (req, res) => {
    // });
    // 



// GET api/products
router.get('/', function(req, res) {
    Product.find()
    .then(products => res.json(products))
});


// POST api/products
router.post('/', function(req, res) {
    // Construct an object to insert to DB

    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price
    })

    newProduct.save().then(product => res.json(product))

});

module.exports = router;
