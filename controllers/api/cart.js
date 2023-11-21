const Order = require('../../models/order')

module.exports = {
  getCart,
  addToCart,
  updateQty,
  removeProduct
}

/* ----------------- LINE PRODUCT ----------------- */

// a cart is the upaid order for a customer
async function getCart (req, res) {
  Order.findById(req.params.id)
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      res.status(400).send({
        msg: err.message
      })
    })
}
// a cart is the upaid order for a customer

// add product to cart
async function addToCart (req, res) {
  try {
    const orderId = req.params.id
    const cartData = req.body
    const order = await Order.findById(orderId)

    if (!order) throw new Error('Order not found')

    // Create new line product
    const newProduct = {
      itemsIds: cartData.itemIds,
      qty: cartData.qty
    }
    // add new line product to line product array
    order.lineItems.push(newProduct)

    // save updated order
    await order.save()
    res.status(201).json(order)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}
// add product to cart

// udpate quantity of product in cart
async function updateQty (req, res) {
  try {
    const orderId = req.params.id
    const cartId = req.params.cartId
    const cartData = req.body

    const order = await Order.findById(orderId)
    if (!order) throw new Error('Order not found')

    const cart = order.lineItems.id(cartId)
    if (!cart) throw new Error('Item not found')

    const newProduct = {
      itemsIds: cartData.itemIds,
      qty: cartData.qty
    }
    order.lineItems.push(newProduct)
    await order.save()
    res.status(201).json(order)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}
// udpate quantity of product in cart

// remove product from cart
async function removeProduct (req, res) {
  try {
    const orderId = req.params.id
    const cartId = req.params.cartId

    const order = await Order.findById(orderId)
    if (!order) throw new Error('Order not found')

    const cart = order.lineItems.id(cartId)
    if (!cart) throw new Error('Item not found')

    cart.remove()
    await order.save()
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}
// remove product from cart
