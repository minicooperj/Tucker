var customerORM = require("../orm/customer_orm.js");

module.exports = function(app) {
    app.get('/customer', (req, res) => {
        customerORM.getCustomers((customers) => {
            res.json(customers);
        });
    });

    app.post('/customer', (req, res) => {
        customerORM.addCustomer(req.body, (customer) => {
            res.json(customer);
        })
    });

    app.put('/customer', (req, res) => {
        customerORM.updateCustomerInfo(req.body, (customer) => {
            res.json(customer);
        })
    });

    app.post('/customer/address', (req, res) => {
        customerORM.addCustomerAddress(req.body, (address) => {
            res.json(address);
        })
    });

    app.get('/customer/address/:id', (req, res) => {
        customerORM.getCustomerAddress(req.params.id, (address) => {
            res.json(address);
        })
    });

    app.put('/customer/address', (req, res) => {
        customerORM.updateCustomerAddress(req.body, (address) => {
            res.json(address);
        })
    });

};