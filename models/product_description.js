module.exports = function(sequelize, DataTypes) {
    var ProductDescription = sequelize.define("ProductDescription", {
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
                ProductDescription.hasOne(models.Product);
            }
        }
    });
    return ProductDescription;
}