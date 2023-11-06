const express = require('express');
const app = express();
const cors = require('cors');
const PizzaControllers = require('./controllers/pizza.controller.js');

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to The Fusion Pizza Shop!');
});

app.use('allpizzas', PizzaControllers);
app.get('*', (req, res) => {
    res.status(404).send('Not Found');
});

module.exports = app;