let router = require('express').Router()
let { create, read, one, update, destroy } = require('../controllers/city')

let schema = require('../schemas/city')
let validator = require('../middlewares/validator')

router.post('/', validator(schema), create)
router.get('/', read)
router.get('/:id', one)
router.put('/:id', validator(schema), update)
router.delete('/:id', destroy)

module.exports = router