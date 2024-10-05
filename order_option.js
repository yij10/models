'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order_Option extends Model {
    static associate(models) {
    }
  }

  Order_Option.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
  },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    option_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Order_Option',
    tableName: 'Order_Option',
  });

  return Order_Option;
}