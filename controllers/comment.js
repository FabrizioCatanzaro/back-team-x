const model_comment = require('../models/Comment')

const commentController = {

    create: async (req,res) => {
        const user = {
            showId:req.body.showId,
            userId:req.user.id,
            date:req.body.date,
            comment:req.body.comment
        }

        console.log(req.body)
        console.log(req.user)
        
        try{
            let new_comment = await model_comment.create(user)
            res.status(201).json({
                success:true,
                message:'Comment Created',
                response: new_comment,
            })
        }catch(error){
            res.status(400).json({
                success:false,
                message:error.message,
            })
        }
    },

    read: async (req,res) =>{
        let query = {}
        let order = {}
     
        if(req.query.order){
            order = {capacity: req.query.order}
        }

        if(req.query.showId){
            query = {
            ...query,
            showId:req.query.showId
        }}

        try{
            let comment_find = await model_comment.find(query).sort(order)
            res.status(200).json({
                sucess:true,
                message:'Comment Finded',
                response: comment_find,
            })
        }catch(error){
            res.status(404).json({
                sucess:false,
                message:'Comment nos found. Try again'
            })
        } 
    }

}

module.exports = commentController