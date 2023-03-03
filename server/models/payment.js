const database = require('../utils/database');
const {Model, DataTypes} = require('sequelize');


class Payment extends Model {
}

Payment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },

    transactionId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, {
    sequelize: database
})

module.exports = Payment;