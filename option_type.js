'use strict';
const {Model, Sequelize, DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Option_Type extends Model {
    static associate(models) {
      Option_Type.hasMany(models.Option, {
        foreignKey: 'option_type_id',
      });

      Option_Type.belongsToMany(models.Product, {
        through: models.Product_Option_Type,
        foreignKey: 'option_type_id',
        otherKey: 'product_id',
      });
    }
  }

  Option_Type.init({
    option_type_id: {
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
    modelName: 'Option_Type',
    tableName: 'Option_Type',
  });

  return Option_Type;
};

