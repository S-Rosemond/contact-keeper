const asyncHandler = require('../middleware/asyncHandler')


// @desc    Log In User
// @route   POST api/auth
// @access  Public
exports.login = asyncHandler( async (req,res,next) => {
    res.send('login user')
})


// @desc    Get Logged In User
// @route   GET api/auth
// @access  Private
exports.getLoggedUser = asyncHandler( async (req,res,next) => {
    res.send('get logged in user')
})

