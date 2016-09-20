var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	username: String,
	usernameLower: String,
	password: String,
	permissions: String,
	firstName: String,
	lastName: String,
	email: String,
	gradYear: Number,
	UID: String,
	phoneNumber: String,
	interests: [String]
});


//Hashing methods stolen from https://scotch.io/tutorials/easy-node-authentication-setup-and-local
userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);