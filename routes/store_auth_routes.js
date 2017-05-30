var storeController = require('../controllers/store_controller.js');

module.exports = function(app, passport) {
    app.get('/store/signup', storeController.signup);

    app.get('/store/signin', storeController.signin);

    app.get('/store/logout', storeController.logout);

    app.get('/store/index', isLoggedIn, storeController.indexPage);

    app.post('/store/address', isLoggedIn, storeController.addAddress);

    app.get('/store/address', isLoggedIn, storeController.getAddress);

    app.put('/store/address', isLoggedIn, storeController.updateAddress);

    app.put('/store/info', isLoggedIn, storeController.updateProductInfo);

    app.get('/store/info', isLoggedIn, storeController.getStoreInfo);

    app.get('/stores', isLoggedIn, storeController.getStores);

    app.post('/store/product', isLoggedIn, storeController.addProduct);

    app.put('/store/product', isLoggedIn, storeController.updateProductInfo);

    app.get('/store/product', isLoggedIn, storeController.getProducts);

    app.delete('/store/product', isLoggedIn, storeController.deleteProduct);

    app.post('/store/signup', passport.authenticate('store-signup', {
        successRedirect: '/store/index',
        failureRedirect: '/store/signup',
        failureFlash: true
    }));

    app.post('/store/signin', passport.authenticate('store-signin', {
        successRedirect: '/store/index',
        failureRedirect: '/store/signin',
        failureFlash: 'Invalid username or password.'
    }));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/');
    }
};