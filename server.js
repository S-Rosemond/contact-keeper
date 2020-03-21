const colors = require('colors')
const express = require('express')
const errorHandler = require('./middleware/error')

const users = require('./routes/users')
const auth = require('./routes/auth')
const contacts  = require('./routes/contacts')

const app = express()

// Define Routes
app.use('/api/users', users)
app.use('/api/auth', auth)
app.use('/api/contacts', contacts)


// Error Handler Middleware
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.cyan.bold);
})