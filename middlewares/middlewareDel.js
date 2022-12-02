const {unableToDeleteReactions} = require('../config/responses')

function middlewareDel(req,res,next){
    //console.log("RES DE MIDDLE", req.user);
    if (res.req.user.id === req.user.id){
        return next()
    }
    return unableToDeleteReactions(req, res)
}

module.exports = middlewareDel