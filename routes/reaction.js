let router = require('express').Router()
let { create, updateReaction, read, readMyReactions, deleteMyReaction } = require('../controllers/reaction')
let passport = require('../config/passport')
let validator = require('../middlewares/validator')
let schema = require('../schemas/reaction')
let middlewareDel = require('../middlewares/middlewareDel')

router.post('/', validator(schema), passport.authenticate("jwt", { session: false }), create)
router.put('/', passport.authenticate("jwt", { session: false }), updateReaction)
router.get('/',passport.authenticate("jwt", { session: false }), read)
//router.get('/', ,readMyReactions)
router.put('/:id', passport.authenticate("jwt", { session: false }), middlewareDel, deleteMyReaction)
module.exports = router