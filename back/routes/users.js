const express = require('express');
const router = express.Router();
const { User } = require('../db/models');
router.post('/register', function (req, res) {
    User.create(req.body)
        .then(user => res.status(200).send(user))
})

router.post('/remove', function (req, res) {
    User.destroy({
        where: {
            id: req.body.id
        }
    })
        .then(() => {
            User.findAll()
                .then((users) => {
                    res.send(users)
                })
        })
})
router.post('/update', function (req, res) {
    User.findOne({
        where: {
            id: req.body.id
        }
    })
        .then((user) => {
            user.update({
                admin: user.admin ? null : true
            })
                .then(() => {
                    User.findAll()
                        .then((users) => {
                            res.send(users)
                        })
                })
        })
})
router.get('/all', function (req, res) {
    User.findAll()
        .then((users) => {
            res.send(users)
        })
})

module.exports = router