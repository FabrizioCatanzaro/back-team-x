let router = require('express').Router()
let user = require('./user')

router.use('/user', user)

module.exports = router;
