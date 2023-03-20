const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const app = express()

//logging middleware
app.use(morgan('dev'))

//static middleware
app.use(express.static(path.join(__dirname, '../public')))

//parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', require('./api'))

app.listen(PORT, () => {
  console.log(`Getting wild on @ http://localhost:${PORT}`)
})
