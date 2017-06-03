var storeController = require('../controllers/store_controller.js');

module.exports = function(app, passport) {
    app.get('/store/register', storeController.signup);

    app.get('/store/login', storeController.signin);

    app.get('/store/logout', storeController.logout);

    app.get('/store/index', isLoggedIn, storeController.indexPage);

    app.post('/store/address', isLoggedIn, storeController.addAddress);

    app.get('/store/address', isLoggedIn, storeController.getAddress);

    app.put('/store/address', isLoggedIn, storeController.updateAddress);

    app.put('/store/info', isLoggedIn, storeController.updateStoreInfo);

    app.get('/store/info', isLoggedIn, storeController.getStoreInfo);

    app.get('/stores', isLoggedIn, storeController.getStores);

    app.get('/store/orders', isLoggedIn, storeController.getOrders);

    app.post('/store/product', isLoggedIn, storeController.addProduct);

    app.put('/store/product', isLoggedIn, storeController.updateProductInfo);

    app.get('/store/product', isLoggedIn, storeController.getProducts);

    app.delete('/store/product', isLoggedIn, storeController.deleteProduct);

    app.post('/store/register', passport.authenticate('store-signup', {
        successRedirect: '/store/index',
        failureRedirect: '/store/register',
        failureFlash: true
    }));

    app.post('/store/login', passport.authenticate('store-signin', {
        successRedirect: '/store/index',
        failureRedirect: '/store/login',
        failureFlash: 'Invalid username or password.'
    }));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/');
    }
};