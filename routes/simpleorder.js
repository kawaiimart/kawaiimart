const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Cart = require('../models/Cart');
const Order = require('../models/Order');
const SimpleOrder = require('../models/SimpleOrder')


// POST api/simpleorder
router.post('/', function(req, res) {
    
    console.log(req.body.name)
    const newOrder = new SimpleOrder({
        user: req.body.user,
        items: req.body.items
    })

    newOrder.save().then(order => res.json(order))
})

// GET api/simpleorder
router.get('/', function(req, res){
    // find every order with same req user_id
    console.log("simpleorder.get: user: " + req.body.user)
    SimpleOrder.find({"user.user_id": req.body.user.user_id})
    
    .then(cart => {
        res.json(cart)
    })
})

module.exports = router;