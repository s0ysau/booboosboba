const Order = require('../../models/order')

module.exports = {
  startCart,
  getCart,
  showCart,
  addToCart,
  updateQty,
  removeCart
}

// start an order (create a cart)

async function startCart (req, res) {
  Order.create(req.body)
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      res.status(400).send({
        msg: err.message
      })
    })  
}

// start an order (create a cart)

// a cart is the upaid order for a customer
async function getCart (req, res){
  Order.find({})
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

// show cart 
async function showCart (req, res){
  Order.findById(req.params.id)
  .then((results) => {
    res.json(results)
  })
  .catch((err) => {
    res.status(404).send({
      msg: err.message,
      output: 'No cart found'
    })
  })
}

// show cart

// add product to cart
async function addToCart (req, res){
  Order.findByIdAndUpdate(req.params.id, req.body, {new : true})
  .then((results) => {
    res.json(results)
  })
  .catch((err) => {
    res.status(400).send({
      msg: err.message
    })
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

// remove cart

async function removeCart (req, res) {
  Order.findByIdAndDelete(req.params.id)
  .then((results) => {
    res.json(results)
  })
  .catch((err) => {
    res.status(400).send({
      msg: err.message
    })
  })
}

// remove cart
