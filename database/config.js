const { Client } = require("pg");
const { Sequelize } = require("sequelize");

// Option 1: Passing a connection URI
const db = new Sequelize(
  "postgres://postgres:wilson1890@localhost:5432/gestoruser"
); // Example for postgres

module.exports = {
    db,
};
