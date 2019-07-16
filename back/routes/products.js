const express = require("express");
const router = express.Router();
const { Product, Category } = require("../db/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get('/id/:id', function (req, res) {
  let id = req.params.id;
  Product.findOne({ where: { id: id } })
    .then(product => res.json(product))
})

router.get('/all', function (req, res) {
  Product.findAll()
    .then((products) => {
      res.status(200).send(products)
    })
})

router.post('/update/stock', function (req, res) {
  req.body.forEach(prod =>
    Product.findOne({ where: { id: prod.id } })
      .then(product =>
        product.update({
          stock: prod.quantity > 0 ? product.stock - prod.quantity : product.stock - 1
        }))
  )
  Product.findAll()
    .then((products) => {
      res.status(200).send(products)
    })
})
router.post('/things/update', function (req, res) {
  Product.findOne({ where: { id: req.body.id } })
    .then(product =>
      product.update({
        name: req.body.name ? req.body.name : product.name,
        stock: req.body.stock ? req.body.stock : product.stock,
        price: req.body.price ? req.body.price : product.price,
        description: req.body.description ? req.body.description : product.description
      })
    )
    .then((prod) => Category.findAll()
      .then(cats => {
        const cat = cats.filter(c => { if (req.body.categories.includes(c.name)) return c })
        prod.setCategories(cat)
      })
    )
    .then(() => Product.findAll()
      .then((products) => {
        res.status(200).send(products)
      })
    )

})

router.get('/:name', function (req, res) {
  let nombre = req.params.name.toLowerCase();
  Product.findAll({
    where: {
      name: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', '%' + nombre + '%'),
      stock: {
        [Op.gt]: 0
      }
    }

  })
    .then((products) => {
      return res.json(products)
    })
})

module.exports = router;
