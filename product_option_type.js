'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product_Option_Type extends Model {
    static associate(models) {
      // 在這裡可以定義與其他模型的關聯
    }
  }

  Product_Option_Type.init({
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    option_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Product_Option_Type',
    tableName: 'Product_Option_Type',
  });

  return Product_Option_Type;
}