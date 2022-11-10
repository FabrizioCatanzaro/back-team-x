let router = require('express').Router()
let user = require('./user')
let city = require('./city')

router.use('/users', user)
router.use('/cities', city)

module.exports = router;
