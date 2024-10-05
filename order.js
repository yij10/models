'use strict';
const TypeOverrides = require('pg/lib/type-overrides');
const {Most, Sequelize, DataTypes, Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            Order.belongsTo(model.Product, {
                foreignKey: 'product_id',
            });

            Order.belongsTo(models.Table_Num, {
                foreignKey: 'table_num_id',
            })

            Order.belongsToMany(models.Option, {
                through: models.Order_Option,
                foreignKey: 'order_id',
                otherKey: 'option_id',
            });
        }
    }

    Order.init({
        order_id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        table_num_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Table_Num',
                key: 'table_num_id',
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Product',
                key:'product_id',
            }
        },
        serve_state: {
            type: DataTypes.ENUM(
                'pending', 
                'preparing',
                'waiting for delivery',
                'completed'
            ),
            defaultValue: 'pending',
        },
        order_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        sequelize,
        modelName: 'Order',
    });

    return Order;
};