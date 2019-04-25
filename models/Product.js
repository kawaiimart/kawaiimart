const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    stock: {
        type: Number,
        //required: true
    },
    img: {
        type: String
    },
    discount: {
        type: Number
    }

});

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;
