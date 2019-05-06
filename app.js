const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');
const path = require('path');

const users = require('./routes/user');
const products = require('./routes/products');
const carts = require('./routes/cart');

// cart and carts are different 
const cartstorage = require('./routes/cartstorage')


mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/products', products);
app.use('/api/carts', carts);
app.use('/api/cartstorage', cartstorage)
app.use(express.static(path.join(__dirname, "frontend", "public")));


app.use('/api/addproducts', products);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "public", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});



