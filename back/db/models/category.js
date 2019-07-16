const S = require('sequelize');
const db = require('../db');

const Category = db.define('categories', {
  name: {
    type: S.STRING,
    allowNull: false,
  }
})

module.exports = Category