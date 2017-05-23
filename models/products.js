module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                Product.hasOne(models.storeProduct);
            }
        }
    });
    return Product;
}