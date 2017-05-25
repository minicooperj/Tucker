module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
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
                Product.belongsTo(models.ProductDescription, {
                    foreignKey: { allowNull: false }
                });
                Product.belongsTo(models.ProductDescription, {
                    foreignKey: { allowNull: false }
                });
            }
        }
    });
    return Product;
}