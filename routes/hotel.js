let router = require('express').Router()
const schema = require('../schemas/hotel')
const validator = require('../middlewares/validator')
const passport = require('../config/passport')
let {create, read, update, destroy, one} = require('../controllers/controller_hotel');

router.delete('/:id', passport.authenticate("jwt", { session: false }), destroy)
router.put('/:id', passport.authenticate("jwt", { session: false }), validator(schema) ,update)
router.post('/', passport.authenticate("jwt", { session: false }) , validator(schema), create)
router.get('/:id', one)
router.get('/', read)

module.exports = router




