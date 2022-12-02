const joi = require('joi')

const schemaComments = joi.object({
    comment: joi
    .string()
    .required()
    .min(3)
    .max(100)
    .messages({
        "string.empty": "Can't send empty field",
        "string.base": "The field must be a word not numbers or symbols",
        "string.min": "The comments we must be more than 3 characters",
        "string.max": "The comments dont have be more than 50 characters"
    }),
    showId: joi
    .string()
    .max(30)
    .messages({
        "string.empty": "Can't send empty field",
        "string.base": "The field must be a word not numbers or symbols",
        "string.max": "The ShowId dont have be more than 50 characters"
    }),
    date: joi
    .string()
    .required()
    .max(15)
    .messages({
        "string.empty": "Can't send empty field",
        "string.base": "The field must be a word not numbers or symbols",
        "string.max": "Date dont have be more than 50 characters"
    }),
    itineraryId: joi.any()
})

module.exports = schemaComments