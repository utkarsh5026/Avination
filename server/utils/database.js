const sequelize = require('sequelize');
env = require('dotenv').config();

// Create a new Sequelize instance of the postgres database

const database = new sequelize.Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'postgres',
})

module.exports = database;

