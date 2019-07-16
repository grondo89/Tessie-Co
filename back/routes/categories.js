const express = require('express');
const router = express.Router();
const { Product, Category } = require('../db/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/all', function (req, res) {
    Category.findAll()
        .then((category) => {
            res.status(200).send(category)
        })
})

router.get('/find/:id', function (req, res) {
    Product.findAll({
        include: [{
            model: Category,
            attributes: ["name"]
        }],
        where: { id: req.params.id }
    })
        .then((categories) => {
            res.status(200).send(categories)
        })

})


router.post('/remove', function (req, res) {
    Category.destroy({
        where: {
            id: req.body.id
        }
    })
        .then(() => {
            Category.findAll()
                .then((category) => {
                    res.status(200).send(category)
                })
        })
})
router.post('/create', function (req, res) {
    Category.create({
        name: req.body.category
    })
        .then(() => {
            Category.findAll()
                .then((category) => {
                    res.status(200).send(category)
                })
        })
})
router.get('/:nombre', function (req, res) {

    try {
        Product.findAll({

            include: [{
                model: Category,
                where: {
                    name: req.params.nombre
                }

            }]
        })
            .then((category) => {
                res.status(200).send(category)
            })
    } catch (err) { console.log(err) }
})




module.exports = router;