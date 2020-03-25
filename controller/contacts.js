const asyncHandler = require('../middleware/asyncHandler');
const User = require('../models/User');
const ErrorResponse = require('../utils/ErrorResponse');
const sendResponse = require('../utils/sendResponse');

// @desc    Get all users contacts
// @route   GET api/contacts
// @access  Private
exports.getContacts = asyncHandler(async (req, res, next) => {
	const user = await User.findById(req.user.id);
	const contacts = user.contacts;

	sendResponse(res, contacts);
});

// @desc    Add new contact
// @route   POST api/contacts
// @access  Private
exports.addContact = asyncHandler(async (req, res, next) => {
	let { email } = req.body;

	const user = await User.findById(req.user.id);

	let contactExist = await user.checkEmail(email);

	if (contactExist) {
		return next(new ErrorResponse('A contact with this email already exist.'));
	}

	const newContact = { ...req.body };

	const contact = await user.addContact(newContact);

	sendResponse(res, contact);
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
	const user = await User.findById(req.user.id);

	await user.removeContact(req.params.id);

	sendResponse(res);
});
