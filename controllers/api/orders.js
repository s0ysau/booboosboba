const Order = require('../../models/order')

module.exports = {
  startCart,
  cart,
  addToCart,
  updateQty
}

// start an order (create a cart)

async function startCart (req, res) {
  Order.create(req.body, (err, createdOrder) => {
    if (err){
      res.status(400).send({
        msg: err.message
      })
    } else {
      res.locals.data.order = createdOrder
    }
  })
}

// start an order (create a cart)

// a cart is the upaid order for a customer
// async function cart (req, res) {
//   try {
//     const cart = await Order.getCart(req.order._id)
//     res.status(200).json(cart)
//   } catch (error) {
//     res.status
//   }
// }

async function cart (req, res){
  Order.find({}, (err, foundOrders) => {
    if (err) {
      res.status(400).send({
      msg: err.message
      })
    } else {
      res.locals.data.order = foundOrders
    }
  })
}
// a cart is the upaid order for a customer

// add product to cart
// async function addToCart (req, res) {
//   try {
//     const cart = await Order.getCart(req.order._id)
//     await cart.addItemToCart(req.params.id)
//     res.status(200).json(cart)
//   } catch (error) {
//     res.status(400).json({ error: error.message })
//   }
// }

async function addToCart (req, res){
  Order.findById(req.params.id, req.body, {new : true}, (err, updatedOrder) => {
    if (err){
      res.status(400).send({
        msg: err.message
      })
    } else {
      res.locals.data.order = updatedOrder
    }
  })
}
// add product to cart

// udpate quantity of product in cart

// async function updateQty (req, res) {
//   try {
//     const cart = await Order.getCart(req.user._id)
//     await cart.setItemQty(req.body.itemId, req.body.newQty)
//     res.status(200).json(cart)
//   } catch (error) {
//     res.status(400).json({ error: error.message })
//   }
// }

async function updateQty (req, res) {
  Order.findByIdAndUpdate(req.params.id, req.body.newQty, {new : true}, (err, updatedOrder) => {
  if (err){
    res.status(400).send({
      msg: err.mesage
    })
  } else {
    res.locals.data.order = updatedOrder 
  }
})
}

// udpate quantity of product in cart
