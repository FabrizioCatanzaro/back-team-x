let router = require('express').Router()
let { register } = require('../controllers/user')
const validator = require('../middlewares/validator')
const schema = require('../schemas/user') //crear schema de usuario
const { accountExists } = require('../middlewares/accountExistsSignUp')


//router.post('/', create)
//router.get('/', read)
router.post('/',validator(schema),accountExists,register)

module.exports = router