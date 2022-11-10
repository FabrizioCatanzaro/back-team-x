let router = require('express').Router()
let user = require('./user')

router.use('/users', user)

module.exports = router;
