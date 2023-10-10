const Order = require('../../models/order')

module.exports = {
  cart,
  addToCart,
  updateQty
}

// a cart is the upaid order for a customer
async function cart (req, res){
  try {
    const cart = await Order.getCart(req.order._id)
    res.status(200).json(cart)
  } catch (error) {
    res.status
  }
}

// add product to cart
async function addToCart (req, res){
  try {
    const cart = await Order.addToCart(req.body)
    await cart.addItemToCart(req.params.id, req.params.qty)
    res.status(200).json(cart)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// udpate quantity of product in cart
async function updateQty (req, res){
  try {
    const cart = await Order.getCart(req.user._id)
    await cart.setItemQty(req.body.itemId, req.body.newQty)
    res.status(200).json(cart)
  } catch (error) {
    res.status(400).json({ error: error.message })  
  }
}
