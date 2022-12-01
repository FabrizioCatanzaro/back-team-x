let router = require('express').Router()
let { create, updateReaction, read } = require('../controllers/reaction')
let passport = require('../config/passport')
let validator = require('../middlewares/validator')
let schema = require('../schemas/reaction')

router.post('/', validator(schema), passport.authenticate("jwt", { session: false }), create)
router.put('/', passport.authenticate("jwt", { session: false }), updateReaction)
router.get('/', read)

module.exports = router