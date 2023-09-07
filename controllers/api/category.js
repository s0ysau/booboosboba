const Category = require('../../models/category')

module.exports = {
  index,
  show
}

async function index (req, res) {
  try {
    const categories = await Category.find({})
    res.status(200).json(categories)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

async function show (req, res) {
  try {
    const category = await Category.findById(req.params.id)
    res.status(200).json(category)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}
