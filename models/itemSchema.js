const item = require('./item')

const Schema = require('mongoose').Schema

const itemSchema = new Schema({
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

module.exports = itemSchema
