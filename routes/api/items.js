const express = require('express')
const router = express.Router()
const itemsCtrl = require('../../controllers/api/items')

// GET /api/items
router.get('/', itemsCtrl.index)
// GET /api/items/:name
router.get('/:name', itemsCtrl.show)

module.exports = router
