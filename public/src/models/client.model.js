const db = require("../helpers/database");
const { Sequelize, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const Client = db.define(
  "clients",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    hooks: {
      beforeCreate: (user, options) => {
        user.id = uuidv4();
      },
    },
  }
);

module.exports = Client;
