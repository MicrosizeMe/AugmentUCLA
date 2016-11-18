var dbChoice = 'mongoose'; 
var Data = require('./staticData');

var validateUsername = function(username) {
	username = username.trim();
	if (!username) {
		return "Username: A username is required.";
	}
	if (username.length < 5) {
		return "Username: Username must be at least 5 characters long.";
	}
	if (!/^[a-zA-Z0-9]+$/i.test(username)) {
		return "Username: Username must be alphanumeric.";
	}
	//Username check will happen separately, since it involves a callback.
	return "";
}

// Similarly, returns an error string if there's a problem, otherwise 
// returns ""
var validatePassword = function(password) {
	if (password == null) 
		return "Password: A Password is required.";
	if (password.length < 10)
		return "Password: Password must be at least 10 characters long.";
	return "";
}

var validateName = function(name) {
	if (name == null) {
		return "Name: Names are required.";
	}
	if (!/^[a-zA-Z \-']+$/.test(name)) {
		return "Name: Name is not alphabetical.";
	}
	return "";
}

var validateDigits = function(uid, digitCount) {
	if (uid == null) {
		return "";
	}
	if (uid.length != digitCount) {
		return "UID or Phone Number: Incorrect digit count.";
	}
	if (!/^[0-9]+$/.test(uid)) {
		return "UID or Phone Number: Not Digit String";
	}
	return "";
}

var validateGradYear = function(gradYear) {
	if (gradYear == null) {
		return "";	
	}
	if (parseInt(gradYear) == NaN || parseInt(gradYear) < 0) {
		return "GradYear: Not a valid input."
	}
	return "";
}

var validateEmail = function(email) {
	if (email == null) {
		return "Email: Email is required.";
	}
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!re.test(email)) {
		return "Email: Email is invalid.";
	}
	return "";
}

var validateInterests = function(interests, interestList) {
	console.log(interests.length);
	var validInterests = interestList;
	for (var i = 0; i < interests.length; i++) {
		if (!(validInterests.indexOf(interests[i]) >= 0)) {
			return "Interests: Invalid interest: " + interests[i];
		}
	}
	return "";
}

var shouldExit = function(error) {
	if (error != "") {
		res.send({ error: error });
		console.log("Error!");
		return true;
	}
	return false;
}


if (dbChoice == 'mongoose') {
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
	User = mongoose.model('User', userSchema);

	module.exports = {
		mongooseModule: User,
		findUser: function(username, callback) {
			//Format of callbackWithResult: err as first argument, user as the second argument
			User.findOne({usernameLower: username.toLowerCase()}, callback);
		},
		findUsersByString: function(string, callback) {
			User.find({
				$or: [
					{usernameLower: string.toLowerCase()},
					{email: string},
					{firstName: string},
					{lastName: string},
				]
			}, callback);
		},
		//Registers an input user into the database if possible.
		//Callback function format: 
		// first arg: error: If the db has an error or the input is wrong, 
		// this wil be set to a value. Otherwise, error gets set to false. 
		register: function(userObject, callback) {
			var error;
			error = validateUsername(userObject.username);
			error = validatePassword(userObject.password);
			error = validateName(userObject.firstName);
			error = validateName(userObject.lastName);
			error = validateDigits(userObject.uid, 9);
			error = validateGradYear(userObject.gradYear);
			error = validateDigits(userObject.phoneNumber, 10);
			error = validateEmail(userObject.email);
			error = validateInterests(userObject.interests, Data.getTeams());

			if (error) {
				callback(error);
				return;
			}
			User.findOne(
				{
					$or: [
						{ usernameLower: userObject.username.toLowerCase() },
						{ email: userObject.email }
					]
				}, 
				function(err, user) {
					if (err) {
						callback(err);
						return;
					}
					if (user != null) {
						if (user.usernameLower == userObject.username.toLowerCase())
							callback("Username: Username is already taken.");
						else
							callback("Email: Email is already registered.");
					}
					else {
						console.log("Registration okay to go, starting");
						// Add the account. 
						var user = new User({
						// console.log({
							username: userObject.username,
							usernameLower: userObject.username.toLowerCase(),
							permissions: "user",
							firstName: userObject.firstName,
							lastName: userObject.lastName,
							email: userObject.email,
							gradYear: userObject.gradYear,
							UID: userObject.uid,
							phoneNumber: userObject.phoneNumber,
							interests: userObject.interests
						});
						user.password = user.generateHash(userObject.password);
						user.save(callback());
					}
				}
			);
		},

		//Validates whether or not the login information provided is valid. Otherwise,
		//gives an error. 
		//Callback requires one argument that stores error.
		loginCheck: function(userInfo, callback) {
			var usernameLower = userInfo.username.toLowerCase();
			User.findOne({ usernameLower: usernameLower }, function(err, user) {
				if (err) {
					callback(err);
					return;
				}
				if (user == null) {
					callback("Username: Username not found!");
					return;
				}
				else {
					//Found the username. 
					if (!user.validPassword(userInfo.password)) {
						callback("Password: Password is invalid!");
						return;
					}
					else {
						callback(null);
					}
				}
			});
		},
		getAll: function(callback) {
			User.find(callback);
		}
	}
}
else if (dbChoice == 'mysql') {

}