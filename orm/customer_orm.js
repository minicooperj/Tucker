var db = require('../models');

var customerORM = {
    addCustomer: (customerData, callback) => {
        customerData.role = "customer";
        db.Customer.create(customerData).then((newCustomer) => {
            callback(newCustomer);
        });
    },
    addCustomerAddress: (newAddress, customerId, callback) => {
        newAddress.customerId = customerId;
        db.Address.create(newAddress).then((address) => {
            callback(address);
        })
    },
    getCustomers: (callback) => {
        db.Customer.findAll({
            include: [db.Address]
        }).then(function(dbCustomers) {
            callback(dbCustomers);
        });
    },

    getCustomerByEmail: (email, callback) => {
        db.Customer.findOne({
            where: {
                email: email
            }
        }).then(function(dbCustomers) {
            callback(dbCustomers);
        });
    },

    getCustomerById: (id, callback) => {
        db.Customer.findOne({
            where: {
                id: id
            }
        }).then(function(dbCustomers) {
            callback(dbCustomers);
        });
    },

    getCustomerAddress: (customerId, callback) => {
        db.Address.findOne({
            where: {
                customerId: customerId
            }
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
        }).then(function(busket) {
            callback(bucket);
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
    updateCustomerInfo: (customerInfo, customerId, callback) => {
        db.Customer.update(customerInfo, {
            where: {
                id: customerId
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