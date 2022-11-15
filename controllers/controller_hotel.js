const modelHotel = require('../models/Model_Hotel');

const hotelController = {

    create: async (req,res) => {
        try{
            let new_hotel = await modelHotel.create(req.body)
            res.status(201).json({
                id: new_hotel._id,
                sucess:true,
                message:'El usuario se creo exitosamente',
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
            query = {name: req.query.name}
        }

        if(req.query.order){
            order = {capacity: req.query.order}
        }

        try{
            let find_req = await modelHotel.find(query).sort(order)
            res.status(200).json({
                response: find_req,
                sucess:true,
                message:'Hotel encontrando con exito'
            })
        }catch(error){
            res.status(404).json({
                sucess:false,
                message:'Hotel no encontrado. Intenta nuevamente'
            })
        }
    },

    update: async (req,res) => {
        let {id_update} = req.params
        try{
            let find_update = await modelHotel.findOneAndUpdate({_id:id_update}, req.body, {new:true})
            if(find_update){
                res.status(200).json({
                    name: find_update.name,
                    sucess:true,
                    message:`Usuario '${find_update.name}' Hotel encontrado y modificado`
                })
            }else{
                res.status(404).json({
                    sucess:false,
                    message:'Hotel no encontrado lamentablemente'
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
        let {id_delete} = req.params
        try{
            let find_delete = await modelHotel.findOneAndDelete({_id:id_delete})
            if(find_delete){
                res.status(200).json({
                    delete: find_delete.name,
                    sucess:true,
                    message: 'Usuario eliminado con exito'
                })
            }else{
                res.status(404).json({
                    sucess:false,
                    message:'Usuario no encontrado',
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
            let find_detail = await modelHotel.find({_id:id}).populate("userId", "name").populate()
            if(find_detail){
                res.status(201).json({
                    user_find: find_detail,
                    sucess:true,
                    message:'Hotel encontrado con exito',
                })
            }
            else{
                res.status(404).json({
                    user_find: false,
                    sucess:false,
                    message:'Hotel no encontrado. Intente nuevamente'
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