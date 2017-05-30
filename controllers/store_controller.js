var storeORM = require("../orm/store_orm.js");

var exports = module.exports = {};

exports.signup = function(req, res) {
    res.render('store_pages/signup');
};

exports.signin = function(req, res) {
    res.render('store_pages/signin');
};

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
};

exports.indexPage = function(req, res) {
    console.log('Logined user', req.user);
    res.render('store_pages/index');
};

exports.addAddress = function(req, res) {
    storeORM.addStoreAddress(req.body, req.user.id, address => {
        res.render('store_pages/address', address);
    });
};

exports.getAddress = function(req, res) {
    storeORM.getStoreAddress(req.user.id, address => {
        // res.json(address);
        res.render('store_pages/address', address);
    });
};

exports.updateAddress = function(req, res) {
    storeORM.updateStoreAddress(req.body, req.user.id, address => {
        res.render('store_pages/address', address);
    });
};

exports.updateStoreInfo = function(req, res) {
    storeORM.updateStoreInfo(req.body, req.user.id, store => {
        res.render("store_pages/info", store);
    });
};

exports.getStoreInfo = function(req, res) {
    storeORM.getStoreInfo(req.user.id, store => {
        res.render("store_pages/info", store);
    });
};

exports.getStores = function(req, res) {
    storeORM.getStores(customers => {
        res.render('stores_pages/allStores', stores);
    });
};

exports.addProduct = function(req, res) {
    storeORM.addProduct(req.body, req.user.id, newProduct => {
        res.render('store_pages/product', newProduct);
    });
};

exports.updateProductInfo = function(req, res) {
    storeORM.updateProductInfo(req.body, store => {
        res.render("store_pages/product", store);
    });
};

exports.getProducts = function(req, res) {
    storeORM.getProducts(req.user.id, products => {
        res.render("store_pages/product", products);
    });
};

exports.deleteProduct = function(req, res) {
    storeORM.getProduct(req.params.productId, product => {
        res.render("store_pages/product", product);
    });
};