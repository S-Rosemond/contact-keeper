const rateLimit = require('express-rate-limit')

const limiter = (
    max = 100,
    message='Too many requests, please try again later.') => {
    return  rateLimit({
        windowMs: 60 * 60 * 1000,
        max,
        message
    })
}

module.exports = limiter;