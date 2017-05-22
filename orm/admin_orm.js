var db = require('../models');
var customerORM = require('./customer_orm.js');
var storeORM = require('./store_orm.js')

// var adminORM = {
//     getAllCustomers: (callback) => {
//         customerORM.getCustomers(callback);
//     },
//     getAllStores: (callback) => {
//         storeORM.getStores(callback);
//     }
// }

module.exports = adminORM;