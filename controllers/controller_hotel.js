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
                success:false,
                message:error.message,
            })
        }
    },

    read: async (req,res) => {
        let query = {}
        let order = {}
     
        if(req.query.name){
            query = {
                ...query,
                name:{$regex: req.query.name, $options:"i"}
            }
        }

        if(req.query.order){
            order = {capacity: req.query.order}
        }

        if(req.query.userId){
            query = {
            ...query,
            userId:req.query.userId
        }
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

    update: async (req, res) => {
        let { id } = req.params;

        try {
            let oneHotelFind = await modelHotel.findById(id)
            if (oneHotelFind.userId.equals(req.user.id)) {
                let oneHotel = await modelHotel.findOneAndUpdate({ _id: id }, req.body, { new: true });
                if (oneHotel) {
                    res.status(200).json({
                        success: true,
                        message: 'Hotel updated succesfully',
                        data: oneHotel,
                    });
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'Hotel not found',
                    });
                }
            } else {
                res.status(403).json({
                    success: false,
                    message: "You can't update this hotel",
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },

    destroy: async (req, res) => {
        let { id } = req.params;

        try {
            let oneHotelFind = await modelHotel.findById(id)
            if (oneHotelFind.userId.equals(req.user.id)) {
                let hotel = await modelHotel.findOneAndDelete({ _id: id });
                if (hotel) {
                    res.status(200).json({
                        success: true,
                        message: 'Hotel deleted',
                        data: hotel,
                    });
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'Hotel not found',
                    });
                }
            } else {
                res.status(403).json({
                    success: false,
                    message: "You can't delete this hotel",
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
    
   
}


module.exports = hotelController;