const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const db = require('./config/db');

const users = require('./routes/user');
const products = require('./routes/products');
const path = require('path');

mongoose.connect(db.mongoURI, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use(express.static(path.join(__dirname, "frontend", "build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('/frontend/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
