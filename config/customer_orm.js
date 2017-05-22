var db = require('../models');

var customerORM = {
    getCustomers: (callback) => {
        db.Customer.findAll({
            include: [db.Address]
        }).then(function(dbCustomers) {
            callback(dbCustomers);
        });
    },
    addCustomer: (customerData, callback) => {
        db.Customer.create(customerData).then((newCustomer) => {
            callback(newCustomer);
        });
    },
    getCustomerAddress: (customerId, callback) => {
        db.Customer.findOne({
            where: {
                id: customerId
            },
            include: [db.Address]
        }).then(function(dbAddress) {
            callback(dbAddress);
        });
    },
    getCustomerBucket: (customerId, callback) => {
        db.Bucket.findAll({
            where: {
                CustomerId: customerId
            },
            include: [db.Products]
        }).then(function(dbAddress) {
            callback(dbAddress);
        });
    }
};

module.exports = customerORM;