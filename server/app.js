const express = require('express')
const app = express()
const authRoutes = require('./routes/auth')
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')

app.use(passport.initialize())
require('./middleware/passport')(passport)
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/api/auth', authRoutes)

module.exports = app
