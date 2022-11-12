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
        let query = {}
        if (req.query.name){
            query = { name: req.query.name }
        }
        if (req.query.continent){
            query = {
                ...query,
                continent: req.query.continent
            }
        }
        if (req.query.population){
            query = {
                ...query,
                population: req.query.population
            }
        }
        try{
            let all_cities = await City.find(query).populate([{path: "userId", select:  "name lastName -_id"}])
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
    },
    one: async(req,res) => {
        let { id } = req.params
        try{
            let uno = await City.find({ _id: id }).populate([{ path:"userId", select: "name photo -_id"}])
            if(uno){
                res.status(200).json({
                    response: uno,
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
    }
}

module.exports = controller