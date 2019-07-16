const S = require('sequelize');
const db = require('../db');

const Order = db.define('orders', {
  status: {
    type: S.STRING,
    allowNull: false,
    defaultValue: "pending"
  },
  address: {
    type: S.STRING,
    allowNull: false,
  },
  email: {
    type: S.STRING,
    allowNull: false,
    isEmail: true,
  }
})

module.exports = Order;