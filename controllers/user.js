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
        //console.log(code)
        try{
            let user = await User.findOneAndUpdate({ code:code },{ verified:true },{ new:true })
            if(user){
                return res.redirect('http://localhost:3000/signin')
            }
            return userNotFoundResponse(req,res)
        }catch(e){
            next(error)
        }
    },


    access: async (req,res, next) => {
        let { password } = req.body
        let { user } = req
        console.log("REQ body",req.body)
        console.log("REQ user",req.user)
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
                    photo:user.photo,
                    id: user.id
                }
                console.log("user",user)
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
        //console.log("ACCESS WITH TOKEN",user)
        try{
            return res.json({
                response:{
                    user:{
                        name:user.name,
                        lastName:user.lastName,
                        photo:user.photo,
                        role: user.role,
                        id: user.id
                    },
                    success:true,
                    message: "Welcome " + user.name
                },
            })
            
        }catch(error){
            next(error)
        }
    },


    signOut: async(req,res,next) => {
        let { email } = req.user
        //console.log(email)

        try{
            await User.findOneAndUpdate({email}, {logged:false}, {new:true})
            return userSignedOutResponse(req,res)
        }catch(error){
            next(error) 
        }
    },

    getDataProfile: async(req,res) =>{
        let { id } = req.params
        try{
            let user = await User.find( {_id:id} )
            if(user){
                res.status(200).json({
                    success:true,
                    message: 'User Found',
                    response:{
                        user,
                    }
                })
            }else{
                res.status(404).json({
                    sucess:false,
                    message:'User not found. Try Again',
                })
            }
        }catch(error){
            res.status(404).json({
                sucess:false,
                message: error.message,
            })
        }
    },

    editDataProfile: async(req,res) =>{
        let {id} = req.params
        try{
            let user = await User.findOneAndUpdate( {_id:id}, req.body, {new:true} )
            if(user){
                res.status(200).json({
                    success:true,
                    message:`User found!`,
                    response:{
                        user,
                    }
                })
            }else{
                res.status(404).json({
                    success:false,
                    message:'User not found. Try Again'
                })
            }
        }catch(error){
            res.status(404).json({
                sucess:false,
                message: error.message,
            })
        }
    }



}

module.exports = controller