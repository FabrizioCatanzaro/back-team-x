const modelShow = require('../models/Model_Show');

const showController = {

    create: async (req,res) => {
        try{
            let new_hotel = await modelShow.create(req.body)
            res.status(201).json({
                id: new_hotel._id,
                success:true,
                message:'The show was created successfully',
            })
        }catch(error){
            res.status(400).json({
                sucess:false,
                message:'An error occurred. Try again',
                message_error: error.message
            })
        }
    },
    
    read: async (req,res) => {
        let query = {}

        if (req.query.hotelId){
            query = { hotelId: req.query.hotelId }
        }

        if (req.query.userId){
            query = { userId: req.query.userId}
        }

        try{
            let all_shows = await modelShow.find(query).populate([{ path:"userId", select: "name photo -_id"}]).populate([{ path:"hotelId", select: "name -_id"}])
            res.status(200).json({
                response: all_shows,
                success: true,
                message: "Shows were found successfully"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Cannot find shows"
            })
        }
    },

    update: async (req,res) => {
        let {id} = req.params
        try{
            let find_update = await modelShow.findOneAndUpdate({_id:id}, req.body, {new:true})
            if(find_update){
                res.status(200).json({
                    name: find_update.name,
                    success:true,
                    message:`Show found and modified!`
                })
            }else{
                res.status(404).json({
                    success:false,
                    message:'Show not found sorry'
                })
            }
        }catch(error){
            res.status(404).json({
                sucess:false,
                message: error.message,
            })
        }
    },
    
    one: async(req,res) => {
        let { id } = req.params
        try{
            let uno = await modelShow.find({ _id: id }).populate([{ path:"userId", select: "name photo -_id"}]).populate([{ path:"hotelId", select: "name -_id"}])
            if(uno){
                res.status(200).json({
                    response: uno,
                    success: true,
                    message: "A show was obtain"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "There are no show"
                })
            }
        } catch (error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },

    destroy: async (req,res) => {
        let {id} = req.params
        try{
            let find_delete = await modelShow.findOneAndDelete({_id:id})
            if(find_delete){
                res.status(200).json({
                    delete: find_delete.name,
                    success:true,
                    message: 'Show deleted successfully'
                })
            }else{
                res.status(404).json({
                    sucess:false,
                    message:'Show not found',
                })
            }
        }catch(error){
            res.status(404).json({
                success:false,
                message: error.message,
            })
        }
    },
}


module.exports = showController