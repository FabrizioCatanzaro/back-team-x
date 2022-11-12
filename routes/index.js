let router = require('express').Router()
let user = require('./user')
let city = require('./city')
let hotel = require('./hotel')

router.use('/users', user)
router.use('/cities', city)
router.use('/hotels',hotel)

module.exports = router;
