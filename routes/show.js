let router = require('express').Router()

let {create, read, one, update, destroy} = require('../controllers/controller_show')

router.delete('/:id', destroy)
router.put('/:id', update)
router.get('/:id', one)
router.get('/', read)
router.post('/', create)


module.exports = router