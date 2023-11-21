const { Schema, model } = require('mongoose')

const cartSchema = new Schema({
  itemIds: { type: Schema.Types.ObjectId, ref: 'Item' },
  qty: { type: Number, default: 1 }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})

const orderSchema = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
  lineItems: { type: [cartSchema] },
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})


const Order = model('Order', orderSchema)

module.exports = Order
