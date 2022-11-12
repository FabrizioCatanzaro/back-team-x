let router = require('express').Router()
let { read, create, update } = require('../controllers/itinerary')

router.get('/', read)
router.post('/', create)
router.put('/:id', update)

module.exports = router