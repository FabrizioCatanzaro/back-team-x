let router = require('express').Router()
let user = require('./user')
let city = require('./city')
let itinerary = require('./itinerary')
let hotel = require('./hotel')
let show = require('./show')
let reaction = require('./reaction')
let comment = require('./comments')




router.use('/api/auth', user)
router.use('/api/cities', city)
router.use('/api/itineraries', itinerary)
router.use('/api/hotels',hotel)
router.use('/api/shows', show )
router.use('/api/reactions', reaction)
router.use('/api/comments', comment)



module.exports = router;
