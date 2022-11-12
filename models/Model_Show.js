const mongoose = require('mongoose');

const schema_show = new mongoose.Schema({
    hotelId:{type:String, required:true},
    name:{type:String, required:true}, 
    description:{type:String, required:true}, 
    photo:{type:String, required:true}, 
    price: {type:String, required:true},
    date:{type:Date, required:true}, 
    userId:{type:String, required:true},
})

const model_show = mongoose.model('shows', schema_show);

module.exports = model_show;