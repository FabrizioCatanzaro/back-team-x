let router = require('express').Router()

let {create, read, update, destroy, one} = require('../controllers/controller_hotel');


router.post('/', create)
router.get('/', read)
router.put('/:id_update', update)
router.delete('/:id_delete', destroy)
router.get('/:id', one)

module.exports = router




