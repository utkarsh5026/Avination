const database = require('../utils/database');
const {Model, DataTypes} = require('sequelize');
const Airline = require('./airline');
const constants = require('../utils/constants');

class Plane extends Model {
}

Plane.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    airlineId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Airline,
            key: constants.PRIMARY_KEY_ATTRIBUTE
        }
    },

    planeId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {sequelize: database});
module.exports = Plane;