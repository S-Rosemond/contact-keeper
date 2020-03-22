const express = require('express');
const router = express.Router();
const limiter = require('../utils/rateLimiter')
const {loginRateLimitMsg} = require('../utils/rateLimitMessages')
const protect = require('../middleware/auth')

const { login, getLoggedUser } = require('../controller/auth');

router.route('/').get(protect,getLoggedUser).post(limiter(5, loginRateLimitMsg),login);

module.exports = router;
