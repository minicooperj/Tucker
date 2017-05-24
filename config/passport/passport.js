var bCrypt = require('bcrypt-nodejs');
var customerORM = require("../../orm/customer_orm.js");

module.exports = function(passport, customer) {

    var Customer = customer;
    var LocalStrategy = require('passport-local').Strategy;

    //serialize user
    passport.serializeUser(function(customer, done) {
        done(null, customer.id);
    });

    // deserialize user 
    passport.deserializeUser(function(id, done) {
        customerORM.getCustomerById(id, function(user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });

    passport.use('local-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            customerORM.getCustomerByEmail(email, function(user) {
                if (user) {
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
                } else {
                    var userPassword = generateHash(password);
                    var data = {
                        email: email,
                        password: userPassword,
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        phone: req.body.phone
                    };
                    customerORM.addCustomer(data, function(newUser) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            var Customer = customer;
            var isValidPassword = function(userpass, password) {
                return bCrypt.compareSync(password, userpass);
            };
            try {
                customerORM.getCustomerByEmail(email, function(user) {
                    if (!user) {
                        return done(null, false, {
                            message: 'Email does not exist'
                        });
                    }
                    if (!isValidPassword(user.password, password)) {
                        return done(null, false, {
                            message: 'Incorrect password.'
                        });
                    }
                    var userinfo = user.get();
                    return done(null, userinfo);
                });
            } catch (err) {
                console.log("Error:", err);
                return done(null, false, {
                    message: 'Something went wrong with your SignIn'
                });
            }
        }
    ));
};