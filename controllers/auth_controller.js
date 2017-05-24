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

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
};