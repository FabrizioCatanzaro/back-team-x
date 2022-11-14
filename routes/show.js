let router = require('express').Router()

let {create, read, one} = require('../controllers/controller_show')


router.post('/', create)
router.get('/', read)
router.get('/:id', one)


module.exports = router