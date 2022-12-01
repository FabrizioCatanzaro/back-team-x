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
            try{
                let user = await User.findOne({ _id:jwt_payload.id })
                /* console.log("USER DE PASSPORT",user) */
                if(user){
                    let idNuevo= user.id
                    user = {
                        name: user.name,
                        lastName:user.lastName,
                        photo:user.photo,
                        email:user.email,
                        role: user.role,
                        id: idNuevo
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