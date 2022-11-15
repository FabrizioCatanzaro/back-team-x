let router = require('express').Router()

let {create, read, update, destroy, one} = require('../controllers/controller_hotel');

router.delete('/:id', destroy)
router.patch('/:id', update)
router.get('/:id', one)
router.get('/', read)
router.post('/', create)

module.exports = router




