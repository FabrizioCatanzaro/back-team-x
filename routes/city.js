let router = require('express').Router()
let { create, read, one, update, destroy } = require('../controllers/city')

router.post('/', create)
router.get('/', read)
router.get('/:id', one)
router.put('/:id', update)
router.delete('/:id', destroy)

module.exports = router