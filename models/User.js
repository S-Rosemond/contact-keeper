const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add your name']
    },
    email: {
        type: String,
        required: [true, 'Please include a valid email'],
        unique: true,
        match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please include a valid email' ]
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// encrypt pre save
UserSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next()
    }

    this.password = await argon2.hash(this.password, {
        type: argon2.argon2id
    })
})

// Jwt sign
UserSchema.methods.signToken = function() {
    return jwt.sign({
        id: this._id
    },process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

// Custom method match
UserSchema.methods.matchPassword = async function(userPassword) {

    return await argon2.verify(this.password, userPassword)
}



module.exports = mongoose.model('User', UserSchema)