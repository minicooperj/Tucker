var customerORM = require("../orm/customer_orm.js");

var exports = module.exports = {};

exports.signup = function(req, res) {
    res.render('customer_pages/signup');
};

exports.signin = function(req, res) {
    res.render('customer_pages/signin');
};

exports.info = function(req, res) {
    res.render('customer_pages/info');
};

exports.index = function(req, res) {
    res.render('customer_pages/index');
};

exports.addAddress = function(req, res) {
    customerORM.addCustomerAddress(req.body, (address) => {
        res.render('customer_pages/address', address);
    });
};

exports.getAddress = function(req, res) {
    customerORM.getCustomerAddress(req.params.id, (address) => {
        res.render('customer_pages/address', address);
    });
};

exports.updateAddress = function(req, res) {
    customerORM.getCustomerAddress(req.body, (address) => {
        res.render('customer_pages/address', address);
    });
};

exports.updateCustomerInfo = function(req, res) {
    customerORM.updateCustomerInfo(req.body, (customer) => {
        res.render("customer_pages/info", customer);
    });
};

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
};

exports.getCustomers = function(req, res) {
    customerORM.getCustomers((customers) => {
        res.render('customer_pages/allCustomers', customers);
    });
};