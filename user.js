'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Table_Num, {
        through: models.User_Table,
        foreignKey: 'user_id',
        otherKey: 'table_num_id',
      });
    }
  }

  User.init({   
    id: {
      type:DataTypes.STRING(32),
      primaryKey: true,
      allowNull: false,
  },
    name: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(256),
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(15),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    admin: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'User',
  });

  return User;
}