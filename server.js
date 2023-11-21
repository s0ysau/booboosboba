require('dotenv').config()
require('./config/database')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const PORT = process.env.PORT || 3005

const app = express()

// req.body
app.use(express.json())

app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
// app.use(logger('dev'))~
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

app.use('/api/items', require('./routes/api/items'))
// app.use('/api/category', require('./routes/api/category'))
app.use('/api/order', require('./routes/api/orders'))
app.use('/api/cart', require('./routes/api/cart'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`I'm looking for boba on ${PORT}`)
})
