const { query } = require('express')
const City = require ('../models/City')

const controller = {
    create: async(req,res) => {
        try{
            let new_city = await City.create(req.body)
            res.status(201).json({
                id: new_city._id,
                success: true,
                message: "Congrats! The city was created with success"
            })
        } catch (error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    read: async(req,res) => {
        let { query } = req 
        try{
            let all_cities = await City.find(query).populate("userId", "name")
            if (all_cities.length !== 0){
                res.status(200).json({
                    response: all_cities,
                    success: true,
                    message: "Cities were found successfully"
                    })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Cannot find cities according to your search"
                })
            }
        } catch (error){
            res.status(400).json({
                success: false,
                message: "Cannot find cities"
            })

        }
    },
    update: async(req,res) => {
        try{

        } catch (error){

        }
    },
    destroy: async(req,res) => {
        try{

        } catch (error){

        }
    }
}

module.exports = controller