const db = require('../db/db.ConFig');





const getAllPizzas = async () => {
    try {
        const allPizzas = await db.any('SELECT * FROM pizzas');
        return allPizzas;
    } catch (error) {
        return error;
    }
}

const getPizzaById = async (id) => {
    try {
        const pizza = await db.one('SELECT * FROM pizzas WHERE id = $1', [id]);
        return pizza;
    } catch (error) {
        return error;
    }
}

const createPizza = async (pizza) => {
    try {
        const newPizza = await db.one('INSERT INTO pizzas (name, description, price) VALUES ($1, $2, $3) RETURNING *', [pizza.name, pizza.description, pizza.price]);
        return newPizza;
    } catch (error) {
        return error;
    }
}

const updatePizza = async (id, pizza) => {
    try {
        const updatedPizza = await db.one('UPDATE pizzas SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *', [pizza.name, pizza.description, pizza.price, id]);
        return updatedPizza;
    } catch (error) {
        return error;
    }
}

const deletePizza = async (id) => {
    try {
        const deletedPizza = await db.one('DELETE FROM pizzas WHERE id = $1 RETURNING *', [id]);
        return deletedPizza;
    } catch (error) {
        return error;
    }
}

module.exports = { getAllPizzas, getPizzaById, createPizza, updatePizza, deletePizza };