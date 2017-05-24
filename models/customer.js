module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                isAlphanumeric: true
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                isAlphanumeric: true
            }
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('NOW'),
            validate: {
                // isDate: true
            }
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
                // validatePhone: function(value) {
                //     if (!/^(13|14|15|17|18)\d{9}$/i.test(value) && !/^((\(\d{2,3}\))|(\d{3}\-)|(\d{3}))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value)) {
                //         throw new Error('phone format error!');
                //     }
                // }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        }
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                Customer.hasOne(models.Address);
                Customer.hasOne(models.Bucket);
            }
        }
    });
    return Customer;
};