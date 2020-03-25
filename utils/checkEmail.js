const checkEmail = (email, array) => {
	let result = false;

	array.forEach((el) => {
		if (el.email === email) result = true;
	});

	return result;
};

module.exports = checkEmail;
