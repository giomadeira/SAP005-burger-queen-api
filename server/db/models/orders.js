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

   
    static associate(models) {
      
    }
  };
  Orders.init({
    client_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};