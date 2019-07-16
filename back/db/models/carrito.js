const S = require('sequelize');
const db = require('../db');

const Carrito = db.define('carritos', {
  userId: {
    type: S.INTEGER,
  }
})

module.exports = Carrito;
