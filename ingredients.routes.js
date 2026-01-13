const express = require('express');
const app = express();
const ingredient = require('../schemas/ingredients.schema');

app.get('/', async (req, res) => {
    try{
        const ingredients = await ingredient.find();
        res.json(ingredients);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = app;