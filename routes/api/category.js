const express = require('express')
const router = express.Router()
const categoryCtrl = require('../../controllers/api/category')

// GET /api/category
router.get('/', categoryCtrl.index)
// Get /api/category/:name
router.get('/:name', categoryCtrl.show)

module.exports = router