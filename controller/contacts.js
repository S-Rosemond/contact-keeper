const asyncHandler = require('../middleware/asyncHandler')


// @desc    Get all users contacts
// @route   GET api/contacts
// @access  Private
exports.getContacts = asyncHandler(async (req,res,next) => {
    res.send('get contacts')
})

// @desc    Add new contact
// @route   POST api/contacts
// @access  Private
exports.addContact = asyncHandler(async (req,res,next) => {
    res.send('add contact')
})

// @desc    Update new contact
// @route   PUT api/contacts/:id
// @access  Private
exports.updateContact = asyncHandler(async (req,res,next) => {
    res.send('update contact')
})

// @desc    Delete a contact
// @route   DELETE api/contacts/:id
// @access  Private
exports.deleteContact = asyncHandler(async (req,res,next) => {
    res.send('delete contact')
})