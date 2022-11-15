const modelShow = require('../models/Model_Show');

const showController = {

    create: async (req,res) => {
        try{
            let new_hotel = await modelShow.create(req.body)
            res.status(201).json({
                id: new_hotel._id,
                sucess:true,
                message:'El show se creo exitosamente',
            })
        }catch(error){
            res.status(400).json({
                sucess:false,
                message:'Ocurrio un error. Intente nuevamente',
                message_error: error.message
            })
        }
    },
    
    
    read: async (req,res) => {
        let query = {}
        if (req.query.hotelId){
            query = { hotelId: req.query.hotelId }
        }
        try{
            let all_shows = await modelShow.find(query)
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
        let {id_update} = req.params
        try{
            let find_update = await modelShow.findOneAndUpdate({_id:id_update}, req.body, {new:true})
            if(find_update){
                res.status(200).json({
                    name: find_update.name,
                    sucess:true,
                    message:`Usuario '${find_update.name}' Show encontrado y modificado`
                })
            }else{
                res.status(404).json({
                    sucess:false,
                    message:'Show no encontrado lamentablemente'
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
            let uno = await modelShow.find({ _id: id })
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
}


module.exports = showController