const express = require('express')
const router = express.Router()
const orderCtrl = require('../../controllers/api/orders')

/* ----------------- ORDER ----------------- */
// POST - create cart - api/order/
router.post('/', orderCtrl.startCart)

// GET - get cart - api/order/
router.get('/', orderCtrl.getCart)

// DELETE - remove cart - api/order/:id
router.delete('/:id', orderCtrl.removeCart)

/* ----------------- LINE PRODUCT ----------------- */

module.exports = router
