let router = require('express').Router()
const passport = require('../config/passport')
const validator = require('../middlewares/validator')
const schemaComments = require('../schemas/comments')
let {create, read} = require('../controllers/comment')


router.get('/', read)
router.get('/:id', read)
router.post('/',passport.authenticate("jwt", { session: false }),validator(schemaComments),create)


module.exports = router