module.exports = function(sequelize, DataTypes) {
    var Address = sequelize.define("Address", {
        street: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        state: {
            type: DataTypes.STRING(2),
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        },
        zip_code: {
            type: DataTypes.INTEGER(5),
            allowNull: false,
            validate: {
                isNumeric: true
            }
        }
    }, {
        timestamps: false,
        // We're saying that we want our Customer to have Address
        classMethods: {
            associate: function(models) {
                // An Customer (foreignKey) is required or a Customer can't be made
                Address.belongsTo(models.Customer, {
                    foreignKey: {
                        allowNull: false
                    }
                });
                Address.belongsTo(models.Store, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Address;
};