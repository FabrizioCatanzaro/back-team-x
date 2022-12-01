let router = require('express').Router()
const passport = require('../config/passport')
const validator = require('../middlewares/validator')
const schemaComments = require('../schemas/comments')
const sameUser = require('../middlewares/sameUser')
const Comment = require('../models/Comment')



let {create, read,  update, destroy} = require('../controllers/comment')

router.get('/', read)
router.get('/:id', read)
router.post('/',passport.authenticate("jwt", { session: false }),validator(schemaComments),create)
router.put("/:id", passport.authenticate("jwt", { session: false }), sameUser(Comment), update);
router.delete("/:id", passport.authenticate("jwt", { session: false }), sameUser(Comment), destroy);


module.exports = router