DROP DATABASE IF EXISTS pizza_dev;
CREATE DATABASE pizza_dev;
\c pizza_dev;

CREATE TABLE pizza
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price DECIMAL,
    ingredient TEXT,
    topping TEXT,
    vegan BOOLEAN,
    size TEXT
);