const { query } = require('express')
const Itinerary = require('../models/Itinerary')

const controller = {
    create: async(req,res) => {
        try{
            let new_it = await Itinerary.create(req.body)
            res.status(201).json({
                id: new_it._id,
                success: true,
                message: "Congrats! The itinerary was created with success"
            })
        } catch (error){
            res.status(400).json({
                success: false,
                message: error.message
            })

        }
    },
    read: async(req,res) => {
        let query = {}
        if (req.query.cityId){
            query = {
                ...query,
                cityId: req.query.cityId
            }
        }
        if (req.query.userId){
            query = {
                ...query,
                userId: req.query.userId
            }
        }
        try{
            let all_itineraries = await Itinerary.find(query).populate([{path: "userId", select:  "_id"}])
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
        let { id } = req.params
        try{
            let oneItId = await Itinerary.findById(id)
            if (oneItId.userId.equals(req.user.id)) {
                let oneIt = await Itinerary.findOneAndUpdate({ _id: id }, req.body, {new: true})
                if (oneIt){
                    res.status(200).json({
                        id: oneIt._id,
                        success: true,
                        message: "Well done! You have modified the itinerary"
                    })
                } else {
                    res.status(404).json({
                        success: false,
                        message: "Oh, some info is wrong. Try again!"
                    })
                }
            } else {
                res.status(401).json({
                    success: false,
                    message: 'You are not authorized to edit this tinerary',
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })

        }
    },
    destroy: async(req,res) => {
        let { id } = req.params
        try{
            let oneItId = await Itinerary.findById(id)
            if (oneItId.userId.equals(req.user.id)) {
                let oneIt = await Itinerary.findOneAndDelete({ _id: id })
                if (oneIt){
                    res.status(200).json({
                        success: true,
                        message: "The itinerary was deleted with success"
                    })
                } else {
                    res.status(404).json({
                        success: false,
                        message: "Couldn't find that itinerary. Try again!"
                    })
                }
            } else {
                res.status(401).json({
                    success: false,
                    message: 'You are not authorized to delete this tinerary',
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    readOne: async(req,res) => {
        let { id } = req.params
        try{
            let oneItinerary = await Itinerary.find({ _id: id })
            if(oneItinerary){
                res.status(200).json({
                    response: oneItinerary,
                    success: true,
                    message: "A city was obtain"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "There are no cities"
                })
            }
        } catch (error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
}

module.exports = controller