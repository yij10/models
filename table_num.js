'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Table_Num extends Model {
      static associate(models) {
        Table_Num.hasMany(models.Order, {
            foreignKey: 'table_num_id',
        });

        Table_Num.belongsTo(models.User, {
            foreignKey: 'handler_id',
            as: 'Handler',
        });

        Table_Num.belongsToMany(models.User, {
            through: models.User_Table,
            foreignKey: 'table_num_id',
            otherKey: 'user_id',
        });
      }
    }

    Table_Num.init({
        table_num_id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        paid: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        handler_id: {
            type: DataTypes.STRING(32),
            allowNull: true,
            references: {
                model: 'User',
                key: 'user_id',
            }
        }
    }, {
        sequelize,
        modelName: 'Table_Num',
    })

    return Table_Num;
}