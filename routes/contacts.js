const express = require('express')
const router = express.Router()

const {addContact, getContacts, updateContact, deleteContact} = require('../controller/contacts')

router.route('/').get(getContacts).post(addContact)
router.route('/:id').put(updateContact).delete(deleteContact)

module.exports = router;