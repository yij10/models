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
        }
    }, {
        sequelize,
        modelName: 'Option',
    });

    return Option;
}