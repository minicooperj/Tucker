module.exports = function(sequelize, DataTypes) {
    var Bucket = sequelize.define('Bucket', {}, {
            timestamps: false,
            classMethods: {
                associate: function(models) {
                    Bucket.belongsTo(models.Customer, {
                        foreignKey: {
                            allowNull: false
                        }
                    });
                    Bucket.belongsTo(models.Product, {
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            }
        }

    );
    return Bucket;
}