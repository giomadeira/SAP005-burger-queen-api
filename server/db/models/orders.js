'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    
    static associate(models) {
      
      Orders.belongsTo(models.Users, {
        foreignKey: 'userId'
      })
    }
  };
  Orders.init({
    clienteName: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};