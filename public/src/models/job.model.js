const db = require("../helpers/database");
const { Sequelize, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const Job = db.define(
  "jobs",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    requirement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deadline: {
      type: DataTypes.INTEGER, // days in integer number
      allowNull: false,
    },
    position: {
      type: DataTypes.INTEGER, // opened positions integer number
      defaultValue: 1,
    },
    location: {
      type: DataTypes.ENUM("fulltime", "remote"),
      defaultValue: "fulltime",
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

module.exports = Job;
