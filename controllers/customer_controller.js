var customerORM = require("../orm/customer_orm.js");

var exports = module.exports = {};

exports.signup = function(req, res) {
    res.render('customer_pages/signup');
};

exports.signin = function(req, res) {
    res.render('customer_pages/signin');
};

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
};

exports.indexPage = function(req, res) {
    console.log('Logined user', req.user);
    res.render('customer_pages/index');
};

exports.addAddress = function(req, res) {
    customerORM.addCustomerAddress(req.body, req.user.id, address => {
        res.render('customer_pages/address', address);
    });
};

exports.getAddress = function(req, res) {
    customerORM.getCustomerAddress(req.user.id, address => {
        // res.json(address);
        res.render('customer_pages/address', address);
    });
};

exports.updateAddress = function(req, res) {
    customerORM.getCustomerAddress(req.body, req.user.id, address => {
        res.render('customer_pages/address', address);
    });
};

exports.updateCustomerInfo = function(req, res) {
    customerORM.updateCustomerInfo(req.body, req.user.id, customer => {
        res.render("customer_pages/info", customer);
    });
};


exports.getCustomers = function(req, res) {
    customerORM.getCustomers(customers => {
        res.render('customer_pages/allCustomers', customers);
    });
};

exports.getBucket = function(req, res) {
    customerORM.getCustomerBucket(req.user.id, bucket => {
        res.json(bucket);
        res.render('customer_pages/bucket', bucket);
    });
};

exports.updateBucker = function(req, res) {
    customerORM.updateBucket(req.user.id, req.params.productId, bucket => {
        res.render('customer_pages/bucket', bucket);
    });
};

exports.addToBucket = function(req, res) {
    customerORM.addToBucket(req.user.id, req.params.productId, bucket => {
        res.render('customer_pages/bucket', bucket);
    });
};