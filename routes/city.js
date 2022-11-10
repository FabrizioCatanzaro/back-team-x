let router = require('express').Router()
let { create } = require('../controllers/city')

router.post('/', create)

module.exports = router