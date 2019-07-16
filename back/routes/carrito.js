const router = require('express').Router();
const { Product, User } = require('../db/models');


router.get('/:userId', function (req, res) {
    let userId = req.params.userId;
    User.findAll({
        include: [{
            model: Product,
        }]
    }).
        then(user => {
            let selectedUser = user.filter(user => user.id == userId)
            if (selectedUser[0]) res.json(selectedUser[0].products)
            else res.sendStatus(204)
        })
})

router.get('/', function (req, res) {
    User.findAll({
        include: [{
            model: Product,
        }]
    })
        .then(user => res.send(user))
})

router.post('/:userId', function (req, res) {
    let userId = req.params.userId;
    User.findOne({ where: { id: userId } })
        .then(user => user.addProducts(req.body.product.id))
        .then(user => res.sendStatus(200))
})

router.post('/delete/:userId', function (req, res) {
    let userId = req.params.userId;
    User.findAll({
        include: [{
            model: Product,
        }]
    }).
        then(user => {
            let selectedUser = user.filter(user => user.id == userId)
            let newArr = selectedUser[0].products.filter(product => product.id !== req.body.deletedProduct)
            selectedUser[0].setProducts(newArr)
            res.json(newArr)
        })
})

router.post('/deleteall/:userId', function (req, res) {
    let userId = req.params.userId;
    User.findAll({
        include: [{
            model: Product,
        }]
    }).
        then(user => {
            let selectedUser = user.filter(user => user.id == userId)
            selectedUser[0].setProducts([])
        })
})

module.exports = router;
