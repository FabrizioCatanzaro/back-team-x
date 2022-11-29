let router = require('express').Router()
const passport = require('../config/passport')
const validator = require('../middlewares/validator')


let {create, read, one, update, destroy} = require('../controllers/controller_show')

router.delete('/:id', passport.authenticate("jwt", { session: false }), destroy)
router.put('/:id', passport.authenticate("jwt", { session: false }), update)
router.post('/', passport.authenticate("jwt", { session: false }),create)
router.get('/:id', one)
router.get('/', read)


module.exports = router