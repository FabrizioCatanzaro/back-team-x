const User = require('../models/Model_User')

const controller = {
    create: async(req,res) => {
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
    }
}

module.exports = controller