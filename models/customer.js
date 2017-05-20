module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false,
            // defaultValue: DataTypes.NOW
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        // We're saying that we want our Author to have Posts
        classMethods: {
            associate: function(models) {
                // Associating Author with Posts
                // When an Author is deleted, also delete any associated Posts
                Customer.hasOne(models.Address);
            }
        }
    });
    return Customer;
};