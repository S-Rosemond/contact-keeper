const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/ErrorResponse');
const sendTokenResponse = require('../utils/sendTokenResponse');
const checkFields = require('../utils/checkFields');
const User = require('../models/User');

// @desc    Log In User
// @route   POST api/auth
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
	let { email, password } = req.body;

	password = password.toString();

	const notValidCreds = checkFields(email, password);

	console.log(notValidCreds[0]);

	if (notValidCreds[0]) {
		return next(new ErrorResponse(notValidCreds[1], 400));
	}

	const user = await User.findOne({ email }).select('+password');

	if (!user) {
		return next(new ErrorResponse('Invalid credentials', 400));
	}

	const isMatch = await user.matchPassword(password);

	if (!isMatch) {
		return next(new ErrorResponse('Invalid credentials', 401));
	}

	sendTokenResponse(user, 200, res);
});

// @desc    Get Logged In User
// @route   GET api/auth
// @access  Private
exports.getLoggedUser = asyncHandler(async (req, res, next) => {
	res.send('get logged in user');
});
