const Sequelize = require("sequelize");
const db = require("../database");

const User = db.define("user", {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
