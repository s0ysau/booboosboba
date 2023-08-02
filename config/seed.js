require('dotenv').config()
require('./database')

const Category = require('../models/category')
const Products = require('../models/products')

const products = [
  {
    name: "",
    category: "",
    tags: [],
    price: "",
    img: ""
  }
]