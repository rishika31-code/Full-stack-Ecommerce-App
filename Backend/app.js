// Importing express
const express = require('express')
require('dotenv').config()

// Importing middlewares
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()


// Applying middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.listen(process.env.port, () => {
    console.log("App Running on " + process.env.port)
})
