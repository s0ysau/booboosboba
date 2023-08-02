const Product = require('../../models/products')

module.exports = {
  index,
  show
}

async function index (req, res){
  try {
    const products = await Product.find({})
    res.status(200).json(products)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

async function show (req, res) {
  try {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}