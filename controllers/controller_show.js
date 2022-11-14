const modelShow = require('../models/Model_Show');

const showController = {
    
    
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