let router = require('express').Router()
let user = require('./user')
let city = require('./city')
let itinerary = require('./itinerary')
let hotel = require('./hotel')

router.use('/users', user)
router.use('/cities', city)
router.use('/itineraries', itinerary)
router.use('/hotels',hotel)

module.exports = router;
