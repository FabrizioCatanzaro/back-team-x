let router = require('express').Router()
let { read } = require('../controllers/itinerary')

router.get('/', read)

module.exports = router