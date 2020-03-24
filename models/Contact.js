const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	name: {
		type: String,
		required: [ true, 'The name field is required' ]
	},
	email: {
		type: String,
		required: [ true, 'An email is required for all contacts' ],
		unique: true
	},
	phone: {
		type: String
	},
	cellphone: {
		type: String
	},
	type: {
		type: String,
		enum: [ 'business', 'personal' ],
		default: 'personal'
	},
	dateCreated: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Contact', ContactSchema);
