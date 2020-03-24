const express = require('express');
const router = express.Router();
const limiter = require('../utils/rateLimiter');
const { loginRateLimitMsg } = require('../utils/rateLimitMessages');
const protect = require('../middleware/auth');

const { login, getLoggedUser, logout } = require('../controller/auth');

router.route('/login').get(protect, getLoggedUser).post(limiter(5, loginRateLimitMsg), login);
router.route('/logout').post(protect, logout);

module.exports = router;
