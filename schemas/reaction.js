const joi = require('joi')

const schema = joi.object({
    itineraryId: joi
        .string()
        .required()
        .messages({
            "any.required": "Itinerary field is mandatory",
            "string.empty": "Itinerary cannot be empty",
            "string.base": "Itinerary must be a word not just numbers or symbols",
        }),
    name: joi
        .string()
        .required()
        .min(2)
        .max(20)
        .messages({
            "any.required": "Name field is mandatory",
            "string.empty": "Name cannot be empty",
            "string.base": "Name must be a word not just numbers or symbols",
            "string.min": "Name must have more than 2 characters",
            "string.max": "Name must have less than 20 characters"
        }),
    icon: joi
        .string()
        .required()
        .uri()
        .messages({
            "any.required": "Icon field is mandatory",
            "string.empty": "Icon cannot be empty",
            "string.base": "Icon must be a link not just numbers or symbols",
            "string.uri": "Icon must be a valid URI"
        }),
    iconBack: joi
        .string()
        .required()
        .uri()
        .messages({
            "any.required": "Icon Back field is mandatory",
            "string.empty": "Icon Back cannot be empty",
            "string.base": "Icon Back must be a link not just numbers or symbols",
            "string.uri": "Icon Back must be a valid URI"
        }),
})

module.exports = schema