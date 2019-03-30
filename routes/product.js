const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');


const Product = require('../models/Product');

// router.get('/test', passport.authenticate('jwt', { session: false }), (req, res) => {
    // });
    // 

router.get('/', function(req, res) {
    res.send('product page');
});

module.exports = router;
