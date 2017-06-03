var storeORM = require("../orm/store_orm.js");
var exports = module.exports = {};
exports.getAnonProducts = function(req, res) {
    storeORM.getAnonProducts(products => { res.json(products); });
}