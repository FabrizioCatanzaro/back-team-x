const model_comment = require('../models/Comment')

const commentController = {

    create: async (req,res) => {
        const user = {
            showId:req.body.showId,
            userId:req.user.id,
            date:req.body.date,
            comment:req.body.comment,
            name:req.user.name,
            photo:req.user.photo,
            itineraryId:req.body.itineraryId,
        }        

        console.log(req.body)
        console.log(req.user)
        try{
            let new_comment = await (await model_comment.create(user))
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
            order = {date: req.query.order}
        }

        if(req.query.showId){
            query = {
            ...query,
            showId:req.query.showId
        }}

        if(req.query.itineraryId){
          query = {
          ...query,
          itineraryId:req.query.itineraryId
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
    },

    update: async (req, res) => {
        let { id } = req.params;
        try {
          let one = await model_comment.findOneAndUpdate({ _id: id }, req.body, {new: true});
          if (one) {
            res.status(200).json({
              id: one._id,
              success: true,
              message: "The comment was successfully modified",
            });
          } else {
            res.status(404).json({
              success: false,
              message: "The comment was not found",
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
        let {id} = req.params
        try {
          let comment = await model_comment.findOneAndDelete({_id:id})
          if(comment){
            res.status(200).json({
              res: comment,
              success:true,
              message: "The comment was successfully deleted"
            })
           
          }else{
            res.status(404).json({
              res: comment,
              success:false,
              message: "The comment was not found"
            })
          }
        } catch (error) {
          res.status(400).json({
            success: false,
            message: error.message,
          });
        }
      },

}

module.exports = commentController