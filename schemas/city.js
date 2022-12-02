const joi = require('joi')

const schema = joi.object({
    name: joi
        .string()
        .required()
        .min(3)
        .max(50)
        .messages({
            "any.required": "Name field is mandatory",
            "string.empty": "Name field must be filled with something",
            "string.base": "Name must be a word not numbers or symbols",
            "string.min": "Name must be more than 2 characters",
            "string.max": "Name must be less than 50 characters"
        }),
    continent: joi
        .string()
        .required()
        .min(4)
        .messages({
            "any.required": "Continent field is mandatory",
            "string.empty": "Continent field must be filled with something",
            "string.base": "Continent must be a word not numbers or symbols",
            "string.min": "Continent must be more than 4 characters",
        }),
    photo: joi
        .string()
        .required()
        .uri()
        .messages({
            "any.required": "Photo field is mandatory",
            "string.empty": "Photo field must be filled with a link",
            "string.uri": "Photo must be a valid URI",
        }),
    population: joi
        .number()
        .required()
        .messages({
            "any.required": "Population field is mandatory",
            "number.empty": "Population field must be filled with something",
            "number.base": "Population must be a number not letters or symbols",
        }),
    userId: joi
        .string()
        .required()
        .messages({
            "any.required": "UserID field is mandatory",
            "string.empty": "UserID field must be filled with something",
            "string.base": "UserID must be a string",
        }),
})

module.exports = schema