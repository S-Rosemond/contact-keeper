const asyncHandler = require('../middleware/asyncHandler');
const Contact = require('../models/Contact');
const ErrorResponse = require('../utils/ErrorResponse');

// @desc    Get all users contacts
// @route   GET api/contacts
// @access  Private
exports.getContacts = asyncHandler(async (req, res, next) => {
	const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });

	res.status(200).json({
		success: true,
		data: contacts
	});
});

// @desc    Add new contact
// @route   POST api/contacts
// @access  Private
exports.addContact = asyncHandler(async (req, res, next) => {
	let { name, email, phone, cellphone, type } = req.body;

	let contact = await Contact.find({ email });

	if (contact[0].email === email) {
		return next(new ErrorResponse('A contact with this email already exist.'));
	}

	contact = await Contact.create({
		name,
		email,
		phone,
		cellphone,
		type,
		user: req.user.id
	});

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
