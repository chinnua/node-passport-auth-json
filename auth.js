var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var JsonStrategy = require('passport-json').Strategy;
var _ = require('lodash');

var Users = require('./users.json');
var user;
// Register a login strategy
passport.use('login', new LocalStrategy(
    function (username, password, done) {
        // This should check again db
        user = _.find(Users, {
            username: username,
            password: password
        });
        if (user != null) {
            console.log(user);
            return done(null, user);
        } else {
            done(null, false, {
                message: 'Invalid username and password.'
            });
        }
    }
));

// Required for storing user info into session 
passport.serializeUser(function (user, done) {
    done(null, user._id);
});

// Required for retrieving user from session
passport.deserializeUser(function (id, done) {
    done(null, user);
});

module.exports = passport;