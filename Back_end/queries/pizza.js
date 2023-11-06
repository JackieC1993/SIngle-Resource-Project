const db = require('../db/db.ConFig');





const getAllPizzas = async () => {
    try {
        const allPizzas = await db.any('SELECT * FROM pizza');
        return allPizzas;
    } catch (error) {
        return error;
    }
}

const getPizzaById = async (id) => {
    try {
        const pizza = await db.one('SELECT * FROM pizza WHERE id = $1', [id]);
        return pizza;
    } catch (error) {
        return error;
    }
}

const createPizza = async (pizza) => {
    try {
        const newPizza = await db.one('INSERT INTO pizza (name, price, ingredient, topping ,vegan, size) VALUES ($1, $2, $3,$4, $5, $6) RETURNING *', [pizza.name, pizza.price, pizza.ingredient, pizza.topping, pizza.vegan, pizza.size]);
        return newPizza;
    } catch (error) {
        return error;
    }
}

const updatePizza = async (id, pizza) => {
    try {
        const updatedPizza = await db.one('UPDATE pizza SET name = $1, price= $2, ingredient = $3, topping = $4, vegan = $5,  size =$6 WHERE id =$7 RETURNING *', [pizza.name, pizza.price, pizza.ingredient, pizza.topping, pizza.vegan, pizza.size, id]);
        return updatedPizza;
    } catch (error) {
        return error;
    }
}

const deletePizza = async (id) => {
    try {
        const deletedPizza = await db.one('DELETE FROM pizza WHERE id = $1 RETURNING *', [id]);
        return deletedPizza;
    } catch (error) {
        return error;
    }
}

module.exports = { getAllPizzas, getPizzaById, createPizza, updatePizza, deletePizza };