const express = require('express');
const router = express.Router();

const { login, getLoggedUser } = require('../controller/auth');

router.route('/').get(getLoggedUser).post(login);

module.exports = router;
