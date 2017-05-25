var db = require('../models');

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