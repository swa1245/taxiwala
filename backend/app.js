const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const express = require('express')
const app = express()
const connectDb = require('./db/db')
const userRoutes = require('./routes/user.routes')
connectDb()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRoutes)
module.exports = app