const express = require('express')
const router = express.Router()
const protect = require('../middleware/auth')

const {addContact, getContacts, updateContact, deleteContact} = require('../controller/contacts')

router.route('/').get(protect, getContacts).post(protect, addContact)
router.route('/:id').put(protect, updateContact).delete(protect,deleteContact)

module.exports = router;