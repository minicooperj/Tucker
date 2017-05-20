var db = require('../models');

var customerORM = {
    getCustomers: (callback) => {
        db.Customer.findAll({}).then(function(dbCustomers) {
            callback(dbCustomers);
        })
    },
    addCustomer: (customerData, callback) => {
        db.Customer.create(customerData).then((newCustomer) => {
            callback(newCustomer)
        })
    }
};

module.exports = customerORM;