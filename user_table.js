'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User_Table extends Model {
    static associate(models) {
      
    }
  }

  User_Table.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    table_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'User_Table',
    tableName: 'User_Table',
  });

  return User_Table;
}