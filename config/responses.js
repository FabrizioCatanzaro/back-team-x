function userExistsResponse(req,res) {
    return res.status(400).json({
        success: false,
        message: 'user already exists'
    })
}

function userSignedUpResponse(req,res) {
    return res.status(201).json({
        success: true,
        message: 'user signed up'
    })
}

function userSignedOutResponse(req,res) {
    return res.status(201).json({
        success: true,
        message: 'user signed out'
    })
}

function userNotFoundResponse(req,res) {
    return res.status(404).json({
        success: false,
        message: 'user not found'
    })
}

function mustSignInResponse(req,res) {
    return res.status(400).json({
        success: false,
        message: 'sign in please!'
    })
}

function invalidCredentialsResponse(req,res) {
    return res.status(401).json({
        success: false,
        message: 'Email or Password Incorrect'
    })
}

function verifyResponse(req,res) {
    return res.status(401).json({
        success: false,
        message: 'Please, verify your email account and try again'
    })
}

function unableToDeleteReactions(req,res){
    return res.status(401).json({
        success: false,
        message: 'You are unauthorized to delete his / her reactions',
    })
}
function mustBeTheOwner(req, res) {
    return res.status(401).json({
      success: false,
      message: "You must be the owner to carry out this operation",
    });
  }

  function activityNotFound(req, res) {
    return res.status(404).json({
      success: false,
      message: "Couldn't find the activity",
    });
  }

module.exports = {
    userSignedUpResponse,
    userExistsResponse,
    userNotFoundResponse,
    userSignedOutResponse,
    mustSignInResponse,
    invalidCredentialsResponse,
    verifyResponse,
    unableToDeleteReactions,
    mustBeTheOwner,
    activityNotFound,
}