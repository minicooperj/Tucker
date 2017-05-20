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
            defaultValue: sequelize.fn('NOW')
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
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('NOW'),
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('NOW'),
        }
    }, {
        classMethods: {
            associate: function(models) {
                Customer.hasOne(models.Address);
            }
        }
    }, {
        timestamps: false
    }, {
        classMethods: {
            associate: function(models) {
                Customer.hasOne(models.Bucket);
            }
        }
    });
    return Customer;
};