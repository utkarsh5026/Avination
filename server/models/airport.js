const database = require('../utils/database');
const {Model, DataTypes} = require('sequelize');

class Airport extends Model {
}

Airport.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize: database
});

module.exports = Airport;