const database = require("../utils/database");
const { Model, DataTypes, Op } = require("sequelize");
const Airport = require("./airport");
const constants = require("../utils/constants");

class Flight extends Model {
  static async getFlights(date, from, to) {
    return await Flight.findAll({
      where: {
        from: from,
        to: to,
        departure: {
          [Op.gte]: date,
        },
      },
    });
  }
}

Flight.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    from: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Airport,
        key: constants.PRIMARY_KEY_ATTRIBUTE,
      },
    },

    to: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Airport,
        key: constants.PRIMARY_KEY_ATTRIBUTE,
      },
    },

    arrival: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    departure: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    fare: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    sequelize: database,
  }
);

module.exports = Flight;
