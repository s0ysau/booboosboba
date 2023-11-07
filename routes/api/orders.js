const express = require('express')
const router = express.Router()
const orderCtrl = require('../../controllers/api/orders')

// POST - create cart - api/order/
router.post('/', orderCtrl.startCart)

// GET - get cart - api/order/
router.get('/', orderCtrl.getCart)

// SHOW - show cart - api/order/:id
// :id is the order id
router.get('/:id', orderCtrl.showCart)

// POST - add item to cart - api/order/cart/:id
router.post('/cart', orderCtrl.addToCart)

// POST - checkout - api/order/cart/checkout
// router.post('/cart/checkout', orderCtrl.checkout)

// PUT - update qty in cart - api/order/cart/qty
router.put('/cart/qty', orderCtrl.updateQty)

// DELETE - remove cart - api/order/:id
router.delete('/:id', orderCtrl.removeCart)

module.exports = router
