'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalesData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SalesData.init({
    salesid: DataTypes.INTEGER,
    userid: DataTypes.INTEGER,
    productcode: DataTypes.STRING,
    salesunits: DataTypes.INTEGER,
    salesamount: DataTypes.INTEGER,
    salesmonth: DataTypes.STRING,
    salesdate: DataTypes.DATEONLY,
    salesyear: DataTypes.INTEGER,
    salescode: DataTypes.INTEGER,
    salesmode: DataTypes.INTEGER,
    // stampedon: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'SalesData',
  });
  return SalesData;
};