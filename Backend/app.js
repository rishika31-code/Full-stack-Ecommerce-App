// Importing express
const express = require('express')
require('dotenv').config()

// Imnporting routes 
const adminRoutes = require('./routes/adminRoutes')

// Importing middlewares
const cors = require('cors')
const bodyParser = require('body-parser')


// importing db
const db = require('./util/database')
const app = express()


// Applying middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// appyning routes 
app.use('/admin', adminRoutes)


// associtaions
require('./relations/relations')()


// sync database and listen
db.sync(
    { force: true }
)
    .then(() => {
        app.listen(process.env.RUNNING_PORT, () => {
            console.log('App Started ..')
        })

    })
    .catch(err => console.log(err))

