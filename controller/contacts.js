const asyncHandler = require('../middleware/asyncHandler');
const User = require('../models/User');
const ErrorResponse = require('../utils/ErrorResponse');
const checkEmail = require('../utils/checkEmail');

// @desc    Get all users contacts
// @route   GET api/contacts
// @access  Private
exports.getContacts = asyncHandler(async (req, res, next) => {
	const user = await User.findById(req.user.id);
	const contacts = user.contacts;

	res.status(200).json({
		success: true,
		data: contacts
	});
});

// @desc    Add new contact
// @route   POST api/contacts
// @access  Private
exports.addContact = asyncHandler(async (req, res, next) => {
	let { email } = req.body;

	const user = await User.findById(req.user.id);
	//let contactExist = checkEmail(email, user.contacts)
	// replaced by user.checkEmail rm later

	let contactExist = await user.checkEmail(email);

	if (contactExist) {
		return next(new ErrorResponse('A contact with this email already exist.'));
	}

	const newContact = { ...req.body };

	const contact = await user.addContact(newContact);

	res.status(200).json({
		success: true,
		data: contact
	});
});

// @desc    Update new contact
// @route   PUT api/contacts/:id
// @access  Private
exports.updateContact = asyncHandler(async (req, res, next) => {
	res.send('update contact');
});

// @desc    Delete a contact
// @route   DELETE api/contacts/:id
// @access  Private
exports.deleteContact = asyncHandler(async (req, res, next) => {
	res.send('delete contact');
});
