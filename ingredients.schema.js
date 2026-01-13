const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
    id: String,
    tname: String,
    price: Number,
    image: String
});

module.exports = mongoose.model('ingredient', IngredientSchema);