var customerORM = require("../orm/store_orm.js");

module.exports = function(app) {
    app.get('/store', (req, res) => {
        customerORM.getStore((stores) => {
            res.json(stores);
        });
    });

    app.post('/store', (req, res) => {
        storeORM.addStore(req.body, (customer) => {
            res.json(customer);
        })
    });

    app.put('/store', (req, res) => {
        storeORM.updateStoreInfo(req.body, (customer) => {
            res.json(store);
        })
    });

    app.post('/store/address', (req, res) => {
        customerORM.addStoreAddress(req.body, (address) => {
            res.json(address);
        })
    });

    app.get('/store/address/:id', (req, res) => {
        customerORM.getStoreAddress(req.params.id, (address) => {
            res.json(address);
        })
    });

    app.put('/store/address', (req, res) => {
        storeORM.updateStoreAddress(req.body, (address) => {
            res.json(address);
        })
    });

};