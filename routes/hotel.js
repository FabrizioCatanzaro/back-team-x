let router = require('express').Router()

let {create, read, update, destroy, one} = require('../controllers/controller_hotel');
const schema = require('../schemas/hotel')
const validator = require('../middlewares/validator')

router.delete('/:id', destroy)
router.patch('/:id', update)
router.get('/:id', one)
router.get('/', read)
router.post('/', create)

module.exports = router




