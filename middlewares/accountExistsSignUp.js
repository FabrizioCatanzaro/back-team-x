const model_user = require("../models/Model_User");
const { userExistsResponse } = require("../config/responses");

async function accountExists(req, res, next) {
    const user = await model_user.findOne({email: req.body.email})
    if (user) {
        userExistsResponse(req,res)
        return
    }
    return next()
}

module.exports = { accountExists }
