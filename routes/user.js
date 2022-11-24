let router = require('express').Router()
let { register, verify, getInto } = require('../controllers/user')
const validator = require('../middlewares/validator')
const schema = require('../schemas/user')
const { accountExists } = require('../middlewares/accountExistsSignUp')


router.post('/sign-up',validator(schema),accountExists,register)
router.get('/verify/:codeX', verify )


module.exports = router