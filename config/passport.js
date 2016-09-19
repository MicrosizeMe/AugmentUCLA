var LocalStrategy = require('passport-local').Strategy;

var User = require('./dbtemplates/user-core');

module.exports = function(passport) {
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-login', new LocalStrategy({
    	passReqToCallback: true
    }), 
    function(req, username, password, done) {
    	User.findOne({username: username}, function(err, user) {
    		if (err)
    			return done(err);
    		if (!user) {
    			return done(null, false);
    		}
    		if (!user.validPassword(password))
    			return done(null, false);

    		return done(null, user);
    	});
    });

    passport.use('local-register', new LocalStrategy({
    	passReqToCallback: true
    }),
    function(req, username, password, done) {
    	
    });
}