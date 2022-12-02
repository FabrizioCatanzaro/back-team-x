const mongoose = require('mongoose');

const schema_comments = new mongoose.Schema({
    showId:{type:mongoose.Types.ObjectId, ref:'users', required:true},
    userId:{type:mongoose.Types.ObjectId, ref:'shows', required:true},
    date:{type:Date, required:true},
    comment:{type:String, required:true},
    name:{type:String, required:true},
    photo:{type:String, required:true},
    itineraryId:{type:mongoose.Types.ObjectId, ref:'itineraries', required:true},
})

const model_comments = mongoose.model('comments', schema_comments);


module.exports = model_comments