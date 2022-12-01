let comments = [
    { 
        "showId":"638528453076ecdba0fbee95",
        "userId":"637ff16aaaff4b19fbb58e19",
        "date":Date(),
        "comment":"First Commnent of Probe",
    },
    { 
        "showId":"638528453076ecdba0fbee95",
        "userId":"637ff16aaaff4b19fbb58e19",
        "date":Date(),
        "comment":"Second Commnent of Probe",
    },
]


require ('dotenv').config()
require ('../../config/database/database')


const model_comments = require('../Comment')


comments.forEach((element)=>{
    model_comments.create({
        showId:element.showId,
        userId:element.userId,
        date:element.date,
        comment:element.comment,
    })
})


module.exports = model_comments




