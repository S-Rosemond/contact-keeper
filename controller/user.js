const asyncHandler = require('../middleware/asyncHandler');
const User = require('../models/User');
const sendTokenResponse = require('../utils/sendTokenResponse');
const ErrorResponse = require('../utils/ErrorResponse');

// @desc    Register User
// @route   POST api/users
// @access  Public
exports.registerUser = asyncHandler(async (req, res, next) => {
	let { name, email, password } = req.body;

	password = password.toString();

	let user = await User.findOne({ email });

	if (user) {
		return next(new ErrorResponse('Email already in use', 400));
	}

	user = await User.create({ name, email, password });

	sendTokenResponse(user, 200, res);
});
