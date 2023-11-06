const express = require('express');
const pizzaRouter = express.Router();
const { getAllPizzas, getPizzaById, createPizza, updatePizza, deletePizza } = require('../queries/pizza')


pizzaRouter.get('/', async (req, res) => {
        const pizzas = await getAllPizzas();
        if(pizzas){
            res.status(200).json(pizzas);
        } else {
            res.status(500).json({error: "Internal Server Error"});
        }
});


pizzaRouter.get('/:id', async (req, res) => {
    try {
        const pizza = await getPizzaById(req.params.id);
        res.status(200).json(pizza);
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
});

pizzaRouter.post('/', async (req, res) => {
    try {
        const newPizza = await createPizza(req.body);
        res.status(201).json(newPizza);
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
});


pizzaRouter.put('/:id', async (req, res) => {
    try {
        const updatedPizza = await updatePizza(req.params.id, req.body);
        res.status(200).json(updatedPizza);
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
});


pizzaRouter.delete('/:id', async (req, res) => {
    try {
        const deletedPizza = await deletePizza(req.params.id);
        res.status(200).json(deletedPizza);
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
});

module.exports = pizzaRouter;
