const jwt = require('jsonwebtoken')
const asyncHandler = require('./asyncHandler')
const ErrorResponse = require('../utils/ErrorResponse')
const User = require('../models/User')

exports.protect = asyncHandler( async (req,res,next) => {
    
    let token;
    

})