const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  tags: [String],
  price: {
    type: Number,
    required: true,
    default: 0
  },
  img: String,
  description: String
})

module.exports = mongoose.model('Products', productsSchema)
