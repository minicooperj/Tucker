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
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        zip_code: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5, 5]
            }
        },


    }, { timestamps: false }, {
        // We're saying that we want our Author to have Posts
        classMethods: {
            associate: function(models) {
                // An Author (foreignKey) is required or a Post can't be made
                Address.belongsTo(models.Customer, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Address;
};