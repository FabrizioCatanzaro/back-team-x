const mongoose = require('mongoose');

const schema_user = new mongoose.Schema({
    name: {type:String , require:true},
    lastName:  {type:String , require:true},
    role:{type:String, require:true},
    photo: {type:String , require:true},
    age: {type:Number , require:true},
    email: {type:String , require:true}, 
    password: {type:String , require:true}, 
    country: {type:String , require:true}, 
    verified:  {type:Boolean , require:true},
    logged: {type:Boolean , require:true}, 
    code:  {type:String , require:true},
})

const model_user = mongoose.model('users', schema_user);


module.exports = model_user;