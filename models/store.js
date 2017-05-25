module.exports = function(sequelize, DataTypes) {
    var Store = sequelize.define("Store", {
        website: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        storeName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                validatePhone: function(value) {
                    if (!/^(13|14|15|17|18)\d{9}$/i.test(value) && !/^((\(\d{2,3}\))|(\d{3}\-)|(\d{3}))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value)) {
                        throw new Error('phone format error!')
                    };
                }
            }
        },
        pickupOption: {
            type: DataTypes.BOOLEAN,
            defaultValue: sequelize.false
        },
        deliveryOption: {
            type: DataTypes.BOOLEAN,
            defaultValue: sequelize.false
        }
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                Store.hasMany(models.Product);
            }
        }
    });
    return Store;
}