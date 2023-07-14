require('dotenv').config()
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const PORT = process.env.PORT || 3005

const app = express()

app.use(express.json())
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`I am listening on ${PORT}`)
})