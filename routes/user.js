let router = require('express').Router()
let { register } = require('../controllers/user')
const validator = require('../middlewares/validator')
const schema = require('../schemas/userSignUp') //crear schema de usuario
const { accountExists } = require('../middlewares/accountExistsSignUp')


//router.post('/', create)
//router.get('/', read)
router.post('/sign-up',validator(schema),accountExists,register)

module.exports = router