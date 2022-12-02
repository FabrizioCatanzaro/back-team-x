let router = require('express').Router()
let { read, create, update, destroy, readOne } = require('../controllers/itinerary')
const passport = require('../config/passport')

router.get('/', read)
router.post('/', passport.authenticate("jwt", { session: false }), create)
router.put('/:id', passport.authenticate("jwt", { session: false }), update)
router.delete('/:id', passport.authenticate("jwt", { session: false }), destroy)
router.get('/:id', readOne)

module.exports = router