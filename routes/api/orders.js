const express = require('express')
const router = express.Router()
const orderCtrl = require('../../controllers/api/orders')

// GET - get cart - api/order/cart
router.get('/cart', orderCtrl.cart)
// POST - add item to cart - api/order/cart/items/:name
router.post('/cart', orderCtrl.addToCart)
// POST - checkout - api/order/cart/checkout
// router.post('/cart/checkout', orderCtrl.checkout)
// PUT - update qty in cart - api/order/cart/qty
router.put('/cart/qty', orderCtrl.updateQty)

module.exports = router