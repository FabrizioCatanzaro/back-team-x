let router = require('express').Router()
let user = require('./user')
let city = require('./city')
let itinerary = require('./itinerary')
let hotel = require('./hotel')
let show = require('./show')


router.use('/users', user)
router.use('/cities', city)
router.use('/itineraries', itinerary)
router.use('/hotels',hotel)
router.use('/shows', show )


module.exports = router;
