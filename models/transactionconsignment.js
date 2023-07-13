'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactionConsignment extends Model {

    static associate(models) {
    }
  }
  transactionConsignment.init({
    orderid: DataTypes.STRING,
    orderdate: DataTypes.STRING,
    orderamount: DataTypes.STRING,
    consigneename: DataTypes.STRING,
    origincity: DataTypes.STRING,
    destinationcity: DataTypes.STRING,
    destinationstate: DataTypes.STRING,
    sentby: DataTypes.STRING,
    orderdetails: DataTypes.STRING,
    currentstatus: DataTypes.STRING,
    shipperdetails: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transactionConsignment',
  });
  return transactionConsignment;
};