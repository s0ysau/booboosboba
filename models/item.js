const {Schema, model} = require('mongoose')

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

const Item = model('Item', itemSchema)  
module.exports = Item
