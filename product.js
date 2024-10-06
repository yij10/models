'use strict';
const {Model, Sequelize} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.hasMany(models.Order, {
                foreignKey: 'product_id',
            });

            Product.belongsTo(models.Category, {
                foreignKey: 'category_id',
            });

            Product.belongsToMany(models.Option_Type, {
                through: models.Product_Option_Type,
                foreignKey: 'product_id',
                otherKey: 'option_type_id',
            });
        }
    }

    Product.init({
        product_id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(64),
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(256),
            allowNull: true,
        },
        available: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Category',
                key: 'category_id',
            }
        }
    }, {
        sequelize,
        modelName: 'Product',
        tableName: 'Product',
    });

    return Product;
}