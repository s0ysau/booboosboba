const express = require('express')
const router = express.Router()
const orderCtrl = require('../../controllers/api/order')

// GET
router.get('/cart', orderCtrl)
// POST 
router.post('/cart/items/:name', orderCtrl)
// POST
router.post('/cart/checkout', orderCtrl)
// PUT 
router.put('/cart/qty', orderCtrl)

module.exports = router