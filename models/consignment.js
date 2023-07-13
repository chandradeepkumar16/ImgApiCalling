'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Consignment.init({
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
    modelName: 'Consignment',
  });
  return Consignment;
};