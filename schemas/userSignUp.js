const joi = require('joi')

const schemaSignUp = joi.object({
    name: joi
        .string()
        .required()
        .min(2)
        .max(40)
        .messages({
            "any.required": "Name field is mandatory",
            "string.empty": "Name field must be filled with something",
            "string.base": "Name must be a word not numbers or symbols",
            "string.min": "Name must be more than 2 characters",
            "string.max": "Name must be less than 40 characters"
        }),
    lastName: joi
        .string()
        .required()
        .min(2)
        .max(30)
        .messages({
            "any.required": "Last Name field is mandatory",
            "string.empty": "Last Name field must be filled with something",
            "string.base": "Last Name must be a word not numbers or symbols",
            "string.min": "Last Name must be more than 2 characters",
            "string.max": "Last Name must be less than 30 characters",
        }),
    role: joi
        .string()
        .required()
        .min(4)
        .max(6)
        .messages({
            "any.required": "Role field is mandatory",
            "string.empty": "Role field must be filled with something",
            "string.base": "Role must be a word not numbers or symbols",
            "string.min": "Role must be more than 4 characters",
            "string.max": "Role must be less than 6 characters",
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
    age: joi
        .number()
        .required()
        .min(12)
        .messages({
            "any.required": "Age field is mandatory",
            "number.empty": "Age field must be filled with something",
            "number.base": "Age must be a number not letters or symbols",
            "number.min": "You must be 12 years old at least",
        }),
    email: joi
        .string()
        .required()
        .email({ minDomainSegments:2 })
        .messages({
            "any.required": "UserID field is mandatory",
            "string.empty": "UserID field must be filled with something",
            "string.base": "UserID must be a string",
        }),
    password: joi
        .string()
        .required()
        .min(6)
        .max(16)
        .trim()
        .messages({
            "any.required": "Password field is mandatory",
            "string.empty": "Password must be filled with letters and numbers",
            "string.min": "Password should have more than 6 characters",
            "string.max": "Password should have less than 16 characters",
            "string.trim": "Password cannot contain spaces",
        }),
    country: joi
        .string()
        .required()
        .min(3)
        .messages({
            "any.required": "Country field is mandatory",
            "string.empty": "Country field must be filled with something",
            "string.base": "Country must be letters not numbers or symbols",
            "string.min": "Country must have more than 3 letters",
        })
})

module.exports = schemaSignUp