const bCrypt = require('bcrypt-nodejs');
var customerORM = require("../../orm/customer_orm.js");
var storeORM = require("../../orm/store_orm.js");

module.exports = function(passport) {

    var LocalStrategy = require('passport-local').Strategy;

    //serialize user
    passport.serializeUser(function(user, done) {
        done(null, {
            id: user.id,
            role: user.role
        });
    });

    // deserialize user 
    passport.deserializeUser(function(user, done) {
        console.log('Deserializer ', user);
        if (user.role === "store") {
            storeORM.getStoreById(user.id, function(user) {
                if (user) {
                    done(null, user.get());
                } else {
                    done(user.errors, null);
                }
            });
        } else {
            customerORM.getCustomerById(user.id, function(user) {
                if (user) {
                    done(null, user.get());
                } else {
                    done(user.errors, null);
                }
            });
        }
    });

    // CUSTOMER SIGN UP
    passport.use('customer-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            console.log('Im inside customer sign up');
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

    //CUSTOMER SIGN IN
    passport.use('customer-signin', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            console.log('Im inside customer sign in');

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
    // STORE SIGN UP
    passport.use('store-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            console.log('Im inside store sign up');
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            storeORM.getStoreByEmail(email, function(user) {
                if (user) {
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
                } else {
                    var userPassword = generateHash(password);
                    var data = {
                        storeName: req.body.storeName,
                        email: email,
                        password: userPassword,
                        website: req.body.website,
                        phone: req.body.phone
                    };
                    storeORM.addStore(data, function(newUser) {
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

    //STORE SIGN IN
    passport.use('store-signin', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            console.log('Im inside store sign in');
            var isValidPassword = function(userpass, password) {
                return bCrypt.compareSync(password, userpass);
            };
            try {
                storeORM.getStoreByEmail(email, function(user) {
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