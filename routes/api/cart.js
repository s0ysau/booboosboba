const express = require('express')
const router = express.Router()
const cartCtrl = require('../../controllers/api/cart')

// GET - get cart - api/cart/
router.get('/', cartCtrl.getCart)

// SHOW - show cart - api/cart/:id
// :id is the order id
// router.get('/:id', cartCtrl.showCart)

// POST - add item to cart - api/cart/:id
router.post('/:id', cartCtrl.addToCart)

// PUT - update qty in cart - api/cart/qty
router.put('/:id/qty', cartCtrl.updateQty)

// DELETE - remove item from cart - api/cart/:id
router.delete('/:id', cartCtrl.removeProduct)

module.exports = router
