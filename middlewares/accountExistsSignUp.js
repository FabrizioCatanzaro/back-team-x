const model_user = require("../models/Model_User");
const { userExistsResponse } = require("../config/responses");

async function accountExists(req, res, next) {
    const user = await model_user.findOne({mail: req.body.mail})
    if (user) {
        userExistsResponse(req,res)
    }
    return next()
}

module.exports = { accountExists }
