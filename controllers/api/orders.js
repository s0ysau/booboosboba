const Order = require('../../models/order')

module.exports = {
  startCart,
  getCart,
  showCart,
  removeCart
}

/* ----------------- ORDER ----------------- */

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

// show cart
async function showCart (req, res) {
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

/* ----------------- ORDER ----------------- */
