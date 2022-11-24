let router = require('express').Router()
let { create, read, register } = require('../controllers/user')
//const validator = require('../middlewares/validator')
// const schema = require('../schemas/') //crear schema de usuario
const { accountExists } = require('../middlewares/accountExistsSignUp')


//router.post('/', create)
//router.get('/', read)
router.post('/', accountExists,register)

module.exports = router