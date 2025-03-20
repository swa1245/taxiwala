const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const express = require('express')
const app = express()
const connectDb = require('./db/db')
const userRoutes = require('./routes/user.routes')
const cookieparser = require('cookie-parser')
const captain = require('./routes/capatin.routes')
connectDb()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieparser())

app.use('/user', userRoutes)
app.use('/captain',captain)
module.exports = app