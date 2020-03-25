const mongoose = require('mongoose');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const { ContactSchema } = require('./Contact');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [ true, 'Please add your name' ]
	},
	email: {
		type: String,
		required: [ true, 'Please include a valid email' ],
		unique: true,
		match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please include a valid email' ]
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
		select: false
	},
	contacts: [ ContactSchema ],
	dateCreated: {
		type: Date,
		default: Date.now
	}
});

// encrypt pre save
UserSchema.pre('save', async function(next) {
	if (!this.isModified('password')) {
		next();
	}

	this.password = await argon2.hash(this.password, {
		type: argon2.argon2id
	});
});

// Jwt sign
UserSchema.methods.signToken = function() {
	return jwt.sign(
		{
			id: this._id
		},
		process.env.JWT_SECRET,
		{
			expiresIn: process.env.JWT_EXPIRE
		}
	);
};

// Custom method match
UserSchema.methods.matchPassword = async function(userPassword) {
	return await argon2.verify(this.password, userPassword);
};

// Needs Testing
UserSchema.methods.checkEmail = async function(email) {
	let result = false;
	this.contacts.forEach((el) => {
		if (el.email === email) result = true;
	});

	return result;
};

UserSchema.methods.getContact = async function(id) {
	let contact = this.contacts.filter((el) => el.id === id);

	return contact;
};

UserSchema.methods.addContact = async function(newContact) {
	await this.contacts.push(newContact);
	await this.save();

	/* 
	Since the user is adding and viewing contacts no security issue, one issue is passing an empty value, that can be short circuited 
	*/
	const createdContact = await this.contacts[this.contacts.length - 1];
	return createdContact;
};

UserSchema.methods.removeContact = async function(id) {
	let removed = this.contacts.pull(id);
	removed.remove();
	this.save();
};

module.exports = mongoose.model('User', UserSchema);
