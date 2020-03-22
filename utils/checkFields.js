const checkFields = (email, password) => {
	if (!email && !password) {
		return [ true, 'Please provide a valid email and password' ];
	} else if (!email) {
		return [ true, 'Please provide a valid email' ];
	} else if (!password) {
		return [ true, 'Please provide a valid password' ];
	}

	return [ false ];
};

module.exports = checkFields;
