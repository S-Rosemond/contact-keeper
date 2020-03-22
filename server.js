const colors = require('colors')
const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')
const hpp = require('hpp')
const limiter = require('./utils/rateLimiter')

const users = require('./routes/users')
const auth = require('./routes/auth')
const contacts  = require('./routes/contacts')

dotenv.config({
    path: './config/config.env'
})

connectDB()

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(hpp())
app.use(limiter())

// Define Routes
app.use('/api/users', users)
app.use('/api/auth', auth)
app.use('/api/contacts', contacts)


// Error Handler Middleware
app.use(errorHandler)


const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.cyan.bold);
})


process.on('unhandledRejection', (err, promise) => {
    console.log(
        'Error: Unhandled Rejection',
        '\n',
        `Error Message: ${err.message}`.red.underline.bold)

        server.close(() => process.exit(1))
})