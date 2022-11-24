const model_user = require("../models/Model_User");
const { invalidCredentialsResponse } = require("../config/responses");

async function accountExists(req, res, next) {
    const user = await model_user.findOne({mail: req.body.mail})
    if (user) {
        req.user = user
        return next()
    }
    invalidCredentialsResponse(req,res)
}

module.exports = { accountExists }
