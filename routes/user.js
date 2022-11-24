let router = require('express').Router()
let { register, verify, access, accessWithToken } = require('../controllers/user')
const validator = require('../middlewares/validator')
const schema = require('../schemas/userSignUp') 
const accountExistsUp  = require('../middlewares/accountExistsSignUp')
const accountExistsIn  = require('../middlewares/accountExistsSignIn')
const accountHasBeenVerified  = require('../middlewares/accountHasBeenVerified') 
const mustSignIn = require('../middlewares/mustSignIn')
const passport = require('../config/passport')



router.post('/sign-up',validator(schema),accountExistsUp,register)
router.get('/verify/:code', verify )
router.post('/sign-in', accountExistsIn, accountHasBeenVerified , access)
router.post('/token', passport.authenticate('jwt', {session:false}), mustSignIn ,accessWithToken)





module.exports = router