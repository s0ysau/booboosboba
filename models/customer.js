const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
  name: { type: String, required: true },
  date: {
    type: Date,
    default: () => Date.now(),
    immutable: true
  },
  phone: { type: Number },
  email: { type: String }
})

module.exports = mongoose.model('Customer', customerSchema)
