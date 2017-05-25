var customerController = require('../controllers/customer_controller.js');

module.exports = function(app, passport) {
    app.get('/customer/signup', customerController.signup);

    app.get('/customer/signin', customerController.signin);

    app.get('/customer/index', isLoggedIn, customerController.index);

    app.get('/customer/logout', customerController.logout);

    app.get('/customer/info', isLoggedIn, customerController.info);

    app.get('/customers', isLoggedIn, customerController.getCustomers);

    app.put('/customer', isLoggedIn, customerController.updateCustomerInfo);

    app.post('/customer/address', isLoggedIn, customerController.addAddress);

    app.get('/customer/address', isLoggedIn, customerController.getAddress);

    app.put('/customer/address', isLoggedIn, customerController.updateAddress);

    app.get('/customer/bucket', isLoggedIn, customerController.getBucket);

    app.delete('customer/bucket/:productId', isLoggedIn, customerController.updateBucker);

    app.put('customer/bucket/:productId', isLoggedIn, customerController.addToBucket);

    app.post('/customer/signup', passport.authenticate('local-signup', {
        successRedirect: '/customer/index',
        failureRedirect: '/customer/signup',
        failureFlash: true
    }));

    app.post('/customer/signin', passport.authenticate('local-signin', {
        successRedirect: '/customer/index',
        failureRedirect: '/customer/signin',
        failureFlash: 'Invalid username or password.'
    }));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/customer/signin');
    }
};