let router = require('express').Router()
let { register, verify, access, accessWithToken, signOut, getDataProfile, editDataProfile } = require('../controllers/user')
const validator = require('../middlewares/validator')
const schemaSignUp = require('../schemas/userSignUp') 
const schemaSignIn = require('../schemas/userSignIn')
const accountExistsUp  = require('../middlewares/accountExistsSignUp')
const accountExistsIn  = require('../middlewares/accountExistsSignIn')
const accountHasBeenVerified  = require('../middlewares/accountHasBeenVerified') 
const mustSignIn = require('../middlewares/mustSignIn')
const passport = require('../config/passport')



router.post('/sign-up',validator(schemaSignUp),accountExistsUp,register)
router.get('/verify/:code', verify )
router.post('/sign-in',validator(schemaSignIn) ,accountExistsIn, accountHasBeenVerified , access)
router.post('/token', passport.authenticate('jwt', {session:false}), mustSignIn ,accessWithToken)
router.put('/sign-out',passport.authenticate('jwt', {session:false}), signOut )
router.get('/me/:id', getDataProfile)
router.patch('/me/:id', editDataProfile)





module.exports = router