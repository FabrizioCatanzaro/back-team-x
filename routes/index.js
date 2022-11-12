let router = require('express').Router()
let user = require('./user')
let city = require('./city')
let itinerary = require('./itinerary')

router.use('/users', user)
router.use('/cities', city)
router.use('/itineraries', itinerary)

module.exports = router;
