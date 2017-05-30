var db = require('../models');


var storeORM = {
    addStore: (storeData, callback) => {
        db.Store.create(storeData).then((newStore) => {
            callback(newStore);
        });
    },
    addStoreAddress: (newAddress, callback) => {
        db.Address.create(newAddress).then((address) => {
            callback(address);
        })
    },
    getStores: (callback) => {
        db.Store.findAll({
            include: [db.Address]
        }).then(function(dbStores) {
            callback(dbStores);
        });
    },

    getStoreAddress: (storeId, callback) => {
        db.Address.findone({
            where: {
                storeId: storeId
            }
        }).then(function(dbAddress) {
            callback(dbAddress);
        });
    },
    updateStoreAddress: (newAddress, callback) => {
        db.Address.update(newAddress, {
            where: {
                storeId: storeId
            }
        }).then((address) => {
            callback(address);
        })
    },
    updateStoreInfo: (storeInfo, callback) => {
        db.Store.update(storeInfo, {
            where: {
                id: storeInfo.id
            }
        }).then((store) => {
            callback(store);
        })
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
    },
    addProduct: (storeId, productData, callback) => {
        storeProduct.storeId = storeId;
        db.storeProduct.create(productData).then((newProduct) => {
            callback(newProduct);
        });
    },
    updateProductInfo: (newProductinfo, callback) => {
        db.storeProduct.update(newProductinfo, {
            where: {
                productId: productId
            }
        }).then((productData) => {
            callback(product);
        })
    },
    getProducts: (callback) => {
        db.Product.findAll({
            include: [db.Product]
        }).then(function(dbProduct) {
            callback(dbProduct);
        });
    },
    deleteProduct: (productId, callback) => {
        db.storeProduct.destroy({
            where: {
                productId: productId
            }
        }).then((product) => {
            callback(product);
        });
    }

};

module.exports = storeORM;