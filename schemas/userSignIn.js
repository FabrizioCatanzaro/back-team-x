const joi = require('joi')
const { min } = require('./userSignUp')

const schemaSignIn = joi.object({
    email: joi
    .string()
    .required()
    .email({ minDomainSegments:2 })
    .messages({
        "any.required": "The Email field is mandatory to fill out",
        "string.empty": "You cannot send the empty 'Email' field.",
        "string.base": "The 'Email' field must be a string.",
    }),
    password: joi
        .string()
        .required()
        .trim()
        .messages({
            "any.required": "Password field is mandatory",
            "string.empty": "Password must be filled with letters and numbers",
            "string.min": "Password should have more than 6 characters",
            "string.max": "Password should have less than 16 characters",
            "string.trim": "Password cannot contain spaces",
        }),
})


module.exports = schemaSignIn