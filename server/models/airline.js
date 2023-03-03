const database = require('../utils/database');
const {Model, DataTypes} = require('sequelize');

class Airline extends Model {
}

Airline.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: database
})
module.exports = Airline;