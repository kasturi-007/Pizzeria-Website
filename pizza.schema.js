const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
    id: String,
    type: String,
    price: Number,
    name: String,
    image: String,
    description: String,
    ingredients: Array,
    topping: Array
});

module.exports = mongoose.model('pizza', PizzaSchema);