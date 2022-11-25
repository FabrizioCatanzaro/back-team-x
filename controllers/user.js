const User = require('../models/Model_User')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const accountVerificationEmail = require('./accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse, userSignedOutResponse } = require('../config/responses')


const controller = {
    
    register: async(req,res,next) => {
        let {name, lastName, photo, age, email, role, password, country} = req.body
        let verified = false
        let logged = false
        let code = crypto.randomBytes(10).toString('hex')

        password = bcryptjs.hashSync(password, 10)

        try{
            await User.create({ name, lastName, photo, age, email, role, password, country, verified, logged, code })
            await accountVerificationEmail(email, code, name)
            return userSignedUpResponse(req,res)

        } catch(error){
            next(error)
        }
    },


    verify: async (req,res, next) =>{
        const { code } = req.params
        console.log(code)
        try{
            let user = await User.findOneAndUpdate({ code:code },{ verified:true },{ new:true })
            if(user){
                return res.redirect('https://www.google.com/')
            }
            return userNotFoundResponse(req,res)
        }catch(e){
            next(error)
        }
    },


    access: async (req,res, next) => {
        let { password } = req.body
        let { user } = req
        try{
            const verifiedPassword = bcryptjs.compareSync(password, user.password)
            if(verifiedPassword){
                await User.findOneAndUpdate({email:user.email}, {logged:true}, {new:true})
                let token = jwt.sign(
                    {id:user.id},
                    process.env.KEY_JWT,
                    {expiresIn: 60 * 60 * 24}
                )
                user = {
                    name:user.name,
                    lastName:user.lastName,
                    email: user.email,
                    role: user.role,
                    photo:user.photo
                } 
                return res.status(200).json({
                    response:{ user, token},
                    success: true,
                    message:'Welcome ' + user.name
                })
            }
            return invalidCredentialsResponse(req,res)
        }catch(error){
            next(error)
        }
    },

    accessWithToken: async(req,res,next) =>{
        let { user } = req
        console.log(user)
        try{
            return res.json({
                response:{
                    user:{
                        name:user.name,
                        lastName:user.lastName,
                        photo:user.photo,
                        role: user.role
                    },
                    success:true,
                    message: "Welcome " + user.name
                }
            })
        }catch(error){
            next(error)
        }
    },


    signOut: async(req,res,next)=> {
        let { email } = req.user
        console.log(email)

        try{
            await User.findOneAndUpdate({email}, {logged:false}, {new:true})
            return userSignedOutResponse(req,res)
        }catch(error){
            next(error) 
        }
    }





}

module.exports = controller