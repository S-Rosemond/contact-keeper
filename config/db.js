const mongoose = require('mongoose');

const connectDB = async () => {
	const dbConnection = await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	});

	console.log(`MongoDB Server Connected: {host}: ${dbConnection.connection.host}`.magenta.bold.underline);
};

module.exports = connectDB;
