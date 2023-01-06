// import node modules 
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

// import app modules 
const router = require('./src/routes/api')

// configure dotenv 
dotenv.config({ path: './.env' })

// crete app 
const app = express()

// middleware's
app.use(express.json())
app.use(cors())

// database connection 
const URI = process.env.URI
mongoose.connect(URI, (error) => {
  if (error) {
    console.log(error);
    return
  }
  console.log(`mongodb connected`);
})

// configure route
app.use('/api/v1', router)

// configure 404 route
app.use('*', (req, res) => {
  res.status(404).json({ status: "fail", message: `No route found for ${req.url}` })
})

module.exports = app

