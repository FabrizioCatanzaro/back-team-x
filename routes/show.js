let router = require('express').Router()

let {read, one} = require('../controllers/controller_show')


router.get('/', read)
router.get('/:id', one)


module.exports = router