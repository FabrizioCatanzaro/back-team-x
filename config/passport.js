const passport = require('passport');
const passportJWT = require('passport-jwt');

const {KEY_JWT} = process.env
const User = require('../models/Model_User')

passport.use(
    new passportJWT.Strategy(
        {
            jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: KEY_JWT
        },
        async (jwt_payload, done) =>{
            console.log(jwt_payload)
            try{
                let user = await User.findOne({ _id:jwt_payload.id })
                if(user){
                    user = {
                        name: user.name,
                        lastName:user.lastName,
                        photo:user.photo,
                        email:user.email,
                        role: user.role
                    }
                    return done(null, user)
                }else{
                    return done(null, false)
                }
            }catch(error){
                console.error(error)
                return done(error, false)
            }
        }
    )
)

module.exports = passport