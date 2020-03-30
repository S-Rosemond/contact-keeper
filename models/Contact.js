const mongoose = require('mongoose');

exports.ContactSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [ true, 'The name field is required' ]
	},
	email: {
		type: String,
		required: [ true, 'An email is required for all contacts' ]
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
