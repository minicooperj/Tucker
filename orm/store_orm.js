var db = require('../models');


var storeORM = {
    addStore: (storeData, callback) => {
        storeData.role = "store";
        db.Store.create(storeData).then((newStore) => {
            callback(newStore);
        });
    },
    addStoreAddress: (newAddress, storeId, callback) => {
        newAddress.storeId = storeId;
        db.Address.create(newAddress).then((address) => {
            callback(address);
        });
    },

    getStores: (storeId, callback) => {
        db.Store.findAll({
            include: [db.Address]
        }).then(function(dbStores) {
            callback(dbStores);
        });
    },

    getStoreByEmail: (email, callback) => {
        db.Store.findOne({
            where: {
                email: email
            }
        }).then(function(store) {
            callback(store);
        });
    },

    getStoreById: (id, callback) => {
        db.Store.findOne({
            where: {
                id: id
            }
        }).then(function(store) {
            callback(store);
        });
    },

    getStoreInfo: (storeId, callback) => {
        db.Store.findAll({
            where: {
                id: storeId
            },
            include: [db.Address]
        }).then(function(dbStores) {
            callback(dbStores);
        });
    },

    getStoreAddress: (storeId, callback) => {
        db.Address.findOne({
            where: {
                storeId: storeId
            }
        }).then(function(dbAddress) {
            callback(dbAddress);
        });
    },
    updateStoreAddress: (newAddress, storeId, callback) => {
        db.Address.update(newAddress, {
            where: {
                storeId: storeId
            }
        }).then((address) => {
            callback(address);
        });
    },

    updateStoreInfo: (storeInfo, callback) => {
        db.Store.update(storeInfo, {
            where: {
                id: storeInfo.id
            }
        }).then((store) => {
            callback(store);
        });
    },

    deleteStore: (storeId, callback) => {
        db.Store.destroy({
            where: {
                id: storeId
            }
        });
        db.Address.destroy({
            where: {
                storeId: storeId
            }
        });
        db.Product.destroy({
            where: {
                storeId: storeId
            }
        });
    },

    addProduct: (productData, storeId, callback) => {
        productData.storeId = storeId;
        db.Product.create(productData).then((newProduct) => {
            callback(newProduct);
        });
    },

    updateProductInfo: (newProductinfo, callback) => {
        db.Product.update(newProductinfo).then((product) => {
            callback(product);
        });
    },

    getProducts: (storeId, callback) => {
        db.Product.findAll({
            where: {
                storeId: storeId
            },
            include: [db.ProductDescription]
        }).then(function(dbProduct) {
            callback(dbProduct);
        });
    },

    deleteProduct: (productId, callback) => {
        db.Product.destroy({
            where: {
                id: productId
            }
        }).then((product) => {
            callback(product);
        });
    }

};

module.exports = storeORM;