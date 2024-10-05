'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Product, {
        foreignKey: 'category_id',
      });
    }
  }

  Category.init({
    Category_id: {
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
    modelName: 'Category',
    tableName: 'Category',
  });

  return Category;
}