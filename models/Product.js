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
    desc: {
        type: String,
    },
    
    img: {
        type: String
    },
    discount: {
        type: Number
    },
    
    category: {
      type: String,
    },
    
    stock: {
      type: Number,
      required: true,
    }
});

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;
