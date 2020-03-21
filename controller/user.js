const asyncHandler = require('../middleware/asyncHandler')


// @desc    Register User
// @route   POST api/users
// @access  Public
exports.registerUser = asyncHandler( async (req, res, next) => {
    res.send('register user')
})