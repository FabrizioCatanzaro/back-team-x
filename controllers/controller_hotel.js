const modelHotel = require('../models/Model_Hotel');

const hotelController = {

    create: async (req,res) => {
        try{
            let new_hotel = await modelHotel.create(req.body)
            res.status(201).json({
                id: new_hotel._id,
                success:true,
                message:'The Hotel was created successfully',
                body: new_hotel
            })
        }catch(error){
            res.status(400).json({
                sucess:false,
                message:error.message,
            })
        }
    },

    read: async (req,res) => {
        let query = {}
        let order ={}
     
        if(req.query.name){
            query = {
                ...query,
                name:{$regex: req.query.name, $options:"i"}
            }
        }

        if(req.query.order){
            order = {capacity: req.query.order}
        }

        try{
            let find_req = await modelHotel.find(query).sort(order)
            res.status(200).json({
                response: find_req,
                sucess:true,
                message:'Hotel finding successfully'
            })
        }catch(error){
            res.status(404).json({
                sucess:false,
                message:'Hotel not found. Try again'
            })
        }
    },

    update: async (req,res) => {
        let {id} = req.params
        try{
            let find_update = await modelHotel.findOneAndUpdate({_id:id}, req.body, {new:true})
            if(find_update){
                res.status(200).json({
                    name: find_update.name,
                    sucess:true,
                    message:`Hotel found and modified`
                })
            }else{
                res.status(404).json({
                    sucess:false,
                    message:'Hotel not found unfortunately'
                })
            }
        }catch(error){
            res.status(404).json({
                sucess:false,
                message: error.message,
            })
        }
    },
    
    destroy: async (req,res) => {
        let {id} = req.params
        try{
            let find_delete = await modelHotel.findOneAndDelete({_id:id})
            if(find_delete){
                res.status(200).json({
                    delete: find_delete.name,
                    sucess:true,
                    message: 'Hotel removed successfully'
                })
            }else{
                res.status(404).json({
                    sucess:false,
                    message:'Hotel not found',
                })
            }
        }catch(error){
            res.status(404).json({
                sucess:false,
                message: error.message,
            })
        }
    },
    
    one: async (req,res) =>{
        let {id} = req.params
        try{
            let find_detail = await modelHotel.find({_id:id}).populate("userId", "name")
            if(find_detail){
                res.status(201).json({
                    user_find: find_detail,
                    sucess:true,
                    message:'Hotel found successfully',
                })
            }
            else{
                res.status(404).json({
                    user_find: false,
                    sucess:false,
                    message:'Hotel not found. Try again'
                })
            }
        }catch(error){
            res.status(404).json({
                sucess:false,
                message: error.message,
            })
        }
    },
}


module.exports = hotelController;