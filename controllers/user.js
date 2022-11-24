const User = require('../models/Model_User')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
// const { nextTick } = require('process')
const accountVerificationEmail = require('./accountVerificationEmail')
const { userSignedUpResponse } = require('../config/responses')


const controller = {
/*     create: async(req,res) => {
        try {
            let new_user = await User.create(req.body)
            res.status(201).json({
                id: new_user._id,
                success: true,
                message: "Congrats! The user was created with success"
            })
        } catch (error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    read: async(req,res) => {
        try {
            let all_user = await User.find()
            res.status(200).json({
                response: all_user,
                success: true,
                message: "Users were found successfully"
            })
        } catch (error){
            res.status(400).json({
                success: false,
                message: "Cannot find users"
            })
        }
    },
    update: async(req,res) => {
        try {

        } catch (error){

        }
    },
    destroy: async(req,res) => {
        try {

        } catch (error){

        }
    }, */

    register: async(req,res, next) => {
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
    }
}

module.exports = controller