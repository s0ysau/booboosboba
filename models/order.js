const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productsSchema = require('./products')

const lineProductSchema = new Schema({
  qty: { type: Number, default: 1 },
  item: productsSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})

lineProductSchema.virtual('extPrice').get(function () {
  return this.qty * this.item.price
})

const orderSchema = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
  lineItems: [lineProductSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})

orderSchema.virtual('orderTotal').get(function () {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0)
})

orderSchema.virtual('totalQty').get(function () {
  return this.lineItems.reduce((total, item) => total + item.qty, 0)
})

orderSchema.virtual('orderId').get(function () {
  return this.id.slice(-6).toUpperCase()
})

orderSchema.statics.getCart = function (customerId) {
  // 'this' is the order model
  return this.findOneAndUpdate(
    // query
    { customer: customerId, isPaid: false },
    // update
    { customer: customerId },
    // upsert option will create the doc if
    // it doesn't exist
    { upsert: true, new: true }
  )
}

orderSchema.methods.addItemToCart = async function (productId) {
  const cart = this
  // Check if item already in cart
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(productId))
  if (lineItem) {
    lineItem.qty += 1
  } else {
    const item = await mongoose.model('Item').findById(productId)
    cart.lineItems.push({ item })
  }
  return cart.save()
}

// Instance method to set an item's qty in the cart (will add item if does not exist)
orderSchema.methods.setItemQty = function (productId, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this
  // Find the line item in the cart for the menu item
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(productId))
  if (lineItem && newQty <= 0) {
    // Calling remove, removes itself from the cart.lineItems array
    lineItem.remove()
  } else if (lineItem) {
    // Set the new qty - positive value is assured thanks to prev if
    lineItem.qty = newQty
  }
  // return the save() method's promise
  return cart.save()
}

module.exports = mongoose.model('Order', orderSchema)
