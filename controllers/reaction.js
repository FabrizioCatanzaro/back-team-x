const Reaction = require('../models/Reaction')

const controller = {

    create: async (req, res) => {
        try {
            let new_reaction = await Reaction.create(req.body);
            res.status(200).json({
                success: true,
                message: 'Great! Reaction was created with success',
                data: new_reaction,
                id: new_reaction._id
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: 'Oops, reaction cannot be created',
                data: error
            })
        }
    },

    updateReaction: async (req, res) => {

        let query = {};
        let Id = req.user.id

        if (req.query.itineraryId) {
            query = {
                itineraryId: req.query.itineraryId
            };
        }

        if (req.query.name) {
            query = {
                ...query,
                name: req.query.name
            };
        }

        try {
            let reaction = await Reaction.findOne(query)
            if (reaction) {
                if (reaction.userId.includes(Id)) {
                    await Reaction.findOneAndUpdate({ _id: reaction._id }, { $pull: { userId: Id } }, { new: true })
                    res.status(200).json({
                        name: reaction.name,
                        message: `Reaction ${reaction.name} is not pressed anymore`,
                        success: true,
                        reactioned: false,
                    })
                } else {
                    await Reaction.findOneAndUpdate({ _id: reaction._id }, { $push: { userId: Id } }, { new: true })
                    res.status(200).json({
                        name: reaction.name,
                        message: `Reaction ${reaction.name} is pressed`,
                        success: true,
                        reactioned: true,
                    })
                }
            } else {
                res.status(404).json({
                    message: `Couldn't find that reaction in this tinerary`,
                    success: false
                })
            }
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },

    read: async (req, res) => {
        let query = {};
        if (req.query.itineraryId) {
            query = { itineraryId: req.query.itineraryId };
        }
        try {
            let reactions = await Reaction.find(query).populate({ path: 'userId', select: 'name lastName photo' })
            if (reactions.length > 0) {

                let howManyReactions = {}
                reactions.forEach(reaction => howManyReactions[reaction.name] = reaction.userId.length)

                res.status(200).json({
                    howManyReactions,
                    data: reactions,
                    id: req.query.itineraryId,
                    success: true,
                    message: `These are all the reactions belonging to ${req.query.itineraryId}`,
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Couldn't find reactions",
                    data: [],
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
                data: error
            })
        }
    },
}

module.exports = controller