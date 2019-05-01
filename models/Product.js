const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
      type: String,
    },
    price: {
        type: String,
        required: true,
    },
    discount: {
      type: Number,
    },
    category: {
      type: String,
    },
    description: {
        type: String,
    },
    stock: {
      type: Number,
      required: true,
    }
});

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;
