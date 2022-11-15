let router = require('express').Router()

let {create, read, one, update, destroy} = require('../controllers/controller_show')

router.delete('/:id_delete', destroy)
router.patch('/:id_update', update)
router.get('/', read)
router.get('/:id', one)
router.post('/', create)


module.exports = router