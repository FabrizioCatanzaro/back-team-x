let router = require('express').Router()

let {create, read, update, destroy} = require('../controllers/controller_hotel');

router.post('/', create)
router.get('/', read)
router.put('/:id_update', update)
router.delete('/:id_delete', destroy)


module.exports = router