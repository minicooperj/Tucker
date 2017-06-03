var anonController = require('../controllers/anon_controller.js');
module.exports = function(app) {
    app.get('/products', anonController.getAnonProducts);
};