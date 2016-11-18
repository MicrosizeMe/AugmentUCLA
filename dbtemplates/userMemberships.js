var dbChoice = 'mongoose'; 
var StaticData = require('./staticData');

var validateMembership = function(interest, interestList) {
	var validInterests = interestList;
	if (!(validInterests.indexOf(interest) >= 0)) {
		return "Interests: Invalid membership: " + interest;
	}
	return "";
}

if (dbChoice == 'mongoose') {
	var mongoose = require('mongoose');
	var bcrypt = require('bcrypt-nodejs');

	var userMembershipSchema = mongoose.Schema({
		username: String,
		usernameLower: String,
		membership: String //Add an entry for each membership to be added. 
	});

	// create the model for users and expose it to our app
	UserMembership = mongoose.model('UserMembership', userMembershipSchema);

	module.exports = {
		mongooseModule: UserMembership,
		//Find all memberships for a user
		findMembershipsForUser: function(username, callback) {
			//Format of callbackWithResult: err as first argument, 
			//user as the second argument with all input memberships in the 
			//memberships field, stored as an array.
			UserMembership.find({usernameLower: username.toLowerCase()}, 
				function(err, users) {
					var returnObject = { username: username };
					var membershipObject = {};
					if (err) {
						callback(err);
					}
					else {
						for (var i = 0; i < users.length; i++) {
							membershipObject[users[i]] = true;
						}
						returnObject.membership = membershipObject;
						callback(err, returnObject);
					}
				}
			);
		},
		//Add a membership as specified to the database.
		//Callback takes one argument, err, which is null when success and err
		//when failure. Assumes the username actually is valid. 
		setMembership: function(username, membership, callback) {
			// Validate the membership
			var error = validateMembership(membership, StaticData.getMemberships());
			if (error) {
				callback(error);
				return;
			}
			UserMembership.findOne({
				username: username.trim(),
				usernameLower: username.trim().toLowerCase(),
				membership: membership
			}, function(err, foundMemberships) {
				if (err) {
					callback(err);
				}
				else {
					console.log(foundMemberships);
					if (foundMemberships) {
						callback("User already has that membership!");
						return;
					}
					else {
						new UserMembership({
							username: username.trim(), 
							usernameLower: username.trim().toLowerCase(),
							membership: membership
						}).save(callback);
					}
				}
			});
		},

		//Deletes a membership as appropriate, assuming it exists.
		removeMembership: function(username, membership, callback) {
			UserMembership.find(
				{
					username: username.trim(),
					usernameLower: username.trim().toLowerCase(),
					membership: membership
				}
			).remove(callback);
		}
	}
}
else if (dbChoice == 'mysql') {

}