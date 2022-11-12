const { query } = require('express')
const Itinerary = require('../models/Itinerary')

const controller = {
    create: async(req,res) => {
        try{

        } catch (error) {
            
        }
    },
    read: async(req,res) => {
        let query = {}
        if (req.query.cityId){
            query = { cityId: req.query.cityId }
        }
        try{
            let all_itineraries = await Itinerary.find(query)
            res.status(200).json({
                response: all_itineraries,
                success: true,
                message: "Itineraries were found successfully"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Cannot find itineraries"
            })
        }
    },
    update: async(req,res) => {
        try{

        } catch (error) {

        }
    },
    destroy: async(req,res) => {
        try{

        } catch (error) {

        }
    }
}

module.exports = controller