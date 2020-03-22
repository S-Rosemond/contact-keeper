const ErrorResponse = require('../utils/ErrorResponse');

const errorHandler = (err, req, res, next) => {
	let error = { ...err };

	error.message = err.message;

	if (err.name === 'CastError') {
		const message = 'Bad Request.';
		error = new ErrorResponse(message, 400);
	}

	// Duplicate key error
	if (err.code === 11000) {
		const message = 'Bad Request.';

		error = new ErrorResponse(message, 400);
	}

	if (err.name === 'ValidationError') {
		const message = Object.values(err.errors).map((val) => {
			return val.message;
		});

		error = new ErrorResponse(message, 400);
	}

	res.status(error.statusCode || 500).json({
		success: false,
		error: error.message
	});
};

module.exports = errorHandler;
