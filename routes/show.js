let router = require('express').Router()

let {create, read, one, update} = require('../controllers/controller_show')

router.patch('/:id_update', update)
router.post('/', create)
router.get('/', read)
router.get('/:id', one)


module.exports = router