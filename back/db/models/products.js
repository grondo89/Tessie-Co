const S = require('sequelize');
const db = require('../db');

const Product = db.define('products', {
  name: {
    type: S.STRING,
    allowNull: false,
  },
  price: {
    type: S.INTEGER,
    allowNull: false,
  },
  stock: {
    type: S.INTEGER,
  },
  description: {
    type: S.TEXT
  },
  images: {
    type: S.ARRAY(S.STRING)
  },
  reviews: {
    type: S.ARRAY(S.TEXT)
  },
  rating: {
    type: S.ARRAY(S.INTEGER)
  }
})

module.exports = Product
