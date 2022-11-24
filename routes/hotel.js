let router = require('express').Router()

let {create, read, update, destroy, one} = require('../controllers/controller_hotel');
const schema = require('../schemas/hotel')
const validator = require('../middlewares/validator')

router.delete('/:id', destroy)
router.put('/:id', validator(schema), update)
router.get('/:id', one)
router.get('/', read)
router.post('/', validator(schema), create)

module.exports = router




