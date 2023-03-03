const database = require('../utils/database');
const {Model, DataTypes} = require('sequelize');
const Ticket = require('./ticket');
const constants = require('../utils/constants');

class UserTicket extends Model {
}

UserTicket.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    ticketId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Ticket,
            key: constants.PRIMARY_KEY_ATTRIBUTE
        }
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    dob: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },

    mobile: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: database
});


module.exports = UserTicket;