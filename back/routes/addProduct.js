const express = require('express');
const router = express.Router();
const { Product } = require('../db/models');
const { Category } = require('../db/models');
const Sequelize = require('sequelize');

router.post('/add', function (req, res) {
    Product.create({
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        description: req.body.description,
        images: req.body.images,
    })
        .then((prod) => Category.findAll()
            .then(cats => {
                const cat = cats.filter(c => { if (req.body.categories.includes(c.name)) return c })
                prod.addCategories(cat)
                    .then(() => {
                        res.status(200).send('ok/')
                    })
            })
        )
})

module.exports = router