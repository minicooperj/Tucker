module.exports = function(sequelize, DataTypes) {
    var storeProduct = sequelize.define("storeProduct", {
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        inStock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        discounted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: sequelize.false
        },
        discountedPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                storeProduct.belongsTo(models.Product, {
                    foreignKey: { allowNull: false }
                });
                storeProduct.belongsTo(models.Product, {
                    foreignKey: { allowNull: false }
                });
            }
        }
    });
    return storeProduct;
}