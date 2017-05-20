module.exports = function(sequelize, DataTypes) {
    var Bucket = sequelize.define('Bucket', {}, { timestamps: false }, {
            classMethods: {
                associate: function(models) {
                    Bucket.belongsTo(models.Customer, {
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            }
        }
        // , {
        //     // We're saying that we want our Author to have Posts
        //     classMethods: {
        //         associate: function(models) {
        //             // Associating Author with Posts
        //             // When an Author is deleted, also delete any associated Posts
        //             Bucket.hasMany(models.Product);
        //         }
        //     }
        // }
    );
    return Bucket;
}