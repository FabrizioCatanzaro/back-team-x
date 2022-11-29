const City = require ('../models/City')

const controller = {
    create: async(req,res) => {
        try{
            let new_city = await City.create(req.body)
            res.status(201).json({
                id: new_city._id,
                success: true,
                message: "Congrats! The city was created with success",
                body: new_city
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
            query = {
                ...query,
                name: { $regex: req.query.name, $options: "i"}
            }
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
        if (req.query.userId){
            query = {
                ...query,
                userId: req.query.userId
            }
        }
        try{
            let all_cities = await City.find(query).populate([{path: "userId", select:  "_id"}])
            if (all_cities){
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
        let { id } = req.params
        try{
            let oneItId = await City.findById(id)
            if (oneItId.userId.equals(req.user.id)) {
                let oneCity = await City.findOneAndUpdate({ _id: id }, req.body,{new: true})
                if (oneCity){
                    res.status(200).json({
                        id: oneCity._id,
                        success: true,
                        message: "Great! You have modified the city"
                    })
                } else {
                    res.status(404).json({
                        success: false,
                        message: "Ooops, some info is wrong. Try again!"
                    })
                }
            } else {
                res.status(401).json({
                    success: false,
                    message: 'You are not authorized to edit this city',
                });
            }
        } catch (error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    destroy: async(req,res) => {
        let { id } = req.params
        try{
            let oneItId = await City.findById(id)
            if (oneItId.userId.equals(req.user.id)) {
                let oneCity = await City.findOneAndDelete({ _id: id })
                if (oneCity){
                    res.status(200).json({
                        success: true,
                        message: "Ok. City was deleted succesfully."
                    })
                } else {
                    res.status(404).json({
                        success: false,
                        message: "I'm sorry! Cannot find that city"
                    })
                }
            } else {
                res.status(401).json({
                    success: false,
                    message: 'You are not authorized to delete this city',
                });
            }
        } catch (error){
            res.status(400).json({
                success: false,
                message: error.message
            })
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
    },
}

module.exports = controller