const mongoose = require('mongoose');

const schema_hotel = new mongoose.Schema({
    name:{type:String, required:true},
    photo:[{type:String, required:true}],
    capacity:{type:Number, required:true},
    description:{type:String, required:true},
    userId:{type: mongoose.Types.ObjectId, ref:'users', required:true},
    citiId:{type: mongoose.Types.ObjectId, ref:'cities', required:true},
})

const model_hotel = mongoose.model('hotels', schema_hotel);

module.exports = model_hotel

