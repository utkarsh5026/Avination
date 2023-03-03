const database = require('../utils/database');
const {Model, DataTypes} = require('sequelize');


class User extends Model {
    static getUserDetails(phone) {
        return User.findOne({
            where: {
                phone: phone
            }
        })
    }
}


User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
    },

    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    lastName: {
        type: DataTypes.STRING
    },

    // a gender attribute which can take only male and female values
    gender: {
        type: DataTypes.STRING,
        validate: {}
    },

    dob: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    fullName: {
        type: DataTypes.VIRTUAL,
        get() {
            return `${this.getAttribute('firstName')} ${this.getAttribute('lastName')})}`
        }
    }

}, {
    sequelize: database,
})

module.exports = User;