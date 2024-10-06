'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Option extends Model {
        static associate(models) {
            Option.belongsTo(models.Option_Type, {
                foreignKey: 'option_type_id',
            });

            Option.belongsToMany(models.Order, {
                through: models.Order_Option,
                foreignKey: 'option_id',
                otherKey: 'order_id',
            });
        }
    }

    Option.init({
        option_id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(64),
            allowNull: false,
        },
        option_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Option_Type',
                key: 'option_type_id',
            }
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        }
    }, {
        sequelize,
        modelName: 'Option',
        tableName: 'Option',
    });

    return Option;
}