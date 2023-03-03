const database = require('../utils/database');
const {Model, DataTypes} = require('sequelize');
const Flight = require('./flight');
const Payment = require('./payment');
const constants = require('../utils/constants');


class Ticket extends Model {
}

Ticket.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    flightId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Flight,
            key: constants.PRIMARY_KEY_ATTRIBUTE
        }
    },

    referenceCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    paymentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Payment,
            key: constants.PRIMARY_KEY_ATTRIBUTE
        }
    }
}, {
    sequelize: database
})

module.exports = Ticket;