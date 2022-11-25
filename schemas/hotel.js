const joi = require(`joi`)

const schema = joi.object({
    name: joi
        .string()
        .required()
        .min(3)
        .max(30)
        .messages({
            "string.required": "the field is required, please enter your name",
            "string.empty": "you can't leave this field empty",
            "string.min": "Your name must have at least 3 character",
            "string.max": "Your name must have a maximum of 50 characters",
            "string.base": "only letters and numbers are valid"
        }),
    photo: joi
        .string()
        .uri()
        .required()
        .messages({
            "string.required": "the field is required, please enter an URL",
            "string.empty": "you can't leave this field empty",
            "string.uri": "invalid format for URL"
        }),
    capacity: joi
        .number()
        .required()
        .messages({
            "number.required": "the field is required, please enter the capacity",
            "number.empty": "you can't leave this field empty",
            "number.base": "only numbers are valid"
        }),
    description: joi
        .string()
        .required()
        .min(15)
        .max(50)
        .messages({
            "string.required": "the field is required, please enter an ID",
            "string.empty": "you can't leave this field empty",
            "string.base": "only letters and numbers are valid"
        }),
    citiId: joi
        .string()
        .required()
        .messages({
            "string.required": "the field is required, please enter an ID",
            "string.empty": "you can't leave this field empty",
            "string.base": "only letters and numbers are valid"
        }),
    userId: joi
        .string()
        .required()
        .messages({
            "string.required": "the field is required, please enter an ID",
            "string.empty": "you can't leave this field empty",
            "string.base": "only letters and numbers are valid"
        })
})

module.exports = schema;