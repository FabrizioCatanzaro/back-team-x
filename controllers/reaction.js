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



























    
/*     create: async(req,res) => {
        let {itineraryId, name, icon, iconBack} = req.body
        let {id} = req.user

        const reaction = {
            itineraryId,
            name,
            icon,
            iconBack,
            userId: id,
        }
        try{
            let newReaction = await Reaction.create(reaction)
            res.status(201).json({
                id: newReaction.id,
                success: true,
                message: 'Great! Your reaction was created with success',
                body: newReaction
            })
        } catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }, */

/*     postReaction: async(req, res) => {
        let query = {};
        let Id = req.user.id;
        let {itineraryId, name} = req.query */
/*         if (req.query.itineraryId) {
        query = {
            itineraryId: req.query.itineraryId,
            };
        }
        if (req.query.name) {
        query = {
            ...query,
            name: req.query.name,
            };
        } */
        /* try {
            let reaction = await Reaction.find({itineraryId: itineraryId});
            let finalReaction = reaction.find(item => item.name === name)
            if (finalReaction) {
                if (finalReaction.userId.includes(Id)) {
                await Reaction.findOneAndUpdate(
                    { _id: finalReaction._id },
                    { $pull: { userId: Id } },
                    { new: true }
                );
                res.status(200).json({
                    message: `Event updated with NOT ${finalReaction.name}`,
                    success: true,
                    data: finalReaction
                });
                } else {
                await Reaction.findOneAndUpdate(
                    { _id: finalReaction._id },
                    { $push: { userId: Id } },
                    { new: true }
                );
                res.status(200).json({
                    message: `Event REALLY ${finalReaction.name}`,
                    success: true,
                    changed: false,
                    data: finalReaction,
                });
                }
            } else {
                res.status(404).json({
                message: `The reaction dont exist in this itinerary`,
                success: false,
                changed: true,
                data: [],
                });
            }
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false,
            });
        }
    }, */


/*         let {id} = req.user
        let {itineraryId, name} = req.query
        //console.log("USER",req.user)
        let change

        try{
            //let oneReaction = await Reaction.findOneAndUpdate({name: name, itineraryId: itineraryId}, {$push: {"userId": id}}, {new: true})
            let oneReaction = await Reaction.find({itineraryId: itineraryId})
            let finalReaction = oneReaction.find(item => item.name === name)
            if (finalReaction && finalReaction.userId.includes(id)){
                change = { $pull: {"userId": id} }
            } else if (!finalReaction.userId.includes(id)){
                change = { $push: {"userId": id} }
            } else {
                res.status(404).json({
                    message: "tinerary not found",
                    success: false
                })
            }
            const secReaction = await Reaction.findOneAndUpdate({itineraryId: itineraryId, name: name}, change, {new: true})
            res.status(200).json({
                message: "reaction updated",
                success: true,
                response: secReaction,
                changed: false
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
                changed: true
            })
        }
    }, */

    /* read: async(req,res) => {
        let {itineraryId} = req.query

        try{
            let amountReactions = await Reaction.find({itineraryId: itineraryId})
            let cantidad = amountReactions.map(e => e.name)
            
            if (amountReactions.length > 0) {
                let lengthOfReactions = {};
                amountReactions.forEach(
                  (reaction) =>
                    (lengthOfReactions[reaction.name] = reaction.userId.length)
                );
                res.status(200).json({
                    response: cantidad,
                    totalReactions: amountReactions,
                    lengthOfReactions:lengthOfReactions,
                    success: true,
                    message: "Reactions were found successfully"
                    })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Cannot find reactions according to that tinerary"
                })
            }
        } catch (error){
            res.status(400).json({
                success: false,
                message: "Cannot find reactions"
            })
        }
    }, */
}

module.exports = controller