const sendTokenResponse = (user, statusCode, res) => {
    const token = user.signToken()

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        htttpOnly: true
    }

    if(process.env.NODE_ENV === 'production') {
        options.secure = true;
    }


    res.status(statusCode).cookie('contact_keeper', token, options).json({success: true, token})
}


module.exports = sendTokenResponse;