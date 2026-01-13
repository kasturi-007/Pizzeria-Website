const express =  require('express');
const mongoose =  require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/pizzeriaDB').then(()=>{
    console.log('MongoDB connected successfully');
}).catch(err =>{
    console.error(err);
});

app.use('/pizzas', require('./routes/pizza.routes'));
app.use('/ingredients', require('./routes/ingredients.routes'));

app.listen(3000, ()=>{
    console.log('Server running on port 3000');
});