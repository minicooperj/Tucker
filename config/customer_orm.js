var db = require('../models');

var customerORM = {
    addCustomer: (customerData, callback) => {
        db.Customer.create(customerData).then((newCustomer) => {
            callback(newCustomer);
        });
    },
    getCustomers: (callback) => {
        db.Customer.findAll({
            include: [db.Address]
        }).then(function(dbCustomers) {
            callback(dbCustomers);
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
    },
    updateCustomerAddress: (newAddress, customerId, callback) => {
        db.Address.update(newAddress, {
            where: {
                customerId: customerId
            }
        }).then((address) => {
            callback(address);
        })
    },
    updateCustomerInfo: (customerInfo, callback) => {
        db.Customer.update(customerInfo, {
            where: {
                id: customerInfo.id
            }
        }).then((customer) => {
            callback(customer);
        })
    },
    deleteCustomer: (customerId, callback) => {
        db.Customer.destroy({
            where: {
                id: customerId
            }
        }).then((customer) => {
            callback(customer);
        });
        db.Address.destroy({
            where: {
                customerId: customerId
            }
        }).then((address) => {
            callback(address);
        });
    }
};

module.exports = customerORM;