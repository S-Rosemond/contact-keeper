users: [
	{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	}
];
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
