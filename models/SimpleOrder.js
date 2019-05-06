const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SimpleOrderSchema = new Schema({

    user: {
        name: {
            type: String
        },
        user_id:{
            type: String
        },

    },
    items: [{
        product: {type: String, required: true},
        quantity: {type: Number, required: true}
    }],
  
    date: {
        type: Date,
        default: Date.now
    },
    
});

const SimpleOrder = mongoose.model('simpleorders', SimpleOrderSchema);

module.exports = SimpleOrder;
