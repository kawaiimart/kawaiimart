const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');


const Product = require('../models/Product');


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
        price: req.body.price,
        desc: req.body.desc,
        stock: req.body.stock,
        img: req.body.img,
        
    })

    // Adds newly created product to database.
    // Also responds with the product
    newProduct.save().then(product => res.json(product))
});

// DELETE api/products
router.delete('/:id', function(req, res) {
   Product.findById(req.params.id)
   .then(product => product.remove().then(() => res.json({success: true})))
   .catch(err => res.status(404).json({success: false}))
})

module.exports = router
