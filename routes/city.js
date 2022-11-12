let router = require('express').Router()

let { create, read, one, update } = require('../controllers/city')

router.post('/', create)
router.get('/', read)
router.get('/:id', one)
router.put('/:id', update)


module.exports = router