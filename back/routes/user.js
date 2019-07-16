const router = require('express').Router();
var passport = require('../validations/passport')


router.post('/login', passport.authenticate("local"), function (req, res) {
    res.send(req.user)
})
router.get('/get-user', function (req, res) {
    if (req.user) res.send(req.user)
    else res.send({})
})


router.get('/logout', function (req, res) {
    req.logout()
    res.sendStatus(200)
})

module.exports = router;