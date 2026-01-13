const express = require('express');
const app = express();
const pizza = require('../schemas/pizza.schema');

app.get('/', async (req, res) => {
    const pizzas = await pizza.find();
    res.json(pizzas);
});

module.exports = app;