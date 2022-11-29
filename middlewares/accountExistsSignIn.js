const model_user = require("../models/Model_User");
const { invalidCredentialsResponse } = require("../config/responses");

async function accountExistsIn(req, res, next) {
    const user = await model_user.findOne({email: req.body.email})
    if (user) {
        req.user = user
        return next()
    }
    invalidCredentialsResponse(req,res)
}

module.exports =  accountExistsIn 
