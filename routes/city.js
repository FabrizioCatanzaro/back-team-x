let router = require('express').Router()
const passport = require('../config/passport')
let { create, read, one, update, destroy } = require('../controllers/city')

let schema = require('../schemas/city')
let validator = require('../middlewares/validator')

router.post('/', validator(schema), passport.authenticate("jwt", { session: false }), create)
router.get('/', read)
router.get('/:id', one)
router.put('/:id', validator(schema), passport.authenticate("jwt", { session: false }), update)
router.delete('/:id', passport.authenticate("jwt", { session: false }), destroy)

module.exports = router